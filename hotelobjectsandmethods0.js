var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    amountBooked: 0,
    roomRate: 325.00,
    roomType: "King/Queen",
    roomNumberAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],

    numberOfRoomsAvailable: function() {
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
        if (this.numberOfRoomsAvailable() > 0) {
            //select a random room
            var randomRoom = this.roomNumberAvailable[Math.floor(Math.random() * this.roomNumberAvailable.length)];

            this.roomNumbersBooked.unshift(this.roomNumberAvailable.splice(this.roomNumberAvailable.indexOf(randomRoom), 1)[0]);
            this.amountBooked++;



        }
    },
    checkOut: function() {
        if (this.numberOfRoomsBooked() > 0) {
            var randomRoom = this.roomNumbersBooked[Math.floor(Math.random() * this.roomNumbersBooked.length)];
            this.roomNumberAvailable.unshift(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(randomRoom), 1[0]));
            this.amountBooked--;

        }

    }




};
