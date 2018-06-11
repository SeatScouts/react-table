var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */

import React from 'react';

export default (function (Component) {
  var _class, _temp, _initialiseProps;

  var wrapper = (_temp = _class = function (_React$Component) {
    _inherits(RTTreeTable, _React$Component);

    function RTTreeTable(props) {
      _classCallCheck(this, RTTreeTable);

      var _this = _possibleConstructorReturn(this, (RTTreeTable.__proto__ || Object.getPrototypeOf(RTTreeTable)).call(this, props));

      _initialiseProps.call(_this);

      _this.getWrappedInstance.bind(_this);
      _this.TrComponent.bind(_this);
      _this.getTrProps.bind(_this);
      return _this;
    }

    // this is so we can expose the underlying ReactTable to get at the sortedData for selectAll


    _createClass(RTTreeTable, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            columns = _props.columns,
            treeTableIndent = _props.treeTableIndent,
            rest = _objectWithoutProperties(_props, ['columns', 'treeTableIndent']);

        var TrComponent = this.TrComponent,
            getTrProps = this.getTrProps;

        var extra = {
          columns: columns.map(function (col) {
            var column = col;
            if (rest.pivotBy && (rest.pivotBy.includes(col.accessor) || rest.pivotBy.includes(col.id))) {
              column = {
                id: col.id,
                accessor: col.accessor,
                width: treeTableIndent + 'px',
                show: false,
                Header: ''
              };
            }
            return column;
          }),
          TrComponent: TrComponent,
          getTrProps: getTrProps
        };

        return React.createElement(Component, _extends({}, rest, extra, { ref: function ref(r) {
            return _this2.wrappedInstance = r;
          } }));
      }
    }]);

    return RTTreeTable;
  }(React.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getWrappedInstance = function () {
      if (!_this3.wrappedInstance) console.warn('RTTreeTable - No wrapped instance');
      if (_this3.wrappedInstance.getWrappedInstance) return _this3.wrappedInstance.getWrappedInstance();else return _this3.wrappedInstance;
    };

    this.TrComponent = function (props) {
      var ri = props.ri,
          rest = _objectWithoutProperties(props, ['ri']);

      if (ri && ri.groupedByPivot) {
        var cell = _extends({}, props.children[ri.level]);

        cell.props.style.flex = 'unset';
        cell.props.style.width = '100%';
        cell.props.style.maxWidth = 'unset';
        cell.props.style.paddingLeft = _this3.props.treeTableIndent * ri.level + 'px';
        // cell.props.style.backgroundColor = '#DDD';
        cell.props.style.borderBottom = '1px solid rgba(128,128,128,0.2)';

        return React.createElement(
          'div',
          { className: 'rt-tr ' + rest.className, style: rest.style },
          cell
        );
      }
      return React.createElement(Component.defaultProps.TrComponent, rest);
    };

    this.getTrProps = function (state, ri, ci, instance) {
      return { ri: ri };
    };
  }, _temp);
  wrapper.displayName = 'RTTreeTable';
  wrapper.defaultProps = {
    treeTableIndent: 10
  };

  return wrapper;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob2MvdHJlZVRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid3JhcHBlciIsInByb3BzIiwiZ2V0V3JhcHBlZEluc3RhbmNlIiwiYmluZCIsIlRyQ29tcG9uZW50IiwiZ2V0VHJQcm9wcyIsImNvbHVtbnMiLCJ0cmVlVGFibGVJbmRlbnQiLCJyZXN0IiwiZXh0cmEiLCJtYXAiLCJjb2x1bW4iLCJjb2wiLCJwaXZvdEJ5IiwiaW5jbHVkZXMiLCJhY2Nlc3NvciIsImlkIiwid2lkdGgiLCJzaG93IiwiSGVhZGVyIiwid3JhcHBlZEluc3RhbmNlIiwiciIsIkNvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicmkiLCJncm91cGVkQnlQaXZvdCIsImNlbGwiLCJjaGlsZHJlbiIsImxldmVsIiwic3R5bGUiLCJmbGV4IiwibWF4V2lkdGgiLCJwYWRkaW5nTGVmdCIsImJvcmRlckJvdHRvbSIsImNsYXNzTmFtZSIsInN0YXRlIiwiY2kiLCJpbnN0YW5jZSIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLGdCQUFlLHFCQUFhO0FBQUE7O0FBQzFCLE1BQU1DO0FBQUE7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFBQTs7QUFFakIsWUFBS0Msa0JBQUwsQ0FBd0JDLElBQXhCO0FBQ0EsWUFBS0MsV0FBTCxDQUFpQkQsSUFBakI7QUFDQSxZQUFLRSxVQUFMLENBQWdCRixJQUFoQjtBQUppQjtBQUtsQjs7QUFFRDs7O0FBUkk7QUFBQTtBQUFBLCtCQXdDSztBQUFBOztBQUFBLHFCQUN1QyxLQUFLRixLQUQ1QztBQUFBLFlBQ0NLLE9BREQsVUFDQ0EsT0FERDtBQUFBLFlBQ1VDLGVBRFYsVUFDVUEsZUFEVjtBQUFBLFlBQzhCQyxJQUQ5Qjs7QUFBQSxZQUVDSixXQUZE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Ki9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gY2xhc3MgUlRUcmVlVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuZ2V0V3JhcHBlZEluc3RhbmNlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuVHJDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgdGhpcy5nZXRUclByb3BzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHNvIHdlIGNhbiBleHBvc2UgdGhlIHVuZGVybHlpbmcgUmVhY3RUYWJsZSB0byBnZXQgYXQgdGhlIHNvcnRlZERhdGEgZm9yIHNlbGVjdEFsbFxuICAgIGdldFdyYXBwZWRJbnN0YW5jZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy53cmFwcGVkSW5zdGFuY2UpIGNvbnNvbGUud2FybignUlRUcmVlVGFibGUgLSBObyB3cmFwcGVkIGluc3RhbmNlJylcbiAgICAgIGlmICh0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UpIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UoKVxuICAgICAgZWxzZSByZXR1cm4gdGhpcy53cmFwcGVkSW5zdGFuY2VcbiAgICB9XG5cbiAgICBUckNvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgICAgIGNvbnN0IHsgcmksIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgICBpZiAocmkgJiYgcmkuZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHsgLi4ucHJvcHMuY2hpbGRyZW5bcmkubGV2ZWxdIH1cblxuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLmZsZXggPSAndW5zZXQnXG4gICAgICAgIGNlbGwucHJvcHMuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgICAgY2VsbC5wcm9wcy5zdHlsZS5tYXhXaWR0aCA9ICd1bnNldCdcbiAgICAgICAgY2VsbC5wcm9wcy5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMucHJvcHMudHJlZVRhYmxlSW5kZW50ICogcmkubGV2ZWx9cHhgXG4gICAgICAgIC8vIGNlbGwucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNEREQnO1xuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgcmdiYSgxMjgsMTI4LDEyOCwwLjIpJ1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BydC10ciAke3Jlc3QuY2xhc3NOYW1lfWB9IHN0eWxlPXtyZXN0LnN0eWxlfT5cbiAgICAgICAgICAgIHtjZWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gPENvbXBvbmVudC5kZWZhdWx0UHJvcHMuVHJDb21wb25lbnQgey4uLnJlc3R9IC8+XG4gICAgfVxuXG4gICAgZ2V0VHJQcm9wcyA9IChzdGF0ZSwgcmksIGNpLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgcmkgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgY29sdW1ucywgdHJlZVRhYmxlSW5kZW50LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB7IFRyQ29tcG9uZW50LCBnZXRUclByb3BzIH0gPSB0aGlzXG4gICAgICBjb25zdCBleHRyYSA9IHtcbiAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gY29sXG4gICAgICAgICAgaWYgKHJlc3QucGl2b3RCeSAmJiAocmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5hY2Nlc3NvcikgfHwgcmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5pZCkpKSB7XG4gICAgICAgICAgICBjb2x1bW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBjb2wuaWQsXG4gICAgICAgICAgICAgIGFjY2Vzc29yOiBjb2wuYWNjZXNzb3IsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt0cmVlVGFibGVJbmRlbnR9cHhgLFxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgSGVhZGVyOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbHVtblxuICAgICAgICB9KSxcbiAgICAgICAgVHJDb21wb25lbnQsXG4gICAgICAgIGdldFRyUHJvcHMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5yZXN0fSB7Li4uZXh0cmF9IHJlZj17ciA9PiAodGhpcy53cmFwcGVkSW5zdGFuY2UgPSByKX0gLz5cbiAgICB9XG4gIH1cbiAgd3JhcHBlci5kaXNwbGF5TmFtZSA9ICdSVFRyZWVUYWJsZSdcbiAgd3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHJlZVRhYmxlSW5kZW50OiAxMCxcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVyXG59XG4iXX0=