// script.js
document.getElementById('fitnessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        age: document.getElementById('age').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        bloodPressure: document.getElementById('bloodPressure').value,
        heartRate: document.getElementById('heartRate').value
    };

    console.log('User Data:', formData);

    // Example: Basic validation and output
    if (formData.height && formData.weight && formData.age) {
        alert("Your data has been submitted!");
    } else {
        alert('Please fill in all fields.');
    }

    // Clear the form
    document.getElementById('fitnessForm').reset();
});