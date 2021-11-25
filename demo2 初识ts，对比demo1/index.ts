var input1 = document.getElementById('input1') as HTMLInputElement
var input2 = document.getElementById('input2') as HTMLInputElement
var btn1 = document.getElementById('btn1') as HTMLLIElement
function add (num1: number, num2: number) {
  return num1 + num2
}

btn1.addEventListener('click', () => {
  alert(add(+input1.value, +input2.value))
})