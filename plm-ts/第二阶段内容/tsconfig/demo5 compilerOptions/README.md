- compilerOptions
  - `target` 字段指明经过 `TSC` 编译后的 `ECMAScript` 代码语法版本，默认值为 `ES3`

  - `module` 字段指明 `tsc` 编译后的代码应该符合何种“模块化方案”，可以指定的枚举值有：`none, commonjs, amd, system, umd, es2015, es2020`

  - `rootDir`：指定 `TypeScript` 识别读取的根目录，用于所有非声明输入文件的最长公共路径

  - `outDir`：输出目录，即 `tsc` 编译后的文件输出的文件夹路径（基于 `tsconfig.json` 文件的相对路径）

  - `jsx`：如果是有 jsx 语法需要支持的项目，可以设置值 preserve、react 等