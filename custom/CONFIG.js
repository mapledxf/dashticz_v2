var config = {}
config['domoticz_ip'] = 'http://192.168.31.128';
config['app_title'] = 'iHome';
config['domoticz_refresh'] = '5';
config['dashticz_refresh'] = '60';
config['last_update'] = 0;
config['wu_api'] = '55ec73329ac0cc53';
config['wu_city'] = 'Eindhoven';
config['wu_name'] = '';
config['wu_country'] = 'NL';
config['use_favorites'] = 0;

var trashnames = {}
trashnames['Gft'] = 'GFT';
trashnames['Pmd'] = 'Plastic';
trashnames['Rest'] = ''; //LEAVE EMPTY IF YOU WANT TO HIDE IT

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
blocks[1] = {}
blocks[1]['width'] = 4;
blocks[1]['title'] = 'PM2.5';
blocks[1]['switch'] = true;

blocks[4] = {}
blocks[4]['width'] = 4;
blocks[4]['title'] = '温度';
blocks[4]['switch'] = true;

blocks[3] = {}
blocks[3]['width'] = 4;
blocks[3]['title'] = '风速';

blocks[5] = {}
blocks[5]['width'] = 4;
blocks[5]['title'] = '湿度';

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
columns[1]['blocks'] = ['blocktitle_1',1,4,3,'5_2','blocktitle_2'];
columns[1]['width'] = 5;

columns[2] = {}
columns[2]['blocks'] = ['clock',tvguide.dutch,publictransport.ovinfobus]
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
screens[1]['background'] = 'bg8.jpg';
screens[1]['columns'] = [1,2,3]
