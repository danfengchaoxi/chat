if("undefined"!=typeof Bookmark){
    if(Bookmark.oMainWnd){
	    Bookmark.oMainWnd.mainWnd.style.visibility="visible";
	}
}else{
    var Bookmark={};
	(function(){	    
		function c(a){//获取ID
	        alert('c');
			if(typeof(a)=="string"){
		        return document.getElementById(a);
		    }else{
		        return a;
			}
	    }
	    var addElement=function(a,b){
	        alert('addelement');
			if(undefined===b){
		        b=document.body;
		    }
		    var d=document.createElement("div");
		    d.innerHTML=a;
		    a=d.firstChild;
		    b.appendChild(a);
	    } 
	    		
		var o = {
		        create:function(){
				    return function(){
					    this.initialize.apply(this, arguments);
					}
				}
		    };
		var wnd = o.create();
		wnd.prototype={
			initialize:function(){
			    this.createWnds();
			},
			createWnds:function(){
				alert('createwnds');
				var a='<div id="idBookmarkMainWnd" class="cssBookmark" style="border:2px solid black;background:#FF0000;"><div id="idBookmarkPopupToolbar"><div title="关闭" id="idBookmarkClose"></div></div><div id="idBookmarkCtrlWnd"><form id="idBookmarkForm" method="get" name="idBookmarkForm"><table style="width:300px;height:33px;" height="33px" cellspacing="0" cellpadding="0" border="0"><tr><td style="width:55px;height:33px;vertical-align:top;" width="55px"><input style="margin-top:4px;" id="idBookmarkQuerySubmit" type="submit" value="" click="" hidefocus="true" onFocus="this.blur()" /></td></tr></table></form></div><div id="idBookmarkContentWnd"></div><div id="idBookmarkFooterWnd">foot</div></div>';
                addElement(a,document.body);
				this.mainWnd=c("idBookmarkMainWnd");
		        this.mainWnd.style.position="fixed";
		        this.mainWnd.style.left=200+'px';
		        this.mainWnd.style.top=300+'px';		
			}
		};
		Bookmark.oMainWnd=new wnd();		
    })()
}
