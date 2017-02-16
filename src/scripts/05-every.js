import inventorList from './_data.js'
console.log("================ Task 5 -- .every() =================")

//--------------------------------------------------------------------------
//TASK : Use the Array .every() method to determine if all inventors born after
//       1800 earned an award 
//--------------------------------------------------------------------------

let haveAwardAfter1800 = inventorList.every(function(inventorObj){
	if(inventorObj.dob >= 1800 && inventorObj.awards.length === 0){
		return false
	} else{
		return true
	}
})

console.log(haveAwardAfter1800)

//--------------------------------------------------------------------------
//TASK : Use the Array .every() method to determine whether the last name of each
//       inventor is longer than the number of awards they received.
//--------------------------------------------------------------------------

let allLastNamesAreLongerThanAwards = inventorList.every(function(inventorObj){
	if( inventorObj.awards.length >= inventorObj.last.length ){
		return false
	} else {
		return true
	}
})

console.log(allLastNamesAreLongerThanAwards)
