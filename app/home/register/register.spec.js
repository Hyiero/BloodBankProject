/**
 * Created by Hyiero on 12/11/2016.
 */

import registerModule from './register.module';
import registerController from './register.controller';


let registerCtrl;

describe('Register Spec',function(){
    "use strict";
    beforeEach(function(){
        angular.mock.module(registerModule);
    });
    describe('Register Controller',function(){
        beforeEach(inject(function($controller){
            registerCtrl = $controller(registerController);
        }));

        it('should exist on initialize',function(){
            expect(registerCtrl).toBeDefined();
        })
    })
});