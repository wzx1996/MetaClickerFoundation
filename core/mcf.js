$(document).ready(function(){
	var notify=function(information){
		$("#notification").text(information).attr("show","show");
		setTimeout(function(){
			$("#notification").removeAttr("show");
		},100);
	}
	
	var meta={
		settings:{},
		currency:{},
		production:{},
		research:{},
		milestone:{},
		modifier:{},
		event:{}
		
	}
	$.getJSON("/settings.json",function(data){meta.settings=data});
	$.each(meta.settings.data,function(index,value){
		$.getJSON("/data/"+value+"/currency.json",function(data){
			$.extend(meta.currency,data);
		});
		$.getJSON("/data/"+value+"/production.json",function(data){
			$.extend(meta.production,data);
		});
		$.getJSON("/data/"+value+"/research.json",function(data){
			$.extend(meta.research,data);
		});
		$.getJSON("/data/"+value+"/milestone.json",function(data){
			$.extend(meta.milestone,data);
		});
		$.getJSON("/data/"+value+"/modifier.json",function(data){
			$.extend(meta.modifier,data);
		});
		$.getJSON("/data/"+value+"/event.json",function(data){
			$.extend(meta.event,data);
		});
	});
	$.each(meta.settings.skin,function(skin){
		$("head").append($("<link>").attr("rel","stylesheet").attr("type","text/css").attr("href","/skin/"+skin+"/style.css"));
	});
	var settings=$.localStorage("settings");
	var currency=$.localStorage("currency");
	var production=$.localStorage("production");
	var research=$.localStorage("research");
	var milestone=$.localStorage("milestone");
	var stat=$.localStorage("stat");
	
	setInterval(function(){ //autosave
		$.localStorage("settings",settings);
		$.localStorage("currency",currency);
		$.localStorage("production",production);
		$.localStorage("research",research);
		$.localStorage("milestone",milestone);
		$.localStorage("stat",stat);
		notify("Load complete!");
	},300000);
	
	//TODO add currency panels
	//TODO add production panels
	//TODO add research panels
	//TODO add milestone panels
	//TODO register modifiers
	//TODO register events
	//TODO register tick event
	//TODO visuals
	//TODO mobile device handling
})
