let loginDiv = document.querySelector("#logindiv")
let signupDiv = document.querySelector("#sigupdiv")

let loginBtn = document.querySelector("#loginBtn")
let signupBtn = document.querySelector("#signupBtn")

let cancelBtn = document.querySelectorAll(".cancelBtn")

function loginFun() {
    loginDiv.style.display = "flex"
}

function signupFun(){
    console.log("Nnn")
    signupDiv.style.display = "flex"
}

cancelBtn[0].addEventListener("click", () => {
    loginDiv.style.display = "none"
})

cancelBtn[1].addEventListener("click", () => {
    signupDiv.style.display = "none"
})