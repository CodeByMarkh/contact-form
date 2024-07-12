document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('send-btn');
    const resetButton = document.getElementById('reset-btn');
    const contactForm = document.getElementById('contact-form');

    sendButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('mail').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            alert('Your message has been sent!');
        } else {
            alert('Please fill out all fields.');
        }
    });

    resetButton.addEventListener('click', function() {
        contactForm.reset();
    });
});
