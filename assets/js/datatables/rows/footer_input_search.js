

export  default  function (){
    $('#api_dt tfoot th').each(function (){
        var title=$(this).text();

        if(title.trim().toLowerCase() !== 'action' && title.trim().toLowerCase() !== ''){
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        }

    });
}