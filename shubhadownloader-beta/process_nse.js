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
function process_nse(g,s,b,a,e,h,k,m,q){var r=g[s].split("-")[0],u=g[s].split("-")[1],n=g[s].split("-")[2],l=g[s].split("-")[3];l.substr(2,2);var p=require("fs");require("ya-csv");var t=require("async");try{Ext.getCmp("pbar3").updateText("cm"+n+r+l+"bhav.csv processing started. . ."),Ext.getCmp("pbar3").updateProgress(0.1),t.parallel({data1:function(b){p.existsSync(e+"cm"+n+r+l+"bhav.csv")?(Ext.getCmp("pbar3").updateText("Processing cm"+n+r+l+"bhav.csv"),Ext.getCmp("pbar3").updateProgress(0.28),p.readFile(e+
"cm"+n+r+l+"bhav.csv","utf-8",function(a,e){b(a,e)})):p.readdir(a,function(a){b(a,"0")})},data2:function(b){p.existsSync(a+"sec_list.csv")?p.readFile(a+"sec_list.csv","utf-8",function(a,e){b(a,e)}):p.readdir(a,function(a){b(a,"0")})},data3:function(b){p.existsSync(a+"MTO_"+n+u+l+".DAT")?p.readFile(a+"MTO_"+n+u+l+".DAT","utf-8",function(a,e){b(a,e)}):p.readdir(a,function(a){b(a,"0")})}},function(b,g){if(b)throw b;if(p.existsSync(e+"cm"+n+r+l+"bhav.csv")){Ext.getCmp("pbar3").updateProgress(0.3);Ext.getCmp("pbar3").updateText("Processing cm"+
n+r+l+"bhav.csv");Ext.getCmp("pbar3").updateProgress(0.6);for(var c=[],c=g.data1.split("\n"),f=[],d=0;d<c.length-1;d++){var j=c[d].split(",");if(("EQ"==j[1].toString().trim()||"BE"==j[1].toString().trim())&&0<d){var m=c[d-1].split(",");if(j[0].toString().trim()==m[0].toString().trim()){if("BE"==j[1].toString().trim())continue;"BE"==m[1].toString().trim()&&f.pop()}f.push(j)}}if(p.existsSync(a+"sec_list.csv")){j=[];j=g.data2.split("\n");c=[];for(d=0;d<j.length-1;d++)m=j[d].split(","),c.push(m);for(d=
0;d<f.length;d++)for(j=1;j<c.length;j++)f[d][0].toString()==c[j][0].toString()&&(f[d][13]=c[j][2])}for(d=0;d<f.length;d++)if(null==f[d][13]||""==f[d][13])f[d][13]="-";if(p.existsSync(a+"MTO_"+n+u+l+".DAT")){j=[];j=g.data3.split("\n");c=[];for(d=3;d<j.length-1;d++)m=j[d].split(","),c.push(m);for(d=0;d<f.length;d++)for(j=1;j<c.length;j++)f[d][0].toString()==c[j][2].toString()&&f[d][1].toString()==c[j][3].toString()&&(f[d][14]=c[j][5])}for(d=0;d<f.length;d++)null==f[d][14]&&(f[d][14]="0");var q=[];p.appendFile(h+
"Nse_Cash_Market_cm"+n+r+l+"bhav.csv","TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(a){a&&(console.log(a),addlog(k,a));for(c=0;c<f.length;c++){a=[];for(var b=0;b<f[c].length;b++)if(0==b)a.push(f[c][b]);else if(1==b)a.push(f[c][13]);else if(2==b){if(null!=f[c][10]||""!=f[c][10]){var d=f[c][10].toString().split("-"),e=getMonth(d[1]);a.push(d[2]+""+e+""+d[0])}}else 3==b?a.push(f[c][2]):4==b?a.push(f[c][3]):5==b?a.push(f[c][4]):6==b?a.push(f[c][5]):7==b?a.push(f[c][8]):8==b&&a.push(f[c][14]);
q.push(a)}for(var c=0;c<q.length;c++)p.appendFileSync(h+"Nse_Cash_Market_cm"+n+r+l+"bhav.csv",q[c]+"\n","UTF-8",function(a){if(a)throw a;})});Ext.getCmp("pbar3").updateProgress(0.8);Ext.getCmp("pbar3").updateText("Processing cm"+n+r+l+"bhav.csv completed");Ext.getCmp("pbar3").updateProgress(1)}})}catch(v){console.error(v)}document.getElementById("om").innerHTML+="<br/>cm"+n+r+l+"bhav.csv is processed..";addlog(k,"cm"+n+r+l+"bhav.csv is processed..");s++;if(g.length>s)setTimeout(function(){process_nse(g,
s,b,a,e,h,k,m,q)},1E3),document.getElementById("om").innerHTML+="..";else{visit("nsecm.html");p.writeFile("lastupdate.csv","lastdate,"+u+"/"+n+"/"+l+"\n",function(a){a&&console.log(a)});for(var c,t=0;t<b.length;t++)"options"==b[t].toString().split(",")[0]&&(c=b[t].toString().split(",")[1]);require("step")(function(){0<=c.search("MCX_Index")&&(Ext.getCmp("pbar3").updateText("MCX Index Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.09),mcx_Future_IndexHistory(g,0,b,a,e,h,k));return this},
function(){0<=c.search("National_Spot_Exchange")&&(Ext.getCmp("pbar3").updateText("NSX EOD Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.09),process_nsxeod(g,0,b,a,e,h,k));return this},function(){0<=c.search("Nse_Equity_Futures")&&(Ext.getCmp("pbar3").updateText("Nse Equity Futures Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),process_nsefuture(g,0,b,a,e,h,k));return this},function(){0<=c.search("Nse_Equity_Options")&&(Ext.getCmp("pbar3").updateText("Nse Equity Options Processing is started . . ."),
Ext.getCmp("pbar3").updateProgress(0.1),process_nseoption(g,0,b,a,e,h,k));return this},function(){0<=c.search("Nse_Forex_Futures")&&(Ext.getCmp("pbar3").updateText("Nse Forex Futures Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),process_nseforexf(g,0,b,a,e,h,k));return this},function(){0<=c.search("Nse_Forex_Options")&&(Ext.getCmp("pbar3").updateText("Nse Forex Options Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),process_nseforexo(g,0,b,a,e,h,k));return this},
function(){0<=c.search("Nse_Sme")&&(Ext.getCmp("pbar3").updateText("Nse Sme Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),process_nsesme(g,0,b,a,e,h,k));return this},function(){0<=c.search("Nse_Etf")&&(Ext.getCmp("pbar3").updateText("Nse Etf Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),process_nse_etf(g,0,b,a,e,h,k));return this},function(){0<=c.search("Bse_Index")&&(Ext.getCmp("pbar3").updateText("Bse Index Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),
process_bse_indexdata(b,a,e,h,m,q,k));return this},function(){0<=c.search("Bse_Cash_Market")&&(Ext.getCmp("pbar3").updateText("Bse Cash Market Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),download_bseequity(g,0,b,a,e,h,k));return this},function(){0<=c.search("Ncdex_Futures")&&(Ext.getCmp("pbar3").updateText("Ncdex Futures Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),process_ncdex(g,0,b,a,e,h,k));return this},function(){0<=c.search("Yahoo_Fundamental")&&
(Ext.getCmp("pbar3").updateText("Yahoo fundamental Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.1),process_yahoodata(h,k));return this},function(){0<=c.search("MCX_Commodity_Futures")&&(Ext.getCmp("pbar3").updateText("MCX bhavcopy Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.09),mcx_bhavcopy(g,0,b,a,e,h,k));return this},function(){0<=c.search("Nse_reports")&&(Ext.getCmp("pbar3").updateText("Nse Reports processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.09),
download_nsema(g,0,b,a,e,h,k),process_nse_bulk(b,a,e,h,m,q),process_nse_blockdeal(b,a,e,h,m,q),nse_equity_vol(b,a,e,h,m,q),nse_equity_openint(b,a,e,h,m,q),process_bse_bulk(b,a,e,h,m,q),process_bse_blockdeal(b,a,e,h,m,q),process_nse_bc(g,g.length-1,b,a,e,h,k));return this},function(){0<=c.search("Nse_Combined_reports")&&(Ext.getCmp("pbar3").updateText("NSE Combined reports Processing is started . . ."),Ext.getCmp("pbar3").updateProgress(0.09),download_nse_cmbnd_rpt_zip(g,0,b,a,e,h,k));return this},
function(){process_nseindex(g,0,b,a,e,h,k);return this})}};
