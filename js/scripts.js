function triangles() {

var A = parseInt(document.getElementById("a").value);
var B = parseInt(document.getElementById("b").value);
var C = parseInt(document.getElementById("c").value);


    if(A===B && B===C && C===A) {
      alert("Equilqteral");
}
    else if (A===B || B===C|| A===C ) {
      alert("Isosceles");
  }
    else if (A!==B && B!==C && A!=C) if ((A+B)<=C || (A+C)<=B || (B+C)<=A){
      alert("Not a Triangle");
  }
    else {
      alert("Scalene");
}
}
