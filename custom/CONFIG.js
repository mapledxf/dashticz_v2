var config = {}
config['language'] = 'zh_CN'; //or: en_US, de_DE, fr_FR, hu_HU, it_IT, pt_PT, sv_SE
config['domoticz_ip'] = 'http://192.168.2.2:8080';
config['app_title'] = 'iHome';
config['domoticz_refresh'] = '5';
config['dashticz_refresh'] = '60';
config['last_update'] = 0;
config['use_favorites'] = 0;
config['standby_after']	= 0;
config['hide_topbar'] = 1;

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

blocks[8] = {}
blocks[8]['width'] = 4;
blocks[8]['title'] = '卧室灯';
blocks[8]['switch'] = true;

blocks[9] = {}
blocks[9]['width'] = 4;
blocks[9]['title'] = 'PM2.5';
blocks[9]['switch'] = true;

blocks[10] = {}
blocks[10]['width'] = 4;
blocks[10]['title'] = '空气净化器';
blocks[10]['switch'] = true;

blocks[11] = {}
blocks[11]['width'] = 4;
blocks[11]['title'] = '湿度';
blocks[11]['switch'] = true;

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

screens['default'][1] = {}
screens['default'][1]['background'] = 'bg8.jpg';
screens['default'][1]['columns'] = [1,2,3]



columns[101] = {}
columns[101]['blocks'] = ['clock', 1,4,3,'5_2'];
screens['tablet'] = {}
screens['tablet']['maxwidth'] = 1024;
screens['tablet']['maxheight'] = 768;
screens['tablet'][1] = {}
screens['tablet'][1]['background'] = 'bg9.jpg';
screens['tablet'][1]['columns'] = [101]

//screens[1] = {}
//screens[1]['background'] = 'bg8.jpg';
//screens[1]['columns'] = [1,2,3]
