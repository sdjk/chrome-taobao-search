// 目录脚本
chrome.contextMenus.create({
    title: '使用淘宝搜索"%s"', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(item)
    {
        chrome.tabs.create({url: 'https://s.taobao.com/search?q=' + item.selectionText});
    }
});


