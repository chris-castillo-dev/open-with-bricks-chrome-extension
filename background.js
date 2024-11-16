chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openWithBricks",
    title: "Open with Bricks",
    contexts: ["page", "link"],
    icons: {
      "16": "icon16.png"
    }
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openWithBricks",
    title: "Open with Bricks",
    contexts: ["page", "link"]  // Adding "link" to the contexts
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openWithBricks") {
    // If right-clicking a link, use that URL, otherwise use the page URL
    const sourceUrl = info.linkUrl || tab.url;
    const url = new URL(sourceUrl);
    url.searchParams.set("bricks", "run");
    chrome.tabs.create({ url: url.toString() });
  }
});