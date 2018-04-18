/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{h(s.next(t))}catch(t){n(t)}}function a(t){try{h(s.throw(t))}catch(t){n(t)}}function h(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}h((s=s.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,s,r,n,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,s&&(r=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(r=r.call(s,n[1])).done)return r;switch(s=0,r&&(n=[0,r.value]),n[0]){case 0:case 1:r=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,s=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){o=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){o.label=n[1];break}if(6===n[0]&&o.label<r[1]){o.label=r[1],r=n;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(n);break}r[2]&&o.ops.pop(),o.trys.pop();continue}n=e.call(t,o)}catch(t){n=[6,t],s=0}finally{i=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}};Ionic.loadBundle("tsfnfeq5",["exports","./chunk3.js"],function(t,e){window.Ionic.h;var i=function(){function t(t,e,i){this.dirty=!1,this.isPan=0;var s=i*(Math.PI/180);this.isDirX="x"===t,this.maxCosine=Math.cos(s),this.threshold=e*e}return t.prototype.start=function(t,e){this.startX=t,this.startY=e,this.isPan=0,this.dirty=!0},t.prototype.detect=function(t,e){if(!this.dirty)return!1;var i=t-this.startX,s=e-this.startY,r=i*i+s*s;if(r<this.threshold)return!1;var n=Math.sqrt(r),o=(this.isDirX?i:s)/n;return o>this.maxCosine?this.isPan=1:o<-this.maxCosine?this.isPan=-1:this.isPan=0,this.dirty=!1,!0},t.prototype.isGesture=function(){return 0!==this.isPan},t.prototype.getDirection=function(){return this.isPan},t}(),s={disable:["menu-swipe","goback-swipe"],disableScroll:!0},r=function(){function t(){this.positions=[],this.lastTouch=0,this.hasCapturedPan=!1,this.hasPress=!1,this.hasStartedPan=!1,this.hasFiredStart=!0,this.isMoveQueued=!1,this.disabled=!1,this.attachTo="child",this.autoBlockAll=!1,this.disableScroll=!1,this.direction="x",this.gestureName="",this.gesturePriority=0,this.passive=!0,this.maxAngle=40,this.threshold=10,this.type="pan",this.detail={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0}}return t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return t=this,[4,this.gestureCtrl.create({name:this.gestureName,priority:this.gesturePriority,disableScroll:this.disableScroll})];case 1:return t.gesture=e.sent(),[2]}})})},t.prototype.componentDidLoad=function(){var t=this,e=this.type.replace(/\s/g,"").toLowerCase().split(",");e.indexOf("pan")>-1&&(this.pan=new i(this.direction,this.threshold,this.maxAngle)),this.hasPress=e.indexOf("press")>-1,this.disabledChanged(this.disabled),this.autoBlockAll&&this.gestureCtrl.componentOnReady().then(function(t){return t.createBlocker(s)}).then(function(e){return t.blocker=e})},t.prototype.disabledChanged=function(t){(this.pan||this.hasPress)&&(this.enableListener(this,"touchstart",!t,this.attachTo,this.passive),this.enableListener(this,"mousedown",!t,this.attachTo,this.passive),t&&this.abortGesture())},t.prototype.onTouchStart=function(t){this.lastTouch=e.now(t),this.pointerDown(t,this.lastTouch)?(this.enableMouse(!1),this.enableTouch(!0)):this.abortGesture()},t.prototype.onMouseDown=function(t){var i=e.now(t);(0===this.lastTouch||this.lastTouch+n<i)&&(this.pointerDown(t,i)?(this.enableMouse(!0),this.enableTouch(!1)):this.abortGesture())},t.prototype.pointerDown=function(t,i){if(!this.gesture||this.hasStartedPan||!this.hasFiredStart)return!1;var s=this.detail;if(o(t,s),s.startX=s.currentX,s.startY=s.currentY,s.startTimeStamp=s.timeStamp=i,s.velocityX=s.velocityY=s.deltaX=s.deltaY=0,s.event=t,this.positions.length=0,e.assert(this.hasFiredStart,"fired start must be false"),e.assert(!this.hasStartedPan,"pan can be started at this point"),e.assert(!this.hasCapturedPan,"pan can be started at this point"),e.assert(!this.isMoveQueued,"some move is still queued"),e.assert(0===this.positions.length,"positions must be emprty"),this.canStart&&!1===this.canStart(s))return!1;if(this.gesture.release(),!this.gesture.start())return!1;if(this.positions.push(s.currentX,s.currentY,i),this.pan){if(this.hasStartedPan=!0,0===this.threshold)return this.tryToCapturePan();this.pan.start(s.startX,s.startY)}return!0},t.prototype.onTouchMove=function(t){this.lastTouch=this.detail.timeStamp=e.now(t),this.pointerMove(t)},t.prototype.onMoveMove=function(t){var i=e.now(t);(0===this.lastTouch||this.lastTouch+n<i)&&(this.detail.timeStamp=i,this.pointerMove(t))},t.prototype.pointerMove=function(t){if(e.assert(!!this.pan,"pan must be non null"),this.hasCapturedPan)!this.isMoveQueued&&this.hasFiredStart&&(this.isMoveQueued=!0,this.calcGestureData(t),this.queue.write(this.fireOnMove.bind(this)));else{var i=this.detail;this.calcGestureData(t),this.pan.detect(i.currentX,i.currentY)&&this.pan.isGesture()&&(this.tryToCapturePan()||this.abortGesture())}},t.prototype.fireOnMove=function(){if(this.hasCapturedPan){var t=this.detail;this.isMoveQueued=!1,this.onMove?this.onMove(t):this.ionGestureMove.emit(t)}},t.prototype.calcGestureData=function(t){var e=this.detail;o(t,e);var i=e.currentX,s=e.currentY,r=e.timeStamp;e.deltaX=i-e.startX,e.deltaY=s-e.startY,e.event=t;for(var n=r-100,a=this.positions,h=a.length-1;h>0&&a[h]>n;)h-=3;if(h>1){var u=1/(a[h]-r),l=a[h-1]-s,c=a[h-2]-i;e.velocityX=c*u,e.velocityY=l*u}else e.velocityX=0,e.velocityY=0;a.push(i,s,r)},t.prototype.tryToCapturePan=function(){if(!this.gesture.capture())return!1;this.hasCapturedPan=!0,this.hasFiredStart=!1;var t=this.detail;return t.startX=t.currentX,t.startY=t.currentY,t.startTimeStamp=t.timeStamp,this.onWillStart?this.onWillStart(this.detail).then(this.fireOnStart.bind(this)):this.fireOnStart(),!0},t.prototype.fireOnStart=function(){e.assert(!this.hasFiredStart,"has fired must be false"),this.onStart?this.onStart(this.detail):this.ionGestureStart.emit(this.detail),this.hasFiredStart=!0},t.prototype.abortGesture=function(){this.reset(),this.enable(!1),this.notCaptured&&this.notCaptured(this.detail)},t.prototype.reset=function(){this.hasCapturedPan=!1,this.hasStartedPan=!1,this.isMoveQueued=!1,this.hasFiredStart=!0,this.gesture&&this.gesture.release()},t.prototype.onTouchCancel=function(t){this.lastTouch=this.detail.timeStamp=e.now(t),this.pointerUp(t),this.enableTouch(!1)},t.prototype.onMouseUp=function(t){var i=e.now(t);(0===this.lastTouch||this.lastTouch+n<i)&&(this.detail.timeStamp=i,this.pointerUp(t),this.enableMouse(!1))},t.prototype.pointerUp=function(t){var e=this.hasCapturedPan,i=this.hasFiredStart;if(this.reset(),i){var s=this.detail;if(this.calcGestureData(t),e)return s.type="pan",void(this.onEnd?this.onEnd(s):this.ionGestureEnd.emit(s));this.hasPress&&this.detectPress()||(this.notCaptured?this.notCaptured(s):this.ionGestureNotCaptured.emit(s))}},t.prototype.detectPress=function(){var t=this.detail,e=t.deltaX,i=t.deltaY;return e*e+i*i<100&&(t.type="press",this.onPress?this.onPress(t):this.ionPress.emit(t),!0)},t.prototype.enableMouse=function(t){this.pan&&this.enableListener(this,"document:mousemove",t,void 0,this.passive),this.enableListener(this,"document:mouseup",t,void 0,this.passive)},t.prototype.enableTouch=function(t){this.pan&&this.enableListener(this,"touchmove",t,this.attachTo,this.passive),this.enableListener(this,"touchcancel",t,this.attachTo,this.passive),this.enableListener(this,"touchend",t,this.attachTo,this.passive)},t.prototype.enable=function(t){this.enableMouse(t),this.enableTouch(t)},t.prototype.componentDidUnload=function(){this.blocker&&(this.blocker.destroy(),this.blocker=void 0),this.gesture.destroy()},Object.defineProperty(t,"is",{get:function(){return"ion-gesture"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{attachTo:{type:String,attr:"attach-to"},autoBlockAll:{type:Boolean,attr:"auto-block-all"},canStart:{type:"Any",attr:"can-start"},direction:{type:String,attr:"direction"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},disableScroll:{type:Boolean,attr:"disable-scroll"},enableListener:{context:"enableListener"},gestureCtrl:{connect:"ion-gesture-controller"},gestureName:{type:String,attr:"gesture-name"},gesturePriority:{type:Number,attr:"gesture-priority"},maxAngle:{type:Number,attr:"max-angle"},notCaptured:{type:"Any",attr:"not-captured"},onEnd:{type:"Any",attr:"on-end"},onMove:{type:"Any",attr:"on-move"},onPress:{type:"Any",attr:"on-press"},onStart:{type:"Any",attr:"on-start"},onWillStart:{type:"Any",attr:"on-will-start"},passive:{type:Boolean,attr:"passive"},queue:{context:"queue"},threshold:{type:Number,attr:"threshold"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionGestureMove",method:"ionGestureMove",bubbles:!0,cancelable:!0,composed:!0},{name:"ionGestureStart",method:"ionGestureStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionGestureEnd",method:"ionGestureEnd",bubbles:!0,cancelable:!0,composed:!0},{name:"ionGestureNotCaptured",method:"ionGestureNotCaptured",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPress",method:"ionPress",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",disabled:!0,passive:!0},{name:"mousedown",method:"onMouseDown",disabled:!0,passive:!0},{name:"touchmove",method:"onTouchMove",disabled:!0,passive:!0},{name:"document:mousemove",method:"onMoveMove",disabled:!0,passive:!0},{name:"touchcancel",method:"onTouchCancel",disabled:!0,passive:!0},{name:"touchend",method:"onTouchCancel",disabled:!0,passive:!0},{name:"document:mouseup",method:"onMouseUp",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),t}(),n=2500;function o(t,e){var i=0,s=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var n=r[0];i=n.clientX,s=n.clientY}else void 0!==t.pageX&&(i=t.pageX,s=t.pageY)}e.currentX=i,e.currentY=s}var a=function(){function t(t,e,i,s,r){this.id=e,this.name=i,this.priority=s,this.disableScroll=r,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),h=function(){function t(t,e,i,s){this.id=t,this.disable=i,this.disableScroll=s,this.ctrl=e}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var i=e[t];this.ctrl.disableGesture(i,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var i=e[t];this.ctrl.enableGesture(i,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),u=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set,this.capturedId=null}return t.prototype.create=function(t){return Promise.resolve(new a(this,this.newID(),t.name,t.priority?t.priority:0,!!t.disableScroll))},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new h(this.newID(),this,t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,i){return this.canStart(t)?(this.requestedStart.set(e,i),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,i){if(!this.start(t,e,i))return!1;var s=this.requestedStart,r=-1e4;return s.forEach(function(t){r=Math.max(r,t)}),r===i?(this.capturedId=e,s.clear(),this.ionGestureCaptured&&this.ionGestureCaptured.emit(t),!0):(s.delete(e),!1)},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId&&t===this.capturedId&&(this.capturedId=null)},t.prototype.disableGesture=function(t,e){var i=this.disabledGestures.get(t);i||(i=new Set,this.disabledGestures.set(t,i)),i.add(e)},t.prototype.enableGesture=function(t,e){var i=this.disabledGestures.get(t);i&&i.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t)},t.prototype.canStart=function(t){return!this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return!!this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},Object.defineProperty(t,"is",{get:function(){return"ion-gesture-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},createBlocker:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionGestureCaptured",method:"ionGestureCaptured",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();t.IonGesture=r,t.IonGestureController=u,Object.defineProperty(t,"__esModule",{value:!0})});