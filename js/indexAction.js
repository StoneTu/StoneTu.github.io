var videos = document.getElementsByTagName("video");
for (video of videos) {
    addMouseVideoAction(video);
}

function addMouseVideoAction(element) {
    element.onmouseover = function(event) {
        let target = event.target;
        target.play();
    };
    element.onmouseout = function(event) {
        let target = event.target;
        target.pause();
    };
}