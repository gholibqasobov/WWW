function checkForm(el) {

    // It's either possible to get element by its id or just call the element( in our case form) and get the childs by their name attribute

    let fullName = el.name.value;
    let userName = el.username.value;
    let email = el.email.value;
    let phoneNumber = el.phone_number.value;
    let password = el.password.value;
    let cnfrmPass = el.cnfrm_pass.value;
    let gender = el.gender.value;
    let error = '';


    if(fullName === '' || userName === '' || email === '' || phoneNumber === '' || password === '' || cnfrmPass === '' || gender === '') {
        error = "Please, fill in all the spaces in the form!"
    } else if(fullName.length < 8) {
        error = "Please, input a valid name!";
    } else if(userName.length < 6){
        error = "Username should consist of more than 6 letters"
    } else if (password.length < 8 || cnfrmPass.length < 8){
        error = "Password should be 8 symbols long!"
    }else if(password !== cnfrmPass) {
        error = "Passwords do not match!"
    } else if(password.split(' ').length > 1){
        error = "Password shouldn't consist an empty space";
    }

    if (error != '') {
        document.getElementById("error").textContent = error;
    } else{
        alert("The application was sent successfully!");
        window.location = 'D:/Portfolio/index.html'
    }

    return false;
}