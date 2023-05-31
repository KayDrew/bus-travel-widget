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


for(radio of radios){

if(radio.checked){

time=radio.value;
}

}


busFare.singleTripPrice(location,time);
busFare.singleTripNumber(points,location,time);

var roundedSinglePrice=busFare.getSingleTripPrice().toFixed(2);

pricePerSingle.innerHTML="R" + roundedSinglePrice;
singleTrips.innerHTML=busFare.getSingleTripNumber();
returnTrips.innerHTML="10";
pricePerReturn.innerHTML="10";
}

calculateBtn.addEventListener("click",calculate);