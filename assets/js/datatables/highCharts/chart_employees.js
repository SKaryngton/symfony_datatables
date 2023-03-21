import  Highcharts from "highcharts";
export default function (t){
    var myChart = Highcharts.chart("container", {
        chart: {
            type: "pie"
        },
        title: {
            text: "Employee"
        },
        series: [{
            data: chartData(t)
        }]
    });

    t.on('draw', function () {
        // Set the data for the first series to be the map returned from the chartData function
        myChart.series[0].setData(chartData(t));
    });

    t.on( 'autoFill', function () {
        t.columns.adjust();
    } );
}

function chartData(table) {
    var counts = {};

    // Count the number of entries for each office
    table
        .column(8, { search: 'applied' })
        .data()
        .each(function (val) {
            if (counts[val]) {
                counts[val] += 1;
            } else {
                counts[val] = 1;
            }
        });

    // And map it to the format highcharts uses
    return $.map(counts, function (val, key) {
        return {
            name: key,
            y: val,
        };
    });
}