/**
 * Created by L.H.S on 2017/8/14.
 */

define([''], function () {
    'use strict';

    var topnavCtrl = ['$state',
        function ($state) {
            $state.go("home");
        }
    ];

    return topnavCtrl;
});