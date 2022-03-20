// 1. Create Function to calculate BMI from weight (kg) , height (cm)
// https://www.diabetes.ca/managing-my-diabetes/tools---resources/body-mass-index-(bmi)-calculator
// calculateBmi(95, 177) -> 30.3

while(true){
  const inputBody = prompt('Please insert your body weight(kg.) and height(cm.)');
  if(inputBody === 'shutdown') break;
  console.log('Input', input)
// cal BMI

  const calcBmi = (inputBody) => {
    const bmiArray =  input.split(" ")
    console.log('bmiArray', bmiArray)
  }


}


// 2. Create Function to calculate BMI Result weight (kg) , height (cm)
// BMI							|Weight Status
//----------------------------------
// Below 18.5				|Underweight
// 18.5—24.9				|Normal
// 25.0—29.9				|Overweight
// 30.0 and Above		|Obese

// getBmiResult(95, 177) -> Obese

// 3. Create Factorial Function
// https://www.mathsisfun.com/numbers/factorial.html
// factorial(3) -> 6
// factorial(4) -> 24
// factorial(0) -> 1

// 4. function คิดเงินเดือนใน 1 ปี

// 5.
// function หักค่าลดหย่อน 60,000
// ส่วนตัว 60,000
// isSingle 30,000 ไม่เกิน 2
// isShopDee -30,000

// 6. function คำนวณภาษี

// 7. function คิดภาษีสุทธิ