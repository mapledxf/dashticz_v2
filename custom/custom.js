 //add custom javascript in here
function getMyIcon(icon, color){
	var random = getRandomInt(1,100000);
	var skycon ='<script>';
	skycon+='var skycons = new Skycons({"color": "'+color+'"});';
  	skycon+='skycons.add("icon'+random+'", Skycons.'+icon+');';
	skycon+='skycons.play();';
	skycon+='</script>';
	skycon+='<canvas class="skycon" data-icon="'+icon+'" id="icon'+random+'"></canvas>';
	return skycon;
}

function enableClick(idx){
	enableClick(idx,idx);
}

function enableClick(displayIdx,popupIdx){
	if($('#opengraph'+displayIdx).length==0){
		var html = '<div class="modal fade opengraph'+displayIdx+'" data-idx="'+popupIdx+'" id="opengraph'+displayIdx+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
		  html+='<div class="modal-dialog">';
			html+='<div class="modal-content">';
			  html+='<div class="modal-header">';
				html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
			  html+='</div>';
			  html+='<div class="modal-body block_graphpopup_'+popupIdx+'">'+language.misc.loading;
			  html+='</div>';
			html+='</div>';
		  html+='</div>';
		html+='</div>';
		$('body').append(html);

		$( '#opengraph'+displayIdx).on('shown.bs.modal', function(){
			getGraphByIDX(popupIdx);
		});
	}
	$('.block_'+displayIdx).addClass('hover');
	$('.block_'+displayIdx).attr('data-toggle','modal');
	$('.block_'+displayIdx).attr('data-target','#opengraph'+displayIdx);
}

function afterGetDevices(){

}

function getExtendedBlockTypes(blocktypes){
	//blocktypes.Type['Lighting 2'] = { icon: 'fa fa-lightbulb-o', title: '<Name>', value: 'ds' }
	return blocktypes;
}

function getBlock_1(device,idx){
   //	$('.block_'+idx);
	$('div.block_1').addClass('myweather');
	enableClick(1,1);

	var pm25 = parseInt(device['Data']);
	var g = Math.round(255 - ((pm25-20)/2));
	var color = '';
	if(g>255) color = 'rgb(255,255,255)';
	else if(g<0) color = 'rgb(170,0,0)';
	else color = 'rgb(255,'+g+',0)';

	var html = '';

	html+='<div class="day"> 室外PM2.5 </div>';

	html+=getMyIcon('FOG',color);
	html+='<div class="temp">';
  	html+='<strong style="font-size:30px;color:'+color+'" class="title">'+ device['Data'] +'</strong><br />';
 	html+='</div>';

	return html;
}

function getBlock_9(device,idx){
   //   $('.block_'+idx);
        $('div.block_9').addClass('myweather');
        enableClick(9,9);

        var pm25 = parseInt(device['Data']);
        var g = Math.round(255 - ((pm25-20)/2));
        var color = '';
        if(g>255) color = 'rgb(255,255,255)';
        else if(g<0) color = 'rgb(170,0,0)';
        else color = 'rgb(255,'+g+',0)';

        var html = '';

        html+='<div class="day"> 室内PM2.5 </div>';

        html+=getMyIcon('FOG',color);
        html+='<div class="temp">';
        html+='<strong style="font-size:30px;color:'+color+'" class="title">'+ device['Data'] +'</strong><br />';
        html+='</div>';

        return html;
}

function getBlock_4(device,idx){
	$('div.block_4').addClass('myweather');
	enableClick(4,2);
	var html = '';
	html+='<div class="day">室外温度</div>';

	var temp = 'N/A';
	var weather = 'CLEAR_DAY';
	if(device['Data'] != 'undefined' && device['Data'] != ''){
		var data = device['Data'].split(";");
		if(data != null && data[0] != '' && data[1] != ''){
			temp = data[0] + ' ' + _TEMP_SYMBOL;
			weather = data[1];
		}
	}
	
	html+=getMyIcon(weather, 'white');

	html+='<div class="temp">';
	html+='<strong style="font-size:30px;color:white" class="title">' + temp + '</strong><br />';
	html+='</div>';
	return html;
}

