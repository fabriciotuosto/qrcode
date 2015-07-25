var QRClient = function() {

  var currentCallback;
  var qrWorker = var Worker('scripts/jsqrcode/qrworker.js');
  this.decode = function(imageData, callback) {
      qrWorker.postMessage({imageData : imageData});
      qrWorker.onmessage = function(e){
        callback(e.data);
      };
      qrWorker.onerror = console.log
  };
 };