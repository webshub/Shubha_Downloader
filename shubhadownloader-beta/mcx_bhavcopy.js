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
function mcx_bhavcopy(a,b,j,d,k,l,m){var n=a[b].split("-")[0];a[b].split("-");var p=a[b].split("-")[2],e=a[b].split("-")[3];e.substr(2,2);var c=parseInt(getMonth(n.toUpperCase()).toString());10>c&&(c="0"+c);var v=c+"/"+p+"/"+e;if((new Date).getFullYear()==e)try{A=require("fs");require("ya-csv");require("async");var q=require("htmlparser");require("DomHandler");require("DomElementType");require("http");var A=require("fs"),r=require("request"),s="http://www.mcxindia.com/SitePages/BhavCopyDateWise.aspx",
f=r.get(s),t="",u="";f.on("response",function(a){a.on("data",function(a){t+=a})});f.on("end",function(){var c="",f="";try{var g=new q.Parser({onopentag:function(a,b){"input"===a&&"__VIEWSTATE"===b.id&&(c=b.value)},ontext:function(){},onclosetag:function(){}});g.write(t);g.done();var h=new q.Parser({onopentag:function(a,b){"input"===a&&"__EVENTVALIDATION"===b.id&&(f=b.value)},ontext:function(){},onclosetag:function(){}});h.write(t);h.done();new q.FeedHandler(function(){})}catch(B){B&&(document.getElementById("om").innerHTML+=
"<br/>"+B)}g=r({method:"POST",uri:s,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:c.trim(),__EVENTVALIDATION:f.trim(),mTbdate:v,"mImgBtnGo.x":"13","mImgBtnGo.y":"6"}});g.on("response",function(a){a.on("data",function(a){u+=a})});var w="",x="";g.on("end",function(){function c(y){if(200==y){document.getElementById("om").innerHTML+=
"<br/>mcxbhavcopy"+n+p+e+".csv is downloading..";y=A.createWriteStream(d+"mcxbhavcopy_"+n+p+e+".csv");var z=r({method:"POST",uri:s,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:w.trim(),__EVENTVALIDATION:x.trim(),mTbdate:v,__EVENTTARGET:"btnLink_Excel"}});z.pipe(y);z.on("end",function(){document.getElementById("om").innerHTML+=
"<br/>mcxbhavcopy"+n+p+e+".csv is downloaded";b++;a.length>b?mcx_bhavcopy(a,b,j,d,k,l,m):setTimeout(function(){process_mcxeodc(a,0,j,d,k,l,m)},2E3)});z.on("error",function(){document.getElementById("om").innerHTML+="<br/>Problem in downloading mcxbhavcopy"+n+p+e+".csv";mcx_bhavcopy(a,b,j,d,k,l,m)})}else document.getElementById("om").innerHTML+="<br/><font color=red>mcxbhavcopy"+n+p+e+".csv file not found on server</font>",b++,a.length>b?mcx_bhavcopy(a,b,j,d,k,l,m):setTimeout(function(){process_mcxeodc(a,
0,j,d,k,l,m)},2E3)}try{var f=new q.Parser({onopentag:function(a,b){"input"===a&&"__VIEWSTATE"===b.id&&(w=b.value)},ontext:function(){},onclosetag:function(){}});f.write(u);f.done();var g=new q.Parser({onopentag:function(a,b){"input"===a&&"__EVENTVALIDATION"===b.id&&(x=b.value)},ontext:function(){},onclosetag:function(){}});g.write(u);g.done();new q.FeedHandler(function(){})}catch(h){h&&(document.getElementById("om").innerHTML+="<br/>"+h)}r({method:"POST",uri:s,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",
"Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:w.trim(),__EVENTVALIDATION:x.trim(),mTbdate:v,__EVENTTARGET:"btnLink_Excel"}},function(a,b){null!=b?null!=b.statusCode||""!=b.statusCode?!a&&200==b.statusCode?c(b.statusCode):c(404):c(404):c(404)})})})}catch(h){h&&(document.getElementById("om").innerHTML+="<br/>"+h)}else b++,a.length>b?mcx_bhavcopy(a,b,j,d,k,l,m):setTimeout(function(){process_mcxeodc(a,0,j,d,k,l,m)},2E3)};
