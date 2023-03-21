

export  default  function (t){
    $('#api_dt tbody').on('mouseenter', 'td', function (){

        //Get column index
        var column_index= t.cell(this).index().column;
        // remove class highlight  on tbody
        $(t.cells().nodes()).removeClass('highlight');
        // add class highlight on cell column
        $(t.column(column_index).nodes()).addClass('highlight');
    });
}