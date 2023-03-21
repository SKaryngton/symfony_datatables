

export  default  function(t){
    $.fn.dataTable.ext.buttons.alert = {
        className: 'buttons-alert',

        action: function ( e, dt, node, config ) {
            alert( this.text() );
        }
    };

    new $.fn.dataTable.Buttons( t, {
        buttons: [

            {
                extend:'alert',
                text:'My Custom extend Alert Button'
            },


        ]
    } );
}