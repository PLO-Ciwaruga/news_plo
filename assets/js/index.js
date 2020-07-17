$(document).ready(function () {
    $.getJSON("annotation/result.json", function (data) {
        var countAll = 0;
        var countClickbait = 0;
        var countNonClickbait = 0;
        var countMisleading = 0;
        var countNonMisleading = 0;
        $.each(data, function (key, value) {
            countAll = key;
            if(value.completions[0].result[0] != undefined) {
                if (value.completions[0].result[0].value.choices == "Clickbait") {
                    countClickbait += 1;
                } else
                {
                    countNonClickbait += 1;
                }
                if (value.completions[0].result[1].value.choices == "Not Misleading") {
                    countNonMisleading += 1;
                } else
                {
                    countMisleading += 1;
                }
            }
        });
        $('#news-all').append(countAll+1);
        $('#news-nonclickbait').append(countNonClickbait);
        $('#news-clickbait').append(countClickbait);
        $('#news-misleading').append(countMisleading);
        $('#news-nonmisleading').append(countNonMisleading);
    });
});