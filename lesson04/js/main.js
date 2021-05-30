function toggleMenu(){
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

document.querySelector('.the_year').textContent = new Date().getFullYear();

const datefield = document.querySelector(".the_date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `${fulldate}`;
