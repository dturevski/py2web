var Py2Web=function(g){var k=false;var z=false;var H=false;function B(J){print(J)
}function b(){var J=new java.io.BufferedReader(new java.io.InputStreamReader(java.lang.System["in"]));
J.readLine()}function l(M){var L=0;var J=-1;var K=0;var O=0;var N=M.offset+1;do{N--;
L=0;J=-2;O=N;if(M.src.length<=O){return 61}do{switch(L){case 0:if((M.src.charCodeAt(N)>=9&&M.src.charCodeAt(N)<=10)||M.src.charCodeAt(N)==13||M.src.charCodeAt(N)==32){L=1
}else{if(M.src.charCodeAt(N)==33||M.src.charCodeAt(N)==63){L=2}else{if(M.src.charCodeAt(N)==35){L=3
}else{if(M.src.charCodeAt(N)==42){L=4}else{if(M.src.charCodeAt(N)==43){L=5}else{if(M.src.charCodeAt(N)==44){L=6
}else{if(M.src.charCodeAt(N)==45){L=7}else{if(M.src.charCodeAt(N)==48){L=8}else{if(M.src.charCodeAt(N)==61){L=9
}else{if((M.src.charCodeAt(N)>=65&&M.src.charCodeAt(N)<=72)||(M.src.charCodeAt(N)>=74&&M.src.charCodeAt(N)<=79)||(M.src.charCodeAt(N)>=81&&M.src.charCodeAt(N)<=90)){L=10
}else{if(M.src.charCodeAt(N)==91){L=11}else{if(M.src.charCodeAt(N)==93){L=12}else{if(M.src.charCodeAt(N)==98){L=13
}else{if(M.src.charCodeAt(N)==99||M.src.charCodeAt(N)==102||M.src.charCodeAt(N)==104){L=14
}else{if(M.src.charCodeAt(N)==110){L=15}else{if(M.src.charCodeAt(N)==119){L=16}else{if(M.src.charCodeAt(N)==46){L=39
}else{if((M.src.charCodeAt(N)>=49&&M.src.charCodeAt(N)<=57)){L=41}else{if(M.src.charCodeAt(N)==73){L=42
}else{if((M.src.charCodeAt(N)>=106&&M.src.charCodeAt(N)<=107)||M.src.charCodeAt(N)==112||(M.src.charCodeAt(N)>=117&&M.src.charCodeAt(N)<=118)){L=43
}else{if(M.src.charCodeAt(N)==60){L=44}else{if(M.src.charCodeAt(N)==80){L=46}else{if(M.src.charCodeAt(N)==109){L=47
}else{if(M.src.charCodeAt(N)==97||M.src.charCodeAt(N)==100||M.src.charCodeAt(N)==103){L=48
}else{if(M.src.charCodeAt(N)==114){L=50}else{if(M.src.charCodeAt(N)==101){L=51}else{if(M.src.charCodeAt(N)==105||M.src.charCodeAt(N)==108||M.src.charCodeAt(N)==111||M.src.charCodeAt(N)==113||(M.src.charCodeAt(N)>=120&&M.src.charCodeAt(N)<=121)){L=53
}else{if(M.src.charCodeAt(N)==115){L=54}else{if(M.src.charCodeAt(N)==122){L=55}else{if(M.src.charCodeAt(N)==123){L=56
}else{if(M.src.charCodeAt(N)==116){L=96}else{L=-1}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}break;
case 1:L=-1;J=1;K=N;break;case 2:if(M.src.charCodeAt(N)==33||M.src.charCodeAt(N)==63){L=40
}else{L=-1}J=11;K=N;break;case 3:L=-1;J=10;K=N;break;case 4:L=-1;J=7;K=N;break;case 5:L=-1;
J=8;K=N;break;case 6:L=-1;J=38;K=N;break;case 7:if(M.src.charCodeAt(N)==62){L=17}else{if(M.src.charCodeAt(N)==45){L=57
}else{L=-1}}J=6;K=N;break;case 8:if(M.src.charCodeAt(N)==46){L=19}else{if((M.src.charCodeAt(N)>=48&&M.src.charCodeAt(N)<=57)){L=45
}else{if((M.src.charCodeAt(N)>=65&&M.src.charCodeAt(N)<=90)){L=49}else{if(M.src.charCodeAt(N)==45){L=58
}else{L=-1}}}}J=2;K=N;break;case 9:if(M.src.charCodeAt(N)==61){L=59}else{L=-1}J=9;
K=N;break;case 10:if((M.src.charCodeAt(N)>=48&&M.src.charCodeAt(N)<=57)||(M.src.charCodeAt(N)>=65&&M.src.charCodeAt(N)<=90)){L=49
}else{L=-1}J=13;K=N;break;case 11:if(M.src.charCodeAt(N)==73){L=20}else{L=-1}J=3;
K=N;break;case 12:L=-1;J=4;K=N;break;case 13:if(M.src.charCodeAt(N)==41){L=21}else{if((M.src.charCodeAt(N)>=49&&M.src.charCodeAt(N)<=56)){L=22
}else{if(M.src.charCodeAt(N)==117){L=62}else{L=-1}}}J=18;K=N;break;case 14:if(M.src.charCodeAt(N)==41){L=21
}else{if((M.src.charCodeAt(N)>=49&&M.src.charCodeAt(N)<=56)){L=22}else{if(M.src.charCodeAt(N)==99||M.src.charCodeAt(N)==102||M.src.charCodeAt(N)==104||(M.src.charCodeAt(N)>=106&&M.src.charCodeAt(N)<=107)||M.src.charCodeAt(N)==109||M.src.charCodeAt(N)==112||M.src.charCodeAt(N)==114||(M.src.charCodeAt(N)>=117&&M.src.charCodeAt(N)<=118)){L=52
}else{L=-1}}}J=12;K=N;break;case 15:if(M.src.charCodeAt(N)==41){L=21}else{L=-1}J=16;
K=N;break;case 16:if(M.src.charCodeAt(N)==41){L=21}else{L=-1}J=17;K=N;break;case 17:L=-1;
J=28;K=N;break;case 18:if(M.src.charCodeAt(N)==46){L=25}else{L=-1}J=19;K=N;break;
case 19:L=-1;J=14;K=N;break;case 20:L=-1;J=37;K=N;break;case 21:L=-1;J=27;K=N;break;
case 22:L=-1;J=15;K=N;break;case 23:if(M.src.charCodeAt(N)==125){L=23}else{if((M.src.charCodeAt(N)>=0&&M.src.charCodeAt(N)<=122)||M.src.charCodeAt(N)==124||(M.src.charCodeAt(N)>=126&&M.src.charCodeAt(N)<=254)){L=56
}else{L=-1}}J=5;K=N;break;case 24:L=-1;J=29;K=N;break;case 25:L=-1;J=20;K=N;break;
case 26:if(M.src.charCodeAt(N)==45){L=73}else{L=-1}J=21;K=N;break;case 27:L=-1;J=30;
K=N;break;case 28:L=-1;J=25;K=N;break;case 29:L=-1;J=23;K=N;break;case 30:L=-1;J=31;
K=N;break;case 31:L=-1;J=22;K=N;break;case 32:L=-1;J=34;K=N;break;case 33:L=-1;J=33;
K=N;break;case 34:L=-1;J=32;K=N;break;case 35:L=-1;J=24;K=N;break;case 36:L=-1;J=36;
K=N;break;case 37:L=-1;J=26;K=N;break;case 38:L=-1;J=35;K=N;break;case 39:if(M.src.charCodeAt(N)==46){L=18
}else{L=-1}break;case 40:L=-1;J=11;K=N;break;case 41:if(M.src.charCodeAt(N)==46){L=19
}else{if((M.src.charCodeAt(N)>=48&&M.src.charCodeAt(N)<=57)){L=45}else{if((M.src.charCodeAt(N)>=65&&M.src.charCodeAt(N)<=90)){L=49
}else{L=-1}}}J=2;K=N;break;case 42:if((M.src.charCodeAt(N)>=48&&M.src.charCodeAt(N)<=57)||(M.src.charCodeAt(N)>=65&&M.src.charCodeAt(N)<=90)){L=49
}else{if(M.src.charCodeAt(N)==109){L=60}else{L=-1}}J=13;K=N;break;case 43:if(M.src.charCodeAt(N)==41){L=21
}else{if(M.src.charCodeAt(N)==99||M.src.charCodeAt(N)==102||M.src.charCodeAt(N)==104||(M.src.charCodeAt(N)>=106&&M.src.charCodeAt(N)<=107)||M.src.charCodeAt(N)==109||M.src.charCodeAt(N)==112||M.src.charCodeAt(N)==114||(M.src.charCodeAt(N)>=117&&M.src.charCodeAt(N)<=118)){L=52
}else{L=-1}}J=12;K=N;break;case 44:if(M.src.charCodeAt(N)==45){L=95}else{L=-1}break;
case 45:if(M.src.charCodeAt(N)==46){L=19}else{if((M.src.charCodeAt(N)>=48&&M.src.charCodeAt(N)<=57)){L=45
}else{L=-1}}J=2;K=N;break;case 46:if((M.src.charCodeAt(N)>=48&&M.src.charCodeAt(N)<=57)||(M.src.charCodeAt(N)>=65&&M.src.charCodeAt(N)<=90)){L=49
}else{if(M.src.charCodeAt(N)==111){L=61}else{L=-1}}J=13;K=N;break;case 47:if(M.src.charCodeAt(N)==41){L=21
}else{if(M.src.charCodeAt(N)==99||M.src.charCodeAt(N)==102||M.src.charCodeAt(N)==104||(M.src.charCodeAt(N)>=106&&M.src.charCodeAt(N)<=107)||M.src.charCodeAt(N)==109||M.src.charCodeAt(N)==112||M.src.charCodeAt(N)==114||(M.src.charCodeAt(N)>=117&&M.src.charCodeAt(N)<=118)){L=52
}else{if(M.src.charCodeAt(N)==105){L=64}else{L=-1}}}J=12;K=N;break;case 48:if(M.src.charCodeAt(N)==41){L=21
}else{if((M.src.charCodeAt(N)>=49&&M.src.charCodeAt(N)<=56)){L=22}else{L=-1}}break;
case 49:L=-1;J=13;K=N;break;case 50:if(M.src.charCodeAt(N)==41){L=21}else{if(M.src.charCodeAt(N)==99||M.src.charCodeAt(N)==102||M.src.charCodeAt(N)==104||(M.src.charCodeAt(N)>=106&&M.src.charCodeAt(N)<=107)||M.src.charCodeAt(N)==109||M.src.charCodeAt(N)==112||M.src.charCodeAt(N)==114||(M.src.charCodeAt(N)>=117&&M.src.charCodeAt(N)<=118)){L=52
}else{if(M.src.charCodeAt(N)==111){L=65}else{L=-1}}}J=12;K=N;break;case 51:if(M.src.charCodeAt(N)==41){L=21
}else{if((M.src.charCodeAt(N)>=49&&M.src.charCodeAt(N)<=56)){L=22}else{if(M.src.charCodeAt(N)==112){L=63
}else{L=-1}}}break;case 52:if(M.src.charCodeAt(N)==99||M.src.charCodeAt(N)==102||M.src.charCodeAt(N)==104||(M.src.charCodeAt(N)>=106&&M.src.charCodeAt(N)<=107)||M.src.charCodeAt(N)==109||M.src.charCodeAt(N)==112||M.src.charCodeAt(N)==114||(M.src.charCodeAt(N)>=117&&M.src.charCodeAt(N)<=118)){L=52
}else{L=-1}J=12;K=N;break;case 53:if(M.src.charCodeAt(N)==41){L=21}else{L=-1}break;
case 54:if(M.src.charCodeAt(N)==41){L=21}else{if(M.src.charCodeAt(N)==104){L=97}else{L=-1
}}break;case 55:if(M.src.charCodeAt(N)==41){L=21}else{if(M.src.charCodeAt(N)==117){L=66
}else{L=-1}}break;case 56:if(M.src.charCodeAt(N)==125){L=23}else{if((M.src.charCodeAt(N)>=0&&M.src.charCodeAt(N)<=122)||M.src.charCodeAt(N)==124||(M.src.charCodeAt(N)>=126&&M.src.charCodeAt(N)<=254)){L=56
}else{L=-1}}break;case 57:if(M.src.charCodeAt(N)==62){L=24}else{L=-1}break;case 58:if(M.src.charCodeAt(N)==48){L=26
}else{L=-1}break;case 59:if(M.src.charCodeAt(N)==62){L=27}else{L=-1}break;case 60:if(M.src.charCodeAt(N)==105){L=102
}else{L=-1}break;case 61:if(M.src.charCodeAt(N)==108){L=68}else{L=-1}break;case 62:if(M.src.charCodeAt(N)==116){L=28
}else{L=-1}break;case 63:if(M.src.charCodeAt(N)==46){L=29}else{L=-1}break;case 64:if(M.src.charCodeAt(N)==114){L=100
}else{L=-1}break;case 65:if(M.src.charCodeAt(N)==116){L=69}else{L=-1}break;case 66:if(M.src.charCodeAt(N)==103){L=72
}else{L=-1}break;case 67:if(M.src.charCodeAt(N)==62){L=30}else{L=-1}break;case 68:if(M.src.charCodeAt(N)==105){L=74
}else{L=-1}break;case 69:if(M.src.charCodeAt(N)==97){L=76}else{L=-1}break;case 70:if(M.src.charCodeAt(N)==102){L=77
}else{L=-1}break;case 71:if(M.src.charCodeAt(N)==101){L=78}else{L=-1}break;case 72:if(M.src.charCodeAt(N)==122){L=79
}else{L=-1}break;case 73:if(M.src.charCodeAt(N)==48){L=31}else{L=-1}break;case 74:if(M.src.charCodeAt(N)==115){L=80
}else{L=-1}break;case 75:if(M.src.charCodeAt(N)==111){L=81}else{L=-1}break;case 76:if(M.src.charCodeAt(N)==116){L=82
}else{L=-1}break;case 77:if(M.src.charCodeAt(N)==116){L=32}else{L=-1}break;case 78:if(M.src.charCodeAt(N)==97){L=83
}else{L=-1}break;case 79:if(M.src.charCodeAt(N)==119){L=84}else{L=-1}break;case 80:if(M.src.charCodeAt(N)==104){L=86
}else{L=-1}break;case 81:if(M.src.charCodeAt(N)==114){L=33}else{L=-1}break;case 82:if(M.src.charCodeAt(N)==101){L=34
}else{L=-1}break;case 83:if(M.src.charCodeAt(N)==116){L=87}else{L=-1}break;case 84:if(M.src.charCodeAt(N)==97){L=88
}else{L=-1}break;case 85:if(M.src.charCodeAt(N)==111){L=89}else{L=-1}break;case 86:if(M.src.charCodeAt(N)==84){L=90
}else{L=-1}break;case 87:if(M.src.charCodeAt(N)==58){L=35}else{L=-1}break;case 88:if(M.src.charCodeAt(N)==110){L=91
}else{L=-1}break;case 89:if(M.src.charCodeAt(N)==114){L=36}else{L=-1}break;case 90:if(M.src.charCodeAt(N)==121){L=92
}else{L=-1}break;case 91:if(M.src.charCodeAt(N)==103){L=93}else{L=-1}break;case 92:if(M.src.charCodeAt(N)==112){L=94
}else{L=-1}break;case 93:if(M.src.charCodeAt(N)==46){L=37}else{L=-1}break;case 94:if(M.src.charCodeAt(N)==101){L=38
}else{L=-1}break;case 95:if(M.src.charCodeAt(N)==45){L=67}else{L=-1}break;case 96:if(M.src.charCodeAt(N)==41){L=21
}else{if(M.src.charCodeAt(N)==104){L=98}else{L=-1}}break;case 97:if(M.src.charCodeAt(N)==105){L=70
}else{L=-1}break;case 98:if(M.src.charCodeAt(N)==114){L=71}else{L=-1}break;case 99:if(M.src.charCodeAt(N)==116){L=85
}else{L=-1}break;case 100:if(M.src.charCodeAt(N)==114){L=75}else{L=-1}break;case 101:if(M.src.charCodeAt(N)==97){L=99
}else{L=-1}break;case 102:if(M.src.charCodeAt(N)==116){L=101}else{L=-1}break}N++}while(L>-1)
}while(1>-1&&J==1);if(J>-1){M.att=M.src.substr(O,K-O);M.offset=K;switch(J){case 2:M.att=parseInt(M.att);
break;case 5:M.att=M.att.substr(1,M.att.length-2);break;case 14:M.att=C(M.att);break;
case 15:M.att=G(M.att);break;case 27:M.att=M.att.charAt(0);break}}else{M.att=new String();
J=-1}return J}function w(J,ad,ae){var L=new Array();var Z=new Array();var S=0;var ac;
var T;var U;var ag;var V=new Function("","var offset; var src; var att;");var aa=new V();
var K=new Function("","var sym; var att; var child;");var R=new Array();var N=new Array();
var M=null;var Y=new Array(new Array(0,1),new Array(40,1),new Array(39,1),new Array(39,1),new Array(39,2),new Array(39,0),new Array(42,1),new Array(42,2),new Array(44,2),new Array(45,1),new Array(45,2),new Array(45,2),new Array(46,1),new Array(46,2),new Array(47,1),new Array(47,2),new Array(48,4),new Array(48,5),new Array(48,3),new Array(48,3),new Array(48,2),new Array(48,4),new Array(48,4),new Array(48,1),new Array(48,2),new Array(41,1),new Array(41,2),new Array(51,3),new Array(51,3),new Array(51,3),new Array(51,3),new Array(51,4),new Array(51,3),new Array(51,2),new Array(54,1),new Array(54,3),new Array(54,3),new Array(54,8),new Array(54,6),new Array(54,9),new Array(54,7),new Array(54,6),new Array(54,6),new Array(54,4),new Array(52,2),new Array(52,1),new Array(52,2),new Array(52,2),new Array(53,2),new Array(53,1),new Array(53,1),new Array(49,2),new Array(49,3),new Array(55,1),new Array(55,1),new Array(55,1),new Array(56,1),new Array(56,2),new Array(56,3),new Array(56,2),new Array(59,1),new Array(59,2),new Array(58,3),new Array(58,3),new Array(58,5),new Array(50,1),new Array(50,3),new Array(50,2),new Array(60,1),new Array(60,1),new Array(57,1),new Array(57,1),new Array(43,1),new Array(43,2));
var P=new Array(new Array(5,8,14,9,25,10,27,13,8,14,61,-5),new Array(61,0),new Array(61,-1),new Array(14,9,25,10,61,-2),new Array(27,13,8,14,61,-3),new Array(5,17,14,9,25,10,27,13,8,14,61,-5),new Array(61,-25,14,-25,25,-25,27,-25,8,-25),new Array(61,-6,27,-6,8,-6),new Array(5,-72,14,-72,25,-72,27,-72,8,-72,61,-72,13,-72,16,-72,12,-72,15,-72,21,-72,22,-72,24,-72,26,-72,11,-72),new Array(19,20,13,26,16,27,12,28,21,30,22,31,15,32),new Array(14,33),new Array(5,8,14,9,25,10),new Array(6,39,8,40,32,41,33,42,34,43,35,44,36,45,16,47,17,48,18,49,14,-9,25,-9,5,-9),new Array(14,-12,25,-12,6,-12,8,-12,32,-12,33,-12,34,-12,35,-12,36,-12,16,-12,17,-12,18,-12,5,-12),new Array(27,50),new Array(61,-26,14,-26,25,-26,27,-26,8,-26),new Array(61,-7,27,-7,8,-7),new Array(5,-72,14,-72,25,-72,27,-72,8,-72,61,-72),new Array(61,-4),new Array(11,52,24,54,26,55,5,8,13,26,16,27,12,28,21,30,22,31,15,32,61,-33,14,-33,25,-33,27,-33,8,-33),new Array(20,57,13,26,16,27,12,28,21,30,22,31,15,32),new Array(37,58,3,59,9,60,8,62,10,63,13,-45,16,-45,12,-45,15,-45,21,-45,22,-45,24,-45,26,-45,61,-45,14,-45,25,-45,11,-45,5,-45,27,-45),new Array(8,-34,10,-34,13,-34,16,-34,12,-34,15,-34,21,-34,22,-34,24,-34,26,-34,61,-34,14,-34,25,-34,9,-34,3,-34,37,-34,11,-34,5,-34,27,-34),new Array(15,32),new Array(23,65,8,-49,10,-49,13,-49,16,-49,12,-49,15,-49,21,-49,22,-49,24,-49,26,-49,61,-49,14,-49,25,-49,9,-49,3,-49,37,-49,11,-49,5,-49,27,-49),new Array(8,-50,10,-50,13,-50,16,-50,12,-50,15,-50,21,-50,22,-50,24,-50,26,-50,61,-50,14,-50,25,-50,9,-50,3,-50,37,-50,11,-50,5,-50,27,-50),new Array(15,-56,8,-56,10,-56,13,-56,16,-56,12,-56,21,-56,22,-56,24,-56,26,-56,61,-56,14,-56,25,-56,9,-56,3,-56,37,-56,11,-56,5,-56,27,-56,4,-56),new Array(12,66,13,67),new Array(13,68),new Array(8,-60,10,-60,13,-60,16,-60,12,-60,15,-60,21,-60,22,-60,24,-60,26,-60,61,-60,14,-60,25,-60,23,-60,9,-60,3,-60,37,-60,11,-60,5,-60,27,-60),new Array(8,-68,10,-68,13,-68,16,-68,12,-68,15,-68,21,-68,22,-68,24,-68,26,-68,61,-68,14,-68,25,-68,9,-68,3,-68,37,-68,11,-68,5,-68,27,-68),new Array(8,-69,10,-69,13,-69,16,-69,12,-69,15,-69,21,-69,22,-69,24,-69,26,-69,61,-69,14,-69,25,-69,9,-69,3,-69,37,-69,11,-69,5,-69,27,-69),new Array(7,69,6,70),new Array(19,71),new Array(5,72,14,-11,25,-11),new Array(14,9,25,10,61,-8,27,-8,8,-8),new Array(6,39,8,40,32,41,33,42,34,43,35,44,36,45,16,47,17,48,18,49,14,-10,25,-10,5,-10),new Array(14,-14,25,-14,5,-14,6,-14,8,-14,32,-14,33,-14,34,-14,35,-14,36,-14,16,-14,17,-14,18,-14),new Array(15,74),new Array(16,47,17,48,18,49),new Array(16,47,17,48,18,49),new Array(2,77),new Array(15,78),new Array(15,79),new Array(14,-23,25,-23,5,-23,6,-23,8,-23,32,-23,33,-23,34,-23,35,-23,36,-23,16,-23,17,-23,18,-23),new Array(15,81),new Array(12,82,13,83),new Array(13,-53,12,-53),new Array(13,-54,12,-54,8,-54,10,-54,16,-54,15,-54,21,-54,22,-54,24,-54,26,-54,61,-54,14,-54,25,-54,9,-54,3,-54,37,-54,11,-54,5,-54,27,-54,4,-54),new Array(13,-55,12,-55,8,-55,10,-55,16,-55,15,-55,21,-55,22,-55,24,-55,26,-55,61,-55,14,-55,25,-55,9,-55,3,-55,37,-55,11,-55,5,-55,27,-55,4,-55),new Array(14,-13,25,-13,6,-13,8,-13,32,-13,33,-13,34,-13,35,-13,36,-13,16,-13,17,-13,18,-13,5,-13),new Array(5,72,13,-47,16,-47,12,-47,15,-47,21,-47,22,-47,24,-47,26,-47,61,-47,14,-47,25,-47,11,-47,27,-47,8,-47),new Array(13,-46,16,-46,12,-46,15,-46,21,-46,22,-46,24,-46,26,-46,61,-46,14,-46,25,-46,11,-46,5,-46,27,-46,8,-46),new Array(11,52,5,8,61,-27,14,-27,25,-27,27,-27,8,-27),new Array(61,-30,14,-30,25,-30,27,-30,8,-30),new Array(61,-32,14,-32,25,-32,27,-32,8,-32),new Array(11,52,5,8,61,-28,14,-28,25,-28,27,-28,8,-28),new Array(61,-29,14,-29,25,-29,27,-29,8,-29),new Array(15,81),new Array(8,85,15,87,16,47,17,48,18,49),new Array(13,26,16,90,12,28,17,48,18,49),new Array(13,-44,16,-44,12,-44,15,-44,21,-44,22,-44,24,-44,26,-44,61,-44,14,-44,25,-44,11,-44,5,-44,27,-44,8,-44),new Array(13,-70,16,-70,12,-70,15,-70,21,-70,22,-70,24,-70,26,-70,61,-70,14,-70,25,-70,11,-70,5,-70,27,-70,8,-70),new Array(13,-71,16,-71,12,-71,15,-71,21,-71,22,-71,24,-71,26,-71,61,-71,14,-71,25,-71,11,-71,5,-71,27,-71,8,-71),new Array(8,-48,10,-48,13,-48,16,-48,12,-48,15,-48,21,-48,22,-48,24,-48,26,-48,61,-48,14,-48,25,-48,9,-48,3,-48,37,-48,11,-48,5,-48,27,-48),new Array(8,-61,10,-61,13,-61,16,-61,12,-61,15,-61,21,-61,22,-61,24,-61,26,-61,61,-61,14,-61,25,-61,23,-61,9,-61,3,-61,37,-61,11,-61,5,-61,27,-61),new Array(13,91),new Array(15,-57,8,-57,10,-57,13,-57,16,-57,12,-57,21,-57,22,-57,24,-57,26,-57,61,-57,14,-57,25,-57,9,-57,3,-57,37,-57,11,-57,5,-57,27,-57,4,-57),new Array(15,-59,8,-59,10,-59,13,-59,16,-59,12,-59,21,-59,22,-59,24,-59,26,-59,61,-59,14,-59,25,-59,9,-59,3,-59,37,-59,11,-59,5,-59,27,-59,4,-59),new Array(15,92),new Array(15,93),new Array(13,26,16,27,12,28,21,30,22,31,15,32),new Array(14,-73,25,-73,5,-73,13,-73,16,-73,12,-73,15,-73,21,-73,22,-73,24,-73,26,-73,61,-73,11,-73,27,-73,8,-73),new Array(14,-15,25,-15,5,-15,6,-15,8,-15,32,-15,33,-15,34,-15,35,-15,36,-15,16,-15,17,-15,18,-15),new Array(29,95,31,96),new Array(15,97),new Array(15,98),new Array(14,-20,25,-20,5,-20,6,-20,8,-20,32,-20,33,-20,34,-20,35,-20,36,-20,16,-20,17,-20,18,-20),new Array(31,99),new Array(30,100),new Array(15,101,38,102,14,-24,25,-24,5,-24,6,-24,8,-24,32,-24,33,-24,34,-24,35,-24,36,-24,16,-24,17,-24,18,-24),new Array(14,-65,25,-65,5,-65,6,-65,8,-65,32,-65,33,-65,34,-65,35,-65,36,-65,16,-65,17,-65,18,-65,38,-65,15,-65,4,-65),new Array(13,103),new Array(15,-51),new Array(15,101,38,102,4,104),new Array(16,47,17,48,18,49),new Array(15,106),new Array(9,107),new Array(8,-35,10,-35,13,-35,16,-35,12,-35,15,-35,21,-35,22,-35,24,-35,26,-35,61,-35,14,-35,25,-35,9,-35,3,-35,37,-35,11,-35,5,-35,27,-35),new Array(8,-36,10,-36,13,-36,16,-36,12,-36,15,-36,21,-36,22,-36,24,-36,26,-36,61,-36,14,-36,25,-36,9,-36,3,-36,37,-36,11,-36,5,-36,27,-36),new Array(12,66,13,67,8,-53,10,-53,16,-53,15,-53,21,-53,22,-53,24,-53,26,-53,61,-53,14,-53,25,-53,9,-53,3,-53,37,-53,11,-53,5,-53,27,-53,4,-53),new Array(15,-58,8,-58,10,-58,13,-58,16,-58,12,-58,21,-58,22,-58,24,-58,26,-58,61,-58,14,-58,25,-58,9,-58,3,-58,37,-58,11,-58,5,-58,27,-58,4,-58),new Array(6,108,8,-63,10,-63,13,-63,16,-63,12,-63,15,-63,21,-63,22,-63,24,-63,26,-63,61,-63,14,-63,25,-63,23,-63,9,-63,3,-63,37,-63,11,-63,5,-63,27,-63),new Array(8,-62,10,-62,13,-62,16,-62,12,-62,15,-62,21,-62,22,-62,24,-62,26,-62,61,-62,14,-62,25,-62,23,-62,9,-62,3,-62,37,-62,11,-62,5,-62,27,-62),new Array(11,52,5,8,61,-31,14,-31,25,-31,27,-31,8,-31),new Array(15,109),new Array(16,47,17,48,18,49),new Array(14,-18,25,-18,5,-18,6,-18,8,-18,32,-18,33,-18,34,-18,35,-18,36,-18,16,-18,17,-18,18,-18),new Array(14,-19,25,-19,5,-19,6,-19,8,-19,32,-19,33,-19,34,-19,35,-19,36,-19,16,-19,17,-19,18,-19),new Array(15,111),new Array(15,112),new Array(14,-67,25,-67,5,-67,6,-67,8,-67,32,-67,33,-67,34,-67,35,-67,36,-67,16,-67,17,-67,18,-67,38,-67,15,-67,4,-67),new Array(15,113),new Array(15,-52),new Array(8,-43,10,-43,13,-43,16,-43,12,-43,15,-43,21,-43,22,-43,24,-43,26,-43,61,-43,14,-43,25,-43,9,-43,3,-43,37,-43,11,-43,5,-43,27,-43),new Array(15,114),new Array(28,115),new Array(16,90,17,48,18,49,13,26,12,28),new Array(15,118),new Array(14,-16,25,-16,5,-16,6,-16,8,-16,32,-16,33,-16,34,-16,35,-16,36,-16,16,-16,17,-16,18,-16),new Array(15,119),new Array(14,-21,25,-21,5,-21,6,-21,8,-21,32,-21,33,-21,34,-21,35,-21,36,-21,16,-21,17,-21,18,-21),new Array(14,-22,25,-22,5,-22,6,-22,8,-22,32,-22,33,-22,34,-22,35,-22,36,-22,16,-22,17,-22,18,-22),new Array(14,-66,25,-66,5,-66,6,-66,8,-66,32,-66,33,-66,34,-66,35,-66,36,-66,16,-66,17,-66,18,-66,38,-66,15,-66,4,-66),new Array(4,120,9,121),new Array(15,122),new Array(4,123),new Array(4,124),new Array(8,-64,10,-64,13,-64,16,-64,12,-64,15,-64,21,-64,22,-64,24,-64,26,-64,61,-64,14,-64,25,-64,23,-64,9,-64,3,-64,37,-64,11,-64,5,-64,27,-64),new Array(14,-17,25,-17,5,-17,6,-17,8,-17,32,-17,33,-17,34,-17,35,-17,36,-17,16,-17,17,-17,18,-17),new Array(8,-38,10,-38,13,-38,16,-38,12,-38,15,-38,21,-38,22,-38,24,-38,26,-38,61,-38,14,-38,25,-38,9,-38,3,-38,37,-38,11,-38,5,-38,27,-38),new Array(13,26,16,27,12,28),new Array(9,126,4,127),new Array(8,-41,10,-41,13,-41,16,-41,12,-41,15,-41,21,-41,22,-41,24,-41,26,-41,61,-41,14,-41,25,-41,9,-41,3,-41,37,-41,11,-41,5,-41,27,-41),new Array(8,-42,10,-42,13,-42,16,-42,12,-42,15,-42,21,-42,22,-42,24,-42,26,-42,61,-42,14,-42,25,-42,9,-42,3,-42,37,-42,11,-42,5,-42,27,-42),new Array(4,128),new Array(13,26,16,27,12,28),new Array(8,-40,10,-40,13,-40,16,-40,12,-40,15,-40,21,-40,22,-40,24,-40,26,-40,61,-40,14,-40,25,-40,9,-40,3,-40,37,-40,11,-40,5,-40,27,-40),new Array(8,-37,10,-37,13,-37,16,-37,12,-37,15,-37,21,-37,22,-37,24,-37,26,-37,61,-37,14,-37,25,-37,9,-37,3,-37,37,-37,11,-37,5,-37,27,-37),new Array(4,130),new Array(8,-39,10,-39,13,-39,16,-39,12,-39,15,-39,21,-39,22,-39,24,-39,26,-39,61,-39,14,-39,25,-39,9,-39,3,-39,37,-39,11,-39,5,-39,27,-39));
var W=new Array(new Array(40,1,39,2,41,3,42,4,43,5,51,6,44,7,45,11,46,12),new Array(),new Array(),new Array(51,15),new Array(44,16,45,11,46,12),new Array(39,18,41,3,42,4,43,5,51,6,44,7,45,11,46,12),new Array(),new Array(),new Array(),new Array(52,19,54,21,53,22,56,23,59,24,60,25,58,29),new Array(),new Array(43,34,41,35,51,6),new Array(47,36,48,37,49,38,55,46),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(43,51,52,53,54,21,53,22,56,23,59,24,60,25,58,29),new Array(52,56,54,21,53,22,56,23,59,24,60,25,58,29),new Array(57,61),new Array(),new Array(58,64),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(51,15),new Array(48,73,49,38,55,46),new Array(),new Array(),new Array(49,75,55,46),new Array(49,76,55,46),new Array(),new Array(),new Array(),new Array(),new Array(50,80),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(43,51),new Array(),new Array(),new Array(43,51),new Array(),new Array(50,84),new Array(49,86,55,46),new Array(55,88,56,89),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(52,94,54,21,53,22,56,23,59,24,60,25,58,29),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(49,105,55,46),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(43,51),new Array(),new Array(49,110,55,46),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(56,116,55,117),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(56,125),new Array(),new Array(),new Array(),new Array(),new Array(56,129),new Array(),new Array(),new Array(),new Array());
var ab=new Array("BuildTree'","WHITESPACE","INT","[","]","Comment","-","*","+","=","OtherCheckSign","Annotation","FairyProps","PieceName","MoveNo","Square","n","w","b","..","...","0-0","0-0-0","ep.","threat:","but","zugzwang.","TwinId","->","-->","==>","<-->","rotate","mirror","shift","PolishType","Imitator","[I",",","Solution","BuildTree","MoveList","TwinList","Comments","Twin","TwinHeader","TwinBullet","CommandList","Command","LongPieceDecl","SquareList","Move","HalfMove","Body","Ply","ColorPrefix","PieceDecl","CheckSign","Squares","PawnMove","Castling","$");
aa.offset=0;aa.src=J;aa.att=new String();if(!ad){ad=new Array()}if(!ae){ae=new Array()
}L.push(0);Z.push(0);U=l(aa);while(true){ac=132;for(var X=0;X<P[L[L.length-1]].length;
X+=2){if(P[L[L.length-1]][X]==U){ac=P[L[L.length-1]][X+1];break}}if(z&&L.length>0){B("\nState "+L[L.length-1]+"\n\tLookahead: "+ab[U]+' ("'+aa.att+'")\n\tAction: '+ac+'\n\tSource: "'+aa.src.substr(aa.offset,30)+((aa.offset+30<aa.src.length)?"...":"")+'"\n\tStack: '+L.join()+"\n\tValue stack: "+Z.join()+"\n");
if(H){b()}}if(ac==132){if(z){B("Error detected: There is no reduce or shift on the symbol "+ab[U])
}S++;ad.push(aa.offset-aa.att.length);ae.push(new Array());for(var X=0;X<P[L[L.length-1]].length;
X+=2){ae[ae.length-1].push(ab[P[L[L.length-1]][X]])}var O=new Array();var af=new Array();
for(var X=0;X<L.length;X++){O[X]=L[X];af[X]=Z[X]}while(ac==132&&U!=61){if(z){B("\tError recovery\nCurrent lookahead: "+ab[U]+" ("+aa.att+")\nAction: "+ac+"\n\n")
}if(U==-1){aa.offset++}while(ac==132&&L.length>0){L.pop();Z.pop();if(L.length==0){break
}ac=132;for(var X=0;X<P[L[L.length-1]].length;X+=2){if(P[L[L.length-1]][X]==U){ac=P[L[L.length-1]][X+1];
break}}}if(ac!=132){break}for(var X=0;X<O.length;X++){L.push(O[X]);Z.push(af[X])}U=l(aa)
}if(ac==132){if(z){B("\tError recovery failed, terminating parse process...")}break
}if(z){B("\tError recovery succeeded, continuing")}}if(ac>0){if(k){var Q=new K();
Q.sym=ab[U];Q.att=aa.att;Q.child=new Array();N.push(R.length);R.push(Q)}if(z){B("Shifting symbol: "+ab[U]+" ("+aa.att+")")
}L.push(ac);Z.push(aa.att);U=l(aa);if(z){B("\tNew lookahead symbol: "+ab[U]+" ("+aa.att+")")
}}else{ac*=-1;if(z){B("Reducing by producution: "+ac)}ag=void (0);if(z){B("\tPerforming semantic action...")
}switch(ac){case 0:ag=Z[Z.length-1];break;case 1:D=Z[Z.length-1][0];D.unflatten(Z[Z.length-1],1);
D.linkContinuedTwins();break;case 2:Z[Z.length-1].unshift(new E(),new f());ag=Z[Z.length-1];
break;case 3:Z[Z.length-1].unshift(new E());ag=Z[Z.length-1];break;case 4:Z[Z.length-1][0].setv("comments",Z[Z.length-2]);
ag=Z[Z.length-1];break;case 5:ag=[new E()];break;case 6:ag=Z[Z.length-1];break;case 7:Z[Z.length-2].push.apply(Z[Z.length-2],Z[Z.length-1]);
ag=Z[Z.length-2];break;case 8:Z[Z.length-1].unshift(Z[Z.length-2]);ag=Z[Z.length-1];
break;case 9:ag=Z[Z.length-1];break;case 10:ag=Z[Z.length-2].setv("commands",Z[Z.length-1]);
break;case 11:ag=Z[Z.length-2].setv("comments",Z[Z.length-1]);break;case 12:ag=new n(Z[Z.length-1],false);
break;case 13:ag=new n(Z[Z.length-1],true);break;case 14:ag=[Z[Z.length-1]];break;
case 15:Z[Z.length-2].push(Z[Z.length-1]);ag=Z[Z.length-2];break;case 16:ag=new h("Move",[Z[Z.length-3],Z[Z.length-1]]);
break;case 17:ag=new h("Exchange",[Z[Z.length-4],Z[Z.length-1]]);break;case 18:ag=new h("Remove",[Z[Z.length-1]]);
break;case 19:ag=new h("Add",[Z[Z.length-2],Z[Z.length-1]]);break;case 20:ag=new h("Rotate",[Z[Z.length-1]]);
break;case 21:ag=new h("Mirror",[Z[Z.length-3],Z[Z.length-1]]);break;case 22:ag=new h("Shift",[Z[Z.length-3],Z[Z.length-1]]);
break;case 23:ag=new h("PolishType",[]);break;case 24:ag=new h("Imitator",Z[Z.length-1]);
break;case 25:ag=Z[Z.length-1];break;case 26:Z[Z.length-2].push.apply(Z[Z.length-2],Z[Z.length-1]);
ag=Z[Z.length-2];break;case 27:ag=[Z[Z.length-2].setv("depth",Z[Z.length-3]),Z[Z.length-1].setv("depth",Z[Z.length-3]+1)];
break;case 28:ag=[Z[Z.length-1].setv("depth",Z[Z.length-3]+1)];break;case 29:ag=[new d(Z[Z.length-3],false)];
break;case 30:ag=[Z[Z.length-2].setv("depth",Z[Z.length-3]).setv("childIsThreat",true)];
break;case 31:ag=[Z[Z.length-1].setv("depth",Z[Z.length-3]+1)];break;case 32:ag=[Z[Z.length-2].setv("depth",Z[Z.length-3])];
break;case 33:ag=[Z[Z.length-1].setv("depth",Z[Z.length-2])];break;case 34:ag=Z[Z.length-1];
break;case 35:Z[Z.length-3].recolorings[Z[Z.length-1]].push(Z[Z.length-3].arrival);
ag=Z[Z.length-3];break;case 36:ag=Z[Z.length-3].setv("promotion",Z[Z.length-1]);break;
case 37:Z[Z.length-8].rebirths.push({unit:Z[Z.length-5],at:Z[Z.length-4],prom:Z[Z.length-2]});
ag=Z[Z.length-8];break;case 38:Z[Z.length-6].rebirths.push({unit:Z[Z.length-3],at:Z[Z.length-2],prom:null});
ag=Z[Z.length-6];break;case 39:Z[Z.length-9].antirebirths.push({unit:Z[Z.length-7],from:Z[Z.length-6],to:Z[Z.length-4],prom:Z[Z.length-2]});
ag=Z[Z.length-9];break;case 40:Z[Z.length-7].antirebirths.push({unit:Z[Z.length-5],from:Z[Z.length-4],to:Z[Z.length-2],prom:null});
ag=Z[Z.length-7];break;case 41:Z[Z.length-6].promotions.push({unit:Z[Z.length-2],at:Z[Z.length-4]});
ag=Z[Z.length-6];break;case 42:Z[Z.length-6].recolorings[Z[Z.length-2]].push(Z[Z.length-4]);
ag=Z[Z.length-6];break;case 43:Z[Z.length-4].imitators=Z[Z.length-2];ag=Z[Z.length-4];
break;case 44:ag=Z[Z.length-2].setv("checksign",Z[Z.length-1]);break;case 45:ag=Z[Z.length-1];
break;case 46:ag=Z[Z.length-2].setv("annotation",Z[Z.length-1]);break;case 47:ag=Z[Z.length-2].setv("comments",Z[Z.length-1]);
break;case 48:ag=Z[Z.length-1].setv("promotion",Z[Z.length-2]).setv("departant",Z[Z.length-2]);
break;case 49:ag=Z[Z.length-1];break;case 50:ag=Z[Z.length-1];break;case 51:ag=new q(Z[Z.length-1],Z[Z.length-2],"");
break;case 52:ag=new q(Z[Z.length-1],Z[Z.length-3],Z[Z.length-2]);break;case 53:ag=Z[Z.length-1];
break;case 54:ag=Z[Z.length-1];break;case 55:ag=Z[Z.length-1];break;case 56:ag=new q(Z[Z.length-1],"u","");
break;case 57:ag=new q(Z[Z.length-1],Z[Z.length-2],"");break;case 58:ag=new q(Z[Z.length-1],Z[Z.length-3],Z[Z.length-2]);
break;case 59:ag=new q(Z[Z.length-1],"u",Z[Z.length-2]);break;case 60:ag=Z[Z.length-1].setv("promotion",new q("P","u","")).setv("departant",new q("P","u",""));
break;case 61:ag=Z[Z.length-2].setEnPassant();break;case 62:ag=new u(Z[Z.length-3],Z[Z.length-1],-1);
break;case 63:ag=new u(Z[Z.length-3],Z[Z.length-1],Z[Z.length-1]);break;case 64:ag=new u(Z[Z.length-5],Z[Z.length-1],Z[Z.length-3]);
break;case 65:ag=[Z[Z.length-1]];break;case 66:Z[Z.length-3].push(Z[Z.length-1]);
ag=Z[Z.length-3];break;case 67:Z[Z.length-2].push(Z[Z.length-1]);ag=Z[Z.length-2];
break;case 68:ag=new m(true);break;case 69:ag=new m(false);break;case 70:ag=Z[Z.length-1];
break;case 71:ag=Z[Z.length-1];break;case 72:ag=[Z[Z.length-1]];break;case 73:Z[Z.length-2].push(Z[Z.length-1]);
ag=Z[Z.length-2];break}if(k){M=new Array()}if(z){B("\tPopping "+Y[ac][1]+" off the stack...")
}for(var X=0;X<Y[ac][1];X++){if(k){M.push(N.pop())}L.pop();Z.pop()}T=-1;for(var X=0;
X<W[L[L.length-1]].length;X+=2){if(W[L[L.length-1]][X]==Y[ac][0]){T=W[L[L.length-1]][X+1];
break}}if(k){var Q=new K();Q.sym=ab[Y[ac][0]];Q.att=new String();Q.child=M.reverse();
N.push(R.length);R.push(Q)}if(ac==0){break}if(z){B("\tPushing non-terminal "+ab[Y[ac][0]])
}L.push(T);Z.push(ag)}}if(z){B("\nParse complete.")}if(k){if(S==0){B("\n\n--- Parse tree ---");
a(0,R,N)}else{B("\n\nParse tree cannot be viewed. There where parse errors.")}}return S
}function a(K,L,J){var O=new String();for(var N=0;N<J.length;N++){O="";for(var M=K;
M>0;M--){O+="\t"}O+=L[J[N]].sym;if(L[J[N]].att!=""){O+=" >"+L[J[N]].att+"<"}B(O);
if(L[J[N]].child.length>0){a(K+1,L,L[J[N]].child)}}}if(!Array.prototype.map){Array.prototype.map=function(K){var J=this.length;
if(typeof K!="function"){throw new TypeError()}var N=new Array(J);var M=arguments[1];
for(var L=0;L<J;L++){if(L in this){N[L]=K.call(M,this[L],L,this)}}return N}}function F(J){return{x:J%8,y:J>>3}
}function I(J,K){return K*8+J}function C(J){return 2*parseInt(J.substr(0,J.length-1))
}function G(J){return J.charCodeAt(0)-"a".charCodeAt(0)+8*(7-J.charCodeAt(1)+"1".charCodeAt(0))
}function v(J){return"abcdefgh".charAt(J%8)+"87654321".charAt(J>>3)}function e(K,J){this[K]=J;
return this}function q(L,K,J){this.name=L;this.color=K;this.specs=J;this.setv=e;this.xfen=function(){var M=this.name.toLowerCase() in c.override?c.override[this.name.toLowerCase()]:c.glyphs[this.name.toLowerCase()];
if(this.color=="w"){M=M.toUpperCase()}else{M=M.toLowerCase()}if(this.color=="n"){M="!"+M
}if(this.specs!=""){M="b"+M}if(M.length>1){M="("+M+")"}return M};this.inverseColor=function(){if(this.color=="w"){this.color="b"
}else{if(this.color=="b"){this.color="w"}}};this.asText=function(){var M=this.name;
if(c.notation[M]){M=c.notation[M]}return(this.color=="n"?"n":"")+this.specs+M}}function y(){this.override={};
this.notation={};this.glyphs={"15":"s3","16":"s3","24":"s3","25":"s3","35":"s3","36":"s3","37":"s3",al:"b3",am:"a",an:"s1",ao:"s1",ar:"b2",b:"b",b1:"x",b2:"x",b3:"x",be:"x",bh:"b2",bi:"x",bk:"s1",bl:"b3",bm:"x",bn:"s2",bo:"x",bp:"p2",br:"x",bs:"p2",bt:"x",bu:"s1",bw:"x",c:"b1",ca:"s3",cg:"q1",ch:"s3",cp:"p3",cr:"s3",ct:"x",cy:"x",da:"r1",db:"b1",dg:"q1",dk:"r1","do":"q3",dr:"x",ds:"x",du:"p1",ea:"q3",eh:"q1",ek:"x",em:"x",eq:"e",et:"x",f:"o",fe:"b3",fr:"x",g:"q2",g2:"q1",g3:"q3",ge:"x",gf:"x",gh:"s1",gi:"s1",gl:"x",gn:"x",gr:"x",gt:"x",ha:"q3",k:"k",ka:"q3",kl:"q3",kh:"k2",kl:"q1",ko:"x",kp:"s2",l:"q1",lb:"b1",le:"q3",lh:"x",li:"q3",ln:"s1",lr:"r1",ls:"f",m:"x",ma:"s1",mg:"x",mh:"x",ml:"x",mm:"x",mo:"s3",mp:"p3",ms:"s3",n:"s2",na:"s3",nd:"b3",ne:"e",nh:"s3",nl:"s3",o:"o",oa:"s1",ok:"x",or:"e1",p:"p",pa:"r3",po:"k3",pp:"p2",pr:"x",q:"q",qe:"e",qf:"e",qn:"x",qq:"x",r:"r",ra:"x",rb:"b3",re:"r1",rf:"x",rh:"r2",rk:"x",rl:"r3",rm:"r1",rn:"f",rp:"f",ro:"f",rr:"x",rt:"q1",rw:"x",s:"s",s1:"s2",s2:"s2",s3:"s2",s4:"s2",sh:"x",si:"q3",sk:"a",so:"x",sp:"p1",sq:"x",ss:"x",sw:"x",th:"x",tr:"r3",uu:"o",va:"b3",wa:"x",we:"r2",wr:"x",z:"s3",zh:"x",zr:"x",ze:"x",ms:"s3"};
this.pprops=["chameleon","jigger","kamikaze","paralysing","royal","volage","functionary","halfneutral","hurdlecolourchanging","protean","magic","uncapturable"]
}function E(){this.depth=0;this.childIsThreat=false;this.setv=e;this.comments=[];
this.unflatten=function(J,K){this.children=[];while(K<J.length){if(this.depth+1==J[K].depth){this.children.push(J[K]);
K=J[K].unflatten(J,K+1)}else{if(this.depth+1<J[K].depth){var L=new d(this.depth+1,this.childIsThreat);
this.children.push(L);K=L.unflatten(J,K)}else{return K}}}};this.linkContinuedTwins=function(){for(var J=1;
J<this.children.length;J++){if(this.children[J].isContinued){this.children[J].anticipator=this.children[J-1]
}}};this.print=function(J,L){this.make(L);J.add(this.asText(),L,true,this.getCommentsAsText());
for(var K=0;K<this.children.length;K++){J.add(this.children[K].fullPrefix(),L,false,"");
this.children[K].print(J,L)}this.unmake(L)};this.getCommentsAsText=function(){var J="";
for(var K=0;K<this.comments.length;K++){if(this.comments[K]!="display-departure-square"){J+=this.comments[K]
}}return J};this.printChildren=function(J,L){for(var K=0;K<this.children.length;K++){if(this.children.length>1){if(!this.children[K].noNewLine()){J.add("\n",L,false,"");
J.add(K>0?" ":"  ",L,K>0,"")}J.add(this.children[K].fullPrefix(),L,false,"")}else{if(this.depth==1){J.add("\n",L,false,"")
}if(this.isSetPlay()&&(this.depth==2)){J.add(this.children[K].fullPrefix(),L,false,"")
}else{J.add(this.children[K].shortPrefix(),L,false,"")}}this.children[K].print(J,L)
}};this.noNewLine=function(){return false};this.isSetPlay=function(){return false
};this.fullPrefix=function(){var J="";if(this.depth<3){J+="\n"}else{for(var K=0;K<this.depth-2;
K++){J+=" "}}J+=this.depth>>1;J+=(this.depth%2!=0)?"...":".";return J};this.shortPrefix=function(){return(this.depth%2!=0)?"":(this.depth>>1)+"."
};this.make=this.unmake=function(J){J.flip()};this.asText=function(){return"***"}
}__node=new E();function t(){this.html="";this.add=function(L,K,J,M){if(L==""){return
}this.html+=J?this.anchor(K.toFen(),L):L;if(M!=""){this.html+='<span class="comment">'+M+"</span> "
}};this.anchor=function(J,K){return'<a href="#" fen="'+J+'">'+K+"</a> "};this.build=function(K,J){K.print(this,J);
return this.html}}function d(K,J){this.depth=K;this.is_threat=J;this.asText=function(){return this.is_threat?"~ ":""
};this.print=function(L,M){this.make(M);L.add(this.asText(),M,false,this.getCommentsAsText());
this.printChildren(L,M);this.unmake(M)};this.fullPrefix=this.shortPrefix=function(){return""
};this.noNewLine=function(){return this.is_threat};this.isSetPlay=function(){return !this.is_threat
}}d.prototype=__node;function n(K,J){this.depth=1;this.id=K;this.isContinued=J;this.anticipator=null;
this.commands=[];this.asText=function(){return this.id+")"};this.fullPrefix=function(){return"\n\n"
};this.make=function(L){this.oldboard=L.serialize();L.flip();if(this.anticipator!=null){this.anticipator.make(L)
}for(var M=0;M<this.commands.length;M++){this.commands[M].exec(L)}};this.unmake=function(L){L.unserialize(this.oldboard)
}}n.prototype=__node;__twinNode=new n();function f(){this.asText=this.fullPrefix=this.shortPrefix=function(){return""
};this.print=function(J,K){this.make(K);this.printChildren(J,K);this.unmake(K)}}f.prototype=__twinNode;
function h(K,J){this.name=K;this.args=J;this.exec=function(L){switch(this.name){case"Move":L.add(L.board[this.args[0]],this.args[1]);
L.drop(this.args[0]);break;case"Exchange":var M=L.board[this.args[0]];L.board[this.args[0]]=L.board[this.args[1]];
L.board[this.args[1]]=M;break;case"Remove":L.drop(this.args[0]);break;case"Add":L.add(this.args[0],this.args[1]);
break;case"Rotate":L.rotate(this.args[0]);break;case"Mirror":L.mirror(this.args[0],this.args[1]);
break;case"Shift":L.shift(this.args[0],this.args[1]);break;case"PolishType":L.polishTwin();
break;case"Imitator":L.imitators=J;break}}}function u(L,J,K){this.departure=L;this.arrival=J;
this.departant=null;this.promotion=null;this.capture=K;this.recolorings={w:[],b:[],n:[]};
this.rebirths=[];this.antirebirths=[];this.promotions=[];this.imitators=[];this.annotation="";
this.checksign="";this.setEnPassant=function(){var N=F(this.departure);var M=F(this.arrival);
this.capture=I(M.x,N.y);return this};this.make=function(M){this.assertSemantics(M);
this.oldboard=M.serialize();if(this.promotion==null){this.promotion=M.board[this.departure]
}if(this.promotion.color=="u"){if(M.board[this.departure].color!="u"){this.promotion.color=M.board[this.departure].color
}else{this.promotion.color=M.getStm()}}if(this.capture!=-1){M.drop(this.capture)}M.drop(this.departure);
M.add(this.promotion,this.arrival);M.flip();for(var N in this.recolorings){for(var O=0;
O<this.recolorings[N].length;O++){if(M.board[this.recolorings[N][O]]!=null){M.board[this.recolorings[N][O]].color=N
}}}for(var O=0;O<this.antirebirths.length;O++){M.move(this.antirebirths[O].from,this.antirebirths[O].to);
if(this.antirebirths[O].prom!=null){M.board[this.antirebirths[O].to].name=this.antirebirths[O].prom.name;
M.board[this.antirebirths[O].to].specs=this.antirebirths[O].prom.specs}}for(var O=0;
O<this.rebirths.length;O++){M.add(this.rebirths[O].prom==null?this.rebirths[O].unit:this.rebirths[O].prom,this.rebirths[O].at)
}for(var O=0;O<this.promotions.length;O++){M.board[this.promotions[O].at].name=this.promotions[O].unit.name;
if(this.promotions[O].unit.specs!=""){M.board[this.promotions[O].at].specs=this.promotions[O].unit.specs
}}M.imitators=this.imitators};this.unmake=function(M){M.unserialize(this.oldboard)
};this.asText=function(){var P=this.departant.asText();if(this.departant.name.toUpperCase()=="P"){P=(this.capture!=-1)?v(this.departure).charAt(0):""
}var O="";if(this.comments.indexOf("display-departure-square")!=-1){O+=v(this.departure);
if(this.capture==-1){O+="-"}}var N=v(this.arrival);if(this.capture!=-1){if(this.capture==this.arrival){N="x"+v(this.arrival)
}else{N="x"+v(this.capture)+"&rarr;"+v(this.arrival)}}var M=P+O+N;if(this.departant.asText()!=this.promotion.asText()){M+="="+this.promotion.asText()
}M+=this.imitatorsAsText()+this.recoloringsAsText()+this.antirebirthsAsText()+this.rebirthsAsText()+this.promotionsAsText();
if(this.checksign!=""){M+=this.checksign}if(this.annotation!=""){M+=this.annotation
}return M};this.imitatorsAsText=function(){return this.imitators.length==0?"":" (I"+this.imitators.map(v).join(",")+")"
};this.recoloringsAsText=function(){acc1=[];for(var M in this.recolorings){if(this.recolorings[M].length>0){acc2=[];
for(var N=0;N<this.recolorings[M].length;N++){acc2.push(v(this.recolorings[M][N]))
}acc1.push("["+acc2.join(",")+"="+M+"]")}}if(acc1.length>0){return" "+acc1.join("")
}return""};this.antirebirthsAsText=function(){acc=[];for(var N=0;N<this.antirebirths.length;
N++){var M=(this.antirebirths[N].prom==null)?"":"="+this.antirebirths[N].prom.asText();
acc.push("("+this.antirebirths[N].unit.asText()+v(this.antirebirths[N].from)+"&rarr;"+v(this.antirebirths[N].to)+M+")")
}if(acc.length>0){return" "+acc.join(" ")}return""};this.rebirthsAsText=function(){acc=[];
for(var N=0;N<this.rebirths.length;N++){var M=(this.rebirths[N].prom==null)?"":"="+this.rebirths[N].prom.asText();
acc.push("(+"+this.rebirths[N].unit.asText()+v(this.rebirths[N].at)+M+")")}if(acc.length>0){return" "+acc.join(" ")
}return""};this.promotionsAsText=function(){acc=[];for(var M=0;M<this.promotions.length;
M++){acc.push("("+v(this.promotions[M].at)+"="+this.promotions[M].unit.asText()+")")
}if(acc.length>0){return" "+acc.join(" ")}return""};this.print=function(M,N){this.make(N);
var O=this.asText();M.add(O,N,true,this.getCommentsAsText());this.printChildren(M,N);
this.unmake(N)};this.assertSemantics=function(M){var N=null;if(M.board[this.departure]==null){N="Departure from empty square "+v(this.departure)
}else{if((M.board[this.arrival]!=null)&&(this.capture==-1)){N="Arrival square "+v(this.arrival)+" is occupied but no capture is specified"
}else{if((M.board[this.arrival]!=null)&&(this.capture!=this.arrival)){N="Arrival square "+v(this.arrival)+" is occupied but capture is specified at "+v(this.capture)
}else{if((this.capture!=-1)&&(M.board[this.capture]==null)){N="Capture at empty square "+v(this.capture)
}}}}if(N){throw"Semantic error at depth "+this.depth+": "+N}}}u.prototype=__node;
__moveNode=new u(-1,-1,-1);function m(J){this.isKingSide=J;this.make=function(K){this.oldboard=K.serialize();
var L=K.btm?0:56;if(this.isKingSide){K.move(G("e8")+L,G("g8")+L);K.move(G("h8")+L,G("f8")+L)
}else{K.move(G("e8")+L,G("c8")+L);K.move(G("a8")+L,G("d8")+L)}K.flip()};this.asText=function(){return this.isKingSide?"0-0":"0-0-0"
}}m.prototype=__moveNode;function x(){this.add=function(K,J){if((J>63)||(J<0)){return
}this.board[J]=K};this.drop=function(J){this.add(null,J)};this.clear=function(){this.board=new Array(64);
this.imitators=[];for(i=0;i<64;i++){this.drop(i)}};this.move=function(K,J){this.add(this.board[K],J);
this.drop(K)};this.transform=function(L){var K=new x();for(var J=0;J<64;J++){if(this.board[J]!=null){p=F(J);
K.add(this.board[J],L(p.x,p.y))}}this.board=K.board};this.rotate=function(J){switch(J){case 270:this.rotate(90);
case 180:this.rotate(90);case 90:this.transform(function(K,L){return I(L,7-K)})}};
this.shift=function(K,J){pa=F(K);pb=F(J);this.transform(function(L,M){return I(L+pb.x-pa.x,M+pb.y-pa.y)
})};this.mirror=function(K,J){if(K==56){if(J==63){this.transform(function(L,M){return I(7-L,M)
})}else{if(J==7){this.transform(function(L,M){return I(M,L)})}else{if(J==0){this.transform(function(L,M){return I(L,7-M)
})}}}}else{if((K==63)&&(J==0)){this.transform(function(L,M){return I(7-M,7-L)})}}};
this.polishTwin=function(K){for(var J=0;J<64;J++){if(this.board[J]!=null){this.board[J].inverseColor()
}}};this.toFen=function(){var J="";var M=0;for(var K=0;K<64;K++){if((K>0)&&(K%8==0)){if(M>0){J+=M
}J+="/";M=0}var L="";if(this.board[K]!=null){L=this.board[K].xfen()}if(this.imitators.indexOf(K)!=-1){L="(!o)"
}if(L!=""){if(M>0){J+=M}J+=L;M=0}else{M++}}if(M>0){J+=M}return J};this.fromFen=function(J){this.clear();
var L=0;var K=0;while((K<64)&&(L<J.length)){if("12345678".indexOf(J.charAt(L))!=-1){K=K+parseInt(J.charAt(L));
L=L+1}else{if("("==J.charAt(L)){idx=J.indexOf(")",L);if(idx!=-1){this.add(J.substring(L+1,idx),K,[]);
K=K+1;L=idx+1}else{L=L+1}}else{if("/"==J.charAt(L)){L=L+1}else{this.add(J.charAt(L),K,[]);
K=K+1;L=L+1}}}}};this.fromPiecesClause=function(J){this.clear();var S=J.trim().toLowerCase().split("\n");
for(var O=0;O<S.length;O++){var Q=S[O].trim().split(/\s+/);if(["white","black","neutral"].indexOf(Q[0])==-1){continue
}var M=Q[0][0];var K="";var N=1;while((N<Q.length)&&(c.pprops.indexOf(Q[N])!=-1)){K+=Q[N][0];
N=N+1}var P;while((N<Q.length)&&(P=Q[N].match(/([a-z][0-9a-z]?)([a-h][1-8])+/))){name=P[1].toUpperCase();
for(var L=0;L<(Q[N].length-name.length)/2;L++){var R=G(Q[N].substr(name.length+L*2,2));
if("i"==name.toLowerCase()){this.imitators.push(R)}else{this.add(new q(name,M,K),R)
}}N=N+1}}};this.fromAlgebraic=function(N){for(color in N){if(["white","black","neutral"].indexOf(color)==-1){continue
}for(var L=0;L<N[color].length;L++){var O=N[color][L].split(/\s+/);var P="";for(var K=0;
K<O.length-2;K++){if(c.pprops.indexOf(O[K])!=-1){P+=O[K][0]}}if(matches=O[O.length-1].toLowerCase().match(/([a-z][0-9a-z]?)([a-h][1-8])+/)){var J=matches[1].toUpperCase();
var M=G(matches[2]);this.add(new q(J,color[0],P),M)}}}};this.toPiecesClause=function(L){var J="";
for(color in L){J+=color;for(var K=0;K<L[color].length;K++){J+=" "+L[color][K]}J+="\n"
}return J};this.xfen2Html=function(L){var J=new Array(64);for(var N=0;N<64;N++){J[N]=""
}var N=0;var M=0;while((M<64)&&(N<L.length)){if("12345678".indexOf(L.charAt(N))!=-1){M=M+parseInt(L.charAt(N));
N=N+1}else{if("("==L.charAt(N)){idx=L.indexOf(")",N);if(idx!=-1){J[M]=L.substring(N+1,idx);
M=M+1;N=idx+1}else{N=N+1}}else{if("/"==L.charAt(N)){N=N+1}else{J[M]=L.charAt(N);M=M+1;
N=N+1}}}}var K="";for(var N=0;N<8;N++){for(var M=0;M<8;M++){K+='<a class="cp'+r(J[N*8+M],(N+M)%2)+'"></a>'
}}return K};this.toHtml=function(){var J="";for(var L=0;L<8;L++){for(var K=0;K<8;
K++){var M=this.board[L*8+K]==null?"":this.board[L*8+K].xfen();J+='<a class="cp'+r(M,(L+K)%2)+'"></a>'
}}return J};this.btm=true;this.flip=function(){this.btm=!this.btm};this.getStm=function(){return this.btm?"b":"w"
};this.setStm=function(J){this.btm=(J=="b")};this.serialize=function(){return JSON.stringify(this)
};this.unserialize=function(K){o=JSON.parse(K);for(var J=0;J<64;J++){if(o.board[J]!=null){this.board[J]=new q(o.board[J].name,o.board[J].color,o.board[J].specs)
}else{this.board[J]=null}}this.btm=o.btm;this.imitators=o.imitators};this.piecesCount=function(){var K={w:0,b:0,n:0};
for(var J=0;J<64;J++){if(this.board[J]!=null){K[this.board[J].color]++}}var L=K.w+"+"+K.b;
if(K.n>0){L=L+"+"+K.n}return L};this.clear()}function r(K,J){if(""==K){return["EQ","FQ"][J]
}sprite={};matches=K.match(/^\(?(B?)(!?)([kqrbsnpeaofwdx])([1-7])?\)?$/i);if(matches){sprite={glyph:matches[3].toLowerCase(),rot:matches[4],border:(matches[1]!="")};
if(matches[2]!=""){sprite.color="neutral"}else{if(sprite.glyph==matches[3]){sprite.color="black"
}else{sprite.color="white"}}if(!sprite.rot){sprite.rot=0}}else{sprite={glyph:"x",rot:0,color:"white",border:false}
}if(sprite.glyph=="x"){sprite.color="white"}rot4="kqrbsnp";rot2="e";rot1="aofwd";
baseGlyphs={k:[[0,0],[0,17]],q:[[0,2],[0,18]],r:[[0,4],[0,19]],b:[[0,6],[0,20]],s:[[0,8],[0,21]],n:[[0,8],[0,21]],p:[[0,10],[0,22]],e:[[0,14],[0,16]],a:[[4,15],[4,15]],o:[[0,15],[6,13]],f:[[0,12],[0,12]],w:[[4,12],[4,12]],d:[[0,13],[0,13]],x:[[4,13],[4,13]]};
s=0;if(sprite.color=="neutral"){s=baseGlyphs[sprite.glyph][1][0]+8*baseGlyphs[sprite.glyph][1][1]
}else{if((sprite.color=="white")){s=baseGlyphs[sprite.glyph][0][0]+8*baseGlyphs[sprite.glyph][0][1]
}else{s=baseGlyphs[sprite.glyph][0][0]+8*baseGlyphs[sprite.glyph][0][1]+2}}if(sprite.rot>3){sprite.rot=sprite.rot%4;
if(0==sprite.rot){sprite.rot=1}}if(-1!=rot4.indexOf(sprite.glyph)){if(sprite.color=="neutral"){s+=2*sprite.rot
}else{s+=4*sprite.rot}}else{if(-1!=rot2.indexOf(sprite.glyph)){if(sprite.color=="neutral"){s+=2*(sprite.rot%2)
}else{s+=4*(sprite.rot%2)}}}s+=J;ABC="ABCDEFGHIJKLMNOPQRSTUVW";classList=ABC.charAt(s%8)+ABC.charAt(s/8);
if(sprite.border){classList+=" boxed"}return classList}var D=null;var c=new y();var j=new x();
function A(L){var J=L.attr("fen");if(!J){return}var K=g("#"+L.parent().attr("target"));
K.html('<div class="p2w-nav-fwd"></div><div class="p2w-nav-bwd"></div>'+j.xfen2Html(J));
L.siblings().removeClass("active");L.addClass("active");g(".p2w-nav-fwd").click(function(M){M.preventDefault();
A(g('.p2w-solution[target="'+g(this).parent().attr("id")+'"]').children(".active").nextAll("a").first())
});g(".p2w-nav-bwd").click(function(M){M.preventDefault();A(g('.p2w-solution[target="'+g(this).parent().attr("id")+'"]').children(".active").prevAll("a").first())
})}return{init:function(K,J,L){if(typeof(J)==="undefined"){J=false}if(typeof(L)==="undefined"){L=false
}var M=0;g(K+" .p2w-solution").each(function(){var V=new x();var N=g("#"+g(this).attr("target")).text();
var X=g("#"+g(this).attr("target")).attr("glyphs");c.override=X?JSON.parse(X):{};
var U=g(this).attr("notation");c.notation=U?JSON.parse(U):{};V.fromPiecesClause(N);
V.setStm(g(this).attr("full-move")=="wb"?"w":"b");g("#"+g(this).attr("target")).html(V.toHtml());
var W=new Array();var O=new Array();var P=0;var S=g("<textarea />").html(g(this).html()).text();
if(J){S=g(this).html()}if((P=w(S,W,O))>0){for(i=0;i<P;i++){if(!L){console.log('Parse error near "'+S.substr(W[i])+'", expecting "'+O[i].join()+'"')
}}return}try{var T=new t();var Q=T.build(D,V);g(this).html(Q)}catch(R){if(!L){console.log(R)
}return}M++;A(g(this).attr("start-node")=="last"?g(this).children("a").last():g(this).children("a").first());
g(this).children("a").click(function(Y){Y.preventDefault();A(g(this))})});return M
},Board:x}}(jQuery);jQuery(document).ready(function(){Py2Web.init("body")});