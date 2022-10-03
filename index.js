function validateMyForm() {
    var name = document.forms.contactForm.name.value;
    var email = document.forms.contactForm.email.value;

    var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; // Javascript reGex for email validation
    var validateText = /\d+$/g; // Javascript reGex for Name validation

    if (name == '' || validateText.test(name)) {
      window.alert('Please enter your name');
      returnToPreviousPage();
      return false;
    }

    if (email == '' || !validateEmail.test(email)) {
      window.alert('Please enter a valid e-mail address.');
      email.focus();
      returnToPreviousPage();
      return false;
    }

    window.alert('Thank you for contacting us');
    return true;
  }