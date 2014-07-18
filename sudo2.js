exports.action = function(data, callback, config, SARAH) {
  
  var exec = require('child_process').exec;

  var process = '';

  switch(data.prog)
	{
	case "facebook":
	  process = '%CD%/plugins/sudo2/bin/facebook.bat';
	  break;
	case "process":
	  process = '%CD%/plugins/sudo2/bin/process.bat';
	  break;
	case "home":
	  process = '%CD%/plugins/sudo2/bin/home.bat';
	  break;
	case "lock":
	  process = '%CD%/plugins/sudo2/bin/lock.bat';
	  break;  
	  case "communaute":
	  process = '%CD%/plugins/sudo2/bin/communaute.bat';
	  break;
	  case "selectall":
	  process = '%CD%/plugins/sudo2/bin/selectall.vbs';
	  break;
	  case "save":
	  process = '%CD%/plugins/sudo2/bin/save.vbs';
	  break;
	  case "fav":
	  process = '%CD%/plugins/sudo2/bin/fav.vbs';
	  break;
	  case "retablir":
	  process = '%CD%/plugins/sudo2/bin/retablir.vbs';
	  break;
	  case "command":
	  process = '%CD%/plugins/sudo2/bin/command.vbs';
	  break;
	  case "bfm":
	  process = '%CD%/plugins/sudo2/bin/bfm.bat';
	  break;
	  case "find":
	  process = '%CD%/plugins/sudo2/bin/find.vbs';
	  break;
	  case "cancel":
	  process = '%CD%/plugins/sudo2/bin/cancel.vbs';
	  break;
	  case "cut":
	  process = '%CD%/plugins/sudo2/bin/cut.vbs';
	  break;
	  case "next":
	  process = '%CD%/plugins/sudo2/bin/next.vbs';
	  break;
	  case "precedent":
	  process = '%CD%/plugins/sudo2/bin/precedent.vbs';
	  break;
	  case "paste":
	  process = '%CD%/plugins/sudo2/bin/paste.vbs';
	  break;
	  case "konsole":
	  process = '%CD%/plugins/sudo2/bin/konsole.bat';
	  break;
	  case "global":
	  process = '%CD%/plugins/sudo2/bin/global.bat';
	  break;
	  case "copy":
	  process = '%CD%/plugins/sudo2/bin/copy.vbs';
	  break;
	  case "restore":
	  process = '%CD%/plugins/sudo2/bin/restore.vbs';
	  break;
	  case "minimize":
	  process = '%CD%/plugins/sudo2/bin/minimize.vbs';
	  break;
	  case "close":
	  process = '%CD%/plugins/sudo2/bin/close.vbs';
	  break;
	  case "shut":
	  process = '%CD%/plugins/sudo2/bin/shut.vbs';
	  break;
	  case "restore":
	  process = '%CD%/plugins/sudo2/bin/restore.vbs';
	  break;
	  case "chrome":
	  process = '%CD%/plugins/sudo2/bin/chrome.bat';
	  break;
	  case "screenOff":
	  process = '%CD%/plugins/sudo2/bin/screenoff.bat';
	  break;
	  case "screenOn":
	  process = '%CD%/plugins/sudo2/bin/screenon.bat';
	  break;
	  case "info":
	  process = '%CD%/plugins/sudo2/bin/info.bat';
	  break;
	 case "korben":
	  process = '%CD%/plugins/sudo2/bin/korben.bat';
	  break;
	 case "iphone":
	  process = '%CD%/plugins/sudo2/bin/iphone.bat';
	  break;
	 case "restart":
	  process = '%CD%/plugins/sudo2/bin/restart.vbs';
	  break;
	case "twitter":
	  process = '%CD%/plugins/sudo2/bin/twitter.bat';
	  break;
	case "controlpanel":
	  process = '%CD%/plugins/sudo2/bin/controlpanel.bat';
	  break;
	  case "create":
	  process = '%CD%/plugins/sudo2/bin/create.bat';
	  break;
	  case "dvdon":
	  process = '%CD%/plugins/sudo2/bin/dvdon.bat';
	  break;
	  case "dvdoff":
	  process = '%CD%/plugins/sudo2/bin/dvdoff.bat';
	  break;
	  case "trash":
	  process = '%CD%/plugins/sudo2/bin/trash.bat';
	  break;
	  case "scrsaver":
	  process = '%CD%/plugins/sudo2/bin/scrsaver.bat';
	  break;
	case "off":
	  process = '%CD%/plugins/sudo2/bin/off.bat';
	  break;
	case "allo":
	  process = '%CD%/plugins/sudo2/bin/allo.bat';
	  break;
	case "play":
	  process = '%CD%/plugins/sudo2/bin/iTunes/play.vbs';
	  break;
	default:
	  process = '';
	  break;
	}

  console.log(process);
	if(process!=''){
	  var child = exec(process,
	  function (error, stdout, stderr) {
		if (error !== null) {
		  console.log('exec error: ' + error);
		}
	  }); 
	  
	  callback({});
  }else{
		callback({});
  }
}