(function(h){var t=false;var p,j,n={};function r(E){var F=h(E);var B=h.data(E,"app").options;var A=h("<div/>").attr({border:false,region:"center"}).addClass("app-wall").appendTo(F);A.bind("contextmenu",function(H){var G=h.data(E,"app")["appContainer"];if(G&&H.target!=G[0]){return}B.onWallContextMenu.call(E,H);H.preventDefault()});if(B.wallpaper){A.css("background-image",'url("'+B.wallpaper+'")')}if(F.context.nodeName!=="BODY"){F.attr("fit",true)}var D={south:true,north:true,west:true,east:true};if(!D[B.taskBlankPos]){B.taskBlankPos="south"}var z=h("<div/>").attr({border:false,region:B.taskBlankPos}).css({overflow:"hidden"}).appendTo(F);if(B.taskBlankPos=="north"||B.taskBlankPos=="south"){z.css("height",35)}else{z.css("width",35)}F.layout();var C=h("<div/>").appendTo(A).calendar({current:new Date()}).hide().css({position:"absolute","z-index":100});h.data(E,"app")["calendarDiv"]=C;A.panel({onResize:function(H,G){f(E);q(E)}})}function k(K){var M=h(K);var z=h.data(K,"app").options;var G=M.layout("panel",z.taskBlankPos);var I=h("<div/>").addClass("app-taskBar");var B=h("<span/>");var L=h("<div/>");var H=h("<div/>");if(h.support.leadingWhitespace){B.hover(function(){h(this).addClass("app-startMenu-hover")},function(){h(this).removeClass("app-startMenu-hover")})}if(z.taskBlankPos=="south"||z.taskBlankPos=="north"){I.addClass("app-taskBar-bg1");B.addClass("app-startMenu-x");L.addClass("app-taskList-x");H.addClass("app-taskBar-calendar-x");var F=h("<div/>").addClass("app-scroll-left").appendTo(L);var E=h("<div/>").addClass("app-scroll-right").appendTo(L);var D=h("<div/>").addClass("app-list-wrap").appendTo(L);var J=h("<ul/>").addClass("app-list-list").appendTo(D)}else{I.addClass("app-taskBar-bg2");B.addClass("app-startMenu-y");L.addClass("app-taskList-y");H.addClass("app-taskBar-calendar-y");var C=h("<div/>").addClass("app-scroll-top").appendTo(L);var A=h("<div/>").addClass("app-scroll-bottom").appendTo(L)}B.appendTo(I);L.appendTo(I);H.appendTo(I);I.appendTo(G);h.data(K,"app")["taskBar"]=I;h.data(K,"app")["start"]=B;h.data(K,"app")["taskList"]=L;h.data(K,"app")["calendar"]=H;L.bind("contextmenu",function(N){if(N.target.nodeName=="LI"){z.onTaskBlankContextMenu.call(K,N,h(N.target).attr("l_id"))}else{z.onTaskBlankContextMenu.call(K,N,false)}});q(K)}function q(C){var D=h(C);var B=h.data(C,"app").options;var z=D.layout("panel",B.taskBlankPos);var A=h.data(C,"app")["taskList"];if(B.taskBlankPos=="south"||B.taskBlankPos=="north"){A.width(z.width()-130)}else{A.height(z.height()-75)}}function l(C){var D=h(C);var A=h.data(C,"app").options;var z=D.layout("panel","center");var B=h("<ul/>").addClass("app-container");B.appendTo(z);h.data(C,"app")["appContainer"]=B;if(A.loadUrl.app&&!t){h.ajax({url:A.loadUrl.app,dataType:"JSON",async:false,cache:false,success:function(E){y(C,E)},error:function(E,G,F){h.messager.alert("",G||F,"error")}})}}function y(V,C){var N=h(V);var M=h.data(V,"app").options;var T=N.layout("panel","center");var D=N.data().app.appContainer;var A=Math.floor((T.height()-20)/(M.iconSize+45));var B=Math.floor((T.width()-20)/(M.iconSize+45));var J=A*B;var H=((T.height()-20)-(M.iconSize+45)*A)/A;var I=((T.width()-20)-(M.iconSize+45)*B)/B;var K=1,F=1,O=20,E=10;var U=M.iconSize+45;for(var Q=0;Q<C.length;Q++){if(K>A){K=1;O=20;E+=U+I;F++}var G=C[Q];var P=h("<li/>").css({height:U,width:U});P.data("app",G);P.attr("app_id",c());if(G.id){P.attr("id",G.id)}P.css({left:E,top:O});var S=h("<img/>").height(M.iconSize).width(M.iconSize).attr("class",G.iconCls).appendTo(P);var L=h("<span/>").text(G.text).appendTo(P);var z=h("<em/>").css({height:U,width:U}).appendTo(P);P.appendTo(D);O+=U+H;K++;if(h.support.leadingWhitespace){P.hover(function(){h(this).addClass("hover")},function(){h(this).removeClass("hover")})}v(V,P);if(M.dbClick){P.on("dblclick",function(){x.call(this,V)})}else{P.on("click",function(){x.call(this,V)})}}var R=D.children("li");R.mousedown(function(){R.removeClass("select");h(this).addClass("select")}).bind("contextmenu",function(W){M.onAppContextMenu.call(V,W,h(this).attr("app_id"));W.preventDefault()});h(V).resize()}function v(A,z){z.draggable({revert:true,cursor:"default"}).droppable({onDrop:function(C,B){if(h(B).prev().attr("app_id")==h(this).attr("app_id")){h(B).insertBefore(this)}else{h(B).insertAfter(this)}setTimeout(function(){f(A)},0)},accept:".app-container li"})}function g(B,z){var C=h(B);var A=h.data(B,"app").options;z=z||A.loadUrl.app;if(z){h.ajax({url:z,dataType:"JSON",async:false,cache:false,success:function(D){C.data().app.appContainer.empty();y(B,D)},error:function(D,F,E){h.messager.alert("",F||E,"数据格式错误.")}})}}function f(E){var L=h(E);var z=h.data(E,"app").options;var I=L.layout("panel","center");var K=h.data(E,"app").appContainer;var N=Math.floor((I.height()-20)/(z.iconSize+45));var C=Math.floor((I.width()-20)/(z.iconSize+45));var D=N*C;var J=((I.height()-20)-(z.iconSize+45)*N)/N;var F=((I.width()-20)-(z.iconSize+45)*C)/C;var M=1,A=1,G=20,B=10;var H=z.iconSize+45;K.children().each(function(){if(M>N){M=1;G=20;B+=H+F;A++}h(this).css({left:B,top:G});G+=H+J;M++})}function e(A){var B=h(A);var z=h.data(A,"app").options;if(z.loadUrl.startMenu&&!t){h.ajax({url:z.loadUrl.startMenu,dataType:"JSON",async:false,cache:false,success:function(C){b(A,C)},error:function(C,E,D){h.messager.alert("",E||D,"error")}})}}function b(E,C){var I=h(E);var z=h.data(E,"app").options;var H=I.layout("panel","center");var F;F=m(E,C,{onClick:function(K){z.onStartMenuClick.call(E,K)}});if(z.otherStartMenus){for(var D=0;D<z.otherStartMenus.length;D++){if(z.otherStartMenus[D]=="-"){var J=h('<div class="menu-sep"></div>');F.append(J)}else{F.menu("appendItem",z.otherStartMenus[D])}}}var A=h.data(E,"app")["start"];var B=0,G=0;A.click(function(K){if(z.taskBlankPos=="south"){G=H.height()}else{if(z.taskBlankPos=="north"){G=A.height()}else{if(z.taskBlankPos=="west"){G=A.height()+7}else{if(z.taskBlankPos=="east"){B=H.width();G=A.height()+7}}}}F.menu("show",{left:B,top:G})});A.data("menu",F)}function m(G,E,A){var z=h.data(G,"app").options;var C=h('<div style="width:200px;"></div>').appendTo("body");for(var F=0;F<E.length;F++){var B=E[F];if(B=="-"){var I=h('<div class="menu-sep"></div>');C.append(I);continue}if(B.children){C.append(D(B))}else{var H=h("<div></div>").html(B.text).data("data",B);if(B.href){H.attr("url",B.href)}if(B.iconCls){H.attr("iconCls",B.iconCls)}C.append(H)}}return C.menu(A);function D(J){var N=J.text,K=J.children;var P=h("<div/>").append(h("<span></span>").html(N)).data("data",J);if(J.href){P.attr("url",J.href)}if(J.iconCls){P.attr("iconCls",J.iconCls)}var Q=h('<div style="width:200px;"></div>');for(var L=0;L<K.length;L++){var O=K[L];if(O=="-"){var R=h('<div class="menu-sep"></div>');J.append(R);continue}if(O.children){P.append(Q.append(D(O)))}else{var M=h("<div/>").html(O.text).data("data",O);if(O.href){M.attr("url",O.href)}if(O.iconCls){M.attr("iconCls",O.iconCls)}P.append(Q.append(M))}}return P}}function i(C){var B=h.data(C,"app")["calendarDiv"];var A=h.data(C,"app").options;var z={};if(A.taskBlankPos=="south"||A.taskBlankPos=="east"){z.bottom=0;z.right=0}else{if(A.taskBlankPos=="west"){z.bottom=0;z.left=0}else{z.top=0;z.right=0}}B.css(z)}function o(D){var F=h(D);var z=h.data(D,"app").options;var C=h.data(D,"app")["calendar"];function E(){var G=new Date();var H=A.call(G,z.dateFmt);C.attr("title",A.call(G,"yyyy-MM-dd"));if(z.taskBlankPos=="south"||z.taskBlankPos=="north"){C.html(H)}else{var I=G.getHours()+":";if(G.getMinutes()<10){I+="0"}I+=G.getMinutes();C.html(I)}}E();window.setInterval(function(){E()},1000);var B=h.data(D,"app")["calendarDiv"];i(D);C.click(function(){B.slideToggle()});F.click(function(G){var H=h(G.target).attr("class");if(H!="app-taskBar-calendar-x"&&H!="app-taskBar-calendar-y"&&!h.contains(B[0],G.target)){B.hide()}});function A(H){if(!H){H="yyyy-MM-dd hh:mm:ss"}var I={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};if(/(y+)/.test(H)){H=H.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))}for(var G in I){if(new RegExp("("+G+")").test(H)){H=H.replace(RegExp.$1,RegExp.$1.length==1?I[G]:("00"+I[G]).substr((""+I[G]).length))}}return H}}function w(D){var F=h(D);var C=h(D).data("app").options;var z=F.layout("panel","center");var A={},B="v";if(C.taskBlankPos=="south"||C.taskBlankPos=="west"){A.top=0;A.right=0}else{if(C.taskBlankPos=="east"){A.top=0;A.left=0}else{A.bottom=0;A.right=0;B="h"}}if(C.loadUrl.widget&&!t){h.ajax({url:C.loadUrl.widget,dataType:"JSON",async:false,cache:false,success:function(G){E(G)},error:function(G,I,H){h.messager.alert("",I||H,"error")}})}function E(G){h.each(G,function(){var H=h("<div/>").addClass("app-widget").css(A);if(this.style){H.attr("style",this.style)}if(this.cls){H.addClass(this.cls)}if(this.href){H.load(this.href)}else{if(this.content){H.html(this.content)}}H.appendTo(z);H.draggable({cursor:"default",axis:B});h.parser.parse(H)})}}function x(S,B){var K=h(S),z=h(S).data("app").options,O=K.layout("panel","center"),N,R;if(B){if(!B.uuid){N=c();B.uuid=N}else{N=B.uuid}R=B}else{N=h(this).attr("app_id");R=h(this).data("app")}if(z.iframeOpen){R.iframe=true}var I=h('div[w_id="'+N+'"]',O);if(I.length){I.window("open");return}var M=h("<div/>").attr("w_id",N).appendTo(O);n[N]=M;var A=z.onBeforeOpenApp.call(S,R)||{};var J={height:400,width:700,resizable:true,maximizable:true,minimizable:true,shadow:false};var P=h("div[w_id]",O).length;if(P>1){var C=P*25+10;var E=P*25+300;J=h.extend(J,{top:C,left:E})}var G={title:R.text,inline:true,cache:true,onOpen:function(){D(h(this).attr("w_id"),h.data(this,"panel").options.title);if(A.onOpen){A.onOpen.call(this)}else{if(z.onOpenApp){z.onOpenApp.call(this)}}p=j;j=h(this).attr("w_id");h('li[l_id="'+h(this).attr("w_id")+'"]').attr("status","opened")},onClose:function(){var T=h("iframe",this);if(T.length>0){if(!/^http/i.test(T[0].src)){T[0].contentWindow.document.write("")}T[0].contentWindow.close();T.remove();if(h.support.leadingWhitespace){try{CollectGarbage()}catch(L){}}}H(h(this).attr("w_id"));if(A.onClose){A.onClose.call(this)}else{if(z.onClosedApp){z.onClosedApp.call(this)}}delete n[h(this).attr("w_id")];h(this).window("destroy");h('li[l_id="'+p+'"]').addClass("selected")},onMinimize:function(){if(h(this).prev(".window-header").find(".panel-tool-restore").length==1){var L=h.data(this,"panel").options;L.maximized=true}if(A.onMinimize){A.onMinimize.call(this)}h('li[l_id="'+h(this).attr("w_id")+'"]').attr("status","closed")},onMove:function(U,T){var L=h.data(this,"panel").options;if(T<0){h(this).window("move",{left:U,top:0});h(this).window("maximize")}else{if(L.maximized){h(this).window("restore");h(this).window("move",{left:U+100,top:T})}}if(T>O.height()){h(this).window("move",{left:U,top:(O.height()-25)})}if(A.onMove){A.onMove.call(this)}},onMaximize:function(){h(this).closest(".window").css("z-index",h.fn.window.defaults.zIndex++);if(A.onMaximize){A.onMaximize.call(this)}}};var Q=h.extend({},J,R.cnf,A,G);if(R.href&&!/^http/i.test(R.href)&&!R.iframe){Q.href=R.href}M.window(Q);if(R.id){M.attr("id","app_window_"+R.id)}if(R.href&&/^http/i.test(R.href)||R.iframe){var F=h("<iframe/>").attr({width:"100%",height:"99%",frameborder:0,src:R.href});M.append(F)}M.prev("div.window-header").click(function(U){var L=K.data("app").taskList;var T=L.find("ul.app-list-list");T.children().removeClass("selected");h('li[l_id="'+N+'"]',T).addClass("selected")});function D(U,X){var L=K.data("app").taskList;var W=L.find("ul.app-list-list");var T=W.parent();W.children().removeClass("selected");if(h('li[l_id="'+U+'"]',W).length){h('li[l_id="'+U+'"]',W).addClass("selected")}else{var V=h("<li/>").attr("l_id",U).addClass("selected").text(X).attr("status","opened");W.append(V);V.click(function(){if(h(this).attr("status")=="opened"){var Y=h('div[w_id="'+U+'"]',O);var Z=parseInt(Y.parent().css("z-index"))+1;if(Z!=h.fn.window.defaults.zIndex){Y.parent().css("z-index",h.fn.window.defaults.zIndex++)}else{h(this).attr("status","closed");Y.animate({opacity:"show"},"slow",function(){h(this).window("minimize")})}}else{h(this).attr("status","opened");h('div[w_id="'+U+'"]',O).window();W.children().removeClass("selected");h(this).addClass("selected")}});if(T.width()>L.width()){T.width(L.width());h('div[class^="app-scroll-"]',L).show()}if(W.children().length!=1){T.width(V.outerWidth()+10+T.width())}else{T.width(V.outerWidth()+10)}}}function H(T){var U=h('li[l_id="'+T+'"]');var L=U.parent().parent();L.width(L.width()-(U.outerWidth()+4));U.remove()}return M}function d(A,z){return x(A,z)}function c(){function z(){return(((1+Math.random())*65536)|0).toString(16).substring(1)}return"UUID-"+(z()+z()+"-"+z()+"-"+z()+"-"+z()+"-"+z()+z()+z())}function s(B,A){var z=h(B).layout("panel","center");z.css("background-image",'url("'+A+'")');h.data(B,"app").options.wallpaper=A}var a=[r,k,l,e,o,w];function u(E,A){if(t){return}var z=h.messager.progress({title:A.lang.progress.title,msg:A.lang.progress.msg,interval:null});var D=h.messager.progress("bar");h.ajaxSetup({async:false});for(var B=0;B<a.length;B++){var C=a[B];D.progressbar({text:A.lang[C.name]}).progressbar("setValue",((parseInt(B)+1)/a.length)*100);C.call(this,E)}h.messager.progress("close");h.ajaxSetup({async:true});t=true;A.onLoaded.call(E);setTimeout(function(){h("body").attr({oncontextmenu:"return false",onselectstart:"return false",ondragstart:"return false",onbeforecopy:"return false"})},500)}h.fn.app=function(z,A){if(typeof z==="string"){return h.fn.app.methods[z.toLowerCase()].call(this,A)}z=z||{};return this.each(function(){var B=h.data(this,"app");if(B){z=h.extend(B.options,z);B.options=z}else{z=h.extend({},h.fn.app.defaults,h.fn.app.parseOptions,z);h.data(this,"app",{options:z})}u(this,z)})};h.fn.app.methods={options:function(){return this.data().app.options},appcontainer:function(){return this.data().app.appContainer},calendar:function(){return this.data().app.calendar},start:function(){return this.data().app.start},taskbar:function(){return this.data().app.taskBar},tasklist:function(){return this.data().app.taskList},startmenu:function(){return this.data().app.start.data().menu},layout:function(){return this.data().layout},setwallpaper:function(z){return this.each(function(){s(this,z)})},appreset:function(){return this.each(function(){f(this)})},seticonsize:function(z){return this.each(function(){h.data(this,"app").options.iconSize=z;var A=h.data(this,"app").appContainer;A.find("img").height(z).width(z);A.find("em,li").height(z+45).width(z+45);f(this)})},closeapp:function(z){h('div[w_id="'+z+'"]').window("close")},openapp:function(z){h('div[w_id="'+z+'"]').window("open")},refreshapp:function(A){var z=h('div[w_id="'+A+'"] iframe');z.attr("src",z.attr("src"))},createmenu:function(z){return m(this[0],z.data,z.opt||{})},createwindow:function(z){return d(this[0],z)},refresh:function(z){g(this[0],z)},closeall:function(){h.each(n,function(){this.window("close")});n={}}};h.fn.app.parseOptions=function(){};h.fn.app.defaults={taskBlankPos:"south",iconSize:32,dbClick:true,dateFmt:"yyyy年MM月dd日 <br/> hh:mm:ss",wallpaper:null,otherStartMenus:null,onTaskBlankContextMenu:function(A,z){},onWallContextMenu:function(z){},onAppContextMenu:function(A,z){},onBeforeOpenApp:function(z){},onLoaded:function(){},onOpenApp:function(){},onClosedApp:function(){},onStartMenuClick:function(z){},iframeOpen:false,loadUrl:{app:ctxStatic+"/js/jquery/easyui-1.4/extend/app/apps.json",startMenu:ctxStatic+"/js/jquery/easyui-1.4/extend/app/startMenu.json",widget:ctxStatic+"/js/jquery/easyui-1.4/extend/app/widget.json"},lang:{initLayout:"初始化布局",initTaskBlank:"初始化任务栏",initDeskTop:"初始化桌面",initStartMenu:"初始化开始菜单",initCalendar:"初始化日期",initWidget:"初始化应用",progress:{title:"请稍候",msg:"正在加载中...."}}};h.parser.plugins.push("app")})(jQuery);