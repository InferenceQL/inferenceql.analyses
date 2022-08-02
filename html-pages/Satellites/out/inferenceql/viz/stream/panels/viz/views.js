// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.viz.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.math.combinatorics');
goog.require('inferenceql.viz.panels.viz.views_simple');
goog.require('inferenceql.viz.stream.panels.viz.circle');
goog.require('inferenceql.viz.stream.model.xcat_util');
goog.require('inferenceql.viz.config');
goog.require('inferenceql.viz.stream.panels.viz.samples');
/**
 * Reagent component for circle viz for mutual info.
 */
inferenceql.viz.stream.panels.viz.views.mi_plot = (function inferenceql$viz$stream$panels$viz$views$mi_plot(mi_data,iteration){
if(cljs.core.seq(mi_data)){
var mi_threshold = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_mi_DASH_threshold], null)));
var mi_data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mi_data,iteration);
var nodes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(mi_data__$1)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$column_DASH_ordering], null)));
var edges = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27330){
var vec__27331 = p__27330;
var col_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(0),null);
var col_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$targets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_1,col_2], null),cljs.core.cst$kw$val,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mi_data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_1,col_2], null))], null);
}),clojure.math.combinatorics.combinations(nodes,(2)));
var spec = inferenceql.viz.stream.panels.viz.circle.circle_viz_spec(nodes,edges,mi_threshold);
var options = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$actions,false,cljs.core.cst$kw$mode,"vega",cljs.core.cst$kw$renderer,"canvas"], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.viz.views_simple.vega_lite,spec,options,null,null,null], null);
} else {
return null;
}
});
/**
 * Reagent component for select-vs-simulate plot.
 */
inferenceql.viz.stream.panels.viz.views.cluster_simulate_plot = (function inferenceql$viz$stream$panels$viz$views$cluster_simulate_plot(cluster_selected,_click_count,iteration){
var spec = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz_SLASH_cluster_DASH_simulate_DASH_spec], null)));
var xcat_model = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_model], null)));
var all_samples = (function (){var row_assignments = inferenceql.viz.stream.model.xcat_util.all_row_assignments(xcat_model);
var view_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["view_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$view_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected))].join(''));
var num_rows = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27334_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__27334_SHARP_,view_key),cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected));
}),row_assignments));
var view_cluster_assignments = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(row_assignments,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var observed_samples = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,inferenceql.viz.stream.panels.viz.samples.observed_samples,view_cluster_assignments);
var view_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.model.xcat_util.xcat_view_id_map(xcat_model),cljs.core.cst$kw$view_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected));
var cluster_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.model.xcat_util.xcat_cluster_id_map(xcat_model,view_id),cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected));
var allow_neg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$allow_negative_simulations], null));
var virtual_samples = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27335_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__27335_SHARP_,cljs.core.cst$kw$collection,"virtual",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$iter,(0)], 0));
}),inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster.cljs$core$IFn$_invoke$arity$5(xcat_model,view_id,cluster_id,num_rows,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$allow_DASH_neg,allow_neg], null)));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(observed_samples,virtual_samples);
})();
var options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,false], null);
var data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rows,all_samples], null);
var params = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$iter,iteration,cljs.core.cst$kw$cluster,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected),cljs.core.cst$kw$view,(function (){var G__27336 = cljs.core.cst$kw$view_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected);
if((G__27336 == null)){
return null;
} else {
return ["view_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27336)].join('');
}
})()], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.viz.views_simple.vega_lite,spec,options,null,data,params], null);
});
/**
 * Reagent component for select-vs-simulate plot.
 */
inferenceql.viz.stream.panels.viz.views.select_vs_simulate_plot = (function inferenceql$viz$stream$panels$viz$views$select_vs_simulate_plot(iteration){
var spec = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz_SLASH_select_DASH_vs_DASH_simulate_DASH_spec], null)));
var all_samples = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.observed_samples,inferenceql.viz.stream.panels.viz.samples.virtual_samples(iteration));
var options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,false], null);
var data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rows,all_samples], null);
var params = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$iter,iteration], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.viz.views_simple.vega_lite,spec,options,null,data,params], null);
});
inferenceql.viz.stream.panels.viz.views.select_plot = (function inferenceql$viz$stream$panels$viz$views$select_plot(iteration){
var spec = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz_SLASH_select_DASH_spec], null)));
var options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,false], null);
var data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rows,inferenceql.viz.stream.panels.viz.samples.observed_samples], null);
var params = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$iter,iteration], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.viz.views_simple.vega_lite,spec,options,null,data,params], null);
});
inferenceql.viz.stream.panels.viz.views.inferences_plot = (function inferenceql$viz$stream$panels$viz$views$inferences_plot(iteration){
var spec = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viz_SLASH_inferences_DASH_spec], null)));
var options = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$actions,false,cljs.core.cst$kw$renderer,"canvas"], null);
var data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rows,inferenceql.viz.stream.panels.viz.samples.virtual_samples(iteration)], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.viz.views_simple.vega_lite,spec,options,null,data,null], null);
});
