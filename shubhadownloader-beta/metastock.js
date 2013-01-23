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
function process_metastock(d){console.log("\n op Metastok  path = "+d);var b=d,b=b.replace(/std_csv/g,"metastock");mkdir(b);require("fs").readdir(d,function(e,f){e&&console.log(e);startMetastock(f,0,d,b)})}
function startMetastock(d,b,e,f){try{require("async").parallel({data1:function(f){fs.existsSync(e+d[b])?(Ext.getCmp("pbar3").updateText("Processing "+d[b]),Ext.getCmp("pbar3").updateProgress(0.18),fs.readFile(e+d[b],"utf-8",function(b,d){f(b,d)})):fs.readdir(e,function(b){f(b,"0")})}},function(j,h){if(j)throw j;if(fs.existsSync(e+d[b])){Ext.getCmp("pbar3").updateText("Processing "+d[b]);Ext.getCmp("pbar3").updateProgress(0.58);for(var g=[],g=h.data1.split("\n"),c=[],a=0;a<g.length;a++){var k=g[a].split(",");
c.push(k)}for(a=0;a<c.length-1;a++)0<a?fs.appendFileSync(f+d[b],c[a][0]+","+c[a][1]+","+c[a][2]+",D,"+c[a][3]+","+c[a][4]+","+c[a][5]+","+c[a][6]+","+c[a][7]+","+c[a][8]+"\n","utf-8",function(a){if(a)throw a;}):fs.appendFileSync(f+d[b],c[a][0]+","+c[a][1]+","+c[a][2]+",PER,"+c[a][3]+","+c[a][4]+","+c[a][5]+","+c[a][6]+","+c[a][7]+","+c[a][8]+"\n","utf-8",function(a){if(a)throw a;})}b++;d.length>b?(Ext.getCmp("pbar3").updateText("Processing "+d[b]+" completed"),Ext.getCmp("pbar3").updateProgress(1),
startMetastock(d,b,e,f)):document.getElementById("om").innerHTML+="<br/>Ninja finished"})}catch(h){document.getElementById("om").innerHTML+="<br/>"+h}document.getElementById("om").innerHTML+="<br/>metastock  "+d[b]+" is processed.."};
