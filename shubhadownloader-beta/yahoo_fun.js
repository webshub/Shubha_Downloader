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
function process_yahoodata(h,d){try{var b=[];reader=require("ya-csv").createCsvFileReader("shubhadownloader/yahoo.csv",{separator:","});reader.addListener("data",function(a){if(" "==a[0]){a=b.toString().replace(/,/g,"+");require("http");var c=require("fs"),e=require("request"),f="http://download.finance.yahoo.com/d/quotes.csv?s="+a+"&f=snl1ee7e8e9r5b4j4p5s6s7r1qdt8j1f6&e=.csv";e({method:"GET",uri:f,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",
Referer:"","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,**;q=0.8",Cookie:"cookie"}},function(a,b){if(200==b.statusCode){var j=c.createWriteStream(h+"Yahoo_Fundamental.csv"),g=e({method:"GET",uri:f,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,**;q=0.8",Cookie:"cookie"}});
g.pipe(j);g.on("end",function(){document.getElementById("om").innerHTML+="<br/>Yahoo_Fundamental.csv is downloaded";addlog(d,"Yahoo_Fundamental.csv is downloaded");visit("yahoofunda.html")})}else document.getElementById("om").innerHTML+="<br/><font color=red>Yahoo_Fundamental.csv  is not on server</font>",addlog(d,"Yahoo_Fundamental.csv  is not on server")})}else b.push(a[0])})}catch(c){c&&(document.getElementById("om").innerHTML+="<br/>"+c)}};
