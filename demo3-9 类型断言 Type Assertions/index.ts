let message: any
message = 'aaa'

// 使用string类型的方法时，会发现IDE并没有自动联想提示该类型的方法
message.toString()

// 这是因为message在一开始就已经定义为any类型，所以它一直就是any类型
// 此时即使通过赋值改变了它的变量类型，但也还是any，所以没有自动联想提示

// ----------------------------------------------------------------

// 第一种方法
// (<string>message)
// 对类型断言、告诉编译器这是个什么类型之后，就会有自动联想提示了
let bbb = (<string>message).toLocaleLowerCase()


// 第二种方法
// (message as string)
let ccc = (message as string).toLowerCase()


// 类型断言请在自己对该变量有100%的把握下再进行断言操作，否则将有可能引起较大错误
