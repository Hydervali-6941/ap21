const shw = () => {
  let a = document.getElementById("fn").value;
  let b = document.getElementById("ln").value;
  let c = document.getElementById("em").value;
  let d = document.getElementById("lo").value;
  let e = document.getElementById("qu").value;
  let f = document.getElementById("au").value;
  console.log(a, b, c, d, e.f);

  if (a == "" && b == "" && c == "" && d == "" && e == "" && f == "") {
    alert("fill the form");
  } else {
    alert("submit successful");
  }
};
