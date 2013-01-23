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
function process_nsema(h,f,s,l,t,e,n){h[f].split("-");var d=h[f].split("-")[1],g=h[f].split("-")[2],q=h[f].split("-")[3],j=q.substr(2,2),c=require("fs");require("ya-csv");var u=require("async");try{u.parallel({data1:function(e){c.existsSync(l+"MA"+g+d+j+".csv")?(Ext.getCmp("pbar3").updateText("Processing MA"+g+d+j+".csv"),Ext.getCmp("pbar3").updateProgress(0.13),c.readFile(l+"MA"+g+d+j+".csv","utf-8",function(c,d){c&&(document.getElementById("om").innerHTML+="<br/>"+c);e(c,d)})):c.readdir(l,function(c){c&&
(document.getElementById("om").innerHTML+="<br/>"+c);e(c,"0")})}},function(f,h){f&&(document.getElementById("om").innerHTML+="<br/>"+f);if(c.existsSync(l+"MA"+g+d+j+".csv")){Ext.getCmp("pbar3").updateText("Processing MA"+g+d+j+".csv");Ext.getCmp("pbar3").updateProgress(0.43);for(var p=[],p=h.data1.split("\n"),b=[],a=0;a<p.length;a++){var n=p[a].split(",");b.push(n)}var m=e.replace(/std_csv/g,"reports")+"nsemarket_activity.csv",k=q+d+g;if(c.existsSync(m)){c.appendFileSync(m,k+"\n\n","UTF-8",function(a){console.log(a+
"\n")});for(a=1;a<b.length;a++)"ADVANCES"==b[a][1]&&c.appendFileSync(e+"NSE_Advance_D_nsead.csv","NSE_"+b[a][1]+",NSE_"+b[a][1]+","+k+","+b[a][2]+","+b[a][2]+","+b[a][2]+","+b[a][2]+",0,0\n","UTF-8",function(a){if(a)throw a;console.log(a+"\n")}),"DECLINES"==b[a][1]&&c.appendFileSync(e+"NSE_Advance_D_nsead.csv","NSE_"+b[a][1]+",NSE_"+b[a][1]+","+k+","+b[a][2]+","+b[a][2]+","+b[a][2]+","+b[a][2]+",0,0\n","UTF-8",function(a){if(a)throw a;console.log(a+"\n")}),"UNCHANGED"==b[a][1]&&c.appendFileSync(e+
"NSE_Advance_D_nsead.csv","NSE_"+b[a][1]+",NSE_"+b[a][1]+","+k+","+b[a][2]+","+b[a][2]+","+b[a][2]+","+b[a][2]+",0,0\n","UTF-8",function(a){if(a)throw a;console.log(a+"\n")}),c.appendFileSync(m,b[a]+"\n","UTF-8",function(a){if(a)throw a;})}else c.writeFile(e+"NSE_Advance_D_nsead.csv","TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(a){a&&console.log(a+"\n")}),c.writeFile(m,k+"\n\n",function(d){d&&console.log(d+"\n");for(a=1;a<b.length;a++)"ADVANCES"==b[a][1]&&c.appendFileSync(e+"NSE_Advance_D_nsead.csv",
"NSE_"+b[a][1]+",NSE_"+b[a][1]+","+k+","+b[a][2]+","+b[a][2]+","+b[a][2]+","+b[a][2]+",0,0\n","UTF-8",function(a){if(a)throw a;console.log(a+"\n")}),"DECLINES"==b[a][1]&&c.appendFileSync(e+"NSE_Advance_D_nsead.csv","NSE_"+b[a][1]+",NSE_"+b[a][1]+","+k+","+b[a][2]+","+b[a][2]+","+b[a][2]+","+b[a][2]+",0,0\n","UTF-8",function(a){if(a)throw a;console.log(a+"\n")}),"UNCHANGED"==b[a][1]&&c.appendFileSync(e+"NSE_Advance_D_nsead.csv","NSE_"+b[a][1]+",NSE_"+b[a][1]+","+k+","+b[a][2]+","+b[a][2]+","+b[a][2]+
","+b[a][2]+",0,0\n","UTF-8",function(a){if(a)throw a;console.log(a+"\n")}),c.appendFileSync(m,b[a]+"\n","UTF-8",function(a){if(a)throw a;})});Ext.getCmp("pbar3").updateText("Processing HL"+g+d+j+".csv completed");Ext.getCmp("pbar3").updateProgress(1)}})}catch(r){r&&(document.getElementById("om").innerHTML+="<br/>"+r)}document.getElementById("om").innerHTML+="<br/>MA"+g+d+j+".csv is processed..";addlog(n,"MA"+g+d+j+".csv is processed..");f++;h.length>f?(setTimeout(function(){process_nsema(h,f,s,l,
t,e,n)},1E3),document.getElementById("om").innerHTML+=".."):(Ext.getCmp("pbar3").updateProgress(0),visit("reports.html"))};
