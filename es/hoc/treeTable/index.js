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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob2MvdHJlZVRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid3JhcHBlciIsInByb3BzIiwiZ2V0V3JhcHBlZEluc3RhbmNlIiwiYmluZCIsIlRyQ29tcG9uZW50IiwiZ2V0VHJQcm9wcyIsImNvbHVtbnMiLCJ0cmVlVGFibGVJbmRlbnQiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImV4dHJhIiwibWFwIiwiY29sdW1uIiwiY29sIiwicGl2b3RCeSIsImluY2x1ZGVzIiwiYWNjZXNzb3IiLCJpZCIsIndpZHRoIiwic2hvdyIsIkhlYWRlciIsIndyYXBwZWRJbnN0YW5jZSIsInIiLCJDb21wb25lbnQiLCJ3YXJuIiwicmkiLCJncm91cGVkQnlQaXZvdCIsImNlbGwiLCJjaGlsZHJlbiIsImxldmVsIiwic3R5bGUiLCJmbGV4IiwibWF4V2lkdGgiLCJwYWRkaW5nTGVmdCIsImJvcmRlckJvdHRvbSIsImNsYXNzTmFtZSIsInN0YXRlIiwiY2kiLCJpbnN0YW5jZSIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLGdCQUFlLHFCQUFhO0FBQUE7O0FBQzFCLE1BQU1DO0FBQUE7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFBQTs7QUFFakIsWUFBS0Msa0JBQUwsQ0FBd0JDLElBQXhCO0FBQ0EsWUFBS0MsV0FBTCxDQUFpQkQsSUFBakI7QUFDQSxZQUFLRSxVQUFMLENBQWdCRixJQUFoQjtBQUppQjtBQUtsQjs7QUFFRDs7O0FBUkk7QUFBQTtBQUFBLCtCQWlESztBQUFBOztBQUFBLHFCQUN1QyxLQUFLRixLQUQ1QztBQUFBLFlBQ0NLLE9BREQsVUFDQ0EsT0FERDtBQUFBLFlBQ1VDLGVBRFYsVUFDVUEsZUFEVjtBQUFBLFlBQzhCQyxJQUQ5Qjs7QUFFUEMsZ0JB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QUFPLG9CQUFDLFNBQUQsQ0FBVyxZQUFYLENBQXdCLFdBQXhCLEVBQXdDcEIsSUFBeEMsQ0FBUDtBQUNELEtBM0NHOztBQUFBLFNBNkNKSCxVQTdDSSxHQTZDUyxVQUFDZ0MsS0FBRCxFQUFRWCxFQUFSLEVBQVlZLEVBQVosRUFBZ0JDLFFBQWhCLEVBQTZCO0FBQ3hDLGFBQU8sRUFBRWIsTUFBRixFQUFQO0FBQ0QsS0EvQ0c7QUFBQSxXQUFOO0FBNkVBMUIsVUFBUXdDLFdBQVIsR0FBc0IsYUFBdEI7QUFDQXhDLFVBQVF5QyxZQUFSLEdBQXVCO0FBQ3JCbEMscUJBQWlCO0FBREksR0FBdkI7O0FBSUEsU0FBT1AsT0FBUDtBQUNELENBcEZEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gY2xhc3MgUlRUcmVlVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuZ2V0V3JhcHBlZEluc3RhbmNlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuVHJDb21wb25lbnQuYmluZCh0aGlzKVxuICAgICAgdGhpcy5nZXRUclByb3BzLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHNvIHdlIGNhbiBleHBvc2UgdGhlIHVuZGVybHlpbmcgUmVhY3RUYWJsZSB0byBnZXQgYXQgdGhlIHNvcnRlZERhdGEgZm9yIHNlbGVjdEFsbFxuICAgIGdldFdyYXBwZWRJbnN0YW5jZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy53cmFwcGVkSW5zdGFuY2UpIGNvbnNvbGUud2FybignUlRUcmVlVGFibGUgLSBObyB3cmFwcGVkIGluc3RhbmNlJylcbiAgICAgIGlmICh0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UpIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZS5nZXRXcmFwcGVkSW5zdGFuY2UoKVxuICAgICAgZWxzZSByZXR1cm4gdGhpcy53cmFwcGVkSW5zdGFuY2VcbiAgICB9XG5cbiAgICBUckNvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgICAgIGNvbnN0IHsgcmksIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgICBpZiAocmkgJiYgcmkuZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHsgLi4ucHJvcHMuY2hpbGRyZW5bcmkubGV2ZWxdIH1cbiAgICAgIGNvbnNvbGUubG9nKFwicmlcIik7XG4gICAgICBjb25zb2xlLmxvZyhyaSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBUUiBDT01QT05FTlQhXCIpO1xuICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgICAgY29uc29sZS5sb2coXCJyZXN0XCIpO1xuICAgICAgY29uc29sZS5sb2cocmVzdCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGNlbGwgdG8gcmVuZGVyXCIpO1xuICAgICAgY29uc29sZS5sb2coY2VsbCk7XG4gICAgICAgIGNlbGwucHJvcHMuc3R5bGUuZmxleCA9ICd1bnNldCdcbiAgICAgICAgY2VsbC5wcm9wcy5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLm1heFdpZHRoID0gJ3Vuc2V0J1xuICAgICAgICBjZWxsLnByb3BzLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5wcm9wcy50cmVlVGFibGVJbmRlbnQgKiByaS5sZXZlbH1weGBcbiAgICAgICAgLy8gY2VsbC5wcm9wcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0RERCc7XG4gICAgICAgIGNlbGwucHJvcHMuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCByZ2JhKDEyOCwxMjgsMTI4LDAuMiknXG4gICAgICAgIC8vY2VsbC5wcm9wcy5jbGFzc05hbWUgPSBjZWxsLnByb3BzLmNsYXNzTmFtZS5yZXBsYWNlKCdoaWRkZW4nLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJ0LXRyICR7cmVzdC5jbGFzc05hbWV9YH0gc3R5bGU9e3Jlc3Quc3R5bGV9PlxuICAgICAgICAgICAge2NlbGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiA8Q29tcG9uZW50LmRlZmF1bHRQcm9wcy5UckNvbXBvbmVudCB7Li4ucmVzdH0gLz5cbiAgICB9XG5cbiAgICBnZXRUclByb3BzID0gKHN0YXRlLCByaSwgY2ksIGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4geyByaSB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBjb2x1bW5zLCB0cmVlVGFibGVJbmRlbnQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uc1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgICAgY29uc29sZS5sb2coXCJyZXN0XCIpO1xuICAgICAgY29uc29sZS5sb2cocmVzdCk7XG4gICAgICBjb25zdCB7IFRyQ29tcG9uZW50LCBnZXRUclByb3BzIH0gPSB0aGlzXG4gICAgICBjb25zdCBleHRyYSA9IHtcbiAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IHtcbiAgICAgICAgICBsZXQgY29sdW1uID0gY29sXG4gICAgICAgICAgaWYgKHJlc3QucGl2b3RCeSAmJiAocmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5hY2Nlc3NvcikgfHwgcmVzdC5waXZvdEJ5LmluY2x1ZGVzKGNvbC5pZCkpKSB7XG4gICAgICAgICAgICBjb2x1bW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBjb2wuaWQsXG4gICAgICAgICAgICAgIGFjY2Vzc29yOiBjb2wuYWNjZXNzb3IsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt0cmVlVGFibGVJbmRlbnR9cHhgLFxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgSGVhZGVyOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbHVtblxuICAgICAgICB9KSxcbiAgICAgICAgVHJDb21wb25lbnQsXG4gICAgICAgIGdldFRyUHJvcHMsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5yZXN0fSB7Li4uZXh0cmF9IHJlZj17ciA9PiAodGhpcy53cmFwcGVkSW5zdGFuY2UgPSByKX0gLz5cbiAgICB9XG4gIH1cbiAgd3JhcHBlci5kaXNwbGF5TmFtZSA9ICdSVFRyZWVUYWJsZSdcbiAgd3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHJlZVRhYmxlSW5kZW50OiAxMCxcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVyXG59XG4iXX0=