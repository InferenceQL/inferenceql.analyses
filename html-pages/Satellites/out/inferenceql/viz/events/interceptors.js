// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.events.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
goog.require('re_frame.core');
goog.require('re_frame.interceptor');
goog.require('re_frame.loggers');
goog.require('inferenceql.viz.db');
goog.require('inferenceql.viz.config');
/**
 * Throws an exception with `excep-str` if `db` doesn't match the Spec `a-spec`.
 */
inferenceql.viz.events.interceptors.check_and_throw = (function inferenceql$viz$events$interceptors$check_and_throw(db,a_spec,excep_str){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
console.error((function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27161_27165 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27162_27166 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27163_27167 = true;
var _STAR_print_fn_STAR__temp_val__27164_27168 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27163_27167);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27164_27168);

try{expound.alpha.expound(a_spec,db);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27162_27166);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27161_27165);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(excep_str),cljs.spec.alpha.explain_str(a_spec,db)].join(''),cljs.spec.alpha.explain_data(a_spec,db));
}
});
inferenceql.viz.events.interceptors.check_spec = (function inferenceql$viz$events$interceptors$check_spec(spec){

return re_frame.core.after((function (p1__27169_SHARP_){
return inferenceql.viz.events.interceptors.check_and_throw(p1__27169_SHARP_,spec,"re-frame db does not satisfy spec: ");
}));
});
/**
 * An interceptor which logs an event handler's name to the console.
 *   Output includes the event vector. 
 */
inferenceql.viz.events.interceptors.log_name = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$log_DASH_name,cljs.core.cst$kw$before,(function inferenceql$viz$events$interceptors$debug_before(context){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling re-frame event:",re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event)], 0));

return context;
}),cljs.core.cst$kw$after,(function inferenceql$viz$events$interceptors$debug_after(context){
return context;
})], 0));
/**
 * A default set of event interceptors to use within events across the app.
 */
inferenceql.viz.events.interceptors.event_interceptors = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(inferenceql.viz.config.config,cljs.core.cst$kw$enable_DASH_debug_DASH_interceptors,false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug,inferenceql.viz.events.interceptors.check_spec(cljs.core.cst$kw$inferenceql$viz$db_SLASH_db)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.events.interceptors.log_name], null));
