
const avanca = document.querySelectorAll('.BTNPX');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.AT');
        const pxp = 'PSS-' + this.getAttribute('data-proximo');
        atual.classList.remove('AT');
        document.getElementById(pxp).classList.add('AT')
    })
} )

