import _ from 'loadsh';
import $ from 'jquery';
import {cube} from './common-math'

console.log(_.join(['Another', ' module2'], ''+cube(5)));
$('body').css({"color":'red'});