const form = document.querySelector('.form');
const tell = document.querySelector('#tell');
const email = document.querySelector('#email')
const name = document.querySelector('#name');
const tele = document.querySelector('#tele');

const li = document.createElement('li')
const li1 = document.createElement('li')
form.addEventListener('submit',e=>{
    e.preventDefault();

    const names = name.value;
    const telefon =tele.value
    li.textContent = names;
    li1.textContent = telefon;

    tell.appendChild(li)
    email.appendChild(li1)
})



// sidebar
const menu = document.querySelector('ipad')

