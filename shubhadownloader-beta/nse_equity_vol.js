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
function nse_equity_vol(b,c,e,d,a,f){Ext.getCmp("pbar3").updateText("NSE Equity Volume Processing is started . . .");Ext.getCmp("pbar3").updateProgress(0.05);require("url");require("async");require("http");require("fs");require("adm-zip");require("request");b=a.split("/");f=f.split("/");e=new Date(b[0]+","+b[1]+","+b[2]);a=new Date(f[0]+","+f[1]+","+f[2]);f=e.toDateString().split(" ");b=a.toDateString().split(" ");f[1].toUpperCase();e=e.getMonth()+1;a=a.getMonth()+1;c+="temp/";getmonth(a);10>a&&(a=
"0"+a);downloadAndProcessNSEEquityVol(f[2]+""+e+""+f[3],b[2]+""+a+""+b[3],c,d)}
function downloadAndProcessNSEEquityVol(b,c,e,d){var a="http://www.nseindia.com/content/nsccl/fao_participant_vol_"+c+".csv",f=e+"NSEtemp_vol_"+c+".csv",k="NSEtemp_vol_"+c+".csv";request({method:"GET",uri:a,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.nseindia.com/products/content/all_daily_reports.htm","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
Cookie:"cookie"}},function(c,b){if(null!=b&&(null!=b.statusCode||""!=b.statusCode)&&!c&&200==b.statusCode)Ext.getCmp("pbar3").updateText("Downloading "+k),Ext.getCmp("pbar3").updateProgress(0.15);downloadNSEEquityVol(200,a,f,k,d)})}
function downloadNSEEquityVol(b,c,e,d,a){200==b?(Ext.getCmp("pbar3").updateText("Downloading "+d),Ext.getCmp("pbar3").updateProgress(0.36),b=fs.createWriteStream(e),c=request({method:"GET",uri:c,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.nseindia.com/products/content/all_daily_reports.htm","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
Cookie:"cookie"}}),c.on("error",function(){Ext.getCmp("pbar3").updateText("Error occurred while downloading "+d+"");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>Error occured in downloading "+d}),c.pipe(b),c.on("end",function(){Ext.getCmp("pbar3").updateText(""+d+" is downloaded");Ext.getCmp("pbar3").updateProgress(0.55);document.getElementById("om").innerHTML+="<br>"+d+" is downloaded...";require("async").parallel({data1:function(b){fs.existsSync(e)?fs.readFile(e,
"utf-8",function(a,c){a&&(document.getElementById("om").innerHTML+="<br/>"+a);b(a,c)}):fs.readdir(downloadpath,function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);b(a,"0")})}},function(b,c){b&&(document.getElementById("om").innerHTML+="<br/>"+b);if(fs.existsSync(e)){Ext.getCmp("pbar3").updateText("Processing "+d+"");Ext.getCmp("pbar3").updateProgress(0.69);for(var h=[],h=c.data1.split("\n"),j=[],g=0;g<h.length;g++){var l=h[g].split(",");j.push(l)}a=a.replace(/std_csv/g,"reports");
for(g=0;g<j.length-1;g++)fs.appendFileSync(a+"NSE_fao_participant_vol_reports.csv",j[g]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});Ext.getCmp("pbar3").updateText("Processing "+d+" completed");Ext.getCmp("pbar3").updateProgress(1)}})})):(Ext.getCmp("pbar3").updateText("File "+d+" is not present on server"),Ext.getCmp("pbar3").updateProgress(1),document.getElementById("om").innerHTML+="<br/><font color=red>"+d+" is not present on server</font>")};
