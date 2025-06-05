// Function to toggle chat container visibility
function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
}

// Function to send user message to the backend
async function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Display user message in the chat box
    chatBox.innerHTML += `<div>User: ${userInput}</div>`;

    try {
        // Make an AJAX request to the backend using fetch
        const response = await fetch(`/chatbot/?message=${encodeURIComponent(userInput)}`);
        const data = await response.json();

        // Display chatbot's response in the chat box
        chatBox.innerHTML += `<div>Chatbot: ${data.response}</div>`;
    } catch (error) {
        console.error('Error:', error);
    }

    // Clear user input field after sending message
    document.getElementById("user-input").value = "";
}
