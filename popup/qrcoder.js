var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 300,
	height : 300
});

browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
    qrcode.makeCode(tab.url);
}, console.error)