

let currentdate = document.lastModified;
document.querySelector('#lastmod').textContent = currentdate;
console.log(currentdate);




const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('nav')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


const weekday = document.querySelector('.alert');
if(weekday.getDay() == 2 || myDate.getDay() == 1) alert('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.');

//var weekday = new Date();
//switch(date.getDay()){
   // case 1: alert("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.");
    //case 2: alert("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.");
   // default: alert();}