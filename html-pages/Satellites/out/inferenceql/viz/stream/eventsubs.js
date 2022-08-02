// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.eventsubs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('inferenceql.viz.stream.db');
goog.require('inferenceql.viz.stream.interceptors');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app_SLASH_initialize_DASH_db,inferenceql.viz.stream.interceptors.event_interceptors,(function (_,___$1){
return inferenceql.viz.stream.db.default_db();
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app_SLASH_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app,cljs.core.cst$kw$page], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app_SLASH_set_DASH_page,inferenceql.viz.stream.interceptors.event_interceptors,(function (db,p__27512){
var vec__27513 = p__27512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27513,(0),null);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27513,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app,cljs.core.cst$kw$page], null),new_val);
}));
