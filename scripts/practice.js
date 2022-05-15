// Variables and the date object

//let date = new Date();
//console.log(date);

//let year = date.getFullYear();
//console.log(year);

//document.querySelector('h1').textContent = year;

//document.querySelector('div').innerHTML = '<h2>Subtitle</h2>';

//let newpara = document.createElement('p');
//newpara.textContent = 'This is my paragraph';
//document.querySelector('div').appendChild(newpara);

//document.querySelector('img').setAttribute('width', '400');

//Sequence

//function addayear() {
  //  console.log('it ran');
//}
//addayear(year);

// Repetition

//const myarray=['CIT110', 'CIT111', 'CIT230'];
//function makelist(item){
//    document.querySelector('div').innerHTML += '<li>' + item +'</li>'
//}
//myarray.forEach(makelist)


// Selection
//if (year==2022) {
//    console.log('current year');
//}


//let date = new Date();
//let year = date.getFullYear();

//document.querySelector('#year')

let button1 = document.querySelector('btn');

function show(){
button1.classList.add('newstyle');
}

button1.addEventListener('click', show);

let hambutton = document.querySelector('.ham');
letmainnav = document.querySelector('nav');

hambutton.addEventListener('click', () => {mainnav.classList.toggle ('responsive')})
