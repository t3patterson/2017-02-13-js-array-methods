import inventorList from './_data.js'

function reduce(arr, cb, startingVal){
	var accumulatedVal = startingVal
	for (var i = 0 ; i < arr.length ; i++){
		accumulatedVal = cb(accumulatedVall, arr[i], i, arr)
	}
	return reducedVal
}

console.log("================ Task 7 -- .reduce() =================")


//--------------------------------------------------------------------------
// TASK : Use the Array .reduce() method  to return the SUM of the number of awards
//--------------------------------------------------------------------------

let totalAwards = inventorList.reduce( function( accumulatedVal, inventorObj, index, theArray  ){
	let newTotal = accumulatedVal + inventorObj.awards.length
	return newTotal	
},0)

console.log(totalAwards)

//--------------------------------------------------------------------------
// TASK : Use the Array .reduce() method to return the AVERAGE number of awards per
//        inventor
//--------------------------------------------------------------------------

//WAY 1 
let averageAwards = inventorList.reduce( function(accumulatedAvg, inventorObj, index, theArray){
	let awardsCount =  inventorObj.awards.length
	let avgAwards =  (( awardsCount ) + (index * accumulatedAvg)) / (index + 1)
	return avgAwards
}, 0)

let averageAwards_Otro = inventorList.reduce( function(accumulatedSum, inventorObj, index, theArray){
	let awardsCount =  inventorObj.awards.length
	let newTotalSum = accumulatedSum + awardsCount
	
	//on the last element of the array, return the average
	if(index === theArray.length - 1){
		return newTotalSum / theArray.length
	} else {
	   // return the total sum to the next iteration's callback
		return newTotalSum
	}
	
}, 0)

console.log(averageAwards)
console.log(averageAwards_Otro)

//--------------------------------------------------------------------------
// TASK : Use .map() , .filter() , .reduce() , 
//  to create a concatenated string of all the last names 5 or shorter
//--------------------------------------------------------------------------

let superFilteredLongString = inventorList
	.filter(function(inventorObj){ return inventorObj.last.length <= 5 }) // filtered list of objects
	.map(function(inventorObj){ return inventorObj.last }) // transfromed to array of strings
	.reduce(function( accumVal ,inventorLastNameStr ){ return `${inventorLastNameStr} ${accumVal}`  } , '') 
       // reduced to one string

console.log(superFilteredLongString)