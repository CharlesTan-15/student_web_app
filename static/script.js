// Function to check if name is valid and show date field
function checkName() {
    const nameInput = document.getElementById("name");
    const dateGroup = document.getElementById("date-group");

    if (nameInput.value.trim() !== "") {
        dateGroup.style.display = "block";
    } else {
        dateGroup.style.display = "none";
        hideAllAfter("date-group");
    }
}

// Function to check if date is valid and show subject field
function checkDate() {
    const dateInput = document.getElementById("date");
    const subjectGroup = document.getElementById("subject-group");

    if (dateInput.value) {
        subjectGroup.style.display = "block";
    } else {
        subjectGroup.style.display = "none";
        hideAllAfter("subject-group");
    }
}

// Function to check if subject is selected and show email field
function checkSubject() {
    const subjectSelect = document.getElementById("subject");
    const emailGroup = document.getElementById("email-group");

    if (subjectSelect.value !== "") {
        emailGroup.style.display = "block";
    } else {
        emailGroup.style.display = "none";
        hideAllAfter("email-group");
    }
}

// Function to check if email is valid and show grade field
function checkEmail() {
    const emailInput = document.getElementById("email");
    const gradeGroup = document.getElementById("grade-group");

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value)) {
        gradeGroup.style.display = "block";
    } else {
        gradeGroup.style.display = "none";
        hideAllAfter("grade-group");
    }
}

// Function to check if grade is valid and show submit button
function checkGrade() {
    const gradeInput = document.getElementById("grade");
    const submitGroup = document.getElementById("submit-group");
    const gradeValue = parseFloat(gradeInput.value);

    if (!isNaN(gradeValue) && gradeValue >= 0 && gradeValue <= 100) {
        submitGroup.style.display = "block";
    } else {
        submitGroup.style.display = "none";
    }
}

// Helper function to hide all elements after a specific group
function hideAllAfter(groupId) {
    const groups = ["date-group", "subject-group", "email-group", "grade-group", "submit-group"];
    const startIndex = groups.indexOf(groupId);

    if (startIndex !== -1) {
        for (let i = startIndex; i < groups.length; i++) {
            const element = document.getElementById(groups[i]);
            if (element) {
                element.style.display = "none";

                // Clear the input value when hiding
                const input = element.querySelector('input, select');
                if (input) {
                    input.value = '';

                    // Trigger the appropriate change event to update UI
                    if (input.id === 'date') {
                        checkDate();
                    } else if (input.id === 'subject') {
                        checkSubject();
                    } else if (input.id === 'email') {
                        checkEmail();
                    } else if (input.id === 'grade') {
                        checkGrade();
                    }
                }
            }
        }
    }
}

// Updated form validation function
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const date = document.getElementById("date").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const grade = parseFloat(document.getElementById("grade").value);

    // Check all fields are filled
    if (!name || !date || !subject || !email || isNaN(grade)) {
        alert("Please fill in all fields correctly.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate grade range
    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100.");
        return false;
    }

    return true;
}

// Initialize form on page load
document.addEventListener('DOMContentLoaded', function() {
    // Clear all form fields on page load
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('email').value = '';
    document.getElementById('grade').value = '';

    // Hide all groups except name
    hideAllAfter("name-group");

    // Focus on the name field for better UX
    document.getElementById('name').focus();
});

// Optional: Add a reset function if needed
function resetForm() {
    // Clear all inputs
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('email').value = '';
    document.getElementById('grade').value = '';

    // Hide all groups except name
    hideAllAfter("name-group");

    // Focus on name field
    document.getElementById('name').focus();




}

