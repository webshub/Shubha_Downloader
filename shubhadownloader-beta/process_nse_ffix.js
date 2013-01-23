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
function process_nse_ffix(j,f,t,p,q,c,m){c=c.replace(/std_csv/g,"reports");var r=j[f].split("-")[0],g=j[f].split("-")[1],e=j[f].split("-")[2],k=j[f].split("-")[3],h=k.substr(2,2),b=require("fs");require("ya-csv");var u=require("async");try{u.parallel({data1:function(c){b.existsSync(q+"ffix"+e+g+h+".csv")?(Ext.getCmp("pbar3").updateText("Processing ffix"+e+g+h+".csv"),Ext.getCmp("pbar3").updateProgress(0.18),b.readFile(q+"ffix"+e+g+h+".csv","utf-8",function(b,e){b&&(document.getElementById("om").innerHTML+=
"<br/>"+b);c(b,e)})):b.readdir(p,function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);c(b,"0")})}},function(k,p){k&&(document.getElementById("om").innerHTML+="<br/>"+k);if(b.existsSync(q+"ffix"+e+g+h+".csv")){var m=require("step");Ext.getCmp("pbar3").updateText("Processing ffix"+e+g+h+".csv");Ext.getCmp("pbar3").updateProgress(0.48);for(var n=[],n=p.data1.split("\n"),l=[],d=0;d<n.length-2;d++)if(""!=n[d]||null!=n[d]){var r=n[d].split(",");l.push(r)}j.length-2==f?m(function(){b.appendFileSync(c+
"NSE_marketcapreport.csv",l[0]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_marketcapreport.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_marketcapreport.csv","For date : "+e+"/"+g+"/"+h+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){for(d=1;d<l.length;d++)b.appendFileSync(c+
"NSE_marketcapreport.csv",l[d]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this}):m(function(){b.appendFileSync(c+"NSE_marketcapreport.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_marketcapreport.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_marketcapreport.csv","For date : "+
e+"/"+g+"/"+h+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){for(d=1;d<l.length;d++)b.appendFileSync(c+"NSE_marketcapreport.csv",l[d]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this});Ext.getCmp("pbar3").updateText("Processing ffix"+e+g+h+".csv completed");Ext.getCmp("pbar3").updateProgress(1)}})}catch(s){s&&(document.getElementById("om").innerHTML+="<br/>"+s)}document.getElementById("om").innerHTML+=
"<br/>ffix"+e+r+k+".csv is processed..";addlog(m,"ffix"+e+r+k+".csv is processed..");f--;0<=f?(setTimeout(function(){process_nse_ffix(j,f,t,p,q,c,m)},1E3),document.getElementById("om").innerHTML+=".."):(Ext.getCmp("pbar3").updateProgress(0),visit("reports.html"))};
