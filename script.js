It looks like there might be a misunderstanding or an issue with how the new row is being inserted into the table. The expected output for your test case is that the first cell should contain exactly New Cell1 and the second cell should contain New Cell2. However, you’re seeing New Cell1 rowcell, which suggests that there might be some unintended behavior or additional text being appended to the cell.

Here’s How to Debug and Fix This:
Check for Other JavaScript Interference: Ensure that there are no other scripts that are modifying the contents of the cells after your insert_Row function runs. If there are any event listeners or other functions that manipulate the table, they might be causing the issue.

Inspect the Table After Insertion: After you click the button, use the browser’s developer tools to inspect the table. Check the HTML structure of the newly added row to see if it contains any unexpected content.

Modify Your Function for Clarity: Here’s a refined version of your insert_Row function to ensure that it only adds the intended text:

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
