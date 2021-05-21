/* We start by declaring the function */
/* Question 1 */
function convertFahrToCelsius(val) {
 
    if(typeof val == "String" || typeof val === "number") {
           
        var num = parseInt(val);
      
        var answer = ((num - 32) / 1.8);
        var answerDec = answer.toFixed(4);
            return `'${answerDec}'` };
    if(Array.isArray(val))
        {return `[${val}] is not a valid number but a/an array.` };
    if(typeof val === "object") {
         var value = JSON.stringify(val)
         return `${value} is not a valid number but a/an object.`}



}
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius({obj:1 , name: "olumide"}));

/* Question 2 */

function checkYuGioh(n) {
    if(typeof n === "number") {
      var answer = babs(n);
      return answer;
    }

    if (typeof n === "string") {
        var num = parseInt(n);
        if(isNaN(num)) {
        // Var content = JSON.strignify(num)
        return `invalid parameter: "${n}"`
        }
        else if (!isNaN(num)){
           var answer = babs(num);
           return answer;
        }
    }

    if(typeof n === "boolean" || typeof n === "object" || typeof n === "undefined" ||
    Array.isArray(n) || typeof n === "function") {
        var content = JSON.stringify(n);
        return `invalid parameter: "${content}"`
    }
}
// This is where the function checkYuGioh ends 

// here we create another function lets say babs 
function babs(num) {
    var arr = [];
    for(var i=1; i<=num; i++) {
       if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
           arr.push("yu-gi-oh");
         }
         else if(i % 2 === 0 && i % 3 === 0){
            arr.push("yu-gi");
         }
         else if(i % 2 === 0 && i % 5 === 0){
             arr.push("yu-oh");
         }
         else if(i % 3 === 0 && i % 5 === 0){
             arr.push("gi-oh");
         }
         else if(i % 2 === 0){
             arr.push("yu");
         }
         else if(i % 3 === 0){
             arr.push("gi");
         }
         else if(i % 5 === 0){
             arr.push("oh");
         }
         else {arr.push(i)}
     }
     return arr;
}

console.log(checkYuGioh(29));
console.log(checkYuGioh("29"));
console.log(checkYuGioh("olumide"));
console.log(checkYuGioh([1,2,3,4]));
console.log(checkYuGioh({name: "olumide", age: 26}));