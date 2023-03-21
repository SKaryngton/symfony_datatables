

export  default function (t){
    // Add event listener for opening and closing details
    $('#api_dt tbody').on('click', 'td.dt-control', function () {

        var tr = $(this).closest('tr');
        var row = t.row(tr);

        //add or remove Row child
        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();


        } else {
            // Open this row
            row.child(child_table(row.data())).show();

        }
    });
}

function child_table(d){
    return ('<table id="api_dt" class="table " style="width:100%">'+
        '<tr>'+
        '<td>Full name:</td>' +
        '<td>'+d.firstname+' '+d.lastname+'</td>' +
        '<tr>'+
        ' </table>');
}