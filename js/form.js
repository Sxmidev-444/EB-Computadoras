const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mail');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const form = new FormData(this);
    
    // Restablecer los valores de los campos del formulario
    this.reset();
    
    // Configurar el enlace de correo electrónico
    $buttonMailto.setAttribute(
        'href',
        `mailto:info@ebcomputadoras.com?subject=${form.get('name')} ${form.get('email')}&body=${form.get('mensaje')}`
    );
    
    // Abrir el cliente de correo electrónico
    $buttonMailto.click();
}
