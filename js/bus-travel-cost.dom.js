let enterPoints=document.querySelector ("#points");
let place=document.querySelector ("#place");
let radios=document.querySelectorAll("input[name='time'] ");
let checkbox=document.querySelector ("#check");
let calculateBtn=document.querySelector ("#calculate");
let singleTrips=document.querySelector ("#text1");
let pricePerSingle=document.querySelector ("#text2");
let returnTrips=document.querySelector ("#text3");
let pricePerReturn=document.querySelector ("#text4");

let busFare= calculateFare();

function calculate(){

let time="";
let location=place.value;
let points=Number(enterPoints.value);
let isChecked=checkbox.checked;

for(radio of radios){

if(radio.checked){

time=radio.value;
}

}


busFare.singleTripPrice(location,time);
busFare.singleTripNumber(points,location,time);
busFare.returnTripPrice(location,time,isChecked);
busFare.returnTripNumber(points,location,time,isChecked);

var roundedSinglePrice=busFare.getSingleTripPrice().toFixed(2);

pricePerSingle.innerHTML="R" + roundedSinglePrice;
singleTrips.innerHTML=busFare.getSingleTripNumber();
returnTrips.innerHTML=busFare.getReturnTripNumber();
pricePerReturn.innerHTML="R"+ busFare.getReturnTripPrice();
}

calculateBtn.addEventListener("click",calculate);