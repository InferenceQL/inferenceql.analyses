// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10252 = arguments.length;
switch (G__10252) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10253 = (function (f,blockable,meta10254){
this.f = f;
this.blockable = blockable;
this.meta10254 = meta10254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10255,meta10254__$1){
var self__ = this;
var _10255__$1 = this;
return (new cljs.core.async.t_cljs$core$async10253(self__.f,self__.blockable,meta10254__$1));
}));

(cljs.core.async.t_cljs$core$async10253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10255){
var self__ = this;
var _10255__$1 = this;
return self__.meta10254;
}));

(cljs.core.async.t_cljs$core$async10253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta10254], null);
}));

(cljs.core.async.t_cljs$core$async10253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10253");

(cljs.core.async.t_cljs$core$async10253.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async10253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10253.
 */
cljs.core.async.__GT_t_cljs$core$async10253 = (function cljs$core$async$__GT_t_cljs$core$async10253(f__$1,blockable__$1,meta10254){
return (new cljs.core.async.t_cljs$core$async10253(f__$1,blockable__$1,meta10254));
});

}

return (new cljs.core.async.t_cljs$core$async10253(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10259 = arguments.length;
switch (G__10259) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10262 = arguments.length;
switch (G__10262) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10265 = arguments.length;
switch (G__10265) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_10267 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10267) : fn1.call(null,val_10267));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10267) : fn1.call(null,val_10267));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10269 = arguments.length;
switch (G__10269) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___10271 = n;
var x_10272 = (0);
while(true){
if((x_10272 < n__4706__auto___10271)){
(a[x_10272] = x_10272);

var G__10273 = (x_10272 + (1));
x_10272 = G__10273;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10274 = (function (flag,meta10275){
this.flag = flag;
this.meta10275 = meta10275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10276,meta10275__$1){
var self__ = this;
var _10276__$1 = this;
return (new cljs.core.async.t_cljs$core$async10274(self__.flag,meta10275__$1));
}));

(cljs.core.async.t_cljs$core$async10274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10276){
var self__ = this;
var _10276__$1 = this;
return self__.meta10275;
}));

(cljs.core.async.t_cljs$core$async10274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta10275], null);
}));

(cljs.core.async.t_cljs$core$async10274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10274");

(cljs.core.async.t_cljs$core$async10274.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async10274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10274.
 */
cljs.core.async.__GT_t_cljs$core$async10274 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10274(flag__$1,meta10275){
return (new cljs.core.async.t_cljs$core$async10274(flag__$1,meta10275));
});

}

return (new cljs.core.async.t_cljs$core$async10274(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10277 = (function (flag,cb,meta10278){
this.flag = flag;
this.cb = cb;
this.meta10278 = meta10278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10279,meta10278__$1){
var self__ = this;
var _10279__$1 = this;
return (new cljs.core.async.t_cljs$core$async10277(self__.flag,self__.cb,meta10278__$1));
}));

(cljs.core.async.t_cljs$core$async10277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10279){
var self__ = this;
var _10279__$1 = this;
return self__.meta10278;
}));

(cljs.core.async.t_cljs$core$async10277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta10278], null);
}));

(cljs.core.async.t_cljs$core$async10277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10277");

(cljs.core.async.t_cljs$core$async10277.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async10277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10277.
 */
cljs.core.async.__GT_t_cljs$core$async10277 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10277(flag__$1,cb__$1,meta10278){
return (new cljs.core.async.t_cljs$core$async10277(flag__$1,cb__$1,meta10278));
});

}

return (new cljs.core.async.t_cljs$core$async10277(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10280_SHARP_){
var G__10282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10280_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10282) : fret.call(null,G__10282));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10281_SHARP_){
var G__10283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10281_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10283) : fret.call(null,G__10283));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10284 = (i + (1));
i = G__10284;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___10289 = arguments.length;
var i__4830__auto___10290 = (0);
while(true){
if((i__4830__auto___10290 < len__4829__auto___10289)){
args__4835__auto__.push((arguments[i__4830__auto___10290]));

var G__10291 = (i__4830__auto___10290 + (1));
i__4830__auto___10290 = G__10291;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10287){
var map__10288 = p__10287;
var map__10288__$1 = cljs.core.__destructure_map(map__10288);
var opts = map__10288__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10285){
var G__10286 = cljs.core.first(seq10285);
var seq10285__$1 = cljs.core.next(seq10285);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10286,seq10285__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10293 = arguments.length;
switch (G__10293) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10192__auto___10340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10317){
var state_val_10318 = (state_10317[(1)]);
if((state_val_10318 === (7))){
var inst_10313 = (state_10317[(2)]);
var state_10317__$1 = state_10317;
var statearr_10319_10341 = state_10317__$1;
(statearr_10319_10341[(2)] = inst_10313);

(statearr_10319_10341[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (1))){
var state_10317__$1 = state_10317;
var statearr_10320_10342 = state_10317__$1;
(statearr_10320_10342[(2)] = null);

(statearr_10320_10342[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (4))){
var inst_10296 = (state_10317[(7)]);
var inst_10296__$1 = (state_10317[(2)]);
var inst_10297 = (inst_10296__$1 == null);
var state_10317__$1 = (function (){var statearr_10321 = state_10317;
(statearr_10321[(7)] = inst_10296__$1);

return statearr_10321;
})();
if(cljs.core.truth_(inst_10297)){
var statearr_10322_10343 = state_10317__$1;
(statearr_10322_10343[(1)] = (5));

} else {
var statearr_10323_10344 = state_10317__$1;
(statearr_10323_10344[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (13))){
var state_10317__$1 = state_10317;
var statearr_10324_10345 = state_10317__$1;
(statearr_10324_10345[(2)] = null);

(statearr_10324_10345[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (6))){
var inst_10296 = (state_10317[(7)]);
var state_10317__$1 = state_10317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10317__$1,(11),to,inst_10296);
} else {
if((state_val_10318 === (3))){
var inst_10315 = (state_10317[(2)]);
var state_10317__$1 = state_10317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10317__$1,inst_10315);
} else {
if((state_val_10318 === (12))){
var state_10317__$1 = state_10317;
var statearr_10325_10346 = state_10317__$1;
(statearr_10325_10346[(2)] = null);

(statearr_10325_10346[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (2))){
var state_10317__$1 = state_10317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10317__$1,(4),from);
} else {
if((state_val_10318 === (11))){
var inst_10306 = (state_10317[(2)]);
var state_10317__$1 = state_10317;
if(cljs.core.truth_(inst_10306)){
var statearr_10326_10347 = state_10317__$1;
(statearr_10326_10347[(1)] = (12));

} else {
var statearr_10327_10348 = state_10317__$1;
(statearr_10327_10348[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (9))){
var state_10317__$1 = state_10317;
var statearr_10328_10349 = state_10317__$1;
(statearr_10328_10349[(2)] = null);

(statearr_10328_10349[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (5))){
var state_10317__$1 = state_10317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10329_10350 = state_10317__$1;
(statearr_10329_10350[(1)] = (8));

} else {
var statearr_10330_10351 = state_10317__$1;
(statearr_10330_10351[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (14))){
var inst_10311 = (state_10317[(2)]);
var state_10317__$1 = state_10317;
var statearr_10331_10352 = state_10317__$1;
(statearr_10331_10352[(2)] = inst_10311);

(statearr_10331_10352[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (10))){
var inst_10303 = (state_10317[(2)]);
var state_10317__$1 = state_10317;
var statearr_10332_10353 = state_10317__$1;
(statearr_10332_10353[(2)] = inst_10303);

(statearr_10332_10353[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10318 === (8))){
var inst_10300 = cljs.core.async.close_BANG_(to);
var state_10317__$1 = state_10317;
var statearr_10333_10354 = state_10317__$1;
(statearr_10333_10354[(2)] = inst_10300);

(statearr_10333_10354[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_10334 = [null,null,null,null,null,null,null,null];
(statearr_10334[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_10334[(1)] = (1));

return statearr_10334;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_10317){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10317);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10335){var ex__10121__auto__ = e10335;
var statearr_10336_10355 = state_10317;
(statearr_10336_10355[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10317[(4)]))){
var statearr_10337_10356 = state_10317;
(statearr_10337_10356[(1)] = cljs.core.first((state_10317[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10357 = state_10317;
state_10317 = G__10357;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_10317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_10317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10338 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10338[(6)] = c__10192__auto___10340);

return statearr_10338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__10358){
var vec__10359 = p__10358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,(1),null);
var job = vec__10359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10192__auto___10535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10366){
var state_val_10367 = (state_10366[(1)]);
if((state_val_10367 === (1))){
var state_10366__$1 = state_10366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10366__$1,(2),res,v);
} else {
if((state_val_10367 === (2))){
var inst_10363 = (state_10366[(2)]);
var inst_10364 = cljs.core.async.close_BANG_(res);
var state_10366__$1 = (function (){var statearr_10368 = state_10366;
(statearr_10368[(7)] = inst_10363);

return statearr_10368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10366__$1,inst_10364);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0 = (function (){
var statearr_10369 = [null,null,null,null,null,null,null,null];
(statearr_10369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__);

(statearr_10369[(1)] = (1));

return statearr_10369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1 = (function (state_10366){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10366);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10370){var ex__10121__auto__ = e10370;
var statearr_10371_10536 = state_10366;
(statearr_10371_10536[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10366[(4)]))){
var statearr_10372_10537 = state_10366;
(statearr_10372_10537[(1)] = cljs.core.first((state_10366[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10538 = state_10366;
state_10366 = G__10538;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = function(state_10366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1.call(this,state_10366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10373 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10373[(6)] = c__10192__auto___10535);

return statearr_10373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10374){
var vec__10375 = p__10374;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10375,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10375,(1),null);
var job = vec__10375;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___10539 = n;
var __10540 = (0);
while(true){
if((__10540 < n__4706__auto___10539)){
var G__10378_10541 = type;
var G__10378_10542__$1 = (((G__10378_10541 instanceof cljs.core.Keyword))?G__10378_10541.fqn:null);
switch (G__10378_10542__$1) {
case "compute":
var c__10192__auto___10544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10540,c__10192__auto___10544,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async){
return (function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = ((function (__10540,c__10192__auto___10544,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async){
return (function (state_10391){
var state_val_10392 = (state_10391[(1)]);
if((state_val_10392 === (1))){
var state_10391__$1 = state_10391;
var statearr_10393_10545 = state_10391__$1;
(statearr_10393_10545[(2)] = null);

(statearr_10393_10545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10392 === (2))){
var state_10391__$1 = state_10391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10391__$1,(4),jobs);
} else {
if((state_val_10392 === (3))){
var inst_10389 = (state_10391[(2)]);
var state_10391__$1 = state_10391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10391__$1,inst_10389);
} else {
if((state_val_10392 === (4))){
var inst_10381 = (state_10391[(2)]);
var inst_10382 = process(inst_10381);
var state_10391__$1 = state_10391;
if(cljs.core.truth_(inst_10382)){
var statearr_10394_10546 = state_10391__$1;
(statearr_10394_10546[(1)] = (5));

} else {
var statearr_10395_10547 = state_10391__$1;
(statearr_10395_10547[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10392 === (5))){
var state_10391__$1 = state_10391;
var statearr_10396_10548 = state_10391__$1;
(statearr_10396_10548[(2)] = null);

(statearr_10396_10548[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10392 === (6))){
var state_10391__$1 = state_10391;
var statearr_10397_10549 = state_10391__$1;
(statearr_10397_10549[(2)] = null);

(statearr_10397_10549[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10392 === (7))){
var inst_10387 = (state_10391[(2)]);
var state_10391__$1 = state_10391;
var statearr_10398_10550 = state_10391__$1;
(statearr_10398_10550[(2)] = inst_10387);

(statearr_10398_10550[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__10540,c__10192__auto___10544,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async))
;
return ((function (__10540,switch__10117__auto__,c__10192__auto___10544,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0 = (function (){
var statearr_10399 = [null,null,null,null,null,null,null];
(statearr_10399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__);

(statearr_10399[(1)] = (1));

return statearr_10399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1 = (function (state_10391){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10391);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10400){var ex__10121__auto__ = e10400;
var statearr_10401_10551 = state_10391;
(statearr_10401_10551[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10391[(4)]))){
var statearr_10402_10552 = state_10391;
(statearr_10402_10552[(1)] = cljs.core.first((state_10391[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10553 = state_10391;
state_10391 = G__10553;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = function(state_10391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1.call(this,state_10391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__;
})()
;})(__10540,switch__10117__auto__,c__10192__auto___10544,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async))
})();
var state__10194__auto__ = (function (){var statearr_10403 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10403[(6)] = c__10192__auto___10544);

return statearr_10403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
});})(__10540,c__10192__auto___10544,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async))
);


break;
case "async":
var c__10192__auto___10554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10540,c__10192__auto___10554,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async){
return (function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = ((function (__10540,c__10192__auto___10554,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async){
return (function (state_10416){
var state_val_10417 = (state_10416[(1)]);
if((state_val_10417 === (1))){
var state_10416__$1 = state_10416;
var statearr_10418_10555 = state_10416__$1;
(statearr_10418_10555[(2)] = null);

(statearr_10418_10555[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10417 === (2))){
var state_10416__$1 = state_10416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10416__$1,(4),jobs);
} else {
if((state_val_10417 === (3))){
var inst_10414 = (state_10416[(2)]);
var state_10416__$1 = state_10416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10416__$1,inst_10414);
} else {
if((state_val_10417 === (4))){
var inst_10406 = (state_10416[(2)]);
var inst_10407 = async(inst_10406);
var state_10416__$1 = state_10416;
if(cljs.core.truth_(inst_10407)){
var statearr_10419_10556 = state_10416__$1;
(statearr_10419_10556[(1)] = (5));

} else {
var statearr_10420_10557 = state_10416__$1;
(statearr_10420_10557[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10417 === (5))){
var state_10416__$1 = state_10416;
var statearr_10421_10558 = state_10416__$1;
(statearr_10421_10558[(2)] = null);

(statearr_10421_10558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10417 === (6))){
var state_10416__$1 = state_10416;
var statearr_10422_10559 = state_10416__$1;
(statearr_10422_10559[(2)] = null);

(statearr_10422_10559[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10417 === (7))){
var inst_10412 = (state_10416[(2)]);
var state_10416__$1 = state_10416;
var statearr_10423_10560 = state_10416__$1;
(statearr_10423_10560[(2)] = inst_10412);

(statearr_10423_10560[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__10540,c__10192__auto___10554,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async))
;
return ((function (__10540,switch__10117__auto__,c__10192__auto___10554,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0 = (function (){
var statearr_10424 = [null,null,null,null,null,null,null];
(statearr_10424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__);

(statearr_10424[(1)] = (1));

return statearr_10424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1 = (function (state_10416){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10416);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10425){var ex__10121__auto__ = e10425;
var statearr_10426_10561 = state_10416;
(statearr_10426_10561[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10416[(4)]))){
var statearr_10427_10562 = state_10416;
(statearr_10427_10562[(1)] = cljs.core.first((state_10416[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10563 = state_10416;
state_10416 = G__10563;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = function(state_10416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1.call(this,state_10416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__;
})()
;})(__10540,switch__10117__auto__,c__10192__auto___10554,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async))
})();
var state__10194__auto__ = (function (){var statearr_10428 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10428[(6)] = c__10192__auto___10554);

return statearr_10428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
});})(__10540,c__10192__auto___10554,G__10378_10541,G__10378_10542__$1,n__4706__auto___10539,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10378_10542__$1)].join('')));

}

var G__10564 = (__10540 + (1));
__10540 = G__10564;
continue;
} else {
}
break;
}

var c__10192__auto___10565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10450){
var state_val_10451 = (state_10450[(1)]);
if((state_val_10451 === (7))){
var inst_10446 = (state_10450[(2)]);
var state_10450__$1 = state_10450;
var statearr_10452_10566 = state_10450__$1;
(statearr_10452_10566[(2)] = inst_10446);

(statearr_10452_10566[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10451 === (1))){
var state_10450__$1 = state_10450;
var statearr_10453_10567 = state_10450__$1;
(statearr_10453_10567[(2)] = null);

(statearr_10453_10567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10451 === (4))){
var inst_10431 = (state_10450[(7)]);
var inst_10431__$1 = (state_10450[(2)]);
var inst_10432 = (inst_10431__$1 == null);
var state_10450__$1 = (function (){var statearr_10454 = state_10450;
(statearr_10454[(7)] = inst_10431__$1);

return statearr_10454;
})();
if(cljs.core.truth_(inst_10432)){
var statearr_10455_10568 = state_10450__$1;
(statearr_10455_10568[(1)] = (5));

} else {
var statearr_10456_10569 = state_10450__$1;
(statearr_10456_10569[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10451 === (6))){
var inst_10436 = (state_10450[(8)]);
var inst_10431 = (state_10450[(7)]);
var inst_10436__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10438 = [inst_10431,inst_10436__$1];
var inst_10439 = (new cljs.core.PersistentVector(null,2,(5),inst_10437,inst_10438,null));
var state_10450__$1 = (function (){var statearr_10457 = state_10450;
(statearr_10457[(8)] = inst_10436__$1);

return statearr_10457;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10450__$1,(8),jobs,inst_10439);
} else {
if((state_val_10451 === (3))){
var inst_10448 = (state_10450[(2)]);
var state_10450__$1 = state_10450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10450__$1,inst_10448);
} else {
if((state_val_10451 === (2))){
var state_10450__$1 = state_10450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10450__$1,(4),from);
} else {
if((state_val_10451 === (9))){
var inst_10443 = (state_10450[(2)]);
var state_10450__$1 = (function (){var statearr_10458 = state_10450;
(statearr_10458[(9)] = inst_10443);

return statearr_10458;
})();
var statearr_10459_10570 = state_10450__$1;
(statearr_10459_10570[(2)] = null);

(statearr_10459_10570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10451 === (5))){
var inst_10434 = cljs.core.async.close_BANG_(jobs);
var state_10450__$1 = state_10450;
var statearr_10460_10571 = state_10450__$1;
(statearr_10460_10571[(2)] = inst_10434);

(statearr_10460_10571[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10451 === (8))){
var inst_10436 = (state_10450[(8)]);
var inst_10441 = (state_10450[(2)]);
var state_10450__$1 = (function (){var statearr_10461 = state_10450;
(statearr_10461[(10)] = inst_10441);

return statearr_10461;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10450__$1,(9),results,inst_10436);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0 = (function (){
var statearr_10462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__);

(statearr_10462[(1)] = (1));

return statearr_10462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1 = (function (state_10450){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10450);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10463){var ex__10121__auto__ = e10463;
var statearr_10464_10572 = state_10450;
(statearr_10464_10572[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10450[(4)]))){
var statearr_10465_10573 = state_10450;
(statearr_10465_10573[(1)] = cljs.core.first((state_10450[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10574 = state_10450;
state_10450 = G__10574;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = function(state_10450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1.call(this,state_10450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10466 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10466[(6)] = c__10192__auto___10565);

return statearr_10466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


var c__10192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10504){
var state_val_10505 = (state_10504[(1)]);
if((state_val_10505 === (7))){
var inst_10500 = (state_10504[(2)]);
var state_10504__$1 = state_10504;
var statearr_10506_10575 = state_10504__$1;
(statearr_10506_10575[(2)] = inst_10500);

(statearr_10506_10575[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (20))){
var state_10504__$1 = state_10504;
var statearr_10507_10576 = state_10504__$1;
(statearr_10507_10576[(2)] = null);

(statearr_10507_10576[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (1))){
var state_10504__$1 = state_10504;
var statearr_10508_10577 = state_10504__$1;
(statearr_10508_10577[(2)] = null);

(statearr_10508_10577[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (4))){
var inst_10469 = (state_10504[(7)]);
var inst_10469__$1 = (state_10504[(2)]);
var inst_10470 = (inst_10469__$1 == null);
var state_10504__$1 = (function (){var statearr_10509 = state_10504;
(statearr_10509[(7)] = inst_10469__$1);

return statearr_10509;
})();
if(cljs.core.truth_(inst_10470)){
var statearr_10510_10578 = state_10504__$1;
(statearr_10510_10578[(1)] = (5));

} else {
var statearr_10511_10579 = state_10504__$1;
(statearr_10511_10579[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (15))){
var inst_10482 = (state_10504[(8)]);
var state_10504__$1 = state_10504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10504__$1,(18),to,inst_10482);
} else {
if((state_val_10505 === (21))){
var inst_10495 = (state_10504[(2)]);
var state_10504__$1 = state_10504;
var statearr_10512_10580 = state_10504__$1;
(statearr_10512_10580[(2)] = inst_10495);

(statearr_10512_10580[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (13))){
var inst_10497 = (state_10504[(2)]);
var state_10504__$1 = (function (){var statearr_10513 = state_10504;
(statearr_10513[(9)] = inst_10497);

return statearr_10513;
})();
var statearr_10514_10581 = state_10504__$1;
(statearr_10514_10581[(2)] = null);

(statearr_10514_10581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (6))){
var inst_10469 = (state_10504[(7)]);
var state_10504__$1 = state_10504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10504__$1,(11),inst_10469);
} else {
if((state_val_10505 === (17))){
var inst_10490 = (state_10504[(2)]);
var state_10504__$1 = state_10504;
if(cljs.core.truth_(inst_10490)){
var statearr_10515_10582 = state_10504__$1;
(statearr_10515_10582[(1)] = (19));

} else {
var statearr_10516_10583 = state_10504__$1;
(statearr_10516_10583[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (3))){
var inst_10502 = (state_10504[(2)]);
var state_10504__$1 = state_10504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10504__$1,inst_10502);
} else {
if((state_val_10505 === (12))){
var inst_10479 = (state_10504[(10)]);
var state_10504__$1 = state_10504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10504__$1,(14),inst_10479);
} else {
if((state_val_10505 === (2))){
var state_10504__$1 = state_10504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10504__$1,(4),results);
} else {
if((state_val_10505 === (19))){
var state_10504__$1 = state_10504;
var statearr_10517_10584 = state_10504__$1;
(statearr_10517_10584[(2)] = null);

(statearr_10517_10584[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (11))){
var inst_10479 = (state_10504[(2)]);
var state_10504__$1 = (function (){var statearr_10518 = state_10504;
(statearr_10518[(10)] = inst_10479);

return statearr_10518;
})();
var statearr_10519_10585 = state_10504__$1;
(statearr_10519_10585[(2)] = null);

(statearr_10519_10585[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (9))){
var state_10504__$1 = state_10504;
var statearr_10520_10586 = state_10504__$1;
(statearr_10520_10586[(2)] = null);

(statearr_10520_10586[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (5))){
var state_10504__$1 = state_10504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10521_10587 = state_10504__$1;
(statearr_10521_10587[(1)] = (8));

} else {
var statearr_10522_10588 = state_10504__$1;
(statearr_10522_10588[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (14))){
var inst_10482 = (state_10504[(8)]);
var inst_10484 = (state_10504[(11)]);
var inst_10482__$1 = (state_10504[(2)]);
var inst_10483 = (inst_10482__$1 == null);
var inst_10484__$1 = cljs.core.not(inst_10483);
var state_10504__$1 = (function (){var statearr_10523 = state_10504;
(statearr_10523[(8)] = inst_10482__$1);

(statearr_10523[(11)] = inst_10484__$1);

return statearr_10523;
})();
if(inst_10484__$1){
var statearr_10524_10589 = state_10504__$1;
(statearr_10524_10589[(1)] = (15));

} else {
var statearr_10525_10590 = state_10504__$1;
(statearr_10525_10590[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (16))){
var inst_10484 = (state_10504[(11)]);
var state_10504__$1 = state_10504;
var statearr_10526_10591 = state_10504__$1;
(statearr_10526_10591[(2)] = inst_10484);

(statearr_10526_10591[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (10))){
var inst_10476 = (state_10504[(2)]);
var state_10504__$1 = state_10504;
var statearr_10527_10592 = state_10504__$1;
(statearr_10527_10592[(2)] = inst_10476);

(statearr_10527_10592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (18))){
var inst_10487 = (state_10504[(2)]);
var state_10504__$1 = state_10504;
var statearr_10528_10593 = state_10504__$1;
(statearr_10528_10593[(2)] = inst_10487);

(statearr_10528_10593[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10505 === (8))){
var inst_10473 = cljs.core.async.close_BANG_(to);
var state_10504__$1 = state_10504;
var statearr_10529_10594 = state_10504__$1;
(statearr_10529_10594[(2)] = inst_10473);

(statearr_10529_10594[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0 = (function (){
var statearr_10530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__);

(statearr_10530[(1)] = (1));

return statearr_10530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1 = (function (state_10504){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10504);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10531){var ex__10121__auto__ = e10531;
var statearr_10532_10595 = state_10504;
(statearr_10532_10595[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10504[(4)]))){
var statearr_10533_10596 = state_10504;
(statearr_10533_10596[(1)] = cljs.core.first((state_10504[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10597 = state_10504;
state_10504 = G__10597;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__ = function(state_10504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1.call(this,state_10504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10534 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10534[(6)] = c__10192__auto__);

return statearr_10534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));

return c__10192__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__10599 = arguments.length;
switch (G__10599) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__10602 = arguments.length;
switch (G__10602) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__10605 = arguments.length;
switch (G__10605) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10192__auto___10655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10631){
var state_val_10632 = (state_10631[(1)]);
if((state_val_10632 === (7))){
var inst_10627 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10633_10656 = state_10631__$1;
(statearr_10633_10656[(2)] = inst_10627);

(statearr_10633_10656[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (1))){
var state_10631__$1 = state_10631;
var statearr_10634_10657 = state_10631__$1;
(statearr_10634_10657[(2)] = null);

(statearr_10634_10657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (4))){
var inst_10608 = (state_10631[(7)]);
var inst_10608__$1 = (state_10631[(2)]);
var inst_10609 = (inst_10608__$1 == null);
var state_10631__$1 = (function (){var statearr_10635 = state_10631;
(statearr_10635[(7)] = inst_10608__$1);

return statearr_10635;
})();
if(cljs.core.truth_(inst_10609)){
var statearr_10636_10658 = state_10631__$1;
(statearr_10636_10658[(1)] = (5));

} else {
var statearr_10637_10659 = state_10631__$1;
(statearr_10637_10659[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (13))){
var state_10631__$1 = state_10631;
var statearr_10638_10660 = state_10631__$1;
(statearr_10638_10660[(2)] = null);

(statearr_10638_10660[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (6))){
var inst_10608 = (state_10631[(7)]);
var inst_10614 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10608) : p.call(null,inst_10608));
var state_10631__$1 = state_10631;
if(cljs.core.truth_(inst_10614)){
var statearr_10639_10661 = state_10631__$1;
(statearr_10639_10661[(1)] = (9));

} else {
var statearr_10640_10662 = state_10631__$1;
(statearr_10640_10662[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (3))){
var inst_10629 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10631__$1,inst_10629);
} else {
if((state_val_10632 === (12))){
var state_10631__$1 = state_10631;
var statearr_10641_10663 = state_10631__$1;
(statearr_10641_10663[(2)] = null);

(statearr_10641_10663[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (2))){
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10631__$1,(4),ch);
} else {
if((state_val_10632 === (11))){
var inst_10608 = (state_10631[(7)]);
var inst_10618 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10631__$1,(8),inst_10618,inst_10608);
} else {
if((state_val_10632 === (9))){
var state_10631__$1 = state_10631;
var statearr_10642_10664 = state_10631__$1;
(statearr_10642_10664[(2)] = tc);

(statearr_10642_10664[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (5))){
var inst_10611 = cljs.core.async.close_BANG_(tc);
var inst_10612 = cljs.core.async.close_BANG_(fc);
var state_10631__$1 = (function (){var statearr_10643 = state_10631;
(statearr_10643[(8)] = inst_10611);

return statearr_10643;
})();
var statearr_10644_10665 = state_10631__$1;
(statearr_10644_10665[(2)] = inst_10612);

(statearr_10644_10665[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (14))){
var inst_10625 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10645_10666 = state_10631__$1;
(statearr_10645_10666[(2)] = inst_10625);

(statearr_10645_10666[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (10))){
var state_10631__$1 = state_10631;
var statearr_10646_10667 = state_10631__$1;
(statearr_10646_10667[(2)] = fc);

(statearr_10646_10667[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (8))){
var inst_10620 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
if(cljs.core.truth_(inst_10620)){
var statearr_10647_10668 = state_10631__$1;
(statearr_10647_10668[(1)] = (12));

} else {
var statearr_10648_10669 = state_10631__$1;
(statearr_10648_10669[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_10649 = [null,null,null,null,null,null,null,null,null];
(statearr_10649[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_10649[(1)] = (1));

return statearr_10649;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_10631){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10631);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10650){var ex__10121__auto__ = e10650;
var statearr_10651_10670 = state_10631;
(statearr_10651_10670[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10631[(4)]))){
var statearr_10652_10671 = state_10631;
(statearr_10652_10671[(1)] = cljs.core.first((state_10631[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10672 = state_10631;
state_10631 = G__10672;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_10631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_10631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10653 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10653[(6)] = c__10192__auto___10655);

return statearr_10653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10694){
var state_val_10695 = (state_10694[(1)]);
if((state_val_10695 === (7))){
var inst_10690 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10696_10715 = state_10694__$1;
(statearr_10696_10715[(2)] = inst_10690);

(statearr_10696_10715[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10695 === (1))){
var inst_10673 = init;
var inst_10674 = inst_10673;
var state_10694__$1 = (function (){var statearr_10697 = state_10694;
(statearr_10697[(7)] = inst_10674);

return statearr_10697;
})();
var statearr_10698_10716 = state_10694__$1;
(statearr_10698_10716[(2)] = null);

(statearr_10698_10716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10695 === (4))){
var inst_10677 = (state_10694[(8)]);
var inst_10677__$1 = (state_10694[(2)]);
var inst_10678 = (inst_10677__$1 == null);
var state_10694__$1 = (function (){var statearr_10699 = state_10694;
(statearr_10699[(8)] = inst_10677__$1);

return statearr_10699;
})();
if(cljs.core.truth_(inst_10678)){
var statearr_10700_10717 = state_10694__$1;
(statearr_10700_10717[(1)] = (5));

} else {
var statearr_10701_10718 = state_10694__$1;
(statearr_10701_10718[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10695 === (6))){
var inst_10674 = (state_10694[(7)]);
var inst_10677 = (state_10694[(8)]);
var inst_10681 = (state_10694[(9)]);
var inst_10681__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10674,inst_10677) : f.call(null,inst_10674,inst_10677));
var inst_10682 = cljs.core.reduced_QMARK_(inst_10681__$1);
var state_10694__$1 = (function (){var statearr_10702 = state_10694;
(statearr_10702[(9)] = inst_10681__$1);

return statearr_10702;
})();
if(inst_10682){
var statearr_10703_10719 = state_10694__$1;
(statearr_10703_10719[(1)] = (8));

} else {
var statearr_10704_10720 = state_10694__$1;
(statearr_10704_10720[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10695 === (3))){
var inst_10692 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10694__$1,inst_10692);
} else {
if((state_val_10695 === (2))){
var state_10694__$1 = state_10694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10694__$1,(4),ch);
} else {
if((state_val_10695 === (9))){
var inst_10681 = (state_10694[(9)]);
var inst_10674 = inst_10681;
var state_10694__$1 = (function (){var statearr_10705 = state_10694;
(statearr_10705[(7)] = inst_10674);

return statearr_10705;
})();
var statearr_10706_10721 = state_10694__$1;
(statearr_10706_10721[(2)] = null);

(statearr_10706_10721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10695 === (5))){
var inst_10674 = (state_10694[(7)]);
var state_10694__$1 = state_10694;
var statearr_10707_10722 = state_10694__$1;
(statearr_10707_10722[(2)] = inst_10674);

(statearr_10707_10722[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10695 === (10))){
var inst_10688 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10708_10723 = state_10694__$1;
(statearr_10708_10723[(2)] = inst_10688);

(statearr_10708_10723[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10695 === (8))){
var inst_10681 = (state_10694[(9)]);
var inst_10684 = cljs.core.deref(inst_10681);
var state_10694__$1 = state_10694;
var statearr_10709_10724 = state_10694__$1;
(statearr_10709_10724[(2)] = inst_10684);

(statearr_10709_10724[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__10118__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10118__auto____0 = (function (){
var statearr_10710 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10710[(0)] = cljs$core$async$reduce_$_state_machine__10118__auto__);

(statearr_10710[(1)] = (1));

return statearr_10710;
});
var cljs$core$async$reduce_$_state_machine__10118__auto____1 = (function (state_10694){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10694);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10711){var ex__10121__auto__ = e10711;
var statearr_10712_10725 = state_10694;
(statearr_10712_10725[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10694[(4)]))){
var statearr_10713_10726 = state_10694;
(statearr_10713_10726[(1)] = cljs.core.first((state_10694[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10727 = state_10694;
state_10694 = G__10727;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10118__auto__ = function(state_10694){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10118__auto____1.call(this,state_10694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10118__auto____0;
cljs$core$async$reduce_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10118__auto____1;
return cljs$core$async$reduce_$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10714 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10714[(6)] = c__10192__auto__);

return statearr_10714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));

return c__10192__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10733){
var state_val_10734 = (state_10733[(1)]);
if((state_val_10734 === (1))){
var inst_10728 = cljs.core.async.reduce(f__$1,init,ch);
var state_10733__$1 = state_10733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10733__$1,(2),inst_10728);
} else {
if((state_val_10734 === (2))){
var inst_10730 = (state_10733[(2)]);
var inst_10731 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_10730) : f__$1.call(null,inst_10730));
var state_10733__$1 = state_10733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10733__$1,inst_10731);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10118__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10118__auto____0 = (function (){
var statearr_10735 = [null,null,null,null,null,null,null];
(statearr_10735[(0)] = cljs$core$async$transduce_$_state_machine__10118__auto__);

(statearr_10735[(1)] = (1));

return statearr_10735;
});
var cljs$core$async$transduce_$_state_machine__10118__auto____1 = (function (state_10733){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10733);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10736){var ex__10121__auto__ = e10736;
var statearr_10737_10740 = state_10733;
(statearr_10737_10740[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10733[(4)]))){
var statearr_10738_10741 = state_10733;
(statearr_10738_10741[(1)] = cljs.core.first((state_10733[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10742 = state_10733;
state_10733 = G__10742;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10118__auto__ = function(state_10733){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10118__auto____1.call(this,state_10733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10118__auto____0;
cljs$core$async$transduce_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10118__auto____1;
return cljs$core$async$transduce_$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10739 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10739[(6)] = c__10192__auto__);

return statearr_10739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));

return c__10192__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__10744 = arguments.length;
switch (G__10744) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10769){
var state_val_10770 = (state_10769[(1)]);
if((state_val_10770 === (7))){
var inst_10751 = (state_10769[(2)]);
var state_10769__$1 = state_10769;
var statearr_10771_10793 = state_10769__$1;
(statearr_10771_10793[(2)] = inst_10751);

(statearr_10771_10793[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (1))){
var inst_10745 = cljs.core.seq(coll);
var inst_10746 = inst_10745;
var state_10769__$1 = (function (){var statearr_10772 = state_10769;
(statearr_10772[(7)] = inst_10746);

return statearr_10772;
})();
var statearr_10773_10794 = state_10769__$1;
(statearr_10773_10794[(2)] = null);

(statearr_10773_10794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (4))){
var inst_10746 = (state_10769[(7)]);
var inst_10749 = cljs.core.first(inst_10746);
var state_10769__$1 = state_10769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10769__$1,(7),ch,inst_10749);
} else {
if((state_val_10770 === (13))){
var inst_10763 = (state_10769[(2)]);
var state_10769__$1 = state_10769;
var statearr_10774_10795 = state_10769__$1;
(statearr_10774_10795[(2)] = inst_10763);

(statearr_10774_10795[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (6))){
var inst_10754 = (state_10769[(2)]);
var state_10769__$1 = state_10769;
if(cljs.core.truth_(inst_10754)){
var statearr_10775_10796 = state_10769__$1;
(statearr_10775_10796[(1)] = (8));

} else {
var statearr_10776_10797 = state_10769__$1;
(statearr_10776_10797[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (3))){
var inst_10767 = (state_10769[(2)]);
var state_10769__$1 = state_10769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10769__$1,inst_10767);
} else {
if((state_val_10770 === (12))){
var state_10769__$1 = state_10769;
var statearr_10777_10798 = state_10769__$1;
(statearr_10777_10798[(2)] = null);

(statearr_10777_10798[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (2))){
var inst_10746 = (state_10769[(7)]);
var state_10769__$1 = state_10769;
if(cljs.core.truth_(inst_10746)){
var statearr_10778_10799 = state_10769__$1;
(statearr_10778_10799[(1)] = (4));

} else {
var statearr_10779_10800 = state_10769__$1;
(statearr_10779_10800[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (11))){
var inst_10760 = cljs.core.async.close_BANG_(ch);
var state_10769__$1 = state_10769;
var statearr_10780_10801 = state_10769__$1;
(statearr_10780_10801[(2)] = inst_10760);

(statearr_10780_10801[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (9))){
var state_10769__$1 = state_10769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10781_10802 = state_10769__$1;
(statearr_10781_10802[(1)] = (11));

} else {
var statearr_10782_10803 = state_10769__$1;
(statearr_10782_10803[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (5))){
var inst_10746 = (state_10769[(7)]);
var state_10769__$1 = state_10769;
var statearr_10783_10804 = state_10769__$1;
(statearr_10783_10804[(2)] = inst_10746);

(statearr_10783_10804[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (10))){
var inst_10765 = (state_10769[(2)]);
var state_10769__$1 = state_10769;
var statearr_10784_10805 = state_10769__$1;
(statearr_10784_10805[(2)] = inst_10765);

(statearr_10784_10805[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10770 === (8))){
var inst_10746 = (state_10769[(7)]);
var inst_10756 = cljs.core.next(inst_10746);
var inst_10746__$1 = inst_10756;
var state_10769__$1 = (function (){var statearr_10785 = state_10769;
(statearr_10785[(7)] = inst_10746__$1);

return statearr_10785;
})();
var statearr_10786_10806 = state_10769__$1;
(statearr_10786_10806[(2)] = null);

(statearr_10786_10806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_10787 = [null,null,null,null,null,null,null,null];
(statearr_10787[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_10787[(1)] = (1));

return statearr_10787;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_10769){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10769);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e10788){var ex__10121__auto__ = e10788;
var statearr_10789_10807 = state_10769;
(statearr_10789_10807[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10769[(4)]))){
var statearr_10790_10808 = state_10769;
(statearr_10790_10808[(1)] = cljs.core.first((state_10769[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__10809 = state_10769;
state_10769 = G__10809;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_10769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_10769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_10791 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_10791[(6)] = c__10192__auto__);

return statearr_10791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));

return c__10192__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10811 = arguments.length;
switch (G__10811) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_10813 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_10813(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_10814 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_10814(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_10815 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_10815(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_10816 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_10816(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10817 = (function (ch,cs,meta10818){
this.ch = ch;
this.cs = cs;
this.meta10818 = meta10818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10819,meta10818__$1){
var self__ = this;
var _10819__$1 = this;
return (new cljs.core.async.t_cljs$core$async10817(self__.ch,self__.cs,meta10818__$1));
}));

(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10819){
var self__ = this;
var _10819__$1 = this;
return self__.meta10818;
}));

(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async10817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta10818], null);
}));

(cljs.core.async.t_cljs$core$async10817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10817");

(cljs.core.async.t_cljs$core$async10817.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async10817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10817.
 */
cljs.core.async.__GT_t_cljs$core$async10817 = (function cljs$core$async$mult_$___GT_t_cljs$core$async10817(ch__$1,cs__$1,meta10818){
return (new cljs.core.async.t_cljs$core$async10817(ch__$1,cs__$1,meta10818));
});

}

return (new cljs.core.async.t_cljs$core$async10817(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__10192__auto___11036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_10952){
var state_val_10953 = (state_10952[(1)]);
if((state_val_10953 === (7))){
var inst_10948 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_10954_11037 = state_10952__$1;
(statearr_10954_11037[(2)] = inst_10948);

(statearr_10954_11037[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (20))){
var inst_10853 = (state_10952[(7)]);
var inst_10865 = cljs.core.first(inst_10853);
var inst_10866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10865,(0),null);
var inst_10867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10865,(1),null);
var state_10952__$1 = (function (){var statearr_10955 = state_10952;
(statearr_10955[(8)] = inst_10866);

return statearr_10955;
})();
if(cljs.core.truth_(inst_10867)){
var statearr_10956_11038 = state_10952__$1;
(statearr_10956_11038[(1)] = (22));

} else {
var statearr_10957_11039 = state_10952__$1;
(statearr_10957_11039[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (27))){
var inst_10822 = (state_10952[(9)]);
var inst_10897 = (state_10952[(10)]);
var inst_10902 = (state_10952[(11)]);
var inst_10895 = (state_10952[(12)]);
var inst_10902__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10895,inst_10897);
var inst_10903 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10902__$1,inst_10822,done);
var state_10952__$1 = (function (){var statearr_10958 = state_10952;
(statearr_10958[(11)] = inst_10902__$1);

return statearr_10958;
})();
if(cljs.core.truth_(inst_10903)){
var statearr_10959_11040 = state_10952__$1;
(statearr_10959_11040[(1)] = (30));

} else {
var statearr_10960_11041 = state_10952__$1;
(statearr_10960_11041[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (1))){
var state_10952__$1 = state_10952;
var statearr_10961_11042 = state_10952__$1;
(statearr_10961_11042[(2)] = null);

(statearr_10961_11042[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (24))){
var inst_10853 = (state_10952[(7)]);
var inst_10872 = (state_10952[(2)]);
var inst_10873 = cljs.core.next(inst_10853);
var inst_10831 = inst_10873;
var inst_10832 = null;
var inst_10833 = (0);
var inst_10834 = (0);
var state_10952__$1 = (function (){var statearr_10962 = state_10952;
(statearr_10962[(13)] = inst_10872);

(statearr_10962[(14)] = inst_10831);

(statearr_10962[(15)] = inst_10834);

(statearr_10962[(16)] = inst_10832);

(statearr_10962[(17)] = inst_10833);

return statearr_10962;
})();
var statearr_10963_11043 = state_10952__$1;
(statearr_10963_11043[(2)] = null);

(statearr_10963_11043[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (39))){
var state_10952__$1 = state_10952;
var statearr_10967_11044 = state_10952__$1;
(statearr_10967_11044[(2)] = null);

(statearr_10967_11044[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (4))){
var inst_10822 = (state_10952[(9)]);
var inst_10822__$1 = (state_10952[(2)]);
var inst_10823 = (inst_10822__$1 == null);
var state_10952__$1 = (function (){var statearr_10968 = state_10952;
(statearr_10968[(9)] = inst_10822__$1);

return statearr_10968;
})();
if(cljs.core.truth_(inst_10823)){
var statearr_10969_11045 = state_10952__$1;
(statearr_10969_11045[(1)] = (5));

} else {
var statearr_10970_11046 = state_10952__$1;
(statearr_10970_11046[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (15))){
var inst_10831 = (state_10952[(14)]);
var inst_10834 = (state_10952[(15)]);
var inst_10832 = (state_10952[(16)]);
var inst_10833 = (state_10952[(17)]);
var inst_10849 = (state_10952[(2)]);
var inst_10850 = (inst_10834 + (1));
var tmp10964 = inst_10831;
var tmp10965 = inst_10832;
var tmp10966 = inst_10833;
var inst_10831__$1 = tmp10964;
var inst_10832__$1 = tmp10965;
var inst_10833__$1 = tmp10966;
var inst_10834__$1 = inst_10850;
var state_10952__$1 = (function (){var statearr_10971 = state_10952;
(statearr_10971[(14)] = inst_10831__$1);

(statearr_10971[(18)] = inst_10849);

(statearr_10971[(15)] = inst_10834__$1);

(statearr_10971[(16)] = inst_10832__$1);

(statearr_10971[(17)] = inst_10833__$1);

return statearr_10971;
})();
var statearr_10972_11047 = state_10952__$1;
(statearr_10972_11047[(2)] = null);

(statearr_10972_11047[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (21))){
var inst_10876 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_10976_11048 = state_10952__$1;
(statearr_10976_11048[(2)] = inst_10876);

(statearr_10976_11048[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (31))){
var inst_10902 = (state_10952[(11)]);
var inst_10906 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10902);
var state_10952__$1 = state_10952;
var statearr_10977_11049 = state_10952__$1;
(statearr_10977_11049[(2)] = inst_10906);

(statearr_10977_11049[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (32))){
var inst_10896 = (state_10952[(19)]);
var inst_10897 = (state_10952[(10)]);
var inst_10894 = (state_10952[(20)]);
var inst_10895 = (state_10952[(12)]);
var inst_10908 = (state_10952[(2)]);
var inst_10909 = (inst_10897 + (1));
var tmp10973 = inst_10896;
var tmp10974 = inst_10894;
var tmp10975 = inst_10895;
var inst_10894__$1 = tmp10974;
var inst_10895__$1 = tmp10975;
var inst_10896__$1 = tmp10973;
var inst_10897__$1 = inst_10909;
var state_10952__$1 = (function (){var statearr_10978 = state_10952;
(statearr_10978[(21)] = inst_10908);

(statearr_10978[(19)] = inst_10896__$1);

(statearr_10978[(10)] = inst_10897__$1);

(statearr_10978[(20)] = inst_10894__$1);

(statearr_10978[(12)] = inst_10895__$1);

return statearr_10978;
})();
var statearr_10979_11050 = state_10952__$1;
(statearr_10979_11050[(2)] = null);

(statearr_10979_11050[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (40))){
var inst_10921 = (state_10952[(22)]);
var inst_10925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10921);
var state_10952__$1 = state_10952;
var statearr_10980_11051 = state_10952__$1;
(statearr_10980_11051[(2)] = inst_10925);

(statearr_10980_11051[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (33))){
var inst_10912 = (state_10952[(23)]);
var inst_10914 = cljs.core.chunked_seq_QMARK_(inst_10912);
var state_10952__$1 = state_10952;
if(inst_10914){
var statearr_10981_11052 = state_10952__$1;
(statearr_10981_11052[(1)] = (36));

} else {
var statearr_10982_11053 = state_10952__$1;
(statearr_10982_11053[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (13))){
var inst_10843 = (state_10952[(24)]);
var inst_10846 = cljs.core.async.close_BANG_(inst_10843);
var state_10952__$1 = state_10952;
var statearr_10983_11054 = state_10952__$1;
(statearr_10983_11054[(2)] = inst_10846);

(statearr_10983_11054[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (22))){
var inst_10866 = (state_10952[(8)]);
var inst_10869 = cljs.core.async.close_BANG_(inst_10866);
var state_10952__$1 = state_10952;
var statearr_10984_11055 = state_10952__$1;
(statearr_10984_11055[(2)] = inst_10869);

(statearr_10984_11055[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (36))){
var inst_10912 = (state_10952[(23)]);
var inst_10916 = cljs.core.chunk_first(inst_10912);
var inst_10917 = cljs.core.chunk_rest(inst_10912);
var inst_10918 = cljs.core.count(inst_10916);
var inst_10894 = inst_10917;
var inst_10895 = inst_10916;
var inst_10896 = inst_10918;
var inst_10897 = (0);
var state_10952__$1 = (function (){var statearr_10985 = state_10952;
(statearr_10985[(19)] = inst_10896);

(statearr_10985[(10)] = inst_10897);

(statearr_10985[(20)] = inst_10894);

(statearr_10985[(12)] = inst_10895);

return statearr_10985;
})();
var statearr_10986_11056 = state_10952__$1;
(statearr_10986_11056[(2)] = null);

(statearr_10986_11056[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (41))){
var inst_10912 = (state_10952[(23)]);
var inst_10927 = (state_10952[(2)]);
var inst_10928 = cljs.core.next(inst_10912);
var inst_10894 = inst_10928;
var inst_10895 = null;
var inst_10896 = (0);
var inst_10897 = (0);
var state_10952__$1 = (function (){var statearr_10987 = state_10952;
(statearr_10987[(19)] = inst_10896);

(statearr_10987[(10)] = inst_10897);

(statearr_10987[(20)] = inst_10894);

(statearr_10987[(12)] = inst_10895);

(statearr_10987[(25)] = inst_10927);

return statearr_10987;
})();
var statearr_10988_11057 = state_10952__$1;
(statearr_10988_11057[(2)] = null);

(statearr_10988_11057[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (43))){
var state_10952__$1 = state_10952;
var statearr_10989_11058 = state_10952__$1;
(statearr_10989_11058[(2)] = null);

(statearr_10989_11058[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (29))){
var inst_10936 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_10990_11059 = state_10952__$1;
(statearr_10990_11059[(2)] = inst_10936);

(statearr_10990_11059[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (44))){
var inst_10945 = (state_10952[(2)]);
var state_10952__$1 = (function (){var statearr_10991 = state_10952;
(statearr_10991[(26)] = inst_10945);

return statearr_10991;
})();
var statearr_10992_11060 = state_10952__$1;
(statearr_10992_11060[(2)] = null);

(statearr_10992_11060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (6))){
var inst_10886 = (state_10952[(27)]);
var inst_10885 = cljs.core.deref(cs);
var inst_10886__$1 = cljs.core.keys(inst_10885);
var inst_10887 = cljs.core.count(inst_10886__$1);
var inst_10888 = cljs.core.reset_BANG_(dctr,inst_10887);
var inst_10893 = cljs.core.seq(inst_10886__$1);
var inst_10894 = inst_10893;
var inst_10895 = null;
var inst_10896 = (0);
var inst_10897 = (0);
var state_10952__$1 = (function (){var statearr_10993 = state_10952;
(statearr_10993[(27)] = inst_10886__$1);

(statearr_10993[(19)] = inst_10896);

(statearr_10993[(10)] = inst_10897);

(statearr_10993[(20)] = inst_10894);

(statearr_10993[(28)] = inst_10888);

(statearr_10993[(12)] = inst_10895);

return statearr_10993;
})();
var statearr_10994_11061 = state_10952__$1;
(statearr_10994_11061[(2)] = null);

(statearr_10994_11061[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (28))){
var inst_10894 = (state_10952[(20)]);
var inst_10912 = (state_10952[(23)]);
var inst_10912__$1 = cljs.core.seq(inst_10894);
var state_10952__$1 = (function (){var statearr_10995 = state_10952;
(statearr_10995[(23)] = inst_10912__$1);

return statearr_10995;
})();
if(inst_10912__$1){
var statearr_10996_11062 = state_10952__$1;
(statearr_10996_11062[(1)] = (33));

} else {
var statearr_10997_11063 = state_10952__$1;
(statearr_10997_11063[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (25))){
var inst_10896 = (state_10952[(19)]);
var inst_10897 = (state_10952[(10)]);
var inst_10899 = (inst_10897 < inst_10896);
var inst_10900 = inst_10899;
var state_10952__$1 = state_10952;
if(cljs.core.truth_(inst_10900)){
var statearr_10998_11064 = state_10952__$1;
(statearr_10998_11064[(1)] = (27));

} else {
var statearr_10999_11065 = state_10952__$1;
(statearr_10999_11065[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (34))){
var state_10952__$1 = state_10952;
var statearr_11000_11066 = state_10952__$1;
(statearr_11000_11066[(2)] = null);

(statearr_11000_11066[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (17))){
var state_10952__$1 = state_10952;
var statearr_11001_11067 = state_10952__$1;
(statearr_11001_11067[(2)] = null);

(statearr_11001_11067[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (3))){
var inst_10950 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10952__$1,inst_10950);
} else {
if((state_val_10953 === (12))){
var inst_10881 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_11002_11068 = state_10952__$1;
(statearr_11002_11068[(2)] = inst_10881);

(statearr_11002_11068[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (2))){
var state_10952__$1 = state_10952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10952__$1,(4),ch);
} else {
if((state_val_10953 === (23))){
var state_10952__$1 = state_10952;
var statearr_11003_11069 = state_10952__$1;
(statearr_11003_11069[(2)] = null);

(statearr_11003_11069[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (35))){
var inst_10934 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_11004_11070 = state_10952__$1;
(statearr_11004_11070[(2)] = inst_10934);

(statearr_11004_11070[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (19))){
var inst_10853 = (state_10952[(7)]);
var inst_10857 = cljs.core.chunk_first(inst_10853);
var inst_10858 = cljs.core.chunk_rest(inst_10853);
var inst_10859 = cljs.core.count(inst_10857);
var inst_10831 = inst_10858;
var inst_10832 = inst_10857;
var inst_10833 = inst_10859;
var inst_10834 = (0);
var state_10952__$1 = (function (){var statearr_11005 = state_10952;
(statearr_11005[(14)] = inst_10831);

(statearr_11005[(15)] = inst_10834);

(statearr_11005[(16)] = inst_10832);

(statearr_11005[(17)] = inst_10833);

return statearr_11005;
})();
var statearr_11006_11071 = state_10952__$1;
(statearr_11006_11071[(2)] = null);

(statearr_11006_11071[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (11))){
var inst_10853 = (state_10952[(7)]);
var inst_10831 = (state_10952[(14)]);
var inst_10853__$1 = cljs.core.seq(inst_10831);
var state_10952__$1 = (function (){var statearr_11007 = state_10952;
(statearr_11007[(7)] = inst_10853__$1);

return statearr_11007;
})();
if(inst_10853__$1){
var statearr_11008_11072 = state_10952__$1;
(statearr_11008_11072[(1)] = (16));

} else {
var statearr_11009_11073 = state_10952__$1;
(statearr_11009_11073[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (9))){
var inst_10883 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_11010_11074 = state_10952__$1;
(statearr_11010_11074[(2)] = inst_10883);

(statearr_11010_11074[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (5))){
var inst_10829 = cljs.core.deref(cs);
var inst_10830 = cljs.core.seq(inst_10829);
var inst_10831 = inst_10830;
var inst_10832 = null;
var inst_10833 = (0);
var inst_10834 = (0);
var state_10952__$1 = (function (){var statearr_11011 = state_10952;
(statearr_11011[(14)] = inst_10831);

(statearr_11011[(15)] = inst_10834);

(statearr_11011[(16)] = inst_10832);

(statearr_11011[(17)] = inst_10833);

return statearr_11011;
})();
var statearr_11012_11075 = state_10952__$1;
(statearr_11012_11075[(2)] = null);

(statearr_11012_11075[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (14))){
var state_10952__$1 = state_10952;
var statearr_11013_11076 = state_10952__$1;
(statearr_11013_11076[(2)] = null);

(statearr_11013_11076[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (45))){
var inst_10942 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_11014_11077 = state_10952__$1;
(statearr_11014_11077[(2)] = inst_10942);

(statearr_11014_11077[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (26))){
var inst_10886 = (state_10952[(27)]);
var inst_10938 = (state_10952[(2)]);
var inst_10939 = cljs.core.seq(inst_10886);
var state_10952__$1 = (function (){var statearr_11015 = state_10952;
(statearr_11015[(29)] = inst_10938);

return statearr_11015;
})();
if(inst_10939){
var statearr_11016_11078 = state_10952__$1;
(statearr_11016_11078[(1)] = (42));

} else {
var statearr_11017_11079 = state_10952__$1;
(statearr_11017_11079[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (16))){
var inst_10853 = (state_10952[(7)]);
var inst_10855 = cljs.core.chunked_seq_QMARK_(inst_10853);
var state_10952__$1 = state_10952;
if(inst_10855){
var statearr_11018_11080 = state_10952__$1;
(statearr_11018_11080[(1)] = (19));

} else {
var statearr_11019_11081 = state_10952__$1;
(statearr_11019_11081[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (38))){
var inst_10931 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_11020_11082 = state_10952__$1;
(statearr_11020_11082[(2)] = inst_10931);

(statearr_11020_11082[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (30))){
var state_10952__$1 = state_10952;
var statearr_11021_11083 = state_10952__$1;
(statearr_11021_11083[(2)] = null);

(statearr_11021_11083[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (10))){
var inst_10834 = (state_10952[(15)]);
var inst_10832 = (state_10952[(16)]);
var inst_10842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10832,inst_10834);
var inst_10843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10842,(0),null);
var inst_10844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10842,(1),null);
var state_10952__$1 = (function (){var statearr_11022 = state_10952;
(statearr_11022[(24)] = inst_10843);

return statearr_11022;
})();
if(cljs.core.truth_(inst_10844)){
var statearr_11023_11084 = state_10952__$1;
(statearr_11023_11084[(1)] = (13));

} else {
var statearr_11024_11085 = state_10952__$1;
(statearr_11024_11085[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (18))){
var inst_10879 = (state_10952[(2)]);
var state_10952__$1 = state_10952;
var statearr_11025_11086 = state_10952__$1;
(statearr_11025_11086[(2)] = inst_10879);

(statearr_11025_11086[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (42))){
var state_10952__$1 = state_10952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10952__$1,(45),dchan);
} else {
if((state_val_10953 === (37))){
var inst_10921 = (state_10952[(22)]);
var inst_10822 = (state_10952[(9)]);
var inst_10912 = (state_10952[(23)]);
var inst_10921__$1 = cljs.core.first(inst_10912);
var inst_10922 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10921__$1,inst_10822,done);
var state_10952__$1 = (function (){var statearr_11026 = state_10952;
(statearr_11026[(22)] = inst_10921__$1);

return statearr_11026;
})();
if(cljs.core.truth_(inst_10922)){
var statearr_11027_11087 = state_10952__$1;
(statearr_11027_11087[(1)] = (39));

} else {
var statearr_11028_11088 = state_10952__$1;
(statearr_11028_11088[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10953 === (8))){
var inst_10834 = (state_10952[(15)]);
var inst_10833 = (state_10952[(17)]);
var inst_10836 = (inst_10834 < inst_10833);
var inst_10837 = inst_10836;
var state_10952__$1 = state_10952;
if(cljs.core.truth_(inst_10837)){
var statearr_11029_11089 = state_10952__$1;
(statearr_11029_11089[(1)] = (10));

} else {
var statearr_11030_11090 = state_10952__$1;
(statearr_11030_11090[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__10118__auto__ = null;
var cljs$core$async$mult_$_state_machine__10118__auto____0 = (function (){
var statearr_11031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11031[(0)] = cljs$core$async$mult_$_state_machine__10118__auto__);

(statearr_11031[(1)] = (1));

return statearr_11031;
});
var cljs$core$async$mult_$_state_machine__10118__auto____1 = (function (state_10952){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_10952);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11032){var ex__10121__auto__ = e11032;
var statearr_11033_11091 = state_10952;
(statearr_11033_11091[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_10952[(4)]))){
var statearr_11034_11092 = state_10952;
(statearr_11034_11092[(1)] = cljs.core.first((state_10952[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11093 = state_10952;
state_10952 = G__11093;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10118__auto__ = function(state_10952){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10118__auto____1.call(this,state_10952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10118__auto____0;
cljs$core$async$mult_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10118__auto____1;
return cljs$core$async$mult_$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11035 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11035[(6)] = c__10192__auto___11036);

return statearr_11035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11095 = arguments.length;
switch (G__11095) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_11097 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_11097(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_11098 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_11098(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_11099 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_11099(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_11100 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_11100(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_11101 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_11101(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___11111 = arguments.length;
var i__4830__auto___11112 = (0);
while(true){
if((i__4830__auto___11112 < len__4829__auto___11111)){
args__4835__auto__.push((arguments[i__4830__auto___11112]));

var G__11113 = (i__4830__auto___11112 + (1));
i__4830__auto___11112 = G__11113;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11106){
var map__11107 = p__11106;
var map__11107__$1 = cljs.core.__destructure_map(map__11107);
var opts = map__11107__$1;
var statearr_11108_11114 = state;
(statearr_11108_11114[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11109_11115 = state;
(statearr_11109_11115[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_11110_11116 = state;
(statearr_11110_11116[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11102){
var G__11103 = cljs.core.first(seq11102);
var seq11102__$1 = cljs.core.next(seq11102);
var G__11104 = cljs.core.first(seq11102__$1);
var seq11102__$2 = cljs.core.next(seq11102__$1);
var G__11105 = cljs.core.first(seq11102__$2);
var seq11102__$3 = cljs.core.next(seq11102__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11103,G__11104,G__11105,seq11102__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11117 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11118){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11118 = meta11118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11119,meta11118__$1){
var self__ = this;
var _11119__$1 = this;
return (new cljs.core.async.t_cljs$core$async11117(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11118__$1));
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11119){
var self__ = this;
var _11119__$1 = this;
return self__.meta11118;
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta11118], null);
}));

(cljs.core.async.t_cljs$core$async11117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11117");

(cljs.core.async.t_cljs$core$async11117.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async11117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11117.
 */
cljs.core.async.__GT_t_cljs$core$async11117 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11118){
return (new cljs.core.async.t_cljs$core$async11117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11118));
});

}

return (new cljs.core.async.t_cljs$core$async11117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10192__auto___11232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11187){
var state_val_11188 = (state_11187[(1)]);
if((state_val_11188 === (7))){
var inst_11147 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
if(cljs.core.truth_(inst_11147)){
var statearr_11189_11233 = state_11187__$1;
(statearr_11189_11233[(1)] = (8));

} else {
var statearr_11190_11234 = state_11187__$1;
(statearr_11190_11234[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (20))){
var inst_11140 = (state_11187[(7)]);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11187__$1,(23),out,inst_11140);
} else {
if((state_val_11188 === (1))){
var inst_11123 = calc_state();
var inst_11124 = cljs.core.__destructure_map(inst_11123);
var inst_11125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11124,cljs.core.cst$kw$solos);
var inst_11126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11124,cljs.core.cst$kw$mutes);
var inst_11127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11124,cljs.core.cst$kw$reads);
var inst_11128 = inst_11123;
var state_11187__$1 = (function (){var statearr_11191 = state_11187;
(statearr_11191[(8)] = inst_11125);

(statearr_11191[(9)] = inst_11127);

(statearr_11191[(10)] = inst_11128);

(statearr_11191[(11)] = inst_11126);

return statearr_11191;
})();
var statearr_11192_11235 = state_11187__$1;
(statearr_11192_11235[(2)] = null);

(statearr_11192_11235[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (24))){
var inst_11131 = (state_11187[(12)]);
var inst_11128 = inst_11131;
var state_11187__$1 = (function (){var statearr_11193 = state_11187;
(statearr_11193[(10)] = inst_11128);

return statearr_11193;
})();
var statearr_11194_11236 = state_11187__$1;
(statearr_11194_11236[(2)] = null);

(statearr_11194_11236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (4))){
var inst_11142 = (state_11187[(13)]);
var inst_11140 = (state_11187[(7)]);
var inst_11139 = (state_11187[(2)]);
var inst_11140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11139,(0),null);
var inst_11141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11139,(1),null);
var inst_11142__$1 = (inst_11140__$1 == null);
var state_11187__$1 = (function (){var statearr_11195 = state_11187;
(statearr_11195[(13)] = inst_11142__$1);

(statearr_11195[(7)] = inst_11140__$1);

(statearr_11195[(14)] = inst_11141);

return statearr_11195;
})();
if(cljs.core.truth_(inst_11142__$1)){
var statearr_11196_11237 = state_11187__$1;
(statearr_11196_11237[(1)] = (5));

} else {
var statearr_11197_11238 = state_11187__$1;
(statearr_11197_11238[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (15))){
var inst_11132 = (state_11187[(15)]);
var inst_11161 = (state_11187[(16)]);
var inst_11161__$1 = cljs.core.empty_QMARK_(inst_11132);
var state_11187__$1 = (function (){var statearr_11198 = state_11187;
(statearr_11198[(16)] = inst_11161__$1);

return statearr_11198;
})();
if(inst_11161__$1){
var statearr_11199_11239 = state_11187__$1;
(statearr_11199_11239[(1)] = (17));

} else {
var statearr_11200_11240 = state_11187__$1;
(statearr_11200_11240[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (21))){
var inst_11131 = (state_11187[(12)]);
var inst_11128 = inst_11131;
var state_11187__$1 = (function (){var statearr_11201 = state_11187;
(statearr_11201[(10)] = inst_11128);

return statearr_11201;
})();
var statearr_11202_11241 = state_11187__$1;
(statearr_11202_11241[(2)] = null);

(statearr_11202_11241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (13))){
var inst_11154 = (state_11187[(2)]);
var inst_11155 = calc_state();
var inst_11128 = inst_11155;
var state_11187__$1 = (function (){var statearr_11203 = state_11187;
(statearr_11203[(17)] = inst_11154);

(statearr_11203[(10)] = inst_11128);

return statearr_11203;
})();
var statearr_11204_11242 = state_11187__$1;
(statearr_11204_11242[(2)] = null);

(statearr_11204_11242[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (22))){
var inst_11181 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11205_11243 = state_11187__$1;
(statearr_11205_11243[(2)] = inst_11181);

(statearr_11205_11243[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (6))){
var inst_11141 = (state_11187[(14)]);
var inst_11145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11141,change);
var state_11187__$1 = state_11187;
var statearr_11206_11244 = state_11187__$1;
(statearr_11206_11244[(2)] = inst_11145);

(statearr_11206_11244[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (25))){
var state_11187__$1 = state_11187;
var statearr_11207_11245 = state_11187__$1;
(statearr_11207_11245[(2)] = null);

(statearr_11207_11245[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (17))){
var inst_11133 = (state_11187[(18)]);
var inst_11141 = (state_11187[(14)]);
var inst_11163 = (inst_11133.cljs$core$IFn$_invoke$arity$1 ? inst_11133.cljs$core$IFn$_invoke$arity$1(inst_11141) : inst_11133.call(null,inst_11141));
var inst_11164 = cljs.core.not(inst_11163);
var state_11187__$1 = state_11187;
var statearr_11208_11246 = state_11187__$1;
(statearr_11208_11246[(2)] = inst_11164);

(statearr_11208_11246[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (3))){
var inst_11185 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11187__$1,inst_11185);
} else {
if((state_val_11188 === (12))){
var state_11187__$1 = state_11187;
var statearr_11209_11247 = state_11187__$1;
(statearr_11209_11247[(2)] = null);

(statearr_11209_11247[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (2))){
var inst_11131 = (state_11187[(12)]);
var inst_11128 = (state_11187[(10)]);
var inst_11131__$1 = cljs.core.__destructure_map(inst_11128);
var inst_11132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11131__$1,cljs.core.cst$kw$solos);
var inst_11133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11131__$1,cljs.core.cst$kw$mutes);
var inst_11134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11131__$1,cljs.core.cst$kw$reads);
var state_11187__$1 = (function (){var statearr_11210 = state_11187;
(statearr_11210[(18)] = inst_11133);

(statearr_11210[(12)] = inst_11131__$1);

(statearr_11210[(15)] = inst_11132);

return statearr_11210;
})();
return cljs.core.async.ioc_alts_BANG_(state_11187__$1,(4),inst_11134);
} else {
if((state_val_11188 === (23))){
var inst_11172 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
if(cljs.core.truth_(inst_11172)){
var statearr_11211_11248 = state_11187__$1;
(statearr_11211_11248[(1)] = (24));

} else {
var statearr_11212_11249 = state_11187__$1;
(statearr_11212_11249[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (19))){
var inst_11167 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11213_11250 = state_11187__$1;
(statearr_11213_11250[(2)] = inst_11167);

(statearr_11213_11250[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (11))){
var inst_11141 = (state_11187[(14)]);
var inst_11151 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11141);
var state_11187__$1 = state_11187;
var statearr_11214_11251 = state_11187__$1;
(statearr_11214_11251[(2)] = inst_11151);

(statearr_11214_11251[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (9))){
var inst_11132 = (state_11187[(15)]);
var inst_11141 = (state_11187[(14)]);
var inst_11158 = (state_11187[(19)]);
var inst_11158__$1 = (inst_11132.cljs$core$IFn$_invoke$arity$1 ? inst_11132.cljs$core$IFn$_invoke$arity$1(inst_11141) : inst_11132.call(null,inst_11141));
var state_11187__$1 = (function (){var statearr_11215 = state_11187;
(statearr_11215[(19)] = inst_11158__$1);

return statearr_11215;
})();
if(cljs.core.truth_(inst_11158__$1)){
var statearr_11216_11252 = state_11187__$1;
(statearr_11216_11252[(1)] = (14));

} else {
var statearr_11217_11253 = state_11187__$1;
(statearr_11217_11253[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (5))){
var inst_11142 = (state_11187[(13)]);
var state_11187__$1 = state_11187;
var statearr_11218_11254 = state_11187__$1;
(statearr_11218_11254[(2)] = inst_11142);

(statearr_11218_11254[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (14))){
var inst_11158 = (state_11187[(19)]);
var state_11187__$1 = state_11187;
var statearr_11219_11255 = state_11187__$1;
(statearr_11219_11255[(2)] = inst_11158);

(statearr_11219_11255[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (26))){
var inst_11177 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11220_11256 = state_11187__$1;
(statearr_11220_11256[(2)] = inst_11177);

(statearr_11220_11256[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (16))){
var inst_11169 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
if(cljs.core.truth_(inst_11169)){
var statearr_11221_11257 = state_11187__$1;
(statearr_11221_11257[(1)] = (20));

} else {
var statearr_11222_11258 = state_11187__$1;
(statearr_11222_11258[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (10))){
var inst_11183 = (state_11187[(2)]);
var state_11187__$1 = state_11187;
var statearr_11223_11259 = state_11187__$1;
(statearr_11223_11259[(2)] = inst_11183);

(statearr_11223_11259[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (18))){
var inst_11161 = (state_11187[(16)]);
var state_11187__$1 = state_11187;
var statearr_11224_11260 = state_11187__$1;
(statearr_11224_11260[(2)] = inst_11161);

(statearr_11224_11260[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11188 === (8))){
var inst_11140 = (state_11187[(7)]);
var inst_11149 = (inst_11140 == null);
var state_11187__$1 = state_11187;
if(cljs.core.truth_(inst_11149)){
var statearr_11225_11261 = state_11187__$1;
(statearr_11225_11261[(1)] = (11));

} else {
var statearr_11226_11262 = state_11187__$1;
(statearr_11226_11262[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__10118__auto__ = null;
var cljs$core$async$mix_$_state_machine__10118__auto____0 = (function (){
var statearr_11227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11227[(0)] = cljs$core$async$mix_$_state_machine__10118__auto__);

(statearr_11227[(1)] = (1));

return statearr_11227;
});
var cljs$core$async$mix_$_state_machine__10118__auto____1 = (function (state_11187){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11187);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11228){var ex__10121__auto__ = e11228;
var statearr_11229_11263 = state_11187;
(statearr_11229_11263[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11187[(4)]))){
var statearr_11230_11264 = state_11187;
(statearr_11230_11264[(1)] = cljs.core.first((state_11187[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11265 = state_11187;
state_11187 = G__11265;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10118__auto__ = function(state_11187){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10118__auto____1.call(this,state_11187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10118__auto____0;
cljs$core$async$mix_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10118__auto____1;
return cljs$core$async$mix_$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11231 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11231[(6)] = c__10192__auto___11232);

return statearr_11231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_11268 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_11268(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_11269 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_11269(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_11270 = (function() {
var G__11271 = null;
var G__11271__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__11271__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__11271 = function(p,v){
switch(arguments.length){
case 1:
return G__11271__1.call(this,p);
case 2:
return G__11271__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11271.cljs$core$IFn$_invoke$arity$1 = G__11271__1;
G__11271.cljs$core$IFn$_invoke$arity$2 = G__11271__2;
return G__11271;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11267 = arguments.length;
switch (G__11267) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_11270.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_11270.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11275 = arguments.length;
switch (G__11275) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11273_SHARP_){
if(cljs.core.truth_((p1__11273_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11273_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11273_SHARP_.call(null,topic)))){
return p1__11273_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11273_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11276 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11277){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11277 = meta11277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11278,meta11277__$1){
var self__ = this;
var _11278__$1 = this;
return (new cljs.core.async.t_cljs$core$async11276(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11277__$1));
}));

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11278){
var self__ = this;
var _11278__$1 = this;
return self__.meta11277;
}));

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta11277], null);
}));

(cljs.core.async.t_cljs$core$async11276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11276");

(cljs.core.async.t_cljs$core$async11276.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async11276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11276.
 */
cljs.core.async.__GT_t_cljs$core$async11276 = (function cljs$core$async$__GT_t_cljs$core$async11276(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11277){
return (new cljs.core.async.t_cljs$core$async11276(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11277));
});

}

return (new cljs.core.async.t_cljs$core$async11276(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10192__auto___11397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11350){
var state_val_11351 = (state_11350[(1)]);
if((state_val_11351 === (7))){
var inst_11346 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11352_11398 = state_11350__$1;
(statearr_11352_11398[(2)] = inst_11346);

(statearr_11352_11398[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (20))){
var state_11350__$1 = state_11350;
var statearr_11353_11399 = state_11350__$1;
(statearr_11353_11399[(2)] = null);

(statearr_11353_11399[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (1))){
var state_11350__$1 = state_11350;
var statearr_11354_11400 = state_11350__$1;
(statearr_11354_11400[(2)] = null);

(statearr_11354_11400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (24))){
var inst_11329 = (state_11350[(7)]);
var inst_11338 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11329);
var state_11350__$1 = state_11350;
var statearr_11355_11401 = state_11350__$1;
(statearr_11355_11401[(2)] = inst_11338);

(statearr_11355_11401[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (4))){
var inst_11281 = (state_11350[(8)]);
var inst_11281__$1 = (state_11350[(2)]);
var inst_11282 = (inst_11281__$1 == null);
var state_11350__$1 = (function (){var statearr_11356 = state_11350;
(statearr_11356[(8)] = inst_11281__$1);

return statearr_11356;
})();
if(cljs.core.truth_(inst_11282)){
var statearr_11357_11402 = state_11350__$1;
(statearr_11357_11402[(1)] = (5));

} else {
var statearr_11358_11403 = state_11350__$1;
(statearr_11358_11403[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (15))){
var inst_11323 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11359_11404 = state_11350__$1;
(statearr_11359_11404[(2)] = inst_11323);

(statearr_11359_11404[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (21))){
var inst_11343 = (state_11350[(2)]);
var state_11350__$1 = (function (){var statearr_11360 = state_11350;
(statearr_11360[(9)] = inst_11343);

return statearr_11360;
})();
var statearr_11361_11405 = state_11350__$1;
(statearr_11361_11405[(2)] = null);

(statearr_11361_11405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (13))){
var inst_11305 = (state_11350[(10)]);
var inst_11307 = cljs.core.chunked_seq_QMARK_(inst_11305);
var state_11350__$1 = state_11350;
if(inst_11307){
var statearr_11362_11406 = state_11350__$1;
(statearr_11362_11406[(1)] = (16));

} else {
var statearr_11363_11407 = state_11350__$1;
(statearr_11363_11407[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (22))){
var inst_11335 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
if(cljs.core.truth_(inst_11335)){
var statearr_11364_11408 = state_11350__$1;
(statearr_11364_11408[(1)] = (23));

} else {
var statearr_11365_11409 = state_11350__$1;
(statearr_11365_11409[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (6))){
var inst_11331 = (state_11350[(11)]);
var inst_11281 = (state_11350[(8)]);
var inst_11329 = (state_11350[(7)]);
var inst_11329__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11281) : topic_fn.call(null,inst_11281));
var inst_11330 = cljs.core.deref(mults);
var inst_11331__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11330,inst_11329__$1);
var state_11350__$1 = (function (){var statearr_11366 = state_11350;
(statearr_11366[(11)] = inst_11331__$1);

(statearr_11366[(7)] = inst_11329__$1);

return statearr_11366;
})();
if(cljs.core.truth_(inst_11331__$1)){
var statearr_11367_11410 = state_11350__$1;
(statearr_11367_11410[(1)] = (19));

} else {
var statearr_11368_11411 = state_11350__$1;
(statearr_11368_11411[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (25))){
var inst_11340 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11369_11412 = state_11350__$1;
(statearr_11369_11412[(2)] = inst_11340);

(statearr_11369_11412[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (17))){
var inst_11305 = (state_11350[(10)]);
var inst_11314 = cljs.core.first(inst_11305);
var inst_11315 = cljs.core.async.muxch_STAR_(inst_11314);
var inst_11316 = cljs.core.async.close_BANG_(inst_11315);
var inst_11317 = cljs.core.next(inst_11305);
var inst_11291 = inst_11317;
var inst_11292 = null;
var inst_11293 = (0);
var inst_11294 = (0);
var state_11350__$1 = (function (){var statearr_11370 = state_11350;
(statearr_11370[(12)] = inst_11292);

(statearr_11370[(13)] = inst_11291);

(statearr_11370[(14)] = inst_11294);

(statearr_11370[(15)] = inst_11316);

(statearr_11370[(16)] = inst_11293);

return statearr_11370;
})();
var statearr_11371_11413 = state_11350__$1;
(statearr_11371_11413[(2)] = null);

(statearr_11371_11413[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (3))){
var inst_11348 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11350__$1,inst_11348);
} else {
if((state_val_11351 === (12))){
var inst_11325 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11372_11414 = state_11350__$1;
(statearr_11372_11414[(2)] = inst_11325);

(statearr_11372_11414[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (2))){
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11350__$1,(4),ch);
} else {
if((state_val_11351 === (23))){
var state_11350__$1 = state_11350;
var statearr_11373_11415 = state_11350__$1;
(statearr_11373_11415[(2)] = null);

(statearr_11373_11415[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (19))){
var inst_11331 = (state_11350[(11)]);
var inst_11281 = (state_11350[(8)]);
var inst_11333 = cljs.core.async.muxch_STAR_(inst_11331);
var state_11350__$1 = state_11350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11350__$1,(22),inst_11333,inst_11281);
} else {
if((state_val_11351 === (11))){
var inst_11305 = (state_11350[(10)]);
var inst_11291 = (state_11350[(13)]);
var inst_11305__$1 = cljs.core.seq(inst_11291);
var state_11350__$1 = (function (){var statearr_11374 = state_11350;
(statearr_11374[(10)] = inst_11305__$1);

return statearr_11374;
})();
if(inst_11305__$1){
var statearr_11375_11416 = state_11350__$1;
(statearr_11375_11416[(1)] = (13));

} else {
var statearr_11376_11417 = state_11350__$1;
(statearr_11376_11417[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (9))){
var inst_11327 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11377_11418 = state_11350__$1;
(statearr_11377_11418[(2)] = inst_11327);

(statearr_11377_11418[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (5))){
var inst_11288 = cljs.core.deref(mults);
var inst_11289 = cljs.core.vals(inst_11288);
var inst_11290 = cljs.core.seq(inst_11289);
var inst_11291 = inst_11290;
var inst_11292 = null;
var inst_11293 = (0);
var inst_11294 = (0);
var state_11350__$1 = (function (){var statearr_11378 = state_11350;
(statearr_11378[(12)] = inst_11292);

(statearr_11378[(13)] = inst_11291);

(statearr_11378[(14)] = inst_11294);

(statearr_11378[(16)] = inst_11293);

return statearr_11378;
})();
var statearr_11379_11419 = state_11350__$1;
(statearr_11379_11419[(2)] = null);

(statearr_11379_11419[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (14))){
var state_11350__$1 = state_11350;
var statearr_11383_11420 = state_11350__$1;
(statearr_11383_11420[(2)] = null);

(statearr_11383_11420[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (16))){
var inst_11305 = (state_11350[(10)]);
var inst_11309 = cljs.core.chunk_first(inst_11305);
var inst_11310 = cljs.core.chunk_rest(inst_11305);
var inst_11311 = cljs.core.count(inst_11309);
var inst_11291 = inst_11310;
var inst_11292 = inst_11309;
var inst_11293 = inst_11311;
var inst_11294 = (0);
var state_11350__$1 = (function (){var statearr_11384 = state_11350;
(statearr_11384[(12)] = inst_11292);

(statearr_11384[(13)] = inst_11291);

(statearr_11384[(14)] = inst_11294);

(statearr_11384[(16)] = inst_11293);

return statearr_11384;
})();
var statearr_11385_11421 = state_11350__$1;
(statearr_11385_11421[(2)] = null);

(statearr_11385_11421[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (10))){
var inst_11292 = (state_11350[(12)]);
var inst_11291 = (state_11350[(13)]);
var inst_11294 = (state_11350[(14)]);
var inst_11293 = (state_11350[(16)]);
var inst_11299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11292,inst_11294);
var inst_11300 = cljs.core.async.muxch_STAR_(inst_11299);
var inst_11301 = cljs.core.async.close_BANG_(inst_11300);
var inst_11302 = (inst_11294 + (1));
var tmp11380 = inst_11292;
var tmp11381 = inst_11291;
var tmp11382 = inst_11293;
var inst_11291__$1 = tmp11381;
var inst_11292__$1 = tmp11380;
var inst_11293__$1 = tmp11382;
var inst_11294__$1 = inst_11302;
var state_11350__$1 = (function (){var statearr_11386 = state_11350;
(statearr_11386[(12)] = inst_11292__$1);

(statearr_11386[(17)] = inst_11301);

(statearr_11386[(13)] = inst_11291__$1);

(statearr_11386[(14)] = inst_11294__$1);

(statearr_11386[(16)] = inst_11293__$1);

return statearr_11386;
})();
var statearr_11387_11422 = state_11350__$1;
(statearr_11387_11422[(2)] = null);

(statearr_11387_11422[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (18))){
var inst_11320 = (state_11350[(2)]);
var state_11350__$1 = state_11350;
var statearr_11388_11423 = state_11350__$1;
(statearr_11388_11423[(2)] = inst_11320);

(statearr_11388_11423[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11351 === (8))){
var inst_11294 = (state_11350[(14)]);
var inst_11293 = (state_11350[(16)]);
var inst_11296 = (inst_11294 < inst_11293);
var inst_11297 = inst_11296;
var state_11350__$1 = state_11350;
if(cljs.core.truth_(inst_11297)){
var statearr_11389_11424 = state_11350__$1;
(statearr_11389_11424[(1)] = (10));

} else {
var statearr_11390_11425 = state_11350__$1;
(statearr_11390_11425[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_11391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11391[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_11391[(1)] = (1));

return statearr_11391;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_11350){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11350);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11392){var ex__10121__auto__ = e11392;
var statearr_11393_11426 = state_11350;
(statearr_11393_11426[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11350[(4)]))){
var statearr_11394_11427 = state_11350;
(statearr_11394_11427[(1)] = cljs.core.first((state_11350[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11428 = state_11350;
state_11350 = G__11428;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_11350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_11350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11395 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11395[(6)] = c__10192__auto___11397);

return statearr_11395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11430 = arguments.length;
switch (G__11430) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11433 = arguments.length;
switch (G__11433) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11436 = arguments.length;
switch (G__11436) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10192__auto___11514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11479){
var state_val_11480 = (state_11479[(1)]);
if((state_val_11480 === (7))){
var state_11479__$1 = state_11479;
var statearr_11481_11515 = state_11479__$1;
(statearr_11481_11515[(2)] = null);

(statearr_11481_11515[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (1))){
var state_11479__$1 = state_11479;
var statearr_11482_11516 = state_11479__$1;
(statearr_11482_11516[(2)] = null);

(statearr_11482_11516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (4))){
var inst_11439 = (state_11479[(7)]);
var inst_11440 = (state_11479[(8)]);
var inst_11442 = (inst_11440 < inst_11439);
var state_11479__$1 = state_11479;
if(cljs.core.truth_(inst_11442)){
var statearr_11483_11517 = state_11479__$1;
(statearr_11483_11517[(1)] = (6));

} else {
var statearr_11484_11518 = state_11479__$1;
(statearr_11484_11518[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (15))){
var inst_11465 = (state_11479[(9)]);
var inst_11470 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11465);
var state_11479__$1 = state_11479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11479__$1,(17),out,inst_11470);
} else {
if((state_val_11480 === (13))){
var inst_11465 = (state_11479[(9)]);
var inst_11465__$1 = (state_11479[(2)]);
var inst_11466 = cljs.core.some(cljs.core.nil_QMARK_,inst_11465__$1);
var state_11479__$1 = (function (){var statearr_11485 = state_11479;
(statearr_11485[(9)] = inst_11465__$1);

return statearr_11485;
})();
if(cljs.core.truth_(inst_11466)){
var statearr_11486_11519 = state_11479__$1;
(statearr_11486_11519[(1)] = (14));

} else {
var statearr_11487_11520 = state_11479__$1;
(statearr_11487_11520[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (6))){
var state_11479__$1 = state_11479;
var statearr_11488_11521 = state_11479__$1;
(statearr_11488_11521[(2)] = null);

(statearr_11488_11521[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (17))){
var inst_11472 = (state_11479[(2)]);
var state_11479__$1 = (function (){var statearr_11490 = state_11479;
(statearr_11490[(10)] = inst_11472);

return statearr_11490;
})();
var statearr_11491_11522 = state_11479__$1;
(statearr_11491_11522[(2)] = null);

(statearr_11491_11522[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (3))){
var inst_11477 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11479__$1,inst_11477);
} else {
if((state_val_11480 === (12))){
var _ = (function (){var statearr_11492 = state_11479;
(statearr_11492[(4)] = cljs.core.rest((state_11479[(4)])));

return statearr_11492;
})();
var state_11479__$1 = state_11479;
var ex11489 = (state_11479__$1[(2)]);
var statearr_11493_11523 = state_11479__$1;
(statearr_11493_11523[(5)] = ex11489);


if((ex11489 instanceof Object)){
var statearr_11494_11524 = state_11479__$1;
(statearr_11494_11524[(1)] = (11));

(statearr_11494_11524[(5)] = null);

} else {
throw ex11489;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (2))){
var inst_11438 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11439 = cnt;
var inst_11440 = (0);
var state_11479__$1 = (function (){var statearr_11495 = state_11479;
(statearr_11495[(11)] = inst_11438);

(statearr_11495[(7)] = inst_11439);

(statearr_11495[(8)] = inst_11440);

return statearr_11495;
})();
var statearr_11496_11525 = state_11479__$1;
(statearr_11496_11525[(2)] = null);

(statearr_11496_11525[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (11))){
var inst_11444 = (state_11479[(2)]);
var inst_11445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11479__$1 = (function (){var statearr_11497 = state_11479;
(statearr_11497[(12)] = inst_11444);

return statearr_11497;
})();
var statearr_11498_11526 = state_11479__$1;
(statearr_11498_11526[(2)] = inst_11445);

(statearr_11498_11526[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (9))){
var inst_11440 = (state_11479[(8)]);
var _ = (function (){var statearr_11499 = state_11479;
(statearr_11499[(4)] = cljs.core.cons((12),(state_11479[(4)])));

return statearr_11499;
})();
var inst_11451 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11440) : chs__$1.call(null,inst_11440));
var inst_11452 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11440) : done.call(null,inst_11440));
var inst_11453 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11451,inst_11452);
var ___$1 = (function (){var statearr_11500 = state_11479;
(statearr_11500[(4)] = cljs.core.rest((state_11479[(4)])));

return statearr_11500;
})();
var state_11479__$1 = state_11479;
var statearr_11501_11527 = state_11479__$1;
(statearr_11501_11527[(2)] = inst_11453);

(statearr_11501_11527[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (5))){
var inst_11463 = (state_11479[(2)]);
var state_11479__$1 = (function (){var statearr_11502 = state_11479;
(statearr_11502[(13)] = inst_11463);

return statearr_11502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11479__$1,(13),dchan);
} else {
if((state_val_11480 === (14))){
var inst_11468 = cljs.core.async.close_BANG_(out);
var state_11479__$1 = state_11479;
var statearr_11503_11528 = state_11479__$1;
(statearr_11503_11528[(2)] = inst_11468);

(statearr_11503_11528[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (16))){
var inst_11475 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
var statearr_11504_11529 = state_11479__$1;
(statearr_11504_11529[(2)] = inst_11475);

(statearr_11504_11529[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (10))){
var inst_11440 = (state_11479[(8)]);
var inst_11456 = (state_11479[(2)]);
var inst_11457 = (inst_11440 + (1));
var inst_11440__$1 = inst_11457;
var state_11479__$1 = (function (){var statearr_11505 = state_11479;
(statearr_11505[(14)] = inst_11456);

(statearr_11505[(8)] = inst_11440__$1);

return statearr_11505;
})();
var statearr_11506_11530 = state_11479__$1;
(statearr_11506_11530[(2)] = null);

(statearr_11506_11530[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11480 === (8))){
var inst_11461 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
var statearr_11507_11531 = state_11479__$1;
(statearr_11507_11531[(2)] = inst_11461);

(statearr_11507_11531[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_11508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11508[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_11508[(1)] = (1));

return statearr_11508;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_11479){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11479);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11509){var ex__10121__auto__ = e11509;
var statearr_11510_11532 = state_11479;
(statearr_11510_11532[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11479[(4)]))){
var statearr_11511_11533 = state_11479;
(statearr_11511_11533[(1)] = cljs.core.first((state_11479[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11534 = state_11479;
state_11479 = G__11534;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_11479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_11479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11512 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11512[(6)] = c__10192__auto___11514);

return statearr_11512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__11537 = arguments.length;
switch (G__11537) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10192__auto___11592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11569){
var state_val_11570 = (state_11569[(1)]);
if((state_val_11570 === (7))){
var inst_11549 = (state_11569[(7)]);
var inst_11548 = (state_11569[(8)]);
var inst_11548__$1 = (state_11569[(2)]);
var inst_11549__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11548__$1,(0),null);
var inst_11550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11548__$1,(1),null);
var inst_11551 = (inst_11549__$1 == null);
var state_11569__$1 = (function (){var statearr_11571 = state_11569;
(statearr_11571[(7)] = inst_11549__$1);

(statearr_11571[(8)] = inst_11548__$1);

(statearr_11571[(9)] = inst_11550);

return statearr_11571;
})();
if(cljs.core.truth_(inst_11551)){
var statearr_11572_11593 = state_11569__$1;
(statearr_11572_11593[(1)] = (8));

} else {
var statearr_11573_11594 = state_11569__$1;
(statearr_11573_11594[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11570 === (1))){
var inst_11538 = cljs.core.vec(chs);
var inst_11539 = inst_11538;
var state_11569__$1 = (function (){var statearr_11574 = state_11569;
(statearr_11574[(10)] = inst_11539);

return statearr_11574;
})();
var statearr_11575_11595 = state_11569__$1;
(statearr_11575_11595[(2)] = null);

(statearr_11575_11595[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11570 === (4))){
var inst_11539 = (state_11569[(10)]);
var state_11569__$1 = state_11569;
return cljs.core.async.ioc_alts_BANG_(state_11569__$1,(7),inst_11539);
} else {
if((state_val_11570 === (6))){
var inst_11565 = (state_11569[(2)]);
var state_11569__$1 = state_11569;
var statearr_11576_11596 = state_11569__$1;
(statearr_11576_11596[(2)] = inst_11565);

(statearr_11576_11596[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11570 === (3))){
var inst_11567 = (state_11569[(2)]);
var state_11569__$1 = state_11569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11569__$1,inst_11567);
} else {
if((state_val_11570 === (2))){
var inst_11539 = (state_11569[(10)]);
var inst_11541 = cljs.core.count(inst_11539);
var inst_11542 = (inst_11541 > (0));
var state_11569__$1 = state_11569;
if(cljs.core.truth_(inst_11542)){
var statearr_11578_11597 = state_11569__$1;
(statearr_11578_11597[(1)] = (4));

} else {
var statearr_11579_11598 = state_11569__$1;
(statearr_11579_11598[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11570 === (11))){
var inst_11539 = (state_11569[(10)]);
var inst_11558 = (state_11569[(2)]);
var tmp11577 = inst_11539;
var inst_11539__$1 = tmp11577;
var state_11569__$1 = (function (){var statearr_11580 = state_11569;
(statearr_11580[(10)] = inst_11539__$1);

(statearr_11580[(11)] = inst_11558);

return statearr_11580;
})();
var statearr_11581_11599 = state_11569__$1;
(statearr_11581_11599[(2)] = null);

(statearr_11581_11599[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11570 === (9))){
var inst_11549 = (state_11569[(7)]);
var state_11569__$1 = state_11569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11569__$1,(11),out,inst_11549);
} else {
if((state_val_11570 === (5))){
var inst_11563 = cljs.core.async.close_BANG_(out);
var state_11569__$1 = state_11569;
var statearr_11582_11600 = state_11569__$1;
(statearr_11582_11600[(2)] = inst_11563);

(statearr_11582_11600[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11570 === (10))){
var inst_11561 = (state_11569[(2)]);
var state_11569__$1 = state_11569;
var statearr_11583_11601 = state_11569__$1;
(statearr_11583_11601[(2)] = inst_11561);

(statearr_11583_11601[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11570 === (8))){
var inst_11549 = (state_11569[(7)]);
var inst_11548 = (state_11569[(8)]);
var inst_11550 = (state_11569[(9)]);
var inst_11539 = (state_11569[(10)]);
var inst_11553 = (function (){var cs = inst_11539;
var vec__11544 = inst_11548;
var v = inst_11549;
var c = inst_11550;
return (function (p1__11535_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__11535_SHARP_);
});
})();
var inst_11554 = cljs.core.filterv(inst_11553,inst_11539);
var inst_11539__$1 = inst_11554;
var state_11569__$1 = (function (){var statearr_11584 = state_11569;
(statearr_11584[(10)] = inst_11539__$1);

return statearr_11584;
})();
var statearr_11585_11602 = state_11569__$1;
(statearr_11585_11602[(2)] = null);

(statearr_11585_11602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_11586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11586[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_11586[(1)] = (1));

return statearr_11586;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_11569){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11569);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11587){var ex__10121__auto__ = e11587;
var statearr_11588_11603 = state_11569;
(statearr_11588_11603[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11569[(4)]))){
var statearr_11589_11604 = state_11569;
(statearr_11589_11604[(1)] = cljs.core.first((state_11569[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11605 = state_11569;
state_11569 = G__11605;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_11569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_11569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11590 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11590[(6)] = c__10192__auto___11592);

return statearr_11590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11607 = arguments.length;
switch (G__11607) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10192__auto___11653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11631){
var state_val_11632 = (state_11631[(1)]);
if((state_val_11632 === (7))){
var inst_11613 = (state_11631[(7)]);
var inst_11613__$1 = (state_11631[(2)]);
var inst_11614 = (inst_11613__$1 == null);
var inst_11615 = cljs.core.not(inst_11614);
var state_11631__$1 = (function (){var statearr_11633 = state_11631;
(statearr_11633[(7)] = inst_11613__$1);

return statearr_11633;
})();
if(inst_11615){
var statearr_11634_11654 = state_11631__$1;
(statearr_11634_11654[(1)] = (8));

} else {
var statearr_11635_11655 = state_11631__$1;
(statearr_11635_11655[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (1))){
var inst_11608 = (0);
var state_11631__$1 = (function (){var statearr_11636 = state_11631;
(statearr_11636[(8)] = inst_11608);

return statearr_11636;
})();
var statearr_11637_11656 = state_11631__$1;
(statearr_11637_11656[(2)] = null);

(statearr_11637_11656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (4))){
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11631__$1,(7),ch);
} else {
if((state_val_11632 === (6))){
var inst_11626 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11638_11657 = state_11631__$1;
(statearr_11638_11657[(2)] = inst_11626);

(statearr_11638_11657[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (3))){
var inst_11628 = (state_11631[(2)]);
var inst_11629 = cljs.core.async.close_BANG_(out);
var state_11631__$1 = (function (){var statearr_11639 = state_11631;
(statearr_11639[(9)] = inst_11628);

return statearr_11639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11631__$1,inst_11629);
} else {
if((state_val_11632 === (2))){
var inst_11608 = (state_11631[(8)]);
var inst_11610 = (inst_11608 < n);
var state_11631__$1 = state_11631;
if(cljs.core.truth_(inst_11610)){
var statearr_11640_11658 = state_11631__$1;
(statearr_11640_11658[(1)] = (4));

} else {
var statearr_11641_11659 = state_11631__$1;
(statearr_11641_11659[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (11))){
var inst_11608 = (state_11631[(8)]);
var inst_11618 = (state_11631[(2)]);
var inst_11619 = (inst_11608 + (1));
var inst_11608__$1 = inst_11619;
var state_11631__$1 = (function (){var statearr_11642 = state_11631;
(statearr_11642[(10)] = inst_11618);

(statearr_11642[(8)] = inst_11608__$1);

return statearr_11642;
})();
var statearr_11643_11660 = state_11631__$1;
(statearr_11643_11660[(2)] = null);

(statearr_11643_11660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (9))){
var state_11631__$1 = state_11631;
var statearr_11644_11661 = state_11631__$1;
(statearr_11644_11661[(2)] = null);

(statearr_11644_11661[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (5))){
var state_11631__$1 = state_11631;
var statearr_11645_11662 = state_11631__$1;
(statearr_11645_11662[(2)] = null);

(statearr_11645_11662[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (10))){
var inst_11623 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11646_11663 = state_11631__$1;
(statearr_11646_11663[(2)] = inst_11623);

(statearr_11646_11663[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11632 === (8))){
var inst_11613 = (state_11631[(7)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11631__$1,(11),out,inst_11613);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_11647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11647[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_11647[(1)] = (1));

return statearr_11647;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_11631){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11631);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11648){var ex__10121__auto__ = e11648;
var statearr_11649_11664 = state_11631;
(statearr_11649_11664[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11631[(4)]))){
var statearr_11650_11665 = state_11631;
(statearr_11650_11665[(1)] = cljs.core.first((state_11631[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11666 = state_11631;
state_11631 = G__11666;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_11631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_11631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11651 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11651[(6)] = c__10192__auto___11653);

return statearr_11651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11668 = (function (f,ch,meta11669){
this.f = f;
this.ch = ch;
this.meta11669 = meta11669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11670,meta11669__$1){
var self__ = this;
var _11670__$1 = this;
return (new cljs.core.async.t_cljs$core$async11668(self__.f,self__.ch,meta11669__$1));
}));

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11670){
var self__ = this;
var _11670__$1 = this;
return self__.meta11669;
}));

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11671 = (function (f,ch,meta11669,_,fn1,meta11672){
this.f = f;
this.ch = ch;
this.meta11669 = meta11669;
this._ = _;
this.fn1 = fn1;
this.meta11672 = meta11672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11673,meta11672__$1){
var self__ = this;
var _11673__$1 = this;
return (new cljs.core.async.t_cljs$core$async11671(self__.f,self__.ch,self__.meta11669,self__._,self__.fn1,meta11672__$1));
}));

(cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11673){
var self__ = this;
var _11673__$1 = this;
return self__.meta11672;
}));

(cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__11667_SHARP_){
var G__11674 = (((p1__11667_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11667_SHARP_) : self__.f.call(null,p1__11667_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__11674) : f1.call(null,G__11674));
});
}));

(cljs.core.async.t_cljs$core$async11671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta11669,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async11668], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta11672], null);
}));

(cljs.core.async.t_cljs$core$async11671.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11671");

(cljs.core.async.t_cljs$core$async11671.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async11671");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11671.
 */
cljs.core.async.__GT_t_cljs$core$async11671 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11671(f__$1,ch__$1,meta11669__$1,___$2,fn1__$1,meta11672){
return (new cljs.core.async.t_cljs$core$async11671(f__$1,ch__$1,meta11669__$1,___$2,fn1__$1,meta11672));
});

}

return (new cljs.core.async.t_cljs$core$async11671(self__.f,self__.ch,self__.meta11669,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__11675 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__11675) : self__.f.call(null,G__11675));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11668.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async11668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta11669], null);
}));

(cljs.core.async.t_cljs$core$async11668.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11668");

(cljs.core.async.t_cljs$core$async11668.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async11668");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11668.
 */
cljs.core.async.__GT_t_cljs$core$async11668 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11668(f__$1,ch__$1,meta11669){
return (new cljs.core.async.t_cljs$core$async11668(f__$1,ch__$1,meta11669));
});

}

return (new cljs.core.async.t_cljs$core$async11668(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11676 = (function (f,ch,meta11677){
this.f = f;
this.ch = ch;
this.meta11677 = meta11677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11678,meta11677__$1){
var self__ = this;
var _11678__$1 = this;
return (new cljs.core.async.t_cljs$core$async11676(self__.f,self__.ch,meta11677__$1));
}));

(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11678){
var self__ = this;
var _11678__$1 = this;
return self__.meta11677;
}));

(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async11676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta11677], null);
}));

(cljs.core.async.t_cljs$core$async11676.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11676");

(cljs.core.async.t_cljs$core$async11676.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async11676");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11676.
 */
cljs.core.async.__GT_t_cljs$core$async11676 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11676(f__$1,ch__$1,meta11677){
return (new cljs.core.async.t_cljs$core$async11676(f__$1,ch__$1,meta11677));
});

}

return (new cljs.core.async.t_cljs$core$async11676(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11679 = (function (p,ch,meta11680){
this.p = p;
this.ch = ch;
this.meta11680 = meta11680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11681,meta11680__$1){
var self__ = this;
var _11681__$1 = this;
return (new cljs.core.async.t_cljs$core$async11679(self__.p,self__.ch,meta11680__$1));
}));

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11681){
var self__ = this;
var _11681__$1 = this;
return self__.meta11680;
}));

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async11679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta11680], null);
}));

(cljs.core.async.t_cljs$core$async11679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11679");

(cljs.core.async.t_cljs$core$async11679.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async11679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11679.
 */
cljs.core.async.__GT_t_cljs$core$async11679 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11679(p__$1,ch__$1,meta11680){
return (new cljs.core.async.t_cljs$core$async11679(p__$1,ch__$1,meta11680));
});

}

return (new cljs.core.async.t_cljs$core$async11679(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11683 = arguments.length;
switch (G__11683) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10192__auto___11724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11704){
var state_val_11705 = (state_11704[(1)]);
if((state_val_11705 === (7))){
var inst_11700 = (state_11704[(2)]);
var state_11704__$1 = state_11704;
var statearr_11706_11725 = state_11704__$1;
(statearr_11706_11725[(2)] = inst_11700);

(statearr_11706_11725[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (1))){
var state_11704__$1 = state_11704;
var statearr_11707_11726 = state_11704__$1;
(statearr_11707_11726[(2)] = null);

(statearr_11707_11726[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (4))){
var inst_11686 = (state_11704[(7)]);
var inst_11686__$1 = (state_11704[(2)]);
var inst_11687 = (inst_11686__$1 == null);
var state_11704__$1 = (function (){var statearr_11708 = state_11704;
(statearr_11708[(7)] = inst_11686__$1);

return statearr_11708;
})();
if(cljs.core.truth_(inst_11687)){
var statearr_11709_11727 = state_11704__$1;
(statearr_11709_11727[(1)] = (5));

} else {
var statearr_11710_11728 = state_11704__$1;
(statearr_11710_11728[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (6))){
var inst_11686 = (state_11704[(7)]);
var inst_11691 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11686) : p.call(null,inst_11686));
var state_11704__$1 = state_11704;
if(cljs.core.truth_(inst_11691)){
var statearr_11711_11729 = state_11704__$1;
(statearr_11711_11729[(1)] = (8));

} else {
var statearr_11712_11730 = state_11704__$1;
(statearr_11712_11730[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (3))){
var inst_11702 = (state_11704[(2)]);
var state_11704__$1 = state_11704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11704__$1,inst_11702);
} else {
if((state_val_11705 === (2))){
var state_11704__$1 = state_11704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11704__$1,(4),ch);
} else {
if((state_val_11705 === (11))){
var inst_11694 = (state_11704[(2)]);
var state_11704__$1 = state_11704;
var statearr_11713_11731 = state_11704__$1;
(statearr_11713_11731[(2)] = inst_11694);

(statearr_11713_11731[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (9))){
var state_11704__$1 = state_11704;
var statearr_11714_11732 = state_11704__$1;
(statearr_11714_11732[(2)] = null);

(statearr_11714_11732[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (5))){
var inst_11689 = cljs.core.async.close_BANG_(out);
var state_11704__$1 = state_11704;
var statearr_11715_11733 = state_11704__$1;
(statearr_11715_11733[(2)] = inst_11689);

(statearr_11715_11733[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (10))){
var inst_11697 = (state_11704[(2)]);
var state_11704__$1 = (function (){var statearr_11716 = state_11704;
(statearr_11716[(8)] = inst_11697);

return statearr_11716;
})();
var statearr_11717_11734 = state_11704__$1;
(statearr_11717_11734[(2)] = null);

(statearr_11717_11734[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11705 === (8))){
var inst_11686 = (state_11704[(7)]);
var state_11704__$1 = state_11704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11704__$1,(11),out,inst_11686);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_11718 = [null,null,null,null,null,null,null,null,null];
(statearr_11718[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_11718[(1)] = (1));

return statearr_11718;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_11704){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11704);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11719){var ex__10121__auto__ = e11719;
var statearr_11720_11735 = state_11704;
(statearr_11720_11735[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11704[(4)]))){
var statearr_11721_11736 = state_11704;
(statearr_11721_11736[(1)] = cljs.core.first((state_11704[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11737 = state_11704;
state_11704 = G__11737;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_11704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_11704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11722 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11722[(6)] = c__10192__auto___11724);

return statearr_11722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11739 = arguments.length;
switch (G__11739) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11802){
var state_val_11803 = (state_11802[(1)]);
if((state_val_11803 === (7))){
var inst_11798 = (state_11802[(2)]);
var state_11802__$1 = state_11802;
var statearr_11804_11843 = state_11802__$1;
(statearr_11804_11843[(2)] = inst_11798);

(statearr_11804_11843[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (20))){
var inst_11768 = (state_11802[(7)]);
var inst_11779 = (state_11802[(2)]);
var inst_11780 = cljs.core.next(inst_11768);
var inst_11754 = inst_11780;
var inst_11755 = null;
var inst_11756 = (0);
var inst_11757 = (0);
var state_11802__$1 = (function (){var statearr_11805 = state_11802;
(statearr_11805[(8)] = inst_11755);

(statearr_11805[(9)] = inst_11757);

(statearr_11805[(10)] = inst_11779);

(statearr_11805[(11)] = inst_11756);

(statearr_11805[(12)] = inst_11754);

return statearr_11805;
})();
var statearr_11806_11844 = state_11802__$1;
(statearr_11806_11844[(2)] = null);

(statearr_11806_11844[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (1))){
var state_11802__$1 = state_11802;
var statearr_11807_11845 = state_11802__$1;
(statearr_11807_11845[(2)] = null);

(statearr_11807_11845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (4))){
var inst_11743 = (state_11802[(13)]);
var inst_11743__$1 = (state_11802[(2)]);
var inst_11744 = (inst_11743__$1 == null);
var state_11802__$1 = (function (){var statearr_11808 = state_11802;
(statearr_11808[(13)] = inst_11743__$1);

return statearr_11808;
})();
if(cljs.core.truth_(inst_11744)){
var statearr_11809_11846 = state_11802__$1;
(statearr_11809_11846[(1)] = (5));

} else {
var statearr_11810_11847 = state_11802__$1;
(statearr_11810_11847[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (15))){
var state_11802__$1 = state_11802;
var statearr_11814_11848 = state_11802__$1;
(statearr_11814_11848[(2)] = null);

(statearr_11814_11848[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (21))){
var state_11802__$1 = state_11802;
var statearr_11815_11849 = state_11802__$1;
(statearr_11815_11849[(2)] = null);

(statearr_11815_11849[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (13))){
var inst_11755 = (state_11802[(8)]);
var inst_11757 = (state_11802[(9)]);
var inst_11756 = (state_11802[(11)]);
var inst_11754 = (state_11802[(12)]);
var inst_11764 = (state_11802[(2)]);
var inst_11765 = (inst_11757 + (1));
var tmp11811 = inst_11755;
var tmp11812 = inst_11756;
var tmp11813 = inst_11754;
var inst_11754__$1 = tmp11813;
var inst_11755__$1 = tmp11811;
var inst_11756__$1 = tmp11812;
var inst_11757__$1 = inst_11765;
var state_11802__$1 = (function (){var statearr_11816 = state_11802;
(statearr_11816[(8)] = inst_11755__$1);

(statearr_11816[(9)] = inst_11757__$1);

(statearr_11816[(14)] = inst_11764);

(statearr_11816[(11)] = inst_11756__$1);

(statearr_11816[(12)] = inst_11754__$1);

return statearr_11816;
})();
var statearr_11817_11850 = state_11802__$1;
(statearr_11817_11850[(2)] = null);

(statearr_11817_11850[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (22))){
var state_11802__$1 = state_11802;
var statearr_11818_11851 = state_11802__$1;
(statearr_11818_11851[(2)] = null);

(statearr_11818_11851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (6))){
var inst_11743 = (state_11802[(13)]);
var inst_11752 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11743) : f.call(null,inst_11743));
var inst_11753 = cljs.core.seq(inst_11752);
var inst_11754 = inst_11753;
var inst_11755 = null;
var inst_11756 = (0);
var inst_11757 = (0);
var state_11802__$1 = (function (){var statearr_11819 = state_11802;
(statearr_11819[(8)] = inst_11755);

(statearr_11819[(9)] = inst_11757);

(statearr_11819[(11)] = inst_11756);

(statearr_11819[(12)] = inst_11754);

return statearr_11819;
})();
var statearr_11820_11852 = state_11802__$1;
(statearr_11820_11852[(2)] = null);

(statearr_11820_11852[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (17))){
var inst_11768 = (state_11802[(7)]);
var inst_11772 = cljs.core.chunk_first(inst_11768);
var inst_11773 = cljs.core.chunk_rest(inst_11768);
var inst_11774 = cljs.core.count(inst_11772);
var inst_11754 = inst_11773;
var inst_11755 = inst_11772;
var inst_11756 = inst_11774;
var inst_11757 = (0);
var state_11802__$1 = (function (){var statearr_11821 = state_11802;
(statearr_11821[(8)] = inst_11755);

(statearr_11821[(9)] = inst_11757);

(statearr_11821[(11)] = inst_11756);

(statearr_11821[(12)] = inst_11754);

return statearr_11821;
})();
var statearr_11822_11853 = state_11802__$1;
(statearr_11822_11853[(2)] = null);

(statearr_11822_11853[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (3))){
var inst_11800 = (state_11802[(2)]);
var state_11802__$1 = state_11802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11802__$1,inst_11800);
} else {
if((state_val_11803 === (12))){
var inst_11788 = (state_11802[(2)]);
var state_11802__$1 = state_11802;
var statearr_11823_11854 = state_11802__$1;
(statearr_11823_11854[(2)] = inst_11788);

(statearr_11823_11854[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (2))){
var state_11802__$1 = state_11802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11802__$1,(4),in$);
} else {
if((state_val_11803 === (23))){
var inst_11796 = (state_11802[(2)]);
var state_11802__$1 = state_11802;
var statearr_11824_11855 = state_11802__$1;
(statearr_11824_11855[(2)] = inst_11796);

(statearr_11824_11855[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (19))){
var inst_11783 = (state_11802[(2)]);
var state_11802__$1 = state_11802;
var statearr_11825_11856 = state_11802__$1;
(statearr_11825_11856[(2)] = inst_11783);

(statearr_11825_11856[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (11))){
var inst_11768 = (state_11802[(7)]);
var inst_11754 = (state_11802[(12)]);
var inst_11768__$1 = cljs.core.seq(inst_11754);
var state_11802__$1 = (function (){var statearr_11826 = state_11802;
(statearr_11826[(7)] = inst_11768__$1);

return statearr_11826;
})();
if(inst_11768__$1){
var statearr_11827_11857 = state_11802__$1;
(statearr_11827_11857[(1)] = (14));

} else {
var statearr_11828_11858 = state_11802__$1;
(statearr_11828_11858[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (9))){
var inst_11790 = (state_11802[(2)]);
var inst_11791 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_11802__$1 = (function (){var statearr_11829 = state_11802;
(statearr_11829[(15)] = inst_11790);

return statearr_11829;
})();
if(cljs.core.truth_(inst_11791)){
var statearr_11830_11859 = state_11802__$1;
(statearr_11830_11859[(1)] = (21));

} else {
var statearr_11831_11860 = state_11802__$1;
(statearr_11831_11860[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (5))){
var inst_11746 = cljs.core.async.close_BANG_(out);
var state_11802__$1 = state_11802;
var statearr_11832_11861 = state_11802__$1;
(statearr_11832_11861[(2)] = inst_11746);

(statearr_11832_11861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (14))){
var inst_11768 = (state_11802[(7)]);
var inst_11770 = cljs.core.chunked_seq_QMARK_(inst_11768);
var state_11802__$1 = state_11802;
if(inst_11770){
var statearr_11833_11862 = state_11802__$1;
(statearr_11833_11862[(1)] = (17));

} else {
var statearr_11834_11863 = state_11802__$1;
(statearr_11834_11863[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (16))){
var inst_11786 = (state_11802[(2)]);
var state_11802__$1 = state_11802;
var statearr_11835_11864 = state_11802__$1;
(statearr_11835_11864[(2)] = inst_11786);

(statearr_11835_11864[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11803 === (10))){
var inst_11755 = (state_11802[(8)]);
var inst_11757 = (state_11802[(9)]);
var inst_11762 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11755,inst_11757);
var state_11802__$1 = state_11802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11802__$1,(13),out,inst_11762);
} else {
if((state_val_11803 === (18))){
var inst_11768 = (state_11802[(7)]);
var inst_11777 = cljs.core.first(inst_11768);
var state_11802__$1 = state_11802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11802__$1,(20),out,inst_11777);
} else {
if((state_val_11803 === (8))){
var inst_11757 = (state_11802[(9)]);
var inst_11756 = (state_11802[(11)]);
var inst_11759 = (inst_11757 < inst_11756);
var inst_11760 = inst_11759;
var state_11802__$1 = state_11802;
if(cljs.core.truth_(inst_11760)){
var statearr_11836_11865 = state_11802__$1;
(statearr_11836_11865[(1)] = (10));

} else {
var statearr_11837_11866 = state_11802__$1;
(statearr_11837_11866[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10118__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10118__auto____0 = (function (){
var statearr_11838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11838[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10118__auto__);

(statearr_11838[(1)] = (1));

return statearr_11838;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10118__auto____1 = (function (state_11802){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11802);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11839){var ex__10121__auto__ = e11839;
var statearr_11840_11867 = state_11802;
(statearr_11840_11867[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11802[(4)]))){
var statearr_11841_11868 = state_11802;
(statearr_11841_11868[(1)] = cljs.core.first((state_11802[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11869 = state_11802;
state_11802 = G__11869;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10118__auto__ = function(state_11802){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10118__auto____1.call(this,state_11802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10118__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10118__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11842 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11842[(6)] = c__10192__auto__);

return statearr_11842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));

return c__10192__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11871 = arguments.length;
switch (G__11871) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__11874 = arguments.length;
switch (G__11874) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__11877 = arguments.length;
switch (G__11877) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10192__auto___11925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11901){
var state_val_11902 = (state_11901[(1)]);
if((state_val_11902 === (7))){
var inst_11896 = (state_11901[(2)]);
var state_11901__$1 = state_11901;
var statearr_11903_11926 = state_11901__$1;
(statearr_11903_11926[(2)] = inst_11896);

(statearr_11903_11926[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11902 === (1))){
var inst_11878 = null;
var state_11901__$1 = (function (){var statearr_11904 = state_11901;
(statearr_11904[(7)] = inst_11878);

return statearr_11904;
})();
var statearr_11905_11927 = state_11901__$1;
(statearr_11905_11927[(2)] = null);

(statearr_11905_11927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11902 === (4))){
var inst_11881 = (state_11901[(8)]);
var inst_11881__$1 = (state_11901[(2)]);
var inst_11882 = (inst_11881__$1 == null);
var inst_11883 = cljs.core.not(inst_11882);
var state_11901__$1 = (function (){var statearr_11906 = state_11901;
(statearr_11906[(8)] = inst_11881__$1);

return statearr_11906;
})();
if(inst_11883){
var statearr_11907_11928 = state_11901__$1;
(statearr_11907_11928[(1)] = (5));

} else {
var statearr_11908_11929 = state_11901__$1;
(statearr_11908_11929[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11902 === (6))){
var state_11901__$1 = state_11901;
var statearr_11909_11930 = state_11901__$1;
(statearr_11909_11930[(2)] = null);

(statearr_11909_11930[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11902 === (3))){
var inst_11898 = (state_11901[(2)]);
var inst_11899 = cljs.core.async.close_BANG_(out);
var state_11901__$1 = (function (){var statearr_11910 = state_11901;
(statearr_11910[(9)] = inst_11898);

return statearr_11910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11901__$1,inst_11899);
} else {
if((state_val_11902 === (2))){
var state_11901__$1 = state_11901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11901__$1,(4),ch);
} else {
if((state_val_11902 === (11))){
var inst_11881 = (state_11901[(8)]);
var inst_11890 = (state_11901[(2)]);
var inst_11878 = inst_11881;
var state_11901__$1 = (function (){var statearr_11911 = state_11901;
(statearr_11911[(10)] = inst_11890);

(statearr_11911[(7)] = inst_11878);

return statearr_11911;
})();
var statearr_11912_11931 = state_11901__$1;
(statearr_11912_11931[(2)] = null);

(statearr_11912_11931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11902 === (9))){
var inst_11881 = (state_11901[(8)]);
var state_11901__$1 = state_11901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11901__$1,(11),out,inst_11881);
} else {
if((state_val_11902 === (5))){
var inst_11881 = (state_11901[(8)]);
var inst_11878 = (state_11901[(7)]);
var inst_11885 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11881,inst_11878);
var state_11901__$1 = state_11901;
if(inst_11885){
var statearr_11914_11932 = state_11901__$1;
(statearr_11914_11932[(1)] = (8));

} else {
var statearr_11915_11933 = state_11901__$1;
(statearr_11915_11933[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11902 === (10))){
var inst_11893 = (state_11901[(2)]);
var state_11901__$1 = state_11901;
var statearr_11916_11934 = state_11901__$1;
(statearr_11916_11934[(2)] = inst_11893);

(statearr_11916_11934[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11902 === (8))){
var inst_11878 = (state_11901[(7)]);
var tmp11913 = inst_11878;
var inst_11878__$1 = tmp11913;
var state_11901__$1 = (function (){var statearr_11917 = state_11901;
(statearr_11917[(7)] = inst_11878__$1);

return statearr_11917;
})();
var statearr_11918_11935 = state_11901__$1;
(statearr_11918_11935[(2)] = null);

(statearr_11918_11935[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_11919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11919[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_11919[(1)] = (1));

return statearr_11919;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_11901){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11901);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e11920){var ex__10121__auto__ = e11920;
var statearr_11921_11936 = state_11901;
(statearr_11921_11936[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11901[(4)]))){
var statearr_11922_11937 = state_11901;
(statearr_11922_11937[(1)] = cljs.core.first((state_11901[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__11938 = state_11901;
state_11901 = G__11938;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_11901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_11901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_11923 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_11923[(6)] = c__10192__auto___11925);

return statearr_11923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11940 = arguments.length;
switch (G__11940) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10192__auto___12007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_11978){
var state_val_11979 = (state_11978[(1)]);
if((state_val_11979 === (7))){
var inst_11974 = (state_11978[(2)]);
var state_11978__$1 = state_11978;
var statearr_11980_12008 = state_11978__$1;
(statearr_11980_12008[(2)] = inst_11974);

(statearr_11980_12008[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (1))){
var inst_11941 = (new Array(n));
var inst_11942 = inst_11941;
var inst_11943 = (0);
var state_11978__$1 = (function (){var statearr_11981 = state_11978;
(statearr_11981[(7)] = inst_11943);

(statearr_11981[(8)] = inst_11942);

return statearr_11981;
})();
var statearr_11982_12009 = state_11978__$1;
(statearr_11982_12009[(2)] = null);

(statearr_11982_12009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (4))){
var inst_11946 = (state_11978[(9)]);
var inst_11946__$1 = (state_11978[(2)]);
var inst_11947 = (inst_11946__$1 == null);
var inst_11948 = cljs.core.not(inst_11947);
var state_11978__$1 = (function (){var statearr_11983 = state_11978;
(statearr_11983[(9)] = inst_11946__$1);

return statearr_11983;
})();
if(inst_11948){
var statearr_11984_12010 = state_11978__$1;
(statearr_11984_12010[(1)] = (5));

} else {
var statearr_11985_12011 = state_11978__$1;
(statearr_11985_12011[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (15))){
var inst_11968 = (state_11978[(2)]);
var state_11978__$1 = state_11978;
var statearr_11986_12012 = state_11978__$1;
(statearr_11986_12012[(2)] = inst_11968);

(statearr_11986_12012[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (13))){
var state_11978__$1 = state_11978;
var statearr_11987_12013 = state_11978__$1;
(statearr_11987_12013[(2)] = null);

(statearr_11987_12013[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (6))){
var inst_11943 = (state_11978[(7)]);
var inst_11964 = (inst_11943 > (0));
var state_11978__$1 = state_11978;
if(cljs.core.truth_(inst_11964)){
var statearr_11988_12014 = state_11978__$1;
(statearr_11988_12014[(1)] = (12));

} else {
var statearr_11989_12015 = state_11978__$1;
(statearr_11989_12015[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (3))){
var inst_11976 = (state_11978[(2)]);
var state_11978__$1 = state_11978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11978__$1,inst_11976);
} else {
if((state_val_11979 === (12))){
var inst_11942 = (state_11978[(8)]);
var inst_11966 = cljs.core.vec(inst_11942);
var state_11978__$1 = state_11978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11978__$1,(15),out,inst_11966);
} else {
if((state_val_11979 === (2))){
var state_11978__$1 = state_11978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11978__$1,(4),ch);
} else {
if((state_val_11979 === (11))){
var inst_11958 = (state_11978[(2)]);
var inst_11959 = (new Array(n));
var inst_11942 = inst_11959;
var inst_11943 = (0);
var state_11978__$1 = (function (){var statearr_11990 = state_11978;
(statearr_11990[(7)] = inst_11943);

(statearr_11990[(10)] = inst_11958);

(statearr_11990[(8)] = inst_11942);

return statearr_11990;
})();
var statearr_11991_12016 = state_11978__$1;
(statearr_11991_12016[(2)] = null);

(statearr_11991_12016[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (9))){
var inst_11942 = (state_11978[(8)]);
var inst_11956 = cljs.core.vec(inst_11942);
var state_11978__$1 = state_11978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11978__$1,(11),out,inst_11956);
} else {
if((state_val_11979 === (5))){
var inst_11943 = (state_11978[(7)]);
var inst_11946 = (state_11978[(9)]);
var inst_11951 = (state_11978[(11)]);
var inst_11942 = (state_11978[(8)]);
var inst_11950 = (inst_11942[inst_11943] = inst_11946);
var inst_11951__$1 = (inst_11943 + (1));
var inst_11952 = (inst_11951__$1 < n);
var state_11978__$1 = (function (){var statearr_11992 = state_11978;
(statearr_11992[(12)] = inst_11950);

(statearr_11992[(11)] = inst_11951__$1);

return statearr_11992;
})();
if(cljs.core.truth_(inst_11952)){
var statearr_11993_12017 = state_11978__$1;
(statearr_11993_12017[(1)] = (8));

} else {
var statearr_11994_12018 = state_11978__$1;
(statearr_11994_12018[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (14))){
var inst_11971 = (state_11978[(2)]);
var inst_11972 = cljs.core.async.close_BANG_(out);
var state_11978__$1 = (function (){var statearr_11996 = state_11978;
(statearr_11996[(13)] = inst_11971);

return statearr_11996;
})();
var statearr_11997_12019 = state_11978__$1;
(statearr_11997_12019[(2)] = inst_11972);

(statearr_11997_12019[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (10))){
var inst_11962 = (state_11978[(2)]);
var state_11978__$1 = state_11978;
var statearr_11998_12020 = state_11978__$1;
(statearr_11998_12020[(2)] = inst_11962);

(statearr_11998_12020[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11979 === (8))){
var inst_11951 = (state_11978[(11)]);
var inst_11942 = (state_11978[(8)]);
var tmp11995 = inst_11942;
var inst_11942__$1 = tmp11995;
var inst_11943 = inst_11951;
var state_11978__$1 = (function (){var statearr_11999 = state_11978;
(statearr_11999[(7)] = inst_11943);

(statearr_11999[(8)] = inst_11942__$1);

return statearr_11999;
})();
var statearr_12000_12021 = state_11978__$1;
(statearr_12000_12021[(2)] = null);

(statearr_12000_12021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_12001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12001[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_12001[(1)] = (1));

return statearr_12001;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_11978){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_11978);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e12002){var ex__10121__auto__ = e12002;
var statearr_12003_12022 = state_11978;
(statearr_12003_12022[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_11978[(4)]))){
var statearr_12004_12023 = state_11978;
(statearr_12004_12023[(1)] = cljs.core.first((state_11978[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__12024 = state_11978;
state_11978 = G__12024;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_11978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_11978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_12005 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_12005[(6)] = c__10192__auto___12007);

return statearr_12005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12026 = arguments.length;
switch (G__12026) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10192__auto___12104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_12071){
var state_val_12072 = (state_12071[(1)]);
if((state_val_12072 === (7))){
var inst_12067 = (state_12071[(2)]);
var state_12071__$1 = state_12071;
var statearr_12073_12105 = state_12071__$1;
(statearr_12073_12105[(2)] = inst_12067);

(statearr_12073_12105[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (1))){
var inst_12027 = [];
var inst_12028 = inst_12027;
var inst_12029 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_12071__$1 = (function (){var statearr_12074 = state_12071;
(statearr_12074[(7)] = inst_12029);

(statearr_12074[(8)] = inst_12028);

return statearr_12074;
})();
var statearr_12075_12106 = state_12071__$1;
(statearr_12075_12106[(2)] = null);

(statearr_12075_12106[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (4))){
var inst_12032 = (state_12071[(9)]);
var inst_12032__$1 = (state_12071[(2)]);
var inst_12033 = (inst_12032__$1 == null);
var inst_12034 = cljs.core.not(inst_12033);
var state_12071__$1 = (function (){var statearr_12076 = state_12071;
(statearr_12076[(9)] = inst_12032__$1);

return statearr_12076;
})();
if(inst_12034){
var statearr_12077_12107 = state_12071__$1;
(statearr_12077_12107[(1)] = (5));

} else {
var statearr_12078_12108 = state_12071__$1;
(statearr_12078_12108[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (15))){
var inst_12028 = (state_12071[(8)]);
var inst_12059 = cljs.core.vec(inst_12028);
var state_12071__$1 = state_12071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12071__$1,(18),out,inst_12059);
} else {
if((state_val_12072 === (13))){
var inst_12054 = (state_12071[(2)]);
var state_12071__$1 = state_12071;
var statearr_12079_12109 = state_12071__$1;
(statearr_12079_12109[(2)] = inst_12054);

(statearr_12079_12109[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (6))){
var inst_12028 = (state_12071[(8)]);
var inst_12056 = inst_12028.length;
var inst_12057 = (inst_12056 > (0));
var state_12071__$1 = state_12071;
if(cljs.core.truth_(inst_12057)){
var statearr_12080_12110 = state_12071__$1;
(statearr_12080_12110[(1)] = (15));

} else {
var statearr_12081_12111 = state_12071__$1;
(statearr_12081_12111[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (17))){
var inst_12064 = (state_12071[(2)]);
var inst_12065 = cljs.core.async.close_BANG_(out);
var state_12071__$1 = (function (){var statearr_12082 = state_12071;
(statearr_12082[(10)] = inst_12064);

return statearr_12082;
})();
var statearr_12083_12112 = state_12071__$1;
(statearr_12083_12112[(2)] = inst_12065);

(statearr_12083_12112[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (3))){
var inst_12069 = (state_12071[(2)]);
var state_12071__$1 = state_12071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12071__$1,inst_12069);
} else {
if((state_val_12072 === (12))){
var inst_12028 = (state_12071[(8)]);
var inst_12047 = cljs.core.vec(inst_12028);
var state_12071__$1 = state_12071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12071__$1,(14),out,inst_12047);
} else {
if((state_val_12072 === (2))){
var state_12071__$1 = state_12071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12071__$1,(4),ch);
} else {
if((state_val_12072 === (11))){
var inst_12036 = (state_12071[(11)]);
var inst_12032 = (state_12071[(9)]);
var inst_12028 = (state_12071[(8)]);
var inst_12044 = inst_12028.push(inst_12032);
var tmp12084 = inst_12028;
var inst_12028__$1 = tmp12084;
var inst_12029 = inst_12036;
var state_12071__$1 = (function (){var statearr_12085 = state_12071;
(statearr_12085[(12)] = inst_12044);

(statearr_12085[(7)] = inst_12029);

(statearr_12085[(8)] = inst_12028__$1);

return statearr_12085;
})();
var statearr_12086_12113 = state_12071__$1;
(statearr_12086_12113[(2)] = null);

(statearr_12086_12113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (9))){
var inst_12029 = (state_12071[(7)]);
var inst_12040 = cljs.core.keyword_identical_QMARK_(inst_12029,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var state_12071__$1 = state_12071;
var statearr_12087_12114 = state_12071__$1;
(statearr_12087_12114[(2)] = inst_12040);

(statearr_12087_12114[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (5))){
var inst_12036 = (state_12071[(11)]);
var inst_12032 = (state_12071[(9)]);
var inst_12029 = (state_12071[(7)]);
var inst_12037 = (state_12071[(13)]);
var inst_12036__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12032) : f.call(null,inst_12032));
var inst_12037__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12036__$1,inst_12029);
var state_12071__$1 = (function (){var statearr_12088 = state_12071;
(statearr_12088[(11)] = inst_12036__$1);

(statearr_12088[(13)] = inst_12037__$1);

return statearr_12088;
})();
if(inst_12037__$1){
var statearr_12089_12115 = state_12071__$1;
(statearr_12089_12115[(1)] = (8));

} else {
var statearr_12090_12116 = state_12071__$1;
(statearr_12090_12116[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (14))){
var inst_12036 = (state_12071[(11)]);
var inst_12032 = (state_12071[(9)]);
var inst_12049 = (state_12071[(2)]);
var inst_12050 = [];
var inst_12051 = inst_12050.push(inst_12032);
var inst_12028 = inst_12050;
var inst_12029 = inst_12036;
var state_12071__$1 = (function (){var statearr_12091 = state_12071;
(statearr_12091[(14)] = inst_12051);

(statearr_12091[(15)] = inst_12049);

(statearr_12091[(7)] = inst_12029);

(statearr_12091[(8)] = inst_12028);

return statearr_12091;
})();
var statearr_12092_12117 = state_12071__$1;
(statearr_12092_12117[(2)] = null);

(statearr_12092_12117[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (16))){
var state_12071__$1 = state_12071;
var statearr_12093_12118 = state_12071__$1;
(statearr_12093_12118[(2)] = null);

(statearr_12093_12118[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (10))){
var inst_12042 = (state_12071[(2)]);
var state_12071__$1 = state_12071;
if(cljs.core.truth_(inst_12042)){
var statearr_12094_12119 = state_12071__$1;
(statearr_12094_12119[(1)] = (11));

} else {
var statearr_12095_12120 = state_12071__$1;
(statearr_12095_12120[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (18))){
var inst_12061 = (state_12071[(2)]);
var state_12071__$1 = state_12071;
var statearr_12096_12121 = state_12071__$1;
(statearr_12096_12121[(2)] = inst_12061);

(statearr_12096_12121[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12072 === (8))){
var inst_12037 = (state_12071[(13)]);
var state_12071__$1 = state_12071;
var statearr_12097_12122 = state_12071__$1;
(statearr_12097_12122[(2)] = inst_12037);

(statearr_12097_12122[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10118__auto__ = null;
var cljs$core$async$state_machine__10118__auto____0 = (function (){
var statearr_12098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12098[(0)] = cljs$core$async$state_machine__10118__auto__);

(statearr_12098[(1)] = (1));

return statearr_12098;
});
var cljs$core$async$state_machine__10118__auto____1 = (function (state_12071){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_12071);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e12099){var ex__10121__auto__ = e12099;
var statearr_12100_12123 = state_12071;
(statearr_12100_12123[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_12071[(4)]))){
var statearr_12101_12124 = state_12071;
(statearr_12101_12124[(1)] = cljs.core.first((state_12071[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__12125 = state_12071;
state_12071 = G__12125;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
cljs$core$async$state_machine__10118__auto__ = function(state_12071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10118__auto____1.call(this,state_12071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10118__auto____0;
cljs$core$async$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10118__auto____1;
return cljs$core$async$state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_12102 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_12102[(6)] = c__10192__auto___12104);

return statearr_12102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

