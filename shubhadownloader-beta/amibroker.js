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
function process_amibroker(b){var a=b,a=a.replace(/std_csv/g,"amibroker");require("fs").readdir(b,function(c,d){c&&(document.getElementById("om").innerHTML+="<br/>"+c);startAmibroker(d,0,b,a)})}
function startAmibroker(b,a,c,d){var f=require("fs");console.log(d);try{var g=require("async");Ext.getCmp("pbar3").updateText("Processing "+b[a]);Ext.getCmp("pbar3").updateProgress(0.23);g.parallel({data1:function(d){f.existsSync(c+b[a])?f.readFile(c+b[a],"utf-8",function(a,b){a&&(document.getElementById("om").innerHTML+="<br/>"+a);d(a,b)}):f.readdir(c,function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);d(a,"0")})}},function(l,g){l&&(document.getElementById("om").innerHTML+="<br/>"+
l);if(f.existsSync(c+b[a])){Ext.getCmp("pbar3").updateText("Processing "+b[a]);Ext.getCmp("pbar3").updateProgress(0.48);for(var h=[],h=g.data1.split("\n"),j=[],e=0;e<h.length;e++){var k=h[e].split(",");j.push(k)}for(e=1;e<j.length;e++)f.appendFileSync(d+b[a],j[e]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})}a++;b.length>a?(Ext.getCmp("pbar3").updateProgress(0.8),startAmibroker(b,a,c,d)):(document.getElementById("om").innerHTML+="<br/>Amibroker is finished",Ext.getCmp("pbar3").updateProgress(0))})}catch(k){document.getElementById("om").innerHTML+=
"<br/>"+k}Ext.getCmp("pbar3").updateText("Processing "+b[a]+" completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>Amibroker "+b[a]+" is processed.."};
