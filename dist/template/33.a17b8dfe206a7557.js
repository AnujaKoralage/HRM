"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[33],{7033:(C,u,s)=>{s.r(u),s.d(u,{LoginModule:()=>_});var d=s(6814),l=s(649),i=s(6223),p=s(2389),o=s(5879),m=s(2857);function f(t,a){1&t&&(o.TgZ(0,"div"),o._uU(1,"Email is required."),o.qZA())}function v(t,a){1&t&&(o.TgZ(0,"div"),o._uU(1," Please, enter valid email address. "),o.qZA())}function Z(t,a){if(1&t&&(o.TgZ(0,"div",28),o.YNc(1,f,2,0,"div",29),o.YNc(2,v,2,0,"div",29),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.f.email.errors&&n.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",n.f.email.errors&&n.f.email.errors.email)}}function h(t,a){1&t&&(o.TgZ(0,"div"),o._uU(1," Password is required. "),o.qZA())}function T(t,a){if(1&t&&(o.TgZ(0,"div",28),o.YNc(1,h,2,0,"div",29),o.qZA()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.f.password.errors&&n.f.password.errors.required)}}const g=function(t){return{"is-invalid":t}},b=[{path:"",component:(()=>{class t{get f(){return this.form.controls}constructor(n){this.storage=n,this.routes=p._j,this.Toggledata=!0,this.form=new i.nJ({email:new i.p4("admin@dreamguys.in",[i.kI.required]),password:new i.p4("123456",[i.kI.required])}),this.subscription=this.storage.Loginvalue.subscribe(r=>{0!==r&&(this.CustomControler=r)})}ngOnInit(){this.storage.Checkuser(),localStorage.removeItem("LoginData")}submit(){this.storage.Login(this.form.value)}ngOnDestroy(){this.subscription.unsubscribe()}iconLogle(){this.Toggledata=!this.Toggledata}static#o=this.\u0275fac=function(r){return new(r||t)(o.Y36(m.C))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:41,vars:15,consts:[[1,"account-page"],[1,"main-wrapper"],[1,"account-content"],[1,"btn","btn-primary","apply-btn",3,"routerLink"],[1,"container"],[1,"account-logo"],["href","javascript:void(0);"],["src","assets/img/logo2.png","alt","Company Name"],[1,"account-box"],[1,"account-wrapper"],[1,"account-title"],[1,"account-subtitle"],[3,"formGroup","ngSubmit"],[1,"input-block","mb-3"],["for","",1,"col-form-label"],["type","text","formControlName","email","id","email",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"row"],[1,"col"],[1,"col-auto"],[1,"text-muted",3,"routerLink"],[1,"position-relative","login-page"],["formControlName","password","id","password",1,"form-control",3,"type","ngClass"],["tabindex","0",3,"ngClass","click","keydown.enter"],[1,"input-block","mb-3","text-center"],["type","submit",1,"btn","btn-primary","account-btn",3,"disabled"],[1,"account-footer"],[3,"routerLink"],[1,"text-danger"],[4,"ngIf"]],template:function(r,e){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),o._uU(4,"Apply Job"),o.qZA(),o.TgZ(5,"div",4)(6,"div",5)(7,"a",6),o._UZ(8,"img",7),o.qZA()(),o.TgZ(9,"div",8)(10,"div",9)(11,"h3",10),o._uU(12,"Login"),o.qZA(),o.TgZ(13,"p",11),o._uU(14,"Access to our dashboard"),o.qZA(),o.TgZ(15,"form",12),o.NdJ("ngSubmit",function(){return e.submit()}),o.TgZ(16,"div",13)(17,"label",14),o._uU(18,"Email Address"),o.qZA(),o._UZ(19,"input",15),o.YNc(20,Z,3,2,"div",16),o.qZA(),o.TgZ(21,"div",13)(22,"div",17)(23,"div",18)(24,"label",14),o._uU(25,"Password"),o.qZA()(),o.TgZ(26,"div",19)(27,"a",20),o._uU(28," Forgot password? "),o.qZA()()(),o.TgZ(29,"div",21),o._UZ(30,"input",22),o.TgZ(31,"span",23),o.NdJ("click",function(){return e.iconLogle()})("keydown.enter",function(){return e.iconLogle()}),o.qZA()(),o.YNc(32,T,2,1,"div",16),o.qZA(),o.TgZ(33,"div",24)(34,"button",25),o._uU(35,"Login"),o.qZA()(),o.TgZ(36,"div",26)(37,"p"),o._uU(38,"Don't have an account yet? "),o.TgZ(39,"a",27),o._uU(40,"Register"),o.qZA()()()()()()()()()()),2&r&&(o.xp6(3),o.Q6J("routerLink",e.routes.jobList),o.xp6(12),o.Q6J("formGroup",e.form),o.xp6(4),o.Q6J("ngClass",o.VKq(11,g,e.f.email.touched&&e.f.email.invalid)),o.xp6(1),o.Q6J("ngIf",e.f.email.touched&&e.f.email.invalid),o.xp6(7),o.Q6J("routerLink","/forgot-password"),o.xp6(3),o.Q6J("type",e.Toggledata?"password":"text")("ngClass",o.VKq(13,g,e.f.password.touched&&e.f.password.invalid)),o.xp6(1),o.Q6J("ngClass",!0===e.Toggledata?"fa toggle-password fa-eye-slash":"fa toggle-password fa-eye"),o.xp6(1),o.Q6J("ngIf",e.f.password.touched&&e.f.password.invalid),o.xp6(2),o.Q6J("disabled",e.form.invalid),o.xp6(5),o.Q6J("routerLink","/register"))},dependencies:[d.mk,d.O5,l.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return t})()}];let L=(()=>{class t{static#o=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=o.oAB({type:t});static#e=this.\u0275inj=o.cJS({imports:[l.Bz.forChild(b),l.Bz]})}return t})(),_=(()=>{class t{static#o=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=o.oAB({type:t});static#e=this.\u0275inj=o.cJS({imports:[d.ez,L,i.u5,i.UX]})}return t})()}}]);