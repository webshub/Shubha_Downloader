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
function advanceget_eod(c){Ext.getCmp("pbar3").updateText("Processing Advanced EOD started");Ext.getCmp("pbar3").updateProgress(0.19);var b=c,b=b.replace(/std_csv/g,"advanceget");mkdir(b);require("fs").readdir(c,function(e,f){e&&(document.getElementById("om").innerHTML+="<br/><font color='red' Cannot not read "+c+" directory. </font>");Ext.getCmp("pbar3").updateText("Processing Advanced EOD started");Ext.getCmp("pbar3").updateProgress(0.39);startAdvanceget_eod(f,0,c,b)})}
function startAdvanceget_eod(c,b,e,f){try{require("async").parallel({data1:function(f){fs.existsSync(e+c[b])?(Ext.getCmp("pbar3").updateText("Processing "+c[b]),Ext.getCmp("pbar3").updateProgress(0.49),fs.readFile(e+c[b],"utf-8",function(e,g){e&&(document.getElementById("om").innerHTML+="<br/><font color='red' Problem occurred while reading "+c[b]+" file. </font>");f(e,g)})):fs.readdir(e,function(b){f(b,"0")})}},function(h,j){h&&(document.getElementById("om").innerHTML+="<br/><font color='red' Error occurred while processing "+
c[b]+" file. </font>");if(fs.existsSync(e+c[b])){Ext.getCmp("pbar3").updateText("Processing "+c[b]);Ext.getCmp("pbar3").updateProgress(0.6);for(var g=[],g=j.data1.split("\n"),d=[],a=0;a<g.length;a++){var k=g[a].split(",");d.push(k)}for(a=0;a<d.length-1;a++)0<a?fs.appendFileSync(f+c[b],d[a][0]+","+d[a][2]+",D,"+d[a][3]+","+d[a][4]+","+d[a][5]+","+d[a][6]+","+d[a][7]+","+d[a][8]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/><font color='red' Error occurred while writing "+
c[b]+" file. </font>")}):fs.appendFileSync(f+c[b],d[a][0]+","+d[a][2]+",PER,"+d[a][3]+","+d[a][4]+","+d[a][5]+","+d[a][6]+","+d[a][7]+","+d[a][8]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/><font color='red' Error occurred while writing "+c[b]+" file. </font>")});Ext.getCmp("pbar3").updateText("Processing "+c[b]+" completed");Ext.getCmp("pbar3").updateProgress(1)}b++;c.length>b?startAdvanceget_eod(c,b,e,f):document.getElementById("om").innerHTML+="<br/> finished"})}catch(h){document.getElementById("om").innerHTML+=
"<br/>"+h}document.getElementById("om").innerHTML+="<br/>Advanceget "+c[b]+" is processed.."};
