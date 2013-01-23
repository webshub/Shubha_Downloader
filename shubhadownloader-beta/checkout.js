/*******************************************************************************
//    Shubha Downloader
//    Shubha Downloader downloads end of day pricing data from publicly available
//    sites and converts it in different formats.
//
//    Copyright (C) 2013 Shubhalabha.in
//    Info: webmaster@shubhalabha.in
//    Contributors: jayant@xnetindia.com,
//		    prashant@xnetindia.com,
//		    anand@xnetindia.com
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//    GNU General Public License for more details.
//
//    Permission is hereby granted, free of charge, to any person obtaining a
//    copy of this software and associated documentation files (the
//    "Software"), to deal in the Software without restriction, including
//    without limitation the rights to use, copy, modify, merge copies of the Software, and to permit
//    persons to whom the Software is furnished to do so, subject to the
//    following conditions:
//    The above copyright notice and this permission notice shall be included
//    in all copies or substantial portions of the Software.
//    The name of software can not changed. Software can not be sold in any manner.
//
//    You should have received a copy of the GNU General Public License
//    along with this program. If not, see <http://www.gnu.org/licenses/>
//
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//    OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
//    NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
//    USE OR OTHER DEALINGS IN THE SOFTWARE.
********************************************************************************/
Ext.require(["Ext.form.*","Ext.data.*","Ext.window.MessageBox"]);
Ext.onReady(function(){var g=!1;Ext.apply(Ext.form.field.VTypes,{daterange:function(a,d){var c=d.parseDate(a);if(!c)return!1;if(d.startDateField&&(!this.dateRangeMax||c.getTime()!=this.dateRangeMax.getTime())){var b=d.up("form").down("#"+d.startDateField);b.setMaxValue(c);b.validate();this.dateRangeMax=c}else if(d.endDateField&&(!this.dateRangeMin||c.getTime()!=this.dateRangeMin.getTime()))b=d.up("form").down("#"+d.endDateField),b.setMinValue(c),b.validate(),this.dateRangeMin=c;return!0},daterangeText:"Start date must be less than end date"});
var f=Ext.create("Ext.data.ArrayStore",{fields:["abbr"],data:Ext.example.states});Ext.create("Ext.data.Store",{fields:["name","num"],data:function(){var a=[];Ext.Array.forEach(Ext.Date.monthNames,function(b,c){a[c]={name:b,num:c+1}});return a}()});Ext.widget("form",{renderTo:"home",title:"Shubha Downloader",frame:!0,width:690,bodyPadding:5,fieldDefaults:{labelAlign:"right",labelWidth:90,msgTarget:"qtip"},items:[{xtype:"fieldset",title:"",defaultType:"textfield",layout:"anchor",defaults:{anchor:"100%"},
items:[{xtype:"container",layout:"hbox",items:[{xtype:"fieldcontainer",fieldLabel:" Date From",combineErrors:!0,msgTarget:"side",layout:"hbox",defaults:{flex:1,hideLabel:!0},items:[{xtype:"datefield",name:"startDate",id:"startDate",fieldLabel:"Start",margin:"0 0 0 0",width:100,itemId:"startdt",vtype:"daterange",endDateField:"enddt"}]},{xtype:"fieldcontainer",fieldLabel:"Date To",combineErrors:!0,msgTarget:"side",layout:"hbox",defaults:{flex:1,hideLabel:!0},items:[{xtype:"datefield",name:"startDate",
id:"endDate",fieldLabel:"Start",margin:"0 0 0 0",width:100,itemId:"enddt",vtype:"daterange",startDateField:"startdt"}]},{xtype:"combobox",name:"mailingState",billingFieldName:"billingState",fieldLabel:"Output Format",id:"output_formate",labelWidth:150,width:250,store:f,editable:!1,valueField:"abbr",displayField:"abbr",typeAhead:!0,queryMode:"local",forceSelection:!0,multiSelect:!0,value:"STD.CSV"}]},{xtype:"checkboxgroup",fieldLabel:"",cls:"x-check-group-alt",columns:1,items:[{boxLabel:"auto update from last successful Date ",
id:"autoupdate",name:"cb-horiz-4",listeners:{change:function(a){(g=a.getValue())?(a=Ext.getCmp("startDate"),a.disable(),a=Ext.getCmp("endDate"),a.disable()):(a=Ext.getCmp("startDate"),a.enable(),Ext.getCmp("endDate").enable())}}}]}]}],buttons:[{text:"Reset",handler:function(){location.reload();this.up("form").getForm().reset()}},{text:"Download",width:150,handler:function(){$("#button-1038-btnEl").attr("disabled","disabled");g?autoload():loadevent1()}}]});$("#checkboxgroup-1032").css("margin-top",
"10px");$("#fieldset-1028-body").css("height","64px");Ext.getCmp("startDate").setValue(new Date);Ext.getCmp("endDate").setValue(new Date);f=require("fs");if(f.existsSync("lastupdate.csv")){var b=Ext.getCmp("autoupdate");b.enable()}else b=Ext.getCmp("autoupdate"),b.disable();var b=require("ya-csv"),e=b.createCsvFileReader("lastupdate.csv",{separator:","});e.addListener("data",function(a){"lastdate"==a[0]&&$("#autoupdate-boxLabelEl").append("("+a[1]+")")});e=b.createCsvFileReader("settings.csv",{separator:","});
e.addListener("data",function(a){"datafolder"==a[0]&&mkdir(a[1])});f.existsSync("outputformat.csv")&&(e=b.createCsvFileReader("outputformat.csv",{separator:","}),e.addListener("data",function(a){"output"==a[0]&&$("#output_formate-inputEl").val(a[1])}))});
