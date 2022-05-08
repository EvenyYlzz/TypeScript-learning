function doSomething() {
  for(let i=0; i<5 ; i++) {
    console.log(i)
  }
  // 不提示报错
  console.log('finally i =', i)
}

doSomething()