// resumeBuilder.ts
// Get form and display elements
var nameInput = document.getElementById('name');
var contactInput = document.getElementById('contact');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
var nameDisplay = document.getElementById('nameDisplay');
var contactDisplay = document.getElementById('contactDisplay');
var educationDisplay = document.getElementById('educationDisplay');
var skillsDisplay = document.getElementById('skillsDisplay');
var experienceDisplay = document.getElementById('experienceDisplay');
// Generate resume on button click
var generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateResume);
function generateResume() {
    // Transfer form data to the resume preview
    nameDisplay.textContent = nameInput.value;
    contactDisplay.textContent = contactInput.value;
    educationDisplay.textContent = educationInput.value;
    skillsDisplay.textContent = skillsInput.value;
    experienceDisplay.textContent = experienceInput.value;
    // Add event listeners to synchronize editable content with the form
    makeEditable(nameDisplay, nameInput);
    makeEditable(contactDisplay, contactInput);
    makeEditable(educationDisplay, educationInput);
    makeEditable(skillsDisplay, skillsInput);
    makeEditable(experienceDisplay, experienceInput);
}
// Function to make content editable and sync changes back to the form
function makeEditable(displayElement, inputElement) {
    displayElement.addEventListener('input', function () {
        inputElement.value = displayElement.textContent || "";
    });
    inputElement.addEventListener('input', function () {
        displayElement.textContent = inputElement.value;
    });
}
