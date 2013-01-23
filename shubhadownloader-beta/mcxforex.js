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
function process_mcxforex(h,q,r,l,s,n){function d(c){switch(c.toUpperCase()){case "JAN":c="01";break;case "FEB":c="02";break;case "MAR":c="03";break;case "APR":c="04";break;case "MAY":c="05";break;case "JUN":c="06";break;case "JUL":c="07";break;case "AUG":c="08";break;case "SEP":c="09";break;case "OCT":c="10";break;case "NOV":c="11";break;case "DEC":c="12"}return c}var c=require("fs");require("ya-csv");h=require("async");try{h.parallel({data1:function(d){c.existsSync(l+"CD_MCXSX_20130107c.csv")?c.readFile(l+
"CD_MCXSX_20130107c.csv","utf-8",function(c,k){d(c,k)}):c.readdir("html",function(c){d(c,"0")})}},function(h,m){if(h)throw h;if(c.existsSync(l+"CD_MCXSX_20130107c.csv")){for(var k=[],k=m.data1.split("\n"),b=[],a=0;a<k.length-1;a++){var p=k[a].split(",");b.push(p)}var e=n+"MCX_Com_mcxsx_07012013.csv";c.writeFile(e,"TICKER,NAME,DATE,OPEN,HIGH,LOW,CLOSE,VOLUME,OPENINT\n",function(g){if(g)throw g;g=[];for(a=1;a<b.length;a++)g.push(new Date(b[a][3].split("-")[2],d(b[a][3].split("-")[1]),b[a][3].split("-")[0]));
g=g.sort(function(a,b){return a.getTime()-b.getTime()});console.log(g);var f=g[0].getMonth()+1;g=g[0].getFullYear()+"/"+f+"/"+g[0].getDate();for(a=1;a<b.length;a++){var f=new Date(g),h=new Date(b[a][3].split("-")[2]+"/"+d(b[a][3].split("-")[1])+"/"+b[a][3].split("-")[0]),j=void 0,j=12*(h.getFullYear()-f.getFullYear()),j=j-(f.getMonth()+1),j=j+h.getMonth(),f=j+1;0==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-I"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-I,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));1==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-II"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-II,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));2==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-III"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-III,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));3==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-IV"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-IV,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));4==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-V"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-V,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));5==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-VI"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-VI,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));6==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-VII"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-VII,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));7==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-VIII"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-VIII,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));8==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-IX"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-IX,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));9==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-X"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-X,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));10==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-XI"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-XI,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}));11==f&&(""!=b[a][4]&&""!=b[a][5]?c.appendFileSync(e,b[a][2]+"-XII"+b[a][4]+b[a][5]+","+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+
b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}):c.appendFileSync(e,b[a][2]+"-XII,"+b[a][2]+","+b[a][3].split("-")[2]+d(b[a][3].split("-")[1])+b[a][3].split("-")[0]+","+b[a][6]+","+b[a][7]+","+b[a][8]+","+b[a][9]+","+b[a][12]+","+b[a][15]+"\n","UTF-8",function(a){if(a)throw a;}))}})}})}catch(m){document.getElementById("om").innerHTML+="<br/>"+m}document.getElementById("om").innerHTML+="<br/>mcxsx_07012013.csv is processed.."}
;
