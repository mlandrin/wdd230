
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
const mainnav = document.querySelector('nav');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


function alert(){
   var weekday = document.getElementById('.alert').innerHTML;
   if(weekday.getDay() == 2 || myDate.getDay() == 1) alert('.alert');
   else(alert(""));
}