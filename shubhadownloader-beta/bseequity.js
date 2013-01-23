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
function process_bseequity(m,h,w,q,p,r,s){m[h].split("-");var c=m[h].split("-")[1],e=m[h].split("-")[2],t=m[h].split("-")[3],f=t.substr(2,2),j=require("fs");require("ya-csv");var k=require("async");try{k.parallel({data1:function(u){j.existsSync(p+"EQ"+e+c+f+".CSV")?(Ext.getCmp("pbar3").updateText("Processing EQ"+e+c+f+".CSV"),Ext.getCmp("pbar3").updateProgress(0.17),j.readFile(p+"EQ"+e+c+f+".CSV","utf-8",function(b,c){b&&(document.getElementById("om").innerHTML+="<br/>"+b);u(b,c)})):j.readdir(q,function(b){b&&
(document.getElementById("om").innerHTML+="<br/>"+b);u(b,"0")})},data2:function(f){j.existsSync(p+"SCBSEALL"+e+c+".txt")?j.readFile(p+"SCBSEALL"+e+c+".txt","utf-8",function(b,c){b&&(document.getElementById("om").innerHTML+="<br/>"+b);f(b,c)}):j.readdir(q,function(c){c&&(document.getElementById("om").innerHTML+="<br/>"+c);f(c,"0")})}},function(h,b){if(h)throw h;if(j.existsSync(p+"EQ"+e+c+f+".CSV")){Ext.getCmp("pbar3").updateText("Processing EQ"+e+c+f+".CSV");Ext.getCmp("pbar3").updateProgress(0.4);
for(var n=[],n=b.data1.split("\n"),d=[],a=0;a<n.length-1;a++){var l=n[a].split(",");d.push(l)}if(j.existsSync(p+"SCBSEALL"+e+c+".txt")){l=[];l=b.data2.split("\n");n=[];for(a=0;a<l.length-1;a++){var m=l[a].split("|");n.push(m)}for(a=0;a<d.length;a++)for(l=1;l<n.length;l++)d[a][0].toString()==n[l][1].toString()&&(d[a][14]=n[l][2])}for(a=0;a<d.length;a++)if(null==d[a][14]||""==d[a][14])d[a][14]=" ";var k=[];j.appendFile(r+"BSE_Cash_Market_EQ"+e+c+f+".CSV","TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",
function(a){a&&console.log(a);for(a=0;a<d.length;a++){for(var b=[],g=0;g<d[a].length;g++)0==g?b.push(d[a][0]):1==g?b.push(d[a][1]):2==g?b.push(t+c+e):3==g?b.push(d[a][5]):4==g?b.push(d[a][6]):5==g?b.push(d[a][7]):6==g?b.push(d[a][8]):7==g?b.push(d[a][11]):8==g&&b.push(d[a][14]);k.push(b)}for(a=1;a<k.length;a++)j.appendFileSync(r+"BSE_Cash_Market_EQ"+e+c+f+".CSV",k[a]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})})}})}catch(v){v&&(document.getElementById("om").innerHTML+=
"<br/>"+v)}for(k=0.4;1>k;)Ext.getCmp("pbar3").updateText("Processing EQ"+e+c+f+".CSV"),Ext.getCmp("pbar3").updateProgress(k),k+=1E-4;Ext.getCmp("pbar3").updateText("Processing EQ"+e+c+f+".CSV completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>EQ"+e+c+f+".CSV is processed..";addlog(s,"EQ"+e+c+f+".CSV is processed..");h++;m.length>h?(setTimeout(function(){process_bseequity(m,h,w,q,p,r,s)},1E3),document.getElementById("om").innerHTML+=".."):(Ext.getCmp("pbar3").updateProgress(0),
visit("bsecm.html"))};
