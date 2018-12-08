var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    amountBooked: 0,
    roomType: "King/Queen",
    roomNumberAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],

    numberOFRoomsAvailable: function() {
        return this.roomNumberAvailable.length;
    },

    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;

    },
    //avilable room + booked rooms
    numberOfRooms: function() {
        return this.roomNumberAvailable.length + this.roomNumbersBooked.length;
    },
    bookRoom: function() {
        if (this.numberOFRoomsAvailable() > 0) {
            //select a random room
            var randomRoom = this.roomNumberAvailable[Math.floor(Math.random() * this.roomNumberAvailable.length)];
            //this.roomNumberAvailable.splice(this.roomNumberAvailable.indexOf(randomRoom),1);
            //Different Ways
            this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumberAvailable.splice(this.roomNumberAvailable.indexOf(randomRoom), 1));
            this.amountBooked++;
            


        }
    }



};
