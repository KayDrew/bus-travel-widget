/*
function to calculate  cost price
-take a parameter  for the destination 
-check whether  it is peak hour 
-add 25% to normal  price  if it's  peak hour. do not add if it's  not

function  to  calculate  the total number of trips
-take a parameter  for the destination 
- take second parameter  for the number of points
- check whether it is peak-hour
-add 25% to cost price if it's  peak hour 
-calculate  total number of trips 

function  to calculate the number of return trips
-take a parameter  for the destination 
- take second parameter  for the number of points
- check whether it is peak-hour
-add 25% to cost price if it's  peak hour 
-calculate  total number of trips 

function  to  calculate cost per return  trip
--take a parameter  for the destination 
-check whether  it is peak hour 
-add 25% to normal  price  if it's  peak hour. do not add if it's  not
**/

function  calculateFare(){

let pricePerSingleTrip=0;
let numberOfSingleTrips=0;
let pricePerReturnTrip=0;
let numberOfReturnTrips=0;
let returnTrip=false;

function  singleTripPrice(location,time){
	
	if(location && time){
		
if(location==="Khayelitsha"){
	
	if(time==="peak"){
		pricePerSingleTrip=40+(40*0.25);

}

else if(time==="off-peak"){
	pricePerSingleTrip=40;

}


}

if(location==="Dunoon"){
	
	if(time==="peak"){
pricePerSingleTrip=25+(25*0.25);
}

else if(time==="off-peak"){
pricePerSingleTrip=25;
}
}

if(location==="Mitchels Plain"){
	
	if(time==="peak"){
pricePerSingleTrip=30+(30*0.25);
}

else if(time==="off-peak"){
pricePerSingleTrip=30;
}
}
}

}

function getSingleTripPrice(){
	
return pricePerSingleTrip;

}

function singleTripNumber(points,location,time){
	
	if(points && location && time){
		
		if(location==="Khayelitsha"){
	
	if(time==="peak"){
		
	numberOfSingleTrips =Math.floor(points/(40+(40*0.25)));
	

}

else if(time==="off-peak"){
numberOfSingleTrips = Math.floor(points/40);
}

}

if(location==="Dunoon"){
	
	if(time==="peak"){
numberOfSingleTrips = Math.floor(points/(25+(25*0.25)));
}

else if(time==="off-peak"){
numberOfSingleTrips = Math.floor(points/25);
}
}

if(location==="Mitchels Plain"){
	
	if(time==="peak"){
numberOfSingleTrips = Math.floor(points/(30+(30*0.25)));
}

else if(time==="off-peak"){
numberOfSingleTrips = Math.floor(points/30);
}
}

}
}


function getSingleTripNumber(){

return numberOfSingleTrips;
}

function returnTripPrice(location,time,returnTrip){
if(location && time && returnTrip){
	
	if(location==="Khayelitsha" && returnTrip===true){
	
	if(time==="peak"){
		
pricePerReturnTrip=((40+(40*0.25))*2).toFixed(2);
}

else if(time==="off-peak"){
pricePerReturnTrip=40*2;
}

}

if(location==="Dunoon" && returnTrip===true){
	
	if(time==="peak"){
pricePerReturnTrip=((25+(25*0.25))*2).toFixed(2);
}

else if(time==="off-peak"){
pricePerReturnTrip=25*2;
}
}

if(location==="Mitchels Plain" && returnTrip==true){
	
	if(time==="peak"){
pricePerReturnTrip=((30+(30*0.25))*2).toFixed(2);
}

else if(time==="off-peak"){

pricePerReturnTrip=30*2;
}

}
}
}

function getReturnTripPrice(){

return pricePerReturnTrip;

}

function returnTripNumber(points,location,time){
if(location && time){

if(location==="Khayelitsha"){
	
	if(time==="Peak"){

}

else if(time==="Off-Peak"){

}

}

if(location==="Dunoon"){
	
	if(time==="Peak"){

}

else if(time==="Off-Peak"){

}
}

if(location==="Mitchels Plain"){
	
	if(time==="Peak"){

}

else if(time==="Off-Peak"){

}

}
}
}

return {

singleTripPrice,
singleTripNumber,
returnTripPrice,
returnTripNumber,
getSingleTripPrice,
getSingleTripNumber,
getReturnTripPrice
}

}