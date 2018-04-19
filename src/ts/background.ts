chrome.runtime.onInstalled.addListener(() => {
  console.log('hello, world');
});

chrome.omnibox.onInputEntered.addListener((event) => {
  console.log(event);
});
