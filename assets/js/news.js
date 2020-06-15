$(document).ready(function(){
    $.getJSON("..//result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            news += '<tr>';
            if(value.completions[0].result[0].value.choices == "Clickbait"){
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
            }
           
            news += '</tr>';
        });
        $('#clickbait_table').append(news);
    });

    $.getJSON("..//result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            news += '<tr>';
            if(value.completions[0].result[1].value.choices == "Misleading"){
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
            }
           
            news += '</tr>';
        });
        $('#misleading_table').append(news);
    });

    $.getJSON("..//result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            news += '<tr>';
            if(value.completions[0].result[1].value.choices == "Not Misleading"){
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
            }
           
            news += '</tr>';
        });
        $('#notMisleading_table').append(news);
    });

    $.getJSON("..//result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            news += '<tr>';
            if(value.completions[0].result[0].value.choices == "Neutral"){
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
            }
           
            news += '</tr>';
        });
        $('#nonClickbait_table').append(news);
    });
});