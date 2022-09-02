
window.addEventListener('load', function(){


    let form = document.querySelector('.form-register');
    const inputs = document.querySelectorAll('input');
    // const btnRegister = document.querySelector('btn-register');

    const validations = {
        fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letras y espacios, pueden llevar acentos
        email: /^[a-zA-Z0-9_.+-]+@ [a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        // avatar:,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/ 
        //min8 max15 unaMayus unaMin caracterEspecial unDigito 
    }

    const validator = (e)=>{
        switch(e.target.name){
            case "fullName":
                validarCampo(validations.fullName ,e.target, '.fullName');
            break;

            case "email":
                validarCampo(validations.email ,e.target, '.email');
            break;

            case "password":
                validarCampo(validations.password ,e.target, '.password');
            break;

        }
    }

    const validarCampo = (validation, input, campo) => {
        if(validation.test(input.value)){
            document.querySelector(`${campo}`).style.border = 'rgb(34, 147, 6) solid 2px'
            document.querySelector('i.fa-solid.fa-circle-exclamation').style.display = 'none'
            document.querySelector('i.fa-solid.fa-circle-check').style.display = 'block'
            document.querySelector('p.error').style.display = 'none'
        }else{
            document.querySelector(`${campo}`).style.border = '#ff4621 solid 2px'
            document.querySelector('i.fa-solid.fa-circle-check').style.display = 'none'
            document.querySelector('i.fa-solid.fa-circle-exclamation').style.display = 'block'
            document.querySelector('p.error').style.display = 'block'

        }
    }

    inputs.forEach((input)=>{
        input.addEventListener('keyup', validator);
        input.addEventListener('blur', validator)
    })

   
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
    })



})