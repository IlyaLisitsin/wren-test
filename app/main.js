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
    curItem.find('.overlay').delay(3000).removeClass('hidden');
    curItem.parent().next().removeClass('zindexDecrease');
    curItem.removeClass('itemExpanded')
}

$('.interactive-item-container .read-more').click(readmoreClickHandler);
$('.close').click(closer);

function readmoreClickHandler(e, curItemContainer) {
    var curItem = curItemContainer || $(this).parent();
    var item = $('.interactive-item-container');
    var glContainer = curItem.parent();
    var navigationPanel = $('.navigation-panel');
    // var activeContent = navigationPanel.find('.active-item-content')

    var glContainerClass = glContainer.attr('class').split(' ')[1];
    var navigationPanelHiddenTab = navigationPanel.find(`.navigation-panel-item-${glContainerClass}`);
    navigationPanelHiddenTab.addClass('hideActiveTab');

    $(`.active-item-content-${glContainerClass}`).removeClass('hidden');

    var visibleNavigationTabs = $('.navigation-panel-item:not(.hideActiveTab)');
    $(Array.from(visibleNavigationTabs)[2]).addClass('left-1');
    $(Array.from(visibleNavigationTabs)[1]).addClass('left-2');

    item.off();
    item.addClass('zindexDecrease');
    item.removeClass('itemExpanded');

    curItem.addClass('itemActive');
    curItem.find('.close').removeClass('hidden');

    glContainer.addClass('itemActiveContainer');
    glContainer.nextUntil(navigationPanel).addClass('zindexDecrease');

    navigationPanel.addClass('zindexIncrease activateNavigationPanel');
    // activeContent.removeClass('hidden');
}

function closer() {
    // var curItem = $(this).parent();
    var curItem = $('.itemActive');
    var item = $('.interactive-item-container');
    var glContainer = curItem.parent();
    var navigationPanel = $('.navigation-panel');
    var activeContent = $('.active-item-content')

    var glContainerClass = glContainer.attr('class').replace('interactive-item ', '').replace(' itemActiveContainer', '')
    var navigationPanelHiddenTab = navigationPanel.find(`.navigation-panel-item-${glContainerClass}`);
    navigationPanelHiddenTab.removeClass('hideActiveTab');

    $('.navigation-panel-item').removeClass('left-1 left-2');

    item.mouseover(itemMouseOverHandler);
    item.mouseout(itemMouseOutHandler);
    item.removeClass('zindexDecrease');

    curItem.removeClass('itemActive');
    curItem.find('.close').addClass('hidden');

    glContainer.nextUntil(navigationPanel).removeClass('zindexDecrease');
    glContainer.find(item).removeClass('itemExpanded');

    navigationPanel.removeClass('activateNavigationPanel tabIndexTop');

    var ms = 20;

    switch (glContainerClass) {
        case 'family-life':
            ms = 300;
            break;
        case 'friendly-home':
            ms = 100;
            break;
    }

    setTimeout(function () {
        glContainer.removeClass('itemActiveContainer');
    }, ms);

    setTimeout(function () {
        navigationPanel.removeClass('zindexIncrease');
    }, 400);

    activeContent.addClass('hidden');

}

$('.navigation-panel-item').click(function () {
    var navPanel = $('.navigation-panel');
    var itemClassName = $(this).attr('class').replace('navigation-panel-item navigation-panel-item-', '').replace(' left-2', '').replace(' left-1', '');

    var curItemGlContainer = $(`.${itemClassName}`);
    var curItem = curItemGlContainer.find('.interactive-item-container');
    var overlay = curItem.find('.overlay');

    navPanel.removeClass('tabIndexTop');
    closer();
    overlay.addClass('hidden');
    readmoreClickHandler(true, curItem);

    $('.navigation-panel').addClass('tabIndexTop');

});

function getValidClass(el) {
    return el.replace('navigation-panel-item navigation-panel-item-', '').replace(' left-2', '').replace(' left-1', '');
}