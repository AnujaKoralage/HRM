"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[237],{8237:(C,d,s)=>{s.r(d),s.d(d,{ForgotPasswordModule:()=>w});var u=s(6814),a=s(649),r=s(6223),c=s(8613),o=s(5879),l=s(2857);function p(t,m){1&t&&(o.TgZ(0,"div"),o._uU(1,"Email is required."),o.qZA())}function g(t,m){1&t&&(o.TgZ(0,"div"),o._uU(1,"Please, enter valid email address."),o.qZA())}function f(t,m){if(1&t&&(o.TgZ(0,"div",19),o.YNc(1,p,2,0,"div",20),o.YNc(2,g,2,0,"div",20),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.f.email.errors&&e.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",e.f.email.errors&&e.f.email.errors.email)}}function v(t,m){if(1&t&&(o.TgZ(0,"div",19),o._uU(1),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.hij(" ",e.CustomControler," ")}}const Z=[{path:"",component:(()=>{class t{constructor(e){this.storage=e,this.routes=c._,this.form=new r.nJ({email:new r.p4("",[r.kI.required,r.kI.email])})}get f(){return this.form.controls}submit(){this.CustomControler=0,this.storage.Forgotpassword(this.form.value)}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(l.C))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-forgot-password"]],decls:28,vars:6,consts:[[1,"account-page"],[1,"main-wrapper"],[1,"account-content"],[1,"container"],[1,"account-logo"],[3,"routerLink"],["src","assets/img/logo2.png","alt","Company Name"],[1,"account-box"],[1,"account-wrapper"],[1,"account-title"],[1,"account-subtitle"],[3,"formGroup","ngSubmit"],[1,"input-block","mb-3"],["for","",1,"col-form-label"],["type","text","formControlName","email","id","email",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"input-block","mb-3","text-center"],["type","submit",1,"btn","btn-primary","account-btn",3,"disabled"],[1,"account-footer"],[1,"text-danger"],[4,"ngIf"]],template:function(i,n){1&i&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),o._UZ(6,"img",6),o.qZA()(),o.TgZ(7,"div",7)(8,"div",8)(9,"h3",9),o._uU(10,"Forgot Password?"),o.qZA(),o.TgZ(11,"p",10),o._uU(12," Enter your email to get a password reset link "),o.qZA(),o.TgZ(13,"form",11),o.NdJ("ngSubmit",function(){return n.submit()}),o.TgZ(14,"div",12)(15,"label",13),o._uU(16,"Email Address"),o.qZA(),o._UZ(17,"input",14),o.YNc(18,f,3,2,"div",15),o.YNc(19,v,2,1,"div",15),o.qZA(),o.TgZ(20,"div",16)(21,"button",17),o._uU(22,"Reset Password"),o.qZA()(),o.TgZ(23,"div",18)(24,"p"),o._uU(25," Remember your password? "),o.TgZ(26,"a",5),o._uU(27,"Login"),o.qZA()()()()()()()()()()),2&i&&(o.xp6(5),o.Q6J("routerLink","/layout/dashboard/admin"),o.xp6(8),o.Q6J("formGroup",n.form),o.xp6(5),o.Q6J("ngIf",n.f.email.touched&&n.f.email.invalid),o.xp6(1),o.Q6J("ngIf",0!==n.CustomControler),o.xp6(2),o.Q6J("disabled",n.form.invalid),o.xp6(5),o.Q6J("routerLink",n.routes.login))},dependencies:[u.O5,a.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return t})()}];let h=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#r=this.\u0275inj=o.cJS({imports:[a.Bz.forChild(Z),a.Bz]})}return t})(),w=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#r=this.\u0275inj=o.cJS({imports:[u.ez,h,r.u5,r.UX]})}return t})()}}]);