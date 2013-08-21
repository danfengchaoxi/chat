if("undefined"!=typeof Bookmark){
    if(Bookmark.oMainWnd){
	    Bookmark.oMainWnd.mainWnd.style.visibility="visible";
	}
}else{
    alert('else');
	var Bookmark={};
	(function(){	    
		alert('function');
		function c(a){//获取ID
	        if(typeof(a)=="string"){
		        return document.getElementById(a);
		    }else{
		        return a;
			}
	    }
	    var addElement=function(a,b){
	        if(undefined===b){
		        b=document.body;
		    }
		    var d=document.createElement("div");
		    d.innerHTML=a;
		    a=d.firstChild;
		    b.appendChild(a);
	    } 
	    var addEvent=function(a,b,d){
	        if(window.addEventListener){
		        a.addEventListener(b,d,false);
		    }else{
		        a.attachEvent("on"+b,d);
		    }
	    }
		
		function wnd(){};
		wnd.prototype={
			
			initialize:function(){
			    alert('wnd');
			    this.createWnds();
				this.addAllEvents();
			},
			createWnds:function(){//建主窗口
				var a='<div id="idBookmarkMainWnd" class="cssBookmark"><div id="idBookmarkPopupToolbar"><div title="关闭" id="idBookmarkClose"></div></div><div id="idBookmarkCtrlWnd"><form id="idBookmarkForm" method="get" name="idBookmarkForm"><table style="width:300px;height:33px;" height="33px" cellspacing="0" cellpadding="0" border="0"><tr><td style="width:55px;height:33px;vertical-align:top;" width="55px"><input style="margin-top:4px;" id="idBookmarkQuerySubmit" type="submit" value="" click="" hidefocus="true" onFocus="this.blur()" /></td></tr></table></form></div><div id="idBookmarkContentWnd"></div><div id="idBookmarkFooterWnd">foot</div></div>';
		        a.style.border=1+'px';
		        addElement(a,document.body);
		        this.mainWnd=c("idBookmarkMainWnd");
		        this.mainWnd.style.position="fixed";
		        this.mainWnd.style.left=200+'px';
		        this.mainWnd.style.top=300+'px';		
			},
			addAllEvents:function(){//增加事件
				this.onClose=function(){
				    this.mainWnd.style.visibility="hidden";
				}
				addEvent(c("idBookmarkClose"),"click",this.onClose);
			}
		};
		Bookmark.oMainWnd=new wnd();
    })()
}
