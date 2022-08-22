window.addEventListener('load', function(){

    let form = document.querySelector('.form-register');

    form.addEventListener('submit', (e) =>{

        let errors = [];

        let fullName = document.querySelector('#fullName')
        let email = document.querySelector('#email')
        let avatar = document.querySelector('#avatar')
        let password = document.querySelector('#password')

        if(fullName.value == ""){
            fullName.classList.add('is-invalid')
            errors.push('El campo no puede estar vacío')
        }else{
            fullName.classList.remove('is-invalid')
            fullName.classList.add('is-valid')
        }

        if(errors.length > 0){

            e.preventDefault();

        }else{
            form.submit();
        }

    })


})