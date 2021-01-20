import os 
import time
import pandas as pd
import openpyxl
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.select import Select

# user information
url_signin = 'http://host.cc.ntu.edu.tw/activities/default1.aspx?fbclid=IwAR1DJ13sOhbuaVIz4HSb_Z3aAZJx2eyEfe2pHABQNJIKqGPTQzQoglglmPE'

load_dotenv()
account = os.getenv("account")
password = os.getenv("password")

print("account: %s" % account)
print("password: %s" % password)

datas = pd.read_excel("./server/reservation/members.xlsx", engine="openpyxl").values

new_member_ID = []
new_member_position = []
new_member_phone = []
new_member_email = []
new_member_num = len(datas)

for data in datas:
    new_member_ID.append(data[1])
    new_member_position.append(data[2])
    new_member_phone.append("0" + str(data[3]))
    new_member_email.append(data[1] + '@ntu.edu.tw')

# connection
options = Options()
# options.add_argument("headless")
driver = webdriver.Chrome('./server/reservation/chromedriver', chrome_options=options)  # Optional argument, if not specified will search path.
driver.get(url_signin)
try:
	time.sleep(3) # Let the user actually see something!
	# get element in #document
	iframe = driver.find_element_by_id("frameMain")
	driver.switch_to.default_content()
	driver.switch_to.frame(iframe)
	# send account
	elem_user = driver.find_element_by_name("Account")
	elem_user.send_keys(account)
	# send password
	elem_passw = driver.find_element_by_name("Password")
	elem_passw.send_keys(password)
	# submit
	elem_submit = driver.find_element_by_name("btnSubmit")
	elem_submit.click() # 點選登入按鈕
	driver.switch_to.default_content()
	time.sleep(1) # Let the user actually see something!
	# after log in
	# 到社員頁面
	iframe = driver.find_element_by_id("frameMain")
	driver.switch_to.default_content()
	driver.switch_to.frame(iframe)

	elem_submit = driver.find_element_by_name("btnMember")
	elem_submit.click() # 點選社員頁面
	driver.switch_to.default_content()
	time.sleep(1) # Let the user actually see something!
	# 新增社員
	for i in range(new_member_num):
		iframe = driver.find_element_by_id("frameMain")
		driver.switch_to.default_content()
		driver.switch_to.frame(iframe)

		elem_submit = driver.find_element_by_name("btnMemberAdd")
		elem_submit.click() # 點選新增社員
		driver.switch_to.default_content()
		time.sleep(1) # Let the user actually see something!
		# 填資料
		iframe = driver.find_element_by_id("frameMain")
		driver.switch_to.default_content()
		driver.switch_to.frame(iframe)

		elem_ID = driver.find_element_by_name("Stu_ID")
		elem_ID.send_keys(new_member_ID[i]) # 傳學號
		elem_position = Select(driver.find_element_by_name("JobClass")) 
		elem_position.select_by_value("社員")
		time.sleep(2) # Let the user actually see something!
		elem_position = Select(driver.find_element_by_name("JobClass")) 
		elem_position.select_by_value("社員")
		elem_phone = driver.find_element_by_name("Phone")
		elem_phone.send_keys(new_member_phone[i])
		elem_phone = driver.find_element_by_name("Email")
		elem_phone.send_keys(new_member_email[i])

		elem_submit = driver.find_element_by_name("btnAdd")
		elem_submit.click() # 點選新增社員
		driver.switch_to.default_content()
		time.sleep(2) # Let the user actually see something!
	# 登出
	elem_quit = driver.find_element_by_id("LinkLogin")
	elem_quit.click() # 點選登入按鈕
	driver.switch_to.default_content()
	time.sleep(2) # Let the user actually see something!
finally:
	driver.close()
	print("Finish")



'''
<Routine>
1. 活動名稱
2. 活動起訖時間 (yyyy-mm-dd)
3. 借用時間(ex: 每周四晚上 18:00 ~ 21:30)
4. 欲借用教室(priority) 活大 103、104、202

<Random> Optional

TODO:
1. User info frontend
2. Python code for preserve classrooms
'''