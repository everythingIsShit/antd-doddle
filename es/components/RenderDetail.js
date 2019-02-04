function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import moment from 'moment';
import { getEnumObject, DATE_FORMAT, DATE_TIME_FORMAT } from '../utils';
import style from './index.less';
/**
 * 作用: 详情信息表单的渲染
 * @params: fields 渲染表单的属性对象
 * @params: props  渲染表单的值对象
 * @return：返回值是一个Dom树组
 */

export function renderBaseFields(fields) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fields.map(function (_ref, index) {
    var name = _ref.name,
        key = _ref.key,
        type = _ref.type,
        enums = _ref.enums,
        render = _ref.render,
        isShow = _ref.isShow;
    var value = props[key];

    if (type === 'date') {
      value = value && moment(value).format(DATE_FORMAT);
    }

    if (type === 'datetime') {
      value = value && moment(value).format(DATE_TIME_FORMAT);
      !value && (value = '-:-:-');
    } // 处理枚举


    if (enums && enums.length > 0) {
      value = getEnumObject(enums, props[key]).label;
    } // 处理render 函数


    if (render && typeof render === 'function') {
      value = render(props);
    } // 如果存在是否显示的定义，并且判断为不显示，直接返回null


    if (isShow && !isShow(props)) {
      return null;
    } // 处理没有值时，统一显示为--,


    (value === undefined || value === '') && (value = '--');
    return React.createElement("div", {
      className: "showInfo-item",
      key: index
    }, React.createElement("span", {
      className: "showInfo-label"
    }, name), React.createElement("span", {
      className: "showInfo-value"
    }, value));
  });
}

var RecordDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecordDetail, _React$Component);

  function RecordDetail(props) {
    var _this;

    _classCallCheck(this, RecordDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecordDetail).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(RecordDetail, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fields = _this$props.fields,
          _this$props$detail = _this$props.detail,
          detail = _this$props$detail === void 0 ? {} : _this$props$detail,
          fieldsName = _this$props.fieldsName;
      return React.createElement("div", {
        className: style.RenderDetail
      }, React.createElement("h3", {
        className: "title"
      }, fieldsName), React.createElement("div", {
        className: "showInfo-content"
      }, renderBaseFields(fields, detail)));
    }
  }]);

  return RecordDetail;
}(React.Component);

export { RecordDetail as default };