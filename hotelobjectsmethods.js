var hotel = {
    name: "Vacation",
    rating: 5,
    roomsBookedCount: 0,
    roomNumbersBooked: [],
    //totalRooms: 8,
    roomRate: 35.00,
    roomType: "Twin",
    roomNumbers: ["101", "102", "103", "104", "105", "106", "107", "108"],
    // Returning the length of the array    
    totalRooms: function() {
        return this.roomNumbers.length;
        //},
        // roomsAvailable: function() {
        // return this.totalRooms() - this.roomsBookedCount;
    },
    //Taking the first room off of the array and placing it into an empty array. 
    bookRoom: function() {
        this.roomNumbersBooked = this.roomNumbersBooked.unshift(this.roomNumbers.splice(0,1));
        this.roomsBookedCount++;

    }
};

//Take out the string in the roomNumbersBooked poroperty, and put it back into the roomNumbers property and minus the roomsBookedCount
//recount: function() {
   // this.roomNumbers.unshift(this.roomNumbersBooked.splice(0));
   // this.roomsBookedCount--;
   // return this.roomNumbers.length;
//}


//};

//console.log("There are", hotel.totalRooms(), "rooms in the", hotel.name, "Hotel.");
//console.log(hotel.roomsAvailable());
//console.log("Room", hotel.roomNumbers[0], "was booked so there are", hotel.bookRoom(), "rooms available and", hotel.roomsBookedCount, "room booked.");
//console.log("There are", hotel.bookRoom(), "rooms available and", hotel.roomNumbersBooked);
//console.log("There is",hotel.bookedCount(),"room booked.");
//console.log("A room has become available so there are now", hotel.recount(), "available rooms and", hotel.roomNumbersBooked.length, "bookings.");
//console.log(hotel.roomNumbers[0]); // Check if it was back in the array
//console.log(hotel.roomsBookedCount); //Update room count check
console.log(hotel.bookRoom());
console.log(hotel.roomNumbers);
console.log(hotel.roomNumbersBooked);
