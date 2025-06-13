document.getElementById("simulateUpdate").onclick = () => {
  const target = document.getElementById("eta");
  target.classList.add("completed");
  target.innerHTML = `
    <div class="label">Estimated Port Arrival (ETA)</div>
    <div class="date">Last Updated: ${new Date().toLocaleDateString()}</div>
  `;
};