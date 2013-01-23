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
Ext.onReady(function(){Ext.create("Ext.form.Panel",{frame:!0,title:"Contact Us",layout:"fit",width:690,height:325,bodyPadding:5,fieldDefaults:{labelAlign:"left",labelWidth:90,anchor:"100%"},items:[{xtype:"fieldset",title:"",layout:"anchor",defaults:{anchor:"100%"},defaultType:"textfield",items:[{fieldLabel:"Title",name:"txtTitle",id:"txtTitle"},{fieldLabel:"First Name*",name:"txtFirstName",id:"first_name"},{fieldLabel:"Last Name*",name:"last_name",id:"last_name"},{fieldLabel:"Mobile*",name:"phone_mobile",
id:"phone_mobile"},{fieldLabel:"Home Phone",name:"phone_home",id:"phone_home"},{fieldLabel:"Email Address*",name:"email1",id:"email1"},{fieldLabel:"Description*",name:"description",id:"description",x:5,y:65,xtype:"textarea"}]}],buttons:[{text:"Reset",handler:function(){this.up("form").getForm().reset()}},{text:"Submit",width:150,handler:function(){if(""==document.getElementById("txtTitle-inputEl").value||checkTitle())if(checkFirstName()&&(checkLastName()&&checkContactNumber())&&(""==document.getElementById("phone_home-inputEl").value||
checkHomeContactNumber())&&checkEmail()&&checkClientRemark()){var a=$("#txtTitle-inputEl").val(),b=$("#first_name-inputEl").val(),c=$("#last_name-inputEl").val(),d=$("#phone_mobile-inputEl").val(),e=$("#phone_home-inputEl").val(),f=$("#email1-inputEl").val(),g=$("#description-inputEl").val();$.post("http://shubhalabha.in/eng/crm/index.php?entryPoint=WebToLeadCapture",{title:a,first_name:b,last_name:c,phone_mobile:d,phone_home:e,email1:f,description:g,campaign_id:"425bfaf4-9b0e-0f0e-7670-50f566732e7b",
assigned_user_id:"1",req_id:"last_name"},function(a){Ext.Msg.alert("Status",""+a)})}}}]}).render("contactus");$("#form-1050_header").css("height","27px");$("#form-1050_header-innerCt").css("height","15px");$("#form-1050-body").css("top","28px");$("#form-1050-body").css("height","257px");$("#fieldset-1051-body").css("height","220px");$("#fieldset-1051").css("height","250px");$("#toolbar-1052-innerCt").css("height","30px");$("#toolbar-1052-innerCt").css("height","30px");$("#toolbar-1052").css("top",
"290px");$("#toolbar-1052").css("height","45px");$("#toolbar-1052").css("height","32px");$("#button-1054").css("height","23px");$("#button-1054-btnEl").css("height","17px");$("#button-1053-btnEl").css("height","17px")});function checkTitle(){re=/^[A-Za-z]+$/;if(re.test(document.getElementById("txtTitle-inputEl").value))return!0;Ext.Msg.alert("Message","Invalid title");return!1}
function checkFirstName(){if(""==document.getElementById("first_name-inputEl").value)return Ext.Msg.alert("Message","Please enter first name"),!1;re=/^[A-Za-z]+$/;if(re.test(document.getElementById("first_name-inputEl").value))return!0;Ext.Msg.alert("Message","Invalid first name");return!1}
function checkLastName(){if(""==document.getElementById("last_name-inputEl").value)return Ext.Msg.alert("Message","Please enter last name"),!1;re=/^[A-Za-z]+$/;if(re.test(document.getElementById("last_name-inputEl").value))return!0;Ext.Msg.alert("Message","Invalid last name");return!1}
function checkContactNumber(){if(""==document.getElementById("phone_mobile-inputEl").value)return Ext.Msg.alert("Message","Please enter mobile number"),!1;re=/[0-9]/;if(re.test(document.getElementById("phone_mobile-inputEl").value))return!0;Ext.Msg.alert("Message","Invalid mobile number");return!1}function checkHomeContactNumber(){re=/[0-9]/;if(re.test(document.getElementById("phone_home-inputEl").value))return!0;Ext.Msg.alert("Message","Invalid home phone");return!1}
function checkEmail(){if(""==document.getElementById("email1-inputEl").value)return Ext.Msg.alert("Message","Please enter email"),!1;var a=document.getElementById("email1-inputEl").value,b=a.indexOf("@"),c=a.lastIndexOf(".");return 1>b||c<b+2||c+2>=a.length?(Ext.Msg.alert("Message","Invalid email"),!1):!0}
function checkClientRemark(){if(""==document.getElementById("description-inputEl").value)return Ext.Msg.alert("Message","Please description"),!1;re=/^[a-zA-Z0-9\s/().'-]*$/;if(re.test(document.getElementById("description-inputEl").value))return!0;Ext.Msg.alert("Message","Invalid description");return!1};
