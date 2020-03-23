(function() {
    /**
     *
     * @function{*} the below function handles login
     * Its validates by using regeExp and then verifies using firebase
     */
    const handleLogin = () => {
      const form = document.querySelector('form');
      const validationRegExp = {
        emailRegExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        passRegExp: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
      };
      if (form)
        form.addEventListener('submit', e => {
          e.preventDefault();
          const loginDetails = {
            email: form.adminEmail.value,
            password: form.adminPassword.value
          };
  
          firebase
            .auth()
            .signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
            .then(() => {
              form.style.border = 'solid 1px green';
              location.assign('adminpanel.html');
            })
            .catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
  
              form.style.border = 'solid 1px red';
              alert(
                'ERROR CODE: ' +
                  errorCode +
                  '\n\n' +
                  'ERROR MESSAGE: ' +
                  errorMessage
              );
            });
          form.reset();
        });
    };
    handleLogin();
  })();