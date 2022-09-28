const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.setLoop(!0).then((function(e){})).catch((function(e){}));
//# sourceMappingURL=02-video.675d860f.js.map
