var spider = angular.module("spider-thu-mean", []);

spider.controller("AppCtrl", function($http, $location) {
  var app = this;
  var url = "http://" + $location.host() + ":3000/api";

  app.saveProduct = function(newProduct) {
    $http.post(url + "/add", {name: newProduct}).success(function(){
      loadProducts();
    });
  };
  function loadProducts() {
    $http.get(url).success(function (products) {
      app.products = products;
    });
  }
  loadProducts();
});
