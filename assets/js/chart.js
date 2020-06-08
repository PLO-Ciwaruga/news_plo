"use strict";

var neutral = 0;
var clickbait = 0;
var misleading = 0;
var notMisleading = 0;

fetch("result.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        for(var i = 0; i < data.length; i++)
        {
            if(data[i].completions[0].result[0].value.choices == "Neutral")
            {
                neutral++;
            }
            else{
                clickbait++;
            }

            if(data[i].completions[0].result[1].value.choices == "Not Misleading")
            {
                notMisleading++;
            }
            else 
            {
                misleading++;
            }
        }
        console.log(misleading);

        let myChart1 = document.getElementById('myChart').getContext('2d');

        let massPopChart = new Chart(myChart1, {
            type: 'doughnut',
            data: {
                labels:['Clickbait', 'Neutral'],
                datasets:[{
                    label : 'Population',
                        data: [
                        clickbait,
                        neutral
                        ],
                    }]
            },
            options : {},
        });

        let myChart2 = document.getElementById('myChart2').getContext('2d');
	
		let massPopChart2 = new Chart(myChart2, {
			type: 'doughnut',
			data: {
			labels:['Misleading', 'Not Misleading'],
			datasets:[{
					label : 'Population',
						data: [
							misleading,
							notMisleading
						],
					}]
			},
			options : {},
		});
    });

 