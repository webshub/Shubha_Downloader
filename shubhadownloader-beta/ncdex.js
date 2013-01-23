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
function process_ncdex(g,e,j,c,m,p,q){g[e].split("-");var k=g[e].split("-")[1],n=g[e].split("-")[2],l=g[e].split("-")[3];l.substr(2,2);require("fs");require("ya-csv");require("async");var r=c+"temp/",t="http://www.ncdex.com/Downloads/Bhavcopy_Summary_File/Export_csv/"+k+"-"+n+"-"+l+".csv",v=r+k+"-"+n+"-"+l+".csv",u=k+"-"+n+"-"+l+".csv";request({method:"GET",uri:t,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"gzip,deflate,sdch",
Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",Cookie:"cookie"}},function(s,d){null!=d?null!=d.statusCode||""!=d.statusCode?!s&&200==d.statusCode?(Ext.getCmp("pbar3").updateText("Downloading "+u),Ext.getCmp("pbar3").updateProgress(0.15),downloadNcdex(200,t,v,u,e,r,p,g,j,c,m,k,n,l,q)):downloadNcdex(404,t,v,u,e,r,p,g,j,c,m,k,n,l,q):downloadNcdex(404,t,v,u,e,r,p,g,j,c,m,k,n,l,q):downloadNcdex(404,t,v,u,e,r,p,g,j,c,m,k,n,l,q)})}
function downloadNcdex(g,e,j,c,m,p,q,k,n,l,r,t,v,u,s){var d=require("fs");require("ya-csv");require("async");200==g?(Ext.getCmp("pbar3").updateText("Downloading "+c),Ext.getCmp("pbar3").updateProgress(0.45),g=d.createWriteStream(j),e=request({method:"GET",uri:e,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11","Accept-Encoding":"gzip,deflate,sdch",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",Cookie:"cookie"}}),
e.on("error",function(){Ext.getCmp("pbar3").updateText("Error occured in downloading "+c);Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>Error occured in downloading "+c;addlog(s,"Error occured in downloading "+c);process_ncdex(k,m,n,l,r,q)}),e.pipe(g),e.on("end",function(){Ext.getCmp("pbar3").updateText("Downloading "+c+" completed");Ext.getCmp("pbar3").updateProgress(0.45);document.getElementById("om").innerHTML+="<br>NCDEXfno"+c+" is downloaded...";require("async").parallel({data1:function(e){d.existsSync(j)?
(Ext.getCmp("pbar3").updateText("Processing "+c),Ext.getCmp("pbar3").updateProgress(0.45),d.readFile(j,"utf-8",function(d,c){d&&(document.getElementById("om").innerHTML+="<br/>"+d);e(d,c)})):d.readdir(l,function(d){d&&(document.getElementById("om").innerHTML+="<br/>"+d);e(d,"0")})}},function(e,g){e&&(document.getElementById("om").innerHTML+="<br/>"+e);if(d.existsSync(j)){Ext.getCmp("pbar3").updateText("Processing "+c);Ext.getCmp("pbar3").updateProgress(0.75);for(var p=[],p=g.data1.split("\n"),b=[],
s=0;s<p.length;s++){var w=p[s].split(",");b.push(w)}var h=q+"NCDEX_Market_NCDEXfno"+t+""+v+""+u+".csv";d.writeFile(h,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);var e=[];for(a=1;a<b.length-1;a++)"undefined"!==typeof b[a][1]&&e.push(new Date(b[a][1].replace(/"/g,"").split("/")[2],b[a][1].replace(/"/g,"").split("/")[1]-1,b[a][1].replace(/"/g,"").split("/")[0]));var f=e.sort(function(a,b){return a.getTime()-b.getTime()});
a=f[1].getMonth()+1;e=f[1].getFullYear()+"/"+a+"/"+f[1].getDate();for(a=0;a<f.length;a++);for(a=1;a<b.length-1;a++){var f=b[a][1].split("/"),f=f[2].toString().concat(f[0].toString()),c=b[a][3],f=b[a][2].trim()+c.trim()+f,c=new Date(e),g=new Date(b[a][1].replace(/"/g,"").split("/")[2]+"/"+b[a][1].replace(/"/g,"").split("/")[0]+"/"+b[a][1].replace(/"/g,"").split("/")[1]),c=monthDiff(c,g);0==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-I,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+
","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});1==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-II,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});2==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-III,"+f.replace(/"/g,"").replace(/\s/g,
"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});3==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-IV,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});4==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-V,"+f.replace(/"/g,
"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});5==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-VI,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});6==c&&d.appendFileSync(h,b[a][0].toString().trim()+
"-VII,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});7==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-VIII,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});8==c&&d.appendFileSync(h,
b[a][0].toString().trim()+"-IX,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});9==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-X,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});
10==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-XI,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});11==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-XII,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a)});12==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-XIII,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});13==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-XIV,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a)});14==c&&d.appendFileSync(h,b[a][0].toString().trim()+"-XV,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});15==t&&d.appendFileSync(h,b[a][0].toString().trim()+"-XVI,"+f.replace(/"/g,"").replace(/\s/g,"")+","+b[a][15]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][10]+","+b[a][14]+"\n","utf-8",function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a)})}})}Ext.getCmp("pbar3").updateText("Processing "+c+" completed");Ext.getCmp("pbar3").updateProgress(1);m++;k.length>m?process_ncdex(k,m,n,l,r,q):Ext.getCmp("pbar3").updateProgress(0)})})):(document.getElementById("om").innerHTML+="<br/><font color=red>"+c+" is not present on server</font>",addlog(s,c+" is not present on server"),m++,k.length>m?process_ncdex(k,m,n,l,r,q,s):(Ext.getCmp("pbar3").updateProgress(0),visit("ncdex.html")))}
function monthDiff(g,e){var j;j=12*(e.getFullYear()-g.getFullYear());j-=g.getMonth()+1;j+=e.getMonth();return j+1};
