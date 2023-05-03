const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    //adding copy to clipboard function 
    navigator.clipboard.writeText(randomCode)
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)