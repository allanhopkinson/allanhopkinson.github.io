function toggleMenu(){
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

document.querySelector('.the_year').textContent = new Date().getFullYear();

const datefield = document.querySelector(".the_date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `${fulldate}`;

if (now.getDay() == 5){
    document.querySelector('.alerts').textContent = 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.';
}