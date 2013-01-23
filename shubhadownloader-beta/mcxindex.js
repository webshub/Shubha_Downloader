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
function process_mcxindex(h,d,n,j,p,m){function k(e){var a;switch(e){case 323:a="comdex";break;case 324:a="Metal";break;case 325:a="energy";break;case 326:a="agri"}return a}var g=require("fs");require("ya-csv");h=require("async");try{h.parallel({data1:function(e){g.existsSync(j+"mcxindia/MCXIndex"+d+".csv")?g.readFile(j+"mcxindia/MCXIndex"+d+".csv","utf-8",function(a,d){a&&(document.getElementById("om").innerHTML+="<br/>"+a);e(a,d)}):g.readdir(j,function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a);e(a,"0")})}},function(e,a){e&&(document.getElementById("om").innerHTML+="<br/>"+e);if(g.existsSync(j+"mcxindia/MCXIndex"+d+".csv")){for(var f=[],f=a.data1.split("\n"),c=[],b=2;b<f.length-1;b++){var h=f[b].split(",");c.push(h)}var l=m+"MCX Indices_MCXIndex"+k(d)+".csv";g.writeFile(l,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);for(b=1;b<c.length;b++)g.appendFileSync(l,k(d)+","+k(d)+","+(c[b][0].split("/")[2]+
c[b][0].split("/")[0]+c[b][0].split("/")[1])+","+c[b][1]+","+c[b][2]+","+c[b][3]+","+c[b][4]+",0,0\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})});visit("indices.html")}})}catch(f){f&&(document.getElementById("om").innerHTML+="<br/>"+f),document.getElementById("om").innerHTML+="<br/>"+f}};
