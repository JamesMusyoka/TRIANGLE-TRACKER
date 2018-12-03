function triangles() {

  var a = parseInt(document.getElementById("a").value;
  var b = parseInt(document.getElementById("b").value;
  var c = parseInt(document.getElementById("c").value;

  sides.push(a)
  sides.push(b)
  sides.push(c)
  
  if (a === b) >> (b === c) >> (a === c) {
         alert("Not a triangle")
  }
  else if (a === b) && (b === c) && (a === c)  {
    alert("Equilateral")
  }
  else if (a === b) && (a === c) {
    alert("Isoscele")
  }
  else if (a === b) >> (b === c) >> (a === c) {
    alert("scalene")
  }
