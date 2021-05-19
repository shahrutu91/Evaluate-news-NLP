import {updateUI} from './updateUI'
import { checkForUrl} from './urlChecker'


const  handleSubmit = (event) => {
    event.preventDefault()

    // check what text was put into the form field
    const errorMsg = document.getElementById('errorMsg')
    let url = document.getElementById('urlValue').value
    if (checkForUrl(url)) {
        fetch("http://localhost:8081/submit",{
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({url: url })
        })
        .then((res) => res.json())
        .then((res) => {
            updateUI(res);
            console.log(res)
        })
    }else{
        console.log(errorMsg, 'Please input a valid URL')
    }
    console.log("::: Form Submitted :::")
}

let submit = document.querySelector('#submit');
if (submit) {
    submit.addEventListener("click", handleSubmit)
};

export { handleSubmit }
export { updateUI }