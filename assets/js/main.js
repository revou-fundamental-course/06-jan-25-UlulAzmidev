


// =================================GREETING================================

document.addEventListener("DOMContentLoaded", function() {
  const greetingElement = document.getElementById("user-greeting");

  // Meminta nama pengguna
  const userName = prompt("What is your name?") || "Guest";

  // Menampilkan nama pengguna
  greetingElement.textContent = ` ${userName}`;

});





// =========================BANNER SLIDE=========================================

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slideImages = document.querySelectorAll(".slides img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const slideWidth = slideImages[0].clientWidth;

    function goToSlide(index) {
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function showNextSlide() {
        if (currentIndex < slideImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        goToSlide(currentIndex);
    }

    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideImages.length - 1;
        }
        goToSlide(currentIndex);
    }

    // Event listeners for buttons
    nextButton.addEventListener("click", function () {
        showNextSlide();
    });

    prevButton.addEventListener("click", function () {
        showPrevSlide();
    });

    // Auto slider
    setInterval(function () {
        showNextSlide();
    }, 3000); // 3 seconds interval
});



// =========================NAVIGATION TOGGLE BUTTON MOBILE MODE===========================================================================


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navigationMenu = document.getElementById("navigationMenu");

    menuToggle.addEventListener("click", () => {
        navigationMenu.classList.toggle("active");
    });
});





// ===========================================================FORM VALIDASI===============================================================
function validateForm() {
    let isValid = true;

    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama wajib diisi.';
        isValid = false;
    } else if (/^[0-9]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Nama tidak boleh berupa angka.';
        isValid = false;
    } else if (/^[a-zA-Z\s]+$/.test(name) === false) {
        document.getElementById('nameError').textContent = 'Nama hanya boleh terdiri dari huruf.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email wajib diisi.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Format email tidak valid.';
      isValid = false;
    }

    // Message validation
    if (message === '') {
      document.getElementById('messageError').textContent = 'Pesan wajib diisi.';
      isValid = false;
    }

    return isValid;
  }