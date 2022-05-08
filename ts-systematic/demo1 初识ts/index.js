var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var btn1 = document.getElementById('btn1')
function add (num1, num2) {
  return num1 + num2
}

btn1.addEventListener('click', () => {
  alert(add(input1.value, input2.value))
})