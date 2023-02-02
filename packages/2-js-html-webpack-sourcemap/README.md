# 2-js-html-webpack-sourcemap

- js-html-webpack-sourcemap__1

    - `file` 型的调试方式，对 target-file 进行通讯连接。
        
        在**目标浏览器**（Chrome）中运行代码前，浏览器会处理好代码的源映射（sourcemap），将映射到的源文件中的**断点内容**给记录下来。随后给**浏览器平台的调试器**（Chrome DevTools Debugger）使用。
        使用时，调试效果是同步的。即：**浏览器平台的调试器**、**VSCode Debugger** 的调试效果是同步的，其中一方点「跳过」时，另外一方也会跟着一起「跳过」。