(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),i=a.n(r),c=a(17),o=a.n(c),l=a(28),u=a(2),p=a(3),h=a(5),m=a(4),d=a(6),g=a(69),v=a(70),E=a(71),f=a(68),b=a(11),j=a.n(b),y={getPaths:function(){return j.a.get("/api/paths")},getSubjects:function(e){return j.a.get("/api/paths/".concat(e))},getResources:function(e,t){return j.a.get("/api/paths/".concat(e,"/subjects/").concat(t))},submitReview:function(e,t){return j.a.post("/api/review/".concat(e,"/").concat(t))},getReviews:function(e){return j.a.get("/api/review/".concat(e))}},w=a(66),O=(a(57),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={id:a.props.path.id,name:a.props.path.name,link:a.props.path.link,image:a.props.path.image,description:a.props.path.description,innerLink:a.props.innerLink,descriptionsDisplayed:!0},a.toggleDescriptions=function(){!1===a.state.descriptionsDisplayed?a.setState({descriptionsDisplayed:!0}):a.setState({descriptionsDisplayed:!1})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"PathContainer"},s.a.createElement("div",{key:this.state.id},s.a.createElement("div",{className:"PathCardImg"},s.a.createElement("img",{src:this.state.image,alt:this.state.name})),s.a.createElement("div",{className:"PathCardOverlay"},s.a.createElement(w.a,{className:"PathCardLink",to:"/paths/"+this.state.id},this.state.name)),s.a.createElement("p",{className:"PathCardName"},this.state.name," "),s.a.createElement("p",{className:"PathCardButton"},s.a.createElement("button",{className:"DescriptionButton",onClick:this.toggleDescriptions},this.state.descriptionsDisplayed?"Overview":"Hide")),!!this.state.descriptionsDisplayed||s.a.createElement("p",{className:"PathCardDesc"},s.a.createElement("hr",null)," ",this.state.description," ",s.a.createElement("hr",null))))}}]),t}(n.Component)),C={PathHeader:{textAlign:"center"}},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={paths:[],user:a.props.user},a.loadPaths=function(){y.getPaths().then(function(e){return a.setState({paths:e.data})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log("USERNAME IN PATHS",this.state.user.name),console.log("USEREMAIL IN PATHS",this.state.user.email),this.loadPaths()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{style:C.PathHeader,className:"PathHeader"},s.a.createElement("h3",{style:{padding:50}},"Pick a path to get started!")),this.state.paths.map(function(e){return s.a.createElement(O,{path:e})}))}}]),t}(n.Component),k=(a(60),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={id:a.props.subject.id,name:a.props.subject.name,link:a.props.subject.link,image:a.props.subject.image,description:a.props.subject.description,innerLink:a.props.innerLink,descriptionsDisplayed:!0},a.toggleDescriptions=function(){!1===a.state.descriptionsDisplayed?a.setState({descriptionsDisplayed:!0}):a.setState({descriptionsDisplayed:!1})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"SubjectContainer"},s.a.createElement("div",{key:this.state.id},s.a.createElement("div",{className:"SubjectCardImg"},s.a.createElement("img",{className:"SubjectCardImg",src:this.state.image,alt:this.state.name})),s.a.createElement("div",{className:"SubjectCardOverlay"},s.a.createElement("div",{className:"text"},s.a.createElement("a",{href:"".concat(this.state.link,"/subjects/").concat(this.state.id)},this.state.name))),s.a.createElement("p",{className:"SubjectCardName"},s.a.createElement("button",{className:"DescriptionButton",onClick:this.toggleDescriptions},this.state.descriptionsDisplayed?"Overview":"Hide")),!!this.state.descriptionsDisplayed||s.a.createElement("p",{className:"SubjectCardDesc"},s.a.createElement("hr",null),this.state.description)))}}]),t}(n.Component)),N={SubjectHeader:{textAlign:"center"}},D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={subjects:[],user:a.props.user},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("USERNAME IN SUBJECTS",this.state.user.name),console.log("USEREMAIL IN SUBJECTS",this.state.user.email),y.getSubjects(this.props.match.params.pathid).then(function(t){return e.setState({subjects:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"SubjectHeader",style:N.SubjectHeader},s.a.createElement("h3",{style:{padding:50}},"Click on any technology to find the best online courses")),this.state.subjects.map(function(t){return s.a.createElement(k,{subject:t,link:"/paths/".concat(e.props.match.params.pathid)})}))}}]),t}(n.Component);a(25);var R=function(e){return s.a.createElement("div",null,s.a.createElement("p",null,"Review #",e.review.id,": ",e.review.reviewContent))};var I=function(e){return s.a.createElement("form",{className:"review"},s.a.createElement("label",{htmlFor:"reviewfield"},"Review:"),s.a.createElement("input",{value:e.reviewContent,onChange:e.handleInputChange,name:"reviewfield",type:"text",className:"form-control",placeholder:"Add your review here",id:"review"}),s.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Submit Review"))},A=(a(26),function(e){var t=e.handleClose,a=e.show,n=e.children,r=a?"modal display-block":"modal display-none";return s.a.createElement("div",{className:r},s.a.createElement("section",{className:"modal-main"},n,s.a.createElement("button",{onClick:t},"close")))}),L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={id:a.props.resource.id,name:a.props.resource.name,link:a.props.resource.link,image:a.props.resource.image,description:a.props.resource.description,reviewContent:"",reviews:[],error:"",innerLink:a.props.innerLink,reviewsDisplayed:!0,descriptionsDisplayed:!0,show:!1},a.showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.loadReviews=function(e){y.getReviews(e).then(function(e){return a.setState({reviews:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){a.setState({reviewContent:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),y.submitReview(a.state.id,a.state.reviewContent).then(function(e){if("error"===e.data.status)throw new Error(e.data.message);a.loadReviews(a.state.id)}).catch(function(e){return a.setState({error:e.message})})},a.toggleReviews=function(){!1===a.state.reviewsDisplayed?a.setState({reviewsDisplayed:!0}):a.setState({reviewsDisplayed:!1})},a.toggleDescriptions=function(){!1===a.state.descriptionsDisplayed?a.setState({descriptionsDisplayed:!0}):a.setState({descriptionsDisplayed:!1})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadReviews(this.state.id)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"ResourceContainer"},s.a.createElement("div",{key:this.state.id},s.a.createElement("div",{className:"ResourceCardImg"},s.a.createElement("img",{className:"ResourceCardImg",src:this.state.image,alt:this.state.name})),s.a.createElement("div",{className:"ResourceCardOverlay"},s.a.createElement("div",{className:"text"},s.a.createElement("a",{href:this.state.link},this.state.name))),s.a.createElement("p",{className:"ResourceCardName"},s.a.createElement("button",{className:"DescriptionButton",onClick:this.toggleDescriptions},this.state.descriptionsDisplayed?"Overview":"Hide")),!!this.state.descriptionsDisplayed||s.a.createElement("p",{className:"ResourceCardDesc"},s.a.createElement("hr",null),this.state.description," ",s.a.createElement("hr",null),s.a.createElement("button",{type:"button",className:"DescriptionButton",onClick:this.showModal},"Reviews")))),s.a.createElement(A,{show:this.state.show,handleClose:this.hideModal},this.state.reviews.map(function(e){return s.a.createElement(R,{review:e})}),s.a.createElement(I,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,reviewContent:this.state.reviewContent})))}}]),t}(n.Component),P={ResourceHeader:{textAlign:"center",padding:20,paddingBottom:40}},M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={resources:[],user:a.props.user},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("USERNAME IN RESOURCES",this.state.user.name),console.log("USEREMAIL IN RESOURCES",this.state.user.email),y.getResources(this.props.match.params.pathid,this.props.match.params.subjectid).then(function(t){return e.setState({resources:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"ResourceHeader",style:P.ResourceHeader},s.a.createElement("h3",{style:{padding:50}},"Click any course to start mastering skills")),this.state.resources.map(function(t){return s.a.createElement(L,{resource:t,innerLink:"/paths/".concat(e.props.match.params.pathid,"/subjects/").concat(e.props.match.params.subjectid)})}))}}]),t}(n.Component),H=(a(61),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"landingPageContainer"},s.a.createElement("a",{href:"http://localhost:3001/auth/google",className:"buttonLanding"},s.a.createElement("span",{className:"svgIcon t-popup-svg"},s.a.createElement("svg",{className:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25"},s.a.createElement("g",{fill:"none",fillRule:"evenodd"},s.a.createElement("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),s.a.createElement("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),s.a.createElement("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),s.a.createElement("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})))),s.a.createElement("span",{className:"button-label"},"Sign in with Google")))}}]),t}(n.Component)),x=(a(62),a(67)),B=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("nav",{className:"navbar"},this.props.user?s.a.createElement("a",{href:"/paths"},s.a.createElement("span",null,s.a.createElement("img",{style:{backgroundColor:"transparent",filter:"brightness(0) invert(1)",height:40,width:"auto"},src:"https://files.slack.com/files-pri/TCA754D6Z-FG11R5FPD/rootroute.png"}))):s.a.createElement("span",null,s.a.createElement("img",{style:{backgroundColor:"transparent",filter:"brightness(0) invert(1)",height:40,width:"auto"},src:"https://files.slack.com/files-pri/TCA754D6Z-FG11R5FPD/rootroute.png"})),this.props.user?s.a.createElement("span",null,"Welcome to Root Route, ",this.props.user.name,"!"):null,this.props.user?s.a.createElement("a",{onClick:function(){return e.props.handleSignOut()}},"Sign out"):null)}}]),t}(n.Component),F=Object(x.a)(B),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",isLoggedIn:!1},a.signOut=function(){j.a.get("/logout").then(function(){return a.setState({user:"",isLoggedIn:!1}),console.log("hi there"),s.a.createElement(g.a,{to:"/"})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/protected");case 2:t=e.sent,a=!1,t.data&&t.data.email.length>0&&(a=!0),this.setState({user:t.data,isLoggedIn:a});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.user;return t&&s.a.createElement("h1",null,"Logged In!"),s.a.createElement(v.a,null,s.a.createElement("div",null,s.a.createElement(F,{user:a,handleSignOut:this.signOut}),s.a.createElement(E.a,null,s.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return s.a.createElement(H,Object.assign({},e,{user:a}))}}),this.state.isLoggedIn&&s.a.createElement(f.a,{exact:!0,path:"/paths",render:function(e){return s.a.createElement(S,Object.assign({},e,{user:a}))}}),this.state.isLoggedIn&&s.a.createElement(f.a,{exact:!0,path:"/paths/:pathid",render:function(e){return s.a.createElement(D,Object.assign({},e,{user:a}))}}),this.state.isLoggedIn&&s.a.createElement(f.a,{exact:!0,path:"/paths/:pathid/subjects/:subjectid",render:function(e){return s.a.createElement(M,Object.assign({},e,{user:a}))}}),s.a.createElement(f.a,{component:H}))))}}]),t}(n.Component);i.a.render(s.a.createElement(U,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.347799be.chunk.js.map