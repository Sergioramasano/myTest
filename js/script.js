
$('.toggler').click(function()
{
    var elementToShowOrHide = $('.container-flex' + $(this).val());

    if(elementToShowOrHide.is(':visible'))
        elementToShowOrHide.hide();
    else
        elementToShowOrHide.show();
});

