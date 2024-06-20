'use stict'

import User from "./componants/User.js"

let user = new User()

const nameDom = document.getElementById('name')
const emailDom = document.getElementById('email')
const ageDom = document.getElementById('age')
const form = document.querySelector('form')


nameDom.addEventListener('input', (event) =>{

    const currentValue = event.target.value

    user.name.checkName(currentValue);
})

emailDom.addEventListener('input', (event) =>{

    const currentValue = event.target.value

    user.email.checkMail(currentValue);
})

ageDom.addEventListener('input', (event) =>{

    const currentValue = event.target.value

    user.age.checkAge(currentValue);
})

form.addEventListener('submit', (event) => {


    

    const utilisateur = {
        name : nameDom.value,
        email : emailDom.value,
        age : ageDom.value
    }

    if (utilisateur.name != '' || utilisateur.email != '' || utilisateur.age != ''){
        localStorage.setItem('utilisateur', JSON.stringify(utilisateur))
        
    } else {
        alert('Veuillez remplir les champs vides')
    }

})


