document.getElementById('formContact').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message ! Nous vous répondrons prochainement.');
  this.reset();
});