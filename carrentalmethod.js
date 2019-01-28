var cars = {
    carsBooked: [],
    carsAvailable: ["Rolls Royce", "Ferrari", "Maserati", "Lamborghini", "Bugatti" ],
//Gets a number on how long the array is
    numberOfCarsAvailable: function() {
        return this.carsAvailable.length;
    },
    numberOfCarsBooked: function() {
        return this.carsBooked.length;
    },
//Takes the length of the array and says if its less than 0 take a random number in the array out, and put it into the
//the empty array
    bookCars: function() {
        if(this.numberOfCarsAvailable() > 0) {
            var randomCar = this.carsAvailable[Math.floor(Math.random()* this.carsAvailable.length)];
            this.carsAvailable.splice(this.carsAvailable.indexOf(randomCar), 1);
            this.carsBooked.push(randomCar);
            
        }
    },
    keepBooking: function() {
        var i;
        for(i=1;this.numberOfCarsAvailable() > i; i++) {
            var randomCar = this.carsAvailable[Math.floor(Math.random()* this.carsAvailable.length)];
            this.carsAvailable.splice(this.carsAvailable.indexOf(randomCar), 1);
            this.carsBooked.push(randomCar);
        
        }
    
}
};
console.log(cars.keepBooking());
console.log(cars.carsAvailable);
console.log(cars.carsBooked);