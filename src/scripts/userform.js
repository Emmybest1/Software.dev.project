(function() {
  /**
   *
   * @function{RESPONSIBLE FOR HANDLING FORM SUBMITION TO DB}
   */
  const handleFormSumition = () => {
    const form = document.querySelector('form');

    const now = new Date();

    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = {
        name: form.senderName.value,
        email: form.senderEmail.value,
        department: form.department.value,
        category: form.category.value,
        message: form.userMessage.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
      };

      /**
       *
       * @function{RESPONSIBLE FOR SAVING VALUE TO LOCAL STORAGE}
       */
      localStorage.setItem('name', form.senderName.value);
      localStorage.setItem(' email', form.senderEmail.value);
      localStorage.setItem('department', form.department.value);
      localStorage.setItem('category', form.category.value);

      db.collection('EuasPanky')
        .add(formData)
        .then(() => {
          console.log('SAVING PASSED');
        })
        .catch(err =>
          console.log('SAVING FAILED' + '\n' + '*******' + err + '*******')
        );
      form.reset();
    });
  };
  handleFormSumition();

  /**
   *
   * @function{RESPONSIBLE FOR GETTING VALUE FROM LOCAL STORAGE TO FORM FIELD}
   */
  const getValueFromLocalStorageToFormFields = () => {
    const form = document.querySelector('form');
    document.addEventListener('DOMContentLoaded', () => {
      form.senderName.value = localStorage.getItem('name');
      form.senderEmail.value = localStorage.getItem('email');
      form.department.value = localStorage.getItem('department');
      form.category.value = localStorage.getItem('category');

      console.log(form.senderName.value = localStorage.getItem('name'))
    });
  };
  getValueFromLocalStorageToFormFields();
})();
