function insert_Row() {
    //Write your code here
	const sampleTable=document.getElementById("sampleTable")
  const newrow=document.createElement('tr');

	for(let i=0;i<2;i++)
		{
			const newcol=document.createElement('td');
					newcol.textContent=`New Cell${i+1}`;
			newrow.appendChild(newcol)
		}  
	sampleTable.appendChild(newrow)
}
