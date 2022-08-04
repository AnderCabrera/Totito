let turn = 'O'; // first turn : O
let img = '<img src="./img/equis.png" class="size">';
let infoDiv = document.getElementById('title');
let cells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function toggleTurn() {
  if (turn === 'O') {
    turn = 'X';
    img = '<img src="./img/equis.png" class="size">'
    infoDiv.innerText = `Turn of : O`;
  } else {
    turn = 'O';
    img = '<img src="./img/circulo.png" class="size">'
    infoDiv.innerText = `Turn of : X`;
  }
  return turn;
}

function canvasClicked(cell) {
  let cellIndex = cell.getAttribute('cell');
  if (!cells[cellIndex]) {
    cells[cellIndex] = toggleTurn();
    cell.innerHTML = img;
  }

  cell.addEventListener('mouseover', () => {
    cell.style.cursor = 'not-allowed';
  });

  checkWinner();
}

function checkWinner() {
  combinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let i = 0; i < combinations.length; i++) {
    let condition = combinations[i];
    if (
      cells[condition[0]] != 0 &&
      cells[condition[0]] == cells[condition[1]] &&
      cells[condition[1]] == cells[condition[2]]
    ) {
      alert(`The winner is ${turn}`);
      playAgain();
      return;
    }

    let cellsFilled = true;

    for (let i = 1; i < cells.length; i++) {
      if (!cells[i]) {
        cellsFilled = false;
      }
    }
    if (cellsFilled) {
      alert('game is draw');
      playAgain();
      return;
    }
  }
}

function playAgain() {
  let confirmation = confirm('¿Do you want to play again?');
  if (confirmation === true) {
    window.location.reload();
  } else {
    alert('bye');
    window.close();
  }
}
