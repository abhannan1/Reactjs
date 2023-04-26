const udemy = "udemy"

console.log(Array.from(udemy))
// will return array of ["u","d","e","m","y"]

//used in pagination 

//will return the nodeList of all .text type elements
// const text = document.querySelectorAll(".text")

//will convert it in array and all array methods can be used
// const newText = Array.from(test).find((item)=>item.textContent === "person")


//const items = Array.from({length:120}) //creates array with 120 items

//2nd item is a callBack function just like map method,
// first is item in array, second is index

const items = Array.from({length:120},(_,index)=>{
    return index
}) 

const itemsPerPage = 8;

const pages = Math.ceil(items.length / itemsPerPage)

//array that has my pages and that will have 9 arrays and
// each of that array is going to contain some items from the items array

//to create array of arrays
const newItem = Array.from({length:pages},(_,index)=>{
     const start = index*itemsPerPage;
     //each iteration will increase by 14
     const tempItems = items.slice(start,start+itemsPerPage)
     return tempItems
})

console.log(newItem)