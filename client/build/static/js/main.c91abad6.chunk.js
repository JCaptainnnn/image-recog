(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(44),s=a.n(c),o=(a(53),a(4)),i=a(5),l=a(7),u=a(6),m=a(8),p=a(13),b=a(18),h=a(21),d=a(3),f=a.n(d),g=a(12),v=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.boxArea.map((function(e,t){return n.a.createElement("div",{className:"bounding-box",key:t,style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})}));return n.a.createElement("div",{className:"center ma container"},n.a.createElement("div",{className:"absolute mt4"},n.a.createElement("img",{alt:"",id:"input-image",src:this.props.imageUrl,width:"500px",height:"auto"}),e))}}]),t}(r.Component)),y=(a(56),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isImageHistory:!1},a.setNavbar=function(){a.setState({isImageHistory:a.props.isImageHistory})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setNavbar()}},{key:"render",value:function(){return n.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},this.state.isImageHistory?n.a.createElement(p.b,{to:"/dashboard/".concat(this.props.currentUser),className:"f3 link dim black underline pa3 pointer"}," Dashboard "):n.a.createElement(p.b,{to:"/dashboard/history/".concat(this.props.currentUser),className:"f3 link dim black underline pa3 pointer"}," Image History "),n.a.createElement(p.b,{to:"/",className:"f3 link dim black underline pa3 pointer"}," Sign Out "))}}]),t}(r.Component)),w=a(2),O=a.n(w);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var E=a(40),k=new E.App({apiKey:"39944fa1347a4b2bbd081ffed001395f"}),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={currentUserId:a.props.match.params.id,currentUsername:"",input:"",imageUrl:"",displayBox:[],date:new Date},a.setUser=Object(g.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/getuser/".concat(a.props.match.params.id));case 2:t=e.sent,r={currentUserId:t.data._id,currentUsername:t.data.username},a.setState(r);case 5:case"end":return e.stop()}}),e)}))),a.calculateFaceLocation=function(e){var t=document.getElementById("input-image"),a=Number(t.width),r=Number(t.height);return{leftCol:e.left_col*a*.985,topRow:e.top_row*r*.985,rightCol:.985*(a-e.right_col*a),bottomRow:.985*(r-e.bottom_row*r)}},a.displayFaceBox=function(e){a.setState({displayBox:e}),console.log(a.state.displayBox)},a.onTextChange=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state);t[e.target.name]=e.target.value,a.setState(t)},a.onButtonClick=function(){var e=Object(g.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=[],a.setState({imageUrl:a.state.input},Object(g.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("click"),e.next=3,k.models.predict(E.FACE_DETECT_MODEL,a.state.imageUrl);case 3:t=e.sent,console.log(t.outputs[0].data.regions),t.outputs[0].data.regions.forEach((function(e){return r.push(a.calculateFaceLocation(e.region_info.bounding_box))})),console.log(r),a.displayFaceBox(r),n={imageUrl:a.state.imageUrl,inputAt:a.state.date,inputById:a.state.currentUserId,inputByName:a.state.currentUsername},console.log(n);case 10:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setUser()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(y,{currentUser:this.props.match.params.id}),n.a.createElement("p",{className:"f3"},"This will detect faces in your pictures."),n.a.createElement("div",{className:"image-recognizer"},n.a.createElement("form",{className:"form"},n.a.createElement("input",{className:"f4 w-70 center",type:"text",placeholder:"Image URL",name:"input",onChange:this.onTextChange,value:this.state.url}),n.a.createElement("input",{className:"w-30 grow f4 link ph2 pv1 dib white bg-light-blue",type:"submit",value:"Recognize",onClick:this.onButtonClick}))),this.state.imageUrl?n.a.createElement(v,{imageUrl:this.state.imageUrl,boxArea:this.state.displayBox}):null)}}]),t}(r.Component);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={currentUserId:"",username:"",password:"",loggedIn:!1,loginAttemptDate:new Date},a.currentDashboard="/dashboard/".concat(a.state.currentUserId),a.onTextChange=function(e){var t=U({},a.state);t[e.target.name]=e.target.value,a.setState(t)},a.renderRedirect=function(){if(a.state.loggedIn)return n.a.createElement(b.a,{to:a.currentDashboard})},a.verifyData=function(){var e=Object(g.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=U({},a.state),e.next=4,O.a.post("/verify",r);case 4:"error"!==(n=e.sent).data?a.setState({currentUserId:n.data._id},(function(){a.currentDashboard="/dashboard/".concat(a.state.currentUserId),console.log(a.currentDashboard),a.setState({loggedIn:!0})})):alert("Username/Password Incorrect");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"flex center h-100"},this.renderRedirect(),n.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},n.a.createElement("main",{className:"pa4 black-80"},n.a.createElement("form",{className:"ba b--transparent ph0 mh0s"},n.a.createElement("label",{className:"db fw6 lh-copy f6 mt3",placeholder:"Username"},"Username"),n.a.createElement("input",{className:"b input-reset ba bg-transparent hover-bg-black hover-white w-100",name:"username",type:"string",required:!0,onChange:this.onTextChange,value:this.state.username}),n.a.createElement("label",{className:"db fw6 lh-copy f6 mt3",placeholder:"Password"},"Password"),n.a.createElement("input",{className:"b input-reset ba bg-transparent hover-bg-black hover-white w-100",name:"password",type:"password",required:!0,onChange:this.onTextChange,value:this.state.password}),n.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt3",type:"submit",onClick:this.verifyData,value:"Login"})),n.a.createElement(p.b,{to:"/register",className:"f6 link dim black db mt3"},"Sign up"),n.a.createElement(p.b,{to:"",className:"f6 link dim black db mt3"},"Forgot your password?"))))}}]),t}(r.Component);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={username:"",password:"",email:"",createdAt:new Date},a.onTextChange=function(e){var t=D({},a.state);console.log("".concat(e.target.name,": ").concat(e.target.value)),t[e.target.name]=e.target.value,a.setState(t)},a.createAccount=function(){var e=Object(g.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("click"),r=D({},a.state),e.next=5,O.a.post("/register",r);case 5:alert("".concat(a.state.email," registered!"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"flex center"},n.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},n.a.createElement("main",{className:"pa4 black-80"},n.a.createElement("form",{className:"ba b--transparent ph0 mh0s"},n.a.createElement("label",{className:"db fw6 lh-copy f6 mt3",htmlFor:"username",placeholder:"Username"},"Username"),n.a.createElement("input",{className:"b input-reset ba bg-transparent hover-bg-black hover-white w-100",name:"username",type:"string",required:!0,onChange:this.onTextChange,value:this.state.username}),n.a.createElement("label",{className:"db fw6 lh-copy f6 mt3",htmlFor:"email",placeholder:"Email"},"Email"),n.a.createElement("input",{className:"b input-reset ba bg-transparent hover-bg-black hover-white w-100",name:"email",type:"string",required:!0,onChange:this.onTextChange,value:this.state.email}),n.a.createElement("label",{className:"db fw6 lh-copy f6 mt3",htmlFor:"password",placeholder:"Password"},"Password"),n.a.createElement("input",{className:"b input-reset ba bg-transparent hover-bg-black hover-white w-100",name:"password",type:"password",required:!0,onChange:this.onTextChange,value:this.state.password}),n.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt3",type:"submit",onClick:this.createAccount,value:"Register"})),n.a.createElement(p.b,{to:"/",className:"f6 link dim black db mt3"},"Back to login"))))}}]),t}(r.Component),A=(new(a(40).App)({apiKey:"39944fa1347a4b2bbd081ffed001395f"}),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={currentUserId:a.props.match.params.id,currentUsername:"",allImages:[],isImageHistory:!0},a.setUser=Object(g.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/getuser/".concat(a.props.match.params.id));case 2:t=e.sent,r={currentUserId:t.data._id,currentUsername:t.data.username},a.setState(r);case 5:case"end":return e.stop()}}),e)}))),a.getAllImages=Object(g.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.state.allImages),t=[],console.log(t instanceof Array),e.next=5,O.a.get("/imagehistory/".concat(a.props.match.params.id));case 5:r=e.sent,console.log(r.data instanceof Array),r.data.forEach((function(e){t.push(e)})),a.setState({allImages:t}),console.log(a.state.allImages[0].imageUrl);case 10:case"end":return e.stop()}}),e)}))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setUser(),console.log(this.state.currentUserId),this.getAllImages()}},{key:"render",value:function(){this.state.allImages.map((function(e,t){return console.log(e),n.a.createElement("div",{className:"absolute mt4"},n.a.createElement("img",{src:e.imageUrl}))}));return n.a.createElement("div",null,n.a.createElement(y,{currentUser:this.props.match.params.id,isImageHistory:this.state.isImageHistory}),n.a.createElement("p",{className:"f3"},"Image History by Date"),(this.state.allImages,null))}}]),t}(r.Component)),S=(a(98),a(99),a(47)),B=a.n(S),_={particles:{number:{value:30,density:{enable:!0,value_area:800}},line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:5}},interactivity:{onhover:{enable:!1,mode:"repulse"}}}},T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(B.a,{params:_,className:"particles"}),n.a.createElement(p.a,null,n.a.createElement(b.d,null,n.a.createElement(b.b,{exact:!0,path:"/",component:C}),n.a.createElement(b.b,{path:"/register",component:P}),n.a.createElement(b.b,{path:"/dashboard/history/:id/",component:A}),n.a.createElement(b.b,{path:"/dashboard/:id",component:N}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,a){e.exports=a(100)},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},98:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.c91abad6.chunk.js.map