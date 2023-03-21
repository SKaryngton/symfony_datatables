export  default  function (){

   // Add event listener for redirect to employee details page

$('#api_dt tbody').on('click', 'td.dt-control', function () {

    var id =t.cell(this).data();

    location.href='/employee/'+ id+'/edit';
});
}