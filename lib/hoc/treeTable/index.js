'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

exports.default = function (Component) {
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

        console.log("Columns");
        console.log(columns);
        console.log("rest");
        console.log(rest);
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

        return _react2.default.createElement(Component, _extends({}, rest, extra, { ref: function ref(r) {
            return _this2.wrappedInstance = r;
          } }));
      }
    }]);

    return RTTreeTable;
  }(_react2.default.Component), _initialiseProps = function _initialiseProps() {
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
        console.log("ri");
        console.log(ri);
        console.log("The TR COMPONENT!");
        console.log(props);
        console.log("rest");
        console.log(rest);

        console.log("The cell to render");
        console.log(cell);
        cell.props.style.flex = 'unset';
        cell.props.style.width = '100%';
        cell.props.style.maxWidth = 'unset';
        cell.props.style.paddingLeft = _this3.props.treeTableIndent * ri.level + 'px';
        // cell.props.style.backgroundColor = '#DDD';
        cell.props.style.borderBottom = '1px solid rgba(128,128,128,0.2)';
        //cell.props.className = cell.props.className.replace('hidden', '');

        return _react2.default.createElement(
          'div',
          { className: 'rt-tr ' + rest.className, style: rest.style },
          cell
        );
      }
      return _react2.default.createElement(Component.defaultProps.TrComponent, rest);
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob2MvdHJlZVRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJwcm9wcyIsImdldFdyYXBwZWRJbnN0YW5jZSIsImJpbmQiLCJUckNvbXBvbmVudCIsImdldFRyUHJvcHMiLCJjb2x1bW5zIiwidHJlZVRhYmxlSW5kZW50IiwicmVzdCIsImNvbnNvbGUiLCJsb2ciLCJleHRyYSIsIm1hcCIsImNvbHVtbiIsImNvbCIsInBpdm90QnkiLCJpbmNsdWRlcyIsImFjY2Vzc29yIiwiaWQiLCJ3aWR0aCIsInNob3ciLCJIZWFkZXIiLCJ3cmFwcGVkSW5zdGFuY2UiLCJyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3YXJuIiwicmkiLCJncm91cGVkQnlQaXZvdCIsImNlbGwiLCJjaGlsZHJlbiIsImxldmVsIiwic3R5bGUiLCJmbGV4IiwibWF4V2lkdGgiLCJwYWRkaW5nTGVmdCIsImJvcmRlckJvdHRvbSIsImNsYXNzTmFtZSIsInN0YXRlIiwiY2kiLCJpbnN0YW5jZSIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OzsrZUFGQTs7a0JBSWUscUJBQWE7QUFBQTs7QUFDMUIsTUFBTUE7QUFBQTs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUFBOztBQUVqQixZQUFLQyxrQkFBTCxDQUF3QkMsSUFBeEI7QUFDQSxZQUFLQyxXQUFMLENBQWlCRCxJQUFqQjtBQUNBLFlBQUtFLFVBQUwsQ0FBZ0JGLElBQWhCO0FBSmlCO0FBS2xCOztBQUVEOzs7QUFSSTtBQUFBO0FBQUEsK0JBaURLO0FBQUE7O0FBQUEscUJBQ3VDLEtBQUtGLEtBRDVDO0FBQUEsWUFDQ0ssT0FERCxVQUNDQSxPQUREO0FBQUEsWUFDVUMsZUFEVixVQUNVQSxlQURWO0FBQUEsWUFDOEJDLElBRDlCOztBQUVQQyxnQkFBUUMsR0FBUixDQUFZLFNBQVo7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WUFBWCxDQUF3QixXQUF4QixFQUF3Q3JCLElBQXhDLENBQVA7QUFDRCxLQTNDRzs7QUFBQSxTQTZDSkgsVUE3Q0ksR0E2Q1MsVUFBQ2lDLEtBQUQsRUFBUVgsRUFBUixFQUFZWSxFQUFaLEVBQWdCQyxRQUFoQixFQUE2QjtBQUN4QyxhQUFPLEVBQUViLE1BQUYsRUFBUDtBQUNELEtBL0NHO0FBQUEsV0FBTjtBQTZFQTNCLFVBQVF5QyxXQUFSLEdBQXNCLGFBQXRCO0FBQ0F6QyxVQUFRMEMsWUFBUixHQUF1QjtBQUNyQm5DLHFCQUFpQjtBQURJLEdBQXZCOztBQUlBLFNBQU9QLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gY2xhc3MgUlRUcmVlVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuZ2V0V3JhcHBlZEluc3RhbmNlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuVHJDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgdGhpcy5nZXRUclByb3BzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHNvIHdlIGNhbiBleHBvc2UgdGhlIHVuZGVybHlpbmcgUmVhY3RUYWJsZSB0byBnZXQgYXQgdGhlIHNvcnRlZERhdGEgZm9yIHNlbGVjdEFsbFxuICAgIGdldFdyYXBwZWRJbnN0YW5jZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy53cmFwcGVkSW5zdGFuY2UpIGNvbnNvbGUud2FybignUlRUcmVlVGFibGUgLSBObyB3cmFwcGVkIGluc3RhbmNlJylcbiAgICAgIGlmICh0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UpIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UoKVxuICAgICAgZWxzZSByZXR1cm4gdGhpcy53cmFwcGVkSW5zdGFuY2VcbiAgICB9XG5cbiAgICBUckNvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgICAgIGNvbnN0IHsgcmksIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgICBpZiAocmkgJiYgcmkuZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHsgLi4ucHJvcHMuY2hpbGRyZW5bcmkubGV2ZWxdIH1cbiAgICAgIGNvbnNvbGUubG9nKFwicmlcIik7XG4gICAgICBjb25zb2xlLmxvZyhyaSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBUUiBDT01QT05FTlQhXCIpO1xuICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgICAgY29uc29sZS5sb2coXCJyZXN0XCIpO1xuICAgICAgY29uc29sZS5sb2cocmVzdCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGNlbGwgdG8gcmVuZGVyXCIpO1xuICAgICAgY29uc29sZS5sb2coY2VsbCk7XG4gICAgICAgIGNlbGwucHJvcHMuc3R5bGUuZmxleCA9ICd1bnNldCdcbiAgICAgICAgY2VsbC5wcm9wcy5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLm1heFdpZHRoID0gJ3Vuc2V0J1xuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5wcm9wcy50cmVlVGFibGVJbmRlbnQgKiByaS5sZXZlbH1weGBcbiAgICAgICAgLy8gY2VsbC5wcm9wcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0RERCc7XG4gICAgICAgIGNlbGwucHJvcHMuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCByZ2JhKDEyOCwxMjgsMTI4LDAuMiknXG4gICAgICAgIC8vY2VsbC5wcm9wcy5jbGFzc05hbWUgPSBjZWxsLnByb3BzLmNsYXNzTmFtZS5yZXBsYWNlKCdoaWRkZW4nLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJ0LXRyICR7cmVzdC5jbGFzc05hbWV9YH0gc3R5bGU9e3Jlc3Quc3R5bGV9PlxuICAgICAgICAgICAge2NlbGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiA8Q29tcG9uZW50LmRlZmF1bHRQcm9wcy5UckNvbXBvbmVudCB7Li4ucmVzdH0gLz5cbiAgICB9XG5cbiAgICBnZXRUclByb3BzID0gKHN0YXRlLCByaSwgY2ksIGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4geyByaSB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBjb2x1bW5zLCB0cmVlVGFibGVJbmRlbnQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uc1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgICAgY29uc29sZS5sb2coXCJyZXN0XCIpO1xuICAgICAgY29uc29sZS5sb2cocmVzdCk7XG4gICAgICBjb25zdCB7IFRyQ29tcG9uZW50LCBnZXRUclByb3BzIH0gPSB0aGlzXG4gICAgICBjb25zdCBleHRyYSA9IHtcbiAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gY29sXG4gICAgICAgICAgaWYgKHJlc3QucGl2b3RCeSAmJiAocmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5hY2Nlc3NvcikgfHwgcmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5pZCkpKSB7XG4gICAgICAgICAgICBjb2x1bW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBjb2wuaWQsXG4gICAgICAgICAgICAgIGFjY2Vzc29yOiBjb2wuYWNjZXNzb3IsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt0cmVlVGFibGVJbmRlbnR9cHhgLFxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgSGVhZGVyOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbHVtblxuICAgICAgICB9KSxcbiAgICAgICAgVHJDb21wb25lbnQsXG4gICAgICAgIGdldFRyUHJvcHMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5yZXN0fSB7Li4uZXh0cmF9IHJlZj17ciA9PiAodGhpcy53cmFwcGVkSW5zdGFuY2UgPSByKX0gLz5cbiAgICB9XG4gIH1cbiAgd3JhcHBlci5kaXNwbGF5TmFtZSA9ICdSVFRyZWVUYWJsZSdcbiAgd3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHJlZVRhYmxlSW5kZW50OiAxMCxcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVyXG59XG4iXX0=