// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.viz.eventsubs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('inferenceql.viz.stream.panels.viz.dashboard');
goog.require('inferenceql.viz.stream.panels.viz.inferences');
goog.require('inferenceql.viz.stream.store');
goog.require('inferenceql.viz.stream.panels.viz.samples');
/**
 * Maximum number of categorical options to show in plots.
 */
inferenceql.viz.stream.panels.viz.eventsubs.num_cats = (10);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$viz_SLASH_select_DASH_vs_DASH_simulate_DASH_spec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_col_DASH_selection], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_marginal_DASH_types], null),(function (p__27636,_){
var vec__27637 = p__27636;
var col_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27637,(0),null);
var marginal_types = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27637,(1),null);
return inferenceql.viz.stream.panels.viz.dashboard.spec(inferenceql.viz.stream.panels.viz.samples.observed_samples,inferenceql.viz.stream.store.schema,col_selection,inferenceql.viz.stream.panels.viz.eventsubs.num_cats,marginal_types,(3),true);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$viz_SLASH_cluster_DASH_simulate_DASH_spec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cols_DASH_in_DASH_view], null),(function (cols_in_view,_){
var marginal_types = (((cljs.core.count(cols_in_view) > (1)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$2D,null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$1D,null], null), null));
return inferenceql.viz.stream.panels.viz.dashboard.spec(inferenceql.viz.stream.panels.viz.samples.observed_samples,inferenceql.viz.stream.store.schema,cols_in_view,inferenceql.viz.stream.panels.viz.eventsubs.num_cats,marginal_types,(2),true);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$viz_SLASH_select_DASH_spec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_col_DASH_selection], null),(function (col_selection,_){
return inferenceql.viz.stream.panels.viz.dashboard.spec(inferenceql.viz.stream.panels.viz.samples.observed_samples,inferenceql.viz.stream.store.schema,col_selection,inferenceql.viz.stream.panels.viz.eventsubs.num_cats,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$2D,null], null), null),(3),false);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$viz_SLASH_inferences_DASH_spec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_col_DASH_selection], null),(function (inferences_columns,_){
return inferenceql.viz.stream.panels.viz.inferences.spec(inferences_columns,inferenceql.viz.stream.panels.viz.eventsubs.num_cats,(3));
})], 0));
