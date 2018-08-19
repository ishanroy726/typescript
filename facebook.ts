class Socialprofile{ //start of class

    //constructor is used here to initialize the object
    constructor(public phoneNo:number,public dateOfBirth:string,private address:string,
    public relationship:string,public friends:number,
    public placesYouLivedIn:string,public sportsYouLike:string,public musicYouLike:string,
    public booksYouLike:string,public moviesYouLike:string,public tvShowsYouLike:string,
    public likes:string,private groups:string,public events:string){
        this.phoneNo=phoneNo;
        this.dateOfBirth=dateOfBirth;
        this.address=address;
        this.relationship=relationship;
        this.friends=friends;
        this.placesYouLivedIn=placesYouLivedIn;
        this.sportsYouLike=sportsYouLike;
        this.musicYouLike=musicYouLike;
        this.booksYouLike=booksYouLike;
        this.moviesYouLike=moviesYouLike;
        this.tvShowsYouLike=tvShowsYouLike;
        this.likes=likes;
        this.groups=groups;
        this.events=events;
    }
    //declaring method
    getdateOfBirth=()=>{ //using arrow function
     return   this.dateOfBirth
    }
    getaddress=()=>{ //using setter function because address is protected
        return this.address
    }
    
    getphoneNo=()=>{
        return this.phoneNo
    }
    getrelationship=()=>{
        return this.relationship
    }
    getfriends=()=>{
        return this.friends
    }
    getplacesYouLivedIn=()=>{
        return this.placesYouLivedIn
    }
} //end of class
let address =new Socialprofile(8055778302,"11-4-1993","pune","single",500,"pune,raipur,kota","cricket,football,tennis",
"ed sheeran,katy perry","immortals of meluha","3 idiots,dunkirk","game of thrones,the affair","madonna",
"dav,sonadih","gopro")
console.log(address.getaddress());

let phoneNo =new Socialprofile(8055778302,"11-4-1993","pune","single",500,"pune,raipur,kota","cricket,football,tennis",
"ed sheeran,katy perry","immortals of meluha","3 idiots,dunkirk","game of thrones,the affair","madonna",
"dav,sonadih","gopro")
console.log(phoneNo.getphoneNo());

let dateOfBirth =new Socialprofile(8055778302,"11-4-1993","pune","single",500,"pune,raipur,kota","cricket,football,tennis",
"ed sheeran,katy perry","immortals of meluha","3 idiots,dunkirk","game of thrones,the affair","madonna",
"dav,sonadih","gopro")
console.log(dateOfBirth.getdateOfBirth());

let relationship =new Socialprofile(8055778302,"11-4-1993","pune","single",500,"pune,raipur,kota","cricket,football,tennis",
"ed sheeran,katy perry","immortals of meluha","3 idiots,dunkirk","game of thrones,the affair","madonna",
"dav,sonadih","gopro")
console.log(relationship.getrelationship());

let friends =new Socialprofile(8055778302,"11-4-1993","pune","single",500,"pune,raipur,kota","cricket,football,tennis",
"ed sheeran,katy perry","immortals of meluha","3 idiots,dunkirk","game of thrones,the affair","madonna",
"dav,sonadih","gopro")
console.log(friends.getfriends());

let places =new Socialprofile(8055778302,"11-4-1993","pune","single",500,"pune,raipur,kota","cricket,football,tennis",
"ed sheeran,katy perry","immortals of meluha","3 idiots,dunkirk","game of thrones,the affair","madonna",
"dav,sonadih","gopro")
console.log(places.getplacesYouLivedIn());