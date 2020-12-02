(function($){var views_infinite_scroll_was_initialised=false;Drupal.behaviors.views_infinite_scroll={attach:function(){if($.autopager){if(!views_infinite_scroll_was_initialised){views_infinite_scroll_was_initialised=true;if(Drupal.settings.views_infinite_scroll.length==1){var settings=Drupal.settings.views_infinite_scroll[0];var use_ajax=false;if(Drupal.settings.views&&Drupal.settings.views.ajaxViews){$.each(Drupal.settings.views.ajaxViews,function(key,value){if((value.view_name==settings.view_name)&&(value.view_display_id==settings.display)){use_ajax=true;}});}
if(!use_ajax){var view_selector='div.view-id-'+settings.view_name+'.view-display-id-'+settings.display;var content_selector=view_selector+' > '+settings.content_selector;var items_selector=content_selector+' '+settings.items_selector;var pager_selector=view_selector+' > div.item-list '+settings.pager_selector;var next_selector=view_selector+' '+settings.next_selector;var next_el=$(next_selector);var img_location=view_selector+' > div.view-content';var img_path=settings.img_path;var img='<div id="views_infinite_scroll-ajax-loader"><img src="'+img_path+'" alt="loading..."/></div>';$(pager_selector).hide();var handle=$.autopager({appendTo:content_selector,content:items_selector,link:next_selector,page:0,autoLoad:!settings.manual_load,start:function(){$(img_location).after(img);},load:function(current,next){$('div#views_infinite_scroll-ajax-loader').remove();Drupal.attachBehaviors(this);if(settings.manual_load&&next.page>=settings.pager_max){$(next_el).hide();}}});function show_next_button(){$(next_el).text(settings.text);$(next_el).click(function(){handle.autopager('load');return false;});$(pager_selector).before($(next_el));$(next_el).wrap('<div id="views_infinite_scroll_button" />');$("#views_infinite_scroll_button").hide();}
if(settings.manual_load){show_next_button();}
else{$(pager_selector).hide();var prev_content_height=$(content_selector).height();do{var last=$(items_selector).filter(':last');if(last.offset().top+last.height()<$(document).scrollTop()+$(window).height()){last=$(items_selector).filter(':last');handle.autopager('load');}
else{break;}}
while($(content_selector).height()>prev_content_height);}
var loads=0;$.autopager.load=(function(originalFn){return function(){if(originalFn()!==undefined){loads=loads+1;}
if(loads===3){show_next_button();$.autopager.option("autoLoad",false);}};})($.autopager.load);}
else{alert(Drupal.t('Views infinite scroll pager is not compatible with Ajax Views. Please disable "Use Ajax" option.'));}}
else if(Drupal.settings.views_infinite_scroll.length>1){alert(Drupal.t('Views Infinite Scroll module can\'t handle more than one infinite view in the same page.'));}}}
else{alert(Drupal.t('Autopager jquery plugin in not loaded.'));}}};})(jQuery);