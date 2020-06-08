mobileP = {
  device: null,
};
mobileM = {
  mobileInit: function () {
    var deviceQuery = JSON.stringify(mobileM.detectMobile());
    mobileP.device = (deviceQuery != "null") ? deviceQuery : "[\"Desktop\"]";
    console.log("Device: " + mobileP.device);
  },
  detectMobile: function () {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  },
};
mobileM.mobileInit();
