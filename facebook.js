var Socialprofile = /** @class */ (function () {
    function Socialprofile(phoneNo, dateOfBirth, address, relationship, friends, placesYouLivedIn, sportsYouLike, musicYouLike, booksYouLike, moviesYouLike, tvShowsYouLike, likes, groups, events) {
        var _this = this;
        this.phoneNo = phoneNo;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.relationship = relationship;
        this.friends = friends;
        this.placesYouLivedIn = placesYouLivedIn;
        this.sportsYouLike = sportsYouLike;
        this.musicYouLike = musicYouLike;
        this.booksYouLike = booksYouLike;
        this.moviesYouLike = moviesYouLike;
        this.tvShowsYouLike = tvShowsYouLike;
        this.likes = likes;
        this.groups = groups;
        this.events = events;
        //declaring method
        this.getdateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.getaddress = function () {
            return _this.address;
        };
        this.getphoneNo = function () {
            return _this.phoneNo;
        };
        this.phoneNo = phoneNo;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.relationship = relationship;
        this.friends = friends;
        this.placesYouLivedIn = placesYouLivedIn;
        this.sportsYouLike = sportsYouLike;
        this.musicYouLike = musicYouLike;
        this.booksYouLike = booksYouLike;
        this.moviesYouLike = moviesYouLike;
        this.tvShowsYouLike = tvShowsYouLike;
        this.likes = likes;
        this.groups = groups;
        this.events = events;
    }
    return Socialprofile;
}()); //end of class
var address = new Socialprofile(8055778302, "11-4-1993", "pune", "single", 500, "pune,raipur,kota", "cricket,football,tennis", "ed sheeran,katy perry", "immortals of meluha", "3 idiots,dunkirk", "game of thrones,the affair", "madonna", "dav,sonadih", "gopro");
console.log(address.getaddress());
var phoneNo = new Socialprofile(8055778302, "11-4-1993", "pune", "single", 500, "pune,raipur,kota", "cricket,football,tennis", "ed sheeran,katy perry", "immortals of meluha", "3 idiots,dunkirk", "game of thrones,the affair", "madonna", "dav,sonadih", "gopro");
console.log(phoneNo.getphoneNo());
var dateOfBirth = new Socialprofile(8055778302, "11-4-1993", "pune", "single", 500, "pune,raipur,kota", "cricket,football,tennis", "ed sheeran,katy perry", "immortals of meluha", "3 idiots,dunkirk", "game of thrones,the affair", "madonna", "dav,sonadih", "gopro");
console.log(dateOfBirth.getdateOfBirth());
