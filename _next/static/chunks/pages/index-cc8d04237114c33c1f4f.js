(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{978:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return bt}});var i=n(5893),r=n(7294),o=n(9163),a=o.ZP.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1dhaknk-0"})(["position:relative;"]),d=function(e){var t=e.children;return(0,i.jsx)(a,{children:t})},s="/front-end-mentor-crowdfunding",l=o.ZP.div.withConfig({displayName:"BackgroundImage",componentId:"sc-1qcvdo6-0"})(["background:url(","/images/image-hero-mobile.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;min-height:37vh;filter:brightness(0.9);@media ","{background:url(",'+"/images/image-hero-desktop.jpg");height:400px;}'],s,(function(e){return e.theme.breakpoints.laptop}),s),c=o.ZP.div.withConfig({displayName:"Navbar__NavWrapper",componentId:"sc-1nq6tu6-0"})(["position:absolute;top:0;left:0;right:0;display:flex;justify-content:space-between;align-items:center;margin-top:clamp(27px,4.5vh,47px);margin-left:clamp(24px,6vw,166px);margin-right:clamp(24px,6vw,166px);@media ","{margin-top:clamp(27px,6vh,47px);margin-left:clamp(24px,12vw,166px);margin-right:clamp(24px,12vw,166px);}"],(function(e){return e.theme.breakpoints.tablet})),m=function(e){var t=e.children;return(0,i.jsx)(c,{children:t})},p=n(1664),u=n(5675),h=o.ZP.div.withConfig({displayName:"Brand__ImageWrapper",componentId:"am0mrn-0"})(["cursor:pointer;"]),g=function(e){var t=e.children;return(0,i.jsx)(h,{children:t})},f=function(){return(0,i.jsx)(g,{children:(0,i.jsx)(p.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)(u.default,{width:"128",height:"20",src:s+"/images/logo.svg",alt:"crowdfunding Logo"})})})})},w=o.ZP.div.withConfig({displayName:"Menu__ImageWrapper",componentId:"sc-1mhgdkd-0"})(["cursor:pointer;@media ","{display:none;}"],(function(e){return e.theme.breakpoints.tablet})),x=o.ZP.nav.withConfig({displayName:"Menu__CollapsibleMenu",componentId:"sc-1mhgdkd-1"})(["position:absolute;top:0;left:0;right:0;filter:drop-shadow(0 0 2px gray);margin-top:4rem;z-index:1;@media ","{position:unset;margin:0;}"],(function(e){return e.theme.breakpoints.tablet})),v=o.ZP.ul.withConfig({displayName:"Menu__MenuWrapper",componentId:"sc-1mhgdkd-2"})(["list-style:none;background:#ffffff;border-radius:0.5rem;opacity:0;visibility:hidden;transform:translateY(-20%);transition:transform 0.5s ease,opacity 1s ease;&.active{opacity:1;visibility:visible;transform:translateY(0);}@media ","{display:flex;visibility:visible;opacity:1;transition:none;background:transparent;transform:translateY(0);}"],(function(e){return e.theme.breakpoints.tablet})),y=o.ZP.li.withConfig({displayName:"Menu__Item",componentId:"sc-1mhgdkd-3"})(["line-height:2;border-bottom:1px solid #dddddd;&:last-child{border:none;}a{display:block;padding:1.2rem 1.24rem;color:var(--black);font-weight:var(--medium);&:hover{font-weight:var(--bold);}}@media ","{border:0;a{color:#fff;}}"],(function(e){return e.theme.breakpoints.tablet})),b=function(e,t){var n=e.active,r=e.children;return(0,i.jsx)(v,{className:n&&"active",children:r})},_=["About","Discover","Get Started"],j=function(e){var t=e.link;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(y,{children:(0,i.jsx)(p.default,{href:"#",children:(0,i.jsx)("a",{children:t})})})})},k=function(e){var t=e.active,n=e.setActive;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(w,{onClick:function(){return n((function(e){return!e}))},children:t?(0,i.jsx)(u.default,{width:"15",height:"15",src:s+"/images/icon-close-menu.svg",alt:"close menu icon"}):(0,i.jsx)(u.default,{width:"15",height:"15",src:s+"/images/icon-hamburger.svg",alt:"hamburger menu"})})})},P=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=(0,r.useState)(_),a=o[0],d=(o[1],(0,r.useRef)(null));return(0,r.useEffect)((function(){var e=function(e){var i=d.current;i&&!i.contains(e.target)&&n(!t)};return t&&window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k,{active:t,setActive:n}),(0,i.jsx)(x,{ref:d,children:(0,i.jsx)(b,{active:t,children:a.map((function(e,t){return(0,i.jsx)(j,{link:e},t)}))})})]})},C=o.ZP.main.withConfig({displayName:"Main",componentId:"fw58wr-0"})(["display:grid;margin:auto 7.5vw;text-align:center;justify-content:center;align-items:center;position:relative;@media ","{margin:0 auto;width:52.14rem;}"],(function(e){return e.theme.breakpoints.tablet})),I=o.ZP.div.withConfig({displayName:"style__HeaderWrapper",componentId:"sc-1czuhpv-0"})(["display:flex;justify-content:space-between;flex-direction:",";"],(function(e){return e.direction?"row":"column"})),N=o.ZP.div.withConfig({displayName:"style__FooterWrapper",componentId:"sc-1czuhpv-1"})(["display:flex;justify-content:space-between;flex-direction:",";"],(function(e){return e.direction?"row":"column"})),Z=o.ZP.div.withConfig({displayName:"style__BodyWrapper",componentId:"sc-1czuhpv-2"})(["padding:1.5rem 0;"]),z=o.ZP.div.withConfig({displayName:"style__DurationWrapper",componentId:"sc-1czuhpv-3"})(["display:flex;align-items:center;"]),M=o.ZP.h4.withConfig({displayName:"style__DayWrapper",componentId:"sc-1czuhpv-4"})(["font-size:","rem;margin-right:0.5rem;"],(function(e){var t=e.fsz;return t||"2.3"})),S=o.ZP.p.withConfig({displayName:"style__TimeWrapper",componentId:"sc-1czuhpv-5"})(["font-size:1rem;font-weight:var(--regular);color:var(--darkgray);"]),T=o.ZP.h2.withConfig({displayName:"style__TitleWrapper",componentId:"sc-1czuhpv-6"})(['font-size:0.875rem;font-family:"commissioner",sans-serif;']),B=o.ZP.h3.withConfig({displayName:"style__SubTitleWrapper",componentId:"sc-1czuhpv-7"})(['font-size:0.875rem;font-family:"commissioner",sans-serif;line-height:2;font-weight:var(--medium);color:',";"],(function(e){var t=e.clr;return t||"var(--cyan)"})),F=o.ZP.p.withConfig({displayName:"style__TextWrapper",componentId:"sc-1czuhpv-8"})(["font-size:0.875rem;line-height:1.7;color:",";"],(function(e){var t=e.clr;return t||"var(--darkgray)"})),E=o.ZP.div.withConfig({displayName:"style__CTAWrapper",componentId:"sc-1czuhpv-9"})(["padding:1.5rem 0 0 0;"]),W=o.ZP.button.withConfig({displayName:"style__ButtonWrapper",componentId:"sc-1czuhpv-10"})(["height:3rem;width:9.8rem;border-radius:1.5rem;margin:0;border:0;font-size:1rem;font-weight:bold;cursor:pointer;color:",";background:",";&:hover{background:var(--darkcyan);}"],(function(e){var t=e.clr;return t||"#fff"}),(function(e){var t=e.bg;return t||"var(--cyan)"})),Y=o.ZP.div.withConfig({displayName:"style__CardWrapper",componentId:"sc-1czuhpv-11"})(["padding-top:1.5rem;padding-bottom:1.5rem;padding-left:clamp(1.5rem,4vw,2.9rem);padding-right:clamp(1.5rem,4vw,2.9rem);border:1px solid #ddd;box-shadow:0 0 1px rgba(241,241,241,0.5);border-radius:0.5rem;margin:2rem auto;background:#fff;&.active{opacity:0.6;pointer-events:none;& ","{background:var(--darkgray);}}&:focus-within{border-color:var(--cyan);}@media ","{padding-top:2rem;padding-bottom:2rem;}"],W,(function(e){return e.theme.breakpoints.laptop})),R=(0,o.ZP)(Y).withConfig({displayName:"Project__Card",componentId:"rav55u-0"})(["text-align:left;"]),q=(0,o.ZP)(T).withConfig({displayName:"Project__Title",componentId:"rav55u-1"})(["font-size:1.43rem;font-weight:var(--bold);padding-bottom:2rem;padding-top:1rem;"]),A=(0,o.ZP)(F).withConfig({displayName:"Project__Text",componentId:"rav55u-2"})(["font-size:clamp(1rem,2vw,1.143rem);font-weight:var(--regular);padding-bottom:2rem;"]),L=[{id:1,title:"Bamboo Stand",pledge:"Pledge $25 or more",text:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",day:101,left:"left",btnText:"Select Reward",amount:25},{id:2,title:"Black Edition Stand",pledge:"Pledge $75 or more",text:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",day:64,left:"left",btnText:"Select Reward",amount:75},{id:3,title:"Mahogany Special Edition",pledge:"Pledge $200 or more",text:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",day:0,left:"left",btnText:"Out of Stock",amount:200}],$=function(e){var t=e.activeStyle,n=void 0===t?"inactive":t,r=e.children;return(0,i.jsx)(Y,{className:n,children:r})},D=(0,o.ZP)($).withConfig({displayName:"Pledges__Card",componentId:"sc-1lgupu4-0"})([""]),H=(0,o.ZP)(I).withConfig({displayName:"Pledges__Header",componentId:"sc-1lgupu4-1"})(["@media ","{display:flex;flex-direction:row;}"],(function(e){return e.theme.breakpoints.tablet})),O=(0,o.ZP)(T).withConfig({displayName:"Pledges__Title",componentId:"sc-1lgupu4-2"})(["font-size:clamp(1rem,2vw,1.29rem);"]),V=(0,o.ZP)(B).withConfig({displayName:"Pledges__SubTitle",componentId:"sc-1lgupu4-3"})(["font-size:clamp(1rem,2vw,1.1rem);"]),G=(0,o.ZP)(Z).withConfig({displayName:"Pledges__Body",componentId:"sc-1lgupu4-4"})([""]),X=(0,o.ZP)(F).withConfig({displayName:"Pledges__Text",componentId:"sc-1lgupu4-5"})(["font-size:clamp(1rem,2vw,1.143rem);"]),U=(0,o.ZP)(N).withConfig({displayName:"Pledges__Footer",componentId:"sc-1lgupu4-6"})(["@media ","{display:flex;flex-direction:row;}"],(function(e){return e.theme.breakpoints.tablet})),J=(0,o.ZP)(W).withConfig({displayName:"Pledges__Button",componentId:"sc-1lgupu4-7"})([""]),K=(0,o.ZP)(E).withConfig({displayName:"Pledges__CTA",componentId:"sc-1lgupu4-8"})([""]),Q=(0,o.ZP)(z).withConfig({displayName:"Pledges__Duration",componentId:"sc-1lgupu4-9"})([""]),ee=(0,o.ZP)(M).withConfig({displayName:"Pledges__Day",componentId:"sc-1lgupu4-10"})([""]),te=(0,o.ZP)(S).withConfig({displayName:"Pledges__Time",componentId:"sc-1lgupu4-11"})(["font-size:clamp(1rem,2vw,1.1rem);"]),ne=function(e){var t=e.setShowModal,n=e.setParentId,o=(0,r.useState)(L),a=o[0];o[1];return(0,i.jsx)(i.Fragment,{children:a.map((function(e){return(0,i.jsxs)(D,{activeStyle:0===e.day?"active":"inactive",children:[(0,i.jsxs)(H,{children:[(0,i.jsx)(O,{children:e.title}),(0,i.jsx)(V,{children:e.pledge})]}),(0,i.jsx)(G,{children:(0,i.jsx)(X,{children:e.text})}),(0,i.jsxs)(U,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(ee,{children:e.day}),(0,i.jsx)(te,{children:e.left})]}),(0,i.jsx)(K,{children:(0,i.jsx)(J,{onClick:function(){t((function(e){return!e})),n(e.id)},children:e.btnText})})]})]},e.id)}))})},ie=function(e){var t=e.setShowModal,n=e.setParentId;return(0,i.jsxs)(R,{children:[(0,i.jsx)(q,{children:"About this project"}),(0,i.jsx)(A,{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),(0,i.jsx)(A,{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."}),(0,i.jsx)(ne,{setShowModal:t,setParentId:n})]})},re=(0,o.ZP)(Y).withConfig({displayName:"Monitor__Card",componentId:"sc-1udjw14-0"})(["position:relative;background:#fff;margin-top:-4rem;width:100%;@media ","{margin-top:-7rem;}"],(function(e){return e.theme.breakpoints.laptop})),oe=o.ZP.div.withConfig({displayName:"Monitor__Avatar",componentId:"sc-1udjw14-1"})(["position:absolute;top:0;left:0;right:0;transform:translateY(-56px);"]),ae=(o.ZP.header.withConfig({displayName:"Monitor__Header",componentId:"sc-1udjw14-2"})([""]),o.ZP.h1.withConfig({displayName:"Monitor__Title",componentId:"sc-1udjw14-3"})(["font-size:clamp(1.43rem,4vw,2rem);padding:1.5rem 2.5rem;color:var(--black);"])),de=o.ZP.div.withConfig({displayName:"Monitor__Body",componentId:"sc-1udjw14-4"})([""]),se=(0,o.ZP)(F).withConfig({displayName:"Monitor__Text",componentId:"sc-1udjw14-5"})(["font-size:clamp(1rem,2vw,1.143rem);font-weight:var(--regular);"]),le=(0,o.ZP)(N).withConfig({displayName:"Monitor__Footer",componentId:"sc-1udjw14-6"})(["padding:1.75rem 0rem;flex-direction:row;"]),ce=(0,o.ZP)(W).withConfig({displayName:"Monitor__Button",componentId:"sc-1udjw14-7"})(["width:13rem;height:4rem;border-radius:2rem;@media ","{font-size:1.14rem;}"],(function(e){return e.theme.breakpoints.tablet})),me=o.ZP.div.withConfig({displayName:"Monitor__Logo",componentId:"sc-1udjw14-8"})(["@media ","{position:absolute;}"],(function(e){return e.theme.breakpoints.tablet})),pe=(0,o.ZP)(ce).withConfig({displayName:"Monitor__Btn",componentId:"sc-1udjw14-9"})(["display:none;@media ","{display:block;font-size:1.14rem;height:4rem;width:12rem;text-indent:2pc;background:#c9c5c5;}"],(function(e){return e.theme.breakpoints.tablet})),ue=o.ZP.div.withConfig({displayName:"Monitor__Bookmark",componentId:"sc-1udjw14-10"})(["position:relative;@media ","{display:flex;&:hover{& ",'{width:13rem;color:var(--cyan);background:#ddd;&::after{content:"ed";}}& '," svg{circle{fill:var(--cyan);}path{fill:#fff;}}}}"],(function(e){return e.theme.breakpoints.tablet}),pe,me),he=function(e){var t=e.setShowModal;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(re,{children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(oe,{children:(0,i.jsx)(u.default,{src:s+"/images/logo-mastercraft.svg",height:56,width:56,alt:"mastercraft icon",layout:"fixed"})}),(0,i.jsx)(ae,{children:"Mastercraft Bamboo Monitor Riser"})]}),(0,i.jsx)(de,{children:(0,i.jsx)(se,{children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."})}),(0,i.jsxs)(le,{children:[(0,i.jsx)(ce,{onClick:function(){return t((function(e){return!e}))},children:"Back this project"}),(0,i.jsxs)(ue,{children:[(0,i.jsx)(me,{children:(0,i.jsx)("svg",{width:"56",height:"56",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,i.jsx)("circle",{fill:"#2F2F2F",cx:"28",cy:"28",r:"28"}),(0,i.jsx)("path",{fill:"#B1B1B1",d:"M23 19v18l5-5.058L33 37V19z"})]})})}),(0,i.jsx)(pe,{children:"Bookmark"})]})]})]})})},ge=(0,o.ZP)(Y).withConfig({displayName:"style__StatsContainer",componentId:"isawan-0"})(["text-align:center;width:100%;height:100%;"]),fe=o.ZP.div.withConfig({displayName:"style__Container",componentId:"isawan-1"})(["@media ","{display:flex;padding-top:1rem;padding-bottom:1rem;& > *{flex:1 1 100%;}}"],(function(e){return e.theme.breakpoints.tablet})),we=(0,o.ZP)(T).withConfig({displayName:"style__Title",componentId:"isawan-2"})(["font-size:2.28rem;font-weight:var(--bold);"]),xe=(0,o.ZP)(F).withConfig({displayName:"style__Text",componentId:"isawan-3"})(["font-size:1rem;font-weight:var(--medium);line-height:2.5;"]),ve=o.ZP.div.withConfig({displayName:"style__Stat",componentId:"isawan-4"})(['position:relative;text-align:center;padding:1.5rem;&:not(:nth-child(3))::after{content:"";display:block;position:absolute;left:0;right:0;border-bottom:1px solid #dddddd;width:5rem;margin:0.75rem auto;@media ',"{margin:0;border-bottom:0;top:1.2rem;left:12rem;height:5rem;border-right:1px solid #dddddd;}}"],(function(e){return e.theme.breakpoints.tablet})),ye=function(e){var t=e.children;return(0,i.jsx)(ge,{children:t})},be=function(e){var t=e.children;return(0,i.jsx)(ve,{children:t})},_e=o.ZP.div.withConfig({displayName:"ProgressBar__ProgressContainer",componentId:"z80yem-0"})(["progress{appearance:none;width:100%;height:1rem;border-radius:1rem;overflow:hidden;color:var(--cyan);&::-webkit-progress-bar{background-color:#eee;}&::-webkit-progress-value{border-radius:1rem;background:var(--cyan);}&::-moz-progress-bar{border-radius:1rem;background:var(--cyan);}}"]),je=function(e){var t=e.max,n=void 0===t?100:t,r=e.value,o=void 0===r?0:r,a=e.total,d=o/(void 0===a?1e5:a)*100;return(0,i.jsx)(_e,{children:(0,i.jsx)("progress",{max:n,value:d.toFixed(2)})})},ke=[{title:"$89,914",pledge:"of $100,000 backed"},{title:"5,007",pledge:"total backers"},{title:"56",pledge:"days left"}],Pe=function(e){var t=e.title,n=e.pledge;return(0,i.jsxs)(be,{children:[(0,i.jsx)(we,{children:t}),(0,i.jsx)(xe,{children:n})]})},Ce=function(){var e=(0,r.useState)(ke)[0];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(ye,{children:[(0,i.jsx)(fe,{children:e.map((function(e,t){var n=e.title,r=e.pledge;return(0,i.jsx)(Pe,{title:n,pledge:r},t)}))}),(0,i.jsx)(je,{value:89914})]})})},Ie=n(3935),Ne=o.ZP.div.withConfig({displayName:"modal__Wrapper",componentId:"sc-1br5d99-0"})(["position:fixed;top:0;max-width:1440px;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);z-index:2;"]),Ze=function(e){var t=e.children;return(0,i.jsx)(Ne,{children:t})},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";window.scrollTo({top:0,left:0,behavior:"smooth"}),document.querySelector("body").style.overflow=e},Me=function(e){var t=e.showModal,n=e.children;return t?((0,r.useEffect)((function(){ze("hidden")}),[]),(0,Ie.createPortal)((0,i.jsx)(Ze,{children:n}),document.getElementById("modal"))):null},Se=(0,o.ZP)(Y).withConfig({displayName:"ModalContent__Section",componentId:"sc-79hn40-0"})(["position:absolute;top:0;max-width:730px;width:85%;transform:translateY(5.5rem);z-index:12;"]),Te=o.ZP.div.withConfig({displayName:"ModalContent__Header",componentId:"sc-79hn40-1"})(["display:grid;grid-auto-flow:column;justify-content:space-between;"]),Be=o.ZP.div.withConfig({displayName:"ModalContent__Button",componentId:"sc-79hn40-2"})(["cursor:pointer;padding:0.5rem;"]),Fe=(0,o.ZP)(T).withConfig({displayName:"ModalContent__Title",componentId:"sc-79hn40-3"})(["font-size:clamp(1.428rem,2vw,1.72rem);"]),Ee=(0,o.ZP)(F).withConfig({displayName:"ModalContent__Text",componentId:"sc-79hn40-4"})(["font-size:clamp(1rem,2vw,1.143rem);padding:1.5rem 0;"]),We=function(e){var t=e.setShowModal,n=e.children;return(0,i.jsxs)(Se,{children:[(0,i.jsxs)(Te,{children:[(0,i.jsx)(Fe,{children:"Back this project"}),(0,i.jsx)(Be,{onClick:function(){t((function(e){return!e})),ze("auto")},children:(0,i.jsx)(u.default,{src:"/images/icon-close-modal.svg",height:15,width:15,layout:"fixed"})})]}),(0,i.jsx)(Ee,{children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),n]})},Ye=o.ZP.input.attrs({type:"radio"}).withConfig({displayName:"Radio",componentId:"sc-9l3r61-0"})(["height:0;opacity:0;"]),Re=o.ZP.span.withConfig({displayName:"Radio__CheckMark",componentId:"sc-9l3r61-1"})(["position:absolute;display:block;height:calc(100% - 10px);width:calc(100% - 10px);border-radius:50%;&:hover{background:#d1d1d1;}"]),qe=o.ZP.label.withConfig({displayName:"Radio__RadioContainer",componentId:"sc-9l3r61-2"})(["width:1.71rem;height:1.7rem;border:1px solid #ddd;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;& ",":checked + ","{background:var(--cyan);}"],Ye,Re),Ae=function(e){var t=e.parentId,n=e.setParentId,r=e.value;return(0,i.jsxs)(qe,{children:[(0,i.jsx)(Ye,{name:"radio",value:r,checked:r==t,onChange:function(e){return n(e.target.value)}}),(0,i.jsx)(Re,{})]})},Le=o.ZP.div.withConfig({displayName:"Form__Wrapper",componentId:"p1zqpx-0"})(["@media ","{display:fex;justify-content:space-between;align-items:center;}"],(function(e){return e.theme.breakpoints.tablet})),$e=(0,o.ZP)(F).withConfig({displayName:"Form__Title",componentId:"p1zqpx-1"})(["text-align:center;font-size:clamp(1rem,2vw,1.0714rem);padding:1.5rem 0;font-weight:var(--regular);@media ","{position:relative;padding:0;padding-left:1.5rem;}"],(function(e){return e.theme.breakpoints.tablet})),De=o.ZP.div.withConfig({displayName:"Form__Body",componentId:"p1zqpx-2"})(["display:flex;align-items:center;justify-content:space-between;margin:0 1.5rem;@media ","{margin-top:1rem;& > *{margin-left:1rem;}}"],(function(e){return e.theme.breakpoints.tablet})),He=o.ZP.div.withConfig({displayName:"Form__InputContainer",componentId:"p1zqpx-3"})(["position:relative;"]),Oe=o.ZP.span.withConfig({displayName:"Form__Currency",componentId:"p1zqpx-4"})(["position:absolute;top:1.1rem;left:1.8rem;display:inline-block;font-size:1rem;font-weight:var(--bold);color:#ddd;"]),Ve=o.ZP.input.attrs({type:"number"}).withConfig({displayName:"Form__Input",componentId:"p1zqpx-5"})(['height:3.5rem;width:7.142rem;border-radius:2rem;border:1px solid #ddd;text-align:center;font-weight:var(--bold);font-size:1rem;outline:0;cursor:pointer;&:focus{border:1px solid var(--cyan);caret-color:var(--cyan);}&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}&[type="number"]{-moz-appearance:textfield;}']),Ge=(0,o.ZP)(W).withConfig({displayName:"Form__Button",componentId:"p1zqpx-6"})(["width:8.214rem;height:3.5rem;border-radius:2rem;font-size:1rem;"]),Xe=o.ZP.section.withConfig({displayName:"Form__Error",componentId:"p1zqpx-7"})(["text-align:center;margin-top:1rem;font-size:1rem;color:#a23c32e6;font-weight:var(--medium);"]),Ue=(0,o.ZP)(Y).withConfig({displayName:"ThankModal__Card",componentId:"t4awwx-0"})(["position:absolute;top:0;left:0;right:0;max-width:542px;max-height:448px;width:85%;transform:translateY(5rem);text-align:center;z-index:20;& > *{padding-top:1rem;padding-bottom:1rem;}"]),Je=o.ZP.div.withConfig({displayName:"ThankModal__Success",componentId:"t4awwx-1"})([""]),Ke=(0,o.ZP)(T).withConfig({displayName:"ThankModal__Title",componentId:"t4awwx-2"})(["font-size:clamp(1.27rem,3vw,1.714rem);"]),Qe=(0,o.ZP)(F).withConfig({displayName:"ThankModal__Text",componentId:"t4awwx-3"})(["font-size:clamp(1rem,3vw,1.143rem);font-weight:var(--regular);"]),et=(0,o.ZP)(W).withConfig({displayName:"ThankModal__Button",componentId:"t4awwx-4"})(["margin-top:1rem;margin-bottom:1rem;width:7.64rem;height:3.5rem;border-radius:2rem;font-size:1rem;font-weight:var(--bold);"]),tt=function(e){var t=e.setIsActive;return(0,i.jsxs)(Ue,{children:[(0,i.jsx)(Je,{children:(0,i.jsx)(u.default,{height:"64",width:"64",src:s+"/images/icon-check.svg",alt:"success logo"})}),(0,i.jsx)(Ke,{children:" Thanks for your support!"}),(0,i.jsx)(Qe,{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."}),(0,i.jsx)(et,{onClick:function(){return t((function(e){return!e}))},children:"Got it!"})]})},nt=function(e){var t=e.amount,n=(0,r.useState)(t),o=n[0],a=n[1],d=(0,r.useState)(!1),s=d[0],l=d[1],c=(0,r.useState)(""),m=c[0],p=c[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o<t?p("Pledge should be equal or more than ".concat(t)):(l(!s),p(""),a(t))},noValidate:!0,children:[(0,i.jsxs)(Le,{children:[(0,i.jsx)($e,{children:" Enter your pledge "}),(0,i.jsxs)(De,{children:[(0,i.jsxs)(He,{children:[(0,i.jsx)(Oe,{children:"$"}),(0,i.jsx)(Ve,{min:t,placeholder:t,value:o,onChange:function(e){return a(parseFloat(e.target.value))}})]}),(0,i.jsx)(Ge,{children:"Continue"})]})]}),(0,i.jsx)(Xe,{children:m})]}),(0,i.jsx)(Me,{showModal:s,children:(0,i.jsx)(tt,{setIsActive:l})})]})},it=o.ZP.div.withConfig({displayName:"Pledges__PledgeWrapper",componentId:"sc-33r08w-0"})(["overflow-y:auto;height:70vh;scrollbar-color:var(--cyan) #fff;&::-webkit-scrollbar{width:10px;}&::-webkit-scrollbar-track{border-radius:0.5rem;box-shadow:inset 0 0 10px rgba(0,0,0,0.25);}&::-webkit-scrollbar-thumb{border-radius:0.5rem;background:var(--cyan);:hover{background:var(--darkcyan);}}"]),rt=o.ZP.div.withConfig({displayName:"Pledges__FormWrapper",componentId:"sc-33r08w-1"})(["margin-top:1rem;border-top:2px solid #ddd;padding-bottom:1rem;display:none;@media ","{padding-top:1rem;}"],(function(e){return e.theme.breakpoints.tablet})),ot=o.ZP.section.withConfig({displayName:"Pledges__Card",componentId:"sc-33r08w-2"})(["position:relative;text-align:left;border:1px solid #ddd;box-shadow:0 0 1px rgba(241,241,241,0.5);border-radius:0.5rem;margin-bottom:2rem;background:#fff;cursor:pointer;&.active{opacity:0.6;pointer-events:none;& ","{background:var(--darkgray);}}&:focus-within{border:2px solid var(--cyan);& ","{display:block;}}"],W,rt),at=(0,o.ZP)(I).withConfig({displayName:"Pledges__Header",componentId:"sc-33r08w-3"})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:1.5rem 1.5rem 0 1.5rem;"]),dt=o.ZP.div.withConfig({displayName:"Pledges__Heading",componentId:"sc-33r08w-4"})(["padding:0 1rem;@media ","{display:flex;flex-direction:row;align-items:center;& > *{margin-left:1rem;}}"],(function(e){return e.theme.breakpoints.tablet})),st=(0,o.ZP)(T).withConfig({displayName:"Pledges__Title",componentId:"sc-33r08w-5"})(["font-size:clamp(1rem,2vw,1.143rem);@media ","{&:hover{color:var(--cyan);}}"],(function(e){return e.theme.breakpoints.tablet})),lt=(0,o.ZP)(B).withConfig({displayName:"Pledges__SubTitle",componentId:"sc-33r08w-6"})(["font-size:clamp(1rem,2vw,1.143rem);"]),ct=(0,o.ZP)(Z).withConfig({displayName:"Pledges__Body",componentId:"sc-33r08w-7"})([""]),mt=(0,o.ZP)(F).withConfig({displayName:"Pledges__Text",componentId:"sc-33r08w-8"})(["font-size:clamp(1rem,2vw,1.08rem);line-height:1.9;padding:0 1.5rem;"]),pt=(0,o.ZP)(N).withConfig({displayName:"Pledges__Footer",componentId:"sc-33r08w-9"})(["padding-left:1.5rem;padding-bottom:1.5rem;@media ","{position:absolute;top:0;right:0;display:flex;align-items:center;padding:1em;margin-right:1rem;}"],(function(e){return e.theme.breakpoints.tablet})),ut=((0,o.ZP)(W).withConfig({displayName:"Pledges__Button",componentId:"sc-33r08w-10"})([""]),(0,o.ZP)(E).withConfig({displayName:"Pledges__CTA",componentId:"sc-33r08w-11"})([""]),(0,o.ZP)(z).withConfig({displayName:"Pledges__Duration",componentId:"sc-33r08w-12"})([""])),ht=(0,o.ZP)(M).withConfig({displayName:"Pledges__Day",componentId:"sc-33r08w-13"})(["font-size:1.28rem;"]),gt=(0,o.ZP)(S).withConfig({displayName:"Pledges__Time",componentId:"sc-33r08w-14"})(["font-size:clamp(1rem,2vw,1.0714rem);font-weight:var(--medium);"]),ft=[{id:0,pledge:"",title:"Pledge with no reward",text:"Choose to support us without a reward if you simply believe in our project. As a backer , you will be signed up to receive product updates via email.",day:null,left:"",btnText:"",amount:0},{id:1,title:"Bamboo Stand",pledge:"Pledge $25 or more",text:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",day:101,left:"left",btnText:"Select Reward",amount:25},{id:2,title:"Black Edition Stand",pledge:"Pledge $75 or more",text:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",day:64,left:"left",btnText:"Select Reward",amount:75},{id:3,title:"Mahogany Special Edition",pledge:"Pledge $200 or more",text:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",day:0,left:"left",btnText:"Out of Stock",amount:200}],wt=function(e){var t=e.parentId,n=(0,r.useState)(ft),o=n[0],a=(n[1],(0,r.useState)(t)),d=a[0],s=a[1],l=o.reduce((function(e,t){return e[t.id]=(0,r.useRef)(),e}),{});return(0,r.useEffect)((function(){var e=l[d].current;return e&&(e.addEventListener("click",s(d)),e.focus()),function(){return e.removeEventListener("click",s(d))}}),[]),(0,r.useLayoutEffect)((function(){var e=function(e){var t=l[d].current;t.scrollIntoView({behavior:"smooth",block:"start"}),t&&!t.contains(e.target)&&s(-1)};return d>-1&&window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[d]),(0,i.jsx)(it,{children:o.map((function(e){return(0,i.jsxs)(ot,{className:0===e.day?"active":"inactive",ref:l[e.id],tabIndex:e.id,onClick:function(){return s(e.id)},children:[(0,i.jsxs)(at,{children:[(0,i.jsx)(Ae,{value:e.id,parentId:d,setParentId:s}),(0,i.jsxs)(dt,{children:[(0,i.jsx)(st,{children:e.title}),(0,i.jsx)(lt,{children:e.pledge})]})]}),(0,i.jsx)(ct,{children:(0,i.jsx)(mt,{children:e.text})}),(0,i.jsx)(pt,{children:(0,i.jsxs)(ut,{children:[(0,i.jsx)(ht,{children:e.day}),(0,i.jsx)(gt,{children:e.left})]})}),(0,i.jsx)(rt,{children:(0,i.jsx)(nt,{amount:e.amount})})]},e.id)}))})},xt=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=(0,r.useState)(0),a=o[0],d=o[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Me,{showModal:t,children:(0,i.jsx)(We,{setShowModal:n,children:(0,i.jsx)(wt,{parentId:a})})}),(0,i.jsx)(he,{setShowModal:n}),(0,i.jsx)(Ce,{}),(0,i.jsx)(ie,{setShowModal:n,setParentId:d})]})},vt=o.ZP.footer.withConfig({displayName:"footer__Wrapper",componentId:"gghz9y-0"})(["text-align:center;a{color:var(--darkcyan);}"]),yt=function(){return(0,i.jsxs)(vt,{children:["Challenge by"," ",(0,i.jsx)(p.default,{href:"https://www.frontendmentor.io?ref=challenge",children:(0,i.jsxs)("a",{target:"_blank",rel:"noreferrer",children:["Frontend Mentor"," "]})}),". Coded by"," ",(0,i.jsx)(p.default,{href:"https://github.com/avatarfreak",children:(0,i.jsxs)("a",{target:"_blank",rel:"noreferrer",children:[" ","avatarfreak"]})}),"."]})},bt=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(l,{}),(0,i.jsxs)(m,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(P,{})]})]}),(0,i.jsx)(C,{children:(0,i.jsx)(xt,{})}),(0,i.jsx)(yt,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(978)}])}},function(e){e.O(0,[61,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);