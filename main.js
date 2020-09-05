function showPone() {
    document.querySelector('#msg1').style.display = "block";
    document.querySelector('#msg2').style.display = "none";
    document.querySelector('#msg3').style.display = "none";
    
}

function showPtwo() {
    document.querySelector('#msg2').style.display = "block";
    document.querySelector('#msg1').style.display = "none";
    document.querySelector('#msg3').style.display = "none";

}

function showPthree() {
    document.querySelector('#msg3').style.display = "block";
    document.querySelector('#msg1').style.display = "none";
    document.querySelector('#msg2').style.display = "none";

}



//    function hidecontent(){
//     document.querySelector(".accordion-content").style.transition = "5s";
//    }