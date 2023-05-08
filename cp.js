// Get the form and the feedback div
var form = document.getElementById('quiz-form');
var feedback = document.getElementById('feedback');

// Listen for the form submit event
form.addEventListener('submit', function(event) {
	// Prevent the default form submission
	event.preventDefault();

	// Get the user's answers to the questions
	var q1 = document.getElementById('q1').value.toLowerCase();
	var q2 = document.getElementById('q2').value.toLowerCase();
	var q3 = document.getElementById('q3').value.toLowerCase();
	var q4 = document.getElementById('q4').value.toLowerCase();

	// Check the answers and display feedback
	if (q1 === '15/51' && q2 === '0.0024' && q3 === '0.228' && q4 === '0.4286') {
		// Display congratulations message if all answers are correct
		swal("Congratulations!", "You answered all questions correctly!", "success");
	} else {
		// Display error message if any answer is incorrect
		swal("Incorrect!", "Please try again.", "error");
	}
});

