document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const chat = document.querySelector('.chat');
    const submitButton = document.getElementById('submit-button');

    // Function to handle user input
    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            // Create user message
            const userMessageDiv = document.createElement('div');
            userMessageDiv.classList.add('chat-message');
            userMessageDiv.innerHTML = `<div class="user-message">You:</div><div class="user-message-text">${userMessage}</div>`;
            chat.appendChild(userMessageDiv);

            // Create bot response
            setTimeout(function() {
                const botMessageDiv = document.createElement('div');
                botMessageDiv.classList.add('chat-message');
                botMessageDiv.innerHTML = `<div class="user-message">Bot:</div><div class="bot-message">It will be part of the consultation</div>`;
                chat.appendChild(botMessageDiv);

                // Scroll to the bottom of the chat
                chat.scrollTop = chat.scrollHeight;
            }, 500); // Delayed response for a more realistic chat experience

            // Clear input
            userInput.value = '';
        }
    }

    // Handle "Enter" key press
    userInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });

    // Handle "Send" button click
    submitButton.addEventListener('click', handleUserInput);
});
