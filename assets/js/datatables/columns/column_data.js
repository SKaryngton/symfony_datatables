
import DataTable from "datatables.net-bs5";
export default function (){


    var data= [
        {
            data: 'id',
            // render: function (data, type, row ){
            //     return "";
            // },
            // searchable:false,

        },

        {

            data: 'firstname',
           // render: DataTable.render.text()

        },
        {
            data: 'lastname',
           // render: DataTable.render.text()

        },
        {
            data: 'position',
           // render: DataTable.render.text()

        },
        {
            data: 'salary',
            //DataTable.render.number(thousands, decimal, precision, prefix, postfix) // Thousands and decimal specified
            // render: function (data,type,row){
            //
            //     return type === 'export'? data:new Intl.NumberFormat('de-De',{
            //         style: 'currency',
            //         currency:'EUR'
            //     }).format(data);

                //return DataTable.render.number(null,null,2,'$');
          //  }


        },

        {
            data: 'wantsNewletter',
            //render: DataTable.render.text()

        },
        {
            data: 'email',
            //render: DataTable.render.text()

        },
        {
            data: 'birthday',
            //render: DataTable.render.date() //datetime
        },
        {
            data: {
                _: 'company.name',
                sort: 'company.name',
            },
          //  render: DataTable.render.text()


        },

    ];

    return  [
        { "data": "name" },
        { "data": "position" },
        { "data": "office" },
        { "data": "extn" },
        { "data": "start_date" },
        { "data": "salary" }
    ];

}