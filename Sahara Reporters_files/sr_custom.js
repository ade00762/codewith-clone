(function($){Drupal.behaviors.srCustom={attach:function(context,settings){var adaptiveScaleImages=function(){$("img.adaptive-scale[data-adaptive-scale]").each(function(i){var img=$(this);setTimeout(function(){scale(img);},50*i);});function scale(img){var scales=img.attr('data-adaptive-scale').split(',');var width=$(window).width();var s;for(var i=0;i<scales.length;i++){if(width>Number(scales[i])){if((s=img.attr('data-adaptive-scale-'+scales[i]))&&(s!=''))
{img.attr('src',s);}
return;}}
if((s=img.attr('data-original-style'))&&s!=''){img.attr('src',s);}}}
adaptiveScaleImages();$(window).on('resize',adaptiveScaleImages);}}})(jQuery);