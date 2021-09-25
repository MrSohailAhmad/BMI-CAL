function getBmiValue() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;



    height = height * 12;
    height = height * 0.025; // now height will be in prefactly in meters


    let newBmiValue = weight / (Math.pow(height, 2));

    let bmiValue = Math.round(newBmiValue);
    document.getElementById("bmiValue").value = bmiValue;
}