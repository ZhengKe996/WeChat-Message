# 微信公众号消息推送 - Node.js 版（傻瓜式）

![微信公众号消息推送](/images/01.jpg)

不需要编程基础就能操作。

## 安装 Node 环境

[安装 Node 环境](https://nodejs.org/en/)

## 打开项目目录安装依赖

```bash
npm install --registry=https://registry.npm.taobao.org
```

## 微信公众平台

[微信公众平台](http://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index)

![微信公众平台](/images/02.png)

**让对象关注公众号，获取到对象的微信号(注意：这个微信号一定要通过微信公众平台获取)**
![微信公众平台](/images/04.png)

**新建消息推送模板**
这里点击`新增测试模板`
模板标题: 自定义，例如: 亲爱的，早上好!
模板内容参考:

```
{{date.DATA}}
城市：{{area.DATA}}
天气：{{weather.DATA}}
最低气温: {{lowest.DATA}}
最高气温: {{highest.DATA}}
降雨概率：{{pop.DATA}}%
今日建议：{{tips.DATA}}
寄言：
{{lizhi.DATA}}
```

![微信公众平台](/images/05.png)

**复制 appID 与 appsecret 、对象的微信号、消息推送模板 到 config/index.ts 中的指定位置** index.ts 文件中有相应的注释
![微信公众平台](/images/03.png)

## 对接数据平台

[天行数据平台](https://www.tianapi.com)
![天行数据平台](/images/06.png)

点击申请，按要求注册账号填写相关消息，即可。 申请成功后如下
![天行数据平台](/images/07.png)
![天行数据平台](/images/08.png)

![天行数据平台](/images/09.png)

**复制天行 key 到 config/index.ts 中 tx 的位置**
![天行数据平台](/images/10.png)

## 运行程序

打开命令行工具 输入`npm run start`
输出如图即可
![天行数据平台](/images/11.png)

## 项目部署(云服务器定时项目)

需要拥有一台云服务器，这里才用 Linux centos7.6

云服务器 Linux 安装 nodejs

[安装 Node 环境](https://nodejs.org/en/)

云服务器 Linux 安装 forever

```bash
npm install -g forever
```

进入项目目录 执行命令

```bash
cd wechat-message
forever start -c "npm run start" ./
```

由于云服务器 pm2 环境异常，ts-node 映射失败，所以才要 forever 做进程管理。
