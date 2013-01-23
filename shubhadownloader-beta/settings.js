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
Ext.onReady(function(){var d=!1,e=!1,f=!1,b="",a="",g=!1,h=!1,j=!1,k=!1,l=!1,m=!1,n=!1,p=!1,q=!1,r=!1,s=!1,t=!1,u=!1,v=!1;Ext.create("Ext.form.Panel",{frame:!0,title:"Settings",width:690,height:354,bodyPadding:5,fieldDefaults:{labelAlign:"left",labelWidth:90,anchor:"100%"},items:[{xtype:"fieldset",title:"",defaultType:"textfield",layout:"anchor",defaults:{},items:[{fieldLabel:"Output folder path",name:"path",id:"path"},{xtype:"label",forId:"msg",style:"display:block; padding:10px 0px 0px 20px;font-size:10px;",
text:"Ex. C:/data ( NOTE :- Application will download & process data from web in this folder and generate output data.Please make sure you have 4GB free on this drive. )"}]},{xtype:"fieldset",title:"Download Options",layout:"anchor",defaults:{anchor:"100%"},items:[{xtype:"checkboxgroup",fieldLabel:"",cls:"x-check-group-alt",columns:3,items:[{boxLabel:"NSE Cash Market",name:"cb-horiz-1",checked:!0,id:"Nse_Cash_Market",listeners:{change:function(a){d=a.getValue()}}},{boxLabel:"NSE Equity Futures",name:"cb-horiz-2",
id:"Nse_Equity_Futures",listeners:{change:function(a){v=a.getValue()}}},{boxLabel:"NSE Equity Options",name:"cb-horiz-3",id:"Nse_Equity_Options",listeners:{change:function(a){u=a.getValue()}}},{boxLabel:"NSE Forex Futures",name:"cb-horiz-4",id:"Nse_Forex_Futures",listeners:{change:function(a){f=a.getValue()}}},{boxLabel:"NSE Forex Options",name:"cb-horiz-5",id:"Nse_Forex_Options",listeners:{change:function(a){e=a.getValue()}}},{boxLabel:"NSE SME",name:"cb-horiz-6",id:"Nse_Sme",listeners:{change:function(a){t=
a.getValue()}}},{boxLabel:"NSE ETF",name:"cb-horiz-7",id:"Nse_Etf",listeners:{change:function(a){s=a.getValue()}}},{boxLabel:"NSE Index",name:"cb-horiz-8",checked:!0,id:"Nse_Index",listeners:{change:function(a){r=a.getValue()}}},{boxLabel:"BSE Index",name:"cb-horiz-9",id:"Bse_Index",listeners:{change:function(a){q=a.getValue()}}},{boxLabel:"BSE Cash Market",name:"cb-horiz-10",id:"Bse_Cash_Market",listeners:{change:function(a){p=a.getValue()}}},{boxLabel:"NCDEX Futures",name:"cb-horiz-11",id:"Ncdex_Futures",
listeners:{change:function(a){n=a.getValue()}}},{boxLabel:"Yahoo Fundamental",name:"cb-horiz-12",id:"Yahoo_Fundamental",listeners:{change:function(a){m=a.getValue()}}},{boxLabel:"MCX Commodity Futures",name:"cb-horiz-14",id:"MCX_Commodity_Futures",listeners:{change:function(a){l=a.getValue()}}},{boxLabel:"MCX Index",name:"cb-horiz-15",id:"MCX_Index",listeners:{change:function(a){k=a.getValue()}}},{boxLabel:"National Spot Exchange",name:"cb-horiz-15",id:"National_Spot_Exchange",listeners:{change:function(a){j=
a.getValue()}}},{boxLabel:"Reports for all reports item except NSE combined report",name:"cb-horiz-17",id:"Nse_reports",listeners:{change:function(a){h=a.getValue()}}},{boxLabel:"NSE Combined Reports",name:"cb-horiz-18",id:"NSE_Combined_reports",listeners:{change:function(a){g=a.getValue()}}}]}]}],buttons:[{text:"Reset",handler:function(){this.up("form").getForm().reset()}},{text:"Save",width:150,handler:function(){var c=require("fs");b=$("#path-inputEl").val();var w=b.split("/")[0]+"/";if(""!=b)if(c.existsSync(w.replace(/\s+/g,
""))){var x=function(b){d&&(a+=" Nse_Cash_Market");v&&(a+=" Nse_Equity_Futures");u&&(a+=" Nse_Equity_Options");f&&(a+=" Nse_Forex_Futures");e&&(a+=" Nse_Forex_Options");t&&(a+=" Nse_Sme");s&&(a+=" Nse_Etf");r&&(a+=" Nse_Index");q&&(a+=" Bse_Index");p&&(a+=" Bse_Cash_Market");n&&(a+=" Ncdex_Futures");m&&(a+=" Yahoo_Fundamental");l&&(a+=" MCX_Commodity_Futures");k&&(a+=" MCX_Index");j&&(a+=" National_Spot_Exchange");h&&(a+=" Nse_reports");g&&(a+=" Nse_Combined_reports");savesettings(b,a)};c.mkdir(b,
511,function(a){a?c.existsSync(b)?(x(b),Ext.Msg.alert("Message","Settings are saved successfully.",function(){location.reload()})):Ext.Msg.alert("Message","Cannot create directory. Please check output folder path."):(x(b),Ext.Msg.alert("Message",b+" directory created successfully and settings are saved successfully.",function(){location.reload()}))});a=""}else Ext.Msg.alert("Message",w.replace(/\s+/g,"")+" Drive not present. Please check path.");else Ext.Msg.alert("Message","Please select output folder path."),
a=""}}]}).render("settings");Ext.getCmp("Nse_Cash_Market").disable();Ext.getCmp("Nse_Index").disable();$("#form-1037-body").css("height","296px");$("#label-1039").css("padding","3px 0 0 134px");$("#path-labelEl").css("width","135px");$("#path-labelCell").css("width","135px");$("#path-inputEl").css("width","500px");$("#button-1044").css("height","23px");$("#button-1043-btnEl").css("height","18px");$("#button-1044-btnEl").css("height","18px");$("#button-1043").css("height","23px");$("#toolbar-1042-innerCt").css("height",
"31px");$("#toolbar-1042").css("top","318px");$("#form-1037_header").css("height","27px");$("#form-1037_header-body").css("height","25px");$("#form-1037_header-innerCt").css("height","25px");$("#form-1037-body").css("top","29px");getsettings()});
