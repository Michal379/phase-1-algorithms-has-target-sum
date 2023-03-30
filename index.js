function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbers={};
for(const number of array){ 
  const complement=target-number;
  if(numbers[complement])return true;
  numbers[number]=true;
}
return false;
}

/* 
  Write the Big O time complexity of your function here
i'll be using the linear time to loop though the array
i should have o(n) after dropping the constant
*/

/* 
  Add your pseudocode here
  if(hasTargetSum=([5 ,7, 12, 9 ,8, 2], 20)){
  return true
 }
}
*/

/*
  Add written explanation of your solution here
  i'm writting a function that takes two arguments of an array and a target
  if any pair in the array equals to the target number, 
  function returns true, 
  
*/
// You can run `node index.js` to view these console logs
//run either npm test to see all tests are passing
//or learn lab 
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));


  console.log("Expecting: true");
  console.log("=>, hasTargetSum([5 ,7, 12, 9 ,8, 2], 20);")
}

module.exports = hasTargetSum;
