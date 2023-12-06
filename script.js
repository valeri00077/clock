const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const day = document.getElementById("day");
const month = document.getElementById("month");
const weekday = document.getElementById("weekday");
let dateitem1 = document.getElementsByClassName("dateitem1");
let city = document.getElementById("city");
let number = document.getElementById("number");
let minitem0 = document.getElementById("minitem0");
let minitem1 = document.getElementById("minitem1");
let hoitem0 = document.getElementById("hoitem0");
let hoitem1 = document.getElementById("hoitem1");
let smallcircle = document.getElementById("smallcircle");
let numb= document.getElementsByClassName("numb");

dateitem1 = Array.from(dateitem1)
numb = Array.from(numb)

let changeCity = "Tbilisi";
let change = 0;
// let changeDate = 0;
let formattedTime = new Date();

function arrowRotate(){
    const monthList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let x = new Date();
    // console.log(x.getHours());

    seconds.style.transform = "rotate(" +((x.getSeconds())* 6 + (x.getMilliseconds()/1000)*6) +"deg)"
    
    minutes.style.transform = "rotate(" +((x.getMinutes()) *6 +(x.getSeconds()/60)*6) +"deg)"
    
    hours.style.transform = "rotate(" + ((x.getHours()-change)*30+(x.getMinutes()/60)*30) +"deg)"
   
    city.textContent = changeCity;
   
   
   
    dateitem1.forEach(dateitem => {
        dateitem.addEventListener("click", () => {
            // console.log(dateitem1.indexOf(dateitem))
    
            if(dateitem1.indexOf(dateitem) === 1){
                change = 4;
                changeCity = "London";
                hours.style.transition = "2s"
                let londonTimeZone = "Europe/London"
                let londonTime = new Intl.DateTimeFormat("en-US", {timeZone: londonTimeZone})
                let formattedLondonTime = londonTime.format(x)
                formattedTime = new Date(formattedLondonTime)
                // console.log(formattedTime.getDate())
            }else if(dateitem1.indexOf(dateitem) === 2){
                change = 9;
                changeCity = "New york";
                hours.style.transition = "2s"
                let usaTimeZone = "America/New_york"
                let usaTime = new Intl.DateTimeFormat("en-US", {timeZone: usaTimeZone})
                let formattedUsaTime = usaTime.format(x)
                formattedTime = new Date(formattedUsaTime)
                // console.log(formattedTime.getMinutes())

                
            }else{
                change = 0;
                changeCity = "Tbilisi";
                hours.style.transition = "2s"
                let tbilisiTimeZone = "Asia/Tbilisi"
                let tbilisiTime = new Intl.DateTimeFormat("en-US", {timeZone: tbilisiTimeZone})
                let formattedTbilisiTime = tbilisiTime.format(x)
                formattedTime  = new Date(formattedTbilisiTime)
                // let amPM = tbilisiTime.format(new Date());
                // console.log(formattedTime)
            }
            
        })
        
    });
    
    
    if((x.getHours() - change) >= 6 && (x.getHours() - change) < 18){
        number.style.backgroundColor = "#F5F5DC";
        number.style.transition = "1s";
        number.style.boxShadow = "2px 20px 20px 20px rgba(0, 0, 0, 0.522)";
        minitem0.style.backgroundColor = "#2B2A4C";
        minitem1.style.backgroundColor = "#2B2A4C";
        hoitem0.style.backgroundColor = "#508D69";
        hoitem1.style.backgroundColor = "#508D69";
        city.style.color = "#092635";
        city.style.textShadow = "2px 0px 0px rgba(0, 0, 0, 0.522)";
        smallcircle.style.backgroundColor = "#092635";
    numb.forEach(element => {

            element.style.color = "#092635";
            element.style.textShadow = "3px 0px 0px rgba(0, 0, 0, 0.522)";

    })

    }else{
        number.style.backgroundColor = "";
        number.style.transition = "1s";
        number.style.boxShadow = "";
        minitem0.style.backgroundColor = "";
        minitem1.style.backgroundColor = "";
        hoitem0.style.backgroundColor = "";
        hoitem1.style.backgroundColor = "";
        city.style.color = "";
        city.style.textShadow = "";
        smallcircle.style.backgroundColor = "";
        numb.forEach(element => {

            element.style.color = "";
            element.style.textShadow = "";

    })
    }

    
    
    
    
    
    day.textContent = (formattedTime.getDate())
    month.textContent = monthList[formattedTime.getMonth()]
    weekday.textContent = weekList[formattedTime.getDay()]
    // console.log();
}
setInterval(arrowRotate, 40)



                    