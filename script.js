const geniuses = [
    { first: 'Albert', last: 'Einstein', year: 1879, died: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, died: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, died: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, died: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, died: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, died: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, died: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, died: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, died: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, died: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, died: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, died: 1909 }
  ];


  const fifteens =geniuses.filter( genius=>
    {return (genius.year >= 1500) &&  (genius.year <= 1599)}
).map((genius)=> `Name:  ${genius.first} ; year:  ${genius.year}`);
let newFifteens= JSON.stringify(fifteens);

const names = geniuses.map(genius=>`${genius.first} ${genius.last}`)

//sorted from oldest to youngest
const sortedBirthdays = geniuses.sort((a,b)=>a.year>b.year?1:-1  );
let newSortedBirthdays=  JSON.stringify(sortedBirthdays) 
//console.log(sortedBirthdays);

// total ages altogether
const reduceGeniuses = geniuses.reduce((total,curr)=>
{return total+(curr.died-curr.year)},0)


// 5. Sort the inventors by years lived
const yearSort= geniuses.sort((a,b)=>{
const prev= a.died-a.year;
const curr= b.died-b.year;
return prev>curr? 1: -1;
})
let newYearSort=  JSON.stringify(yearSort) 



const  select = document.querySelector('select');
const displayP = document.querySelector('p');

select.addEventListener('change', displayFunction);

function displayFunction(){
const choice = select.value;
switch (choice){
case 'listOfInventors':
displayP.textContent=`${names}`;
break;
case 'born':
displayP.textContent=`${newFifteens}`;
break;
case 'ages':
displayP.textContent=`${newSortedBirthdays}`;
break;
case 'total':
displayP.textContent=`Total: ${reduceGeniuses}`;
break;
case 'sorted':
displayP.textContent=`${newYearSort}`;
break;
default :
displayP.textContent='';
}
}