// resumeBuilder.ts

// Get form and display elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;

const nameDisplay = document.getElementById('nameDisplay') as HTMLElement;
const contactDisplay = document.getElementById('contactDisplay') as HTMLElement;
const educationDisplay = document.getElementById('educationDisplay') as HTMLElement;
const skillsDisplay = document.getElementById('skillsDisplay') as HTMLElement;
const experienceDisplay = document.getElementById('experienceDisplay') as HTMLElement;

// Generate resume on button click
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
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
const shareBtn = document.getElementById('shareButton');


// Function to make content editable and sync changes back to the form
function makeEditable(displayElement: HTMLElement, inputElement: HTMLInputElement | HTMLTextAreaElement) {
  displayElement.addEventListener('input', () => {
    inputElement.value = displayElement.textContent || "";
  });

  inputElement.addEventListener('input', () => {
    displayElement.textContent = inputElement.value;
  });
}
