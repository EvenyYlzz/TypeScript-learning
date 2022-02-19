let anyValue: any = 666
anyValue = true
anyValue = 'ddd'
anyValue = {}

anyValue() // 运行调用时才会报错，这就有点像JS

// toUpperCase是string类型的方法，但这也没有报错，正是因为它是any
anyValue.toUpperCase()

// 既然typescript是强类型语言，为什么ts还引入any来动态支持各种类型呢？
// 1.加速开发过程，避免太冗长，没必要的类型定义
// 2.对于Any，应该是要正确去看待
//   - 有些“大师”说用ts，就一定不能用any，但实际真的如此吗？
//   - 语言只是一种实现工具，如果为了不必要的规范降低了开发效率，带来的收益还小，那么我们宁可不遵守这些不必要的规范
//   - 而JS之所以可以这么多年经久不衰，也正是因为它的灵活性。而令人头疼的也是JS的灵活性，带来一些不可控的bug，所以结合ts的any，应视情况使用
//   - ts引入any，也是为了保留一定的JS灵活性，存在就肯定是有意义的
//   - 所以对ts的规范，如何定义一个正确的边界应该在实践中去总结，不断摸索出一套属于团队的规范

// ----------------------------------------------------------------------------------------

let anyValue1
anyValue1 = true
anyValue1 = 'ddd'
anyValue1 = {}

// ----------------------------------------------------------------------------------------

let unknownValue: unknown = 666

unknownValue = true
unknownValue = 'ddd'
unknownValue = {}

// unknown不保证类型，但是会保证类型的安全
// 也就是，使用unknown，需要做一定的判断，或者类型判断，确定了类型之后，才能正常使用它的方法、或者调用

// 直接用报错
unknownValue()
unknownValue.toUpperCase()

// 做类型判断后就不会报错
if (typeof unknownValue === 'function') {
  unknownValue()
}

if (typeof unknownValue === 'string') {
  unknownValue.toUpperCase()
}
