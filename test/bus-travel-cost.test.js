describe("The bus travel widget", function () {
let busFare= calculateFare();
it("should calculate  the cost for a single trip for peak hours",function(){

busFare.singleTripPrice("Khayelitsha","peak");

assert.equal(50,busFare.getSingleTripPrice());

busFare.singleTripPrice("Dunoon","peak");

assert.equal(31.25,busFare.getSingleTripPrice());
});

it("should calculate  the cost for a single trip for off-peak hours",function(){

busFare.singleTripPrice("Mitchels Plain","off-peak");

assert.equal(30,busFare.getSingleTripPrice());

busFare.singleTripPrice("Dunoon","off-peak");
assert.equal(25,busFare.getSingleTripPrice());

});

it("should calculate  the cost for a return trip for peak hours",function(){
	
busFare.returnTripPrice("Mitchels Plain","peak",true);
assert.equal(75,busFare.getReturnTripPrice());

busFare.returnTripPrice("Khayelitsha","peak",true);
assert.equal(100,busFare.getReturnTripPrice());

});

it("should calculate  the cost for a return trip for off-peak hours",function(){
	
busFare.returnTripPrice("Dunoon","off-peak",true);
assert.equal(50,busFare.getReturnTripPrice());

busFare.returnTripPrice("Khayelitsha","off-peak",true);
assert.equal(80,busFare.getReturnTripPrice());
});

it("should calculate  the total number  of single trips for peak hours",function(){
	
busFare.singleTripNumber(100,"Mitchels Plain","peak");
assert.equal(2,busFare.getSingleTripNumber());

busFare.singleTripNumber(100,"Dunoon","peak");
assert.equal(3,busFare.getSingleTripNumber());
});

it("should calculate  the total number  of single trips for off-peak hours",function(){

busFare.singleTripNumber(300,"Khayelitsha","off-peak");
assert.equal(7,busFare.getSingleTripNumber());

busFare.singleTripNumber(200,"Mitchels Plain","off-peak");
assert.equal(6,busFare.getSingleTripNumber());

});

it("should calculate  the total number  of return trips for peak hours",function(){
	
busFare.returnTripNumber(70,"Dunoon","peak",true);
assert.equal(1,busFare.getReturnTripNumber());

busFare.returnTripNumber(190,"Khayelitsha","peak",true);
assert.equal(1,busFare.getReturnTripNumber());
});

it("should calculate  the total number  of return trips for off-peak hours",function(){

busFare.returnTripNumber(120,"Dunoon","off-peak",true);
assert.equal(2,busFare.getReturnTripNumber());

busFare.returnTripNumber(190,"Khayelitsha","off-peak",true);
assert.equal(2,busFare.getReturnTripNumber());

});



});