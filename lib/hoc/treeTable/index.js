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

        cell.props.style.flex = 'unset';
        cell.props.style.width = '100%';
        cell.props.style.maxWidth = 'unset';
        cell.props.style.paddingLeft = _this3.props.treeTableIndent * ri.level + 'px';
        // cell.props.style.backgroundColor = '#DDD';
        cell.props.style.borderBottom = '1px solid rgba(128,128,128,0.2)';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob2MvdHJlZVRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJwcm9wcyIsImdldFdyYXBwZWRJbnN0YW5jZSIsImJpbmQiLCJUckNvbXBvbmVudCIsImdldFRyUHJvcHMiLCJjb2x1bW5zIiwidHJlZVRhYmxlSW5kZW50IiwicmVzdCIsImV4dHJhIiwibWFwIiwiY29sdW1uIiwiY29sIiwicGl2b3RCeSIsImluY2x1ZGVzIiwiYWNjZXNzb3IiLCJpZCIsIndpZHRoIiwic2hvdyIsIkhlYWRlciIsIndyYXBwZWRJbnN0YW5jZSIsInIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicmkiLCJncm91cGVkQnlQaXZvdCIsImNlbGwiLCJjaGlsZHJlbiIsImxldmVsIiwic3R5bGUiLCJmbGV4IiwibWF4V2lkdGgiLCJwYWRkaW5nTGVmdCIsImJvcmRlckJvdHRvbSIsImNsYXNzTmFtZSIsInN0YXRlIiwiY2kiLCJpbnN0YW5jZSIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OzsrZUFGQTs7a0JBSWUscUJBQWE7QUFBQTs7QUFDMUIsTUFBTUE7QUFBQTs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUFBOztBQUVqQixZQUFLQyxrQkFBTCxDQUF3QkMsSUFBeEI7QUFDQSxZQUFLQyxXQUFMLENBQWlCRCxJQUFqQjtBQUNBLFlBQUtFLFVBQUwsQ0FBZ0JGLElBQWhCO0FBSmlCO0FBS2xCOztBQUVEOzs7QUFSSTtBQUFBO0FBQUEsK0JBd0NLO0FBQUE7O0FBQUEscUJBQ3VDLEtBQUtGLEtBRDVDO0FBQUEsWUFDQ0ssT0FERCxVQUNDQSxPQUREO0FBQUEsWUFDVUMsZUFEVixVQUNVQSxlQURWO0FBQUEsWUFDOEJDLElBRDlCOztBQUFBLFlBRUNKLFdBRkQsR0FFNkIsSUFGN0IsQ0FFQ0EsV0FGRDtBQUFBLFlBRWNDLFVBRmQsR0FFNkIsSUFGN0IsQ0FFY0EsVUFGZDs7QUFHUCxZQUFNSSxRQUFRO0FBQ1pILG1CQUFTQSxRQUFRSSxHQUFSLENBQVksZUFBTztBQUMxQixnQkFBSUMsU0FBU0MsR0FBYjtBQUNBLGdCQUFJSixLQUFLSyxPQUFMLEtBQWlCTCxLQUFLSyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JGLElBQUlHLFFBQTFCLEtBQXVDUCxLQUFLSyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JGLElBQUlJLEVBQTFCLENBQXhELENBQUosRUFBNEY7QUFDMUZMLHVCQUFTO0FBQ1BLLG9CQUFJSixJQUFJSSxFQUREO0FBRVBELDBCQUFVSCxJQUFJRyxRQUZQO0FBR1BFLHVCQUFVVixlQUFWLE9BSE87QUFJUFcsc0JBQU0sS0FKQztBQUtQQyx3QkFBUTtBQUxELGVBQVQ7QUFPRDtBQUNELG1CQUFPUixNQUFQO0FBQ0QsV0FaUSxDQURHO0FBY1pQLGtDQWRZO0FBZVpDO0FBZlksU0FBZDs7QUFrQkEsZUFBTyw4QkFBQyxTQUFELGVBQWVHLElBQWYsRUFBeUJDLEtBQXpCLElBQWdDLEtBQUs7QUFBQSxtQkFBTSxPQUFLVyxlQUFMLEdBQXVCQyxDQUE3QjtBQUFBLFdBQXJDLElBQVA7QUFDRDtBQTlERzs7QUFBQTtBQUFBLElBQW9DQyxnQkFBTUMsU0FBMUM7QUFBQTs7QUFBQSxTQVNKckIsa0JBVEksR0FTaUIsWUFBTTtBQUN6QixVQUFJLENBQUMsT0FBS2tCLGVBQVYsRUFBMkJJLFFBQVFDLElBQVIsQ0FBYSxtQ0FBYjtBQUMzQixVQUFJLE9BQUtMLGVBQUwsQ0FBcUJsQixrQkFBekIsRUFBNkMsT0FBTyxPQUFLa0IsZUFBTCxDQUFxQmxCLGtCQUFyQixFQUFQLENBQTdDLEtBQ0ssT0FBTyxPQUFLa0IsZUFBWjtBQUNOLEtBYkc7O0FBQUEsU0FlSmhCLFdBZkksR0FlVSxpQkFBUztBQUFBLFVBQ2JzQixFQURhLEdBQ0d6QixLQURILENBQ2J5QixFQURhO0FBQUEsVUFDTmxCLElBRE0sNEJBQ0dQLEtBREg7O0FBRXJCLFVBQUl5QixNQUFNQSxHQUFHQyxjQUFiLEVBQTZCO0FBQzNCLFlBQU1DLG9CQUFZM0IsTUFBTTRCLFFBQU4sQ0FBZUgsR0FBR0ksS0FBbEIsQ0FBWixDQUFOOztBQUVBRixhQUFLM0IsS0FBTCxDQUFXOEIsS0FBWCxDQUFpQkMsSUFBakIsR0FBd0IsT0FBeEI7QUFDQUosYUFBSzNCLEtBQUwsQ0FBVzhCLEtBQVgsQ0FBaUJkLEtBQWpCLEdBQXlCLE1BQXpCO0FBQ0FXLGFBQUszQixLQUFMLENBQVc4QixLQUFYLENBQWlCRSxRQUFqQixHQUE0QixPQUE1QjtBQUNBTCxhQUFLM0IsS0FBTCxDQUFXOEIsS0FBWCxDQUFpQkcsV0FBakIsR0FBa0MsT0FBS2pDLEtBQUwsQ0FBV00sZUFBWCxHQUE2Qm1CLEdBQUdJLEtBQWxFO0FBQ0E7QUFDQUYsYUFBSzNCLEtBQUwsQ0FBVzhCLEtBQVgsQ0FBaUJJLFlBQWpCLEdBQWdDLGlDQUFoQzs7QUFFQSxlQUNFO0FBQUE7QUFBQSxZQUFLLHNCQUFvQjNCLEtBQUs0QixTQUE5QixFQUEyQyxPQUFPNUIsS0FBS3VCLEtBQXZEO0FBQ0dIO0FBREgsU0FERjtBQUtEO0FBQ0QsYUFBTyw4QkFBQyxTQUFELENBQVcsWUFBWCxDQUF3QixXQUF4QixFQUF3Q3BCLElBQXhDLENBQVA7QUFDRCxLQWxDRzs7QUFBQSxTQW9DSkgsVUFwQ0ksR0FvQ1MsVUFBQ2dDLEtBQUQsRUFBUVgsRUFBUixFQUFZWSxFQUFaLEVBQWdCQyxRQUFoQixFQUE2QjtBQUN4QyxhQUFPLEVBQUViLE1BQUYsRUFBUDtBQUNELEtBdENHO0FBQUEsV0FBTjtBQWdFQTFCLFVBQVF3QyxXQUFSLEdBQXNCLGFBQXRCO0FBQ0F4QyxVQUFReUMsWUFBUixHQUF1QjtBQUNyQmxDLHFCQUFpQjtBQURJLEdBQXZCOztBQUlBLFNBQU9QLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gY2xhc3MgUlRUcmVlVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuZ2V0V3JhcHBlZEluc3RhbmNlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuVHJDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgdGhpcy5nZXRUclByb3BzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHNvIHdlIGNhbiBleHBvc2UgdGhlIHVuZGVybHlpbmcgUmVhY3RUYWJsZSB0byBnZXQgYXQgdGhlIHNvcnRlZERhdGEgZm9yIHNlbGVjdEFsbFxuICAgIGdldFdyYXBwZWRJbnN0YW5jZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy53cmFwcGVkSW5zdGFuY2UpIGNvbnNvbGUud2FybignUlRUcmVlVGFibGUgLSBObyB3cmFwcGVkIGluc3RhbmNlJylcbiAgICAgIGlmICh0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UpIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UoKVxuICAgICAgZWxzZSByZXR1cm4gdGhpcy53cmFwcGVkSW5zdGFuY2VcbiAgICB9XG5cbiAgICBUckNvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgICAgIGNvbnN0IHsgcmksIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgICBpZiAocmkgJiYgcmkuZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHsgLi4ucHJvcHMuY2hpbGRyZW5bcmkubGV2ZWxdIH1cblxuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLmZsZXggPSAndW5zZXQnXG4gICAgICAgIGNlbGwucHJvcHMuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgICAgY2VsbC5wcm9wcy5zdHlsZS5tYXhXaWR0aCA9ICd1bnNldCdcbiAgICAgICAgY2VsbC5wcm9wcy5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMucHJvcHMudHJlZVRhYmxlSW5kZW50ICogcmkubGV2ZWx9cHhgXG4gICAgICAgIC8vIGNlbGwucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNEREQnO1xuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgcmdiYSgxMjgsMTI4LDEyOCwwLjIpJ1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BydC10ciAke3Jlc3QuY2xhc3NOYW1lfWB9IHN0eWxlPXtyZXN0LnN0eWxlfT5cbiAgICAgICAgICAgIHtjZWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gPENvbXBvbmVudC5kZWZhdWx0UHJvcHMuVHJDb21wb25lbnQgey4uLnJlc3R9IC8+XG4gICAgfVxuXG4gICAgZ2V0VHJQcm9wcyA9IChzdGF0ZSwgcmksIGNpLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgcmkgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgY29sdW1ucywgdHJlZVRhYmxlSW5kZW50LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB7IFRyQ29tcG9uZW50LCBnZXRUclByb3BzIH0gPSB0aGlzXG4gICAgICBjb25zdCBleHRyYSA9IHtcbiAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gY29sXG4gICAgICAgICAgaWYgKHJlc3QucGl2b3RCeSAmJiAocmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5hY2Nlc3NvcikgfHwgcmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5pZCkpKSB7XG4gICAgICAgICAgICBjb2x1bW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBjb2wuaWQsXG4gICAgICAgICAgICAgIGFjY2Vzc29yOiBjb2wuYWNjZXNzb3IsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt0cmVlVGFibGVJbmRlbnR9cHhgLFxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgSGVhZGVyOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbHVtblxuICAgICAgICB9KSxcbiAgICAgICAgVHJDb21wb25lbnQsXG4gICAgICAgIGdldFRyUHJvcHMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5yZXN0fSB7Li4uZXh0cmF9IHJlZj17ciA9PiAodGhpcy53cmFwcGVkSW5zdGFuY2UgPSByKX0gLz5cbiAgICB9XG4gIH1cbiAgd3JhcHBlci5kaXNwbGF5TmFtZSA9ICdSVFRyZWVUYWJsZSdcbiAgd3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHJlZVRhYmxlSW5kZW50OiAxMCxcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVyXG59XG4iXX0=