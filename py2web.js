var Py2Web=function(h){var l=false;var A=false;var J=false;function D(L){print(L)
}function b(){var L=new java.io.BufferedReader(new java.io.InputStreamReader(java.lang.System["in"]));
L.readLine()}function m(O){var N=0;var L=-1;var M=0;var Q=0;var P=O.offset+1;do{P--;
N=0;L=-2;Q=P;if(O.src.length<=Q){return 62}do{switch(N){case 0:if((O.src.charCodeAt(P)>=9&&O.src.charCodeAt(P)<=10)||O.src.charCodeAt(P)==13||O.src.charCodeAt(P)==32){N=1
}else{if(O.src.charCodeAt(P)==33||O.src.charCodeAt(P)==63){N=2}else{if(O.src.charCodeAt(P)==35){N=3
}else{if(O.src.charCodeAt(P)==42){N=4}else{if(O.src.charCodeAt(P)==43){N=5}else{if(O.src.charCodeAt(P)==44){N=6
}else{if(O.src.charCodeAt(P)==45){N=7}else{if(O.src.charCodeAt(P)==61){N=8}else{if((O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=72)||(O.src.charCodeAt(P)>=74&&O.src.charCodeAt(P)<=79)||(O.src.charCodeAt(P)>=81&&O.src.charCodeAt(P)<=90)){N=9
}else{if(O.src.charCodeAt(P)==91){N=10}else{if(O.src.charCodeAt(P)==93){N=11}else{if(O.src.charCodeAt(P)==98){N=12
}else{if(O.src.charCodeAt(P)==99||O.src.charCodeAt(P)==102||O.src.charCodeAt(P)==104){N=13
}else{if(O.src.charCodeAt(P)==110){N=14}else{if(O.src.charCodeAt(P)==119){N=15}else{if(O.src.charCodeAt(P)==46){N=40
}else{if(O.src.charCodeAt(P)==73){N=42}else{if((O.src.charCodeAt(P)>=106&&O.src.charCodeAt(P)<=107)||O.src.charCodeAt(P)==112||(O.src.charCodeAt(P)>=117&&O.src.charCodeAt(P)<=118)){N=43
}else{if(O.src.charCodeAt(P)==48){N=44}else{if(O.src.charCodeAt(P)==80){N=45}else{if(O.src.charCodeAt(P)==109){N=46
}else{if(O.src.charCodeAt(P)==49){N=47}else{if(O.src.charCodeAt(P)==114){N=49}else{if(O.src.charCodeAt(P)==57){N=50
}else{if(O.src.charCodeAt(P)==60){N=53}else{if(O.src.charCodeAt(P)==97||O.src.charCodeAt(P)==100||O.src.charCodeAt(P)==103){N=55
}else{if(O.src.charCodeAt(P)==101){N=56}else{if(O.src.charCodeAt(P)==105||O.src.charCodeAt(P)==108||O.src.charCodeAt(P)==111||O.src.charCodeAt(P)==113||(O.src.charCodeAt(P)>=120&&O.src.charCodeAt(P)<=121)){N=57
}else{if(O.src.charCodeAt(P)==115){N=58}else{if(O.src.charCodeAt(P)==122){N=59}else{if(O.src.charCodeAt(P)==123){N=60
}else{if(O.src.charCodeAt(P)==50){N=100}else{if(O.src.charCodeAt(P)==116){N=102}else{if((O.src.charCodeAt(P)>=51&&O.src.charCodeAt(P)<=56)){N=106
}else{N=-1}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}break;case 1:N=-1;L=1;M=P;break;case 2:if(O.src.charCodeAt(P)==33||O.src.charCodeAt(P)==63){N=41
}else{N=-1}L=11;M=P;break;case 3:N=-1;L=10;M=P;break;case 4:N=-1;L=7;M=P;break;case 5:N=-1;
L=8;M=P;break;case 6:N=-1;L=39;M=P;break;case 7:if(O.src.charCodeAt(P)==62){N=16}else{if(O.src.charCodeAt(P)==45){N=61
}else{N=-1}}L=6;M=P;break;case 8:if(O.src.charCodeAt(P)==61){N=63}else{N=-1}L=9;M=P;
break;case 9:if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)||(O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51
}else{N=-1}L=13;M=P;break;case 10:if(O.src.charCodeAt(P)==73){N=20}else{N=-1}L=3;
M=P;break;case 11:N=-1;L=4;M=P;break;case 12:if(O.src.charCodeAt(P)==41){N=21}else{if((O.src.charCodeAt(P)>=49&&O.src.charCodeAt(P)<=56)){N=22
}else{if(O.src.charCodeAt(P)==98){N=23}else{if(O.src.charCodeAt(P)==48||O.src.charCodeAt(P)==57){N=57
}else{if(O.src.charCodeAt(P)==117){N=66}else{N=-1}}}}}L=19;M=P;break;case 13:if(O.src.charCodeAt(P)==41){N=21
}else{if((O.src.charCodeAt(P)>=49&&O.src.charCodeAt(P)<=56)){N=22}else{if(O.src.charCodeAt(P)==99||O.src.charCodeAt(P)==102||O.src.charCodeAt(P)==104||(O.src.charCodeAt(P)>=106&&O.src.charCodeAt(P)<=107)||O.src.charCodeAt(P)==109||O.src.charCodeAt(P)==112||O.src.charCodeAt(P)==114||(O.src.charCodeAt(P)>=117&&O.src.charCodeAt(P)<=118)){N=52
}else{if(O.src.charCodeAt(P)==48||O.src.charCodeAt(P)==57){N=57}else{N=-1}}}}L=12;
M=P;break;case 14:if(O.src.charCodeAt(P)==41){N=21}else{if(O.src.charCodeAt(P)==98){N=23
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{N=-1}}}L=17;
M=P;break;case 15:if(O.src.charCodeAt(P)==41){N=21}else{if(O.src.charCodeAt(P)==98){N=23
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{N=-1}}}L=18;
M=P;break;case 16:N=-1;L=29;M=P;break;case 17:if(O.src.charCodeAt(P)==46){N=26}else{N=-1
}L=20;M=P;break;case 18:N=-1;L=14;M=P;break;case 19:if(O.src.charCodeAt(P)==46){N=18
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=71}else{N=-1}}L=2;
M=P;break;case 20:N=-1;L=38;M=P;break;case 21:N=-1;L=28;M=P;break;case 22:if(O.src.charCodeAt(P)==41){N=21
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{N=-1}}L=15;
M=P;break;case 23:N=-1;L=16;M=P;break;case 24:if(O.src.charCodeAt(P)==125){N=24}else{if((O.src.charCodeAt(P)>=0&&O.src.charCodeAt(P)<=122)||O.src.charCodeAt(P)==124||(O.src.charCodeAt(P)>=126&&O.src.charCodeAt(P)<=254)){N=60
}else{N=-1}}L=5;M=P;break;case 25:N=-1;L=30;M=P;break;case 26:N=-1;L=21;M=P;break;
case 27:if(O.src.charCodeAt(P)==45){N=78}else{N=-1}L=22;M=P;break;case 28:N=-1;L=31;
M=P;break;case 29:N=-1;L=26;M=P;break;case 30:N=-1;L=24;M=P;break;case 31:N=-1;L=32;
M=P;break;case 32:N=-1;L=23;M=P;break;case 33:N=-1;L=35;M=P;break;case 34:N=-1;L=34;
M=P;break;case 35:N=-1;L=33;M=P;break;case 36:N=-1;L=25;M=P;break;case 37:N=-1;L=37;
M=P;break;case 38:N=-1;L=27;M=P;break;case 39:N=-1;L=36;M=P;break;case 40:if(O.src.charCodeAt(P)==46){N=17
}else{N=-1}break;case 41:N=-1;L=11;M=P;break;case 42:if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)||(O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51
}else{if(O.src.charCodeAt(P)==109){N=64}else{N=-1}}L=13;M=P;break;case 43:if(O.src.charCodeAt(P)==41){N=21
}else{if(O.src.charCodeAt(P)==99||O.src.charCodeAt(P)==102||O.src.charCodeAt(P)==104||(O.src.charCodeAt(P)>=106&&O.src.charCodeAt(P)<=107)||O.src.charCodeAt(P)==109||O.src.charCodeAt(P)==112||O.src.charCodeAt(P)==114||(O.src.charCodeAt(P)>=117&&O.src.charCodeAt(P)<=118)){N=52
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{N=-1}}}L=12;
M=P;break;case 44:if(O.src.charCodeAt(P)==46){N=18}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=48
}else{if((O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51}else{if(O.src.charCodeAt(P)==45){N=62
}else{N=-1}}}}break;case 45:if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)||(O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51
}else{if(O.src.charCodeAt(P)==111){N=65}else{N=-1}}L=13;M=P;break;case 46:if(O.src.charCodeAt(P)==41){N=21
}else{if(O.src.charCodeAt(P)==99||O.src.charCodeAt(P)==102||O.src.charCodeAt(P)==104||(O.src.charCodeAt(P)>=106&&O.src.charCodeAt(P)<=107)||O.src.charCodeAt(P)==109||O.src.charCodeAt(P)==112||O.src.charCodeAt(P)==114||(O.src.charCodeAt(P)>=117&&O.src.charCodeAt(P)<=118)){N=52
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{if(O.src.charCodeAt(P)==105){N=68
}else{N=-1}}}}L=12;M=P;break;case 47:if(O.src.charCodeAt(P)==46){N=18}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=55)||O.src.charCodeAt(P)==57){N=48
}else{if((O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51}else{if(O.src.charCodeAt(P)==56){N=54
}else{N=-1}}}}break;case 48:if(O.src.charCodeAt(P)==46){N=18}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=71
}else{N=-1}}L=13;M=P;break;case 49:if(O.src.charCodeAt(P)==41){N=21}else{if(O.src.charCodeAt(P)==99||O.src.charCodeAt(P)==102||O.src.charCodeAt(P)==104||(O.src.charCodeAt(P)>=106&&O.src.charCodeAt(P)<=107)||O.src.charCodeAt(P)==109||O.src.charCodeAt(P)==112||O.src.charCodeAt(P)==114||(O.src.charCodeAt(P)>=117&&O.src.charCodeAt(P)<=118)){N=52
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{if(O.src.charCodeAt(P)==111){N=69
}else{N=-1}}}}L=12;M=P;break;case 50:if(O.src.charCodeAt(P)==46){N=18}else{if(O.src.charCodeAt(P)==48){N=19
}else{if((O.src.charCodeAt(P)>=49&&O.src.charCodeAt(P)<=57)){N=48}else{if((O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51
}else{N=-1}}}}break;case 51:N=-1;L=13;M=P;break;case 52:if(O.src.charCodeAt(P)==99||O.src.charCodeAt(P)==102||O.src.charCodeAt(P)==104||(O.src.charCodeAt(P)>=106&&O.src.charCodeAt(P)<=107)||O.src.charCodeAt(P)==109||O.src.charCodeAt(P)==112||O.src.charCodeAt(P)==114||(O.src.charCodeAt(P)>=117&&O.src.charCodeAt(P)<=118)){N=52
}else{N=-1}L=12;M=P;break;case 53:if(O.src.charCodeAt(P)==45){N=101}else{N=-1}break;
case 54:if(O.src.charCodeAt(P)==46){N=18}else{if(O.src.charCodeAt(P)==48){N=19}else{if((O.src.charCodeAt(P)>=49&&O.src.charCodeAt(P)<=57)){N=71
}else{N=-1}}}L=13;M=P;break;case 55:if(O.src.charCodeAt(P)==41){N=21}else{if((O.src.charCodeAt(P)>=49&&O.src.charCodeAt(P)<=56)){N=22
}else{if(O.src.charCodeAt(P)==48||O.src.charCodeAt(P)==57){N=57}else{N=-1}}}break;
case 56:if(O.src.charCodeAt(P)==41){N=21}else{if((O.src.charCodeAt(P)>=49&&O.src.charCodeAt(P)<=56)){N=22
}else{if(O.src.charCodeAt(P)==48||O.src.charCodeAt(P)==57){N=57}else{if(O.src.charCodeAt(P)==112){N=67
}else{N=-1}}}}break;case 57:if(O.src.charCodeAt(P)==41){N=21}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57
}else{N=-1}}break;case 58:if(O.src.charCodeAt(P)==41){N=21}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57
}else{if(O.src.charCodeAt(P)==104){N=103}else{N=-1}}}break;case 59:if(O.src.charCodeAt(P)==41){N=21
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{if(O.src.charCodeAt(P)==117){N=70
}else{N=-1}}}break;case 60:if(O.src.charCodeAt(P)==125){N=24}else{if((O.src.charCodeAt(P)>=0&&O.src.charCodeAt(P)<=122)||O.src.charCodeAt(P)==124||(O.src.charCodeAt(P)>=126&&O.src.charCodeAt(P)<=254)){N=60
}else{N=-1}}break;case 61:if(O.src.charCodeAt(P)==62){N=25}else{N=-1}break;case 62:if(O.src.charCodeAt(P)==48){N=27
}else{N=-1}break;case 63:if(O.src.charCodeAt(P)==62){N=28}else{N=-1}break;case 64:if(O.src.charCodeAt(P)==105){N=109
}else{N=-1}break;case 65:if(O.src.charCodeAt(P)==108){N=73}else{N=-1}break;case 66:if(O.src.charCodeAt(P)==116){N=29
}else{N=-1}break;case 67:if(O.src.charCodeAt(P)==46){N=30}else{N=-1}break;case 68:if(O.src.charCodeAt(P)==114){N=107
}else{N=-1}break;case 69:if(O.src.charCodeAt(P)==116){N=74}else{N=-1}break;case 70:if(O.src.charCodeAt(P)==103){N=77
}else{N=-1}break;case 71:if(O.src.charCodeAt(P)==46){N=18}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=71
}else{N=-1}}break;case 72:if(O.src.charCodeAt(P)==62){N=31}else{N=-1}break;case 73:if(O.src.charCodeAt(P)==105){N=79
}else{N=-1}break;case 74:if(O.src.charCodeAt(P)==97){N=81}else{N=-1}break;case 75:if(O.src.charCodeAt(P)==102){N=82
}else{N=-1}break;case 76:if(O.src.charCodeAt(P)==101){N=83}else{N=-1}break;case 77:if(O.src.charCodeAt(P)==122){N=84
}else{N=-1}break;case 78:if(O.src.charCodeAt(P)==48){N=32}else{N=-1}break;case 79:if(O.src.charCodeAt(P)==115){N=85
}else{N=-1}break;case 80:if(O.src.charCodeAt(P)==111){N=86}else{N=-1}break;case 81:if(O.src.charCodeAt(P)==116){N=87
}else{N=-1}break;case 82:if(O.src.charCodeAt(P)==116){N=33}else{N=-1}break;case 83:if(O.src.charCodeAt(P)==97){N=88
}else{N=-1}break;case 84:if(O.src.charCodeAt(P)==119){N=89}else{N=-1}break;case 85:if(O.src.charCodeAt(P)==104){N=91
}else{N=-1}break;case 86:if(O.src.charCodeAt(P)==114){N=34}else{N=-1}break;case 87:if(O.src.charCodeAt(P)==101){N=35
}else{N=-1}break;case 88:if(O.src.charCodeAt(P)==116){N=92}else{N=-1}break;case 89:if(O.src.charCodeAt(P)==97){N=93
}else{N=-1}break;case 90:if(O.src.charCodeAt(P)==111){N=94}else{N=-1}break;case 91:if(O.src.charCodeAt(P)==84){N=95
}else{N=-1}break;case 92:if(O.src.charCodeAt(P)==58){N=36}else{N=-1}break;case 93:if(O.src.charCodeAt(P)==110){N=96
}else{N=-1}break;case 94:if(O.src.charCodeAt(P)==114){N=37}else{N=-1}break;case 95:if(O.src.charCodeAt(P)==121){N=97
}else{N=-1}break;case 96:if(O.src.charCodeAt(P)==103){N=98}else{N=-1}break;case 97:if(O.src.charCodeAt(P)==112){N=99
}else{N=-1}break;case 98:if(O.src.charCodeAt(P)==46){N=38}else{N=-1}break;case 99:if(O.src.charCodeAt(P)==101){N=39
}else{N=-1}break;case 100:if(O.src.charCodeAt(P)==46){N=18}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=54)||(O.src.charCodeAt(P)>=56&&O.src.charCodeAt(P)<=57)){N=48
}else{if((O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51}else{if(O.src.charCodeAt(P)==55){N=54
}else{N=-1}}}}break;case 101:if(O.src.charCodeAt(P)==45){N=72}else{N=-1}break;case 102:if(O.src.charCodeAt(P)==41){N=21
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=57}else{if(O.src.charCodeAt(P)==104){N=104
}else{N=-1}}}break;case 103:if(O.src.charCodeAt(P)==105){N=75}else{N=-1}break;case 104:if(O.src.charCodeAt(P)==114){N=76
}else{N=-1}break;case 105:if(O.src.charCodeAt(P)==116){N=90}else{N=-1}break;case 106:if(O.src.charCodeAt(P)==46){N=18
}else{if((O.src.charCodeAt(P)>=48&&O.src.charCodeAt(P)<=57)){N=48}else{if((O.src.charCodeAt(P)>=65&&O.src.charCodeAt(P)<=90)){N=51
}else{N=-1}}}break;case 107:if(O.src.charCodeAt(P)==114){N=80}else{N=-1}break;case 108:if(O.src.charCodeAt(P)==97){N=105
}else{N=-1}break;case 109:if(O.src.charCodeAt(P)==116){N=108}else{N=-1}break}P++}while(N>-1)
}while(1>-1&&L==1);if(L>-1){O.att=O.src.substr(Q,M-Q);O.offset=M;switch(L){case 2:O.att=parseInt(O.att);
break;case 5:O.att=O.att.substr(1,O.att.length-2);break;case 14:O.att=E(O.att);break;
case 15:O.att=I(O.att);break;case 28:O.att=O.att.substring(0,O.att.length-1);break
}}else{O.att=new String();L=-1}return L}function x(L,af,ag){var N=new Array();var ab=new Array();
var U=0;var ae;var V;var W;var ai;var X=new Function("","var offset; var src; var att;");
var ac=new X();var M=new Function("","var sym; var att; var child;");var T=new Array();
var P=new Array();var O=null;var aa=new Array(new Array(0,1),new Array(41,1),new Array(40,1),new Array(40,1),new Array(40,2),new Array(40,0),new Array(43,1),new Array(43,2),new Array(45,2),new Array(46,1),new Array(46,2),new Array(46,2),new Array(47,1),new Array(47,2),new Array(48,1),new Array(48,2),new Array(49,4),new Array(49,5),new Array(49,3),new Array(49,3),new Array(49,2),new Array(49,4),new Array(49,4),new Array(49,1),new Array(49,2),new Array(49,2),new Array(42,1),new Array(42,2),new Array(52,3),new Array(52,3),new Array(52,3),new Array(52,3),new Array(52,4),new Array(52,3),new Array(52,2),new Array(55,1),new Array(55,3),new Array(55,3),new Array(55,3),new Array(55,8),new Array(55,6),new Array(55,9),new Array(55,7),new Array(55,6),new Array(55,6),new Array(55,5),new Array(55,4),new Array(55,2),new Array(53,2),new Array(53,1),new Array(53,2),new Array(53,2),new Array(54,2),new Array(54,1),new Array(54,1),new Array(54,2),new Array(50,2),new Array(50,3),new Array(57,1),new Array(57,1),new Array(57,1),new Array(56,1),new Array(56,2),new Array(56,3),new Array(56,2),new Array(60,1),new Array(59,3),new Array(59,3),new Array(59,5),new Array(51,1),new Array(51,3),new Array(51,2),new Array(61,1),new Array(61,1),new Array(58,1),new Array(58,1),new Array(44,1),new Array(44,2));
var R=new Array(new Array(5,8,14,9,26,10,28,13,8,14,62,-5),new Array(62,0),new Array(62,-1),new Array(14,9,26,10,62,-2),new Array(28,13,8,14,62,-3),new Array(5,17,14,9,26,10,28,13,8,14,62,-5),new Array(62,-26,14,-26,26,-26,28,-26,8,-26),new Array(62,-6,28,-6,8,-6),new Array(5,-76,14,-76,26,-76,28,-76,8,-76,62,-76,13,-76,17,-76,12,-76,15,-76,22,-76,23,-76,25,-76,27,-76,11,-76),new Array(20,20,13,26,17,27,12,28,22,30,23,31,15,32),new Array(14,33),new Array(5,8,14,9,26,10),new Array(6,39,8,40,33,41,34,42,35,43,36,44,37,45,17,47,18,48,19,49,14,-9,26,-9,5,-9),new Array(14,-12,26,-12,6,-12,8,-12,33,-12,34,-12,35,-12,36,-12,37,-12,17,-12,18,-12,19,-12,5,-12),new Array(28,50),new Array(62,-27,14,-27,26,-27,28,-27,8,-27),new Array(62,-7,28,-7,8,-7),new Array(5,-76,14,-76,26,-76,28,-76,8,-76,62,-76),new Array(62,-4),new Array(11,52,25,54,27,55,5,8,13,26,17,27,12,28,22,30,23,31,15,32,62,-34,14,-34,26,-34,28,-34,8,-34),new Array(21,57,13,26,17,27,12,28,22,30,23,31,15,32),new Array(9,58,38,59,3,60,8,62,10,63,13,-49,17,-49,12,-49,15,-49,22,-49,23,-49,25,-49,27,-49,62,-49,14,-49,26,-49,11,-49,5,-49,28,-49),new Array(24,64,8,-35,10,-35,13,-35,17,-35,12,-35,15,-35,22,-35,23,-35,25,-35,27,-35,62,-35,14,-35,26,-35,9,-35,3,-35,38,-35,11,-35,5,-35,28,-35),new Array(15,32),new Array(8,-53,10,-53,13,-53,17,-53,12,-53,15,-53,22,-53,23,-53,25,-53,27,-53,62,-53,14,-53,26,-53,24,-53,9,-53,3,-53,38,-53,11,-53,5,-53,28,-53),new Array(8,-54,10,-54,13,-54,17,-54,12,-54,15,-54,22,-54,23,-54,25,-54,27,-54,62,-54,14,-54,26,-54,24,-54,9,-54,3,-54,38,-54,11,-54,5,-54,28,-54),new Array(15,-61,8,-61,10,-61,13,-61,17,-61,12,-61,22,-61,23,-61,25,-61,27,-61,62,-61,14,-61,26,-61,9,-61,3,-61,38,-61,11,-61,5,-61,28,-61,4,-61),new Array(12,66,13,67),new Array(13,68),new Array(8,-65,10,-65,13,-65,17,-65,12,-65,15,-65,22,-65,23,-65,25,-65,27,-65,62,-65,14,-65,26,-65,24,-65,9,-65,3,-65,38,-65,11,-65,5,-65,28,-65),new Array(8,-72,10,-72,13,-72,17,-72,12,-72,15,-72,22,-72,23,-72,25,-72,27,-72,62,-72,14,-72,26,-72,24,-72,9,-72,3,-72,38,-72,11,-72,5,-72,28,-72),new Array(8,-73,10,-73,13,-73,17,-73,12,-73,15,-73,22,-73,23,-73,25,-73,27,-73,62,-73,14,-73,26,-73,24,-73,9,-73,3,-73,38,-73,11,-73,5,-73,28,-73),new Array(7,69,6,70),new Array(20,71),new Array(5,72,14,-11,26,-11),new Array(14,9,26,10,62,-8,28,-8,8,-8),new Array(6,39,8,40,33,41,34,42,35,43,36,44,37,45,17,47,18,48,19,49,14,-10,26,-10,5,-10),new Array(14,-14,26,-14,5,-14,6,-14,8,-14,33,-14,34,-14,35,-14,36,-14,37,-14,17,-14,18,-14,19,-14),new Array(15,74),new Array(17,47,18,48,19,49),new Array(17,47,18,48,19,49),new Array(2,77),new Array(15,78),new Array(15,79),new Array(14,-23,26,-23,5,-23,6,-23,8,-23,33,-23,34,-23,35,-23,36,-23,37,-23,17,-23,18,-23,19,-23),new Array(15,81),new Array(12,82,13,83),new Array(13,-58,12,-58),new Array(13,-59,12,-59,4,-59),new Array(13,-60,12,-60,4,-60),new Array(14,-13,26,-13,6,-13,8,-13,33,-13,34,-13,35,-13,36,-13,37,-13,17,-13,18,-13,19,-13,5,-13),new Array(5,72,13,-51,17,-51,12,-51,15,-51,22,-51,23,-51,25,-51,27,-51,62,-51,14,-51,26,-51,11,-51,28,-51,8,-51),new Array(13,-50,17,-50,12,-50,15,-50,22,-50,23,-50,25,-50,27,-50,62,-50,14,-50,26,-50,11,-50,5,-50,28,-50,8,-50),new Array(11,52,5,8,62,-28,14,-28,26,-28,28,-28,8,-28),new Array(62,-31,14,-31,26,-31,28,-31,8,-31),new Array(62,-33,14,-33,26,-33,28,-33,8,-33),new Array(11,52,5,8,62,-29,14,-29,26,-29,28,-29,8,-29),new Array(62,-30,14,-30,26,-30,28,-30,8,-30),new Array(16,84,13,26,17,87,12,28,18,48,19,49,8,-47,10,-47,15,-47,22,-47,23,-47,25,-47,27,-47,62,-47,14,-47,26,-47,9,-47,3,-47,38,-47,11,-47,5,-47,28,-47),new Array(15,81),new Array(8,89,15,91,6,92,17,47,18,48,19,49),new Array(13,-48,17,-48,12,-48,15,-48,22,-48,23,-48,25,-48,27,-48,62,-48,14,-48,26,-48,11,-48,5,-48,28,-48,8,-48),new Array(13,-74,17,-74,12,-74,15,-74,22,-74,23,-74,25,-74,27,-74,62,-74,14,-74,26,-74,11,-74,5,-74,28,-74,8,-74),new Array(13,-75,17,-75,12,-75,15,-75,22,-75,23,-75,25,-75,27,-75,62,-75,14,-75,26,-75,11,-75,5,-75,28,-75,8,-75),new Array(8,-55,10,-55,13,-55,17,-55,12,-55,15,-55,22,-55,23,-55,25,-55,27,-55,62,-55,14,-55,26,-55,24,-55,9,-55,3,-55,38,-55,11,-55,5,-55,28,-55),new Array(8,-52,10,-52,13,-52,17,-52,12,-52,15,-52,22,-52,23,-52,25,-52,27,-52,62,-52,14,-52,26,-52,24,-52,9,-52,3,-52,38,-52,11,-52,5,-52,28,-52),new Array(13,93),new Array(15,-62,8,-62,10,-62,13,-62,17,-62,12,-62,22,-62,23,-62,25,-62,27,-62,62,-62,14,-62,26,-62,9,-62,3,-62,38,-62,11,-62,5,-62,28,-62,4,-62),new Array(15,-64,8,-64,10,-64,13,-64,17,-64,12,-64,22,-64,23,-64,25,-64,27,-64,62,-64,14,-64,26,-64,9,-64,3,-64,38,-64,11,-64,5,-64,28,-64,4,-64),new Array(15,94),new Array(15,95),new Array(13,26,17,27,12,28,22,30,23,31,15,32),new Array(14,-77,26,-77,5,-77,13,-77,17,-77,12,-77,15,-77,22,-77,23,-77,25,-77,27,-77,62,-77,11,-77,28,-77,8,-77),new Array(14,-15,26,-15,5,-15,6,-15,8,-15,33,-15,34,-15,35,-15,36,-15,37,-15,17,-15,18,-15,19,-15),new Array(30,97,32,98,14,-25,26,-25,5,-25,6,-25,8,-25,33,-25,34,-25,35,-25,36,-25,37,-25,17,-25,18,-25,19,-25),new Array(15,99),new Array(15,100),new Array(14,-20,26,-20,5,-20,6,-20,8,-20,33,-20,34,-20,35,-20,36,-20,37,-20,17,-20,18,-20,19,-20),new Array(32,101),new Array(31,102),new Array(15,103,39,104,14,-24,26,-24,5,-24,6,-24,8,-24,33,-24,34,-24,35,-24,36,-24,37,-24,17,-24,18,-24,19,-24),new Array(14,-69,26,-69,5,-69,6,-69,8,-69,33,-69,34,-69,35,-69,36,-69,37,-69,17,-69,18,-69,19,-69,39,-69,15,-69,4,-69),new Array(13,105),new Array(15,-56,8,-56,10,-56,13,-56,17,-56,12,-56,22,-56,23,-56,25,-56,27,-56,62,-56,14,-56,26,-56,9,-56,3,-56,38,-56,11,-56,5,-56,28,-56),new Array(8,-36,10,-36,13,-36,17,-36,12,-36,15,-36,22,-36,23,-36,25,-36,27,-36,62,-36,14,-36,26,-36,9,-36,3,-36,38,-36,11,-36,5,-36,28,-36),new Array(8,-37,10,-37,13,-37,17,-37,12,-37,15,-37,22,-37,23,-37,25,-37,27,-37,62,-37,14,-37,26,-37,9,-37,3,-37,38,-37,11,-37,5,-37,28,-37),new Array(8,-38,10,-38,13,-38,17,-38,12,-38,15,-38,22,-38,23,-38,25,-38,27,-38,62,-38,14,-38,26,-38,9,-38,3,-38,38,-38,11,-38,5,-38,28,-38),new Array(12,66,13,67,4,-58),new Array(15,103,39,104,4,106),new Array(17,47,18,48,19,49),new Array(15,108),new Array(9,109),new Array(15,110),new Array(15,-63,8,-63,10,-63,13,-63,17,-63,12,-63,22,-63,23,-63,25,-63,27,-63,62,-63,14,-63,26,-63,9,-63,3,-63,38,-63,11,-63,5,-63,28,-63,4,-63),new Array(6,111,8,-67,10,-67,13,-67,17,-67,12,-67,15,-67,22,-67,23,-67,25,-67,27,-67,62,-67,14,-67,26,-67,24,-67,9,-67,3,-67,38,-67,11,-67,5,-67,28,-67),new Array(8,-66,10,-66,13,-66,17,-66,12,-66,15,-66,22,-66,23,-66,25,-66,27,-66,62,-66,14,-66,26,-66,24,-66,9,-66,3,-66,38,-66,11,-66,5,-66,28,-66),new Array(11,52,5,8,62,-32,14,-32,26,-32,28,-32,8,-32),new Array(15,112),new Array(17,47,18,48,19,49),new Array(14,-18,26,-18,5,-18,6,-18,8,-18,33,-18,34,-18,35,-18,36,-18,37,-18,17,-18,18,-18,19,-18),new Array(14,-19,26,-19,5,-19,6,-19,8,-19,33,-19,34,-19,35,-19,36,-19,37,-19,17,-19,18,-19,19,-19),new Array(15,114),new Array(15,115),new Array(14,-71,26,-71,5,-71,6,-71,8,-71,33,-71,34,-71,35,-71,36,-71,37,-71,17,-71,18,-71,19,-71,39,-71,15,-71,4,-71),new Array(15,116),new Array(15,-57,8,-57,10,-57,13,-57,17,-57,12,-57,22,-57,23,-57,25,-57,27,-57,62,-57,14,-57,26,-57,9,-57,3,-57,38,-57,11,-57,5,-57,28,-57),new Array(8,-46,10,-46,13,-46,17,-46,12,-46,15,-46,22,-46,23,-46,25,-46,27,-46,62,-46,14,-46,26,-46,9,-46,3,-46,38,-46,11,-46,5,-46,28,-46),new Array(15,117),new Array(29,118),new Array(17,87,18,48,19,49,13,26,12,28),new Array(4,121),new Array(15,122),new Array(14,-16,26,-16,5,-16,6,-16,8,-16,33,-16,34,-16,35,-16,36,-16,37,-16,17,-16,18,-16,19,-16),new Array(15,123),new Array(14,-21,26,-21,5,-21,6,-21,8,-21,33,-21,34,-21,35,-21,36,-21,37,-21,17,-21,18,-21,19,-21),new Array(14,-22,26,-22,5,-22,6,-22,8,-22,33,-22,34,-22,35,-22,36,-22,37,-22,17,-22,18,-22,19,-22),new Array(14,-70,26,-70,5,-70,6,-70,8,-70,33,-70,34,-70,35,-70,36,-70,37,-70,17,-70,18,-70,19,-70,39,-70,15,-70,4,-70),new Array(4,124,9,125),new Array(15,126),new Array(4,127),new Array(4,128),new Array(8,-45,10,-45,13,-45,17,-45,12,-45,15,-45,22,-45,23,-45,25,-45,27,-45,62,-45,14,-45,26,-45,9,-45,3,-45,38,-45,11,-45,5,-45,28,-45),new Array(8,-68,10,-68,13,-68,17,-68,12,-68,15,-68,22,-68,23,-68,25,-68,27,-68,62,-68,14,-68,26,-68,24,-68,9,-68,3,-68,38,-68,11,-68,5,-68,28,-68),new Array(14,-17,26,-17,5,-17,6,-17,8,-17,33,-17,34,-17,35,-17,36,-17,37,-17,17,-17,18,-17,19,-17),new Array(8,-40,10,-40,13,-40,17,-40,12,-40,15,-40,22,-40,23,-40,25,-40,27,-40,62,-40,14,-40,26,-40,9,-40,3,-40,38,-40,11,-40,5,-40,28,-40),new Array(13,26,17,27,12,28),new Array(9,130,4,131),new Array(8,-43,10,-43,13,-43,17,-43,12,-43,15,-43,22,-43,23,-43,25,-43,27,-43,62,-43,14,-43,26,-43,9,-43,3,-43,38,-43,11,-43,5,-43,28,-43),new Array(8,-44,10,-44,13,-44,17,-44,12,-44,15,-44,22,-44,23,-44,25,-44,27,-44,62,-44,14,-44,26,-44,9,-44,3,-44,38,-44,11,-44,5,-44,28,-44),new Array(4,132),new Array(13,26,17,27,12,28),new Array(8,-42,10,-42,13,-42,17,-42,12,-42,15,-42,22,-42,23,-42,25,-42,27,-42,62,-42,14,-42,26,-42,9,-42,3,-42,38,-42,11,-42,5,-42,28,-42),new Array(8,-39,10,-39,13,-39,17,-39,12,-39,15,-39,22,-39,23,-39,25,-39,27,-39,62,-39,14,-39,26,-39,9,-39,3,-39,38,-39,11,-39,5,-39,28,-39),new Array(4,134),new Array(8,-41,10,-41,13,-41,17,-41,12,-41,15,-41,22,-41,23,-41,25,-41,27,-41,62,-41,14,-41,26,-41,9,-41,3,-41,38,-41,11,-41,5,-41,28,-41));
var Y=new Array(new Array(41,1,40,2,42,3,43,4,44,5,52,6,45,7,46,11,47,12),new Array(),new Array(),new Array(52,15),new Array(45,16,46,11,47,12),new Array(40,18,42,3,43,4,44,5,52,6,45,7,46,11,47,12),new Array(),new Array(),new Array(),new Array(53,19,55,21,54,22,56,23,60,24,61,25,59,29),new Array(),new Array(44,34,42,35,52,6),new Array(48,36,49,37,50,38,57,46),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(44,51,53,53,55,21,54,22,56,23,60,24,61,25,59,29),new Array(53,56,55,21,54,22,56,23,60,24,61,25,59,29),new Array(58,61),new Array(),new Array(59,65),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(52,15),new Array(49,73,50,38,57,46),new Array(),new Array(),new Array(50,75,57,46),new Array(50,76,57,46),new Array(),new Array(),new Array(),new Array(),new Array(51,80),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(44,51),new Array(),new Array(),new Array(44,51),new Array(),new Array(56,85,50,86,57,46),new Array(51,88),new Array(50,90,57,46),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(53,96,55,21,54,22,56,23,60,24,61,25,59,29),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(50,107,57,46),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(44,51),new Array(),new Array(50,113,57,46),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(56,119,57,120),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(56,129),new Array(),new Array(),new Array(),new Array(),new Array(56,133),new Array(),new Array(),new Array(),new Array());
var ad=new Array("BuildTree'","WHITESPACE","Angle","[","]","Comment","-","*","+","=","OtherCheckSign","Annotation","FairyProps","PieceName","MoveNo","Square","TerminatingColorPrefix","n","w","b","..","...","0-0","0-0-0","ep.","threat:","but","zugzwang.","TwinId","->","-->","==>","<-->","rotate","mirror","shift","PolishType","Imitator","[I",",","Solution","BuildTree","MoveList","TwinList","Comments","Twin","TwinHeader","TwinBullet","CommandList","Command","LongPieceDecl","SquareList","Move","HalfMove","Body","Ply","PieceDecl","ColorPrefix","CheckSign","Squares","PawnMove","Castling","$");
ac.offset=0;ac.src=L;ac.att=new String();if(!af){af=new Array()}if(!ag){ag=new Array()
}N.push(0);ab.push(0);W=m(ac);while(true){ae=136;for(var Z=0;Z<R[N[N.length-1]].length;
Z+=2){if(R[N[N.length-1]][Z]==W){ae=R[N[N.length-1]][Z+1];break}}if(A&&N.length>0){D("\nState "+N[N.length-1]+"\n\tLookahead: "+ad[W]+' ("'+ac.att+'")\n\tAction: '+ae+'\n\tSource: "'+ac.src.substr(ac.offset,30)+((ac.offset+30<ac.src.length)?"...":"")+'"\n\tStack: '+N.join()+"\n\tValue stack: "+ab.join()+"\n");
if(J){b()}}if(ae==136){if(A){D("Error detected: There is no reduce or shift on the symbol "+ad[W])
}U++;af.push(ac.offset-ac.att.length);ag.push(new Array());for(var Z=0;Z<R[N[N.length-1]].length;
Z+=2){ag[ag.length-1].push(ad[R[N[N.length-1]][Z]])}var Q=new Array();var ah=new Array();
for(var Z=0;Z<N.length;Z++){Q[Z]=N[Z];ah[Z]=ab[Z]}while(ae==136&&W!=62){if(A){D("\tError recovery\nCurrent lookahead: "+ad[W]+" ("+ac.att+")\nAction: "+ae+"\n\n")
}if(W==-1){ac.offset++}while(ae==136&&N.length>0){N.pop();ab.pop();if(N.length==0){break
}ae=136;for(var Z=0;Z<R[N[N.length-1]].length;Z+=2){if(R[N[N.length-1]][Z]==W){ae=R[N[N.length-1]][Z+1];
break}}}if(ae!=136){break}for(var Z=0;Z<Q.length;Z++){N.push(Q[Z]);ab.push(ah[Z])
}W=m(ac)}if(ae==136){if(A){D("\tError recovery failed, terminating parse process...")
}break}if(A){D("\tError recovery succeeded, continuing")}}if(ae>0){if(l){var S=new M();
S.sym=ad[W];S.att=ac.att;S.child=new Array();P.push(T.length);T.push(S)}if(A){D("Shifting symbol: "+ad[W]+" ("+ac.att+")")
}N.push(ae);ab.push(ac.att);W=m(ac);if(A){D("\tNew lookahead symbol: "+ad[W]+" ("+ac.att+")")
}}else{ae*=-1;if(A){D("Reducing by producution: "+ae)}ai=void (0);if(A){D("\tPerforming semantic action...")
}switch(ae){case 0:ai=ab[ab.length-1];break;case 1:F=ab[ab.length-1][0];F.unflatten(ab[ab.length-1],1);
F.linkContinuedTwins();break;case 2:ab[ab.length-1].unshift(new G(),new g());ai=ab[ab.length-1];
break;case 3:ab[ab.length-1].unshift(new G());ai=ab[ab.length-1];break;case 4:ab[ab.length-1][0].setv("comments",ab[ab.length-2]);
ai=ab[ab.length-1];break;case 5:ai=[new G()];break;case 6:ai=ab[ab.length-1];break;
case 7:ab[ab.length-2].push.apply(ab[ab.length-2],ab[ab.length-1]);ai=ab[ab.length-2];
break;case 8:ab[ab.length-1].unshift(ab[ab.length-2]);ai=ab[ab.length-1];break;case 9:ai=ab[ab.length-1];
break;case 10:ai=ab[ab.length-2].setv("commands",ab[ab.length-1]);break;case 11:ai=ab[ab.length-2].setv("comments",ab[ab.length-1]);
break;case 12:ai=new q(ab[ab.length-1],false);break;case 13:ai=new q(ab[ab.length-1],true);
break;case 14:ai=[ab[ab.length-1]];break;case 15:ab[ab.length-2].push(ab[ab.length-1]);
ai=ab[ab.length-2];break;case 16:ai=new j("Move",[ab[ab.length-3],ab[ab.length-1]]);
break;case 17:ai=new j("Exchange",[ab[ab.length-4],ab[ab.length-1]]);break;case 18:ai=new j("Remove",[ab[ab.length-1]]);
break;case 19:ai=new j("Add",[ab[ab.length-2],ab[ab.length-1]]);break;case 20:ai=new j("Rotate",[ab[ab.length-1]]);
break;case 21:ai=new j("Mirror",[ab[ab.length-3],ab[ab.length-1]]);break;case 22:ai=new j("Shift",[ab[ab.length-3],ab[ab.length-1]]);
break;case 23:ai=new j("PolishType",[]);break;case 24:ai=new j("Imitator",ab[ab.length-1]);
break;case 25:ai=new j("Add",[ab[ab.length-2],ab[ab.length-1]]);break;case 26:ai=ab[ab.length-1];
break;case 27:ab[ab.length-2].push.apply(ab[ab.length-2],ab[ab.length-1]);ai=ab[ab.length-2];
break;case 28:ai=[ab[ab.length-2].setv("depth",ab[ab.length-3]),ab[ab.length-1].setv("depth",ab[ab.length-3]+1)];
break;case 29:ai=[ab[ab.length-1].setv("depth",ab[ab.length-3]+1)];break;case 30:ai=[new d(ab[ab.length-3],false)];
break;case 31:ai=[ab[ab.length-2].setv("depth",ab[ab.length-3]).setv("childIsThreat",true)];
break;case 32:ai=[ab[ab.length-1].setv("depth",ab[ab.length-3]+1)];break;case 33:ai=[ab[ab.length-2].setv("depth",ab[ab.length-3])];
break;case 34:ai=[ab[ab.length-1].setv("depth",ab[ab.length-2])];break;case 35:ai=ab[ab.length-1];
break;case 36:ab[ab.length-3].recolorings[ab[ab.length-1]].push(ab[ab.length-3].arrival);
ai=ab[ab.length-3];break;case 37:ai=ab[ab.length-3].setv("promotion",ab[ab.length-1]);
break;case 38:ai=ab[ab.length-3].setv("promotion",ab[ab.length-1]);break;case 39:ab[ab.length-8].rebirths.push({unit:ab[ab.length-5],at:ab[ab.length-4],prom:ab[ab.length-2]});
ai=ab[ab.length-8];break;case 40:ab[ab.length-6].rebirths.push({unit:ab[ab.length-3],at:ab[ab.length-2],prom:null});
ai=ab[ab.length-6];break;case 41:ab[ab.length-9].antirebirths.push({unit:ab[ab.length-7],from:ab[ab.length-6],to:ab[ab.length-4],prom:ab[ab.length-2]});
ai=ab[ab.length-9];break;case 42:ab[ab.length-7].antirebirths.push({unit:ab[ab.length-5],from:ab[ab.length-4],to:ab[ab.length-2],prom:null});
ai=ab[ab.length-7];break;case 43:ab[ab.length-6].promotions.push({unit:ab[ab.length-2],at:ab[ab.length-4]});
ai=ab[ab.length-6];break;case 44:ab[ab.length-6].recolorings[ab[ab.length-2]].push(ab[ab.length-4]);
ai=ab[ab.length-6];break;case 45:ab[ab.length-5].removals.push(ab[ab.length-2]);ai=ab[ab.length-5];
break;case 46:ab[ab.length-4].imitators=ab[ab.length-2];ai=ab[ab.length-4];break;
case 47:ai=ab[ab.length-2].setv("checksign","=");break;case 48:ai=ab[ab.length-2].setv("checksign",ab[ab.length-1]);
break;case 49:ai=ab[ab.length-1];break;case 50:ai=ab[ab.length-2].setv("annotation",ab[ab.length-1]);
break;case 51:ai=ab[ab.length-2].setv("comments",ab[ab.length-1]);break;case 52:ai=ab[ab.length-1].setv("promotion",ab[ab.length-2]).setv("departant",ab[ab.length-2]);
break;case 53:ai=ab[ab.length-1];break;case 54:ai=ab[ab.length-1];break;case 55:ai=ab[ab.length-2].setEnPassant();
break;case 56:ai=new r(ab[ab.length-1],ab[ab.length-2],"");break;case 57:ai=new r(ab[ab.length-1],ab[ab.length-3],ab[ab.length-2]);
break;case 58:ai=ab[ab.length-1];break;case 59:ai=ab[ab.length-1];break;case 60:ai=ab[ab.length-1];
break;case 61:ai=new r(ab[ab.length-1],"u","");break;case 62:ai=new r(ab[ab.length-1],ab[ab.length-2],"");
break;case 63:ai=new r(ab[ab.length-1],ab[ab.length-3],ab[ab.length-2]);break;case 64:ai=new r(ab[ab.length-1],"u",ab[ab.length-2]);
break;case 65:ai=ab[ab.length-1].setv("promotion",new r("P","u","")).setv("departant",new r("P","u",""));
break;case 66:ai=new v(ab[ab.length-3],ab[ab.length-1],-1);break;case 67:ai=new v(ab[ab.length-3],ab[ab.length-1],ab[ab.length-1]);
break;case 68:ai=new v(ab[ab.length-5],ab[ab.length-1],ab[ab.length-3]);break;case 69:ai=[ab[ab.length-1]];
break;case 70:ab[ab.length-3].push(ab[ab.length-1]);ai=ab[ab.length-3];break;case 71:ab[ab.length-2].push(ab[ab.length-1]);
ai=ab[ab.length-2];break;case 72:ai=new n(true);break;case 73:ai=new n(false);break;
case 74:ai=ab[ab.length-1];break;case 75:ai=ab[ab.length-1];break;case 76:ai=[ab[ab.length-1]];
break;case 77:ab[ab.length-2].push(ab[ab.length-1]);ai=ab[ab.length-2];break}if(l){O=new Array()
}if(A){D("\tPopping "+aa[ae][1]+" off the stack...")}for(var Z=0;Z<aa[ae][1];Z++){if(l){O.push(P.pop())
}N.pop();ab.pop()}V=-1;for(var Z=0;Z<Y[N[N.length-1]].length;Z+=2){if(Y[N[N.length-1]][Z]==aa[ae][0]){V=Y[N[N.length-1]][Z+1];
break}}if(l){var S=new M();S.sym=ad[aa[ae][0]];S.att=new String();S.child=O.reverse();
P.push(T.length);T.push(S)}if(ae==0){break}if(A){D("\tPushing non-terminal "+ad[aa[ae][0]])
}N.push(V);ab.push(ai)}}if(A){D("\nParse complete.")}if(l){if(U==0){D("\n\n--- Parse tree ---");
a(0,T,P)}else{D("\n\nParse tree cannot be viewed. There where parse errors.")}}return U
}function a(M,N,L){var Q=new String();for(var P=0;P<L.length;P++){Q="";for(var O=M;
O>0;O--){Q+="\t"}Q+=N[L[P]].sym;if(N[L[P]].att!=""){Q+=" >"+N[L[P]].att+"<"}D(Q);
if(N[L[P]].child.length>0){a(M+1,N,N[L[P]].child)}}}if(!Array.prototype.map){Array.prototype.map=function(M){var L=this.length;
if(typeof M!="function"){throw new TypeError()}var P=new Array(L);var O=arguments[1];
for(var N=0;N<L;N++){if(N in this){P[N]=M.call(O,this[N],N,this)}}return P}}function H(L){return{x:L%8,y:L>>3}
}function K(L,M){return M*8+L}function E(L){return 2*parseInt(L.substr(0,L.length-1))
}function I(L){return L.charCodeAt(0)-"a".charCodeAt(0)+8*(7-L.charCodeAt(1)+"1".charCodeAt(0))
}function w(L){return"abcdefgh".charAt(L%8)+"87654321".charAt(L>>3)}function e(M,L){this[M]=L;
return this}function r(N,M,L){this.name=N;this.color=M;this.specs=L;this.setv=e;this.xfen=function(){var O=this.name.toLowerCase() in c.override?c.override[this.name.toLowerCase()]:c.glyphs[this.name.toLowerCase()];
if(this.color=="w"){O=O.toUpperCase()}else{O=O.toLowerCase()}if(this.color=="n"){O="!"+O
}if(this.specs!=""){O="b"+O}if(O.length>1){O="("+O+")"}return O};this.inverseColor=function(){if(this.color=="w"){this.color="b"
}else{if(this.color=="b"){this.color="w"}}};this.asText=function(){var O=this.name;
if(c.notation[O]){O=c.notation[O]}return(this.color=="n"?"n":"")+this.specs+O}}function B(L){var M="b";
if(L.charAt(0)=="!"){M="n";L=L.substring(1)}else{if(L.toUpperCase()==L){M="w"}}return new r(L.toUpperCase(),M,[])
}function z(){this.override={};this.notation={};this.glyphs={"15":"s3","16":"s3","24":"s3","25":"s3","35":"s3","36":"s3","37":"s3",al:"b3",am:"a",an:"s1",ao:"s1",ar:"b2",b:"b",b1:"o",b2:"o",b3:"o",be:"o",bh:"b2",bi:"o",bk:"s1",bl:"b3",bm:"o",bn:"s2",bo:"o",bp:"p2",br:"o",bs:"p2",bt:"o",bu:"s1",bw:"o",c:"b1",ca:"s3",cg:"q1",ch:"s3",cp:"p3",cr:"s3",ct:"o",cy:"o",da:"r1",db:"b1",dg:"q1",dk:"r1","do":"q3",dr:"o",ds:"o",du:"p1",ea:"q3",eh:"q1",ek:"o",em:"r2",eq:"e",et:"o",f:"o",fe:"b3",fr:"o",g:"q2",g2:"q1",g3:"q3",ge:"o",gf:"o",gh:"s1",gi:"s1",gl:"o",gn:"s1",gr:"o",gt:"o",ha:"q3",k:"k",ka:"q3",kl:"q3",kh:"k2",kl:"q1",ko:"o",kp:"s2",l:"q1",lb:"b1",le:"q3",lh:"o",li:"q3",ln:"s1",lr:"r1",ls:"f",m:"o",ma:"s1",mg:"o",mh:"o",ml:"o",mm:"o",mo:"s3",mp:"p3",ms:"s3",n:"s2",na:"s3",nd:"b3",ne:"e",nh:"s3",nl:"s3",o:"o",oa:"s1",ok:"o",or:"e1",p:"p",pa:"r3",po:"k3",pp:"p2",pr:"b2",q:"q",qe:"e",qf:"e",qn:"o",qq:"o",r:"r",ra:"o",rb:"b3",re:"r1",rf:"o",rh:"r2",rk:"o",rl:"r3",rm:"r1",rn:"f",rp:"f",ro:"f",rr:"o",rt:"q1",rw:"o",s:"s",s1:"s2",s2:"s2",s3:"s2",s4:"s2",sh:"o",si:"q3",sk:"a",so:"o",sp:"p1",sq:"o",ss:"o",sw:"o",th:"o",tr:"r3",uu:"o",va:"b3",wa:"o",we:"r2",wr:"o",z:"s3",zh:"o",zr:"s1",ze:"o",ms:"s3",fa:"r1",se:"q1",sa:"s1",lo:"b1"};
this.captureGlyph="x";this.pprops=["chameleon","jigger","kamikaze","paralysing","royal","volage","functionary","halfneutral","hurdlecolourchanging","protean","magic","uncapturable"]
}function G(){this.depth=0;this.childIsThreat=false;this.setv=e;this.comments=[];
this.prefix="";this.unflatten=function(L,M){this.children=[];while(M<L.length){if(this.depth+1==L[M].depth){this.children.push(L[M]);
M=L[M].unflatten(L,M+1)}else{if(this.depth+1<L[M].depth){var N=new d(this.depth+1,this.childIsThreat);
this.children.push(N);M=N.unflatten(L,M)}else{return M}}}};this.linkContinuedTwins=function(){for(var L=1;
L<this.children.length;L++){if(this.children[L].isContinued){this.children[L].anticipator=this.children[L-1]
}}};this.print=function(L,N,O){this.make(N);L.add(this.asOverriddenText(),N,true,this.getCommentsAsText());
for(var M=0;M<this.children.length;M++){fp=this.children[M].fullPrefix();L.add(fp.indent,N,false,"");
this.children[M].prefix=fp.prefix;this.children[M].print(L,N)}this.unmake(N)};this.getCommentsAsText=function(){var L="";
for(var M=0;M<this.comments.length;M++){if(!this.isCommentCommand(this.comments[M])){L+=this.comments[M]
}}return L};this.printChildren=function(L,N){for(var M=0;M<this.children.length;M++){fp=this.children[M].fullPrefix();
if(this.children.length>1){if(!this.children[M].noNewLine()&&!(this.isNull()&&this.isHalfPlySetPlay()&&this.children[M].isNull())){L.add("\n",N,false,"");
L.add(M>0?" ":"  ",N,M>0,"")}L.add(fp.indent,N,false,"")}else{if(this.depth==1){L.add("\n",N,false,"");
fp.prefix=""}if(this.isSetPlay()&&(this.depth==2)){L.add(fp.indent,N,false,"")}else{fp.prefix=this.children[M].shortPrefix()
}}this.children[M].prefix=fp.prefix;this.children[M].print(L,N)}};this.noNewLine=function(){return false
};this.isSetPlay=function(){return false};this.isNull=function(){return false};this.fullPrefix=function(){var L={indent:"",prefix:""};
if(this.depth<3&&!this.noNewLine()){L.indent+="\n"}else{for(var M=0;M<this.depth-2;
M++){L.indent+=" "}}L.prefix+=this.depth>>1;L.prefix+=(this.depth%2!=0)?"...":".";
return L};this.shortPrefix=function(){return(this.depth%2!=0)?"":(this.depth>>1)+"."
};this.make=this.unmake=function(L){};this.asText=function(){return"***"};this.asOverriddenText=function(){const M="display:";
for(let i=0;i<this.comments.length;i++){if(this.comments[i].startsWith(M)){const L=this.comments[i].substring(M.length);
return this.prefix+L}}return this.asText()};this.isCommentCommand=function(L){return L.startsWith("display:")||["display-departure-square","display-departure-file","display-departure-rank"].indexOf(L)!=-1
}}__node=new G();function u(){this.html="";this.add=function(N,M,L,O){if(N==""){return
}this.html+=L?this.anchor(M.toFen(),N):N;if(O!=""){this.html+='<span class="comment">'+O+"</span> "
}};this.anchor=function(L,M){return'<a href="#" fen="'+L+'">'+M+"</a> "};this.build=function(M,L){M.print(this,L);
return this.html}}function d(M,L){this.depth=M;this.is_threat=L;this.isHalfPlySetPlay=function(){var O=false;
for(var N=0;N<this.children.length;N++){if(this.children[N].isNull()){return this.depth==2
}}return false};this.asText=function(){if(this.isHalfPlySetPlay()){return"\n1... ... "
}return this.is_threat?"~ ":""};this.print=function(N,O){this.make(O);N.add(this.asOverriddenText(),O,false,this.getCommentsAsText());
this.printChildren(N,O);this.unmake(O)};this.fullPrefix=function(){return{indent:"",prefix:""}
};this.shortPrefix=function(){return""};this.noNewLine=function(){return this.is_threat
};this.isSetPlay=function(){return !this.is_threat};this.isNull=function(){return true
};this.make=this.unmake=function(N){N.flip()}}d.prototype=__node;function q(M,L){this.depth=1;
this.id=M;this.isContinued=L;this.anticipator=null;this.commands=[];this.asText=function(){return this.id+")"
};this.fullPrefix=function(){return{indent:"\n\n",prefix:""}};this.make=function(N){this.oldboard=N.serialize();
if(this.anticipator!=null){this.anticipator.make(N)}for(var O=0;O<this.commands.length;
O++){this.commands[O].exec(N)}};this.unmake=function(N){N.unserialize(this.oldboard)
}}q.prototype=__node;__twinNode=new q();function g(){this.fullPrefix=function(){return{indent:"",prefix:""}
};this.shortPrefix=function(){return""};this.print=function(L,M){this.make(M);this.printChildren(L,M);
this.unmake(M)}}g.prototype=__twinNode;function j(M,L){this.name=M;this.args=L;this.exec=function(N){switch(this.name){case"Move":N.add(N.board[this.args[0]],this.args[1]);
N.drop(this.args[0]);break;case"Exchange":var O=N.board[this.args[0]];N.board[this.args[0]]=N.board[this.args[1]];
N.board[this.args[1]]=O;break;case"Remove":N.drop(this.args[0]);break;case"Add":N.add(this.args[0],this.args[1]);
break;case"Rotate":N.rotate(this.args[0]);break;case"Mirror":N.mirror(this.args[0],this.args[1]);
break;case"Shift":N.shift(this.args[0],this.args[1]);break;case"PolishType":N.polishTwin();
break;case"Imitator":N.imitators=L;break}}}function v(N,L,M){this.departure=N;this.arrival=L;
this.departant=null;this.promotion=null;this.capture=M;this.recolorings={w:[],b:[],n:[]};
this.rebirths=[];this.antirebirths=[];this.promotions=[];this.imitators=[];this.removals=[];
this.annotation="";this.checksign="";this.enPassant=false;this.setEnPassant=function(){var P=H(this.departure);
var O=H(this.arrival);this.capture=K(O.x,P.y);this.enPassant=true;return this};this.makeBasicMovement=function(O){if(this.promotion==null){this.promotion=O.board[this.departure]
}if(this.promotion.color=="u"){if(O.board[this.departure].color!="u"){this.promotion.color=O.board[this.departure].color
}else{this.promotion.color=O.getStm()}}if(this.capture!=-1){O.drop(this.capture)}O.drop(this.departure);
O.add(this.promotion,this.arrival)};this.make=function(O){this.assertSemantics(O);
this.oldboard=O.serialize();this.makeBasicMovement(O);O.flip();for(var P in this.recolorings){for(var Q=0;
Q<this.recolorings[P].length;Q++){if(O.board[this.recolorings[P][Q]]!=null){O.board[this.recolorings[P][Q]].color=P
}}}for(var Q=0;Q<this.antirebirths.length;Q++){O.move(this.antirebirths[Q].from,this.antirebirths[Q].to);
if(this.antirebirths[Q].prom!=null){O.board[this.antirebirths[Q].to].name=this.antirebirths[Q].prom.name;
O.board[this.antirebirths[Q].to].specs=this.antirebirths[Q].prom.specs}}for(var Q=0;
Q<this.rebirths.length;Q++){O.add(this.rebirths[Q].prom==null?this.rebirths[Q].unit:this.rebirths[Q].prom,this.rebirths[Q].at)
}for(var Q=0;Q<this.promotions.length;Q++){O.board[this.promotions[Q].at].name=this.promotions[Q].unit.name;
if(this.promotions[Q].unit.specs!=""){O.board[this.promotions[Q].at].specs=this.promotions[Q].unit.specs
}}O.imitators=this.imitators;for(var Q=0;Q<this.removals.length;Q++){O.drop(this.removals[Q])
}};this.unmake=function(O){O.unserialize(this.oldboard)};this.asText=function(){var R=this.departant.asText();
if(this.departant.name.toUpperCase()=="P"){R=(this.capture!=-1)?w(this.departure).charAt(0):""
}var Q="";if(this.comments.indexOf("display-departure-square")!=-1){Q+=w(this.departure);
if(this.capture==-1){Q+="-"}}else{if(this.comments.indexOf("display-departure-file")!=-1){Q+=w(this.departure)[0]
}else{if(this.comments.indexOf("display-departure-rank")!=-1){Q+=w(this.departure)[1]
}}}var P=w(this.arrival);if(this.capture!=-1){if(this.capture==this.arrival){P=c.captureGlyph+w(this.arrival)
}else{if(this.enPassant){P=c.captureGlyph+w(this.arrival)+" ep."}else{P=c.captureGlyph+w(this.capture)+"&rarr;"+w(this.arrival)
}}}var O=this.prefix+R+Q+P;if(this.departant.asText()!=this.promotion.asText()){var S=this.promotion.asText();
if((this.departant.color!=this.promotion.color)&&(this.promotion.color!="n")&&(this.departant.color!="u")){S=this.promotion.color+S
}O+="="+S}O+=this.imitatorsAsText()+this.recoloringsAsText()+this.antirebirthsAsText()+this.rebirthsAsText()+this.promotionsAsText()+this.removalsAsText();
if(this.checksign!=""){O+=this.checksign}if(this.annotation!=""){O+=this.annotation
}return O};this.removalsAsText=function(){acc=[];for(var O in this.removals){acc.push("[-"+w(this.removals[O])+"]")
}if(acc.length>0){return" "+acc.join("")}return""};this.imitatorsAsText=function(){return this.imitators.length==0?"":" (I"+this.imitators.map(w).join(",")+")"
};this.recoloringsAsText=function(){acc1=[];for(var O in this.recolorings){if(this.recolorings[O].length>0){acc2=[];
for(var P=0;P<this.recolorings[O].length;P++){acc2.push(w(this.recolorings[O][P]))
}acc1.push("["+acc2.join(",")+"="+O+"]")}}if(acc1.length>0){return" "+acc1.join("")
}return""};this.antirebirthsAsText=function(){acc=[];for(var P=0;P<this.antirebirths.length;
P++){var O=(this.antirebirths[P].prom==null)?"":"="+this.antirebirths[P].prom.asText();
acc.push("("+this.antirebirths[P].unit.asText()+w(this.antirebirths[P].from)+"&rarr;"+w(this.antirebirths[P].to)+O+")")
}if(acc.length>0){return" "+acc.join(" ")}return""};this.rebirthsAsText=function(){acc=[];
for(var P=0;P<this.rebirths.length;P++){var O=(this.rebirths[P].prom==null)?"":"="+this.rebirths[P].prom.asText();
acc.push("(+"+this.rebirths[P].unit.asText()+w(this.rebirths[P].at)+O+")")}if(acc.length>0){return" "+acc.join(" ")
}return""};this.promotionsAsText=function(){acc=[];for(var O=0;O<this.promotions.length;
O++){acc.push("("+w(this.promotions[O].at)+"="+this.promotions[O].unit.asText()+")")
}if(acc.length>0){return" "+acc.join(" ")}return""};this.print=function(O,P){this.make(P);
var Q=this.asOverriddenText();O.add(Q,P,true,this.getCommentsAsText());this.printChildren(O,P);
this.unmake(P)};this.assertSemantics=function(O){var P=null;if(O.board[this.departure]==null){P="Departure from empty square "+w(this.departure)
}else{if((O.board[this.arrival]!=null)&&(this.capture==-1)&&(this.arrival!=this.departure)){P="Arrival square "+w(this.arrival)+" is occupied but no capture is specified"
}else{if((O.board[this.arrival]!=null)&&(this.capture!=this.arrival)&&(this.arrival!=this.departure)){P="Arrival square "+w(this.arrival)+" is occupied but capture is specified at "+w(this.capture)
}else{if((this.capture!=-1)&&(O.board[this.capture]==null)){P="Capture at empty square "+w(this.capture)
}}}}if(P){throw"Semantic error at depth "+this.depth+": "+P}}}v.prototype=__node;
__moveNode=new v(-1,-1,-1);function n(L){this.isKingSide=L;this.departure=null;this.arrival=null;
this.departant=null;this.promotion=null;this.capture=null;this.recolorings={w:[],b:[],n:[]};
this.rebirths=[];this.antirebirths=[];this.promotions=[];this.imitators=[];this.removals=[];
this.annotation="";this.checksign="";this.makeBasicMovement=function(M){var N=M.btm?0:56;
if(this.isKingSide){M.move(I("e8")+N,I("g8")+N);M.move(I("h8")+N,I("f8")+N)}else{M.move(I("e8")+N,I("c8")+N);
M.move(I("a8")+N,I("d8")+N)}};this.assertSemantics=function(){};this.asText=function(){var M=this.isKingSide?"0-0":"0-0-0";
M+=this.imitatorsAsText()+this.recoloringsAsText()+this.antirebirthsAsText()+this.rebirthsAsText()+this.promotionsAsText()+this.removalsAsText();
if(this.checksign!=""){M+=this.checksign}if(this.annotation!=""){M+=this.annotation
}return this.prefix+M}}n.prototype=__moveNode;function y(){this.add=function(M,L){if((L>63)||(L<0)){return
}this.board[L]=M};this.drop=function(L){this.add(null,L)};this.clear=function(){this.board=new Array(64);
this.imitators=[];for(i=0;i<64;i++){this.drop(i)}};this.move=function(M,L){this.add(this.board[M],L);
this.drop(M)};this.transform=function(N){var M=new y();for(var L=0;L<64;L++){if(this.board[L]!=null){p=H(L);
M.add(this.board[L],N(p.x,p.y))}}this.board=M.board};this.rotate=function(L){switch(L){case 270:this.rotate(90);
case 180:this.rotate(90);case 90:this.transform(function(M,N){return K(N,7-M)})}};
this.shift=function(M,L){pa=H(M);pb=H(L);this.transform(function(N,O){return K(N+pb.x-pa.x,O+pb.y-pa.y)
})};this.mirror=function(M,L){if(M==56){if(L==63){this.transform(function(N,O){return K(7-N,O)
})}else{if(L==7){this.transform(function(N,O){return K(O,N)})}else{if(L==0){this.transform(function(N,O){return K(N,7-O)
})}}}}else{if((M==0)&&(L==63)){this.transform(function(N,O){return K(7-O,7-N)})}}};
this.polishTwin=function(M){for(var L=0;L<64;L++){if(this.board[L]!=null){this.board[L].inverseColor()
}}};this.toFen=function(){var L="";var O=0;for(var M=0;M<64;M++){if((M>0)&&(M%8==0)){if(O>0){L+=O
}L+="/";O=0}var N="";if(this.board[M]!=null){N=this.board[M].xfen()}if(this.imitators.indexOf(M)!=-1){N="(!o)"
}if(N!=""){if(O>0){L+=O}L+=N;O=0}else{O++}}if(O>0){L+=O}return L};this.fromFen=function(L){this.clear();
var N=0;var M=0;while((M<64)&&(N<L.length)){if("12345678".indexOf(L.charAt(N))!=-1){M=M+parseInt(L.charAt(N));
N=N+1}else{if("("==L.charAt(N)){idx=L.indexOf(")",N);if(idx!=-1){this.add(B(L.substring(N+1,idx)),M);
M=M+1;N=idx+1}else{N=N+1}}else{if("/"==L.charAt(N)){N=N+1}else{this.add(B(L.charAt(N)),M);
M=M+1;N=N+1}}}}};this.toAlgebraic=function(){var L={white:[],black:[],neutral:[]};
var N={w:"white",b:"black",n:"neutral"};for(var M=0;M<64;M++){if(this.board[M]!=null){L[N[this.board[M].color]].push(this.board[M].name+w(M))
}}return L};this.fromPiecesClause=function(L){this.clear();var U=L.trim().toLowerCase().split("\n");
for(var Q=0;Q<U.length;Q++){var S=U[Q].trim().split(/\s+/);if(["white","black","neutral"].indexOf(S[0])==-1){continue
}var O=S[0][0];var M="";var P=1;while((P<S.length)&&(c.pprops.indexOf(S[P])!=-1)){M+=S[P][0];
P=P+1}var R;while((P<S.length)&&(R=S[P].match(/([0-9a-z][0-9a-z]?)([a-h][1-8])+/))){name=R[1].toUpperCase();
for(var N=0;N<(S[P].length-name.length)/2;N++){var T=I(S[P].substr(name.length+N*2,2));
if("i"==name.toLowerCase()){this.imitators.push(T)}else{this.add(new r(name,O,M),T)
}}P=P+1}}};this.fromAlgebraic=function(P){for(color in P){if(["white","black","neutral"].indexOf(color)==-1){continue
}for(var N=0;N<P[color].length;N++){var Q=P[color][N].split(/\s+/);var R="";for(var M=0;
M<Q.length-2;M++){if(c.pprops.indexOf(Q[M])!=-1){R+=Q[M][0]}}if(matches=Q[Q.length-1].toLowerCase().match(/([a-z][0-9a-z]?)([a-h][1-8])+/)){var L=matches[1].toUpperCase();
var O=I(matches[2]);this.add(new r(L,color[0],R),O)}}}};this.toPiecesClause=function(N){var L="";
for(color in N){for(var M=0;M<N[color].length;M++){L+=color+" "+N[color][M]+"\n"}}return L
};this.xfen2Html=function(N){var L=new Array(64);for(var P=0;P<64;P++){L[P]=""}var P=0;
var O=0;while((O<64)&&(P<N.length)){if("12345678".indexOf(N.charAt(P))!=-1){O=O+parseInt(N.charAt(P));
P=P+1}else{if("("==N.charAt(P)){idx=N.indexOf(")",P);if(idx!=-1){L[O]=N.substring(P+1,idx);
O=O+1;P=idx+1}else{P=P+1}}else{if("/"==N.charAt(P)){P=P+1}else{L[O]=N.charAt(P);O=O+1;
P=P+1}}}}var M="";for(var P=0;P<8;P++){for(var O=0;O<8;O++){M+='<a class="cp'+t(L[P*8+O],(P+O)%2)+'"></a>'
}}return M};this.toHtml=function(){var L="";for(var N=0;N<8;N++){for(var M=0;M<8;
M++){var O=this.board[N*8+M]==null?"":this.board[N*8+M].xfen();L+='<a class="cp'+t(O,(N+M)%2)+'"></a>'
}}return L};this.btm=true;this.flip=function(){this.btm=!this.btm};this.getStm=function(){return this.btm?"b":"w"
};this.setStm=function(L){this.btm=(L=="b")};this.serialize=function(){return JSON.stringify(this)
};this.unserialize=function(M){o=JSON.parse(M);for(var L=0;L<64;L++){if(o.board[L]!=null){this.board[L]=new r(o.board[L].name,o.board[L].color,o.board[L].specs)
}else{this.board[L]=null}}this.btm=o.btm;this.imitators=o.imitators};this.piecesCount=function(){var M={w:0,b:0,n:0};
for(var L=0;L<64;L++){if(this.board[L]!=null){M[this.board[L].color]++}}var N=M.w+"+"+M.b;
if(M.n>0){N=N+"+"+M.n}return N};this.clear()}function t(M,L){if(""==M){return["EQ","FQ"][L]
}sprite={};matches=M.match(/^\(?(B?)(!?)([kqrbsnpeaofwdx])([1-7])?\)?$/i);if(matches){sprite={glyph:matches[3].toLowerCase(),rot:matches[4],border:(matches[1]!="")};
if(matches[2]!=""){sprite.color="neutral"}else{if(sprite.glyph==matches[3]){sprite.color="black"
}else{sprite.color="white"}}if(!sprite.rot){sprite.rot=0}}else{sprite={glyph:"x",rot:0,color:"white",border:false}
}if(sprite.glyph=="x"){sprite.color="white"}rot4="kqrbsnp";rot2="e";rot1="aofwd";
baseGlyphs={k:[[0,0],[0,17]],q:[[0,2],[0,18]],r:[[0,4],[0,19]],b:[[0,6],[0,20]],s:[[0,8],[0,21]],n:[[0,8],[0,21]],p:[[0,10],[0,22]],e:[[0,14],[0,16]],a:[[4,15],[4,15]],o:[[0,15],[6,13]],f:[[0,12],[0,12]],w:[[4,12],[4,12]],d:[[0,13],[0,13]],x:[[4,13],[4,13]]};
s=0;if(sprite.color=="neutral"){s=baseGlyphs[sprite.glyph][1][0]+8*baseGlyphs[sprite.glyph][1][1]
}else{if((sprite.color=="white")){s=baseGlyphs[sprite.glyph][0][0]+8*baseGlyphs[sprite.glyph][0][1]
}else{s=baseGlyphs[sprite.glyph][0][0]+8*baseGlyphs[sprite.glyph][0][1]+2}}if(sprite.rot>3){sprite.rot=sprite.rot%4;
if(0==sprite.rot){sprite.rot=1}}if(-1!=rot4.indexOf(sprite.glyph)){if(sprite.color=="neutral"){s+=2*sprite.rot
}else{s+=4*sprite.rot}}else{if(-1!=rot2.indexOf(sprite.glyph)){if(sprite.color=="neutral"){s+=2*(sprite.rot%2)
}else{s+=4*(sprite.rot%2)}}}s+=L;ABC="ABCDEFGHIJKLMNOPQRSTUVW";classList=ABC.charAt(s%8)+ABC.charAt(s/8);
if(sprite.border){classList+=" boxed"}return classList}var F=null;var c=new z();var k=new y();
function C(N){var L=N.attr("fen");if(!L){return}var M=h("#"+N.parent().attr("target"));
M.html('<div class="p2w-nav-fwd"></div><div class="p2w-nav-bwd"></div>'+k.xfen2Html(L));
N.siblings().removeClass("active");N.addClass("active");h(".p2w-nav-fwd").bind("click",Py2Web.navigateForward);
h(".p2w-nav-bwd").bind("click",Py2Web.navigateBackward)}function f(L){L=L.replace(/&lt;--&gt;/g,"<-->");
L=L.replace(/--&gt;/g,"-->");L=L.replace(/==&gt;/g,"==>");L=L.replace(/-&gt;/g,"->");
return L}return{navigateForward:function(L){L.preventDefault();C(h('.p2w-solution[target="'+h(this).parent().attr("id")+'"]').children(".active").nextAll("a").first())
},navigateBackward:function(L){L.preventDefault();C(h('.p2w-solution[target="'+h(this).parent().attr("id")+'"]').children(".active").prevAll("a").first())
},init:function(M,L,N){if(typeof(L)==="undefined"){L=false}if(typeof(N)==="undefined"){N=false
}var O=0;h(M+" .p2w-solution").each(function(){var Y=new y();var P=h("#"+h(this).attr("target")).text();
var ab=h("#"+h(this).attr("target")).attr("glyphs");c.override=ab?JSON.parse(ab):{};
var X=h(this).attr("notation");c.notation=X?JSON.parse(X):{};var Z=h(this).attr("capture-glyph");
if(Z){c.captureGlyph=Z}var R=h("#"+h(this).attr("target")).attr("fen");if(R){Y.fromFen(R.replace(/n/g,"s").replace(/N/g,"S"))
}else{Y.fromPiecesClause(P)}Y.setStm(h(this).attr("full-move")=="wb"?"w":"b");h("#"+h(this).attr("target")).html(Y.toHtml());
var aa=new Array();var Q=new Array();var S=0;var V=h("<textarea />").html(h(this).html()).text();
if(L){V=f(h(this).html())}if((S=x(V,aa,Q))>0){for(i=0;i<S;i++){if(!N){console.log('Parse error near "'+V.substr(aa[i])+'", expecting "'+Q[i].join()+'"')
}}return}try{var W=new u();var T=W.build(F,Y);h(this).html(T)}catch(U){if(!N){console.log(U)
}return}O++;C(h(this).attr("start-node")=="last"?h(this).children("a").last():h(this).children("a").first());
h(this).children("a").click(function(ac){ac.preventDefault();C(h(this))})});return O
},Board:y}}(jQuery);jQuery(document).ready(function(){Py2Web.init("body")});