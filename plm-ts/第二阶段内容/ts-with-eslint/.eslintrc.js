module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
      // 禁止使用 var
      'no-var': "error",
      // 优先使用 interface 而不是 type
      '@typescript-eslint/consistent-type-definitions': [
        "error",
        "interface"
      ],
      // 统一使用T[]命名数组
      '@typescript-eslint/array-type': "error",
      // 禁止 @ts- 指令注释的使用
      '@typescript-eslint/ban-ts-comment': "error",
      // 禁用 {}、Function、object 这一类被作为类型标注
      '@typescript-eslint/ban-types': "error",
      // 不允许显式的any
      '@typescript-eslint/no-explicit-any': "error"
  }
}