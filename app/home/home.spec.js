/**
 * Created by Hyiero on 12/11/2016.
 */

import homeModule from './home.module';
import homeController from './home.controller';


let homeCtrl;

describe('Home Spec',function(){
    "use strict";
    beforeEach(function(){
        angular.mock.module(homeModule);
    });
    describe('Home Controller',function(){
        beforeEach(inject(function($controller){
            homeCtrl = $controller(homeController);
        }));

        it('should exist on initialize',function(){
            expect(homeCtrl).toBeDefined();
        })
    })
});