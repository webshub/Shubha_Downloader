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
function process_nse_HL(h,j,m,k,n,c,p){c=c.replace(/std_csv/g,"reports");h[j].split("-");var e=h[j].split("-")[1],f=h[j].split("-")[2],g=h[j].split("-")[3].substr(2,2),b=require("fs");require("ya-csv");var s=require("async");try{s.parallel({data1:function(c){b.existsSync(n+"HL"+f+e+g+".csv")?(Ext.getCmp("pbar3").updateText("Processing HL"+f+e+g+".csv"),Ext.getCmp("pbar3").updateProgress(0.17),b.readFile(n+"HL"+f+e+g+".csv","utf-8",function(b,e){b&&(document.getElementById("om").innerHTML+="<br/>"+
b);c(b,e)})):b.readdir(k,function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);c(b,"0")})}},function(k,p){k&&(document.getElementById("om").innerHTML+="<br/>"+k);if(b.existsSync(n+"HL"+f+e+g+".csv")){var m=require("step");Ext.getCmp("pbar3").updateText("Processing HL"+f+e+g+".csv");Ext.getCmp("pbar3").updateProgress(0.4);for(var q=[],q=p.data1.split("\n"),l=[],d=0;d<q.length-2;d++)if(""!=q[d]||null!=q[d]){var r=q[d].split(",");l.push(r)}h.length-2==j?m(function(){b.appendFileSync(c+
"NSE_new_high_low.csv",l[0]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_new_high_low.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_new_high_low.csv","For date : "+f+"/"+e+"/"+g+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){for(d=1;d<l.length;d++)b.appendFileSync(c+
"NSE_new_high_low.csv",l[d]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this}):m(function(){b.appendFileSync(c+"NSE_new_high_low.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_new_high_low.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_new_high_low.csv","For date : "+f+"/"+e+"/"+
g+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){for(d=1;d<l.length;d++)b.appendFileSync(c+"NSE_new_high_low.csv",l[d]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this});Ext.getCmp("pbar3").updateText("Processing hl"+f+e+g+".csv completed");Ext.getCmp("pbar3").updateProgress(1)}})}catch(r){r&&(document.getElementById("om").innerHTML+="<br/>"+r)}document.getElementById("om").innerHTML+="<br/>HL"+
f+e+g+".csv is processed..";addlog(p,"HL"+f+e+g+".csv is processed..");j--;0<=j?(setTimeout(function(){process_nse_HL(h,j,m,k,n,c,p)},5E3),document.getElementById("om").innerHTML+=".."):process_nse_Gl(h,h.length-1,m,k,n,c,p)};
