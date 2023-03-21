
import 'datatables.net-responsive-bs5/js/responsive.bootstrap5.mjs'
export  default function (t) {
    new $.fn.dataTable.Responsive( t,{
       // details:true,
       //  details: {
       //      renderer: function ( api, rowIdx, columns ) {
       //          var data = $.map( columns, function ( col, i ) {
       //              return col.hidden ?
       //                  '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
       //                  '<td>'+col.title+':'+'</td> '+
       //                  '<td>'+col.data+'</td>'+
       //                  '</tr>' :
       //                  '';
       //          } ).join('');
       //
       //          return data ?
       //              $('<table/>').append( data ) :
       //              false;
       //      }
       //  },
        details: {
            display: true,
            type: 'none',
            target: ''
        }
    } );
}