// Hoang Nguyen
// U12840485

document.getElementById('feedback').addEventListener('submit', event => {
    event.preventDefault();

    // Get name, rating and comment
    const name = document.getElementById("customerName").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;


    // If any field is empty, display an alert.
    if (name.trim() === "" || rating === "" || comment.trim() === ""){
        alert('Please fill out all fields.');
        return;}
         
    // Display customer feedback when all fields are filled out. 
    document.getElementById("feedbackForm").innerHTML = `
    <h1> Customer Feedback </h1>
    <p><strong>Name: </strong> ${name}</p>
    <p><strong>Rating: </strong> ${rating}</p>
    <p><strong>Feedback: </strong> ${comment}</p>`
})