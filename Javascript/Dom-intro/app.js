// function change(){
//     let heading = document.getElementById('heading');
//     let btn = document.getElementById('btn');
//     heading.innerText = "Sucessfull"
//     btn.style.display = "none";
// }

function nameAdd() {
  let inputValue = document.getElementById("name");
  let name = document.getElementById("spanName");
  name.innerText = inputValue.value;
  inputValue.value = " ";
}

function splitBill() {
  let person = document.getElementById("person");
  let amount = document.getElementById("amount");
  let resultDiv = document.getElementById("result");
  let split = (amount.value / person.value).toFixed(2);
  resultDiv.innerText = split;
  person.value = "";
  amount.value = "";
}

function bmi() {
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let meterheight = height.value / 100;
  let result = document.getElementById("bmiResult");

  let bmi = weight.value / (meterheight * meterheight);

  if (bmi < 18.5) {
    result.innerText = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerText = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerText = "Overweight";
  } else if (bmi >= 30 && bmi <= 35) {
    result.innerText = "Obesity";
  } else {
    result.innerText = "Severe obesity";
  }

  height.value = "";
  weight.value="";
}
