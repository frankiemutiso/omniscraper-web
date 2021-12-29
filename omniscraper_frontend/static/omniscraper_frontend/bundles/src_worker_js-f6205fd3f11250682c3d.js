/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
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
//# sourceMappingURL=src_worker_js-f6205fd3f11250682c3d.js.map