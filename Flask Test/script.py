from time import time
from twilio.rest import Client
from datetime import datetime

def calculate(filename):
    track_keywords = ['authentication failure','ALERT','Authentication failed','warning']

    # ALERT_THRESHOLD=int(input("Set ALERT Threshold: ")) 
    # TIME_THRESHOLD= int(input("Set TIME Threshold(in Mins): "))
    ALERT_THRESHOLD = 10
    TIME_THRESHOLD  = 2
    danger_count = 0

    # Code to connect program to Twilio API to send messages
    SID = 'AC64eb4a7fd5f9ac231a9cbe25e2878976'
    Auth_Token = 'ce310debc70d2c34739ed7919adce8f1'
    cl = Client(SID,Auth_Token)

    #Read log file 
    with open(filename) as f:
    # file = open(filename,'r') 
        lines = f.readlines()    
        print(lines)

        #Function that alerts the user through sms 
        def alert_user():
            cl.messages.create(body='Abnormal Activity Detected in Logs.Please check your system.',from_='+12059842297',to='+916294324463')
        data = "EMPTY"
        for line in lines:
            data = ""
            time_str = line[0:15]
            datetime_obj = datetime.strptime(time_str,'%b %d %H:%M:%S')
            # print(datetime_obj.minute)
            data += str(datetime_obj.minute )
            data += '\n'
            if any(word in line for word in track_keywords):
                danger_count+=1
                if(danger_count == ALERT_THRESHOLD):
                    # print("Issuing Alert")
                    data += "Issuing Alert"
                    alert_user()
                    danger_count = 0

    return data