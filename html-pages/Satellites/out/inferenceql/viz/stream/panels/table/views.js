// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.table.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.viz.stream.store');
goog.require('inferenceql.viz.config');
goog.require('inferenceql.viz.stream.model.xcat_util');
goog.require('inferenceql.viz.panels.table.views_simple');
goog.require('re_frame.core');
inferenceql.viz.stream.panels.table.views.default_cells_fn = (function inferenceql$viz$stream$panels$table$views$default_cells_fn(_,___$1,___$2){
return ({});
});
inferenceql.viz.stream.panels.table.views.cells_fn = (function inferenceql$viz$stream$panels$table$views$cells_fn(xcat_model,cluster_selected){
if(cljs.core.not(cluster_selected)){
return inferenceql.viz.stream.panels.table.views.default_cells_fn;
} else {
var cols_set = cljs.core.set(inferenceql.viz.stream.model.xcat_util.columns_in_view(xcat_model,cljs.core.cst$kw$view_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected)));
var rows_set = cljs.core.set(inferenceql.viz.stream.model.xcat_util.rows_in_view_cluster(xcat_model,cljs.core.cst$kw$view_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected),cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected)));
return (function (row,_col,prop){
if(cljs.core.truth_((function (){var and__4221__auto__ = (rows_set.cljs$core$IFn$_invoke$arity$1 ? rows_set.cljs$core$IFn$_invoke$arity$1(row) : rows_set.call(null,row));
if(cljs.core.truth_(and__4221__auto__)){
var G__27187 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop);
return (cols_set.cljs$core$IFn$_invoke$arity$1 ? cols_set.cljs$core$IFn$_invoke$arity$1(G__27187) : cols_set.call(null,G__27187));
} else {
return and__4221__auto__;
}
})())){
return ({"className": "blue-highlight"});
} else {
return ({});
}
});
}
});
/**
 * Reagent component for data table.
 */
inferenceql.viz.stream.panels.table.views.data_table = (function inferenceql$viz$stream$panels$table$views$data_table(iteration,cluster_selected,options){
var xcat_model = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_model], null)));
var num_points = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$num_DASH_rows_DASH_at_DASH_iter,iteration], null));
var num_columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$columns_DASH_at_DASH_iter,iteration], null));
var col_ordering = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$column_DASH_ordering], null));
var modeled_cols = cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_columns,col_ordering);
var hot_options = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$width,"1390px",cljs.core.cst$kw$cols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,modeled_cols),cljs.core.cst$kw$cells,inferenceql.viz.stream.panels.table.views.cells_fn(xcat_model,cluster_selected)], null);
var hot_options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hot_options,options], 0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.table.views_simple.handsontable,cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_points,inferenceql.viz.stream.store.rows),hot_options__$1,false], null);
});
