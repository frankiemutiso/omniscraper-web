/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/tagsWorker.js ***!
  \***************************/
self.onmessage = function (e) {
  var url = e.data;
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    self.postMessage(data);
    self.close();
  });
};
/******/ })()
;
//# sourceMappingURL=src_tagsWorker_js-d6974ca95c19dacf9643.js.map