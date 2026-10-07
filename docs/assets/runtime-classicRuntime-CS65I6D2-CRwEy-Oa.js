import"./runtime-chunk-NSD7DU3P-DnRyHIe_.js";import{$ as e,$t as t,C as n,Ct as r,D as i,Dt as a,Et as o,Ft as s,Gn as c,H as l,I as u,J as d,Kt as f,L as p,Ln as m,M as h,Nn as g,O as _,Or as v,Ot as y,Pr as b,Rn as x,Rt as S,S as C,V as w,Vt as T,Wn as ee,Wr as E,Wt as te,Yn as D,Zr as ne,Zt as re,_r as O,bn as k,bt as ie,c as ae,cr as oe,d as se,di as ce,dn as le,er as ue,f as de,fn as fe,g as pe,gt as me,h as he,hi as ge,hn as _e,ir as A,it as j,j as ve,kn as ye,mi as be,n as xe,nn as Se,nr as Ce,oi as we,ot as M,p as Te,q as Ee,s as De,sr as Oe,ti as N,tn as ke,tr as Ae,tt as je,ui as Me,ut as Ne,vr as Pe,w as Fe,wn as Ie,wr as Le,wt as Re,x as ze,yi as Be,zn as Ve,zr as P,zt as He}from"./runtime-chunk-BVVSZMXD-C0U0OTli.js";import{Dt as Ue,G as We,M as Ge,O as Ke,V as qe,ct as Je,r as F}from"./runtime-chunk-JTZ2BWZ5-zB1iMwXe.js";import{_ as Ye}from"./runtime-chunk-LMFUBJAV-R2_OmHkq.js";import"./runtime-chunk-M2T4RO2D-Byj-jrE-.js";import{$ as I,C as Xe,I as L,M as R,N as Ze,Q as Qe,R as $e,S as et,V as tt,W as nt,X as rt,f as it,o as at,v as ot}from"./runtime-chunk-DP3AR4VQ-B6FZ7CIn.js";import"./runtime-chunk-527RBW75-BoKRUbGs.js";import"./runtime-chunk-PT3SK5Y2-Db-7HDu6.js";import"./runtime-chunk-J75KVK5X-CzPldQBf.js";import"./runtime-chunk-L3VQ7NCZ-DkIkKgMy.js";import"./runtime-chunk-NCSYGW6A-PGzuyj9g.js";import"./runtime-chunk-4OEOYE2D-UzhpnAO-.js";import"./runtime-chunk-SWZSRJHU-BfpMQt4-.js";import{t as st}from"./runtime-chunk-GZVBTZFU-ILGRKBEh.js";import"./runtime-chunk-LXDQYQMR-B6Ri_fE5.js";import"./runtime-chunk-IJ3C3QXB-fFMe-h_V.js";import"./runtime-chunk-2N5TJKJO-DCXtndAD.js";import"./runtime-chunk-ILTVEYH2-bGcmQoED.js";import{s as ct}from"./runtime-chunk-FQNSP44B-2UyJPVbm.js";import{b as lt,v as ut}from"./react-spline-C1dn9Tl3.js";import{a as dt,c as ft,d as pt,f as z,i as mt,l as ht,m as B,n as gt,o as _t,p as vt,r as yt,s as bt,t as xt,u as St}from"./runtime-chunk-3IZ67XSS-qyCkpLaL.js";import{n as Ct,r as wt,t as Tt}from"./runtime-chunk-UIRA2CWJ-JSw2bsHO.js";import{a as Et,n as Dt,o as Ot,r as kt,t as At}from"./runtime-chunk-AP2M7YLZ-CfwH4nA6.js";import{n as jt}from"./runtime-chunk-CVUJ3GMH-CDPeE1UM.js";import{t as Mt}from"./runtime-chunk-GFTBNL2W-xOoWAF2a.js";var Nt=class{constructor(e){if(this.hashProperties=void 0,this.isNode=!0,this.shortcuts={},Nt.uuidContext===null)throw Error(`plz startContext`);this.uuid=Nt.uuidContext===Nt.globalContext?`_gid`+Nt.uuidContext.nodeContextUuid++:`_uid`+Nt.uuidContext.nodeContextUuid++,this.type=e,this.name=``}static startContext(e){this.uuidContext===null||this.uuidContext===Nt.globalContext?this.uuidContext=e:console.error(`Can't start context twice`)}static endContext(e){this.uuidContext!==e&&console.error(`Can't end context twice`),this.uuidContext=null}analyze(e,t){t=t??{},e.analyzing=!0,this.build(e.addFlow(t.slot,t.cache,t.context),`v4`),e.clearVertexNodeCode(),e.clearFragmentNodeCode(),e.removeFlow(),e.analyzing=!1}analyzeAndFlow(e,t,n){return n=n??{},this.analyze(e,n),this.flow(e,t,n)}flow(e,t,n){n=n??{},e.addFlow(n.slot,n.cache,n.context);let r={result:this.build(e,t),code:e.clearNodeCode(),extra:e.context.extra};return e.removeFlow(),r}build(e,t,n){t=t??this.getType(e,t);let r=e.getNodeData(n??this);return e.analyzing&&this.appendDepsNode(e,r,t),e.nodes.indexOf(this)===-1&&e.nodes.push(this),this.updateFrame!==void 0&&e.updaters.indexOf(this)===-1&&e.updaters.push(this),this.generate(e,t,n)}updateFrame(e){}generateReadonly(e,t,n,r,i,a){return``}generate(e,t,n,r,i){return``}parse(e,t,n,r){}appendDepsNode(e,t,n){t.deps=(t.deps||0)+1;let r=e.getTypeLength(n);(r>(t.outputMax||0)||this.getType(e,n))&&(t.outputMax=r,t.output=n)}setName(e){this.name=e}getName(){return this.name}getType(e,t){return t===`sampler2D`||t===`samplerCube`?t:this.type}},Pt=Nt;Pt.globalContext={nodeContextUuid:0},Pt.uuidContext=Nt.globalContext;var Ft=3e3,It=3001,Lt=class{constructor(e){e=e??{},this.name=e.name,this.type=e.type,this.node=e.node,this.size=e.size,this.needsUpdate=e.needsUpdate}get value(){return this.node.value}set value(e){this.node.value=e}},Rt=new class{constructor(){this.nodes={},this.keywords={}}add(e){this.nodes[e.name]=e}addKeyword(e,t,n){n=n===void 0||n,this.keywords[e]={callback:t,cache:n}}remove(e){delete this.nodes[e.name]}removeKeyword(e){delete this.keywords[e]}get(e){return this.nodes[e]}getKeyword(e,t){return this.keywords[e].callback(t)}getKeywordData(e){return this.keywords[e]}contains(e){return this.nodes[e]!==void 0}containsKeyword(e){return this.keywords[e]!==void 0}},V=class extends Pt{constructor(e,t){super(e),this.scope=``,t=t??{},this.shared=t.shared===void 0||t.shared,this.unique=t.unique!==void 0&&t.unique}build(e,t,n,r){if(t=t??this.getType(e),this.getShared(e,t)){let i=this.getUnique(e,t);i&&this.uuid===void 0&&(this.uuid=Se.generateUUID()),n=e.getUUID(n??this.getUUID(),!i);let a=e.getNodeData(n),o=a.output||this.getType(e);if(e.analyzing)return(a.deps||0)>0||this.getLabel()?(this.appendDepsNode(e,a,t),this.generate(e,t,n)):super.build(e,t,n);if(i)return a.name=a.name||super.build(e,t,n),a.name;if(!this.getLabel()&&(!this.getShared(e,o)||e.context.ignoreCache||a.deps===1))return super.build(e,t,n);n=this.getUUID(!1);let s=this.getTemp(e,n);if(s)return e.format(s,o,t);{s=super.generate(e,t,n,a.output,r);let i=this.generate(e,o,n);return e.addNodeCode(s+` = `+i+`;`),e.format(s,o,t)}}return super.build(e,t,n)}getShared(e,t){return t!==`sampler2D`&&t!==`samplerCube`&&this.shared}getUnique(e,t){return this.unique}setLabel(e){return this.label=e,this}getLabel(){return this.label}getUUID(e){let t=this.uuid;return typeof this.scope==`string`&&(t=this.scope+`-`+t),t}getTemp(e,t){t=t||this.uuid;let n=e.getVars()[t];return n?n.name:void 0}generate(e,t,n,r,i){return this.getShared(e,t)||console.error(`TempNode is not shared`),n=n??this.uuid,e.getTempVar(n,r??this.getType(e),i,this.getLabel()).name}},zt=class extends V{constructor(e,t){(t=t??{}).shared=t.shared!==void 0&&t.shared,super(e,t),this.readonly=!1}setReadonly(e){return this.readonly=e,this.hashProperties=this.readonly?[`value`]:void 0,this}getReadonly(){return this.readonly}generate(e,t,n,r,i,a){n=e.getUUID(n??this.getUUID()),r=r??this.getType(e);let o=e.getNodeData(n);return this.getReadonly()&&this.generateReadonly!==void 0?this.generateReadonly(e,t,n,r,i,a):e.isShader(`vertex`)?(o.vertex||(o.vertex=e.createVertexUniform(r,this,i,a,this.getLabel())),e.format(o.vertex.name,r,t)):(o.fragment||(o.fragment=e.createFragmentUniform(r,this,i,a,this.getLabel())),e.format(o.fragment.name,r,t))}},Bt=class extends zt{constructor(e=0,t){super(`v2`),this.nodeType=`Vector2`,this.value=e instanceof _?e:new _(e,t)}get x(){return this.value.x}set x(e){this.value.x=e}get y(){return this.value.y}set y(e){this.value.y=e}generateReadonly(e,t,n,r,i,a){return e.format(`vec2(`+this.value.x+`, `+this.value.y+`)`,r,t)}},Vt=class extends zt{constructor(e=0,t,n){super(`v3`),this.nodeType=`Vector3`,this.value=e instanceof l?e:new l(e,t,n)}get x(){return this.value.x}set x(e){this.value.x=e}get y(){return this.value.y}set y(e){this.value.y=e}get z(){return this.value.z}set z(e){this.value.z=e}generateReadonly(e,t,n,r,i,a){return e.format(`vec3(`+this.value.x+`, `+this.value.y+`, `+this.value.z+`)`,r,t)}},Ht=class extends zt{constructor(e){super(`v4`),this.nodeType=`Vector4`,this.value=e instanceof it?e:new it(e.r,e.g,e.b,e.a)}generateReadonly(e,t,n,r,i,a){return e.format(`vec4(`+this.value.r+`, `+this.value.g+`, `+this.value.b+`, `+this.value.a+`)`,r,t)}},H=class extends zt{constructor(e){super(`f`),this.nodeType=`Float`,this.value=e??0}generateReadonly(e,t,n,r,i,a){return e.format(this.value+(this.value%1?``:`.0`),r,t)}},Ut=/^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i,Wt=/[a-z_0-9]+/gi,U=class extends V{constructor(e,t,n,r,i){super(i),this.src=``,this.nodeType=`Function`,this.useKeywords=!0,this.includes=[],this.extensions={},this.keywords={},this.isMethod=i===void 0,this.isInterface=!1,this.parse(e,t,n,r)}getShared(e,t){return!this.isMethod}getType(e){return e.getTypeByFormat(this.type)}getInputByName(e){if(this.inputs){let t=this.inputs.length;for(;t--;)if(this.inputs[t].name===e)return this.inputs[t]}}getIncludeByName(e){if(this.includes){let t=this.includes.length;for(;t--;)if(this.includes[t].name===e)return this.includes[t]}}generate(e,t,n,r,i){let a,o=0,s=this.src;if(this.includes)for(let t=0;t<this.includes.length;t++)e.include(this.includes[t],this);for(let t in this.extensions)e.extensions[t]=!0;let c=[];for(;a=Wt.exec(this.src);)c.push(a);for(let t=0;t<c.length;t++){let n=c[t],r=n[0],i=!this.isMethod||!this.getInputByName(r),a=r;if(this.keywords[r]||this.useKeywords&&i&&Rt.containsKeyword(r)){let t=this.keywords[r];if(!t){let n=Rt.getKeywordData(r);n.cache&&(t=e.keywords[r]),t=t||Rt.getKeyword(r,e),n.cache&&(e.keywords[r]=t)}a=t.build(e)}r!==a&&s[n.index+o-1]!==`.`&&(s=s.substring(0,n.index+o)+a+s.substring(n.index+r.length+o),o+=a.length-r.length),this.getIncludeByName(a)===void 0&&Rt.contains(a)&&e.include(Rt.get(a))}return t===`source`?s:this.isMethod?(this.isInterface||e.include(this,void 0,s),this.name):e.format(`( `+s+` )`,this.getType(e),t)}parse(e,t,n,r){if(this.src=e||``,this.includes=t??[],this.extensions=n??{},this.keywords=r??{},this.isMethod){let e=Ut.exec(this.src);if(this.inputs=[],e&&e.length==4){this.type=e[1],this.name=e[2];let t=e[3].match(Wt);if(t){let e=0;for(;e<t.length;){let n,r=t[e++];r===`in`||r===`out`||r===`inout`?n=t[e++]:(n=r,r=``);let i=t[e++];this.inputs.push({name:i,type:n,qualifier:r})}}this.isInterface=this.src.indexOf(`{`)===-1}else this.type=``,this.name=``}}},Gt=/^([a-z_0-9]+)\s([a-z_0-9]+)\s?=?\s?(.*?)(;|$)/i,Kt=class extends V{constructor(e=``,t){super(),this.src=``,this.useDefine=!1,this.nodeType=`Const`,this.parse(e||Kt.PI,void 0,void 0,void 0,t)}getType(e){return e.getTypeByFormat(this.type)}parse(e,t,n,r,i){this.src=e||``;let a,o,s=``,c=Gt.exec(e);this.useDefine=i??this.src.charAt(0)===`#`,c&&c.length>1?(o=c[1],a=c[2],s=c[3]):(a=this.src,o=`f`),this.name=a,this.type=o,this.value=s}build(e,t){if(t===`source`){if(this.value)return this.useDefine?`#define `+this.name+` `+this.value:`const `+this.type+` `+this.name+` = `+this.value+`;`;if(this.useDefine)return this.src}return e.include(this),e.format(this.name,this.getType(e),t)}generate(e,t,n,r,i){return e.format(this.name,this.getType(e),t)}},W=Kt;W.PI=`PI`,W.PI2=`PI2`,W.RECIPROCAL_PI=`RECIPROCAL_PI`,W.RECIPROCAL_PI2=`RECIPROCAL_PI2`,W.LOG2=`LOG2`,W.EPSILON=`EPSILON`;var qt=RegExp(`^structs*([a-z_0-9]+)s*{s*((.|
)*?)}`,`gim`),Jt=RegExp(`s*(w*?)s*(w*?)(=|;)`,`gim`),Yt=class extends V{constructor(e=``){super(),this.inputs=[],this.src=``,this.nodeType=`Struct`,this.parse(e)}getType(e){return e.getTypeByFormat(this.name)}getInputByName(e){let t=this.inputs.length;for(;t--;)if(this.inputs[t].name===e)return this.inputs[t]}generate(e,t,n,r,i){return t===`source`?this.src+`;`:e.format(`( `+this.src+` )`,this.getType(e),t)}parse(e=``){this.src=e,this.inputs=[];let t=qt.exec(e);if(t){let e,n=t[2];for(;e=Jt.exec(n);)this.inputs.push({type:e[1],name:e[2]});this.name=t[1]}else this.name=``;this.type=this.name}},Xt=class extends V{constructor(e){super(`v2`,{shared:!1}),this.nodeType=`UV`,this.index=e??0}generate(e,t){e.requires.uv[this.index]=!0;let n=this.index>0?this.index+1:``,r=e.isShader(`vertex`)?`uv`+n:`vUv`+n;return e.format(r,this.getType(e),t)}};Rt.addKeyword(`uv`,function(){return new Xt}),Rt.addKeyword(`uv2`,function(){return new Xt(1)});var Zt=class extends V{constructor(e,t){super(`v4`),this.nodeType=`ColorSpace`,this.input=e,this.method=t??Zt.LINEAR_TO_LINEAR,this.hashProperties=[`method`]}static getEncodingComponents(e){switch(e){case Ft:return[`Linear`];case It:return[`sRGB`];default:return[]}}generate(e,t){let n=this.input.build(e,`v4`),r=this.getType(e),i=Zt.Nodes[this.method],a=e.include(i);if(a===Zt.LINEAR_TO_LINEAR)return e.format(n,r,t);if(i.inputs?.length===2){let i=this.factor.build(e,`f`);return e.format(a+`( `+n+`, `+i+` )`,r,t)}return e.format(a+`( `+n+` )`,r,t)}fromEncoding(e){let t=Zt.getEncodingComponents(e);this.method=`LinearTo`+t[0],this.factor=t[1]}fromDecoding(e){let t=Zt.getEncodingComponents(e);this.method=t[0]+`ToLinear`,this.factor=t[1]}},Qt=Zt;Qt.Nodes={LinearToLinear:new U([`vec4 LinearToLinear( in vec4 value ) {`,`	return value;`,`}`].join(`
`)),sRGBToLinear:new U([`vec4 sRGBToLinear( in vec4 value ) {`,`	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );`,`}`].join(`
`)),LinearTosRGB:new U([`vec4 LinearTosRGB( in vec4 value ) {`,`	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );`,`}`].join(`
`))},Qt.LINEAR_TO_LINEAR=`LinearToLinear`,Qt.SRGB_TO_LINEAR=`sRGBToLinear`,Qt.LINEAR_TO_SRGB=`LinearTosRGB`;var G=class extends U{constructor(e=``,t,n,r,i){super(e,i,r,n,t),this.nodeType=`Expression`}},$t=class extends zt{constructor(e=new m,t,n,r){super(`v4`,{shared:!0}),this.nodeType=`Texture`,this.value=e,this.uv=t??new Xt,this.bias=n,this.project=r!==void 0&&r}getTexture(e,t){return super.generate(e,t,this.value.uuid,`t`)}generate(e,t){if(t===`sampler2D`)return this.getTexture(e,t);let n,r,i=this.getTexture(e,t),a=this.uv.build(e,this.project?`v4`:`v2`),o=this.bias?this.bias.build(e,`f`):void 0;o===void 0&&e.context.bias&&(o=e.context.bias.setTexture(this).build(e,`f`)),n=this.project?`texture2DProj`:o?`tex2DBias`:`tex2D`,r=o?n+`( `+i+`, `+a+`, `+o+` )`:n+`( `+i+`, `+a+` )`;let s={include:e.isShader(`vertex`),ignoreCache:!0},c=this.getType(e);return e.addContext(s),this.colorSpace=this.colorSpace??new Qt(new G(``,c)),this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(r),r=this.colorSpace.build(e,c),e.removeContext(),e.format(r,c,t)}},en=class extends V{constructor(e,t){super(),this.inputs=[],this.nodeType=`FunctionCall`,this.value=e,this.inputs=t??[]}getFunction(){return this.value}getType(e){return this.value.getType(e)}generate(e,t,n,r,i){r=this.getType(e);let a=this.value,o=a.build(e,t)+`( `,s=[];if(a.inputs){for(let t=0;t<a.inputs.length;t++){let n=a.inputs[t],r=this.inputs[t]||this.inputs[n.name];s.push(r.build(e,e.getTypeByFormat(n.type)))}o+=s.join(`, `)+` )`}return e.format(o,r,t)}},tn=class extends V{constructor(e,t,n=tn.ADD){super(),this.nodeType=`Operator`,this.type=e.type,this.a=e,this.b=t,this.op=n}getType(e){let t=this.a.getType(e),n=this.b.getType(e);return e.isTypeMatrix(t)?`v4`:e.getTypeLength(n)>e.getTypeLength(t)?n:t}generate(e,t){let n=this.getType(e);this.type=n;let r=this.a.build(e,n),i=this.b.build(e,n);return e.format(`( `+r+` `+this.op+` `+i+` )`,n,t)}},nn=tn;nn.ADD=`+`,nn.SUB=`-`,nn.MUL=`*`,nn.DIV=`/`;var K=class extends V{constructor(e,t=K.ABS,n,r){super(),this.nodeType=`Math`,this.a=e,typeof t==`string`?r=t:this.b=t,typeof n==`string`?r=n:this.c=n,this.method=r,this.hashProperties=[`method`]}getNumInputs(e){switch(this.method){case K.MIX:case K.CLAMP:case K.REFRACT:case K.SMOOTHSTEP:case K.FACEFORWARD:return 3;case K.MIN:case K.MAX:case K.MOD:case K.STEP:case K.REFLECT:case K.DISTANCE:case K.DOT:case K.CROSS:case K.POW:return 2;default:return 1}}getInputType(e){let t=e.getTypeLength(this.a.getType(e)),n=this.b?e.getTypeLength(this.b.getType(e)):0,r=this.c?e.getTypeLength(this.c.getType(e)):0;return t>n&&t>r?this.a.getType(e):n>r?this.b.getType(e):this.c.getType(e)}getType(e){switch(this.method){case K.LENGTH:case K.DISTANCE:case K.DOT:return`f`;case K.CROSS:return`v3`}return this.getInputType(e)}generate(e,t){let n,r,i,a=this.a?e.getTypeLength(this.a.getType(e)):0,o=this.b?e.getTypeLength(this.b.getType(e)):0,s=this.c?e.getTypeLength(this.c.getType(e)):0,c=this.getInputType(e),l=this.getType(e);switch(this.type=l,this.method){case K.NEGATE:return e.format(`( -`+this.a.build(e,c)+` )`,c,t);case K.INVERT:return e.format(`( 1.0 - `+this.a.build(e,c)+` )`,c,t);case K.CROSS:n=this.a.build(e,`v3`),r=this.b.build(e,`v3`);break;case K.STEP:n=this.a.build(e,a===1?`f`:c),r=this.b.build(e,c);break;case K.MIN:case K.MAX:case K.MOD:n=this.a.build(e,c),r=this.b.build(e,o===1?`f`:c);break;case K.REFRACT:n=this.a.build(e,c),r=this.b.build(e,c),i=this.c.build(e,`f`);break;case K.MIX:n=this.a.build(e,c),r=this.b.build(e,c),i=this.c.build(e,s===1?`f`:c);break;default:n=this.a.build(e,c),this.b&&(r=this.b.build(e,c)),this.c&&(i=this.c.build(e,c))}let u=[];u.push(n),r&&u.push(r),i&&u.push(i);let d=this.getNumInputs(e);if(u.length!==d)throw Error(`Arguments not match used in "${this.method}". Require ${d}, currently ${u.length}.`);return e.format(this.method+`( `+u.join(`, `)+` )`,l,t)}},q=K;q.RAD=`radians`,q.DEG=`degrees`,q.EXP=`exp`,q.EXP2=`exp2`,q.LOG=`log`,q.LOG2=`log2`,q.SQRT=`sqrt`,q.INV_SQRT=`inversesqrt`,q.FLOOR=`floor`,q.CEIL=`ceil`,q.NORMALIZE=`normalize`,q.FRACT=`fract`,q.SATURATE=`saturate`,q.SIN=`sin`,q.COS=`cos`,q.TAN=`tan`,q.ASIN=`asin`,q.ACOS=`acos`,q.ARCTAN=`atan`,q.ABS=`abs`,q.SIGN=`sign`,q.LENGTH=`length`,q.NEGATE=`negate`,q.INVERT=`invert`,q.MIN=`min`,q.MAX=`max`,q.MOD=`mod`,q.STEP=`step`,q.REFLECT=`reflect`,q.DISTANCE=`distance`,q.DOT=`dot`,q.CROSS=`cross`,q.POW=`pow`,q.MIX=`mix`,q.CLAMP=`clamp`,q.REFRACT=`refract`,q.SMOOTHSTEP=`smoothstep`,q.FACEFORWARD=`faceforward`;var rn=class extends V{constructor(e,t,n){super(`v4`),this.nodeType=`TextureCubeUV`,this.value=e,this.uv=t,this.bias=n}bilinearCubeUV(e,t,n,r){let i=new en(rn.Nodes.bilinearCubeUV,[t,n,r]);this.colorSpaceTL=this.colorSpaceTL??new Qt(new G(``,`v4`)),this.colorSpaceTL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTL.input.parse(i.build(e)+`.tl`),this.colorSpaceTR=this.colorSpaceTR??new Qt(new G(``,`v4`)),this.colorSpaceTR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTR.input.parse(i.build(e)+`.tr`),this.colorSpaceBL=this.colorSpaceBL??new Qt(new G(``,`v4`)),this.colorSpaceBL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBL.input.parse(i.build(e)+`.bl`),this.colorSpaceBR=this.colorSpaceBR??new Qt(new G(``,`v4`)),this.colorSpaceBR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBR.input.parse(i.build(e)+`.br`);let a={include:e.isShader(`vertex`),ignoreCache:!0};e.addContext(a),this.colorSpaceTLExp=new G(this.colorSpaceTL.build(e,`v4`),`v4`),this.colorSpaceTRExp=new G(this.colorSpaceTR.build(e,`v4`),`v4`),this.colorSpaceBLExp=new G(this.colorSpaceBL.build(e,`v4`),`v4`),this.colorSpaceBRExp=new G(this.colorSpaceBR.build(e,`v4`),`v4`),e.removeContext();let o=new G(`mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )`,`v4`);return o.keywords.cubeUV_TL=this.colorSpaceTLExp,o.keywords.cubeUV_TR=this.colorSpaceTRExp,o.keywords.cubeUV_BL=this.colorSpaceBLExp,o.keywords.cubeUV_BR=this.colorSpaceBRExp,o.keywords.cubeUV=i,o}generate(e,t){if(e.isShader(`fragment`)){let n=this.uv,r=this.bias||e.context.roughness,i=new q(new en(rn.Nodes.roughnessToMip,[r]),rn.Nodes.m0,rn.Nodes.cubeUV_maxMipLevel,q.CLAMP),a=new q(i,q.FLOOR),o=new q(i,q.FRACT),s=new q(this.bilinearCubeUV(e,this.value,n,a),this.bilinearCubeUV(e,this.value,n,new nn(a,new H(1).setReadonly(!0),nn.ADD)),o,q.MIX);return e.format(s.build(e),`v4`,t)}return console.warn(`TextureCubeUVNode is not compatible with `+e.shader+` shader.`),e.format(`vec4( 0.0 )`,this.getType(e),t)}},an=rn;an.Nodes=function(){let e=new Yt(`struct TextureCubeUVData {
			vec4 tl;
			vec4 tr;
			vec4 br;
			vec4 bl;
			vec2 f;
		}`),t=new W(`float cubeUV_maxMipLevel 8.0`,!0),n=new W(`float cubeUV_minMipLevel 4.0`,!0),r=new W(`float cubeUV_maxTileSize 256.0`,!0),i=new W(`float cubeUV_minTileSize 16.0`,!0),a=new U(`float getFace(vec3 direction) {
				vec3 absDirection = abs(direction);
				float face = -1.0;
				if (absDirection.x > absDirection.z) {
					if (absDirection.x > absDirection.y)
						face = direction.x > 0.0 ? 0.0 : 3.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				} else {
					if (absDirection.z > absDirection.y)
						face = direction.z > 0.0 ? 2.0 : 5.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				}
				return face;
		}`);a.useKeywords=!1;let o=new U(`vec2 getUV(vec3 direction, float face) {
				vec2 uv;
				if (face == 0.0) {
					uv = vec2(direction.z, direction.y) / abs(direction.x); 
				} else if (face == 1.0) {
					uv = vec2(-direction.x, -direction.z) / abs(direction.y); 
				} else if (face == 2.0) {
					uv = vec2(-direction.x, direction.y) / abs(direction.z); 
				} else if (face == 3.0) {
					uv = vec2(-direction.z, direction.y) / abs(direction.x); 
				} else if (face == 4.0) {
					uv = vec2(-direction.x, direction.z) / abs(direction.y); 
				} else {
					uv = vec2(direction.x, direction.y) / abs(direction.z); 
				}
				return 0.5 * (uv + 1.0);
		}`);o.useKeywords=!1;let s=new U(`TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
			float face = getFace(direction);
			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
			mipInt = max(mipInt, cubeUV_minMipLevel);
			float faceSize = exp2(mipInt);
			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
			vec2 uv = getUV(direction, face) * (faceSize - 1.0);
			vec2 f = fract(uv);
			uv += 0.5 - f;
			if (face > 2.0) {
				uv.y += faceSize;
				face -= 3.0;
			}
			uv.x += face * faceSize;
			if(mipInt < cubeUV_maxMipLevel){
				uv.y += 2.0 * cubeUV_maxTileSize;
			}
			uv.y += filterInt * 2.0 * cubeUV_minTileSize;
			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
			uv *= texelSize;
			vec4 tl = texture2D(envMap, uv);
			uv.x += texelSize;
			vec4 tr = texture2D(envMap, uv);
			uv.y += texelSize;
			vec4 br = texture2D(envMap, uv);
			uv.x -= texelSize;
			vec4 bl = texture2D(envMap, uv);
			return TextureCubeUVData( tl, tr, br, bl, f );
		}`,[e,a,o,t,n,r,i]);s.useKeywords=!1;let c=new W(`float r0 1.0`,!0),l=new W(`float v0 0.339`,!0),u=new W(`float m0 -2.0`,!0);return{bilinearCubeUV:s,roughnessToMip:new U(`float roughnessToMip(float roughness) {
			float mip = 0.0;
			if (roughness >= r1) {
				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
			} else if (roughness >= r4) {
				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
			} else if (roughness >= r5) {
				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
			} else if (roughness >= r6) {
				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
			} else {
				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
			}
			return mip;
		}`,[c,l,u,new W(`float r1 0.8`,!0),new W(`float v1 0.276`,!0),new W(`float m1 -1.0`,!0),new W(`float r4 0.4`,!0),new W(`float v4 0.046`,!0),new W(`float m4 2.0`,!0),new W(`float r5 0.305`,!0),new W(`float v5 0.016`,!0),new W(`float m5 3.0`,!0),new W(`float r6 0.21`,!0),new W(`float v6 0.0038`,!0),new W(`float m6 4.0`,!0)]),m0:u,cubeUV_maxMipLevel:t}}();var on=class extends V{constructor(e){super(`v3`),this.nodeType=`Normal`,this.scope=e??on.VIEW}getShared(){return this.scope===on.WORLD}build(e,t,n,r){let i=e.context[this.scope+`Normal`];return i?i.build(e,t,n,r):super.build(e,t,n)}generate(e,t,n,r,i){let a;switch(this.scope){case on.VIEW:a=e.isShader(`vertex`)?`transformedNormal`:`geometryNormal`;break;case on.LOCAL:e.isShader(`vertex`)?a=`objectNormal`:(e.requires.normal=!0,a=`vObjectNormal`);break;case on.WORLD:e.isShader(`vertex`)?a=`inverseTransformDirection( transformedNormal, viewMatrix ).xyz`:(e.requires.worldNormal=!0,a=`vWNormal`)}return e.format(a,this.getType(e),t)}},sn=on;sn.LOCAL=`local`,sn.WORLD=`world`,sn.VIEW=`view`,sn.NORMAL=`normal`,Rt.addKeyword(`viewNormal`,function(){return new sn(sn.VIEW)}),Rt.addKeyword(`localNormal`,function(){return new sn(sn.NORMAL)}),Rt.addKeyword(`worldNormal`,function(){return new sn(sn.WORLD)});var cn=class extends V{constructor(e){super(`v3`),this.nodeType=`Position`,this.scope=e??cn.LOCAL}getType(){return this.scope===cn.PROJECTION?`v4`:this.type}getShader(){switch(this.scope){case cn.LOCAL:case cn.WORLD:return!1}return!0}generate(e,t,n,r,i){let a;switch(this.scope){case cn.LOCAL:e.isShader(`vertex`)?a=`transformed`:(e.requires.position=!0,a=`vPosition`);break;case cn.WORLD:if(e.isShader(`vertex`))return`( modelMatrix * vec4( transformed, 1.0 ) ).xyz`;e.requires.worldPosition=!0,a=`vWPosition`;break;case cn.VIEW:a=e.isShader(`vertex`)?`-mvPosition.xyz`:`vViewPosition`;break;case cn.PROJECTION:a=e.isShader(`vertex`)?`( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )`:`vec4( 0.0 )`}return e.format(a,this.getType(),t)}},ln=cn;ln.LOCAL=`local`,ln.WORLD=`world`,ln.VIEW=`view`,ln.PROJECTION=`projection`,Rt.addKeyword(`position`,function(){return new ln}),Rt.addKeyword(`worldPosition`,function(){return new ln(ln.WORLD)}),Rt.addKeyword(`viewPosition`,function(){return new ln(ln.VIEW)});var un=class extends V{constructor(e){super(`v3`),this.nodeType=`Reflect`,this.scope=e??un.CUBE}getUnique(e){return!e.context.viewNormal}getType(){return this.scope===un.SPHERE?`v2`:this.type}generate(e,t){let n=this.getUnique(e);if(e.isShader(`fragment`)){let r;switch(this.scope){case un.VECTOR:{let t=new sn(sn.VIEW),i=e.context.roughness,a=t.build(e,`v3`),o=new ln(ln.VIEW).build(e,`v3`),s=i?i.build(e,`f`):void 0,c=`reflect( -normalize( ${o} ), ${a} )`;s&&(c=`normalize( mix( ${c}, ${a}, ${s} * ${s} ) )`);let l=`inverseTransformDirection( ${c}, viewMatrix )`;n?(e.addNodeCode(`vec3 reflectVec = ${l};`),r=`reflectVec`):r=l;break}case un.CUBE:{let t=new un(un.VECTOR).build(e,`v3`),i=`vec3( -`+t+`.x, `+t+`.yz )`;n?(e.addNodeCode(`vec3 reflectCubeVec = ${i};`),r=`reflectCubeVec`):r=i;break}case un.SPHERE:{let t=`normalize( ( viewMatrix * vec4( `+new un(un.VECTOR).build(e,`v3`)+`, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5`;n?(e.addNodeCode(`vec2 reflectSphereVec = ${t};`),r=`reflectSphereVec`):r=t;break}}return e.format(r,this.getType(),t)}return console.warn(`ReflectNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.type,t)}},dn=un;dn.CUBE=`cube`,dn.SPHERE=`sphere`,dn.VECTOR=`vector`;var fn=class extends V{constructor(e=new $t,t,n){super(`v4`),this.nodeType=`TextureCube`,this.value=e,this.radianceNode=new an(this.value,t??new dn(dn.VECTOR),n),this.irradianceNode=new an(this.value,new sn(sn.WORLD),new H(1).setReadonly(!0))}generate(e,t){return e.isShader(`fragment`)?(e.require(`irradiance`),e.context.bias&&e.context.bias.setTexture(this.value),(e.slot===`irradiance`?this.irradianceNode:this.radianceNode).build(e,t)):(console.warn(`TextureCubeNode is not compatible with `+e.shader+` shader.`),e.format(`vec4( 0.0 )`,this.getType(e),t))}},pn=class extends zt{constructor(e=new n,t,r){super(`v4`,{shared:!0}),this.nodeType=`CubeTexture`,this.value=e,this.uv=t??new dn,this.bias=r}getTexture(e,t){return super.generate(e,t,this.value.uuid,`tc`)}generate(e,t){if(t===`samplerCube`)return this.getTexture(e,t);let n,r=this.getTexture(e,t),i=this.uv?.build(e,`v3`),a=this.bias?this.bias.build(e,`f`):void 0;a===void 0&&e.context.bias&&(a=e.context.bias.setTexture(this).build(e,`f`)),n=a?`texCubeBias( `+r+`, `+i+`, `+a+` )`:`texCube( `+r+`, `+i+` )`;let o={include:e.isShader(`vertex`),ignoreCache:!0},s=this.getType(e);return e.addContext(o),this.colorSpace=this.colorSpace??new Qt(new G(``,s)),this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(n),n=this.colorSpace.build(e,s),e.removeContext(),e.format(n,s,t)}},mn=[`x`,`y`,`z`,`w`],hn=[`float`,`vec2`,`vec3`,`vec4`],gn={float:`f`,vec2:`v2`,vec3:`v3`,vec4:`v4`,mat4:`v4`,int:`i`,bool:`b`,"float[]":`f[]`,"vec4[]":`v4[]`},_n={t:`sampler2D`,tc:`samplerCube`,b:`bool`,i:`int`,f:`float`,c:`vec3`,v2:`vec2`,v3:`vec3`,v4:`vec4`,m3:`mat3`,m4:`mat4`,"f[]":`float[]`,"v4[]":`vec4[]`},vn=class{constructor(){this.includes={consts:{},functions:{},structs:{}},this.cache=``,this.slot=``,this.shader=``,this.context={},this.needsJitter=!0,this.getIncludesCode=function(){function e(e,t){return e.deps.length-t.deps.length}return function(t,n){let r=this.getIncludes(t,n);if(!r)return``;let i=``;r=r.sort(e);for(let e=0;e<r.length;e++)r[e].src&&(i+=r[e].src+`
`);return i}}(),this.slots=[],this.caches=[],this.contexts=[],this.keywords={},this.nodeData={},this.fragmentVariables={},this.fragmentParsVariables={},this.vertexParsVariables={},this.requires={uv:[],color:[],transparent:!1,irradiance:!1,position:!1,worldPosition:!1,normal:!1,worldNormal:!1,vWorldViewDir:!1,modelMatrix:!1,viewMatrix:!1,projectionMatrix:!1},this.includes={consts:[],functions:[],structs:[]},this.attributes={},this.prefixCode=[`#ifdef TEXTURE_LOD_EXT`,`	#define texCube(a, b) textureCube(a, b)`,`	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)`,`	#define tex2D(a, b) texture2D(a, b)`,`	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)`,`#else`,`	#define texCube(a, b) textureCube(a, b)`,`	#define texCubeBias(a, b, c) textureCube(a, b, c)`,`	#define tex2D(a, b) texture2D(a, b)`,`	#define tex2DBias(a, b, c) texture2D(a, b, c)`,`#endif`,`
			
			#define SPE_BLENDING_NORMAL 0
			#define SPE_BLENDING_MULTIPLY 1
			#define SPE_BLENDING_SCREEN 2
			#define SPE_BLENDING_OVERLAY 3

			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, b, alpha );
			}

			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, a * b, alpha );
			}

			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );
				return mix( a, tmp, alpha );
			}

			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );
				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );
			}

			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {
				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );
				return vec3( 1.0 );
			}
			`,`#include <packing>`,`#include <common>`].join(`
`),this.parsCode={vertex:[`float neighbor_offset = 0.0001;`,``].join(`
`),fragment:[`float accumAlpha = 0.0;`,`void accumulateAlpha(float alpha) {
					accumAlpha += (1.0 - accumAlpha) * alpha;
				}`,``].join(`
`)},this.code={vertex:``,fragment:``},this.nodeCode={vertex:``,fragment:``},this.resultCode={vertex:``,fragment:``},this.finalCode={vertex:``,fragment:``},this.inputs={uniforms:{list:[],vertex:[],fragment:[]},arrayUniforms:{list:[],vertex:[],fragment:[]},vars:{varying:[],vertex:[],fragment:[]}},this.defines={},this.uniforms={},this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.updaters=[],this.nodes=[],this.analyzing=!1}build(e,t){this.addVertexParsCode(`
uniform int frameIndex;
uniform vec2 resolution;
uniform mat4 previousModelViewMatrix;
uniform mat4 previousProjectionMatrix;

varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
`),this.addFragmentParsCode(`
layout(location = 1) out vec4 gVelocity;

uniform int frameIndex;
uniform vec2 resolution;
// Transparent depth ordering (COM-1866): 0 for the color draw (the legacy
// "discard fully transparent pixels"), TRANSPARENT_DEPTH_ALPHA_CUTOFF on a
// material's depth twin — see materials/depthPrepass.ts.
uniform float alphaDiscardCutoff;

varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;

const vec2 haltonSequence[16] = vec2[16](
vec2( 0.000000,-0.333334),
vec2(-0.500000, 0.333334),
vec2( 0.500000,-0.777778),
vec2(-0.750000,-0.111112),
vec2( 0.250000, 0.555556),
vec2(-0.250000,-0.555556),
vec2( 0.750000, 0.111112),
vec2(-0.875000, 0.777778),
vec2(0.125000, -0.925926),
vec2(-0.375000, -0.259260),
vec2(0.625000, 0.407408),
vec2(-0.625000, -0.703704),
vec2(0.375000, -0.037038),
vec2(-0.125000, 0.629630),
vec2(0.875000, -0.481482),
vec2(-0.937500, 0.185186));

vec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
  float theta = float(sampleIndex) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}

// Derived from the interleaved gradient function from Jimenez 2014 http:goo.gl/eomGso
float getNoiseInterleavedGradient(vec2 screenPos) {
    vec3 magic = vec3(0.06711056f, 0.00583715f, 52.9829189f);
    return fract(magic.z * fract(dot(screenPos, magic.xy)));
}

`),this.mergeUniform({alphaDiscardCutoff:new H(0)}),this.buildShader(`vertex`,e),this.buildShader(`fragment`,t);for(let e=0;e<this.requires.uv.length;e++)if(this.requires.uv[e]){let t=e>0?e+1:``;this.addVaryCode(`varying vec2 vUv`+t+`;`),e>0&&this.addVertexParsCode(`attribute vec2 uv`+t+`;`),this.addVertexFinalCode(`vUv`+t+` = uv`+t+`;`)}return this.requires.color[0]&&(this.addVaryCode(`varying vec4 vColor;`),this.addVertexFinalCode(`
				#if defined( USE_COLOR_ALPHA )
					vColor = color;
				#elif defined( USE_COLOR )
					vColor = vec4( color, 1.0 );
				#else
					vColor = vec4( 1.0 );
				#endif
			`)),this.requires.color[1]&&(this.addVaryCode(`varying vec4 vColor2;`),this.addVertexParsCode(`attribute vec4 color2;`),this.addVertexFinalCode(`vColor2 = color2;`)),this.requires.position&&(this.addVaryCode(`varying vec3 vPosition;`),this.addVertexFinalCode(`vPosition = transformed;`)),this.requires.worldPosition,this.requires.normal&&(this.addVaryCode(`varying vec3 vObjectNormal;`),this.addVertexFinalCode(`
				#ifndef SHAPEBLEND 
					vObjectNormal = normal;
				#else
					vObjectNormal = objectNormal;
				#endif
			`)),this.requires.modelMatrix&&this.addFragmentParsCode(`uniform mat4 modelMatrix;`),this.requires.viewMatrix&&this.addFragmentParsCode(`uniform mat4 viewMatrix;`),this.requires.projectionMatrix&&this.addFragmentParsCode(`uniform mat4 projectionMatrix;`),this.requires.worldNormal&&(this.addVaryCode(`varying vec3 vWNormal;`),this.addVertexFinalCode(`vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;`)),this.requires.vWorldViewDir&&(this.addVaryCode(`varying vec3 vWorldViewDir;`),this.addVertexFinalCode(`vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );`)),this.needsJitter&&(this.addVertexFinalCode(`

const vec2 haltonSequence[16] = vec2[16](
vec2( 0.000000,-0.333334),
vec2(-0.500000, 0.333334),
vec2( 0.500000,-0.777778),
vec2(-0.750000,-0.111112),
vec2( 0.250000, 0.555556),
vec2(-0.250000,-0.555556),
vec2( 0.750000, 0.111112),
vec2(-0.875000, 0.777778),
vec2(0.125000, -0.925926),
vec2(-0.375000, -0.259260),
vec2(0.625000, 0.407408),
vec2(-0.625000, -0.703704),
vec2(0.375000, -0.037038),
vec2(-0.125000, 0.629630),
vec2(0.875000, -0.481482),
vec2(-0.937500, 0.185186));


vec2 offset = haltonSequence[frameIndex];
offset.x /= resolution.x;
offset.y /= resolution.y;

vec4 currentPosition = gl_Position;
vec4 currentPositionJittered = currentPosition + (vec4(offset.x, offset.y, 0.0, 0.0) * currentPosition.w);



vCurrentPosition = currentPosition;
vec4 previousLocalPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING



previousLocalPosition = instanceMatrix * previousLocalPosition;
#endif
vPreviousPosition = previousProjectionMatrix * previousModelViewMatrix * previousLocalPosition;
#ifdef OUTLINE_COMPENSATION
vPreviousPosition.xy += OUTLINE_COMPENSATION;
#endif
gl_Position = currentPositionJittered;

`),this.addFragmentFinalCode(`
vec2 oldPos = vPreviousPosition.xy;
    oldPos /= vPreviousPosition.w;
    oldPos.xy = (oldPos.xy+1.)/2.0;

vec2 newPos = vCurrentPosition.xy;
    newPos /= vCurrentPosition.w;
    newPos.xy = (newPos.xy+1.)/2.0;

vec2 velocity = (newPos - oldPos);



if (gl_FragColor.a <= alphaDiscardCutoff) discard;

gVelocity = vec4(velocity, 0.0, 1.0);
`)),this}buildShader(e,t){this.resultCode[e]=t.build(this.setShader(e),`v4`)}setMaterial(e,t){return this.defines={},this}addFlow(e,t,n){return this.addSlot(e).addCache(t).addContext(n)}removeFlow(){return this.removeSlot().removeCache().removeContext()}addCache(e){return this.cache=e??``,this.caches.push(this.cache),this}removeCache(){return this.caches.pop(),this.cache=this.caches[this.caches.length-1]||``,this}addContext(e){return this.context=Object.assign({},this.context,e),this.context.extra=this.context.extra||{},this.contexts.push(this.context),this}removeContext(){return this.contexts.pop(),this.context=this.contexts[this.contexts.length-1]||{},this}addSlot(e){return this.slot=e||``,this.slots.push(this.slot),this}removeSlot(){return this.slots.pop(),this.slot=this.slots[this.slots.length-1]||``,this}addFragmentVariable(e,t){this.fragmentVariables[e]===void 0&&(this.addFragmentCode(`${t} ${e};`),this.fragmentVariables[e]=``)}addFragmentParsVariable(e,t){this.fragmentParsVariables[e]===void 0&&(this.addFragmentParsCode(`${t} ${e};`),this.fragmentParsVariables[e]=``)}addVertexParsVariable(e,t){this.vertexParsVariables[e]===void 0&&(this.addVertexParsCode(`${t} ${e};`),this.vertexParsVariables[e]=``)}addVertexCode(e){this.addCode(e,`vertex`)}addFragmentCode(e){this.addCode(e,`fragment`)}addCode(e,t){this.code[t??this.shader]+=e+`
`}addVertexNodeCode(e){this.addNodeCode(e,`vertex`)}addFragmentNodeCode(e){this.addNodeCode(e,`fragment`)}addNodeCode(e,t){this.nodeCode[t??this.shader]+=e+`
`}clearNodeCode(e){e=e??this.shader;let t=this.nodeCode[e];return this.nodeCode[e]=``,t}clearVertexNodeCode(){return this.clearNodeCode(`vertex`)}clearFragmentNodeCode(){return this.clearNodeCode(`fragment`)}addVertexFinalCode(e){this.addFinalCode(e,`vertex`)}addFragmentFinalCode(e){this.addFinalCode(e,`fragment`)}addFinalCode(e,t){this.finalCode[t??this.shader]+=e+`
`}addVertexParsCode(e){this.addParsCode(e,`vertex`)}addFragmentParsCode(e){this.addParsCode(e,`fragment`)}addParsCode(e,t){this.parsCode[t??this.shader]+=e+`
`}addVaryCode(e){this.addVertexParsCode(e),this.addFragmentParsCode(e)}isCache(e){return this.caches.indexOf(e)!==-1}isSlot(e){return this.slots.indexOf(e)!==-1}define(e,t){this.defines[e]=t===void 0?1:t}require(e){this.requires[e]=!0}isDefined(e){return this.defines[e]!==void 0}getVar(e,t,n,r=`varying`,i=`V`,a=``){let o=this.getVars(r),s=o[e];if(!s){let r=o.length;s={name:n||`node`+i+r+(a?`_`+a:``),type:t},o.push(s),o[e]=s}return s}getTempVar(e,t,n,r){return this.getVar(e,t,n,this.shader,`T`,r)}getAttribute(e,t){if(!this.attributes[e]){let n=this.getVar(e,t);this.addVertexParsCode(`attribute `+t+` `+e+`;`),this.addVertexFinalCode(n.name+` = `+e+`;`),this.attributes[e]={varying:n,name:e,type:t}}return this.attributes[e]}getCode(e){return[this.prefixCode,this.parsCode[e],this.getVarListCode(this.getVars(`varying`),`varying`),this.getVarListCode(this.inputs.uniforms[e],`uniform`),this.getVarListCode(this.inputs.arrayUniforms[e],`uniform`),this.getIncludesCode(`consts`,e),this.getIncludesCode(`structs`,e),this.getIncludesCode(`functions`,e),`void main() {`,this.getVarListCode(this.getVars(e)),this.code[e],this.resultCode[e],this.finalCode[e],`}`].join(`
`)}getVarListCode(e,t){t=t??``;let n=``;for(let r=0,i=e.length;r<i;++r){let i=e[r],a=i.type,o=i.name,s=i.size,c=this.getFormatByType(a);if(c===void 0)throw Error(`Node pars `+c+` not found.`);c.includes(`[]`)?n+=t+` `+c.substring(0,c.length-2)+` `+o+`[${s}];\n`:n+=t+` `+c+` `+o+`;
`}return n}getVars(e){return this.inputs.vars[e??this.shader]}getNodeData(e){let t=e instanceof Pt?e.uuid:e;return this.nodeData[t]=this.nodeData[t]||{}}createUniform(e,t,n,r,i,a){if(t.includes(`[]`)){let o=this.inputs.arrayUniforms,s=o.list.length,c=new Lt({type:t,size:n.size,name:r||`nodeUA`+s+(a?`_`+a:``),node:n,needsUpdate:i});return o.list.push(c),o[e].push(c),o[e][c.name]=c,this.uniforms[c.name]=c,c}{let o=this.inputs.uniforms,s=o.list.length,c=new Lt({type:t,name:r||`nodeU`+s+(a?`_`+a:``),node:n,needsUpdate:i});return o.list.push(c),o[e].push(c),o[e][c.name]=c,this.uniforms[c.name]=c,c}}createVertexUniform(e,t,n,r,i){return this.createUniform(`vertex`,e,t,n,r,i)}createFragmentUniform(e,t,n,r,i){return this.createUniform(`fragment`,e,t,n,r,i)}include(e,t,n){let r;if(e=typeof e==`string`?Rt.get(e):e,!1===this.context.include)return e.name;e instanceof U?r=this.includes.functions:e instanceof W?r=this.includes.consts:e instanceof Yt&&(r=this.includes.structs);let i=r[this.shader]=r[this.shader]||[];if(e){let r=i[e.name];if(r||(r=i[e.name]={node:e,deps:[]},i.push(r),r.src=e.build(this,`source`)),e instanceof U&&t&&i[t.name]&&i[t.name].deps.indexOf(e)===-1&&(i[t.name].deps.push(e),e.includes?.length)){let n=0;do this.include(e.includes[n++],t);while(n<e.includes.length)}return n&&(r.src=n),e.name}throw Error(`Include not found.`)}colorToVectorProperties(e){return e.replace(`r`,`x`).replace(`g`,`y`).replace(`b`,`z`).replace(`a`,`w`)}colorToVector(e){return e.replace(/c/g,`v3`)}getIncludes(e,t){return this.includes[e][t||this.shader]}getConstructorFromLength(e){return hn[e-1]}isTypeMatrix(e){return/^m/.test(e)}getTypeLength(e){return e===`f`?1:parseInt(this.colorToVector(e).substr(1))}getTypeFromLength(e){return e===1?`f`:`v`+e}findNode(...e){for(let t=0;t<arguments.length;t++){let n=e[t];if(n?.isNode)return n}}resolve(...e){for(let t=0;t<arguments.length;t++){let n=e[t];if(n!==void 0){if(n.isNode)return n;if(n.isTexture)switch(n.mapping){case 301:case 302:return new pn(n);case 306:return new fn(new $t(n));default:return new $t(n)}else{if(n.isVector2)return new Bt(n);if(n.isVector3)return new Vt(n);if(n.isVector4)return new Ht(n)}}}}format(e,t,n){switch(this.colorToVector(n+` <- `+t)){case`f <- v2`:case`f <- v3`:case`f <- v4`:return e+`.x`;case`f <- i`:case`f <- b`:return`float( `+e+` )`;case`v2 <- f`:return`vec2( `+e+` )`;case`v2 <- v3`:case`v2 <- v4`:return e+`.xy`;case`v2 <- i`:case`v2 <- b`:case`v3 <- i`:case`v3 <- b`:return`vec2( float( `+e+` ) )`;case`v3 <- f`:return`vec3( `+e+` )`;case`v3 <- v2`:return`vec3( `+e+`, 0.0 )`;case`v3 <- v4`:return e+`.xyz`;case`v4 <- f`:return`vec4( `+e+` )`;case`v4 <- v2`:return`vec4( `+e+`, 0.0, 1.0 )`;case`v4 <- v3`:return`vec4( `+e+`, 1.0 )`;case`v4 <- i`:case`v4 <- b`:return`vec4( float( `+e+` ) )`;case`i <- f`:case`i <- b`:return`int( `+e+` )`;case`i <- v2`:case`i <- v3`:case`i <- v4`:return`int( `+e+`.x )`;case`b <- f`:return`( `+e+` != 0.0 )`;case`b <- v2`:return`( `+e+` != vec2( 0.0 ) )`;case`b <- v3`:return`( `+e+` != vec3( 0.0 ) )`;case`b <- v4`:return`( `+e+` != vec4( 0.0 ) )`;case`b <- i`:return`( `+e+` != 0 )`}return e}getTypeByFormat(e){return gn[e]||e}getFormatByType(e){return _n[e]||e}getUUID(e,t){return(t=t===void 0||t)&&this.cache&&(e=this.cache+`-`+e),e}getElementByIndex(e){return mn[e]}getIndexByElement(e){return mn.indexOf(e)}isShader(e){return this.shader===e}setShader(e){return this.shader=e,this}mergeDefines(e){for(let t in e)this.defines[t]=e[t];return this.defines}mergeUniform(e){for(let t in e)this.uniforms[t]=e[t];return this.uniforms}getTextureEncodingFromMap(e){let t;return e?e.isTexture&&(t=e.colorSpace===`srgb`?It:Ft):t=Ft,t===Ft&&this.context.gamma&&(t=It),t}},J=class extends zt{constructor(e=0,t,n,r){super(`c`),this.nodeType=`Color`,this.value=e instanceof it?e:new it(e||0,t,n,r)}setRGBA(e){this.value.setRGBA(e.r,e.g,e.b,e.a)}generate(e,t,n,r,i,a){n=e.getUUID(n??this.getUUID()),r=r??this.getType(e);let o=e.getNodeData(n),s=this.getReadonly()&&this.generateReadonly!==void 0;if(this.alpha){let t=this.alpha.build(e,`f`);e.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${t};`)}return s?this.generateReadonly(e,t,n,r,i,a):e.isShader(`vertex`)?(o.vertex||(o.vertex=e.createVertexUniform(r,this,i,a,this.getLabel())),e.format(o.vertex.name,r,t)):(o.fragment||(o.fragment=e.createFragmentUniform(r,this,i,a,this.getLabel())),e.format(o.fragment.name,r,t))}generateReadonly(e,t,n,r,i,a){return e.format(`vec3(`+this.value.r+`, `+this.value.g+`, `+this.value.b+`)`,r,t)}},Y=class extends zt{constructor(e){super(`i`),this.nodeType=`Int`,this.value=Math.floor(e??0)}generateReadonly(e,t,n,r,i,a){return e.format(this.value.toString(),r,t)}};function yn(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){!0!==t&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function bn(e){let t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))},update:function(n,r){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let e=t.get(n);(!e||e.version<n.version)&&t.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let i=t.get(n);if(i===void 0)t.set(n,function(t,n){let r,i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();if(e.bindBuffer(n,s),e.bufferData(n,i,a),t.onUploadCallback(),i instanceof Float32Array)r=e.FLOAT;else if(typeof Float16Array<`u`&&i instanceof Float16Array)r=e.HALF_FLOAT;else if(i instanceof Uint16Array)r=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(i instanceof Int16Array)r=e.SHORT;else if(i instanceof Uint32Array)r=e.UNSIGNED_INT;else if(i instanceof Int32Array)r=e.INT;else if(i instanceof Int8Array)r=e.BYTE;else if(i instanceof Uint8Array)r=e.UNSIGNED_BYTE;else{if(!(i instanceof Uint8ClampedArray))throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);r=e.UNSIGNED_BYTE}return{buffer:s,type:r,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}(n,r));else if(i.version<n.version){if(i.size!==n.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);(function(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()})(i.buffer,n,r),i.version=n.version}}}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} `,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} `,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new b(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new P},alphaMap:{value:null},alphaMapTransform:{value:new P},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new P}},envmap:{envMap:{value:null},envMapRotation:{value:new P},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new P}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new P}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new P},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new P},normalScale:{value:new _(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new P},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new P}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new P}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new P}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new b(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new l},probesMax:{value:new l},probesResolution:{value:new l}},points:{diffuse:{value:new b(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new P},alphaTest:{value:0},uvTransform:{value:new P}},sprite:{diffuse:{value:new b(16777215)},opacity:{value:1},center:{value:new _(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new P},alphaMap:{value:null},alphaMapTransform:{value:new P},alphaTest:{value:0}}},xn={basic:{uniforms:i([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:i([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new b(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:i([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new b(0)},specular:{value:new b(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:i([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new b(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:i([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new b(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:i([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:i([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:i([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:i([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:i([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:i([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new P},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new P}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:i([Z.common,Z.displacementmap,{referencePosition:{value:new l},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:i([Z.lights,Z.fog,{color:{value:new b(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};xn.physical={uniforms:i([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new P},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new P},clearcoatNormalScale:{value:new _(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new P},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new P},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new P},sheen:{value:0},sheenColor:{value:new b(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new P},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new P},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new P},transmissionSamplerSize:{value:new _},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new P},attenuationDistance:{value:0},attenuationColor:{value:new b(0)},specularColor:{value:new b(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new P},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new P},anisotropyVector:{value:new _},anisotropyMap:{value:null},anisotropyMapTransform:{value:new P}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Sn={r:0,b:0,g:0},Cn=new De,wn=new P;function Tn(e,n,r,i,a,o){let s,l,u=new b(0),d=!0===a?0:1,f=null,m=0,h=null;function g(e){let t=!0===e.isScene?e.background:null;if(t&&t.isTexture){let r=e.backgroundBlurriness>0;t=n.get(t,r)}return t}function _(t,n){t.getRGB(Sn,xe(e)),r.buffers.color.setClear(Sn.r,Sn.g,Sn.b,n,o)}return{getClearColor:function(){return u},setClearColor:function(e,t=1){u.set(e),d=t,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(e){d=e,_(u,d)},render:function(t){let n=!1,i=g(t);i===null?_(u,d):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))},addToRenderList:function(n,r){let a=g(r);a&&(a.isCubeTexture||a.mapping===306)?(l===void 0&&(l=new t(new T(1,1,1),new E({name:`BackgroundCubeMaterial`,uniforms:ve(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=a,l.material.uniforms.backgroundBlurriness.value=r.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cn.makeRotationFromEuler(r.backgroundRotation)).transpose(),a.isCubeTexture&&!1===a.isRenderTargetTexture&&l.material.uniforms.backgroundRotation.value.premultiply(wn),l.material.toneMapped=c.getTransfer(a.colorSpace)!==D,(f!==a||m!==a.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,f=a,m=a.version,h=e.toneMapping),l.layers.enableAll(),n.unshift(l,l.geometry,l.material,0,0,null)):a&&a.isTexture&&(s===void 0&&(s=new t(new p(2,2),new E({name:`BackgroundMaterial`,uniforms:ve(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),s.geometry.deleteAttribute(`normal`),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(s)),s.material.uniforms.t2D.value=a,s.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,s.material.toneMapped=c.getTransfer(a.colorSpace)!==`srgb`,!0===a.matrixAutoUpdate&&a.updateMatrix(),s.material.uniforms.uvTransform.value.copy(a.matrix),(f!==a||m!==a.version||h!==e.toneMapping)&&(s.material.needsUpdate=!0,f=a,m=a.version,h=e.toneMapping),s.layers.enableAll(),n.unshift(s,s.geometry,s.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),s!==void 0&&(s.geometry.dispose(),s.material.dispose(),s=void 0)}}}function En(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=l(null),a=i,o=!1;function s(t){return e.bindVertexArray(t)}function c(t){return e.deleteVertexArray(t)}function l(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function u(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function d(e){f(e,0)}function f(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function p(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function m(t,n,r,i,a,o,s){!0===s?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function h(){g(),o=!0,a!==i&&(a=i,s(a.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(n,i,c,h,g){let _=!1,v=function(t,n,i,a){let o=!0===a.wireframe,s=r[n.id];s===void 0&&(s={},r[n.id]=s);let c=!0===t.isInstancedMesh?t.id:0,u=s[c];u===void 0&&(u={},s[c]=u);let d=u[i.id];d===void 0&&(d={},u[i.id]=d);let f=d[o];return f===void 0&&(f=l(e.createVertexArray()),d[o]=f),f}(n,h,c,i);a!==v&&(a=v,s(a.object)),_=function(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}(n,h,c,g),_&&function(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}(n,h,c,g),g!==null&&t.update(g,e.ELEMENT_ARRAY_BUFFER),(_||o)&&(o=!1,function(n,r,i,a){u();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,p=c.bytesPerElement,h=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,g=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)f(i.location+e,t.meshPerAttribute);!0!==n.isInstancedMesh&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)d(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)m(i.location+e,o/i.locationSize,u,r,c*p,(g+o/i.locationSize*e)*p,h)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)f(i.location+e,s.meshPerAttribute);!0!==n.isInstancedMesh&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)d(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)m(i.location+e,o/i.locationSize,u,r,o*p,o/i.locationSize*e*p,h)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}p()}(n,i,c,h),g!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(g).buffer))},reset:h,resetDefaultState:g,dispose:function(){h();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)c(t[e].object),delete t[e];delete n[e]}}delete r[e]}},releaseStatesOfGeometry:function(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)c(t[e].object),delete t[e];delete n[e]}}delete r[e.id]},releaseStatesOfObject:function(e){for(let t in r){let n=r[t],i=!0===e.isInstancedMesh?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)c(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}},releaseStatesOfProgram:function(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)c(i[e].object),delete i[e];delete r[e.id]}}},initAttributes:u,enableAttribute:d,disableUnusedAttributes:p}}function Dn(e,t,n){let r;this.setMode=function(e){r=e},this.render=function(t,i){e.drawArrays(r,t,i),n.update(i,r,1)},this.renderInstances=function(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))},this.renderMultiDraw=function(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}}function On(e,t,n,r){let i;function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=n.precision===void 0?`highp`:n.precision,s=a(o);s!==o&&(j(`WebGLRenderer:`,o,`not supported, using`,s,`instead.`),o=s);let c=!0===n.logarithmicDepthBuffer,l=!0===n.reversedDepthBuffer&&t.has(`EXT_clip_control`);return!0===n.reversedDepthBuffer&&!1===l&&j(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(!0===t.has(`EXT_texture_filter_anisotropic`)){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:a,textureFormatReadable:function(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)},precision:o,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),maxCubemapSize:e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:e.getParameter(e.MAX_VERTEX_ATTRIBS),maxVertexUniforms:e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:e.getParameter(e.MAX_VARYING_VECTORS),maxFragmentUniforms:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:e.getParameter(e.MAX_SAMPLES),samples:e.getParameter(e.SAMPLES)}}function kn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Oe,s=new P,c={value:null,needsUpdate:!1};function l(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,!0!==i||l===null){let t=r+4*a,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=l(e,t,0)},this.setState=function(o,s,u){let d=o.clippingPlanes,f=o.clipIntersection,p=o.clipShadows,m=e.get(o);if(!i||d===null||d.length===0||a&&!p)a?l(null):(c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0);else{let e=a?0:r,t=4*e,i=m.clippingState||null;c.value=i,i=l(d,s,t,u);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}}}wn.set(-1,0,0,0,1,0,0,0,1);var An=class extends e{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new n(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let r={tEquirect:{value:null}},i=new T(5,5,5),a=new E({name:`CubemapFromEquirect`,uniforms:ve(r),vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,side:1,blending:0});a.uniforms.tEquirect.value=n;let o=new t(i,a),s=n.minFilter;return n.minFilter===1008&&(n.minFilter=1006),(()=>{throw Error(`fromEquirectangularTexture is not supported by the Spline runtime`)})().update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function jn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(e){let t=e.target;t.removeEventListener(`dispose`,o);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}return{get:function(s,c=!1){return s==null?null:c?function(e){if(e&&e.isTexture){let t=e.mapping,i=t===303||t===304,a=t===301||t===302;if(i||a){let t=n.get(e),s=t===void 0?0:t.texture.pmremVersion;if(e.isRenderTargetTexture&&e.pmremVersion!==s){if(r===null)throw Error(`PMREM environment-map conversion is not supported by the Spline runtime`);return t=i?r.fromEquirectangular(e,t):r.fromCubemap(e,t),t.texture.pmremVersion=e.pmremVersion,n.set(e,t),t.texture}if(t!==void 0)return t.texture;{let s=e.image;if(i&&s&&s.height>0||a&&s&&function(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}(s)){if(r===null)throw Error(`PMREM environment-map conversion is not supported by the Spline runtime`);return t=i?r.fromEquirectangular(e):r.fromCubemap(e),t.texture.pmremVersion=e.pmremVersion,n.set(e,t),e.addEventListener(`dispose`,o),t.texture}return null}}}return e}(s):function(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n))return i(t.get(n).texture,n.mapping);{let r=n.image;if(r&&r.height>0){let o=new An(r.height);return o.fromEquirectangularTexture(e,n),t.set(n,o),n.addEventListener(`dispose`,a),i(o.texture,n.mapping)}return null}}}return n}(s)},dispose:function(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}}}function Mn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&je(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Nn(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),!0===s.isInstancedBufferGeometry&&delete s._maxInstanceCount,n.memory.geometries--}function s(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?re:f)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}return{get:function(e,t){return!0===i[t.id]||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t},update:function(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)},getWireframeAttribute:function(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&s(e)}else s(e);return a.get(e)}}}function Pn(e,t,n){let r,i,a;this.setMode=function(e){r=e},this.setIndex=function(e){i=e.type,a=e.bytesPerElement},this.render=function(t,o){e.drawElements(r,o,i,t*a),n.update(o,r,1)},this.renderInstances=function(t,o,s){s!==0&&(e.drawElementsInstanced(r,o,i,t*a,s),n.update(o,r,s))},this.renderMultiDraw=function(e,a,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,a,0,i,e,0,o);let s=0;for(let e=0;e<o;e++)s+=a[e];n.update(s,r,1)}}function Fn(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(n,r,i){switch(t.calls++,r){case e.TRIANGLES:t.triangles+=n/3*i;break;case e.LINES:t.lines+=n/2*i;break;case e.LINE_STRIP:t.lines+=i*(n-1);break;case e.LINE_LOOP:t.lines+=i*n;break;case e.POINTS:t.points+=i*n;break;default:M(`WebGLInfo: Unknown draw mode:`,r)}}}}function In(e,t,n){let r=new WeakMap,i=new N;return{update:function(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){let e=function(){v.dispose(),r.delete(o),o.removeEventListener(`dispose`,e)};d!==void 0&&d.texture.dispose();let n=o.morphAttributes.position!==void 0,a=o.morphAttributes.normal!==void 0,s=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],f=o.morphAttributes.color||[],p=0;!0===n&&(p=1),!0===a&&(p=2),!0===s&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),v=new we(g,m,h,u);v.type=Be,v.needsUpdate=!0;let y=4*p;for(let e=0;e<u;e++){let t=c[e],r=l[e],o=f[e],u=m*h*4*e;for(let e=0;e<t.count;e++){let c=e*y;!0===n&&(i.fromBufferAttribute(t,e),g[u+c+0]=i.x,g[u+c+1]=i.y,g[u+c+2]=i.z,g[u+c+3]=0),!0===a&&(i.fromBufferAttribute(r,e),g[u+c+4]=i.x,g[u+c+5]=i.y,g[u+c+6]=i.z,g[u+c+7]=0),!0===s&&(i.fromBufferAttribute(o,e),g[u+c+8]=i.x,g[u+c+9]=i.y,g[u+c+10]=i.z,g[u+c+11]=o.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new _(m,h)},r.set(o,d),o.addEventListener(`dispose`,e)}if(!0===a.isInstancedMesh&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}}}function Ln(e,t,n,r,i){let a=new WeakMap;function o(e){let t=e.target;t.removeEventListener(`dispose`,o),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:function(r){let s=i.render.frame,c=r.geometry,l=t.get(r,c);if(a.get(l)!==s&&(t.update(l),a.set(l,s)),r.isInstancedMesh&&(!1===r.hasEventListener(`dispose`,o)&&r.addEventListener(`dispose`,o),a.get(r)!==s&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,s))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==s&&(e.update(),a.set(e,s))}return l},dispose:function(){a=new WeakMap}}}var Rn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zn(n,r,i,o,s,l){let u=new e(r,i,{type:n,depthBuffer:s,stencilBuffer:l,samples:o?4:0,depthTexture:s?new Ee(r,i):void 0}),d=new e(r,i,{type:a,depthBuffer:!1,stencilBuffer:!1}),f=new Ve;f.setAttribute(`position`,new h([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute(`uv`,new h([0,2,0,0,2,0],2));let p,m=new ye({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new t(f,m),_=new O(-1,1,1,-1,0,1),v=null,y=null,b=!1,x=null,S=[],C=!1;this.setSize=function(e,t){u.setSize(e,t),d.setSize(e,t);for(let n=0;n<S.length;n++){let r=S[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){S=e,C=S.length>0&&!0===S[0].isRenderPass;let t=u.width,n=u.height;for(let e=0;e<S.length;e++){let r=S[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(b||e.toneMapping===0&&S.length===0)return!1;if(x=t,t!==null){let e=t.width,n=t.height;(u.width!==e||u.height!==n)&&this.setSize(e,n)}return!1===C&&e.setRenderTarget(u),p=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(e,t){e.toneMapping=p,b=!0;let n=u,r=d;for(let i=0;i<S.length;i++){let a=S[i];if(!1!==a.enabled&&(a.render(e,r,n,t),!1!==a.needsSwap)){let e=n;n=r,r=e}}if(v!==e.outputColorSpace||y!==e.toneMapping){v=e.outputColorSpace,y=e.toneMapping,m.defines={},c.getTransfer(v)===`srgb`&&(m.defines.SRGB_TRANSFER=``);let t=Rn[y];t&&(m.defines[t]=``),m.needsUpdate=!0}m.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(x),e.render(g,_),x=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),f.dispose(),m.dispose()}}var Bn=new m,Vn=new Ee(1,1),Hn=new we,Un=new r,Wn=new n,Gn=[],Kn=[],qn=new Float32Array(16),Jn=new Float32Array(9),Yn=new Float32Array(4);function Xn(e,t,n){let r=e[0];if(r==null||r<=0||r>0)return e;let i=t*n,a=Gn[i];if(a===void 0&&(a=new Float32Array(i),Gn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Zn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Qn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function $n(e,t){let n=Kn[t];n===void 0&&(n=new Int32Array(t),Kn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function er(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function tr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zn(n,t))return;e.uniform2fv(this.addr,t),Qn(n,t)}}function nr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Zn(n,t))return;e.uniform3fv(this.addr,t),Qn(n,t)}}function rr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zn(n,t))return;e.uniform4fv(this.addr,t),Qn(n,t)}}function ir(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qn(n,t)}else{if(Zn(n,r))return;Yn.set(r),e.uniformMatrix2fv(this.addr,!1,Yn),Qn(n,r)}}function ar(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qn(n,t)}else{if(Zn(n,r))return;Jn.set(r),e.uniformMatrix3fv(this.addr,!1,Jn),Qn(n,r)}}function or(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qn(n,t)}else{if(Zn(n,r))return;qn.set(r),e.uniformMatrix4fv(this.addr,!1,qn),Qn(n,r)}}function sr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zn(n,t))return;e.uniform2iv(this.addr,t),Qn(n,t)}}function lr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zn(n,t))return;e.uniform3iv(this.addr,t),Qn(n,t)}}function ur(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zn(n,t))return;e.uniform4iv(this.addr,t),Qn(n,t)}}function dr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function fr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zn(n,t))return;e.uniform2uiv(this.addr,t),Qn(n,t)}}function pr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zn(n,t))return;e.uniform3uiv(this.addr,t),Qn(n,t)}}function mr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zn(n,t))return;e.uniform4uiv(this.addr,t),Qn(n,t)}}function hr(e,t,n){let r,i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),this.type===e.SAMPLER_2D_SHADOW?(Vn.compareFunction=n.isReversedDepthBuffer()?518:515,r=Vn):r=Bn,n.setTexture2D(t||r,a)}function gr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Un,i)}function _r(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Wn,i)}function vr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Hn,i)}function yr(e,t){e.uniform1fv(this.addr,t)}function br(e,t){let n=Xn(t,this.size,2);e.uniform2fv(this.addr,n)}function xr(e,t){let n=Xn(t,this.size,3);e.uniform3fv(this.addr,n)}function Sr(e,t){let n=Xn(t,this.size,4);e.uniform4fv(this.addr,n)}function Cr(e,t){let n=Xn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wr(e,t){let n=Xn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Tr(e,t){let n=Xn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Er(e,t){e.uniform1iv(this.addr,t)}function Dr(e,t){e.uniform2iv(this.addr,t)}function Or(e,t){e.uniform3iv(this.addr,t)}function kr(e,t){e.uniform4iv(this.addr,t)}function Ar(e,t){e.uniform1uiv(this.addr,t)}function jr(e,t){e.uniform2uiv(this.addr,t)}function Mr(e,t){e.uniform3uiv(this.addr,t)}function Nr(e,t){e.uniform4uiv(this.addr,t)}function Pr(e,t,n){let r,i=this.cache,a=t.length,o=$n(n,a);Zn(i,o)||(e.uniform1iv(this.addr,o),Qn(i,o)),r=this.type===e.SAMPLER_2D_SHADOW?Vn:Bn;for(let e=0;e!==a;++e)n.setTexture2D(t[e]||r,o[e])}function Fr(e,t,n){let r=this.cache,i=t.length,a=$n(n,i);Zn(r,a)||(e.uniform1iv(this.addr,a),Qn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Un,a[e])}function Ir(e,t,n){let r=this.cache,i=t.length,a=$n(n,i);Zn(r,a)||(e.uniform1iv(this.addr,a),Qn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Wn,a[e])}function Lr(e,t,n){let r=this.cache,i=t.length,a=$n(n,i);Zn(r,a)||(e.uniform1iv(this.addr,a),Qn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Hn,a[e])}var Rr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(e){switch(e){case 5126:return er;case 35664:return tr;case 35665:return nr;case 35666:return rr;case 35674:return ir;case 35675:return ar;case 35676:return or;case 5124:case 35670:return sr;case 35667:case 35671:return cr;case 35668:case 35672:return lr;case 35669:case 35673:return ur;case 5125:return dr;case 36294:return fr;case 36295:return pr;case 36296:return mr;case 35678:case 36198:case 36298:case 36306:case 35682:return hr;case 35679:case 36299:case 36307:return gr;case 35680:case 36300:case 36308:case 36293:return _r;case 36289:case 36303:case 36311:case 36292:return vr}}(t.type)}},zr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return yr;case 35664:return br;case 35665:return xr;case 35666:return Sr;case 35674:return Cr;case 35675:return wr;case 35676:return Tr;case 5124:case 35670:return Er;case 35667:case 35671:return Dr;case 35668:case 35672:return Or;case 35669:case 35673:return kr;case 5125:return Ar;case 36294:return jr;case 36295:return Mr;case 36296:return Nr;case 35678:case 36198:case 36298:case 36306:case 35682:return Pr;case 35679:case 36299:case 36307:return Fr;case 35680:case 36300:case 36308:case 36293:return Ir;case 36289:case 36303:case 36311:case 36292:return Lr}}(t.type)}},Br=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){if(t===void 0)return;let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vr=/(\w+)(\])?(\[|\.)?/g;function Hr(e,t){e.seq.push(t),e.map[t.id]=t}function Ur(e,t,n){let r=e.name,i=r.length;for(Vr.lastIndex=0;;){let a=Vr.exec(r),o=Vr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hr(n,l===void 0?new Rr(s,e,t):new zr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Br(s),Hr(n,e)),n=e}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ur(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];!1!==o.needsUpdate&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kr=0,qr=new P;function Jr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+function(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}(e.getShaderSource(t),r)}return i}function Yr(e,t){let n=function(e){c._getMatrix(qr,c.workingColorSpace,e);let t=`mat3( ${qr.elements.map(e=>e.toFixed(4))} )`;switch(c.getTransfer(e)){case y:return[t,`LinearTransferOETF`];case D:return[t,`sRGBTransferOETF`];default:return j(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}(t);return[`vec4 ${e}( vec4 value ) {`,`\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Xr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Zr(e,t){let n=Xr[t];return n===void 0?(j(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Qr=new l;function $r(e){return e!==``}function ei(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ti(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ni=/^[ \t]*#include +<([\w\d./]+)>/gm;function ri(e){return e.replace(ni,ai)}var ii=new Map;function ai(e,t){let n=X[t];if(n===void 0){let e=ii.get(t);if(e===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);n=X[e],j(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e)}return ri(n)}var oi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function si(e){return e.replace(oi,ci)}function ci(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function li(e){let t=`precision ${e.precision} float;\n\tprecision ${e.precision} int;\n\tprecision ${e.precision} sampler2D;\n\tprecision ${e.precision} samplerCube;\n\tprecision ${e.precision} sampler3D;\n\tprecision ${e.precision} sampler2DArray;\n\tprecision ${e.precision} sampler2DShadow;\n\tprecision ${e.precision} samplerCubeShadow;\n\tprecision ${e.precision} sampler2DArrayShadow;\n\tprecision ${e.precision} isampler2D;\n\tprecision ${e.precision} isampler3D;\n\tprecision ${e.precision} isamplerCube;\n\tprecision ${e.precision} isampler2DArray;\n\tprecision ${e.precision} usampler2D;\n\tprecision ${e.precision} usampler3D;\n\tprecision ${e.precision} usamplerCube;\n\tprecision ${e.precision} usampler2DArray;\n\t`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ui={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`},di={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`},fi={302:`ENVMAP_MODE_REFRACTION`},pi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function mi(e,t,n,r){let i,a,o=e.getContext(),s=n.defines,l=n.vertexShader,u=n.fragmentShader,d=function(e){return ui[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}(n),f=function(e){return!1===e.envMap?`ENVMAP_TYPE_CUBE`:di[e.envMapMode]||`ENVMAP_TYPE_CUBE`}(n),p=function(e){return!1===e.envMap?`ENVMAP_MODE_REFLECTION`:fi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}(n),m=function(e){return!1===e.envMap?`ENVMAP_BLENDING_NONE`:pi[e.combine]||`ENVMAP_BLENDING_NONE`}(n),h=function(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}(n),g=function(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter($r).join(`
`)}(n),_=function(e){let t=[];for(let n in e){let r=e[n];!1!==r&&t.push(`#define `+n+` `+r)}return t.join(`
`)}(s),v=o.createProgram(),y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(i=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,_].filter($r).join(`
`),i.length>0&&(i+=`
`),a=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,_].filter($r).join(`
`),a.length>0&&(a+=`
`)):(i=[li(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,_,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+p:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&!1===n.flatShading?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&!1===n.flatShading?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+d:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter($r).join(`
`),a=[li(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,_,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+f:``,n.envMap?`#define `+p:``,n.envMap?`#define `+m:``,h?`#define CUBEUV_TEXEL_WIDTH `+h.texelWidth:``,h?`#define CUBEUV_TEXEL_HEIGHT `+h.texelHeight:``,h?`#define CUBEUV_MAX_MIP `+h.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&!1===n.flatShading?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+d:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Zr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Yr(`linearToOutputTexel`,n.outputColorSpace),(c.getLuminanceCoefficients(Qr),[`float luminance( const in vec3 rgb ) {`,`\tconst vec3 weights = vec3( ${Qr.x.toFixed(4)}, ${Qr.y.toFixed(4)}, ${Qr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter($r).join(`
`)),l=ri(l),l=ei(l,n),l=ti(l,n),u=ri(u),u=ei(u,n),u=ti(u,n),l=si(l),u=si(u),!0!==n.isRawShaderMaterial&&(y=`#version 300 es
`,i=[g,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+i,a=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+a);let b,x,S=y+i+l,C=y+a+u,w=Gr(o,o.VERTEX_SHADER,S),T=Gr(o,o.FRAGMENT_SHADER,C);function ee(t){if(e.debug.checkShaderErrors){let n=o.getProgramInfoLog(v)||``,r=o.getShaderInfoLog(w)||``,s=o.getShaderInfoLog(T)||``,c=n.trim(),l=r.trim(),u=s.trim(),d=!0,f=!0;if(!1===o.getProgramParameter(v,o.LINK_STATUS)){if(d=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(o,v,w,T);else{let e=Jr(o,w,`vertex`),n=Jr(o,T,`fragment`);M(`WebGLProgram: Shader Error `+o.getError()+` - VALIDATE_STATUS `+o.getProgramParameter(v,o.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+c+`
`+e+`
`+n)}}else c===``?(l===``||u===``)&&(f=!1):j(`WebGLProgram: Program Info Log:`,c);f&&(t.diagnostics={runnable:d,programLog:c,vertexShader:{log:l,prefix:i},fragmentShader:{log:u,prefix:a}})}o.deleteShader(w),o.deleteShader(T),b=new Wr(o,v),x=function(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}(o,v)}o.attachShader(v,w),o.attachShader(v,T),n.index0AttributeName===void 0?!0===n.hasPositionAttribute&&o.bindAttribLocation(v,0,`position`):o.bindAttribLocation(v,0,n.index0AttributeName),o.linkProgram(v),this.getUniforms=function(){return b===void 0&&ee(this),b},this.getAttributes=function(){return x===void 0&&ee(this),x};let E=!1===n.rendererExtensionParallelShaderCompile;return this.isReady=function(){return!1===E&&(E=o.getProgramParameter(v,37297)),E},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kr++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}var hi=0,gi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return!1===r.has(t)&&(r.add(t),t.usedTimes++),!1===r.has(n)&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _i(e),t.set(e,n)),n}},_i=class{constructor(e){this.id=hi++,this.code=e,this.usedTimes=0}};function vi(e){return e===1030||e===37490||e===36285}function yi(e,t,n,r,i,a){let o=new S,s=new gi,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}return{getParameters:function(i,o,u,d,g,_){let v=d.fog,y=g.geometry,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?d.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&j(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let T,ee,E,te,D=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,ne=D===void 0?0:D.length,re=0;if(y.morphAttributes.position!==void 0&&(re=1),y.morphAttributes.normal!==void 0&&(re=2),y.morphAttributes.color!==void 0&&(re=3),w){let e=xn[w];T=e.vertexShader,ee=e.fragmentShader}else{T=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),E=e.id,te=t.id}let O=e.getRenderTarget(),k=e.state.buffers.depth.getReversed(),ie=!0===g.isInstancedMesh,ae=!0===g.isBatchedMesh,oe=!!i.map,se=!!i.matcap,ce=!!S,le=!!i.aoMap,ue=!!i.lightMap,de=!!i.bumpMap&&!1===i.wireframe,fe=!!i.normalMap,pe=!!i.displacementMap,me=!!i.emissiveMap,he=!!i.metalnessMap,ge=!!i.roughnessMap,_e=i.anisotropy>0,A=i.clearcoat>0,ve=i.dispersion>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=_e&&!!i.anisotropyMap,Ce=A&&!!i.clearcoatMap,we=A&&!!i.clearcoatNormalMap,M=A&&!!i.clearcoatRoughnessMap,Te=ye&&!!i.iridescenceMap,Ee=ye&&!!i.iridescenceThicknessMap,De=be&&!!i.sheenColorMap,Oe=be&&!!i.sheenRoughnessMap,N=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=xe&&!!i.transmissionMap,Me=xe&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(O===null||!0===O.isXRRenderTarget)&&(Re=e.toneMapping);let ze={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:T,fragmentShader:ee,defines:i.defines,customVertexShaderID:E,customFragmentShaderID:te,isRawShaderMaterial:!0===i.isRawShaderMaterial,glslVersion:i.glslVersion,precision:p,batching:ae,batchingColor:ae&&g._colorsTexture!==null,instancing:ie,instancingColor:ie&&g.instanceColor!==null,instancingMorph:ie&&g.morphTexture!==null,outputColorSpace:O===null?e.outputColorSpace:!0===O.isXRRenderTarget?O.texture.colorSpace:c.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:oe,matcap:se,envMap:ce,envMapMode:ce&&S.mapping,envMapCubeUVHeight:C,aoMap:le,lightMap:ue,bumpMap:de,normalMap:fe,displacementMap:pe,emissiveMap:me,normalMapObjectSpace:fe&&i.normalMapType===1,normalMapTangentSpace:fe&&i.normalMapType===0,packedNormalMap:fe&&i.normalMapType===0&&vi(i.normalMap.format),metalnessMap:he,roughnessMap:ge,anisotropy:_e,anisotropyMap:Se,clearcoat:A,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:M,dispersion:ve,iridescence:ye,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:be,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:N,specularColorMap:ke,specularIntensityMap:Ae,transmission:xe,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:!1===i.transparent&&i.blending===1&&!1===i.alphaToCoverage,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:oe&&h(i.map.channel),aoMapUv:le&&h(i.aoMap.channel),lightMapUv:ue&&h(i.lightMap.channel),bumpMapUv:de&&h(i.bumpMap.channel),normalMapUv:fe&&h(i.normalMap.channel),displacementMapUv:pe&&h(i.displacementMap.channel),emissiveMapUv:me&&h(i.emissiveMap.channel),metalnessMapUv:he&&h(i.metalnessMap.channel),roughnessMapUv:ge&&h(i.roughnessMap.channel),anisotropyMapUv:Se&&h(i.anisotropyMap.channel),clearcoatMapUv:Ce&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:M&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&h(i.sheenRoughnessMap.channel),specularMapUv:N&&h(i.specularMap.channel),specularColorMapUv:ke&&h(i.specularColorMap.channel),specularIntensityMapUv:Ae&&h(i.specularIntensityMap.channel),transmissionMapUv:je&&h(i.transmissionMap.channel),thicknessMapUv:Me&&h(i.thicknessMap.channel),alphaMapUv:Pe&&h(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(fe||_e),vertexNormals:!!y.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:!0===i.vertexColors&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:!0===g.isPoints&&!!y.attributes.uv&&(oe||Pe),fog:!!v,useFog:!0===i.fog,fogExp2:!!v&&v.isFogExp2,flatShading:!1===i.wireframe&&(!0===i.flatShading||y.attributes.normal===void 0&&!1===fe&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:!0===i.sizeAttenuation,logarithmicDepthBuffer:f,reversedDepthBuffer:k,skinning:!0===g.isSkinnedMesh,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:re,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:oe&&!0===i.map.isVideoTexture&&c.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:me&&!0===i.emissiveMap.isVideoTexture&&c.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&!0===i.extensions.clipCullDistance&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&!0===i.extensions.multiDraw||ae)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze},getProgramCacheKey:function(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(function(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}(n,t),function(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()},getUniforms:function(e){let t,n=m[e.type];if(n){let e=xn[n];t=w.clone(e.uniforms)}else t=e.uniforms;return t},acquireProgram:function(t,n){let r=d.get(n);return r===void 0?(r=new mi(e,n,t,i),u.push(r),d.set(n,r)):++r.usedTimes,r},releaseProgram:function(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}},releaseShaderCache:function(e){s.remove(e)},programs:u,dispose:function(){s.dispose()}}}function bi(){let e=new WeakMap;return{has:function(t){return e.has(t)},get:function(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n},remove:function(t){e.delete(t)},update:function(t,n,r){e.get(t)[n]=r},dispose:function(){e=new WeakMap}}}function xi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Si(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ci(){let e=[],t=0,n=[],r=[],i=[];function a(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function o(n,r,i,o,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:a(n),groupOrder:o,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=a(n),l.groupOrder=o,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}return{opaque:n,transmissive:r,transparent:i,init:function(){t=0,n.length=0,r.length=0,i.length=0},push:function(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):!0===a.transparent?i.push(u):n.push(u)},unshift:function(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):!0===a.transparent?i.unshift(u):n.unshift(u)},finish:function(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t,a){n.length>1&&n.sort(e||xi),r.length>1&&r.sort(t||Si),i.length>1&&i.sort(t||Si),a&&(n.reverse(),r.reverse(),i.reverse())}}}function wi(){let e=new WeakMap;return{get:function(t,n){let r,i=e.get(t);return i===void 0?(r=new Ci,e.set(t,[r])):n>=i.length?(r=new Ci,i.push(r)):r=i[n],r},dispose:function(){e=new WeakMap}}}function Ti(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new l,color:new b};break;case`SpotLight`:n={position:new l,direction:new l,color:new b,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new l,color:new b,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new l,skyColor:new b,groundColor:new b};break;case`RectAreaLight`:n={color:new b,position:new l,halfWidth:new l,halfHeight:new l}}return e[t.id]=n,n}}}var Ei=0;function Di(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Oi(e){let t=new Ti,n=function(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new l);let i=new l,a=new De,o=new De;return{setup:function(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Di);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(.5*y.width,0,0),e.halfHeight.set(0,.5*y.height,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(!0===e.has(`OES_texture_float_linear`)?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Ei++)},setupView:function(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(.5*f.width,0,0),e.halfHeight.set(0,.5*f.height,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}},state:r}}function ki(e){let t=new Oi(e),n=[],r=[],i=[],a={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:function(e){a.camera=e,n.length=0,r.length=0,i.length=0},state:a,setupLights:function(){t.setup(n)},setupLightsView:function(e){t.setupView(n,e)},pushLight:function(e){n.push(e)},pushShadow:function(e){r.push(e)},pushLightProbeGrid:function(e){i.push(e)}}}function Ai(e){let t=new WeakMap;return{get:function(n,r=0){let i,a=t.get(n);return a===void 0?(i=new ki(e),t.set(n,[i])):r>=a.length?(i=new ki(e),a.push(i)):i=a[r],i},dispose:function(){t=new WeakMap}}}var ji=[new l(1,0,0),new l(-1,0,0),new l(0,1,0),new l(0,-1,0),new l(0,0,1),new l(0,0,-1)],Mi=[new l(0,-1,0),new l(0,-1,0),new l(0,0,1),new l(0,0,-1),new l(0,-1,0),new l(0,-1,0)],Ni=new De,Pi=new l,Fi=new l;function Ii(n,r,i){let o=new Me,s=new _,c=new _,l=new N,u=new Pe,d=new A,f={},p=i.maxTextureSize,m={0:1,1:0,2:2},h=new E({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),y=h.clone();y.defines.HORIZONTAL_PASS=1;let b=new Ve;b.setAttribute(`position`,new v(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new t(b,h),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;function w(t,i){let a=r.update(x);h.defines.VSM_SAMPLES!==t.blurSamples&&(h.defines.VSM_SAMPLES=t.blurSamples,y.defines.VSM_SAMPLES=t.blurSamples,h.needsUpdate=!0,y.needsUpdate=!0),t.mapPass===null&&(t.mapPass=new e(s.x,s.y,{format:1030,type:1016})),h.uniforms.shadow_pass.value=t.map.depthTexture,h.uniforms.resolution.value=t.mapSize,h.uniforms.radius.value=t.radius,n.setRenderTarget(t.mapPass),n.clear(),n.renderBufferDirect(i,null,a,h,x,null),y.uniforms.shadow_pass.value=t.mapPass.texture,y.uniforms.resolution.value=t.mapSize,y.uniforms.radius.value=t.radius,n.setRenderTarget(t.map),n.clear(),n.renderBufferDirect(i,null,a,y,x,null)}function T(e,t,r,i){let a=null,o=!0===r.isPointLight?e.customDistanceMaterial:e.customDepthMaterial;if(o!==void 0)a=o;else if(a=!0===r.isPointLight?d:u,n.localClippingEnabled&&!0===t.clipShadows&&Array.isArray(t.clippingPlanes)&&t.clippingPlanes.length!==0||t.displacementMap&&t.displacementScale!==0||t.alphaMap&&t.alphaTest>0||t.map&&t.alphaTest>0||!0===t.alphaToCoverage){let e=a.uuid,n=t.uuid,r=f[e];r===void 0&&(r={},f[e]=r);let i=r[n];i===void 0&&(i=a.clone(),r[n]=i,t.addEventListener(`dispose`,te)),a=i}return a.visible=t.visible,a.wireframe=t.wireframe,a.side=i===3?t.shadowSide===null?t.side:t.shadowSide:t.shadowSide===null?m[t.side]:t.shadowSide,a.alphaMap=t.alphaMap,a.alphaTest=!0===t.alphaToCoverage?.5:t.alphaTest,a.map=t.map,a.clipShadows=t.clipShadows,a.clippingPlanes=t.clippingPlanes,a.clipIntersection=t.clipIntersection,a.displacementMap=t.displacementMap,a.displacementScale=t.displacementScale,a.displacementBias=t.displacementBias,a.wireframeLinewidth=t.wireframeLinewidth,a.linewidth=t.linewidth,!0===r.isPointLight&&!0===a.isMeshDistanceMaterial&&(n.properties.get(a).light=r),a}function ee(e,t,i,a,s){if(!1===e.visible)return;if(e.layers.test(t.layers)&&(e.isMesh||e.isLine||e.isPoints)&&(e.castShadow||e.receiveShadow&&s===3)&&(!e.frustumCulled||o.intersectsObject(e))){e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld);let o=r.update(e),c=e.material;if(Array.isArray(c)){let r=o.groups;for(let l=0,u=r.length;l<u;l++){let u=r[l],d=c[u.materialIndex];if(d&&d.visible){let r=T(e,d,a,s);e.onBeforeShadow(n,e,t,i,o,r,u),n.renderBufferDirect(i,null,o,r,e,u),e.onAfterShadow(n,e,t,i,o,r,u)}}}else if(c.visible){let r=T(e,c,a,s);e.onBeforeShadow(n,e,t,i,o,r,null),n.renderBufferDirect(i,null,o,r,e,null),e.onAfterShadow(n,e,t,i,o,r,null)}}let c=e.children;for(let e=0,n=c.length;e<n;e++)ee(c[e],t,i,a,s)}function te(e){e.target.removeEventListener(`dispose`,te);for(let t in f){let n=f[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}this.render=function(t,r,i){if(!1===S.enabled||!1===S.autoUpdate&&!1===S.needsUpdate||t.length===0)return;this.type===2&&(j(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=n.getRenderTarget(),d=n.getActiveCubeFace(),f=n.getActiveMipmapLevel(),m=n.state;m.setBlending(0),!0===m.buffers.depth.getReversed()?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=C!==this.type;h&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],f=d.shadow;if(f===void 0){j(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(!1===f.autoUpdate&&!1===f.needsUpdate)continue;s.copy(f.mapSize);let _=f.getFrameExtents();s.multiply(_),c.copy(f.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(c.x=Math.floor(p/_.x),s.x=c.x*_.x,f.mapSize.x=c.x),s.y>p&&(c.y=Math.floor(p/_.y),s.y=c.y*_.y,f.mapSize.y=c.y));let v=n.state.buffers.depth.getReversed();if(f.camera._reversedDepth=v,f.map===null||!0===h){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(d.isPointLight){j(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new e(s.x,s.y,{format:pe,type:a,minFilter:g,magFilter:g,generateMipmaps:!1}),f.map.texture.name=d.name+`.shadowMap`,f.map.depthTexture=new Ee(s.x,s.y,Be),f.map.depthTexture.name=d.name+`.shadowMapDepth`,f.map.depthTexture.format=He,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Ie,f.map.depthTexture.magFilter=Ie}else d.isPointLight?(f.map=new An(s.x),f.map.depthTexture=new he(s.x,ae)):(f.map=new e(s.x,s.y),f.map.depthTexture=new Ee(s.x,s.y,ae)),f.map.depthTexture.name=d.name+`.shadowMap`,f.map.depthTexture.format=He,this.type===1?(f.map.depthTexture.compareFunction=v?518:515,f.map.depthTexture.minFilter=g,f.map.depthTexture.magFilter=g):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Ie,f.map.depthTexture.magFilter=Ie);f.camera.updateProjectionMatrix()}let y=f.map.isWebGLCubeRenderTarget?6:1;for(let e=0;e<y;e++){if(f.map.isWebGLCubeRenderTarget)n.setRenderTarget(f.map,e),n.clear();else{e===0&&(n.setRenderTarget(f.map),n.clear());let t=f.getViewport(e);l.set(c.x*t.x,c.y*t.y,c.x*t.z,c.y*t.w),m.viewport(l)}if(d.isPointLight){let t=f.camera,n=f.matrix,r=d.distance||t.far;r!==t.far&&(t.far=r,t.updateProjectionMatrix()),Pi.setFromMatrixPosition(d.matrixWorld),t.position.copy(Pi),Fi.copy(t.position),Fi.add(ji[e]),t.up.copy(Mi[e]),t.lookAt(Fi),t.updateMatrixWorld(),n.makeTranslation(-Pi.x,-Pi.y,-Pi.z),Ni.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Ni,t.coordinateSystem,t.reversedDepth)}else f.updateMatrices(d);o=f.getFrustum(),ee(r,i,f.camera,d,this.type)}!0!==f.isPointLightShadow&&this.type===3&&w(f,i),f.needsUpdate=!1}C=this.type,S.needsUpdate=!1,n.setRenderTarget(u,d,f)}}function Li(e,t){let n=new function(){let t=!1,n=new N,r=null,i=new N(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){!0===s&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),!1===i.equals(n)&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}},r=new function(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?pe(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=s[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}},i=new function(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?pe(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}},a=new WeakMap,o=new WeakMap,c={},l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,x=null,S=null,C=new b(0,0,0),w=0,T=!1,ee=null,E=null,te=null,D=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,k=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),O=k>=2):(k=parseFloat(/^WebGL (\d)/.exec(ie)[1]),O=k>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new N().fromArray(se),ue=new N().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};function pe(t){!0!==c[t]&&(e.enable(t),c[t]=!0)}function me(t){!1!==c[t]&&(e.disable(t),c[t]=!1)}fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),i.setClear(0),pe(e.DEPTH_TEST),r.setFunc(3),A(!1),j(1),pe(e.CULL_FACE),_e(0);let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t!==0){if(!1===m&&(pe(e.BLEND),m=!0),t===5)a=a||n,o=o||r,s=s||i,(n!==g||a!==y)&&(e.blendEquationSeparate(he[n],he[a]),g=n,y=a),(r!==_||i!==v||o!==x||s!==S)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),_=r,v=i,x=o,S=s),(!1===c.equals(C)||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),h=t,T=!1;else if(t!==h||u!==T){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:M(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:M(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:M(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:M(`WebGLState: Invalid blending: `,t)}_=null,v=null,x=null,S=null,C.set(0,0,0),w=0,h=t,T=u}}else!0===m&&(me(e.BLEND),m=!1)}function A(t){ee!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),ee=t)}function j(t){t===0?me(e.CULL_FACE):(pe(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function ve(t,n,i){t?(pe(e.POLYGON_OFFSET_FILL),(D!==n||ne!==i)&&(D=n,ne=i,r.getReversed()&&(n=-n),e.polygonOffset(n,i))):me(e.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:r,stencil:i},enable:pe,disable:me,bindFramebuffer:function(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)},drawBuffers:function(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)},useProgram:function(t){return p!==t&&(e.useProgram(t),p=t,!0)},setBlending:_e,setMaterial:function(t,a){t.side===2?me(e.CULL_FACE):pe(e.CULL_FACE);let o=t.side===1;a&&(o=!o),A(o),t.blending===1&&!1===t.transparent?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),r.setFunc(t.depthFunc),r.setTest(t.depthTest),r.setMask(t.depthWrite),n.setMask(t.colorWrite);let s=t.stencilWrite;i.setTest(s),s&&(i.setMask(t.stencilWriteMask),i.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),i.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?pe(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:A,setCullFace:j,setLineWidth:function(t){t!==te&&(O&&e.lineWidth(t),te=t)},setPolygonOffset:ve,setScissorTest:function(t){t?pe(e.SCISSOR_TEST):me(e.SCISSOR_TEST)},activeTexture:function(t){t===void 0&&(t=e.TEXTURE0+re-1),ae!==t&&(e.activeTexture(t),ae=t)},bindTexture:function(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+re-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)},unbindTexture:function(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}},texImage2D:function(){try{e.texImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}},texImage3D:function(){try{e.texImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}},pixelStorei:function(t,n){l[t]!==n&&(e.pixelStorei(t,n),l[t]=n)},getParameter:function(t){return l[t]===void 0?e.getParameter(t):l[t]},updateUBOMapping:function(t,n){let r=o.get(n);r===void 0&&(r=new WeakMap,o.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))},uniformBlockBinding:function(t,n){let r=o.get(n).get(t);a.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),a.set(n,r))},texStorage2D:function(){try{e.texStorage2D(...arguments)}catch(e){M(`WebGLState:`,e)}},texStorage3D:function(){try{e.texStorage3D(...arguments)}catch(e){M(`WebGLState:`,e)}},texSubImage2D:function(){try{e.texSubImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}},texSubImage3D:function(){try{e.texSubImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D(...arguments)}catch(e){M(`WebGLState:`,e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D(...arguments)}catch(e){M(`WebGLState:`,e)}},scissor:function(t){!1===le.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))},viewport:function(t){!1===ue.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},l={},ae=null,oe={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,x=null,S=null,C=new b(0,0,0),w=0,T=!1,ee=null,E=null,te=null,D=null,ne=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),n.reset(),r.reset(),i.reset()}}}function Ri(e,t,n,r,i,a,s){let l,u=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,d=typeof navigator<`u`&&/OculusBrowser/g.test(navigator.userAgent),f=new _,p=new WeakMap,m=new Set,h=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function b(e,t){return v?new OffscreenCanvas(e,t):o(`canvas`)}function S(e,t,n){let r=1,i=Te(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);l===void 0&&(l=b(n,a));let o=t?b(n,a):l;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),j(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&j(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function C(e){return e.generateMipmaps}function w(t){e.generateMipmap(t)}function T(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];j(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;a&&(l=t.get(`EXT_texture_norm16`),l||j(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=r;if(r===e.RED&&(i===e.FLOAT&&(u=e.R32F),i===e.HALF_FLOAT&&(u=e.R16F),i===e.UNSIGNED_BYTE&&(u=e.R8),i===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),i===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.R8UI),i===e.UNSIGNED_SHORT&&(u=e.R16UI),i===e.UNSIGNED_INT&&(u=e.R32UI),i===e.BYTE&&(u=e.R8I),i===e.SHORT&&(u=e.R16I),i===e.INT&&(u=e.R32I)),r===e.RG&&(i===e.FLOAT&&(u=e.RG32F),i===e.HALF_FLOAT&&(u=e.RG16F),i===e.UNSIGNED_BYTE&&(u=e.RG8),i===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),i===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RG8UI),i===e.UNSIGNED_SHORT&&(u=e.RG16UI),i===e.UNSIGNED_INT&&(u=e.RG32UI),i===e.BYTE&&(u=e.RG8I),i===e.SHORT&&(u=e.RG16I),i===e.INT&&(u=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGB8UI),i===e.UNSIGNED_SHORT&&(u=e.RGB16UI),i===e.UNSIGNED_INT&&(u=e.RGB32UI),i===e.BYTE&&(u=e.RGB8I),i===e.SHORT&&(u=e.RGB16I),i===e.INT&&(u=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),i===e.UNSIGNED_INT&&(u=e.RGBA32UI),i===e.BYTE&&(u=e.RGBA8I),i===e.SHORT&&(u=e.RGBA16I),i===e.INT&&(u=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),i===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?y:c.getTransfer(o);i===e.FLOAT&&(u=e.RGBA32F),i===e.HALF_FLOAT&&(u=e.RGBA16F),i===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),i===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),u}function E(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,j(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return!0===C(e)||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),function(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=h.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&O(e),Object.keys(i).length===0&&h.delete(n)}r.remove(e)}(t),t.isVideoTexture&&p.delete(t),t.isHTMLTexture&&m.delete(t)}function re(t){let n=t.target;n.removeEventListener(`dispose`,re),function(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(i[t])}r.remove(t)}(n)}function O(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source;delete h.get(i)[n.__cacheKey],s.memory.textures--}let ie=0;function ae(t,i){let a=r.get(t);if(t.isVideoTexture&&function(e){let t=s.render.frame;p.get(e)!==t&&(p.set(e,t),e.update())}(t),!1===t.isRenderTargetTexture&&!0!==t.isExternalTexture&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)j(`WebGLRenderer: Texture marked for update but no image data found.`);else{if(!1!==e.complete)return void me(a,t,i);j(`WebGLRenderer: Texture marked for update but image is incomplete`)}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}let se={[ne]:e.REPEAT,[k]:e.CLAMP_TO_EDGE,[Le]:e.MIRRORED_REPEAT},le={[Ie]:e.NEAREST,[oe]:e.NEAREST_MIPMAP_NEAREST,[be]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[x]:e.LINEAR_MIPMAP_NEAREST,[ce]:e.LINEAR_MIPMAP_LINEAR},ue={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(n,a){if(a.type===1015&&!1===t.has(`OES_texture_float_linear`)&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&j(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,le[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,le[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ue[a.compareFunction])),!0===t.has(`EXT_texture_filter_anisotropic`)){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&!1===t.has(`OES_texture_float_linear`))return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function fe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D));let i=n.source,a=h.get(i);a===void 0&&(a={},h.set(i,a));let o=function(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&O(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,o,s){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=fe(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+s);let f=r.get(d);if(d.version!==f.__version||!0===u){if(n.activeTexture(e.TEXTURE0+s),(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)==0){let t=c.getPrimaries(c.workingColorSpace),r=o.colorSpace===``?null:c.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=S(o.image,!1,i.maxTextureSize);t=we(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),h=ee(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);de(l,o);let g,_=o.mipmaps,v=!0!==o.isVideoTexture,y=f.__version===void 0||!0===u,b=d.dataReady,x=te(o,t);if(o.isDepthTexture)h=E(o.format===Fe,o.type),y&&(v?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(_.length>0){v&&y&&n.texStorage2D(e.TEXTURE_2D,x,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],v?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data);o.generateMipmaps=!1}else v?(y&&n.texStorage2D(e.TEXTURE_2D,x,h,t.width,t.height),b&&function(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=pe(n.start,r.width,4),c=pe(t.start,r.width,4);n.start<=i+1&&a===c&&pe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){v&&y&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,h,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(g=_[i],o.format!==1023){if(r!==null){if(v){if(b){if(o.layerUpdates.size>0){let t=ge(g.width,g.height,o.format,o.type);for(let a of o.layerUpdates){let o=g.data.subarray(a*t/g.data.BYTES_PER_ELEMENT,(a+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,g.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,g.data,0,0)}else j(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else v?b&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,p,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,r,p,g.data)}else{v&&y&&n.texStorage2D(e.TEXTURE_2D,x,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],o.format===1023?v?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data):r===null?j(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?b&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(o.isDataArrayTexture){if(v){if(y&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,h,t.width,t.height,t.depth),b){if(o.layerUpdates.size>0){let i=ge(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)v?(y&&n.texStorage3D(e.TEXTURE_3D,x,h,t.width,t.height,t.depth),b&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(y){if(v)n.texStorage2D(e.TEXTURE_2D,x,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<x;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n)return n.appendChild(t),m.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of m)t.includes(e.image)&&(e.needsUpdate=!0)},void n.requestPaint();if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&y){let t=Te(_[0]);n.texStorage2D(e.TEXTURE_2D,x,h,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)g=_[t],v?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,g):n.texImage2D(e.TEXTURE_2D,t,h,r,p,g);o.generateMipmaps=!1}else if(v){if(y){let r=Te(t);n.texStorage2D(e.TEXTURE_2D,x,h,r.width,r.height)}b&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,p,t);C(o)&&w(l),f.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,i,o,s,c,l){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=ee(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>l),r=Math.max(1,i.height>>l);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?n.texImage3D(c,l,p,t,r,i.depth,0,d,f,null):n.texImage2D(c,l,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ce(i)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,c,h.__webglTexture,0,Se(i)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,c,h.__webglTexture,l),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=E(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ce(n)?u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),c=a.convert(o.type),l=ee(o.internalFormat,s,c,o.normalized,o.colorSpace);Ce(n)?u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),l,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),l,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,l,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function A(t,i,o){let s=!0===i.isWebGLCubeRenderTarget;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!i.depthTexture||!i.depthTexture.isDepthTexture)throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);if(c.__renderTarget=i,(!c.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(c.__webglInit===void 0&&(c.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,D)),c.__webglTexture===void 0){c.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),de(e.TEXTURE_CUBE_MAP,i.depthTexture);let t,r=a.convert(i.depthTexture.format),o=a.convert(i.depthTexture.type);i.depthTexture.format===1026?t=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(t=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,t,i.width,i.height,0,r,o,null)}}else ae(i.depthTexture,0);let l=c.__webglTexture,d=Se(i),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ce(i)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,l,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,l,0);else{if(i.depthTexture.format!==1027)throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`);Ce(i)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,l,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,l,0)}}function ve(t){let i=r.get(t),a=!0===t.isWebGLCubeRenderTarget;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)A(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?A(i.__webglFramebuffer[0],t,0):A(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}let ye=[],xe=[];function Se(e){return Math.min(i.maxSamples,e.samples)}function Ce(e){let n=r.get(e);return e.samples>0&&!0===t.has(`WEBGL_multisampled_render_to_texture`)&&!1!==n.__useRenderToTexture}function we(e,t){let n=e.colorSpace,r=e.format,i=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||n!==`srgb-linear`&&n!==``&&(c.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&j(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):M(`WebGLTextures: Unsupported texture color space:`,n)),t}function Te(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(f.width=e.naturalWidth||e.width,f.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(f.width=e.displayWidth,f.height=e.displayHeight):(f.width=e.width,f.height=e.height),f}this.allocateTextureUnit=function(){let e=ie;return e>=i.maxTextures&&j(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e},this.resetTextureUnits=function(){ie=0},this.getTextureUnits=function(){return ie},this.setTextureUnits=function(e){ie=e},this.setTexture2D=ae,this.setTexture2DArray=function(t,i){let a=r.get(t);!1===t.isRenderTargetTexture&&t.version>0&&a.__version!==t.version?me(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))},this.setTexture3D=function(t,i){let a=r.get(t);!1===t.isRenderTargetTexture&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)},this.setTextureCube=function(t,o){let s=r.get(t);!0!==t.isCubeDepthTexture&&t.version>0&&s.__version!==t.version?function(t,o,s){if(o.image.length!==6)return;let l=fe(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||!0===l){n.activeTexture(e.TEXTURE0+s);let t=c.getPrimaries(c.workingColorSpace),r=o.colorSpace===``?null:c.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)h[e]=p||m?m?o.image[e].image:o.image[e]:S(o.image[e],!0,i.maxCubemapSize),h[e]=we(o,h[e]);let g,_=h[0],v=a.convert(o.format,o.colorSpace),y=a.convert(o.type),b=ee(o.internalFormat,v,y,o.normalized,o.colorSpace),x=!0!==o.isVideoTexture,T=d.__version===void 0||!0===l,E=u.dataReady,D=te(o,_);if(de(e.TEXTURE_CUBE_MAP,o),p){x&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,b,_.width,_.height);for(let t=0;t<6;t++){g=h[t].mipmaps;for(let r=0;r<g.length;r++){let i=g[r];o.format===1023?x?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,v,y,i.data):v===null?j(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,i.data)}}}else{if(g=o.mipmaps,x&&T){g.length>0&&D++;let t=Te(h[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,b,t.width,t.height)}for(let t=0;t<6;t++)if(m){x?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,v,y,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,h[t].width,h[t].height,0,v,y,h[t].data);for(let r=0;r<g.length;r++){let i=g[r].image[t].image;x?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,i.width,i.height,0,v,y,i.data)}}else{x?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,v,y,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,v,y,h[t]);for(let r=0;r<g.length;r++){let i=g[r];x?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,v,y,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,v,y,i.image[t])}}}C(o)&&w(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}(s,t,o):n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture,e.TEXTURE0+o)},this.rebindTextures=function(t,n,i){let a=r.get(t);n!==void 0&&he(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)},this.setupRenderTarget=function(t){let i=t.texture,o=r.get(t),c=r.get(i);t.addEventListener(`dispose`,re);let l=t.textures,u=!0===t.isWebGLCubeRenderTarget,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,s.memory.textures++),u){o.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)o.__webglFramebuffer[t][n]=e.createFramebuffer()}else o.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){o.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)o.__webglFramebuffer[t]=e.createFramebuffer()}else o.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&!1===Ce(t)){o.__webglMultisampledFramebuffer=e.createFramebuffer(),o.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];o.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),s=a.convert(r.type),c=ee(r.internalFormat,i,s,r.normalized,r.colorSpace,!0===t.isXRRenderTarget),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,o.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(o.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(o.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),de(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)he(o.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else he(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);C(i)&&w(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],s=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),de(c,a),he(o.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),C(a)&&w(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),de(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)he(o.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else he(o.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);C(i)&&w(r),n.unbindTexture()}t.depthBuffer&&ve(t)},this.updateRenderTargetMipmap=function(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(C(a)){let t=T(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),w(t),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(t.samples>0){if(!1===Ce(t)){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),!0===d&&(ye.length=0,xe.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&!1===t.resolveDepthBuffer&&(ye.push(c),xe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&!1===t.resolveDepthBuffer&&d){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}},this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zi(e,t){return{convert:function(n,r=``){let i,a=c.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i===null)return null;if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=t.get(`WEBGL_compressed_texture_s3tc`),i===null)return null;if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i===null)return null;if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i===null)return null;if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i===null)return null;if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i===null)return null;if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i===null)return null;if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}}}var Bi=new De,Vi=new P;function Hi(e,t){function n(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function r(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Bi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&!1===a.isRenderTargetTexture&&e.envMapRotation.value.premultiply(Vi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}return{refreshFogUniforms:function(t,n){n.color.getRGB(t.fogColor.value,xe(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)},refreshMaterialUniforms:function(e,i,a,o,s){i.isNodeMaterial?i.uniformsNeedUpdate=!1:i.isMeshBasicMaterial?r(e,i):i.isMeshLambertMaterial?(r(e,i),i.envMap&&(e.envMapIntensity.value=i.envMapIntensity)):i.isMeshToonMaterial?(r(e,i),function(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}(e,i)):i.isMeshPhongMaterial?(r(e,i),function(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}(e,i),i.envMap&&(e.envMapIntensity.value=i.envMapIntensity)):i.isMeshStandardMaterial?(r(e,i),function(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}(e,i),i.isMeshPhysicalMaterial&&function(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}(e,i,s)):i.isMeshMatcapMaterial?(r(e,i),function(e,t){t.matcap&&(e.matcap.value=t.matcap)}(e,i)):i.isMeshDepthMaterial?r(e,i):i.isMeshDistanceMaterial?(r(e,i),function(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}(e,i)):i.isMeshNormalMaterial?r(e,i):i.isLineBasicMaterial?(function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}(e,i),i.isLineDashedMaterial&&function(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}(e,i)):i.isPointsMaterial?function(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=.5*i,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,i,a,o):i.isSpriteMaterial?function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,i):i.isShadowMaterial?(e.color.value.copy(i.color),e.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}Vi.set(-1,0,0,0,1,0,0,0,1);var Ui=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null,Gi=class{constructor(t={}){let n,{canvas:r=se(),context:i=null,depth:o=!0,stencil:s=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g=`default`,failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=_e}=t;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<`u`&&i instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);n=i.getContextAttributes().alpha}else n=f;let x=y,S=new Set([ue,te,d]),C=new Set([_e,ae,Re,Ce,de,u]),w=new Uint32Array(4),T=new Int32Array(4),ee=new l,E=null,D=null,ne=[],re=[],O=null;this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,ie=!1,oe=null,le=null,fe=null,pe=null;this._outputColorSpace=Te;let he=0,ge=0,A=null,ve=-1,ye=null,be=new N,xe=new N,Se=null,we=new b(0),Ee=0,Oe=r.width,ke=r.height,je=1,Pe=null,Fe=null,Ie=new N(0,0,Oe,ke),Le=new N(0,0,Oe,ke),Be=!1,Ve=new Me,P=!1,He=!1,Ue=new De,We=new l,Ge=new N,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Je(){return A===null?je:1}let F,Ye,I,Xe,L,R,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,z=i;function mt(e,t){return r.getContext(e,t)}try{let e={alpha:!0,depth:o,stencil:s,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if(`setAttribute`in r&&r.setAttribute(`data-engine`,`three.js r185`),r.addEventListener(`webglcontextlost`,gt,!1),r.addEventListener(`webglcontextrestored`,_t,!1),r.addEventListener(`webglcontextcreationerror`,vt,!1),z===null){let t=`webgl2`;if(z=mt(t,e),z===null)throw mt(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw M(`WebGLRenderer: `+e.message),e}function ht(){F=new Mn(z),F.init(),dt=new zi(z,F),Ye=new On(z,F,t,dt),I=new Li(z,F),Ye.reversedDepthBuffer&&v&&I.buffers.depth.setReversed(!0),le=z.createFramebuffer(),fe=z.createFramebuffer(),pe=z.createFramebuffer(),Xe=new Fn(z),L=new bi,R=new Ri(z,F,I,L,Ye,dt,Xe),Ze=new jn(k),Qe=new bn(z),ft=new En(z,Qe),$e=new Nn(z,Qe,Xe,ft),et=new Ln(z,$e,Qe,ft,Xe),ct=new In(z,Ye,R),at=new kn(L),tt=new yi(k,Ze,F,Ye,ft,at),nt=new Hi(k,L),rt=new wi,it=new Ai(F),st=new Tn(k,Ze,I,et,n,m),ot=new Ii(k,et,Ye),pt={update(){throw Error(`UniformsGroups are not supported by the Spline runtime`)},bind(){throw Error(`UniformsGroups are not supported by the Spline runtime`)},dispose(){}},lt=new Dn(z,F,Xe),ut=new Pn(z,F,Xe),Xe.programs=tt.programs,k.capabilities=Ye,k.extensions=F,k.properties=L,k.renderLists=rt,k.shadowMap=ot,k.state=I,k.info=Xe}ht(),x!==1009&&(O=new zn(x,r.width,r.height,p,o,s));let B=Object.assign(new ze,{enabled:!1,isPresenting:!1,cameraAutoUpdate:!0,setFramebufferScaleFactor(){},setReferenceSpaceType(){},getReferenceSpace:()=>null,setReferenceSpace(){},getBaseLayer:()=>null,getBinding:()=>null,getFrame:()=>null,getSession:()=>null,async setSession(){throw Error(`WebXR is not supported by the Spline runtime`)},getEnvironmentBlendMode(){},getDepthTexture:()=>null,updateCamera(){},getCamera:()=>null,getFoveation(){},setFoveation(){},hasDepthSensing:()=>!1,getDepthSensingMesh:()=>null,setAnimationLoop(){},getController:()=>null,getControllerGrip:()=>null,getHand:()=>null,dispose(){}});function gt(e){e.preventDefault(),Ae(`WebGLRenderer: Context Lost.`),ie=!0}function _t(){Ae(`WebGLRenderer: Context Restored.`),ie=!1;let e=Xe.autoReset,t=ot.enabled,n=ot.autoUpdate,r=ot.needsUpdate,i=ot.type;ht(),Xe.autoReset=e,ot.enabled=t,ot.autoUpdate=n,ot.needsUpdate=r,ot.type=i}function vt(e){M(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function yt(e){let t=e.target;t.removeEventListener(`dispose`,yt),function(e){(function(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){tt.releaseProgram(e)}),e.isShaderMaterial&&tt.releaseShaderCache(e))})(e),L.remove(e)}(t)}function bt(e,t,n){!0===e.transparent&&e.side===2&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,At(e,t,n),e.side=0,e.needsUpdate=!0,At(e,t,n),e.side=2):At(e,t,n)}this.xr=B,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=F.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=F.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return je},this.setPixelRatio=function(e){e!==void 0&&(je=e,this.setSize(Oe,ke,!1))},this.getSize=function(e){return e.set(Oe,ke)},this.setSize=function(e,t,n=!0){B.isPresenting?j(`WebGLRenderer: Can't change size while VR device is presenting.`):(Oe=e,ke=t,r.width=Math.floor(e*je),r.height=Math.floor(t*je),!0===n&&(r.style.width=e+`px`,r.style.height=t+`px`),O!==null&&O.setSize(r.width,r.height),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(Oe*je,ke*je).floor()},this.setDrawingBufferSize=function(e,t,n){Oe=e,ke=t,je=n,r.width=Math.floor(e*n),r.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(x!==1009){if(e){for(let t=0;t<e.length;t++)if(!0===e[t].isOutputPass){j(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}O.setEffects(e||[])}else M(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`)},this.getCurrentViewport=function(e){return e.copy(be)},this.getViewport=function(e){return e.copy(Ie)},this.setViewport=function(e,t,n,r){e.isVector4?Ie.set(e.x,e.y,e.z,e.w):Ie.set(e,t,n,r),I.viewport(be.copy(Ie).multiplyScalar(je).round())},this.getScissor=function(e){return e.copy(Le)},this.setScissor=function(e,t,n,r){e.isVector4?Le.set(e.x,e.y,e.z,e.w):Le.set(e,t,n,r),I.scissor(xe.copy(Le).multiplyScalar(je).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(e){I.setScissorTest(Be=e)},this.setOpaqueSort=function(e){Pe=e},this.setTransparentSort=function(e){Fe=e},this.getClearColor=function(e){return e.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=S.has(t)}if(e){let e=A.texture.type,t=C.has(e),n=st.getClearColor(),r=st.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(w[0]=i,w[1]=a,w[2]=o,w[3]=r,z.clearBufferuiv(z.COLOR,0,w)):(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferiv(z.COLOR,0,T))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){r.removeEventListener(`webglcontextlost`,gt,!1),r.removeEventListener(`webglcontextrestored`,_t,!1),r.removeEventListener(`webglcontextcreationerror`,vt,!1),st.dispose(),rt.dispose(),it.dispose(),L.dispose(),Ze.dispose(),et.dispose(),ft.dispose(),pt.dispose(),tt.dispose(),B.dispose(),B.removeEventListener(`sessionstart`,St),B.removeEventListener(`sessionend`,Ct),wt.stop()},this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=function(e,t,n,r,i){!0!==t.isScene&&(t=Ke),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=A===null?k.outputColorSpace:!0===A.isXRRenderTarget?A.texture.colorSpace:c.workingColorSpace,l=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,u=Ze.get(r.envMap||o,l),d=!0===r.vertexColors&&!!n.attributes.color&&n.attributes.color.itemSize===4,f=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),p=!!n.morphAttributes.position,m=!!n.morphAttributes.normal,h=!!n.morphAttributes.color,g=0;r.toneMapped&&(A===null||!0===A.isXRRenderTarget)&&(g=k.toneMapping);let _=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,v=_===void 0?0:_.length,y=L.get(r),b=D.state.lights;if(!0===P&&(!0===He||e!==ye)){let t=e===ye&&r.id===ve;at.setState(r,e,t)}let x=!1;r.version===y.__version?(y.needsLights&&y.lightsStateVersion!==b.state.version||y.outputColorSpace!==s||i.isBatchedMesh&&!1===y.batching||!i.isBatchedMesh&&!0===y.batching||i.isBatchedMesh&&!0===y.batchingColor&&i.colorTexture===null||i.isBatchedMesh&&!1===y.batchingColor&&i.colorTexture!==null||i.isInstancedMesh&&!1===y.instancing||!i.isInstancedMesh&&!0===y.instancing||i.isSkinnedMesh&&!1===y.skinning||!i.isSkinnedMesh&&!0===y.skinning||i.isInstancedMesh&&!0===y.instancingColor&&i.instanceColor===null||i.isInstancedMesh&&!1===y.instancingColor&&i.instanceColor!==null||i.isInstancedMesh&&!0===y.instancingMorph&&i.morphTexture===null||i.isInstancedMesh&&!1===y.instancingMorph&&i.morphTexture!==null||y.envMap!==u||!0===r.fog&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==at.numPlanes||y.numIntersection!==at.numIntersection)||y.vertexAlphas!==d||y.vertexTangents!==f||y.morphTargets!==p||y.morphNormals!==m||y.morphColors!==h||y.toneMapping!==g||y.morphTargetsCount!==v||!!y.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(x=!0):(x=!0,y.__version=r.version);let S=y.currentProgram;!0===x&&(S=At(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,S,y));let C=!1,w=!1,T=!1,E=S.getUniforms(),te=y.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ve&&(ve=r.id,w=!0),y.needsLights){let e=function(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];ee.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(ee))return n}return null}(D.state.lightProbeGridArray,i);y.lightProbeGrid!==e&&(y.lightProbeGrid=e,w=!0)}if(C||ye!==e){I.buffers.depth.getReversed()&&!0!==e.reversedDepth&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,We.setFromMatrixPosition(e.matrixWorld)),Ye.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,!0===e.isOrthographicCamera),ye!==e&&(ye=e,w=!0,T=!0)}if(y.needsLights&&(b.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,b.state.directionalShadowMap,R),b.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,b.state.spotShadowMap,R),b.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,b.state.pointShadowMap,R)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,R),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,R),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,R));let ne=n.morphAttributes;if((ne.position!==void 0||ne.normal!==void 0||ne.color!==void 0)&&ct.update(i,n,S),(w||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(te.envMapIntensity.value=t.environmentIntensity),te.dfgLUT!==void 0&&(te.dfgLUT.value=(Wi===null&&((Wi=new Ne(Ui,16,16,1030,1016)).name=`DFG_LUT`,Wi.minFilter=1006,Wi.magFilter=1006,Wi.wrapS=1001,Wi.wrapT=1001,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi)),w){if(E.setValue(z,`toneMappingExposure`,k.toneMappingExposure),y.needsLights&&function(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}(te,T),a&&!0===r.fog&&nt.refreshFogUniforms(te,a),nt.refreshMaterialUniforms(te,r,je,ke,D.state.transmissionRenderTarget[e.id]),y.needsLights&&y.lightProbeGrid){let e=y.lightProbeGrid;te.probesSH.value=e.texture,te.probesMin.value.copy(e.boundingBox.min),te.probesMax.value.copy(e.boundingBox.max),te.probesResolution.value.copy(e.resolution)}Wr.upload(z,jt(y),te,R)}if(r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(Wr.upload(z,jt(y),te,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),i.previousModelViewMatrix&&E.setValue(z,`previousModelViewMatrix`,i.previousModelViewMatrix),e.previousProjectionMatrix&&E.setValue(z,`previousProjectionMatrix`,e.previousProjectionMatrix),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];pt.update(n,S),pt.bind(n,S)}}return S}(e,t,n,r,i);I.setMaterial(r,o);let l=n.index,u=1;if(!0===r.wireframe){if(l=$e.getWireframeAttribute(n),l===void 0)return;u=2}let d=n.drawRange,f=n.attributes.position,p=d.start*u,m=(d.start+d.count)*u;a!==null&&(p=Math.max(p,a.start*u),m=Math.min(m,(a.start+a.count)*u)),l===null?f!=null&&(p=Math.max(p,0),m=Math.min(m,f.count)):(p=Math.max(p,0),m=Math.min(m,l.count));let h=m-p;if(h<0||h===1/0)return;ft.setup(i,r,s,n,l);let g,_=lt;if(l!==null&&(g=Qe.get(l),_=ut,_.setIndex(g)),i.isMesh)!0===r.wireframe?(I.setLineWidth(r.wireframeLinewidth*Je()),_.setMode(z.LINES)):_.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Je()),i.isLineSegments?_.setMode(z.LINES):i.isLineLoop?_.setMode(z.LINE_LOOP):_.setMode(z.LINE_STRIP)}else i.isPoints?_.setMode(z.POINTS):i.isSprite&&_.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(F.get(`WEBGL_multi_draw`))_.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=l?Qe.get(l).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),_.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)_.renderInstances(p,h,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);_.renderInstances(p,h,t)}else _.render(p,h)},this.compile=function(e,t,n=null){n===null&&(n=e),D=it.get(n),D.init(t),re.push(D),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),D.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];bt(a,n,e),r.add(a)}else bt(t,n,e),r.add(t)}}),D=re.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}F.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let xt=null;function St(){wt.stop()}function Ct(){wt.start()}let wt=new yn;function Tt(e,t,n,r){if(!1===e.visible)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLightProbeGrid)D.pushLightProbeGrid(e);else if(e.isLight)D.pushLight(e),e.castShadow&&D.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Ve.intersectsSprite(e)){r&&Ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ue);let t=et.update(e),i=e.material;i.visible&&E.push(e,t,i,n,Ge.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Ve.intersectsObject(e))){let t=et.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ge.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ge.copy(e.boundingSphere.center)),Ge.applyMatrix4(e.matrixWorld).applyMatrix4(Ue)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&E.push(e,t,s,n,Ge.z,o)}}else i.visible&&E.push(e,t,i,n,Ge.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;D.setupLightsView(n),!0===P&&at.setGlobalState(k.clippingPlanes,n),r&&I.viewport(be.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Dt(t,n,r,i){if((!0===r.isScene?r.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[i.id]===void 0){let t=F.has(`EXT_color_buffer_half_float`)||F.has(`EXT_color_buffer_float`);D.state.transmissionRenderTarget[i.id]=new e(1,1,{generateMipmaps:!0,type:t?a:_e,minFilter:ce,samples:Math.max(4,Ye.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:c.workingColorSpace})}let o=D.state.transmissionRenderTarget[i.id],l=i.viewport||be;o.setSize(l.z*k.transmissionResolutionScale,l.w*k.transmissionResolutionScale);let u=k.getRenderTarget(),d=k.getActiveCubeFace(),f=k.getActiveMipmapLevel();k.setRenderTarget(o),k.getClearColor(we),Ee=k.getClearAlpha(),Ee<1&&k.setClearColor(16777215,.5),k.clear(),qe&&st.render(r);let p=k.toneMapping;k.toneMapping=0;let m=i.viewport;if(i.viewport!==void 0&&(i.viewport=void 0),D.setupLightsView(i),!0===P&&at.setGlobalState(k.clippingPlanes,i),Ot(t,r,i),R.updateMultisampleRenderTarget(o),R.updateRenderTargetMipmap(o),!1===F.has(`WEBGL_multisampled_render_to_texture`)){let e=!1;for(let t=0,a=n.length;t<a;t++){let{object:a,geometry:o,material:s,group:c}=n[t];if(s.side===2&&a.layers.test(i.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,r,i,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}!0===e&&(R.updateMultisampleRenderTarget(o),R.updateRenderTargetMipmap(o))}k.setRenderTarget(u,d,f),k.setClearColor(we,Ee),m!==void 0&&(i.viewport=m),k.toneMapping=p}function Ot(e,t,n){let r=!0===t.isScene?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;!0===l.allowOverride&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),!0===i.transparent&&i.side===2&&!1===i.forceSinglePass?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function At(e,t,n){!0!==t.isScene&&(t=Ke);let r=L.get(e),i=D.state.lights,a=D.state.shadowsArray,o=i.state.version,s=tt.getParameters(e,i.state,a,t,n,D.state.lightProbeGridArray),c=tt.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,yt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=tt.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,k),d=tt.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||!0===e.clipping)&&(f.clippingPlanes=at.uniform),Mt(e,s),r.needsLights=function(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=D.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}wt.setAnimationLoop(function(e){xt&&xt(e)}),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){xt=e,B.setAnimationLoop(e),e===null?wt.stop():wt.start()},B.addEventListener(`sessionstart`,St),B.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&!0!==t.isCamera)return void M(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);if(!0===ie)return;oe!==null&&oe.renderStart(e,t);let n=!0===B.enabled&&!0===B.isPresenting,r=O!==null&&(A===null||n)&&O.begin(k,A);if(!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),t.parent===null&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===B.enabled&&!0===B.isPresenting&&(O===null||!1===O.isCompositing())&&(!0===B.cameraAutoUpdate&&B.updateCamera(t),t=B.getCamera()),!0===e.isScene&&e.onBeforeRender(k,e,t,A),D=it.get(e,re.length),D.init(t),D.state.textureUnits=R.getTextureUnits(),re.push(D),Ue.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ve.setFromProjectionMatrix(Ue,2e3,t.reversedDepth),He=this.localClippingEnabled,P=at.init(this.clippingPlanes,He),E=rt.get(e,ne.length),E.init(),ne.push(E),!0===B.enabled&&!0===B.isPresenting){let e=k.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,k.sortObjects)}Tt(e,t,0,k.sortObjects),E.finish(),!0===k.sortObjects&&E.sort(Pe,Fe,t.reversedDepth),qe=!1===B.enabled||!1===B.isPresenting||!1===B.hasDepthSensing(),qe&&st.addToRenderList(E,e),this.info.render.frame++,!0===this.info.autoReset&&this.info.reset(),!0===P&&at.beginShadows();let i=D.state.shadowsArray;if(ot.render(i,e,t),!0===P&&at.endShadows(),!1===(r&&O.hasRenderPass())){let n=E.opaque,r=E.transmissive;if(D.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++)Dt(n,r,e,i[t]);qe&&st.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(E,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),qe&&st.render(e),Et(E,e,t)}A!==null&&ge===0&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),r&&O.end(k),!0===e.isScene&&e.onAfterRender(k,e,t),ft.resetDefaultState(),ve=-1,ye=null,re.pop(),re.length>0?(D=re[re.length-1],R.setTextureUnits(D.state.textureUnits),!0===P&&at.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,ne.pop(),E=ne.length>0?ne[ne.length-1]:null,oe!==null&&oe.renderEnd()},this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return ge},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=!1===e.resolveDepthBuffer,!1===r.__autoAllocateDepthBuffer&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){A=e,he=t,ge=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0)return I.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),be.copy(e.viewport),xe.copy(e.scissor),Se=e.scissorTest,I.viewport(be),I.scissor(xe),I.setScissorTest(Se),void(ve=-1);if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&!1===R.useMultisampledRTT(e)?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,be.copy(e.viewport),xe.copy(e.scissor),Se=e.scissorTest}else be.copy(Ie).multiplyScalar(je).floor(),xe.copy(Le).multiplyScalar(je).floor(),Se=Be;if(n!==0&&(r=le),I.bindFramebuffer(z.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(be),I.scissor(xe),I.setScissorTest(Se),i){let r=L.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}ve=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!e||!e.isWebGLRenderTarget)return void M(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Ye.textureFormatReadable(c))return void M(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);if(!Ye.textureTypeReadable(l))return void M(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,dt.convert(c),dt.convert(l),a)}finally{let e=A===null?null:L.get(A).__webglFramebuffer;I.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!e||!e.isWebGLRenderTarget)throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Ye.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ye.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,dt.convert(l),dt.convert(u),0);let f=A===null?null:L.get(A).__webglFramebuffer;I.bindFramebuffer(z.FRAMEBUFFER,f);let p=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await me(z,p,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(d),z.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g,_=dt.convert(t.format),v=dt.convert(t.type);t.isData3DTexture?(R.setTexture3D(t,0),g=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),g=z.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),g=z.TEXTURE_2D),I.activeTexture(z.TEXTURE0),I.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(z.UNPACK_ROW_LENGTH),b=I.getParameter(z.UNPACK_IMAGE_HEIGHT),x=I.getParameter(z.UNPACK_SKIP_PIXELS),S=I.getParameter(z.UNPACK_SKIP_ROWS),C=I.getParameter(z.UNPACK_SKIP_IMAGES);I.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(z.UNPACK_SKIP_PIXELS,l),I.pixelStorei(z.UNPACK_SKIP_ROWS,u),I.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);I.bindFramebuffer(z.READ_FRAMEBUFFER,null),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(z.READ_FRAMEBUFFER,fe),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,pe);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(g,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(g,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);I.bindFramebuffer(z.READ_FRAMEBUFFER,null),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(g,a,f,p,m,o,s,c,_,v,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(g,a,f,p,m,o,s,c,_,h.data):z.texSubImage3D(g,a,f,p,m,o,s,c,_,v,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,_,v,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,_,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,_,v,h);I.pixelStorei(z.UNPACK_ROW_LENGTH,y),I.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(z.UNPACK_SKIP_PIXELS,x),I.pixelStorei(z.UNPACK_SKIP_ROWS,S),I.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(g),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){he=0,ge=0,A=null,I.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return le}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=c._getDrawingBufferColorSpace(e),t.unpackColorSpace=c._getUnpackColorSpace()}},Ki=class extends zt{constructor(e){super(`b`),this.nodeType=`Bool`,this.value=e??!1}generateReadonly(e,t,n,r){return e.format(this.value?`true`:`false`,r,t)}},qi=class extends zt{constructor(e=1,t){super(`f[]`),this.nodeType=`FloatArray`,this.size=e,this.value=Array.isArray(t)?t:typeof t==`number`?Array(e).fill(t):Array(e).fill(0)}},Ji=class extends zt{},Yi=class extends Ji{constructor(e){super(`v3`),this.image=e,this._value=new l}get value(){return this._value.x=this.image.isVideo?this.image.img.videoWidth??0:this.image.img.width,this._value.y=this.image.isVideo?this.image.img.videoHeight??0:this.image.img.height,this._value}},Xi=class extends Ji{constructor(e,t,n=1008,r=1006){super(`t`),this.image=e,this.wrap=t,this.minFilter=n,this.magFilter=r}get value(){return this.image.getTexture(this.wrap,this.minFilter,this.magFilter)}},Zi=class extends zt{constructor(e){super(`m3`),this.nodeType=`Matrix3`,this.value=e??new P}generateReadonly(e,t,n,r,i,a){return e.format(`mat3(`+this.value.elements.join(`, `)+`)`,r,t)}get elements(){return this.value.elements}set elements(e){this.value.fromArray(e)}},Qi=class extends zt{constructor(e){super(`m4`),this.nodeType=`Matrix4`,this.value=e??new De}generateReadonly(e,t,n,r,i,a){return e.format(`mat4(`+this.value.elements.join(`, `)+`)`,r,t)}get elements(){return this.value.elements}set elements(e){this.value.fromArray(e)}};function $i(e,t,n,r=0){e.setUvTransform(n[0],n[1],t[0],t[1],0,0,0).premultiply(new P().makeRotation(r*Se.DEG2RAD))}var ea=class extends Zi{constructor(e,t,n=0){super(new P),this.repeat=e,this.offset=t,this.rotation=n,$i(this.value,e,t,n)}updateMatrix(){$i(this.value,this.repeat,this.offset,this.rotation)}},ta=class extends zt{constructor(e=1,t){super(`v4[]`),this.nodeType=`Vector4Array`,this.size=e,this.value=Array.isArray(t)?t:t instanceof N?Array(e).fill(t):Array(e).fill(new N(0))}},na=class extends V{constructor(e,t,n,r){super(`v3`),this.nodeType=`Blend`,this.a=e,this.b=t,this.alpha=n,this.mode=r}generate(e,t){if(e.isShader(`fragment`)){let n=[];return n.push(this.a.build(e,`c`)),n.push(this.b.build(e,`c`)),n.push(this.alpha.build(e,`f`)),n.push(this.mode.build(e,`i`)),e.format(`spe_blend(`+n.join(`,`)+`)`,this.getType(e),t)}return console.warn(`BlendNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},ra=class extends V{constructor(e,t){super(`v3`),this.nodeType=`CustomColor`,this.color=e,this.alpha=t,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.isShader(`fragment`)){let n=e.include(ra.Nodes.customColor);e.addFragmentVariable(this.calpha,`float`);let r=[];return r.push(this.color.build(e,`v3`)),r.push(this.mask?`luminance(${this.mask.build(e,`v3`)})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`CustomColorNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},ia=ra;ia.Nodes={customColor:new U(`vec3 customColor(vec3 color, float mask, float alpha, out float calpha) {
				float lalpha = alpha * mask;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color;
			}`)};var aa=class extends V{constructor(e,t){super(`v3`),this.nodeType=`CustomNormal`,this.cnormal=e,this.alpha=t,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.isShader(`fragment`)){let n=e.include(aa.Nodes.customNormal);e.addFragmentVariable(this.calpha,`float`);let r=[];return r.push(this.cnormal.build(e,`v3`)),r.push(`normal`),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`CustomNormalNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},oa=aa;oa.Nodes={customNormal:new U(`vec3 customNormal(vec3 cnormal, vec3 norm, float mask, float alpha, out float calpha) {
				vec3 normal = packNormalToRGB( norm ).rgb;
				normal *= step( vec3(0.5), cnormal );

				float lalpha = alpha * mask;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

				return normal;
			}`)};var sa=[{a:`y`,b:`z`,pole:`x`},{a:`z`,b:`x`,pole:`y`},{a:`x`,b:`y`,pole:`z`}],ca=class extends V{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f=-1){super(`v3`),this.nodeType=`CustomTexture`,this.texture=e,this.textureSize=t,this.crop=n,this.projection=r,this.axis=i,this.projectionAxis=f,this.side=a,this.size=o,this.blending=s,this.mat=c,this.isMask=d,this.alpha=l,this.mode=u,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){e.require(`position`),e.require(`normal`),e.require(`uv`),e.requires.uv=[!0],e.extensions.shaderTextureLOD=!0,e.extensions.derivatives=!0;let n,r=`g${this.uuid.toString().replace(/-/g,``)}`;switch(this.projection.value){case 3:{let t=this.projectionAxis;if(t===0||t===2){let{a:i,b:a,pole:o}=sa[t];n=e.include(new U(`\nvec3 ${r}_cylindricalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n                vec3 posN = normalize(position);\n                float u = 0.5 + atan(posN.${i}, posN.${a}) / (2.*3.1415);\n                float scaledHeight = position.${o} / (size.y * 0.5);\n                float v =  (scaledHeight / 2.) + .5;\n\n                vec2 calculatedUv = vec2(u,v);\n\t\t\t\tvec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n\t\t\t\twriteUv = uvs;\n\n                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole\n                // period at the wrap seam, so implicit derivatives would smear a\n                // lowest-mip column across it. Folding the u-derivatives to the\n                // nearest period keeps the true footprint — and, unlike the\n                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a\n                // full mip too low), it leaves mip selection to the sampler, so\n                // the layer's Sharpness filters and anisotropy actually apply.\n                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);\n                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);\n\t\t\t\t#ifdef GL_EXT_shader_texture_lod\n                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);\n\t\t\t\t#else\n                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);\n\t\t\t\t#endif\n\n\t\t\t\tvec3 col = tmp.rgb;\n\t\t\t\tfloat lalpha = alpha * tmp.a;\n\t\t\t\tif ( crop > 0.5 ) {\n\t\t\t\t\tif ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n\t\t\t\t\t\tlalpha = 0.0;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tlalpha *= mask;\n\n\t\t\t\tcalpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn col;\n\t\t\t}\n`))}else n=e.include(ca.Nodes.cylindrical);break}case 2:{let t=this.projectionAxis;if(t===0||t===2){let{a:i,b:a,pole:o}=sa[t];n=e.include(new U(`\nvec3 ${r}_sphericalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n                vec3 posN = normalize(vPosition);\n                float u = 0.5 + atan(posN.${i}, posN.${a}) / (2.*3.1415);\n                float v = 0.5 + asin(posN.${o}) / 3.1415;\n\n                vec2 calculatedUv = vec2(u,v);\n\t\t\t\tvec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n\t\t\t\twriteUv = uvs;\n\n                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole\n                // period at the wrap seam, so implicit derivatives would smear a\n                // lowest-mip column across it. Folding the u-derivatives to the\n                // nearest period keeps the true footprint — and, unlike the\n                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a\n                // full mip too low), it leaves mip selection to the sampler, so\n                // the layer's Sharpness filters and anisotropy actually apply.\n                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);\n                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);\n\t\t\t\t#ifdef GL_EXT_shader_texture_lod\n                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);\n\t\t\t\t#else\n                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);\n\t\t\t\t#endif\n\n\t\t\t\tvec3 col = tmp.rgb;\n\t\t\t\tfloat lalpha = alpha * tmp.a;\n\t\t\t\tif ( crop > 0.5 ) {\n\t\t\t\t\tif ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n\t\t\t\t\t\tlalpha = 0.0;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tlalpha *= mask;\n\n\t\t\t\tcalpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn col;\n\t\t\t}\n`))}else n=e.include(ca.Nodes.spherical);break}case 1:{let t=[`vec3(1.0, 0.0, 0.0)`,`vec3(0.0, 1.0, 0.0)`,`vec3(0.0, 0.0, 1.0)`][this.axis.value],i=[`zy`,`xz`,`xy`][this.axis.value],a=new U(`\n\t\tvec3 ${r}_planarTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n\t\t\t\tvec2 projected = (1. + (position.${i})) / 2.;\n\t\t\t\tvec2 uvs = ( mat * vec3( (projected * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;\n\t\t\t\twriteUv = uvs;\n\n\t\t\t\tvec4 tmp = texture2D( tex, uvs );\n\n\t\t\t\tvec3 col = tmp.rgb;\n\t\t\t\tfloat lalpha = alpha * tmp.a;\n\t\t\t\t${this.side.value===2?``:`lalpha *= step(0.0, ${this.side.value===1?`-1.0 * `:``}dot(vObjectNormal, ${t}));`}\n\n\t\t\t\tif ( crop > 0.5 ) {\n\t\t\t\t\tif ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n\t\t\t\t\t\tlalpha = 0.0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tlalpha *= mask;\n\n\t\t\t\tcalpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn col;\n\t\t\t}`);n=e.include(a);break}case 4:n=e.include(ca.Nodes.triplanar);break;case 0:{let t=ca.Nodes.uv.src,i=new U(t.replace(`uvTexture`,`${r}_uvTexture`));n=e.include(i);break}default:n=e.include(ca.Nodes.uv)}e.addFragmentVariable(this.calpha,`float`);let i=[];if(i.push(`normal`),i.push(this.texture.generate(e,`t`)),i.push(this.textureSize.build(e,`v2`)),i.push(this.crop.build(e,`f`)),i.push(this.mat.build(e,`mat3`)),i.push(this.size.build(e,`v2`)),i.push(this.blending.build(e,`f`)),i.push(this.isMask.build(e,`b`)),i.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),i.push(this.alpha.build(e,`f`)),i.push(this.mode.build(e,`i`)),i.push(this.calpha),this.projection.value===4){let t=`${r}_writeUvs`,n=t+`0`,a=t+`1`,o=t+`2`,s=`${r}_triplanarWeights`;e.addFragmentVariable(n,`vec2`),e.addFragmentVariable(a,`vec2`),e.addFragmentVariable(o,`vec2`),e.addFragmentVariable(s,`vec3`),i.push(n),i.push(a),i.push(o),i.push(s)}else{let t=`${r}_writeUvs`;e.addFragmentVariable(t,`vec2`),i.push(t)}return e.format(n+`(`+i.join(`,`)+`)`,this.getType(e),t)}},la=ca;la.Nodes={cylindrical:new U(`
vec3 cylindricalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float scaledHeight = position.y / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole
                // period at the wrap seam, so implicit derivatives would smear a
                // lowest-mip column across it. Folding the u-derivatives to the
                // nearest period keeps the true footprint — and, unlike the
                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a
                // full mip too low), it leaves mip selection to the sampler, so
                // the layer's Sharpness filters and anisotropy actually apply.
                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);
                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);
				#else
                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;
				
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}
`),spherical:new U(`
vec3 sphericalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float v = 0.5 + asin(posN.y) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole
                // period at the wrap seam, so implicit derivatives would smear a
                // lowest-mip column across it. Folding the u-derivatives to the
                // nearest period keeps the true footprint — and, unlike the
                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a
                // full mip too low), it leaves mip selection to the sampler, so
                // the layer's Sharpness filters and anisotropy actually apply.
                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);
                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);
				#else
                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;

				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}
`),uv:new U(`vec3 uvTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {
				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				writeUv = uvs;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;

				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				
				lalpha *= mask;

				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;
			}`),triplanar:new U(`vec3 triplanarTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUvs0, out vec2 writeUvs1, out vec2 writeUvs2, out vec3 writeWeights) {
				vec3 p = position;
				vec2 uv0 = (1.0 + p.xy) / 2.0;     
				vec2 uv1 = (1.0 + p.zy) / 2.0;		
				vec2 uv2 = (1.0 + p.xz) / 2.0;		
	
				uv0 = (mat * vec3((uv0 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;
				uv1 = (mat * vec3((uv1 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;
				uv2 = (mat * vec3((uv2 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;

				// Range from 3 to 128 seems to be good
				float exponent = (1.0 - blending) * 125.0 + 3.0;

				vec3 n = vObjectNormal;
				vec3 weights = abs(normalize(n));
				weights = pow(weights, vec3(exponent));
				weights /= dot(weights, vec3(1.0));

				// Write out all sets of UVs that we generated
				writeUvs0 = uv0;
				writeUvs1 = uv1;
				writeUvs2 = uv2;
				writeWeights = weights;

				// Plain filtered samples: triplanar UVs are continuous (no wrap
				// seam), so implicit derivatives are already correct — the
				// forced-LOD sample this replaces bypassed the layer's Sharpness
				// filters and over-blurred by up to a mip (fwidth overestimates
				// the footprint; see the spherical/cylindrical variants).
				vec4 tmp = 
					texture2D(tex, uv0) * weights.z + 
					texture2D(tex, uv1) * weights.x + 
					texture2D(tex, uv2) * weights.y;

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;

				// Apply cropping across all 3 planes
				if ( crop > 0.5 ) {
					if ( uv0.x < 0.0 || uv0.x > 1.0 || uv0.y < 0.0 || uv0.y > 1.0 )  {
						lalpha = 0.0;
					}
					if ( uv1.x < 0.0 || uv1.x > 1.0 || uv1.y < 0.0 || uv1.y > 1.0 )  {
						lalpha = 0.0;
					}
					if ( uv2.x < 0.0 || uv2.x > 1.0 || uv2.y < 0.0 || uv2.y > 1.0 )  {
						lalpha = 0.0;
					}
				}

				lalpha *= mask;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return col;//n * 0.5 + 0.5;
			}			
			`)};var ua=class extends V{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(`v3`),this.nodeType=`Depth`,this.gradientType=e,this.smooth=t,this.near=n,this.far=r,this.isVector=i,this.isWorldSpace=a,this.origin=o,this.direction=s,this.colors=c,this.steps=l,this.isMask=d,this.alpha=u,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){let n=`g${this.uuid.toString().replace(/-/g,``)}`,r=new U(`vec3 ${n}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${n}_MAX_COLORS], float steps[${n}_MAX_COLORS], bool isMask, float mask, float alpha, out float calpha) {\n               vec4 color = colors[0];\n               #ifdef ${n}_IS_VECTOR\n                   #ifdef ${n}_LINEAR\n                       #ifdef ${n}_WORLDSPACE\n                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);\n                       #else\n                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);\n                       #endif\n                   #else\n                       #ifdef ${n}_WORLDSPACE\n                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);\n                       #else\n                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);\n                       #endif\n                   #endif\n               #else\n                   float dist = length(vWPosition - cameraPosition);\n\t\t\t       float depth = ( dist - near ) / ( far - near );\n               #endif\n\n\n              float p;\n              #ifdef ${n}_SMOOTH\n\t\t\t\tfor ( int i = 1; i < ${n}_MAX_COLORS; i++ ) {\n\t\t\t\t\t\tp = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );\n\t\t\t\t\t\tcolor = mix(color, colors[i], smoothstep(0.0, 1.0, p));\n\t\t\t\t\t}\n              #else\n                for ( int i = 1; i < ${n}_MAX_COLORS; i++ ) {\n                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);\n                   color = mix(color, colors[i], p);\n                 }\n              #endif\n\n               float lalpha = alpha * color.a * mask;\n               calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n\t\t\t   accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\t\t\t   \n               return color.rgb;\n\t\t\t}`,[ua.Nodes.vectorLinearWorldSpaceDepth,ua.Nodes.vectorLinearObjectSpaceDepth,ua.Nodes.vectorSphericalObjectSpaceDepth,ua.Nodes.vectorSphericalWorldSpaceDepth]);if(e.isShader(`fragment`)){e.define(`${n}_MAX_COLORS`,this.colors.value.length),this.smooth.value&&e.define(`${n}_SMOOTH`),this.isVector.value>.5&&e.define(`${n}_IS_VECTOR`),this.gradientType.value===0&&e.define(`${n}_LINEAR`),this.isWorldSpace.value>.5&&e.define(`${n}_WORLDSPACE`),e.require(`worldPosition`),e.addFragmentVariable(this.calpha,`float`);let i=e.include(r),a=[];return a.push(this.near.build(e,`f`)),a.push(this.far.build(e,`f`)),a.push(this.origin.build(e,`v3`)),a.push(this.direction.build(e,`v3`)),a.push(this.colors.build(e,`v4[]`)),a.push(this.steps.build(e,`f[]`)),a.push(this.isMask.build(e,`b`)),a.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),a.push(this.alpha.build(e,`f`)),a.push(this.calpha),e.format(i+`(`+a.join(`,`)+`)`,this.getType(e),t)}return console.warn(`DepthNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},da=ua;da.Nodes={vectorLinearWorldSpaceDepth:new U(`float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),vectorLinearObjectSpaceDepth:new U(`float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),vectorSphericalWorldSpaceDepth:new U(`float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(vWPosition - origin);
               return ( dist - near ) / ( far - near );
            }`),vectorSphericalObjectSpaceDepth:new U(`float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(position - origin);
               return ( dist - near ) / ( far - near );
            }`)};var fa=class extends V{constructor(e,t,n,r,i,a,o){super(`v3`),this.nodeType=`Cavity`,this.firstTime=!0,this.ridge=e,this.valley=t,this.normalViewMap=n,this.resolution=r,this.isMask=o,this.alpha=i,this.mode=a,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(this.firstTime&&(e.addVertexParsVariable(`randomColor`,`attribute vec3`),e.addVertexParsVariable(`vID`,`flat out float`),e.addFragmentParsVariable(`vID`,`flat in float`),e.addVertexFinalCode(`
                vID = randomColor.r;
            `)),e.isShader(`fragment`)){e.addFragmentVariable(this.calpha,`float`);let n=e.include(fa.Nodes.cavity),r=[];return r.push(this.normalViewMap.getTexture(e,`t`)),r.push(this.resolution.build(e,`v2`)),r.push(this.ridge.build(e,`f`)),r.push(this.valley.build(e,`f`)),r.push(this.isMask.build(e,`b`)),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.mode.build(e,`i`)),r.push(this.calpha),this.firstTime=!this.firstTime,e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`CavityNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},pa=fa;pa.Nodes=function(){return{cavity:new U(`vec3 cavity(sampler2D normalViewMap, vec2 resolution, float ridge, float valley, bool isMask, float mask, float alpha, int mode, out float calpha) {
				// The factors saturate the soft clamp by 2 — beyond that the
				// response is visually identical, so 2 is the ceiling
				// everywhere (panel, DSL, variables, old files).
				ridge = clamp(ridge, 0.0, 2.0);
				valley = clamp(valley, 0.0, 2.0);

				vec2 nuv = gl_FragCoord.xy / resolution;
				vec2 texel = vec2(1.0) / resolution;

				vec4 nUp = texture2D(normalViewMap, nuv + vec2(0.0, texel.y));
				vec4 nDown = texture2D(normalViewMap, nuv - vec2(0.0, texel.y));
				vec4 nLeft = texture2D(normalViewMap, nuv - vec2(texel.x, 0.0));
				vec4 nRight = texture2D(normalViewMap, nuv + vec2(texel.x, 0.0));

				float curv = 0.0;
				if (nUp.a == vID && nDown.a == vID && nLeft.a == vID && nRight.a == vID &&
					dot(nUp.xyz, nUp.xyz) > 0.5 && dot(nDown.xyz, nDown.xyz) > 0.5 &&
					dot(nLeft.xyz, nLeft.xyz) > 0.5 && dot(nRight.xyz, nRight.xyz) > 0.5) {
					float ndiff = (nUp.y - nDown.y) + (nRight.x - nLeft.x);
					// Blender's control mapping (workbench_data.c): a bigger
					// factor lowers the control, which raises both the linear
					// range and the clamp ceiling of the soft clamp — the
					// factors get a real O(1) signal to scale.
					float ridgeControl = 0.5 / max(ridge * ridge, 0.0001);
					float valleyControl = 0.7 / max(valley * valley, 0.0001);
					curv = ndiff > 0.0
						? 2.0 * cavitySoftClamp(ndiff, ridgeControl)
						: -2.0 * cavitySoftClamp(-ndiff, valleyControl);
					// Dead-zone: sub-visible curvature (buffer quantization
					// noise, near-zero factors) is no curvature.
					if (abs(curv) < 0.001) curv = 0.0;
				}

				// Where there is no curvature the layer says NOTHING: composite
				// with weight 0 (the outline layer's pattern) so flat pixels are
				// a bit-exact passthrough. Compositing the identity mid-grey at
				// full alpha instead perturbs the frame by float ulps
				// (1-2(1-b)(1-o) != b exactly), which downstream edge-AA
				// amplified into visible silhouette speckles. Mask mode keeps
				// the full-coverage grey — the mask IS the color output.
				// ("active" is a GLSL ES reserved word — hence cavityOn.)
				float cavityOn = curv != 0.0 ? 1.0 : 0.0;
				float lalpha = alpha * mask * mix(cavityOn, 1.0, float(isMask));
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return vec3(clamp(0.5 + 0.5 * curv, 0.0, 1.0));
			}`,[new U(`float cavitySoftClamp(float c, float control) {
				if (c < 0.5 / control) return c * (1.0 - c * control);
				return 0.25 / control;
			}`)])}}();var ma=function(){let e=new U(`vec3 random3(vec3 c) {
			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
			vec3 r;
			r.z = fract(512.0*j);
			j *= .125;
			r.x = fract(512.0*j);
			j *= .125;
			r.y = fract(512.0*j);
			return r-0.5;
		}`),t=new U(`float simplexFast(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 mediump vec3 x = p - s + dot(s, vec3(G3));
			 mediump vec3 hs = s;
			 
			 mediump vec3 e = step(vec3(0.0), x - x.yzx);
			 mediump vec3 i1 = e*(1.0 - e.zxy);
			 mediump vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 mediump vec3 x1 = x - i1 + G3;
			 mediump vec3 x2 = x - i2 + 2.0*G3;
			 mediump vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 mediump vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(hs), x);
			 d.y = dot(random3(hs + i1), x1);
			 d.z = dot(random3(hs + i2), x2);
			 d.w = dot(random3(hs + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[e]);t.keywords.F3=new W(`float F3 0.3333333`),t.keywords.G3=new W(`float G3 0.1666667`);let n=new U(`float simplexPrecise(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 vec3 x = p - s + dot(s, vec3(G3));
			 
			 vec3 e = step(vec3(0.0), x - x.yzx);
			 vec3 i1 = e*(1.0 - e.zxy);
			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 vec3 x1 = x - i1 + G3;
			 vec3 x2 = x - i2 + 2.0*G3;
			 vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(s), x);
			 d.y = dot(random3(s + i1), x1);
			 d.z = dot(random3(s + i2), x2);
			 d.w = dot(random3(s + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[e]);n.keywords.F3=new W(`float F3 0.3333333`),n.keywords.G3=new W(`float G3 0.1666667`);let r=new U(`float simplexFractal(vec3 m) {
			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
			return 0.5333333 * simplexFast(m * rot1)
				 + 0.2666667 * simplexFast(2.0 * m * rot2)
				 + 0.1333333 * simplexFast(4.0 * m * rot3)
				 + 0.0666667 * simplexFast(8.0 * m);
		}`,[t]),i=new U(`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}`),a=new U(`vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}`),o=new U(`float simplexAshima(vec3 v) {
		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
		  vec3 i  = floor(v + dot(v, C.yyy) );
		  vec3 x0 =   v - i + dot(i, C.xxx) ;
		  vec3 g = step(x0.yzx, x0.xyz);
		  vec3 l = 1.0 - g;
		  vec3 i1 = min( g.xyz, l.zxy );
		  vec3 i2 = max( g.xyz, l.zxy );
		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
		  i = mod(i, 289.0 ); 
		  vec4 p = permute( permute( permute( 
					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
		  float n_ = 1.0/7.0; 
		  vec3  ns = n_ * D.wyz - D.xzx;
		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  
		  vec4 x_ = floor(j * ns.z);
		  vec4 y_ = floor(j - 7.0 * x_ );    
		  vec4 x = x_ *ns.x + ns.yyyy;
		  vec4 y = y_ *ns.x + ns.yyyy;
		  vec4 h = 1.0 - abs(x) - abs(y);
		  vec4 b0 = vec4( x.xy, y.xy );
		  vec4 b1 = vec4( x.zw, y.zw );
		  vec4 s0 = floor(b0)*2.0 + 1.0;
		  vec4 s1 = floor(b1)*2.0 + 1.0;
		  vec4 sh = -step(h, vec4(0.0));
		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
		  vec3 p0 = vec3(a0.xy,h.x);
		  vec3 p1 = vec3(a0.zw,h.y);
		  vec3 p2 = vec3(a1.xy,h.z);
		  vec3 p3 = vec3(a1.zw,h.w);
		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		  p0 *= norm.x;
		  p1 *= norm.y;
		  p2 *= norm.z;
		  p3 *= norm.w;
		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		  m = m * m;
		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
										dot(p2,x2), dot(p3,x3) ) );
		}`,[i,a]),s=new U(`float fbm(vec3 x) {
			float v = 0.0;
			float a = 0.5;
			vec3 shift = vec3(100);
			for (int i = 0; i < NUM_OCTAVES; ++i) {
				v += a * noise(x);
				x = x * 2.0 + shift;
				a *= 0.5;
			}
			return v;
		}`,[new U(`float noise(vec3 p){
			vec3 a = floor(p);
			vec3 d = p - a;
			d = d * d * (3.0 - 2.0 * d);
			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
			vec4 k1 = perm(b.xyxy);
			vec4 k2 = perm(k1.xyxy + b.zzww);
			vec4 c = k2 + a.zzzz;
			vec4 k3 = perm(c);
			vec4 k4 = perm(c + 1.0);
			vec4 o1 = fract(k3 * (1.0 / 41.0));
			vec4 o2 = fract(k4 * (1.0 / 41.0));
			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
			return o4.y * d.y + o4.x * (1.0 - d.y);
		}`,[new U(`vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}`,[new U(`vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}`)])])]);return s.keywords.NUM_OCTAVES=new W(`int NUM_OCTAVES 5`),{simplexFast:t,simplexPrecise:n,simplexFractal:r,simplexAshima:o,fbm:s,perlin:new U(`float perlin(vec3 P){
		  vec3 Pi0 = floor(P);
		  vec3 Pi1 = Pi0 + vec3(1.0);
		  Pi0 = mod(Pi0, 289.0);
		  Pi1 = mod(Pi1, 289.0);
		  vec3 Pf0 = fract(P);
		  vec3 Pf1 = Pf0 - vec3(1.0);
		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		  vec4 iy = vec4(Pi0.yy, Pi1.yy);
		  vec4 iz0 = Pi0.zzzz;
		  vec4 iz1 = Pi1.zzzz;
		  vec4 ixy = permute(permute(ix) + iy);
		  vec4 ixy0 = permute(ixy + iz0);
		  vec4 ixy1 = permute(ixy + iz1);
		  vec4 gx0 = ixy0 / 7.0;
		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		  gx0 = fract(gx0);
		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		  vec4 sz0 = step(gz0, vec4(0.0));
		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
		  vec4 gx1 = ixy1 / 7.0;
		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		  gx1 = fract(gx1);
		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		  vec4 sz1 = step(gz1, vec4(0.0));
		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		  g000 *= norm0.x;
		  g010 *= norm0.y;
		  g100 *= norm0.z;
		  g110 *= norm0.w;
		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		  g001 *= norm1.x;
		  g011 *= norm1.y;
		  g101 *= norm1.z;
		  g111 *= norm1.w;
		  float n000 = dot(g000, Pf0);
		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		  float n111 = dot(g111, Pf1);
		  vec3 fade_xyz = fade(Pf0);
		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		  return 2.2 * n_xyz;
		}`,[i,a,new U(`vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}`)]),voronoi:new U(`float voronoi(in vec3 x, in int style, in float smoothness, in float seed, in int quality) 
		{
			
			ivec3 p = ivec3(floor(x));
			vec3 f = fract(x);

			
			
			
			
			
			
			
			
			float f1_smooth = 8.0;
			float f1 = 8.0;
			float f2_smooth = 8.0;
			float f2 = 8.0;
			float e_smooth = 8.0;
			float e = 8.0;

			
			ivec3 mb;
			vec3 mr; 

			int steps = quality;
			
			for (int x = -steps; x <= steps; x++) 
			for (int y = -steps; y <= steps; y++)
			for (int z = -steps; z <= steps; z++)
			{
				ivec3 b = ivec3(x, y, z);
				vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;
				float d = length(r);
				
				f1_smooth = smin(d, f1_smooth, smoothness);

				
				if (d < f1) 
				{
					f2 = f1;
					f1 = d;

					mb = ivec3(x, y, z);
					mr = r;
				} 
				else if (d < f2) 
				{
					f2 = d;
				}
			}	
			
			
			
			if (style != 0 &&  style != 5 && style != 7)
			for (int x = -steps; x <= steps; x++) 
			for (int y = -steps; y <= steps; y++)
			for (int z = -steps; z <= steps; z++)
			{
				
				ivec3 b = mb + ivec3(x, y, z);
				vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;
				float d1 = dot(0.5 * (mr + r), (r - mr)); 				
				float d2 = dot(0.5 * (mr + r), normalize(r - mr));

				e_smooth = smin(d1, e_smooth, smoothness);

				e = min(e, d2);

				
				{
					ivec3 b = ivec3(x, y, z);
					if (b != mb) 
					{
						vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;
						float d = length(r);

						f2_smooth = smin(d, f2_smooth, smoothness);
					}
				}
			}

			
			if (style == 0) 
			{
				return f1_smooth;
			}
			if (style == 1) 
			{
				return f2_smooth;
			}
			if (style == 2) 
			{
				return f2_smooth - f1_smooth;
				
				
				
			}
			if (style == 3) 
			{
				
				float a = f1; 
				float b = f2;
				float k = 3.0;
				float h = max(k - abs(a - b), 0.0) / k;
				float final = min(a, b) - h * h * k * (1.0 / 4.0);
				return final;
			}
			if (style == 4) 
			{
				
				return exp(5.0 * e_smooth);
			}
			if (style == 5) 
			{
				return pow(f1_smooth, 3.0);
			}
			if (style == 6) 
			{				
				const float eps = 0.0125;

				
				float thickness = smoothness * 0.25 + eps;

				
				float blur = pow(smoothness, 3.0) * 0.25 + eps;

				return smoothstep(
					thickness - thickness * blur, 
					thickness + thickness * blur, 
					e
				);
			}
			if (style == 7) 
			{
				return hashwithoutsine13(vec3(p + mb) + seed);
			}
		}
	`,[new U(`float hashwithoutsine13(vec3 p3)
		{
			p3  = fract(p3 * .1031);
			p3 += dot(p3, p3.yzx + 33.33);
			return fract((p3.x + p3.y) * p3.z);
		}`),new U(`vec3 hashwithoutsine33(vec3 p3)
		{
			p3 = fract(p3 * vec3(.1031, .1030, .0973));
			p3 += dot(p3, p3.yxz+33.33);
			return fract((p3.xxy + p3.yxx)*p3.zyx);
		}`),new U(`float metric(in vec3 p)
		{
			
			return length(p);

			
			
			
		}`),new U(`float smin( float a, float b, float k )
		{
			float h = smoothstep(0.0, 1.0, 0.5 + 0.5 * (b - a) / k);
			float correction = k * h * (1.0 - h);
			return mix(b, a, h) - correction;
		}`),new U(`float smax( float a, float b, float k )
		{
			float h = smoothstep(1.0, 0.0, 0.5 + 0.5 * (a - b) / k);
			float correction = k * h * (1.0 - h);
			return mix(a, b, h) + correction;
		}`),new U(`float remap(float value, float input_min, float input_max, float output_min, float output_max) {
			// Compute width of each interval
			float input_width = input_max - input_min;
			float output_width = output_max - output_min;
		
			// Convert input range into a 0-1 range 
			float scaled = (value - input_min) / input_width;
		
			// Convert the 0-1 range into a value in output range
			return output_min + (scaled * output_width);
		}`)])}}(),ha=class extends V{constructor(e,t,n,r,i,a,o){super(`v3`),this.nodeType=`Dust`,this.color=e,this.coverage=t,this.softness=n,this.noiseStrength=r,this.noiseScale=i,this.isMask=o,this.alpha=a,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.require(`worldNormal`),e.isShader(`fragment`)){e.addFragmentVariable(this.calpha,`float`);let n=e.include(ha.Nodes.dust),r=[];return r.push(this.color.build(e,`c`)),r.push(this.coverage.build(e,`f`)),r.push(this.softness.build(e,`f`)),r.push(this.noiseStrength.build(e,`f`)),r.push(this.noiseScale.build(e,`f`)),r.push(this.isMask.build(e,`b`)),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`DustNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},ga=ha;ga.Nodes={dust:new U(`vec3 dust(vec3 color, float coverage, float softness, float noiseStrength, float noiseScale, bool isMask, float mask, float alpha, out float calpha) {
				float facingUp = dot(normalize(vWNormal), vec3(0.0, 1.0, 0.0));

				float breakup = 0.0;
				if (noiseStrength != 0.0) {
					vec3 st = position / noiseScale;
					float noise = simplexFast(st + vec3(1.7, 9.2, 1.0));
					breakup = noise * noiseStrength;
				}

				float soft = max(softness, 0.0001);
				float settle = mix(1.0 + soft, -1.0 - soft, clamp(coverage, 0.0, 1.0));
				float amount = smoothstep(settle - soft, settle + soft, facingUp + breakup);

				float lalpha = amount * alpha * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return color;
			 }`,[ma.simplexFast])};var _a=class extends V{constructor(e,t,n,r,i,a,o,s){super(`v3`),this.nodeType=`Fresnel`,this.color=e,this.bias=t,this.scale=n,this.intensity=r,this.factor=i,this.isMask=s,this.alpha=a,this.mode=o,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.require(`vWorldViewDir`),e.require(`worldNormal`),e.isShader(`fragment`)){e.addFragmentVariable(this.calpha,`float`);let n=new U(`vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, bool isMask, float mask, float alpha, int mode, out float calpha) {
					float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );

					float lalpha = clamp(fresnel, 0.0, 1.0) * alpha * mask;
					calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
					accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

					return color;
				}`),r=e.include(n),i=[];return i.push(this.color.build(e,`c`)),i.push(this.bias.build(e,`f`)),i.push(this.scale.build(e,`f`)),i.push(this.intensity.build(e,`f`)),i.push(this.factor.build(e,`f`)),i.push(this.isMask.build(e,`b`)),i.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),i.push(this.alpha.build(e,`f`)),i.push(this.mode.build(e,`i`)),i.push(this.calpha),e.format(r+`(`+i.join(`,`)+`)`,this.getType(e),t)}return console.warn(`FresnelNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},va=class extends V{constructor(e,t,n,r,i,a,o,s,c){super(`v3`),this.nodeType=`Gradient`,this.gradientType=e,this.smooth=t,this.colors=n,this.steps=r,this.offset=i,this.morph=a,this.angle=o,this.isMask=c,this.alpha=s,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.isShader(`fragment`)){e.define(`GRAD_MAX`,10),e.require(`uv`),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,`float`);let n=e.include(va.Nodes.gradient),r=[];return r.push(this.gradientType.build(e,`i`)),r.push(this.smooth.build(e,`b`)),r.push(this.colors.build(e,`v4[]`)),r.push(this.steps.build(e,`f[]`)),r.push(this.offset.build(e,`v2`)),r.push(this.morph.build(e,`v2`)),r.push(this.angle.build(e,`f`)),r.push(this.isMask.build(e,`b`)),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`GradientNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},ya=va;ya.Nodes={gradient:new U(`vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, bool isMask, float mask, float alpha, out float calpha) {
				vec4 color = colors[0];
				vec2 m = morph / vUv.xy;
				vec2 rot = vec2( 0.5 + m.x, m.y );
				vec2 dt = vec2(
					cos( angle ) * rot.x - sin( angle ) * rot.y,
					sin( angle ) * rot.x + cos( angle ) * rot.y
				);
				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;
				float t = dot( pt, dt ) / dot( dt, dt );
				if ( gradientType == 1 ) {
					t = distance (
						( vUv + morph ) * 3.0,
						( vUv + offset ) + 1.0
					) + angle;
				} else if ( gradientType == 2 ) {
					float polar = atan(
						vUv.x + morph.x - 0.5 + offset.x,
						vUv.y + morph.y - 0.5 + offset.y
					) * -1.0;
					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );
				}

				float p;
				if (smoothed) {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}

				} else {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], p);
					}
				}

				float lalpha = alpha * color.a * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));
				
				return color.xyz;
			}`)};var ba=class extends V{constructor(e,t,n,r,i){super(`v3`),this.nodeType=`Matcap`,this.texture=e,this.isMask=r,this.alpha=t,this.mode=n,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`,this.rotation=i}generate(e,t){if(e.isShader(`fragment`)){e.addFragmentVariable(this.calpha,`float`);let n=e.include(ba.Nodes.matcap);e.require(`normal`),e.requires.normal=!0;let r=[];return r.push(this.texture.generate(e,`t`)),r.push(`normal`),r.push(this.isMask.build(e,`b`)),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.mode.build(e,`i`)),r.push(this.calpha),r.push(this.rotation.build(e,`f`)),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`MatcapNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},xa=ba;xa.Nodes={matcap:new U(`vec3 matcap(sampler2D matcapTex, vec3 normal, bool isMask, float mask, float alpha, int mode, out float calpha, float rotation) {
					vec3 viewDir = normalize( vViewPosition );
					vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
					vec3 y = cross( viewDir, x );
					vec2 uv = vec2( dot( x, normal ), dot( y, normal ) );
					uv = mat2( cos(rotation), sin(rotation), -sin(rotation), cos(rotation) ) * uv;
					uv = uv * 0.495 + 0.5;
					vec4 matcapColor = texture2D( matcapTex, uv );

					float lalpha = alpha * mask;
					calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
					accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));
					
					return matcapColor.rgb;
            	}`)};var Sa=class extends V{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){super(`v3`),this.nodeType=`Noise`,this.scale=e,this.size=t,this.move=n,this.fA=r,this.fB=i,this.distortion=a,this.colorA=o,this.colorB=s,this.colorC=c,this.colorD=l,this.noiseType=d,this.voronoiStyle=p,this.highCut=m,this.lowCut=h,this.smoothness=g,this.seed=_,this.quality=v,this.isMask=f,this.alpha=u,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t,n,r,i){e.require(`uv`),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,`float`);let a=[`simplexFast`,`simplexFractal`,`simplexAshima`,`fbm`,`perlin`,`voronoi`][this.noiseType.value],o=new U(`vec3 ${a}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, int voronoiStyle, float highCut, float lowCut, float smoothness, float seed, int quality, bool isMask, float mask, float alpha, out float calpha) \n\t\t\t{\n                \n\t\t\t\tscale = max(abs(scale), 0.001);\n\n\t\t\t\tvec3 st = position / size;\n\t\t\t\tst /= scale;\n\n\t\t\t\t${a==`voronoi`?`\n\t\tfloat v = ${a}(st + move, voronoiStyle, smoothness, seed, quality);\n\n\t\t\n\t\tv = remap(v, lowCut, highCut, 0.0, 1.0);\n\t\tv = smax(v, 0.0, smoothness * 0.25);\n\t\tv = smin(v, 1.0, smoothness * 0.25);\n\n\t\t\n\t\tvec4 color = mix(colorA, colorC, v); \n\t\t`:`\n\t\tvec3 q = vec3(${a}(st),\n\t\t\t\t\t   ${a}(st + vec3(1.0)),\n\t\t\t\t\t   ${a}(st + vec3(1.0)));\n\t\tvec3 r = vec3(${a}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),\n\t\t\t\t\t  ${a}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), \n\t\t\t\t\t  ${a}(st * q));\n\t\tfloat f = ${a}(st + r);\n\t\tvec4 color;\n\t\tcolor = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));\n\t\tcolor = mix(color, colorC, clamp(length(q), 0.0, 1.0));\n\t\tcolor = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));\n\t\t`}\n\n\t\t\t\tfloat lalpha = alpha * color.a * mask;\n\t\t\t\tcalpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn clamp(color, 0.0, 1.0).rgb;\n\t\t\t}`,[ma.simplexFast,ma.simplexFractal,ma.simplexAshima,ma.fbm,ma.perlin,ma.voronoi]),s=e.include(o),c=[];return c.push(this.scale.build(e,`f`)),c.push(this.size.build(e,`v3`)),c.push(this.move.build(e,`f`)),c.push(this.fA.build(e,`v2`)),c.push(this.fB.build(e,`v2`)),c.push(this.distortion.build(e,`v2`)),c.push(this.colorA.build(e,`v4`)),c.push(this.colorB.build(e,`v4`)),c.push(this.colorC.build(e,`v4`)),c.push(this.colorD.build(e,`v4`)),c.push(this.voronoiStyle.build(e,`i`)),c.push(this.highCut.build(e,`f`)),c.push(this.lowCut.build(e,`f`)),c.push(this.smoothness.build(e,`f`)),c.push(this.seed.build(e,`f`)),c.push(this.quality.build(e,`i`)),c.push(this.isMask.build(e,`b`)),c.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),c.push(this.alpha.build(e,`f`)),c.push(this.calpha),e.format(s+`(`+c.join(`,`)+`)`,this.getType(e),t)}};Sa.numOctaves=5;var Ca=class extends V{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){super(`v3`),this.nodeType=`Outline`,this.firstTime=!0,this.outlineColor=e,this.contourColor=t,this.outlineWidth=n,this.contourWidth=r,this.contourThreshold=i,this.outlineThreshold=a,this.contourFrequency=o,this.outlineSmoothing=s,this.contourDirection=c,this.positionalLines=l,this.compensation=u,this.resolution=d,this.normalMap=f,this.depthMap=p,this.pixelRatio=m,this.alpha=h,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){let n=`g${this.uuid.toString().replace(/-/g,``)}`;if(e.require(`vWorldViewDir`),e.require(`worldNormal`),e.extensions.derivatives=!0,this.compensation.value&&e.define(`OUTLINE_COMPENSATION`,`${n}_offset`),this.firstTime){let t=this.outlineWidth.build(e,`f`),r=this.resolution.build(e,`v2`),i=this.compensation.build(e,`b`),a=this.pixelRatio.build(e,`f`);e.addVertexParsVariable(`randomColor`,`attribute vec3`),e.addVertexParsVariable(`extrudeNormal`,`attribute vec3`),e.addVertexParsVariable(t,`uniform float`),e.addVertexParsVariable(r,`uniform vec2`),e.addVertexParsVariable(i,`uniform bool`),e.addVertexParsVariable(a,`uniform float`),e.addVertexParsVariable(`vID`,`flat out float`),e.addFragmentParsVariable(`vID`,`flat in float`),e.addVertexFinalCode(`\n                vID = randomColor.r;\n                vec2 ${n}_offset = vec2(0.0);\n                if (${i}) {\n                    // Instanced draws (cloner instancing): 'transformed' is still\n                    // instance-local here — three's chunks only apply instanceMatrix\n                    // inside project_vertex — so apply it by hand like they do.\n                    vec4 ${n}_localPosition = vec4(transformed, 1.0);\n                    vec3 ${n}_extrudeNormal = extrudeNormal;\n                    #ifdef USE_INSTANCING\n                    ${n}_localPosition = instanceMatrix * ${n}_localPosition;\n                    ${n}_extrudeNormal = mat3(instanceMatrix) * ${n}_extrudeNormal;\n                    #endif\n                    vec4 ${n}_clipPosition = projectionMatrix * (modelViewMatrix * ${n}_localPosition);\n                    \n                    \n                    \n                    vec3 ${n}_clipNormal = mat3(projectionMatrix) * (mat3(modelViewMatrix) * ${n}_extrudeNormal) + 0.0000001;\n                    ${n}_offset = normalize(${n}_clipNormal.xy) / ${r} * (${t} / 2.0) * ${n}_clipPosition.w * 2.0 * ${a};\n                    ${n}_clipPosition.xy += ${n}_offset;\n                    \n                    \n                    gl_Position = ${n}_clipPosition;\n                }\n            `)}if(e.isShader(`fragment`)){e.require(`uv`),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,`float`);let n=e.include(Ca.Nodes.outline),r=[];return r.push(this.outlineColor.build(e,`c`)),r.push(this.contourColor.build(e,`c`)),r.push(this.outlineWidth.build(e,`f`)),r.push(this.contourWidth.build(e,`f`)),r.push(this.contourThreshold.build(e,`f`)),r.push(this.outlineThreshold.build(e,`f`)),r.push(this.contourFrequency.build(e,`f`)),r.push(this.outlineSmoothing.build(e,`f`)),r.push(this.contourDirection.build(e,`v3`)),r.push(this.positionalLines.build(e,`b`)),r.push(this.resolution.build(e,`v2`)),r.push(this.normalMap.getTexture(e,`t`)),r.push(this.depthMap.getTexture(e,`t`)),r.push(this.pixelRatio.build(e,`f`)),r.push(this.compensation.build(e,`b`)),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),this.firstTime=!this.firstTime,e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`OutlineNode is not compatible with `+e.shader+` shader.`),``}},wa=Ca;wa.Nodes=function(){return{outline:new U(`vec3 outline(vec3 outlineColor, vec3 contourColor, float outlineWidth, float contourWidth, float outlineThreshold, float contourThreshold, float outlineSmoothing, float contourFrequency, vec3 contourDirection, bool positionalLines, vec2 resolution, sampler2D normalMap, sampler2D depthMap, float pixelRatio, bool compensation, float mask, float alpha, out float calpha) {
                vec3 result = outlineColor;
                float resultAlpha = 0.0;

                vec3 N = normalize(vWNormal);
                vec2 nuv = (gl_FragCoord.xy / resolution);
                float sobelSample = compensation ? sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth / 2., pixelRatio) : sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth, pixelRatio);
                resultAlpha = smoothstep(outlineThreshold - outlineSmoothing, outlineThreshold + outlineSmoothing, sobelSample);

                
                

                float t = 1.0 - contourThreshold;
                if(positionalLines) {
                    vec3 NDir = position * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float f  = fract(NT * contourFrequency * 0.01);
                    float df = fwidth(NT * contourFrequency);

                    float g = smoothstep(df * (contourWidth * 0.01), df * (contourWidth * 0.01 * 2.0), f);
                    if (g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0;
                    }
                 }
                 else {
                    vec3 NDir = N * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float df = fwidth(NT * contourThreshold);
                    float f = sin(NT * 1.0 * contourFrequency);
                    float g = smoothstep(0.0, df * contourWidth, 1.0 - f);

                    if (df > (t * 0.5) && g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0 - g;
                    }
                 }

                 float lalpha = alpha * resultAlpha * mask;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				 
                 return result;
             }`,[new U(`
float sobelSample(sampler2D t, sampler2D d, vec2 uv, vec2 resolution, float outlineWidth, float pixelRatio)
{
    vec2 halton = haltonSequence[frameIndex];
    float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);
    float temporalAngle  = temporalOffset * PI2;

    vec2 texelSize = (vec2(1.0) / resolution);
    vec2 offsetSize = texelSize * outlineWidth * pixelRatio;

    vec2 uvSamples[9];
    vec4 normalSamples[9];

	uvSamples[0] = uv + vec2( -offsetSize.x, -offsetSize.y) + (vogelDiskSample(0, 9, temporalAngle) * texelSize);
	uvSamples[1] = uv + vec2(0.0, -offsetSize.y) + (vogelDiskSample(1, 9, temporalAngle) * texelSize);
	uvSamples[2] = uv + vec2(  offsetSize.x, -offsetSize.y) + (vogelDiskSample(2, 9, temporalAngle) * texelSize);
	uvSamples[3] = uv + vec2( -offsetSize.x, 0.0) + (vogelDiskSample(3, 9, temporalAngle) * texelSize);
	uvSamples[4] = uv;
	uvSamples[5] = uv + vec2(  offsetSize.x, 0.0) + (vogelDiskSample(5, 9, temporalAngle) * texelSize);
	uvSamples[6] = uv + vec2( -offsetSize.x, offsetSize.y) + (vogelDiskSample(6, 9, temporalAngle) * texelSize);
	uvSamples[7] = uv + vec2(0.0, offsetSize.y) + (vogelDiskSample(7, 9, temporalAngle) * texelSize);
	uvSamples[8] = uv + vec2(  offsetSize.x, offsetSize.y) + (vogelDiskSample(8, 9, temporalAngle) * texelSize);


    normalSamples[0] = texture2D(t, uvSamples[0]);
    normalSamples[1] = texture2D(t, uvSamples[1]);
    normalSamples[2] = texture2D(t, uvSamples[2]);
    normalSamples[3] = texture2D(t, uvSamples[3]);
    normalSamples[4] = texture2D(t, uvSamples[4]);
    normalSamples[5] = texture2D(t, uvSamples[5]);
    normalSamples[6] = texture2D(t, uvSamples[6]);
    normalSamples[7] = texture2D(t, uvSamples[7]);
    normalSamples[8] = texture2D(t, uvSamples[8]);

    float depthBias = 0.0001;
    
    if (normalSamples[0].a != vID && normalSamples[0].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[0]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[1].a != vID && normalSamples[1].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[1]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[2].a != vID && normalSamples[2].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[2]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[3].a != vID && normalSamples[3].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[3]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }


    if (normalSamples[4].a != vID && normalSamples[4].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[4]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[5].a != vID && normalSamples[5].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[5]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[6].a != vID && normalSamples[6].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[6]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[7].a != vID && normalSamples[7].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[7]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[8].a != vID && normalSamples[8].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[8]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    vec3 sobel_edge_h = normalSamples[2].rgb + (2.0*normalSamples[5].rgb) + normalSamples[8].rgb - (normalSamples[0].rgb + (2.0*normalSamples[3].rgb) + normalSamples[6].rgb);
  	vec3 sobel_edge_v = normalSamples[0].rgb + (2.0*normalSamples[1].rgb) + normalSamples[2].rgb - (normalSamples[6].rgb + (2.0*normalSamples[7].rgb) + normalSamples[8].rgb);

    float edgeNormal = sqrt(dot(sobel_edge_h, sobel_edge_h) + dot(sobel_edge_v, sobel_edge_v));
    return edgeNormal;
}
`)])}}();var Ta=class extends V{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){super(`v3`),this.nodeType=`Pattern`,this.style=e,this.projection=t,this.axis=n,this.blending=r,this.offset=i,this.colorA=a,this.colorB=o,this.frequency=s,this.size=c,this.variation=l,this.smoothness=u,this.zigzag=d,this.rotation=f,this.vertical=p,this.horizontal=m,this.sides=h,this.isMask=_,this.alpha=g,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.isShader(`fragment`)){let n;switch(e.require(`position`),e.require(`uv`),e.requires.uv=[!0],e.require(`normal`),e.requires.normal=!0,e.addFragmentVariable(this.calpha,`float`),this.style.value){case 0:default:n=`circle`;break;case 1:n=`ring`;break;case 2:n=`polygon`;break;case 3:n=`xcross`;break;case 4:n=`diamond`;break;case 5:n=`checkerboard`;break;case 6:n=`line`;break;case 7:n=`wave`}let r=`g${this.uuid.toString().replace(/-/g,``)}`,i=new U(`float hashwithoutsine12(vec2 p)
				{
					vec3 p3 = fract(vec3(p.xyx) * .1031);
					p3 += dot(p3, p3.yzx + 33.33);
					return fract((p3.x + p3.y) * p3.z);
				}`),a=new U(`vec2 rotate_uv(in vec2 uv, float a, bool repeat) 
				{
					const float mid = 0.5;
					float radians = a * (PI / 180.0);
					vec2 rotated = vec2(
						cos(radians) * (uv.x - mid) + sin(radians) * (uv.y - mid) + mid,
						cos(radians) * (uv.y - mid) - sin(radians) * (uv.x - mid) + mid
					);
					return repeat ? fract(rotated): rotated;
				}`),o=``;if(this.projection.value===4)o=`\n\t\t\t\tvec3 p = position;\n\t\t\t\tfloat factor = 0.0125;\n\t\t\t\tvec2 uv0 = fract(p.xy * factor);\n\t\t\t\tvec2 uv1 = fract(p.zy * factor);\n\t\t\t\tvec2 uv2 = fract(p.xz * factor);\n\t\t\t\t\n\t\t\t\tuv0 = rotate_uv(uv0 + offset, rotation, true);\n\t\t\t\tuv1 = rotate_uv(uv1 + offset, rotation, true);\n\t\t\t\tuv2 = rotate_uv(uv2 + offset, rotation, true);\n\t\n\t\t\t\tfloat d0 = ${this.style.value===2?`${n}(uv0, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${n}(uv0, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};\n\t\t\t\tfloat d1 = ${this.style.value===2?`${n}(uv1, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${n}(uv1, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};\n\t\t\t\tfloat d2 = ${this.style.value===2?`${n}(uv2, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${n}(uv2, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tfloat exponent = (1.0 - blending) * 125.0 + 3.0;\n\n\t\t\t\tvec3 n = vObjectNormal;\n\t\t\t\tvec3 weights = abs(normalize(n));\n\t\t\t\tweights = pow(weights, vec3(exponent));\n\t\t\t\tweights /= dot(weights, vec3(1.0));\n\t\t\t\td0 *= weights.z;\n\t\t\t\td1 *= weights.x;\n\t\t\t\td2 *= weights.y;\n\t\t\t\tfloat draw = d0 + d1 + d2;\n\t\n\t\t\t\tvec2 custom_uv = uv0 * weights.z + uv1 * weights.x + uv2 * weights.y;\n\t\t\t\t`;else{let e=this.style.value===2?`${n}(custom_uv, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)`:`${n}(custom_uv, frequency, size, variation, smoothness_remapped, zigzag, rotation)`,t=``;this.axis.value===0?t=`float radius = length(p);
					float theta = atan(p.y, p.z);
					float phi = acos(p.x / radius);`:this.axis.value===1?t=`float radius = length(p);
					float theta = atan(p.x, p.z);
					float phi = acos(p.y / radius);`:(this.axis.value,t=`float radius = length(p);
					float theta = atan(p.y, p.x);
					float phi = acos(p.z / radius);`);let r=``;switch(this.projection.value){case 0:r=`custom_uv = vUv.st;`;break;case 1:case 3:default:break;case 2:r=`\n\t\t\t\t\t\t\tvec3 p = position;\n\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t\tcustom_uv = vec2(theta, phi);\n\t\t\t\t\t\t\tcustom_uv /= PI;\n\t\t\t\t\t\t\t`}o=`\n\t\t\t\tvec2 custom_uv;\n\t\t\t\t${r}\n\t\n\t\t\t\tcustom_uv += offset;\n\t\t\t\tcustom_uv = fract(custom_uv);\n\t\t\t\tcustom_uv = rotate_uv(custom_uv, rotation, true);\n\t\n\t\t\t\tfloat draw = ${e};\n\t\t\t\t`}let s=new U(`vec3 ${r}_pattern(vec3 normal, float blending, int style, vec2 offset, vec4 colorA, vec4 colorB, vec2 frequency, float size, float variation, float smoothness, float zigzag, float rotation, vec2 vertical, vec2 horizontal, int sides, bool isMask, float mask, float alpha, out float calpha) {\n\t\t\t\t\tconst float TWO_PI = PI * 2.0;\n\t\t\t\t\tfloat smoothness_remapped = pow(smoothness, 5.0);\t\n\n\t\t\t\t\t${o}\n\n\t\t\t\t\t\n\t\t\t\t\tvec4 color = mix(colorA, colorB, draw);\n\t\t\t\t\tcolor.a = clamp(color.a, 0.0, 1.0);\n\n\t\t\t\t\t\n\t\t\t\t\tcolor.a *= \n\t\t\t\t\t\tstep(vertical.x, custom_uv.y) * \n\t\t\t\t\t\tstep(custom_uv.y, vertical.y);\n\t\t\t\t\tcolor.a *= \n\t\t\t\t\t\tstep(horizontal.x, abs(custom_uv.x)) * \n\t\t\t\t\t\tstep(abs(custom_uv.x), horizontal.y);\n\n\t\t\t\t\t\n\t\t\t\t\tfloat lalpha = alpha * clamp(color.a, 0.0, 1.0) * mask;\n\t\t\t\t\tcalpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n\t\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\t\treturn clamp(color, 0.0, 1.0).rgb;\n\t\t\t\t}`,[a,i,Ta.DrawFunctions.circle,Ta.DrawFunctions.ring,Ta.DrawFunctions.polygon,Ta.DrawFunctions.cross,Ta.DrawFunctions.diamond,Ta.DrawFunctions.checkerboard,Ta.DrawFunctions.line,Ta.DrawFunctions.wave]),c=e.include(s),l=[];return l.push(`normal`),l.push(this.blending.build(e,`f`)),l.push(this.style.build(e,`i`)),l.push(this.offset.build(e,`v2`)),l.push(this.colorA.build(e,`v4`)),l.push(this.colorB.build(e,`v4`)),l.push(this.frequency.build(e,`v2`)),l.push(this.size.build(e,`f`)),l.push(this.variation.build(e,`f`)),l.push(this.smoothness.build(e,`f`)),l.push(this.zigzag.build(e,`f`)),l.push(this.rotation.build(e,`f`)),l.push(this.vertical.build(e,`v2`)),l.push(this.horizontal.build(e,`v2`)),l.push(this.sides.build(e,`i`)),l.push(this.isMask.build(e,`b`)),l.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),l.push(this.alpha.build(e,`f`)),l.push(this.calpha),e.format(c+`(`+l.join(`,`)+`)`,this.getType(e),t)}return console.warn(`PatterNode is not compatible with `+e.shader+` shader.`),e.format(`vec3(0.0)`,this.getType(e),t)}},Ea=Ta;Ea.DrawFunctions=function(){let e=new U(`vec2 tile_and_center(in vec2 uv, in vec2 frequency, in float variation, in float zigzag, in float rotation) {
                
                uv *= frequency;

                
                vec2 i = floor(uv);

                
                float row_offset = mod(i.y, 2.0);
                uv.x += row_offset * zigzag;
                vec2 f = fract(uv);

				
				
				
				
				
				
				

                f = f * 2.0 - 1.0;

				
				i = floor(uv);
				float rand = (hashwithoutsine12(i) * 5.0 + 1.0);
				float jitter = mix(1.0, rand, variation);
				f *= jitter;

                return f;
            }`,[new U(`float hashwithoutsine12(vec2 p) {
				vec3 p3 = fract(vec3(p.xyx) * 0.1031);
				p3 += dot(p3, p3.yzx + 33.33);
				return fract((p3.x + p3.y) * p3.z);
			}`)]);return{tileAndCenter:e,circle:new U(`float circle(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
                return smoothstep(
                    -smoothness, 
                     smoothness, 
                     length(f) - size
                );
            }`,[e]),ring:new U(`float ring(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);

				float d = length(f);
                const float inner_width = 0.5;

                float outer = smoothstep(-smoothness, smoothness, d - size);
                float inner = smoothstep(-smoothness, smoothness, d - size * inner_width);
				return outer + (1.0 - inner);   
            }`,[e]),polygon:new U(`float sdf_ngon(in vec2 p, in float r, in int n) {
                float an = (PI * 2.0) / float(n);
                float he = r * tan(0.5 * an);
                
                
                p = -p.yx; 
                float bn = an * floor((atan(p.y, p.x) + 0.5 * an) / an);
                vec2  cs = vec2(cos(bn), sin(bn));
                p = mat2(cs.x, -cs.y, cs.y, cs.x)*p;
            
                
                return length(p - vec2(r, clamp(p.y, -he, he))) * sign(p.x - r);
            }
            
            float polygon(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation, in int sides) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
                return smoothstep(-smoothness, smoothness, sdf_ngon(f, size, sides));
            }`,[e]),cross:new U(`float sdf_cross(in vec2 p, in vec2 b, float r ) {
                p = abs(p); 
				p = (p.y > p.x) ? p.yx : p.xy;
                vec2  q = p - b;
                float k = max(q.y, q.x);
                vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);
                return sign(k) * length(max(w, 0.0)) + r;
            }
            
            
            float xcross(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
                return smoothstep(-smoothness, smoothness, sdf_cross(f, vec2(size, size * 0.25), smoothness));
            }`,[e]),diamond:new U(`float ndot(vec2 a, vec2 b) { 
                return a.x*b.x - a.y*b.y; 
            }
            
            float sdf_diamond(in vec2 p, in vec2 b) {
                p = abs(p);
                float h = clamp(ndot(b - 2.0 * p, b) / dot(b, b), -1.0, 1.0);
                float d = length(p - 0.5 * b * vec2(1.0 - h, 1.0 + h));
                return d * sign(p.x * b.y + p.y * b.x - b.x * b.y);
            }

            float diamond(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);
	            return smoothstep(-smoothness, smoothness, sdf_diamond(f, vec2(size)));
            }`,[e]),checkerboard:new U(`float checkerboard(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                uv *= frequency;
                vec2 i = floor(uv);

                float offset = mod(i.y, 2.0);

                uv.x += offset + zigzag * offset;
                float x = floor(uv.x);
                
                return mod(x, 2.0);
            }`),line:new U(`float line(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                vec2 f = tile_and_center(uv, frequency, 0.0, zigzag, rotation);
				
				
				float row = floor(uv * frequency).y;
				float rand = hashwithoutsine12(vec2(row));
				float s = mix(size, size * rand, variation);

				return smoothstep(
					s - smoothness, 
					s + smoothness, 
					abs(f.y)
				);
            }`,[e]),wave:new U(`
            float udf_cos(in vec2 p, in float a, in float b, in float c, in float d) {
                
                p = c * (p - vec2(d, a));
                
                const float TWO_PI = PI * 2.0;

                
                p.x = mod(p.x, TWO_PI); 
                if (p.x > PI) {
                    p.x = TWO_PI - p.x;
                }
            
                
                float xa = 0.0;
                float xb = TWO_PI;

                
                for (int i = 0; i < 24; i++) {
                    float x = 0.5 * (xa + xb);
                    float y = x - p.x + b * c * sin(x) * (p.y - b * c * cos(x));
                    if (y < 0.0) xa = x; 
                    else xb = x;
                }
                float x = 0.5 * (xa + xb);
                
                
                vec2 q = vec2(x, b * c * cos(x));
                return length(p - q) / c;
            }

            float wave(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {
                float repeat = frequency.x;
                uv *= repeat;
                vec2 i = floor(uv);
                float row_offset = mod(i.y, 2.0);
                uv.x += row_offset * zigzag;
                vec2 f = vec2(uv.x, fract(uv.y));

                
                const float amplitude = 0.125;
                float wave_frequency = frequency.y * 0.1;
                float distance_estimate = udf_cos(f, 0.50, amplitude, wave_frequency * (2.0 * PI), 0.0);

				
				float rand = hashwithoutsine12(vec2(i.y));
				float s = mix(size, size * rand, variation);

                return smoothstep(-smoothness, smoothness, distance_estimate - s * 0.5);
            }`)}}();var Da=class extends V{constructor(e,t,n,r,i,a,o,s,c=!0){super(`v3`),this.nodeType=`Rainbow`,this.filmThickness=e,this.movement=t,this.wavelengths=n,this.noiseStrength=r,this.noiseScale=i,this.offset=a,this.isMask=s,this.alpha=o,this.noiseEnabled=c,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.require(`vWorldViewDir`),e.require(`worldNormal`),e.isShader(`fragment`)){e.require(`uv`),e.requires.uv=[!0],e.addFragmentVariable(this.calpha,`float`);let n=e.include(this.noiseEnabled?Da.Nodes.rainbow:Da.Nodes.rainbowNN),r=[];return r.push(this.filmThickness.build(e,`f`)),r.push(this.movement.build(e,`f`)),r.push(this.wavelengths.build(e,`v3`)),r.push(this.noiseStrength.build(e,`f`)),r.push(this.noiseScale.build(e,`f`)),r.push(this.offset.build(e,`v3`)),r.push(this.isMask.build(e,`b`)),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`RainbowNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},Oa=Da;Oa.Nodes=function(){return{rainbow:new U(`vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, bool isMask, float mask, float alpha, out float calpha) {
				mediump vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

				float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);

				float lalpha = alpha * rainbowContribution * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return res;
			 }`,[new U(`vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
				float f = 0.0;

				if (noiseStrength != 0.0) {
					vec3 st = position / noiseScale;
					float noise = simplexFast(1.6 * st + vec3(1.8, 1.5, 1.9) * simplexFast(st) + vec3(1.7, 9.2, 1.0));
					f = noise * noiseStrength;
				}

				vec3 waves = wavelengths * vec3(1.0, 0.8, 0.6) + 1.0;
				float angle = dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal));

				mediump vec3 color = cos((((filmThickness + f) / waves) * angle) + movement);
				return .5 + .5 * color;
			 }`,[ma.simplexFast])]),rainbowNN:new U(`vec3 rainbowNN(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, bool isMask, float mask, float alpha, out float calpha) {
				mediump vec3 res = clamp(attenuationNN(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

				float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);

				float lalpha = alpha * rainbowContribution * mask;
				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));
				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));

				return res;
			 }`,[new U(`vec3 attenuationNN(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
				vec3 waves = wavelengths * vec3(1.0, 0.8, 0.6) + 1.0;
				float angle = dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal));

				mediump vec3 color = cos(((filmThickness / waves) * angle) + movement);
				return .5 + .5 * color;
			 }`)])}}();var ka=class extends V{constructor(e,t,n,r,i,a,o,s,c,l){super(`v3`),this.nodeType=`Toon`,this.positioning=e,this.colors=t,this.steps=n,this.source=r,this.isWorldSpace=i,this.noiseStrength=a,this.noiseScale=o,this.shadowColor=s,this.offset=c,this.alpha=l,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.require(`worldNormal`),e.require(`worldPosition`),e.isShader(`fragment`)){e.define(`COLORS_MAX`,10),e.addFragmentVariable(this.calpha,`float`);let n=e.include(ka.Nodes.toon),r=[];return r.push(this.positioning.build(e,`i`)),r.push(this.colors.build(e,`v4[]`)),r.push(this.steps.build(e,`f[]`)),r.push(this.source.build(e,`v3`)),r.push(this.isWorldSpace.build(e,`b`)),r.push(this.noiseStrength.build(e,`f`)),r.push(this.noiseScale.build(e,`f`)),r.push(this.shadowColor.build(e,`v4`)),r.push(this.offset.build(e,`v3`)),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`ToonNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},Aa=ka;Aa.Nodes=function(){let e=new U(`float rand(float n) {
				return fract(sin(n) * 43758.5453123);
			}`),t=new U(`float valueNoise(vec3 x) {
				const vec3 step = vec3(110, 241, 171);
			
				vec3 i = floor(x);
				vec3 f = fract(x);
			 
				
				
				float n = dot(i, step);
			
				vec3 u = f * f * (3.0 - 2.0 * f);
				return mix(mix(mix( hash1(n + dot(step, vec3(0, 0, 0))), hash1(n + dot(step, vec3(1, 0, 0))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 0))), hash1(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
						   mix(mix( hash1(n + dot(step, vec3(0, 0, 1))), hash1(n + dot(step, vec3(1, 0, 1))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 1))), hash1(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
			}`,[new U(`float hash1(float p) { 
				p = fract(p * 0.011); 
				p *= p + 7.5; 
				p *= p + p; 
				return fract(p); 
			}`)]),n=new U(`vec3 voronoiNoise(in vec3 x)
			{
				vec3 p = floor(x);
				vec3 f = fract(x);

				float id = 0.0;
				vec2 res = vec2(100.0);

				for(int k=-1; k<=1; k++)
				for(int j=-1; j<=1; j++)
				for(int i=-1; i<=1; i++)
				{
					vec3 b = vec3(float(i), float(j), float(k));

					
					vec3 r = vec3(b) - f + hash3(p + b);
					float d = dot(r, r);

					if (d < res.x)
					{
						id = dot(p + b, vec3(1.0, 57.0, 113.0));
						res = vec2(d, res.x);			
					}
					else if (d < res.y)
					{
						res.y = d;
					}
				}

				return vec3(sqrt(res), abs(id));
			}
			`,[new U(`vec3 hash3(vec3 x) {
				x = vec3(dot(x,vec3(127.1, 311.7, 74.7)),
						 dot(x,vec3(269.5, 183.3, 246.1)),
						 dot(x,vec3(113.5, 271.9, 124.6)));
			
				return fract(sin(x)*43758.5453123);
			}`)]);return{toon:new U(`vec3 toon(int positioning, vec4 colors[COLORS_MAX], float steps[COLORS_MAX], vec3 source, bool isWorldSpace, float noiseStrength, float noiseScale, vec4 shadowColor, vec3 offset, float mask, float alpha, out float calpha) {
				float t = 0.0;
				float shadow = 1.0;

				if (positioning == 0) {

					
					#if (defined(PHONG) || defined(LAMBERT) || defined(STANDARD))

						
						const vec3 weights = vec3(0.2125, 0.7154, 0.0721);
						vec3 lpos;
						vec3 l;
						float dproduct;

						#if (NUM_POINT_LIGHTS > 0)

							#if defined(USE_SHADOWMAP) && (NUM_POINT_LIGHT_SHADOWS > 0)
								PointLightShadow pointLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
								
								lpos = (inverse(viewMatrix) * vec4(pointLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								
								
								

								t = max(t, dproduct);

								
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
									pointLightShadow = pointLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getPointShadow( 
											pointShadowMap[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowMapSize,
											pointLightShadow.shadowIntensity,
											pointLightShadow.shadowBias, 
											pointLightShadow.shadowRadius,
											vPointShadowCoord[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowCameraNear, 
											pointLightShadow.shadowCameraFar);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_DIR_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_DIR_LIGHT_SHADOWS > 0)
								DirectionalLightShadow directionalLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
								
								l = (inverse(viewMatrix) * vec4(directionalLights[UNROLLED_LOOP_INDEX].direction, 0.0)).xyz;
		
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
									directionalLightShadow = directionalLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow( 
										UNROLLED_LOOP_INDEX,
										directionalShadowMap[UNROLLED_LOOP_INDEX], 
										directionalLightShadow.shadowMapSize,
										directionalLightShadow.shadowIntensity,
										directionalLightShadow.shadowBias, 
										directionalLightShadow.shadowRadius, 
										vDirectionalShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_SPOT_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_SPOT_LIGHT_SHADOWS > 0)
								SpotLightShadow spotLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
								lpos = (inverse(viewMatrix) * vec4(spotLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
									spotLightShadow = spotLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow(
										UNROLLED_LOOP_INDEX,
										spotShadowMap[UNROLLED_LOOP_INDEX], 
										spotLightShadow.shadowMapSize,
										spotLightShadow.shadowIntensity,
										spotLightShadow.shadowBias, 
										spotLightShadow.shadowRadius, 
										vSpotLightCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						t = clamp(t, 0.0, 1.0);
				
					#endif

				} else if (positioning == 1) {
					
					vec3 origin = mix(position, worldPosition, float(isWorldSpace));
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	

				} else {

					vec3 origin = worldPosition;
					vec3 source = cameraPosition - offset;
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	
					
				}

				if (noiseStrength > 0.0) {
					
					vec3 st = position / noiseScale;
					
					
					float noise = 1.0 - voronoiNoise(st).x;

					
					

					
					
					
					
					
					
					
					

					t += noise * noiseStrength;
				}

				t = clamp(t, 0.0, 1.0);

				
				float p;
				vec4 color = colors[0];
				for (int i = 1; i < COLORS_MAX; i++) {
					p = clamp((t - steps[i-1]) / (steps[i] - steps[i-1]), 0.0, 1.0);
					color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
				}

				
				if (positioning == 0) {

					vec3 blendedShadow = mix(color.rgb, shadowColor.rgb, shadowColor.a);
					color.rgb = mix(blendedShadow, color.rgb, shadow);
				
				}

				
				float lalpha = alpha * color.a * mask;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color.xyz;

            }`,[ma.simplexFast,e,t,n])}}();var ja={textureBicubic:new U(`float w0( float a ) {
            return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
        }
    
        float w1( float a ) {
            return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
        }
    
        float w2( float a ){
            return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
        }
    
        float w3( float a ) {
            return ( 1.0 / 6.0 ) * ( a * a * a );
        }
    
        
        float g0( float a ) {
            return w0( a ) + w1( a );
        }
    
        float g1( float a ) {
            return w2( a ) + w3( a );
        }
    
        
        float h0( float a ) {
            return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
        }
    
        float h1( float a ) {
            return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
        }
    
        vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
            uv = uv * texelSize.zw + 0.5;
    
            vec2 iuv = floor( uv );
            vec2 fuv = fract( uv );
    
            float g0x = g0( fuv.x );
            float g1x = g1( fuv.x );
            float h0x = h0( fuv.x );
            float h1x = h1( fuv.x );
            float h0y = h0( fuv.y );
            float h1y = h1( fuv.y );
    
            vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
            vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
            vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
            vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    
            return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) + 
                   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
        }

        vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
            vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
            vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
            vec2 fLodSizeInv = 1.0 / fLodSize;
            vec2 cLodSizeInv = 1.0 / cLodSize;
            vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
            vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
            return mix( fSample, cSample, fract( lod ) );
        }`)},Ma=class extends V{constructor(e,t,n,r,i,a,o,s){super(`v3`),this.nodeType=`Transmission`,this.thickness=e,this.ior=t,this.roughness=n,this.transmissionSamplerSize=r,this.transmissionSamplerMap=i,this.transmissionDepthMap=a,this.aspectRatio=o,this.alpha=s,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.extensions.shaderTextureLOD=!0,e.extensions.derivatives=!0,e.isShader(`fragment`)){e.define(`NUM_SAMPLES`,6),e.define(`BLUR_SLOD`,2**Q.transmissionLod.value),e.require(`worldPosition`),e.requires.worldNormal=!0,e.requires.modelMatrix=!0,e.requires.projectionMatrix=!0,e.addFragmentVariable(this.calpha,`float`);let n=e.include(Ma.Nodes.transmission),r=[];return r.push(this.thickness.build(e,`f`)),r.push(this.ior.build(e,`f`)),r.push(this.roughness.build(e,`f`)),r.push(this.transmissionSamplerSize.build(e,`v2`)),r.push(this.transmissionSamplerMap.getTexture(e,`t`)),r.push(this.transmissionDepthMap.getTexture(e,`t`)),r.push(this.aspectRatio.build(e,`v2`)),r.push(`normal`),r.push(this.mask?`luminance(${this.mask.flow(e,`v3`).result})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`TransmissionNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},Na=Ma;Na.Nodes=function(){let e=new U(`vec3 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {
                
                

				
				if (lod == 0.0) {
					#ifdef TEXTURE_LOD_EXT
					return texture2DLodEXT( sp, U, 0.0).rgb;
					#else
					return textureLod( sp, U, 0.0).rgb;
					#endif
				}
				
				vec2 texelSize = vec2(1.0) / resolution;
                vec2 halton = haltonSequence[frameIndex];
                float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);
                float temporalAngle  = temporalOffset * PI2;
				vec3 res = vec3(0.0);
                vec2 uv = vec2(0.0);
                vec2 offset = vec2(0.0);
                vec2 vogelSample = vec2(0.0);
                for (int i = 0; i < NUM_SAMPLES; i++) {
                    vogelSample =  vogelDiskSample(i, NUM_SAMPLES, temporalAngle) * texelSize;
                    offset = vogelSample * scale * (lod * 10.0); 
                    uv = U + offset;
                    float opaqueDepth = unpackRGBAToDepth(textureLod(dm, uv, lod));
                    if (opaqueDepth != 0.0 && opaqueDepth < gl_FragCoord.z) {
                        uv = unrefractedU;
                        lod = lod > 4.0 ? lod : lod / 2.0;
                    }
                    res += textureLod(sp, uv, lod).rgb;
                }
                return res / float(NUM_SAMPLES);
            }`),t=new U(`vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		        
		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );
		        
				
		        vec3 modelScale;
		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		        
		        return normalize( refractionVector ) * thickness * modelScale;
	        }`),n=new U(`float applyIorToRoughness( float roughness, float ior ) {
				// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
				// an IOR of 1.5 results in the default amount of microfacet refraction.
				return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
			}`);return{transmission:new U(`vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float mask, float alpha, out float calpha) {
                vec3 v = vec3(0.);
                if (isOrthographic) {
                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
                } else {
                    v = normalize(vWPosition - cameraPosition);
                }
                vec3 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );
                
				float lalpha = alpha * mask;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * alpha;

				return transmission;
            }`,[new U(`vec3 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				
				vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );
				vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;
				unrefractedCoords += 1.0;
				unrefractedCoords /= 2.0;

				
				return getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );
    		}`,[new U(`vec3 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {
				
				
				#ifdef IS_THREEJS_EXPORT
					float lod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness / 5.0, ior);
					return textureBicubic(transmissionSamplerMap, fragCoord.xy, lod).rgb;
				#else
					float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
					float lod = applyIorToRoughness(roughness, ior);
					return blur(transmissionSamplerMap, fragCoord, vec2(lod), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);
				#endif
			}`,[ja.textureBicubic,n,e]),t])])}}();var Pa=class extends V{constructor(e){super(`v3`),this.nodeType=`VertexColor`,this.alpha=e,this.calpha=`g${this.uuid.toString().replace(/-/g,``)}_calpha`}generate(e,t){if(e.isShader(`fragment`)){e.requires.color[0]=!0;let n=e.include(Pa.Nodes.vertexColorLayer);e.addFragmentVariable(this.calpha,`float`);let r=[];return r.push(`vColor`),r.push(this.mask?`luminance(${this.mask.build(e,`v3`)})`:`1.0`),r.push(this.alpha.build(e,`f`)),r.push(this.calpha),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`VertexColorNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},Fa=Pa;Fa.Nodes={vertexColorLayer:new U(`vec3 vertexColorLayer(vec4 vcolor, float mask, float alpha, out float calpha) {
				float lalpha = alpha * mask * vcolor.a;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return vcolor.rgb;
			}`)};var Ia,La=((Ia=La||{}).NOISE=`noise`,Ia.MAP=`map`,Ia),Ra=class extends V{constructor(e,t,n,r,i,a,o,s,c,l,u){super(`v3`),this.displacementTypeIndex=new Y(0),this.nodeType=`VertexDisplacement`,this.intensity=e,this.movementOrTexture=t,Object.values(La)[this.displacementTypeIndex.value]===`map`&&(this.mat=new Zi(this.movementOrTexture.value.matrix)),this.cropOrOffset=n,this.scale=l,this.noiseFunctionIndex=u,this.voronoiStyle=r,this.smoothness=i,this.seed=a,this.highCut=o,this.lowCut=s,this.quality=c}generate(e,t){if(e.isShader(`vertex`)){e.define(`USE_LAYER_DISPLACE`);let n,r=[];switch(r.push(`displaced_position`),r.push(`displaced_normal`),Object.values(La)[this.displacementTypeIndex.value]){case`map`:n=e.include(Ra.Nodes.map),r.push(this.movementOrTexture.getTexture(e,`t`)),r.push(`uv`),r.push(this.cropOrOffset.build(e,`f`)),this.mat&&r.push(this.mat.build(e,`mat3`));break;case`noise`:{let t=[`simplexPrecise`,`simplexFractal`,`simplexAshima`,`fbm`,`perlin`,`voronoi`][this.noiseFunctionIndex.value],i=new U(`vec3 orthogonal(vec3 v) {
							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
						}`),a=new U(`vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, int voronoiStyle, float smoothness, float seed, float highCut, float lowCut, int quality, float intensity, out vec3 displaced_normal) {
							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);
							vec3 tangent1 = orthogonal(normal);
							vec3 tangent2 = normalize(cross(normal, tangent1));

                            
                            
                            
                            
                            
							vec3 nearby1 = position + tangent1;
							vec3 nearby2 = position + tangent2;
							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);
							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);
							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
							return displaced_position;
						}`,[new U(`vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement, int voronoiStyle, float smoothness, float seed, float highCut, float lowCut, int quality) {\n\t\t\t\t\t\t\t${t==`voronoi`?`\n\t\t\t\t\tfloat v = ${t}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1), voronoiStyle, smoothness, seed, quality);\n\t\t\t\t\tv = remap(v, lowCut, highCut, 0.0, 1.0);\n\t\t\t\t\tv = smax(v, 0.0, smoothness * 0.25);\n\t\t\t\t\tv = smin(v, 1.0, smoothness * 0.25);\n\n\t\t\t\t\treturn p + n * v * intensity;\n\t\t\t\t\t`:`\n\t\t\t\t\treturn p + n * ${t}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;\n\t\t\t\t\t`}\n\t\t\t\t\t\t}`,[ma.simplexPrecise,ma.simplexFractal,ma.simplexAshima,ma.fbm,ma.perlin,ma.voronoi]),i]);n=e.include(a),r.push(this.scale.build(e,`f`)),r.push(this.cropOrOffset.build(e,`v3`)),r.push(this.movementOrTexture.build(e,`f`)),r.push(this.voronoiStyle.build(e,`i`)),r.push(this.smoothness.build(e,`f`)),r.push(this.seed.build(e,`f`)),r.push(this.highCut.build(e,`f`)),r.push(this.lowCut.build(e,`f`)),r.push(this.quality.build(e,`i`));break}}return r.push(this.intensity.build(e,`f`)),r.push(`displaced_normal`),e.format(n+`(`+r.join(`,`)+`)`,this.getType(e),t)}return console.warn(`VertexDisplacementNode is not compatible with `+e.shader+` shader.`),e.format(`vec3( 0.0 )`,this.getType(e),t)}},za=Ra;za.Nodes=function(){return{map:new U(`vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {
				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;
				vec3 tangent1 = normalize(orthogonal(normal));
				vec3 tangent2 = normalize(cross(normal, tangent1));
				vec3 nearby1 = position + tangent1 * 0.1;
				vec3 nearby2 = position + tangent2 * 0.1;
				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
				return displaced_position;
			}`,[new U(`vec3 orthogonal(vec3 v) {
				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
			}`),new U(`float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {
				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;
				vec4 tmp = texture2D(tex, uvs);
				vec3 col = tmp.rgb;
				if (crop > 0.5) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						return 0.0;
					}
				}
				return col.r;
			}`)])}}();var Q={normalRenderTarget:new $t,normalRenderTargetDepth:new $t,normalViewRenderTarget:new $t,transmissionRenderTarget:new $t,aspectRatio:new Bt,transmissionSize:new Bt(2048,2048),transmissionRenderTargetDepth:new $t,aoRenderTarget:new $t,aoEnabled:new Ki,pixelRatioNode:new H(1),resolution:new Bt,penumbraSize:new qi(5,.5),frameIndex:new Y(0),transmissionLod:new Y(2),taaEnabled:new Ki(!0)};for(let e of Object.values(Q))e.isRenderGlobal=!0;var Ba={spe_fogMode:new C(0),spe_fogHeightParams:new C(new l(.005,.01,0))},Va=`
#include <fog_pars_fragment>
#ifdef USE_FOG
	uniform float spe_fogMode;
	uniform vec3 spe_fogHeightParams;

	// Analytic optical depth of an exponential height-fog layer along the
	// camera->fragment ray (see FogChunk.ts). fogWorldDelta = fragment -
	// camera in WORLD space, fogDist = its length. With x = falloff *
	// fogWorldDelta.y the integral collapses to camDensity * fogDist * F(x),
	// F(x) = (1 - e^-x)/x. F is evaluated on a sign-preserving |x| >= 1e-4:
	// that keeps F's x->0 limit of 1 (horizontal rays / falloff 0 degrade to
	// classic exponential fog) without a branch — deliberate, because the
	// WGSL twins' select() evaluates BOTH sides, so a guarded division, not
	// a branch, is what actually prevents inf/NaN there, and all four
	// implementations stay line-for-line identical.
	float speHeightFogFactor(const in vec3 fogWorldDelta, const in float fogDist) {
		float density = spe_fogHeightParams.x;
		float falloff = spe_fogHeightParams.y;
		float relY = cameraPosition.y - spe_fogHeightParams.z;
		// Density at the camera's own height, overflow-clamped: far below
		// the fog base the exponent explodes; the fog factor saturates to 1
		// long before, so the clamp is invisible.
		float camDensity = density * exp(clamp(-falloff * relY, -60.0, 60.0));
		float x = clamp(falloff * fogWorldDelta.y, -60.0, 60.0);
		float xSafe = (x >= 0.0 ? 1.0 : -1.0) * max(abs(x), 1e-4);
		float opticalDepth =
			camDensity * fogDist * (1.0 - exp(-xSafe)) / xSafe;
		return 1.0 - exp(-max(opticalDepth, 0.0));
	}
#endif
`,Ha=`
#ifdef USE_FOG
	float speFogLinear = smoothstep(fogNear, fogFar, vFogDepth);
	vec3 speFogViewPos = -vViewPosition;
	float speFogDist = length(speFogViewPos);
	vec3 speFogWorldDelta = speFogViewPos * mat3(viewMatrix);
	float speFogHeight = speHeightFogFactor(speFogWorldDelta, speFogDist);
	float speFogWLinear = 1.0 - step(0.5, spe_fogMode) + step(1.5, spe_fogMode);
	float speFogWHeight = step(0.5, spe_fogMode);
	float speFogFactor = 1.0 -
		(1.0 - speFogLinear * speFogWLinear) *
			(1.0 - speFogHeight * speFogWHeight);
	gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, speFogFactor);
#endif
`,Ua=class extends Pt{constructor(){super(`basic`),this.nodeType=`Basic`,this.color=new J(Je),this.shadingAlpha=new H(1),this.shadingBlend=new Y(0),this.previousModelViewMatrix=new Qi,this.previouseProjectionMatrix=new Qi}get category(){return`phong`}generate(e){let t;if(e.isShader(`vertex`)){let n=this.position?this.position.analyzeAndFlow(e,`v3`,{cache:`position`}):void 0;e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({resolution:Q.resolution}),e.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),e.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),e.mergeUniform(w.merge([Z.fog])),e.mergeUniform(Ba),e.addParsCode([`varying vec3 vViewPosition;`,`varying vec3 vWPosition;`,`#include <fog_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <normal_pars_vertex>`,`#include <morphtarget_pars_vertex>`].join(`
`));let r=[`#include <beginnormal_vertex>`,`#include <morphnormal_vertex>`,`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,`#include <normal_vertex>`,`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];n&&r.push(n.code,n.result?`displaced_position = `+n.result+`;`:``),r.push(`transformed = displaced_position;`,`#include <morphtarget_vertex>`,`#include <skinning_vertex>`,`transformedNormal = normalMatrix * displaced_normal;`,`#ifndef FLAT_SHADED`,`	vNormal = transformedNormal;`,`#endif`),r.push(`#include <project_vertex>`,`#include <fog_vertex>`,`#include <clipping_planes_vertex>`,`	vViewPosition = - mvPosition.xyz;`,`#include <worldpos_vertex>`),r.push(`vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t=r.join(`
`)}else{this.color===void 0&&(this.color=new J(5526619)),this.color.analyze(e,{slot:`color`}),this.alpha&&this.alpha.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:`afterColor`});let n=this.color.flow(e,`c`,{slot:`color`}),r=this.alpha?this.alpha.flow(e,`f`):void 0,i=this.alphaOverride?this.alphaOverride.flow(e,`f`):void 0,a=this.afterColor?this.afterColor.flow(e,`c`,{slot:`afterColor`}):void 0;e.requires.transparent=r!==void 0,e.addParsCode([`varying vec3 vWPosition;`,Va,`#include <dithering_pars_fragment>`,`varying vec3 vViewPosition;`,`#include <normal_pars_fragment>`].join(`
`));let o=[`#include <normal_fragment_begin>`,n.code];r&&o.push(r.code,`#ifdef ALPHATEST`,` if ( `+r.result+` <= ALPHATEST ) discard;`,`#endif`),a?o.push(a.code,`vec3 outgoingLight = ${n.result};`,`vec3 finalColor = spe_blend(outgoingLight, ${a.result}, 1.0, SPE_BLENDING_NORMAL);`):o.push(`vec3 finalColor = ${n.result};`);let s=`1.0`;this.mask&&(this.mask.analyze(e),s=`luminance(${this.mask.flow(e,`v3`).result})`),r?o.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${r.result} * ${s} );`):o.push(`gl_FragColor = vec4(`+n.result+`, 1.0 );`),i&&o.push(`gl_FragColor.a *= ${i.result};`),o.push(Ha,`#include <dithering_fragment>`),t=o.join(`
`)}return t}},Wa=class extends Pt{constructor(){super(`lambert`),this.nodeType=`Lambert`,this.color=new J(Je),this.emissive=new J(0),this.emissiveIntensity=new H(1),this.previousModelViewMatrix=new Qi,this.previouseProjectionMatrix=new Qi,this.shadingAlpha=new H(1),this.shadingBlend=new Y(0),this.occlusion=new Ki(!0)}get category(){return`lambert`}build(e){let t;if(e.define(`LAMBERT`),e.requires.lights=!0,e.extensions.derivatives=!0,e.isShader(`vertex`)){let n=this.position?this.position.analyzeAndFlow(e,`v3`,{cache:`position`}):void 0;e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({resolution:Q.resolution}),e.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),e.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),e.mergeUniform(w.merge([Z.fog,Z.lights])),e.mergeUniform(Ba),e.addParsCode([`varying vec3 vViewPosition;`,`varying vec3 vWPosition;`,`varying vec3 vLightFront;`,`varying vec3 vIndirectFront;`,`#ifndef DOUBLE_SIDED`,`   #define DOUBLE_SIDED`,`#endif`,`#ifdef DOUBLE_SIDED`,`	varying vec3 vLightBack;`,`	varying vec3 vIndirectBack;`,`#endif`,`#include <bsdfs>`,`#include <lights_pars_begin>`,`#include <color_pars_vertex>`,`#include <fog_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <normal_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <shadowmap_pars_vertex>`,`#include <clipping_planes_pars_vertex>`].join(`
`));let r=[`#include <beginnormal_vertex>`,`#include <morphnormal_vertex>`,`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,`#include <normal_vertex>`,`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];n&&r.push(n.code,n.result?`displaced_position = `+n.result+`;`:``),r.push(`transformed = displaced_position;`,`#include <morphtarget_vertex>`,`#include <skinning_vertex>`,`transformedNormal = normalMatrix * displaced_normal;`,`#ifndef FLAT_SHADED`,`    vNormal = transformedNormal;`,`#endif`),r.push(`	#include <project_vertex>`,`	#include <clipping_planes_vertex>`,`	vViewPosition = - mvPosition.xyz;`,`	#include <worldpos_vertex>`,`
					vec3 diffuse = vec3( 1.0 );
					
					
					struct GeometricContext { vec3 position; vec3 normal; vec3 viewDir; };
					GeometricContext geometry;
					geometry.position = mvPosition.xyz;
					geometry.normal = normalize( transformedNormal );
					geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
				`),r.push(`
					GeometricContext backGeometry;
					backGeometry.position = geometry.position;
					backGeometry.normal = -geometry.normal;
					backGeometry.viewDir = geometry.viewDir;
					vLightFront = vec3( 0.0 );
					vIndirectFront = vec3( 0.0 );
					#ifdef DOUBLE_SIDED
						vLightBack = vec3( 0.0 );
						vIndirectBack = vec3( 0.0 );
					#endif
					IncidentLight directLight;
					float dotNL;
					vec3 directLightColor_Diffuse;
					vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
					#if defined( USE_LIGHT_PROBES )
						vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
					#endif
					#ifdef DOUBLE_SIDED
						vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
						#if defined( USE_LIGHT_PROBES )
							vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
						#endif
					#endif
					#if NUM_POINT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
							getPointLightInfo( pointLights[ i ], geometry.position, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_SPOT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
							getSpotLightInfo( spotLights[ i ], geometry.position, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_DIR_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
							getDirectionalLightInfo( directionalLights[ i ], directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_HEMI_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
							vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
							#ifdef DOUBLE_SIDED
								vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
							#endif
						}
						#pragma unroll_loop_end
					#endif
				`,`	#include <shadowmap_vertex>`,`	#include <fog_vertex>`),r.push(`vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t=r.join(`
`)}else{e.mergeUniform({penumbraSize:Q.penumbraSize}),e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({aoMap:Q.aoRenderTarget}),e.mergeUniform({aoEnabled:Q.aoEnabled}),this.color===void 0&&(this.color=new J(5526619)),this.color.analyze(e,{slot:`color`}),this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:`afterColor`}),this.alpha&&this.alpha.analyze(e);let n=this.color.flow(e,`c`,{slot:`color`}),r=this.emissive.flow(e,`c`,{slot:`emissive`}),i=this.emissiveIntensity.flow(e,`f`,{slot:`emissive`}),a=this.occlusion.flow(e,`b`,{slot:`occlusion`}),o=this.shadingAlpha.flow(e,`f`),s=this.shadingBlend.flow(e,`i`),c=this.afterColor?this.afterColor.flow(e,`c`,{slot:`afterColor`}):void 0,l=this.alpha?this.alpha.flow(e,`f`):void 0,u=this.alphaOverride?this.alphaOverride.flow(e,`f`):void 0;e.requires.transparent=l!==void 0,e.addParsCode([`uniform float penumbraSize[5];`,`uniform sampler2D aoMap;`,`uniform bool aoEnabled;`,`varying vec3 vViewPosition;`,`varying vec3 vWPosition;`,`varying vec3 vLightFront;`,`varying vec3 vIndirectFront;`,`#ifndef DOUBLE_SIDED`,`   #define DOUBLE_SIDED`,`#endif`,`#include <normal_pars_fragment>`,`#ifdef DOUBLE_SIDED`,`	varying vec3 vLightBack;`,`	varying vec3 vIndirectBack;`,`#endif`,`#include <bsdfs>`,`#include <lights_pars_begin>`,Va,`#include <shadowmap_pars_fragment>`,`#include <shadowmask_pars_fragment>`,`#include <clipping_planes_pars_fragment>`,`#include <dithering_pars_fragment>`].join(`
`));let d=[`#include <normal_fragment_begin>`,`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx, viewdy));
				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);
				`,`#include <clipping_planes_fragment>`];d.push(n.code,`vec3 diffuseColor = `+n.result+`;`,`ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );`),l&&d.push(l.code,`#ifdef ALPHATEST`,`if ( `+l.result+` <= ALPHATEST ) discard;`,`#endif`),d.push(`#ifdef DOUBLE_SIDED`,`	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;`,`#else`,`	reflectedLight.indirectDiffuse += vIndirectFront;`,`#endif`,`#ifdef USE_LIGHTMAP`,`	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );`,`	reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;`,`#endif`,`reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );`,`#ifdef DOUBLE_SIDED`,`	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;`,`#else`,`	reflectedLight.directDiffuse = vLightFront;`,`#endif`,`reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();`),r&&d.push(r.code,`reflectedLight.directDiffuse += `+r.result+` * `+i.result+`;`),d.push(`vec3 ao = aoEnabled && `+a.result+` ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);`,`vec3 outgoingLight = (reflectedLight.directDiffuse + reflectedLight.indirectDiffuse) ;`);let f=`1.0`;this.mask&&(this.mask.analyze(e),f=`luminance(${this.mask.flow(e,`v3`).result})`),d.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * ${f} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result} * ${f}, ${s.result} );\n\n\t\t\t\t\toutgoingLight *= ao;\n\t\t\t\t}\n\t\t\t\t`),c&&d.push(c.code,`outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`),l?d.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result} );`):d.push(`gl_FragColor = vec4( outgoingLight, 1.0 );`),u&&d.push(`gl_FragColor.a *= ${u.result};`),d.push(`#include <colorspace_fragment>`,Ha,`#include <dithering_fragment>`),t=d.join(`
`)}return t}},Ga={dHdxy:new U(`vec2 dHdxy(sampler2D bumpMap, vec2 bumpMapUv, float bumpScale) {

            
            vec2 dSTdx = dFdx(bumpMapUv);

            
            vec2 dSTdy = dFdy(bumpMapUv);
            
            
            float Hll = bumpScale * luminance(texture(bumpMap, bumpMapUv).rgb);
            float dBx = bumpScale * luminance(texture(bumpMap, bumpMapUv + dSTdx).rgb) - Hll;
            float dBy = bumpScale * luminance(texture(bumpMap, bumpMapUv + dSTdy).rgb) - Hll;
            
            return vec2( dBx, dBy );
        }`),perturbNormalArb:new U(`vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
            vec3 vSigmaX = dFdx( surf_pos.xyz );
            vec3 vSigmaY = dFdy( surf_pos.xyz );
            vec3 vN = surf_norm; 
            
            vN = normalize(vN);

            vec3 R1 = cross( vSigmaY, vN );
            vec3 R2 = cross( vN, vSigmaX );

            R1 = normalize(R1);
            R2 = normalize(R2);
    
            float fDet = dot( vSigmaX, R1 ) * faceDirection;
    
            vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
            return normalize( abs( fDet ) * vN - vGrad );
        }`)},Ka=class extends Pt{constructor(){super(`standard`),this.nodeType=`Standard`,this.color=new J(Je),this.roughness=new H(.3),this.metalness=new H(0),this.reflectivity=new H(.5),this.previousModelViewMatrix=new Qi,this.previouseProjectionMatrix=new Qi,this.shadingAlpha=new H(1),this.shadingBlend=new Y(0),this.occlusion=new Ki(!0)}get category(){return`physical`}build(e){let t;if(e.define(`STANDARD`),e.requires.lights=!0,e.extensions.derivatives=!0,e.extensions.shaderTextureLOD=!0,e.isShader(`vertex`)){let n=this.position?this.position.analyzeAndFlow(e,`v3`,{cache:`position`}):void 0;e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({resolution:Q.resolution}),e.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),e.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),e.mergeUniform(w.merge([Z.fog,Z.lights])),e.mergeUniform(Ba),Z.LTC_1&&(e.uniforms.ltc_1={value:void 0},e.uniforms.ltc_2={value:void 0}),e.addParsCode([`varying vec3 vViewPosition;`,`varying vec3 vWPosition;`,`#include <fog_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <normal_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <shadowmap_pars_vertex>`,`#include <clipping_planes_pars_vertex>`].join(`
`));let r=[`#include <beginnormal_vertex>`,`#include <morphnormal_vertex>`,`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,`#include <normal_vertex>`,`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];n&&r.push(n.code,n.result?`displaced_position = `+n.result+`;`:``),r.push(`transformed = displaced_position;`,`#include <morphtarget_vertex>`,`#include <skinning_vertex>`,`transformedNormal = normalMatrix * displaced_normal;`,`#ifndef FLAT_SHADED`,`    vNormal = transformedNormal;`,`#endif`),r.push(`#include <project_vertex>`,`#include <fog_vertex>`,`#include <clipping_planes_vertex>`,`	vViewPosition = - mvPosition.xyz;`,`#include <worldpos_vertex>`,`#include <shadowmap_vertex>`),r.push(`vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t=r.join(`
`)}else{e.mergeUniform({penumbraSize:Q.penumbraSize}),e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({aoMap:Q.aoRenderTarget}),e.mergeUniform({aoEnabled:Q.aoEnabled}),e.mergeUniform({dfgLUT:{value:null}});let n={gamma:!0};this.color===void 0&&(this.color=new J(5526619)),this.color.analyze(e,{slot:`color`,context:n}),this.roughness.analyze(e),this.metalness.analyze(e);let r=this.occlusion.flow(e,`b`,{slot:`occlusion`});this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:`afterColor`}),this.alpha&&this.alpha.analyze(e),this.reflectivity&&this.reflectivity.analyze(e);let i=this.color.flow(e,`c`,{slot:`color`,context:n}),a=this.roughness.flow(e,`f`),o=this.metalness.flow(e,`f`),s=this.shadingAlpha.flow(e,`f`),c=this.shadingBlend.flow(e,`i`),l=this.afterColor?this.afterColor.flow(e,`c`,{slot:`afterColor`}):void 0,u=this.alpha?this.alpha.flow(e,`f`):void 0,d=this.alphaOverride?this.alphaOverride.flow(e,`f`):void 0,f=this.reflectivity?this.reflectivity.flow(e,`f`):void 0;e.requires.transparent=u!==void 0,e.addParsCode([`varying vec3 vViewPosition;`,`varying vec3 vWPosition;`,`uniform float penumbraSize[5];`,`uniform sampler2D aoMap;`,`uniform bool aoEnabled;`,`#include <normal_pars_fragment>`,`#include <dithering_pars_fragment>`,Va,`#include <bsdfs>`,`#include <lights_pars_begin>`,`#include <lights_physical_pars_fragment>`,`#include <shadowmap_pars_fragment>`].join(`
`));let p=[`#include <clipping_planes_fragment>`,`	#include <normal_fragment_begin>`,`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,`	PhysicalMaterial material;`,`	material.diffuseColor = vec3( 1.0 );`];if(this.bumpMap){e.include(Ga.dHdxy),e.include(Ga.perturbNormalArb);let t=this.bumpMap.texture.flow(e,`t`),n=this.bumpMap.flow(e,`v3`),r=this.bumpMapIntensity?this.bumpMapIntensity.flow(e,`f`).result:`1.0`,i=``;i=this.bumpMap.projection.value===4?`\n\t\t\t\t\tvec3 bumpNormal = vec3(0.0);\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_triplanarWeights;\n\n\t\t\t\t\t\tvec2 grad0 = dHdxy(${t.result}, uv0, ${r});\n\t\t\t\t\t\tvec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);\n\n\t\t\t\t\t\tvec2 grad1 = dHdxy(${t.result}, uv1, ${r});\n\t\t\t\t\t\tvec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);\n\n\t\t\t\t\t\tvec2 grad2 = dHdxy(${t.result}, uv2, ${r});\n\t\t\t\t\t\tvec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);\n\t\t\t\t\t\t\n\t\t\t\t\t\tbumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;\n\t\t\t\t\t\tbumpNormal = normalize(bumpNormal);\n\t\t\t\t\t}\n\n\t\t\t\t\tnormal = bumpNormal;\n\t\t\t\t\t`:`\n\t\t\t\t\tvec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs;\n\t\t\t\t\tvec2 grad = dHdxy(${t.result}, bumpMapCachedUv, ${r});\n\t\t\t\t\tnormal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );\n\t\t\t\t\t`,p.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\t\t\t\t\t${i}\n\t\t\t\t\t`)}if(p.push(i.code,`	vec3 diffuseColor = `+i.result+`;`,`	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );`,o.code,`	float metalnessFactor = `+o.result+`;`),this.roughnessMap){let t=this.roughnessMap.texture.flow(e,`t`),n=this.roughnessMap.flow(e,`v3`),r=``;r=this.roughnessMap.projection.value===4?`\n\t\t\t\t\tfloat roughnessChange = 1.0;\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.roughnessMap.uuid.toString().replace(/-/g,``)}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.roughnessMap.uuid.toString().replace(/-/g,``)}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.roughnessMap.uuid.toString().replace(/-/g,``)}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.roughnessMap.uuid.toString().replace(/-/g,``)}_triplanarWeights;\n\n\t\t\t\t\t\tfloat r0 = luminance(texture(${t.result}, uv0).rgb) * roughnessScale;\n\t\t\t\t\t\tfloat r1 = luminance(texture(${t.result}, uv1).rgb) * roughnessScale;\n\t\t\t\t\t\tfloat r2 = luminance(texture(${t.result}, uv2).rgb) * roughnessScale;\n\n\t\t\t\t\t\troughnessChange = (r0 * weights.z + r1 * weights.x + r2 * weights.y);\n\t\t\t\t\t}\n\t\t\t\t\tfloat roughnessFactor = roughnessChange * ${a.result};\n\t\t\t\t\t`:`\n\t\t\t\t\tvec2 roughnessMapCachedUv = g${this.roughnessMap.uuid.toString().replace(/-/g,``)}_writeUvs;\n\n\t\t\t\t\tvec4 vals = texture(${t.result},  roughnessMapCachedUv);\n\t\t\t\t\tfloat roughnessFactor = luminance(vals.rgb) * ${a.result};\n\t\t\t\t\t`,p.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\n\t\t\t\t\tconst float roughnessScale = 1.0;\n\n\t\t\t\t\t${r}\n\t\t\t\t`)}else p.push(a.code,`	float roughnessFactor = `+a.result+`;`);u&&p.push(u.code,`#ifdef ALPHATEST`,`	if ( `+u.result+` <= ALPHATEST ) discard;`,`#endif`),p.push(`vec3 dxy = max( abs( dFdx( normal ) ), abs( dFdy( normal ) ) );`,`float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );`),p.push(`material.diffuseColor = diffuseColor;`,`material.diffuseContribution = diffuseColor * ( 1.0 - metalnessFactor );`,`material.metalness = metalnessFactor;`,`material.specularF90 = 1.0;`,`material.roughness = max( roughnessFactor, 0.0525 );`,`material.roughness += geometryRoughness;`,`material.roughness = min( material.roughness, 1.0 );`,`material.roughness = clamp( roughnessFactor, 0.04, 1.0 );`),f?p.push(f.code,`material.specularColor = vec3( 0.16 * pow2( `+f.result+` ) );`,`material.specularColorBlended = mix( material.specularColor, diffuseColor, metalnessFactor );`):p.push(`material.specularColor = vec3( 0.04 );`,`material.specularColorBlended = mix( material.specularColor, diffuseColor, metalnessFactor );`),p.push(`#include <lights_fragment_begin>`),p.push(`#include <lights_fragment_end>`),p.push(`vec3 ao = aoEnabled && `+r.result+` ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);`,`vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse)) + reflectedLight.directSpecular + reflectedLight.indirectSpecular;`);let m=`1.0`;this.mask&&(this.mask.analyze(e),m=`luminance(${this.mask.flow(e,`v3`).result})`),p.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${s.result} * ${m} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${s.result} * ${m}, ${c.result} );\n\t\t\t\t\t\n\t\t\t\t\toutgoingLight *= ao;\n\t\t\t\t}\n\t\t\t\t`),l&&p.push(l.code,`outgoingLight = spe_blend(outgoingLight, ${l.result}, 1.0, SPE_BLENDING_NORMAL);`),u?p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${u.result} );`):p.push(`gl_FragColor = vec4( outgoingLight, 1.0 );`),d&&p.push(`gl_FragColor.a *= ${d.result};`),p.push(`#include <colorspace_fragment>`,Ha,`#include <dithering_fragment>`),t=p.join(`
`)}return t}},qa=class extends Pt{constructor(){super(`toon`),this.nodeType=`Toon`,this.color=new J(Je),this.specular=new J(1118481),this.shininess=new H(30),this.previousModelViewMatrix=new Qi,this.previouseProjectionMatrix=new Qi,this.shadingAlpha=new H(1),this.shadingBlend=new Y(0)}get category(){return`toon`}build(e){let t;if(e.define(`TOON`),e.requires.lights=!0,e.extensions.derivatives=!0,e.isShader(`vertex`)){let n=this.position?this.position.analyzeAndFlow(e,`v3`,{cache:`position`}):void 0;e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({resolution:Q.resolution}),e.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),e.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),e.mergeUniform(w.merge([Z.fog,Z.lights])),e.mergeUniform(Ba),e.addParsCode([`varying vec3 vViewPosition;`,`varying vec3 vWPosition;`,`#include <fog_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <normal_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <shadowmap_pars_vertex>`,`#include <clipping_planes_pars_vertex>`].join(`
`));let r=[`#include <beginnormal_vertex>`,`#include <morphnormal_vertex>`,`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,`#include <normal_vertex>`,`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];n&&r.push(n.code,n.result?`displaced_position = `+n.result+`;`:``),r.push(`transformed = displaced_position;`,`#include <morphtarget_vertex>`,`#include <skinning_vertex>`,`transformedNormal = normalMatrix * displaced_normal;`,`#ifndef FLAT_SHADED`,`    vNormal = transformedNormal;`,`#endif`),r.push(`	#include <project_vertex>`,`	#include <fog_vertex>`,`	#include <clipping_planes_vertex>`,`	vViewPosition = - mvPosition.xyz;`,`	#include <worldpos_vertex>`,`	#include <shadowmap_vertex>`,`	#include <fog_vertex>`),r.push(`vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t=r.join(`
`)}else{e.mergeUniform({penumbraSize:Q.penumbraSize}),e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({aoMap:Q.aoRenderTarget}),e.mergeUniform({aoEnabled:Q.aoEnabled}),this.color===void 0&&(this.color=new J(5526619)),this.color.analyze(e,{slot:`color`}),this.specular.analyze(e),this.shininess.analyze(e),this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:`afterColor`}),this.alpha&&this.alpha.analyze(e);let n=this.color.flow(e,`c`,{slot:`color`}),r=this.specular.flow(e,`c`),i=this.shininess.flow(e,`f`),a=this.shadingAlpha.flow(e,`f`),o=this.shadingBlend.flow(e,`i`),s=this.afterColor?this.afterColor.flow(e,`c`,{slot:`afterColor`}):void 0,c=this.alpha?this.alpha.flow(e,`f`):void 0,l=this.alphaOverride?this.alphaOverride.flow(e,`f`):void 0;e.requires.transparent=c!==void 0,e.addParsCode([`uniform float penumbraSize[5];`,`uniform sampler2D aoMap;`,`uniform bool aoEnabled;`,`varying vec3 vWPosition;`,`#include <normal_pars_fragment>`,`#include <gradientmap_pars_fragment>`,Va,`#include <bsdfs>`,`#include <lights_pars_begin>`,`#include <dithering_pars_fragment>`,`
					varying vec3 vViewPosition;
					struct ToonMaterial {
						vec3	diffuseColor;
						vec3	specularColor;
						float	specularShininess;
						float	specularStrength;
					};
					
					
					
					void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
					}
					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct				RE_Direct_Toon
					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
					#define Material_LightProbeLOD( material )	(0)
					`,`#include <shadowmap_pars_fragment>`,`#include <bumpmap_pars_fragment>`,`#include <normalmap_pars_fragment>`].join(`
`));let u=[`#include <normal_fragment_begin>`,`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,`	ToonMaterial material;`];if(this.bumpMap){e.include(Ga.dHdxy),e.include(Ga.perturbNormalArb);let t=this.bumpMap.texture.flow(e,`t`),n=this.bumpMap.flow(e,`v3`),r=this.bumpMapIntensity?this.bumpMapIntensity.flow(e,`f`).result:`1.0`,i=``;i=this.bumpMap.projection.value===4?`\n\t\t\t\t\tvec3 bumpNormal = vec3(0.0);\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_triplanarWeights;\n\n\t\t\t\t\t\tvec2 grad0 = dHdxy(${t.result}, uv0, ${r});\n\t\t\t\t\t\tvec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);\n\n\t\t\t\t\t\tvec2 grad1 = dHdxy(${t.result}, uv1, ${r});\n\t\t\t\t\t\tvec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);\n\n\t\t\t\t\t\tvec2 grad2 = dHdxy(${t.result}, uv2, ${r});\n\t\t\t\t\t\tvec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);\n\t\t\t\t\t\t\n\t\t\t\t\t\tbumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;\n\t\t\t\t\t\tbumpNormal = normalize(bumpNormal);\n\t\t\t\t\t}\n\n\t\t\t\t\tnormal = bumpNormal;\n\t\t\t\t\t`:`\n\t\t\t\t\tvec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs;\n\t\t\t\t\tvec2 grad = dHdxy(${t.result}, bumpMapCachedUv, ${r});\n\t\t\t\t\tnormal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );\n\t\t\t\t\t`,u.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\t\t\t\t\t${i}\n\t\t\t\t\t`)}u.push(n.code,`	vec3 diffuseColor = `+n.result+`;`,`	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );`,r.code,`	vec3 specular = `+r.result+`;`,i.code,`	float shininess = max( 0.0001, `+i.result+` );`,`	float specularStrength = 1.0;`),c&&u.push(c.code,`#ifdef ALPHATEST`,`if ( `+c.result+` <= ALPHATEST ) discard;`,`#endif`),u.push(`material.diffuseColor = diffuseColor;`),u.push(`material.specularColor = specular;`,`material.specularShininess = shininess;`,`material.specularStrength = specularStrength;`,`#include <lights_fragment_begin>`,`#include <lights_fragment_end>`),u.push(`vec3 ao = aoEnabled ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);`,`vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse) * ao) + reflectedLight.directSpecular;`);let d=`1.0`;this.mask&&(this.mask.analyze(e),d=`luminance(${this.mask.flow(e,`v3`).result})`),u.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${a.result} * ${d} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${a.result} * ${d}, ${o.result} );\n\t\t\t\t}\n\t\t\t\t`),s&&u.push(s.code,`outgoingLight = spe_blend(outgoingLight, ${s.result}, 1.0, SPE_BLENDING_NORMAL);`),c?u.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result} );`):u.push(`gl_FragColor = vec4( outgoingLight, 1.0 );`),l&&u.push(`gl_FragColor.a *= ${l.result};`),u.push(`#include <colorspace_fragment>`,Ha,`#include <dithering_fragment>`),t=u.join(`
`)}return t}},Ja=class extends Pt{constructor(){super(`phong`),this.nodeType=`Phong`,this.color=new J(Je),this.specular=new J(1118481),this.shininess=new H(30),this.previousModelViewMatrix=new Qi,this.previouseProjectionMatrix=new Qi,this.shadingAlpha=new H(1),this.shadingBlend=new Y(0),this.occlusion=new Ki(!0)}get category(){return`phong`}build(e){let t;if(e.define(`PHONG`),e.requires.lights=!0,e.extensions.derivatives=!0,e.isShader(`vertex`)){let n=this.position?this.position.analyzeAndFlow(e,`v3`,{cache:`position`}):void 0;e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({resolution:Q.resolution}),e.mergeUniform({previousModelViewMatrix:this.previousModelViewMatrix}),e.mergeUniform({previousProjectionMatrix:this.previouseProjectionMatrix}),e.mergeUniform(w.merge([Z.fog,Z.lights])),e.mergeUniform(Ba),e.addParsCode([`varying vec3 vViewPosition;`,`varying vec3 vWPosition;`,`#include <fog_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <normal_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <shadowmap_pars_vertex>`,`#include <clipping_planes_pars_vertex>`].join(`
`));let r=[`#include <beginnormal_vertex>`,`#include <morphnormal_vertex>`,`
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = objectNormal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,`#include <normal_vertex>`,`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];n&&r.push(n.code,n.result?`displaced_position = `+n.result+`;`:``),r.push(`transformed = displaced_position;`,`#include <morphtarget_vertex>`,`#include <skinning_vertex>`,`transformedNormal = normalMatrix * displaced_normal;`,`#ifndef FLAT_SHADED`,`    vNormal = transformedNormal;`,`#endif`),r.push(`	#include <project_vertex>`,`	#include <clipping_planes_vertex>`,`	vViewPosition = - mvPosition.xyz;`,`	#include <worldpos_vertex>`,`	#include <shadowmap_vertex>`,`	#include <fog_vertex>`),r.push(`vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),t=r.join(`
`)}else{e.mergeUniform({penumbraSize:Q.penumbraSize}),e.mergeUniform({frameIndex:Q.frameIndex}),e.mergeUniform({aoMap:Q.aoRenderTarget}),e.mergeUniform({aoEnabled:Q.aoEnabled}),this.color===void 0&&(this.color=new J(5526619)),this.color.analyze(e,{slot:`color`}),this.specular.analyze(e),this.shininess.analyze(e);let n=this.occlusion.flow(e,`b`,{slot:`occlusion`});this.shadingAlpha.analyze(e),this.shadingBlend.analyze(e),this.afterColor&&this.afterColor.analyze(e,{slot:`afterColor`}),this.alpha&&this.alpha.analyze(e);let r=this.color.flow(e,`c`,{slot:`color`}),i=this.specular.flow(e,`c`),a=this.shininess.flow(e,`f`),o=this.shadingAlpha.flow(e,`f`),s=this.shadingBlend.flow(e,`i`),c=this.afterColor?this.afterColor.flow(e,`c`,{slot:`afterColor`}):void 0,l=this.alpha?this.alpha.flow(e,`f`):void 0,u=this.alphaOverride?this.alphaOverride.flow(e,`f`):void 0;e.requires.transparent=l!==void 0,e.addParsCode([`varying vec3 vWPosition;`,`uniform vec3 emissive;`,`uniform float penumbraSize[5];`,`uniform sampler2D aoMap;`,`uniform bool aoEnabled;`,`#include <normal_pars_fragment>`,Va,`#include <bsdfs>`,`#include <lights_pars_begin>`,`#include <lights_phong_pars_fragment>`,`#include <shadowmap_pars_fragment>`,`#include <dithering_pars_fragment>`].join(`
`));let d=[`#include <normal_fragment_begin>`,`
				
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,`	BlinnPhongMaterial material;`];if(this.bumpMap){e.include(Ga.dHdxy),e.include(Ga.perturbNormalArb);let t=this.bumpMap.texture.flow(e,`t`),n=this.bumpMap.flow(e,`v3`),r=this.bumpMapIntensity?this.bumpMapIntensity.flow(e,`f`).result:`1.0`,i=``;i=this.bumpMap.projection.value===4?`\n\t\t\t\t\tvec3 bumpNormal = vec3(0.0);\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_triplanarWeights;\n\n\t\t\t\t\t\tvec2 grad0 = dHdxy(${t.result}, uv0, ${r});\n\t\t\t\t\t\tvec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);\n\n\t\t\t\t\t\tvec2 grad1 = dHdxy(${t.result}, uv1, ${r});\n\t\t\t\t\t\tvec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);\n\n\t\t\t\t\t\tvec2 grad2 = dHdxy(${t.result}, uv2, ${r});\n\t\t\t\t\t\tvec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);\n\t\t\t\t\t\t\n\t\t\t\t\t\tbumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;\n\t\t\t\t\t\tbumpNormal = normalize(bumpNormal);\n\t\t\t\t\t}\n\n\t\t\t\t\tnormal = bumpNormal;\n\t\t\t\t\t`:`\n\t\t\t\t\tvec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g,``)}_writeUvs;\n\t\t\t\t\tvec2 grad = dHdxy(${t.result}, bumpMapCachedUv, ${r});\n\t\t\t\t\tnormal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );\n\t\t\t\t\t`,d.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\t\t\t\t\t${i}\n\t\t\t\t\t`)}d.push(r.code,`	vec3 diffuseColor = `+r.result+`;`,`	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );`,`	vec3 totalEmissiveRadiance = emissive;`,i.code,`	vec3 specular = `+i.result+`;`,a.code,`	float shininess = max( 0.0001, `+a.result+` );`,`	float specularStrength = 1.0;`),l&&d.push(l.code,`#ifdef ALPHATEST`,`if ( `+l.result+` <= ALPHATEST ) discard;`,`#endif`),d.push(`material.diffuseColor = diffuseColor;`),d.push(`material.specularColor = specular;`,`material.specularShininess = shininess;`,`material.specularStrength = specularStrength;`,`#include <lights_fragment_begin>`,`#include <lights_fragment_end>`),d.push(`vec3 ao = aoEnabled && `+n.result+` ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);`,`vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse)) + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;`);let f=`1.0`;this.mask&&(this.mask.analyze(e),f=`luminance(${this.mask.flow(e,`v3`).result})`),d.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * ${f} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result} * ${f}, ${s.result} );\n\t\t\t\t\t\n\t\t\t\t\toutgoingLight *= ao;\n\t\t\t\t}\n\t\t\t\t`),c&&d.push(c.code,`outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`),l?d.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result});`):d.push(`gl_FragColor = vec4( outgoingLight, 1.0 );`),u&&d.push(`gl_FragColor.a *= ${u.result};`),d.push(`#include <colorspace_fragment>`,Ha,`#include <dithering_fragment>`),t=d.join(`
`)}return t}},Ya=new Map;function Xa(e,t){Ya.set(e,t)}var Za=new Set;function Qa(e,t,n){if(t===`isMask`||e.type===`rainbow`&&t===`noiseStrength`&&e.noiseCompiledIn!==void 0&&(!0===e.noiseForced||rt(n))!==e.noiseCompiledIn)return!0;let r=Qe[e.type],i=nt[e.type];if(i!==void 0){let r=e.color;if(i.includes(t)){let e=r[t]?.value?.length;if(e!==void 0&&e!==n.length)return!0}}return r!==void 0&&r.includes(t)}function $a(e,t){if(Array.isArray(t)){if(!Array.isArray(e)||e.length!==t.length)return!1;for(let[n,r]of t.entries()){let t=e[n];if(typeof r==`string`||typeof r==`number`&&typeof t==`string`)return!0}return!1}let n=typeof e==`string`,r=typeof t==`string`;return n!==r||n&&r}function eo(e,t,n){let r=n.uniforms[`f${n.id}_texture`];if(!r)return!1;let i=!1,a=e;if(`image`in a){let e=a.image,n=t.image(e),i=r;i.image instanceof ot||i.image.deref(),i.image=n}if(`video`in a){let e=a.video,n=t.video(e),i=r;i.image instanceof ot||i.image.deref(),i.image=n}if(`wrapping`in a&&(r.wrap=a.wrapping),`minFilter`in a&&(r.minFilter=a.minFilter),`magFilter`in a&&(r.magFilter=a.magFilter),`rotation`in a&&n.uniforms[`f${n.id}_rotation`])return n.uniforms[`f${n.id}_rotation`].value=(I(a.rotation??0,t)??0)*Se.DEG2RAD,i;if(`repeat`in a||`offset`in a||`rotation`in a){let e=n.uniforms[`f${n.id}_mat`];if(!e)return i;if(`repeat`in a){let r=a.repeat;$a(n.data.texture.repeat,r)&&(i=!0),e.repeat=ro(r,t).map((e,t)=>typeof r[t]==`string`?1/e:e)}if(`offset`in a){let r=a.offset;$a(n.data.texture.offset,r)&&(i=!0),e.offset=ro(r,t).map((e,t)=>typeof r[t]==`string`?-e:e)}if(`rotation`in a){let r=n.data.texture.rotation,o=a.rotation??0;(r===void 0||$a(r,o))&&(i=!0),e.rotation=I(o,t)??0}e.updateMatrix()}return i}var to=(e,t)=>(e||(e=new l),e.x=I(e.x,t)??0,e.y=I(e.y,t)??0,e.z=I(e.z,t)??0,e),no=(e,t)=>(e||(e=new _),e.x=I(e.x,t)??0,e.y=I(e.y,t)??0,e),ro=(e,t)=>{let n=e.map(e=>I(e,t)??0);return[n[0],n[1]]},io=class{constructor(e,t,n,r,i){this.id=e,this.uuid=t,this.data=n,this.uniforms={};for(let e in r)this.uniforms[`f${this.id}_${e}`]=r[e];for(let e in n)co(e,this,n,i)}get type(){return this.data.type}static create(e,t,n,r,i){if(n.type===`light`)return oo.createLightLayer(e,t,n,r);if(n.type===`color`)return function(e,t,n,r){let i=kt(n,r),a=new J(i.color??5526619),o=so(i),s=new ia(a,o.alpha),c=new G(s.calpha,`f`);return new $(e,t,n,{color:a,...o},s,o.mode,c,o.isMask,r)}(e,t,n,r);let a=(o=n.type,Ya.get(o));var o;return a?a(e,t,n,r,i):(function(e){Za.has(e)||(Za.add(e),console.warn(`[spe] Material layer type "${e}" is not available in this runtime build (compiled out) — rendering flat red. Re-export the scene with its full layer set or load the full runtime build.`))}(n.type),function(e,t,n,r){let i=n,a=so({alpha:typeof i.alpha==`string`?Number(r.getVariable(i.alpha)??100)/100:i.alpha,mode:i.mode,isMask:i.isMask}),o=new J(1,0,0,1),s=new ia(o,a.alpha),c=new G(s.calpha,`f`);return new $(e,t,n,{color:o,...a},s,a.mode,c,a.isMask,r)}(e,t,n,r))}updateByOp(e,t,n){let r=e,i=!1;if(r.path[0]===void 0){for(let e of Object.keys(r.props))try{let n=this.data[e],r=t[e];if(Array.isArray(n)&&Array.isArray(r)){for(let[e,t]of r.entries()){let r=n[e];if(typeof t==`string`||typeof t==`number`&&typeof r==`string`){i=!0;break}}if(i)break}else if(typeof r==`string`&&typeof n==`number`||typeof r==`number`&&typeof n==`string`||typeof r==`string`&&typeof n==`string`&&r!==n){i=!0;break}}catch(e){console.error(e)}if(r.type===0)return`type`in r.props||`category`in r.props||`visible`in r.props||`noiseType`in r.props?(n.scene.markNeedsUpdateRendererDirty(),!0):function(e,t,n,r){let i=!1;for(let[a,o]of Object.entries(e)){if(a===`bumpMap`||a===`roughnessMap`){i=!0;continue}if(!a||o===void 0)continue;if(co(a,n,r,t)){a===`visible`&&n.type===`light`&&(i=!0);continue}n.visible=r.visible;let e=n.uniforms[`f${n.id}_${a}`];if(e&&!(e instanceof Ji))switch(i=i||Qa(n,a,o),e.constructor){case J:if(typeof o==`string`){let n=t.getColor(o);n&&(e.value=n);break}{let t=o;e.value instanceof tt?e.value=new it(t.r,t.g,t.b,t.a):e.setRGBA(t);break}case Ht:if(typeof o==`string`){let n=t.getColor(o);n&&(e.value=n);break}{let t=o;e.value instanceof tt?e.value=new it(t.r,t.g,t.b,t.a):e.value.setRGBA(t.r,t.g,t.b,t.a);break}case Bt:{let t=o;e.value.setX(t[0]),e.value.setY(t[1]);break}case Vt:{let t=o;e.value.setX(t[0]),e.value.setY(t[1]),e.value.setZ(t[2]);break}case $t:eo(o,t,n);break;case ta:e.value=o.map(e=>new N(...e));break;default:e.value=o}}return i}(r.props,n.shared,this,t)||i}else if(r.path[0]===`texture`)return!(`texture`in t)&&!(`video`in t)||eo(r.props,n.shared,this)||i;return i}dispose(){if($e(this)){let e=this.uniforms[`f${this.id}_texture`];if(!e)return!1;let t=e;t.image instanceof ot||t.image.deref()}}hasValueByKey(e){return this.uniforms[e]!==void 0}hasValue(e){return this.hasValueByKey(`f${this.id}_${e}`)}setValue(e,t){let n=`f${this.id}_${e}`;if(this.hasValueByKey(n)&&t!==void 0&&(this.uniforms[n].value=t,e===`noiseStrength`&&!1===this.noiseCompiledIn&&typeof t==`number`&&t!==0&&this.onNoiseMismatch!==void 0)){let e=this.onNoiseMismatch;this.onNoiseMismatch=void 0,e(t)&&(this.noiseCompiledIn=!0)}}getNode(e){let t=`f${this.id}_${e}`;if(this.hasValueByKey(t))return this.uniforms[t]}getValue(e){let t=`f${this.id}_${e}`;if(this.hasValueByKey(t))return this.uniforms[t].value}getName(e){let t=/f\d+_(.*)/.exec(e);if(t&&t.length>1)return t[1];console.log(`Layer.getName: error ${e}`)}getNames(){let e=[];for(let t in this.uniforms){let n=this.getName(t);n&&e.push(n)}return e}},$=class extends io{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,c),this.params=r,this.color=i,this.mode=a,this.alpha=o,this.isMask=s}},ao=class extends io{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this.position=i}},oo=class extends io{constructor(e,t,n,r,i,a){super(e,t,n,i,a),this.node=r}static createLightLayer(e,t,n,r){let i,a,o=new H(L(n.alpha,r)),s=new Y(n.mode),c=new H(n.bumpMapIntensity),l=new H(L(n.alphaOverride,r));if(n.visible){if(n.category===`lambert`){i=new Wa;let e=new J(r.color(n.emissive)??0),t=new Ki(n.occlusion??!0);a={emissive:e,occlusion:t},i.emissive=e,i.occlusion=t}else if(n.category===`toon`){i=new qa;let e=new H(n.shininess??30),t=new J(r.color(n.specular)??1118481);a={shininess:e,specular:t},i.shininess=e,i.specular=t}else if(n.category===`physical`){i=new Ka;let e=new H(n.roughness??.3),t=new H(n.metalness??0),r=new H(n.reflectivity??.5),o=new Ki(n.occlusion??!0);a={roughness:e,metalness:t,reflectivity:r,occlusion:o},i.roughness=e,i.metalness=t,i.reflectivity=r,i.occlusion=o}else{i=new Ja;let e=new H(n.shininess??30),t=new J(n.specular===void 0?1118481:r.color(n.specular)??1118481),o=new Ki(n.occlusion??!0);a={shininess:e,specular:t,occlusion:o},i.shininess=e,i.specular=t,i.occlusion=o}}else i=new Ua,a={};return i.alpha=new H(1),i.shadingAlpha=o,i.shadingBlend=s,i.bumpMapIntensity=c,i.alphaOverride=l,a.alpha=i.shadingAlpha,a.mode=i.shadingBlend,a.bumpMapIntensity=i.bumpMapIntensity,a.alphaOverride=i.alphaOverride,new oo(e,t,n,i,a,r)}get category(){return this.node.category}};function so(e){return{alpha:new H(e.alpha??1),mode:new Y(e.mode??0),isMask:new Ki(e.isMask??!1)}}function co(e,t,n,r){if(n.type===`displace`&&(e===`intensity`||e===`visible`)){let e=t.uniforms[`f${t.id}_intensity`];return e?(e.value=(I(n.intensity,r)??1)*+!!n.visible,e):void 0}if(n.type!==`displace`&&(e===`alpha`||e===`visible`)){let i=t.uniforms[`f${t.id}_alpha`];if(!i)return;if(i.value=L(n.alpha,r)*+!!n.visible,n.type===`outline`&&e===`visible`){let e=t.uniforms[`f${t.id}_compensation`];e&&(e.value=n.compensation&&n.visible)}return i}}function lo(e,t,n,r,i,a,o=[]){let s=n;for(let e of o)e in s&&(s=s[e]);for(let t of e)t in s&&i.getVariable(s[t],[`material`,a,`layer`,r,...o,String(t)]);for(let e of t)e in s&&s[e].forEach((t,n)=>{i.getVariable(t,[`material`,a,`layer`,r,...o,String(e),n===0?`x`:n===1?`y`:`z`])})}var uo=class extends E{constructor(){super(void 0),this.isClassicNodeMaterial=!0,this.flatShading=!1,this.needsJitter=!0,this.shadersPatchedForShapeBlend=!1,this.depthPrepass=!1,this.depthPrepassTwins=[],this.nodeExtensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.nodeContextUuid=0,this.fog=!0,this.dithering=!0,this.vertexColors=!0,this.transparent=!0}applyDepthPrepassPolicy(){let e=At({transparent:this.transparent,depthTest:this.depthTest,wireframe:this.wireframe,shapeBlend:this.defines?.SHAPEBLEND!==void 0,data:this.data});this.depthPrepass=e,this.depthWrite=!e}customProgramCacheKey(){return``}},fo=!1,po=class extends uo{constructor(e,t,n,r){super(),this.flatShading=e,this.side=t,this.wireframe=n,this.root=r}updateAfterBuild(){let e=this.root;this.lights=e.lights,this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader,Object.assign(this.defines,e.defines),Object.assign(this.uniforms,e.uniforms),this.nodeExtensions=e.nodeExtensions,this.transparent=e.transparent,this.applyDepthPrepassPolicy(),this.cacheKey=e.customProgramCacheKey()+`flat`+this.flatShading+this.side}getDepthPrepassTwin(e){return ho(this,this.root,e)}onBeforeCompile(e,t){this.root.onBeforeCompile(e)}get data(){return this.root.data}get category(){return this.root.category}get hasAO(){return this.root.hasAO}getFlavor(e,t,n,r){return this.root.getFlavor(e,t,n,r)}get layers(){return this.root.layers}get fragment(){return this.root.fragment}getLayersOfType(e){return this.root.getLayersOfType(e)}getLayerByUuid(e){return this.root.getLayerByUuid(e)}setTransparent(e,t){this.root.setTransparent(e,t)}ensureRainbowNoiseCompiled(e,t){return this.root.ensureRainbowNoiseCompiled(e,t)}updateByOp(e,t,n){this.root.updateByOp(e,t,n)}nodeMaterialDispose(){this.root.nodeMaterialDispose()}},mo=class extends po{constructor(e,t,n){super(e,t,!1,n),this.isDepthPrepassMaterial=!0,this.cutoffUniform={value:at},this.colorWrite=!1,this.depthWrite=!0}updateAfterBuild(){super.updateAfterBuild(),this.uniforms.alphaDiscardCutoff=this.cutoffUniform,this.colorWrite=!1,this.depthWrite=!0}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.uniforms=this.uniforms}applyDepthPrepassPolicy(){this.depthPrepass=!1}getDepthPrepassTwin(){return this}};function ho(e,t,n){let r=e.depthPrepassTwins[n];return r===void 0&&(r=new mo(e.flatShading,n,t),r.needsJitter=t.needsJitter,r.updateAfterBuild(),e.depthPrepassTwins[n]=r,t.depthTwins.push(r)),r}var go=class extends uo{constructor(e,t,n=!0){super(),this.data=e,this.allowVariableSaves=n,this.layerIdGen=0,this.flavors=[],this.depthTwins=[],this.masks={},this.type=`NodeMaterial`,this.forceRainbowNoise=new Set,this.syntheticMapLayers=new Map,this.updaters=[],this.needsJitter=t.shared.needsJitter,Pt.startContext(this),this.reset0(e,t),Pt.endContext(this)}setTransparent(e,t){let n=this.transparent!==e;if(n){this.transparent=e,this.needsUpdate=!0;for(let t of this.flavors)t!==void 0&&(t.transparent=e,t.needsUpdate=!0);for(let t of this.depthTwins)t.transparent=e,t.needsUpdate=!0}this.applyDepthPrepassPolicy();for(let e of this.flavors)e?.applyDepthPrepassPolicy();!n||t?.markNeedsUpdateRendererDirty()}getDepthPrepassTwin(e){return ho(this,this,e)}get nodeMaterial(){return this}getFlavor(e,t,n,r){let i=n?6:(e?3:0)+t;if(i+=7*((r?.resolutionLevel??0)-(r?.useChildrenColors?4:0)),i===0)return this;this.flavors===void 0&&(this.flavors=[]),--i;let a=this.flavors[i];return a===void 0&&(a=new po(e,t,n,this),a.needsJitter=this.needsJitter,this.flavors[i]=a,a.flatShading=e,a.side=t,a.updateAfterBuild(),r&&(a.defines.SHAPEBLEND=r.resolutionLevel,a.defines.SHAPEBLEND_C=+!!r.useChildrenColors,a.applyDepthPrepassPolicy())),a}get fragment(){return this.lightLayer.node}get category(){return this.lightLayer.category}get hasAO(){return this.lightLayer.getNode(`occlusion`)?.value??!1}ensureRainbowNoiseCompiled(e,t){let n=this.data.layers?.data(e);return n!==void 0&&n.type===`rainbow`&&(!this.forceRainbowNoise.has(e)&&!rt(n.noiseStrength)||!1===this.getLayerByUuid(e)?.noiseCompiledIn)&&(this.forceRainbowNoise.add(e),Pt.startContext(this),this.reset0(this.data,this.lastContext),Pt.endContext(this),t!==void 0&&this.getLayerByUuid(e)?.setValue(`noiseStrength`,t),!0)}reset(e,t,n=!1){Pt.startContext(this),(this.data!==e||n)&&this.reset0(e,t),Pt.endContext(this)}reset0(e,t){this.lastContext=t,this.data=e;let n=e.layers??Ge.defaultTwoLayerData(`phong`).layers,r=[];for(let e of n)try{let n=io.create(this.layerIdGen++,e.id,e.data,t.shared,this.forceRainbowNoise.has(e.id)?{forceRainbowNoise:!0}:void 0);if(n.type===`rainbow`&&!1===n.noiseCompiledIn){let t=e.id;n.onNoiseMismatch=e=>this.ensureRainbowNoiseCompiled(t,e)}r.push(n)}catch(t){console.warn(`[spe] material layer '${e.data.type}' (${e.id}) failed to build — skipping this layer`,t)}this.layers=r,this.layers.reverse(),this.name=e.name??`Untitled Material`,this.onUpdate(t.shared),this.setTransparent(et(e,t.shared),t.scene),this.saveVariableLocations(t)}onVariableUpdate(e,t,n){if(e[0]===`alphaOverride`)this.setTransparent(et(this.data,n.shared),n.scene),this.lightLayer.setValue(`alphaOverride`,Math.max(0,Math.min(Number(t)/100,1)));else if(e[0]===`layer`){let r=e[1],i=e[2];if(r&&i){let a=this.layers.find(e=>e.uuid===r);if(a?.hasValue(i)){if(i===`alpha`)this.setTransparent(et(this.data,n.shared),n.scene),a.setValue(i,Math.max(0,Math.min(Number(t)/100,1)));else{let r=a.getValue(i),o=e[3],s=e[4];if(r instanceof m){let e,i=r[o];typeof i==`number`?e=Number(t):i.isVector2&&(e=i.toArray(),s===`x`?e[0]=Number(t):s===`y`&&(e[1]=Number(t))),eo({[o]:e},n.shared,a);return}(o===`x`||o===`y`||o===`z`)&&r.isVector3||(o===`x`||o===`y`)&&r.isVector2?r[o]=Number(t):a.setValue(i,t)}}}}}saveVariableLocations(e){if(!this.allowVariableSaves)return;let t=this.data.layers?.find(e=>e.data.type===`light`);t&&e.shared.getVariable(t.data.alphaOverride,[`material`,this.uuid,`alphaOverride`]),this.data.layers?.forEach(t=>{`alpha`in t.data&&typeof t.data.alpha==`string`&&e.shared.getVariable(t.data.alpha,[`material`,this.uuid,`layer`,t.id,`alpha`]),t.data.type===`displace`?t.data.displacementType===`noise`?lo([`intensity`,`scale`,`movement`,`smoothness`,`seed`,`highCut`,`lowCut`],[`offset`],t.data,t.id,e.shared,this.uuid):lo([`intensity`],[],t.data,t.id,e.shared,this.uuid):t.data.type===`depth`?lo([`near`,`far`],[`origin`,`direction`],t.data,t.id,e.shared,this.uuid):t.data.type===`cavity`?lo([`ridge`,`valley`],[],t.data,t.id,e.shared,this.uuid):t.data.type===`fresnel`?lo([`bias`,`scale`,`intensity`,`factor`],[],t.data,t.id,e.shared,this.uuid):t.data.type===`dust`?lo([`coverage`,`softness`,`noiseStrength`,`noiseScale`],[],t.data,t.id,e.shared,this.uuid):t.data.type===`rainbow`?lo([`filmThickness`,`movement`,`noiseStrength`,`noiseScale`],[`offset`,`wavelengths`],t.data,t.id,e.shared,this.uuid):t.data.type===`noise`?lo([`scale`,`move`,`seed`,`highCut`,`lowCut`,`smoothness`],[`size`,`distortion`,`fA`,`fB`],t.data,t.id,e.shared,this.uuid):t.data.type===`pattern`?lo([`blending`,`size`,`variation`,`smoothness`,`zigzag`,`rotation`],[`offset`,`frequency`,`vertical`,`horizontal`],t.data,t.id,e.shared,this.uuid):t.data.type===`outline`?lo([`outlineWidth`,`contourWidth`,`outlineThreshold`,`contourThreshold`,`outlineSmoothing`,`contourFrequency`],[`contourDirection`],t.data,t.id,e.shared,this.uuid):t.data.type===`toon`?lo([`noiseStrength`,`noiseScale`],[`offset`,`source`],t.data,t.id,e.shared,this.uuid):t.data.type===`transmission`?lo([`roughness`,`thickness`,`ior`],[],t.data,t.id,e.shared,this.uuid):t.data.type===`texture`||t.data.type===`video`?(lo([],[`size`],t.data,t.id,e.shared,this.uuid),lo([`rotation`],[`repeat`,`offset`],t.data,t.id,e.shared,this.uuid,[`texture`])):t.data.type===`gradient`?lo([`angle`],[`offset`,`morph`],t.data,t.id,e.shared,this.uuid):t.data.type===`matcap`&&lo([`rotation`],[],t.data,t.id,e.shared,this.uuid,[`texture`])})}getLayersOfType(e){return this.layers.filter(t=>t.type===e)}getLayerByUuid(e){return this.layers.find(t=>t.uuid===e)}onUpdate(e){this.lightLayer=this.layers.find(e=>e instanceof oo),this.lightLayer===void 0&&(this.lightLayer=new oo(0,``,{...We.defaultData(`light`,`phong`),visible:!1},new Ua,{},e)),this.dispose();for(let e of this.flavors)e&&e.dispose();for(let e of this.depthTwins)e.dispose();this.applyTextureMaps(e),this.applyMasks(),this.blendColors(),this.blendAfterColors(),this.blendPositions(),this.build(),this.nodeContextUuid=0}syntheticMapNode(e,t){let n=this.syntheticMapLayers.get(e);if(n===void 0)try{let r=We.defaultData(`texture`),i={...r,visible:!1,texture:{...r.texture,image:e.image,wrapping:e.wrapping??1e3,offset:e.offset??[0,0],repeat:e.repeat??[1,1],minFilter:e.minFilter??1008,magFilter:e.magFilter??1006}};n=io.create(this.layerIdGen++,`mapImage${this.layerIdGen}`,i,t),this.syntheticMapLayers.set(e,n)}catch(e){console.warn(`[spe] light-layer map image failed to build — skipped`,e);return}let r=n.color;return r instanceof la?r:void 0}applyTextureMaps(e){let t=this.layers.find(e=>e instanceof oo);if(!t)return;let n=t.data,r=n.bumpMap,i=n.roughnessMap;t.node.bumpMap=void 0,t.node.roughnessMap=void 0;for(let e of this.syntheticMapLayers.values())e.dispose();this.syntheticMapLayers.clear(),qe.is(r)&&(t.node.bumpMap=this.syntheticMapNode(r,e)),qe.is(i)&&(t.node.roughnessMap=this.syntheticMapNode(i,e));let a=n;!fo&&(a.metalnessMap!==void 0||a.normalMap!==void 0||a.aoMap!==void 0||a.emissiveMap!==void 0||a.roughnessMapChannel!==void 0&&a.roughnessMapChannel!==`luminance`||a.clearcoat!==void 0||a.sheen!==void 0||a.ior!==void 0||a.iridescence!==void 0||a.emissive!==void 0&&typeof a.emissive==`object`&&(a.emissive.r>0||a.emissive.g>0||a.emissive.b>0))&&(fo=!0,console.warn(`[spline] this document uses PBR material maps (metalness/normal/AO/emissive), which the classic WebGL pipeline does not render — the WebGPU renderer shows them`));for(let e=0;e<this.layers.length;++e){let n=this.layers[e];n instanceof $&&n.color instanceof la&&(n.uuid===r&&(t.node.bumpMap=n.color),n.uuid===i&&(t.node.roughnessMap=n.color))}}updateByOp(e,t,n){if(Pt.startContext(this),t===void 0?t=this.data:this.data=t,this.setTransparent(et(t,n.shared),n.scene),e.path[0]===`layers`){let r=n.shared,i=e.path[1];if(i===void 0)n.scene.markNeedsUpdateRendererDirty(),this.reset0(t,n);else{e.type===0&&e.props.occlusion!==void 0&&n.scene.markNeedsUpdateRendererDirty();let a=this.layers.find(e=>e.uuid===i);if(a){let o,s=t.layers.data(i);e.type===0&&(`alpha`in e.props||`alphaOverride`in e.props)&&(o=`alpha`in e.props?{...e.props,alpha:L(e.props.alpha,r,[`material`,this.uuid,`layer`,i,`alpha`])}:{...e.props,alphaOverride:L(e.props.alphaOverride,r,[`material`,this.uuid,`alphaOverride`])}),a.updateByOp({...e,...o?{props:o}:{},path:e.path.slice(2)},s,n)&&this.reset0(t,n)}}}else this.reset0(t,n);Pt.endContext(this)}applyMasks(){for(let e=0;e<this.layers.length;++e){let t=this.layers[e];t instanceof $?t.color.mask=void 0:t instanceof oo&&(t.node.mask=void 0)}for(let e=0;e<this.layers.length;++e){let t=this.layers[e];if(t instanceof $&&t.isMask.value&&t.data.visible&&e>0){let n=e-1,r=this.layers[n];r instanceof oo?r.node.mask=new nn(t.color,t.alpha,nn.MUL):r instanceof $&&(r.isMask.value||(r.color.mask=new nn(t.color,t.alpha,nn.MUL)))}}}blendColors(){let e=this.layers.findIndex(e=>e instanceof $),t=this.layers.findIndex(e=>e instanceof oo);if(e!==-1&&e<t){let n=this.layers[e].color;for(let r=e+1;r<t;++r){let e=this.layers[r];if(e instanceof $){if(e.isMask.value)continue;n=new na(n,e.color,e.alpha,e.mode)}}this.fragment.color=n}else this.fragment.color=void 0}blendAfterColors(){let e=new G(`outgoingLight`,`f`),t=this.layers.findIndex(e=>e instanceof oo);if(this.layers.length>t+1){for(let n=t+1;n<this.layers.length;++n){let t=this.layers[n];if(t instanceof $){if(t.isMask.value)continue;e=new na(e,t.color,t.alpha,t.mode)}}this.fragment.afterColor=e}else this.fragment.afterColor=void 0}blendPositions(){let e=this.layers.filter(e=>e instanceof ao);if(e.length>0){let t=e[0].position;for(let n=1;n<e.length;++n)e[n]&&(t=new nn(t,e[n].position,nn.ADD),t=new nn(t,new H(.5).setReadonly(!0),nn.MUL));this.fragment.position=t}else this.fragment.position=void 0}getDefines(){return this.defines}getUniforms(){return this.uniforms}getVertexShader(){return this.vertexShader}getFragmentShader(){return this.fragmentShader}onBeforeCompile(e){this.shapeBlendhack&&this.shapeBlendhack(this),e.uniforms=this.uniforms,e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.extensionDerivatives=!0===this.nodeExtensions.derivatives,e.extensionFragDepth=!0===this.nodeExtensions.fragDepth,e.extensionDrawBuffers=!0===this.nodeExtensions.drawBuffers,e.extensionShaderTextureLOD=!0===this.nodeExtensions.shaderTextureLOD}clampUniformsForPreview(e,t){let n=(e,t,n)=>Math.min(Math.max(e,t),n);for(let r of this.layers)if(r.type===`displace`){let i=n(r.uniforms[`f${r.id}_intensity`].value,e,t);r.uniforms[`f${r.id}_intensity`].value=i}}updateFrame(e){for(let t=0;t<this.updaters.length;++t)e.updateNode(this.updaters[t])}build(){let e=new vn;e.needsJitter=this.needsJitter,this.lights=this.lightLayer.data.visible,e.build(this.fragment,this.fragment),this.vertexShader=e.getCode(`vertex`),this.fragmentShader=e.getCode(`fragment`),this.defines=e.defines,this.uniforms=e.uniforms,this.nodeExtensions=e.extensions,this.updaters=e.updaters;for(let e of this.flavors)e&&e.updateAfterBuild();for(let e of this.depthTwins)e.updateAfterBuild();return this.shadersPatchedForShapeBlend=!1,this}nodeMaterialDispose(){this.layers.forEach(e=>e.dispose());for(let e of this.syntheticMapLayers.values())e.dispose();this.syntheticMapLayers.clear(),super.dispose();for(let e of this.depthTwins)e.dispose();for(let e of this.flavors)e&&e.dispose()}assetsLoaded(){for(let e of this.layers)if(e instanceof $){let t=e.params.texture;if(t instanceof Xi&&!t.image.loaded)return!1}for(let e of this.syntheticMapLayers.values()){let t=e.params?.texture;if(t instanceof Xi&&!t.image.loaded)return!1}return!0}};Object.defineProperties(uo.prototype,{properties:{get:function(){return this.fragment.properties}}});var _o=class extends go{constructor(e,t,n){super(e,t,!1),this.isClassicSharedMaterial=!0,this.uuid=n,this.allowVariableSaves=!0,this.saveVariableLocations(t)}},vo=`
vec2 receiverPlaneDepthBias(vec3 dcdx, vec3 dcdy)
{
    float det = dcdx.x * dcdy.y - dcdx.y * dcdy.x;
    
    
    float invDet = 1.0 / (abs(det) < 1e-10 ? (det < 0.0 ? -1e-10 : 1e-10) : det);
    return vec2(
        (dcdy.y * dcdx.z - dcdx.y * dcdy.z) * invDet,
        (dcdx.x * dcdy.z - dcdy.x * dcdx.z) * invDet
    );
}




float receiverPlaneAdjust(vec2 dzduv, vec2 offset)
{
    return clamp(dot(dzduv, offset), -0.05, 0.05);
}
`,yo=globalThis,bo=yo.__SPE_ORIGINAL_LIGHTS_FRAGMENT_BEGIN__??(yo.__SPE_ORIGINAL_LIGHTS_FRAGMENT_BEGIN__=X.lights_fragment_begin),xo=yo.__SPE_ORIGINAL_SHADOWMASK_PARS__??(yo.__SPE_ORIGINAL_SHADOWMASK_PARS__=X.shadowmask_pars_fragment),So=yo.__SPE_ORIGINAL_SHADOWMAP_PARS__??(yo.__SPE_ORIGINAL_SHADOWMAP_PARS__=X.shadowmap_pars_fragment),Co=null,wo=()=>{let e=So.replaceAll(`vogelDiskSample`,`spStockVogelDiskSample`).replaceAll(`interleavedGradientNoise`,`spStockInterleavedGradientNoise`),t=e.indexOf(`#if defined( SHADOWMAP_TYPE_PCF )`),n=e.indexOf(`#elif defined( SHADOWMAP_TYPE_VSM )`);if(t<0||n<=t)return e;let r=e.slice(t,n),i=r.replace(/texture\( shadowMap, vec3\( shadowCoord\.xy \+ spStockVogelDiskSample\( ([0-4]), 5, phi \) \* radius, shadowCoord\.z \) \)/g,`texture( shadowMap, vec3( shadowCoord.xy + spStockOffset$1, shadowCoord.z + receiverPlaneAdjust( spStockDzduv, spStockOffset$1 ) ) )`),a=`float phi = spStockInterleavedGradientNoise( gl_FragCoord.xy ) * PI2;`;return i!==r&&i.includes(a)?(r=i.replace(a,a+`
				vec2 spStockDzduv = receiverPlaneDepthBias( dFdx( shadowCoord.xyz ), dFdy( shadowCoord.xyz ) );
				vec2 spStockOffset0 = spStockVogelDiskSample( 0, 5, phi ) * radius;
				vec2 spStockOffset1 = spStockVogelDiskSample( 1, 5, phi ) * radius;
				vec2 spStockOffset2 = spStockVogelDiskSample( 2, 5, phi ) * radius;
				vec2 spStockOffset3 = spStockVogelDiskSample( 3, 5, phi ) * radius;
				vec2 spStockOffset4 = spStockVogelDiskSample( 4, 5, phi ) * radius;`),r=r.replace(`#if defined( SHADOWMAP_TYPE_PCF )`,vo+`
#if defined( SHADOWMAP_TYPE_PCF )`),e.slice(0,t)+r+e.slice(n)):e},To=`

  // Linear Fade In
  float linearFadeIn(float t) {
    return t;
  }


  // linear fade out
  float linearFadeOut(float t) {
    return 1.0 - t;
  }
  
  float linearInOut(float t) {
    return t < 0.5 ? t :  (1.0 - t);  
  }

    // lerp
    float lerp(float a, float b, float t) {
      return a + (b - a) * t;
    }

  // Ease In Out Quart
  float exponentialInOut(float t) {
    return t < 0.4 ? lerp(0.0, 1.0, t / 0.4) :
    t > 0.6 ? lerp(1.0, 0.0, (t - 0.6) / 0.4) :
    1.0;
   }

  // constant
  float constant(float t) {
    return 1.0;
  } 
`,Eo=`\n  uniform sampler2D uPosition;\n  uniform float uSize;\n  uniform float uSizeEnd;\n  uniform vec3 uWorldOffset;\n  uniform vec4 uWorldQuaternion;\n  \n  uniform float uRotation;\n  uniform float uRotationEnd;\n  uniform vec2 center;\n\n  \n  uniform float uRandScaleFactor;\n  uniform float uRandRotationFactor;\n\n  attribute vec2 ref;\n\n  varying float v_LifeLeft;    \n  varying vec2 vUv;\n  varying vec2 vRef;\n\n  \n\nfloat rand(vec3 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 applyQuaternionToVector( vec4 q, vec3 v ){\n  return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );\n}\n\nvec3 applyForce(vec3 force, float mass) {\n  vec3 acceleration = force / mass;\n    \n  return acceleration;\n}\n\n  ${To}\n`,Do=`
  uniform vec4 uColor;                
  uniform vec4 uColor2;               
  uniform sampler2D uTexture;         
  varying float v_LifeLeft;   
  varying vec2 vUv;
  varying vec2 vRef;

  float random(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }
  `+To+`  
  
vec3 rgb2xyz (in vec3 rgb) {
    float r = rgb.r;
	float g = rgb.g;
	float b = rgb.b;

	r = r > 0.04045 ? pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	float x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	float y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	float z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
    
    vec3 xyz = vec3(
        (r * 0.4124) + (g * 0.3576) + (b * 0.1805) * 100.0,
        (r * 0.2126) + (g * 0.7152) + (b * 0.0722) * 100.0,
        (r * 0.0193) + (g * 0.1192) + (b * 0.9505) * 100.0
    );
    return(xyz);
}

vec3 xyz2lab (in vec3 xyz) {
	float x = xyz.x / 95.047;
	float y = xyz.y / 100.0;
	float z = xyz.z / 108.883;

	x = x > 0.008856 ? pow(x, 1.0 / 3.0) : (7.787 * x) + (16.0 / 116.0);
	y = y > 0.008856 ? pow(y, 1.0 / 3.0) : (7.787 * y) + (16.0 / 116.0);
	z = z > 0.008856 ? pow(z, 1.0 / 3.0) : (7.787 * z) + (16.0 / 116.0);

    vec3 lab = vec3((116.0 * y) - 16.0, 500.0 * (x - y), 200.0 * (y - z));
    return(lab);
}

vec3 rgb2lab(in vec3 rgb) {
    vec3 xyz = rgb2xyz(rgb);
    vec3 lab = xyz2lab(xyz);
    return(lab);
}

vec3 xyz2rgb (in vec3 xyz) {
	float x = xyz.x / 100.0;
	float y = xyz.y / 100.0;
	float z = xyz.z / 100.0;
	
    
	float r = (x *  3.2406) + (y * -1.5372) + (z * -0.4986);
	float g = (x * -0.9689) + (y *  1.8758) + (z *  0.0415);
	float b = (x *  0.0557) + (y * -0.2040) + (z *  1.0570);

	r = r > 0.0031308 ? ((1.055 * pow(r, 1.0 / 2.4)) - 0.055) : r * 12.92;
	g = g > 0.0031308 ? ((1.055 * pow(g, 1.0 / 2.4)) - 0.055) : g * 12.92;
	b = b > 0.0031308 ? ((1.055 * pow(b, 1.0 / 2.4)) - 0.055) : b * 12.92;

	r = min(max(0.0, r), 1.0);
	g = min(max(0.0, g), 1.0);
	b = min(max(0.0, b), 1.0);

	return(vec3(r, g, b));
}

vec3 lab2xyz (in vec3 lab) {
    float l = lab.x;
	float a = lab.y;
	float b = lab.z;

  	float y = (l + 16.0) / 116.0;
	float x = a / 500.0 + y;
	float z = y - b / 200.0;

	float y2 = pow(y, 3.0);
	float x2 = pow(x, 3.0);
	float z2 = pow(z, 3.0);

  	y = y2 > 0.008856 ? y2 : (y - 16.0 / 116.0) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16.0 / 116.0) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16.0 / 116.0) / 7.787;

	x *= 95.047;
	y *= 100.0;
	z *= 108.883;

	return(vec3(x, y, z));
}
vec3 lab2rgb (in vec3 lab) {
    vec3 xyz = lab2xyz(lab);
    vec3 rgb = xyz2rgb(xyz);
    return(rgb);
}



`,Oo=class extends E{constructor(e,t){super(),this.needsJitter=!0,this.type=`ParticleMaterial`,this.nodeExtensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.easeOpacity=`linearFadeIn`,this.easeSize=`linearFadeIn`,this.useSizeEnd=!1,this.isColoringRandom=!1,this.init(e,t),this.context=t}reset(){}init(e,t){this.transparent=!0,this.depthTest=!0,this.depthWrite=!1,this.easeOpacity=e.ease,this.easeSize=e.easeSize,this.layers=[],Pt.startContext(Pt.globalContext),this.lightLayer=new oo(0,``,{...We.defaultData(`light`,`phong`),visible:!1},new Ua,{},t.shared),Pt.endContext(Pt.globalContext),this.build()}updateState(e){e.coloring!==void 0&&(this.isColoringRandom=e.coloring===`random`),e.color!==void 0&&(e.color instanceof Array?this.uniforms.uColor.value=e.color:this.uniforms.uColor.value=this.context.shared.color(e.color)),e.color2!==void 0&&(e.color2 instanceof Array?this.uniforms.uColor2.value=e.color2:this.uniforms.uColor2.value=this.context.shared.color(e.color2)),e.size!==void 0&&(this.uniforms.uSize.value=e.size[0],this.uniforms.uSizeEnd.value=e.size[1],this.useSizeEnd=e.size[0]!==e.size[1]),e.ease!==void 0&&(this.easeOpacity=e.ease,this.build()),e.easeSize!==void 0&&(this.easeSize=e.easeSize,this.build()),this.needsUpdate=!0}onBeforeCompile(e){this.build(),e.defines=this.defines,e.uniforms=this.uniforms,e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader}build(){let e=new vn;return e.needsJitter=this.needsJitter,e.addFragmentParsCode(`
layout(location = 1) out vec4 gVelocity;
`),e.buildShader(`vertex`,this.fragment),e.buildShader(`fragment`,this.fragment),e.addFragmentFinalCode(`
    
    if (gl_FragColor.a <= 0.0) discard;

    gVelocity = vec4(0.0, 0.0, 0.0, 1.0);
`),this.isColoringRandom&&e.define(`USE_RANDOM_COLORING`),this.useSizeEnd&&e.define(`USE_SIZE_END`),e.addVertexParsCode(Eo),e.addFragmentParsCode(Do),e.addVertexFinalCode((({easeSize:e=`linearFadeOut`})=>`\n  vUv = uv;  \n  vRef = ref;\n  \n  float lifeLeft = texture2D(uPosition, ref).w;\n  v_LifeLeft = lifeLeft;\n  \n  vec3 pos = texture2D(uPosition, ref).rgb - uWorldOffset;\n  \n  pos = applyQuaternionToVector(uWorldQuaternion, pos);  \n            \n  #ifdef  USE_SIZE_END\n    \n    float t = 1. - lifeLeft;\n    float currentSize = mix(uSize, uSizeEnd, t); \n    vec3 scaledPosition = position * vec3(currentSize);\n  #else\n    \n    float easeSize = ${e}(1. - lifeLeft);\n    \n    vec3 scaledPosition = position * vec3(uSize * easeSize);\n  #endif\n\n  \n  vec2 scale;\n  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );    \n  \n  float randRef = rand(ref);\n  scale *= (1.0 - (uRandScaleFactor * randRef));\n  \n  float randRotation =  2.0 * PI * ( uRandRotationFactor * randRef);\n  float originalRotation = (1.0 - uRotation) * 2.0 * PI;\n  float originalRotationEnd = (1.0 - uRotationEnd) * 2.0 * PI;\n  \n  float finalRotation = mix(originalRotation + randRotation, originalRotationEnd + randRotation, lifeLeft);\n\n  vec2 alignedPosition = ( scaledPosition.xy - ( center - vec2( 0.5 ) ) ) * scale;\n  vec2 rotatedPosition;\n  rotatedPosition.x = cos( finalRotation ) * alignedPosition.x - sin( finalRotation ) * alignedPosition.y;\n  rotatedPosition.y = sin( finalRotation ) * alignedPosition.x + cos( finalRotation ) * alignedPosition.y;\n  \n  mat4 instanceMatrix = mat4(\n    vec4(1.0, 0.0, 0.0, 0.0),\n    vec4(0.0, 1.0, 0.0, 0.0),\n    vec4(0.0, 0.0, 1.0, 0.0),\n    vec4(pos.x, pos.y, pos.z, 1.0)\n  );  \n\n  mvPosition = modelViewMatrix * instanceMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n  mvPosition.xy += rotatedPosition;\n  gl_Position = projectionMatrix  * mvPosition;   \n`)({easeSize:this.easeSize})),e.addFragmentFinalCode((({easeOpacity:e=`linearFadeOut`})=>`  \n  \n  if (v_LifeLeft <= 0.005 ) {\n    discard;\n  }\n\n  #ifdef USE_RANDOM_COLORING\n    float randVal = random(vRef); \n    vec4 color = mix(uColor, uColor2, randVal); \n  #else\n    vec4 color = mix(uColor, uColor2, 1. - v_LifeLeft);\n  #endif\n\n  \n  float finalAlpha = ${e}(1. - v_LifeLeft);  \n  vec4 textureColor = texture2D(uTexture, vUv).rgba; \n  finalColor = textureColor.rgb * color.rgb;\n  finalAlpha = color.a * textureColor.a * finalAlpha;\n  \n  gl_FragColor = vec4(finalColor, finalAlpha);     \n\n`)({easeOpacity:this.easeOpacity})),this.vertexShader=e.getCode(`vertex`),this.fragmentShader=e.getCode(`fragment`),this.defines=e.defines,this.uniforms={...e.uniforms,...this.uniforms},this.nodeExtensions=e.extensions,this}get nodeMaterial(){return this}get fragment(){return this.lightLayer.node}getDefines(){return this.defines}nodeMaterialDispose(){this.layers.forEach(e=>e.dispose()),super.dispose()}},ko=new O(-1,1,1,-1,0,1),Ao=new class extends Ve{constructor(){super(),this.setAttribute(`position`,new h([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new h([0,2,0,0,2,0],2))}},jo=class{constructor(e){this._mesh=new t(Ao,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ko)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Mo=class{constructor(t,n,r){this.variables=[],this.currentTextureIndex=0;let i=Be,a={passThruTexture:{value:null}},o=l(`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`,a),s=new jo(o);function c(e){e.defines.resolution=`vec2( `+t.toFixed(1)+`, `+n.toFixed(1)+` )`}function l(e,t){let n=new E({name:`GPUComputationShader`,uniforms:t=t||{},vertexShader:`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`,fragmentShader:e});return c(n),n}this.setDataType=function(e){return i=e,this},this.addVariable=function(e,t,n){let r={name:e,initialValueTexture:n,material:this.createShaderMaterial(t),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Ie,magFilter:Ie};return this.variables.push(r),r},this.setVariableDependencies=function(e,t){e.dependencies=t},this.init=function(){if(r.capabilities.maxVertexTextures===0)return`No support for vertex shader textures.`;for(let e=0;e<this.variables.length;e++){let r=this.variables[e];r.renderTargets[0]=this.createRenderTarget(t,n,r.wrapS,r.wrapT,r.minFilter,r.magFilter),r.renderTargets[1]=this.createRenderTarget(t,n,r.wrapS,r.wrapT,r.minFilter,r.magFilter),this.renderTexture(r.initialValueTexture,r.renderTargets[0]),this.renderTexture(r.initialValueTexture,r.renderTargets[1]);let i=r.material,a=i.uniforms;if(r.dependencies!==null)for(let e=0;e<r.dependencies.length;e++){let t=r.dependencies[e];if(t.name!==r.name){let e=!1;for(let n=0;n<this.variables.length;n++)if(t.name===this.variables[n].name){e=!0;break}if(!e)return`Variable dependency not found. Variable=`+r.name+`, dependency=`+t.name}a[t.name]={value:null},i.fragmentShader=`
uniform sampler2D `+t.name+`;
`+i.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){let e=this.currentTextureIndex,t=+(this.currentTextureIndex===0);for(let n=0,r=this.variables.length;n<r;n++){let r=this.variables[n];if(r.dependencies!==null){let t=r.material.uniforms;for(let n=0,i=r.dependencies.length;n<i;n++){let i=r.dependencies[n];t[i.name].value=i.renderTargets[e].texture}}this.doRenderTarget(r.material,r.renderTargets[t])}this.currentTextureIndex=t},this.getCurrentRenderTarget=function(e){return e.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(e){return e.renderTargets[+(this.currentTextureIndex===0)]},this.dispose=function(){s.dispose();let e=this.variables;for(let t=0;t<e.length;t++){let n=e[t];n.initialValueTexture&&n.initialValueTexture.dispose();let r=n.renderTargets;for(let e=0;e<r.length;e++)r[e].dispose();n.material.dispose()}},this.addResolutionDefine=c,this.createShaderMaterial=l,this.createRenderTarget=function(r,a,o,s,c,l){return new e(r=r||t,a=a||n,{wrapS:o=o||1001,wrapT:s=s||1001,minFilter:c=c||1003,magFilter:l=l||1003,format:ie,type:i,depthBuffer:!1})},this.createTexture=function(){let e=new Float32Array(t*n*4),r=new Ne(e,t,n,ie,Be);return r.needsUpdate=!0,r},this.renderTexture=function(e,t){a.passThruTexture.value=e,this.doRenderTarget(o,t),a.passThruTexture.value=null},this.doRenderTarget=function(e,t){let n=r.getRenderTarget(),i=r.xr.enabled,a=r.shadowMap.autoUpdate;r.xr.enabled=!1,r.shadowMap.autoUpdate=!1,s.material=e,r.setRenderTarget(t),s.render(r),s.material=o,r.xr.enabled=i,r.shadowMap.autoUpdate=a,r.setRenderTarget(n)}}};function No(e,t,n,r){let i=n,a=i.type===`texture`?i.texture.image==null?r.getImage(``):r.uiBuffer(i.texture.image)??r.image(i.texture.image):r.video(i.texture.video),o=new Xi(a,i.texture.wrapping??(i.type===`texture`?1e3:1001),i.texture.minFilter??1008,i.texture.magFilter??1006),s=new Yi(a),c=new ea(ro(i.texture.repeat??[1,1],r),ro(i.texture.offset??[0,0],r),I(i.texture.rotation??0,r)),l=new H(+!!i.crop),u=new Y(i.projection??0),d=new Y([`x`,`y`,`z`].indexOf(i.axis)??0),f=i.projectionAxis?[`x`,`y`,`z`].indexOf(i.projectionAxis):-1,p=new Y(i.side??0),m=new Bt(i.size?new _(...ro(i.size,r)):new _(100,100)),h=new H(i.blending??0),g=new H(L(i.alpha,r)),v=new Y(i.mode??0),y=new Ki(i.isMask??!1),b=new la(o,s,l,u,d,p,m,h,c,g,v,y,f),x=new G(b.calpha,`f`);return new $(e,t,i,{texture:o,textureSize:s,crop:l,projection:u,axis:d,side:p,size:m,blending:h,mat:c,alpha:g,mode:v,isMask:y},b,v,x,y,r)}Mt({createMaterial:(e,t)=>new Oo(e,t),createComputation:(e,t,n)=>new Mo(e,t,n)}),Xa(`texture`,No),Xa(`video`,No),Xa(`matcap`,(e,t,n,r)=>{let i=n,a=new Xi(i.texture.image==null?r.getImage(``):r.image(i.texture.image),i.texture.wrapping??1001,i.texture.minFilter??1008,i.texture.magFilter??1006),o=new H(L(i.alpha,r)),s=new Y(i.mode??0),c=new Ki(i.isMask??!1),l=new H((I(i.texture.rotation??0,r)??0)*Se.DEG2RAD),u=new xa(a,o,s,c,l),d=new G(u.calpha,`f`);return new $(e,t,i,{texture:a,alpha:o,mode:s,isMask:c,rotation:l},u,s,d,c,r)}),Xa(`displace`,(e,t,n,r)=>{let i=n;if(i.displacementType===`noise`){let n=new Vt(new l(...i.offset.map(e=>I(e,r)??0))),a=new H(I(i.scale,r)??10),o=new H(I(i.intensity,r)??8),s=new H(I(i.movement,r)??1),c=new Y(i.noiseType??0),u=new Y(i.voronoiStyle??0),d=new H(I(i.smoothness,r)??.5),f=new H(I(i.seed,r)??0),p=new H(I(i.highCut,r)??1),m=new H(I(i.lowCut,r)??0),h=new Y(I(i.quality,r)??1),g=new za(o,s,n,u,d,f,p,m,h,a,c);return new ao(e,t,i,{offset:n,scale:a,intensity:o,movement:s,noiseType:c,voronoiStyle:u,smoothness:d,seed:f,highCut:p,lowCut:m,quality:h},g,r)}throw Error()}),Xa(`cavity`,(e,t,n,r)=>{let i=kt(n,r),a=new H(I(i.ridge,r)??1),o=new H(I(i.valley,r)??1),s=so(i),c=new pa(a,o,Q.normalViewRenderTarget,Q.resolution,s.alpha,s.mode,s.isMask),l=new G(c.calpha,`f`);return new $(e,t,n,{ridge:a,valley:o,...s},c,s.mode,l,s.isMask,r)}),Xa(`dust`,(e,t,n,r)=>{let i=kt(n,r),a=new J(i.color??10323813),o=new H(i.coverage??.2),s=new H(i.softness??.2),c=new H(i.noiseStrength??.2),l=new H(i.noiseScale??1),u=so(i),d=new ga(a,o,s,c,l,u.alpha,u.isMask),f=new G(d.calpha,`f`);return new $(e,t,n,{color:a,coverage:o,softness:s,noiseStrength:c,noiseScale:l,...u},d,u.mode,f,u.isMask,r)}),Xa(`fresnel`,(e,t,n,r)=>{let i=kt(n,r),a=new J(i.color??16777215),o=new H(I(i.bias,r)??.1),s=new H(I(i.scale,r)??1),c=new H(I(i.intensity,r)??2),l=new H(I(i.factor,r)??1),u=so(i),d=new _a(a,o,s,c,l,u.alpha,u.mode,u.isMask),f=new G(d.calpha,`f`);return new $(e,t,n,{color:a,bias:o,scale:s,intensity:c,factor:l,...u},d,u.mode,f,u.isMask,r)}),Xa(`gradient`,(e,t,n,r)=>{let i,a,o=kt(n,r),s=new Y(o.gradientType??0),c=new Ki(o.smooth??!1);o.colors?i=new ta(o.colors.length,o.colors):(i=new ta(10,new N(0,0,0,1)),i.value[1]=new N(1,1,1,1)),o.steps?a=new qi(o.steps.length,o.steps):(a=new qi(10,1),a.value[0]=0);let l=new Bt(no(o.offset??new _(0,0),r)),u=new Bt(no(o.morph??new _(0,0),r)),d=new H(I(o.angle??0,r)),f=so(o),p=new ya(s,c,i,a,l,u,d,f.alpha,f.isMask),m=new G(p.calpha,`f`);return new $(e,t,n,{gradientType:s,smooth:c,colors:i,steps:a,offset:l,morph:u,angle:d,...f},p,f.mode,m,f.isMask,r)}),Xa(`depth`,(e,t,n,r)=>{let i,a,o=kt(n,r),s=new Y(o.gradientType??0),c=new Ki(o.smooth??!1),l=new H(I(o.near,r)??50),u=new H(I(o.far,r)??200),d=new H(o.isVector??1),f=new H(o.isWorldSpace??0),p=new Vt(to(o.origin,r)),m=new Vt(to(o.direction,r));o.colors?i=new ta(o.colors.length,o.colors):(i=new ta(2,new N(0,0,0,1)),i.value[1]=new N(1,1,1,1)),o.steps?a=new qi(o.steps.length,o.steps):(a=new qi(2,1),a.value[0]=0);let h=so(o),g=new da(s,c,l,u,d,f,p,m,i,a,h.alpha,h.isMask),_=new G(g.calpha,`f`);return new $(e,t,n,{gradientType:s,smooth:c,near:l,far:u,isVector:d,isWorldSpace:f,origin:p,direction:m,colors:i,steps:a,...h},g,h.mode,_,h.isMask,r)}),Xa(`normal`,(e,t,n,r)=>{let i=kt(n,r),a=new Vt(i.cnormal??new l(1,1,1)),o=so(i),s=new oa(a,o.alpha),c=new G(s.calpha,`f`);return new $(e,t,n,{cnormal:a,...o},s,o.mode,c,o.isMask,r)}),Xa(`noise`,(e,t,n,r)=>{let i=kt(n,r),a=new H(I(i.scale,r)??1),o=new Vt(to(i.size??new l(100,100,100),r)),s=new H(I(i.move,r)??1),c=new Bt(no(i.fA??new _(1.7,9.2),r)),u=new Bt(no(i.fB??new _(8.3,2.8),r)),d=new Bt(no(i.distortion??new _(1,1),r)),f=new Ht(i.colorA),p=new Ht(i.colorB),m=new Ht(i.colorC),h=new Ht(i.colorD),g=new Y(i.noiseType??0),v=new Y(i.voronoiStyle??0),y=new H(I(i.highCut,r)??1),b=new H(I(i.lowCut,r)??0),x=new H(I(i.smoothness,r)??.5),S=new H(I(i.seed,r)??.5),C=new Y(i.quality??1),w=so(i),T=new Sa(a,o,s,c,u,d,f,p,m,h,w.alpha,g,w.isMask,v,y,b,x,S,C),ee=new G(T.calpha,`f`);return new $(e,t,n,{scale:a,size:o,move:s,fA:c,fB:u,distortion:d,colorA:f,colorB:p,colorC:m,colorD:h,noiseType:g,...w,voronoiStyle:v,highCut:y,lowCut:b,smoothness:x,seed:S,quality:C},T,w.mode,ee,w.isMask,r)}),Xa(`rainbow`,(e,t,n,r,i)=>{let a=kt(n,r),o=new H(I(a.filmThickness,r)??30),s=new H(I(a.movement,r)??0),c=new Vt(to(a.wavelengths,r)),l=new H(I(a.noiseStrength,r)??0),u=new H(I(a.noiseScale,r)??1),d=new Vt(to(a.offset,r)),f=so(a),p=!0===i?.forceRainbowNoise,m=p||rt(a.noiseStrength),h=new Oa(o,s,c,l,u,d,f.alpha,f.isMask,m),g=new G(h.calpha,`f`),_=new $(e,t,n,{filmThickness:o,movement:s,wavelengths:c,noiseStrength:l,noiseScale:u,offset:d,...f},h,f.mode,g,f.isMask,r);return _.noiseCompiledIn=m,_.noiseForced=p,_}),Xa(`toon`,(e,t,n,r)=>{let i,a,o=kt(n,r),s=new Y(o.positioning??0);o.colors?i=new ta(o.colors.length,o.colors):(i=new ta(10,new N(0,0,0,1)),i.value[1]=new N(1,1,1,1)),o.steps?a=new qi(o.steps.length,o.steps):(a=new qi(10,1),a.value[0]=0);let c=new Vt(to(o.source??new l(0,0,0),r)),u=new Ki(o.isWorldSpace??!0),d=new H(I(o.noiseStrength??0,r)),f=new H(I(o.noiseScale??1,r)),p=new Ht(o.shadowColor),m=new Vt(to(o.offset??new l(0,0,0),r)),h=so(o),g=new Aa(s,i,a,c,u,d,f,p,m,h.alpha),_=new G(g.calpha,`f`);return new $(e,t,n,{positioning:s,colors:i,steps:a,source:c,isWorldSpace:u,noiseStrength:d,noiseScale:f,shadowColor:p,offset:m,...h},g,h.mode,_,h.isMask,r)}),Xa(`outline`,(e,t,n,r)=>{let i=kt(n,r),a=new J(i.outlineColor??16777215),o=new J(i.contourColor??16777215),s=new H(I(i.outlineWidth??.1,r)),c=new H(I(i.contourWidth??.1,r)),u=new H(I(i.outlineThreshold??.1,r)),d=new H(I(i.contourThreshold??.1,r)),f=new H(I(i.outlineSmoothing??.1,r)),p=new H(I(i.contourFrequency??.1,r)),m=new Vt(to(i.contourDirection??new l(0,1,0),r)),h=new Ki(i.positionalLines??!1),g=new Ki(i.compensation??!0),_=Q.normalRenderTarget,v=Q.normalRenderTargetDepth,y=Q.pixelRatioNode,b=Q.resolution,x=so(i),S=new wa(a,o,s,c,u,d,f,p,m,h,g,b,_,v,y,x.alpha),C=new G(S.calpha,`f`);return new $(e,t,n,{outlineColor:a,contourColor:o,outlineWidth:s,contourWidth:c,outlineThreshold:u,contourThreshold:d,outlineSmoothing:f,contourFrequency:p,contourDirection:m,positionalLines:h,compensation:g,...x},S,x.mode,C,x.isMask,r)}),Xa(`transmission`,(e,t,n,r)=>{let i=kt(n,r),a=new H(I(i.thickness??10,r)),o=new H(I(i.ior??1.5,r)),s=new H(I(i.roughness??.5,r)),c=Q.transmissionSize,l=Q.transmissionRenderTarget,u=Q.transmissionRenderTargetDepth,d=window.innerWidth,f=window.innerHeight,p=d>=f?new Bt(f/d,1):new Bt(1,d/f),m=so(i),h=new Na(a,o,s,c,l,u,p,m.alpha),g=new G(h.calpha,`f`);return new $(e,t,n,{thickness:a,ior:o,roughness:s,aspectRatio:p,...m},h,m.mode,g,m.isMask,r)});var Po=!1;Xa(`reflection`,(e,t,n,r)=>{Po||(Po=!0,console.warn(`[spline] The reflection material layer requires the WebGPU renderer — it renders as invisible on the classic WebGL pipeline.`));let i=kt(n,r),a=new H(i.blur??0),o=new H(i.thickness??.001),s=new Y(i.steps??60),c=new H(i.stepSize??.005),l=new Y(i.tracingMode??1),u=so(i),d=new ia(new J(0,0,0,1),new H(0)),f=new G(d.calpha,`f`);return new $(e,t,n,{blur:a,thickness:o,steps:s,stepSize:c,tracingMode:l,...u},d,u.mode,f,u.isMask,r)}),Xa(`pattern`,(e,t,n,r)=>{let i=kt(n,r),a=new Y(i.style??0),o=new Y(i.projection??0),s=new Y([`x`,`y`,`z`].indexOf(i.axis)??0),c=new H(I(i.blending??0,r)),l=new Bt(no(i.offset,r)),u=new Ht(i.colorA),d=new Ht(i.colorB),f=new Bt(no(i.frequency??new _(10,10),r)),p=new H(I(i.size??.5,r)),m=new H(I(i.variation??0,r)),h=new H(I(i.smoothness??.5,r)),g=new H(I(i.zigzag??0,r)),v=new H(I(i.rotation??0,r)),y=new Bt(no(i.vertical??new _(0,1),r)),b=new Bt(no(i.horizontal??new _(0,1),r)),x=new Y(i.sides??6),S=so(i),C=new Ea(a,o,s,c,l,u,d,f,p,m,h,g,v,y,b,x,S.alpha,S.isMask),w=new G(C.calpha,`f`);return new $(e,t,n,{style:a,projection:o,axis:s,blending:c,offset:l,colorA:u,colorB:d,frequency:f,size:p,variation:m,smoothness:h,zigzag:g,rotation:v,vertical:y,horizontal:b,sides:x,...S},C,S.mode,w,S.isMask,r)}),Xa(`vertexColor`,(e,t,n,r)=>{let i=so(kt(n,r)),a=new Fa(i.alpha),o=new G(a.calpha,`f`);return new $(e,t,n,{...i},a,i.mode,o,i.isMask,r)}),Ze({createRootMaterial:(e,t)=>new go(e,t),createSharedMaterial:(e,t,n)=>new _o(e,t,n)}),Xe((e,t)=>e?((e=`medium`)=>{if(Co===e)return!1;Co=e,X.shadowmap_pars_fragment=(e=>`\n\n// PCSS implementation based on:\n// https://www.gamedev.net/articles/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/\n// NOTE: This number affects how big the shadow blur can\n// possibly get. Bigger number == bigger blur, but less precise results\n\nconst float  gPenumbraFilterSize = 80.0;\n// Blocker search at half the PCF budget (min 4): the average-blocker-depth\n// estimate feeds the squared/clamped penumbra term, which tolerates far\n// more estimator variance than the visible PCF edge — and the per-frame\n// vogel rotation integrates the residual under TAA. The reduced count is\n// ALSO the vogelDiskSample count in computePenumbra so the sparser spiral\n// still spans the full search radius (classic N with i < N/2 would only\n// cover the inner sqrt(1/2) of the disk and miss far blockers). Mirrors\n// the WebGPU filter's split (splinePCSS.ts blockerSampleCount).\nconst int   gPenumbraSamples = ${Math.max(4,e>>1)};\nconst int gShadowSamples = ${e};\nconst float gShadowSamplesRpc = 1.0f / float(gShadowSamples);\n\n#ifdef USE_SHADOWMAP\n    #if NUM_DIR_LIGHT_SHADOWS > 0\n\n        uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n        varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n        struct DirectionalLightShadow {\n            // Field order must match three r185's stock struct\n            // (shadowmap_pars_vertex) or the uniform layout differs between the\n            // vertex and fragment stages. shadowIntensity was added in r185.\n            float shadowIntensity;\n            float shadowBias;\n            float shadowNormalBias;\n            float shadowRadius;\n            vec2 shadowMapSize;\n        };\n\n        uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n    #endif\n\n    #if NUM_SPOT_LIGHT_SHADOWS > 0\n\n        uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n        varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n        struct SpotLightShadow {\n            // Field order must match three r185's stock struct\n            // (shadowmap_pars_vertex) or the uniform layout differs between the\n            // vertex and fragment stages. shadowIntensity was added in r185.\n            float shadowIntensity;\n            float shadowBias;\n            float shadowNormalBias;\n            float shadowRadius;\n            vec2 shadowMapSize;\n        };\n\n        uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n    #endif\n\n    #if NUM_POINT_LIGHT_SHADOWS > 0\n\n        // r185 renders point-light shadows into a cube render target with a\n        // CubeDepthTexture (WebGLShadowMap always uses WebGLCubeRenderTarget\n        // for point lights), so the map binds as a cube sampler — the old\n        // 2D cube-atlas (cubeToUV) layout no longer exists. BasicShadowMap\n        // leaves compareFunction null, so raw depth reads work.\n        uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n        varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n        struct PointLightShadow {\n            // Field order must match three r185's stock struct.\n            float shadowIntensity;\n            float shadowBias;\n            float shadowNormalBias;\n            float shadowRadius;\n            vec2 shadowMapSize;\n            float shadowCameraNear;\n            float shadowCameraFar;\n        };\n\n        uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n    #endif\n\n    /*\n    #if NUM_RECT_AREA_LIGHTS > 0\n\n        // TODO (abelnation): create uniforms for area light shadows\n\n    #endif\n    */\n\n${vo}\n\nfloat computePenumbra(int index, sampler2D shadowMap, float temporalAngle, float texelSize, vec2 uv, float compare, float texelScalar, float shadowRadius, vec2 dzduv)\n{\n    float penumbra = 1.0;\n    float blockerDepthAvg = 0.0;\n    float blockerCount = 0.0;\n\n    #pragma unroll_loop_start\n    for(int i = 0; i < gPenumbraSamples; i ++)\n    {\n        vec2 offset = (vogelDiskSample(i, gPenumbraSamples, temporalAngle) * texelSize) * texelScalar;\n        float depth = texture2D( shadowMap, uv + offset ).r;\n\n        if(depth < compare + receiverPlaneAdjust(dzduv, offset) + 0.0001)\n        {\n            blockerDepthAvg += depth;\n            blockerCount++;\n        }\n    }\n    #pragma unroll_loop_end\n\n    if (blockerCount > 0.0)\n    {\n        blockerDepthAvg /= blockerCount;\n\n        \n        penumbra = (compare - blockerDepthAvg) / (blockerDepthAvg);\n        penumbra *= penumbra;\n        penumbra *= 200.0 * penumbraSize[min(index, 5 - 1)]; // Magic number that affects how quickly the penumbra grows\n\n        return clamp(penumbra, 0.00, 1.0);\n    }\n    return 0.0;\n}\n\nfloat vogelShadow(int index, sampler2D shadowMap, vec2 uv, float texelSize, float compare, float shadowRadius, vec2 dzduv)\n{\n    float shadow         = 0.0f;\n\n    // NOTE: When using TAA, we should use screen space interleaved gradient noise\n    vec2 halton = haltonSequence[frameIndex];\n    float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);\n    float temporalAngle  = temporalOffset * PI2;\n\n    float texelScalar = (gPenumbraFilterSize) / (texelSize * 1024.);\n    float penumbra = computePenumbra(index, shadowMap, temporalAngle, texelSize, uv, compare, texelScalar, shadowRadius, dzduv);\n    if (penumbra == -1.0) {\n        return 1.0;\n    }\n\n    #pragma unroll_loop_start\n    for (int i = 0; i < gShadowSamples; i++)\n    {\n        vec2 vogelSample =  vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;\n        // Overall blurring offset\n        vec2 offset = vogelSample * (shadowRadius * 2.);\n\n        // Penumbra offset\n        offset += vogelSample * (penumbra * texelScalar);\n\n        shadow += step( compare + receiverPlaneAdjust(dzduv, offset), texture2D( shadowMap, uv + offset ).r );\n    }\n    #pragma unroll_loop_end\n\n    return shadow * gShadowSamplesRpc;\n}\n\n\n    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n        // r185: shadow maps are DepthTextures bound without compare mode\n        // (BasicShadowMap), so depth is read directly from .r rather than from\n        // an RGBA-packed encoding.\n        return step( compare, texture2D( depths, uv ).r );\n\n    }\n\n    float textureCubeCompare( samplerCube depths, vec3 dir, float compare ) {\n\n        float depth = textureCube( depths, dir ).r;\n\n        #ifdef USE_REVERSED_DEPTH_BUFFER\n\n            depth = 1.0 - depth;\n\n        #endif\n\n        return step( compare, depth );\n\n    }\n\n    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n        return unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n    }\n\n    float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n        float occlusion = 1.0;\n\n        vec2 distribution = texture2DDistribution( shadow, uv );\n\n        float hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n        if (hard_shadow != 1.0 ) {\n\n            float distance = compare - distribution.x ;\n            float variance = max( 0.00000, distribution.y * distribution.y );\n            float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n            softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n            occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n        }\n        return occlusion;\n\n    }\n\n    float getShadow( int i, sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n        float shadow = 1.0;\n\n        shadowCoord.xyz /= shadowCoord.w;\n        shadowCoord.z += shadowBias;\n\n        // Receiver-plane depth gradient — derivatives taken BEFORE the\n        // frustum branch (well-defined across the quad) of the projected\n        // coord, so the vogel taps can slope-correct their compares.\n        vec2 dzduv = receiverPlaneDepthBias( dFdx( shadowCoord.xyz ), dFdy( shadowCoord.xyz ) );\n\n        // if ( something && something ) breaks ATI OpenGL shader compiler\n        // if ( all( something, something ) ) using this instead\n\n        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n        bool inFrustum = all( inFrustumVec );\n\n        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n        bool frustumTest = all( frustumTestVec );\n\n        if ( frustumTest ) {\n\n        // SHADOWMAP_TYPE_BASIC included: on r185 the renderer must use\n        // BasicShadowMap (PCFShadowMap binds the depth texture as a\n        // sampler2DShadow with hardware compare, which this custom PCSS\n        // sampling can't read from), so BASIC is the define our PCSS path\n        // now runs under.\n        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC )\n\n            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n            return vogelShadow(i, shadowMap, shadowCoord.xy, texelSize.x, shadowCoord.z, shadowRadius, dzduv );\n\n        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n            float dx = texelSize.x;\n            float dy = texelSize.y;\n\n            vec2 uv = shadowCoord.xy;\n            vec2 f = fract( uv * shadowMapSize + 0.5 );\n            uv -= f * texelSize;\n\n            shadow = (\n                texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n                     f.x ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n                     f.x ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n                     f.y ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n                     f.y ) +\n                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n                          f.x ),\n                     mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n                          f.x ),\n                     f.y )\n            ) * ( 1.0 / 9.0 );\n\n        #elif defined( SHADOWMAP_TYPE_VSM )\n\n            shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n        #else // no percentage-closer filtering:\n\n            shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n        #endif\n\n        }\n\n        return shadow;\n\n    }\n\n    float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n        float shadow = 1.0;\n        // Offset magnitude matches the pre-r185 2D cube-atlas texel size so the\n        // blur radius is visually unchanged.\n        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n        // for point lights, the uniform @vShadowCoord is re-purposed to hold\n        // the vector from the light to the world-space position of the fragment.\n        vec3 lightToPosition = shadowCoord.xyz;\n\n        // r185 cube shadow maps store perspective depth along the sampled\n        // face's view axis (not radial distance): view-space depth is the\n        // largest component of the light-to-fragment vector.\n        vec3 absVec = abs( lightToPosition );\n        float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n\n        if ( viewSpaceZ - shadowCameraFar > 0.0 || viewSpaceZ - shadowCameraNear < 0.0 ) {\n\n            return shadow;\n\n        }\n\n        // viewZ to perspective depth\n        float compare = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n        compare += shadowBias;\n\n        // bd3D = base direction 3D\n        vec3 bd3D = normalize( lightToPosition );\n\n        vec2 halton = haltonSequence[frameIndex];\n        float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);\n        float temporalAngle  = temporalOffset * PI2;\n\n        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_VSM ) || defined( SHADOWMAP_TYPE_BASIC )\n            for (int i = 0; i < gShadowSamples; i++) {\n                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;\n\n                // Overall blurring offset\n                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);\n\n                // NOTE: Removed for now\n                // Penumbra offset\n                //offset += vec3(vogelSample.x, vogelSample.y, vogelSample.y)  * (penumbra * gPenumbraFilterSize);\n\n                shadow += textureCubeCompare( shadowMap, bd3D + offset, compare );\n\n            }\n            return shadow * gShadowSamplesRpc;\n\n        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n            for (int i = 0; i < 16; i++) {\n                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;\n\n                // Overall blurring offset\n                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);\n\n                shadow += textureCubeCompare( shadowMap, bd3D + offset, compare );\n\n            }\n            return shadow * (1.0 / 16.0);\n        #else // no percentage-closer filtering\n\n            return textureCubeCompare( shadowMap, bd3D, compare );\n\n        #endif\n\n    }\n\n#endif\n`)((e=>{switch(e){case`low`:return 8;case`medium`:default:return 16;case`high`:return 32}})(e));let t=bo.slice();t=t.replace(`getShadow( spotShadowMap[ i ]`,`getShadow( UNROLLED_LOOP_INDEX + 3, spotShadowMap[ i ]`),t=t.replace(`getShadow( directionalShadowMap[ i ]`,`getShadow( UNROLLED_LOOP_INDEX, directionalShadowMap[ i ]`),X.lights_fragment_begin=t;let n=xo.slice();return n=n.replaceAll(`getShadow(`,`getShadow( UNROLLED_LOOP_INDEX, `),X.shadowmask_pars_fragment=n,!0})(t):(()=>{if(Co===null||Co===`off`){let e=Co===null;return Co=`off`,e&&(X.shadowmap_pars_fragment=wo()),!1}return Co=`off`,X.shadowmap_pars_fragment=wo(),X.lights_fragment_begin=bo,X.shadowmask_pars_fragment=xo,!0})()),R(()=>{let e=new ke;return e.depthWrite=!1,e.opacity=.5,e.onBeforeCompile=e=>{e.fragmentShader=`layout(location = 1) out vec4 gVelocity;
`+e.fragmentShader.replace(`void main() {`,`void main() {
	gVelocity = vec4(0.0);`)},e});var Fo=`
vec3 normal = (normalize(vNormal)).rgb;

float contrastDepth = (gl_FragCoord.z - 0.5) * depthContrast + 0.5;

vec3 resultColor = mix(mix(vColor, normal, 0.2), vec3(contrastDepth), 0.4);
`,Io=`
vec3 nv = normalize(vNormalView);
if (!gl_FrontFacing) nv = -nv;
`,Lo=`\nuniform float depthContrast;\nvarying vec3 vNormal;\nvarying vec3 vNormalView;\nflat in vec3 vColor;\nvoid main()\n{\n${Io}\ngl_FragColor = vec4(nv, vColor.r);\n}\n`,Ro=`\nlayout(location = 1) out vec4 gViewNormal;\nuniform float depthContrast;\nvarying vec3 vNormal;\nvarying vec3 vNormalView;\nflat in vec3 vColor;\nvoid main()\n{\n${Fo}\ngl_FragColor = vec4(resultColor, vColor.r);\n\n${Io}\ngViewNormal = vec4(nv, vColor.r);\n}\n`,zo={value:1},Bo=e=>new E({vertexShader:`
attribute vec3 randomColor;
varying vec3 vNormal;
varying vec3 vNormalView;
flat out vec3 vColor;
#include <skinning_pars_vertex>
#include <morphtarget_pars_vertex>

void main()
{
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
vec3 transformed = vec3(position);
#include <morphtarget_vertex>
#include <skinning_vertex>





vec4 localPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
localPosition = instanceMatrix * localPosition;
objectNormal = mat3(instanceMatrix) * objectNormal;
#endif

vNormal = normal;
vNormalView = normalMatrix * objectNormal;
vColor = randomColor;
gl_Position = projectionMatrix * (modelViewMatrix * localPosition);
}
`,fragmentShader:e,uniforms:{depthContrast:zo}}),Vo=Bo(`\nuniform float depthContrast;\nvarying vec3 vNormal;\nvarying vec3 vNormalView;\nflat in vec3 vColor;\nvoid main()\n{\n${Fo}\ngl_FragColor = vec4(resultColor, vColor.r);\n}\n`),Ho=Bo(Lo),Uo=Bo(Ro),Wo=`float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

}`,Go=/float getDistanceAttenuation\([^)]*\)\s*\{[\s\S]*?\n\}/,Ko=class extends E{constructor(){super({name:`PassthroughMaterial`,uniforms:{inputBuffer:new C(null)},blending:0,depthWrite:!1,depthTest:!1,vertexShader:`#define GLSLIFY 1
varying vec2 vUv;void main(){gl_Position=vec4(position.xy,1.0,1.0);vUv=position.xy*0.5+0.5;}`,fragmentShader:`#define GLSLIFY 1
layout(location=1)out vec4 gVelocity;varying vec2 vUv;uniform sampler2D inputBuffer;void main(){gl_FragColor=texture2D(inputBuffer,vUv);gVelocity=vec4(0.0);}`})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}},qo=class extends B{constructor(){super(`TAAResolvePass`),this.MRTCompatible=!0,this.needsSwap=!1,this.passThroughMaterial=new Ko,this.resolutionVector=new _,this.resolveMaterial=new E({name:`TAAResolveMaterial`,uniforms:{inputBuffer:new C(null),historyBuffer:new C(null),velocityBuffer:new C(null),depthBuffer:new C(null),resolution:new C(new _)},blending:0,depthWrite:!1,depthTest:!1,vertexShader:`#define GLSLIFY 1
varying vec2 vUv;varying vec2 vTexCoords[9];uniform vec2 resolution;void main(){vUv=position.xy*0.5+0.5;vec2 texelSize=vec2(1.0)/resolution;vTexCoords[0]=vUv+vec2(-texelSize.x,-texelSize.y);vTexCoords[1]=vUv+vec2(0.0,-texelSize.y);vTexCoords[2]=vUv+vec2(texelSize.x,-texelSize.y);vTexCoords[3]=vUv+vec2(-texelSize.x,0.0);vTexCoords[4]=vUv+vec2(0.0,0.0);vTexCoords[5]=vUv+vec2(texelSize.x,0.0);vTexCoords[6]=vUv+vec2(-texelSize.x,texelSize.y);vTexCoords[7]=vUv+vec2(0.0,texelSize.y);vTexCoords[8]=vUv+vec2(texelSize.x,texelSize.y);gl_Position=vec4(position.xy,1.0,1.0);}`,fragmentShader:`#define GLSLIFY 1
#include <common>
varying vec2 vUv;varying vec2 vTexCoords[9];uniform sampler2D inputBuffer;uniform sampler2D historyBuffer;uniform sampler2D velocityBuffer;uniform sampler2D depthBuffer;uniform vec2 resolution;
#define USE_YCOCG
#define USE_CATMULL_ROM
const float feedback_min=0.5;const float feedback_max=0.95;vec3 RGB_YCoCg(vec3 c){return vec3(c.x/4.0+c.y/2.0+c.z/4.0,c.x/2.0-c.z/2.0,-c.x/4.0+c.y/2.0-c.z/4.0);}vec3 YCoCg_RGB(vec3 c){return clamp(vec3(c.x+c.y-c.z,c.x+c.z,c.x-c.y-c.z),vec3(0.0),vec3(1.0));}vec4 sample_color(sampler2D tex,vec2 uv){
#ifdef USE_YCOCG
vec4 c=texture(tex,uv);return vec4(RGB_YCoCg(c.rgb),c.a);
#else
return texture(tex,uv);
#endif
}vec4 sample_catmull_rom(sampler2D tex,vec2 uv,vec2 texSize){vec2 samplePos=uv*texSize;vec2 texPos1=floor(samplePos-0.5)+0.5;vec2 f=samplePos-texPos1;vec2 w0=f*(-0.5+f*(1.0-0.5*f));vec2 w1=1.0+f*f*(-2.5+1.5*f);vec2 w2=f*(0.5+f*(2.0-1.5*f));vec2 w3=f*f*(-0.5+0.5*f);vec2 w12=w1+w2;vec2 offset12=w2/(w1+w2);vec2 texPos0=texPos1-1.0;vec2 texPos3=texPos1+2.0;vec2 texPos12=texPos1+offset12;texPos0/=texSize;texPos3/=texSize;texPos12/=texSize;vec4 result=vec4(0.0);result+=texture2D(tex,vec2(texPos12.x,texPos0.y))*w12.x*w0.y;result+=texture2D(tex,vec2(texPos0.x,texPos12.y))*w0.x*w12.y;result+=texture2D(tex,vec2(texPos12.x,texPos12.y))*w12.x*w12.y;result+=texture2D(tex,vec2(texPos3.x,texPos12.y))*w3.x*w12.y;result+=texture2D(tex,vec2(texPos12.x,texPos3.y))*w12.x*w3.y;return result;}vec3 choose_motion_vector(){
#ifdef CHOOSE_LONGEST_MOTION_VECTOR
float longest=-1.0;vec3 v_choose=vec3(-1.0);for(int i=0;i<9;i++){vec3 v=texture2D(velocityBuffer,vTexCoords[i]).rgb;float l=length(v.xy);if(l>longest){longest=l;v_choose=v;}}return v_choose;
#else
float closest_depth=1000.0;vec2 closest_uv_offset=vec2(0.0);for(int i=0;i<9;i++){float neighbor_depth=texture2D(depthBuffer,vTexCoords[i]).r;if(neighbor_depth<closest_depth){closest_uv_offset=vTexCoords[i];closest_depth=neighbor_depth;}}return texture2D(velocityBuffer,closest_uv_offset).rgb;
#endif
}vec4 clipAabb(vec3 aabb_min,vec3 aabb_max,vec4 avg,vec4 input_texel){const float FLT_EPS=0.00000001;vec3 p_clip=0.5*(aabb_max+aabb_min);vec3 e_clip=0.5*(aabb_max-aabb_min)+FLT_EPS;vec4 v_clip=input_texel-vec4(p_clip,avg.w);vec3 v_unit=v_clip.xyz/e_clip;vec3 a_unit=abs(v_unit);float ma_unit=max(a_unit.x,max(a_unit.y,a_unit.z));if(ma_unit>1.0){return vec4(p_clip,avg.w)+v_clip/ma_unit;}else{return input_texel;}}vec3 clip_aabb_variance(in vec3 cOld,in vec3 cNew,in vec3 centre,in vec3 halfSize){if(all(lessThanEqual(abs(cOld-centre),halfSize))){return cOld;}vec3 dir=(cNew-cOld);vec3 near=centre-sign(dir)*halfSize;vec3 tAll=(near-cOld)/dir;float t=0.0001;for(int i=0;i<3;i++){if(tAll[i]>=0.0&&tAll[i]<t){t=tAll[i];}}if(t>=0.0001){return cOld;}return cOld+dir*t;}void main(){vec3 v=choose_motion_vector();vec2 velocity=v.rg;vec2 previousPixelPos=vUv-velocity;vec4 currentColor=sample_color(inputBuffer,vUv);
#ifdef USE_CATMULL_ROM
vec4 previousColor=sample_catmull_rom(historyBuffer,previousPixelPos,resolution);
#else
vec4 previousColor=sample_color(historyBuffer,previousPixelPos);
#endif
#ifdef USE_YCOCG
previousColor=vec4(RGB_YCoCg(previousColor.rgb),previousColor.a);
#endif
vec4 ctl=sample_color(inputBuffer,vTexCoords[0]);vec4 ctc=sample_color(inputBuffer,vTexCoords[1]);vec4 ctr=sample_color(inputBuffer,vTexCoords[2]);vec4 cml=sample_color(inputBuffer,vTexCoords[3]);vec4 cmc=sample_color(inputBuffer,vTexCoords[4]);vec4 cmr=sample_color(inputBuffer,vTexCoords[5]);vec4 cbl=sample_color(inputBuffer,vTexCoords[6]);vec4 cbc=sample_color(inputBuffer,vTexCoords[7]);vec4 cbr=sample_color(inputBuffer,vTexCoords[8]);vec4 cmin=min(ctl,min(ctc,min(ctr,min(cml,min(cmc,min(cmr,min(cbl,min(cbc,cbr))))))));vec4 cmax=max(ctl,max(ctc,max(ctr,max(cml,max(cmc,max(cmr,max(cbl,max(cbc,cbr))))))));vec4 cavg=(ctl+ctc+ctr+cml+cmc+cmr+cbl+cbc+cbr)/9.0;vec4 cmin5=min(ctc,min(cml,min(cmc,min(cmr,cbc))));vec4 cmax5=max(ctc,max(cml,max(cmc,max(cmr,cbc))));vec4 cavg5=(ctc+cml+cmc+cmr+cbc)/5.0;cmin=0.5*(cmin+cmin5);cmax=0.5*(cmax+cmax5);cavg=0.5*(cavg+cavg5);
#ifdef USE_YCOCG
vec2 chroma_extent=vec2(0.25*0.5*(cmax.r-cmin.r));vec2 chroma_center=currentColor.gb;cmin.yz=chroma_center-chroma_extent;cmax.yz=chroma_center+chroma_extent;cavg.yz=chroma_center;
#endif
vec4 previousColorClipped=clamp(previousColor,cmin,cmax);
#ifdef LUMINANCE_DIFFERENCES
#ifdef USE_YCOCG
float lum0=currentColor.r;float lum1=previousColorClipped.r;
#else
float lum0=luminance(currentColor.rgb);float lum1=luminance(previousColorClipped.rgb);
#endif
float unbiased_diff=abs(lum0-lum1)/max(lum0,max(lum1,0.2));float unbiased_weight=1.0-unbiased_diff;float unbiased_weight_sqr=unbiased_weight*unbiased_weight;float k_feedback=mix(feedback_min,feedback_max,unbiased_weight_sqr);vec4 result=mix(currentColor,previousColorClipped,vec4(k_feedback));
#else
const float alpha=0.1;vec4 result=mix(currentColor,previousColorClipped,1.0-alpha);
#endif
#ifdef USE_YCOCG
gl_FragColor=vec4(YCoCg_RGB(result.rgb).rgb,result.a);
#else
gl_FragColor=result;
#endif
}`}),this.historyRenderTarget=new e(1024,1024,{minFilter:g,stencilBuffer:!1,depthBuffer:!1}),this.historyRenderTarget.texture.name=`TAA.History`,this.resultRenderTarget=new e(1024,1024,{minFilter:g,stencilBuffer:!1,depthBuffer:!1}),this.resultRenderTarget.texture.name=`TAA.Output`}setSize(e,t){this.historyRenderTarget.setSize(e,t),this.resultRenderTarget.setSize(e,t)}render(e,t){this.fullscreenMaterial=this.resolveMaterial,this.resolveMaterial.uniforms.inputBuffer.value=t.textures[0],this.resolveMaterial.uniforms.velocityBuffer.value=t.textures[1],this.resolveMaterial.uniforms.depthBuffer.value=t.depthTexture,this.resolveMaterial.uniforms.historyBuffer.value=this.historyRenderTarget.texture,this.resolveMaterial.uniforms.resolution.value.set(t.width,t.height),e.setRenderTarget(this.resultRenderTarget),e.render(this.scene,this.camera),this.fullscreenMaterial=this.passThroughMaterial,this.passThroughMaterial.inputBuffer=this.resultRenderTarget.texture,e.setRenderTarget(this.historyRenderTarget),e.render(this.scene,this.camera);let n=this.renderToScreen?null:t;this.fullscreenMaterial=this.passThroughMaterial,this.passThroughMaterial.inputBuffer=this.resultRenderTarget.texture,e.setRenderTarget(n),e.render(this.scene,this.camera)}dispose(){super.dispose(),this.resultRenderTarget.dispose(),this.historyRenderTarget.dispose(),this.resolveMaterial.dispose(),this.passThroughMaterial.dispose()}},Jo=class extends B{constructor(e,t,n){super(`TransmissionPass`,void 0,t),this.MRTCompatible=!0,this.depthPass=new mt(e,t,{renderTarget:n.transmissionDepthTarget}),this.passThroughMaterial=new Ko,this.splineScene=e,this.needsSwap=!1}updatePasses(e){this.passThroughMaterial.dispose(),this.passThroughMaterial=new Ko,this.depthPass.dispose(),this.depthPass=new mt(this.splineScene,this.camera,{renderTarget:e.transmissionDepthTarget})}setCamera(e){this.camera=e}setScene(e){this.splineScene=e}render(e,t,n){let r=this.camera.layers.mask,i=e;i.setRenderTarget(i.transmissionRenderTarget),this.fullscreenMaterial=this.passThroughMaterial,this.passThroughMaterial.inputBuffer=t.textures[0],i.clear(),i.render(this.scene,this.camera),i.shadowMap.needsUpdate=!1,i.shadowMap.autoUpdate=!1,this.camera.layers.disable(3),this.depthPass.render(e,t,n);let a=this.renderToScreen?null:t;this.camera.layers.set(3),e.setRenderTarget(a),e.render(this.splineScene,this.camera),this.camera.layers.mask=r}dispose(){super.dispose(),this.depthPass?.renderPass.dispose(),this.depthPass.dispose(),this.passThroughMaterial.dispose(),this.depthPass=void 0,this.passThroughMaterial=void 0,this.splineScene=void 0,this.scene=void 0,this.camera=void 0}},Yo=new ee,Xo=new E({transparent:!0,vertexShader:`
        void main() {
            gl_Position = vec4(0.0);
        }
    `,fragmentShader:`
        layout(location = 1) out vec4 gVelocity;

        void main() {
            gl_FragColor = vec4(0.0);
			gVelocity = vec4(0.0);
        }
    `}),Zo=class extends B{constructor(e,t,n){super(`OpaquePass`,t??Yo,n),this.MRTCompatible=!0,this.originalMaterials=[],this.hasTransmissionPass=!1,this.clear=!0,this.clearColorOnly=!1,this.clearDepth=!1,this.needsSwap=!1,this.MRTCompatible=e}setCamera(e){this.camera=e}setScene(e){this.scene=e??Yo}getScene(){return this.scene}render(e,t){this.camera.layers.enable(3),this.hasTransmissionPass&&(this.originalMaterials.length=0,this.scene.traverse(e=>{e.layers.isEnabled(3)&&e instanceof Ye&&(this.originalMaterials.push([e,e.material]),e.material=Xo)}),!0!==e.manageShadowUpdates&&(e.shadowMap.needsUpdate=!0,e.shadowMap.autoUpdate=!0)),this.camera.layers.enable(8),this.camera.layers.enable(4);let n=this.renderToScreen?null:t;e.setRenderTarget(n),this.clearColorOnly&&e.clear(!0,!1,!0),this.clear&&e.clear(),e.render(this.scene,this.camera),this.clearDepth&&e.clear(!1,!0,!1),this.hasTransmissionPass&&this.originalMaterials.forEach(e=>{e[0].material=e[1]})}dispose(){super.dispose(),this.originalMaterials.length=0,this.scene=void 0,this.camera=void 0}},Qo=class{constructor(e,{depthBuffer:t=!0,stencilBuffer:n=!1,multisampling:r=0,frameBufferType:i=0}={}){this.renderer=e,this.helperStartIndex=0,this.copyPass=new yt,this.depthTexture=null,this.timer=new pt,this._width=1,this._height=1,this.passes=[],this.helperPasses=[],this.autoRenderToScreen=!0,this.inputBuffer=this.createBuffer(t,n,i,r,!0,`input buffer mrt`),this.inputBufferSingle=this.createBuffer(t,n,i,r,!1,` input buffer single`),this.inputBufferSingle.texture.dispose(),this.inputBufferSingle.depthTexture.dispose(),this.inputBufferSingle.texture=this.inputBuffer.textures[0],this.inputBufferSingle.depthTexture=this.inputBuffer.depthTexture,this.outputBuffer=this.inputBuffer.clone(),this.outputBuffer.name=`output buffer mrt`,this.outputBufferSingle=this.createBuffer(t,n,i,r,!1,`output buffer single`),this.outputBufferSingle.texture.dispose(),this.outputBufferSingle.depthTexture.dispose(),this.outputBufferSingle.texture=this.outputBuffer.textures[0],this.outputBufferSingle.depthTexture=this.outputBuffer.depthTexture,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){let t=this.inputBuffer,n=this.multisampling;n>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),console.log(`creating new input buffer`),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,e,!0,`new input buffer`),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){let t=e.getSize(new _),n=e.getContext().getContextAttributes()?.alpha??!1,r=this.inputBuffer.textures[0].type;r===1009&&e.outputColorSpace===`srgb`&&(this.inputBuffer.textures[0].colorSpace=`srgb`,this.outputBuffer.textures[0].colorSpace=`srgb`,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height,!1);for(let t of this.passes)t.initialize(e,n,r)}}replaceRenderer(e,t=!0){let n=this.renderer,r=n.domElement.parentNode;return this.setRenderer(e),t&&r!==null&&(r.removeChild(n.domElement),r.appendChild(e.domElement)),n}createDepthTexture(){let e=this.depthTexture=new Ee(this._width,this._height);return this.inputBuffer.depthTexture=e,this.inputBuffer.stencilBuffer?(e.format=Fe,e.type=Ce):e.type=ae,e}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(let e of this.passes)e.setDepthTexture(null)}}createBuffer(t,n,r,i,o,s){let c,l=this.renderer,u=l===null?new _:l.getDrawingBufferSize(new _),d={minFilter:g,magFilter:g,wrapS:k,wrapT:k,stencilBuffer:n,depthBuffer:t};i>0?(c=new e(u.width,u.height,d),c.samples=i):(o?(c=new e(u.width,u.height,{...d,count:2}),c.textures[1].type=a):c=new e(u.width,u.height,d),c.depthTexture=new Ee(2048,2048),c.depthTexture.type=Be);let f=c.textures.length>1;return r===1009&&l!==null&&l.outputColorSpace===`srgb`&&(f?c.textures.forEach(e=>e.colorSpace=`srgb`):c.texture.colorSpace=`srgb`),f?c.textures.forEach((e,t)=>{e.name=`EffectComposer.Buffer ${o} ${t}`,e.generateMipmaps=!1}):(c.texture.name=`EffectComposer.Buffer ${o}`,c.texture.generateMipmaps=!1),c.name=s,c}addPass(e,t){let n,r=this.passes,i=this.renderer,a=i.getDrawingBufferSize(new _),o=i.getContext().getContextAttributes()?.alpha??!1;if(e.MRTCompatible&&(n=this.inputBuffer.textures[0].type),e.MRTCompatible||(n=this.inputBuffer.texture.type),e.setRenderer(i),e.setSize(a.width,a.height),e.initialize(i,o,n),this.autoRenderToScreen&&(r.length>0&&(r[r.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t===void 0?r.push(e):r.splice(t,0,e),this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthTexture!==null){if(this.depthTexture===null){let t=this.createDepthTexture();for(e of r)e.setDepthTexture(t)}else e.setDepthTexture(this.depthTexture)}}setHelperStartIndex(e){this.helperStartIndex=e}removePass(e){let t=this.passes,n=t.indexOf(e);n!==-1&&t.splice(n,1).length>0&&(this.depthTexture!==null&&(t.reduce((e,t)=>e||t.needsDepthTexture,!1)||e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null)),this.autoRenderToScreen&&n===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0)))}removeAllPasses(){let e=this.passes;e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){let t,n,r,i,a=this.renderer,o=this.copyPass,s=this.inputBuffer,c=this.outputBuffer,l=this.inputBufferSingle,u=this.outputBufferSingle,d=!1;e===void 0&&(e=this.timer.update().getDelta());for(let f of this.passes)f.enabled&&(f.MRTCompatible?f.render(a,s,c,e,d):f.render(a,l,u,e,d),f.needsSwap&&(d&&(o.renderToScreen=f.renderToScreen,t=a.getContext(),n=a.state.buffers.stencil,n.setFunc(t.NOTEQUAL,1,4294967295),o.render(a,s,c,e,d),n.setFunc(t.EQUAL,1,4294967295)),r=s,i=l,s=c,l=u,c=r,u=i),f instanceof St?d=!0:f instanceof xt&&(d=!1))}setSize(e,t,n){let r=this.renderer;if(this._width=e,this._height=t,e===void 0||t===void 0){let n=r.getSize(new _);e=n.width,t=n.height}r.setSize(e,t,n);let i=r.getDrawingBufferSize(new _);this.inputBuffer.setSize(i.width,i.height),this.outputBuffer.setSize(i.width,i.height),this.inputBufferSingle.setSize(i.width,i.height),this.outputBufferSingle.setSize(i.width,i.height);for(let e of this.passes)e.setSize(i.width,i.height)}reset(){let e=this.timer.isAutoResetEnabled();this.dispose(),this.autoRenderToScreen=!0,this.timer.setAutoResetEnabled(e)}dispose(){for(let e of this.passes)e.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.inputBufferSingle!==null&&this.inputBufferSingle.dispose(),this.outputBufferSingle!==null&&this.outputBufferSingle.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},$o=new E({name:`CombineMaterial`,uniforms:{inputBufferA:new C(null),inputBufferB:new C(null)},blending:0,depthWrite:!1,depthTest:!1,vertexShader:`
varying vec2 vUv;
void main() {
    gl_Position = vec4(position.xy, 1.0, 1.0);
    vUv = position.xy * 0.5 + 0.5;
}
`,fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D inputBufferA;
    uniform sampler2D inputBufferB;

    
    layout(location = 1) out vec4 gVelocity;

    void main() {
	vec4 resA = texture2D(inputBufferA, vUv);
	vec4 resB = texture2D(inputBufferB, vUv);
    float a = resA.a + resB.a * ( 1.0 - resA.a );

	vec4 res;
	res.rgb =  resA.rgb + (resB.rgb * (1.0 - resA.a));
	res.a = resA.a + resB.a * (1.0 - resA.a);
	gl_FragColor = res;
    gVelocity = vec4(0.0);
    }
`}),es=class extends B{constructor(t){super(`HelperPass`,void 0,t),this.MRTCompatible=!1,this._width=10,this._height=10,this.fullscreenMaterial=$o,this.helperPass=new Zo(!1,void 0,this.camera),this.helperPass.hasTransmissionPass=!1,this.helperPass.clear=!1,this.helperPass.renderToScreen=!1,this.helperPassOnTop=new Zo(!1,void 0,this.camera),this.helperPassOnTop.hasTransmissionPass=!1,this.helperPassOnTop.clear=!1,this.helperPassOnTop.renderToScreen=!1,this.rt=new e(10,10,{minFilter:g,magFilter:g,wrapS:k,wrapT:k,depthBuffer:!0})}_ensureEffectPass(){if(this.effectPass)return this.effectPass;let e=new _t({preset:dt.LOW,edgeDetectionMode:gt.COLOR});return e.addEventListener(`load`,()=>this.onSmaaTexturesLoaded?.()),this.effectPass=new vt(this.camera,e),this._initializeArgs&&this.effectPass.initialize(...this._initializeArgs),this.effectPass.setSize(this._width,this._height),this.effectPass}setSize(e,t){this._width=e,this._height=t,this.rt.setSize(e,t),this.effectPass?.setSize(e,t)}set sceneHelpers(e){this.helperPass.setScene(e)}get sceneHelpers(){return this.helperPass.getScene()}set sceneHelpersOnTop(e){this.helperPassOnTop.setScene(e)}get sceneHelpersOnTop(){return this.helperPassOnTop.getScene()}setCamera(e){this.helperPass.setCamera(e),this.helperPassOnTop.setCamera(e)}initialize(e,t,n){super.initialize(e,t,n),this._initializeArgs=[e,t,n],this.effectPass?.initialize(e,t,n)}dispose(){super.dispose(),this.rt.dispose(),this.effectPass?.dispose(),this.helperPass.dispose(),this.helperPassOnTop.dispose()}render(e,t,n){this.rt.depthTexture=t.depthTexture;let r=e.getClearAlpha();e.setClearAlpha(0),this.helperPass.clearDepth=!0,this.helperPass.clearColorOnly=!0,this.helperPass.render(e,this.rt),this.helperPassOnTop.render(e,this.rt);let i=this._ensureEffectPass();i.renderToScreen=!1,i.render(e,this.rt,n),this.fullscreenMaterial.uniforms.inputBufferA.value=n.texture,this.fullscreenMaterial.uniforms.inputBufferB.value=t.texture,e.setClearAlpha(r),e.setRenderTarget(null),e.clear(),e.render(this.scene,this.camera)}},ts=new E({vertexShader:`#define GLSLIFY 1
#include <skinning_pars_vertex>
#include <morphtarget_pars_vertex>
out vec3 n;void main(){
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
vec4 view_space=viewMatrix*modelMatrix*vec4(transformed,1.0);gl_Position=projectionMatrix*view_space;n=normalize(transformedNormal);}`,fragmentShader:`#define GLSLIFY 1
in vec3 n;void main(){gl_FragColor=vec4(gl_FrontFacing ? n :-n,1.0);}`,side:2}),ns=new E({vertexShader:`#define GLSLIFY 1
out vec2 v_uv;void main(){gl_Position=vec4(position.xy,1.0,1.0);v_uv=uv;}`,fragmentShader:`#define GLSLIFY 1
in vec2 v_uv;uniform sampler2D texture_ao_lrez;uniform sampler2D texture_depth_lrez;uniform sampler2D texture_depth_hrez;uniform float near;uniform float far;float linearize_depth(float depth_sampled){float z=depth_sampled*2.0-1.0;return(2.0*near*far)/(far+near-z*(far-near));}vec2 nearest_depth_filter(in vec2 uv){vec2 resolution=vec2(textureSize(texture_depth_lrez,0));vec2 texel_size=1.0/resolution;vec2 offset=uv-0.5*texel_size;float d_hrez=texture(texture_depth_hrez,uv).r;float a=abs(d_hrez-texture(texture_depth_lrez,offset).r);float b=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(texel_size.x,0.0)).r);float c=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(0.0,texel_size.y)).r);float d=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(texel_size.x,texel_size.y)).r);float min_diff=min(a,min(b,min(c,d)));if(min_diff==a)return offset;if(min_diff==b)return offset+vec2(texel_size.x,0.0);if(min_diff==c)return offset+vec2(0.0,texel_size.y);if(min_diff==d)return offset+vec2(texel_size.x,texel_size.y);}void main(){
#ifdef DEBUG
float d_lrez=texture(texture_depth_lrez,v_uv).r;float d_hrez=texture(texture_depth_hrez,v_uv).r;float output_d=mix(linearize_depth(d_lrez)/far,linearize_depth(d_hrez)/far,step(0.5,v_uv.x));gl_FragColor=vec4(vec3(output_d),1.0);
#else
vec2 filtered_uv=nearest_depth_filter(v_uv);vec4 ao=texture(texture_ao_lrez,filtered_uv);gl_FragColor=vec4(ao.rgb,1.0);gl_FragColor=ao;
#endif
}`,uniforms:{texture_ao_lrez:new C(null),texture_depth_lrez:new C(null),texture_depth_hrez:new C(null),near:new C(null),far:new C(null)}}),rs=class extends B{constructor(t,n){super(`AmbientOcclusionPass`,void 0,n),this.fogEnabled=!1,this.fogNear=1,this.fogFar=1e3,this.fogMode=0,this.fogHeightParams=new l(.005,.01,0),this.frameIndex=0,this.sanitizeViewport=!1,this._runHalfRes=!0,this._width=1,this._height=1;let r=1024,i=1024;this.gBuffer=new e(r,i,{type:ct?a:Be,depthTexture:new Ee(r,i),minFilter:g,magFilter:g}),this.depthBufferHighRes=new e(r,i,{depthTexture:new Ee(r,i)}),this.aoBuffer=new e(r,i,{minFilter:g,magFilter:g}),this.splineScene=t,this.splineCamera=n,this.hbaoMaterial=new E({vertexShader:`#define GLSLIFY 1
out vec2 v_uv;void main(){v_uv=uv;gl_Position=vec4(position.xy,1.0,1.0);}`,fragmentShader:`precision highp float;precision highp int;precision highp sampler2D;
#define GLSLIFY 1
in vec2 v_uv;const float pi=3.14159265;const float num_steps=4.0;const float num_directions=4.0;uniform float near;uniform float far;uniform float fov;uniform vec4 proj_info;uniform bool is_ortho;uniform vec2 resolution;uniform float radius_of_influence;uniform float radius_in_screen_space;uniform float exponent;uniform vec3 ao_color;uniform float bias;uniform sampler2D texture_depth;uniform sampler2D texture_normals;uniform sampler2D texture_blue_noise;uniform sampler2D texture_color_pass;const vec2 blue_noise_in_disk[16]=vec2[16](vec2(0.4787119925022125,0.875764012336731),vec2(-0.3379560112953186,-0.7939590215682983),vec2(-0.9552590250968933,-0.028163999319076538),vec2(0.8645269870758057,0.3256889879703522),vec2(0.20934200286865234,-0.3956570029258728),vec2(-0.10677900165319443,0.6725850105285645),vec2(0.15621300041675568,0.2351129949092865),vec2(-0.4136439859867096,-0.08285599946975708),vec2(-0.41566699743270874,0.3239090144634247),vec2(0.14189599454402924,-0.9399799704551697),vec2(0.9549319744110107,-0.18251599371433258),vec2(-0.7661839723587036,0.4107989966869354),vec2(-0.4349119961261749,-0.45884498953819275),vec2(0.4152419865131378,-0.07872399687767029),vec2(0.7283350229263306,-0.4917770028114319),vec2(-0.05808600038290024,-0.06640099734067917));uniform int frame_index;uniform bool fog_enabled;uniform float fog_near;uniform float fog_far;uniform float fog_mode;uniform vec3 fog_height_params;uniform mat4 camera_world_matrix;float height_fog_factor(vec3 fog_world_delta,float fog_dist,vec3 camera_world_pos){float density=fog_height_params.x;float falloff=fog_height_params.y;float rel_y=camera_world_pos.y-fog_height_params.z;float cam_density=density*exp(clamp(-falloff*rel_y,-60.0,60.0));float x=clamp(falloff*fog_world_delta.y,-60.0,60.0);float x_safe=(x>=0.0 ? 1.0 :-1.0)*max(abs(x),1e-4);float optical_depth=cam_density*fog_dist*(1.0-exp(-x_safe))/x_safe;return 1.0-exp(-max(optical_depth,0.0));}vec3 uv_to_view_space(vec2 uv,float eye_z){return vec3((uv*proj_info.xy+proj_info.zw)*(is_ortho ? 1.0 : eye_z),eye_z);}float linearize_depth(float depth_sampled){float z=is_ortho ? depth_sampled : depth_sampled*2.0-1.0;return mix((2.0*near*far)/(far+near-z*(far-near)),near+z*(far-near),float(is_ortho));}vec3 get_view_position(vec2 uv_coords){float linear_depth=linearize_depth(texture(texture_depth,uv_coords).x);return uv_to_view_space(uv_coords,linear_depth);}vec3 min_difference(vec3 p,vec3 right,vec3 left){vec3 v1=right-p;vec3 v2=p-left;return(dot(v1,v1)<dot(v2,v2))? v1 : v2;}vec3 rebuild_normal(in vec2 uv,in vec3 p){vec2 one_over_resolution=1.0/resolution;vec3 r=get_view_position(uv+vec2(one_over_resolution.x,0));vec3 l=get_view_position(uv+vec2(-one_over_resolution.x,0));vec3 t=get_view_position(uv+vec2(0,one_over_resolution.y));vec3 b=get_view_position(uv+vec2(0,-one_over_resolution.y));return normalize(cross(min_difference(p,r,l),min_difference(p,t,b)));}float falloff(float distance_squared){float neg_inv_r2=-1.0/(radius_of_influence*radius_of_influence);return distance_squared*neg_inv_r2+1.0;}float ao_contribution(vec3 P,vec3 N,vec3 S){vec3 to_sample=S-P;float norm_squared=dot(to_sample,to_sample);float norm=sqrt(norm_squared);float cos_theta=dot(N,to_sample)/max(norm,1e-4);return clamp(cos_theta-bias,0.0,1.0)*clamp(falloff(norm_squared),0.0,1.0);}float compute_ambient_occlusion(vec2 uv,float radius_in_screen_space,vec3 pc,vec3 view_space_n){vec2 one_over_resolution=1.0/resolution;ivec2 noise_uv=ivec2(gl_FragCoord.xy)&ivec2(127);float noise=texelFetch(texture_blue_noise,noise_uv,0).r;noise=fract(noise+0.61803398875*float(frame_index));float theta=noise*2.0*3.1415;float ct=cos(theta);float st=sin(theta);float step_size=radius_in_screen_space/(num_steps+1.0);const float angle_step=2.0*pi/num_directions;float contribution=0.0;for(int i=0;i<int(num_directions);++i){float current_pixel=step_size+1.0;for(int j=0;j<int(num_steps);++j){int index=i*int(num_steps)+j;vec2 blue_noise_sample=blue_noise_in_disk[index];vec2 disk_point;disk_point.x=blue_noise_sample.x*ct-blue_noise_sample.y*st;disk_point.y=blue_noise_sample.x*st+blue_noise_sample.y*ct;vec2 sample_direction=disk_point;vec2 snapped_uv=round(current_pixel*sample_direction)*one_over_resolution+uv;vec3 ps=get_view_position(snapped_uv);current_pixel+=step_size;contribution+=ao_contribution(pc,view_space_n,ps);}}float mult=1.0/(1.0-bias);contribution*=mult/(num_directions*num_steps);return clamp(1.0-contribution*2.0,0.0,1.0);}
#define USE_GBUFFER_NORMALS
void main(){vec3 view_space_p=get_view_position(v_uv);
#ifdef USE_GBUFFER_NORMALS
vec3 view_space_n=texture(texture_normals,v_uv).rgb;view_space_n.z*=-1.0;
#else
vec3 view_space_n=-rebuild_normal(v_uv,view_space_p);
#endif
float radius_ss=max(radius_in_screen_space/(is_ortho ? 1.0 : view_space_p.z),num_steps+1.0);float ao=compute_ambient_occlusion(v_uv,radius_ss,view_space_p,view_space_n);float final=pow(ao,exponent);if(view_space_p.z>=far){final=1.0;}vec3 color=mix(ao_color,vec3(1.0),final);if(fog_enabled){float fog_linear=smoothstep(fog_near,fog_far,view_space_p.z);vec3 world_p=(camera_world_matrix*vec4(view_space_p.xy,-view_space_p.z,1.0)).xyz;vec3 cam_pos=camera_world_matrix[3].xyz;float fog_height=height_fog_factor(world_p-cam_pos,max(length(world_p-cam_pos),1e-6),cam_pos);float w_linear=1.0-step(0.5,fog_mode)+step(1.5,fog_mode);float w_height=step(0.5,fog_mode);float fog_factor=1.0-(1.0-fog_linear*w_linear)*(1.0-fog_height*w_height);color=mix(color,vec3(1.0),fog_factor);}gl_FragColor=vec4(color,1.0);}`,uniforms:{near:new C(null),far:new C(null),fov:new C(null),proj_info:new C(new N),is_ortho:new C(!1),resolution:new C(new _),radius_of_influence:new C(8),radius_in_screen_space:new C(1),exponent:new C(1),ao_color:new C(new l),bias:new C(.5),texture_depth:new C(null),texture_normals:new C(null),texture_blue_noise:new C(null),frame_index:new C(0),fog_enabled:new C(!1),fog_near:new C(1),fog_far:new C(1e3),fog_mode:new C(0),fog_height_params:new C(new l(.005,.01,0)),camera_world_matrix:new C(new De)}}),this.radius=128,this.aoColor={r:0,g:0,b:0},this.bias=.5,this.hbaoMaterial.uniforms.texture_depth.value=this.gBuffer.depthTexture,this.hbaoMaterial.uniforms.texture_normals.value=this.gBuffer.texture,this.needsSwap=!0,this.aaBuffer=new e(r,i,{minFilter:g,magFilter:g,wrapS:k,wrapT:k,depthBuffer:!1,type:Be})}_ensureEffectPass(){if(this.effectPass)return this.effectPass;let e=new _t({preset:dt.ULTRA,edgeDetectionMode:gt.COLOR});e.addEventListener(`load`,()=>this.onSmaaTexturesLoaded?.()),this.effectPass=new vt(this.camera,e),this._initializeArgs&&this.effectPass.initialize(...this._initializeArgs);let t=this._runHalfRes?.5:1;return this.effectPass.setSize(this._width*t,this._height*t),this.effectPass}initialize(e,t,n){super.initialize(e,t,n),this._initializeArgs=[e,t,n],this.effectPass?.initialize(e,t,n)}setBlueNoiseTexture(e){this.hbaoMaterial.uniforms.texture_blue_noise.value=e}setSize(e,t){this._width=e,this._height=t,this.depthBufferHighRes.setSize(e,t);let n=this._runHalfRes?.5:1,r=e*n,i=t*n;this.gBuffer.setSize(r,i),this.aoBuffer.setSize(r,i),this.hbaoMaterial.uniforms.resolution.value.set(r,i),this.aaBuffer.setSize(r,i),this.effectPass?.setSize(r,i)}get runHalfRes(){return this._runHalfRes}set runHalfRes(e){this._runHalfRes=e,this.setSize(this._width,this._height)}setCamera(e){this.splineCamera=e}setScene(e){this.splineScene=e}setDepthTexture(e){this.depthBufferHighRes.depthTexture=e,ns.uniforms.texture_depth_hrez.value=e,ns.needsUpdate=!0}render(e,t,n){let r=null,i=null,a=null,o=null,s=t=>{e.setViewport(0,0,t.width,t.height)};this.sanitizeViewport&&(r=new N,i=new N,e.getViewport(r),e.getScissor(i),a=e.getScissorTest(),o=e.getRenderTarget(),e.setScissorTest(!1)),this.splineScene.overrideMaterial=ts;let c=this.splineCamera.layers.mask;if(this.splineCamera.layers.set(5),e.setRenderTarget(this.gBuffer),this.sanitizeViewport&&s(this.gBuffer),e.clear(),e.render(this.splineScene,this.splineCamera),this.runHalfRes&&(ts.colorWrite=!1,e.setRenderTarget(this.depthBufferHighRes),this.sanitizeViewport&&s(this.depthBufferHighRes),e.clear(),e.render(this.splineScene,this.splineCamera),ts.colorWrite=!0,e.state.buffers.color.setMask(!0)),this.splineScene.overrideMaterial=null,this.splineCamera.layers.mask=c,this.hbaoMaterial.uniforms.radius_of_influence.value=this.radius,this.hbaoMaterial.uniforms.ao_color.value.set(this.aoColor.r,this.aoColor.g,this.aoColor.b),this.hbaoMaterial.uniforms.bias.value=this.bias,this.hbaoMaterial.uniforms.fog_enabled.value=this.fogEnabled,this.hbaoMaterial.uniforms.fog_near.value=this.fogNear,this.hbaoMaterial.uniforms.fog_far.value=this.fogFar,this.hbaoMaterial.uniforms.fog_mode.value=this.fogMode,this.hbaoMaterial.uniforms.fog_height_params.value.copy(this.fogHeightParams),this.hbaoMaterial.uniforms.camera_world_matrix.value.copy(this.splineCamera.matrixWorld),this.hbaoMaterial.uniforms.frame_index.value=this.frameIndex,this.frameIndex++,this.splineCamera.isPerspectiveCamera){this.hbaoMaterial.uniforms.near.value=this.splineCamera.perspCamera.near,this.hbaoMaterial.uniforms.far.value=this.splineCamera.perspCamera.far;let e=this.splineCamera.perspCamera.projectionMatrix.elements,t=2/e[0],n=2/e[5],r=-(1-e[8])/e[0],i=-(1+e[9])/e[5];this.hbaoMaterial.uniforms.proj_info.value.set(t,n,r,i);let a=this.splineCamera.perspCamera.fov*(Math.PI/180),o=this.hbaoMaterial.uniforms.resolution.value.y/(2*Math.tan(.5*a)),s=.5*this.hbaoMaterial.uniforms.radius_of_influence.value*o;this.hbaoMaterial.uniforms.radius_in_screen_space.value=s,this.hbaoMaterial.uniforms.is_ortho.value=!1}else{this.hbaoMaterial.uniforms.near.value=this.splineCamera.orthoCamera.near,this.hbaoMaterial.uniforms.far.value=this.splineCamera.orthoCamera.far;let e=this.splineCamera.orthoCamera.projectionMatrix.elements,t=2/e[0],n=2/e[5],r=-(1+e[12])/e[0],i=-(1-e[13])/e[5];this.hbaoMaterial.uniforms.proj_info.value.set(t,n,r,i);let a=this.hbaoMaterial.uniforms.resolution.value.y/n*.5,o=this.hbaoMaterial.uniforms.radius_of_influence.value*a;this.hbaoMaterial.uniforms.radius_in_screen_space.value=o,this.hbaoMaterial.uniforms.is_ortho.value=!0}let l=e.aoRenderTarget;if(this.runHalfRes)this.fullscreenMaterial=this.hbaoMaterial,e.setRenderTarget(this.aoBuffer),this.sanitizeViewport&&s(this.aoBuffer),e.clear(),e.render(this.scene,this.camera),this.fullscreenMaterial=ns,ns.uniforms.texture_ao_lrez.value=this.aoBuffer.texture,ns.uniforms.texture_depth_lrez.value=this.gBuffer.depthTexture,ns.uniforms.texture_depth_hrez.value=this.depthBufferHighRes.depthTexture,e.setRenderTarget(l),this.sanitizeViewport&&s(l),e.clear(),e.render(this.scene,this.camera);else{this.fullscreenMaterial=this.hbaoMaterial,e.setRenderTarget(this.aaBuffer),this.sanitizeViewport&&s(this.aaBuffer),e.clear(),e.render(this.scene,this.camera);let t=this._ensureEffectPass();t.renderToScreen=!1,t.render(e,this.aaBuffer,l)}this.sanitizeViewport&&r&&i&&a!==null&&(e.setRenderTarget(o),e.setViewport(r.x,r.y,r.z,r.w),e.setScissor(i.x,i.y,i.z,i.w),e.setScissorTest(a))}dispose(){super.dispose(),this.gBuffer.dispose(),this.depthBufferHighRes.dispose(),this.aoBuffer.dispose(),this.aaBuffer.dispose(),this.effectPass?.dispose(),this.hbaoMaterial.dispose(),this.splineScene=null,this.splineCamera=null}},is=class extends z{constructor(){super(new E({vertexShader:`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D tInput;
uniform sampler2D tMap;
uniform vec2 resolution;
varying vec2 vUv;

uniform vec2 uResolution;
uniform vec2 uCoords;


float rectangle(vec2 st, vec2 size) {
    size = vec2(0.5) - size * 0.5;
    vec2 uv = vec2(step(size.x, st.x), step(size.y, st.y));
    uv *= vec2(step(size.x, 1.0 - st.x), step(size.y, 1.0 - st.y));

    return uv.x * uv.y;
}

uniform vec2 uSize;
uniform float uScale;
uniform float uDPR;
uniform float uCurrent;
uniform vec3 uSceneColor;

void main() {
    vec2 screenUv = gl_FragCoord.xy / uResolution.xy;
    screenUv *= 1.0 / uDPR;

    vec2 center = vec2(0.5, -0.5);
    vec2 outsideUv = screenUv;
    outsideUv += center;
    outsideUv -= uCoords.xy / uResolution.xy;
    outsideUv = (outsideUv - 0.5) + 0.5;
    outsideUv -= center;
    vec2 s = (uSize / uResolution) * uScale;
    float isOutside = 1.0 - rectangle(outsideUv, s);
    
    vec2 mid = vec2(0.5);
    vec2 insideUv = (screenUv - mid + s * mid) / s;
    vec4 background = texture2D(tInput, screenUv);
    vec4 image = texture2D(tMap, insideUv);
    gl_FragColor = mix(image, background, isOutside);
}
`,uniforms:{tInput:new C(null),tMap:new C(null),uResolution:new C(new _),uSize:new C(new _),uCoords:new C(new _),uScale:new C(1),uSceneColor:new C(new b(16711680)),uDPR:new C(1),uCurrent:new C(0)}}),`tInput`),this.needsSwap=!0}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.tMap.value}set texture(e){this.uniforms.tMap.value=e}},as=[],os=class extends z{constructor(){super(new E({vertexShader:`
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D toScene;
uniform sampler2D fromScene;
uniform vec2 resolution;

uniform vec2 uResolution;
uniform float uDPR;

uniform float mixRatio;
uniform sampler2D tMixTexture;
uniform int useTexture;
uniform float threshold;

void main() {
	vec2 screenUv = gl_FragCoord.xy / uResolution.xy;
	screenUv *= 1.0 / uDPR;

	vec4 texel1 = texture2D( fromScene, screenUv );
	vec4 texel2 = texture2D( toScene, screenUv );

	if (useTexture==1) {
		
		vec4 transitionTexel = texture2D( tMixTexture, screenUv );
		float r = mixRatio * (1.0 + threshold * 2.0) - threshold;
		float mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);
		
		gl_FragColor = mix( texel1, texel2, mixf );
	} else {
		
		gl_FragColor = mix( texel1, texel2, mixRatio );
		
	}
}
`,uniforms:{toScene:new C(null),fromScene:new C(null),uResolution:new C(new _),uDPR:new C(1),mixRatio:new C(0),threshold:new C(.1),useTexture:new C(0),tMixTexture:{value:as[0]}}}),`toScene`),this.needsSwap=!0}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.fromScene.value}set texture(e){this.uniforms.fromScene.value=e}},ss=class extends z{constructor(){super(new E({vertexShader:`
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D inputBuffer;
uniform sampler2D blurredInputBuffer;
uniform sampler2D overlay;
uniform float blurIntensity;

uniform vec2 uResolution;
uniform float uDPR;

void main() {
	vec2 screenUv = gl_FragCoord.xy / uResolution.xy;
	screenUv *= 1.0 / uDPR;

	vec4 texel1 = texture2D( overlay, screenUv );
	vec4 texel2 = texture2D( inputBuffer, screenUv );
	vec4 texel3 = texture2D( blurredInputBuffer, screenUv );

	float blurMask2 = max(sign(texel1.a), 0.0) * blurIntensity;
    gl_FragColor = mix( mix(texel2, texel3, blurMask2), texel1, texel1.a );
}
`,uniforms:{inputBuffer:new C(null),blurredInputBuffer:new C(null),overlay:new C(null),uResolution:new C(new _),uDPR:new C(1),blurIntensity:new C(0)}})),this._blurEnabled=!1,this.blurTarget=new e(1,1,{minFilter:g,magFilter:g,wrapS:k,wrapT:k}),this.blurPass=new bt({width:window.innerWidth,height:window.innerHeight,kernelSize:ht.HUGE,resolutionScale:.25}),this.blurPass.renderToScreen=!1,this.uniforms.blurredInputBuffer.value=this.blurTarget.texture}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.overlay.value}set texture(e){this.uniforms.overlay.value=e}setResolution(e,t,n=1){this.uniforms.uResolution.value.set(e,t),this.uniforms.uDPR.value=n,this.blurPass.setSize(e,t),this.blurTarget.setSize(e,t),this.blurPass.setSize(e,t)}get uiCanvas(){return this._uiCanvas}set uiCanvas(e){this._uiCanvas=e,e.texture&&(this.uniforms.overlay.value=e.texture);let t=e.frame;if(t){let e=t.data.backgroundBlur,n=e.radius;this._blurEnabled=e.enabled,this.uniforms.blurIntensity.value=+!!this._blurEnabled,this.blurPass.scale=n/3}}render(e,t,n,r,i){this._blurEnabled&&(this.blurPass.setDepthTexture(this.getDepthTexture()),this.blurPass.render(e,t,this.blurTarget,r,i)),super.render(e,t,n,r,i)}dispose(){super.dispose(),this.blurTarget.dispose(),this.blurPass.dispose(),this.fullscreenMaterial.dispose(),this._uiCanvas=void 0}},cs=class extends z{constructor(){super(new E({vertexShader:`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D tInput;
uniform sampler2D tOverlayImage;
varying vec2 vUv;
uniform vec2 uResolution;
uniform vec2 uRightBottom;
uniform vec2 uImageSize;
uniform float uScale;
uniform float uDPR;

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

vec4 drawFixedSizeImage(sampler2D image, vec2 screenUV, vec2 imageSize, vec2 imageCoords, vec2 screenSize, float dpr) {
	vec2 uv = (screenUV * screenSize * dpr - imageCoords) / (imageSize * dpr);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
		return vec4(0.0);
	}
	return texture2D(image, uv);
}

void main() {
    vec2 screenUV = gl_FragCoord.xy / (uResolution.xy * uDPR);
	vec2 imageCoords = vec2(uResolution.x * uDPR - uImageSize.x * uScale * uDPR - uRightBottom.x * uDPR, uRightBottom.y * uDPR);
    vec4 background = texture2D(tInput, screenUV);
    vec4 image = drawFixedSizeImage(tOverlayImage, screenUV, uImageSize * uScale, imageCoords, uResolution, uDPR);
    gl_FragColor = vec4(blendNormal(background.rgb, image.rgb, image.a), max(background.a, image.a));
}
`,uniforms:{tInput:new C(null),tOverlayImage:new C(null),uResolution:new C(new _),uImageSize:new C(new _),uRightBottom:new C(new _(20,20)),uScale:new C(.25),uDPR:new C(1)}}),`tInput`)}get uniforms(){return this.fullscreenMaterial.uniforms}get texture(){return this.uniforms.tOverlayImage.value}set texture(e){this.uniforms.tOverlayImage.value=e;let t=e.image;this.uniforms.uImageSize.value.set(t.width,t.height)}},ls=class extends z{constructor(){super(new E({vertexShader:`
varying vec2 vUv;
void main() {
	vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
uniform sampler2D inputBuffer;
varying vec2 vUv;

vec3 SrgbToLinear(vec3 color) {
	
	vec3 sRGB = color.rgb;
	color.rgb = sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);
	return color;
}

void main() {
	vec4 texel = texture2D(inputBuffer, vUv);
	texel.rgb = SrgbToLinear(texel.rgb);
    gl_FragColor = texel;
}
`,uniforms:{inputBuffer:new C(null),uResolution:new C(new _),uDPR:new C(1)}}),`inputBuffer`),this.needsSwap=!0}get uniforms(){return this.fullscreenMaterial.uniforms}};function us(e,t){return t&&t.enabled&&e.push(t.effect),e}var ds=e=>Object.values(ft).includes(e)?e:ft.NORMAL,fs=class extends ze{constructor(e,t){super(),this._needsDOFResize=t,this.postprocessingState=Ke.defaultData,this._scene=new ee,this._camera=new st,this.effects=new Map,this.blueNoiseTexture=new Ne,this._renderToScreen=!0,this._isUIOverlayEnabled=!1,this.timer=new fe,this.renderer=e,this.debug=!1;for(let[e,t]of Ct())this.effects.set(e,t());this.effectComposer=new Qo(this.renderer),this.effectComposer.autoRenderToScreen=!1,this.opaquePass=new Zo(!0,this.scene,this.camera),this.opaquePass.clear=!0,this.transmissionPass=new Jo(this.scene,this.camera,this.renderer),this.aoPass=new rs(this.scene,this.camera),this.taaPass=new qo,this.taaPass.renderToScreen=!1,this.helperPass=new es(this.camera),this.helperPass.renderToScreen=!1;let n=()=>{this.dispatchEvent({type:`smaaloaded`})};this.aoPass.onSmaaTexturesLoaded=n,this.helperPass.onSmaaTexturesLoaded=n,this.stylesOverlayPass=new is,this.stylesOverlayPass.enabled=!1,this.uiOverlayPass=new ss,this.uiOverlayPass.enabled=!1,this.logoOverlayPass=new cs,this.logoOverlayPass.enabled=!1,this.sceneTransitionPass=new os,this.sceneTransitionPass.enabled=!1,this.srgbToLinear=new ls,this.srgbToLinear.enabled=!1,this._initCopyPass(),this._initPasses()}set overlayTexture(e){e===void 0?this.stylesOverlayPass.enabled=!1:(this.stylesOverlayPass.texture=e,this.stylesOverlayPass.enabled=!0)}get overlayTexture(){return this.stylesOverlayPass.texture}set sceneHelpers(e){this.helperPass.sceneHelpers=e}get sceneHelpers(){return this.helperPass.sceneHelpers}set sceneHelpersOnTop(e){this.helperPass.sceneHelpersOnTop=e}get sceneHelpersOnTop(){return this.helperPass.sceneHelpersOnTop}get scene(){return this._scene}set scene(e){this._scene=e,this.opaquePass.setScene(e),this.transmissionPass.setScene(e),this.aoPass.setScene(e)}get camera(){return this._camera}set camera(e){let t=this._camera!==e;this._camera=e,this.opaquePass.setCamera(e),this.transmissionPass.setCamera(e),t&&this.transmissionPass.updatePasses(this.renderer),this.aoPass.setCamera(e),this.helperPass.setCamera(e),this.effects.get(`depthOfField`)?.setCamera(e)}updateRenderToScreen(){let e=!1;for(let t=this.effectComposer.passes.length-1;t>=0;t--){let n=this.effectComposer.passes[t];!0!==n.enabled||e||!this._renderToScreen?n.renderToScreen=!1:(n.renderToScreen=!0,e=!0)}}get isUIOverlayEnabled(){return this._isUIOverlayEnabled}disableUIOverlay(){this._isUIOverlayEnabled=!1}enableUIOverlay(){this._isUIOverlayEnabled=!0}disableHelpers(){this.helperPass.enabled=!1,this.updateRenderToScreen()}enableHelpers(){this.helperPass.enabled=!0,this.updateRenderToScreen()}updateBlueNoiseTexture(e){this.blueNoiseTexture=new Ne(e,128,128),this.blueNoiseTexture.wrapS=ne,this.blueNoiseTexture.wrapT=ne,this.blueNoiseTexture.minFilter=Ie,this.blueNoiseTexture.magFilter=Ie,this.blueNoiseTexture.needsUpdate=!0}setAmbientOcclusionParams(e,t,n,r,i,a,o,s,c){this.aoPass.enabled=e,this.aoPass.radius=t,this.aoPass.bias=n,this.aoPass.aoColor=r,this.aoPass.fogEnabled=i,this.aoPass.fogNear=a,this.aoPass.fogFar=o,this.aoPass.fogMode=F.getModeIndex({mode:s.mode}),this.aoPass.fogHeightParams.set(s.density,s.heightFalloff,s.heightBase),this.aoPass.runHalfRes!==!c&&(this.aoPass.runHalfRes=!c)}setTransmissionPassEnabled(e){this.transmissionPass.enabled=e,this.opaquePass.hasTransmissionPass=e}_initPasses(){if(this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.removeAllPasses(),this.transmissionPass.updatePasses(this.renderer),this.effectComposer.addPass(this.aoPass),this.effectComposer.addPass(this.opaquePass),this.effectComposer.addPass(this.transmissionPass),this.effectComposer.addPass(this.taaPass),this.postprocessingState.enabled){let e=[this.effects.get(`pixelation`)].reduce(us,[]);e.length>0&&(this.uvEffectPass=new vt(this.camera,...e),this.uvEffectPass.renderToScreen=!1,this.uvEffectPass.encodeOutput=!1,this.effectComposer.addPass(this.uvEffectPass));let t=[this.effects.get(`chromaticAberration`),this.effects.get(`bloom`),this.effects.get(`depthOfField`),this.effects.get(`colorAverage`),this.effects.get(`hueSaturation`),this.effects.get(`brightnessContrast`),this.effects.get(`vignette`),this.effects.get(`noise`)].reduce(us,[]);if(t.length>0&&(this.effectPass=new vt(this.camera,...t),this.effectPass.renderToScreen=!1,this.effectPass.encodeOutput=!1,this.effectComposer.addPass(this.effectPass),this._needsDOFResize&&this.effects.get(`depthOfField`)?.enabled&&window!==void 0)){let e=this.renderer.viewportWidth,t=this.renderer.viewportHeight;this.renderer.setSize(e-1,t-1),this.renderer.setSize(e,t)}}this.effectComposer.addPass(this.stylesOverlayPass),this.effectComposer.addPass(this.uiOverlayPass),this.effectComposer.addPass(this.sceneTransitionPass),this.effectComposer.addPass(this.helperPass),this.effectComposer.addPass(this.srgbToLinear),this.effectComposer.addPass(this.logoOverlayPass)}_initCopyPass(){if(this._savePass)return;let t=new _;this.renderer.getDrawingBufferSize(t),this._rt=new e(t.x,t.y,{depthBuffer:!1,stencilBuffer:!1,wrapS:ne,wrapT:ne}),this._rt.samples=0,this.renderer.outputColorSpace===`srgb`&&(this._rt.texture.colorSpace=`srgb`),this._savePass=new yt(this._rt,!1),this._savePass.renderToScreen=!1}setCopyPass(e){this._rt=e,this._savePass=new yt(this._rt,!1),this.renderToScreen=!1}get renderToScreen(){return this._renderToScreen}set renderToScreen(e){if(this._renderToScreen===e)return;let t=this.effectComposer;!t||(!0===e?t.removePass(this._savePass):t.addPass(this._savePass),this._renderToScreen=e,this.updateRenderToScreen())}get sceneTransitionFromTexture(){return this.sceneTransitionPass.texture}set sceneTransitionFromTexture(e){e!==this.sceneTransitionPass.texture&&(e===null?(this.sceneTransitionPass.enabled=!1,this.updateRenderToScreen()):this.sceneTransitionPass.enabled=!0,this.sceneTransitionPass.texture=e)}setWatermark(e){this.logoOverlayPass.enabled=e!==null,e&&(this.logoOverlayPass.texture=e)}get texture(){return this._rt&&this._rt.texture}get renderTarget(){return this._rt}updatePostprocessing(e){let{enabled:t,...n}=e,r=!1;t!==this.postprocessingState.enabled&&(r=!0);for(let e of Object.entries(n)){let t=e[1],n=this.effects.get(e[0]);if(!n){let r=Tt(e[0]);r?(n=r(),this.effects.set(e[0],n),e[0]===`depthOfField`&&n.setCamera(this._camera)):t?.enabled&&wt(e[0],`webgl`)}if(n){n.enabled!==t.enabled&&(r=!0),n.enabled=t.enabled;for(let[e,r]of Object.entries(t))e===`blendFunction`?n.blendFunction=ds(r):n[e]=r}}this.postprocessingState=e,r&&this._initPasses()}render(){this.renderer.shadowMap.type===0&&this._normalizeShadowDepthTextures(),this.timer.update(),this.effectComposer.render(this.timer.getDelta())}_normalizeShadowDepthTextures(){this._scene.traverse(e=>{let t=e;if(!t.isLight)return;let n=t.shadow?.map?.depthTexture;n&&n.compareFunction!==null&&(n.compareFunction=null,n.minFilter=1003,n.magFilter=1003,n.needsUpdate=!0)})}setScissor(e,t,n,r){e instanceof N?(this.effectComposer.inputBuffer.scissor.set(e.x,e.y,e.z,e.w),this.effectComposer.outputBuffer.scissor.set(e.x,e.y,e.z,e.w)):(this.effectComposer.inputBuffer.scissor.set(e,t,n,r),this.effectComposer.outputBuffer.scissor.set(e,t,n,r));let i=this.renderer.getPixelRatio();this.effectComposer.inputBuffer.scissor.multiplyScalar(i),this.effectComposer.outputBuffer.scissor.multiplyScalar(i),this.renderer.setScissor(e,t,n,r)}setScissorTest(e){this.effectComposer.inputBuffer.scissorTest=e,this.effectComposer.outputBuffer.scissorTest=e,this.renderer.setScissorTest(e)}setViewport(e,t,n,r){e instanceof N?(this.effectComposer.inputBuffer.viewport.copy(e),this.effectComposer.outputBuffer.viewport.copy(e)):(this.effectComposer.inputBuffer.viewport.set(e,t,n,r),this.effectComposer.outputBuffer.viewport.set(e,t,n,r))}resize(e,t,n){if(this.effectComposer.setSize(e,t,n),this._rt){let n=this.renderer.getPixelRatio();this._rt.setSize(e*n,t*n)}}dispose(){this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.dispose(),this.blueNoiseTexture.dispose(),this._rt?.dispose(),this.effects.forEach(e=>e.dispose()),this.effects.clear(),this._scene=void 0,this._camera=void 0,this.renderer=void 0}},ps=new m,ms=new _,hs=class extends Gi{constructor(e){super(e),this._pixelRatio=this.getPixelRatio(),this.viewportWidth=1,this.viewportHeight=1,this.resolution=new _,this.dummyCamera=new st,this.sceneTransitionDuration=0,this.sceneTransitionTimeRemaining=-1,this.manageShadowUpdates=!1,this.forceShadowUpdates=!1,this.clear=(e=!0,t=!0,n=!0)=>{let r=this.getContext(),i=0;e&&(i|=r.COLOR_BUFFER_BIT),t&&(i|=r.DEPTH_BUFFER_BIT),n&&(i|=r.STENCIL_BUFFER_BIT),r.clear(i),r.clearBufferfv(r.COLOR,1,[0,0,0,1])},(()=>{if(!Go.test(X.lights_pars_begin)){if(X.lights_pars_begin.includes(Wo))return;throw Error(`spe: could not find getDistanceAttenuation in lights_pars_begin — three shader chunk layout changed`)}X.lights_pars_begin=X.lights_pars_begin.replace(Go,Wo)})(),this.pipeline=new fs(this,e?.needsDOFResize??!1),this.autoClear=!1;let t=this.renderBufferDirect;this.renderBufferDirect=(e,n,r,i,a,o)=>{Et(i)&&t.call(this,e,n,r,i.getDepthPrepassTwin(i.side),a,o),t.call(this,e,n,r,i,a,o)};let n=this.setPixelRatio.bind(this),r=this.setSize.bind(this);this.shadowMap.enabled=!0,this.shadowMap.type=0,this.dummyCamera.matrixAutoUpdate=!1,this.domElement.removeAttribute(`data-engine`),this._applyPreferredDrawingBufferColorSpace(),this.setPixelRatio=e=>{this._pixelRatio!==e&&(this._pixelRatio=e,n(e))},this.setSize=(e,t,n=!0)=>{(this.viewportWidth!==e||this.viewportHeight!==t)&&(this.viewportWidth=e,this.viewportHeight=t,r(e,t,n),this.normalRenderTarget?.setSize(e*this._pixelRatio,t*this._pixelRatio),this._resizeTransmission(e,t),this.transmissionDepthTarget?.setSize(e*this._pixelRatio/2,t*this._pixelRatio/2),this.pipeline.resize(e,t,n))},this._superDispose=this.dispose,this.dispose=this._currentDispose}_applyPreferredDrawingBufferColorSpace(){let e=this.getContext();if(e&&`drawingBufferColorSpace`in e)try{e.drawingBufferColorSpace=`display-p3`}catch(e){console.warn(e)}}get outputColorSpace(){return super.outputColorSpace}set outputColorSpace(e){super.outputColorSpace=e,this._applyPreferredDrawingBufferColorSpace()}createAORenderTarget(){this.aoRenderTarget===void 0&&(this.aoRenderTarget=new e(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio,{generateMipmaps:!1,minFilter:1006,magFilter:1006,wrapS:1001,wrapT:1001,depthBuffer:!1}))}_resizeTransmission(e,t){this.transmissionRenderTarget?.setSize(e*this._pixelRatio/(this.hdTransmission?1:2),t*this._pixelRatio/(this.hdTransmission?1:2)),this.aoRenderTarget?.setSize(e*this._pixelRatio/1,t*this._pixelRatio/1)}get hdTransmission(){return Q.transmissionLod.value===1}set hdTransmission(e){Q.transmissionLod.value=!0===e?1:2,this._resizeTransmission(this.viewportWidth,this.viewportHeight)}createTransmissionRenderTarget(){this.transmissionRenderTarget===void 0&&(this.transmissionRenderTarget=new e(this.viewportWidth*this._pixelRatio/(this.hdTransmission?1:2),this.viewportHeight*this._pixelRatio/(this.hdTransmission?1:2),{generateMipmaps:!0,minFilter:1008,magFilter:1006,wrapS:1001,wrapT:1001,depthBuffer:!1}),this.transmissionDepthTarget=new e(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{minFilter:1003,magFilter:1003,depthBuffer:!1}))}createNormalRenderTarget(t){let n=t.outline&&t.cavity?`both`:t.cavity?`normals`:`hash`;this.normalRenderTarget!==void 0&&this.normalRenderTargetFlavor!==n&&(this.normalRenderTarget.depthTexture?.dispose(),this.normalRenderTarget.dispose(),this.normalRenderTarget=void 0),this.normalRenderTarget===void 0&&(this.normalRenderTarget=new e(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio,{count:n===`both`?2:1,generateMipmaps:!1,minFilter:1003,magFilter:1003,type:n===`normals`?1016:1015,depthTexture:new Ee(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio)}),n===`both`&&(this.normalRenderTarget.textures[1].type=1016),this.normalRenderTargetFlavor=n)}renderNormal(e,t,n){if(this.normalRenderTarget){this.setClearColor(0),n.layers.enable(8),n.layers.disable(0),n.layers.disable(3),t.traverseEntity(e=>{e.layers.isEnabled(8)&&(e.copyPreviousMatrix=!1)}),this.setRenderTarget(this.normalRenderTarget),this.clear(),zo.value=n instanceof st?(n.far-n.near)/1e4:1;let r=this.normalRenderTargetFlavor??`hash`;t.overrideMaterial=r===`both`?Uo:r===`normals`?Ho:Vo,this.render(t,n),this.setClearColor(t.bgColor,t.bgColor.a),this.setRenderTarget(null),t.overrideMaterial=e.wireframeState?lt:null,n.layers.enable(0),n.layers.enable(3),t.traverseEntity(e=>{e.layers.isEnabled(8)&&(e.copyPreviousMatrix=!0)})}}renderSplineSceneWithDummyCamera(e,t,n=1){this.dummyCamera.updateCameraState(t.dataPatched),this.dummyCamera.matrix.copy(t.matrixWorld);let r=t.height,i=t.width,a=this.viewportWidth/this.viewportHeight;i<r?i=r*a:r=i/a,this.dummyCamera.setViewplaneSize(i,r);for(let t=0;t<n;t++)this.renderSplineScene(e,this.dummyCamera)}renderSplineScene(e,t,{sceneHelpers:n=this.sceneHelpers,sceneHelpersOnTop:r=this.sceneHelpersOnTop,overrideTransmission:i,overrideNormal:a}={}){jt(this);let o=e instanceof ut?e.activePage:e,s=o.visible;o.visible=!0;let c=o.scene,l=+!Ue.isSoft(o.data.shadow);if(this.shadowMap.type!==l&&(this.shadowMap.type=l,o.traverseEntity(e=>{let t=e;t.isLight&&t.shadow?.map&&(t.shadow.map.dispose(),t.shadow.map=null,t.shadow.needsUpdate=!0)}),c.markShadowsDirty()),this.setClearColor(o.bgColor,o.bgColor.a),o.penumbraSizeArray.forEach((e,t)=>{Q.penumbraSize.value[t]=e}),Q.pixelRatioNode.value=this.getPixelRatio(),this.resolution.x!==0&&this.resolution.y!==0?Q.resolution.value.set(this.resolution.x,this.resolution.y):Q.resolution.value.set(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio),a!==void 0)Q.normalRenderTarget.value=a,Q.normalRenderTargetDepth.value=ps,Q.normalViewRenderTarget.value=ps;else if(c.needsNormal()){let e=c.normalPassNeeds();this.createNormalRenderTarget(e);let n=this.normalRenderTargetFlavor,r=this.normalRenderTarget.textures;Q.normalRenderTarget.value=n===`normals`?ps:r[0],Q.normalRenderTargetDepth.value=this.normalRenderTarget.depthTexture,Q.normalViewRenderTarget.value=n===`both`?r[1]:n===`normals`?r[0]:ps,this.renderNormal(c,o,t)}Ba.spe_fogMode.value=F.getModeIndex({mode:o.fogMode}),Ba.spe_fogHeightParams.value.set(o.fogDensity??F.getDensity({}),o.fogHeightFalloff??F.getHeightFalloff({}),o.fogHeightBase??F.getHeightBase({}));let u=o.data.ao,d=u.occlusion&&!Dt.enabled;if(d&&(this.createAORenderTarget(),Q.aoRenderTarget.value=this.aoRenderTarget.texture),Q.aoEnabled.value=d,this.pipeline.setAmbientOcclusionParams(d,u.radius,u.bias,o.aoColor,o.fog!==null,o.backupFog.near,o.backupFog.far,{mode:o.fogMode??`linear`,density:o.fogDensity??F.getDensity({}),heightFalloff:o.fogHeightFalloff??F.getHeightFalloff({}),heightBase:o.fogHeightBase??F.getHeightBase({})},u.aoFullRes&&!ct),this.pipeline.aoPass.setBlueNoiseTexture(this.pipeline.blueNoiseTexture),this.pipeline.isUIOverlayEnabled&&o.uiCanvas?.enabled&&o.uiCanvas.texture&&o.uiCanvas.texture.image.width>0){let e=this.getSize(ms),t=this.getPixelRatio();(o.uiCanvas.width!==this.viewportWidth||o.uiCanvas.height!==this.viewportHeight||o.uiCanvas.dpr!==t)&&o.uiCanvas.applySize({width:this.viewportWidth,height:this.viewportHeight},t),o.uiCanvas.render(this),this.pipeline.uiOverlayPass.uiCanvas=o.uiCanvas,this.pipeline.uiOverlayPass.enabled=!0,this.pipeline.uiOverlayPass.setResolution(e.x,e.y,t),this.pipeline.updateRenderToScreen()}else this.pipeline.uiOverlayPass.enabled=!1,this.pipeline.updateRenderToScreen();if(this.pipeline.logoOverlayPass.enabled){let e=this.getSize(ms),t=this.getPixelRatio();this.pipeline.logoOverlayPass.uniforms.uResolution.value.set(e.x,e.y),this.pipeline.logoOverlayPass.uniforms.uDPR.value=t}let f=!1;if(i!==void 0)Q.transmissionRenderTarget.value=i,Q.transmissionRenderTargetDepth.value=ps,this.pipeline.setTransmissionPassEnabled(!1);else{let e=c.needsTransmission();e&&(this.transmissionRenderTarget===void 0&&(f=!0),this.createTransmissionRenderTarget(),Q.transmissionRenderTarget.value=this.transmissionRenderTarget.texture,Q.aspectRatio.value=(p=this.viewportWidth)>=(m=this.viewportHeight)?new _(m/p,1):new _(1,p/m),Q.transmissionRenderTargetDepth.value=this.transmissionDepthTarget.texture),this.pipeline.setTransmissionPassEnabled(e)}var p,m;t.layers.enable(3),t.layers.enable(8),t.layers.enable(4),this.pipeline.sceneHelpers=n,this.pipeline.sceneHelpersOnTop=r,this.pipeline.taaPass.enabled=Q.taaEnabled.value,this.pipeline.scene=o,this.pipeline.camera=t,f&&this.pipeline.transmissionPass.updatePasses(this);let h=Ot(o.postprocessing);this.pipeline.postprocessingState!==h&&(this.pipeline.updatePostprocessing(h),!n&&!r&&this.pipeline.disableHelpers()),this.clearAlphaOverride!==void 0&&this.setClearAlpha(this.clearAlphaOverride),c.shapeBlendIntances.forEach(e=>{e.onBeforeShadowPass(this)}),this.manageShadowUpdates&&(this.shadowMap.autoUpdate=!1,(c.shadowsDirty||this.forceShadowUpdates)&&(this.shadowMap.needsUpdate=!0)),o.overrideMaterial=c.wireframeState?lt:null,this.pipeline.render(),this.manageShadowUpdates&&(c.shadowsDirty=!1),Q.taaEnabled.value&&(Q.frameIndex.value=(Q.frameIndex.value+1)%16),t instanceof st&&t.copyHistory(),o.visible=s}renderFromSceneForSceneTransitionPass(e,t,n){this.pipeline.renderToScreen=!1,this.pipeline.renderTarget,this.renderSplineScene(e,t),this.pipeline.sceneTransitionFromTexture=this.pipeline.renderTarget.texture,this.sceneTransitionDuration=n,this.sceneTransitionTimeRemaining=n,this.pipeline.renderToScreen=!0;let r=this.pipeline.sceneTransitionPass.uniforms;r.uDPR.value=window.devicePixelRatio,r.uResolution.value.set(this.domElement.width,this.domElement.height).divideScalar(window.devicePixelRatio)}_currentDispose(){this._superDispose(),this.pipeline.dispose(),this.aoRenderTarget?.dispose(),this.aoRenderTarget=void 0,this.transmissionRenderTarget?.dispose(),this.transmissionRenderTarget=void 0,this.transmissionDepthTarget?.dispose(),this.transmissionDepthTarget=void 0,this.normalRenderTarget?.depthTexture?.dispose(),this.normalRenderTarget?.dispose(),this.normalRenderTarget=void 0,this.normalRenderTargetFlavor=void 0,this.dummyCamera.dispose(),this.dummyCamera=void 0,Q.normalRenderTarget.value=ps,Q.normalRenderTargetDepth.value=ps,Q.normalViewRenderTarget.value=ps,Q.transmissionRenderTarget.value=ps,Q.transmissionRenderTargetDepth.value=ps,Q.aoRenderTarget.value=ps}};export{hs as SplineRenderer,Q as rendererGlobals};