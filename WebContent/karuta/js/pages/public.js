//==================================
function getURLParameter(sParam) {
//==================================
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for ( var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

//------------------------------
var iid = getURLParameter('i');
//------------------------------
var lang = getURLParameter('lang');
if (lang==null)
	lang = "" ;
//-------------------------------

//==============================
function loadCSS(url)
//==============================
{
	document.write("<link rel='stylesheet' type='text/css' href='"+url+"'></link>");
};

//==============================
function loadLESS(url)
//==============================
{
	document.write("<link rel='stylesheet/less' type='text/css' href='"+url+"'></link>");
};

//==============================
function loadJS(url)
//==============================
{
	document.write("<script src='"+url+"'></script>");
};

//==============================
function loadPublic(url)
//==============================
{
	//--------------------------------------------------------------
	loadCSS(url+"/other/bootstrap/css/bootstrap.min.css");
	loadCSS(url+"/other/css/jquery-ui.css");
	loadCSS(url+"/other/css/font-awesome/css/font-awesome.min.css");
//	loadCSS(url+"/other/css/colorpicker/css/evol.colorpicker.css");
	//--------------------------------------------------------------
	var karuta_config = "../../../"+appliname+"/application/css/color.less";
	less = {
		    globalVars: {
		    	'KARUTA-CONFIG': "'"+karuta_config+"'"
		    }
		  };
	loadLESS(url+"/karuta/css/karuta.less");
	loadJS(url+"/other/js/less.min.js")
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/karuta.js");
	loadJS(url+"/karuta/js/UICom.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/pages/karuta-page.js");
	loadJS(url+"/karuta/js/pages/main.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/resources/Type_Calendar.js");
	loadJS(url+"/karuta/js/resources/Type_Comments.js");
	loadJS(url+"/karuta/js/resources/Type_Document.js");
	loadJS(url+"/karuta/js/resources/Type_DocumentBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Proxy.js");
	loadJS(url+"/karuta/js/resources/Type_ProxyBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Proxy.js");
	loadJS(url+"/karuta/js/resources/Type_TextField.js");
	loadJS(url+"/karuta/js/resources/Type_Field.js");
	loadJS(url+"/karuta/js/resources/Type_Image.js");
	loadJS(url+"/karuta/js/resources/Type_ImageBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Resource.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Double_Resource.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Get_Resource.js");
	loadJS(url+"/karuta/js/resources/Type_URL.js");
	loadJS(url+"/karuta/js/resources/Type_URLBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Item.js");
	loadJS(url+"/karuta/js/resources/Type_Video.js");
	loadJS(url+"/karuta/js/resources/Type_CompetencyEvaluation.js");
	loadJS(url+"/karuta/js/resources/Type_Oembed.js");
	loadJS(url+"/karuta/js/resources/Type_Audio.js");
	loadJS(url+"/karuta/js/resources/Type_SendEmail.js");
	loadJS(url+"/karuta/js/resources/Type_URL2Unit.js");
	loadJS(url+"/karuta/js/resources/Type_Dashboard.js");
	loadJS(url+"/karuta/js/resources/Type_Color.js");
	loadJS(url+"/karuta/js/resources/Type_Bubble.js");
	loadJS(url+"/karuta/js/resources/Type_Action.js");
	loadJS(url+"/karuta/js/resources/Type_EuropassL.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/jquery-1.10.2.min.js");
	loadJS(url+"/other/js/jquery-ui-1.10.3.custom.min.js");
	loadJS(url+"/other/bootstrap/js/bootstrap.min.js");
	loadJS(url+"/other/js/jquery.ui.touch-punch.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/spin.js");
	loadJS(url+"/other/js/jquery.spin.js");
	//--------------------------------------------------------------
	loadCSS(url+"/other/wysihtml5/bootstrap3-wysihtml5.min.css");
	loadJS(url+"/other/wysihtml5/bootstrap3-wysihtml5.all.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/jquery_hotkeys.js");
	loadJS(url+"/other/js/JQueryRC4.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/colorpicker/js/evol.colorpicker.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/model/Type_Portfolio.js");
	loadJS(url+"/karuta/js/model/Type_Node.js");
	loadJS(url+"/karuta/js/model/Type_User.js");
	//--------------------------------------------------------------
	loadCSS(url+"/other/jplayer/jplayer.blue.monday.css");
	loadJS(url+"/other/jplayer/jquery.jplayer.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/jquery.ui.widget.js");
	loadJS(url+"/other/js/jquery.iframe-transport.js");
	loadJS(url+"/other/js/jquery.fileupload.js");
	//--------------------------------------------------------------
	loadCSS(url+"/other/oembed/jquery.oembed.css");
	loadJS(url+"/other/oembed/jquery.oembed.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/bootstrap-datepicker/bootstrap-datepicker.js");
	loadJS(url+"/other/bootstrap-datepicker/bootstrap-datepicker.fr.js");
	loadCSS(url+"/other/bootstrap-datepicker/datepicker.css");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/js.cookie.js");
	loadJS(url+"/other/js/jquery.sortElements.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/version.js");
	//--------------------------------------------------------------
}

//==============================
function displayKarutaPublic()
//==============================
{
	var html = "";
	html += "<div id='main-container' class='container-fluid public-container'>";
	html += "<div class='row public-row'>";
	html += "	<div class='col-md-3'>";
	html += "		<div id='welcome'></div>";
	html += "		<div id='sidebar'></div>";
	html += "	</div>";
	html += "	<div class='col-md-9' id='contenu'></div>";
	html += "</div>";
	html += "</div>";
	$('body').html(html);
	
	$('body').append(EditBox());
	$('body').append(DeleteBox());
	$('body').append(savedBox());
	$('body').append(alertBox());
	$('body').append(messageBox());
	$('body').append(imageBox());

	//---------------------------
	$("#welcome").html(welcome[LANG]);
	$.ajaxSetup({async: false});
	//----------------
	$.ajax({
		type : "GET",
		dataType : "text",
		url : "../../../"+serverFIL+"/direct?i=" + iid,
		success : function(data) {
			g_uuid = data;
			$.ajax({ // get group-role for the user
				Accept: "application/xml",
				type : "GET",
				dataType : "xml",
				url : "../../../"+serverBCK+"/credential/group/" + g_uuid,
				success : function(data) {
					var usergroups = $("group",data);
					for (var i=0;i<usergroups.length;i++) {
						g_userroles[i+1] = $("role",usergroups[i]).text();
					}
					g_userroles[0] = g_userroles[1]; // g_userroles[0] played role by designer
				}
			});
			//----------------
			$.ajax({
				type : "GET",
				dataType : "xml",
				url : "../../../"+serverBCK+"/credential",
				data: "",
				success : function(data) {
					USER = new UIFactory["User"]($("user",data));
				},
				error : function( jqXHR, textStatus, errorThrown ) {
					if (jqXHR.status=="401") {
						window.location = "login.htm?i="+iid+"&lang="+lang;
					}						
				}
			});
			$(document).click(function(e) {
			    if (!$(e.target).is('.icon-info-sign, .popover-title, .popover-content')) {
			        $('.popover').hide();
			    }
			});
			//----------------
			$.ajax({
				type : "GET",
				dataType : "xml",
				url : "../../../"+serverBCK+"/nodes/node/" + g_uuid,
				success : function(data) {
					UICom.parseStructure(data);
					var depth = 99;
					var rootnode = UICom.structure['ui'][g_uuid];
					if (rootnode.asmtype=='asmRoot' || rootnode.asmtype=='asmStructure')
						depth = 1;
					setCSSportfolio(data);
					loadLanguages(function(data) {
						setLanguage(lang,'publichtm');
						if (rootnode.asmtype=='asmRoot' || rootnode.asmtype=='asmStructure')
							UIFactory["Portfolio"].displaySidebar(UICom.structure['tree'][g_uuid],'sidebar','standard',LANGCODE,false,g_uuid);
						$("#contenu").html("<div id='page' uuid='"+g_uuid+"'></div>");
						UIFactory['Node'].displayStandard(UICom.structure['tree'][g_uuid],'contenu',depth,LANGCODE,true);
					});
					var welcomes = $("asmUnit:has(metadata[semantictag*='welcome-unit'])",data);
					if (welcomes.length>0){
						var welcomeid = $(welcomes[0]).attr('id');
						$("#sidebar_"+welcomeid).click();
					} else {
						var root = $("asmRoot",data);
						var rootid = $(root[0]).attr('id');
						$("#sidebar_"+rootid).click();
					}
				}
			});
		},
		error : function( jqXHR, textStatus, errorThrown ) {
			alert("Get portfolio: "+jqXHR.status + " "+errorThrown)
		}
	});
	$.ajaxSetup({async: true});
}

