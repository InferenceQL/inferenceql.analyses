// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.viz.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('medley.core');
inferenceql.viz.stream.panels.viz.util.vl5_schema = "https://vega.github.io/schema/vega-lite/v5.json";
inferenceql.viz.stream.panels.viz.util.obs_data_color = "#4e79a7";
inferenceql.viz.stream.panels.viz.util.virtual_data_color = "#f28e2b";
inferenceql.viz.stream.panels.viz.util.unselected_color = "lightgrey";
/**
 * Given a `schema`, returns a vega-type function.
 * 
 *   Args:
 *  schema: (map) Mapping from column name to iql stat-type.
 * 
 *   Returns: (a function) Which returns a vega-lite type given `col-name`, a column name
 *  from the data table. Returns nil if vega-lite type can't be deterimend.
 */
inferenceql.viz.stream.panels.viz.util.vega_type_fn = (function inferenceql$viz$stream$panels$viz$util$vega_type_fn(schema){
return (function (col_name){
var schema__$1 = medley.core.map_keys(cljs.core.name,schema);
var mapping = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$numerical,"quantitative",cljs.core.cst$kw$nominal,"nominal",cljs.core.cst$kw$ignore,"nominal"], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mapping,cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema__$1,cljs.core.name(col_name)));
});
});
