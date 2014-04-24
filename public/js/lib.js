$(document).ready(function() {
    /********************************
      Global variable
    ********************************/
      var opened = 0;
    //******************************
    
    /*****************************************************
      Funtiuons for collapse panels 
    *****************************************************/
    function open(id){$("#" + $("#" + id).attr('acordionid')).attr('class', 'panel-collapse collapse in');}
    function close(id){$("#" + $("#" + id).attr('acordionid')).attr('class', 'panel-collapse collapse');}
    //**************************************
    
    /**********************************/
    $(".panel-heading").on('click', function(e) {
        var elem = $(this);
        if (opened == 0) {
            // abro boton
            opened = elem.attr('id');
            open(opened);
        } else {
            if (opened != elem.attr('id')) {
                close(opened);
                opened = elem.attr('id');
                open(opened);
            } else {
                close(opened);
                opened = 0;
            }
        }
    });
    //*************************************




    

    /*************************************
     *  Element custom
    **************************************/
    $('.dropdown').on('mouseenter', function(e) {
        $(this).attr('class', 'dropdown open');
    });
    $("li[class='dropdown']").on('mouseleave', function(event) {
        $(this).attr('class', 'dropdown');
        if (opened != 0 && event.currentTarget === this) {
            close(opened);
            opened = 0;
        }
    });
    //*************************************


});