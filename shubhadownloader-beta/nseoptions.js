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
function process_nseoption(d,c,g,j,n,p,q){var r=d[c].split("-")[0],l=d[c].split("-")[1],k=d[c].split("-")[2],h=d[c].split("-")[3];h.substr(2,2);var f=require("fs");require("ya-csv");var s=require("async");try{s.parallel({data1:function(c){f.existsSync(n+"unzip1/op"+k+l+h+".csv")?(Ext.getCmp("pbar3").updateText("Processing op"+k+l+h+".csv"),Ext.getCmp("pbar3").updateProgress(0.23),f.readFile(n+"unzip1/op"+k+l+h+".csv","utf-8",function(e,f){e&&(document.getElementById("om").innerHTML+="<br/>"+e);c(e,
f)})):f.readdir(j,function(e){e&&(document.getElementById("om").innerHTML+="<br/>"+e);c(e,"0")})},data2:function(c){f.existsSync(j+"sec_list.csv")?f.readFile(j+"sec_list.csv","utf-8",function(e,f){e&&(document.getElementById("om").innerHTML+="<br/>"+e);c(e,f)}):f.readdir(j,function(e){e&&(document.getElementById("om").innerHTML+="<br/>"+e);c(e,"0")})}},function(c,e){c&&(document.getElementById("om").innerHTML+="<br/>"+c);if(f.existsSync(n+"unzip1/op"+k+l+h+".csv")){Ext.getCmp("pbar3").updateText("Processing op"+
k+l+h+".csv");Ext.getCmp("pbar3").updateProgress(0.63);for(var d=[],d=e.data1.split("\n"),b=[],a=0;a<d.length-3;a++){var m=d[a].split(",");b.push(m)}if(f.existsSync(n+"unzip1/op"+k+l+h+".csv")){m=[];m=e.data2.split("\n");d=[];for(a=0;a<m.length-1;a++){var g=m[a].split(",");d.push(g)}for(a=1;a<b.length;a++)for(m=1;m<d.length;m++)b[a][1].toString().trim()==d[m][0].toString().trim()&&(b[a][15]=d[m][2])}for(a=0;a<b.length;a++)if(null==b[a][15]||""==b[a][15])b[a][15]="";var j=p+"NSE_Equity_Options_op"+
k+l+h+".csv";f.writeFile(j,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(c){c&&(document.getElementById("om").innerHTML+="<br/>"+c);c=[];for(a=0;a<b.length;a++)c.push(new Date(b[a][2].split("/")[2],b[a][2].split("/")[1]-1,b[a][2].split("/")[0]));c=c.sort(function(a,b){return a.getTime()-b.getTime()});var d=c[1].getMonth()+1;c=c[1].getFullYear()+"/"+d+"/"+c[1].getDate();var e=h+l+k;for(a=1;a<b.length;a++){var d=new Date(c),g=new Date(b[a][2].split("/")[2]+"/"+b[a][2].split("/")[1]+
"/"+b[a][2].split("/")[0]),d=monthDiff(d,g);0==d&&f.appendFileSync(j,b[a][1].trim()+"-I"+parseInt(b[a][3])+b[a][4]+","+b[a][15]+","+e+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});1==d&&f.appendFileSync(j,b[a][1].trim()+"-II"+parseInt(b[a][3])+b[a][4]+","+b[a][15]+","+e+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a)});2==d&&f.appendFileSync(j,b[a][1].trim()+"-III"+parseInt(b[a][3])+b[a][4]+","+b[a][15]+","+e+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});3==d&&f.appendFileSync(j,b[a][1].trim()+"-IV"+parseInt(b[a][3])+b[a][4]+","+b[a][15]+","+e+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+
a)})}})}})}catch(t){document.getElementById("om").innerHTML+="<br/>"+t}Ext.getCmp("pbar3").updateText("Processing op"+k+l+h+".csv completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>op"+l+k+h+".csv is processed..";addlog(q,"op"+k+r+h+".csv is processed..");c++;d.length>c?(setTimeout(function(){process_nseoption(d,c,g,j,n,p,q)},1E3),document.getElementById("om").innerHTML+=".."):(Ext.getCmp("pbar3").updateProgress(0),visit("nseo.html"))}
function monthDiff(d,c){var g;g=12*(c.getFullYear()-d.getFullYear());g-=d.getMonth()+1;g+=c.getMonth();return g+1};
