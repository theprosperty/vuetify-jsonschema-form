import{_ as s,a as c}from"./example.2489968e.js";import{e as i}from"./index.c834de78.js";import{_ as d,F as r,q as _,j as n,l as x,s as u,t as f,m as a,G as g}from"./entry.9b03b506.js";import{V as y}from"./VContainer.70b7e2d9.js";import{V as m}from"./scopeId.86498031.js";import"./VSelect.99085b21.js";import"./tag.45a7e3ff.js";const h={computed:{nodeEnv(){return"production"},examplesCategory(){return i.find(t=>t.id===this.$route.params.categoryId)},example(){var t;return(t=this.examplesCategory)==null?void 0:t.examples.find(o=>o.id===this.$route.params.id)}}},v={class:"text-h3 mb-3"};function C(t,o,V,k,B,e){const l=s,p=c;return n(),r(y,{fluid:""},{default:_(()=>[x("h1",v,[u(f(e.example.title)+" ",1),a(m,{icon:"mdi-reply",flat:"",title:"get back to parent page",to:`/${e.examplesCategory.id}`},null,8,["to"]),e.nodeEnv==="development"?(n(),r(m,{key:0,icon:"mdi-package-variant-closed",flat:"",title:"open compiled version",to:`/compiled/${e.examplesCategory.id}/${e.example.id}`},null,8,["to"])):g("",!0)]),a(l,{content:e.example.description},null,8,["content"]),a(p,{example:e.example,v2:e.examplesCategory.id==="v2"},null,8,["example","v2"])]),_:1})}const F=d(h,[["render",C]]);export{F as default};
