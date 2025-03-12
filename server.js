const express = require('express');
const bodyParser = require('body-parser');
const readlineSync = require('readline-sync');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form page (ensure you have a form.html file in the public folder)
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'https://amanhoster.github.io/form2/form/form.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  // Get form data
  const { full_name, id, section, email, phone_number, address, problem } = req.body;
    
    console.log("Received Form Data:");
    console.log(`Full Name: ${full_name}`);
    console.log(`ID: ${id}`);
    console.log(`Section: ${section}`);
    console.log(`Email: ${email}`);
    console.log(`Phone Number: ${phone_number}`);
    console.log(`Address: ${address}`);
    console.log(`Problem: ${problem}`);
    
    res.send("Form submitted successfully! we will announce soon!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

