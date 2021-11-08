CC = gcc
DLIBS = -lwiringPi
#INC_DIR = ../../
INC_DIR = ../
SRCS = $(wildcard *.c)
all: $(SRCS:.c=.exe)
.PHONY: clean
%.exe: %.o pn532.o pn532_rpi.o
	$(CC) -Wall -std=gnu11 -o $@ $^ $(DLIBS)
%.o: %.c
	$(CC) -Wall -std=gnu11 -c $^ $(DLIBS) -I$(INC_DIR)
pn532.o pn532_rpi.o: $(INC_DIR)pn532.c $(INC_DIR)pn532_rpi.c
	$(CC) -Wall -std=gnu11 -c $(INC_DIR)pn532.c
	$(CC) -Wall -std=gnu11 -c $(INC_DIR)pn532_rpi.c
clean:
	rm *.o *.exe
