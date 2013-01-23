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
function process_nesl(g,c,p,j,q,m,k){g[c].split("-");var e=g[c].split("-")[1],f=g[c].split("-")[2],b=g[c].split("-")[3];b.substr(2,2);var h=require("fs");require("ya-csv");var r=require("async");try{r.parallel({data1:function(c){h.existsSync(j+"nsxbhavcopy"+f+e+b+".csv")?(Ext.getCmp("pbar3").updateText("Processing nsxbhavcopy"+f+e+b+".csv"),Ext.getCmp("pbar3").updateProgress(0.45),h.readFile(j+"nsxbhavcopy"+f+e+b+".csv","utf-8",function(b,e){b&&(document.getElementById("om").innerHTML+="<br/>"+b);
c(b,e)})):h.readdir("html",function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);c(b,"0")})}},function(c,g){c&&(document.getElementById("om").innerHTML+="<br/>"+c);if(h.existsSync(j+"nsxbhavcopy"+f+e+b+".csv")){Ext.getCmp("pbar3").updateText("Processing nsxbhavcopy"+f+e+b+".csv");Ext.getCmp("pbar3").updateProgress(0.75);for(var l=[],l=g.data1.split("\n"),d=[],a=0;a<l.length-1;a++){var k=l[a].split(",");d.push(k)}for(a=0;a<d.length;a++)if(null==d[a][12]||""==d[a][12])d[a][12]="";var n=
m+"National_Spot_nesl"+f+e+b+".csv";h.writeFile(n,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(c){c&&(document.getElementById("om").innerHTML+="<br/>"+c);c=b+e+f;for(a=1;a<d.length;a++)h.appendFileSync(n,d[a][1]+","+d[a][1]+","+c+","+d[a][2]+","+d[a][3]+","+d[a][4]+","+d[a][5]+","+parseInt(d[a][7])+","+parseInt(d[a][9])+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});Ext.getCmp("pbar3").updateText("Processing nsxbhavcopy"+f+e+b+".csv completed");
Ext.getCmp("pbar3").updateProgress(1)})}})}catch(s){document.getElementById("om").innerHTML+="<br/>"+s}document.getElementById("om").innerHTML+="<br/>nsel"+f+e+b+".csv is processed..";addlog(k,"nsxbhavcopy"+f+e+b+".csv is processed..");c++;g.length>c&&(setTimeout(function(){process_nesl(g,c,p,j,q,m,k)},1E3),document.getElementById("om").innerHTML+="..")};
