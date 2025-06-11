document.getElementById("form").addEventListener('submit', async function (event) {
    event.preventDefault();  // Prevents page from reloading. usually the page reloads when submit button is clicked and hence nothing gets to the console thats why this fucntion is necessary

    const title = document.getElementById("Todo-Title").value;
    const description = document.getElementById("description").value

    document.getElementById('form').reset();

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST", // Specify the HTTP method as POST
            headers: {
                "Content-Type": "application/json; charset=UTF-8" // Indicate the content type
            },
            body: JSON.stringify({ title, description })
        });
        
        if (response.ok) {
            const todo = await response.json();
            // Get current todos or start with empty array
            let todos = JSON.parse(localStorage.getItem('Todos')) || [];
            // Push new todo
            todos.push(todo);
            // Save back to localStorage
            localStorage.setItem('Todos', JSON.stringify(todos));

            // Render the new todo card
            RenderCard(todo);

        } else {
            console.log("Failed to add todo");
        }
    } catch (error) {
        console.log("Error:", error);
    }
});

function RenderCard(todo) {
    try {
        const container = document.getElementById("container-card");

        // Create the card element
        const card = document.createElement("div");
        card.className = "card"; // Add the card class
        
        card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${todo.title}</h5>
            <p class="card-text">${todo.description}</p>
        </div>
    `;
        container.appendChild(card);
    } catch (error) {
        console.error("Error in RenderCard:", error);
    }
}

// Render all saved todos on page load
window.onload = function () {
    const todos = JSON.parse(localStorage.getItem("Todos")) || [];
    todos.forEach(todo => RenderCard(todo));
};

function clearall() {
    localStorage.clear();

    // Clear the cards from the DOM
    document.getElementById("container-card").innerHTML = '';
}