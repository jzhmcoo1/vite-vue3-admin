import{d as a,k as e,O as s,N as l,x as n,b as r,c as o,e as t,y as i,P as d,z as u,V as c,Q as m,bu as p,a0 as f,p as g,g as v,h,u as y,M as b,aa as I,bv as w,a9 as x}from"./vendor.02104a40.js";/* empty css              */import{_,b as z,e as C,h as j}from"./index.3831b623.js";const k={class:"login-box"},U={class:"login-logo"},A=(a=>(g("data-v-d2d41128"),a=a(),v(),a))((()=>t("h1",{class:"mb-0 ml-2 text-3xl font-bold"},"Antd Admin",-1))),S=["src"],q=h(" 登录 ");var M=_(a({setup(a){const g=e({loading:!1,captcha:"",formInline:{username:"",password:"",verifyCode:"",captchaId:""}}),v=s(),h=l(),_=z(),M=async()=>{const{id:a,img:e}=await j({width:100,height:50});g.captcha=e,g.formInline.captchaId=a};M();const N=async()=>{const{username:a,password:e,verifyCode:s}=g.formInline;if(""==a.trim()||""==e.trim())return y.warning("用户名或密码不能为空！");if(!s)return y.warning("请输入验证码！");y.loading("登录中...",0),g.loading=!0;try{await _.login(g.formInline).finally((()=>{g.loading=!1,y.destroy()})),y.success("登录成功！"),setTimeout((()=>{var a;return h.replace(null!=(a=v.query.redirect)?a:"/")}))}catch(l){b.error({title:()=>"提示",content:()=>l.message}),M()}};return(a,e)=>{const s=I,l=w,v=n("a-button"),h=x;return r(),o("div",k,[t("div",U,[i(d(C),{name:"logo",size:45}),A]),i(h,{layout:"horizontal",model:d(g).formInline,onSubmit:f(N,["prevent"])},{default:u((()=>[i(l,null,{default:u((()=>[i(s,{value:d(g).formInline.username,"onUpdate:value":e[0]||(e[0]=a=>d(g).formInline.username=a),size:"large",placeholder:"rootadmin"},{prefix:u((()=>[i(d(c),{type:"user"})])),_:1},8,["value"])])),_:1}),i(l,null,{default:u((()=>[i(s,{value:d(g).formInline.password,"onUpdate:value":e[1]||(e[1]=a=>d(g).formInline.password=a),size:"large",type:"password",placeholder:"123456",autocomplete:"new-password"},{prefix:u((()=>[i(d(m),{type:"user"})])),_:1},8,["value"])])),_:1}),i(l,null,{default:u((()=>[i(s,{value:d(g).formInline.verifyCode,"onUpdate:value":e[2]||(e[2]=a=>d(g).formInline.verifyCode=a),placeholder:"验证码",maxlength:4,size:"large"},{prefix:u((()=>[i(d(p))])),suffix:u((()=>[t("img",{src:d(g).captcha,class:"absolute right-0 h-full cursor-pointer",onClick:M},null,8,S)])),_:1},8,["value"])])),_:1}),i(l,null,{default:u((()=>[i(v,{type:"primary","html-type":"submit",size:"large",loading:d(g).loading,block:""},{default:u((()=>[q])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","onSubmit"])])}}}),[["__scopeId","data-v-d2d41128"]]);export{M as default};