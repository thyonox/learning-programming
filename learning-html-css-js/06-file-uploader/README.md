因为后端服务器放在同目录下，当上传成功之后，LiveServer检测到文件变化会自动刷新浏览器，所以需要在配置文件中将后端服务器文件夹排除
```json
"liveServer.settings.ignoreFiles": [
    "server/**",
    "**/*.log",
    "**/*.tmp"
]
```