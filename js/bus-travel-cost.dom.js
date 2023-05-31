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

for(radio of radios){

if(radio.checked){

time=radio.value;
}

}

busFare.singleTripPrice(location,time);

pricePerSingle.innerHTML="R" + busFare.getSingleTripPrice();
singleTrips.innerHTML="10";
returnTrips.innerHTML="10";
pricePerReturn.innerHTML="10";
}

calculateBtn.addEventListener("click",calculate);