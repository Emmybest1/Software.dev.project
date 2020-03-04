(function() {
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

      db.collection('EuasPanky')
        .add(formData)
        .then(() => {
          console.log('SAVING PASSED');
          console.log(
            form.department.value,
            form.senderName.value,
            form.senderEmail.value
          );
        })
        .catch(err =>
          console.log('SAVING FAILED' + '\n' + '*******' + err + '*******')
        );
      form.reset();
    });
  };
  handleFormSumition();
})();
