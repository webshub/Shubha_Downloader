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
function process_nsxeod(a,b,k,e,l,m,f){a[b].split("-");var g=a[b].split("-")[1],h=a[b].split("-")[2],c=a[b].split("-")[3];c.substr(2,2);if((new Date).getFullYear()==c)try{require("ya-csv");require("async");var n=require("htmlparser");require("DomHandler");require("DomUtils");require("DomElementType");require("http");var z=require("fs"),u=require("request"),p=u.get("http://www.nationalspotexchange.com/Sitepages/BhavCopyDateWise.aspx"),q="",s="";p.end();p.on("response",function(a){a.on("data",function(a){q+=
a})});p.on("end",function(){var p="",v="";try{var d=new n.Parser({onopentag:function(a,b){"input"===a&&"__VIEWSTATE"===b.id&&(p=b.value)},ontext:function(){},onclosetag:function(){}});d.write(q);d.done();var j=new n.Parser({onopentag:function(a,b){"input"===a&&"__EVENTVALIDATION"===b.id&&(v=b.value)},ontext:function(){},onclosetag:function(){}});j.write(q);j.done();new n.FeedHandler(function(a){console.log("\n Error : "+a)})}catch(t){t&&(document.getElementById("om").innerHTML+="<br/>"+t)}d=u({method:"POST",
uri:"http://www.nationalspotexchange.com/Sitepages/BhavCopyDateWise.aspx",headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:p.trim(),__EVENTVALIDATION:v.trim(),mTbdate:g+"/"+h+"/"+c,mBtnGo:"GO"}});d.on("response",function(a){a.on("data",function(a){s+=a})});var x="";d.on("end",function(){function d(w){var r=(new Date).getFullYear();
200==w&&c==r?(document.getElementById("om").innerHTML+="<br/>nsxbhavcopy"+h+g+c+".csv is dwonloading..",w=z.createWriteStream(e+"nsxbhavcopy"+h+g+c+".csv"),r="http://www.nationalspotexchange.com/"+x.substring(4),r=u({method:"GET",uri:r,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",Referer:"http://www.nationalspotexchange.com","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"}}),r.pipe(w),
r.on("end",function(){document.getElementById("om").innerHTML+="<br/>nsxbhavcopy"+h+g+c+".csv is dwonloaded..";addlog(f,"nsxbhavcopy"+h+g+c+".csv is downloaded..");b++;a.length>b?(setTimeout(function(){process_nsxeod(a,b,k,e,l,m,f)},1E3),document.getElementById("om").innerHTML+=".."):(Ext.getCmp("pbar3").updateProgress(0),setTimeout(function(){process_nesl(a,0,k,e,l,m,f)},2E3))}),r.on("error",function(){document.getElementById("om").innerHTML+="<br/>Problem in dwonloading file nsxbhavcopy"+h+g+c+
".csv ";setTimeout(function(){process_nsxeod(a,b,k,e,l,m,f)},1E3)})):(document.getElementById("om").innerHTML+="<br/><font color=red>nsxbhavcopy"+h+g+c+".csv file is not found on sever.</font>",b++,a.length>b?(setTimeout(function(){process_nsxeod(a,b,k,e,l,m,f)},1E3),document.getElementById("om").innerHTML+=".."):(Ext.getCmp("pbar3").updateProgress(0),setTimeout(function(){process_nesl(a,0,k,e,l,m,f)},2E3)))}try{var j=new n.Parser({onopentag:function(){},ontext:function(){},onclosetag:function(){}});
j.write(s);j.done();var q=new n.Parser({onopentag:function(){},ontext:function(){},onclosetag:function(){}});q.write(s);q.done();var t=new n.Parser({onopentag:function(a,b){"a"===a&&"bluelinks"===b["class"]&&(x=b.href)},ontext:function(){},onclosetag:function(){}});t.write(s);t.done();new n.FeedHandler(function(a){console.log("\n Error : "+a)})}catch(y){y&&(document.getElementById("om").innerHTML+="<br/>"+y)}u({method:"POST",uri:"http://www.nationalspotexchange.com/Sitepages/BhavCopyDateWise.aspx",
headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:p.trim(),__EVENTVALIDATION:v.trim(),mTbdate:g+"/"+h+"/"+c,mBtnGo:"GO"}},function(a,b){null!=b?null!=b.statusCode||""!=b.statusCode?!a&&200==b.statusCode?d(b.statusCode):d(404):d(404):d(404)})})})}catch(j){j&&(document.getElementById("om").innerHTML+="<br/>"+j)}else b++,
a.length>b?process_nsxeod(a,b,k,e,l,m,f):(Ext.getCmp("pbar3").updateProgress(0),setTimeout(function(){process_nesl(a,0,k,e,l,m,f)},2E3))};
