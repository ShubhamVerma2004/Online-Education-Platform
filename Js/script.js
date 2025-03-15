const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Chatbot Elements
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotToggle = document.querySelector('.chatbot-toggle');
const closeBtn = document.querySelector('.close-btn');
const sendBtn = document.querySelector('.send-btn');
const chatInput = document.querySelector('.chatbot-input input');
const chatMessages = document.querySelector('.chatbot-messages');

// Toggle Chatbot Instantly on Manual Click
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
});

// Close Chatbot
closeBtn.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// Open Chatbot Automatically After 5 Seconds
setTimeout(() => {
    chatbotContainer.classList.add('active');
}, 5000); // 5 seconds delay

// Send Message Functionality
sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Add User Message
        chatMessages.innerHTML += `
            <div class="chatbot-message user">
                <p>${userMessage}</p>
            </div>
        `;

        // Simulate Bot Response
        setTimeout(() => {
            chatMessages.innerHTML += `
                <div class="chatbot-message bot">
                    <p>Thanks for your message! How can I assist you further?</p>
                </div>
            `;
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        }, 1000);

        chatInput.value = ''; // Clear input
    }
});