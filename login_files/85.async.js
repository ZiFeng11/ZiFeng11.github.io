webpackJsonp([85],{888:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),u=r(a),s=n(136),c=r(s),o=n(335),i=n(347);t.default={namespace:"loginH5",state:{loginContent:{},subForDing:{},content:{},subMetting:!1,loading:!1},effects:{loginH5:c.default.mark(function e(t,n){var r,a=t.payload,u=t.onFail,s=n.call,l=n.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"changeSubmitting",payload:!0});case 2:return e.next=4,s(i.fakeAccountLogin,a);case 4:if(r=e.sent){e.next=7;break}return e.abrupt("return");case 7:if(!r.needChangePassword){e.next=13;break}return e.next=10,l({type:"changeSubmitting",payload:!1});case 10:return e.next=12,l(o.routerRedux.push("/user/changePassword"));case 12:return e.abrupt("return");case 13:if(!r.success){e.next=17;break}return e.next=16,window.location.href=r.redirectUrl;case 16:return e.abrupt("return");case 17:return r.success||u(),e.next=20,l({type:"changeLoginStatus",payload:r});case 20:case"end":return e.stop()}},e,this)})},passWordLogin:c.default.mark(function e(t,n){var r,a=t.payload,u=(t.onFail,n.call);n.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(i.fakeAccountLogin,a);case 2:r=e.sent,r.success&&r.redirectUrl&&(window.location.href=r.redirectUrl);case 4:case"end":return e.stop()}},e,this)}),reducers:{changeLoginStatus:function(e,t){var n=t.payload;return(0,u.default)({},e,{loginContent:n,subMetting:!1})},changeSubmitting:function(e,t){var n=t.payload;return(0,u.default)({},e,{subMetting:n})}}},e.exports=t.default}});