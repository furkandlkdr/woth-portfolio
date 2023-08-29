function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

function sendEmail(){
    const EMAIL = "furkandlkdr@hotmail.com";
    const SUBJECT = "Job Application";
    const BODY = "Hello Furkan, \n\nI want to hire you.";
    const MAIL_TO_LINK = "mailto:" + EMAIL + "?subject=" + SUBJECT + "&body=" + BODY;
    window.location.href = MAIL_TO_LINK;
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});