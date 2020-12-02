(function($){Drupal.extlink=Drupal.extlink||{};Drupal.extlink.attach=function(context,settings){if(!settings.hasOwnProperty('extlink')){return;}
var pattern=/^(([^\/:]+?\.)*)([^\.:]{4,})((\.[a-z]{1,4})*)(:[0-9]{1,5})?$/;var host=window.location.host.replace(pattern,'$3$4');var subdomain=window.location.host.replace(pattern,'$1');var subdomains;if(settings.extlink.extSubdomains){subdomains="([^/]*\\.)?";}
else if(subdomain=='www.'||subdomain==''){subdomains="(www\\.)?";}
else{subdomains=subdomain.replace(".","\\.");}
var internal_link=new RegExp("^https?://"+subdomains+host,"i");var extInclude=false;if(settings.extlink.extInclude){extInclude=new RegExp(settings.extlink.extInclude.replace(/\\/,'\\'),"i");}
var extExclude=false;if(settings.extlink.extExclude){extExclude=new RegExp(settings.extlink.extExclude.replace(/\\/,'\\'),"i");}
var extCssExclude=false;if(settings.extlink.extCssExclude){extCssExclude=settings.extlink.extCssExclude;}
var extCssExplicit=false;if(settings.extlink.extCssExplicit){extCssExplicit=settings.extlink.extCssExplicit;}
var external_links=new Array();var mailto_links=new Array();$("a:not(."+settings.extlink.extClass+", ."+settings.extlink.mailtoClass+"), area:not(."+settings.extlink.extClass+", ."+settings.extlink.mailtoClass+")",context).each(function(el){try{var url=this.href.toLowerCase();if(url.indexOf('http')==0&&((!url.match(internal_link)&&!(extExclude&&url.match(extExclude)))||(extInclude&&url.match(extInclude)))&&!(extCssExclude&&$(this).parents(extCssExclude).length>0)&&!(extCssExplicit&&$(this).parents(extCssExplicit).length<1)){external_links.push(this);}
else if(this.tagName!='AREA'&&url.indexOf('mailto:')==0&&!(extCssExclude&&$(this).parents(extCssExclude).length>0)&&!(extCssExplicit&&$(this).parents(extCssExplicit).length<1)){mailto_links.push(this);}}
catch(error){return false;}});if(settings.extlink.extClass){Drupal.extlink.applyClassAndSpan(external_links,settings.extlink.extClass);}
if(settings.extlink.mailtoClass){Drupal.extlink.applyClassAndSpan(mailto_links,settings.extlink.mailtoClass);}
if(settings.extlink.extTarget){$(external_links).attr('target',settings.extlink.extTarget);}
Drupal.extlink=Drupal.extlink||{};Drupal.extlink.popupClickHandler=Drupal.extlink.popupClickHandler||function(){if(settings.extlink.extAlert){return confirm(settings.extlink.extAlertText);}}
$(external_links).click(function(e){return Drupal.extlink.popupClickHandler(e);});};Drupal.extlink.applyClassAndSpan=function(links,class_name){var $links_to_process;if(Drupal.settings.extlink.extImgClass){$links_to_process=$(links);}
else{var links_with_images=$(links).find('img').parents('a');$links_to_process=$(links).not(links_with_images);}
$links_to_process.addClass(class_name);var i;var length=$links_to_process.length;for(i=0;i<length;i++){var $link=$($links_to_process[i]);if($link.css('display')=='inline'||$link.css('display')=='inline-block'){if(class_name==Drupal.settings.extlink.mailtoClass){$link.append('<span class="'+class_name+'"><span class="element-invisible"> '+Drupal.settings.extlink.mailtoLabel+'</span></span>');}
else{$link.append('<span class="'+class_name+'"><span class="element-invisible"> '+Drupal.settings.extlink.extLabel+'</span></span>');}}}};Drupal.behaviors.extlink=Drupal.behaviors.extlink||{};Drupal.behaviors.extlink.attach=function(context,settings){if(typeof extlinkAttach==='function'){extlinkAttach(context);}
else{Drupal.extlink.attach(context,settings);}};})(jQuery);