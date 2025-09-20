(() => {
  'use strict';
  const quickForm = document.getElementById('quick-book-form');
  quickForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    if (!this.checkValidity()){
      this.classList.add('was-validated');
      return;
    }
    const name = this.name.value;
    const email = this.email.value;
    const workshop = this.querySelector('#workshop-select').value;
    alert('Booking confirmed for ' + name + ' (' + email + ') — ' + workshop + '.');
    this.reset();
    this.classList.remove('was-validated');
  });
})();
