import{_ as i}from"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CS7lgGg_.js";import{d as _,r as d,C as p,a as l,c as f,i as e,f as s,h,I as u,p as g}from"./index-CJrokphj.js";import{g as k,_ as v}from"./generateSVNToken-CDYXTId2.js";import{_ as w}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-BCatY3sB.js";const T=s("p",{class:"mt-16 text-sm"}," Remember, it gets triggered whenever someone clones the SVN repo. ",-1),N={class:"mt-24 text-sm"},D=_({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(a){const t=d(a.tokenData.hostname),n=p(()=>t.value?k(t.value):"");return(r,o)=>{const m=g,c=i;return l(),f(u,null,[e(v,{"token-data":n.value},null,8,["token-data"]),T,e(m,{class:"mt-24",variant:"warning",message:"Don't forget to run the following command after you've added the token:"}),e(c,{class:"mt-16",lang:"bash",code:"svn commit"}),s("p",N,[h(" The source IP address shown in the alert is the DNS server, not the end user. "),e(w,{onHowToUse:o[0]||(o[0]=x=>r.$emit("howToUse"))})])],64)}}});export{D as default};
