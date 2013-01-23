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
function process_nse_blockdeal(b,d,a,e,c,f){Ext.getCmp("pbar3").updateText("NSE Block Deal Processing is started . . .");Ext.getCmp("pbar3").updateProgress(0.01);require("url");require("async");require("http");require("fs");require("adm-zip");require("request");b=c.split("/");f=f.split("/");a=new Date(b[0]+","+b[1]+","+b[2]);c=new Date(f[0]+","+f[1]+","+f[2]);f=a.toDateString().split(" ");b=c.toDateString().split(" ");f[1].toUpperCase();a=a.getMonth()+1;c=c.getMonth()+1;d+="temp/";getmonth(c);10>
c&&(c="0"+c);10>a&&(a="0"+a);downloadAndProcessNSEBlock(f[2]+"-"+a+"-"+f[3],b[2]+"-"+c+"-"+b[3],d,e)}
function downloadAndProcessNSEBlock(b,d,a,e){var c="http://www.nseindia.com/content/equities/bulkdeals/datafiles/"+b+"-TO-"+d+"_block.csv",f=a+"NSEtemp_block_"+b+"-TO-"+d+".csv",k="NSEtemp_block_"+b+"-TO-"+d+".csv";request({method:"GET",uri:c,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.nseindia.com/products/content/equities/equities/eq_blockdealsarchive.htm","Accept-Encoding":"gzip,deflate,sdch",
Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",Cookie:"cookie"}},function(b,a){if(null!=a&&(null!=a.statusCode||""!=a.statusCode)&&!b&&200==a.statusCode)Ext.getCmp("pbar3").updateText("Downloading "+k),Ext.getCmp("pbar3").updateProgress(0.1);downloadNSEBlockData(200,c,f,k,e)})}
function downloadNSEBlockData(b,d,a,e,c){200==b?(Ext.getCmp("pbar3").updateText("Downloading "+e),Ext.getCmp("pbar3").updateProgress(0.2),b=fs.createWriteStream(a),d=request({method:"GET",uri:d,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.nseindia.com/products/content/equities/equities/eq_blockdealsarchive.htm","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
Cookie:"cookie"}}),d.on("error",function(){Ext.getCmp("pbar3").updateText("Error occurred while downloading "+e+"");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>Error occured in downloading "+e}),d.pipe(b),d.on("end",function(){Ext.getCmp("pbar3").updateText(""+e+" is downloaded");Ext.getCmp("pbar3").updateProgress(0.4);document.getElementById("om").innerHTML+="<br>"+e+" is downloaded...";require("async").parallel({data1:function(c){fs.existsSync(a)?fs.readFile(a,
"utf-8",function(a,b){a&&(document.getElementById("om").innerHTML+="<br/>"+a);c(a,b)}):fs.readdir(downloadpath,function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);c(a,"0")})}},function(b,d){b&&(document.getElementById("om").innerHTML+="<br/>"+b);if(fs.existsSync(a)){Ext.getCmp("pbar3").updateText("Processing "+e+"");Ext.getCmp("pbar3").updateProgress(0.6);for(var j=[],j=d.data1.split("\n"),h=[],g=0;g<j.length;g++){var l=j[g].split(",");h.push(l)}c=c.replace(/std_csv/g,"reports");if(fs.existsSync(c+
"NSE_block_deals.csv"))for(g=1;g<h.length-1;g++)fs.appendFileSync(c+"NSE_block_deals.csv",h[g]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});else{for(g=0;g<h.length-1;g++)fs.appendFileSync(c+"NSE_block_deals.csv",h[g]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});Ext.getCmp("pbar3").updateText("Processing "+e+" completed");Ext.getCmp("pbar3").updateProgress(1)}}})})):(Ext.getCmp("pbar3").updateText("File "+e+" is not present on server"),
Ext.getCmp("pbar3").updateProgress(1),document.getElementById("om").innerHTML+="<br/><font color=red>"+e+" is not present on server</font>")};
