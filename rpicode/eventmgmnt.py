import subprocess
from time import sleep
import http.client


user_info_dictionary = {
        'Anwar' : '01234567',
        'Russ' : '044b7118700000',
        'Will'  : '049b7717700000'
        }

def executeCommand(cmd,loopsleep):
        """Execute a command in cmd after a sleep"""
        sleep(loopsleep)
        result = subprocess.getoutput(cmd)
        return(result.split("\n"))

def getSwipedName():
	nameIdentifed = ""
	resultlist = executeCommand("sudo ./rpi_get_uid.exe",2)
	for item in resultlist:
		if "UID" in item:
		    itemsplit = item.split("UID:")
		    uuid = itemsplit[1].split()
		    finalid = ""
		    for id in uuid:
		        finalid = finalid + id
		        print(finalid)

		        for key,value  in user_info_dictionary.items():
		            if value == finalid:
		                print("Swiped by" + ":" + key)
		                nameIdentifed = key
		                break
	return(nameIdentifed)

def checkin(name):
	conn = http.client.HTTPConnection("192.168.0.14",5001)
	conn.request("GET", "/api/eventinfo/checkedin/" + name)
	r1 = conn.getresponse()
	print(r1.status, r1.reason)
#	while chunk := r1.read(200):
#	 	print(repr(chunk))
	conn.close()

while True:
	name = getSwipedName()
	print(name)
	if name != "":
		checkin(name)

print("Application exiting....")

	
	
