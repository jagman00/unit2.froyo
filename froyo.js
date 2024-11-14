//prompt user for froyo flavors
const userInputFlavors = prompt("Please enter some froyo flavors separated by commas");

//split the string of flavors into an array
const flavorArray = userInputFlavors.split(",");

//function
function countFlavors(arr){
    const flavorStats = {}
    for (i=0; i<arr.length; i++){
        if (flavorStats.hasOwnProperty(arr[i])){
            flavorStats[arr[i]] += 1;
        }else{
            flavorStats[arr[i]] = 1;
        }
    }
    return flavorStats;
}

//log outout of flavors
console.log(countFlavors(flavorArray));