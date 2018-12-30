var books = {
    libraryName: "Larrys Book Place",
    daysCheckOut: 5,
    booksCheckedOut: [],
    bookLog: ["Think Like A Man", "Harry Potter: Chamber of Secrets", "Night", "Moby Dick", "Of Mice & Men"],

    amountOfBooksAvailable: function() {
        return this.bookLog.length;
    },

    amountOfBooksCheckOut: function() {
        return this.booksCheckedOut.length;
    },

    booksAvailable: function() {
        if (this.amountOfBooksAvailable() > 0) {
            var randomBook = this.bookLog[Math.floor(Math.random() * this.bookLog.length)];
            this.bookLog.splice(this.bookLog.indexOf(randomBook), 1);
            this.booksCheckedOut.push(randomBook);
        }
    },
    checkedIn: function() {
        var randomBook = this.booksCheckedOut[Math.floor(Math.random() * this.booksCheckedOut.length)];
        this.booksCheckedOut.splice(this.booksCheckedOut.indexOf(randomBook), 1);
        this.bookLog.push(randomBook);
        
        checkedIn: function() {
        var randomBook = this.booksCheckedOut[Math.floor(Math.random() * this.booksCheckedOut.length)];
        this.booksCheckedOut.splice(this.booksCheckedOut.indexOf(randomBook), 1);
        this.bookLog.push(randomBook);
        
        checkedIn: function() {
        var randomBook = this.booksCheckedOut[Math.floor(Math.random() * this.booksCheckedOut.length)];
        this.booksCheckedOut.splice(this.booksCheckedOut.indexOf(randomBook), 1);
        this.bookLog.push(randomBook);
        
        checkedIn: function() {
        var randomBook = this.booksCheckedOut[Math.floor(Math.random() * this.booksCheckedOut.length)];
        this.booksCheckedOut.splice(this.booksCheckedOut.indexOf(randomBook), 1);
        this.bookLog.push(randomBook);
        
        
    }

};
