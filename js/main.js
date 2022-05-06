const target = document.getElementById("responsiveMenu");
target.addEventListener ('click',() => {
  target.classList.toggle('open');
  const nav = document.getElementById('responsiveNav');
  nav.classList.toggle('in');
});
