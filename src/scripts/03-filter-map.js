import inventorList from './_data.js'
console.log( "================ Task 3 -- .filter().map() =================" )

//--------------------------------------------------------------------------
//TASK  : Chain the .filter() method to the .map() method  and return an 
//        array of strings with the names of the inventors with 5 or more 
//        awards
//--------------------------------------------------------------------------

let veryHonoredInventorNames = inventorList
	.filter(function(inventorObj){
		if(inventorObj.awards.length >= 5) {
			return true
		}
	}).map(function(inventorObj){
		return `${inventorObj.first} ${inventorObj.last}`
	})

console.log(veryHonoredInventorNames)