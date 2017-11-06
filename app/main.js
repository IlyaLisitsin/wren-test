$('.interactive-item-container').mouseover(function () {
    var curItem = $(this);
    curItem.find('.overlay').addClass('hidden');
    // curItem.find('.interactive-item-content').removeClass('hidden');
    curItem.parent().next().addClass('zindexDecrease');
    // curItem.addClass('widthIncrease');
    // curItem.next().addClass('widthDecrease');
    // curItem.prev().addClass('widthDecrease');
    curItem.addClass('itemExpanded')
});

$('.interactive-item-container').mouseout(function () {
    var curItem = $(this);
    curItem.find('.overlay').removeClass('hidden');
    // curItem.find('.interactive-item-content').addClass('hidden');
    curItem.parent().next().removeClass('zindexDecrease');
    // curItem.removeClass('widthIncrease');
    // curItem.next().removeClass('widthDecrease');
    // curItem.prev().removeClass('widthDecrease');
    curItem.removeClass('itemExpanded')
});