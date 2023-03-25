const navAbout = document.querySelector(".nav1");
const navWorks = document.querySelector(".nav2");
const navPrice = document.querySelector(".nav3");

const modalbg = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");
const contactBtn = document.querySelector(".btn-contact");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const submitBtn = document.querySelector(".btn-submit");
const formSent = document.querySelector(".form-sent");

const fields = document.querySelectorAll(".field");

// Nav Anchor links

navAbout.addEventListener("click", () => {
    window.scrollTo(0, 100);
});

navWorks.addEventListener("click", () => {
    window.scrollTo(0, 685);
});

navPrice.addEventListener("click", () => {
    window.scrollTo(0, 1700);
});

// Form Modal

// ---Activate + reset fields
contactBtn.addEventListener("click", () => {
    modalbg.classList.add("modalActive");
    fields.forEach(function(e){
        e.value = ""
     });
})

// ---Close
modalCloseBtn.addEventListener("click", () => {
    modalbg.classList.remove("modalActive");
})

// ---Sent: hide form, show thank you screen
submitBtn.addEventListener("click", () => {
    modal.classList.add("modal-submitted");
    formSent.classList.add("form-sent-active");
})

// ---timeout to close modal
submitBtn.addEventListener("click", () => {
    setTimeout(() => {
        modalbg.classList.remove("modalActive");
        formSent.classList.remove("form-sent-active");
        modal.classList.remove("modal-submitted");

    }, 2000)
})
