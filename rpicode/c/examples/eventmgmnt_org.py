import subprocess
from time import sleep


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


while True:
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
					break	
	break

	
	
