import inventorList from './_data.js'
console.log("================ Task 2 -- .filter() =================")

//--------------------------------------------------------------------------
//TASK : Use the Array .filter() method to return a filtered list of the inventors 
//       with no awards
//--------------------------------------------------------------------------

let noAwardInventorList = inventorList.filter(function(inventorObj){
	// console.log(inventorObj);
	// console.log('---')
	if(inventorObj.awards.length === 0){
		
		return true
	} 

})

console.log(noAwardInventorList)

//--------------------------------------------------------------------------
//TASK  : Use the Array .filter() method to return the inventors born in the 18th century
//--------------------------------------------------------------------------

let inventorsFrom18th = inventorList.filter( function(inventorObj){
	if( inventorObj.dob >= 1700 &&  inventorObj.dob < 1800 ){
		return true
	}
})

console.log(inventorsFrom18th)

