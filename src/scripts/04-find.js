import inventorList from './_data.js'
console.log("================ Task 4 -- .find() =================")

//--------------------------------------------------------------------------
//TASK : Use the Array's .find() method to return the first record 
//       where the first name and last name start with the same letter.  
//--------------------------------------------------------------------------

let inventorWithSameLetterFirstAndLast = inventorList.find(function(inventorObj){
	if( inventorObj.first.charAt(0).toUpperCase() === inventorObj.last[0].toUpperCase()){
		return true
	}

	// return inventorObj.first.charAt(0).toUpperCase() === inventorObj.last[0].toUpperCase()
})

console.log(inventorWithSameLetterFirstAndLast)

//--------------------------------------------------------------------------
//TASK : User the Array's find() method to return the first record 
//       where the last name is as long as the number of awards. 	 
//--------------------------------------------------------------------------

let awardsAndLastNameEqualObj = inventorList.find(function(inventorObj){
	if(inventorObj.first.length === inventorObj.awards.length){
		return true
	}

})

console.log(awardsAndLastNameEqualObj)