import{b as Ve,c as Ln}from"./chunk-MB3375RR.js";import{b as et,d as H,e as ve}from"./chunk-EZJGI3GF.js";import{a as $e,c as Dn}from"./chunk-PS4V2LG4.js";import{a as nt,b as On}from"./chunk-MMQ3FHII.js";import{f as Sn}from"./chunk-373SMQYD.js";import{b as He,e as Pn}from"./chunk-RNOSEJ6V.js";import{a as we,b as Tn,g as xe}from"./chunk-EFAGWLKV.js";import{c as Te,k as Ce,n as En,s as ze,u as An}from"./chunk-TJGHWJRT.js";import{a as je,f as Mn}from"./chunk-VDY6FYSV.js";import{G as _e,H as yn}from"./chunk-AJQGJYTR.js";import{C as Fe,D as Be,K as Ue,M as Ge,O as ft,f as de,g as ge,i as ue,k as me,l as pe,m as he,o as be,p as Oe,q as Pe,u as Le,v as Re,z as Ne}from"./chunk-2P67UXW4.js";import{Aa as le,C as ie,Db as wn,Ea as bn,Fb as Ae,H as re,Hb as kn,Q as pn,Ta as ce,Ua as fn,Ub as De,Vb as xn,Y as bt,_a as _n,e as Zt,g as ln,ga as se,ha as hn,ob as Se,pb as vn,qb as ke,r as ne,rb as Cn,u as dn,w as ht,x as gn,yb as Me}from"./chunk-XBTSVDFA.js";import{A as sn,y as R}from"./chunk-SXAGUB6E.js";import{Gb as ye,Hb as Ie,Ib as Ee,Jb as In}from"./chunk-IFZYL2VM.js";import{a as ee,b as cn}from"./chunk-EGQRDLUX.js";import{m as oe,w as mn}from"./chunk-RSYB37DP.js";import{a as b,b as fe}from"./chunk-M5D6GWR5.js";import{c as ae,d as un}from"./chunk-GWCGHPJA.js";import{a as E,q as pt}from"./chunk-VC6KHKD6.js";import{a as B,g as Jt,h as te}from"./chunk-JKEFPP22.js";import{$b as Ft,$c as ut,Aa as rt,Bc as Gt,Ca as k,Cc as jt,D as Tt,Dc as O,Ea as l,Ec as y,Ed as x,F as Ct,Fc as I,Fd as M,Gc as dt,Hb as h,Hc as zt,Ic as $t,La as st,Ma as U,Na as G,Nc as Ht,Od as Yt,Rd as Qt,S as St,Tc as L,Ua as D,Ub as lt,Uc as Vt,Va as Ot,Vc as Wt,W as wt,Wc as X,Xc as Y,Yb as P,Yc as Kt,Za as Pt,Zb as ct,Zc as qt,_ as kt,_b as Nt,_c as gt,_d as mt,cb as rn,dd as Q,de as C,e as K,fb as Lt,fd as z,ha as xt,ib as j,id as T,ie as S,jd as F,kd as $,ma as Mt,na as At,nb as Rt,nd as Z,o as Et,od as J,pd as tt,ta as on,u as vt,uc as q,wc as Bt,xd as Xt,ya as Dt,yc as Ut,za as N}from"./chunk-GLZGF54H.js";import{a as p,b as it,e as A,j as g}from"./chunk-W2MMT6XF.js";function Hn(o){return typeof o=="function"}function Qn(o){return[yt,o?.loader??[],o?.clipboardOptions??[],o?.markedOptions??[],o?.mermaidOptions??[],o?.markedExtensions??[],o?.sanitize??[]]}var Rn,Nn,Fn,Bn,Un,Gn,jn,zn,$n,Vn,Wn,Kn,qn,Xn,Yn,yt,_t,Na,Fa,Ba,Zn=A(()=>{"use strict";S();S();un();on();rn();sn();dn();gn();ve();ve();Rn=["*"],Nn="Copy",Fn="Copied",Bn=(()=>{class o{constructor(){this._buttonClick$=new K,this.copied=ae(this._buttonClick$.pipe(Mt(()=>Ct(Et(!0),Tt(3e3).pipe(St(!1)))),wt(),xt(1))),this.copiedText=Yt(()=>this.copied()?Fn:Nn)}onCopyToClipboardClick(){this._buttonClick$.next()}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=P({type:o,selectors:[["markdown-clipboard"]],decls:2,vars:3,consts:[[1,"markdown-clipboard-button",3,"click"]],template:function(e,n){e&1&&(zt(0,"button",0),Vt("click",function(){return n.onCopyToClipboardClick()}),T(1),$t()),e&2&&(z("copied",n.copied()),h(),F(n.copiedText()))},encapsulation:2,changeDetection:0})}}return o})(),Un=new k("CLIPBOARD_OPTIONS"),Gn=new k("MARKED_EXTENSIONS"),jn=new k("MARKED_OPTIONS"),zn=new k("MERMAID_OPTIONS"),$n=new k("SANITIZE");Vn="[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information",Wn="[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information",Kn="[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information",qn="[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information",Xn="[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function",Yn="[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information",yt=(()=>{class o{get options(){return this._options}set options(t){this._options=p(p({},this.DEFAULT_MARKED_OPTIONS),t)}get renderer(){return this.options.renderer}set renderer(t){this.options.renderer=t}constructor(){this.clipboardOptions=l(Un,{optional:!0}),this.extensions=l(Gn,{optional:!0}),this.http=l(ne,{optional:!0}),this.mermaidOptions=l(zn,{optional:!0}),this.platform=l(Rt),this.sanitize=l($n,{optional:!0}),this.sanitizer=l(ht),this.DEFAULT_MARKED_OPTIONS={renderer:new et},this.DEFAULT_KATEX_OPTIONS={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}]},this.DEFAULT_MERMAID_OPTIONS={startOnLoad:!1},this.DEFAULT_CLIPBOARD_OPTIONS={buttonComponent:void 0},this.DEFAULT_PARSE_OPTIONS={decodeHtml:!1,inline:!1,emoji:!1,mermaid:!1,markedOptions:void 0,disableSanitizer:!1},this.DEFAULT_RENDER_OPTIONS={clipboard:!1,clipboardOptions:void 0,katex:!1,katexOptions:void 0,mermaid:!1,mermaidOptions:void 0},this.DEFAULT_SECURITY_CONTEXT=st.HTML,this._options=null,this._reload$=new K,this.reload$=this._reload$.asObservable(),this.options=l(jn,{optional:!0})}parse(t,e=this.DEFAULT_PARSE_OPTIONS){let{decodeHtml:n,inline:a,emoji:i,mermaid:r,disableSanitizer:s}=e,d=p(p({},this.options),e.markedOptions),m=d.renderer||this.renderer||new et;this.extensions&&(this.renderer=this.extendsRendererForExtensions(m)),r&&(this.renderer=this.extendsRendererForMermaid(m));let u=this.trimIndentation(t),f=n?this.decodeHtml(u):u,v=i?this.parseEmoji(f):f,_=this.parseMarked(v,d,a);return s?_:this.sanitizeHtml(_)}render(t,e=this.DEFAULT_RENDER_OPTIONS,n){let{clipboard:a,clipboardOptions:i,katex:r,katexOptions:s,mermaid:d,mermaidOptions:m}=e;r&&this.renderKatex(t,p(p({},this.DEFAULT_KATEX_OPTIONS),s)),d&&this.renderMermaid(t,p(p(p({},this.DEFAULT_MERMAID_OPTIONS),this.mermaidOptions),m)),a&&this.renderClipboard(t,n,p(p(p({},this.DEFAULT_CLIPBOARD_OPTIONS),this.clipboardOptions),i)),this.highlight(t)}reload(){this._reload$.next()}getSource(t){if(!this.http)throw new Error(Yn);return this.http.get(t,{responseType:"text"}).pipe(vt(e=>this.handleExtension(t,e)))}highlight(t){if(!R(this.platform)||typeof Prism>"u"||typeof Prism.highlightAllUnder>"u")return;t||(t=document);let e=t.querySelectorAll('pre code:not([class*="language-"])');Array.prototype.forEach.call(e,n=>n.classList.add("language-none")),Prism.highlightAllUnder(t)}decodeHtml(t){if(!R(this.platform))return t;let e=document.createElement("textarea");return e.innerHTML=t,e.value}extendsRendererForExtensions(t){let e=t;return e.\u0275NgxMarkdownRendererExtendedForExtensions===!0||(this.extensions&&this.extensions.length>0&&H.use(...this.extensions),e.\u0275NgxMarkdownRendererExtendedForExtensions=!0),t}extendsRendererForMermaid(t){let e=t;if(e.\u0275NgxMarkdownRendererExtendedForMermaid===!0)return t;let n=t.code;return t.code=a=>a.lang==="mermaid"?`<div class="mermaid">${a.text}</div>`:n(a),e.\u0275NgxMarkdownRendererExtendedForMermaid=!0,t}handleExtension(t,e){let n=t.lastIndexOf("://"),a=n>-1?t.substring(n+4):t,i=a.lastIndexOf("/"),r=i>-1?a.substring(i+1).split("?")[0]:"",s=r.lastIndexOf("."),d=s>-1?r.substring(s+1):"";return d&&d!=="md"?"```"+d+`
`+e+"\n```":e}parseMarked(t,e,n=!1){if(e.renderer){let a=p({},e.renderer);delete a.\u0275NgxMarkdownRendererExtendedForExtensions,delete a.\u0275NgxMarkdownRendererExtendedForMermaid,delete e.renderer,H.use({renderer:a})}return n?H.parseInline(t,e):H.parse(t,e)}parseEmoji(t){if(!R(this.platform))return t;if(typeof joypixels>"u"||typeof joypixels.shortnameToUnicode>"u")throw new Error(Vn);return joypixels.shortnameToUnicode(t)}renderKatex(t,e){if(R(this.platform)){if(typeof katex>"u"||typeof renderMathInElement>"u")throw new Error(Wn);renderMathInElement(t,e)}}renderClipboard(t,e,n){if(!R(this.platform))return;if(typeof ClipboardJS>"u")throw new Error(qn);if(!e)throw new Error(Xn);let{buttonComponent:a,buttonTemplate:i}=n,r=t.querySelectorAll("pre");for(let s=0;s<r.length;s++){let d=r.item(s),m=document.createElement("div");m.style.position="relative",d.parentNode.insertBefore(m,d),m.appendChild(d);let u=document.createElement("div");u.classList.add("markdown-clipboard-toolbar"),u.style.position="absolute",u.style.top=".5em",u.style.right=".5em",u.style.zIndex="1",m.insertAdjacentElement("beforeend",u),m.onmouseenter=()=>u.classList.add("hover"),m.onmouseleave=()=>u.classList.remove("hover");let f;if(a){let _=e.createComponent(a);f=_.hostView,_.changeDetectorRef.markForCheck()}else if(i)f=e.createEmbeddedView(i);else{let _=e.createComponent(Bn);f=_.hostView,_.changeDetectorRef.markForCheck()}let v;f.rootNodes.forEach(_=>{u.appendChild(_),v=new ClipboardJS(_,{text:()=>d.innerText})}),f.onDestroy(()=>v.destroy())}}renderMermaid(t,e=this.DEFAULT_MERMAID_OPTIONS){if(!R(this.platform))return;if(typeof mermaid>"u"||typeof mermaid.initialize>"u")throw new Error(Kn);let n=t.querySelectorAll(".mermaid");n.length!==0&&(mermaid.initialize(e),mermaid.run({nodes:n}))}trimIndentation(t){if(!t)return"";let e;return t.split(`
`).map(n=>{let a=e;return n.length>0&&(a=isNaN(a)?n.search(/\S|$/):Math.min(n.search(/\S|$/),a)),isNaN(e)&&(e=a),a?n.substring(a):n}).join(`
`)}sanitizeHtml(t){return g(this,null,function*(){return Hn(this.sanitize)?this.sanitize(yield t):this.sanitize!==st.NONE?this.sanitizer.sanitize(this.sanitize??this.DEFAULT_SECURITY_CONTEXT,t)??"":t})}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=N({token:o,factory:o.\u0275fac})}}return o})(),_t=(function(o){return o.CommandLine="command-line",o.LineHighlight="line-highlight",o.LineNumbers="line-numbers",o})(_t||{}),Na=(()=>{class o{constructor(){this.element=l(j),this.markdownService=l(yt),this.viewContainerRef=l(lt),this.error=new D,this.load=new D,this.ready=new D,this._clipboard=!1,this._commandLine=!1,this._disableSanitizer=!1,this._emoji=!1,this._inline=!1,this._katex=!1,this._lineHighlight=!1,this._lineNumbers=!1,this._mermaid=!1,this.destroyed$=new K}get disableSanitizer(){return this._disableSanitizer}set disableSanitizer(t){this._disableSanitizer=this.coerceBooleanProperty(t)}get inline(){return this._inline}set inline(t){this._inline=this.coerceBooleanProperty(t)}get clipboard(){return this._clipboard}set clipboard(t){this._clipboard=this.coerceBooleanProperty(t)}get emoji(){return this._emoji}set emoji(t){this._emoji=this.coerceBooleanProperty(t)}get katex(){return this._katex}set katex(t){this._katex=this.coerceBooleanProperty(t)}get mermaid(){return this._mermaid}set mermaid(t){this._mermaid=this.coerceBooleanProperty(t)}get lineHighlight(){return this._lineHighlight}set lineHighlight(t){this._lineHighlight=this.coerceBooleanProperty(t)}get lineNumbers(){return this._lineNumbers}set lineNumbers(t){this._lineNumbers=this.coerceBooleanProperty(t)}get commandLine(){return this._commandLine}set commandLine(t){this._commandLine=this.coerceBooleanProperty(t)}ngOnChanges(){this.loadContent()}loadContent(){if(this.data!=null){this.handleData();return}if(this.src!=null){this.handleSrc();return}}ngAfterViewInit(){!this.data&&!this.src&&this.handleTransclusion(),this.markdownService.reload$.pipe(At(this.destroyed$)).subscribe(()=>this.loadContent())}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}render(t,e=!1){return g(this,null,function*(){let n={decodeHtml:e,inline:this.inline,emoji:this.emoji,mermaid:this.mermaid,disableSanitizer:this.disableSanitizer},a={clipboard:this.clipboard,clipboardOptions:this.getClipboardOptions(),katex:this.katex,katexOptions:this.katexOptions,mermaid:this.mermaid,mermaidOptions:this.mermaidOptions},i=yield this.markdownService.parse(t,n);this.element.nativeElement.innerHTML=i,this.handlePlugins(),this.markdownService.render(this.element.nativeElement,a,this.viewContainerRef),this.ready.emit()})}coerceBooleanProperty(t){return t!=null&&`${String(t)}`!="false"}getClipboardOptions(){if(this.clipboardButtonComponent||this.clipboardButtonTemplate)return{buttonComponent:this.clipboardButtonComponent,buttonTemplate:this.clipboardButtonTemplate}}handleData(){this.render(this.data)}handleSrc(){this.markdownService.getSource(this.src).subscribe({next:t=>{this.render(t).then(()=>{this.load.emit(t)})},error:t=>this.error.emit(t)})}handleTransclusion(){this.render(this.element.nativeElement.innerHTML,!0)}handlePlugins(){this.commandLine&&(this.setPluginClass(this.element.nativeElement,_t.CommandLine),this.setPluginOptions(this.element.nativeElement,{dataFilterOutput:this.filterOutput,dataHost:this.host,dataPrompt:this.prompt,dataOutput:this.output,dataUser:this.user})),this.lineHighlight&&this.setPluginOptions(this.element.nativeElement,{dataLine:this.line,dataLineOffset:this.lineOffset}),this.lineNumbers&&(this.setPluginClass(this.element.nativeElement,_t.LineNumbers),this.setPluginOptions(this.element.nativeElement,{dataStart:this.start}))}setPluginClass(t,e){let n=t.querySelectorAll("pre");for(let a=0;a<n.length;a++){let i=e instanceof Array?e:[e];n.item(a).classList.add(...i)}}setPluginOptions(t,e){let n=t.querySelectorAll("pre");for(let a=0;a<n.length;a++)Object.keys(e).forEach(i=>{let r=e[i];if(r){let s=this.toLispCase(i);n.item(a).setAttribute(s,r.toString())}})}toLispCase(t){let e=t.match(/([A-Z])/g);if(!e)return t;let n=t.toString();for(let a=0,i=e.length;a<i;a++)n=n.replace(new RegExp(e[a]),"-"+e[a].toLowerCase());return n.slice(0,1)==="-"&&(n=n.slice(1)),n}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=P({type:o,selectors:[["markdown"],["","markdown",""]],inputs:{data:"data",src:"src",disableSanitizer:"disableSanitizer",inline:"inline",clipboard:"clipboard",clipboardButtonComponent:"clipboardButtonComponent",clipboardButtonTemplate:"clipboardButtonTemplate",emoji:"emoji",katex:"katex",katexOptions:"katexOptions",mermaid:"mermaid",mermaidOptions:"mermaidOptions",lineHighlight:"lineHighlight",line:"line",lineOffset:"lineOffset",lineNumbers:"lineNumbers",start:"start",commandLine:"commandLine",filterOutput:"filterOutput",host:"host",prompt:"prompt",output:"output",user:"user"},outputs:{error:"error",load:"load",ready:"ready"},features:[Lt],ngContentSelectors:Rn,decls:1,vars:0,template:function(e,n){e&1&&(X(),Y(0))},encapsulation:2})}}return o})(),Fa=(()=>{class o{constructor(){this.domSanitizer=l(ht),this.elementRef=l(j),this.markdownService=l(yt),this.viewContainerRef=l(lt),this.zone=l(Ot)}transform(t,e){return g(this,null,function*(){if(t==null)return"";if(typeof t!="string")return console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof t}]`),t;let n=yield this.markdownService.parse(t,e);return this.zone.onStable.pipe(kt()).subscribe(()=>this.markdownService.render(this.elementRef.nativeElement,e,this.viewContainerRef)),this.domSanitizer.bypassSecurityTrustHtml(n)})}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275pipe=Ft({name:"markdown",type:o,pure:!0})}}return o})();Ba=(()=>{class o{static forRoot(t){return{ngModule:o,providers:[Qn(t)]}}static forChild(){return{ngModule:o}}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=ct({type:o})}static{this.\u0275inj=rt({})}}return o})()});function Jn(o,c){if(o&1&&(y(0,"mat-option",5),T(1),x(2,"translate"),I()),o&2){let t=c.$implicit;O("value",t.type),h(),$("",M(2,2,t.title)," ")}}var ta,We,Ke=A(()=>{"use strict";S();be();pt();fe();ft();En();An();Pn();Sn();wn();kn();ln();S();ft();ta=/^[a-z][a-z0-9+.-]*:/i,We=(()=>{class o{constructor(){this._matDialogRef=l(de),this.data=l(ge),this.T=b,this.attachmentCopy=p({},this.data.attachment),this.attachmentCopy.type||(this.attachmentCopy.type="LINK"),this.types=[{type:"LINK",title:b.F.ATTACHMENT.DIALOG_EDIT.TYPES.LINK},{type:"IMG",title:b.F.ATTACHMENT.DIALOG_EDIT.TYPES.IMG}],E&&this.types.push({type:"FILE",title:b.F.ATTACHMENT.DIALOG_EDIT.TYPES.FILE})}close(t){this._matDialogRef.close(t)}submit(){!this.attachmentCopy.path||!this.attachmentCopy.type||(this.attachmentCopy.path=this.attachmentCopy.path.trim(),(this.attachmentCopy.type==="LINK"||this.attachmentCopy.type==="IMG")&&this.attachmentCopy.path&&!ta.test(this.attachmentCopy.path)&&(this.attachmentCopy.path=this.attachmentCopy.path.startsWith("//")?"http:"+this.attachmentCopy.path:"http://"+this.attachmentCopy.path),this.attachmentCopy.path&&this.close(this.attachmentCopy))}mapTypeToLabel(t){switch(t){case"FILE":return b.F.ATTACHMENT.DIALOG_EDIT.LABELS.FILE;case"IMG":return b.F.ATTACHMENT.DIALOG_EDIT.LABELS.IMG;default:return b.F.ATTACHMENT.DIALOG_EDIT.LABELS.LINK}}mapTypeToPlaceholder(t){switch(t){case"FILE":return b.F.ATTACHMENT.DIALOG_EDIT.PLACEHOLDERS.FILE;case"IMG":return b.F.ATTACHMENT.DIALOG_EDIT.PLACEHOLDERS.IMG;default:return b.F.ATTACHMENT.DIALOG_EDIT.PLACEHOLDERS.LINK}}trackByIndex(t,e){return t}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=P({type:o,selectors:[["dialog-edit-task-attachment"]],decls:34,vars:25,consts:[["form","ngForm"],[3,"submit"],["mat-dialog-title",""],[1,"form-wrapper"],["name","type","required","true",3,"ngModelChange","ngModel"],[3,"value"],["autofocus","autofocus","matInput","","name","path","required","","type","text",3,"ngModelChange","ngModel","placeholder"],["matInput","","name","title","type","text",3,"ngModelChange","ngModel"],["align","end"],["mat-button","","type","button",3,"click"],["color","primary","mat-flat-button","","type","submit",3,"disabled"]],template:function(e,n){if(e&1){let a=Ht();y(0,"form",1,0),L("submit",function(r){return U(a),r.preventDefault(),G(n.submit())}),y(2,"h1",2),T(3),x(4,"translate"),I(),y(5,"mat-dialog-content")(6,"div",3)(7,"mat-form-field")(8,"mat-label"),T(9),x(10,"translate"),I(),y(11,"mat-select",4),tt("ngModelChange",function(r){return U(a),J(n.attachmentCopy.type,r)||(n.attachmentCopy.type=r),G(r)}),Gt(12,Jn,3,4,"mat-option",5,n.trackByIndex,!0),I()(),y(14,"mat-form-field")(15,"mat-label"),T(16),x(17,"translate"),I(),y(18,"input",6),x(19,"translate"),tt("ngModelChange",function(r){return U(a),J(n.attachmentCopy.path,r)||(n.attachmentCopy.path=r),G(r)}),I()(),y(20,"mat-form-field")(21,"mat-label"),T(22),x(23,"translate"),I(),y(24,"input",7),tt("ngModelChange",function(r){return U(a),J(n.attachmentCopy.title,r)||(n.attachmentCopy.title=r),G(r)}),I()()()(),y(25,"mat-dialog-actions",8)(26,"button",9),L("click",function(){return n.close()}),T(27),x(28,"translate"),I(),y(29,"button",10)(30,"mat-icon"),T(31,"save"),I(),T(32),x(33,"translate"),I()()()}if(e&2){let a=Q(1);h(3),$(" ",M(4,11,n.attachmentCopy.id?n.T.F.ATTACHMENT.DIALOG_EDIT.EDIT_ATTACHMENT:n.T.F.ATTACHMENT.DIALOG_EDIT.ADD_ATTACHMENT)," "),h(6),F(M(10,13,n.T.F.ATTACHMENT.DIALOG_EDIT.SELECT_TYPE)),h(2),Z("ngModel",n.attachmentCopy.type),h(),jt(n.types),h(4),F(M(17,15,n.mapTypeToLabel(n.attachmentCopy.type))),h(2),Z("ngModel",n.attachmentCopy.path),O("placeholder",M(19,17,n.mapTypeToPlaceholder(n.attachmentCopy.type))),h(4),F(M(23,19,n.T.G.TITLE)),h(2),Z("ngModel",n.attachmentCopy.title),h(3),$(" ",M(28,21,n.T.G.CANCEL)," "),h(2),O("disabled",!a.valid),h(3),$(" ",M(33,23,n.T.G.SAVE)," ")}},dependencies:[Ge,Be,Pe,Le,Re,Ue,Fe,Ne,me,pe,Ce,Te,ze,He,xe,he,Me,Ae,Zt],styles:["[dir=rtl][_nghost-%COMP%]   h1[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   h1[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]{direction:rtl}.custom-icon-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:column}.form-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media screen and (min-width:600px){.form-wrapper[_ngcontent-%COMP%]{min-width:500px}}"],changeDetection:0})}}return o})()});var qe,so,ea,na,Xe,Ye=A(()=>{"use strict";Dn();On();qe=o=>{if(!o.dataTransfer)throw new Error("No drop data");let c=o.dataTransfer.getData("text");return c?ea(c):na(o.dataTransfer)},so=o=>{let c=o.dataTransfer;return c?`${c.getData("text/uri-list")}
${c.getData("text/plain")}`.split(/[\r\n]+/).map(e=>e.trim()).find(e=>/^https?:\/\/\S+$/i.test(e))??null:null},ea=o=>{if(o&&!o.match(/\n/)){let c=o;c.match(/^http/)||(c="//"+c);let t=$e(c);return{title:Xe(o),path:c,type:t?"IMG":"LINK",icon:t?nt.IMG:nt.LINK}}return null},na=o=>{let c=o.files[0];if(!c)return null;let t=window.ea?.getPathForFile?.(c)||c.name;return t?{title:Xe(c.name||t),path:t,type:"FILE",icon:nt.FILE}:null},Xe=o=>{let c=o.trim(),t;if(c[c.length-1]==="/"){let e=c.substring(0,c.length-2);t=e.substring(e.lastIndexOf("/")+1)}else t=c.substring(c.lastIndexOf("/")+1);return t.lastIndexOf(".")!==-1&&(t=t.substring(0,t.lastIndexOf("."))),t}});var Io,aa=A(()=>{"use strict";S();mn();cn();Ke();be();In();Ye();te();Ln();S();Io=(()=>{class o{constructor(){this._store$=l(oe),this._matDialog=l(ue)}addAttachment(t,e){if(!e){Jt.err("No valid attachment passed");return}this._store$.dispatch(ye({taskId:t,taskAttachment:it(p({},e),{id:ee()})}))}deleteAttachment(t,e){this._store$.dispatch(Ee({taskId:t,id:e}))}updateAttachment(t,e,n){this._store$.dispatch(Ie({taskId:t,taskAttachment:{id:e,changes:n}}))}createFromDrop(t,e,n=!1){this._handleInput(qe(t),t,e,n)}_handleInput(t,e,n,a=!1){if(!t||!t.path)return;let i=e.target;!a&&Ve(i)||(e.preventDefault(),e.stopPropagation(),this._matDialog.open(We,{restoreFocus:!0,data:{attachment:it(p({},t),{taskId:n})}}).afterClosed().subscribe(r=>{r&&(r.id?this.updateAttachment(n,r.id,r):this.addAttachment(n,r))}))}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})()});var Qe,Ze=A(()=>{"use strict";pt();Qe=()=>g(null,null,function*(){if(!E)throw new Error("Default clipboard images path is only available in Electron");let o=yield window.ea.getUserDataPath(),t=!window.ea.isLinux()&&!window.ea.isMacOS()?"\\":"/";return`${o}${t}clipboard-images`})});var Je,oa,wo,tn=A(()=>{"use strict";Je={"image/png":".png","image/jpeg":".jpg","image/gif":".gif","image/webp":".webp","image/svg+xml":".svg","image/bmp":".bmp"},oa={".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".gif":"image/gif",".webp":"image/webp",".svg":"image/svg+xml",".bmp":"image/bmp"},wo=Object.keys(oa)});var V,ia,ra,w,en,It,Fo,sa=A(()=>{"use strict";S();pt();xn();fe();yn();Ze();tn();te();S();V=o=>{let c=o.replace(/\\/g,"/");return c.startsWith("/")?`file://${encodeURI(c)}`:`file:///${encodeURI(c)}`},ia="sp-clipboard-images",ra=1,w="images",en=2*1024*1024,It="indexeddb://clipboard-images/",Fo=(()=>{class o{constructor(){this._snackService=l(De),this._globalConfigService=l(_e),this._db=null,this._dbPromise=null,this._blobUrlCache=new Map}handlePasteWithProgress(t){let e=t.clipboardData;if(!e||!this._hasImageInClipboard(e))return null;let n="![Saving image...]()",a=this._saveImageFromClipboard(e);return{placeholderText:n,resultPromise:a}}_hasImageInClipboard(t){for(let e=0;e<t.items.length;e++)if(t.items[e].type.startsWith("image/"))return!0;for(let e=0;e<t.files.length;e++)if(t.files[e].type.startsWith("image/"))return!0;return!1}_saveImageFromClipboard(t){return g(this,null,function*(){if(E){if(t.files&&t.files.length>0)for(let i=0;i<t.files.length;i++){let r=t.files[i];if(r.type.startsWith("image/"))try{let s=window.ea.getPathForFile(r);if(s){let d=yield this._getElectronImagePath(),m=yield window.ea.copyClipboardImageFile(d,s);if(m){let u=yield window.ea.getClipboardImagePath(d,m.id);if(u){let f=V(u),W=`![${(r.name||"image").replace(/\.[^.]+$/,"")}](${f})`;return this._snackService.open({type:"SUCCESS",msg:b.F.CLIPBOARD_IMAGE.PASTE_SUCCESS}),{success:!0,imageUrl:f,markdownText:W}}}}}catch(s){B.err("[CLIPBOARD] Error getting file path:",s)}}let n=yield this._getElectronImagePath(),a=yield window.ea.readClipboardImage(n);if(a){let i=yield window.ea.getClipboardImagePath(n,a.id);if(i){let r=V(i),s=`![pasted image](${r})`;return this._snackService.open({type:"SUCCESS",msg:b.F.CLIPBOARD_IMAGE.PASTE_SUCCESS}),{success:!0,imageUrl:r,markdownText:s}}}}let e=yield this._extractImageFromClipboard(t);if(!e)return{success:!1};try{let n=yield this.saveImage(e);if(!n)return{success:!1,errorMessage:"Failed to save image"};let a=`![pasted image](${n})`;return this._snackService.open({type:"SUCCESS",msg:b.F.CLIPBOARD_IMAGE.PASTE_SUCCESS}),{success:!0,imageUrl:n,markdownText:a}}catch(n){return B.err("[CLIPBOARD] Error saving clipboard image:",n),B.err("[CLIPBOARD] Error stack:",n instanceof Error?n.stack:"no stack"),{success:!1,errorMessage:n instanceof Error?n.message:"Unknown error"}}})}_tryGetImageFromFilePaths(){return g(this,null,function*(){try{let t=yield window.ea.getClipboardFilePaths();if(!t||t.length===0){let u=yield this._getElectronImagePath(),f=yield window.ea.readClipboardImage(u);if(f){let v=yield window.ea.getClipboardImagePath(u,f.id);if(v){let _=V(v),W=`![pasted image](${_})`;return this._snackService.open({type:"SUCCESS",msg:b.F.CLIPBOARD_IMAGE.PASTE_SUCCESS}),{success:!0,imageUrl:_,markdownText:W}}}return null}let e=t[0],n=yield this._getElectronImagePath(),a=yield window.ea.copyClipboardImageFile(n,e);if(!a)return null;let i=yield window.ea.getClipboardImagePath(n,a.id);if(!i)return null;let r=V(i),m=`![${(e.split(/[\\/]/).pop()||"image").replace(/\.[^.]+$/,"")}](${r})`;return this._snackService.open({type:"SUCCESS",msg:b.F.CLIPBOARD_IMAGE.PASTE_SUCCESS}),{success:!0,imageUrl:r,markdownText:m}}catch(t){return B.err("Error getting image from file paths:",t),null}})}_extractImageFromClipboard(t){return g(this,null,function*(){for(let e=0;e<t.items.length;e++){let n=t.items[e];if(n.type.startsWith("image/")){let a=n.getAsFile();if(a)return a}}for(let e=0;e<t.files.length;e++){let n=t.files[e];if(n.type.startsWith("image/"))return n}return null})}isIndexedDbUrl(t){return t.startsWith(It)}extractImageId(t){let e=t.match(/^indexeddb:\/\/clipboard-images\/([^?\s=]+)/);return e?e[1]:null}hasResolvableImages(t){return t.includes(It)||E&&t.includes("/clipboard-images/")}resolveMarkdownImages(t){return g(this,null,function*(){let e=t,n=t.match(/indexeddb:\/\/clipboard-images\/[^)\s=]+/g);if(n){let a=[...new Set(n)],i=new Map;yield Promise.all(a.map(r=>g(this,null,function*(){let s=yield this.resolveIndexedDbUrl(r);s&&i.set(r,s)})));for(let[r,s]of i)e=e.split(r).join(s)}if(E){let a=/file:\/\/\/[^)\s"]*\/clipboard-images\/[^)\s"/]+\.[a-z]{2,5}/g,i=new Map,r;for(;(r=a.exec(e))!==null;){let s=r[0],m=(s.split("/").pop()??"").replace(/\.[^.]+$/,"");m&&i.set(s,m)}i.size>0&&(yield Promise.all([...i.entries()].map(m=>g(this,[m],function*([s,d]){let u=`electron-file:${d}`,f=this._blobUrlCache.get(u);if(f)e=e.split(s).join(f);else{let v=yield this._getImageElectron(d);if(v){let _=URL.createObjectURL(v);this._blobUrlCache.set(u,_),e=e.split(s).join(_)}}}))))}return e})}resolveClipboardImageUrl(t){return g(this,null,function*(){if(this.isIndexedDbUrl(t))return this.resolveIndexedDbUrl(t);if(E&&t.startsWith("file:///")&&t.includes("/clipboard-images/")){let n=(t.split("/").pop()??"").replace(/\.[^.]+$/,"");if(!n)return null;let a=`electron-file:${n}`,i=this._blobUrlCache.get(a);if(i)return i;let r=yield this._getImageElectron(n);if(!r)return null;let s=URL.createObjectURL(r);return this._blobUrlCache.set(a,s),s}return null})}resolveIndexedDbUrl(t){return g(this,null,function*(){if(!this.isIndexedDbUrl(t))return null;let e=this.extractImageId(t);if(!e)return null;let n=this._blobUrlCache.get(e);if(n)return n;try{let a=yield this.getImage(e);if(!a)return null;let i=URL.createObjectURL(a);return this._blobUrlCache.set(e,i),i}catch(a){return B.err("Error resolving indexeddb URL for clipboard image:",a),null}})}saveImage(t,e){return g(this,null,function*(){if(!E&&t.size>en)return this._snackService.open({type:"ERROR",msg:b.F.CLIPBOARD_IMAGE.SIZE_EXCEEDED,translateParams:{maxSize:this._formatSize(en),actualSize:this._formatSize(t.size)}}),null;let n=e||this._generateImageId(),a=t.type||"image/png";return E?this._saveImageElectron(n,t,a):this._saveImageWeb(n,t,a)})}getImage(t){return g(this,null,function*(){return E?this._getImageElectron(t):this._getImageWeb(t)})}deleteImage(t){return g(this,null,function*(){return E?this._deleteImageElectron(t):this._deleteImageWeb(t)})}listImages(){return g(this,null,function*(){return E?this._listImagesElectron():this._listImagesWeb()})}getImageUrl(t){return`${It}${t}`}_generateImageId(){let t=Date.now(),e=Math.random().toString(36).substring(2,10);return`clip-${t}-${e}`}_getDb(){return g(this,null,function*(){return this._db?this._db:this._dbPromise?this._dbPromise:(this._dbPromise=new Promise((t,e)=>{let n=indexedDB.open(ia,ra);n.onerror=()=>{e(new Error("Failed to open clipboard images database"))},n.onsuccess=()=>{this._db=n.result,t(n.result)},n.onupgradeneeded=a=>{let i=a.target.result;i.objectStoreNames.contains(w)||i.createObjectStore(w,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})}}),this._dbPromise)})}_saveImageWeb(t,e,n){return g(this,null,function*(){let a=yield this._getDb(),i={id:t,blob:e,mimeType:n,createdAt:Date.now(),size:e.size};return new Promise((r,s)=>{let u=a.transaction([w],"readwrite").objectStore(w).put(i);u.onsuccess=()=>r(this.getImageUrl(t)),u.onerror=()=>{u.error?.name==="QuotaExceededError"?(this._snackService.open({type:"ERROR",msg:b.F.CLIPBOARD_IMAGE.STORAGE_QUOTA_EXCEEDED}),s(new Error("Storage quota exceeded"))):s(new Error("Failed to save clipboard image"))}})})}_getImageWeb(t){return g(this,null,function*(){let e=yield this._getDb();return new Promise((n,a)=>{let s=e.transaction([w],"readonly").objectStore(w).get(t);s.onsuccess=()=>{let d=s.result;n(d?.blob??null)},s.onerror=()=>a(new Error("Failed to get clipboard image"))})})}_deleteImageWeb(t){return g(this,null,function*(){let e=this._blobUrlCache.get(t);e&&(URL.revokeObjectURL(e),this._blobUrlCache.delete(t));let n=yield this._getDb();return new Promise((a,i)=>{let d=n.transaction([w],"readwrite").objectStore(w).delete(t);d.onsuccess=()=>a(!0),d.onerror=()=>i(new Error("Failed to delete clipboard image"))})})}_listImagesWeb(){return g(this,null,function*(){let t=yield this._getDb();return new Promise((e,n)=>{let r=t.transaction([w],"readonly").objectStore(w).getAll();r.onsuccess=()=>{let s=r.result;e(s.map(d=>({id:d.id,mimeType:d.mimeType,createdAt:d.createdAt,size:d.size})))},r.onerror=()=>n(new Error("Failed to list clipboard images"))})})}_getElectronImagePath(){return g(this,null,function*(){let t=this._globalConfigService.clipboardImages()?.imagePath;return t||Qe()})}_saveImageElectron(t,e,n){return g(this,null,function*(){let a=yield this._getElectronImagePath(),i=this._getExtensionFromMimeType(n),r=`${t}${i}`,s=yield e.arrayBuffer(),d=this._arrayBufferToBase64(s),m=yield window.ea.saveClipboardImage(a,r,d,n);return V(m)})}_getImageElectron(t){return g(this,null,function*(){let e=yield this._getElectronImagePath(),n=yield window.ea.loadClipboardImage(e,t);if(!n)return null;let a=atob(n.base64),i=new Uint8Array(a.length);for(let r=0;r<a.length;r++)i[r]=a.charCodeAt(r);return new Blob([i],{type:n.mimeType})})}_deleteImageElectron(t){return g(this,null,function*(){let e=`electron-file:${t}`,n=this._blobUrlCache.get(e);n&&(URL.revokeObjectURL(n),this._blobUrlCache.delete(e));let a=yield this._getElectronImagePath();return window.ea.deleteClipboardImage(a,t)})}_listImagesElectron(){return g(this,null,function*(){let t=yield this._getElectronImagePath();return window.ea.listClipboardImages(t)})}_formatSize(t){return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}_getExtensionFromMimeType(t){return Je[t]||".png"}_arrayBufferToBase64(t){let e="",n=new Uint8Array(t);for(let a=0;a<n.byteLength;a++)e+=String.fromCharCode(n[a]);return btoa(e)}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})()});function ba(o,c){if(o&1&&(y(0,"div",2),dt(1,"mat-pseudo-checkbox",6),I()),o&2){let t=Wt();h(),O("disabled",t.disabled)}}var pa,ha,nn,an,fa,ot,_a,ya,Ia=A(()=>{"use strict";_n();pn();Mn();hn();bn();S();S();ft();vn();Tn();fn();Cn();pa=["button"],ha=["*"];nn=new k("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),an=new k("MatButtonToggleGroup"),fa={provide:Oe,useExisting:Dt(()=>_a),multi:!0},ot=class{source;value;constructor(c,t){this.source=c,this.value=t}},_a=(()=>{class o{_changeDetector=l(mt);_dir=l(re,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=l(bt).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new D;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new D;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=l(nn,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new je(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||se(t))return;let n=t.target.id,a=this._buttonToggles.toArray().findIndex(r=>r.buttonId===n),i=null;switch(t.keyCode){case 32:case 13:i=this._buttonToggles.get(a)||null;break;case 38:i=this._getNextButton(a,-1);break;case 37:i=this._getNextButton(a,this.dir==="ltr"?-1:1);break;case 40:i=this._getNextButton(a,1);break;case 39:i=this._getNextButton(a,this.dir==="ltr"?1:-1);break;default:return}i&&(t.preventDefault(),i._onButtonClick(),i.focus())}_emitChangeEvent(t){let e=new ot(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,n=!1,a=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(t,n)):this._updateModelValue(t,n)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let n=this._buttonToggles;for(let a=1;a<=n.length;a++){let i=(t+e*a+n.length)%n.length,r=n.get(i);if(r&&!r.disabled)return r}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(n=>this._selectValue(n,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(n=>n.tabIndex===-1)){for(let n of e)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let n of e)if(n.value===t){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(e){return new(e||o)};static \u0275dir=Nt({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,n,a){if(e&1&&Kt(a,ya,5),e&2){let i;gt(i=ut())&&(n._buttonToggles=i)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,n){e&1&&L("keydown",function(i){return n._keydown(i)}),e&2&&(q("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),z("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",C],value:"value",multiple:[2,"multiple","multiple",C],disabled:[2,"disabled","disabled",C],disabledInteractive:[2,"disabledInteractive","disabledInteractive",C],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",C],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",C]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Xt([fa,{provide:an,useExisting:o}])]})}return o})(),ya=(()=>{class o{_changeDetectorRef=l(mt);_elementRef=l(j);_focusMonitor=l(le);_idGenerator=l(bt);_animationDisabled=ce();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new D;constructor(){l(ie).load(ke);let t=l(an,{optional:!0}),e=l(new Qt("tabindex"),{optional:!0})||"",n=l(nn,{optional:!0});this._tabIndex=Pt(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new ot(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=P({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(e,n){if(e&1&&qt(pa,5),e&2){let a;gt(a=ut())&&(n._buttonElement=a.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,n){e&1&&L("focus",function(){return n.focus()}),e&2&&(q("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),z("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",C],appearance:"appearance",checked:[2,"checked","checked",C],disabled:[2,"disabled","disabled",C],disabledInteractive:[2,"disabledInteractive","disabledInteractive",C]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:ha,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,n){if(e&1&&(X(),y(0,"button",1,0),L("click",function(){return n._onButtonClick()}),Bt(2,ba,2,1,"div",2),y(3,"span",3),Y(4),I()(),dt(5,"span",4)(6,"span",5)),e&2){let a=Q(1);O("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),q("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),h(2),Ut(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),h(4),O("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Se,we],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return o})()});export{jn as a,$n as b,Na as c,Fa as d,Ba as e,Zn as f,_a as g,ya as h,Ia as i,We as j,Ke as k,qe as l,so as m,Ye as n,Io as o,aa as p,Qe as q,Ze as r,Fo as s,sa as t};
