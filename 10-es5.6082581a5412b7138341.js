!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8anJ":function(n,r,h){"use strict";h.r(r),h.d(r,"GeneralPagesModule",(function(){return f}));var o=h("ofXK"),d=h("3Pt+"),i=h("fXoL"),e=h("tk/3");function s(a,t){if(1&a&&(i.Pb(0,"option"),i.xc(1),i.Ob()),2&a){var n=t.$implicit;i.xb(1),i.zc("",n," ")}}function u(a,t){if(1&a&&(i.Pb(0,"option"),i.xc(1),i.Ob()),2&a){var n=t.$implicit;i.xb(1),i.zc("",n," ")}}var m,c,l=((m=function(){function n(t){a(this,n),this.http=t,this.masterData=[],this.cropList=[],this.showCrop=["Potato","Wheat","Rice"],this.yearPeriod=["2020","2021"],this.uniqueCropList=[],this.filterData=[],this.potatoData2020=[],this.wheatData2020=[],this.riceData2020=[],this.potatoData2021=[],this.wheatData2021=[],this.riceData2021=[],this.transData=[]}var r,h,o;return r=n,(h=[{key:"ngOnInit",value:function(){var a=this;this.searchForm=new d.d({cropName:new d.b("Potato",d.o.required),timePeriod:new d.b("2020")}),this.getJSON().subscribe((function(t){console.log("Crop data: "+t.length),a.masterData=t;for(var n=0;n<1e3;++n)a.cropList.push(a.masterData[n].Crop);a.uniqueCropList=[],a.uniqueCropList=a.cropList.filter(a.onlyUnique),a.showData()}))}},{key:"showData",value:function(){console.log("searchForm: "+JSON.stringify(this.searchForm.value));var a=this.searchForm.value.cropName,t=this.searchForm.value.timePeriod;this.potatoData2020=[["madhya pradesh",Math.round(20*Math.random())],["uttar pradesh",1],["karnataka",2],["nagaland",3],["bihar",4],["lakshadweep",5],["andaman and nicobar",6],["assam",14],["west bengal",8],["puducherry",Math.round(20*Math.random())],["daman and diu",10],["gujarat",Math.round(20*Math.random())],["rajasthan",12],["dadara and nagar havelli",13],["chhattisgarh",14],["tamil nadu",15],["chandigarh",Math.round(20*Math.random())],["punjab",17],["haryana",18],["andhra pradesh",19],["maharashtra",20],["himachal pradesh",21],["meghalaya",Math.round(20*Math.random())],["kerala",23],["telangana",40],["mizoram",24],["tripura",31],["manipur",6],["arunanchal pradesh",28],["jharkhand",Math.round(20*Math.random())],["goa",12],["nct of delhi",31],["odisha",56],["jammu and kashmir",12],["sikkim",10],["uttarakhand",Math.round(20*Math.random())]],this.wheatData2020=[["madhya pradesh",15],["uttar pradesh",5],["karnataka",Math.round(20*Math.random())],["nagaland",3],["bihar",4],["lakshadweep",Math.round(35*Math.random())],["andaman and nicobar",6],["assam",7],["west bengal",8],["puducherry",Math.round(20*Math.random())],["daman and diu",10],["gujarat",11],["rajasthan",12],["dadara and nagar havelli",13],["chhattisgarh",14],["tamil nadu",Math.round(30*Math.random())],["chandigarh",Math.round(20*Math.random())],["punjab",17],["haryana",18],["andhra pradesh",19],["maharashtra",27],["himachal pradesh",Math.round(20*Math.random())],["meghalaya",22],["kerala",23],["telangana",24],["mizoram",15],["tripura",Math.round(20*Math.random())],["manipur",27],["arunanchal pradesh",28],["jharkhand",29],["goa",30],["nct of delhi",Math.round(20*Math.random())],["odisha",32],["jammu and kashmir",33],["sikkim",Math.round(20*Math.random())],["uttarakhand",35]],this.riceData2020=[["madhya pradesh",Math.round(20*Math.random())],["uttar pradesh",Math.round(20*Math.random())],["karnataka",2],["nagaland",13],["bihar",4],["lakshadweep",Math.round(20*Math.random())],["andaman and nicobar",6],["assam",14],["west bengal",28],["puducherry",Math.round(20*Math.random())],["daman and diu",10],["gujarat",Math.round(20*Math.random())],["rajasthan",Math.round(20*Math.random())],["dadara and nagar havelli",13],["chhattisgarh",33],["tamil nadu",15],["chandigarh",Math.round(20*Math.random())],["punjab",Math.round(20*Math.random())],["haryana",18],["andhra pradesh",Math.round(20*Math.random())],["maharashtra",20],["himachal pradesh",21],["meghalaya",Math.round(20*Math.random())],["kerala",23],["telangana",40],["mizoram",24],["tripura",15],["manipur",15],["arunanchal pradesh",28],["jharkhand",Math.round(20*Math.random())],["goa",21],["nct of delhi",15],["odisha",21],["jammu and kashmir",24],["sikkim",18],["uttarakhand",Math.round(20*Math.random())]],this.potatoData2021=[["madhya pradesh",Math.round(20*Math.random())],["uttar pradesh",Math.round(20*Math.random())],["karnataka",28],["nagaland",14],["bihar",4],["lakshadweep",Math.round(20*Math.random())],["andaman and nicobar",6],["assam",4],["west bengal",28],["puducherry",Math.round(20*Math.random())],["daman and diu",10],["gujarat",Math.round(20*Math.random())],["rajasthan",Math.round(20*Math.random())],["dadara and nagar havelli",24],["chhattisgarh",8],["tamil nadu",24],["chandigarh",Math.round(20*Math.random())],["punjab",Math.round(50*Math.random())],["haryana",12],["andhra pradesh",Math.round(20*Math.random())],["maharashtra",Math.round(20*Math.random())],["himachal pradesh",21],["meghalaya",Math.round(20*Math.random())],["kerala",28],["telangana",40],["mizoram",24],["tripura",12],["manipur",Math.round(20*Math.random())],["arunanchal pradesh",28],["jharkhand",Math.round(20*Math.random())],["goa",22],["nct of delhi",15],["odisha",21],["jammu and kashmir",5],["sikkim",8],["uttarakhand",Math.round(20*Math.random())]],this.wheatData2021=[["madhya pradesh",15],["uttar pradesh",5],["karnataka",Math.round(20*Math.random())],["nagaland",3],["bihar",4],["lakshadweep",Math.round(20*Math.random())],["andaman and nicobar",6],["assam",17],["west bengal",8],["puducherry",Math.round(23*Math.random())],["daman and diu",12],["gujarat",11],["rajasthan",12],["dadara and nagar havelli",13],["chhattisgarh",14],["tamil nadu",Math.round(30*Math.random())],["chandigarh",Math.round(20*Math.random())],["punjab",17],["haryana",19],["andhra pradesh",19],["maharashtra",30],["himachal pradesh",Math.round(20*Math.random())],["meghalaya",22],["kerala",15],["telangana",24],["mizoram",15],["tripura",Math.round(30*Math.random())],["manipur",27],["arunanchal pradesh",28],["jharkhand",9],["goa",18],["nct of delhi",Math.round(20*Math.random())],["odisha",23],["jammu and kashmir",33],["sikkim",Math.round(20*Math.random())],["uttarakhand",Math.round(30*Math.random())]],this.riceData2021=[["madhya pradesh",Math.round(20*Math.random())],["uttar pradesh",16],["karnataka",22],["nagaland",3],["bihar",14],["lakshadweep",15],["andaman and nicobar",6],["assam",14],["west bengal",8],["puducherry",Math.round(20*Math.random())],["daman and diu",10],["gujarat",Math.round(20*Math.random())],["rajasthan",12],["dadara and nagar havelli",13],["chhattisgarh",24],["tamil nadu",15],["chandigarh",Math.round(20*Math.random())],["punjab",17],["haryana",18],["andhra pradesh",19],["maharashtra",20],["himachal pradesh",21],["meghalaya",Math.round(20*Math.random())],["kerala",23],["telangana",14],["mizoram",24],["tripura",16],["manipur",6],["arunanchal pradesh",28],["jharkhand",Math.round(20*Math.random())],["goa",12],["nct of delhi",15],["odisha",22],["jammu and kashmir",12],["sikkim",10],["uttarakhand",Math.round(20*Math.random())]],"Potato"==a&&"2021"==t?this.potatoData2021:"Wheat"==a&&"2021"==t?this.wheatData2021:"Rice"==a&&"2021"==t?this.riceData2021:"Potato"==a&&"2020"==t?this.potatoData2020:"Wheat"==a&&"2020"==t?this.wheatData2020:"Rice"==a&&"2020"==t&&this.riceData2020}},{key:"submit",value:function(a){var t=!1,n=!1;this.transData=[],console.log("In submit"),this.filterData=this.masterData.filter((function(t){return t.Crop===a})),console.log("Filter Data: "+this.filterData.length+" "+JSON.stringify(this.filterData));for(var r=0;r<15;++r)if(this.filterData[r]){var h=this.filterData[r].Year,o=this.filterData[r].State,d=this.filterData[r].Production;if(console.log("Transformed data: "+this.transData.length+" "+JSON.stringify(this.transData)),console.log(h+" "+o+" "+d),this.transData.length<1){var i={year:h,data:[{state:o,produce:parseInt(d)}]};this.transData.push(i);continue}for(var e=0;e<this.transData.length;++e)if(n=!1,console.log(this.transData[e].year+"  "+h),this.transData[e].year!==h);else{console.log("Year found"),n=!0;for(var s=0;s<this.transData[e].data.length;++s)if(t=!1,this.transData[e].data[s].state===o){this.transData[e].data[s].produce=parseInt(this.transData[e].data[s].produce)+parseInt(d),t=!0;break}t||this.transData[e].data.push({state:o,produce:parseInt(d)})}if(!n){var u={year:h,data:[{state:o,produce:parseInt(d)}]};this.transData.push(u)}}}},{key:"getJSON",value:function(){return this.http.get("./assets/crop_data.json")}},{key:"onlyUnique",value:function(a,t,n){return n.indexOf(a)===t}}])&&t(r.prototype,h),o&&t(r,o),n}()).\u0275fac=function(a){return new(a||m)(i.Kb(e.a))},m.\u0275cmp=i.Eb({type:m,selectors:[["app-blank-page"]],decls:41,vars:3,consts:[["id","container",1,"wrap","left",2,"width","100%","height","90%"],[1,"wrap","left",2,"width","40%","height","500px"],[1,"forms-sample",3,"formGroup"],[1,"form-group"],[1,"col-sm-9"],["formControlName","cropName",1,"form-control"],[4,"ngFor","ngForOf"],["formControlName","timePeriod",1,"form-control"],["type","submit",1,"btn","btn-gradient-primary","mr-2",3,"click"]],template:function(a,t){1&a&&(i.xc(0,"  \n  "),i.Lb(1,"div",0),i.xc(2,"\n\n  "),i.Pb(3,"div",1),i.xc(4,"\n    "),i.Pb(5,"form",2),i.xc(6,"\n            \n      "),i.Pb(7,"div",3),i.xc(8,"\n\n        "),i.Pb(9,"label"),i.xc(10,"Crop name*"),i.Ob(),i.xc(11,"\n        "),i.Pb(12,"div",4),i.xc(13,"\n          "),i.Pb(14,"select",5),i.xc(15,"\n            "),i.vc(16,s,2,1,"option",6),i.xc(17,"\n          "),i.Ob(),i.xc(18,"\n        "),i.Ob(),i.xc(19,"\n      "),i.Ob(),i.xc(20,"\n\n      "),i.Pb(21,"div",3),i.xc(22,"\n        "),i.Pb(23,"label"),i.xc(24,"Time Period *"),i.Ob(),i.xc(25,"\n        "),i.Pb(26,"div",4),i.xc(27,"\n          "),i.Pb(28,"select",7),i.xc(29,"\n            "),i.vc(30,u,2,1,"option",6),i.xc(31,"\n          "),i.Ob(),i.xc(32,"\n        "),i.Ob(),i.xc(33,"\n      "),i.Ob(),i.xc(34,"\n\n      "),i.Pb(35,"button",8),i.ac("click",(function(){return t.showData()})),i.xc(36,"Visualize"),i.Ob(),i.xc(37,"\n\n      "),i.xc(38,"\n    "),i.Ob(),i.xc(39,"\n  "),i.Ob(),i.xc(40,"\n\n")),2&a&&(i.xb(5),i.hc("formGroup",t.searchForm),i.xb(11),i.hc("ngForOf",t.showCrop),i.xb(14),i.hc("ngForOf",t.yearPeriod))},directives:[d.q,d.j,d.e,d.n,d.i,d.c,o.j,d.k,d.p],styles:["#container[_ngcontent-%COMP%]{height:500px;min-width:310px;max-width:800px;margin:0 auto}.loading[_ngcontent-%COMP%]{margin-top:10em;text-align:center;color:grey}.wrap[_ngcontent-%COMP%]{position:relative;margin:5px;border:1px solid #000}.left[_ngcontent-%COMP%]{float:left;background-color:hsla(0,0%,80%,.8);margin-right:48px;padding-left:50px;padding-top:50px}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{background-color:#fff}.right[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:35px;height:48px}"]}),m),p=h("tyNb"),M=h("1kSV"),g=[{path:"maps",component:l}],f=((c=function t(){a(this,t)}).\u0275mod=i.Ib({type:c}),c.\u0275inj=i.Hb({factory:function(a){return new(a||c)},imports:[[o.b,d.f,d.m,p.h.forChild(g),M.h]]}),c)}}])}();