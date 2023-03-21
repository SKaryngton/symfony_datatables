

export  default function (t){
    new $.fn.dataTable.Buttons( t, {

        buttons:[

            {
                text:'enable Col visibility',
                //popoverTitle: 'Hide column',
                extend: 'colvis',
                // collectionLayout: 'two-column'
                collectionLayout: 'fixed columns',
                columnText:function (dt, i, title){
                    return (i+1)+':'+title;
                },




            },
            {
                extend: 'colvisGroup',
                text: 'hide cols 1 2 show cols 3 4 5',
                show: [ 1, 2 ],
                hide: [ 3, 4, 5 ]
            }
            ,
            {
                extend: 'colvisGroup',
                text: 'Show all cols',
                show: ':hidden'
            }
        ]
    });
}