$('.interactive-item-container').mouseover(itemMouseOverHandler);
$('.interactive-item-container').mouseout(itemMouseOutHandler);

function itemMouseOverHandler () {
    var curItem = $(this);
    curItem.find('.overlay').addClass('hidden');
    curItem.parent().next().addClass('zindexDecrease');
    curItem.addClass('itemExpanded')
}

function itemMouseOutHandler () {
    var curItem = $(this);
    curItem.find('.overlay').removeClass('hidden');
    curItem.parent().next().removeClass('zindexDecrease');
    curItem.removeClass('itemExpanded')
}

$('.read-more').click(function () {
    var curItem = $(this).parent();
    var item = $('.interactive-item-container');
    var glContainer = curItem.parent();

    item.off();
    item.addClass('zindexDecrease');
    item.removeClass('itemExpanded');
    curItem.addClass('itemActive');
    curItem.find('.close').removeClass('hidden');
    glContainer.addClass('itemActiveContainer');
    glContainer.nextAll().addClass('zindexDecrease');
});

$('.close').click(function () {
    console.log('toot')
    var curItem = $(this).parent();
    var item = $('.interactive-item-container');
    var glContainer = curItem.parent();

    item.mouseover(itemMouseOverHandler);
    item.mouseout(itemMouseOutHandler);

    item.removeClass('zindexDecrease');
    curItem.removeClass('itemActive');
    curItem.find('.close').addClass('hidden');
    glContainer.removeClass('itemActiveContainer');
    glContainer.nextAll().removeClass('zindexDecrease');
    glContainer.find(item).removeClass('itemExpanded');
});