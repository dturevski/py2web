CC = rhino jscc/jscc.js
COMPRESS = java -jar yuicompressor-2.4.8.jar
FLAGS = --line-break 80 -o
TARGET = py2web.js

all: py2web.js

py2web.js: py2web.src.js driver_rhino.js_
	$(CC) py2web.src.js > $(TARGET).tmp.js
	$(COMPRESS) $(TARGET).tmp.js $(FLAGS) $(TARGET)

clean:
	rm -f $(TARGET).tmp.js $(TARGET)
