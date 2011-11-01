// TODO: Add package code
require('jquery-position')
$(function(){

  $('.lead').live("contextmenu",function(e){
    // global contextmenu routing?
    // create new contextual menu, set context something known.
    var menu = $("#job_unit_contextual_menu"),
    target   = $(e.target);

    $(document).one('click',function(){
      menu.fadeOut();
    });

    return false;
  });

  $('.ui-contextual-menu a').live('click',function(e){
    e.preventDefault();
  });

  $('.ui-contextual-menu li.disabled a').live('click',function(e){
    return false;
  });

  $('.ui-contextual-menu').not('li.disabled').live('click',function(e){
    var target      = $(e.target),
    emit            = target.data('emit');
    //emit some action, in some context
  });
});
