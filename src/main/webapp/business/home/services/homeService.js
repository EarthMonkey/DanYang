/**
 * Created by L.H.S on 2017/8/14.
 */

define([''], function () {
    'use strict';

    var homeCtrl = function () {

        var service = this;

        service.getTest = function () {
            return "this is test";
        };

    };

    var homeModule = angular.module('home.config');
    homeModule.service('homeService', homeCtrl);

});