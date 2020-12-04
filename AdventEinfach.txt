$(document).ready(fertig);

function fertig()
{
    for(var i = 1; i < 25;i++)
    {
        $("#tueren").append("<div class='box'>"+i+"</div>");
    }
    
}