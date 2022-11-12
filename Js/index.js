import  signinFirebase  from "../config/firebase.js";

window.signin = async function(){

    // getting user email and password from the field

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{
        await signinFirebase(email, password);
        await swal({
            title: "Good job!",
            text: "successfully Log In",
            icon: "success",
          });
        
        window.location.href="../views/dashboard.html"
        
    }catch(e){
        alert(e.message);
    }

}

// export default signinFirebase();

