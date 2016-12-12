/**
 * Created by Hyiero on 12/11/2016.
 */

import homeTemplate from './home.html';
import homeController from './home.controller';

/* @ngInject */
export default function homeConfig($stateProvider){
    "use strict";
    $stateProvider
        .state('home',{
            url: '',
            views: {
                '': {
                    template: homeTemplate,
                    controller: homeController,
                    controllerAs: 'homeCtrl'
                }
            }
        });
}