import './styles/api.scss';

// start the Stimulus application



import 'bootstrap/dist/js/bootstrap';

import  $ from  'jquery';
import 'datatables.net-responsive-dt/js/responsive.dataTables'
/*import 'datatables.net-bs5/js/dataTables.bootstrap5';*/
import 'datatables.net-buttons-bs5/js/buttons.bootstrap5';

import JSZip from 'jszip';
window.JSZip= JSZip;
import  pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import 'datatables.net-buttons-dt';
import 'datatables.net-select-dt/js/select.dataTables.mjs';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';
import 'datatables.net-colreorder/js/dataTables.colReorder.mjs';


import btn_exports from "./js/datatables/buttons/btn_exports";
import btn_custom from "./js/datatables/buttons/btn_custom";
import btn_simple from "./js/datatables/buttons/btn_simple";
import btn_colvis from "./js/datatables/buttons/btn_colvis";
import btn_dropdown from "./js/datatables/buttons/btn_dropdown";
import btn_select from "./js/datatables/buttons/btn_select";
import chart_employees from "./js/datatables/highCharts/chart_employees";
import {initDatatable} from "./js/datatables/initialise";
import details from "./js/datatables/rows/details";
import mouseover from "./js/datatables/columns/mouseover";
import footer_input_search from "./js/datatables/rows/footer_input_search";
import DataTable from "datatables.net-dt";






$(document).ready(function (tableSelector) {

    // add text input to each footer cell
    footer_input_search();


    //init datatable
    var t = $('#api_dt').DataTable({

        // dom: 'B<"clear">lfrtip',

        processing:true, // indicateur de 'traitement' lorsque la table est en cours de traitement

        // paging: false,
        // scrollY: 400, // only if pagination  not enabled

        paging: true, // enable pagination

        pageLength:10, // number of entries per Page

        lengthChange:true,


        lengthMenu:[10,20,30,40,50,60],

        order: [[ 2, 'asc' ] ], //order column 2
        ordering: true,   //enable user to order

        searching: true,

        // save state table
        stateSave: true,

        //enable row select
        select: true,



        ajax:{
            url:'/api/employees/',
            dataSrc: '' //Or dataSrc:'table_random'

        },
        deferRender: true,

        rowId: 'id',

        columnDefs:[
            {
                orderable:false,
                targets:[0,3,5,6,8],


            },
            {
                searchPanes: true
            },
            {
                data: null,
                render:  function (){
                    return '';
                },
                orderable:false,
                className:'select-checkbox',
                targets: [9]

            }
        ],




        columns: [
            {
                data: 'id',
                render: function (data, type, row ){
                    return "";
                },
                // searchable:false,

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
                render: function (data,type,row){

                    return type === 'export'? data:new Intl.NumberFormat('de-De',{
                        style: 'currency',
                        currency:'EUR'
                    }).format(data);

                    //return DataTable.render.number(null,null,2,'$');
                }


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


        // Apply the search per column
        initComplete: function () {

            // Apply the search
            this.api()
                .columns()
                .every(function () {
                    var column = this;
                    if($(column.footer()).text().trim().toLowerCase() !== 'action' && $(column.footer()).text().trim().toLowerCase() !== ''){
                        $('input', this.footer()).on('keyup change clear', function () {
                            if (column.search() !== this.value) {
                                column.search(this.value).draw();
                            }
                        });
                    }

                });

            this.api()
                .columns()
                .every(function () {
                    var column = this;
                    if ($(column.header()).text().trim().toLowerCase() !== 'action' && $(column.header()).text().trim().toLowerCase() !== ''){
                        var placeholder = 'select ' + $(column.header()).text().toLowerCase();
                        var select = $('<select><option value="">' + placeholder + '</option></select>')
                            //  .appendTo($(column.footer()).empty())
                            .appendTo($('#selectSearch'))
                            .on('change', function () {
                                var val = $.fn.dataTable.util.escapeRegex($(this).val());

                                column.search(val ? '^' + val + '$' : '', true, false).draw();
                            });
                        // reduce to unique entity
                        column
                            .data()
                            .unique()
                            .sort()
                            .each(function (d, j) {
                                select.append('<option value="' + d + '">' + d + '</option>');
                            });
                    }
                });

            // hide columns
            this.api()
                .columns()
                .every( function (){
                    var column = this;
                    var btn_hide = 'hide ' + $(column.header()).text().toLowerCase();
                    var btn_show= 'show ' + $(column.header()).text().toLowerCase();
                    var a = $('<a class="btn btn-light">' + btn_hide + '</a>')
                        .appendTo($('#hideColumn'))
                        . on('click', function () {
                            if ($(this).hasClass("btn-success")){
                                $(this).removeClass("btn-success");
                                $(this).addClass("btn-light");
                                $(this).text(btn_hide);

                            }else {
                                $(this).addClass("btn-success");
                                $(this).removeClass("btn-light");
                                $(this).text(btn_show);
                            }
                            column.visible(!column.visible());
                        });

                });
        },





    });

    //ColReorder

    new $.fn.dataTable.ColReorder( t );


    //Buttons
    btn_exports(t);
    t.buttons(0,null).container()
        .appendTo( $('#buttons1' ));



    btn_select(t);
    t.buttons(1,null).container()
        .appendTo( $('#buttons2' ));

    t.on( 'select deselect', function () {
        var selectedRows = t.rows( { selected: true } ).count();


        t.button( 1 ,0).enable( selectedRows === 1 );
        t.button( 1,1).enable( selectedRows > 0 );
    } );




    btn_colvis(t);
    t.buttons(2,null).container().removeClass('btn-group');
    t.buttons(2,null).container()
        .appendTo( $('#buttons3' ));

   btn_dropdown(t);
   t.buttons(3,null).container()
        .appendTo( $('#buttons4' ));

    btn_custom(t);
    t.buttons(4,null).container()
        .appendTo( $('#buttons5' ));

    btn_simple(t)
    t.buttons(5,null).container()
        .appendTo( $('#buttons6' ));


     // change column style on mouse over
    mouseover(t);



   // show  details
   // details(t);


    // add HighChart

   chart_employees(t);

});






