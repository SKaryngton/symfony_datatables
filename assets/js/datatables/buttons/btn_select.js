import $ from "jquery";


export  default function (t){
    new $.fn.dataTable.Buttons( t, {

        buttons:[
            {
                text: 'Row selected data',
                enabled: false,
                action: function ( e, dt, node, config ) {
                    alert(
                        'Row data: '+
                        JSON.stringify( dt.row( { selected: true } ).data() )
                    );
                },

            },
            {
                text: 'Count rows selected',
                enabled: false,
                action: function ( e, dt, node, config ) {
                    alert( 'Rows: '+ dt.rows( { selected: true } ).count() );
                },

            },
            {
                text: 'This Btn was cliked 0',
                action: function ( e, dt, node, config ) {
                    this.text( 'This Btn was cliked '+ config.counter );
                    config.counter++;


                },
                counter: 1
            },
            {
                text: 'Add new button',
                action: function ( e, dt, node, config ) {

                    dt.button(1,null).add( 4, {
                        text: 'remove this button '+(config.counter++),
                        action: function () {
                            this.remove();
                        }
                    } );

                },
                counter:1
            }

        ]
    });
}