function removeExpiredTiles_Improved() {
    const grids = document.querySelectorAll('.tile-grid'); // Get all tile-grid elements
    const now = new Date();
    const removedTiles = []; // Array to store titles of removed tiles

    grids.forEach(grid => {
        const tiles = grid.querySelectorAll('text-tile');

        tiles.forEach(tile => {
            let deadline = null;

            // Check for a fixed deadline
            if (tile.dataset.deadlineDate) {
                deadline = new Date(tile.dataset.deadlineDate);
            }
            // Check for a relative deadline
            else if (tile.dataset.webinarDate && tile.dataset.deadlineOffsetHours) {
                deadline = new Date(tile.dataset.webinarDate);
                const hours = parseInt(tile.dataset.deadlineOffsetHours, 10);
                deadline.setHours(deadline.getHours() - hours);
            }
            // Check if 6 months have passed since the block was added
            else if (tile.dataset.addedDate) {
                const addedDate = new Date(tile.dataset.addedDate);
                const sixMonthsLater = new Date(addedDate);
                sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

                if (now > sixMonthsLater) {
                    deadline = sixMonthsLater; // Treat this as a deadline
                }
            }

            // Remove the tile if the deadline has passed
            if (deadline && now > deadline) {
                const title = tile.getAttribute('title'); // Get the title of the tile
                removedTiles.push(title); // Add the title to the removedTiles array
                tile.remove(); // Remove the tile from the DOM
            }
        });

        // // Remove the grid if it is empty
        // if (grid.querySelectorAll('text-tile').length === 0) {
        //     grid.remove();
        // }
    });

    // Notify the user about removed tiles
    if (removedTiles.length > 0) {
        generateRemovalReport(removedTiles);
    }

    // Step 2: Collect all remaining tiles
    const allTiles = Array.from(document.querySelectorAll('text-tile'));

    // sorting tile based on the data-deadline-date attribute 
    allTiles.sort((a, b) => {
        const deadlineA = a.dataset.deadlineDate ? new Date(a.dataset.deadlineDate).getTime() : Infinity;
        const deadlineB = b.dataset.deadlineDate ? new Date(b.dataset.deadlineDate).getTime() : Infinity;
        return deadlineA - deadlineB;
    });

    // Step 3: Redistribute tiles across grids
    grids.forEach(grid => {
        // Clear the current grid
        grid.innerHTML = '';

        // Add up to 2 tiles to the current grid
        for (let i = 0; i < 2; i++) {
            if (allTiles.length > 0) {
                const tile = allTiles.shift(); // Take the first tile from the list
                grid.appendChild(tile); // Add it to the current grid
            }
        }

        // Remove the grid if it remains empty
        if (grid.querySelectorAll('text-tile').length === 0) {
            grid.remove();
        }
    });

    // Step 4: Create new grids if there are leftover tiles
    const container = document.querySelector('.tile-grid-container'); // Assuming a parent container for all grids
    while (allTiles.length > 0) {
        const newGrid = document.createElement('div');
        newGrid.classList.add('tile-grid');

        // Add up to 2 tiles to the new grid
        for (let i = 0; i < 2; i++) {
            if (allTiles.length > 0) {
                const tile = allTiles.shift();
                newGrid.appendChild(tile);
            }
        }

        container.appendChild(newGrid); // Add the new grid to the container
    }
        
    // Reinitialize all TextTile elements
    const allTextTiles = document.querySelectorAll('text-tile');
    allTextTiles.forEach(tile => {
        if (typeof tile.connectedCallback === 'function') {
            tile.connectedCallback(); // Re-trigger the connectedCallback logic
        }
    });
}

// Function to generate a downloadable report
function generateRemovalReport(removedTiles) {
    // Check if the user is an admin based on the URL query parameter
    const isAdmin = new URLSearchParams(window.location.search).get('13082025') === 'true';

    if (!isAdmin) {
        return; // Exit the function if the user is not an admin
    }

    const reportContent = `Tiles to be removed:\n\n${removedTiles.join('\n')}`;
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a hidden download link
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'removed_tiles_report.txt';
    downloadLink.style.display = 'none';

    // Append the link to the document and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

document.addEventListener('DOMContentLoaded', () => {
    removeExpiredTiles_Improved();
});
