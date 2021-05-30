const t = document.querySelector('.temperature').textContent;
const s = document.querySelector('.windSpeed').textContent;

if (parseInt(t) <= 50 && parseInt(s) > 3) {
    const windChill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    const prettyChill = Math.round(windChill);  
    document.querySelector('.windChill').textContent = prettyChill + "°F";
} else {
    document.querySelector('.windChill').textContent = "N/A";
}