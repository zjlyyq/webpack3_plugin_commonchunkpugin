import _ from 'loadsh';
import $ from 'jquery';
import {cube} from './common-math';
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' '+cube(1));

    return element;
}

document.body.appendChild(component());
$('body').css({"color":'red'});
