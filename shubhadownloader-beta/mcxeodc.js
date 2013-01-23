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
function process_mcxeodc(d,f,n,j,r,p,s){function q(c){switch(c.toUpperCase()){case "JAN":c="01";break;case "FEB":c="02";break;case "MAR":c="03";break;case "APR":c="04";break;case "MAY":c="05";break;case "JUN":c="06";break;case "JUL":c="07";break;case "AUG":c="08";break;case "SEP":c="09";break;case "OCT":c="10";break;case "NOV":c="11";break;case "DEC":c="12"}return c}var h=d[f].split("-")[0],t=d[f].split("-")[1],g=d[f].split("-")[2],e=d[f].split("-")[3];e.substr(2,2);var k=require("fs");require("ya-csv");
var u=require("async");try{u.parallel({data1:function(c){k.existsSync(j+"mcxbhavcopy_"+h+g+e+".csv")?(Ext.getCmp("pbar3").updateText("Processing mcxbhavcopy_"+h+g+e+".csv"),Ext.getCmp("pbar3").updateProgress(0.2),k.readFile(j+"mcxbhavcopy_"+h+g+e+".csv","utf-8",function(e,g){e&&(document.getElementById("om").innerHTML+="<br/>"+e);c(e,g)})):k.readdir(j,function(e){c(e,"0")})}},function(c,f){if(c)throw c;if(k.existsSync(j+"mcxbhavcopy_"+h+g+e+".csv")){Ext.getCmp("pbar3").updateText("Processing mcxbhavcopy_"+
h+g+e+".csv");Ext.getCmp("pbar3").updateProgress(0.69);for(var d=[],d=f.data1.split("\n"),b=[],a=0;a<d.length-1;a++){var n=d[a].split(",");b.push(n)}for(a=0;a<b.length;a++)if(null==b[a][12]||""==b[a][12])b[a][12]="";var m=p+"MCX_Com_mcxbhavcopy"+h+g+e+".csv";k.writeFile(m,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(c){if(c)throw c;c=[];for(a=1;a<b.length;a++)"undefined"!==typeof b[a][2]&&c.push(new Date(b[a][2].split(" ")[2],q(b[a][2].split(" ")[1]),b[a][2].split(" ")[0]));c=
c.sort(function(a,b){return a.getTime()-b.getTime()});var d=c[0].getMonth()+1;c=c[0].getFullYear()+"/"+d+"/"+c[0].getDate();var f=e+t+g;for(a=1;a<b.length;a++){d=new Date(c);if("undefined"!==typeof b[a][2])var h=new Date(b[a][2].split(" ")[2]+"/"+q(b[a][2].split(" ")[1])+"/"+b[a][2].split(" ")[0]);var j=h,l=void 0,l=12*(j.getFullYear()-d.getFullYear()),l=l-(d.getMonth()+1),l=l+j.getMonth(),d=l+1;0==d&&k.appendFileSync(m,b[a][1]+"-I,"+b[a][1]+","+f+","+b[a][3]+","+b[a][4]+","+b[a][5]+","+b[a][6]+","+
b[a][7]+","+b[a][10]+"\n","UTF-8",function(a){if(a)throw a;});1==d&&k.appendFileSync(m,b[a][1]+"-II,"+b[a][1]+","+f+","+b[a][3]+","+b[a][4]+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][10]+"\n","UTF-8",function(a){if(a)throw a;});2==d&&k.appendFileSync(m,b[a][1]+"-III,"+b[a][1]+","+f+","+b[a][3]+","+b[a][4]+","+b[a][5]+","+b[a][6]+","+b[a][7]+","+b[a][10]+"\n","UTF-8",function(a){if(a)throw a;})}})}})}catch(v){document.getElementById("om").innerHTML+="<br/>"+v}Ext.getCmp("pbar3").updateText("Processing mcxbhavcopy_"+
h+g+e+".csv completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>mcxbhavcopy"+h+g+e+".csv is processed..";f++;d.length>f?process_mcxeodc(d,f,n,j,r,p,s):Ext.getCmp("pbar3").updateProgress(0)};
