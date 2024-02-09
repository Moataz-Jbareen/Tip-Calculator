function calculateTip(){

    const billAmountInput=document.getElementById("bill");
    const serviceRating=document.getElementById("serviceRating");
    const splitCountInput=document.getElementById("people");
    const mealType=document.getElementById("mealtype");


    const tipAmountOutput=document.getElementById("tip");
    const totalAmountOutput=document.getElementById("totalAmount");
    const amountPerPersonOutput=document.getElementById("amountPerPerson");


    const billAmount=parseFloat(billAmountInput.value);
    const serviceRatingValue=parseFloat(serviceRating.value);
    const splitCount = parseInt(splitCountInput.value);
    const mealType1=mealType.value;

if(isNaN(billAmount) || isNaN(serviceRatingValue) || isNaN(splitCount)){

    alert("Please fill all the fields with a valid numbers")
    return;
}
let tip;
switch(serviceRatingValue){
        case 1: tip = billAmount*0.05; break;
        case 2: tip = billAmount*0.10; break;
        case 3: tip = billAmount*0.15; break;
        case 4: tip = billAmount*0.20; break;
}



if(mealType1==="dinner"){
    tip+=5;
   
}
let totalAmount=billAmount+tip;
let amountPerPerson=totalAmount/splitCount;

tipAmountOutput.textContent=`Tip: ${tip.toFixed(2)}`;
totalAmountOutput.textContent=`Total Amount: ${totalAmount.toFixed(2)}`;
amountPerPersonOutput.textContent=`Amount Per Person: ${amountPerPerson.toFixed(2)}`;
}


const calculateBtn = document.getElementById("calculate").addEventListener("click",calculateTip);