# 1-base

- base__1
    
    - 通过 `VSCode Debugger` 与 `Web服务` 进行通讯连接（配合 Web服务 的宿主浏览器环境——`Chrome DevTools`），来达到调试目的

    - 可在其中根据 `VSCode Debugger` 的 launch.json 配置文档来自定义配置（如：skipFiles, sourceMapPathOverrides 等）

- base__2

    - 将通讯连接方式调为 `附加`（attach），即可与设置好的 `浏览器 Debug 服务` 进行通讯连接

        - Edge 设置[参考资料](https://learn.microsoft.com/en-us/microsoft-edge/devtools-protocol-chromium/)


- base__3

    - 使用 `启动`（launch）的方式。并取消掉默认的**临时文件夹缓存**，采用**持久的本地文件夹缓存**——`userDataDir`

    - 通过 `runtimeArgs` 属性来添加 **启动浏览器时的命令参数**，如：`--remote-debugging-port=9222`、`--user-data-dir=xxx` 等

    - Chrome 启动命令的参考资料

        - https://www.cnblogs.com/gurenyumao/p/14721035.html

        - https://docs.google.com/document/d/1IjrCvTqL3J92DPXNzkCPYRi6Ftb2v6aCbncpxh9ozy4/edit