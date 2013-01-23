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
function process_nse_cmbnd_rpt(a,b,c,g,h,j){j=j.replace(/std_csv/g,"reports");a[b].split("-");var k=a[b].split("-")[1],l=a[b].split("-")[2],f=a[b].split("-")[3];f.substr(2,2);var d=require("fs");require("ya-csv");var q=require("async");try{q.parallel({data1:function(b){d.existsSync(h+"combined_report"+l+k+f+".xls")?d.readFile(h+"combined_report"+l+k+f+".xls","utf-8",function(m,a){m&&(document.getElementById("om").innerHTML+="<br/>"+m);console.log("\n Reading pd.csv");b(m,a)}):d.readdir(g,function(a){a&&
(document.getElementById("om").innerHTML+="<br/>"+a);b(a,"0")})}},function(a,b){a&&(document.getElementById("om").innerHTML+="<br/>"+a);if(d.existsSync(h+"combined_report"+l+k+f+".xls")){for(var c=[],c=b.data1.split("\n"),n=[],e=0;e<c.length;e++){var g=c[e].split(",");n.push(g)}c=j+"NSE_combined_report.xls";if(d.existsSync(c))for(e=1;e<n.length;e++)d.appendFileSync(c,n[e]+"\n","UTF-8",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)});else d.writeFile(c,b.data1,function(a){a&&(document.getElementById("om").innerHTML+=
"<br/>"+a)})}})}catch(p){p&&(document.getElementById("om").innerHTML+="<br/>"+p)}document.getElementById("om").innerHTML+="<br/>combined_report"+l+k+f+".xls is processed..";b++;a.length>b?(setTimeout(function(){process_nse_cmbnd_rpt(a,b,c,g,h,j)},5E3),document.getElementById("om").innerHTML+=".."):($("#p3").hide(),document.getElementById("om").innerHTML+="<br/><font color=green>All Finished..</font>")}
function monthDiff(a,b){var c;c=12*(b.getFullYear()-a.getFullYear());c-=a.getMonth()+1;c+=b.getMonth();return c+1};
