export  default  function (t){

     $('#deleteRow').click(function (){
         t.rows('.selected').remove().draw(false);// pas de reactualisation de la pagination
         $(this).addClass('invisible');
     });
}