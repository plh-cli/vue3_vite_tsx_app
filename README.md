## 安装yarn，安装了就跳过（也可不安装使用npm）
npm install -g yarn 

## 安装依赖
yarn 或 npm install

> 如果在vscode中执行yarn报禁止运行错误，以管理员身份运行Windows PowerShell，执行
set-ExecutionPolicy RemoteSigned命令，并输入y选项，之后继续执行yarn

## 启动
yarn dev 或 npm run dev


## 打包
* 开发环境：yarn build 或 npm run build
* 测试环境：yarn build-test 或 npm run build-test
* 生产环境：yarn build-pro 或 npm run build-pro
