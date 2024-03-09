document.getElementById('calculateBtn').addEventListener('click', function() {
  calculateBMI();
});

document.getElementById('resetBtn').addEventListener('click', function() {
  reset();
});

function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var weightUnit = document.getElementById('weightUnit').value;
  var heightUnit = document.getElementById('heightUnit').value;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerText = "Please enter valid weight and height.";
      return;
  }

  // Convert height and weight to metric units
  if (weightUnit === 'lbs') {
      weight *= 0.453592; // 1 lb = 0.453592 kg
  }
  if (heightUnit === 'in') {
      height *= 0.0254; // 1 inch = 0.0254 meters
  } else if (heightUnit === 'cm') {
      height *= 0.01; // 1 cm = 0.01 meters
  }

  var bmi = weight / (height * height);
  bmi = bmi.toFixed(2); // Round to 2 decimal places

  var resultText = "Your BMI is: " + bmi;

  if (bmi < 18.5) {
      resultText += " (Underweight)";
      highlightCategory('underweight');
  } else if (bmi >= 18.5 && bmi < 25) {
      resultText += " (Normal weight)";
      highlightCategory('normal');
  } else if (bmi >= 25 && bmi < 30) {
      resultText += " (Overweight)";
      highlightCategory('overweight');
  } else {
      resultText += " (Obese)";
      highlightCategory('obese');
  }

  document.getElementById('result').innerText = resultText;
}

function reset() {
  document.getElementById('weight').value = "";
  document.getElementById('height').value = "";
  document.getElementById('result').innerText = "";
  document.querySelectorAll('.category').forEach(function(el) {
      el.style.backgroundColor = '';
  });
}

function highlightCategory(categoryId) {
  document.querySelectorAll('.category').forEach(function(el) {
      if (el.id === categoryId) {
          el.style.backgroundColor = '#ffd966'; // Light yellow
      } else {
          el.style.backgroundColor = '';
      }
  });
}

