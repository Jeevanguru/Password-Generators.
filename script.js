document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const alphabets = document.getElementById('alphabets').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const outputDiv = document.querySelector('.output');

    if (length < 4 || length > 20) {
        outputDiv.style.display = 'block';
        document.getElementById('password').textContent = "Password length must be between 4 and 20.";
        outputDiv.classList.remove('active');
        return;
    }

    let characters = "";
    if (alphabets) characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) characters += "0123456789";
    if (symbols) characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    if (characters === "") {
        outputDiv.style.display = 'block';
        document.getElementById('password').textContent = "Please select atleast one character set.";
        outputDiv.classList.remove('active');
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').textContent = "Generated Password: " + password;
    outputDiv.style.display = 'block';
    outputDiv.classList.add('active');
}