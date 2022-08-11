const QRCode = require("qrcode");

const opts = {
  errorCorrectionLevel: "H",
  type: "png",
  quality: 1,
  margin: 1,
  width: 2048,
  color: {
    dark: "#000",
    light: "#FFF",
  },
};
QRCode.toFile(
  "whatever.png",
  "https://my.matterport.com/show/?m=rH5fZenC2sj",
  opts
).then(console.log);
