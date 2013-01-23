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
function process_yahoo(a,b,c,h){require("url");a=require("async");require("http");var d=require("fs");require("adm-zip");require("request");require("ya-csv");var g=document.getElementById("datefield-1029-inputEl").value,f=document.getElementById("datefield-1031-inputEl").value;a.parallel({data1:function(a){d.existsSync("yahoo.csv")?d.readFile("yahoo.csv","utf-8",function(e,b){e&&(document.getElementById("om").innerHTML+="<br/>"+e);a(e,b)}):d.readdir(b,function(b){b&&(document.getElementById("om").innerHTML+=
"<br/>"+b);a(b,"0")})}},function(a,e){a&&(document.getElementById("om").innerHTML+="<br/>"+a);if(d.existsSync("yahoo.csv")){for(var c=[],c=e.data1.split("\n"),j=[],m=0;m<c.length;m++){var n=c[m].split(",");j.push(n)}downloadAndProcessYahoo(j,0,g,f,b+"temp_yahoo/",h)}})}
function downloadAndProcessYahoo(a,b,c,h,d,g){var f=parseInt(c.split("/")[0].toString())-1;9>f&&(f="0"+f);var k=parseInt(c.split("/")[1].toString())-1;9>k&&(k="0"+k);var e=parseInt(h.split("/")[0].toString())-1;9>e&&(e="0"+e);var l=parseInt(h.split("/")[1].toString())-1;9>l&&(l="0"+l);var j="http://ichart.finance.yahoo.com/table.csv?s="+a[b]+"&a="+f+"&b="+k+"&c="+c.split("/")[2].toString()+"&d="+e+"&e="+l+"&f="+h.split("/")[2].toString()+"&g=d&ignore=.csv";console.log("\nurl> "+j);var m=d+"temp_"+
a[b].toString().trim()+".csv",n="temp_"+a[b]+".csv";request({method:"GET",uri:j,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://finance.yahoo.com/d/quotes.csv?s=","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",Cookie:"cookie"}},function(e,f){null!=f?null!=f.statusCode||""!=f.statusCode?!e&&200==f.statusCode?downloadIndexData(200,j,m,n,a,b,c,
h,d,g):downloadIndexData(404,j,m,n,a,b,c,h,d,g):downloadIndexData(404,j,m,n,a,b,c,h,d,g):downloadIndexData(404,j,m,n,a,b,c,h,d,g)})}
function downloadIndexData(a,b,c,h,d,g,f,k,e,l){200==a?(a=fs.createWriteStream(c),b=request({method:"GET",uri:b,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://finance.yahoo.com/d/quotes.csv?s=","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",Cookie:"cookie"}}),b.on("error",function(){document.getElementById("om").innerHTML+="<br/>Error occured in downloading "+
h;downloadAndProcessYahoo(d,g,f,k,e)}),b.pipe(a),b.on("end",function(){document.getElementById("om").innerHTML+="<br>"+h+" is downloaded...";require("async").parallel({data1:function(a){fs.existsSync(c)?fs.readFile(c,"utf-8",function(b,c){b&&(document.getElementById("om").innerHTML+="<br/>"+b);a(b,c)}):fs.readdir(l,function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);a(b,"0")})}},function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);g++;d.length-1>g?downloadAndProcessYahoo(d,
g,f,k,e,l):document.getElementById("om").innerHTML+="<br/><font color=green> Finished </font>"})})):(document.getElementById("om").innerHTML+="<br/><font color=red>"+h+" is not present on server</font>",g++,d.length>g?downloadAndProcessYahoo(d,g,f,k,e,l):document.getElementById("om").innerHTML+="<br/><font color=green> Finished </font>")}function getDate(a){return 10>parseInt(a)?"0"+a:a}
function getMonth(a){switch(a){case "January":a="01";break;case "February":a="02";break;case "March":a="03";break;case "April":a="04";break;case "May":a="5";break;case "June":a="06";break;case "July":a="07";break;case "August":a="08";break;case "September":a="09";break;case "October":a="10";break;case "November":a="11";break;case "December":a="12"}return a};
