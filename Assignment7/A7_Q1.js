document.querySelector('form').onsubmit = function (e) {
    // Name validation
    if (!/^[A-Za-z]{1,10}$/.test(Name.value)) {
        alert('Enter valid Name (alphabets, max 10 chars)');
        e.preventDefault();
        return false;
    }
    // Age validation
    let dob = new Date(Birthdate.value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (age < 18) {
        alert('Must be at least 18 years old');
        e.preventDefault();
        return false;
    }
    // Email validation
    if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(Email.value)) {
        alert('Enter valid Email');
        e.preventDefault();
        return false;
    }
    // Password validation
    if (Password.value.length <= 8 || !Password.value.includes('#') || !/\d/.test(Password.value)) {
        alert('Password >8 chars, must have # and a digit');
        e.preventDefault();
        return false;
    }
    // Address validation
    if (!Address.value.trim()) {
        alert('Enter Address');
        e.preventDefault();
        return false;
    }
    // Gender validation
    if (![...document.querySelectorAll('input[type="radio"][name="gender"]')].some(r => r.checked)) {
        alert('Select Gender');
        e.preventDefault();
        return false;
    }
    // Photo validation
    if (!myFile.value) {
        alert('Upload Photo');
        e.preventDefault();
        return false;
    }
    // Course validation
    if (!Course.value) {
        alert('Select Course');
        e.preventDefault();
        return false;
    }
    // Skill validation
    if (![...document.querySelectorAll('input[type="checkbox"]')].some(c => c.checked)) {
        alert('Select at least one Skill');
        e.preventDefault();
        return false;
    }
};