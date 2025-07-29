
function insert_Row() {
    const sampleTable = document.getElementById("sampleTable");
    const newrow = document.createElement('tr');

    // Create two new cells
    const firstCell = document.createElement('td');
    firstCell.textContent = 'New Cell1'; // Set the text for the first cell
    
    const secondCell = document.createElement('td');
    secondCell.textContent = 'New Cell2'; // Set the text for the second cell

    // Append cells to the new row
    newrow.appendChild(firstCell);
    newrow.appendChild(secondCell);

    // Insert the new row at the top of the table
    sampleTable.insertBefore(newrow, sampleTable.firstChild);
}
