const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('the_date').textContent = new Date().toLocaleDateString('en-US', options);