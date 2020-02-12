import _ from 'loadsh';
import $ from 'jquery';
import {cube} from './common-math'

console.log(_.join(['Another', ' module'], ' ' + cube(10)));
$('body').css({"color":'blue'});