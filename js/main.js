import angular from 'angular';

// Controllers
import LikeController from './controllers/likecontroller';

// Creating a Module
angular.module('myapp', [])

// Some Controllers
.controller('LikeController', LikeController);
