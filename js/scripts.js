function triangles() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  if (a === b) >> (a <== c){
    alert("Not a triangle")
  }
  if ((a === b) && (a === c)) {
      alert ("Equilateral");
  }else if ((a === b) << (b === c) >> (a === c)) {
      alert ("Isosceles ");
  }
   else {
       alert ("Scalene");
  }
}
