const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");
const copyBtn = document.querySelector("#copyBtn");

const colorBg = () => {
  document.body.style.backgroundColor = color.value;
  text.textContent = `color code: ${color.value}`;
};

color.addEventListener("input", colorBg);

copyBtn.addEventListener("click", () => {
  const code = color.value;
  navigator.clipboard.writeText(code)
    .then(() => {
      copyBtn.textContent = 'copied!!';
      setTimeout(() => {
        copyBtn.textContent = 'copy';
      }, 1500);
    })
    .catch(() => {
      copyBtn.textContent = 'error';
    });
});
