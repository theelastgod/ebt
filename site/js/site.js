const bal = document.getElementById("bal");
const states = ["$0.00", "$0.00", "-$0.01", "$0.00", "DECLINED"];
let i = 0;
setInterval(() => {
  i = (i + 1) % states.length;
  bal.textContent = states[i];
}, 900);
