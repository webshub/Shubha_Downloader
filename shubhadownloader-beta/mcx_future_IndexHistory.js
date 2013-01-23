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
function mcx_Future_IndexHistory(n,c,B,y,C,M,D){function u(e,b,g,j,a,f,m){try{q=require("fs");require("ya-csv");require("async");var t=require("htmlparser");require("DomHandler");require("DomElementType");require("http");var q=require("fs"),E=require("request"),F="http://www.mcxindia.com/SitePages/indexhistory.aspx",h=E.get(F),v="",l="",c="",d="";""!==b[f]&&null!=b[f]&&(c=y+"mcxindia/MCXIndex"+b[f]+".csv",d=q.createWriteStream(c));h.on("response",function(a){a.on("data",function(a){v+=a})});h.on("error",
function(){u(e,b,g,j,a,f,m)});h.on("end",function(){var c="",r="";try{var s=new t.Parser({onopentag:function(a,b){"input"===a&&"__VIEWSTATE"===b.id&&(c=b.value)},ontext:function(){},onclosetag:function(){}});s.write(v);s.done();var q=new t.Parser({onopentag:function(a,b){"input"===a&&"__EVENTVALIDATION"===b.id&&(r=b.value)},ontext:function(){},onclosetag:function(){}});q.write(v);q.done();new t.FeedHandler(function(a){console.log("\n Error : "+a)})}catch(h){h&&(document.getElementById("om").innerHTML+=
"<br/>"+h)}s=E({method:"POST",uri:F,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:c.trim(),__EVENTVALIDATION:r.trim(),mDdlOtherIndex:b[f],mRbtLstSpotFut_0:"1",mTbFromDate:g,mTbToDate:j,"mBtnGo.x":"130","mBtnGo.y":"40"}});s.on("response",function(a){a.on("data",function(a){l+=a})});var z="",H="";s.on("error",function(){u(e,
b,g,j,a,f,m)});s.on("end",function(){function G(A){200==A?(A=E({method:"POST",uri:F,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:z.trim(),__EVENTVALIDATION:H.trim(),mDdlOtherIndex:b[f],mRbtLstSpotFut_0:"1",mTbFromDate:g,mTbToDate:j,__EVENTTARGET:"linkButton"}}),A.pipe(d),A.on("end",function(){f++;b.length>f?u(e,
b,g,j,a,f,m):(Ext.getCmp("pbar3").updateText("NSEL EOD Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.05),setTimeout(function(){for(var k=323;327>k;)process_mcxindex(n,k,B,y,C,a,D),k++},5E3),w(e,g,j,a,0,m))}),A.on("error",function(){u(e,b,g,j,a,f,m)})):(f++,b.length>f?u(e,b,g,j,a,f,m):(Ext.getCmp("pbar3").updateText("NSEL EOD Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.05),setTimeout(function(){for(var k=323;327>k;)process_mcxindex(n,k,B,y,C,a,D),k++},5E3),
w(e,g,j,a,0,m)))}try{var c=new t.Parser({onopentag:function(a,k){"input"===a&&"__VIEWSTATE"===k.id&&(z=k.value)},ontext:function(){},onclosetag:function(){}});c.write(l);c.done();var q=new t.Parser({onopentag:function(a,k){"input"===a&&"__EVENTVALIDATION"===k.id&&(H=k.value)},ontext:function(){},onclosetag:function(){}});q.write(l);q.done();new t.FeedHandler(function(a){console.log("\n Error : "+a)})}catch(h){h&&(document.getElementById("om").innerHTML+="<br/>"+h)}E({method:"POST",uri:F,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",
"Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:z.trim(),__EVENTVALIDATION:H.trim(),mDdlOtherIndex:b[f],mRbtLstSpotFut_0:"1",mTbFromDate:g,mTbToDate:j,__EVENTTARGET:"linkButton"}},function(a,k){null!=k?null!=k.statusCode||""!=k.statusCode?!a&&200==k.statusCode?G(k.statusCode):G(404):G(404):G(404)})})})}catch(z){z&&(document.getElementById("om").innerHTML+="<br/>"+z)}}function w(e,b,g,j,a,f){try{c=require("fs");require("ya-csv");require("async");
var m=require("htmlparser");require("DomHandler");require("DomElementType");require("http");var c=require("fs"),q=require("request"),l="http://www.mcxindia.com/SitePages/indexhistory.aspx",d=q.get(l),h="",v="",u,p="";""!==e[a]&&null!=e[a]&&(p=y+"mcxindia/MCXSpotIndex"+e[a]+".csv",u=c.createWriteStream(p));d.on("response",function(a){a.on("data",function(a){h+=a})});d.on("error",function(){w(e,b,g,j,a,f)});d.on("end",function(){var c="",d="";try{var r=new m.Parser({onopentag:function(a,b){"input"===
a&&"__VIEWSTATE"===b.id&&(c=b.value)},ontext:function(){},onclosetag:function(){}});r.write(h);r.done();var s=new m.Parser({onopentag:function(a,b){"input"===a&&"__EVENTVALIDATION"===b.id&&(d=b.value)},ontext:function(){},onclosetag:function(){}});s.write(h);s.done();new m.FeedHandler(function(a){console.log("\n Error : "+a)})}catch(p){p&&(document.getElementById("om").innerHTML+="<br/>"+p)}r=q({method:"POST",uri:l,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",
"Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:c.trim(),__EVENTVALIDATION:d.trim(),mRbtLstSpotFut:"0"}});r.on("response",function(a){a.on("data",function(a){v+=a})});var t="",x="";r.on("error",function(){w(e,b,g,j,a,f)});r.on("end",function(){try{var c=new m.Parser({onopentag:function(a,b){"input"===a&&"__VIEWSTATE"===b.id&&(t=b.value)},ontext:function(){},onclosetag:function(){}});c.write(v);c.done();var d=new m.Parser({onopentag:function(a,
b){"input"===a&&"__EVENTVALIDATION"===b.id&&(x=b.value)},ontext:function(){},onclosetag:function(){}});d.write(v);d.done();new m.FeedHandler(function(a){console.log("\n Error : "+a)})}catch(h){h&&(document.getElementById("om").innerHTML+="<br/>"+h)}var p="",c=q({method:"POST",uri:l,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:t.trim(),
__EVENTVALIDATION:x.trim(),mDdlOtherIndex:e[a],mTbFromDate:b,mTbToDate:g,"mBtnGo.x":"130","mBtnGo.y":"40"}});c.on("response",function(a){a.on("data",function(a){p+=a})});var r="",s="";c.on("error",function(){w(e,b,g,j,a,f)});c.on("end",function(){function c(d){200==d?(d=q({method:"POST",uri:l,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},
form:{__VIEWSTATE:r.trim(),__EVENTVALIDATION:s.trim(),mDdlOtherIndex:e[a],mTbFromDate:b,mTbToDate:g,__EVENTTARGET:"linkButton"}}),d.pipe(u),d.on("end",function(){document.getElementById("om").innerHTML+="<br/>MCXSpotIndex"+e[a]+".csv is downloaded";a++;I.length>a?w(e,b,g,j,a,f):(Ext.getCmp("pbar3").updateProgress(0.05),setTimeout(function(){for(var a=327;331>a;)process_mcxspotindex(n,a,B,y,C,j,D),a++},5E3))}),d.on("error",function(){w(e,b,g,j,a,f)})):(document.getElementById("om").innerHTML+="<br/>MCXSpotIndex"+
e[a]+".csv is not downloaded",a++,I.length>a?w(e,b,g,j,a,f):(Ext.getCmp("pbar3").updateProgress(0.05),setTimeout(function(){for(var a=327;331>a;)process_mcxspotindex(n,a,B,y,C,j,D),a++},5E3)))}try{var d=new m.Parser({onopentag:function(a,b){"input"===a&&"__VIEWSTATE"===b.id&&(r=b.value)},ontext:function(){},onclosetag:function(){}});d.write(p);d.done();var h=new m.Parser({onopentag:function(a,b){"input"===a&&"__EVENTVALIDATION"===b.id&&(s=b.value)},ontext:function(){},onclosetag:function(){}});h.write(p);
h.done();new m.FeedHandler(function(a){console.log("\n Error : "+a)})}catch(t){t&&(document.getElementById("om").innerHTML+="<br/>"+t)}q({method:"POST",uri:l,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"utf-8",Accept:"text/plain,application/csv,*/*;q=0.3",Cookie:"cookie"},form:{__VIEWSTATE:r.trim(),__EVENTVALIDATION:s.trim(),mDdlOtherIndex:e[a],mTbFromDate:b,mTbToDate:g,__EVENTTARGET:"linkButton"}},
function(a,b){null!=b?null!=b.statusCode||""!=b.statusCode?!a&&200==b.statusCode?c(b.statusCode):c(404):c(404):c(404)})})})})}catch(x){console.error(x.stack)}}var l=n[0].split("-")[0];n[0].split("-");c=n[0].split("-")[2];var x=n[0].split("-")[3];x.substr(2,2);var p=n[n.length-1].split("-")[0];n[n.length-1].split("-");var K=n[n.length-1].split("-")[2],J=n[n.length-1].split("-")[3];J.substr(2,2);l=parseInt(getMonth(l.toUpperCase()).toString());9>l&&(l="0"+l);var d=parseInt(getMonth(p.toUpperCase()).toString());
9>d&&(d="0"+d);var p=l+"/"+c+"/"+x,L=d+"/"+K+"/"+J;c=l+""+c+""+x+"_to_"+d+""+K+""+J;console.log("\n st date : "+p);console.log("\n st date : "+L);var I=["323","324","325","326"];u(["327","328","329","330"],I,p,L,M,0,c);visit("indices.html")};
