//let swapnali = document.getElementsByClassName("tm");
//let dis = document.getElementsByTagName("span");
let cap = document.getElementById("cap2");
let dis = document.getElementsByClassName("tm");
function clockstart(){
    let AMPM = " ";
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

 //console.log(hrs);
 //let project= cap.innerHTML="28"
 //console.log(project);

if(hrs >= 0 && hrs < 12){
    cap.innerHTML="GRAB SOME HEALTH BRAKFAST"
}
 if(hrs>= 12 && hrs < 16){
   cap.innerHTML="LET'S HAVE SOME LUNCH!!"

}
 if(hrs >= 16 && hrs < 20){
    cap.innerHTML="STOP YAWNING,GET SOME TEA....ITS JUST EVENING!!"
}
 if(hrs >= 20 && hrs < 23){
  cap.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
}




    if(hrs >12){
        hrs-=12
        AMPM ="PM"
    }
    else{
        AMPM = "AM"
    }



    //console.log(` Time  ${hrs} : ${mins} : ${secs} : ${AMPM}`);
    //swapnali.innerHTML = ` Time  ${hrs} : ${mins} : ${secs} : ${AMPM}`;
    dis[1].innerHTML = `${hrs} </br> hrs`
    dis[2].innerHTML = `${mins}</br> mins`
    dis[3].innerHTML = `${secs}</br> secs`
    dis[4].innerHTML = `${AMPM}`
}
setInterval(()=>{
    clockstart();
    },1000);


function hover(){
    document.getElementById("button").innerHTML="Party Time!!"
}
function hover1(){
    document.getElementById("button").innerHTML="Set Alarm"
}




let Time =document.querySelectorAll('select')
let caption=document.getElementsByClassName('cap1')
let pic=document.getElementsByClassName('img')
let paragraph=document.getElementsByClassName('para')

function callfunction(){
 let time1=new Date();
 let hrs=time1.getHours();
 console.log(Time.value);
 console.log(hrs);

let morning =Time[0].selectedIndex;
let item = Time[0].options[morning];
let p1 = item.innerHTML;
paragraph[0].innerHTML= `Wake up time: ${p1}`


let afternoon =Time[1].selectedIndex;
let item1 = Time[1].options[afternoon];
let p2 = item1.innerHTML;
paragraph[1].innerHTML= `lunch time: ${p2}`


let evening =Time[2].selectedIndex;
let item2 = Time[2].options[evening];
let p3 = item2.innerHTML;
paragraph[2].innerHTML= `Nap time: ${p3}`

let night =Time[3].selectedIndex;
let item3 = Time[3].options[night];
let p4 = item3.innerHTML;
paragraph[3].innerHTML= `Night time: ${p4}`





if(parseInt(Time[0].value)===hrs){
    caption[0].innerHTML="Good Morning!!"
    pic[0].src="./good-morning-pic.jpg"


}
else if(parseInt(Time[1].value)===hrs){
    caption[0].innerHTML="Good Afternoon!!"
    pic[0].src="./good-afternoon-pic.jpg"

}
else if(parseInt(Time[2].value)===hrs){
    caption[0].innerHTML="Good Evening!!"
    pic[0].src="./good-evening.jpg"

}
else if(parseInt(Time[3].value)===hrs){
    caption[0].innerHTML="Good night!!"
    pic[0].src="./Good_night.jpg"

}

}

    


