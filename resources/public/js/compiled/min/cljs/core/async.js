// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14287 = [];
var len__7492__auto___14293 = arguments.length;
var i__7493__auto___14294 = (0);
while(true){
if((i__7493__auto___14294 < len__7492__auto___14293)){
args14287.push((arguments[i__7493__auto___14294]));

var G__14295 = (i__7493__auto___14294 + (1));
i__7493__auto___14294 = G__14295;
continue;
} else {
}
break;
}

var G__14289 = args14287.length;
switch (G__14289) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14287.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14290 = (function (f,blockable,meta14291){
this.f = f;
this.blockable = blockable;
this.meta14291 = meta14291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14292,meta14291__$1){
var self__ = this;
var _14292__$1 = this;
return (new cljs.core.async.t_cljs$core$async14290(self__.f,self__.blockable,meta14291__$1));
});

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14292){
var self__ = this;
var _14292__$1 = this;
return self__.meta14291;
});

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14291], null);
});

cljs.core.async.t_cljs$core$async14290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14290";

cljs.core.async.t_cljs$core$async14290.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async14290");
});

cljs.core.async.__GT_t_cljs$core$async14290 = (function cljs$core$async$__GT_t_cljs$core$async14290(f__$1,blockable__$1,meta14291){
return (new cljs.core.async.t_cljs$core$async14290(f__$1,blockable__$1,meta14291));
});

}

return (new cljs.core.async.t_cljs$core$async14290(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args14299 = [];
var len__7492__auto___14302 = arguments.length;
var i__7493__auto___14303 = (0);
while(true){
if((i__7493__auto___14303 < len__7492__auto___14302)){
args14299.push((arguments[i__7493__auto___14303]));

var G__14304 = (i__7493__auto___14303 + (1));
i__7493__auto___14303 = G__14304;
continue;
} else {
}
break;
}

var G__14301 = args14299.length;
switch (G__14301) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14299.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14306 = [];
var len__7492__auto___14309 = arguments.length;
var i__7493__auto___14310 = (0);
while(true){
if((i__7493__auto___14310 < len__7492__auto___14309)){
args14306.push((arguments[i__7493__auto___14310]));

var G__14311 = (i__7493__auto___14310 + (1));
i__7493__auto___14310 = G__14311;
continue;
} else {
}
break;
}

var G__14308 = args14306.length;
switch (G__14308) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14306.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var args14313 = [];
var len__7492__auto___14316 = arguments.length;
var i__7493__auto___14317 = (0);
while(true){
if((i__7493__auto___14317 < len__7492__auto___14316)){
args14313.push((arguments[i__7493__auto___14317]));

var G__14318 = (i__7493__auto___14317 + (1));
i__7493__auto___14317 = G__14318;
continue;
} else {
}
break;
}

var G__14315 = args14313.length;
switch (G__14315) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14313.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14320 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14320) : fn1.call(null,val_14320));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14320,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14320) : fn1.call(null,val_14320));
});})(val_14320,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14321 = [];
var len__7492__auto___14324 = arguments.length;
var i__7493__auto___14325 = (0);
while(true){
if((i__7493__auto___14325 < len__7492__auto___14324)){
args14321.push((arguments[i__7493__auto___14325]));

var G__14326 = (i__7493__auto___14325 + (1));
i__7493__auto___14325 = G__14326;
continue;
} else {
}
break;
}

var G__14323 = args14321.length;
switch (G__14323) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14321.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7332__auto___14328 = n;
var x_14329 = (0);
while(true){
if((x_14329 < n__7332__auto___14328)){
(a[x_14329] = (0));

var G__14330 = (x_14329 + (1));
x_14329 = G__14330;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14331 = (i + (1));
i = G__14331;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14335 = (function (alt_flag,flag,meta14336){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14336 = meta14336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14337,meta14336__$1){
var self__ = this;
var _14337__$1 = this;
return (new cljs.core.async.t_cljs$core$async14335(self__.alt_flag,self__.flag,meta14336__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14337){
var self__ = this;
var _14337__$1 = this;
return self__.meta14336;
});})(flag))
;

cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14335.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14336], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14335";

cljs.core.async.t_cljs$core$async14335.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async14335");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14335 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14335(alt_flag__$1,flag__$1,meta14336){
return (new cljs.core.async.t_cljs$core$async14335(alt_flag__$1,flag__$1,meta14336));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14335(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14341 = (function (alt_handler,flag,cb,meta14342){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14342 = meta14342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14343,meta14342__$1){
var self__ = this;
var _14343__$1 = this;
return (new cljs.core.async.t_cljs$core$async14341(self__.alt_handler,self__.flag,self__.cb,meta14342__$1));
});

cljs.core.async.t_cljs$core$async14341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14343){
var self__ = this;
var _14343__$1 = this;
return self__.meta14342;
});

cljs.core.async.t_cljs$core$async14341.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14342], null);
});

cljs.core.async.t_cljs$core$async14341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14341";

cljs.core.async.t_cljs$core$async14341.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async14341");
});

cljs.core.async.__GT_t_cljs$core$async14341 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14341(alt_handler__$1,flag__$1,cb__$1,meta14342){
return (new cljs.core.async.t_cljs$core$async14341(alt_handler__$1,flag__$1,cb__$1,meta14342));
});

}

return (new cljs.core.async.t_cljs$core$async14341(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__14344_SHARP_){
var G__14348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14344_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14348) : fret.call(null,G__14348));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14345_SHARP_){
var G__14349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14345_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14349) : fret.call(null,G__14349));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6417__auto__ = wport;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14350 = (i + (1));
i = G__14350;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6417__auto__ = ret;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6405__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__7499__auto__ = [];
var len__7492__auto___14356 = arguments.length;
var i__7493__auto___14357 = (0);
while(true){
if((i__7493__auto___14357 < len__7492__auto___14356)){
args__7499__auto__.push((arguments[i__7493__auto___14357]));

var G__14358 = (i__7493__auto___14357 + (1));
i__7493__auto___14357 = G__14358;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14353){
var map__14354 = p__14353;
var map__14354__$1 = ((((!((map__14354 == null)))?((((map__14354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14354):map__14354);
var opts = map__14354__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14351){
var G__14352 = cljs.core.first(seq14351);
var seq14351__$1 = cljs.core.next(seq14351);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14352,seq14351__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args14359 = [];
var len__7492__auto___14409 = arguments.length;
var i__7493__auto___14410 = (0);
while(true){
if((i__7493__auto___14410 < len__7492__auto___14409)){
args14359.push((arguments[i__7493__auto___14410]));

var G__14411 = (i__7493__auto___14410 + (1));
i__7493__auto___14410 = G__14411;
continue;
} else {
}
break;
}

var G__14361 = args14359.length;
switch (G__14361) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14359.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14242__auto___14413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___14413){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___14413){
return (function (state_14385){
var state_val_14386 = (state_14385[(1)]);
if((state_val_14386 === (7))){
var inst_14381 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14387_14414 = state_14385__$1;
(statearr_14387_14414[(2)] = inst_14381);

(statearr_14387_14414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (1))){
var state_14385__$1 = state_14385;
var statearr_14388_14415 = state_14385__$1;
(statearr_14388_14415[(2)] = null);

(statearr_14388_14415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (4))){
var inst_14364 = (state_14385[(7)]);
var inst_14364__$1 = (state_14385[(2)]);
var inst_14365 = (inst_14364__$1 == null);
var state_14385__$1 = (function (){var statearr_14389 = state_14385;
(statearr_14389[(7)] = inst_14364__$1);

return statearr_14389;
})();
if(cljs.core.truth_(inst_14365)){
var statearr_14390_14416 = state_14385__$1;
(statearr_14390_14416[(1)] = (5));

} else {
var statearr_14391_14417 = state_14385__$1;
(statearr_14391_14417[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (13))){
var state_14385__$1 = state_14385;
var statearr_14392_14418 = state_14385__$1;
(statearr_14392_14418[(2)] = null);

(statearr_14392_14418[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (6))){
var inst_14364 = (state_14385[(7)]);
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14385__$1,(11),to,inst_14364);
} else {
if((state_val_14386 === (3))){
var inst_14383 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14385__$1,inst_14383);
} else {
if((state_val_14386 === (12))){
var state_14385__$1 = state_14385;
var statearr_14393_14419 = state_14385__$1;
(statearr_14393_14419[(2)] = null);

(statearr_14393_14419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (2))){
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14385__$1,(4),from);
} else {
if((state_val_14386 === (11))){
var inst_14374 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
if(cljs.core.truth_(inst_14374)){
var statearr_14394_14420 = state_14385__$1;
(statearr_14394_14420[(1)] = (12));

} else {
var statearr_14395_14421 = state_14385__$1;
(statearr_14395_14421[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (9))){
var state_14385__$1 = state_14385;
var statearr_14396_14422 = state_14385__$1;
(statearr_14396_14422[(2)] = null);

(statearr_14396_14422[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (5))){
var state_14385__$1 = state_14385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14397_14423 = state_14385__$1;
(statearr_14397_14423[(1)] = (8));

} else {
var statearr_14398_14424 = state_14385__$1;
(statearr_14398_14424[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (14))){
var inst_14379 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14399_14425 = state_14385__$1;
(statearr_14399_14425[(2)] = inst_14379);

(statearr_14399_14425[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (10))){
var inst_14371 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14400_14426 = state_14385__$1;
(statearr_14400_14426[(2)] = inst_14371);

(statearr_14400_14426[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14386 === (8))){
var inst_14368 = cljs.core.async.close_BANG_(to);
var state_14385__$1 = state_14385;
var statearr_14401_14427 = state_14385__$1;
(statearr_14401_14427[(2)] = inst_14368);

(statearr_14401_14427[(1)] = (10));


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
});})(c__14242__auto___14413))
;
return ((function (switch__14118__auto__,c__14242__auto___14413){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_14405 = [null,null,null,null,null,null,null,null];
(statearr_14405[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_14405[(1)] = (1));

return statearr_14405;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_14385){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14385);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14406){if((e14406 instanceof Object)){
var ex__14122__auto__ = e14406;
var statearr_14407_14428 = state_14385;
(statearr_14407_14428[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14385);

return cljs.core.cst$kw$recur;
} else {
throw e14406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__14429 = state_14385;
state_14385 = G__14429;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_14385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_14385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___14413))
})();
var state__14244__auto__ = (function (){var statearr_14408 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_14408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___14413);

return statearr_14408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___14413))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14617){
var vec__14618 = p__14617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618,(1),null);
var job = vec__14618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14242__auto___14804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___14804,res,vec__14618,v,p,job,jobs,results){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___14804,res,vec__14618,v,p,job,jobs,results){
return (function (state_14625){
var state_val_14626 = (state_14625[(1)]);
if((state_val_14626 === (1))){
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14625__$1,(2),res,v);
} else {
if((state_val_14626 === (2))){
var inst_14622 = (state_14625[(2)]);
var inst_14623 = cljs.core.async.close_BANG_(res);
var state_14625__$1 = (function (){var statearr_14627 = state_14625;
(statearr_14627[(7)] = inst_14622);

return statearr_14627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14625__$1,inst_14623);
} else {
return null;
}
}
});})(c__14242__auto___14804,res,vec__14618,v,p,job,jobs,results))
;
return ((function (switch__14118__auto__,c__14242__auto___14804,res,vec__14618,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_14631 = [null,null,null,null,null,null,null,null];
(statearr_14631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_14631[(1)] = (1));

return statearr_14631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_14625){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14625);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14632){if((e14632 instanceof Object)){
var ex__14122__auto__ = e14632;
var statearr_14633_14805 = state_14625;
(statearr_14633_14805[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14625);

return cljs.core.cst$kw$recur;
} else {
throw e14632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__14806 = state_14625;
state_14625 = G__14806;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_14625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_14625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___14804,res,vec__14618,v,p,job,jobs,results))
})();
var state__14244__auto__ = (function (){var statearr_14634 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_14634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___14804);

return statearr_14634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___14804,res,vec__14618,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14635){
var vec__14636 = p__14635;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14636,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14636,(1),null);
var job = vec__14636;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7332__auto___14807 = n;
var __14808 = (0);
while(true){
if((__14808 < n__7332__auto___14807)){
var G__14639_14809 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14639_14809) {
case "compute":
var c__14242__auto___14811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14808,c__14242__auto___14811,G__14639_14809,n__7332__auto___14807,jobs,results,process,async){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (__14808,c__14242__auto___14811,G__14639_14809,n__7332__auto___14807,jobs,results,process,async){
return (function (state_14652){
var state_val_14653 = (state_14652[(1)]);
if((state_val_14653 === (1))){
var state_14652__$1 = state_14652;
var statearr_14654_14812 = state_14652__$1;
(statearr_14654_14812[(2)] = null);

(statearr_14654_14812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14653 === (2))){
var state_14652__$1 = state_14652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14652__$1,(4),jobs);
} else {
if((state_val_14653 === (3))){
var inst_14650 = (state_14652[(2)]);
var state_14652__$1 = state_14652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14652__$1,inst_14650);
} else {
if((state_val_14653 === (4))){
var inst_14642 = (state_14652[(2)]);
var inst_14643 = process(inst_14642);
var state_14652__$1 = state_14652;
if(cljs.core.truth_(inst_14643)){
var statearr_14655_14813 = state_14652__$1;
(statearr_14655_14813[(1)] = (5));

} else {
var statearr_14656_14814 = state_14652__$1;
(statearr_14656_14814[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14653 === (5))){
var state_14652__$1 = state_14652;
var statearr_14657_14815 = state_14652__$1;
(statearr_14657_14815[(2)] = null);

(statearr_14657_14815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14653 === (6))){
var state_14652__$1 = state_14652;
var statearr_14658_14816 = state_14652__$1;
(statearr_14658_14816[(2)] = null);

(statearr_14658_14816[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14653 === (7))){
var inst_14648 = (state_14652[(2)]);
var state_14652__$1 = state_14652;
var statearr_14659_14817 = state_14652__$1;
(statearr_14659_14817[(2)] = inst_14648);

(statearr_14659_14817[(1)] = (3));


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
});})(__14808,c__14242__auto___14811,G__14639_14809,n__7332__auto___14807,jobs,results,process,async))
;
return ((function (__14808,switch__14118__auto__,c__14242__auto___14811,G__14639_14809,n__7332__auto___14807,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_14663 = [null,null,null,null,null,null,null];
(statearr_14663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_14663[(1)] = (1));

return statearr_14663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_14652){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14652);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14664){if((e14664 instanceof Object)){
var ex__14122__auto__ = e14664;
var statearr_14665_14818 = state_14652;
(statearr_14665_14818[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14652);

return cljs.core.cst$kw$recur;
} else {
throw e14664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__14819 = state_14652;
state_14652 = G__14819;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_14652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_14652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
;})(__14808,switch__14118__auto__,c__14242__auto___14811,G__14639_14809,n__7332__auto___14807,jobs,results,process,async))
})();
var state__14244__auto__ = (function (){var statearr_14666 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_14666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___14811);

return statearr_14666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(__14808,c__14242__auto___14811,G__14639_14809,n__7332__auto___14807,jobs,results,process,async))
);


break;
case "async":
var c__14242__auto___14820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14808,c__14242__auto___14820,G__14639_14809,n__7332__auto___14807,jobs,results,process,async){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (__14808,c__14242__auto___14820,G__14639_14809,n__7332__auto___14807,jobs,results,process,async){
return (function (state_14679){
var state_val_14680 = (state_14679[(1)]);
if((state_val_14680 === (1))){
var state_14679__$1 = state_14679;
var statearr_14681_14821 = state_14679__$1;
(statearr_14681_14821[(2)] = null);

(statearr_14681_14821[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14680 === (2))){
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14679__$1,(4),jobs);
} else {
if((state_val_14680 === (3))){
var inst_14677 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14679__$1,inst_14677);
} else {
if((state_val_14680 === (4))){
var inst_14669 = (state_14679[(2)]);
var inst_14670 = async(inst_14669);
var state_14679__$1 = state_14679;
if(cljs.core.truth_(inst_14670)){
var statearr_14682_14822 = state_14679__$1;
(statearr_14682_14822[(1)] = (5));

} else {
var statearr_14683_14823 = state_14679__$1;
(statearr_14683_14823[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14680 === (5))){
var state_14679__$1 = state_14679;
var statearr_14684_14824 = state_14679__$1;
(statearr_14684_14824[(2)] = null);

(statearr_14684_14824[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14680 === (6))){
var state_14679__$1 = state_14679;
var statearr_14685_14825 = state_14679__$1;
(statearr_14685_14825[(2)] = null);

(statearr_14685_14825[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14680 === (7))){
var inst_14675 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14686_14826 = state_14679__$1;
(statearr_14686_14826[(2)] = inst_14675);

(statearr_14686_14826[(1)] = (3));


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
});})(__14808,c__14242__auto___14820,G__14639_14809,n__7332__auto___14807,jobs,results,process,async))
;
return ((function (__14808,switch__14118__auto__,c__14242__auto___14820,G__14639_14809,n__7332__auto___14807,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_14690 = [null,null,null,null,null,null,null];
(statearr_14690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_14690[(1)] = (1));

return statearr_14690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_14679){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14679);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14691){if((e14691 instanceof Object)){
var ex__14122__auto__ = e14691;
var statearr_14692_14827 = state_14679;
(statearr_14692_14827[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14679);

return cljs.core.cst$kw$recur;
} else {
throw e14691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__14828 = state_14679;
state_14679 = G__14828;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_14679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_14679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
;})(__14808,switch__14118__auto__,c__14242__auto___14820,G__14639_14809,n__7332__auto___14807,jobs,results,process,async))
})();
var state__14244__auto__ = (function (){var statearr_14693 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_14693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___14820);

return statearr_14693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(__14808,c__14242__auto___14820,G__14639_14809,n__7332__auto___14807,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14829 = (__14808 + (1));
__14808 = G__14829;
continue;
} else {
}
break;
}

var c__14242__auto___14830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___14830,jobs,results,process,async){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___14830,jobs,results,process,async){
return (function (state_14715){
var state_val_14716 = (state_14715[(1)]);
if((state_val_14716 === (1))){
var state_14715__$1 = state_14715;
var statearr_14717_14831 = state_14715__$1;
(statearr_14717_14831[(2)] = null);

(statearr_14717_14831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14716 === (2))){
var state_14715__$1 = state_14715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14715__$1,(4),from);
} else {
if((state_val_14716 === (3))){
var inst_14713 = (state_14715[(2)]);
var state_14715__$1 = state_14715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14715__$1,inst_14713);
} else {
if((state_val_14716 === (4))){
var inst_14696 = (state_14715[(7)]);
var inst_14696__$1 = (state_14715[(2)]);
var inst_14697 = (inst_14696__$1 == null);
var state_14715__$1 = (function (){var statearr_14718 = state_14715;
(statearr_14718[(7)] = inst_14696__$1);

return statearr_14718;
})();
if(cljs.core.truth_(inst_14697)){
var statearr_14719_14832 = state_14715__$1;
(statearr_14719_14832[(1)] = (5));

} else {
var statearr_14720_14833 = state_14715__$1;
(statearr_14720_14833[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14716 === (5))){
var inst_14699 = cljs.core.async.close_BANG_(jobs);
var state_14715__$1 = state_14715;
var statearr_14721_14834 = state_14715__$1;
(statearr_14721_14834[(2)] = inst_14699);

(statearr_14721_14834[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14716 === (6))){
var inst_14696 = (state_14715[(7)]);
var inst_14701 = (state_14715[(8)]);
var inst_14701__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14703 = [inst_14696,inst_14701__$1];
var inst_14704 = (new cljs.core.PersistentVector(null,2,(5),inst_14702,inst_14703,null));
var state_14715__$1 = (function (){var statearr_14722 = state_14715;
(statearr_14722[(8)] = inst_14701__$1);

return statearr_14722;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14715__$1,(8),jobs,inst_14704);
} else {
if((state_val_14716 === (7))){
var inst_14711 = (state_14715[(2)]);
var state_14715__$1 = state_14715;
var statearr_14723_14835 = state_14715__$1;
(statearr_14723_14835[(2)] = inst_14711);

(statearr_14723_14835[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14716 === (8))){
var inst_14701 = (state_14715[(8)]);
var inst_14706 = (state_14715[(2)]);
var state_14715__$1 = (function (){var statearr_14724 = state_14715;
(statearr_14724[(9)] = inst_14706);

return statearr_14724;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14715__$1,(9),results,inst_14701);
} else {
if((state_val_14716 === (9))){
var inst_14708 = (state_14715[(2)]);
var state_14715__$1 = (function (){var statearr_14725 = state_14715;
(statearr_14725[(10)] = inst_14708);

return statearr_14725;
})();
var statearr_14726_14836 = state_14715__$1;
(statearr_14726_14836[(2)] = null);

(statearr_14726_14836[(1)] = (2));


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
});})(c__14242__auto___14830,jobs,results,process,async))
;
return ((function (switch__14118__auto__,c__14242__auto___14830,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_14730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_14730[(1)] = (1));

return statearr_14730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_14715){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14715);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14731){if((e14731 instanceof Object)){
var ex__14122__auto__ = e14731;
var statearr_14732_14837 = state_14715;
(statearr_14732_14837[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14715);

return cljs.core.cst$kw$recur;
} else {
throw e14731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__14838 = state_14715;
state_14715 = G__14838;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_14715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_14715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___14830,jobs,results,process,async))
})();
var state__14244__auto__ = (function (){var statearr_14733 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_14733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___14830);

return statearr_14733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___14830,jobs,results,process,async))
);


var c__14242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto__,jobs,results,process,async){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto__,jobs,results,process,async){
return (function (state_14771){
var state_val_14772 = (state_14771[(1)]);
if((state_val_14772 === (7))){
var inst_14767 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14773_14839 = state_14771__$1;
(statearr_14773_14839[(2)] = inst_14767);

(statearr_14773_14839[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (20))){
var state_14771__$1 = state_14771;
var statearr_14774_14840 = state_14771__$1;
(statearr_14774_14840[(2)] = null);

(statearr_14774_14840[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (1))){
var state_14771__$1 = state_14771;
var statearr_14775_14841 = state_14771__$1;
(statearr_14775_14841[(2)] = null);

(statearr_14775_14841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (4))){
var inst_14736 = (state_14771[(7)]);
var inst_14736__$1 = (state_14771[(2)]);
var inst_14737 = (inst_14736__$1 == null);
var state_14771__$1 = (function (){var statearr_14776 = state_14771;
(statearr_14776[(7)] = inst_14736__$1);

return statearr_14776;
})();
if(cljs.core.truth_(inst_14737)){
var statearr_14777_14842 = state_14771__$1;
(statearr_14777_14842[(1)] = (5));

} else {
var statearr_14778_14843 = state_14771__$1;
(statearr_14778_14843[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (15))){
var inst_14749 = (state_14771[(8)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14771__$1,(18),to,inst_14749);
} else {
if((state_val_14772 === (21))){
var inst_14762 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14779_14844 = state_14771__$1;
(statearr_14779_14844[(2)] = inst_14762);

(statearr_14779_14844[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (13))){
var inst_14764 = (state_14771[(2)]);
var state_14771__$1 = (function (){var statearr_14780 = state_14771;
(statearr_14780[(9)] = inst_14764);

return statearr_14780;
})();
var statearr_14781_14845 = state_14771__$1;
(statearr_14781_14845[(2)] = null);

(statearr_14781_14845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (6))){
var inst_14736 = (state_14771[(7)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14771__$1,(11),inst_14736);
} else {
if((state_val_14772 === (17))){
var inst_14757 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
if(cljs.core.truth_(inst_14757)){
var statearr_14782_14846 = state_14771__$1;
(statearr_14782_14846[(1)] = (19));

} else {
var statearr_14783_14847 = state_14771__$1;
(statearr_14783_14847[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (3))){
var inst_14769 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14771__$1,inst_14769);
} else {
if((state_val_14772 === (12))){
var inst_14746 = (state_14771[(10)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14771__$1,(14),inst_14746);
} else {
if((state_val_14772 === (2))){
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14771__$1,(4),results);
} else {
if((state_val_14772 === (19))){
var state_14771__$1 = state_14771;
var statearr_14784_14848 = state_14771__$1;
(statearr_14784_14848[(2)] = null);

(statearr_14784_14848[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (11))){
var inst_14746 = (state_14771[(2)]);
var state_14771__$1 = (function (){var statearr_14785 = state_14771;
(statearr_14785[(10)] = inst_14746);

return statearr_14785;
})();
var statearr_14786_14849 = state_14771__$1;
(statearr_14786_14849[(2)] = null);

(statearr_14786_14849[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (9))){
var state_14771__$1 = state_14771;
var statearr_14787_14850 = state_14771__$1;
(statearr_14787_14850[(2)] = null);

(statearr_14787_14850[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (5))){
var state_14771__$1 = state_14771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14788_14851 = state_14771__$1;
(statearr_14788_14851[(1)] = (8));

} else {
var statearr_14789_14852 = state_14771__$1;
(statearr_14789_14852[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (14))){
var inst_14749 = (state_14771[(8)]);
var inst_14751 = (state_14771[(11)]);
var inst_14749__$1 = (state_14771[(2)]);
var inst_14750 = (inst_14749__$1 == null);
var inst_14751__$1 = cljs.core.not(inst_14750);
var state_14771__$1 = (function (){var statearr_14790 = state_14771;
(statearr_14790[(8)] = inst_14749__$1);

(statearr_14790[(11)] = inst_14751__$1);

return statearr_14790;
})();
if(inst_14751__$1){
var statearr_14791_14853 = state_14771__$1;
(statearr_14791_14853[(1)] = (15));

} else {
var statearr_14792_14854 = state_14771__$1;
(statearr_14792_14854[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (16))){
var inst_14751 = (state_14771[(11)]);
var state_14771__$1 = state_14771;
var statearr_14793_14855 = state_14771__$1;
(statearr_14793_14855[(2)] = inst_14751);

(statearr_14793_14855[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (10))){
var inst_14743 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14794_14856 = state_14771__$1;
(statearr_14794_14856[(2)] = inst_14743);

(statearr_14794_14856[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (18))){
var inst_14754 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14795_14857 = state_14771__$1;
(statearr_14795_14857[(2)] = inst_14754);

(statearr_14795_14857[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14772 === (8))){
var inst_14740 = cljs.core.async.close_BANG_(to);
var state_14771__$1 = state_14771;
var statearr_14796_14858 = state_14771__$1;
(statearr_14796_14858[(2)] = inst_14740);

(statearr_14796_14858[(1)] = (10));


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
});})(c__14242__auto__,jobs,results,process,async))
;
return ((function (switch__14118__auto__,c__14242__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_14800 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_14800[(1)] = (1));

return statearr_14800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_14771){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14771);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14801){if((e14801 instanceof Object)){
var ex__14122__auto__ = e14801;
var statearr_14802_14859 = state_14771;
(statearr_14802_14859[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14771);

return cljs.core.cst$kw$recur;
} else {
throw e14801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__14860 = state_14771;
state_14771 = G__14860;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_14771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_14771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto__,jobs,results,process,async))
})();
var state__14244__auto__ = (function (){var statearr_14803 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_14803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto__);

return statearr_14803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto__,jobs,results,process,async))
);

return c__14242__auto__;
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
var args14861 = [];
var len__7492__auto___14864 = arguments.length;
var i__7493__auto___14865 = (0);
while(true){
if((i__7493__auto___14865 < len__7492__auto___14864)){
args14861.push((arguments[i__7493__auto___14865]));

var G__14866 = (i__7493__auto___14865 + (1));
i__7493__auto___14865 = G__14866;
continue;
} else {
}
break;
}

var G__14863 = args14861.length;
switch (G__14863) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14861.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args14868 = [];
var len__7492__auto___14871 = arguments.length;
var i__7493__auto___14872 = (0);
while(true){
if((i__7493__auto___14872 < len__7492__auto___14871)){
args14868.push((arguments[i__7493__auto___14872]));

var G__14873 = (i__7493__auto___14872 + (1));
i__7493__auto___14872 = G__14873;
continue;
} else {
}
break;
}

var G__14870 = args14868.length;
switch (G__14870) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14868.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args14875 = [];
var len__7492__auto___14928 = arguments.length;
var i__7493__auto___14929 = (0);
while(true){
if((i__7493__auto___14929 < len__7492__auto___14928)){
args14875.push((arguments[i__7493__auto___14929]));

var G__14930 = (i__7493__auto___14929 + (1));
i__7493__auto___14929 = G__14930;
continue;
} else {
}
break;
}

var G__14877 = args14875.length;
switch (G__14877) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14875.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14242__auto___14932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___14932,tc,fc){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___14932,tc,fc){
return (function (state_14903){
var state_val_14904 = (state_14903[(1)]);
if((state_val_14904 === (7))){
var inst_14899 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
var statearr_14905_14933 = state_14903__$1;
(statearr_14905_14933[(2)] = inst_14899);

(statearr_14905_14933[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (1))){
var state_14903__$1 = state_14903;
var statearr_14906_14934 = state_14903__$1;
(statearr_14906_14934[(2)] = null);

(statearr_14906_14934[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (4))){
var inst_14880 = (state_14903[(7)]);
var inst_14880__$1 = (state_14903[(2)]);
var inst_14881 = (inst_14880__$1 == null);
var state_14903__$1 = (function (){var statearr_14907 = state_14903;
(statearr_14907[(7)] = inst_14880__$1);

return statearr_14907;
})();
if(cljs.core.truth_(inst_14881)){
var statearr_14908_14935 = state_14903__$1;
(statearr_14908_14935[(1)] = (5));

} else {
var statearr_14909_14936 = state_14903__$1;
(statearr_14909_14936[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (13))){
var state_14903__$1 = state_14903;
var statearr_14910_14937 = state_14903__$1;
(statearr_14910_14937[(2)] = null);

(statearr_14910_14937[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (6))){
var inst_14880 = (state_14903[(7)]);
var inst_14886 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14880) : p.call(null,inst_14880));
var state_14903__$1 = state_14903;
if(cljs.core.truth_(inst_14886)){
var statearr_14911_14938 = state_14903__$1;
(statearr_14911_14938[(1)] = (9));

} else {
var statearr_14912_14939 = state_14903__$1;
(statearr_14912_14939[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (3))){
var inst_14901 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14903__$1,inst_14901);
} else {
if((state_val_14904 === (12))){
var state_14903__$1 = state_14903;
var statearr_14913_14940 = state_14903__$1;
(statearr_14913_14940[(2)] = null);

(statearr_14913_14940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (2))){
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14903__$1,(4),ch);
} else {
if((state_val_14904 === (11))){
var inst_14880 = (state_14903[(7)]);
var inst_14890 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14903__$1,(8),inst_14890,inst_14880);
} else {
if((state_val_14904 === (9))){
var state_14903__$1 = state_14903;
var statearr_14914_14941 = state_14903__$1;
(statearr_14914_14941[(2)] = tc);

(statearr_14914_14941[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (5))){
var inst_14883 = cljs.core.async.close_BANG_(tc);
var inst_14884 = cljs.core.async.close_BANG_(fc);
var state_14903__$1 = (function (){var statearr_14915 = state_14903;
(statearr_14915[(8)] = inst_14883);

return statearr_14915;
})();
var statearr_14916_14942 = state_14903__$1;
(statearr_14916_14942[(2)] = inst_14884);

(statearr_14916_14942[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (14))){
var inst_14897 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
var statearr_14917_14943 = state_14903__$1;
(statearr_14917_14943[(2)] = inst_14897);

(statearr_14917_14943[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (10))){
var state_14903__$1 = state_14903;
var statearr_14918_14944 = state_14903__$1;
(statearr_14918_14944[(2)] = fc);

(statearr_14918_14944[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14904 === (8))){
var inst_14892 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
if(cljs.core.truth_(inst_14892)){
var statearr_14919_14945 = state_14903__$1;
(statearr_14919_14945[(1)] = (12));

} else {
var statearr_14920_14946 = state_14903__$1;
(statearr_14920_14946[(1)] = (13));

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
});})(c__14242__auto___14932,tc,fc))
;
return ((function (switch__14118__auto__,c__14242__auto___14932,tc,fc){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_14903){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14903);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14925){if((e14925 instanceof Object)){
var ex__14122__auto__ = e14925;
var statearr_14926_14947 = state_14903;
(statearr_14926_14947[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14903);

return cljs.core.cst$kw$recur;
} else {
throw e14925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__14948 = state_14903;
state_14903 = G__14948;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_14903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_14903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___14932,tc,fc))
})();
var state__14244__auto__ = (function (){var statearr_14927 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_14927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___14932);

return statearr_14927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___14932,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto__){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto__){
return (function (state_15012){
var state_val_15013 = (state_15012[(1)]);
if((state_val_15013 === (7))){
var inst_15008 = (state_15012[(2)]);
var state_15012__$1 = state_15012;
var statearr_15014_15035 = state_15012__$1;
(statearr_15014_15035[(2)] = inst_15008);

(statearr_15014_15035[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15013 === (1))){
var inst_14992 = init;
var state_15012__$1 = (function (){var statearr_15015 = state_15012;
(statearr_15015[(7)] = inst_14992);

return statearr_15015;
})();
var statearr_15016_15036 = state_15012__$1;
(statearr_15016_15036[(2)] = null);

(statearr_15016_15036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15013 === (4))){
var inst_14995 = (state_15012[(8)]);
var inst_14995__$1 = (state_15012[(2)]);
var inst_14996 = (inst_14995__$1 == null);
var state_15012__$1 = (function (){var statearr_15017 = state_15012;
(statearr_15017[(8)] = inst_14995__$1);

return statearr_15017;
})();
if(cljs.core.truth_(inst_14996)){
var statearr_15018_15037 = state_15012__$1;
(statearr_15018_15037[(1)] = (5));

} else {
var statearr_15019_15038 = state_15012__$1;
(statearr_15019_15038[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15013 === (6))){
var inst_14995 = (state_15012[(8)]);
var inst_14992 = (state_15012[(7)]);
var inst_14999 = (state_15012[(9)]);
var inst_14999__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14992,inst_14995) : f.call(null,inst_14992,inst_14995));
var inst_15000 = cljs.core.reduced_QMARK_(inst_14999__$1);
var state_15012__$1 = (function (){var statearr_15020 = state_15012;
(statearr_15020[(9)] = inst_14999__$1);

return statearr_15020;
})();
if(inst_15000){
var statearr_15021_15039 = state_15012__$1;
(statearr_15021_15039[(1)] = (8));

} else {
var statearr_15022_15040 = state_15012__$1;
(statearr_15022_15040[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15013 === (3))){
var inst_15010 = (state_15012[(2)]);
var state_15012__$1 = state_15012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15012__$1,inst_15010);
} else {
if((state_val_15013 === (2))){
var state_15012__$1 = state_15012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15012__$1,(4),ch);
} else {
if((state_val_15013 === (9))){
var inst_14999 = (state_15012[(9)]);
var inst_14992 = inst_14999;
var state_15012__$1 = (function (){var statearr_15023 = state_15012;
(statearr_15023[(7)] = inst_14992);

return statearr_15023;
})();
var statearr_15024_15041 = state_15012__$1;
(statearr_15024_15041[(2)] = null);

(statearr_15024_15041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15013 === (5))){
var inst_14992 = (state_15012[(7)]);
var state_15012__$1 = state_15012;
var statearr_15025_15042 = state_15012__$1;
(statearr_15025_15042[(2)] = inst_14992);

(statearr_15025_15042[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15013 === (10))){
var inst_15006 = (state_15012[(2)]);
var state_15012__$1 = state_15012;
var statearr_15026_15043 = state_15012__$1;
(statearr_15026_15043[(2)] = inst_15006);

(statearr_15026_15043[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15013 === (8))){
var inst_14999 = (state_15012[(9)]);
var inst_15002 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14999) : cljs.core.deref.call(null,inst_14999));
var state_15012__$1 = state_15012;
var statearr_15027_15044 = state_15012__$1;
(statearr_15027_15044[(2)] = inst_15002);

(statearr_15027_15044[(1)] = (10));


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
});})(c__14242__auto__))
;
return ((function (switch__14118__auto__,c__14242__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14119__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14119__auto____0 = (function (){
var statearr_15031 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15031[(0)] = cljs$core$async$reduce_$_state_machine__14119__auto__);

(statearr_15031[(1)] = (1));

return statearr_15031;
});
var cljs$core$async$reduce_$_state_machine__14119__auto____1 = (function (state_15012){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15012);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15032){if((e15032 instanceof Object)){
var ex__14122__auto__ = e15032;
var statearr_15033_15045 = state_15012;
(statearr_15033_15045[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15012);

return cljs.core.cst$kw$recur;
} else {
throw e15032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__15046 = state_15012;
state_15012 = G__15046;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14119__auto__ = function(state_15012){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14119__auto____1.call(this,state_15012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14119__auto____0;
cljs$core$async$reduce_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14119__auto____1;
return cljs$core$async$reduce_$_state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto__))
})();
var state__14244__auto__ = (function (){var statearr_15034 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_15034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto__);

return statearr_15034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto__))
);

return c__14242__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15047 = [];
var len__7492__auto___15099 = arguments.length;
var i__7493__auto___15100 = (0);
while(true){
if((i__7493__auto___15100 < len__7492__auto___15099)){
args15047.push((arguments[i__7493__auto___15100]));

var G__15101 = (i__7493__auto___15100 + (1));
i__7493__auto___15100 = G__15101;
continue;
} else {
}
break;
}

var G__15049 = args15047.length;
switch (G__15049) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15047.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto__){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto__){
return (function (state_15074){
var state_val_15075 = (state_15074[(1)]);
if((state_val_15075 === (7))){
var inst_15056 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
var statearr_15076_15103 = state_15074__$1;
(statearr_15076_15103[(2)] = inst_15056);

(statearr_15076_15103[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (1))){
var inst_15050 = cljs.core.seq(coll);
var inst_15051 = inst_15050;
var state_15074__$1 = (function (){var statearr_15077 = state_15074;
(statearr_15077[(7)] = inst_15051);

return statearr_15077;
})();
var statearr_15078_15104 = state_15074__$1;
(statearr_15078_15104[(2)] = null);

(statearr_15078_15104[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (4))){
var inst_15051 = (state_15074[(7)]);
var inst_15054 = cljs.core.first(inst_15051);
var state_15074__$1 = state_15074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15074__$1,(7),ch,inst_15054);
} else {
if((state_val_15075 === (13))){
var inst_15068 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
var statearr_15079_15105 = state_15074__$1;
(statearr_15079_15105[(2)] = inst_15068);

(statearr_15079_15105[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (6))){
var inst_15059 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
if(cljs.core.truth_(inst_15059)){
var statearr_15080_15106 = state_15074__$1;
(statearr_15080_15106[(1)] = (8));

} else {
var statearr_15081_15107 = state_15074__$1;
(statearr_15081_15107[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (3))){
var inst_15072 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15074__$1,inst_15072);
} else {
if((state_val_15075 === (12))){
var state_15074__$1 = state_15074;
var statearr_15082_15108 = state_15074__$1;
(statearr_15082_15108[(2)] = null);

(statearr_15082_15108[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (2))){
var inst_15051 = (state_15074[(7)]);
var state_15074__$1 = state_15074;
if(cljs.core.truth_(inst_15051)){
var statearr_15083_15109 = state_15074__$1;
(statearr_15083_15109[(1)] = (4));

} else {
var statearr_15084_15110 = state_15074__$1;
(statearr_15084_15110[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (11))){
var inst_15065 = cljs.core.async.close_BANG_(ch);
var state_15074__$1 = state_15074;
var statearr_15085_15111 = state_15074__$1;
(statearr_15085_15111[(2)] = inst_15065);

(statearr_15085_15111[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (9))){
var state_15074__$1 = state_15074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15086_15112 = state_15074__$1;
(statearr_15086_15112[(1)] = (11));

} else {
var statearr_15087_15113 = state_15074__$1;
(statearr_15087_15113[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (5))){
var inst_15051 = (state_15074[(7)]);
var state_15074__$1 = state_15074;
var statearr_15088_15114 = state_15074__$1;
(statearr_15088_15114[(2)] = inst_15051);

(statearr_15088_15114[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (10))){
var inst_15070 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
var statearr_15089_15115 = state_15074__$1;
(statearr_15089_15115[(2)] = inst_15070);

(statearr_15089_15115[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15075 === (8))){
var inst_15051 = (state_15074[(7)]);
var inst_15061 = cljs.core.next(inst_15051);
var inst_15051__$1 = inst_15061;
var state_15074__$1 = (function (){var statearr_15090 = state_15074;
(statearr_15090[(7)] = inst_15051__$1);

return statearr_15090;
})();
var statearr_15091_15116 = state_15074__$1;
(statearr_15091_15116[(2)] = null);

(statearr_15091_15116[(1)] = (2));


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
});})(c__14242__auto__))
;
return ((function (switch__14118__auto__,c__14242__auto__){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_15095 = [null,null,null,null,null,null,null,null];
(statearr_15095[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_15095[(1)] = (1));

return statearr_15095;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_15074){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15074);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15096){if((e15096 instanceof Object)){
var ex__14122__auto__ = e15096;
var statearr_15097_15117 = state_15074;
(statearr_15097_15117[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15074);

return cljs.core.cst$kw$recur;
} else {
throw e15096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__15118 = state_15074;
state_15074 = G__15118;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_15074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_15074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto__))
})();
var state__14244__auto__ = (function (){var statearr_15098 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_15098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto__);

return statearr_15098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto__))
);

return c__14242__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7080__auto__ = (((_ == null))?null:_);
var m__7081__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7081__auto__.call(null,_));
} else {
var m__7081__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7081__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7081__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7081__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7081__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7081__auto__.call(null,m,ch));
} else {
var m__7081__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7081__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7081__auto__.call(null,m));
} else {
var m__7081__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7081__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
var cs = (function (){var G__15347 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15347) : cljs.core.atom.call(null,G__15347));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15348 = (function (mult,ch,cs,meta15349){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15349 = meta15349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15350,meta15349__$1){
var self__ = this;
var _15350__$1 = this;
return (new cljs.core.async.t_cljs$core$async15348(self__.mult,self__.ch,self__.cs,meta15349__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15350){
var self__ = this;
var _15350__$1 = this;
return self__.meta15349;
});})(cs))
;

cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15348.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15351_15575 = self__.cs;
var G__15352_15576 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15351_15575,G__15352_15576) : cljs.core.reset_BANG_.call(null,G__15351_15575,G__15352_15576));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15348.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15349], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15348";

cljs.core.async.t_cljs$core$async15348.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async15348");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15348 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15348(mult__$1,ch__$1,cs__$1,meta15349){
return (new cljs.core.async.t_cljs$core$async15348(mult__$1,ch__$1,cs__$1,meta15349));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15348(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14242__auto___15577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___15577,cs,m,dchan,dctr,done){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___15577,cs,m,dchan,dctr,done){
return (function (state_15487){
var state_val_15488 = (state_15487[(1)]);
if((state_val_15488 === (7))){
var inst_15483 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15489_15578 = state_15487__$1;
(statearr_15489_15578[(2)] = inst_15483);

(statearr_15489_15578[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (20))){
var inst_15386 = (state_15487[(7)]);
var inst_15398 = cljs.core.first(inst_15386);
var inst_15399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15398,(0),null);
var inst_15400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15398,(1),null);
var state_15487__$1 = (function (){var statearr_15490 = state_15487;
(statearr_15490[(8)] = inst_15399);

return statearr_15490;
})();
if(cljs.core.truth_(inst_15400)){
var statearr_15491_15579 = state_15487__$1;
(statearr_15491_15579[(1)] = (22));

} else {
var statearr_15492_15580 = state_15487__$1;
(statearr_15492_15580[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (27))){
var inst_15355 = (state_15487[(9)]);
var inst_15430 = (state_15487[(10)]);
var inst_15428 = (state_15487[(11)]);
var inst_15435 = (state_15487[(12)]);
var inst_15435__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15428,inst_15430);
var inst_15436 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15435__$1,inst_15355,done);
var state_15487__$1 = (function (){var statearr_15493 = state_15487;
(statearr_15493[(12)] = inst_15435__$1);

return statearr_15493;
})();
if(cljs.core.truth_(inst_15436)){
var statearr_15494_15581 = state_15487__$1;
(statearr_15494_15581[(1)] = (30));

} else {
var statearr_15495_15582 = state_15487__$1;
(statearr_15495_15582[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (1))){
var state_15487__$1 = state_15487;
var statearr_15496_15583 = state_15487__$1;
(statearr_15496_15583[(2)] = null);

(statearr_15496_15583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (24))){
var inst_15386 = (state_15487[(7)]);
var inst_15405 = (state_15487[(2)]);
var inst_15406 = cljs.core.next(inst_15386);
var inst_15364 = inst_15406;
var inst_15365 = null;
var inst_15366 = (0);
var inst_15367 = (0);
var state_15487__$1 = (function (){var statearr_15497 = state_15487;
(statearr_15497[(13)] = inst_15366);

(statearr_15497[(14)] = inst_15365);

(statearr_15497[(15)] = inst_15364);

(statearr_15497[(16)] = inst_15367);

(statearr_15497[(17)] = inst_15405);

return statearr_15497;
})();
var statearr_15498_15584 = state_15487__$1;
(statearr_15498_15584[(2)] = null);

(statearr_15498_15584[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (39))){
var state_15487__$1 = state_15487;
var statearr_15502_15585 = state_15487__$1;
(statearr_15502_15585[(2)] = null);

(statearr_15502_15585[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (4))){
var inst_15355 = (state_15487[(9)]);
var inst_15355__$1 = (state_15487[(2)]);
var inst_15356 = (inst_15355__$1 == null);
var state_15487__$1 = (function (){var statearr_15503 = state_15487;
(statearr_15503[(9)] = inst_15355__$1);

return statearr_15503;
})();
if(cljs.core.truth_(inst_15356)){
var statearr_15504_15586 = state_15487__$1;
(statearr_15504_15586[(1)] = (5));

} else {
var statearr_15505_15587 = state_15487__$1;
(statearr_15505_15587[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (15))){
var inst_15366 = (state_15487[(13)]);
var inst_15365 = (state_15487[(14)]);
var inst_15364 = (state_15487[(15)]);
var inst_15367 = (state_15487[(16)]);
var inst_15382 = (state_15487[(2)]);
var inst_15383 = (inst_15367 + (1));
var tmp15499 = inst_15366;
var tmp15500 = inst_15365;
var tmp15501 = inst_15364;
var inst_15364__$1 = tmp15501;
var inst_15365__$1 = tmp15500;
var inst_15366__$1 = tmp15499;
var inst_15367__$1 = inst_15383;
var state_15487__$1 = (function (){var statearr_15506 = state_15487;
(statearr_15506[(13)] = inst_15366__$1);

(statearr_15506[(14)] = inst_15365__$1);

(statearr_15506[(15)] = inst_15364__$1);

(statearr_15506[(18)] = inst_15382);

(statearr_15506[(16)] = inst_15367__$1);

return statearr_15506;
})();
var statearr_15507_15588 = state_15487__$1;
(statearr_15507_15588[(2)] = null);

(statearr_15507_15588[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (21))){
var inst_15409 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15511_15589 = state_15487__$1;
(statearr_15511_15589[(2)] = inst_15409);

(statearr_15511_15589[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (31))){
var inst_15435 = (state_15487[(12)]);
var inst_15439 = done(null);
var inst_15440 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15435);
var state_15487__$1 = (function (){var statearr_15512 = state_15487;
(statearr_15512[(19)] = inst_15439);

return statearr_15512;
})();
var statearr_15513_15590 = state_15487__$1;
(statearr_15513_15590[(2)] = inst_15440);

(statearr_15513_15590[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (32))){
var inst_15427 = (state_15487[(20)]);
var inst_15429 = (state_15487[(21)]);
var inst_15430 = (state_15487[(10)]);
var inst_15428 = (state_15487[(11)]);
var inst_15442 = (state_15487[(2)]);
var inst_15443 = (inst_15430 + (1));
var tmp15508 = inst_15427;
var tmp15509 = inst_15429;
var tmp15510 = inst_15428;
var inst_15427__$1 = tmp15508;
var inst_15428__$1 = tmp15510;
var inst_15429__$1 = tmp15509;
var inst_15430__$1 = inst_15443;
var state_15487__$1 = (function (){var statearr_15514 = state_15487;
(statearr_15514[(22)] = inst_15442);

(statearr_15514[(20)] = inst_15427__$1);

(statearr_15514[(21)] = inst_15429__$1);

(statearr_15514[(10)] = inst_15430__$1);

(statearr_15514[(11)] = inst_15428__$1);

return statearr_15514;
})();
var statearr_15515_15591 = state_15487__$1;
(statearr_15515_15591[(2)] = null);

(statearr_15515_15591[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (40))){
var inst_15455 = (state_15487[(23)]);
var inst_15459 = done(null);
var inst_15460 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15455);
var state_15487__$1 = (function (){var statearr_15516 = state_15487;
(statearr_15516[(24)] = inst_15459);

return statearr_15516;
})();
var statearr_15517_15592 = state_15487__$1;
(statearr_15517_15592[(2)] = inst_15460);

(statearr_15517_15592[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (33))){
var inst_15446 = (state_15487[(25)]);
var inst_15448 = cljs.core.chunked_seq_QMARK_(inst_15446);
var state_15487__$1 = state_15487;
if(inst_15448){
var statearr_15518_15593 = state_15487__$1;
(statearr_15518_15593[(1)] = (36));

} else {
var statearr_15519_15594 = state_15487__$1;
(statearr_15519_15594[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (13))){
var inst_15376 = (state_15487[(26)]);
var inst_15379 = cljs.core.async.close_BANG_(inst_15376);
var state_15487__$1 = state_15487;
var statearr_15520_15595 = state_15487__$1;
(statearr_15520_15595[(2)] = inst_15379);

(statearr_15520_15595[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (22))){
var inst_15399 = (state_15487[(8)]);
var inst_15402 = cljs.core.async.close_BANG_(inst_15399);
var state_15487__$1 = state_15487;
var statearr_15521_15596 = state_15487__$1;
(statearr_15521_15596[(2)] = inst_15402);

(statearr_15521_15596[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (36))){
var inst_15446 = (state_15487[(25)]);
var inst_15450 = cljs.core.chunk_first(inst_15446);
var inst_15451 = cljs.core.chunk_rest(inst_15446);
var inst_15452 = cljs.core.count(inst_15450);
var inst_15427 = inst_15451;
var inst_15428 = inst_15450;
var inst_15429 = inst_15452;
var inst_15430 = (0);
var state_15487__$1 = (function (){var statearr_15522 = state_15487;
(statearr_15522[(20)] = inst_15427);

(statearr_15522[(21)] = inst_15429);

(statearr_15522[(10)] = inst_15430);

(statearr_15522[(11)] = inst_15428);

return statearr_15522;
})();
var statearr_15523_15597 = state_15487__$1;
(statearr_15523_15597[(2)] = null);

(statearr_15523_15597[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (41))){
var inst_15446 = (state_15487[(25)]);
var inst_15462 = (state_15487[(2)]);
var inst_15463 = cljs.core.next(inst_15446);
var inst_15427 = inst_15463;
var inst_15428 = null;
var inst_15429 = (0);
var inst_15430 = (0);
var state_15487__$1 = (function (){var statearr_15524 = state_15487;
(statearr_15524[(20)] = inst_15427);

(statearr_15524[(21)] = inst_15429);

(statearr_15524[(10)] = inst_15430);

(statearr_15524[(27)] = inst_15462);

(statearr_15524[(11)] = inst_15428);

return statearr_15524;
})();
var statearr_15525_15598 = state_15487__$1;
(statearr_15525_15598[(2)] = null);

(statearr_15525_15598[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (43))){
var state_15487__$1 = state_15487;
var statearr_15526_15599 = state_15487__$1;
(statearr_15526_15599[(2)] = null);

(statearr_15526_15599[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (29))){
var inst_15471 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15527_15600 = state_15487__$1;
(statearr_15527_15600[(2)] = inst_15471);

(statearr_15527_15600[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (44))){
var inst_15480 = (state_15487[(2)]);
var state_15487__$1 = (function (){var statearr_15528 = state_15487;
(statearr_15528[(28)] = inst_15480);

return statearr_15528;
})();
var statearr_15529_15601 = state_15487__$1;
(statearr_15529_15601[(2)] = null);

(statearr_15529_15601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (6))){
var inst_15419 = (state_15487[(29)]);
var inst_15418 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15419__$1 = cljs.core.keys(inst_15418);
var inst_15420 = cljs.core.count(inst_15419__$1);
var inst_15421 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15420) : cljs.core.reset_BANG_.call(null,dctr,inst_15420));
var inst_15426 = cljs.core.seq(inst_15419__$1);
var inst_15427 = inst_15426;
var inst_15428 = null;
var inst_15429 = (0);
var inst_15430 = (0);
var state_15487__$1 = (function (){var statearr_15530 = state_15487;
(statearr_15530[(20)] = inst_15427);

(statearr_15530[(21)] = inst_15429);

(statearr_15530[(30)] = inst_15421);

(statearr_15530[(29)] = inst_15419__$1);

(statearr_15530[(10)] = inst_15430);

(statearr_15530[(11)] = inst_15428);

return statearr_15530;
})();
var statearr_15531_15602 = state_15487__$1;
(statearr_15531_15602[(2)] = null);

(statearr_15531_15602[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (28))){
var inst_15427 = (state_15487[(20)]);
var inst_15446 = (state_15487[(25)]);
var inst_15446__$1 = cljs.core.seq(inst_15427);
var state_15487__$1 = (function (){var statearr_15532 = state_15487;
(statearr_15532[(25)] = inst_15446__$1);

return statearr_15532;
})();
if(inst_15446__$1){
var statearr_15533_15603 = state_15487__$1;
(statearr_15533_15603[(1)] = (33));

} else {
var statearr_15534_15604 = state_15487__$1;
(statearr_15534_15604[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (25))){
var inst_15429 = (state_15487[(21)]);
var inst_15430 = (state_15487[(10)]);
var inst_15432 = (inst_15430 < inst_15429);
var inst_15433 = inst_15432;
var state_15487__$1 = state_15487;
if(cljs.core.truth_(inst_15433)){
var statearr_15535_15605 = state_15487__$1;
(statearr_15535_15605[(1)] = (27));

} else {
var statearr_15536_15606 = state_15487__$1;
(statearr_15536_15606[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (34))){
var state_15487__$1 = state_15487;
var statearr_15537_15607 = state_15487__$1;
(statearr_15537_15607[(2)] = null);

(statearr_15537_15607[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (17))){
var state_15487__$1 = state_15487;
var statearr_15538_15608 = state_15487__$1;
(statearr_15538_15608[(2)] = null);

(statearr_15538_15608[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (3))){
var inst_15485 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15487__$1,inst_15485);
} else {
if((state_val_15488 === (12))){
var inst_15414 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15539_15609 = state_15487__$1;
(statearr_15539_15609[(2)] = inst_15414);

(statearr_15539_15609[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (2))){
var state_15487__$1 = state_15487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15487__$1,(4),ch);
} else {
if((state_val_15488 === (23))){
var state_15487__$1 = state_15487;
var statearr_15540_15610 = state_15487__$1;
(statearr_15540_15610[(2)] = null);

(statearr_15540_15610[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (35))){
var inst_15469 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15541_15611 = state_15487__$1;
(statearr_15541_15611[(2)] = inst_15469);

(statearr_15541_15611[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (19))){
var inst_15386 = (state_15487[(7)]);
var inst_15390 = cljs.core.chunk_first(inst_15386);
var inst_15391 = cljs.core.chunk_rest(inst_15386);
var inst_15392 = cljs.core.count(inst_15390);
var inst_15364 = inst_15391;
var inst_15365 = inst_15390;
var inst_15366 = inst_15392;
var inst_15367 = (0);
var state_15487__$1 = (function (){var statearr_15542 = state_15487;
(statearr_15542[(13)] = inst_15366);

(statearr_15542[(14)] = inst_15365);

(statearr_15542[(15)] = inst_15364);

(statearr_15542[(16)] = inst_15367);

return statearr_15542;
})();
var statearr_15543_15612 = state_15487__$1;
(statearr_15543_15612[(2)] = null);

(statearr_15543_15612[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (11))){
var inst_15386 = (state_15487[(7)]);
var inst_15364 = (state_15487[(15)]);
var inst_15386__$1 = cljs.core.seq(inst_15364);
var state_15487__$1 = (function (){var statearr_15544 = state_15487;
(statearr_15544[(7)] = inst_15386__$1);

return statearr_15544;
})();
if(inst_15386__$1){
var statearr_15545_15613 = state_15487__$1;
(statearr_15545_15613[(1)] = (16));

} else {
var statearr_15546_15614 = state_15487__$1;
(statearr_15546_15614[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (9))){
var inst_15416 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15547_15615 = state_15487__$1;
(statearr_15547_15615[(2)] = inst_15416);

(statearr_15547_15615[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (5))){
var inst_15362 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15363 = cljs.core.seq(inst_15362);
var inst_15364 = inst_15363;
var inst_15365 = null;
var inst_15366 = (0);
var inst_15367 = (0);
var state_15487__$1 = (function (){var statearr_15548 = state_15487;
(statearr_15548[(13)] = inst_15366);

(statearr_15548[(14)] = inst_15365);

(statearr_15548[(15)] = inst_15364);

(statearr_15548[(16)] = inst_15367);

return statearr_15548;
})();
var statearr_15549_15616 = state_15487__$1;
(statearr_15549_15616[(2)] = null);

(statearr_15549_15616[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (14))){
var state_15487__$1 = state_15487;
var statearr_15550_15617 = state_15487__$1;
(statearr_15550_15617[(2)] = null);

(statearr_15550_15617[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (45))){
var inst_15477 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15551_15618 = state_15487__$1;
(statearr_15551_15618[(2)] = inst_15477);

(statearr_15551_15618[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (26))){
var inst_15419 = (state_15487[(29)]);
var inst_15473 = (state_15487[(2)]);
var inst_15474 = cljs.core.seq(inst_15419);
var state_15487__$1 = (function (){var statearr_15552 = state_15487;
(statearr_15552[(31)] = inst_15473);

return statearr_15552;
})();
if(inst_15474){
var statearr_15553_15619 = state_15487__$1;
(statearr_15553_15619[(1)] = (42));

} else {
var statearr_15554_15620 = state_15487__$1;
(statearr_15554_15620[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (16))){
var inst_15386 = (state_15487[(7)]);
var inst_15388 = cljs.core.chunked_seq_QMARK_(inst_15386);
var state_15487__$1 = state_15487;
if(inst_15388){
var statearr_15555_15621 = state_15487__$1;
(statearr_15555_15621[(1)] = (19));

} else {
var statearr_15556_15622 = state_15487__$1;
(statearr_15556_15622[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (38))){
var inst_15466 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15557_15623 = state_15487__$1;
(statearr_15557_15623[(2)] = inst_15466);

(statearr_15557_15623[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (30))){
var state_15487__$1 = state_15487;
var statearr_15558_15624 = state_15487__$1;
(statearr_15558_15624[(2)] = null);

(statearr_15558_15624[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (10))){
var inst_15365 = (state_15487[(14)]);
var inst_15367 = (state_15487[(16)]);
var inst_15375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15365,inst_15367);
var inst_15376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15375,(0),null);
var inst_15377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15375,(1),null);
var state_15487__$1 = (function (){var statearr_15559 = state_15487;
(statearr_15559[(26)] = inst_15376);

return statearr_15559;
})();
if(cljs.core.truth_(inst_15377)){
var statearr_15560_15625 = state_15487__$1;
(statearr_15560_15625[(1)] = (13));

} else {
var statearr_15561_15626 = state_15487__$1;
(statearr_15561_15626[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (18))){
var inst_15412 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15562_15627 = state_15487__$1;
(statearr_15562_15627[(2)] = inst_15412);

(statearr_15562_15627[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (42))){
var state_15487__$1 = state_15487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15487__$1,(45),dchan);
} else {
if((state_val_15488 === (37))){
var inst_15446 = (state_15487[(25)]);
var inst_15355 = (state_15487[(9)]);
var inst_15455 = (state_15487[(23)]);
var inst_15455__$1 = cljs.core.first(inst_15446);
var inst_15456 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15455__$1,inst_15355,done);
var state_15487__$1 = (function (){var statearr_15563 = state_15487;
(statearr_15563[(23)] = inst_15455__$1);

return statearr_15563;
})();
if(cljs.core.truth_(inst_15456)){
var statearr_15564_15628 = state_15487__$1;
(statearr_15564_15628[(1)] = (39));

} else {
var statearr_15565_15629 = state_15487__$1;
(statearr_15565_15629[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15488 === (8))){
var inst_15366 = (state_15487[(13)]);
var inst_15367 = (state_15487[(16)]);
var inst_15369 = (inst_15367 < inst_15366);
var inst_15370 = inst_15369;
var state_15487__$1 = state_15487;
if(cljs.core.truth_(inst_15370)){
var statearr_15566_15630 = state_15487__$1;
(statearr_15566_15630[(1)] = (10));

} else {
var statearr_15567_15631 = state_15487__$1;
(statearr_15567_15631[(1)] = (11));

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
});})(c__14242__auto___15577,cs,m,dchan,dctr,done))
;
return ((function (switch__14118__auto__,c__14242__auto___15577,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14119__auto__ = null;
var cljs$core$async$mult_$_state_machine__14119__auto____0 = (function (){
var statearr_15571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15571[(0)] = cljs$core$async$mult_$_state_machine__14119__auto__);

(statearr_15571[(1)] = (1));

return statearr_15571;
});
var cljs$core$async$mult_$_state_machine__14119__auto____1 = (function (state_15487){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15487);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15572){if((e15572 instanceof Object)){
var ex__14122__auto__ = e15572;
var statearr_15573_15632 = state_15487;
(statearr_15573_15632[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15487);

return cljs.core.cst$kw$recur;
} else {
throw e15572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__15633 = state_15487;
state_15487 = G__15633;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14119__auto__ = function(state_15487){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14119__auto____1.call(this,state_15487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14119__auto____0;
cljs$core$async$mult_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14119__auto____1;
return cljs$core$async$mult_$_state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___15577,cs,m,dchan,dctr,done))
})();
var state__14244__auto__ = (function (){var statearr_15574 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_15574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___15577);

return statearr_15574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___15577,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15634 = [];
var len__7492__auto___15637 = arguments.length;
var i__7493__auto___15638 = (0);
while(true){
if((i__7493__auto___15638 < len__7492__auto___15637)){
args15634.push((arguments[i__7493__auto___15638]));

var G__15639 = (i__7493__auto___15638 + (1));
i__7493__auto___15638 = G__15639;
continue;
} else {
}
break;
}

var G__15636 = args15634.length;
switch (G__15636) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15634.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7081__auto__.call(null,m,ch));
} else {
var m__7081__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7081__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7081__auto__.call(null,m,ch));
} else {
var m__7081__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7081__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7081__auto__.call(null,m));
} else {
var m__7081__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7081__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7081__auto__.call(null,m,state_map));
} else {
var m__7081__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7081__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7081__auto__.call(null,m,mode));
} else {
var m__7081__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7081__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15651 = arguments.length;
var i__7493__auto___15652 = (0);
while(true){
if((i__7493__auto___15652 < len__7492__auto___15651)){
args__7499__auto__.push((arguments[i__7493__auto___15652]));

var G__15653 = (i__7493__auto___15652 + (1));
i__7493__auto___15652 = G__15653;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((3) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7500__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15645){
var map__15646 = p__15645;
var map__15646__$1 = ((((!((map__15646 == null)))?((((map__15646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15646):map__15646);
var opts = map__15646__$1;
var statearr_15648_15654 = state;
(statearr_15648_15654[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15646,map__15646__$1,opts){
return (function (val){
var statearr_15649_15655 = state;
(statearr_15649_15655[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15646,map__15646__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15650_15656 = state;
(statearr_15650_15656[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15641){
var G__15642 = cljs.core.first(seq15641);
var seq15641__$1 = cljs.core.next(seq15641);
var G__15643 = cljs.core.first(seq15641__$1);
var seq15641__$2 = cljs.core.next(seq15641__$1);
var G__15644 = cljs.core.first(seq15641__$2);
var seq15641__$3 = cljs.core.next(seq15641__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15642,G__15643,G__15644,seq15641__$3);
});

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
var cs = (function (){var G__15826 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15826) : cljs.core.atom.call(null,G__15826));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__15827 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15827) : cljs.core.atom.call(null,G__15827));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15828 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15829){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15829 = meta15829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15830,meta15829__$1){
var self__ = this;
var _15830__$1 = this;
return (new cljs.core.async.t_cljs$core$async15828(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15830){
var self__ = this;
var _15830__$1 = this;
return self__.meta15829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15831_15995 = self__.cs;
var G__15832_15996 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15831_15995,G__15832_15996) : cljs.core.reset_BANG_.call(null,G__15831_15995,G__15832_15996));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15829], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15828";

cljs.core.async.t_cljs$core$async15828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async15828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15829){
return (new cljs.core.async.t_cljs$core$async15828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15828(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14242__auto___15997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___15997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___15997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15932){
var state_val_15933 = (state_15932[(1)]);
if((state_val_15933 === (7))){
var inst_15848 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
var statearr_15934_15998 = state_15932__$1;
(statearr_15934_15998[(2)] = inst_15848);

(statearr_15934_15998[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (20))){
var inst_15860 = (state_15932[(7)]);
var state_15932__$1 = state_15932;
var statearr_15935_15999 = state_15932__$1;
(statearr_15935_15999[(2)] = inst_15860);

(statearr_15935_15999[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (27))){
var state_15932__$1 = state_15932;
var statearr_15936_16000 = state_15932__$1;
(statearr_15936_16000[(2)] = null);

(statearr_15936_16000[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (1))){
var inst_15836 = (state_15932[(8)]);
var inst_15836__$1 = calc_state();
var inst_15838 = (inst_15836__$1 == null);
var inst_15839 = cljs.core.not(inst_15838);
var state_15932__$1 = (function (){var statearr_15937 = state_15932;
(statearr_15937[(8)] = inst_15836__$1);

return statearr_15937;
})();
if(inst_15839){
var statearr_15938_16001 = state_15932__$1;
(statearr_15938_16001[(1)] = (2));

} else {
var statearr_15939_16002 = state_15932__$1;
(statearr_15939_16002[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (24))){
var inst_15883 = (state_15932[(9)]);
var inst_15906 = (state_15932[(10)]);
var inst_15892 = (state_15932[(11)]);
var inst_15906__$1 = (inst_15883.cljs$core$IFn$_invoke$arity$1 ? inst_15883.cljs$core$IFn$_invoke$arity$1(inst_15892) : inst_15883.call(null,inst_15892));
var state_15932__$1 = (function (){var statearr_15940 = state_15932;
(statearr_15940[(10)] = inst_15906__$1);

return statearr_15940;
})();
if(cljs.core.truth_(inst_15906__$1)){
var statearr_15941_16003 = state_15932__$1;
(statearr_15941_16003[(1)] = (29));

} else {
var statearr_15942_16004 = state_15932__$1;
(statearr_15942_16004[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (4))){
var inst_15851 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15851)){
var statearr_15943_16005 = state_15932__$1;
(statearr_15943_16005[(1)] = (8));

} else {
var statearr_15944_16006 = state_15932__$1;
(statearr_15944_16006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (15))){
var inst_15877 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15877)){
var statearr_15945_16007 = state_15932__$1;
(statearr_15945_16007[(1)] = (19));

} else {
var statearr_15946_16008 = state_15932__$1;
(statearr_15946_16008[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (21))){
var inst_15882 = (state_15932[(12)]);
var inst_15882__$1 = (state_15932[(2)]);
var inst_15883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15882__$1,cljs.core.cst$kw$solos);
var inst_15884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15882__$1,cljs.core.cst$kw$mutes);
var inst_15885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15882__$1,cljs.core.cst$kw$reads);
var state_15932__$1 = (function (){var statearr_15947 = state_15932;
(statearr_15947[(9)] = inst_15883);

(statearr_15947[(12)] = inst_15882__$1);

(statearr_15947[(13)] = inst_15884);

return statearr_15947;
})();
return cljs.core.async.ioc_alts_BANG_(state_15932__$1,(22),inst_15885);
} else {
if((state_val_15933 === (31))){
var inst_15914 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15914)){
var statearr_15948_16009 = state_15932__$1;
(statearr_15948_16009[(1)] = (32));

} else {
var statearr_15949_16010 = state_15932__$1;
(statearr_15949_16010[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (32))){
var inst_15891 = (state_15932[(14)]);
var state_15932__$1 = state_15932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15932__$1,(35),out,inst_15891);
} else {
if((state_val_15933 === (33))){
var inst_15882 = (state_15932[(12)]);
var inst_15860 = inst_15882;
var state_15932__$1 = (function (){var statearr_15950 = state_15932;
(statearr_15950[(7)] = inst_15860);

return statearr_15950;
})();
var statearr_15951_16011 = state_15932__$1;
(statearr_15951_16011[(2)] = null);

(statearr_15951_16011[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (13))){
var inst_15860 = (state_15932[(7)]);
var inst_15867 = inst_15860.cljs$lang$protocol_mask$partition0$;
var inst_15868 = (inst_15867 & (64));
var inst_15869 = inst_15860.cljs$core$ISeq$;
var inst_15870 = (inst_15868) || (inst_15869);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15870)){
var statearr_15952_16012 = state_15932__$1;
(statearr_15952_16012[(1)] = (16));

} else {
var statearr_15953_16013 = state_15932__$1;
(statearr_15953_16013[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (22))){
var inst_15892 = (state_15932[(11)]);
var inst_15891 = (state_15932[(14)]);
var inst_15890 = (state_15932[(2)]);
var inst_15891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15890,(0),null);
var inst_15892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15890,(1),null);
var inst_15893 = (inst_15891__$1 == null);
var inst_15894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15892__$1,change);
var inst_15895 = (inst_15893) || (inst_15894);
var state_15932__$1 = (function (){var statearr_15954 = state_15932;
(statearr_15954[(11)] = inst_15892__$1);

(statearr_15954[(14)] = inst_15891__$1);

return statearr_15954;
})();
if(cljs.core.truth_(inst_15895)){
var statearr_15955_16014 = state_15932__$1;
(statearr_15955_16014[(1)] = (23));

} else {
var statearr_15956_16015 = state_15932__$1;
(statearr_15956_16015[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (36))){
var inst_15882 = (state_15932[(12)]);
var inst_15860 = inst_15882;
var state_15932__$1 = (function (){var statearr_15957 = state_15932;
(statearr_15957[(7)] = inst_15860);

return statearr_15957;
})();
var statearr_15958_16016 = state_15932__$1;
(statearr_15958_16016[(2)] = null);

(statearr_15958_16016[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (29))){
var inst_15906 = (state_15932[(10)]);
var state_15932__$1 = state_15932;
var statearr_15959_16017 = state_15932__$1;
(statearr_15959_16017[(2)] = inst_15906);

(statearr_15959_16017[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (6))){
var state_15932__$1 = state_15932;
var statearr_15960_16018 = state_15932__$1;
(statearr_15960_16018[(2)] = false);

(statearr_15960_16018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (28))){
var inst_15902 = (state_15932[(2)]);
var inst_15903 = calc_state();
var inst_15860 = inst_15903;
var state_15932__$1 = (function (){var statearr_15961 = state_15932;
(statearr_15961[(7)] = inst_15860);

(statearr_15961[(15)] = inst_15902);

return statearr_15961;
})();
var statearr_15962_16019 = state_15932__$1;
(statearr_15962_16019[(2)] = null);

(statearr_15962_16019[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (25))){
var inst_15928 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
var statearr_15963_16020 = state_15932__$1;
(statearr_15963_16020[(2)] = inst_15928);

(statearr_15963_16020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (34))){
var inst_15926 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
var statearr_15964_16021 = state_15932__$1;
(statearr_15964_16021[(2)] = inst_15926);

(statearr_15964_16021[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (17))){
var state_15932__$1 = state_15932;
var statearr_15965_16022 = state_15932__$1;
(statearr_15965_16022[(2)] = false);

(statearr_15965_16022[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (3))){
var state_15932__$1 = state_15932;
var statearr_15966_16023 = state_15932__$1;
(statearr_15966_16023[(2)] = false);

(statearr_15966_16023[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (12))){
var inst_15930 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15932__$1,inst_15930);
} else {
if((state_val_15933 === (2))){
var inst_15836 = (state_15932[(8)]);
var inst_15841 = inst_15836.cljs$lang$protocol_mask$partition0$;
var inst_15842 = (inst_15841 & (64));
var inst_15843 = inst_15836.cljs$core$ISeq$;
var inst_15844 = (inst_15842) || (inst_15843);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15844)){
var statearr_15967_16024 = state_15932__$1;
(statearr_15967_16024[(1)] = (5));

} else {
var statearr_15968_16025 = state_15932__$1;
(statearr_15968_16025[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (23))){
var inst_15891 = (state_15932[(14)]);
var inst_15897 = (inst_15891 == null);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15897)){
var statearr_15969_16026 = state_15932__$1;
(statearr_15969_16026[(1)] = (26));

} else {
var statearr_15970_16027 = state_15932__$1;
(statearr_15970_16027[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (35))){
var inst_15917 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15917)){
var statearr_15971_16028 = state_15932__$1;
(statearr_15971_16028[(1)] = (36));

} else {
var statearr_15972_16029 = state_15932__$1;
(statearr_15972_16029[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (19))){
var inst_15860 = (state_15932[(7)]);
var inst_15879 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15860);
var state_15932__$1 = state_15932;
var statearr_15973_16030 = state_15932__$1;
(statearr_15973_16030[(2)] = inst_15879);

(statearr_15973_16030[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (11))){
var inst_15860 = (state_15932[(7)]);
var inst_15864 = (inst_15860 == null);
var inst_15865 = cljs.core.not(inst_15864);
var state_15932__$1 = state_15932;
if(inst_15865){
var statearr_15974_16031 = state_15932__$1;
(statearr_15974_16031[(1)] = (13));

} else {
var statearr_15975_16032 = state_15932__$1;
(statearr_15975_16032[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (9))){
var inst_15836 = (state_15932[(8)]);
var state_15932__$1 = state_15932;
var statearr_15976_16033 = state_15932__$1;
(statearr_15976_16033[(2)] = inst_15836);

(statearr_15976_16033[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (5))){
var state_15932__$1 = state_15932;
var statearr_15977_16034 = state_15932__$1;
(statearr_15977_16034[(2)] = true);

(statearr_15977_16034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (14))){
var state_15932__$1 = state_15932;
var statearr_15978_16035 = state_15932__$1;
(statearr_15978_16035[(2)] = false);

(statearr_15978_16035[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (26))){
var inst_15892 = (state_15932[(11)]);
var inst_15899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15892);
var state_15932__$1 = state_15932;
var statearr_15979_16036 = state_15932__$1;
(statearr_15979_16036[(2)] = inst_15899);

(statearr_15979_16036[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (16))){
var state_15932__$1 = state_15932;
var statearr_15980_16037 = state_15932__$1;
(statearr_15980_16037[(2)] = true);

(statearr_15980_16037[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (38))){
var inst_15922 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
var statearr_15981_16038 = state_15932__$1;
(statearr_15981_16038[(2)] = inst_15922);

(statearr_15981_16038[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (30))){
var inst_15883 = (state_15932[(9)]);
var inst_15892 = (state_15932[(11)]);
var inst_15884 = (state_15932[(13)]);
var inst_15909 = cljs.core.empty_QMARK_(inst_15883);
var inst_15910 = (inst_15884.cljs$core$IFn$_invoke$arity$1 ? inst_15884.cljs$core$IFn$_invoke$arity$1(inst_15892) : inst_15884.call(null,inst_15892));
var inst_15911 = cljs.core.not(inst_15910);
var inst_15912 = (inst_15909) && (inst_15911);
var state_15932__$1 = state_15932;
var statearr_15982_16039 = state_15932__$1;
(statearr_15982_16039[(2)] = inst_15912);

(statearr_15982_16039[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (10))){
var inst_15836 = (state_15932[(8)]);
var inst_15856 = (state_15932[(2)]);
var inst_15857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15856,cljs.core.cst$kw$solos);
var inst_15858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15856,cljs.core.cst$kw$mutes);
var inst_15859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15856,cljs.core.cst$kw$reads);
var inst_15860 = inst_15836;
var state_15932__$1 = (function (){var statearr_15983 = state_15932;
(statearr_15983[(16)] = inst_15858);

(statearr_15983[(17)] = inst_15859);

(statearr_15983[(7)] = inst_15860);

(statearr_15983[(18)] = inst_15857);

return statearr_15983;
})();
var statearr_15984_16040 = state_15932__$1;
(statearr_15984_16040[(2)] = null);

(statearr_15984_16040[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (18))){
var inst_15874 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
var statearr_15985_16041 = state_15932__$1;
(statearr_15985_16041[(2)] = inst_15874);

(statearr_15985_16041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (37))){
var state_15932__$1 = state_15932;
var statearr_15986_16042 = state_15932__$1;
(statearr_15986_16042[(2)] = null);

(statearr_15986_16042[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15933 === (8))){
var inst_15836 = (state_15932[(8)]);
var inst_15853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15836);
var state_15932__$1 = state_15932;
var statearr_15987_16043 = state_15932__$1;
(statearr_15987_16043[(2)] = inst_15853);

(statearr_15987_16043[(1)] = (10));


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
});})(c__14242__auto___15997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14118__auto__,c__14242__auto___15997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14119__auto__ = null;
var cljs$core$async$mix_$_state_machine__14119__auto____0 = (function (){
var statearr_15991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15991[(0)] = cljs$core$async$mix_$_state_machine__14119__auto__);

(statearr_15991[(1)] = (1));

return statearr_15991;
});
var cljs$core$async$mix_$_state_machine__14119__auto____1 = (function (state_15932){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15932);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15992){if((e15992 instanceof Object)){
var ex__14122__auto__ = e15992;
var statearr_15993_16044 = state_15932;
(statearr_15993_16044[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15932);

return cljs.core.cst$kw$recur;
} else {
throw e15992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16045 = state_15932;
state_15932 = G__16045;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14119__auto__ = function(state_15932){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14119__auto____1.call(this,state_15932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14119__auto____0;
cljs$core$async$mix_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14119__auto____1;
return cljs$core$async$mix_$_state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___15997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14244__auto__ = (function (){var statearr_15994 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_15994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___15997);

return statearr_15994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___15997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7081__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7081__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7081__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7081__auto__.call(null,p,v,ch));
} else {
var m__7081__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7081__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16046 = [];
var len__7492__auto___16049 = arguments.length;
var i__7493__auto___16050 = (0);
while(true){
if((i__7493__auto___16050 < len__7492__auto___16049)){
args16046.push((arguments[i__7493__auto___16050]));

var G__16051 = (i__7493__auto___16050 + (1));
i__7493__auto___16050 = G__16051;
continue;
} else {
}
break;
}

var G__16048 = args16046.length;
switch (G__16048) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16046.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7081__auto__.call(null,p));
} else {
var m__7081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7081__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7081__auto__.call(null,p,v));
} else {
var m__7081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7081__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args16054 = [];
var len__7492__auto___16182 = arguments.length;
var i__7493__auto___16183 = (0);
while(true){
if((i__7493__auto___16183 < len__7492__auto___16182)){
args16054.push((arguments[i__7493__auto___16183]));

var G__16184 = (i__7493__auto___16183 + (1));
i__7493__auto___16183 = G__16184;
continue;
} else {
}
break;
}

var G__16056 = args16054.length;
switch (G__16056) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16054.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16057) : cljs.core.atom.call(null,G__16057));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6417__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6417__auto__,mults){
return (function (p1__16053_SHARP_){
if(cljs.core.truth_((p1__16053_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16053_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16053_SHARP_.call(null,topic)))){
return p1__16053_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16053_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6417__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16058 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16059){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16059 = meta16059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16060,meta16059__$1){
var self__ = this;
var _16060__$1 = this;
return (new cljs.core.async.t_cljs$core$async16058(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16059__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16060){
var self__ = this;
var _16060__$1 = this;
return self__.meta16059;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16061 = self__.mults;
var G__16062 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16061,G__16062) : cljs.core.reset_BANG_.call(null,G__16061,G__16062));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16059], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16058";

cljs.core.async.t_cljs$core$async16058.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async16058");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16058 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16059){
return (new cljs.core.async.t_cljs$core$async16058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16059));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16058(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14242__auto___16186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___16186,mults,ensure_mult,p){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___16186,mults,ensure_mult,p){
return (function (state_16134){
var state_val_16135 = (state_16134[(1)]);
if((state_val_16135 === (7))){
var inst_16130 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
var statearr_16136_16187 = state_16134__$1;
(statearr_16136_16187[(2)] = inst_16130);

(statearr_16136_16187[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (20))){
var state_16134__$1 = state_16134;
var statearr_16137_16188 = state_16134__$1;
(statearr_16137_16188[(2)] = null);

(statearr_16137_16188[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (1))){
var state_16134__$1 = state_16134;
var statearr_16138_16189 = state_16134__$1;
(statearr_16138_16189[(2)] = null);

(statearr_16138_16189[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (24))){
var inst_16113 = (state_16134[(7)]);
var inst_16122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16113);
var state_16134__$1 = state_16134;
var statearr_16139_16190 = state_16134__$1;
(statearr_16139_16190[(2)] = inst_16122);

(statearr_16139_16190[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (4))){
var inst_16065 = (state_16134[(8)]);
var inst_16065__$1 = (state_16134[(2)]);
var inst_16066 = (inst_16065__$1 == null);
var state_16134__$1 = (function (){var statearr_16140 = state_16134;
(statearr_16140[(8)] = inst_16065__$1);

return statearr_16140;
})();
if(cljs.core.truth_(inst_16066)){
var statearr_16141_16191 = state_16134__$1;
(statearr_16141_16191[(1)] = (5));

} else {
var statearr_16142_16192 = state_16134__$1;
(statearr_16142_16192[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (15))){
var inst_16107 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
var statearr_16143_16193 = state_16134__$1;
(statearr_16143_16193[(2)] = inst_16107);

(statearr_16143_16193[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (21))){
var inst_16127 = (state_16134[(2)]);
var state_16134__$1 = (function (){var statearr_16144 = state_16134;
(statearr_16144[(9)] = inst_16127);

return statearr_16144;
})();
var statearr_16145_16194 = state_16134__$1;
(statearr_16145_16194[(2)] = null);

(statearr_16145_16194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (13))){
var inst_16089 = (state_16134[(10)]);
var inst_16091 = cljs.core.chunked_seq_QMARK_(inst_16089);
var state_16134__$1 = state_16134;
if(inst_16091){
var statearr_16146_16195 = state_16134__$1;
(statearr_16146_16195[(1)] = (16));

} else {
var statearr_16147_16196 = state_16134__$1;
(statearr_16147_16196[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (22))){
var inst_16119 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
if(cljs.core.truth_(inst_16119)){
var statearr_16148_16197 = state_16134__$1;
(statearr_16148_16197[(1)] = (23));

} else {
var statearr_16149_16198 = state_16134__$1;
(statearr_16149_16198[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (6))){
var inst_16115 = (state_16134[(11)]);
var inst_16113 = (state_16134[(7)]);
var inst_16065 = (state_16134[(8)]);
var inst_16113__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16065) : topic_fn.call(null,inst_16065));
var inst_16114 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16115__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16114,inst_16113__$1);
var state_16134__$1 = (function (){var statearr_16150 = state_16134;
(statearr_16150[(11)] = inst_16115__$1);

(statearr_16150[(7)] = inst_16113__$1);

return statearr_16150;
})();
if(cljs.core.truth_(inst_16115__$1)){
var statearr_16151_16199 = state_16134__$1;
(statearr_16151_16199[(1)] = (19));

} else {
var statearr_16152_16200 = state_16134__$1;
(statearr_16152_16200[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (25))){
var inst_16124 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
var statearr_16153_16201 = state_16134__$1;
(statearr_16153_16201[(2)] = inst_16124);

(statearr_16153_16201[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (17))){
var inst_16089 = (state_16134[(10)]);
var inst_16098 = cljs.core.first(inst_16089);
var inst_16099 = cljs.core.async.muxch_STAR_(inst_16098);
var inst_16100 = cljs.core.async.close_BANG_(inst_16099);
var inst_16101 = cljs.core.next(inst_16089);
var inst_16075 = inst_16101;
var inst_16076 = null;
var inst_16077 = (0);
var inst_16078 = (0);
var state_16134__$1 = (function (){var statearr_16154 = state_16134;
(statearr_16154[(12)] = inst_16077);

(statearr_16154[(13)] = inst_16076);

(statearr_16154[(14)] = inst_16078);

(statearr_16154[(15)] = inst_16075);

(statearr_16154[(16)] = inst_16100);

return statearr_16154;
})();
var statearr_16155_16202 = state_16134__$1;
(statearr_16155_16202[(2)] = null);

(statearr_16155_16202[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (3))){
var inst_16132 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16134__$1,inst_16132);
} else {
if((state_val_16135 === (12))){
var inst_16109 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
var statearr_16156_16203 = state_16134__$1;
(statearr_16156_16203[(2)] = inst_16109);

(statearr_16156_16203[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (2))){
var state_16134__$1 = state_16134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16134__$1,(4),ch);
} else {
if((state_val_16135 === (23))){
var state_16134__$1 = state_16134;
var statearr_16157_16204 = state_16134__$1;
(statearr_16157_16204[(2)] = null);

(statearr_16157_16204[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (19))){
var inst_16115 = (state_16134[(11)]);
var inst_16065 = (state_16134[(8)]);
var inst_16117 = cljs.core.async.muxch_STAR_(inst_16115);
var state_16134__$1 = state_16134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16134__$1,(22),inst_16117,inst_16065);
} else {
if((state_val_16135 === (11))){
var inst_16089 = (state_16134[(10)]);
var inst_16075 = (state_16134[(15)]);
var inst_16089__$1 = cljs.core.seq(inst_16075);
var state_16134__$1 = (function (){var statearr_16158 = state_16134;
(statearr_16158[(10)] = inst_16089__$1);

return statearr_16158;
})();
if(inst_16089__$1){
var statearr_16159_16205 = state_16134__$1;
(statearr_16159_16205[(1)] = (13));

} else {
var statearr_16160_16206 = state_16134__$1;
(statearr_16160_16206[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (9))){
var inst_16111 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
var statearr_16161_16207 = state_16134__$1;
(statearr_16161_16207[(2)] = inst_16111);

(statearr_16161_16207[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (5))){
var inst_16072 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16073 = cljs.core.vals(inst_16072);
var inst_16074 = cljs.core.seq(inst_16073);
var inst_16075 = inst_16074;
var inst_16076 = null;
var inst_16077 = (0);
var inst_16078 = (0);
var state_16134__$1 = (function (){var statearr_16162 = state_16134;
(statearr_16162[(12)] = inst_16077);

(statearr_16162[(13)] = inst_16076);

(statearr_16162[(14)] = inst_16078);

(statearr_16162[(15)] = inst_16075);

return statearr_16162;
})();
var statearr_16163_16208 = state_16134__$1;
(statearr_16163_16208[(2)] = null);

(statearr_16163_16208[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (14))){
var state_16134__$1 = state_16134;
var statearr_16167_16209 = state_16134__$1;
(statearr_16167_16209[(2)] = null);

(statearr_16167_16209[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (16))){
var inst_16089 = (state_16134[(10)]);
var inst_16093 = cljs.core.chunk_first(inst_16089);
var inst_16094 = cljs.core.chunk_rest(inst_16089);
var inst_16095 = cljs.core.count(inst_16093);
var inst_16075 = inst_16094;
var inst_16076 = inst_16093;
var inst_16077 = inst_16095;
var inst_16078 = (0);
var state_16134__$1 = (function (){var statearr_16168 = state_16134;
(statearr_16168[(12)] = inst_16077);

(statearr_16168[(13)] = inst_16076);

(statearr_16168[(14)] = inst_16078);

(statearr_16168[(15)] = inst_16075);

return statearr_16168;
})();
var statearr_16169_16210 = state_16134__$1;
(statearr_16169_16210[(2)] = null);

(statearr_16169_16210[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (10))){
var inst_16077 = (state_16134[(12)]);
var inst_16076 = (state_16134[(13)]);
var inst_16078 = (state_16134[(14)]);
var inst_16075 = (state_16134[(15)]);
var inst_16083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16076,inst_16078);
var inst_16084 = cljs.core.async.muxch_STAR_(inst_16083);
var inst_16085 = cljs.core.async.close_BANG_(inst_16084);
var inst_16086 = (inst_16078 + (1));
var tmp16164 = inst_16077;
var tmp16165 = inst_16076;
var tmp16166 = inst_16075;
var inst_16075__$1 = tmp16166;
var inst_16076__$1 = tmp16165;
var inst_16077__$1 = tmp16164;
var inst_16078__$1 = inst_16086;
var state_16134__$1 = (function (){var statearr_16170 = state_16134;
(statearr_16170[(12)] = inst_16077__$1);

(statearr_16170[(13)] = inst_16076__$1);

(statearr_16170[(14)] = inst_16078__$1);

(statearr_16170[(17)] = inst_16085);

(statearr_16170[(15)] = inst_16075__$1);

return statearr_16170;
})();
var statearr_16171_16211 = state_16134__$1;
(statearr_16171_16211[(2)] = null);

(statearr_16171_16211[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (18))){
var inst_16104 = (state_16134[(2)]);
var state_16134__$1 = state_16134;
var statearr_16172_16212 = state_16134__$1;
(statearr_16172_16212[(2)] = inst_16104);

(statearr_16172_16212[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16135 === (8))){
var inst_16077 = (state_16134[(12)]);
var inst_16078 = (state_16134[(14)]);
var inst_16080 = (inst_16078 < inst_16077);
var inst_16081 = inst_16080;
var state_16134__$1 = state_16134;
if(cljs.core.truth_(inst_16081)){
var statearr_16173_16213 = state_16134__$1;
(statearr_16173_16213[(1)] = (10));

} else {
var statearr_16174_16214 = state_16134__$1;
(statearr_16174_16214[(1)] = (11));

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
});})(c__14242__auto___16186,mults,ensure_mult,p))
;
return ((function (switch__14118__auto__,c__14242__auto___16186,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16178[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16178[(1)] = (1));

return statearr_16178;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16134){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16134);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16179){if((e16179 instanceof Object)){
var ex__14122__auto__ = e16179;
var statearr_16180_16215 = state_16134;
(statearr_16180_16215[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16134);

return cljs.core.cst$kw$recur;
} else {
throw e16179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16216 = state_16134;
state_16134 = G__16216;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___16186,mults,ensure_mult,p))
})();
var state__14244__auto__ = (function (){var statearr_16181 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___16186);

return statearr_16181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___16186,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16217 = [];
var len__7492__auto___16220 = arguments.length;
var i__7493__auto___16221 = (0);
while(true){
if((i__7493__auto___16221 < len__7492__auto___16220)){
args16217.push((arguments[i__7493__auto___16221]));

var G__16222 = (i__7493__auto___16221 + (1));
i__7493__auto___16221 = G__16222;
continue;
} else {
}
break;
}

var G__16219 = args16217.length;
switch (G__16219) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16217.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var args16224 = [];
var len__7492__auto___16227 = arguments.length;
var i__7493__auto___16228 = (0);
while(true){
if((i__7493__auto___16228 < len__7492__auto___16227)){
args16224.push((arguments[i__7493__auto___16228]));

var G__16229 = (i__7493__auto___16228 + (1));
i__7493__auto___16228 = G__16229;
continue;
} else {
}
break;
}

var G__16226 = args16224.length;
switch (G__16226) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16224.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args16231 = [];
var len__7492__auto___16302 = arguments.length;
var i__7493__auto___16303 = (0);
while(true){
if((i__7493__auto___16303 < len__7492__auto___16302)){
args16231.push((arguments[i__7493__auto___16303]));

var G__16304 = (i__7493__auto___16303 + (1));
i__7493__auto___16303 = G__16304;
continue;
} else {
}
break;
}

var G__16233 = args16231.length;
switch (G__16233) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16231.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14242__auto___16306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___16306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___16306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16272){
var state_val_16273 = (state_16272[(1)]);
if((state_val_16273 === (7))){
var state_16272__$1 = state_16272;
var statearr_16274_16307 = state_16272__$1;
(statearr_16274_16307[(2)] = null);

(statearr_16274_16307[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (1))){
var state_16272__$1 = state_16272;
var statearr_16275_16308 = state_16272__$1;
(statearr_16275_16308[(2)] = null);

(statearr_16275_16308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (4))){
var inst_16236 = (state_16272[(7)]);
var inst_16238 = (inst_16236 < cnt);
var state_16272__$1 = state_16272;
if(cljs.core.truth_(inst_16238)){
var statearr_16276_16309 = state_16272__$1;
(statearr_16276_16309[(1)] = (6));

} else {
var statearr_16277_16310 = state_16272__$1;
(statearr_16277_16310[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (15))){
var inst_16268 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16278_16311 = state_16272__$1;
(statearr_16278_16311[(2)] = inst_16268);

(statearr_16278_16311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (13))){
var inst_16261 = cljs.core.async.close_BANG_(out);
var state_16272__$1 = state_16272;
var statearr_16279_16312 = state_16272__$1;
(statearr_16279_16312[(2)] = inst_16261);

(statearr_16279_16312[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (6))){
var state_16272__$1 = state_16272;
var statearr_16280_16313 = state_16272__$1;
(statearr_16280_16313[(2)] = null);

(statearr_16280_16313[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (3))){
var inst_16270 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16272__$1,inst_16270);
} else {
if((state_val_16273 === (12))){
var inst_16258 = (state_16272[(8)]);
var inst_16258__$1 = (state_16272[(2)]);
var inst_16259 = cljs.core.some(cljs.core.nil_QMARK_,inst_16258__$1);
var state_16272__$1 = (function (){var statearr_16281 = state_16272;
(statearr_16281[(8)] = inst_16258__$1);

return statearr_16281;
})();
if(cljs.core.truth_(inst_16259)){
var statearr_16282_16314 = state_16272__$1;
(statearr_16282_16314[(1)] = (13));

} else {
var statearr_16283_16315 = state_16272__$1;
(statearr_16283_16315[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (2))){
var inst_16235 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16236 = (0);
var state_16272__$1 = (function (){var statearr_16284 = state_16272;
(statearr_16284[(9)] = inst_16235);

(statearr_16284[(7)] = inst_16236);

return statearr_16284;
})();
var statearr_16285_16316 = state_16272__$1;
(statearr_16285_16316[(2)] = null);

(statearr_16285_16316[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (11))){
var inst_16236 = (state_16272[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16272,(10),Object,null,(9));
var inst_16245 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16236) : chs__$1.call(null,inst_16236));
var inst_16246 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16236) : done.call(null,inst_16236));
var inst_16247 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16245,inst_16246);
var state_16272__$1 = state_16272;
var statearr_16286_16317 = state_16272__$1;
(statearr_16286_16317[(2)] = inst_16247);


cljs.core.async.impl.ioc_helpers.process_exception(state_16272__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (9))){
var inst_16236 = (state_16272[(7)]);
var inst_16249 = (state_16272[(2)]);
var inst_16250 = (inst_16236 + (1));
var inst_16236__$1 = inst_16250;
var state_16272__$1 = (function (){var statearr_16287 = state_16272;
(statearr_16287[(10)] = inst_16249);

(statearr_16287[(7)] = inst_16236__$1);

return statearr_16287;
})();
var statearr_16288_16318 = state_16272__$1;
(statearr_16288_16318[(2)] = null);

(statearr_16288_16318[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (5))){
var inst_16256 = (state_16272[(2)]);
var state_16272__$1 = (function (){var statearr_16289 = state_16272;
(statearr_16289[(11)] = inst_16256);

return statearr_16289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16272__$1,(12),dchan);
} else {
if((state_val_16273 === (14))){
var inst_16258 = (state_16272[(8)]);
var inst_16263 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16258);
var state_16272__$1 = state_16272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16272__$1,(16),out,inst_16263);
} else {
if((state_val_16273 === (16))){
var inst_16265 = (state_16272[(2)]);
var state_16272__$1 = (function (){var statearr_16290 = state_16272;
(statearr_16290[(12)] = inst_16265);

return statearr_16290;
})();
var statearr_16291_16319 = state_16272__$1;
(statearr_16291_16319[(2)] = null);

(statearr_16291_16319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (10))){
var inst_16240 = (state_16272[(2)]);
var inst_16241 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16272__$1 = (function (){var statearr_16292 = state_16272;
(statearr_16292[(13)] = inst_16240);

return statearr_16292;
})();
var statearr_16293_16320 = state_16272__$1;
(statearr_16293_16320[(2)] = inst_16241);


cljs.core.async.impl.ioc_helpers.process_exception(state_16272__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (8))){
var inst_16254 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16294_16321 = state_16272__$1;
(statearr_16294_16321[(2)] = inst_16254);

(statearr_16294_16321[(1)] = (5));


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
});})(c__14242__auto___16306,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14118__auto__,c__14242__auto___16306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16298[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16298[(1)] = (1));

return statearr_16298;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16272){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16272);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16299){if((e16299 instanceof Object)){
var ex__14122__auto__ = e16299;
var statearr_16300_16322 = state_16272;
(statearr_16300_16322[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16272);

return cljs.core.cst$kw$recur;
} else {
throw e16299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16323 = state_16272;
state_16272 = G__16323;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___16306,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14244__auto__ = (function (){var statearr_16301 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___16306);

return statearr_16301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___16306,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16325 = [];
var len__7492__auto___16383 = arguments.length;
var i__7493__auto___16384 = (0);
while(true){
if((i__7493__auto___16384 < len__7492__auto___16383)){
args16325.push((arguments[i__7493__auto___16384]));

var G__16385 = (i__7493__auto___16384 + (1));
i__7493__auto___16384 = G__16385;
continue;
} else {
}
break;
}

var G__16327 = args16325.length;
switch (G__16327) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16325.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14242__auto___16387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___16387,out){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___16387,out){
return (function (state_16359){
var state_val_16360 = (state_16359[(1)]);
if((state_val_16360 === (7))){
var inst_16338 = (state_16359[(7)]);
var inst_16339 = (state_16359[(8)]);
var inst_16338__$1 = (state_16359[(2)]);
var inst_16339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16338__$1,(0),null);
var inst_16340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16338__$1,(1),null);
var inst_16341 = (inst_16339__$1 == null);
var state_16359__$1 = (function (){var statearr_16361 = state_16359;
(statearr_16361[(7)] = inst_16338__$1);

(statearr_16361[(9)] = inst_16340);

(statearr_16361[(8)] = inst_16339__$1);

return statearr_16361;
})();
if(cljs.core.truth_(inst_16341)){
var statearr_16362_16388 = state_16359__$1;
(statearr_16362_16388[(1)] = (8));

} else {
var statearr_16363_16389 = state_16359__$1;
(statearr_16363_16389[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (1))){
var inst_16328 = cljs.core.vec(chs);
var inst_16329 = inst_16328;
var state_16359__$1 = (function (){var statearr_16364 = state_16359;
(statearr_16364[(10)] = inst_16329);

return statearr_16364;
})();
var statearr_16365_16390 = state_16359__$1;
(statearr_16365_16390[(2)] = null);

(statearr_16365_16390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (4))){
var inst_16329 = (state_16359[(10)]);
var state_16359__$1 = state_16359;
return cljs.core.async.ioc_alts_BANG_(state_16359__$1,(7),inst_16329);
} else {
if((state_val_16360 === (6))){
var inst_16355 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16366_16391 = state_16359__$1;
(statearr_16366_16391[(2)] = inst_16355);

(statearr_16366_16391[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (3))){
var inst_16357 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16359__$1,inst_16357);
} else {
if((state_val_16360 === (2))){
var inst_16329 = (state_16359[(10)]);
var inst_16331 = cljs.core.count(inst_16329);
var inst_16332 = (inst_16331 > (0));
var state_16359__$1 = state_16359;
if(cljs.core.truth_(inst_16332)){
var statearr_16368_16392 = state_16359__$1;
(statearr_16368_16392[(1)] = (4));

} else {
var statearr_16369_16393 = state_16359__$1;
(statearr_16369_16393[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (11))){
var inst_16329 = (state_16359[(10)]);
var inst_16348 = (state_16359[(2)]);
var tmp16367 = inst_16329;
var inst_16329__$1 = tmp16367;
var state_16359__$1 = (function (){var statearr_16370 = state_16359;
(statearr_16370[(10)] = inst_16329__$1);

(statearr_16370[(11)] = inst_16348);

return statearr_16370;
})();
var statearr_16371_16394 = state_16359__$1;
(statearr_16371_16394[(2)] = null);

(statearr_16371_16394[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (9))){
var inst_16339 = (state_16359[(8)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16359__$1,(11),out,inst_16339);
} else {
if((state_val_16360 === (5))){
var inst_16353 = cljs.core.async.close_BANG_(out);
var state_16359__$1 = state_16359;
var statearr_16372_16395 = state_16359__$1;
(statearr_16372_16395[(2)] = inst_16353);

(statearr_16372_16395[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (10))){
var inst_16351 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16373_16396 = state_16359__$1;
(statearr_16373_16396[(2)] = inst_16351);

(statearr_16373_16396[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (8))){
var inst_16338 = (state_16359[(7)]);
var inst_16329 = (state_16359[(10)]);
var inst_16340 = (state_16359[(9)]);
var inst_16339 = (state_16359[(8)]);
var inst_16343 = (function (){var cs = inst_16329;
var vec__16334 = inst_16338;
var v = inst_16339;
var c = inst_16340;
return ((function (cs,vec__16334,v,c,inst_16338,inst_16329,inst_16340,inst_16339,state_val_16360,c__14242__auto___16387,out){
return (function (p1__16324_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16324_SHARP_);
});
;})(cs,vec__16334,v,c,inst_16338,inst_16329,inst_16340,inst_16339,state_val_16360,c__14242__auto___16387,out))
})();
var inst_16344 = cljs.core.filterv(inst_16343,inst_16329);
var inst_16329__$1 = inst_16344;
var state_16359__$1 = (function (){var statearr_16374 = state_16359;
(statearr_16374[(10)] = inst_16329__$1);

return statearr_16374;
})();
var statearr_16375_16397 = state_16359__$1;
(statearr_16375_16397[(2)] = null);

(statearr_16375_16397[(1)] = (2));


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
});})(c__14242__auto___16387,out))
;
return ((function (switch__14118__auto__,c__14242__auto___16387,out){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16379[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16379[(1)] = (1));

return statearr_16379;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16359){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16359);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16380){if((e16380 instanceof Object)){
var ex__14122__auto__ = e16380;
var statearr_16381_16398 = state_16359;
(statearr_16381_16398[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16359);

return cljs.core.cst$kw$recur;
} else {
throw e16380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16399 = state_16359;
state_16359 = G__16399;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___16387,out))
})();
var state__14244__auto__ = (function (){var statearr_16382 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___16387);

return statearr_16382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___16387,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var args16400 = [];
var len__7492__auto___16449 = arguments.length;
var i__7493__auto___16450 = (0);
while(true){
if((i__7493__auto___16450 < len__7492__auto___16449)){
args16400.push((arguments[i__7493__auto___16450]));

var G__16451 = (i__7493__auto___16450 + (1));
i__7493__auto___16450 = G__16451;
continue;
} else {
}
break;
}

var G__16402 = args16400.length;
switch (G__16402) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16400.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14242__auto___16453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___16453,out){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___16453,out){
return (function (state_16426){
var state_val_16427 = (state_16426[(1)]);
if((state_val_16427 === (7))){
var inst_16408 = (state_16426[(7)]);
var inst_16408__$1 = (state_16426[(2)]);
var inst_16409 = (inst_16408__$1 == null);
var inst_16410 = cljs.core.not(inst_16409);
var state_16426__$1 = (function (){var statearr_16428 = state_16426;
(statearr_16428[(7)] = inst_16408__$1);

return statearr_16428;
})();
if(inst_16410){
var statearr_16429_16454 = state_16426__$1;
(statearr_16429_16454[(1)] = (8));

} else {
var statearr_16430_16455 = state_16426__$1;
(statearr_16430_16455[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (1))){
var inst_16403 = (0);
var state_16426__$1 = (function (){var statearr_16431 = state_16426;
(statearr_16431[(8)] = inst_16403);

return statearr_16431;
})();
var statearr_16432_16456 = state_16426__$1;
(statearr_16432_16456[(2)] = null);

(statearr_16432_16456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (4))){
var state_16426__$1 = state_16426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16426__$1,(7),ch);
} else {
if((state_val_16427 === (6))){
var inst_16421 = (state_16426[(2)]);
var state_16426__$1 = state_16426;
var statearr_16433_16457 = state_16426__$1;
(statearr_16433_16457[(2)] = inst_16421);

(statearr_16433_16457[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (3))){
var inst_16423 = (state_16426[(2)]);
var inst_16424 = cljs.core.async.close_BANG_(out);
var state_16426__$1 = (function (){var statearr_16434 = state_16426;
(statearr_16434[(9)] = inst_16423);

return statearr_16434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16426__$1,inst_16424);
} else {
if((state_val_16427 === (2))){
var inst_16403 = (state_16426[(8)]);
var inst_16405 = (inst_16403 < n);
var state_16426__$1 = state_16426;
if(cljs.core.truth_(inst_16405)){
var statearr_16435_16458 = state_16426__$1;
(statearr_16435_16458[(1)] = (4));

} else {
var statearr_16436_16459 = state_16426__$1;
(statearr_16436_16459[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (11))){
var inst_16403 = (state_16426[(8)]);
var inst_16413 = (state_16426[(2)]);
var inst_16414 = (inst_16403 + (1));
var inst_16403__$1 = inst_16414;
var state_16426__$1 = (function (){var statearr_16437 = state_16426;
(statearr_16437[(8)] = inst_16403__$1);

(statearr_16437[(10)] = inst_16413);

return statearr_16437;
})();
var statearr_16438_16460 = state_16426__$1;
(statearr_16438_16460[(2)] = null);

(statearr_16438_16460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (9))){
var state_16426__$1 = state_16426;
var statearr_16439_16461 = state_16426__$1;
(statearr_16439_16461[(2)] = null);

(statearr_16439_16461[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (5))){
var state_16426__$1 = state_16426;
var statearr_16440_16462 = state_16426__$1;
(statearr_16440_16462[(2)] = null);

(statearr_16440_16462[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (10))){
var inst_16418 = (state_16426[(2)]);
var state_16426__$1 = state_16426;
var statearr_16441_16463 = state_16426__$1;
(statearr_16441_16463[(2)] = inst_16418);

(statearr_16441_16463[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16427 === (8))){
var inst_16408 = (state_16426[(7)]);
var state_16426__$1 = state_16426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16426__$1,(11),out,inst_16408);
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
});})(c__14242__auto___16453,out))
;
return ((function (switch__14118__auto__,c__14242__auto___16453,out){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16445[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16445[(1)] = (1));

return statearr_16445;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16426){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16426);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16446){if((e16446 instanceof Object)){
var ex__14122__auto__ = e16446;
var statearr_16447_16464 = state_16426;
(statearr_16447_16464[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16426);

return cljs.core.cst$kw$recur;
} else {
throw e16446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16465 = state_16426;
state_16426 = G__16465;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___16453,out))
})();
var state__14244__auto__ = (function (){var statearr_16448 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___16453);

return statearr_16448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___16453,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16475 = (function (map_LT_,f,ch,meta16476){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16476 = meta16476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16477,meta16476__$1){
var self__ = this;
var _16477__$1 = this;
return (new cljs.core.async.t_cljs$core$async16475(self__.map_LT_,self__.f,self__.ch,meta16476__$1));
});

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16477){
var self__ = this;
var _16477__$1 = this;
return self__.meta16476;
});

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16478 = (function (map_LT_,f,ch,meta16476,_,fn1,meta16479){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16476 = meta16476;
this._ = _;
this.fn1 = fn1;
this.meta16479 = meta16479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16480,meta16479__$1){
var self__ = this;
var _16480__$1 = this;
return (new cljs.core.async.t_cljs$core$async16478(self__.map_LT_,self__.f,self__.ch,self__.meta16476,self__._,self__.fn1,meta16479__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16480){
var self__ = this;
var _16480__$1 = this;
return self__.meta16479;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16478.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16466_SHARP_){
var G__16481 = (((p1__16466_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16466_SHARP_) : self__.f.call(null,p1__16466_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16481) : f1.call(null,G__16481));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16478.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16476,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16475], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16479], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16478";

cljs.core.async.t_cljs$core$async16478.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async16478");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16478 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16478(map_LT___$1,f__$1,ch__$1,meta16476__$1,___$2,fn1__$1,meta16479){
return (new cljs.core.async.t_cljs$core$async16478(map_LT___$1,f__$1,ch__$1,meta16476__$1,___$2,fn1__$1,meta16479));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16478(self__.map_LT_,self__.f,self__.ch,self__.meta16476,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6405__auto__ = ret;
if(cljs.core.truth_(and__6405__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6405__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16482 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16482) : self__.f.call(null,G__16482));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16476], null);
});

cljs.core.async.t_cljs$core$async16475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16475";

cljs.core.async.t_cljs$core$async16475.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async16475");
});

cljs.core.async.__GT_t_cljs$core$async16475 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16475(map_LT___$1,f__$1,ch__$1,meta16476){
return (new cljs.core.async.t_cljs$core$async16475(map_LT___$1,f__$1,ch__$1,meta16476));
});

}

return (new cljs.core.async.t_cljs$core$async16475(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16486 = (function (map_GT_,f,ch,meta16487){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16487 = meta16487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16488,meta16487__$1){
var self__ = this;
var _16488__$1 = this;
return (new cljs.core.async.t_cljs$core$async16486(self__.map_GT_,self__.f,self__.ch,meta16487__$1));
});

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16488){
var self__ = this;
var _16488__$1 = this;
return self__.meta16487;
});

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16487], null);
});

cljs.core.async.t_cljs$core$async16486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16486";

cljs.core.async.t_cljs$core$async16486.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async16486");
});

cljs.core.async.__GT_t_cljs$core$async16486 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16486(map_GT___$1,f__$1,ch__$1,meta16487){
return (new cljs.core.async.t_cljs$core$async16486(map_GT___$1,f__$1,ch__$1,meta16487));
});

}

return (new cljs.core.async.t_cljs$core$async16486(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16492 = (function (filter_GT_,p,ch,meta16493){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16493 = meta16493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16494,meta16493__$1){
var self__ = this;
var _16494__$1 = this;
return (new cljs.core.async.t_cljs$core$async16492(self__.filter_GT_,self__.p,self__.ch,meta16493__$1));
});

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16494){
var self__ = this;
var _16494__$1 = this;
return self__.meta16493;
});

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16493], null);
});

cljs.core.async.t_cljs$core$async16492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16492";

cljs.core.async.t_cljs$core$async16492.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"cljs.core.async/t_cljs$core$async16492");
});

cljs.core.async.__GT_t_cljs$core$async16492 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16492(filter_GT___$1,p__$1,ch__$1,meta16493){
return (new cljs.core.async.t_cljs$core$async16492(filter_GT___$1,p__$1,ch__$1,meta16493));
});

}

return (new cljs.core.async.t_cljs$core$async16492(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args16495 = [];
var len__7492__auto___16539 = arguments.length;
var i__7493__auto___16540 = (0);
while(true){
if((i__7493__auto___16540 < len__7492__auto___16539)){
args16495.push((arguments[i__7493__auto___16540]));

var G__16541 = (i__7493__auto___16540 + (1));
i__7493__auto___16540 = G__16541;
continue;
} else {
}
break;
}

var G__16497 = args16495.length;
switch (G__16497) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16495.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14242__auto___16543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___16543,out){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___16543,out){
return (function (state_16518){
var state_val_16519 = (state_16518[(1)]);
if((state_val_16519 === (7))){
var inst_16514 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16520_16544 = state_16518__$1;
(statearr_16520_16544[(2)] = inst_16514);

(statearr_16520_16544[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (1))){
var state_16518__$1 = state_16518;
var statearr_16521_16545 = state_16518__$1;
(statearr_16521_16545[(2)] = null);

(statearr_16521_16545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (4))){
var inst_16500 = (state_16518[(7)]);
var inst_16500__$1 = (state_16518[(2)]);
var inst_16501 = (inst_16500__$1 == null);
var state_16518__$1 = (function (){var statearr_16522 = state_16518;
(statearr_16522[(7)] = inst_16500__$1);

return statearr_16522;
})();
if(cljs.core.truth_(inst_16501)){
var statearr_16523_16546 = state_16518__$1;
(statearr_16523_16546[(1)] = (5));

} else {
var statearr_16524_16547 = state_16518__$1;
(statearr_16524_16547[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (6))){
var inst_16500 = (state_16518[(7)]);
var inst_16505 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16500) : p.call(null,inst_16500));
var state_16518__$1 = state_16518;
if(cljs.core.truth_(inst_16505)){
var statearr_16525_16548 = state_16518__$1;
(statearr_16525_16548[(1)] = (8));

} else {
var statearr_16526_16549 = state_16518__$1;
(statearr_16526_16549[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (3))){
var inst_16516 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16518__$1,inst_16516);
} else {
if((state_val_16519 === (2))){
var state_16518__$1 = state_16518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16518__$1,(4),ch);
} else {
if((state_val_16519 === (11))){
var inst_16508 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16527_16550 = state_16518__$1;
(statearr_16527_16550[(2)] = inst_16508);

(statearr_16527_16550[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (9))){
var state_16518__$1 = state_16518;
var statearr_16528_16551 = state_16518__$1;
(statearr_16528_16551[(2)] = null);

(statearr_16528_16551[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (5))){
var inst_16503 = cljs.core.async.close_BANG_(out);
var state_16518__$1 = state_16518;
var statearr_16529_16552 = state_16518__$1;
(statearr_16529_16552[(2)] = inst_16503);

(statearr_16529_16552[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (10))){
var inst_16511 = (state_16518[(2)]);
var state_16518__$1 = (function (){var statearr_16530 = state_16518;
(statearr_16530[(8)] = inst_16511);

return statearr_16530;
})();
var statearr_16531_16553 = state_16518__$1;
(statearr_16531_16553[(2)] = null);

(statearr_16531_16553[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16519 === (8))){
var inst_16500 = (state_16518[(7)]);
var state_16518__$1 = state_16518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16518__$1,(11),out,inst_16500);
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
});})(c__14242__auto___16543,out))
;
return ((function (switch__14118__auto__,c__14242__auto___16543,out){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16535 = [null,null,null,null,null,null,null,null,null];
(statearr_16535[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16535[(1)] = (1));

return statearr_16535;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16518){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16518);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16536){if((e16536 instanceof Object)){
var ex__14122__auto__ = e16536;
var statearr_16537_16554 = state_16518;
(statearr_16537_16554[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16518);

return cljs.core.cst$kw$recur;
} else {
throw e16536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16555 = state_16518;
state_16518 = G__16555;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___16543,out))
})();
var state__14244__auto__ = (function (){var statearr_16538 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___16543);

return statearr_16538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___16543,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16556 = [];
var len__7492__auto___16559 = arguments.length;
var i__7493__auto___16560 = (0);
while(true){
if((i__7493__auto___16560 < len__7492__auto___16559)){
args16556.push((arguments[i__7493__auto___16560]));

var G__16561 = (i__7493__auto___16560 + (1));
i__7493__auto___16560 = G__16561;
continue;
} else {
}
break;
}

var G__16558 = args16556.length;
switch (G__16558) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16556.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto__){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto__){
return (function (state_16728){
var state_val_16729 = (state_16728[(1)]);
if((state_val_16729 === (7))){
var inst_16724 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16730_16771 = state_16728__$1;
(statearr_16730_16771[(2)] = inst_16724);

(statearr_16730_16771[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (20))){
var inst_16694 = (state_16728[(7)]);
var inst_16705 = (state_16728[(2)]);
var inst_16706 = cljs.core.next(inst_16694);
var inst_16680 = inst_16706;
var inst_16681 = null;
var inst_16682 = (0);
var inst_16683 = (0);
var state_16728__$1 = (function (){var statearr_16731 = state_16728;
(statearr_16731[(8)] = inst_16680);

(statearr_16731[(9)] = inst_16682);

(statearr_16731[(10)] = inst_16705);

(statearr_16731[(11)] = inst_16681);

(statearr_16731[(12)] = inst_16683);

return statearr_16731;
})();
var statearr_16732_16772 = state_16728__$1;
(statearr_16732_16772[(2)] = null);

(statearr_16732_16772[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (1))){
var state_16728__$1 = state_16728;
var statearr_16733_16773 = state_16728__$1;
(statearr_16733_16773[(2)] = null);

(statearr_16733_16773[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (4))){
var inst_16669 = (state_16728[(13)]);
var inst_16669__$1 = (state_16728[(2)]);
var inst_16670 = (inst_16669__$1 == null);
var state_16728__$1 = (function (){var statearr_16734 = state_16728;
(statearr_16734[(13)] = inst_16669__$1);

return statearr_16734;
})();
if(cljs.core.truth_(inst_16670)){
var statearr_16735_16774 = state_16728__$1;
(statearr_16735_16774[(1)] = (5));

} else {
var statearr_16736_16775 = state_16728__$1;
(statearr_16736_16775[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (15))){
var state_16728__$1 = state_16728;
var statearr_16740_16776 = state_16728__$1;
(statearr_16740_16776[(2)] = null);

(statearr_16740_16776[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (21))){
var state_16728__$1 = state_16728;
var statearr_16741_16777 = state_16728__$1;
(statearr_16741_16777[(2)] = null);

(statearr_16741_16777[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (13))){
var inst_16680 = (state_16728[(8)]);
var inst_16682 = (state_16728[(9)]);
var inst_16681 = (state_16728[(11)]);
var inst_16683 = (state_16728[(12)]);
var inst_16690 = (state_16728[(2)]);
var inst_16691 = (inst_16683 + (1));
var tmp16737 = inst_16680;
var tmp16738 = inst_16682;
var tmp16739 = inst_16681;
var inst_16680__$1 = tmp16737;
var inst_16681__$1 = tmp16739;
var inst_16682__$1 = tmp16738;
var inst_16683__$1 = inst_16691;
var state_16728__$1 = (function (){var statearr_16742 = state_16728;
(statearr_16742[(8)] = inst_16680__$1);

(statearr_16742[(9)] = inst_16682__$1);

(statearr_16742[(11)] = inst_16681__$1);

(statearr_16742[(14)] = inst_16690);

(statearr_16742[(12)] = inst_16683__$1);

return statearr_16742;
})();
var statearr_16743_16778 = state_16728__$1;
(statearr_16743_16778[(2)] = null);

(statearr_16743_16778[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (22))){
var state_16728__$1 = state_16728;
var statearr_16744_16779 = state_16728__$1;
(statearr_16744_16779[(2)] = null);

(statearr_16744_16779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (6))){
var inst_16669 = (state_16728[(13)]);
var inst_16678 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16669) : f.call(null,inst_16669));
var inst_16679 = cljs.core.seq(inst_16678);
var inst_16680 = inst_16679;
var inst_16681 = null;
var inst_16682 = (0);
var inst_16683 = (0);
var state_16728__$1 = (function (){var statearr_16745 = state_16728;
(statearr_16745[(8)] = inst_16680);

(statearr_16745[(9)] = inst_16682);

(statearr_16745[(11)] = inst_16681);

(statearr_16745[(12)] = inst_16683);

return statearr_16745;
})();
var statearr_16746_16780 = state_16728__$1;
(statearr_16746_16780[(2)] = null);

(statearr_16746_16780[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (17))){
var inst_16694 = (state_16728[(7)]);
var inst_16698 = cljs.core.chunk_first(inst_16694);
var inst_16699 = cljs.core.chunk_rest(inst_16694);
var inst_16700 = cljs.core.count(inst_16698);
var inst_16680 = inst_16699;
var inst_16681 = inst_16698;
var inst_16682 = inst_16700;
var inst_16683 = (0);
var state_16728__$1 = (function (){var statearr_16747 = state_16728;
(statearr_16747[(8)] = inst_16680);

(statearr_16747[(9)] = inst_16682);

(statearr_16747[(11)] = inst_16681);

(statearr_16747[(12)] = inst_16683);

return statearr_16747;
})();
var statearr_16748_16781 = state_16728__$1;
(statearr_16748_16781[(2)] = null);

(statearr_16748_16781[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (3))){
var inst_16726 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16728__$1,inst_16726);
} else {
if((state_val_16729 === (12))){
var inst_16714 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16749_16782 = state_16728__$1;
(statearr_16749_16782[(2)] = inst_16714);

(statearr_16749_16782[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (2))){
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16728__$1,(4),in$);
} else {
if((state_val_16729 === (23))){
var inst_16722 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16750_16783 = state_16728__$1;
(statearr_16750_16783[(2)] = inst_16722);

(statearr_16750_16783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (19))){
var inst_16709 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16751_16784 = state_16728__$1;
(statearr_16751_16784[(2)] = inst_16709);

(statearr_16751_16784[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (11))){
var inst_16680 = (state_16728[(8)]);
var inst_16694 = (state_16728[(7)]);
var inst_16694__$1 = cljs.core.seq(inst_16680);
var state_16728__$1 = (function (){var statearr_16752 = state_16728;
(statearr_16752[(7)] = inst_16694__$1);

return statearr_16752;
})();
if(inst_16694__$1){
var statearr_16753_16785 = state_16728__$1;
(statearr_16753_16785[(1)] = (14));

} else {
var statearr_16754_16786 = state_16728__$1;
(statearr_16754_16786[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (9))){
var inst_16716 = (state_16728[(2)]);
var inst_16717 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16728__$1 = (function (){var statearr_16755 = state_16728;
(statearr_16755[(15)] = inst_16716);

return statearr_16755;
})();
if(cljs.core.truth_(inst_16717)){
var statearr_16756_16787 = state_16728__$1;
(statearr_16756_16787[(1)] = (21));

} else {
var statearr_16757_16788 = state_16728__$1;
(statearr_16757_16788[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (5))){
var inst_16672 = cljs.core.async.close_BANG_(out);
var state_16728__$1 = state_16728;
var statearr_16758_16789 = state_16728__$1;
(statearr_16758_16789[(2)] = inst_16672);

(statearr_16758_16789[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (14))){
var inst_16694 = (state_16728[(7)]);
var inst_16696 = cljs.core.chunked_seq_QMARK_(inst_16694);
var state_16728__$1 = state_16728;
if(inst_16696){
var statearr_16759_16790 = state_16728__$1;
(statearr_16759_16790[(1)] = (17));

} else {
var statearr_16760_16791 = state_16728__$1;
(statearr_16760_16791[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (16))){
var inst_16712 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16761_16792 = state_16728__$1;
(statearr_16761_16792[(2)] = inst_16712);

(statearr_16761_16792[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (10))){
var inst_16681 = (state_16728[(11)]);
var inst_16683 = (state_16728[(12)]);
var inst_16688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16681,inst_16683);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16728__$1,(13),out,inst_16688);
} else {
if((state_val_16729 === (18))){
var inst_16694 = (state_16728[(7)]);
var inst_16703 = cljs.core.first(inst_16694);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16728__$1,(20),out,inst_16703);
} else {
if((state_val_16729 === (8))){
var inst_16682 = (state_16728[(9)]);
var inst_16683 = (state_16728[(12)]);
var inst_16685 = (inst_16683 < inst_16682);
var inst_16686 = inst_16685;
var state_16728__$1 = state_16728;
if(cljs.core.truth_(inst_16686)){
var statearr_16762_16793 = state_16728__$1;
(statearr_16762_16793[(1)] = (10));

} else {
var statearr_16763_16794 = state_16728__$1;
(statearr_16763_16794[(1)] = (11));

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
});})(c__14242__auto__))
;
return ((function (switch__14118__auto__,c__14242__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_16767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16767[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__);

(statearr_16767[(1)] = (1));

return statearr_16767;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____1 = (function (state_16728){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16728);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16768){if((e16768 instanceof Object)){
var ex__14122__auto__ = e16768;
var statearr_16769_16795 = state_16728;
(statearr_16769_16795[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16728);

return cljs.core.cst$kw$recur;
} else {
throw e16768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16796 = state_16728;
state_16728 = G__16796;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__ = function(state_16728){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____1.call(this,state_16728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto__))
})();
var state__14244__auto__ = (function (){var statearr_16770 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto__);

return statearr_16770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto__))
);

return c__14242__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16797 = [];
var len__7492__auto___16800 = arguments.length;
var i__7493__auto___16801 = (0);
while(true){
if((i__7493__auto___16801 < len__7492__auto___16800)){
args16797.push((arguments[i__7493__auto___16801]));

var G__16802 = (i__7493__auto___16801 + (1));
i__7493__auto___16801 = G__16802;
continue;
} else {
}
break;
}

var G__16799 = args16797.length;
switch (G__16799) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16797.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16804 = [];
var len__7492__auto___16807 = arguments.length;
var i__7493__auto___16808 = (0);
while(true){
if((i__7493__auto___16808 < len__7492__auto___16807)){
args16804.push((arguments[i__7493__auto___16808]));

var G__16809 = (i__7493__auto___16808 + (1));
i__7493__auto___16808 = G__16809;
continue;
} else {
}
break;
}

var G__16806 = args16804.length;
switch (G__16806) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16804.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16811 = [];
var len__7492__auto___16862 = arguments.length;
var i__7493__auto___16863 = (0);
while(true){
if((i__7493__auto___16863 < len__7492__auto___16862)){
args16811.push((arguments[i__7493__auto___16863]));

var G__16864 = (i__7493__auto___16863 + (1));
i__7493__auto___16863 = G__16864;
continue;
} else {
}
break;
}

var G__16813 = args16811.length;
switch (G__16813) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16811.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14242__auto___16866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___16866,out){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___16866,out){
return (function (state_16837){
var state_val_16838 = (state_16837[(1)]);
if((state_val_16838 === (7))){
var inst_16832 = (state_16837[(2)]);
var state_16837__$1 = state_16837;
var statearr_16839_16867 = state_16837__$1;
(statearr_16839_16867[(2)] = inst_16832);

(statearr_16839_16867[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16838 === (1))){
var inst_16814 = null;
var state_16837__$1 = (function (){var statearr_16840 = state_16837;
(statearr_16840[(7)] = inst_16814);

return statearr_16840;
})();
var statearr_16841_16868 = state_16837__$1;
(statearr_16841_16868[(2)] = null);

(statearr_16841_16868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16838 === (4))){
var inst_16817 = (state_16837[(8)]);
var inst_16817__$1 = (state_16837[(2)]);
var inst_16818 = (inst_16817__$1 == null);
var inst_16819 = cljs.core.not(inst_16818);
var state_16837__$1 = (function (){var statearr_16842 = state_16837;
(statearr_16842[(8)] = inst_16817__$1);

return statearr_16842;
})();
if(inst_16819){
var statearr_16843_16869 = state_16837__$1;
(statearr_16843_16869[(1)] = (5));

} else {
var statearr_16844_16870 = state_16837__$1;
(statearr_16844_16870[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16838 === (6))){
var state_16837__$1 = state_16837;
var statearr_16845_16871 = state_16837__$1;
(statearr_16845_16871[(2)] = null);

(statearr_16845_16871[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16838 === (3))){
var inst_16834 = (state_16837[(2)]);
var inst_16835 = cljs.core.async.close_BANG_(out);
var state_16837__$1 = (function (){var statearr_16846 = state_16837;
(statearr_16846[(9)] = inst_16834);

return statearr_16846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16837__$1,inst_16835);
} else {
if((state_val_16838 === (2))){
var state_16837__$1 = state_16837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16837__$1,(4),ch);
} else {
if((state_val_16838 === (11))){
var inst_16817 = (state_16837[(8)]);
var inst_16826 = (state_16837[(2)]);
var inst_16814 = inst_16817;
var state_16837__$1 = (function (){var statearr_16847 = state_16837;
(statearr_16847[(7)] = inst_16814);

(statearr_16847[(10)] = inst_16826);

return statearr_16847;
})();
var statearr_16848_16872 = state_16837__$1;
(statearr_16848_16872[(2)] = null);

(statearr_16848_16872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16838 === (9))){
var inst_16817 = (state_16837[(8)]);
var state_16837__$1 = state_16837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16837__$1,(11),out,inst_16817);
} else {
if((state_val_16838 === (5))){
var inst_16814 = (state_16837[(7)]);
var inst_16817 = (state_16837[(8)]);
var inst_16821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16817,inst_16814);
var state_16837__$1 = state_16837;
if(inst_16821){
var statearr_16850_16873 = state_16837__$1;
(statearr_16850_16873[(1)] = (8));

} else {
var statearr_16851_16874 = state_16837__$1;
(statearr_16851_16874[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16838 === (10))){
var inst_16829 = (state_16837[(2)]);
var state_16837__$1 = state_16837;
var statearr_16852_16875 = state_16837__$1;
(statearr_16852_16875[(2)] = inst_16829);

(statearr_16852_16875[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16838 === (8))){
var inst_16814 = (state_16837[(7)]);
var tmp16849 = inst_16814;
var inst_16814__$1 = tmp16849;
var state_16837__$1 = (function (){var statearr_16853 = state_16837;
(statearr_16853[(7)] = inst_16814__$1);

return statearr_16853;
})();
var statearr_16854_16876 = state_16837__$1;
(statearr_16854_16876[(2)] = null);

(statearr_16854_16876[(1)] = (2));


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
});})(c__14242__auto___16866,out))
;
return ((function (switch__14118__auto__,c__14242__auto___16866,out){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16858[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16858[(1)] = (1));

return statearr_16858;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16837){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16837);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16859){if((e16859 instanceof Object)){
var ex__14122__auto__ = e16859;
var statearr_16860_16877 = state_16837;
(statearr_16860_16877[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16837);

return cljs.core.cst$kw$recur;
} else {
throw e16859;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16878 = state_16837;
state_16837 = G__16878;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___16866,out))
})();
var state__14244__auto__ = (function (){var statearr_16861 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___16866);

return statearr_16861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___16866,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16879 = [];
var len__7492__auto___16949 = arguments.length;
var i__7493__auto___16950 = (0);
while(true){
if((i__7493__auto___16950 < len__7492__auto___16949)){
args16879.push((arguments[i__7493__auto___16950]));

var G__16951 = (i__7493__auto___16950 + (1));
i__7493__auto___16950 = G__16951;
continue;
} else {
}
break;
}

var G__16881 = args16879.length;
switch (G__16881) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16879.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14242__auto___16953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___16953,out){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___16953,out){
return (function (state_16919){
var state_val_16920 = (state_16919[(1)]);
if((state_val_16920 === (7))){
var inst_16915 = (state_16919[(2)]);
var state_16919__$1 = state_16919;
var statearr_16921_16954 = state_16919__$1;
(statearr_16921_16954[(2)] = inst_16915);

(statearr_16921_16954[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (1))){
var inst_16882 = (new Array(n));
var inst_16883 = inst_16882;
var inst_16884 = (0);
var state_16919__$1 = (function (){var statearr_16922 = state_16919;
(statearr_16922[(7)] = inst_16884);

(statearr_16922[(8)] = inst_16883);

return statearr_16922;
})();
var statearr_16923_16955 = state_16919__$1;
(statearr_16923_16955[(2)] = null);

(statearr_16923_16955[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (4))){
var inst_16887 = (state_16919[(9)]);
var inst_16887__$1 = (state_16919[(2)]);
var inst_16888 = (inst_16887__$1 == null);
var inst_16889 = cljs.core.not(inst_16888);
var state_16919__$1 = (function (){var statearr_16924 = state_16919;
(statearr_16924[(9)] = inst_16887__$1);

return statearr_16924;
})();
if(inst_16889){
var statearr_16925_16956 = state_16919__$1;
(statearr_16925_16956[(1)] = (5));

} else {
var statearr_16926_16957 = state_16919__$1;
(statearr_16926_16957[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (15))){
var inst_16909 = (state_16919[(2)]);
var state_16919__$1 = state_16919;
var statearr_16927_16958 = state_16919__$1;
(statearr_16927_16958[(2)] = inst_16909);

(statearr_16927_16958[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (13))){
var state_16919__$1 = state_16919;
var statearr_16928_16959 = state_16919__$1;
(statearr_16928_16959[(2)] = null);

(statearr_16928_16959[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (6))){
var inst_16884 = (state_16919[(7)]);
var inst_16905 = (inst_16884 > (0));
var state_16919__$1 = state_16919;
if(cljs.core.truth_(inst_16905)){
var statearr_16929_16960 = state_16919__$1;
(statearr_16929_16960[(1)] = (12));

} else {
var statearr_16930_16961 = state_16919__$1;
(statearr_16930_16961[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (3))){
var inst_16917 = (state_16919[(2)]);
var state_16919__$1 = state_16919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16919__$1,inst_16917);
} else {
if((state_val_16920 === (12))){
var inst_16883 = (state_16919[(8)]);
var inst_16907 = cljs.core.vec(inst_16883);
var state_16919__$1 = state_16919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16919__$1,(15),out,inst_16907);
} else {
if((state_val_16920 === (2))){
var state_16919__$1 = state_16919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16919__$1,(4),ch);
} else {
if((state_val_16920 === (11))){
var inst_16899 = (state_16919[(2)]);
var inst_16900 = (new Array(n));
var inst_16883 = inst_16900;
var inst_16884 = (0);
var state_16919__$1 = (function (){var statearr_16931 = state_16919;
(statearr_16931[(7)] = inst_16884);

(statearr_16931[(8)] = inst_16883);

(statearr_16931[(10)] = inst_16899);

return statearr_16931;
})();
var statearr_16932_16962 = state_16919__$1;
(statearr_16932_16962[(2)] = null);

(statearr_16932_16962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (9))){
var inst_16883 = (state_16919[(8)]);
var inst_16897 = cljs.core.vec(inst_16883);
var state_16919__$1 = state_16919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16919__$1,(11),out,inst_16897);
} else {
if((state_val_16920 === (5))){
var inst_16884 = (state_16919[(7)]);
var inst_16887 = (state_16919[(9)]);
var inst_16892 = (state_16919[(11)]);
var inst_16883 = (state_16919[(8)]);
var inst_16891 = (inst_16883[inst_16884] = inst_16887);
var inst_16892__$1 = (inst_16884 + (1));
var inst_16893 = (inst_16892__$1 < n);
var state_16919__$1 = (function (){var statearr_16933 = state_16919;
(statearr_16933[(11)] = inst_16892__$1);

(statearr_16933[(12)] = inst_16891);

return statearr_16933;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_16934_16963 = state_16919__$1;
(statearr_16934_16963[(1)] = (8));

} else {
var statearr_16935_16964 = state_16919__$1;
(statearr_16935_16964[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (14))){
var inst_16912 = (state_16919[(2)]);
var inst_16913 = cljs.core.async.close_BANG_(out);
var state_16919__$1 = (function (){var statearr_16937 = state_16919;
(statearr_16937[(13)] = inst_16912);

return statearr_16937;
})();
var statearr_16938_16965 = state_16919__$1;
(statearr_16938_16965[(2)] = inst_16913);

(statearr_16938_16965[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (10))){
var inst_16903 = (state_16919[(2)]);
var state_16919__$1 = state_16919;
var statearr_16939_16966 = state_16919__$1;
(statearr_16939_16966[(2)] = inst_16903);

(statearr_16939_16966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16920 === (8))){
var inst_16892 = (state_16919[(11)]);
var inst_16883 = (state_16919[(8)]);
var tmp16936 = inst_16883;
var inst_16883__$1 = tmp16936;
var inst_16884 = inst_16892;
var state_16919__$1 = (function (){var statearr_16940 = state_16919;
(statearr_16940[(7)] = inst_16884);

(statearr_16940[(8)] = inst_16883__$1);

return statearr_16940;
})();
var statearr_16941_16967 = state_16919__$1;
(statearr_16941_16967[(2)] = null);

(statearr_16941_16967[(1)] = (2));


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
});})(c__14242__auto___16953,out))
;
return ((function (switch__14118__auto__,c__14242__auto___16953,out){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16945[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16945[(1)] = (1));

return statearr_16945;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16919){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16919);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16946){if((e16946 instanceof Object)){
var ex__14122__auto__ = e16946;
var statearr_16947_16968 = state_16919;
(statearr_16947_16968[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16919);

return cljs.core.cst$kw$recur;
} else {
throw e16946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__16969 = state_16919;
state_16919 = G__16969;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___16953,out))
})();
var state__14244__auto__ = (function (){var statearr_16948 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_16948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___16953);

return statearr_16948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___16953,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16970 = [];
var len__7492__auto___17044 = arguments.length;
var i__7493__auto___17045 = (0);
while(true){
if((i__7493__auto___17045 < len__7492__auto___17044)){
args16970.push((arguments[i__7493__auto___17045]));

var G__17046 = (i__7493__auto___17045 + (1));
i__7493__auto___17045 = G__17046;
continue;
} else {
}
break;
}

var G__16972 = args16970.length;
switch (G__16972) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16970.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14242__auto___17048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___17048,out){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___17048,out){
return (function (state_17014){
var state_val_17015 = (state_17014[(1)]);
if((state_val_17015 === (7))){
var inst_17010 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
var statearr_17016_17049 = state_17014__$1;
(statearr_17016_17049[(2)] = inst_17010);

(statearr_17016_17049[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (1))){
var inst_16973 = [];
var inst_16974 = inst_16973;
var inst_16975 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17014__$1 = (function (){var statearr_17017 = state_17014;
(statearr_17017[(7)] = inst_16974);

(statearr_17017[(8)] = inst_16975);

return statearr_17017;
})();
var statearr_17018_17050 = state_17014__$1;
(statearr_17018_17050[(2)] = null);

(statearr_17018_17050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (4))){
var inst_16978 = (state_17014[(9)]);
var inst_16978__$1 = (state_17014[(2)]);
var inst_16979 = (inst_16978__$1 == null);
var inst_16980 = cljs.core.not(inst_16979);
var state_17014__$1 = (function (){var statearr_17019 = state_17014;
(statearr_17019[(9)] = inst_16978__$1);

return statearr_17019;
})();
if(inst_16980){
var statearr_17020_17051 = state_17014__$1;
(statearr_17020_17051[(1)] = (5));

} else {
var statearr_17021_17052 = state_17014__$1;
(statearr_17021_17052[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (15))){
var inst_17004 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
var statearr_17022_17053 = state_17014__$1;
(statearr_17022_17053[(2)] = inst_17004);

(statearr_17022_17053[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (13))){
var state_17014__$1 = state_17014;
var statearr_17023_17054 = state_17014__$1;
(statearr_17023_17054[(2)] = null);

(statearr_17023_17054[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (6))){
var inst_16974 = (state_17014[(7)]);
var inst_16999 = inst_16974.length;
var inst_17000 = (inst_16999 > (0));
var state_17014__$1 = state_17014;
if(cljs.core.truth_(inst_17000)){
var statearr_17024_17055 = state_17014__$1;
(statearr_17024_17055[(1)] = (12));

} else {
var statearr_17025_17056 = state_17014__$1;
(statearr_17025_17056[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (3))){
var inst_17012 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17014__$1,inst_17012);
} else {
if((state_val_17015 === (12))){
var inst_16974 = (state_17014[(7)]);
var inst_17002 = cljs.core.vec(inst_16974);
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17014__$1,(15),out,inst_17002);
} else {
if((state_val_17015 === (2))){
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17014__$1,(4),ch);
} else {
if((state_val_17015 === (11))){
var inst_16978 = (state_17014[(9)]);
var inst_16982 = (state_17014[(10)]);
var inst_16992 = (state_17014[(2)]);
var inst_16993 = [];
var inst_16994 = inst_16993.push(inst_16978);
var inst_16974 = inst_16993;
var inst_16975 = inst_16982;
var state_17014__$1 = (function (){var statearr_17026 = state_17014;
(statearr_17026[(11)] = inst_16992);

(statearr_17026[(7)] = inst_16974);

(statearr_17026[(8)] = inst_16975);

(statearr_17026[(12)] = inst_16994);

return statearr_17026;
})();
var statearr_17027_17057 = state_17014__$1;
(statearr_17027_17057[(2)] = null);

(statearr_17027_17057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (9))){
var inst_16974 = (state_17014[(7)]);
var inst_16990 = cljs.core.vec(inst_16974);
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17014__$1,(11),out,inst_16990);
} else {
if((state_val_17015 === (5))){
var inst_16978 = (state_17014[(9)]);
var inst_16982 = (state_17014[(10)]);
var inst_16975 = (state_17014[(8)]);
var inst_16982__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16978) : f.call(null,inst_16978));
var inst_16983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16982__$1,inst_16975);
var inst_16984 = cljs.core.keyword_identical_QMARK_(inst_16975,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16985 = (inst_16983) || (inst_16984);
var state_17014__$1 = (function (){var statearr_17028 = state_17014;
(statearr_17028[(10)] = inst_16982__$1);

return statearr_17028;
})();
if(cljs.core.truth_(inst_16985)){
var statearr_17029_17058 = state_17014__$1;
(statearr_17029_17058[(1)] = (8));

} else {
var statearr_17030_17059 = state_17014__$1;
(statearr_17030_17059[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (14))){
var inst_17007 = (state_17014[(2)]);
var inst_17008 = cljs.core.async.close_BANG_(out);
var state_17014__$1 = (function (){var statearr_17032 = state_17014;
(statearr_17032[(13)] = inst_17007);

return statearr_17032;
})();
var statearr_17033_17060 = state_17014__$1;
(statearr_17033_17060[(2)] = inst_17008);

(statearr_17033_17060[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (10))){
var inst_16997 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
var statearr_17034_17061 = state_17014__$1;
(statearr_17034_17061[(2)] = inst_16997);

(statearr_17034_17061[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (8))){
var inst_16978 = (state_17014[(9)]);
var inst_16982 = (state_17014[(10)]);
var inst_16974 = (state_17014[(7)]);
var inst_16987 = inst_16974.push(inst_16978);
var tmp17031 = inst_16974;
var inst_16974__$1 = tmp17031;
var inst_16975 = inst_16982;
var state_17014__$1 = (function (){var statearr_17035 = state_17014;
(statearr_17035[(7)] = inst_16974__$1);

(statearr_17035[(8)] = inst_16975);

(statearr_17035[(14)] = inst_16987);

return statearr_17035;
})();
var statearr_17036_17062 = state_17014__$1;
(statearr_17036_17062[(2)] = null);

(statearr_17036_17062[(1)] = (2));


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
});})(c__14242__auto___17048,out))
;
return ((function (switch__14118__auto__,c__14242__auto___17048,out){
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_17040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17040[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_17040[(1)] = (1));

return statearr_17040;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_17014){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_17014);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e17041){if((e17041 instanceof Object)){
var ex__14122__auto__ = e17041;
var statearr_17042_17063 = state_17014;
(statearr_17042_17063[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17014);

return cljs.core.cst$kw$recur;
} else {
throw e17041;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__17064 = state_17014;
state_17014 = G__17064;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_17014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_17014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___17048,out))
})();
var state__14244__auto__ = (function (){var statearr_17043 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_17043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___17048);

return statearr_17043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___17048,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

