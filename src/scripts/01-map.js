import inventorList from './_data.js'

console.log("================ Task 1 -- .map() =================")

//--------------------------------------------------------------------------
//TASK :  Use the .map() to return an array of the first names of all the inventors  
//--------------------------------------------------------------------------

let firstNamesArray = inventorList.map( function(inventorObj) {
	return inventorObj.first
})

console.log(firstNamesArray)