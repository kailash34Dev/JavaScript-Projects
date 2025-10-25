const cells = document.querySelectorAll(".cell");
const heading = document.querySelector(".heading");
const resetBtn = document.querySelector(".reset-btn");
let data = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let currentPlayer = "X";
let gameOver = false;

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (gameOver) {
            return;
        }

        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        if (data[row][col] === "") {
            data[row][col] = currentPlayer;
            if (currentPlayer === "X") {
                cell.innerHTML = `<img src="images/cross.png" class="icon">`;
            }

            if (currentPlayer === "O") {
                cell.innerHTML = `<img src="images/circle.png" class="icon">`;
            }

            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

function checkWin() {
    if (data[0][0] === data[0][1] && data[0][1] === data[0][2] && data[0][2] !== "") {
        if (data[0][2] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    } else if (data[1][0] === data[1][1] && data[1][1] === data[1][2] && data[1][2] !== "") {
        if (data[1][2] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    } else if (data[2][0] === data[2][1] && data[2][1] === data[2][2] && data[2][2] !== "") {
        if (data[2][2] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    } else if (data[0][0] === data[1][0] && data[1][0] === data[2][0] && data[2][0] !== "") {
        if (data[2][0] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    } else if (data[0][1] === data[1][1] && data[1][1] === data[2][1] && data[2][1] !== "") {
        if (data[2][1] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    } else if (data[0][2] === data[1][2] && data[1][2] === data[2][2] && data[2][2] !== "") {
        if (data[2][2] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    } else if (data[0][0] === data[1][1] && data[1][1] === data[2][2] && data[2][2] !== "") {
        if (data[2][2] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    } else if (data[0][2] === data[1][1] && data[1][1] === data[2][0] && data[2][0] !== "") {
        if (data[2][0] === "X") {
            heading.innerHTML = `Player <img src="images/cross.png" class="text-icon"> Wins!`;
            gameOver = true;
        } else {
            heading.innerHTML = `Player <img src="images/circle.png" class="text-icon"> Wins!`;
            gameOver = true;
        }
    }
}

resetBtn.addEventListener("click", () => {
    data = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    cells.forEach((cell) => {
        cell.innerHTML = "";
    })
    currentPlayer = "X";
    heading.textContent = "Tic Tac Toe";
    gameOver = false;
});