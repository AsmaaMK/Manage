const submitBtn = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

const isValidEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
};

const validateForm = () => {
  const email = emailInput.value;
  if (isValidEmail(email)) {
    errorMessage.classList.add('hidden');
    return true;
  } else {
    errorMessage.classList.remove('hidden');
    return false;
  }
};

submitBtn.addEventListener('click', validateForm);
emailInput.addEventListener('input', validateForm);