// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.viz.samples');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('medley.core');
goog.require('inferenceql.viz.stream.store');
goog.require('inferenceql.viz.config');
/**
 * Number of new rows incorporated at each model iteration.
 */
inferenceql.viz.stream.panels.viz.samples.num_rows_required = (function (){var num_rows_at_iter = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$num_DASH_rows_DASH_at_DASH_iter], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,num_rows_at_iter,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),num_rows_at_iter));
})();
inferenceql.viz.stream.panels.viz.samples.add_null_columns = (function inferenceql$viz$stream$panels$viz$samples$add_null_columns(row){
var columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$column_DASH_ordering], null));
var null_kvs = cljs.core.zipmap(columns,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null_kvs,row], 0));
});
inferenceql.viz.stream.panels.viz.samples.iteration_tags = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (iter,count){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$iter,iter], null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$0(),inferenceql.viz.stream.panels.viz.samples.num_rows_required], 0));
/**
 * Gets all observed samples with iteration tags.
 */
inferenceql.viz.stream.panels.viz.samples.observed_samples = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,inferenceql.viz.stream.panels.viz.samples.iteration_tags,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.add_null_columns,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27326_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27326_SHARP_,cljs.core.cst$kw$collection,"observed");
}),inferenceql.viz.stream.store.rows)));
/**
 * Gets samples at `iterations` and adds dummy iteration tags,
 *   so these samples are always displayed.
 */
inferenceql.viz.stream.panels.viz.samples.virtual_samples = (function inferenceql$viz$stream$panels$viz$samples$virtual_samples(iteration){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27327_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__27327_SHARP_,cljs.core.cst$kw$collection,"virtual",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$iter,(0)], 0));
}),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.store.samples,iteration));
});
inferenceql.viz.stream.panels.viz.samples.ranges = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$numerical_ranges], null));
/**
 * Map of nominal column name to number of options
 */
inferenceql.viz.stream.panels.viz.samples.options_count = medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$options], null)));
/**
 * Map of nominal column name to options for that columns sort by
 *   frequency in observed data.
 */
inferenceql.viz.stream.panels.viz.samples.top_options = medley.core.map_kv_vals((function (col,options){
var starting_freq = cljs.core.zipmap(options,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
var actual_freqs = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(col,inferenceql.viz.stream.panels.viz.samples.observed_samples));
var final_freqs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([starting_freq,actual_freqs], 0));
var ordered_pairs = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,cljs.core._GT_,final_freqs);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ordered_pairs));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$options], null)));
