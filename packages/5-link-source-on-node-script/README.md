# 5-link-source-on-node-script

> 核心思路与 `2-js-html-webpack-sourcemap` 的差不多，核心点也主要是**编译后的文件的 _sourcemap_**

### Steps

1. 先执行 `init.bat` 脚本（将**source 包**软链接至`node_modules` 中，并命名为`linked-library`）

2. 启用不同的调试脚本

---

- link-source-on-node-script\_\_1

  > launch 方式，可直接执行 `app.mjs`

  - 前置条件：

    1. 在 `app.mjs` 中的 `[调试脚本1-断点1]` 注释处添加断点

    2. 在 `source/main.mjs` 中的 `[断点2]` 注释处添加断点

  - 这种**直接执行**的方式，需要在*入口处*添加断点，否则无法触发 source 中的断点（或在 `launch.json` 中添加 `stopOnEntry: true`）

  - 之所以要在*入口处*（主领域）中添加断点，也是为了让 `VSCode Debugger` 能在主领域的断点运行处读取到相关文件的 sourcemap 所对应的 **VSCode 断点内容**（并非 js 的 debugger 命令）

    *** 

- link-source-on-node-script\_\_2

  > attach 方式，需要先启动 ws 调试服务

  - 前置条件：

    1. 在 `source/main.mjs` 中的 `[断点2]` 注释处添加断点

    2. 运行 `node --inspect-brk app.mjs`（启动本脚本对应的 ws 调试服务）

  - 这种**attach**的方式，不需要在*入口处*添加断点即可触发 source 中的断点（但调试工具会自动跳到*入口处*的函数先【标记 1】）

    ***

  - **PS：**

    - 如果不希望自动跳到*入口处*的函数（【标记 1】），则可以将 `launch.json -> skipFiles -> "**/source/webpack/**"` 去掉…这样，它就会跳到 `webpack/bootstrap` 处，而不是*入口处*的函数，换汤不换药…
