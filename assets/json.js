import './styles/json.scss';

// start the Stimulus application
import './bootstrap';


import 'bootstrap/dist/js/bootstrap';
import  $ from  'jquery';
import 'datatables.net-bs5';

import DataTable from "datatables.net-dt";
import JSZip from 'jszip';
window.JSZip= JSZip;
import  pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';





$(document).ready(function (tableSelector) {
  var t= $('#json').DataTable({
        data: [],
        order: [[1, 'asc']],
        lengthMenu:[20,40,60,80,100,120],
        columns: [
            {
                data: 'id',
                render: DataTable.render.number()

            },
            {
                data: 'name',
                render: DataTable.render.text()
            },
            {
                data: 'serial',
                render: DataTable.render.text()
            }
        ]

    });


    new $.fn.dataTable.Buttons( t, {
        buttons: [

            {
                extend: 'excelHtml5',
                text: 'EXCEL',
                className: 'excelButton',
                messageTop: null,
                messageBottom: null,
                title: null,
                filename: 'inverter',
                footer: true,
                exportOptions: {
                    columns: ':visible',

                }
            }

        ]});
    t.buttons(0,null).container()
        .appendTo( $('#buttons1' ));


    new $.fn.dataTable.Buttons( t, {
        buttons: [

            {

                extend: 'colvis',


            },

        ]});
    t.buttons(1,null).container()
        .appendTo( $('#buttons2' ));


    new $.fn.dataTable.Buttons( t, {
        buttons: [

            {

                text: 'generate',
                action: function ( e, dt, node, config ) {

                var data=$('#json-data').val();
                dt.clear().rows.add(JSON.parse(data)).draw();



                }


            },

        ]});
    t.buttons(2,null).container()
        .appendTo( $('#generate' ));


});