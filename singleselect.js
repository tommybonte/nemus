function loadSelection(uQ){
  
	//import dbvals from input
	var dbV = document.getElementById(uQ+'_iP').value;
  
	//make array
	var dbVStr = dbV.split(",");

	var at='';
  
	//if emty
	if(dbV==''){
		document.getElementById(uQ+'_rD').innerHTML=at;
	}
  
	var i;
	for (i of dbVStr) {
		var sel = document.getElementById(uQ);
    
	//define link depending on id
	var uQS = uQ.split("x");
	
	
	
    var x;
		for (x = 0; x < sel.length; x++) {
			var val0 = sel.options[x].value;
			var vali = val0.split("_");
			
			var value = vali[0];
			
			var text = sel.options[x].text;
			
			if(value == i){
				if(uQS[1]=='10'){
					var uQop = '<div class="input-group-btn"><form action="https://brobygrafiska.se/brobery/test2/index.php?fetch=10_ink" method="post" style="display:inline;"><button class="form-control" id="" value="" onClick="" style="width:auto;"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button><input type="hidden" name="object" value="'+value+'"><input type="hidden" name="objective" value="view"><input type="hidden" name="dbAction" value="categorize"></form></div>';
				}
				else{
					var uQop = '';
				}
				if(vali[1]){
					var cst = vali[1].split("q");
					
					var uQop1 = '<input type="number"  style="width:15%;" class="form-control" value="'+cst[0]+'" id="costPROD_'+x+'x'+vali[0]+'"><input type="number"  style="width:15%;" class="form-control" value="" placeholder="amount" id="amountPROD_'+x+'x'+vali[0]+'" onChange="calcTotal()">';
					var wdVal = '70';
				}
				else{
					var uQop1 = '';
					var wdVal = '100';
				}
				
				//alert(text);
				at += '<div class="row"><div class="col-sm-12"><div class="input-group">'+uQop+'<input type="text" style="width:'+wdVal+'%;" class="form-control" disabled value="'+text+'"/>'+uQop1+'<div class="input-group-btn"><button class="form-control" onClick=subtractSelection("'+uQ+'_'+value+'")>-</button></div></div></div></div>';
				document.getElementById(uQ+'_rD').innerHTML=at;
			}
		}
	}
}

function addSelection(uQ){
	
	var sI = document.getElementById(uQ);
	var aVi = sI[sI.selectedIndex].value;
	var aT = sI[sI.selectedIndex].text;
	//alert(aV+aT);
	
	var vali = aVi.split("_");
	
	var aV = vali[0];
  
	var c = document.getElementById(uQ+'_iP').value;
  
	//make array
	var dbVStr = c.split(",");
  
	//not empty string
	if(c!=''){
		var i = 0;
		var dblen = dbVStr.length;
		for (; i < dblen;) {
			if(dbVStr[i]==aV){
				alert('already added');
				var aa = 'y';
			}
			i++;
		}
		if(aa!='y'){
			var exC = c+','+aV;
		}
  	}
	else{
		var exC = aV;
	}
	if(aa!='y'){
		document.getElementById(uQ+'_iP').value=exC;
	}
	onLoad = loadSelection(uQ);
}

function subtractSelection(uQ){

	//get id
	var dbID = uQ.split("_");
 
	var c = document.getElementById(dbID[0]+'_iP').value;
 
	//make array
	var dbVStr = c.split(",");
  	
    var at = ''
  	var i = 0;
    var dblen = dbVStr.length;
    for (; i < dblen;) {
    
		if(dbVStr[i]==dbID[1]){
			//dbID[1] is not being repeated
			if((i + 1) == (dblen)){
				at += '';
				document.getElementById(dbID[0]+'_iP').value=at;
			}
		}
		else{
			// last iteration can not have a comma
			if((i + 1) == (dblen)){
				at += dbVStr[i];
        		document.getElementById(dbID[0]+'_iP').value=at;
			}
			else{
         		at += dbVStr[i]+',';
        		document.getElementById(dbID[0]+'_iP').value=at;
			}
		}
		i++;
    }
    
    //alert(dbVStr[i]+' reg so we can remove last comma');
    var fD = document.getElementById(dbID[0]+'_iP').value;
    var newfD = fD.charAt(fD.length-1);
          
    if(newfD==','){
		var newfD = fD.slice(0, -1);
		document.getElementById(dbID[0]+'_iP').value = newfD;
    }
	onLoad = loadSelection(dbID[0]);
	onLoad = calcTotal();
}