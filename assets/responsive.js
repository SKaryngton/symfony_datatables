

import './styles/responsive.scss';



import  $ from  'jquery';


import 'bootstrap/dist/js/bootstrap';

import {initDatatable} from "./js/datatables/initialise";

import responsive from "./js/datatables/responsive/responsive";
import buttons from "./js/datatables/buttons/buttons";






$(document).ready(function (tableSelector) {




    //init datatable
    var t= initDatatable();

    //responsive
    responsive(t);

     //buttons
    buttons(t);


});