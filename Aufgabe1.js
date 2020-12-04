$(document).ready(fertig);
var hoehe = 100;
var link = 0;
function fertig()
{
    $("#farbe").click(farbeWechseln);
    $("#down").click(runter);
    $("#up").click(hoch);
    $("#left").click(links);
    $("#right").click(rechts);
}
function farbeWechseln()
{
    $("#aendern").css("background-color","red");
}
function runter()
{
    $("#aendern").animate({top:800}, 2000);
}
function hoch()
{
    $("#aendern").animate({top:hoehe}, 2000);
}
function links()
{
    if(link != 0)
    {
        link -= 1050;
        $("#aendern").animate({left:link}, 2000);
    }
    else
    {
        $("#aendern").animate({left:link}, 2000);
    }
}
function rechts()
{
    if(link != 1050)
    {
        link += 1050;
        $("#aendern").animate({left:link}, 2000);
    }
    else
    {
        $("#aendern").animate({left:link}, 2000);
    }
}