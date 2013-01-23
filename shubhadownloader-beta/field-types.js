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
Ext.require(["Ext.form.*"]);
Ext.onReady(function(){Ext.create("Ext.form.Panel",{frame:!0,title:"Compose Email",width:600,height:360,bodyPadding:5,fieldDefaults:{labelAlign:"left",labelWidth:90,anchor:"100%"},items:[{xtype:"fieldset",title:"",layout:"anchor",defaults:{anchor:"100%"},items:[{xtype:"filefield",name:"file1",fieldLabel:"Select folder"},{xtype:"label",forId:"msg",style:"display:block; padding:10px 0px 0px 20px",text:'"Application will download & \n                            process data from web in \n                            this folder and generate output data. \n                            Please make sure you have 4GB free on this drive"'},{xtype:"label",
forId:"msg1",style:"display:block; padding:10px 0px 0px 20px",text:"Action - save these details in settings.txt file. If file is present, show settings on page."}]},{xtype:"fieldset",title:"",layout:"anchor",defaults:{anchor:"100%"},defaultType:"textfield",items:[{fieldLabel:"Proxy Server",name:"proxyserver",allowBlank:!1},{fieldLabel:"Port",name:"port",allowBlank:!1},{fieldLabel:"User Name",name:"username",allowBlank:!1},{fieldLabel:"Password",name:"password",inputType:"password",allowBlank:!1}]}],
buttons:[{text:"Reset",handler:function(){this.up("form").getForm().reset()}},{text:"Save",width:150,handler:function(){}}]}).render("form-ct")});
