var obj = {
  x: {}
};

(function () {
  obj.x.f = function (test) {}
})();


(function () {
  var f = obj.x.f;

  obj.x.f = function (test) {
    console.log(test);
    f(test);
    console.log(f);
  }
  obj.x.f(100);
})();

(function () {
  var f = obj.x.f;

  obj.x.f = function (test) {
    console.log(test);
    f(test);
    console.log(f);
  }
  obj.x.f(200);
})();