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
function process_nse_etf(e,b,c,k,l,p,j){e[b].split("-");var a=e[b].split("-")[1],d=e[b].split("-")[2],q=e[b].split("-")[3],f=q.substr(2,2),h=require("fs");require("ya-csv");var r=require("async");try{r.parallel({data1:function(b){h.existsSync(l+"etf"+d+a+f+".csv")?(Ext.getCmp("pbar3").updateText("Processing etf"+d+a+f+".csv"),Ext.getCmp("pbar3").updateProgress(0.25),h.readFile(l+"etf"+d+a+f+".csv","utf-8",function(a,d){a&&(document.getElementById("om").innerHTML+="<br/>"+a);b(a,d)})):h.readdir(k,
function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);b(a,"0")})}},function(b,e){b&&(document.getElementById("om").innerHTML+="<br/>"+b);if(h.existsSync(l+"etf"+d+a+f+".csv")){Ext.getCmp("pbar3").updateText("Processing etf"+d+a+f+".csv");Ext.getCmp("pbar3").updateProgress(0.55);for(var c=[],c=e.data1.split("\n"),g=[],n=0;n<c.length;n++){var k=c[n].split(",");g.push(k)}var j=p+"NSE_ETF_etf"+d+a+f+".csv",m=q+a+d;h.writeFile(j,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(a){a&&
(document.getElementById("om").innerHTML+="<br/>"+a);for(a=1;a<g.length-1;a++)h.appendFileSync(j,g[a][2]+","+g[a][3]+","+m+","+g[a][5]+","+g[a][6]+","+g[a][7]+","+g[a][8]+","+g[a][10]+",0\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})})}})}catch(m){m&&(document.getElementById("om").innerHTML+="<br/>"+m)}Ext.getCmp("pbar3").updateText("Processing etf"+d+a+f+".csv completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>etf"+
d+a+f+".csv is processed";addlog(j,"etf"+d+a+f+".csv is processed");b++;e.length>b?(setTimeout(function(){process_nse_etf(e,b,c,k,l,p,j)},1E3),document.getElementById("om").innerHTML+=".."):Ext.getCmp("pbar3").updateProgress(0)}function monthDiff(e,b){var c;c=12*(b.getFullYear()-e.getFullYear());c-=e.getMonth()+1;c+=b.getMonth();return c+1};
