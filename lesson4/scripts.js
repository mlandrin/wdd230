
let currentdate1 = document.currentdate;
document.querySelector('#date').textContent = currentdate1;
console.log(currentdate1);

//let currentdate1 = document.currentdate;
//document.querySelector('#date').textContent = currentdate1;
//console.log(currentdate1);

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;