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
function savesettings(b,a){require("ya-csv");var c=require("fs");c.existsSync("settings.csv"),c.writeFile("settings.csv","datafolder,"+b+"\noptions,"+a+"\n",function(a){a&&(document.getElementById("om").innerHTML+="<br/>"+a)})}
function getsettings(){var b=require("ya-csv");require("fs").existsSync("settings.csv")&&b.createCsvFileReader("settings.csv",{separator:","}).addListener("data",function(a){"datafolder"==a[0]&&$("#path-inputEl").val(a[1]);"options"==a[0]&&(0<=a[1].search("Nse_Forex_Futures")&&Ext.getCmp("Nse_Forex_Futures").setValue(!0),0<=a[1].search("Nse_Cash_Market")&&Ext.getCmp("Nse_Cash_Market").setValue(!0),0<=a[1].search("Nse_Equity_Futures")&&Ext.getCmp("Nse_Equity_Futures").setValue(!0),0<=a[1].search("Nse_Equity_Options")&&
Ext.getCmp("Nse_Equity_Options").setValue(!0),0<=a[1].search("Nse_Forex_Futures")&&Ext.getCmp("Nse_Forex_Futures").setValue(!0),0<=a[1].search("Nse_Forex_Options")&&Ext.getCmp("Nse_Forex_Options").setValue(!0),0<=a[1].search("Nse_Sme")&&Ext.getCmp("Nse_Sme").setValue(!0),0<=a[1].search("Nse_Etf")&&Ext.getCmp("Nse_Etf").setValue(!0),0<=a[1].search("Nse_Index")&&Ext.getCmp("Nse_Index").setValue(!0),0<=a[1].search("Bse_Index")&&Ext.getCmp("Bse_Index").setValue(!0),0<=a[1].search("Bse_Cash_Market")&&
Ext.getCmp("Bse_Cash_Market").setValue(!0),0<=a[1].search("Ncdex_Futures")&&Ext.getCmp("Ncdex_Futures").setValue(!0),0<=a[1].search("Yahoo_Fundamental")&&Ext.getCmp("Yahoo_Fundamental").setValue(!0),0<=a[1].search("MCX_Commodity_Futures")&&Ext.getCmp("MCX_Commodity_Futures").setValue(!0),0<=a[1].search("MCX_Index")&&Ext.getCmp("MCX_Index").setValue(!0),0<=a[1].search("National_Spot_Exchange")&&Ext.getCmp("National_Spot_Exchange").setValue(!0),0<=a[1].search("Nse_reports")&&Ext.getCmp("Nse_reports").setValue(!0),
0<=a[1].search("Nse_Combined_reports")&&Ext.getCmp("Nse_Combined_reports").setValue(!0))})};
