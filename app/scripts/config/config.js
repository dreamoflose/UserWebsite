/**
 * @description config.js
 * @class config.js
 * @author 吴小伟(shevy) <836790625@qq.com> 2016/5/16 14:03
 */
//require('../../css/reset.scss'); //加载初始化样式
//require('../../css/allComponent.scss'); //加载组件样式
var React = require('react');
var AppWrap = require('../component/AppWrap'); //加载组件
var createRedux = require('redux').createRedux;
var Provider = require('redux/react').Provider;
var stores = require('AppStore');

var redux = createRedux(stores);

var App = React.createClass({
  render: function() {
    return (
      <Provider redux={redux}>
                {function() { return <AppWrap />; }}
      </Provider>
      );
  }
});

React.render(
  <App />, document.body
);