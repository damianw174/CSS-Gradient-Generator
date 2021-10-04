
 function setColors(){
    var R = document.getElementById("range1").value
    var G = document.getElementById("range2").value
    var B = document.getElementById("range3").value
    var palete = document.getElementById("colorPalete").style;

    palete.backgroundColor = "rgb("+R+","+G+","+B+")";
    
 }

 