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
function process_bse_indexdata(k,v,m,x,l,c){function u(n,j,h,g,f,d){var c="http://www.bseindia.com/stockinfo/indices_main_excel.aspx?ind="+n[j]+"&fromDate="+h+"&toDate="+g+"&DMY=D",r=f+"temp_bseindex_"+n[j]+".csv",p="temp_bseindex_"+n[j]+".csv";w({method:"GET",uri:c,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.bseindia.com/stockinfo/indices_main_excel.aspx","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
Cookie:"cookie"}},function(k,s){null!=s?null!=s.statusCode||""!=s.statusCode?!k&&200==s.statusCode?(Ext.getCmp("pbar3").updateText("Downloading "+p),Ext.getCmp("pbar3").updateProgress(0.15),t(200,c,r,p,n,j,h,g,f,d)):t(404,c,r,p,n,j,h,g,f,d):t(404,c,r,p,n,j,h,g,f,d):t(404,c,r,p,n,j,h,g,f,d)})}function t(c,j,k,g,f,d,l,r,p,m){function s(e){return 10>parseInt(e)?"0"+e:e}function t(e){switch(e){case "January":e="01";break;case "February":e="02";break;case "March":e="03";break;case "April":e="04";break;
case "May":e="5";break;case "June":e="06";break;case "July":e="07";break;case "August":e="08";break;case "September":e="09";break;case "October":e="10";break;case "November":e="11";break;case "December":e="12"}return e}200==c?(Ext.getCmp("pbar3").updateText("Downloading "+g),Ext.getCmp("pbar3").updateProgress(0.25),c=h.createWriteStream(k),j=w({method:"GET",uri:j,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.nseindia.com/products/content/all_daily_reports.htm",
"Accept-Encoding":"gzip,deflate,sdch",encoding:"null",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*//*;q=0.8",Cookie:"cookie"}}),j.on("error",function(){Ext.getCmp("pbar3").updateText("Error occurred while downloading "+g+"");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>Error occured in downloading "+g.replace(/temp_/g,"");u(f,d,l,r,p)}),j.pipe(c),j.on("end",function(){Ext.getCmp("pbar3").updateText(""+g+" is downloaded");Ext.getCmp("pbar3").updateProgress(0.41);
document.getElementById("om").innerHTML+="<br>"+g.replace(/temp_/g,"")+" is downloaded...";require("async").parallel({data1:function(e){h.existsSync(k)?h.readFile(k,"utf-8",function(c,d){c&&(document.getElementById("om").innerHTML+="<br/>"+c);e(c,d)}):h.readdir(v,function(c){c&&(document.getElementById("om").innerHTML+="<br/>"+c);e(c,"0")})}},function(c,j){if(c)throw c;if(h.existsSync(k)){Ext.getCmp("pbar3").updateText("Processing "+g+"");Ext.getCmp("pbar3").updateProgress(0.45);for(var q=[],q=j.data1.split("\n"),
b=[],a=0;a<q.length;a++){var n=q[a].split(",");b.push(n)}q=m+"BSE_Indices_bseindex.csv";if(h.existsSync(q)){for(a=1;a<b.length-1;a++)("undefined"!==typeof b[a][0]||""!=b[a][0]||" "!=b[a][0]||null!=b[a][0])&&h.appendFileSync(q,f[d]+","+f[d]+","+b[a][0].toString().split("-")[2]+""+t(b[a][0].toString().split("-")[1].toString())+""+s(b[a][0].toString().split("-")[0])+","+b[a][1]+","+b[a][2]+","+b[a][3]+","+b[a][4]+",0,0\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});
Ext.getCmp("pbar3").updateText("Processing "+g+" completed");Ext.getCmp("pbar3").updateProgress(1)}else if("BSE30"==f[d])for(a=0;a<b.length-1;a++)0<a?("undefined"!==typeof b[a][0]||""!=b[a][0]||" "!=b[a][0]||null!=b[a][0])&&h.appendFileSync(q,f[d]+","+f[d]+","+b[a][0].toString().split("-")[2]+""+t(b[a][0].toString().split("-")[1].toString())+""+s(b[a][0].toString().split("-")[0])+","+b[a][1]+","+b[a][2]+","+b[a][3]+","+b[a][4]+",0,0\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a)}):h.appendFileSync(q,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});else{for(a=1;a<b.length-1;a++)("undefined"!==typeof b[a][0]||""!=b[a][0]||" "!=b[a][0]||null!=b[a][0])&&h.appendFileSync(q,f[d]+","+f[d]+","+b[a][0].toString().split("-")[2]+""+t(b[a][0].toString().split("-")[1].toString())+""+s(b[a][0].toString().split("-")[0])+","+b[a][1]+","+b[a][2]+","+b[a][3]+","+b[a][4]+",0,0\n","utf-8",function(a){a&&
(document.getElementById("om").innerHTML+="<br/>"+a)});Ext.getCmp("pbar3").updateText("Processing "+g+" completed");Ext.getCmp("pbar3").updateProgress(1)}}d++;f.length>d?u(f,d,l,r,p,m):Ext.getCmp("pbar3").updateProgress(0)})})):(Ext.getCmp("pbar3").updateText("File "+g.replace(/temp_/g,"")+" is not present on server"),Ext.getCmp("pbar3").updateProgress(1),document.getElementById("om").innerHTML+="<br/><font color=red>"+g.replace(/temp_/g,"")+" is not present on server</font>",d++,f.length>d?u(f,d,
l,r,p,m):(Ext.getCmp("pbar3").updateProgress(0),visit("indices.html")))}Ext.getCmp("pbar3").updateText("BSE Block Deal Processing is started . . .");Ext.getCmp("pbar3").updateProgress(0.03);require("url");require("async");require("http");var h=require("fs");require("adm-zip");var w=require("request");k=l.split("/");c=c.split("/");m=new Date(k[0]+","+k[1]+","+k[2]);l=new Date(c[0]+","+c[1]+","+c[2]);c=m.toDateString().split(" ");k=l.toDateString().split(" ");c[1].toUpperCase();m=m.getMonth()+1;l=l.getMonth()+
1;u("BSE30 MIDCAP SMLCAP BSE100 BSE200 BSE500 AUTO BANKEX BSECD BSECG BSEFMCG BSEHC BSEIT METAL OILGAS BSEPOWER BSEPSU REALITY TECK DOL30 DOL100 DOL200 SHA50 GREENX BSEIPO CARBON SMEIPO".split(" "),0,m+"/"+c[2]+"/"+c[3],l+"/"+k[2]+"/"+k[3],v+"temp/",x)};
