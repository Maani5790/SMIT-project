import {logoutfromfirebase } from "../config/firebase.js";

window.logout = async function () {
    try {
      await logoutfromfirebase();
      await swal({
        title: "Succesfully Logout",
        icon: "success",
        timer: 3000
      });
      window.location.href = "../index.html"
    } catch (e) {
      console.log(e.message);
    }
  };



