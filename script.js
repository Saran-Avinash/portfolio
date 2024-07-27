const header = document.getElementsByClassName('header-main')[0];
const navbar_list = document.getElementsByClassName('navbar-ul')[0];
const toggle_button = document.getElementsByClassName('toggle')[0];

toggle_button.addEventListener('click', ()=>{
    header.classList.toggle('active');
    navbar_list.classList.toggle('active');
})

console.log(header);
console.log(navbar_list);