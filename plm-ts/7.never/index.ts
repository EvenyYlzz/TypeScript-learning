function thorwError1(msg: string, errCode: number) {
  throw {
    msg,
    errCode
  }

  // aaaaaa
}

function thorwError2(msg: string, errCode: number): never {
  throw {
    msg,
    errCode
  }

  // aaaaaa
}

function whileLoop(): never {
  while(true) {
    console.log('true')
  }
}

// 区别于void、当一个函数返回空值应使用void
// 但是当一函数永不返回、或者总是抛出错误，那么返回值就为never