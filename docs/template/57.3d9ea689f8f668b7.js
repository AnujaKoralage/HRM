"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[57],{6057:(U,g,r)=>{r.r(g),r.d(g,{DashboardModule:()=>A});var Z=r(6814),d=r(649),u=r(7582),a=r(5879);let o=class l{getScreenHeight(){this.innerHeight=window.innerHeight+"px"}constructor(n,s){this.ngZone=n,this.router=s,window.onresize=()=>{this.ngZone.run(()=>{this.innerHeight=window.innerHeight+"px"})},this.getScreenHeight()}ngOnInit(){this.router.navigateByUrl("/dashboard/admin")}static#a=this.\u0275fac=function(s){return new(s||l)(a.Y36(a.R0b),a.Y36(d.F0))};static#e=this.\u0275cmp=a.Xpm({type:l,selectors:[["app-dashboard"]],decls:2,vars:0,consts:[[1,"page-wrapper"]],template:function(s,t){1&s&&(a.TgZ(0,"div",0),a._UZ(1,"router-outlet"),a.qZA())},dependencies:[d.lC]})};o=(0,u.gn)([(0,a.L6J)("window: resize",["$event"])],o);var c=r(8613),v=r(6903);const h=["chart"],m=[{path:"",component:o,children:[{path:"admin",component:(()=>{class i{constructor(){this.layoutWidth="1",this.routes=c._,this.chartOptions2={series:[{name:"On Leave",data:[120,90,60,90,60,90,120],color:"#ff9b44"},{name:"Working",data:[85,75,57,85,61,75,85],color:"#fc6075"}],chart:{type:"bar",height:350},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},plotOptions:{bar:{horizontal:!1,columnWidth:"70%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["1st","2nd","3rd","4th","5th","6th"]},yaxis:{title:{text:"$ (Employee Count)"}},fill:{opacity:1}},this.chartOptions1={series:[{name:"series1",data:[50,75,50,75,50,75,100],color:"#ff9b44"}],chart:{height:350,type:"line"},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]}}}static#a=this.\u0275fac=function(t){return new(t||i)};static#e=this.\u0275cmp=a.Xpm({type:i,selectors:[["app-admin-dashboard"]],viewQuery:function(t,e){if(1&t&&a.Gf(h,5),2&t){let p;a.iGM(p=a.CRH())&&(e.chart=p.first)}},decls:276,vars:20,consts:[[1,"content",3,"ngClass"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"col-md-8","col-sm-8","col-lg-8","col-xl-4"],[1,"card","dash-widget"],[1,"card-body"],[1,"dash-widget-icon"],[1,"fa-solid","fa-user"],[1,"dash-widget-info"],[1,"fa-solid","fa-hourglass"],[1,"col-md-12"],[1,"col-md-6","text-center"],[1,"card"],[1,"card-title"],["id","chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","legend","fill","stroke","tooltip","xaxis","grid"],[3,"series","chart","xaxis","stroke","dataLabels","grid"],[1,"card-group","m-b-30"],[1,"d-flex","justify-content-between","mb-3"],[1,"d-block"],[1,"text-success"],[1,"mb-3"],[1,"progress","mb-2",2,"height","5px"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-primary",2,"width","70%"],[1,"mb-0"],[1,"text-muted"],[1,"text-danger"],[1,"col-md-12","col-lg-12","col-xl-4","d-flex"],[1,"card","flex-fill","dash-statistics"],[1,"stats-list"],[1,"stats-info"],[1,"progress"],["role","progressbar","aria-valuenow","31","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-primary",2,"width","31%"],["role","progressbar","aria-valuenow","31","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","31%"],["role","progressbar","aria-valuenow","62","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","62%"],["role","progressbar","aria-valuenow","62","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","62%"],["role","progressbar","aria-valuenow","22","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","22%"],[1,"col-md-12","col-lg-6","col-xl-4","d-flex"],[1,"card","flex-fill"],[1,"statistics"],[1,"col-md-6","col-6","text-center"],[1,"stats-box","mb-4"],[1,"progress","mb-4"],["role","progressbar","aria-valuenow","30","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-purple",2,"width","30%"],["role","progressbar","aria-valuenow","18","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","22%"],["role","progressbar","aria-valuenow","12","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","24%"],["role","progressbar","aria-valuenow","14","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","26%"],["role","progressbar","aria-valuenow","14","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","10%"],[1,"fa-regular","fa-circle-dot","text-purple","me-2"],[1,"float-end"],[1,"fa-regular","fa-circle-dot","text-warning","me-2"],[1,"fa-regular","fa-circle-dot","text-success","me-2"],[1,"fa-regular","fa-circle-dot","text-danger","me-2"],[1,"fa-regular","fa-circle-dot","text-info","me-2"],[1,"badge","bg-inverse-danger","ms-2"],[1,"leave-info-box"],[1,"media","align-items-center","d-flex"],[1,"avatar",3,"routerLink"],["alt","","src","assets/img/profiles/avatar-17.jpg"],[1,"media-body","flex-grow-1"],[1,"text-sm","my-0"],[1,"row","align-items-center","mt-3"],[1,"col-6"],[1,"text-sm","text-muted"],[1,"col-6","text-end"],[1,"badge","bg-inverse-danger"],["alt","","src","assets/img/profiles/avatar-18.jpg"],[1,"badge","bg-inverse-success"],[1,"load-more","text-center"],[1,"text-dark"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),a._uU(5,"Welcome Admin!"),a.qZA(),a.TgZ(6,"ul",5)(7,"li",6),a._uU(8,"Dashboard"),a.qZA()()()()(),a.TgZ(9,"div",2)(10,"div",7)(11,"div",8)(12,"div",9)(13,"span",10),a._UZ(14,"i",11),a.qZA(),a.TgZ(15,"div",12)(16,"h3"),a._uU(17,"218"),a.qZA(),a.TgZ(18,"span"),a._uU(19,"Employees"),a.qZA()()()()(),a.TgZ(20,"div",7)(21,"div",8)(22,"div",9)(23,"span",10),a._UZ(24,"i",11),a.qZA(),a.TgZ(25,"div",12)(26,"h3"),a._uU(27,"12"),a.qZA(),a.TgZ(28,"span"),a._uU(29,"On Leave Employees"),a.qZA()()()()(),a.TgZ(30,"div",7)(31,"div",8)(32,"div",9)(33,"span",10),a._UZ(34,"i",13),a.qZA(),a.TgZ(35,"div",12)(36,"h3"),a._uU(37,"44"),a.qZA(),a.TgZ(38,"span"),a._uU(39,"Total OT Hours"),a.qZA()()()()()(),a.TgZ(40,"div",2)(41,"div",14)(42,"div",2)(43,"div",15)(44,"div",16)(45,"div",9)(46,"h3",17),a._uU(47,"Attendance Report"),a.qZA(),a.TgZ(48,"div",18),a._UZ(49,"apx-chart",19),a.qZA()()()(),a.TgZ(50,"div",15)(51,"div",16)(52,"div",9)(53,"h3",17),a._uU(54,"OT Overview"),a.qZA(),a.TgZ(55,"div",18),a._UZ(56,"apx-chart",20),a.qZA()()()()()()(),a.TgZ(57,"div",2)(58,"div",14)(59,"div",21)(60,"div",16)(61,"div",9)(62,"div",22)(63,"div")(64,"span",23),a._uU(65,"New Employees"),a.qZA()(),a.TgZ(66,"div")(67,"span",24),a._uU(68,"+10%"),a.qZA()()(),a.TgZ(69,"h3",25),a._uU(70,"10"),a.qZA(),a.TgZ(71,"div",26),a._UZ(72,"div",27),a.qZA(),a.TgZ(73,"p",28),a._uU(74,"Overall Employees 218"),a.qZA()()(),a.TgZ(75,"div",16)(76,"div",9)(77,"div",22)(78,"div")(79,"span",23),a._uU(80,"EPF"),a.qZA()(),a.TgZ(81,"div")(82,"span",24),a._uU(83,"+12.5%"),a.qZA()()(),a.TgZ(84,"h3",25),a._uU(85,"$1,42,300"),a.qZA(),a.TgZ(86,"div",26),a._UZ(87,"div",27),a.qZA(),a.TgZ(88,"p",28),a._uU(89,"Previous Month "),a.TgZ(90,"span",29),a._uU(91,"$1,15,852"),a.qZA()()()(),a.TgZ(92,"div",16)(93,"div",9)(94,"div",22)(95,"div")(96,"span",23),a._uU(97,"ETF"),a.qZA()(),a.TgZ(98,"div")(99,"span",24),a._uU(100,"+2.8%"),a.qZA()()(),a.TgZ(101,"h3",25),a._uU(102,"$8,500"),a.qZA(),a.TgZ(103,"div",26),a._UZ(104,"div",27),a.qZA(),a.TgZ(105,"p",28),a._uU(106,"Previous Month "),a.TgZ(107,"span",29),a._uU(108,"$9,500"),a.qZA()()()(),a.TgZ(109,"div",16)(110,"div",9)(111,"div",22)(112,"div")(113,"span",23),a._uU(114,"TAX"),a.qZA()(),a.TgZ(115,"div")(116,"span",30),a._uU(117,"+75%"),a.qZA()()(),a.TgZ(118,"h3",25),a._uU(119,"$1,42,000"),a.qZA(),a.TgZ(120,"div",26),a._UZ(121,"div",27),a.qZA(),a.TgZ(122,"p",28),a._uU(123,"Previous Month "),a.TgZ(124,"span",29),a._uU(125,"$1,12,000"),a.qZA()()()()()()(),a.TgZ(126,"div",2)(127,"div",31)(128,"div",32)(129,"div",9)(130,"h5",17),a._uU(131,"Statistics"),a.qZA(),a.TgZ(132,"div",33)(133,"div",34)(134,"p"),a._uU(135,"Today Leave "),a.TgZ(136,"strong"),a._uU(137,"4 "),a.TgZ(138,"small"),a._uU(139,"/ 65"),a.qZA()()(),a.TgZ(140,"div",35),a._UZ(141,"div",36),a.qZA()(),a.TgZ(142,"div",34)(143,"p"),a._uU(144,"Pending Salary Payments "),a.TgZ(145,"strong"),a._uU(146,"15 "),a.TgZ(147,"small"),a._uU(148,"/ 92"),a.qZA()()(),a.TgZ(149,"div",35),a._UZ(150,"div",37),a.qZA()(),a.TgZ(151,"div",34)(152,"p"),a._uU(153,"Completed Salary Payments "),a.TgZ(154,"strong"),a._uU(155,"85 "),a.TgZ(156,"small"),a._uU(157,"/ 112"),a.qZA()()(),a.TgZ(158,"div",35),a._UZ(159,"div",38),a.qZA()(),a.TgZ(160,"div",34)(161,"p"),a._uU(162,"Pending Attendance "),a.TgZ(163,"strong"),a._uU(164,"190 "),a.TgZ(165,"small"),a._uU(166,"/ 212"),a.qZA()()(),a.TgZ(167,"div",35),a._UZ(168,"div",39),a.qZA()(),a.TgZ(169,"div",34)(170,"p"),a._uU(171,"Approval Pending Attendance "),a.TgZ(172,"strong"),a._uU(173,"22 "),a.TgZ(174,"small"),a._uU(175,"/ 212"),a.qZA()()(),a.TgZ(176,"div",35),a._UZ(177,"div",40),a.qZA()()()()()(),a.TgZ(178,"div",41)(179,"div",42)(180,"div",9)(181,"h4",17),a._uU(182,"Attendance Statistics"),a.qZA(),a.TgZ(183,"div",43)(184,"div",2)(185,"div",44)(186,"div",45)(187,"p"),a._uU(188,"Total Attendance"),a.qZA(),a.TgZ(189,"h3"),a._uU(190,"385"),a.qZA()()(),a.TgZ(191,"div",44)(192,"div",45)(193,"p"),a._uU(194,"Overdue Time"),a.qZA(),a.TgZ(195,"h3"),a._uU(196,"19"),a.qZA()()()()(),a.TgZ(197,"div",46)(198,"div",47),a._uU(199,"30%"),a.qZA(),a.TgZ(200,"div",48),a._uU(201,"22%"),a.qZA(),a.TgZ(202,"div",49),a._uU(203,"24%"),a.qZA(),a.TgZ(204,"div",50),a._uU(205,"21%"),a.qZA(),a.TgZ(206,"div",51),a._uU(207,"10%"),a.qZA()(),a.TgZ(208,"div")(209,"p"),a._UZ(210,"i",52),a._uU(211,"Completed Attendance "),a.TgZ(212,"span",53),a._uU(213,"166"),a.qZA()(),a.TgZ(214,"p"),a._UZ(215,"i",54),a._uU(216,"Pending Approval Attendance "),a.TgZ(217,"span",53),a._uU(218,"115"),a.qZA()(),a.TgZ(219,"p"),a._UZ(220,"i",55),a._uU(221,"Rejected Attendance "),a.TgZ(222,"span",53),a._uU(223,"31"),a.qZA()(),a.TgZ(224,"p"),a._UZ(225,"i",56),a._uU(226,"Pending Attendance "),a.TgZ(227,"span",53),a._uU(228,"47"),a.qZA()(),a.TgZ(229,"p",28),a._UZ(230,"i",57),a._uU(231,"Review Attendance "),a.TgZ(232,"span",53),a._uU(233,"5"),a.qZA()()()()()(),a.TgZ(234,"div",41)(235,"div",42)(236,"div",9)(237,"h4",17),a._uU(238,"Today Absent "),a.TgZ(239,"span",58),a._uU(240,"5"),a.qZA()(),a.TgZ(241,"div",59)(242,"div",60)(243,"a",61),a._UZ(244,"img",62),a.qZA(),a.TgZ(245,"div",63)(246,"div",64),a._uU(247,"Martin Lewis"),a.qZA()()(),a.TgZ(248,"div",65)(249,"div",66)(250,"h6",28),a._uU(251,"4 Sep 2023"),a.qZA(),a.TgZ(252,"span",67),a._uU(253,"Leave Date"),a.qZA()(),a.TgZ(254,"div",68)(255,"span",69),a._uU(256,"Pending"),a.qZA()()()(),a.TgZ(257,"div",59)(258,"div",60)(259,"a",61),a._UZ(260,"img",70),a.qZA(),a.TgZ(261,"div",63)(262,"div",64),a._uU(263,"Martin Lewis"),a.qZA()()(),a.TgZ(264,"div",65)(265,"div",66)(266,"h6",28),a._uU(267,"4 Sep 2023"),a.qZA(),a.TgZ(268,"span",67),a._uU(269,"Leave Date"),a.qZA()(),a.TgZ(270,"div",68)(271,"span",71),a._uU(272,"Approved"),a.qZA()()()(),a.TgZ(273,"div",72)(274,"a",73),a._uU(275,"Load More"),a.qZA()()()()()()()),2&t&&(a.Q6J("ngClass","2"===e.layoutWidth?"container":"container-fluid"),a.xp6(49),a.Q6J("series",e.chartOptions2.series)("chart",e.chartOptions2.chart)("dataLabels",e.chartOptions2.dataLabels)("plotOptions",e.chartOptions2.plotOptions)("yaxis",e.chartOptions2.yaxis)("legend",e.chartOptions2.legend)("fill",e.chartOptions2.fill)("stroke",e.chartOptions2.stroke)("tooltip",e.chartOptions2.tooltip)("xaxis",e.chartOptions2.xaxis)("grid",e.chartOptions2.grid),a.xp6(7),a.Q6J("series",e.chartOptions1.series)("chart",e.chartOptions1.chart)("xaxis",e.chartOptions1.xaxis)("stroke",e.chartOptions1.stroke)("dataLabels",e.chartOptions1.dataLabels)("grid",e.chartOptions1.grid),a.xp6(187),a.Q6J("routerLink",e.routes.employeeProfile),a.xp6(16),a.Q6J("routerLink",e.routes.employeeProfile))},dependencies:[Z.mk,d.rH,v.x],styles:[".content[_ngcontent-%COMP%]{padding:30px}"]})}return i})()},{path:"employee",component:(()=>{class i{static#a=this.\u0275fac=function(t){return new(t||i)};static#e=this.\u0275cmp=a.Xpm({type:i,selectors:[["app-employee-dashboard"]],decls:96,vars:0,consts:[[1,"content","container-fluid"],[1,"row"],[1,"col-md-12"],[1,"welcome-box"],[1,"welcome-img"],["alt","","src","assets/img/profiles/avatar-2.jpg"],[1,"welcome-det"],[1,"col-lg-4","col-md-4"],[1,"dash-title"],[1,"card"],[1,"card-body"],[1,"time-list"],[1,"dash-stats-list"],[1,"request-btn"],[1,"btn","btn-primary"],[1,"col-lg-12","col-md-12"],[1,"dash-section"],[1,"dash-sec-title"],[1,"dash-sec-content"],[1,"dash-info-list"],["href","",1,"dash-card"],[1,"dash-card-container"],[1,"dash-card-icon"],[1,"fa-regular","fa-calendar-days"],[1,"dash-card-content"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),a._UZ(5,"img",5),a.qZA(),a.TgZ(6,"div",6)(7,"h3"),a._uU(8,"Welcome, John Doe"),a.qZA(),a.TgZ(9,"p"),a._uU(10,"Monday, 20 May 2023"),a.qZA()()()()(),a.TgZ(11,"div",1),a._UZ(12,"div",1),a.TgZ(13,"div",7)(14,"section")(15,"h5",8),a._uU(16,"Your Leave"),a.qZA(),a.TgZ(17,"div",9)(18,"div",10)(19,"div",11)(20,"div",12)(21,"h4"),a._uU(22,"4.5"),a.qZA(),a.TgZ(23,"p"),a._uU(24,"Leave Taken"),a.qZA()(),a.TgZ(25,"div",12)(26,"h4"),a._uU(27,"12"),a.qZA(),a.TgZ(28,"p"),a._uU(29,"Remaining"),a.qZA()()(),a.TgZ(30,"div",13)(31,"a",14),a._uU(32,"Apply Leave"),a.qZA()()()()()(),a.TgZ(33,"div",7)(34,"section")(35,"h5",8),a._uU(36,"Your time off allowance"),a.qZA(),a.TgZ(37,"div",9)(38,"div",10)(39,"div",11)(40,"div",12)(41,"h4"),a._uU(42,"5.0 Hours"),a.qZA(),a.TgZ(43,"p"),a._uU(44,"Approved"),a.qZA()(),a.TgZ(45,"div",12)(46,"h4"),a._uU(47,"15 Hours"),a.qZA(),a.TgZ(48,"p"),a._uU(49,"Remaining"),a.qZA()()(),a.TgZ(50,"div",13)(51,"a",14),a._uU(52,"Apply Time Off"),a.qZA()()()()()(),a.TgZ(53,"div",7)(54,"section")(55,"h5",8),a._uU(56,"Your over time allowance"),a.qZA(),a.TgZ(57,"div",9)(58,"div",10)(59,"div",11)(60,"div",12)(61,"h4"),a._uU(62,"5.0 Hours"),a.qZA(),a.TgZ(63,"p"),a._uU(64,"Approved"),a.qZA()(),a.TgZ(65,"div",12)(66,"h4"),a._uU(67,"15 Hours"),a.qZA(),a.TgZ(68,"p"),a._uU(69,"Remaining"),a.qZA()()(),a.TgZ(70,"div",13)(71,"a",14),a._uU(72,"Apply Over Time"),a.qZA()()()()()()(),a.TgZ(73,"div",1)(74,"div",15)(75,"section",16)(76,"h1",17),a._uU(77,"Upcoming Holiday"),a.qZA(),a.TgZ(78,"div",18)(79,"div",19)(80,"a",20)(81,"div",21)(82,"div",22),a._UZ(83,"i",23),a.qZA(),a.TgZ(84,"div",24)(85,"p"),a._uU(86,"It's Spring Bank Holiday on Monday"),a.qZA()()()()()(),a.TgZ(87,"div",18)(88,"div",19)(89,"a",20)(90,"div",21)(91,"div",22),a._UZ(92,"i",23),a.qZA(),a.TgZ(93,"div",24)(94,"p"),a._uU(95,"It's Spring Bank Holiday on Monday"),a.qZA()()()()()()()()()())},styles:[".content[_ngcontent-%COMP%]{padding:30px}"]})}return i})()}]}];let T=(()=>{class i{static#a=this.\u0275fac=function(t){return new(t||i)};static#e=this.\u0275mod=a.oAB({type:i});static#i=this.\u0275inj=a.cJS({imports:[d.Bz.forChild(m),d.Bz]})}return i})(),A=(()=>{class i{static#a=this.\u0275fac=function(t){return new(t||i)};static#e=this.\u0275mod=a.oAB({type:i});static#i=this.\u0275inj=a.cJS({imports:[Z.ez,T,v.X]})}return i})()}}]);