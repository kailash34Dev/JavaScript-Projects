const toastBox = document.querySelector(".toast-box");
const toastBtns = document.querySelectorAll("#show-toast-btn");
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
const errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> Error Occurred';
const invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid Credentials';

function showToast(type) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    if(type === "success") {
        toast.classList.add("success");
        toast.innerHTML = successMsg;
    }else if(type === "error") {
        toast.classList.add("error");
        toast.innerHTML = errorMsg;
    }else {
        toast.classList.add("invalid");
        toast.innerHTML = invalidMsg;
    }
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

toastBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        showToast(btn.className);
    });
});