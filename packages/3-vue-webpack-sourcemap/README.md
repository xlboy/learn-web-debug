# 3-vue-webpack-sourcemap

- vue-webpack-sourcemap__1

    - `远程 url` 的调试方式，对 target-url 进行通讯连接。
        
        - 影响 sourcemap-url 映射的关键点为两处地方
        
            -  一是 `Vue-Cli` 的 sourcemap 配置默认为**带有hash**的形式（eval-cheap-module-source-map），这会影响到**URL至本地文件的路径映射**

            - 二是 **目标浏览器**（Chrome） 解析出的源码文件路径（sourcemap-url）是带有 `webpack://` 的（可能是因为用了 `远程 url` 的原因，而前一个例子[2]是采用的 `本地 file`，有相对路径的因素在里面）。所以需要在 `launch.json 配置文件` 中对 `sourceMapPathOverrides` 进行配置，将 `webpack://` 的路径映射到本地文件的路径上。
