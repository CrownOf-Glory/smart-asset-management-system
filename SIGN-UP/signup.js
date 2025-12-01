// document.getElementById("create-account").addEventListener("click", async function() {
   function submit1(){
  const surname = document.getElementById("surname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("useremail").value.trim();
  const department = document.getElementById("department").value.trim();
  const role = document.getElementById("role").value.trim();
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;


  if (role !== `Admin` || `Staff` || `Maintenance`){
    document.querySelector('.role-error').textContent = `Invalid role entered!: Enter correct role!`;

  }else{
    document.querySelector('.role-error').display = 'none';
  }
  if (password1 === password2){
  const password1 = document.getElementById("password1").value;
  }
  else {
    alert("Password does not match");
    document.querySelector('.role-error').textContent = ''
  }


  if (!surname || !email || !password1 || !lastname || !department || !role){
    document.getElementById("response").textContent = "All field is required!";
     document.querySelector('.role-error').textContent = '';
    // document.getElementById("response").style.display.color = 'red;'
  }else {
   
    document.getElementById("response").style.display = 'none' ;
  // if (surname || email || password1 || lastname || department || role){
  //   document.getElementById("create-account").onclick = "document.location = '/LOGIN/login.html'"  ;
  // }
    
    }
   if (surname && email && password1 && lastname && department && role == `Admin`,`staff`,`Maintenance`){
    document.getElementById('create-account').addEventListener('click', () => {
     window.location.href = '/LOGIN/login.html';
    });
   }else if (!surname || !email || !password1 || !lastname || !department || role !== `Admin`,`staff`,`Maintenance`){
    document.getElementById('create-account').addEventListener('click', () => {
     window.location.href = '';
    })

  }
}
//   }

//   const userData = { 
//     surname,
//     lastname,
//     email,
//     department,
//     role,
//     password
//   };

//   try {
//     const res = await fetch("saveUser.php", {
//       method: "POST",
//       header: {"Content-Type": "application/json"},
//       body: JSON.stringify(userData)
//     });

//     const result = await res.text();
//     document.getElementById("response").textContent = result;
//   }catch(err) {
//     document.getElementById("response").textContent = "Error sending data: " + err;
//   }
// });