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
function process_bse_bulk(a,d,e,c,f,b){Ext.getCmp("pbar3").updateText("BSE Bulk Processing is started . . .");Ext.getCmp("pbar3").updateProgress(0.05);require("url");require("async");require("http");require("fs");require("adm-zip");require("request");a=f.split("/");b=b.split("/");a=new Date(a[0]+","+a[1]+","+a[2]);e=new Date(b[0]+","+b[1]+","+b[2]);f=a.toDateString().split(" ");b=e.toDateString().split(" ");f[1].toUpperCase();a.getMonth();a=e.getMonth()+1;d+="temp/";a=getmonth(a);b=b[2]+a.substring(0,
1).toUpperCase()+a.substring(1).toLowerCase()+b[3];downloadAndProcessBSEBulk(b,d,c)}
function downloadAndProcessBSEBulk(a,d,e){var c="http://www.bseindia.com/stockinfo/BulkBlockFiles/Bulk_"+a+".csv",f=d+"temp_bulk_"+a+".csv",b="temp_bulk_"+a+".csv";request({method:"GET",uri:c,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.bseindia.com/stockinfo/BulknBlockDeals.aspx","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",Cookie:"cookie"}},
function(d,j){null!=j?null!=j.statusCode||""!=j.statusCode?!d&&200==j.statusCode?(Ext.getCmp("pbar3").updateText("Downloading "+b),Ext.getCmp("pbar3").updateProgress(0.13),downloadBulkData(200,c,f,b,a,e)):downloadBulkData(404,c,f,b,a,e):downloadBulkData(404,c,f,b,a,e):downloadBulkData(404,c,f,b,a,e)})}
function downloadBulkData(a,d,e,c,f,b){200==a?(Ext.getCmp("pbar3").updateText("Downloading "+c),Ext.getCmp("pbar3").updateProgress(0.36),a=fs.createWriteStream(e),d=request({method:"GET",uri:d,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.bseindia.com/stockinfo/BulknBlockDeals.aspx","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",Cookie:"cookie"}}),
d.on("error",function(){Ext.getCmp("pbar3").updateText("Error occurred while downloading "+c+"");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>Error occured in downloading "+c}),d.pipe(a),d.on("end",function(){Ext.getCmp("pbar3").updateText(""+c+" is downloaded");Ext.getCmp("pbar3").updateProgress(0.55);document.getElementById("om").innerHTML+="<br>"+c+" is downloaded...";require("async").parallel({data1:function(a){fs.existsSync(e)?fs.readFile(e,"utf-8",function(b,
c){a(b,c)}):fs.readdir(downloadpath,function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);a(b,"0")})}},function(a,d){a&&(document.getElementById("om").innerHTML+="<br/>"+a);if(fs.existsSync(e)){Ext.getCmp("pbar3").updateText("Processing "+c+"");Ext.getCmp("pbar3").updateProgress(0.65);for(var f=[],f=d.data1.split("\n"),h=[],g=0;g<f.length;g++){var k=f[g].split(",");h.push(k)}b=b.replace(/std_csv/g,"/reports");if(fs.existsSync(b+"bsebulkdeals.csv"))for(g=1;g<h.length-1;g++)fs.appendFileSync(b+
"bsebulkdeals.csv",h[g]+"\n","utf-8",function(a){if(a)throw a;});else{for(g=0;g<h.length-1;g++)fs.appendFileSync(b+"bsebulkdeals.csv",h[g]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});Ext.getCmp("pbar3").updateText("Processing "+c+" completed");Ext.getCmp("pbar3").updateProgress(1)}}})})):(Ext.getCmp("pbar3").updateText("File "+c+" is not present on server"),Ext.getCmp("pbar3").updateProgress(1),document.getElementById("om").innerHTML+="<br/><font color=red>"+
c+" is not present on server</font>")};
