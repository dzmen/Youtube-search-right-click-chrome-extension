function search(select)
{
    var selectedtext = select.selectionText;
    chrome.tabs.create({url: "https://www.youtube.com/results?search_query=" + selectedtext})
}

chrome.contextMenus.create(
    {title: "Search on Youtube",
     contexts:["selection"], 
     onclick: search}); 