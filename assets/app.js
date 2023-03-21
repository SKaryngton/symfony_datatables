/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


import 'bootstrap/dist/js/bootstrap';

import 'datatables.net';
import 'datatables.net-bs5';
import DataTable from "datatables.net";





$(document).ready(function () {
    $('#datatable').DataTable({

        processing:true, // indicateur de 'traitement' lorsque la table est en cours de traitement

        // paging: false,
        // scrollY: 400, // only if pagination  not enabled

        paging: true, // enable pagination

        pageLength:15, // number of entries per Page

        order: [[ 2, 'asc' ] ], //order column 2
        ordering: true,   //enable user to order

        searching: true,


        ajax:{
            url:'/api/employees/',
            dataSrc: '' //Or dataSrc:'table_random'

        },
        deferRender: true,

        columns: [
            {
                data: 'id', // data: 'table_random.id'
                render: DataTable.render.number()
            },
            {
                data: 'firstname',
                render: DataTable.render.text()

            },
            {
                data: 'lastname',
                render: DataTable.render.text()

            },
            {
                data: 'position',
                render: DataTable.render.text()

            },
            {
                data: 'salary',
                //DataTable.render.number(thousands, decimal, precision, prefix, postfix) // Thousands and decimal specified
                render: DataTable.render.number(null,null,2,'$')

            },

            {
                data: 'wantsNewletter',
                render: DataTable.render.text()

            },
            {
                data: 'email',
                render: DataTable.render.text()

            },
            {
                data: 'birthday',
                render: DataTable.render.date() //datetime
            },
            {
                data: {
                    _: 'company.name',
                    sort: 'company.name',
                },
                render: DataTable.render.text()


            },
        ],

    });
});
