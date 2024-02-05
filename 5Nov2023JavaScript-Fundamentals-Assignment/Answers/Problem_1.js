/*Question : Explain the usage of Ternary Operator with syntax ? 

Answer : Ternary operator is a conditional operator which evaluates One of two expressions – a truthy expression and a falsy expression – based on a conditional expression that we provide.

Syntax : condition ? trueExpression : falseExpression
*/
 
// write a program to check whether the number is even or odd using the ternary operator.

const num = 4;

const result = (num%2 != 0) ? "odd": "even";
console.log(`Number is  ${result}`);