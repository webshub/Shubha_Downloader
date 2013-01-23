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
function process_nse_bc(f,g,r,k,n,c,p){c=c.replace(/std_csv/g,"reports");var s=f[g].split("-")[0],h=f[g].split("-")[1],e=f[g].split("-")[2],l=f[g].split("-")[3],j=l.substr(2,2),b=require("fs");require("ya-csv");var u=require("async");try{u.parallel({data1:function(c){b.existsSync(n+"Bc"+e+h+j+".csv")?(Ext.getCmp("pbar3").updateText("Processing Bc"+e+h+j+".csv"),Ext.getCmp("pbar3").updateProgress(0.15),b.readFile(n+"Bc"+e+h+j+".csv","utf-8",function(b,e){b&&(document.getElementById("om").innerHTML+=
"<br/>"+b);c(b,e)})):b.readdir(k,function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);c(b,"0")})}},function(k,p){k&&(document.getElementById("om").innerHTML+="<br/>"+k);if(b.existsSync(n+"Bc"+e+h+j+".csv")){var l=require("step");Ext.getCmp("pbar3").updateText("Processing Bc"+e+h+j+".csv");Ext.getCmp("pbar3").updateProgress(0.35);for(var q=[],q=p.data1.split("\n"),m=[],d=0;d<q.length-2;d++)if(""!=q[d]||null!=q[d]){var r=q[d].split(",");m.push(r)}f.length-2==g?l(function(){b.appendFileSync(c+
"NSE_corporate_actions.csv",m[0]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_corporate_actions.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_corporate_actions.csv","For date : "+e+"/"+h+"/"+j+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){for(d=1;d<m.length;d++)b.appendFileSync(c+
"NSE_corporate_actions.csv",m[d]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this}):l(function(){b.appendFileSync(c+"NSE_corporate_actions.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_corporate_actions.csv","\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){b.appendFileSync(c+"NSE_corporate_actions.csv","For date : "+
e+"/"+h+"/"+j+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this},function(){for(d=1;d<m.length;d++)b.appendFileSync(c+"NSE_corporate_actions.csv",m[d]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});return this});Ext.getCmp("pbar3").updateText("Processing bc"+e+h+j+".csv completed");Ext.getCmp("pbar3").updateProgress(1)}})}catch(t){t&&(document.getElementById("om").innerHTML+="<br/>"+t)}document.getElementById("om").innerHTML+=
"<br/>Bc"+e+s+l+".csv is processed..";addlog(p,"Bc"+e+s+l+".csv is processed..");g--;0<=g?(setTimeout(function(){process_nse_bc(f,g,r,k,n,c,p)},5E3),document.getElementById("om").innerHTML+=".."):process_nse_bh(f,f.length-1,r,k,n,c,p)};
