document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const height = parseFloat(heightInput.value) / 100; // Convert to meters
        const weight = parseFloat(weightInput.value);

        if (!isNaN(height) && !isNaN(weight)) {
            const bmi = calculateBMI(height, weight);
            const bmiCategory = getBMICategory(bmi);
            resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
        } else {
            resultDiv.innerHTML = "Please enter valid height and weight.";
        }
    });

    function calculateBMI(height, weight) {
        return weight / (height * height);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi < 24.9) {
            return "Normal Weight";
        } else if (bmi < 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }
});
