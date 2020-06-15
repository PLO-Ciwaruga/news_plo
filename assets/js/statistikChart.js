"use strict";
var neutral = 0;
//Neutral from various sources
var neut_Det = 0;
var neut_Kom = 0;
var neut_Rep = 0;

var clickbait = 0;
//Clickbait from various sources
var cb_Det = 0;
var cb_Kom = 0;
var cb_Rep = 0;

var misleading = 0;
//misleading from various sources
var msl_Det = 0;
var msl_Kom = 0;
var msl_Rep = 0;

var notMisleading = 0;
//Not Misleading from various sources
var nmsl_Det = 0;
var nmsl_Kom = 0;
var nmsl_Rep = 0;

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

                if(data[i].data.sumber == "Detik")
                {
                	neut_Det++;
                }
                else if(data[i].data.sumber == "Kompas")
                {
                	neut_Kom++;
                }
                else if(data[i].data.sumber == "Republika")
                {
                	neut_Rep++;
                }
            }
            else{
                clickbait++;

                if(data[i].data.sumber == "Detik")
                {
                	cb_Det++;
                }
                else if(data[i].data.sumber == "Kompas")
                {
                	cb_Kom++;
                }
                else if(data[i].data.sumber == "Republika")
                {
                	cb_Rep++;
                }
            }

            if(data[i].completions[0].result[1].value.choices == "Not Misleading")
            {
                notMisleading++;

                if(data[i].data.sumber == "Detik")
                {
                	nmsl_Det++;
                }
                else if(data[i].data.sumber == "Kompas")
                {
                	nmsl_Kom++;
                }
                else if(data[i].data.sumber == "Republika")
                {
                	nmsl_Rep++;
                }
            }
            else 
            {
                misleading++;

                if(data[i].data.sumber == "Detik")
                {
                	msl_Det++;
                }
                else if(data[i].data.sumber == "Kompas")
                {
                	msl_Kom++;
                }
                else if(data[i].data.sumber == "Republika")
                {
                	msl_Rep++;
                }
            }
        }
          
    console.log(notMisleading);
    console.log(msl_Det);
    console.log(msl_Kom);
    console.log(msl_Rep);
        
        let chartNeutral = document.getElementById('chartNeutral').getContext('2d');
	
        let massPopChart3 = new Chart(chartNeutral, {
            type: 'pie',
            data: {
            labels:['Detik', 'Kompas', 'Republika'],
            datasets:[{
                    label : 'Population',
                        data: [
                            neut_Det,
                            neut_Kom,
                            neut_Rep
                        ],
                        backgroundColor : ['#EC7063','#5DADE2','#45B39D']
                    }]
            },
            options : {},
        });

        let chartCB = document.getElementById('chartCB').getContext('2d');
	
		let massPopChart4 = new Chart(chartCB, {
			type: 'pie',
			data: {
			labels:['Detik', 'Kompas', 'Republika'],
			datasets:[{
					label : 'Population',
						data: [
							cb_Det, 
							cb_Kom,
							cb_Rep
						],
                        backgroundColor : ['#EC7063','#5DADE2','#45B39D']
					}]
			},
			options : {},
        });
        
        let chartMSL = document.getElementById('chartMSL').getContext('2d');
	
		let massPopChart5 = new Chart(chartMSL, {
			type: 'pie',
			data: {
			labels:['Detik', 'Kompas', 'Republika'],
			datasets:[{
					label : 'Population',
						data: [
							msl_Det, 
							msl_Kom,
							msl_Rep
						],
                        backgroundColor : ['#EC7063','#5DADE2','#45B39D']
					}]
			},
			options : {},
        });
        
        let chartNMSL = document.getElementById('chartNMSL').getContext('2d');
    
        let massPopChart6 = new Chart(chartNMSL, {
            type: 'pie',
            data: {
            labels:['Detik', 'Kompas', 'Republika'],
            datasets:[{
                    label : 'Population',
                        data: [
                            nmsl_Det, 
                            nmsl_Kom,
                            nmsl_Rep
                        ],
                        backgroundColor : ['#EC7063','#5DADE2','#45B39D']
                    }]
            },
            options : {},
        });
      
    });

   
