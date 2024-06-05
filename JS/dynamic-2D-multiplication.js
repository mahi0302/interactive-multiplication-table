function getValue() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;

  if (a !== "" && b !== "" && a >= 2 && b <= 100) {
    let existingContainerSection = document.querySelector(".container-section");
    if (!existingContainerSection) {
      let containerSection = document.createElement("div");
      containerSection.className = "container-section";

      let resultDiv = document.createElement("div");
      resultDiv.id = "result";
      containerSection.appendChild(resultDiv);
      document.body.appendChild(containerSection);
    }

    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML =
      "<strong>Printing " +
      a +
      " table up to " +
      a +
      "*" +
      b +
      ":</strong><br>";

    let resultLine = document.createElement("div");
    resultLine.className = "result-line";
    for (let i = a; i <= a; i++) {
      for (let j = 1; j <= b; j++) {
        let result = i * j;
        let resultItem = document.createElement("span");
        resultItem.textContent = i + "*" + j + " = " + result + " |";
        resultItem.className = "result-item";
        resultLine.appendChild(resultItem);

        if (j % 10 === 0) {
          resultDiv.appendChild(resultLine);
          resultLine = document.createElement("div");
          resultLine.className = "result-line";
        }
      }
    }
    if (resultLine.childElementCount > 0) {
      resultDiv.appendChild(resultLine);
    }

    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
  } else {
    if (a === "" || b === "") {
      alert("Fields are empty, please fill them");
    } else if (a < 2 && b > 100) {
      alert(
        "'a' must be above or equal to 2 and 'b' must be below or equal to 100"
      );
    } else if (a < 2) {
      alert("'a' must be above or equal to 2");
    } else if (b > 100) {
      alert("'b' must be below or equal to 100");
    }
  }
}
