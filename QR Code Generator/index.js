const inputValue = document.querySelector('#input-text');
const errorMsg = document.querySelector('.error');
const generateQRBtn = document.querySelector('#generate-qr-btn');
const imgBox = document.querySelector('.img-box');
const qrImg = document.querySelector('#qr-img');
const downloadBtn = document.querySelector('.download-btn');

function generateQR() {
    errorMsg.style.display = "none";
    inputValue.classList.remove('error-input');
    imgBox.style.display = "none";
    const inputData = inputValue.value.trim();
    if (inputData === "") {
        showError();
        return;
    }
    const qrApi = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputData)}&size=200x200`;
    qrImg.src = qrApi;
    qrImg.onload = () => {
        imgBox.style.display = "block";
        generateQRBtn.innerText = "Generate QR Code";
        generateQRBtn.disabled = false;
    }
}

function showError() {
    errorMsg.style.display = "block";
    inputValue.classList.add('error-input');
    generateQRBtn.innerText = "Generate QR Code";
    generateQRBtn.disabled = false;
    validateInput();
}

function validateInput() {
    inputValue.addEventListener('input', () => {
        if (inputValue.value.trim() !== "") {
            errorMsg.style.display = "none";
            inputValue.classList.remove('error-input');
        } else {
            errorMsg.style.display = "block";
            inputValue.classList.add('error-input');
        }
    })
}

generateQRBtn.addEventListener('click', () => {
    generateQRBtn.innerText = "Loading...";
    generateQRBtn.disabled = true;
    generateQR();
});

downloadBtn.addEventListener('click', async () => {
    if (qrImg.src) {
        try {
            const response = await fetch(qrImg.src);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);
        } catch (err) {
            alert("Download failed");
        }
    }
});