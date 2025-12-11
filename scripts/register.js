addEventListener("DOMContentLoaded", function(){
    document.querySelector('#registerBtn').addEventListener("click", addUser);
})

async function addUser() {
    const user = {
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value
    }

    const response = await fetch('http://localhost:3000/api/user',{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })

    if(response.ok) {
        const results = await response.text();
        alert("User registered successfully")

        //reset the form
        document.querySelector("form").reset();
    }
    else {
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
}