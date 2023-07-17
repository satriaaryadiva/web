function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;
}

setInterval(displayTime, 1000);
// jumbo

const contimage = document.querySelector('.contimage');
const jumbo  = document.querySelector  ( '.jumbo');

contimage.addEventListener('click',function(e){
    if( e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('.fade');
        setTimeout(
            function(){
                    jumbo.classList.remove('.fade');
            }
        );
    }


});
