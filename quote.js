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
	    
	    var addEvent=function(a,b,d){//btn1Obj.addEventListener("click",method1,false);
	        alert('addevent');
			if(window.addEventListener){
		        a.addEventListener(b,d,false);
		    }else{
		        a.attachEvent("on"+b,d);
		    }
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
			    this.addAllEvents();
			},
			createWnds:function(){
				alert('createwnds');
				var a='<div id="idBookmarkMainWnd" class="cssBookmark" style="border:2px solid black;background:#FF0000;"><div id="idBookmarkPopupToolbar"  style="width:300px;height:20px;background:#223344"><div title="关闭"><input type="button" id="idBookmarkClose" value="x" click="" /></div></div><div id="idBookmarkCtrlWnd"><form id="idBookmarkForm" method="get" name="idBookmarkForm"><table style="width:300px;height:33px;" height="33px" cellspacing="0" cellpadding="0" border="0"><tr><td style="width:55px;height:33px;vertical-align:top;" width="55px"><input style="margin-top:4px;" id="idBookmarkQuerySubmit" type="submit" value="" click="" hidefocus="true" onFocus="this.blur()" /></td></tr></table></form></div><div id="idBookmarkContentWnd"></div><div id="idBookmarkFooterWnd" style="width:300px;height:20px;background:#113344">foot</div></div>';
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
