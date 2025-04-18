document.getElementById("form").addEventListener('submit', function (e) {
    e.preventDefault();
  
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById("result");
  
    if (gender && age && heightFeet >= 0 && heightInches >= 0 && weight) {
      const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;
      const bmi = weight / (heightInMeters * heightInMeters);
  
      let category = '';
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal Weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }
  
      result.innerHTML = `Your BMI: <strong>${bmi.toFixed(2)}</strong><br>Category: <strong>${category}</strong>`;
    } else {
      result.innerHTML = "Please fill all the fields correctly.";
    }
  });
  