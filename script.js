const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardamos  el modo nocturno en localStorage.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode','false')
    }
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark'); 
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

//Scroll reveal
ScrollReveal().reveal('.showcase', {delay: 100});
ScrollReveal().reveal('.news-cards', { delay: 100});
ScrollReveal().reveal('.cards-banner-one', { delay: 100});

function getValue() {
  var value = document.getElementById('sample').value;
  enviado(value);
}

window.scrollTo({
    top: 0,
    behavior: 'smooth'
})