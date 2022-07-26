// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.control.eventsubs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('inferenceql.viz.stream.interceptors');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$control_SLASH_iteration,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_DASH_panel,cljs.core.cst$kw$iteration], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$control_SLASH_set_DASH_iteration,inferenceql.viz.stream.interceptors.event_interceptors,(function (db,p__27430){
var vec__27431 = p__27430;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27431,(0),null);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27431,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_DASH_panel,cljs.core.cst$kw$iteration], null),new_val);
}));
