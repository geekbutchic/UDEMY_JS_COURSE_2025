let age = 34;

// THIS CAN BE REFERRED AS REASSIGNING A VARIABLE OR MUTATE
age = 35;

const birthYear = 1984;
//birthYear = 1886; // TypeError : Assignment to constant variable

// BEST PRACTICE TO USE CONST AND ONLY USE LET IF VARIABLE NEEDS TO CHANGE.

var job = "programmer";
job = "teacher";

console.log(job);

// THINGS TO KNOW LET IS BLOCK SCOPED AND VAR IS FUNCTION SCOPED.

/* 
ASSIGNMENT : LET, CONST, VAR

1. SET THE VALUE OF 'LANGUAGE' TO THE LANGUAGE SPOKEN WHERE YOU LIVE.

2. THINK ABOUT WHICH VARIABLES SHOULD BE CONST VARIABLES.  THEN CHANGE THESE VARIABLES TO CONST.

3. TRY TO CHANGE ONE OF THE CHANGED VARIABLES NOW, AND OBSERVE WHAT HAPPENS.

*/

const language = 'English';

language = 'Spanish';

console.log(typeof language);// TypeError 

