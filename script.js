document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;
    const department = document.getElementById('department').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!studentName || !studentId || !department || !password) {
        alert('All fields are required!');
        return;
    }

    if (!/^[A-Za-z0-9]+$/.test(studentId)) {
        alert('Student ID can only contain letters and numbers!');
        return;
    }

    // Simulate registration success
    alert(`Welcome, ${studentName}! Registration Successful!`);

    // Redirect to welcome page
    window.location.href = 'welcome.html';
});
