$(document).ready(fertig);

function fertig()
{
    for(var i = 1; i < 25;i++)
    {
        $(".grid").append("<div class='box'>"+i+"</div>");
    }
    
}