
 function setColors(){
    var R = document.getElementById("range1").value
    var G = document.getElementById("range2").value
    var B = document.getElementById("range3").value
    var palete = document.getElementById("colorPalete").style;
    var cssCode = document.getElementById("cssCode");

    palete.backgroundColor = "rgb("+R+","+G+","+B+")";

    cssCode.value = "background-color:rgb("+R+","+G+","+B+")";
    
 }

 