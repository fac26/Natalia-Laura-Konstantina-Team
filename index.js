function validateMyForm() {
    var name = document.forms.contactForm.name.value;
    var companyName = document.forms.contactForm.com.value;
    var email = document.forms.contactForm.email.value;
    var message = document.forms.contactForm.message.value;

    var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; // Javascript reGex for email validation
    var validateText = /\d+$/g; // Javascript reGex for Name validation

    if (name == '' || name.trim().length === 0 || validateText.test(name)) {
      window.alert('Please tell us your name');
      return false;
    }

    if (companyName == '' || companyName.trim().length === 0 || validateText.test(companyName)) {
      window.alert('Please tell us your Company\'s name');
      return false;
    }

    if (email == '' || !validateEmail.test(email)) {
      window.alert('Please enter a valid e-mail address.');
      return false;
    }

    if (message == '' || message.trim().length === 0 || validateText.test(message)) {
      window.alert('Please enter your message.');
      return false;
    }
    
    window.alert('Thank you for contacting us');
    return true;
  }