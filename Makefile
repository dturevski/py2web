all: py2web.js

py2web.js: py2web.src.js driver_rhino.js_
	rhino jscc/jscc.js py2web.src.js > py2web.tmp.js
	java -jar yuicompressor-2.4.8.jar py2web.tmp.js --line-break 80 -o py2web.js
