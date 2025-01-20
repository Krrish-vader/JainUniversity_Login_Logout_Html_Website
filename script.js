document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let studentName = document.getElementById("student-name").value;
    let studentId = document.getElementById("student-id").value;
    let department = document.getElementById("department").value;
    let password = document.getElementById("password").value;

    // Validate Student ID (Only letters & numbers)
    if (!/^[A-Za-z0-9]+$/.test(studentId)) {
        alert("Student ID can only contain letters and numbers!");
        return;
    }

    // Store in LocalStorage
    localStorage.setItem("student_name", studentName);
    localStorage.setItem("student_id", studentId);
    localStorage.setItem("department", department);
    localStorage.setItem("password", password); // (Note: Not secure, just for demo)

    alert("Registration successful!");
    window.location.href = "welcome.html";
});
