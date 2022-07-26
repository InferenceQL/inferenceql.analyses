// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_frame.std_interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interceptor');
goog.require('re_frame.loggers');
goog.require('re_frame.settings');
goog.require('re_frame.db');
goog.require('clojure.data');
goog.require('re_frame.cofx');
goog.require('re_frame.utils');
goog.require('re_frame.trace');
re_frame.std_interceptors.debug = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$debug,cljs.core.cst$kw$before,(function re_frame$std_interceptors$debug_before(context){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling re-frame event:",re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event)], 0));

return context;
}),cljs.core.cst$kw$after,(function re_frame$std_interceptors$debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event);
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes in:",event], 0));
} else {
var vec__39922_39925 = clojure.data.diff(orig_db,new_db);
var only_before_39926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39922_39925,(0),null);
var only_after_39927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39922_39925,(1),null);
var db_changed_QMARK__39928 = (((!((only_before_39926 == null)))) || ((!((only_after_39927 == null)))));
if(db_changed_QMARK__39928){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$group,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db clojure.data/diff for:",event], 0));

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:",only_before_39926], 0));

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :",only_after_39927], 0));

re_frame.loggers.console(cljs.core.cst$kw$groupEnd);
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes resulted from:",event], 0));
}
}

return context;
})], 0));
re_frame.std_interceptors.trim_v = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$trim_DASH_v,cljs.core.cst$kw$before,(function re_frame$std_interceptors$trimv_before(context){
return re_frame.interceptor.assoc_coeffect(re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(context,cljs.core.cst$kw$event,cljs.core.subvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0)),cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_untrimmed_DASH_event,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event));
}),cljs.core.cst$kw$after,(function re_frame$std_interceptors$trimv_after(context){
return re_frame.interceptor.assoc_coeffect(re_frame.utils.dissoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coeffects,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_untrimmed_DASH_event], null)),cljs.core.cst$kw$event,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_untrimmed_DASH_event));
})], 0));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
re_frame.std_interceptors.db_handler__GT_interceptor = (function re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$db_DASH_handler,cljs.core.cst$kw$before,(function re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__39929 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39930 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_handler,cljs.core.cst$kw$operation,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39930);

try{try{var map__39931 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__39931__$1 = cljs.core.__destructure_map(map__39931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39931__$1,cljs.core.cst$kw$db);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39931__$1,cljs.core.cst$kw$event);
return re_frame.interceptor.assoc_effect(context,cljs.core.cst$kw$db,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39525__auto___39933 = re_frame.interop.now();
var duration__39526__auto___39934 = (end__39525__auto___39933 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__39526__auto___39934,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39525__auto___39933);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39929);
}})():(function (){var map__39932 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__39932__$1 = cljs.core.__destructure_map(map__39932);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39932__$1,cljs.core.cst$kw$db);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39932__$1,cljs.core.cst$kw$event);
return re_frame.interceptor.assoc_effect(context,cljs.core.cst$kw$db,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
})());
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__39527__auto___39935 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$effects,re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),cljs.core.cst$kw$coeffects,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$effects,re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),cljs.core.cst$kw$coeffects,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__39527__auto___39935);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
re_frame.std_interceptors.fx_handler__GT_interceptor = (function re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$fx_DASH_handler,cljs.core.cst$kw$before,(function re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__39936 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39937 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_handler,cljs.core.cst$kw$operation,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39937);

try{try{var map__39938 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__39938__$1 = cljs.core.__destructure_map(map__39938);
var coeffects = map__39938__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39938__$1,cljs.core.cst$kw$event);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$effects,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39525__auto___39940 = re_frame.interop.now();
var duration__39526__auto___39941 = (end__39525__auto___39940 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__39526__auto___39941,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39525__auto___39940);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39936);
}})():(function (){var map__39939 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__39939__$1 = cljs.core.__destructure_map(map__39939);
var coeffects = map__39939__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39939__$1,cljs.core.cst$kw$event);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$effects,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
})());
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__39527__auto___39942 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$effects,re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),cljs.core.cst$kw$coeffects,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$effects,re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),cljs.core.cst$kw$coeffects,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__39527__auto___39942);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
re_frame.std_interceptors.ctx_handler__GT_interceptor = (function re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$ctx_DASH_handler,cljs.core.cst$kw$before,(function re_frame$std_interceptors$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__39943 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39944 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_handler,cljs.core.cst$kw$operation,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39944);

try{try{return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39525__auto___39945 = re_frame.interop.now();
var duration__39526__auto___39946 = (end__39525__auto___39945 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__39526__auto___39946,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39525__auto___39945);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39943);
}})():(handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__39527__auto___39947 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$effects,re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),cljs.core.cst$kw$coeffects,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$effects,re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),cljs.core.cst$kw$coeffects,re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__39527__auto___39947);

} else {
}

return new_context;
})], 0));
});
re_frame.std_interceptors.path = (function re_frame$std_interceptors$path(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39949 = arguments.length;
var i__4830__auto___39950 = (0);
while(true){
if((i__4830__auto___39950 < len__4829__auto___39949)){
args__4835__auto__.push((arguments[i__4830__auto___39950]));

var G__39951 = (i__4830__auto___39950 + (1));
i__4830__auto___39950 = G__39951;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten(args);
var db_store_key = cljs.core.cst$kw$re_DASH_frame_DASH_path_SLASH_db_DASH_store;
if(cljs.core.empty_QMARK_(path)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"path\" interceptor given no params"], 0));
} else {
}

return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$path,cljs.core.cst$kw$before,(function (context){
var original_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
return re_frame.interceptor.assoc_coeffect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,db_store_key,cljs.core.conj,original_db),cljs.core.cst$kw$db,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_db,path));
}),cljs.core.cst$kw$after,(function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek(db_store);
var new_db_store = cljs.core.pop(db_store);
var context_SINGLEQUOTE_ = re_frame.interceptor.assoc_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,db_store_key,new_db_store),cljs.core.cst$kw$db,original_db);
var db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found)){
return context_SINGLEQUOTE_;
} else {
return re_frame.interceptor.assoc_effect(context_SINGLEQUOTE_,cljs.core.cst$kw$db,cljs.core.assoc_in(original_db,path,db));
}
})], 0));
}));

(re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq39948){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39948));
}));

re_frame.std_interceptors.enrich = (function re_frame$std_interceptors$enrich(f){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$enrich,cljs.core.cst$kw$after,(function re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event);
var db = ((cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),cljs.core.cst$kw$db))?re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db):re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db));
return re_frame.interceptor.assoc_effect(context,cljs.core.cst$kw$db,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event)));
})], 0));
});
re_frame.std_interceptors.after = (function re_frame$std_interceptors$after(f){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$after,cljs.core.cst$kw$after,(function re_frame$std_interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),cljs.core.cst$kw$db))?re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db):re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db));
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
})], 0));
});
re_frame.std_interceptors.on_changes = (function re_frame$std_interceptors$on_changes(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39957 = arguments.length;
var i__4830__auto___39958 = (0);
while(true){
if((i__4830__auto___39958 < len__4829__auto___39957)){
args__4835__auto__.push((arguments[i__4830__auto___39958]));

var G__39959 = (i__4830__auto___39958 + (1));
i__4830__auto___39958 = G__39959;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$on_DASH_changes,cljs.core.cst$kw$after,(function re_frame$std_interceptors$on_change_after(context){
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var old_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39952_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__39952_SHARP_);
}),in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39953_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,p1__39953_SHARP_);
}),in_paths);
var changed_ins_QMARK_ = (function (){var and__4221__auto__ = cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),cljs.core.cst$kw$db);
if(and__4221__auto__){
return cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(changed_ins_QMARK_)){
return re_frame.interceptor.assoc_effect(context,cljs.core.cst$kw$db,cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins)));
} else {
return context;
}
})], 0));
}));

(re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq39954){
var G__39955 = cljs.core.first(seq39954);
var seq39954__$1 = cljs.core.next(seq39954);
var G__39956 = cljs.core.first(seq39954__$1);
var seq39954__$2 = cljs.core.next(seq39954__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39955,G__39956,seq39954__$2);
}));

/**
 * An interceptor which adds registered global interceptors to the context's queue.
 * 
 * NOTE: :queue is a Clojure.lang.PersistentQueue and not a vector.
 */
re_frame.std_interceptors.inject_global_interceptors = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$inject_DASH_global_DASH_interceptors,cljs.core.cst$kw$before,(function re_frame$std_interceptors$inject_global_interceptors_before(context){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$queue,(function (p1__39960_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.settings.get_global_interceptors(),p1__39960_SHARP_);
}));
})], 0));
