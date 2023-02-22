
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0)console.log(i);
    
}

//document.getElementById("demo").innerHTML = 5 + 6;

let i = 0;
while(i<=5){
    if (i % 2 === 0) console.log(i);
    i++;
}

i=0;
do{
    if (i % 2 !== 0) console.log(i);
    i++; 
}while (i<=5)

//for in loop
const person = {
  name: 'Mosh',
  age: 30
}

for(let key in person)
console.log(key, person[key]);


// for of loop
const colors = ['red', 'green', 'bliue']

for(let index of colors)
console.log(index, colors[index])


// break and continue statements

i = 0;
while (i <= 10){

    if (i === 5) break;

    if(i % 2 === 0){
        i++;
        continue;
    }

    console.log(i);
    i++;
}



