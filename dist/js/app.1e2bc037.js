(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-045461ea":"6dc4cc0f","chunk-2d0f1194":"d54b8d79","chunk-2d20f358":"6ce7cefe","chunk-4b1caaa2":"7ce238c5","chunk-499d8995":"d880ae0d","chunk-08fd9164":"614d921a","chunk-360cb930":"4bf1c652","chunk-efc0d03c":"50835b0a","chunk-53d57b14":"dde13cf3","chunk-f3294738":"c2586d66"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-045461ea":1,"chunk-4b1caaa2":1,"chunk-499d8995":1,"chunk-08fd9164":1,"chunk-360cb930":1,"chunk-efc0d03c":1,"chunk-53d57b14":1,"chunk-f3294738":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-045461ea":"9540a644","chunk-2d0f1194":"31d6cfe0","chunk-2d20f358":"31d6cfe0","chunk-4b1caaa2":"89304232","chunk-499d8995":"133fd1df","chunk-08fd9164":"d17bf80f","chunk-360cb930":"85795038","chunk-efc0d03c":"ba419b3c","chunk-53d57b14":"30210c18","chunk-f3294738":"ce05c6b7"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"031c":function(e,t,n){},16541:function(e,t,n){},2135:function(e,t,n){"use strict";var r="wenshu-sys";t["a"]={APP_NAME:r}},"2d8e":function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"h",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"j",function(){return s}),n.d(t,"k",function(){return l}),n.d(t,"c",function(){return d}),n.d(t,"i",function(){return f}),n.d(t,"f",function(){return h}),n.d(t,"a",function(){return m}),n.d(t,"b",function(){return p});var r=n("a27e"),o=r["a"].ajax();function a(e){return o({url:"/court/login/login.jhtml",method:"get",params:e})}function i(e){return o({url:"/court/login/optionRole.jhtml",method:"get",params:e})}function c(){return o({url:"/court/login/getUserInfo.jhtml",method:"get"})}function u(){return o({url:"/court/login/getMenuList.jhtml",method:"get"})}function s(e){var t=e;return o({url:"/court/register/sendPhoneCode.jhtml",method:"get",params:t})}function l(e){var t=e;return o({url:"/court/register/sendPhoneCodefindPw.jhtml",method:"get",params:t})}function d(e){var t=e;return o({url:"/court/login/forgetPassword.jhtml",method:"get",params:t})}function f(e){var t=e;return o({url:"/court/register/registerByPerson.jhtml",method:"post",params:t})}function h(e){var t=e;return o({url:"/court/register/registerByGroup.jhtml",method:"post",params:t})}function m(e){var t=e;return o({url:"/court/register/registerByJudge.jhtml",method:"post",params:t})}function p(){return o({url:"/court/register/positionList.jhtml",method:"post"})}},"37c7":function(e,t,n){},"37de":function(e,t,n){"use strict";var r=n("031c"),o=n.n(r);o.a},"3b89":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-header",{attrs:{id:"header"}},[r("div",{staticClass:"logo-name"},[r("img",{attrs:{src:n("cf05"),height:"100%"}}),r("div",{staticClass:"logo-title"},[r("div",{staticClass:"title"},[e._v("文书诉讼系统")])])]),r("span",{staticClass:"hideAside"},[r("i",{class:[e.getsidebar.opened?"el-icon-s-unfold":"el-icon-s-fold","icon"],on:{click:e.toggleSideBar}})]),r("ul",{staticClass:"personal"},[r("full-screen"),r("li",[e._v(e._s(e.$store.getters.getUserInfo.roleName))]),r("li",[r("el-dropdown",[r("span",{staticClass:"el-dropdown-link"},[e._v("\n            "+e._s(e.$store.getters.getUserInfo.name)+"\n            "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("router-link",{attrs:{to:"/"}},[r("el-dropdown-item",[e._v("Home")])],1),r("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1),r("li",{staticClass:"icon"},[r("Icon",{staticStyle:{"font-size":"34px"},attrs:{type:"ios-contact-outline"}})],1)],1)])],1)},o=[],a=n("cebc"),i=(n("96cf"),n("3b8d")),c=n("f499"),u=n.n(c),s=n("2f62"),l=n("b893"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("li",{directives:[{name:"show",rawName:"v-show",value:e.isFullscreenData,expression:"isFullscreenData"}],staticClass:"fullScreen",on:{click:e.fullClick}},[n("el-tooltip",{attrs:{effect:"dark",content:e.isfullScreen?"退出全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"fa fa-arrows-alt fa-lg"})])],1)])},f=[],h={name:"fullScreen",data:function(){return{isfullScreen:!1,isFullscreenData:!0,prefixName:""}},mounted:function(){this.isFullscreen()},methods:{fullClick:function(){this.isfullScreen?this.exitFullscreen():this.fullScreen()},fullScreen:function(){var e=document.documentElement,t=""===this.prefixName?"requestFullscreen":"".concat(this.prefixName,"RequestFullScreen");e[t]()},exitFullscreen:function(){var e=""===this.prefixName?"exitFullscreen":"".concat(this.prefixName,"ExitFullscreen");document[e]()},screenChange:function(){var e=this;if(this.isFullscreenData){var t="on".concat(this.prefixName,"fullscreenchange");document[t]=function(t){e.isElementFullScreen()?(console.log("进入全屏"),e.isfullScreen=!0):(console.log("离开全屏"),e.isfullScreen=!1)}}},isFullscreen:function(){var e;document.fullscreenEnabled?e=document.fullscreenEnabled:document.webkitFullscreenEnabled?(e=document.webkitFullscreenEnabled,this.prefixName="webkit"):document.mozFullScreenEnabled?(e=document.mozFullScreenEnabled,this.prefixName="moz"):document.msFullscreenEnabled&&(e=document.msFullscreenEnabled,this.prefixName="ms"),e?this.screenChange():this.isFullscreenData=!1},isElementFullScreen:function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;return null!==e}}},m=h,p=(n("f7f0"),n("0c7c")),b=Object(p["a"])(m,d,f,!1,null,null,null),g=b.exports,v={components:{fullScreen:g},data:function(){return{}},mounted:function(){Object(l["a"])()||this.toggleSideBar()},methods:{toggleSideBar:function(){console.log("this.$store.getters.getaddRouters",u()(this.$store.getters.getaddRouters)),this.$store.dispatch("ToggleSideBar")},logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LogOut");case 2:this.$router.push("/login");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fullscreenChange:function(){}},computed:Object(a["a"])({},Object(s["b"])(["getsidebar"]))},k=v,x=(n("5ea5"),Object(p["a"])(k,r,o,!1,null,null,null));t["default"]=x.exports},4360:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("2f62"),a=n("f499"),i=n.n(a),c=n("cebc"),u=n("795b"),s=n.n(u),l=n("d225"),d=n("b0b4"),f=n("a27e"),h=f["a"].ajaxmock(),m=function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,[{key:"login",value:function(e,t){return new s.a(function(n,r){return h.post("/user/login",{username:e,password:t}).then(function(e){n(e)}).catch(function(e){r(e)})})}},{key:"getInfo",value:function(e){return new s.a(function(t,n){return h({url:"/user/getInfo",method:"get",params:{token:e}}).then(function(e){t(e)}).catch(function(e){n(e)})})}},{key:"logout",value:function(e){return new s.a(function(e,t){return h({url:"/user/logout",method:"post"}).then(function(t){e(t)}).catch(function(e){t(e)})})}}]),e}(),p=new m,b=n("2d8e"),g=n("a18c"),v=n("2135"),k=v["a"].APP_NAME,x=k+"-userRoles",w=k+"-userInfo",S={state:{roles:localStorage.getItem(x)?JSON.parse(localStorage.getItem(x)):[],userInfo:localStorage.getItem(w)?JSON.parse(localStorage.getItem(w)):""},mutations:{SET_ROLES:function(e,t){e.roles=t},SET_USERINFO:function(e,t){e.userInfo=t}},getters:{getRoles:function(e){return e.roles},getUserInfo:function(e){return e.userInfo}},actions:{Login:function(e,t){e.commit,e.state;return t.username=t.username.trim(),new s.a(function(e,n){Object(b["g"])(Object(c["a"])({},t)).then(function(t){e(t)})})},SetOptionRole:function(e,t){e.commit,e.state;return new s.a(function(e,n){Object(b["h"])(t).then(function(t){e(t)})})},GetInfo:function(e){var t=e.commit;e.state;return new s.a(function(e,n){Object(b["e"])().then(function(n){if(100==n.state){var r=n.data;localStorage.setItem(w,i()(r)),t("SET_USERINFO",r)}e(n)})})},LogOut:function(e){var t=e.commit,n=e.state;return new s.a(function(e,r){p.logout(n.token).then(function(){t("SET_ROLES",""),t("SET_USERINFO",""),localStorage.removeItem(x),localStorage.removeItem(w),t("CLEAR_ADDROUTERS",[]),t("removeAllTab"),Object(g["e"])(),e()}).catch(function(e){r(e)})})}}},O=S,E=(n("6762"),n("2fdb"),n("a745")),y=n.n(E),T=(n("ac6a"),n("75fc")),j={state:{routers:Object(c["a"])({},g["a"]),addRouters:[],btnPermissions:[]},getters:{getaddRouters:function(e){return e.addRouters},getrouters:function(e){return e.routers},getBtnPermissions:function(e){return e.btnPermissions}},mutations:{SET_ROUTERS:function(e,t){var n=t.accessedRouters,r=t.role,o=_(g["a"],r),a=_(g["d"],r),i=_(g["c"],r);e.addRouters=[].concat(Object(T["a"])(n),Object(T["a"])(a),Object(T["a"])(i)),e.routers=[].concat(Object(T["a"])(o),Object(T["a"])(e.addRouters))},SET_BTN_Permission:function(e,t){e.btnPermissions=t},CLEAR_ADDROUTERS:function(e){e.addRouters=[]}},actions:{GenerateRoutes:function(e,t){var n=e.state,r=e.commit;return new s.a(function(e){var o=t.role;Object(b["d"])().then(function(t){var a=P(t.data.menuList),i=_(a,o);r("SET_ROUTERS",{accessedRouters:i,role:o}),r("SET_BTN_Permission",t.data.btnPermission);var c=n.addRouters;console.log("过滤后的动态路由，注入",c),g["b"].addRoutes(c),console.log("所有生效的路由：",g["b"].options.routes),e()})})}}};function _(e,t){var n=[];return e.forEach(function(e){var r=e;B(t,r)&&(r.hasOwnProperty("hidden")?r.hidden&&y()(r.hidden)&&(r.hidden=!!r.hidden.includes(t)):r.hidden=!0,r.hasOwnProperty("alone")||(r.alone=!1),r.hasOwnProperty("meta")||(r.meta={}),n.push(r),r.hasOwnProperty("children")&&r.children.length>0&&(r.children=_(r.children,t)))}),n}function B(e,t){return!(t.meta&&t.meta.role&&t.meta.role.length>0)||t.meta.role.includes(e)}function P(e){return e.forEach(function(e,t){e.component=F(e.component),e.children&&e.children.length>0?P(e.children):delete e.children}),e}function F(e){return function(t){Promise.all([n.e("chunk-045461ea"),n.e("chunk-4b1caaa2"),n.e("chunk-499d8995")]).then(function(r){t(n("feca")("./"+e+".vue"))}.bind(null,n)).catch(n.oe)}}var I=j,R=(n("20d6"),{state:{sidebar:{opened:!0,withoutAnimation:!1},rightNav:{},tabnavBox:[{title:"主页",path:"/home/index"}]},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!0},openMenu:function(e,t){e.rightNav=t},addTab:function(e,t){for(var n=0;n<e.tabnavBox.length;n++)if(e.tabnavBox[n].path===t.path)return!1;e.tabnavBox.push({title:t.title,path:t.path}),this.commit("setLocalStorage",e.tabnavBox)},removeTab:function(e,t){var n=e.tabnavBox.findIndex(function(e,n){return e.path===t.tabItem.path});if(e.tabnavBox.splice(n,1),this.commit("setLocalStorage",e.tabnavBox),t.tabItem.path===t.fullPath){var r=e.tabnavBox[n]||e.tabnavBox[n-1];t.router.push(r.path)}},removeOtherTab:function(e,t){if(e.tabnavBox=[{title:"主页",path:"/home/index"}],t.all)return t.router.push("/home/index"),this.commit("setLocalStorage",e.tabnavBox),!1;e.tabnavBox.push(t.tabItem),this.commit("setLocalStorage",e.tabnavBox),t.router.push(t.tabItem.path)},removeAllTab:function(e,t){this.commit("removeOtherTab",{all:!0,router:g["b"]})},setLocalStorage:function(e,t){window.localStorage.setItem("tabnavBox",i()(t))}},getters:{getsidebar:function(e){return e.sidebar},rightNav:function(e){return e.rightNav},tabnavBox:function(e){return window.localStorage.getItem("tabnavBox")&&(e.tabnavBox=JSON.parse(window.localStorage.getItem("tabnavBox"))),e.tabnavBox}},actions:{ToggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")},addTab:function(e,t){var n=e.commit;n("addTab",t)},openMenu:function(e,t){var n=e.commit;n("openMenu",t)},removeTab:function(e,t){var n=e.commit;n("removeTab",t)},removeOtherTab:function(e,t){var n=e.commit;n("removeOtherTab",t)}}}),C=R;r["default"].use(o["a"]);t["a"]=new o["a"].Store({modules:{user:O,router:I,app:C}})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("0c7c")),c={},u=Object(i["a"])(c,o,a,!1,null,null,null),s=u.exports,l=n("a18c"),d=n("4360"),f=n("5c96"),h=n.n(f),m=(n("0fae"),n("be35"),n("7f10"),n("f825")),p=n.n(m),b=(n("f8ce"),n("f5df"),n("b20f"),n("ac6a"),n("cebc")),g=(n("96cf"),n("3b8d")),v=["/login","/loginAdmin","/register","/resetPwd"];l["b"].beforeEach(function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("路由拦截",t.path),!(d["a"].getters.getRoles.length>0)){e.next=25;break}if(console.log("已登录，有角色身份"),"/login"!==t.path&&"/loginAdmin"!==t.path){e.next=8;break}console.log("有角色身份 , 将要去登录页,强制转到后台首页"),r({path:"/"}),e.next=23;break;case 8:if(console.log("有角色身份 , 不是去登录页,"),0!=d["a"].getters.getaddRouters.length){e.next=21;break}return console.log("有角色身份，动态路由未注入过，更新获取用户信息，并获取该用户路由菜单信息，添加动态路由后再跳转访问的路由"),e.next=13,d["a"].dispatch("GetInfo");case 13:return o=d["a"].getters.getUserInfo.roleType,console.log("当前角色",o),console.log("用户信息获取成功，正在获取菜单路由信息..."),e.next=18,d["a"].dispatch("GenerateRoutes",{role:o});case 18:r(Object(b["a"])({},t,{replace:!0})),e.next=23;break;case 21:console.log("有角色身份，动态路由已经注入过，不需要拉取用户信息直接让访问的路由通过"),r();case 23:e.next=27;break;case 25:console.log("无角色身份"),-1!==v.indexOf(t.path)?(console.log("在免登录白名单，直接进入"),r()):(console.log("不在免登录白名单，跳转登录页"),r("/login"));case 27:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()),r["default"].directive("permission",{bind:function(e,t){var n=t.value,o=d["a"].getters.getBtnPermissions,a=!1,i={};o.forEach(function(e,t){e.perms===n&&(a=!0,i=e)}),console.log("nowBtnInfo",i),r["default"].nextTick(function(){if(a){if(i.insert){e.lastChild.innerText=i.title;var t=document.createElement("i");t.className=i.icon,e.insertBefore(t,e.lastChild)}return!0}return e.parentNode.removeChild(e),!1})}});var k=n("96eb"),x=n.n(k);n("a481"),n("28a5");function w(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}var S={admin:{pas:"admin",token:"admin-token"},editor:{pas:"editor",token:"editor-token"},reader:{pas:"reader",token:"reader-token"}},O={"admin-token":{roles:"0",introduction:"I am a super administrator",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"超级管理员"},"editor-token":{roles:"1",introduction:"I am an editor",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"工作人员"},"reader-token":{roles:"2",introduction:"I am an reader",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",rolename:"普通用户"}},E={login:function(e){var t=JSON.parse(e.body),n=t.username,r=t.password;if(n in S&&S[n].pas==r){var o=S[n].token;return{state:100,result:o}}return{state:90001,message:"账户或密码错误."}},getInfo:function(e){var t=w(e.url),n=t.token,r=O[n];return r?{state:100,result:r}:{state:50008,message:"登陆失败，无法获取用户信息"}},logout:function(){return{state:100,data:"success"}}};x.a.mock("/user/login","post",E.login),x.a.mock(/\/user\/getInfo\.*/,"get",E.getInfo),x.a.mock("/user/logout","post",E.logout);x.a;r["default"].use(h.a),r["default"].use(p.a),r["default"].config.productionTip=!1,new r["default"]({router:l["b"],store:d["a"],render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("37c7"),o=n.n(r);o.a},"5ea5":function(e,t,n){"use strict";var r=n("7db1"),o=n.n(r);o.a},6331:function(e,t,n){"use strict";var r=n("e3bb"),o=n.n(r);o.a},"6ec6":function(e,t,n){"use strict";var r=n("f244"),o=n.n(r);o.a},7159:function(e,t,n){},"7db1":function(e,t,n){e.exports={menuText:"#409EFF",menuActiveText:"#409EFF",subMenuActiveText:"#409EFF",menuBg:"#fff",menuHover:"#5585c9",subMenuBg:"#fff",subMenuHover:"#5585c9",sideBarWidth:"210px"}},"84c8":function(e,t,n){"use strict";var r=n("b8d7"),o=n.n(r);o.a},8544:function(e,t,n){"use strict";var r=n("7159"),o=n.n(r);o.a},"85db":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{attrs:{"default-active":e.$route.path,mode:"vertical",router:"",collapse:e.isCollapse,"unique-opened":!1,"collapse-transition":!1}},[n("sidebar-item",{attrs:{menu:e.getrouters}})],1)],1)},o=[],a=n("cebc"),i=n("2f62"),c=n("f167"),u=n("cf1e"),s=n.n(u),l={components:{SidebarItem:c["default"]},computed:Object(a["a"])({},Object(i["b"])(["getrouters","getsidebar"]),{isCollapse:function(){return!this.getsidebar.opened},variables:function(){return s.a}}),watch:{$route:function(e){this.selectmenu(e)}},methods:{selectmenu:function(e){this.$store.dispatch("addTab",{title:e.meta&&e.meta.title?e.meta.title:"未设置标题",path:e.path})}}},d=l,f=(n("37de"),n("0c7c")),h=Object(f["a"])(d,r,o,!1,null,null,null);t["default"]=h.exports},"93f9":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:e.classObj},[n("my-header"),n("sidebar",{staticClass:"sidebar-container"}),n("div",{staticClass:"main-container"},[n("tabNav"),n("router-view",{staticClass:"viewStyle"})],1)],1)},o=[],a=n("cebc"),i=n("85db"),c=n("3b89"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tabnavBox"},[n("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.$store.getters.tabnavBox,function(t,r){return n("li",{key:t.title,staticClass:"tabnav",class:{active:e.$route.path===t.path},on:{contextmenu:function(n){return n.preventDefault(),e.openMenu(t,n,r)}}},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))]),0!==r?n("i",{staticClass:"el-icon-error",on:{click:function(n){return e.removeTab(t)}}}):e._e()],1)}),0)],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:this.rightMenuShow,expression:"this.rightMenuShow"}],staticClass:"menuBox",style:{left:this.left+"px",top:this.top+"px"}},[n("li",{on:{click:function(t){return e.removeTab(e.$store.getters.rightNav)}}},[n("i",{staticClass:"fa fa-remove"}),e._v("\n      关闭\n    ")]),n("li",{on:{click:function(t){return e.removeOtherTab(e.$store.getters.rightNav)}}},[e._v("关闭其他")]),n("li",{on:{click:e.removeAllTab}},[e._v("全部关闭")])])])},s=[],l={name:"tabNav",data:function(){return{rightMenuShow:!1,left:0,top:0}},methods:{openMenu:function(e,t,n){if(0===n)return!1;this.rightMenuShow=!0;var r=document.querySelectorAll("div[class='sidebar-container']")[0].clientWidth,o=document.querySelectorAll("header[class='el-header']")[0].clientHeight;this.left=t.clientX-r+10,this.top=t.clientY-o,this.$store.dispatch("openMenu",e)},removeTab:function(e){this.$store.dispatch("removeTab",{tabItem:e,fullPath:this.$route.fullPath,router:this.$router})},removeOtherTab:function(e){this.$store.dispatch("removeOtherTab",{tabItem:e,router:this.$router})},removeAllTab:function(){this.$store.dispatch("removeOtherTab",{all:!0,router:this.$router})}},watch:{rightMenuShow:function(e){var t=this;e?document.body.addEventListener("click",function(){t.rightMenuShow=!1}):document.body.removeEventListener("click",function(){t.rightMenuShow=!1})}}},d=l,f=(n("6ec6"),n("8544"),n("0c7c")),h=Object(f["a"])(d,u,s,!1,null,null,null),m=h.exports,p=n("2f62"),b={components:{sidebar:i["default"],MyHeader:c["default"],tabNav:m},computed:Object(a["a"])({},Object(p["b"])(["getsidebar"]),{classObj:function(){return{hideSidebar:!this.getsidebar.opened,openSidebar:this.getsidebar.opened}}}),methods:{}},g=b,v=(n("84c8"),Object(f["a"])(g,r,o,!1,null,null,null));t["default"]=v.exports},a18c:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return d});n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("8c4f"),a=n("93f9");r["default"].use(o["a"]);var i=[{path:"/",name:"default",redirect:"/home/index",component:a["default"]},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-045461ea"),n.e("chunk-2d0f1194")]).then(n.bind(null,"9ed6"))}},{path:"/loginAdmin",name:"loginAdmin",component:function(){return Promise.all([n.e("chunk-045461ea"),n.e("chunk-2d20f358")]).then(n.bind(null,"b33d"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-4b1caaa2"),n.e("chunk-efc0d03c")]).then(n.bind(null,"d5c2"))}},{path:"/resetPwd",name:"resetPwd",component:function(){return n.e("chunk-08fd9164").then(n.bind(null,"9e4a"))}}],c=[{path:"/adminMenu",name:"adminMenu",hidden:!1,alone:!1,component:a["default"],meta:{title:"本地路由配置演示",icon:"el-icon-menu"},children:[{path:"menu1",name:"menu1",hidden:!1,alone:!1,meta:{title:"本地菜单演示1",icon:"el-icon-menu",role:["法官","超级管理员"]},component:function(){return n.e("chunk-08fd9164").then(n.bind(null,"9e4a"))}},{path:"menu2",name:"menu2",hidden:!1,alone:!1,meta:{title:"本地菜单演示2",icon:"el-icon-menu",role:["庭长","超级管理员"]},component:function(){return Promise.all([n.e("chunk-4b1caaa2"),n.e("chunk-efc0d03c")]).then(n.bind(null,"d5c2"))}}]},{path:"/adminPage",name:"adminPage",component:a["default"],children:[{path:"page1",name:"page1",component:function(){return n.e("chunk-08fd9164").then(n.bind(null,"9e4a"))}},{path:"page2",name:"page2",component:function(){return Promise.all([n.e("chunk-4b1caaa2"),n.e("chunk-efc0d03c")]).then(n.bind(null,"d5c2"))}}]}],u=[{path:"/*",name:"error-404",meta:{title:"404-页面不存在"},component:function(){return n.e("chunk-53d57b14").then(n.bind(null,"1db4"))}},{path:"/403",name:"error-403",meta:{title:"403-权限不足"},component:function(){return n.e("chunk-360cb930").then(n.bind(null,"5140"))}},{path:"/500",name:"error-500",meta:{title:"500-服务端错误"},component:function(){return n.e("chunk-f3294738").then(n.bind(null,"721c"))}}],s=function(){return new o["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:[].concat(i)})},l=s();function d(){var e=s();l.matcher=e.matcher}t["b"]=l},a27e:function(e,t,n){"use strict";var r=n("795b"),o=n.n(r),a=n("bc3a"),i=n.n(a),c=n("5c96"),u=n("4360"),s={ajax:function(){var e=i.a.create({baseURL:"/api",timeout:18e5});return l(e),e},ajaxtest:function(){var e=i.a.create({baseURL:"http://47.106.104.175:38080",timeout:18e5});return l(e),e},ajaxmock:function(){var e=i.a.create({timeout:18e5});return l(e),e}},l=function(e){d(e),f(e)},d=function(e){e.interceptors.request.use(function(e){return console.log("添加请求拦截器",e),e},function(e){return o.a.reject(e)})},f=function(e){e.interceptors.response.use(function(e){var t=e.data;return console.log("添加响应拦截器",e),100!==t.state&&(Object(c["Message"])({type:"error",message:t.message,duration:3e3}),301===t.state&&u["a"].dispatch("LogOut")),t},function(e){return Object(c["Message"])({type:"error",message:"服务器请求无响应！请联系后端处理。错误信息："+e,duration:3e3}),o.a.reject(e)})};t["a"]=s},b20f:function(e,t,n){e.exports={menuText:"#409EFF",menuActiveText:"#409EFF",subMenuActiveText:"#409EFF",menuBg:"#fff",menuHover:"#5585c9",subMenuBg:"#fff",subMenuHover:"#5585c9",sideBarWidth:"210px"}},b893:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return c});var r=n("e814"),o=n.n(r);n("55dd");function a(e,t){return e.sort(function(e,n){return e[t]<n[t]?-1:e[t]==n[t]?0:1}),e}function i(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n}function c(e){var t=o()(e.substr(16,1))%2==1?"男":"女",n=e.substring(6,10)+"-"+e.substring(10,12)+"-"+e.substring(12,14),r={sex:t,birth:n};return r}},b8d7:function(e,t,n){e.exports={menuText:"#409EFF",menuActiveText:"#409EFF",subMenuActiveText:"#409EFF",menuBg:"#fff",menuHover:"#5585c9",subMenuBg:"#fff",subMenuHover:"#5585c9",sideBarWidth:"210px"}},be35:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.493e06d9.png"},cf1e:function(e,t,n){e.exports={menuText:"#409EFF",menuActiveText:"#409EFF",subMenuActiveText:"#409EFF",menuBg:"#fff",menuHover:"#5585c9",subMenuBg:"#fff",subMenuHover:"#5585c9",sideBarWidth:"210px"}},e3bb:function(e,t,n){},f167:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.menu,function(t,r){return[t.children||t.hidden?e._e():n("el-menu-item",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("i",{class:t.meta.hasOwnProperty("icon")?t.meta.icon:""}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(t.meta.hasOwnProperty("title")?t.meta.title:t.path+"未设置菜单名称")+"\n      ")])]),t.children&&1===t.children.length&&!t.hidden&&t.alone?n("el-menu-item",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path+"/"+t.children[0].path:t.path+"/"+t.children[0].path}},[n("i",{class:t.children[0].meta.hasOwnProperty("icon")?t.children[0].meta.icon:""}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(t.children[0].meta.hasOwnProperty("title")?t.children[0].meta.title:t.children[0].path+"未设置菜单名称")+"\n      ")])]):e._e(),t.children&&!t.hidden&&(t.children.length>1||1===t.children.length&&!t.alone&&"undefined"!==typeof t.children[0])?n("el-submenu",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("template",{slot:"title"},[n("i",{class:t.meta.hasOwnProperty("icon")?t.meta.icon:""}),n("span",[e._v("\n          "+e._s(t.meta.hasOwnProperty("title")?t.meta.title:t.path+"未设置菜单名称")+"\n        ")])]),n("sidebar-item",{attrs:{menu:t.children,parent:e.parent?e.parent+"/"+t.path:t.path}})],2):e._e()]})],2)},o=[],a={name:"SidebarItem",props:["menu","parent"],data:function(){return{}}},i=a,c=(n("6331"),n("0c7c")),u=Object(c["a"])(i,r,o,!1,null,"1850b066",null);t["default"]=u.exports},f244:function(e,t,n){},f7f0:function(e,t,n){"use strict";var r=n("16541"),o=n.n(r);o.a}});