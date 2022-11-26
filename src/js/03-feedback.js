import '../css/common.css';
import '../css/03-feedback.css';
 
const STORAGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector('.feedback-form'),
    label: {
    input: document.querySelector('[name="message"]'),
    textarea: document.querySelector('[name="email"]'),
  }
};
const message = {
    input: " ",
    textarea: " ",
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);
refs.label.input.addEventListener('input', onInputInput);
refs.label.textarea.addEventListener('input', onInputTextarea);


function onFormSubmit(evt) {
    evt.preventDefault();

  evt.currentTarget.reset();
  console.log(message);
    localStorage.removeItem(STORAGE_KEY);
};


function onInputInput(evt) {  
    message.input = evt.currentTarget.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(message));

  localStorage.getItem(STORAGE_KEY);
    


}
function onInputTextarea(evt) {
    message.textarea = evt.currentTarget.value;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
    
localStorage.getItem(STORAGE_KEY);

  


}


function populateLabel() {
     const savedMassege = localStorage.getItem('feedback-form-state');
    const parsedMassege = JSON.parse(savedMassege);

  if (parsedMassege) {
      
        refs.label.input.value = parsedMassege.input;
         refs.label.textarea.value = parsedMassege.textarea;
    }
}

populateLabel();



    
