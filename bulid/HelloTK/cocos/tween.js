System.register(["./json-asset-1a4fee7d.js","./index-60bf8166.js","./view-50c22e7e.js","./deprecated-0fa1cf2f.js","./camera-component-ec549211.js","./renderable-component-b5e46bae.js","./transform-utils-65bf8251.js"],(function(t){"use strict";var n,e,i,r,s,o,a,c,u,h,l,_,p,f,g,v;return{setters:[function(t){n=t.c,e=t.ec,i=t.f,r=t.l,s=t.c_,o=t.e2,a=t.dC,c=t.ed,u=t.dR,h=t.d,l=t.w,_=t.c1},function(t){p=t.d,f=t.D,g=t.h},function(){},function(){},function(){},function(t){v=t.R},function(){}],execute:function(){t({tween:q,tweenUtil:B});var d=function(){function t(){this.originalTarget=null,this.target=null,this.tag=t.TAG_INVALID}var e=t.prototype;return e.clone=function(){var n=new t;return n.originalTarget=null,n.target=null,n.tag=this.tag,n},e.isDone=function(){return!0},e.startWithTarget=function(t){this.originalTarget=t,this.target=t},e.stop=function(){this.target=null},e.step=function(){n(1006)},e.update=function(){n(1007)},e.getTarget=function(){return this.target},e.setTarget=function(t){this.target=t},e.getOriginalTarget=function(){return this.originalTarget},e.setOriginalTarget=function(t){this.originalTarget=t},e.getTag=function(){return this.tag},e.setTag=function(t){this.tag=t},e.reverse=function(){return n(1008),null},e.retain=function(){},e.release=function(){},t}();d.TAG_INVALID=-1;var A=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))||this)._duration=0,n._timesForRepeat=1,n}e(n,t);var i=n.prototype;return i.getDuration=function(){return this._duration*(this._timesForRepeat||1)},i.setDuration=function(t){this._duration=t},i.clone=function(){return new n},n}(d),T=(function(t){function n(n,e){var i;return void 0===e&&(e=1),(i=t.call(this)||this)._speed=0,i._innerAction=null,n&&i.initWithAction(n,e),i}e(n,t);var r=n.prototype;r.getSpeed=function(){return this._speed},r.setSpeed=function(t){this._speed=t},r.initWithAction=function(t,n){return t?(this._innerAction=t,this._speed=n,!0):(i(1021),!1)},r.clone=function(){var t=new n;return t.initWithAction(this._innerAction.clone(),this._speed),t},r.startWithTarget=function(t){d.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)},r.stop=function(){this._innerAction.stop(),d.prototype.stop.call(this)},r.step=function(t){this._innerAction.step(t*this._speed)},r.isDone=function(){return this._innerAction.isDone()},r.reverse=function(){return new n(this._innerAction.reverse(),this._speed)},r.setInnerAction=function(t){this._innerAction!==t&&(this._innerAction=t)},r.getInnerAction=function(){return this._innerAction}}(d),0),w=function(){this.actions=[],this.target=null,this.actionIndex=0,this.currentAction=null,this.paused=!1,this.lock=!1},y=function(){function t(){this._hashTargets=new Map,this._arrayTargets=[],this._elementPool=[]}var e=t.prototype;return e._searchElementByTarget=function(t,n){for(var e=0;e<t.length;e++)if(n===t[e].target)return t[e];return null},e._getElement=function(t,n){var e=this._elementPool.pop();return e||(e=new w),e.target=t,e.paused=!!n,e},e._putElement=function(t){t.actions.length=0,t.actionIndex=0,t.currentAction=null,t.paused=!1,t.target=null,t.lock=!1,this._elementPool.push(t)},e.addAction=function(t,n,e){if(t&&n){null==n.uuid&&(n.uuid="_TWEEN_UUID_"+T++);var r=this._hashTargets.get(n);r?r.actions||(r.actions=[]):(r=this._getElement(n,e),this._hashTargets.set(n,r),this._arrayTargets.push(r)),r.target=n,r.actions.push(t),t.startWithTarget(n)}else i(1e3)},e.removeAllActions=function(){for(var t=this._arrayTargets,n=0;n<t.length;n++){var e=t[n];e&&this._putElement(e)}this._arrayTargets.length=0,this._hashTargets=new Map},e.removeAllActionsFromTarget=function(t){if(null!=t){var n=this._hashTargets.get(t);n&&(n.actions.length=0,this._deleteHashElement(n))}},e.removeAction=function(t){if(null!=t){var n=t.getOriginalTarget(),e=this._hashTargets.get(n);if(e)for(var i=0;i<e.actions.length;i++)if(e.actions[i]===t){e.actions.splice(i,1),e.actionIndex>=i&&e.actionIndex--;break}}},e._removeActionByTag=function(t,n,e){for(var i=0,r=n.actions.length;i<r;++i){var s=n.actions[i];if(s&&s.getTag()===t){if(e&&s.getOriginalTarget()!==e)continue;this._removeActionAtIndex(i,n);break}}},e.removeActionByTag=function(t,e){var i=this;t===d.TAG_INVALID&&n(1002);var r=this._hashTargets;if(e){var s=r.get(e);s&&this._removeActionByTag(t,s,e)}else r.forEach((function(n){i._removeActionByTag(t,n)}))},e.getActionByTag=function(t,e){t===d.TAG_INVALID&&n(1004);var i=this._hashTargets.get(e);if(i){if(null!=i.actions)for(var r=0;r<i.actions.length;++r){var s=i.actions[r];if(s&&s.getTag()===t)return s}n(1005,t)}return null},e.getNumberOfRunningActionsInTarget=function(t){var n=this._hashTargets.get(t);return n&&n.actions?n.actions.length:0},e.pauseTarget=function(t){var n=this._hashTargets.get(t);n&&(n.paused=!0)},e.resumeTarget=function(t){var n=this._hashTargets.get(t);n&&(n.paused=!1)},e.pauseAllRunningActions=function(){for(var t=[],n=this._arrayTargets,e=0;e<n.length;e++){var i=n[e];i&&!i.paused&&(i.paused=!0,t.push(i.target))}return t},e.resumeTargets=function(t){if(t)for(var n=0;n<t.length;n++)t[n]&&this.resumeTarget(t[n])},e.pauseTargets=function(t){if(t)for(var n=0;n<t.length;n++)t[n]&&this.pauseTarget(t[n])},e.purgeSharedManager=function(){r.director.getScheduler().unscheduleUpdate(this)},e._removeActionAtIndex=function(t,n){n.actions[t],n.actions.splice(t,1),n.actionIndex>=t&&n.actionIndex--,0===n.actions.length&&this._deleteHashElement(n)},e._deleteHashElement=function(t){var n=!1;if(t&&!t.lock&&this._hashTargets.get(t.target)){this._hashTargets.delete(t.target);for(var e=this._arrayTargets,i=0,r=e.length;i<r;i++)if(e[i]===t){e.splice(i,1);break}this._putElement(t),n=!0}return n},e.update=function(t){for(var n,e=this._arrayTargets,i=0;i<e.length;i++){this._currentTarget=e[i];var r=(n=this._currentTarget).target;if(r instanceof s&&!r.isValid)this.removeAllActionsFromTarget(r),i--;else{if(!n.paused&&n.actions){for(n.lock=!0,n.actionIndex=0;n.actionIndex<n.actions.length;n.actionIndex++)if(n.currentAction=n.actions[n.actionIndex],n.currentAction){if(n.currentAction.step(t*(n.currentAction._speedMethod?n.currentAction._speed:1)),n.currentAction&&n.currentAction.isDone()){n.currentAction.stop();var o=n.currentAction;n.currentAction=null,this.removeAction(o)}n.currentAction=null}n.lock=!1}0===n.actions.length&&this._deleteHashElement(n)&&i--}}},t}(),m=t("TweenSystem",function(t){function n(){for(var n,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))||this).actionMgr=new y,n}return e(n,t),n.prototype.update=function(t){this.actionMgr.update(t)},o(n,[{key:"ActionManager",get:function(){return this.actionMgr}}]),n}(g));m.ID="TWEEN",m.instance=void 0,p.on(f.EVENT_INIT,(function(){var t=new m;m.instance=t,p.registerSystem(m.ID,t,g.Priority.MEDIUM)}));var W=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var i=n.prototype;return i.isDone=function(){return!0},i.step=function(){this.update(1)},i.update=function(){},i.reverse=function(){return this.clone()},i.clone=function(){return new n},n}(A),D=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var i=n.prototype;return i.update=function(){for(var t=this.target.getComponentsInChildren(v),n=0;n<t.length;++n)t[n].enabled=!0},i.reverse=function(){return new I},i.clone=function(){return new n},n}(W),I=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var i=n.prototype;return i.update=function(){for(var t=this.target.getComponentsInChildren(v),n=0;n<t.length;++n)t[n].enabled=!1},i.reverse=function(){return new D},i.clone=function(){return new n},n}(W);!function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var i=n.prototype;i.update=function(){for(var t=this.target.getComponentsInChildren(v),n=0;n<t.length;++n){var e=t[n];e.enabled=!e.enabled}},i.reverse=function(){return new n},i.clone=function(){return new n}}(W);var E=function(t){function n(n){var e;return(e=t.call(this)||this)._isNeedCleanUp=!0,void 0!==n&&e.init(n),e}e(n,t);var i=n.prototype;return i.update=function(){this.target.removeFromParent(),this._isNeedCleanUp&&this.target.destroy()},i.init=function(t){return this._isNeedCleanUp=t,!0},i.reverse=function(){return new n(this._isNeedCleanUp)},i.clone=function(){return new n(this._isNeedCleanUp)},n}(W),M=function(t){function n(n,e,i){var r;return(r=t.call(this)||this)._selectorTarget=null,r._function=null,r._data=null,r.initWithFunction(n,e,i),r}e(n,t);var i=n.prototype;return i.initWithFunction=function(t,n,e){return t&&(this._function=t),n&&(this._selectorTarget=n),void 0!==e&&(this._data=e),!0},i.execute=function(){this._function&&this._function.call(this._selectorTarget,this.target,this._data)},i.update=function(){this.execute()},i.getTargetCallback=function(){return this._selectorTarget},i.setTargetCallback=function(t){t!==this._selectorTarget&&(this._selectorTarget&&(this._selectorTarget=null),this._selectorTarget=t)},i.clone=function(){var t=new n;return t.initWithFunction(this._function,this._selectorTarget,this._data),t},n}(W),b=function(t){function i(n){var e;return(e=t.call(this)||this).MAX_VALUE=2,e._elapsed=0,e._firstTick=!1,e._easeList=[],e._speed=1,e._repeatForever=!1,e._repeatMethod=!1,e._speedMethod=!1,void 0===n||isNaN(n)||e.initWithDuration(n),e}e(i,t);var r=i.prototype;return r.getElapsed=function(){return this._elapsed},r.initWithDuration=function(t){return this._duration=0===t?a.FLT_EPSILON:t,this._elapsed=0,this._firstTick=!0,!0},r.isDone=function(){return this._elapsed>=this._duration},r._cloneDecoration=function(t){t._repeatForever=this._repeatForever,t._speed=this._speed,t._timesForRepeat=this._timesForRepeat,t._easeList=this._easeList,t._speedMethod=this._speedMethod,t._repeatMethod=this._repeatMethod},r._reverseEaseList=function(t){if(this._easeList){t._easeList=[];for(var n=0;n<this._easeList.length;n++)t._easeList.push(this._easeList[n])}},r.clone=function(){var t=new i(this._duration);return this._cloneDecoration(t),t},r.easing=function(t){this._easeList?this._easeList.length=0:this._easeList=[];for(var n=0;n<arguments.length;n++)this._easeList.push(arguments[n]);return this},r._computeEaseTime=function(t){return t},r.step=function(t){this._firstTick?(this._firstTick=!1,this._elapsed=0):this._elapsed+=t;var n=this._elapsed/(this._duration>1.192092896e-7?this._duration:1.192092896e-7);n=n<1?n:1,this.update(n>0?n:0),this._repeatMethod&&this._timesForRepeat>1&&this.isDone()&&(this._repeatForever||this._timesForRepeat--,this.startWithTarget(this.target),this.step(this._elapsed-this._duration))},r.startWithTarget=function(t){d.prototype.startWithTarget.call(this,t),this._elapsed=0,this._firstTick=!0},r.reverse=function(){return n(1010),this},r.setAmplitudeRate=function(){n(1011)},r.getAmplitudeRate=function(){return n(1012),0},r.speed=function(t){return t<=0?(n(1013),this):(this._speedMethod=!0,this._speed*=t,this)},r.getSpeed=function(){return this._speed},r.setSpeed=function(t){return this._speed=t,this},r.repeat=function(t){return t=Math.round(t),isNaN(t)||t<1?(n(1014),this):(this._repeatMethod=!0,this._timesForRepeat*=t,this)},r.repeatForever=function(){return this._repeatMethod=!0,this._timesForRepeat=this.MAX_VALUE,this._repeatForever=!0,this},i}(A),F=function(t){function r(e){var s;(s=t.call(this)||this)._actions=[],s._split=0,s._last=0,s._reversed=!1;var o=e instanceof Array?e:arguments;if(1===o.length)return i(1019),c(s);var a=o.length-1;if(a>=0&&null==o[a]&&n(1015),a>=0){for(var u,h=o[0],l=1;l<a;l++)o[l]&&(u=h,h=r._actionOneTwo(u,o[l]));s.initWithTwoActions(h,o[a])}return s}e(r,t);var s=r.prototype;return s.initWithTwoActions=function(t,n){if(!t||!n)return i(1025),!1;var e=t._duration,r=n._duration,s=(e*=t._repeatMethod?t._timesForRepeat:1)+(r*=n._repeatMethod?n._timesForRepeat:1);return this.initWithDuration(s),this._actions[0]=t,this._actions[1]=n,!0},s.clone=function(){var t=new r;return this._cloneDecoration(t),t.initWithTwoActions(this._actions[0].clone(),this._actions[1].clone()),t},s.startWithTarget=function(t){b.prototype.startWithTarget.call(this,t),this._split=this._actions[0]._duration/this._duration,this._split*=this._actions[0]._repeatMethod?this._actions[0]._timesForRepeat:1,this._last=-1},s.stop=function(){-1!==this._last&&this._actions[this._last].stop(),d.prototype.stop.call(this)},s.update=function(t){var n,e,i=0,r=this._split,s=this._actions,o=this._last;(t=this._computeEaseTime(t))<r?(n=0!==r?t/r:1,0===i&&1===o&&this._reversed&&(s[1].update(0),s[1].stop())):(i=1,n=1===r?1:(t-r)/(1-r),-1===o&&(s[0].startWithTarget(this.target),s[0].update(1),s[0].stop()),0===o&&(s[0].update(1),s[0].stop())),e=s[i],o===i&&e.isDone()||(o!==i&&e.startWithTarget(this.target),n*=e._timesForRepeat,e.update(n>1?n%1:n),this._last=i)},s.reverse=function(){var t=r._actionOneTwo(this._actions[1].reverse(),this._actions[0].reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t._reversed=!0,t},r}(b);function L(t){var e=t instanceof Array?t:arguments;if(1===e.length)return i(1019),null;var r=e.length-1;r>=0&&null==e[r]&&n(1015);var s=null;if(r>=0){s=e[0];for(var o=1;o<=r;o++)e[o]&&(s=F._actionOneTwo(s,e[o]))}return s}F._actionOneTwo=function(t,n){var e=new F;return e.initWithTwoActions(t,n),e};var x=function(t){function n(n,e){var i;return(i=t.call(this)||this)._times=0,i._total=0,i._nextDt=0,i._actionInstant=!1,i._innerAction=null,void 0!==e&&i.initWithAction(n,e),i}e(n,t);var i=n.prototype;return i.initWithAction=function(t,n){var e=t._duration*n;return!!this.initWithDuration(e)&&(this._times=n,this._innerAction=t,t instanceof W&&(this._actionInstant=!0,this._times-=1),this._total=0,!0)},i.clone=function(){var t=new n;return this._cloneDecoration(t),t.initWithAction(this._innerAction.clone(),this._times),t},i.startWithTarget=function(t){this._total=0,this._nextDt=this._innerAction._duration/this._duration,b.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)},i.stop=function(){this._innerAction.stop(),d.prototype.stop.call(this)},i.update=function(t){t=this._computeEaseTime(t);var n=this._innerAction,e=this._duration,i=this._times,r=this._nextDt;if(t>=r){for(;t>r&&this._total<i;)n.update(1),this._total++,n.stop(),n.startWithTarget(this.target),r+=n._duration/e,this._nextDt=r>1?1:r;t>=1&&this._total<i&&(n.update(1),this._total++),this._actionInstant||(this._total===i?n.stop():n.update(t-(r-n._duration/e)))}else n.update(t*i%1)},i.isDone=function(){return this._total===this._times},i.reverse=function(){var t=new n(this._innerAction.reverse(),this._times);return this._cloneDecoration(t),this._reverseEaseList(t),t},i.setInnerAction=function(t){this._innerAction!==t&&(this._innerAction=t)},i.getInnerAction=function(){return this._innerAction},n}(b),k=function(t){function n(n){var e;return(e=t.call(this)||this)._innerAction=null,n&&e.initWithAction(n),e}e(n,t);var r=n.prototype;return r.initWithAction=function(t){return t?(this._innerAction=t,!0):(i(1026),!1)},r.clone=function(){var t=new n;return this._cloneDecoration(t),t.initWithAction(this._innerAction.clone()),t},r.startWithTarget=function(t){b.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)},r.step=function(t){var n=this._innerAction;n.step(t),n.isDone()&&(n.startWithTarget(this.target),n.step(n.getElapsed()-n._duration))},r.isDone=function(){return!1},r.reverse=function(){var t=new n(this._innerAction.reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t},r.setInnerAction=function(t){this._innerAction!==t&&(this._innerAction=t)},r.getInnerAction=function(){return this._innerAction},n}(b),N=function(t){function r(e){var s;(s=t.call(this)||this)._one=null,s._two=null;var o=e instanceof Array?e:arguments;if(1===o.length)return i(1020),c(s);var a=o.length-1;if(a>=0&&null==o[a]&&n(1015),a>=0){for(var u,h=o[0],l=1;l<a;l++)o[l]&&(u=h,h=r._actionOneTwo(u,o[l]));s.initWithTwoActions(h,o[a])}return s}e(r,t);var s=r.prototype;return s.initWithTwoActions=function(t,n){if(!t||!n)return i(1027),!1;var e=!1,r=t._duration,s=n._duration;return this.initWithDuration(Math.max(r,s))&&(this._one=t,this._two=n,r>s?this._two=F._actionOneTwo(n,C(r-s)):r<s&&(this._one=F._actionOneTwo(t,C(s-r))),e=!0),e},s.clone=function(){var t=new r;return this._cloneDecoration(t),t.initWithTwoActions(this._one.clone(),this._two.clone()),t},s.startWithTarget=function(t){b.prototype.startWithTarget.call(this,t),this._one.startWithTarget(t),this._two.startWithTarget(t)},s.stop=function(){this._one.stop(),this._two.stop(),d.prototype.stop.call(this)},s.update=function(t){t=this._computeEaseTime(t),this._one&&this._one.update(t),this._two&&this._two.update(t)},s.reverse=function(){var t=r._actionOneTwo(this._one.reverse(),this._two.reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t},r}(b);function O(t){var e=t instanceof Array?t:arguments;if(1===e.length)return i(1020),null;e.length>0&&null==e[e.length-1]&&n(1015);for(var r=e[0],s=1;s<e.length;s++)null!=e[s]&&(r=N._actionOneTwo(r,e[s]));return r}N._actionOneTwo=function(t,n){var e=new N;return e.initWithTwoActions(t,n),e};var R=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var i=n.prototype;return i.update=function(){},i.reverse=function(){var t=new n(this._duration);return this._cloneDecoration(t),this._reverseEaseList(t),t},i.clone=function(){var t=new n;return this._cloneDecoration(t),t.initWithDuration(this._duration),t},n}(b);function C(t){return new R(t)}var S=function(t){function n(n){var e;return(e=t.call(this)||this)._other=null,n&&e.initWithAction(n),e}e(n,t);var r=n.prototype;return r.initWithAction=function(t){return t?t===this._other?(i(1029),!1):!!b.prototype.initWithDuration.call(this,t._duration)&&(this._other=t,!0):(i(1028),!1)},r.clone=function(){var t=new n;return this._cloneDecoration(t),t.initWithAction(this._other.clone()),t},r.startWithTarget=function(t){b.prototype.startWithTarget.call(this,t),this._other.startWithTarget(t)},r.update=function(t){t=this._computeEaseTime(t),this._other&&this._other.update(1-t)},r.reverse=function(){return this._other.clone()},r.stop=function(){this._other.stop(),d.prototype.stop.call(this)},n}(b),U=function(t){function n(n,e,i){var r;if((r=t.call(this)||this)._opts=void 0,r._props=void 0,r._originProps=void 0,null==i)i=Object.create(null);else if(function(t){var n=" [Tween:] ",e=" option is not support in v + "+_,i=t;i.delay&&l(n+"delay"+e),i.repeat&&l(n+"repeat"+e),i.repeatDelay&&l(n+"repeatDelay"+e),i.interpolation&&l(n+"interpolation"+e),i.onStop&&l(n+"onStop"+e)}(i),i.easing&&"string"==typeof i.easing&&(i.easing=function(t){var n=t.charAt(0);if(/[A-Z]/.test(n)){var e=(t=t.replace(n,n.toLowerCase())).split("-");if(2===e.length){var i=e[0];if("linear"===i)t="linear";else{var r=e[1];switch(i){case"quadratic":t="quad"+r;break;case"quartic":t="quart"+r;break;case"quintic":t="quint"+r;break;case"sinusoidal":t="sine"+r;break;case"exponential":t="expo"+r;break;case"circular":t="circ"+r;break;default:t=i+r}}}}return t}(i.easing)),i.progress||(i.progress=r.progress),i.easing&&"string"==typeof i.easing){var s=i.easing;i.easing=u[s],i.easing||h(1031,s)}for(var o in r._opts=i,r._props=Object.create(null),e)if(e.hasOwnProperty(o)){var a=e[o];if("function"==typeof a&&(a=a()),null!=a&&"string"!=typeof a){var c=void 0,p=void 0;void 0!==a.value&&(a.easing||a.progress)&&("string"==typeof a.easing?(c=u[a.easing])||h(1031,a.easing):c=a.easing,p=a.progress,a=a.value);var f=Object.create(null);f.value=a,f.easing=c,f.progress=p,r._props[o]=f}}return r._originProps=e,r.initWithDuration(n),r}e(n,t);var i=n.prototype;return i.clone=function(){var t=new n(this._duration,this._originProps,this._opts);return this._cloneDecoration(t),t},i.startWithTarget=function(t){b.prototype.startWithTarget.call(this,t);var n=!!this._opts.relative,e=this._props;for(var i in e){var r=t[i];if(void 0!==r){var s=e[i],o=s.value;if("number"==typeof r)s.start=r,s.current=r,s.end=n?r+o:o;else if("object"==typeof r)for(var a in null==s.start&&(s.start={},s.current={},s.end={}),o)isNaN(r[a])||(s.start[a]=r[a],s.current[a]=r[a],s.end[a]=n?r[a]+o[a]:o[a])}}this._opts.onStart&&this._opts.onStart(this.target)},i.update=function(t){var n=this.target;if(n){var e=this._props,i=this._opts,r=t;i.easing&&(r=i.easing(t));var s=i.progress;for(var o in e){var a=e[o],c=a.easing?a.easing(t):r,u=a.progress?a.progress:s,h=a.start,l=a.end;if("number"==typeof h)a.current=u(h,l,a.current,c);else if("object"==typeof h)for(var _ in h)a.current[_]=u(h[_],l[_],a.current[_],c);n[o]=a.current}i.onUpdate&&i.onUpdate(this.target,t),1===t&&i.onComplete&&i.onComplete(this.target)}},i.progress=function(t,n,e,i){return t+(n-t)*i},n}(b),j=function(t){function n(n){var e;return(e=t.call(this)||this)._props=void 0,e._props={},void 0!==n&&e.init(n),e}e(n,t);var i=n.prototype;return i.init=function(t){for(var n in t)this._props[n]=t[n];return!0},i.update=function(){var t=this._props,n=this.target;for(var e in t)n[e]=t[e]},i.clone=function(){var t=new n;return t.init(this._props),t},n}(W),P=t("Tween",function(){function t(t){this._actions=[],this._finalAction=null,this._target=null,this._tag=d.TAG_INVALID,this._target=void 0===t?null:t}var n=t.prototype;return n.tag=function(t){return this._tag=t,this},n.then=function(t){return t instanceof d?this._actions.push(t.clone()):this._actions.push(t._union()),this},n.target=function(t){return this._target=t,this},n.start=function(){return this._target?(this._finalAction&&m.instance.ActionManager.removeAction(this._finalAction),this._finalAction=this._union(),this._finalAction.setTag(this._tag),m.instance.ActionManager.addAction(this._finalAction,this._target,!1),this):(l("Please set target to tween first"),this)},n.stop=function(){return this._finalAction&&m.instance.ActionManager.removeAction(this._finalAction),this},n.clone=function(t){var n=this._union();return q(t).then(n.clone())},n.union=function(){var t=this._union();return this._actions.length=0,this._actions.push(t),this},n.to=function(t,n,e){(e=e||Object.create(null)).relative=!1;var i=new U(t,n,e);return this._actions.push(i),this},n.by=function(t,n,e){(e=e||Object.create(null)).relative=!0;var i=new U(t,n,e);return this._actions.push(i),this},n.set=function(t){var n=new j(t);return this._actions.push(n),this},n.delay=function(t){var n=C(t);return this._actions.push(n),this},n.call=function(t){var n=new M(t,undefined,undefined);return this._actions.push(n),this},n.sequence=function(){var n=t._wrappedSequence.apply(t,arguments);return this._actions.push(n),this},n.parallel=function(){var n=t._wrappedParallel.apply(t,arguments);return this._actions.push(n),this},n.repeat=function(n,e){if(n==1/0)return this.repeatForever(e);var i,r=this._actions;return i=e instanceof t?e._union():r.pop(),r.push(function(t,n){return new x(t,n)}(i,n)),this},n.repeatForever=function(n){var e,i=this._actions;return e=n instanceof t?n._union():i.pop(),i.push(function(t){return new k(t)}(e)),this},n.reverseTime=function(n){var e,i=this._actions;return e=n instanceof t?n._union():i.pop(),i.push(function(t){return new S(t)}(e)),this},n.hide=function(){var t=new I;return this._actions.push(t),this},n.show=function(){var t=new D;return this._actions.push(t),this},n.removeSelf=function(){var t=new E(!1);return this._actions.push(t),this},t.stopAll=function(){m.instance.ActionManager.removeAllActions()},t.stopAllByTag=function(t,n){m.instance.ActionManager.removeActionByTag(t,n)},t.stopAllByTarget=function(t){m.instance.ActionManager.removeAllActionsFromTarget(t)},n._union=function(){var t=this._actions;return 1===t.length?t[0]:L(t)},n._destroy=function(){this.stop()},t._wrappedSequence=function(){var n=t._tmp_args;n.length=0;for(var e=arguments.length,i=0;i<e;i++){var r=n[i]=i<0||arguments.length<=i?void 0:arguments[i];r instanceof t&&(n[i]=r._union())}return L.apply(L,n)},t._wrappedParallel=function(){var n=t._tmp_args;n.length=0;for(var e=arguments.length,i=0;i<e;i++){var r=n[i]=i<0||arguments.length<=i?void 0:arguments[i];r instanceof t&&(n[i]=r._union())}return O.apply(O,n)},t}());function q(t){return new P(t)}function B(t){return l("tweenUtil' is deprecated, please use 'tween' instead "),new P(t)}P._tmp_args=[],r.Tween=P,r.tween=q,r.tweenUtil=B}}}));