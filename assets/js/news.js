$(document).ready(function(){
    $.getJSON("annotation/result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            if(value.completions[0].result[0].value.choices == "Clickbait"){
                news += '<tr>';
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
                news += '</tr>';
            }
        });
        $('#clickbait_table').append(news);
    }).done(function() {
        $('.clickbait_tbl').footable(); 
    });

    $.getJSON("annotation/result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            if(value.completions[0].result[1].value.choices == "Misleading"){
                news += '<tr>';
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
                news += '</tr>';
            }
        });
        $('#misleading_table').append(news);
    }).done(function() {
        $('.misleading_tbl').footable(); 
    });

    $.getJSON("annotation/result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            if(value.completions[0].result[1].value.choices == "Not Misleading"){
                news += '<tr>';
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
                news += '</tr>';
            }
        });
        $('#notMisleading_table').append(news);
    }).done(function() {
        $('.notMisleading_tbl').footable(); 
    });

    $.getJSON("annotation/result.json", function(data){
        var news = '';
        $.each(data, function(key, value){
            if(value.completions[0].result[0].value.choices == "Neutral"){
                news += '<tr>';
                news += '<td>'+value.data.sumber+'</td>';
                news += '<td>'+value.data.judul+'</td>';
                news += '</tr>';
            }
        });
        $('#nonClickbait_table').append(news);
    }).done(function() {
        $('.notClickbait_tbl').footable(); 
    });
});