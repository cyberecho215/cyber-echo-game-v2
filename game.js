window.onload = function() {
  const grid = document.getElementById("grid");
  const info = document.getElementById("info");

  console.log("grid element:", grid);
  console.log("info element:", info);

  if (!grid || !info) {
    console.error("Grid or info element not found. Check your index.html IDs!");
    return;
  }

  const size = 8;
  let turn = 1;

  const players = {
    1: { x: 0, y: 0 },
    2: { x: 7, y: 7 }
  };

  function drawGrid() {
    grid.innerHTML = "";
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const cell = document.createElement("div");
        cell.className = "cell";

        if (players[1].x === x && players[1].y === y) {
          cell.innerHTML = "<span class='p1'>P1</span>";
        }

        if (players[2].x === x && players[2].y === y) {
          cell.innerHTML = "<span class='p2'>P2</span>";
        }

        grid.appendChild(cell);
      }
    }
    info.innerText = Player ${turn}'s turn;
  }

  function move(dir) {
    const p = players[turn];

    if (dir === "up" && p.y > 0) p.y--;
    if (dir === "down" && p.y < size - 1) p.y++;
    if (dir === "left" && p.x > 0) p.x--;
    if (dir === "right" && p.x < size - 1) p.x++;

    turn = turn === 1 ? 2 : 1;
    drawGrid();
  }

  drawGrid();
  window.move = move;
};
