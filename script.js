let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);








function toggleContent() {
    const moreText = document.getElementById("moreText");
    const toggleButton = document.getElementById("toggleButton");

    // Toggle display of additional content
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        toggleButton.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        toggleButton.innerText = "Read More";
    }
}








// Chaguo la fomati ya saa
const formats = ['24', '12', 'ms']; // Fomati zinazopatikana
let currentFormatIndex = 0; // Fomati ya kwanza ni '24'

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    let formattedTime = '';
    const format = formats[currentFormatIndex]; // Fomati ya sasa

    if (format === '24') {
        formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else if (format === '12') {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // 12-hour format logic
        formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
    } else if (format === 'ms') {
        formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    }

    // Weka muda kwenye div ya saa
    document.getElementById('clock').textContent = formattedTime;
}

// Badilisha fomati ya saa
function toggleFormat() {
    currentFormatIndex = (currentFormatIndex + 1) % formats.length; // Hamia fomati inayofuata
}

// Saa inayojiendesha kila millisecond
setInterval(updateClock, 10);

// Anza saa mara moja
updateClock();





//video
 // JavaScript kugundua kama video inaweza kuchezwa
 const video = document.getElementById('background-video');
 const fallback = document.getElementById('fallback-bg');

 video.addEventListener('error', () => {
     // Kama video haiwezi kucheza, weka fallback
     video.style.display = 'none';
     fallback.style.display = 'block';
 });

 // Jaribu kucheza video na kushindwa
 video.play().catch(() => {
     video.style.display = 'none';
     fallback.style.display = 'block';
 });



 document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const backgroundColor = window.getComputedStyle(body).backgroundColor;
    const rgbValues = backgroundColor.match(/\d+/g);
    if (rgbValues) {
        const r = parseInt(rgbValues[0], 10);
        const g = parseInt(rgbValues[1], 10);
        const b = parseInt(rgbValues[2], 10);

        // Calculate the luminance to decide text color
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        if (luminance < 0.5) {
            body.style.color = '#fff'; // Light text for dark background
        } else {
            body.style.color = '#333'; // Dark text for light background
        }
    }
});