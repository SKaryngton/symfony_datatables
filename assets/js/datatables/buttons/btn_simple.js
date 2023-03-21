

export  default  function(t){
    new $.fn.dataTable.Buttons( t, {
        buttons: [
            {
                /*
               * e : declencheur d'evenement
               * dt: instance D'api
               * instance jquery
               * config btn
               * */
                text: 'Reload Table',
                action: function ( e, dt, node, config ) {

                    dt.ajax.reload();
                }
            },
        ]
    } );
}
