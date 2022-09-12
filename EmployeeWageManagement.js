console.log("welcome to employee wage:");
//UC1 : Checking employee is present or not 
const IS_ABSENT=0;
let empCheck=Math.floor(Math.random()*10) %3;
{
    if(empCheck==IS_ABSENT){
        console.log("Employee is Absent");
    }else{
        console.log("Employee is precsent");
    }
}