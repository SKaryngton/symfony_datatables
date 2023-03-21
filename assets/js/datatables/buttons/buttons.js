import 'datatables.net-buttons-bs5/js/buttons.bootstrap5';
import 'datatables.net-buttons-dt';


import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';

import JSZip from 'jszip';
window.JSZip= JSZip;
import  pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import btn_exports from "./btn_exports";
import $ from "jquery";
pdfMake.vfs = pdfFonts.pdfMake.vfs;



export  default  function (t){

    btn_exports(t);
    t.buttons(0,null).container().appendTo($('#btn_export'));


}