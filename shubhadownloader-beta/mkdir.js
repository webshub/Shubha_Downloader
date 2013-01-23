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
function mkdir(a){var c=require("fs");c.exists(a,function(d){d||c.mkdir(a,511,function(c){c?document.getElementById("om").innerHTML+="<br><font color=red>Error: Connot create directory Please Check Path "+a+"</font>":document.getElementById("om").innerHTML+="<br>"+a+" dir created succesfully...."})})}
function makedir(a,c,d,e){require("step")(function(){mkdir(a);Ext.getCmp("pbar3").updateText("Creating directory"+a);Ext.getCmp("pbar3").updateProgress(1);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);mkdir(a+"/downloads");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/downloads");Ext.getCmp("pbar3").updateProgress(1);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);mkdir(a+"/reports");Ext.getCmp("pbar3").updateText("Creating directory"+
a+"/reports");Ext.getCmp("pbar3").updateProgress(1);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);mkdir(a+"/logs");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/logs");Ext.getCmp("pbar3").updateProgress(1);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);mkdir(a+"/std_csv");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/std_csv");Ext.getCmp("pbar3").updateProgress(1);return this},function(b){b&&(document.getElementById("om").innerHTML+=
"<br/>"+b);setTimeout(function(){mkdir(a+"/downloads/unzip");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/downloads/unzip");Ext.getCmp("pbar3").updateProgress(1)},1E3);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);setTimeout(function(){mkdir(a+"/downloads/temp");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/downloads/temp");Ext.getCmp("pbar3").updateProgress(1)},1E3);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+
b);setTimeout(function(){mkdir(a+"/downloads/mcxindia");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/downloads/mcxindia");Ext.getCmp("pbar3").updateProgress(1)},1E3);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);setTimeout(function(){mkdir(a+"/downloads/temp_yahoo");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/downloads/temp_yahoo");Ext.getCmp("pbar3").updateProgress(1)},1E3);return this},function(b){b&&(document.getElementById("om").innerHTML+=
"<br/>"+b);setTimeout(function(){mkdir(a+"/downloads/unzip/unzip1");Ext.getCmp("pbar3").updateText("Creating directory"+a+"/downloads/unzip/unzip1");Ext.getCmp("pbar3").updateProgress(1)},2E3);return this},function(b){b&&(document.getElementById("om").innerHTML+="<br/>"+b);b=$("#output_formate-inputEl").val();0<b.search("AmiBroker")&&(mkdir(a+"/amibroker"),Ext.getCmp("pbar3").updateText("Creating directory"+a+"/amibroker"),Ext.getCmp("pbar3").updateProgress(1));0<b.search("FChart")&&(mkdir(a+"/fchart"),
Ext.getCmp("pbar3").updateText("Creating directory"+a+"/fchart"),Ext.getCmp("pbar3").updateProgress(1));0<b.search("MetaStock")&&(mkdir(a+"/metastock"),Ext.getCmp("pbar3").updateText("Creating directory"+a+"/metastock"),Ext.getCmp("pbar3").updateProgress(1));0<b.search("Ninja")&&(mkdir(a+"/ninja"),Ext.getCmp("pbar3").updateText("Creating directory"+a+"/ninja"),Ext.getCmp("pbar3").updateProgress(1));0<b.search("Advanced Get")&&(mkdir(a+"/advanceget"),Ext.getCmp("pbar3").updateText("Creating directory"+
a+"/advanceget"),Ext.getCmp("pbar3").updateProgress(1));return this},function(){setTimeout(performtask,2E3,c,a+"/downloads/",a+"/downloads/unzip/",a+"/std_csv/",a+"/logs/",d,e);return this})};
