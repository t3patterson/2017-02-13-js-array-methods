import inventorList from './_data.js'
console.log("================ Task 6 -- .some() =================")

//--------------------------------------------------------------------------
//TASK : Use the Array .some() method to see if any of the inventors born before
//       1800 received an award  
//--------------------------------------------------------------------------

var hasAwardBefore1800 = inventorList.some(function(inventorObj){
	if(inventorObj.dob < 1800  && inventorObj.awards.length > 0 ){
		return true
	} else {
		return false
	}
})

console.log(hasAwardBefore1800)

//--------------------------------------------------------------------------
//TASK : Use the Array .some() method to determine if NONE of the first name 
//       lengths are equal in length to the last name lengths

//     ASSERTION : None of the first name lengths equal the last name lengths
//--------------------------------------------------------------------------

let hasEqualLastAndFirstEqual = inventorList.some(function(inventorObj){
	if(inventorObj.last.length === inventorObj.first.length){
		return true
	}	else {
		return false
	}
})
let noneHasEqualLastAndFirstEqual = !hasEqualLastAndFirstEqual

console.log('NONE of the fisrst name lenghts equal the last in the set -- ', noneHasEqualLastAndFirstEqual )