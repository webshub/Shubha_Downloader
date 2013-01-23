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
function process_nseindex(f,b,d,l,m,k,q){f[b].split("-");var e=f[b].split("-")[1],g=f[b].split("-")[2],p=f[b].split("-")[3],h=p.substr(2,2),j=require("fs");require("ya-csv");var s=require("async");try{s.parallel({data1:function(r){j.existsSync(m+"pd"+g+e+h+".csv")?(Ext.getCmp("pbar3").updateText("Processing pd"+g+e+h+".csv"),Ext.getCmp("pbar3").updateProgress(0.33),j.readFile(m+"pd"+g+e+h+".csv","utf-8",function(b,e){r(b,e)})):j.readdir(l,function(b){r(b,"0")})}},function(b,f){if(b)throw b;if(j.existsSync(m+
"pd"+g+e+h+".csv")){Ext.getCmp("pbar3").updateText("Processing pd"+g+e+h+".csv");Ext.getCmp("pbar3").updateProgress(0.7);for(var d=[],d=f.data1.split("\n"),c=[],a=0;a<d.length;a++){var l=d[a].split(",");c.push(l)}var n=k+"NSE_Indices_nseindex.csv";if(j.existsSync(n)){d=p+e+g;for(a=1;a<c.length&&" "!=c[a][3];a++)j.appendFileSync(n,c[a][3].replace(/\s/g,"")+","+c[a][3]+","+d+","+c[a][5]+","+c[a][6]+","+c[a][7]+","+c[a][8]+","+c[a][10]+",\n","UTF-8",function(a){if(a)throw a;})}else j.writeFile(n,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",
function(b){if(b)throw b;b=p+e+g;for(a=1;a<c.length&&" "!=c[a][3];a++)j.appendFileSync(n,c[a][3].replace(/\s/g,"")+","+c[a][3]+","+b+","+c[a][5]+","+c[a][6]+","+c[a][7]+","+c[a][8]+","+c[a][10]+",0\n","UTF-8",function(a){if(a)throw a;})})}})}catch(t){console.error(t)}Ext.getCmp("pbar3").updateText("Processing pd"+g+e+h+".csv completed");Ext.getCmp("pbar3").updateProgress(1);document.getElementById("om").innerHTML+="<br/>pd"+g+e+h+".csv is processed..";addlog(q,"pd"+g+e+h+".csv is processed..");b++;
f.length>b?(setTimeout(function(){process_nseindex(f,b,d,l,m,k,q)},5E3),document.getElementById("om").innerHTML+=".."):(visit("indices.html"),setTimeout(function(){Ext.getCmp("pbar3").updateProgress(0);var b=$("#output_formate-inputEl").val();0<=b.search("AmiBroker")&&process_amibroker(k);0<=b.search("FChart")&&process_fcharts(k);0<=b.search("MetaStock")&&process_metastock(k);0<=b.search("Ninja")&&process_ninja(k);0<=b.search("Advanced Get")&&advanceget_eod(k)},5E3))}
function monthDiff(f,b){var d;d=12*(b.getFullYear()-f.getFullYear());d-=f.getMonth()+1;d+=b.getMonth();return d+1};
