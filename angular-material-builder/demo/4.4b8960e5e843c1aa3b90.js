(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{sqCO:function(t,e,n){"use strict";n.r(e),n.d(e,"TableModule",function(){return v});var a=n("ofXK");const o=window.prettier;function l(t,e){const n=t.find(t=>t.label===e);return!!n&&n.value}var r=n("fXoL"),i=n("Wp6s"),c=n("bTqV"),d=n("UXJo"),b=n("NFeN"),s=n("kmnG"),m=n("qFsG"),u=n("3Pt+"),p=n("bSwM");function g(t,e){if(1&t){const t=r.Tb();r.Sb(0,"div",15),r.Sb(1,"button",16),r.Zb("click",function(){return r.kc(t),r.dc(2).addColumn()}),r.Sb(2,"mat-icon"),r.pc(3," add "),r.Rb(),r.Rb(),r.Sb(4,"button",17),r.Zb("click",function(){return r.kc(t),r.dc(2).delColumn()}),r.Sb(5,"mat-icon"),r.pc(6," delete "),r.Rb(),r.Rb(),r.Rb()}if(2&t){const t=r.dc().first;r.Cb(4),r.gc("disabled",t)}}function f(t,e){if(1&t&&(r.Sb(0,"div",11),r.Sb(1,"div",12),r.Sb(2,"mat-form-field"),r.Sb(3,"mat-label"),r.pc(4,"table header for columnDef"),r.Rb(),r.Sb(5,"input",13),r.Zb("ngModelChange",function(t){return e.$implicit.header=t}),r.Rb(),r.Rb(),r.Sb(6,"mat-form-field"),r.Sb(7,"mat-label"),r.pc(8,"columnDef"),r.Rb(),r.Sb(9,"input",13),r.Zb("ngModelChange",function(t){return e.$implicit.cell=t}),r.Rb(),r.Rb(),r.Rb(),r.oc(10,g,7,1,"div",14),r.Rb()),2&t){const t=e.$implicit,n=e.last;r.Cb(5),r.gc("ngModel",t.header),r.Cb(4),r.gc("ngModel",t.cell),r.Cb(1),r.gc("ngIf",n)}}function h(t,e){if(1&t&&(r.Sb(0,"mat-checkbox",18),r.Zb("ngModelChange",function(t){return e.$implicit.value=t}),r.pc(1),r.Rb()),2&t){const t=e.$implicit;r.gc("ngModel",t.value),r.Cb(1),r.rc(" ",t.label," ")}}const S={columns:[{header:"No.",cell:"position"},{header:"Name",cell:"name"},{header:"Weight",cell:"weight"},{header:"Symbol",cell:"symbol"}],options:[{label:"hasSort",value:!0},{label:"hasPaginator",value:!0},{label:"hasFilter",value:!0}]};let w=(()=>{class t{constructor(){this.ngModel=S}ngOnInit(){}addColumn(){this.ngModel.columns.push({header:"",cell:""})}delColumn(){this.ngModel.columns.length>1&&this.ngModel.columns.pop()}ngDoCheck(){this.tableHtml=(t=>{let e="";const n=l(t.options,"hasSort"),a=l(t.options,"hasPaginator"),r=l(t.options,"hasFilter");return r&&(e+='<mat-form-field style="display: block;">\n        <mat-label>Filter</mat-label>\n        <mat-icon matSuffix>search</mat-icon>\n        <input matInput (keyup)="applyFilter($event)" #searchFilter>\n    </mat-form-field>'),a&&(e+="<div>"),e+=`<table mat-table [dataSource]="dataSource"${n?" matSort":""}>`,e+=t.columns.map(t=>function(t,e){return`<ng-container matColumnDef="${t.cell}">\n                <th mat-header-cell *matHeaderCellDef${e?" mat-sort-header":""}> ${t.header} </th>\n                <td mat-cell *matCellDef="let row"> {{row.${t.cell}}} </td>\n            </ng-container>`}(t,n)).join("\n"),e+=`<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\n    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\n\n    <tr class="mat-row" *matNoDataRow>\n      <td class="mat-cell" colspan="${t.columns.length}">No data ${r?'matching the filter "{{searchFilter.value}}"':"to display"}</td>\n    </tr>\n\n    `,e+="</table>",a&&(e+='<mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator></div>'),e=o(e,"angular"),e})(this.ngModel),this.tableTs=(t=>{let e=`displayedColumns: string[] = ${JSON.stringify(t.columns.map(t=>t.cell))};\ndataSource: MatTableDataSource<YouShouldUseTypes>;`;const n=l(t.options,"hasSort"),a=l(t.options,"hasPaginator");return(a||n)&&(e+="\n",a&&(e+="\n@ViewChild(MatPaginator) paginator: MatPaginator;"),n&&(e+="\n@ViewChild(MatSort) sort: MatSort;")),e+="\n\n// add this whereever you retrieve the data. Should go into constructor or any other function\nthis.dataSource = new MatTableDataSource(addYourData);",(a||n)&&(e+=`\n\nngAfterViewInit() { ${a?"\n  this.dataSource.paginator = this.paginator;":""}${n?"\n  this.dataSource.sort = this.sort;":""}\n}`),l(t.options,"hasFilter")&&(e+="\n\napplyFilter(event: Event) {\n  const filterValue = (event.target as HTMLInputElement).value;\n  this.dataSource.filter = filterValue.trim().toLowerCase();\n\n  if (this.dataSource.paginator) {\n    this.dataSource.paginator.firstPage();\n  }\n}"),e})(this.ngModel)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["amb-table"]],decls:40,vars:8,consts:[[1,"float-hover",2,"margin-bottom","16px"],[1,"control-wrapper",2,"display","flex","flex-flow","row nowrap","overflow","auto","margin-bottom","16px"],["style","display: flex; flex-flow: row nowrap",4,"ngFor","ngForOf"],[2,"display","grid","grid-template-columns","repeat(auto-fill, minmax(20ch ,1fr))"],[3,"ngModel","ngModelChange",4,"ngFor","ngForOf"],[1,"result-grid"],[1,"float-hover"],[2,"display","flex","flex-flow","row nowrap","align-items","center","justify-content","space-between"],["mat-icon-button","",3,"cdkCopyToClipboard"],["HtmlOutput",""],["TsOutput",""],[2,"display","flex","flex-flow","row nowrap"],[2,"display","inline-flex","flex-flow","column nowrap"],["matInput","",3,"ngModel","ngModelChange"],["style","display: inline-flex; flex-flow: column nowrap; justify-content: space-around;",4,"ngIf"],[2,"display","inline-flex","flex-flow","column nowrap","justify-content","space-around"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"disabled","click"],[3,"ngModel","ngModelChange"]],template:function(t,e){if(1&t&&(r.Sb(0,"mat-card",0),r.Sb(1,"mat-card-header"),r.Sb(2,"mat-card-title"),r.pc(3),r.Rb(),r.Rb(),r.Sb(4,"mat-card-content"),r.Sb(5,"div",1),r.oc(6,f,11,3,"div",2),r.Rb(),r.Rb(),r.Rb(),r.Sb(7,"mat-card",0),r.Sb(8,"mat-card-header"),r.Sb(9,"mat-card-title"),r.pc(10," Select features "),r.Rb(),r.Rb(),r.Sb(11,"mat-card-content"),r.Sb(12,"div",3),r.oc(13,h,2,2,"mat-checkbox",4),r.Rb(),r.Rb(),r.Rb(),r.Sb(14,"div",5),r.Sb(15,"mat-card",6),r.Sb(16,"mat-card-header"),r.Sb(17,"mat-card-title"),r.Sb(18,"div",7),r.pc(19," HTML "),r.Sb(20,"button",8),r.Sb(21,"mat-icon"),r.pc(22,"content_copy"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(23,"mat-card-content"),r.Sb(24,"pre",null,9),r.pc(26),r.Rb(),r.Rb(),r.Rb(),r.Sb(27,"mat-card",6),r.Sb(28,"mat-card-header"),r.Sb(29,"mat-card-title"),r.Sb(30,"div",7),r.pc(31," TYPESCRIPT "),r.Sb(32,"button",8),r.Sb(33,"mat-icon"),r.pc(34,"content_copy"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(35,"mat-card-content"),r.Sb(36,"mat-card-content"),r.Sb(37,"pre",null,10),r.pc(39),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t){const t=r.jc(25),n=r.jc(38);r.Cb(3),r.sc("",e.ngModel.columns.length," column",1===e.ngModel.columns.length?"":"s",""),r.Cb(3),r.gc("ngForOf",e.ngModel.columns),r.Cb(7),r.gc("ngForOf",e.ngModel.options),r.Cb(7),r.gc("cdkCopyToClipboard",t.innerText),r.Cb(6),r.qc(e.tableHtml),r.Cb(6),r.gc("cdkCopyToClipboard",n.innerText),r.Cb(7),r.qc(e.tableTs)}},directives:[i.a,i.c,i.e,i.b,a.h,c.a,d.a,b.a,s.c,s.f,m.a,u.b,u.h,u.j,a.i,p.a],styles:[".control-wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){margin-left:8px}.result-grid[_ngcontent-%COMP%]{display:grid;grid-gap:8px;grid-template-columns:1fr 1fr}@media screen and (max-width:1400px){.result-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:8px}}  amb-table>div.result-grid>mat-card>mat-card-header>div.mat-card-header-text{width:100%}"]}),t})();var R=n("tyNb"),C=n("wMSn");const y=[{path:"",component:w}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[a.b,R.b.forChild(y),C.a,u.d]]}),t})()}}]);