# [109-1] Web Programming Final 
## (Group 27) 社團活動資訊系統
[Github Repo](https://github.com/doctry/Web_final)

[Demo Video](https://www.youtube.com/watch?fbclid=IwAR1Xb1IHPFpzM7Bwbd5vmROpfncHv75nVG-97sIV3Z66UHg3MW9Wf8vkSOw&v=LqP9xzNau4Q&feature=youtu.be)

[Deploy](https://doctry.github.io/Web_final/?fbclid=IwAR23LOSRCaqGe_JbPxJk_qTi99ExhAFB9dA7zZXZj-vjDcTxXiePlf1GDug#/)

[FB推文](https://www.facebook.com/groups/NTURicWebProg/permalink/1316844678663449/)

## 成員
B06901086 電機四 吳建翰 (組長)

B06901040 電機四 楊千毅

B06901176 電機四 趙彥安

## 動機
我們組長本身是一個社團的幹部，為了更方便的管理，我們決定設計一個更方便的社團活動資訊系統

## 做什麼
這個網站能抓取學校主要社團相關網站的最新資訊，並能建立書籤列存取需要的網站，還能建立共用行事曆來記錄重要事件，並能在學校社團的網站裡新增社員

## 使用/操作方式
首先註冊帳號後，登入即可看見學校各網站最新資訊或增加書籤，並且能利用上方選單跳至其他頁面操作行事曆或新增社員。結束後請記得登出

## 專案目標
1. 集合學校有關社團的公告於我們的網頁
2. 能夠實作行事曆與代辦事項
3. 能自動將社員資料填寫至台大課程活動組網頁

## 建構網頁
1. 環境變數
請於 .env.defaults 中填寫 MongoDB 的 collection 網址
在上傳的 repo 中，因考量到社團隱私，我們沒有提供能登入社團資訊系統的帳號與密碼。若您有自己的學校社團帳號，請於該檔案中加上能登入社團資訊系統之帳號與密碼。

2. 前端
```
$ yarn
$ yarn start
```

3. 後端
```
$ yarn server
```

## 程式碼架構
```
/src
  |-- index.js
        |-- App.js
             |-- /out/pages.js
             |          |-- Login.js
             |          |-- Register.js 
             |
             |-- /in/pages.js
                        |-- Main.js
                        |      |-- Navbar_in.js
                        |            |-- Navbar_data.js
                        |-- Home.js
                        |-- Schedule.js
                        |-- About.js
                        |-- Reservation.js
/server 
  |-- index.js
         |-- db.js
         |-- /reservation/reserve.py
         |-- /models
                |-- club.js
                |-- task.js
                |-- weblink.js
```

## 網頁介紹
![](https://i.imgur.com/rqURb5q.png)

1. 登入頁面
下圖為登入的頁面，可以輸入帳號與密碼。
![](https://i.imgur.com/5YTHrJt.png)


2. 註冊頁面
註冊頁面時，會以社團名稱、社團帳號與密碼註冊。
![](https://i.imgur.com/XJl5RKY.png)

3. 首頁
首頁為資訊系統，會主動擷取學校公佈欄的這些照片，同時，我們實做了可以新增超連結的方式，讓使用者根據自己的需求新增網址。
![](https://i.imgur.com/07rXzLR.png)

4. 行事曆
行事曆可以輸入代辦事項，並紀錄至 MongodB 儲存。
![](https://i.imgur.com/smRSdgw.png)

5. 新增社員
按下頁面中的按鈕後即可至[社團活動資料系統](http://host.cc.ntu.edu.tw/activities/?fbclid=IwAR2BizrqHQ-iSo4N5W59mhtaZS6cUPvltQ5EtkUA_VLpT8kNZNwtlaYdDEA)新增社員

![](https://i.imgur.com/Jl1wiBD.png)
原本預計要讓頁面讀取Excel，但我們尚未找到方法將Excel拖入至網頁，所以先將新增成員名單寫死。
預計未來會將功能完善並實作租借社團場地功能。

## 心得
組長 吳建翰：
做這份專題讓我緊張又興奮，因為這個題目用途和我管理的社團息息相關，也因此我更能享受在製作上。雖然功能不到完全，但之後補強後想必對我以後管理社團很有幫助。

楊千毅：
我覺得這次專案比我想像中還要困難許多。其中一個原因是因為很多功能在想像階段都不是很困難的技術，有許多現有的套件可以使用。但實際開始做的時候才發現，原來最困難的不是使用那些套件，而是知道有哪些套件可以使用。另外一個最困難的地方在於常常照著教學的code來打還是會發生許多奇奇怪怪的bug，為了de這些bug，就會被迫去上網找資料，進而在找資料的過程中學會更多的知識。像是deploy的時候，前端怎麼樣都沒辦法deploy上去，到最後才發現原來是因為使用了不能deploy的套件。

趙彥安：
這次期末時間上分配的不是很好，尤其是最後一個禮拜大家都還有事要忙，結果又在敢死線了(電機習俗)。不過能這樣實作全部前端後端以及上傳網站真的是滿滿充實，真開心有選上這門課。

## 工作分配
楊千毅: 後端、行事曆、前後端接口

吳建翰: 登入頁面、主體css、關於我們

趙彥安: 行事曆、自動填寫社員資料、首頁

## 使用工具
Frontend
* react
* react-dom
* react-router-dom
* react-icons
* react-icon-library
* react-scripts
* nodemon
* antd
* babel
* fullcalendar
* request
* cheerio
* socket.io

Backend
* babel
* mongoose
* socket.io
* dotenv-defaults
* web-vitals
* Python3
    * os 
    * time
    * pandas
    * python-dotenv
    * selenium



