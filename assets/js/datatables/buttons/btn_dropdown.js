import $ from "jquery";


export  default function (t){
    new $.fn.dataTable.Buttons( t, {

        buttons:[
            {
                extend: 'collection',
                text:'Collection show hide columns',
                autoClose:true,
                buttons: [
                    {
                        text: 'Toggle show action',
                        action: function ( e, dt, node, config ) {
                            dt.column( 0 ).visible( ! dt.column( 0 ).visible() );
                        }
                    },
                    {
                        text: 'Toggle show salary',
                        action: function ( e, dt, node, config ) {
                            dt.column( 4 ).visible( ! dt.column( 4 ).visible() );
                        }
                    }
                ]
            },
            {
                extend: 'csv',
                split: [ 'pdf', 'excel','print'],
            }


        ]
    });
}