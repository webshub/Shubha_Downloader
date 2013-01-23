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
function process_mcxspotindex(h,c,n,j,p,m){function k(d){var a;switch(d){case 327:a="scomdex";break;case 328:a="smetal";break;case 329:a="senergy";break;case 330:a="sagri"}return a}var f=require("fs");require("ya-csv");h=require("async");try{h.parallel({data1:function(d){f.existsSync(j+"mcxindia/MCXSpotIndex"+c+".csv")?f.readFile(j+"mcxindia/MCXSpotIndex"+c+".csv","utf-8",function(a,c){a&&(document.getElementById("om").innerHTML+="<br/>"+a);d(a,c)}):f.readdir(j,function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a);d(a,"0")})}},function(d,a){d&&(document.getElementById("om").innerHTML+="<br/>"+d);if(f.existsSync(j+"mcxindia/MCXSpotIndex"+c+".csv")){for(var l=[],l=a.data1.split("\n"),e=[],b=2;b<l.length-1;b++){var h=l[b].split(",");e.push(h)}var g=m+"MCX Indices_MCXSpotIndex"+k(c)+".csv";f.writeFile(g,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a);for(b=1;b<e.length;b++)f.appendFileSync(g,k(c)+","+k(c)+","+(e[b][0].split("/")[2]+
e[b][0].split("/")[0]+e[b][0].split("/")[1])+","+e[b][1]+",0,0,"+e[b][2]+",0,0\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})})}})}catch(g){console.log(g.stack),document.getElementById("om").innerHTML+="<br/>"+g}};
