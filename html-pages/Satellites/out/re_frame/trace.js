// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__39547){
var map__39548 = p__39547;
var map__39548__$1 = cljs.core.__destructure_map(map__39548);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39548__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39548__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39548__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39548__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__39549_39573 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__39550_39574 = null;
var count__39551_39575 = (0);
var i__39552_39576 = (0);
while(true){
if((i__39552_39576 < count__39551_39575)){
var vec__39563_39577 = chunk__39550_39574.cljs$core$IIndexed$_nth$arity$2(null,i__39552_39576);
var k_39578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563_39577,(0),null);
var cb_39579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563_39577,(1),null);
try{var G__39567_39580 = cljs.core.deref(re_frame.trace.traces);
(cb_39579.cljs$core$IFn$_invoke$arity$1 ? cb_39579.cljs$core$IFn$_invoke$arity$1(G__39567_39580) : cb_39579.call(null,G__39567_39580));
}catch (e39566){var e_39581 = e39566;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39578,"while storing",cljs.core.deref(re_frame.trace.traces),e_39581], 0));
}

var G__39582 = seq__39549_39573;
var G__39583 = chunk__39550_39574;
var G__39584 = count__39551_39575;
var G__39585 = (i__39552_39576 + (1));
seq__39549_39573 = G__39582;
chunk__39550_39574 = G__39583;
count__39551_39575 = G__39584;
i__39552_39576 = G__39585;
continue;
} else {
var temp__5753__auto___39586 = cljs.core.seq(seq__39549_39573);
if(temp__5753__auto___39586){
var seq__39549_39587__$1 = temp__5753__auto___39586;
if(cljs.core.chunked_seq_QMARK_(seq__39549_39587__$1)){
var c__4649__auto___39588 = cljs.core.chunk_first(seq__39549_39587__$1);
var G__39589 = cljs.core.chunk_rest(seq__39549_39587__$1);
var G__39590 = c__4649__auto___39588;
var G__39591 = cljs.core.count(c__4649__auto___39588);
var G__39592 = (0);
seq__39549_39573 = G__39589;
chunk__39550_39574 = G__39590;
count__39551_39575 = G__39591;
i__39552_39576 = G__39592;
continue;
} else {
var vec__39568_39593 = cljs.core.first(seq__39549_39587__$1);
var k_39594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39568_39593,(0),null);
var cb_39595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39568_39593,(1),null);
try{var G__39572_39596 = cljs.core.deref(re_frame.trace.traces);
(cb_39595.cljs$core$IFn$_invoke$arity$1 ? cb_39595.cljs$core$IFn$_invoke$arity$1(G__39572_39596) : cb_39595.call(null,G__39572_39596));
}catch (e39571){var e_39597 = e39571;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39594,"while storing",cljs.core.deref(re_frame.trace.traces),e_39597], 0));
}

var G__39598 = cljs.core.next(seq__39549_39587__$1);
var G__39599 = null;
var G__39600 = (0);
var G__39601 = (0);
seq__39549_39573 = G__39598;
chunk__39550_39574 = G__39599;
count__39551_39575 = G__39600;
i__39552_39576 = G__39601;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
