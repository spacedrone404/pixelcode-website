function printContent() {
  const contentToPrint = document.querySelector("body");

  if (!contentToPrint) return console.error("body not found");

  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = contentToPrint.outerHTML;

  let screenWidth = window.screen.width,
    screenHeight = window.screen.height,
    width = 1280,
    height = 880,
    left = Math.round(screenWidth / 2 - width / 2),
    top = Math.round(screenHeight / 2.8 - height / 2.8);

  let win = window.open(
    "",
    "_blank",
    `toolbar=no,location=no,status=no,menuBar=no,resizable=yes,width=${width},height=${height},top=${top},left=${left}`
  );

  win.document.write("<html><head>");
  win.document.write(`<p class="header-title">DEMO PRINT</p>`);

  win.document.write(
    `<style>           
        body {
            background-color: #000 !important;
          }

        .header-title {
        font-size: 68px;
        color: red;
        }


      </style>`
  );

  win.document.write(tempDiv.innerHTML);

  win.document.write("</body></html>");
  win.document.close();

  setTimeout(() => {
    win.print();
    win.close();
  }, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#printButton")
    .addEventListener("click", printContent);
});
