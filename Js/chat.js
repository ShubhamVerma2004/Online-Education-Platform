// DOM Elements
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');
const historyList = document.getElementById('historyList');

// Predefined Responses
const responses = {
  "hi": "Hello! How can I help you?",
  "hello": "Hi there! What can I do for you?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name": "I'm a simple rule-based chatbot.",
  "bye": "Goodbye! Have a great day!",
  "default": "I'm sorry, I didn't understand that. Can you please rephrase?",
  "ji": "I am so cute!"
};

// Load chat history from localStorage
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];

// Function to save chat history to localStorage
function saveChatHistory() {
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Function to add a new message to the chat
function addMessage(message, isUser = true) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', isUser ? 'user' : 'bot');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
}

// Function to add a new chat to the history
function addToHistory(chat) {
  const historyItem = document.createElement('li');
  historyItem.textContent = chat;
  historyList.appendChild(historyItem);
}

// Function to get bot response
function getBotResponse(userMessage) {
  // Convert user message to lowercase for case-insensitive matching
  userMessage = userMessage.toLowerCase();

  // Check if the user message matches any predefined response
  for (const key in responses) {
    if (userMessage.includes(key)) {
      return responses[key];
    }
  }

  // If no match found, return the default response
  return responses["default"];
}

// Load chat history on page load
function loadChatHistory() {
  chatHistory.forEach(chat => {
    addToHistory(chat);
  });
}

// Event Listeners
sendButton.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, true); // Add user message
    chatInput.value = ''; // Clear input field

    // Get bot response
    const botResponse = getBotResponse(userMessage);
    addMessage(botResponse, false); // Add bot response

    // Add to history and save
    chatHistory.push(userMessage);
    addToHistory(userMessage);
    saveChatHistory();
  } else {
    alert('Please enter a message.'); // Input validation
  }
});

// Clear chat history manually
historyList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    // Remove the clicked item from history
    const chatText = e.target.textContent;
    chatHistory = chatHistory.filter(chat => chat !== chatText);
    e.target.remove();
    saveChatHistory();
  }
});

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click(); // Send message on Enter key
  }
});

// Load chat history when the page loads
loadChatHistory();