$(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      var formData = {
        name: $('input[name=name]').val(),
        email: $('input[name=email]').val(),
        mobile: $('input[name=mobile]').val(),
        message: $('textarea[name=message]').val()
      };
      emailjs.send('evolve_service', 'evolve_01', formData)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Your message has been sent successfully!');
           $('#contact-form')[0].reset();
        }, function(error) {
           console.log('FAILED...', error);
           alert('There was an error sending your message. Please try again later.');
        });
    });
  });