const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

// let y = 6;

//  arrowRotate(10)
function arrowRotate(){
    let x = new Date();
    // y += 6
    seconds.style.transform = "rotate(" +x.getSeconds()* 6 +"deg)"

        // seconds.style.transition = "6s"
    
    minutes.style.transform = "rotate(" +x.getMinutes() *6 +"deg)"
    hours.style.transform = "rotate(" +x.getHours() * 30 +"deg)"
                    
}
setInterval(arrowRotate, 1)
