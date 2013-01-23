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
function process_nsesme(f,a,d,l,m,p,k){f[a].split("-");var b=f[a].split("-")[1],e=f[a].split("-")[2],n=f[a].split("-")[3],h=n.substr(2,2),j=require("fs");require("ya-csv");var r=require("async");try{r.parallel({data1:function(a){j.existsSync(m+"sme"+e+b+h+".csv")?(Ext.getCmp("pbar3").updateText("Processing sme"+e+b+h+".csv"),Ext.getCmp("pbar3").updateProgress(0.19),j.readFile(m+"sme"+e+b+h+".csv","utf-8",function(b,e){b&&(document.getElementById("om").innerHTML+="<br/>"+b);a(b,e)})):j.readdir(l,function(b){b&&
(document.getElementById("om").innerHTML+="<br/>"+b);a(b,"0")})}},function(a,f){a&&(document.getElementById("om").innerHTML+="<br/>"+a);if(j.existsSync(m+"sme"+e+b+h+".csv")){Ext.getCmp("pbar3").updateText("Processing sme"+e+b+h+".csv");Ext.getCmp("pbar3").updateProgress(0.39);for(var d=[],d=f.data1.split("\n"),g=[],c=0;c<d.length;c++){var l=d[c].split(",");g.push(l)}var k=p+"NSE_SME_sme"+e+b+h+".csv";j.writeFile(k,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a);a=n+b+e;for(c=1;c<g.length&&!(" "==g[c][2]||"undefined"==typeof g[c][2]);c++)j.appendFileSync(k,g[c][2]+","+g[c][3]+","+a+","+g[c][5]+","+g[c][6]+","+g[c][7]+","+g[c][8]+","+g[c][10]+",\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})})}})}catch(q){q&&(document.getElementById("om").innerHTML+="<br/>"+q)}Ext.getCmp("pbar3").updateText("Processing sme"+e+b+h+".csv completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>sme"+
e+b+h+".csv is processed..";addlog(k,"co"+e+b+n+".csv is processed..");a++;f.length>a?(setTimeout(function(){process_nsesme(f,a,d,l,m,p,k)},1E3),document.getElementById("om").innerHTML+=".."):(Ext.getCmp("pbar3").updateProgress(0),visit("nsesme.html"))}function monthDiff(f,a){var d;d=12*(a.getFullYear()-f.getFullYear());d-=f.getMonth()+1;d+=a.getMonth();return d+1};
