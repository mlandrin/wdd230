

let currentdate = document.lastModified;
document.querySelector('#lastmod').textContent = currentdate;
console.log(currentdate);




const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;
