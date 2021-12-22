(this.webpackJsonpmydao=this.webpackJsonpmydao||[]).push([[1],{161:function(e,t,n){},167:function(e,t){},215:function(e,t){},241:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(139),o=n.n(s),a=(n(161),n(84)),i=n(59),l=n(4),d=n.n(l),u=n(140),b=n(98),j=n(26),p=n(19),h=new u.a("rinkeby"),f=h.getBundleDropModule("0xAe6BF549c202Ebb4B5204977989dF6Db183C7B92"),O=h.getTokenModule("0xa95B2B02d28AA4E059b969513a8aF93C75C3fAee"),m=h.getVoteModule("0x694bfC20ea15DB5d472b495314040A986dAD5C9C"),x=function(){var e=Object(b.b)(),t=e.connectWallet,n=e.address,r=e.error,s=e.provider;console.log("address: ",n);var o=s?s.getSigner():void 0,l=Object(c.useState)(!1),u=Object(i.a)(l,2),x=u[0],v=u[1],g=Object(c.useState)(!1),y=Object(i.a)(g,2),k=y[0],A=y[1],w=Object(c.useState)({}),I=Object(i.a)(w,2),C=I[0],E=I[1],S=Object(c.useState)([]),M=Object(i.a)(S,2),N=M[0],P=M[1],B=Object(c.useState)([]),D=Object(i.a)(B,2),F=D[0],T=D[1],V=Object(c.useState)(!1),R=Object(i.a)(V,2),U=R[0],J=R[1],W=Object(c.useState)(!1),H=Object(i.a)(W,2),L=H[0],Y=H[1];Object(c.useEffect)((function(){h.setProviderOrSigner(o)}),[o]),Object(c.useEffect)((function(){if(n)return f.balanceOf(n,"0").then((function(e){e.gt(0)?(A(!0),console.log("\ud83c\udf1f this user has a membership NFT!")):(A(!1),console.log("\ud83d\ude2d this user doesn't have a membership NFT."))})).catch((function(e){A(!1),console.error("failed to nft balance",e)}))}),[n]),Object(c.useEffect)((function(){k&&f.getAllClaimerAddresses("0").then((function(e){console.log("\ud83d\ude80 Members addresses",e),P(e)})).catch((function(e){console.error("failed to get member list",e)}))}),[k]),Object(c.useEffect)((function(){k&&O.getAllHolderBalances().then((function(e){console.log("\ud83d\udc5c Amounts",e),E(e)})).catch((function(e){console.error("failed to get token amounts",e)}))}),[k]),Object(c.useEffect)((function(){k&&m.getAll().then((function(e){T(e),console.log("\ud83c\udf08 Proposals:",e)})).catch((function(e){console.error("failed to get proposals",e)}))}),[k]),Object(c.useEffect)((function(){k&&F.length&&m.hasVoted(F[0].proposalId,n).then((function(e){Y(e),console.log("\ud83e\udd75 User has already voted")})).catch((function(e){console.error("failed to check if wallet has voted",e)}))}),[k,F,n]);var Z=Object(c.useMemo)((function(){return N.map((function(e){return{address:e,tokenAmount:j.a.utils.formatUnits(C[e]||0,18)}}))}),[N,C]);return r&&"UnsupportedChainIdError"===r.name?Object(p.jsxs)("div",{className:"unsupported-network",children:[Object(p.jsx)("h2",{children:"Please connect to Rinkeby"}),Object(p.jsx)("p",{children:"This dapp only works on the Rinkeby network, please switch networks in your connected wallet."})]}):n?k?Object(p.jsxs)("div",{className:"member-page",children:[Object(p.jsx)("h1",{children:"PicDao Member Page"}),Object(p.jsx)("p",{children:"Congratulations on being a member"}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Member List"}),Object(p.jsxs)("table",{className:"card",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Address"}),Object(p.jsx)("th",{children:"Token Amount"})]})}),Object(p.jsx)("tbody",{children:Z.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:(t=e.address,t.substring(0,6)+"..."+t.substring(t.length-4))}),Object(p.jsx)("td",{children:e.tokenAmount})]},e.address);var t}))})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Active Proposals"}),Object(p.jsxs)("form",{onSubmit:function(){var e=Object(a.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),J(!0),c=F.map((function(e){var t={proposalId:e.proposalId,vote:2};return e.votes.forEach((function(n){document.getElementById(e.proposalId+"-"+n.type).checked&&(t.vote=n.type)})),t})),e.prev=4,e.next=7,O.getDelegationOf(n);case 7:if(e.sent!==j.a.constants.AddressZero){e.next=11;break}return e.next=11,O.delegateTo(n);case 11:return e.prev=11,e.next=14,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(t.proposalId);case 2:if(1!==e.sent.state){e.next=5;break}return e.abrupt("return",m.vote(t.proposalId,t.vote));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 14:return e.prev=14,e.next=17,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(t.proposalId);case 2:if(4!==e.sent.state){e.next=5;break}return e.abrupt("return",m.execute(t.proposalId));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:Y(!0),console.log("successfully voted"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.error("failed to execute votes",e.t0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(11),console.error("failed to vote",e.t1);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(4),console.error("failed to delegate tokens");case 34:return e.prev=34,J(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,31,34,37],[11,26],[14,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[F.map((function(e,t){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h5",{children:e.description}),Object(p.jsx)("div",{children:e.votes.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"radio",id:e.proposalId+"-"+t.type,name:e.proposalId,value:t.type,defaultChecked:2===t.type}),Object(p.jsx)("label",{htmlFor:e.proposalId+"-"+t.type,children:t.label})]},t.type)}))})]},e.proposalId)})),Object(p.jsx)("button",{disabled:U||L,type:"submit",children:U?"Voting...":L?"You Already Voted":"Submit Votes"}),Object(p.jsx)("small",{children:"This will trigger multiple transactions that you will need to sign."})]})]})]})]}):Object(p.jsxs)("div",{className:"mint-nft",children:[Object(p.jsx)("h1",{children:"Mint your free PicDAO Membership NFT"}),Object(p.jsx)("button",{disabled:x,onClick:function(){return v(!0),void f.claim("0",1).catch((function(e){console.error("failed to claim",e),v(!1)})).finally((function(){v(!1),A(!0),console.log("\ud83c\udf0a Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/".concat(f.address,"/0"))}))},children:x?"Minting...":"Mint your nft (FREE)"})]}):Object(p.jsxs)("div",{className:"landing",children:[Object(p.jsx)("h1",{children:"Welcome to PicDAO"}),Object(p.jsx)("button",{onClick:function(){return t("injected")},className:"btn=hero",children:"Connect your wallet"})]})};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b.a,{connectors:{injected:{}},supportedChainIds:[4],children:Object(p.jsx)("div",{className:"landing",children:Object(p.jsx)(x,{})})})}),document.getElementById("root"))}},[[241,2,3]]]);
//# sourceMappingURL=main.ed6a00d8.chunk.js.map