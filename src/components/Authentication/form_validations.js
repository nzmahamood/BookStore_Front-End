export const validateName = (name) => {
    if (!name) {
      return "Name is required";
    }
    return "";
};

export const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
      return "Email is required";
    }
    else if(!emailRegex.test(String(email).toLowerCase())){
        return "Email is not valid"
    }
    return "";
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)[A-Za-z\d]{6,}$/;
    if (password.length < 6) {
      return "Password must contain at least 6 charectors";
    }
    else if(!/\d/.test(password)){
        return "Password must contain atleast a number "
    }
    return "";
};

export const validateConfirmPassword = (password, confirmpassword) => {
    if (password !== confirmpassword) {
      return "Password does not match";
    }
    return "";
};

export const validateAcceptTerms = (acceptterms) =>{
    if(!acceptterms){
        return "Need to accept T&C to continue";
    }
    return "";
};

export const validatePass = (password) =>{
    if(!password){
        return "Please Enter Password";
    }
    return "";
};

export const validateSixCode = (code) =>{
    if(!code){
        return "Please Enter Code";
    }
    else if(code.length !== 6){
        return "Code must be six digits"
    }
    return "";
}