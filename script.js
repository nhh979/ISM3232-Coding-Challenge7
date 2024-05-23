document.getElementById('feedback').addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    if (name.trim() === "" || rating === "" || comment.trim() === ""){
        document.getElementById("feedbackForm").innerHTML = `
        <h2> Please fill out all fields. </h2>`
    } else {
        document.getElementById("feedbackForm").innerHTML = `
    <h1> Customer Feedback </h1>
    <p><strong>Name: </strong> ${name}</p>
    <p><strong>Rating: </strong> ${rating}</p>
    <p><strong>Feedback: </strong> ${comment}</p>
    `
    }    
})