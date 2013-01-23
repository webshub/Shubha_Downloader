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
function process_nseforexo(g,c,d,q,n,r,m){g[c].split("-");var k=g[c].split("-")[1],l=g[c].split("-")[2],h=g[c].split("-")[3];h.substr(2,2);var e=require("fs");require("ya-csv");var s=require("async");try{s.parallel({data1:function(c){e.existsSync(n+"unzip1/co"+l+k+h+".csv")?(Ext.getCmp("pbar3").updateText("Processing co"+l+k+h+".csv"),Ext.getCmp("pbar3").updateProgress(0.23),e.readFile(n+"unzip1/co"+l+k+h+".csv","utf-8",function(e,h){e&&(document.getElementById("om").innerHTML+="<br/>"+e);c(e,h)})):
e.readdir(q,function(e){e&&(document.getElementById("om").innerHTML+="<br/>"+e);c(e,"0")})}},function(c,g){c&&(document.getElementById("om").innerHTML+="<br/>"+c);if(e.existsSync(n+"unzip1/co"+l+k+h+".csv")){Ext.getCmp("pbar3").updateText("Processing co"+l+k+h+".csv");Ext.getCmp("pbar3").updateProgress(0.5);for(var d=[],d=g.data1.split("\n"),b=[],a=0;a<d.length-1;a++){var m=d[a].split(",");b.push(m)}var j=r+"NSE_Forex_Options_co"+l+k+h+".csv";e.writeFile(j,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",
function(c){c&&(document.getElementById("om").innerHTML+="<br/>"+c);c=[];for(a=0;a<b.length-1;a++)(null!=b[a][2]||""!=b[a][2])&&c.push(new Date(b[a][2].split("/")[2],b[a][2].split("/")[1]-1,b[a][2].split("/")[0]));c=c.sort(function(a,b){return a.getTime()-b.getTime()});var f=c[1].getMonth()+1;c=c[1].getFullYear()+"/"+f+"/"+c[1].getDate();var d=h+k+l;for(a=1;a<b.length;a++)if(f=new Date(c),"undefined"!==typeof b[a][2]){var g=new Date(b[a][2].split("/")[2]+"/"+b[a][2].split("/")[1]+"/"+b[a][2].split("/")[0]),
f=monthDiff(f,g);0==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-I,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});1==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-II,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});2==f&&e.appendFileSync(j,b[a][1].toString().trim()+
"-III,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});3==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-IV,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});4==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-V,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+
","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});5==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-VI,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});6==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-VII,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a)});7==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-VIII,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});8==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-IX,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});9==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-X,,"+
d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});10==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-XI,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});11==f&&e.appendFileSync(j,b[a][1].toString().trim()+"-XII,,"+d+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+
b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})}})}})}catch(p){p&&(document.getElementById("om").innerHTML+="<br/>"+p),addlog(m,p)}Ext.getCmp("pbar3").updateText("Processing co"+l+k+h+".csv completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>co"+l+k+h+".csv is processed..";addlog(m,"co"+l+k+h+".csv is processed..");c++;g.length>c?(setTimeout(function(){process_nseforexo(g,c,d,q,n,r,m)},1E3),document.getElementById("om").innerHTML+=
".."):(Ext.getCmp("pbar3").updateProgress(0),visit("nsefo.html"))}function monthDiff(g,c){var d;d=12*(c.getFullYear()-g.getFullYear());d-=g.getMonth()+1;d+=c.getMonth();return d+1};
