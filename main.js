var YoutubeVideo = /** @class */ (function () {
    //declaring constructor
    function YoutubeVideo(Title, views, likes, dislikes, channelName, videoDiscription, subscription) {
        var _this = this;
        this.Title = Title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelName = channelName;
        this.videoDiscription = videoDiscription;
        this.subscription = subscription;
        //declaring method
        this.getTitleName = function () {
            return _this.Title;
        };
        this.getviews = function () {
            return _this.views;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.getchannelName = function () {
            return _this.channelName;
        };
        this.getvideoDiscription = function () {
            return _this.videoDiscription;
        };
        this.getsubscription = function () {
            return _this.subscription;
        };
        this.Title = Title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelName = channelName;
        this.videoDiscription = videoDiscription;
        this.subscription = subscription;
    } //end of constructor
    return YoutubeVideo;
}()); //end of class
var title = new YoutubeVideo("GoPro", 50000, 1500, 2, "GoProMan", "BikerChannel", 150000); //creating object of the class
console.log(title.getTitleName()); //displaying the result in console
var views = new YoutubeVideo("GoPro", 50000, 1500, 2, "GoProMan", "BikerChannel", 150000);
console.log(views.getviews());
var likes = new YoutubeVideo("GoPro", 50000, 1500, 2, "GoProMan", "BikerChannel", 150000);
console.log(likes.getlikes());
var dislikes = new YoutubeVideo("GoPro", 50000, 1500, 2, "GoProMan", "BikerChannel", 150000);
console.log(dislikes.getdislikes());
var channelname = new YoutubeVideo("GoPro", 50000, 1500, 2, "GoProMan", "BikerChannel", 150000);
console.log(channelname.getchannelName());
var videoDiscription = new YoutubeVideo("GoPro", 50000, 1500, 2, "GoProMan", "BikerChannel", 150000);
console.log(videoDiscription.getvideoDiscription());
var subscription = new YoutubeVideo("GoPro", 50000, 1500, 2, "GoProMan", "BikerChannel", 150000);
console.log(subscription.getsubscription());
