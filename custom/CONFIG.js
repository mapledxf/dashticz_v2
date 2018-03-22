
var config = {}
config['language'] = 'zh_CN';
config['domoticz_ip'] = 'http://192.168.2.2:8080';
config['app_title'] = 'My Home';
config['domoticz_refresh'] = '5';
config['dashticz_refresh'] = '60';
config['last_update'] = 0;
config['use_favorites'] = 0;
config['standby_after'] = 0;
config['hide_topbar'] = 1;
config['translate_windspeed'] = 1;

var blocks = {}
/*室外环境 (彩云天气插件）*/

//pm2.5
blocks[1] = {}
blocks[1]['width'] = 2;
blocks[1]['title'] = 'PM2.5';
blocks[1]['switch'] = true;

//风速
blocks[3] = {}
blocks[3]['width'] = 3;
blocks[3]['title'] = '';
blocks[3]['hide_data'] = true;
blocks[3]['icon'] = 'fa-arrow-down';
//温度
blocks[4] = {}
blocks[4]['width'] = 2;
blocks[4]['title'] = '温度';
blocks[4]['switch'] = true;

//湿度
blocks[5] = {}
blocks[5]['width'] = 2;
blocks[5]['title'] = '湿度';
blocks[5]['icon'] = 'fa-arrow-down';

/*Dummy Device*/
blocks[8] = {}
blocks[8]['width'] = 2;
blocks[8]['switch'] = true;

/*小米净化器插件*/
//pm2.5
blocks[9] = {}
blocks[9]['width'] = 2;
blocks[9]['title'] = 'PM2.5';
blocks[9]['switch'] = true;

//净化器开关
blocks[10] = {}
blocks[10]['width'] = 2;
blocks[10]['title'] = '空气净化器';
blocks[10]['switch'] = true;
blocks[10]['icon'] = 'fa-soundcloud';

//湿度
blocks[11] = {}
blocks[11]['width'] = 2;
blocks[11]['switch'] = true;


//火焰报警
blocks[17] = {}
blocks[17]['width'] = 2;
blocks[17]['icon'] = 'fa-fire'
blocks[17]['hide_data'] = true;

blocks[14] = {}
blocks[14]['width'] = 2;

blocks[15] = {}
blocks[15]['width'] = 2;

//煤气报警
blocks[16] = {}
blocks[16]['width'] = 2;
blocks[16]['hide_data'] = true;

blocks['blocktitle_1'] = {}
blocks['blocktitle_1']['key'] = 'blocktitle_1';
blocks['blocktitle_1']['type'] = 'blocktitle';
blocks['blocktitle_1']['title'] = '室外环境';

blocks['blocktitle_2'] = {}
blocks['blocktitle_2']['key'] = 'blocktitle_1';
blocks['blocktitle_2']['type'] = 'blocktitle';
blocks['blocktitle_2']['title'] = '室内环境';

var columns = {}
columns['bar'] = {}
columns['bar']['blocks'] = ['logo','miniclock','settings']

columns[1] = {}
//columns[1]['blocks'] = ['currentweather_big','weather',1]
columns[1]['blocks'] = ['blocktitle_1',1,4,3,'5_2','blocktitle_2',9,'11_2',10,8];
columns[1]['width'] = 5;

columns[2] = {}
columns[2]['blocks'] = ['clock']
columns[2]['width'] = 5;

columns[3] = {}
columns[3]['blocks'] = ['sunrise']
columns[3]['width'] = 2;

var columns_standby = {}
columns_standby[1] = {}
columns_standby[1]['blocks'] = ['clock']
columns_standby[1]['width'] = 12;

var screens = {}
screens['default'] = {}
screens['default']['maxwidth'] = 1920;
screens['default']['maxheight'] = 1080;

//screens['default'][1] = {}
//screens['default'][1]['background'] = 'bg8.jpg';
//screens['default'][1]['columns'] = [1,2,3]

columns[101] = {}
columns[101]['blocks'] = ['clock', 1,4,3,'5_2','blocktitle_2',9,'14_1','11_2',10,8,17,'14_2',16];
screens['tablet'] = {}
screens['tablet']['maxwidth'] = 1024;
screens['tablet']['maxheight'] = 768;
screens['tablet'][1] = {}
screens['tablet'][1]['background'] = 'bg8.jpg';
screens['tablet'][1]['columns'] = [101]


screens['default'][1] = {}
screens['default'][1]['background'] = 'bg8.jpg';
screens['default'][1]['columns'] = [101]

/*  REMOVE THIS LINE, INCLUDING THIS TEXT IF YOU WANT TO USE THE CODE BELOW, ALS REMOVE THE LAST LINE OF THIS FILE ( the asterisk * with the slash)

var publictransport = {}
publictransport.ovinfobus = { show_via: false, station: 'son-en-breugel/bushalte-penseelkever', provider: '9292-bus', icon: 'bus', width:5, results: 6 }

var tvguide = {}
tvguide.dutch = { key:'dutch', icon: 'fa-television', width:7, channels: [1,3,4,31,46,92], maxitems: 5 }

var _STREAMPLAYER_TRACKS  	= [
	{"track":1,"name":"Q-music","file":"http://icecast-qmusic.cdp.triple-it.nl/Qmusic_nl_live_96.mp3"},
	{"track":2,"name":"538 Hitzone","file":"http://vip-icecast.538.lw.triple-it.nl/WEB11_MP3"},
	{"track":3,"name":"Slam! NonStop","file":"http://stream.radiocorp.nl/web10_mp3"},
	{"track":4,"name":"100%NL","file":"http://stream.100p.nl/100pctnl.mp3"},
  ]; 


var buttons = {}
buttons.nunl = {key: 'nunl',  width:12, icon: 'fa-newspaper-o', title: 'Nu.nl', newwindow:true, url: 'http://www.nu.nl'}
buttons.nos = {key: 'nos',  width:12, icon: 'fa-newspaper-o', title: 'Nos', url: 'http://www.nos.nl'}


var blocks = {}
blocks['blocktitle_1'] = {}
blocks['blocktitle_1']['key'] = 'blocktitle_1';
blocks['blocktitle_1']['type'] = 'blocktitle';
blocks['blocktitle_1']['title'] = 'Example';


var columns = {}
columns['bar'] = {}
columns['bar']['blocks'] = ['logo','miniclock','settings']
					
columns[1] = {}
columns[1]['blocks'] = ['currentweather_big','weather']
columns[1]['width'] = 5;

columns[2] = {}
columns[2]['blocks'] = ['blocktitle_1',tvguide.dutch,publictransport.ovinfobus]
columns[2]['width'] = 5; 

columns[3] = {}
columns[3]['blocks'] = ['sunrise','streamplayer',buttons.nunl,buttons.nos]
columns[3]['width'] = 2; 

var columns_standby = {}
columns_standby[1] = {}
columns_standby[1]['blocks'] = ['clock','weather']
columns_standby[1]['width'] = 12;

var screens = {}
screens[1] = {}
screens[1]['background'] = 'bg2.jpg';
screens[1]['columns'] = [1,2,3]
*/
