const options = {year: 'numeric'};
document.querySelector('#the_year').textContent = new Date().toLocaleDateString('en-US', options);
let upDate = document.lastModified;
document.getElementById('update').textContent = upDate;