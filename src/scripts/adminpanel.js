(function() {
  const studentsInfoContainer = document.querySelector(
    '.studentsInfoContainer'
  );

  const updateUi = (doc, id) => {
    const htmlTemplate = `
      <ul data-id="${id}" class="studentDetailsWrapper">
          <li class="type">Submission Type: ${doc.category} </li>
          <li class="departmen">Student Department: ${doc.department} </li>
          <li class="name">Submitted By: ${doc.name} </li>
          <li class="email">Student Email: ${doc.email} </li>
          <li class="message">Message: ${doc.message} </li>
          <li class="time">Submission Time: ${doc.created_at.toDate()} </li>
      </ul>`;

    studentsInfoContainer.innerHTML += htmlTemplate;
  };

  const getStudentDetails = () => {
    db.collection('EuasPanky').onSnapshot(snapshot => {
      snapshot.docChanges().map(change => {
        if (change.type == 'added') {
          updateUi(change.doc.data(), change.doc.id);
          console.log(change.doc.data(), change.doc.id);
        }
      });
    });
  };
  getStudentDetails();
})();
