function BMI(){
    let heightCM = Number(document.getElementById("heightCM").value);
    let heightInches = document.getElementById("heightInches").value;
    let weightKg = Number(document.getElementById("weightKg").value);
    let weightLbs = document.getElementById("weightLbs").value;

    if (heightCM === 0){
      //console.log(height);
      alert("Please fill your height")
    }
      else if (weightKg === 0) {
        alert("Please fill your weight")
      }
        else {
          if (heightInches == "inches") heightCM /= 0.39370079;
          if (weightLbs == "lbs") weightKgt /= 2.20462;

          let BMI = Math.round(weightKg / Math.pow(heightCM, 2) * 10000);

          document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

          let outer = Math.round(BMI * 100) / 100

          if (outer < 18.5) {
            document.getElementById("comment").innerText = "Underweight";
          }
            else if (outer >= 18.5 && outer <= 25) {
              document.getElementById("comment").innerText = "Normal";
            }
              else if (outer >= 25 && outer <= 30) {
                document.getElementById("comment").innerText = "Obese";
              }
                else if (outer > 30) {
                  document.getElementById("comment").innerText = "Overweight";
                }
                  else {
                    alert("Please Fill in everything correctly")
                  }
        }
}