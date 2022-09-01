
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
                if(validations.fullName.test(e.target.value)){
                    document.querySelector('.fullName').style.border = 'rgb(34, 147, 6) solid 2px'
                    document.querySelector('i.fa-solid.fa-circle-exclamation').style.display = 'none'
                    document.querySelector('i.fa-solid.fa-circle-check').style.display = 'block'
                }else{
                    document.querySelector('.fullName').style.border = '#ff4621 solid 2px'
                    document.querySelector('i.fa-solid.fa-circle-check').style.display = 'none'
                    document.querySelector('i.fa-solid.fa-circle-exclamation').style.display = 'block'
                    

                }

            break;

            case "email":

            break;

            case "password":

            break;

        }
    }

    inputs.forEach((input)=>{
        input.addEventListener('keyup', validator);
        input.addEventListener('blur', validator)
    })

   
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
    })

    

    // let errors = inputs.length;

    // inputs.forEach((input) => {
    //     input.addEventListener('blur', (e) => {
    //         if(
    //             e.target.value.length == 0 && !e.target.classList.add('invalid')
    //         ){
    //             e.target.classList.add('invalid');
    //             e.target.insertAdjacentHTML(
    //                 "afterend", "<p style='color:red; margin:5px'>Campo obligatorio</p>"
    //             );
    //         }
    //         if(
    //             e.target.value.length == 0 && e.target.classList.contains('valid')
    //         ){
    //             errors++;
    //         }
    //         if(e.target.value.length > 0){
    //             if(e.target.classList.contains('invalid')){
    //                 e.target.classList.remove('invalid');
    //                 e.target.nextElementSibling.remove();
    //             }
    //             e.target.classList.add('valid');
    //             errors--;
    //         }
    //         if(!errors){
    //             btnRegister.disabled = false;
    //         }else{
    //             btnRegister.disabled = true;
    //         }
    //     })
    // })




})