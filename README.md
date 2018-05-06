# CatalpaJudge

向服务器端上传代码，在服务器端运行后返回结果的一个程序。

开发ing……

## 1、设计目的

实现两个功能，一是提供onlinejudge一样的判题功能；二是提供在线测试代码的功能。

## 2、任务分配

- 后端——陆正扬
- 前端
	- 主页——达颢鸣
	- 判题区&测试区——顾晨、顾文韬
	- JavaScript——周子皓
- 题库——于吴桐

## 3、路由

`base_url`待商榷。

`/`：首页

`/question/<ID>/`：id为ID的问题页面

`/test/`：测试区

`/test/postCode/`：提交代码的ajax地址

`/test/getResult/`：获取结果的ajax地址

`/questions/`：获取问题列表的ajax地址（id为0时为获取所有大类列表，否则为获取该大类下的所有小题）

`/question/getQuestion/`：获取问题描述的ajax地址

`/question/postCode/`：提交代码的ajax地址

`/question/getResult/`：获取结果的ajax地址

## 4、浏览过程实现

用户浏览首页，发送ajax请求获取大类列表，渲染页面。点击后发送ajax请求获取该大类小题列表。

测试区：点击按钮后发送ajax提交代码，5秒后再次发送ajax获取结果，点击“刷新”按钮立即再次发送ajax获取结果。

答题区：发送ajax获取问题描述，填写代码后发送ajax提交代码，5秒后再次发送ajax获取结果。

## 5、ajax相关

`/test/postCode/`：post内容：uuid，代码，语言；返回：无

`/test/getResult/`：get参数：uuid；返回：代码输出

`/questions/`：get参数：id；返回：问题列表

`/question/getQuestion/`：get参数：id；返回：问题描述

`/question/postCode/`：post内容：uuid，代码，语言；返回：无

`/question/getResult/`：get参数：uuid；返回：题目结果

## 6、框架

使用 mdui 框架，此框架使用 MIT 协议发布。
