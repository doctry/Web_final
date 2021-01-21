# [109-1] Web Programming Final 
## (Group 27) 社團活動資訊系統
[Github Repo]()

[Demo Video]()

[Deploy]()

## 成員
B06901086 電機四 吳建翰 (組長)
B06901040 電機四 楊千毅
B06901176 電機四 趙彥安

## 動機
我們組長本身是一個社團的幹部，為了更方便的管理，我們決定設計一個更方便的社團活動資訊系統

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
這次的專案讓我們從頭到尾將上課所學全部應用出來，看到自己設計、可以跑動的網站真的很高興。美中不足的是還有些功能，比如借社團場地尚未實作。我們會繼續開發，為這個網站做出更有價值的功能。

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



