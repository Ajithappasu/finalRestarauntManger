
const tables = [];
const NUM_TABLES = 6; 

function initTables() {
  for (let i = 1; i <= NUM_TABLES; i++) {
    tables.push({
      id: i,
      name: `Table ${i}`,
      totalAmount: 0,
      totalItems: 0
    });
  }
}


function renderTables() {
  const container = document.getElementById("tables-container");
  container.innerHTML = ""; 

  tables.forEach((table) => {
    const div = document.createElement("div");
    div.className = "table-box";

    div.innerHTML = `
      <h3>${table.name}</h3>
      <p>Total Items: ${table.totalItems}</p>
      <p>Total Amount: ₹${table.totalAmount.toFixed(2)}</p>
    `;

    div.addEventListener("click", () => {
      alert(`You clicked on ${table.name}`);
    });

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTables();
  renderTables();
});
