class YoutubeVideo{ //start of class
    
        //declaring constructor
    constructor(public Title:string, public views:number,public likes:number,public dislikes:number,public channelName:string,public videoDiscription:string,public subscription:number)
    {   //start of constructor
        this.Title=Title;
        this.views=views;
        this.likes=likes;
        this.dislikes=dislikes;
        this.channelName=channelName;
        this.videoDiscription=videoDiscription;
        this.subscription=subscription;
        

    }   //end of constructor

    //declaring method
    getTitleName=()=>{ 
      return this.Title;
    }
    getviews=()=>{ 
        return this.views;
      }
      getlikes=()=>{ 
        return this.likes;
      }
      getdislikes=()=>{
        return this.dislikes;
      }
      getchannelName=()=>{ 
        return this.channelName;
      }
      getvideoDiscription=()=>{ 
        return this.videoDiscription;
      }
      getsubscription=()=>{ 
        return this.subscription;
      }
} //end of class

let title = new YoutubeVideo("GoPro",50000,1500,2,"GoProMan","BikerChannel",150000); //creating object of the class
console.log(title.getTitleName()); //displaying the result in console



let views =new YoutubeVideo("GoPro",50000,1500,2,"GoProMan","BikerChannel",150000);
console.log(views.getviews());

let likes =new YoutubeVideo("GoPro",50000,1500,2,"GoProMan","BikerChannel",150000);
console.log(likes.getlikes());

let dislikes =new YoutubeVideo("GoPro",50000,1500,2,"GoProMan","BikerChannel",150000);
console.log(dislikes.getdislikes());

let channelname =new YoutubeVideo("GoPro",50000,1500,2,"GoProMan","BikerChannel",150000);
console.log(channelname.getchannelName());

let videoDiscription =new YoutubeVideo("GoPro",50000,1500,2,"GoProMan","BikerChannel",150000);
console.log(videoDiscription.getvideoDiscription());

let subscription =new YoutubeVideo("GoPro",50000,1500,2,"GoProMan","BikerChannel",150000);
console.log(subscription.getsubscription());