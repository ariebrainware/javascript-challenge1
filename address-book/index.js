// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else
                    form.classList.add('was-validated');

            }, false);
        });
    }, false);
})();

const firstname = document.getElementById('firstname').value
const lastname = document.getElementById('lastname').value
const address = document.getElementById('address').value
const phoneNumber = document.getElementById('phonenumber').value
const email = document.getElementById('email').value
const formAdd = document.getElementById('form-add')
const resultField = document.getElementById('result-field')


const save = (firstname,lastname,address,phoneNumber,email) => {
    window.localStorage.setItem('firstname', firstname)
    window.localStorage.setItem('lastname', lastname)
    window.localStorage.setItem('address', address)
    window.localStorage.setItem('phoneNumber', phoneNumber)
    window.localStorage.setItem('email', email)
    console.log('Successfully save the data')
}

const addToDOM = (x) => {
    x.preventDefault()
    save(firstname, lastname, address, phoneNumber, email)

    const fName = window.localStorage.getItem('firstname')
    const lName = window.localStorage.getItem('lastname')
    const address = window.localStorage.getItem('address')
    const pNumber = window.localStorage.getItem('phoneNumber')
    const email = window.localStorage.getItem('email')
    const base = `<div>Firstname : ${fName}</div>
<div>Lastname : ${lName}</div>
<div>Address : ${address}</div>
<div>Phone Number : ${pNumber}</div>
<div>Email : ${email}</div>`

    resultField.appendChild(base)
}
formAdd.addEventListener('submit', addToDOM)