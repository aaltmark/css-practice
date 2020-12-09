// validate the inputs
document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('form .field input');
    console.log(inputs)
    // listener for inputs 
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', validateInput);
    });

    function validateInput(e) {
        console.log(e.target.id)
        // array of states
        const states = ['valid', 'not-valid']; 
        let classes; 

        // if input is empty
        if (e.target.value.length === 0) {
            // classes is not valid
            classes = states[1]
        } else {
            classes = states[0]
        }

        // add valid or not valid to labels and remove previous class
        e.target.nextElementSibling.classList.remove(...states);
        e.target.nextElementSibling.classList.add(classes); 

        // generate or remove alert
        if (classes === 'not-valid') {
            // if an alert doesnt exist - add one 
            if (e.target.parentElement.nextElementSibling.classList[0] !== 'alert') {
                const errorDiv = document.createElement('div');
                errorDiv.appendChild(document.createTextNode('This field is mandatory'));
                errorDiv.classList.add('alert');
        
                // inject error in dom before the next field - between two input fields
                e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
            }
        // if input is valid 
        } else {
            // only run if alert exists 
            if (e.target.parentElement.nextElementSibling.classList[0] === 'alert') {
                // so we dont remove the password field as nextelement sibling
                e.target.parentElement.nextElementSibling.remove()

            }
        }
    }

    // show or hide the password
    const togglePassword = document.querySelector('.toggle-password')
    togglePassword.addEventListener('click', (e) => {
        const passwordInput = document.querySelector('#password')

        // check if show class exists on span element  
        if (e.target.classList.contains('show')) {
            // if it does remove it 
            e.target.classList.remove("show");
            e.target.textContent = 'Hide';

            passwordInput.type = 'text';
        } else {
            e.target.classList.add("show");
            e.target.textContent = 'Show';

            passwordInput.type = 'password';
        }
    })

})


