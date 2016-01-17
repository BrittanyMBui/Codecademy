var main = function() {
  //firstname
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
      $('.first-name-error').text("Please enter your first name.");
    }
    return false;
  })
  
  //lastname
  $('form').submit(function() {
    var lastName = $('#last').val();
    
    if (lastName === "") {
      $('.last-name-error').text("Please enter your last name.");
    }
    return false;
  })
  
  //email
  $('form').submit(function() {
    var email = $('#email').val();
    
    if (email === "") {
      $('.email-error').text("Please enter your email address.");
    } else if (email === "brittymbui@gmail.com") {
      $('.email-error').text("This email is already taken.");
    }
    return false;
    
  })
  
  //password
  $('form').submit(function() {
    var password = $('#password').val();
    
    if (password === "") {
      $('.password-error').text("Please enter a password.");
    } else if (password.length < 8) {
      $('.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");
    }    
    return false;
    
  })
  
}

$(document).ready(main);