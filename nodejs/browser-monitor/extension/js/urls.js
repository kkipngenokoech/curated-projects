function setItem() {
  console.log("item saved");
}
function onError(error) {
  console.log(error);
}
// as soon as a user visits a url
// this file gets executed
let saveData = async () => {
	// this function saves all the url in localstorage
	// firstly we extract all the arrays from the localstorage
  let arr = await browser.storage.local.get("urls");
	
	// secondly, we gather the url we just visited
  let urlObj = new URL(document.URL);
  url = urlObj.origin;

	// if there is no arr for urls object on localstorage
	// create an array and push it inside the localstorage
	// and make sure there are no duplicates
  if (arr.urls === undefined) {
    let urlsArr = [];
    if (!urlsArr.includes(url)) {
      urlsArr.push(url);
      console.log(urlsArr);
      browser.storage.local.set({ urls: urlsArr }).then(setItem, onError);
    }
  } else {
		// if there is array of urls
		// push the new url inside it.
		// and make sure there is no duplicates
    if (!arr.urls.includes(url)) {
      console.log(url);
      arr.urls.push(url);
      browser.storage.local.set({ urls: arr.urls }).then(saveItem, onError);
    }
  }
};
saveData();
