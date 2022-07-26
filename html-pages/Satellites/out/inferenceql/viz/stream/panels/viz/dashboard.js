// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.viz.dashboard');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_bean.core');
goog.require('inferenceql.viz.stream.panels.viz.samples');
goog.require('inferenceql.viz.stream.panels.viz.util');
inferenceql.viz.stream.panels.viz.dashboard.node$module$vega_embed$vega = require('vega-embed')['vega'];
/**
 * Takes a seq of numerical `data` and `binning`. Returns the number of data points in each bin.
 *   `binning` is a map with a :start and :stop value for the range of the bins. And a :step value
 *   for the bin widths.
 */
inferenceql.viz.stream.panels.viz.dashboard.bin_counts = (function inferenceql$viz$stream$panels$viz$dashboard$bin_counts(data,binning){
var min = cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(binning);
var max = cljs.core.cst$kw$stop.cljs$core$IFn$_invoke$arity$1(binning);
var width = cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(binning);
var bin_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27563_SHARP_){
return cljs.core.quot((p1__27563_SHARP_ - min),width);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27562_SHARP_){
return (((min <= p1__27562_SHARP_)) && ((p1__27562_SHARP_ <= max)));
}),data)));
var num_bins = cljs.core.quot((max - min),width);
var bin_vals__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (bin_num){
var G__27564 = bin_num;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_bins,bin_num)){
return (G__27564 - (1));
} else {
return G__27564;
}
}),bin_vals);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,bv){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,bv,cljs.core.inc);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num_bins,(0))),bin_vals__$1);
});
/**
 * Takes `bin-config` which is a map with bin extents: {:extent [min max]}.
 *   There can also be a key in the same map with the maximum number of bins
 *   to use: {:maxbins num-bins}.
 *   Returns vega's preferred binning which is map: {:start x :end y :step z}
 */
inferenceql.viz.stream.panels.viz.dashboard.vega_binning = (function inferenceql$viz$stream$panels$viz$dashboard$vega_binning(bin_config){
return cljs_bean.core.__GT_clj((function (){var G__27565 = cljs.core.clj__GT_js(bin_config);
return inferenceql.viz.stream.panels.viz.dashboard.node$module$vega_embed$vega.bin(G__27565);
})());
});
/**
 * Generates a vega-lite spec for a histogram.
 *   `selections` is a collection of maps representing data in selected rows and columns.
 *   `col` is the key within each map in `selections` that is used to extract data for the histogram.
 *   `vega-type` is a function that takes a column name and returns an vega datatype.
 */
inferenceql.viz.stream.panels.viz.dashboard.histogram_quant = (function inferenceql$viz$stream$panels$viz$dashboard$histogram_quant(col,_samples,ranges){
var col_type = "quantitative";
var max_bins = (30);
var bin_config = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extent,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,col),cljs.core.cst$kw$maxbins,max_bins], null);
var max_bin_count = (800);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$resolve,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,"shared",cljs.core.cst$kw$y,"shared"], null)], null),cljs.core.cst$kw$spacing,(0),cljs.core.cst$kw$bounds,"flush",cljs.core.cst$kw$facet,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$header,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,null,cljs.core.cst$kw$labelOrient,"bottom",cljs.core.cst$kw$labelPadding,(40)], null)], null),cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"bar",cljs.core.cst$kw$color,inferenceql.viz.stream.panels.viz.util.unselected_color,cljs.core.cst$kw$tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,"data"], null),cljs.core.cst$kw$clip,true], null),cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"brush-all",cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"interval",cljs.core.cst$kw$encodings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x"], null)], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bin,bin_config,cljs.core.cst$kw$field,col,cljs.core.cst$kw$type,col_type,cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,col)], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),max_bin_count], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cluster == null",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null)], null)], null)], null)], null),cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"bar",cljs.core.cst$kw$clip,true], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bin,bin_config,cljs.core.cst$kw$field,col,cljs.core.cst$kw$type,col_type,cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,col)], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),max_bin_count], null)], null)], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.util.obs_data_color,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null)], null),cljs.core.cst$kw$legend,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$orient,"top",cljs.core.cst$kw$title,null], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$or,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),"datum[view] == cluster"], null)], null)], null)], null),cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"bar",cljs.core.cst$kw$clip,true], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bin,bin_config,cljs.core.cst$kw$field,col,cljs.core.cst$kw$type,col_type,cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,col)], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),max_bin_count], null)], null)], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.util.obs_data_color,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null)], null),cljs.core.cst$kw$legend,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$orient,"top",cljs.core.cst$kw$title,null], null)], null)], null)], null)], null)], null)], null);
});
/**
 * Generates a vega-lite spec for a histogram.
 *   `selections` is a collection of maps representing data in selected rows and columns.
 *   `col` is the key within each map in `selections` that is used to extract data for the histogram.
 *   `vega-type` is a function that takes a column name and returns an vega datatype.
 */
inferenceql.viz.stream.panels.viz.dashboard.histogram_nom = (function inferenceql$viz$stream$panels$viz$dashboard$histogram_nom(col,samples){
var col_type = "nominal";
var freqs = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(col,samples));
var col_vals = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(freqs));
var col_vals__$1 = (cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,col_vals))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col_vals),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)):col_vals);
var cat_max_count = (900);
var bin_flag = false;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"point",cljs.core.cst$kw$shape,"circle",cljs.core.cst$kw$color,inferenceql.viz.stream.panels.viz.util.unselected_color,cljs.core.cst$kw$tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,"data"], null),cljs.core.cst$kw$opacity,0.85], null),cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"brush-all",cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"point",cljs.core.cst$kw$nearest,true,cljs.core.cst$kw$toggle,"true",cljs.core.cst$kw$on,"click[!event.shiftKey]",cljs.core.cst$kw$fields,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,"collection"], null),cljs.core.cst$kw$clear,"dblclick[!event.shiftKey]"], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bin,bin_flag,cljs.core.cst$kw$field,col,cljs.core.cst$kw$type,col_type,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$titleAnchor,"start",cljs.core.cst$kw$titleAlign,"right",cljs.core.cst$kw$titlePadding,(1)], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,col_vals__$1], null)], null),cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$orient,"top"], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cat_max_count], null)], null)], null),cljs.core.cst$kw$order,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null),cljs.core.cst$kw$opacity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$condition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null)], null)], null),cljs.core.cst$kw$value,0.75], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null),"cluster == null"], null)], null),cljs.core.cst$kw$value,0.75], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"true",cljs.core.cst$kw$value,(0)], null)], null)], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$condition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null)], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.obs_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null),"cluster == null"], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"true",cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.unselected_color], null)], null),cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.util.obs_data_color,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null)], null),cljs.core.cst$kw$legend,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$orient,"top",cljs.core.cst$kw$title,null,cljs.core.cst$kw$offset,(10)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"point",cljs.core.cst$kw$shape,"stroke",cljs.core.cst$kw$size,(80),cljs.core.cst$kw$strokeWidth,(2),cljs.core.cst$kw$angle,(90),cljs.core.cst$kw$color,inferenceql.viz.stream.panels.viz.util.obs_data_color,cljs.core.cst$kw$opacity,0.8], null),cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),"cluster != null","datum[view] == cluster"], null)], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bin,bin_flag,cljs.core.cst$kw$field,col,cljs.core.cst$kw$type,col_type,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$titleAnchor,"start",cljs.core.cst$kw$titleAlign,"right",cljs.core.cst$kw$titlePadding,(1)], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,col_vals__$1], null)], null),cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$orient,"top"], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cat_max_count], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"point",cljs.core.cst$kw$shape,"triangle-right",cljs.core.cst$kw$strokeWidth,(2),cljs.core.cst$kw$color,inferenceql.viz.stream.panels.viz.util.virtual_data_color,cljs.core.cst$kw$opacity,0.8], null),cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),"cluster != null"], null)], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bin,bin_flag,cljs.core.cst$kw$field,col,cljs.core.cst$kw$type,col_type,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$titleAnchor,"start",cljs.core.cst$kw$titleAlign,"right",cljs.core.cst$kw$titlePadding,(1)], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,col_vals__$1], null)], null),cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$orient,"top"], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cat_max_count], null)], null)], null)], null)], null)], null)], null);
});
/**
 * Generates vega-lite spec for a scatter plot.
 *   Useful for comparing quatitative-quantitative data.
 */
inferenceql.viz.stream.panels.viz.dashboard.scatter_plot = (function inferenceql$viz$stream$panels$viz$dashboard$scatter_plot(col_1,col_2,ranges,id_gen,legend){
var zoom_control_name = ["zoom-control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_gen.cljs$core$IFn$_invoke$arity$0 ? id_gen.cljs$core$IFn$_invoke$arity$0() : id_gen.call(null)))].join('');
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(250),cljs.core.cst$kw$height,(250),cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"point",cljs.core.cst$kw$tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,"data"], null),cljs.core.cst$kw$filled,true,cljs.core.cst$kw$clip,true,cljs.core.cst$kw$size,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,"splomPointSize"], null)], null),cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,zoom_control_name,cljs.core.cst$kw$bind,"scales",cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"interval",cljs.core.cst$kw$on,"[mousedown[event.shiftKey], window:mouseup] > window:mousemove",cljs.core.cst$kw$translate,"[mousedown[event.shiftKey], window:mouseup] > window:mousemove",cljs.core.cst$kw$clear,"dblclick[event.shiftKey]",cljs.core.cst$kw$zoom,"wheel![event.shiftKey]"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$brush_DASH_all,cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"interval",cljs.core.cst$kw$on,"[mousedown[!event.shiftKey], window:mouseup] > window:mousemove",cljs.core.cst$kw$translate,"[mousedown[!event.shiftKey], window:mouseup] > window:mousemove",cljs.core.cst$kw$clear,"dblclick[!event.shiftKey]",cljs.core.cst$kw$zoom,"wheel![!event.shiftKey]"], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,col_1,cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,col_1)], null),cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,col_1], null)], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,col_2,cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,col_2)], null),cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$minExtent,(40),cljs.core.cst$kw$title,col_2], null)], null),cljs.core.cst$kw$order,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),"cluster != null","datum[view] == cluster"], null)], null),cljs.core.cst$kw$value,(10)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null),"cluster == null"], null)], null),cljs.core.cst$kw$value,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null)], null)], null),cljs.core.cst$kw$value,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"true",cljs.core.cst$kw$value,(0)], null)], null),cljs.core.cst$kw$value,(0)], null),cljs.core.cst$kw$opacity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,"splomAlphaObserved"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,"splomAlphaVirtual"], null)], null)], null),cljs.core.cst$kw$legend,null], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),"cluster != null","datum[view] == cluster"], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.obs_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null),"cluster == null"], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.obs_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null)], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"true",cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.unselected_color], null)], null),cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.util.obs_data_color,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null)], null),cljs.core.cst$kw$legend,(cljs.core.truth_(legend)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$orient,"top",cljs.core.cst$kw$title,null], null):null)], null)], null)], null);
});
/**
 * Returns a vega-lite height/width size.
 *   Args:
 *  `col-type` - A vega-lite column type.
 */
inferenceql.viz.stream.panels.viz.dashboard.strip_plot_size_helper = (function inferenceql$viz$stream$panels$viz$dashboard$strip_plot_size_helper(col_type){
var G__27566 = col_type;
switch (G__27566) {
case "quantitative":
return (400);

break;
case "nominal":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$step,(24)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27566)].join('')));

}
});
/**
 * Generates vega-lite spec for a strip plot.
 *   Useful for comparing quantitative-nominal data.
 */
inferenceql.viz.stream.panels.viz.dashboard.strip_plot = (function inferenceql$viz$stream$panels$viz$dashboard$strip_plot(cols,vega_type,n_cats,_samples,ranges,id_gen,legend){
var zoom_control_name = ["zoom-control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_gen.cljs$core$IFn$_invoke$arity$0 ? id_gen.cljs$core$IFn$_invoke$arity$0() : id_gen.call(null)))].join('');
var first_col_nominal = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nominal",(function (){var G__27580 = cljs.core.first(cols);
return (vega_type.cljs$core$IFn$_invoke$arity$1 ? vega_type.cljs$core$IFn$_invoke$arity$1(G__27580) : vega_type.call(null,G__27580));
})());
var cols_to_draw = (function (){var G__27581 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cols);
if(first_col_nominal){
return cljs.core.reverse(G__27581);
} else {
return G__27581;
}
})();
var vec__27568 = cols_to_draw;
var x_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27568,(0),null);
var y_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27568,(1),null);
var vec__27571 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(vega_type,cols_to_draw);
var x_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27571,(0),null);
var y_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27571,(1),null);
var quant_dimension = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_type,"quantitative"))?cljs.core.cst$kw$x:cljs.core.cst$kw$y);
var vec__27574 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.dashboard.strip_plot_size_helper,vega_type),cols_to_draw);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27574,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27574,(1),null);
var vec__27577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ranges,x_field);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577,(0),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577,(1),null);
var y_cats = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.top_options,y_field)));
var title_limit = (cljs.core.count(y_cats) * (25));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$encoding,cljs.core.cst$kw$transform,cljs.core.cst$kw$mark,cljs.core.cst$kw$width,cljs.core.cst$kw$params,cljs.core.cst$kw$bounds,cljs.core.cst$kw$resolve,cljs.core.cst$kw$height,cljs.core.cst$kw$spacing],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,y_field,cljs.core.cst$kw$type,y_type,cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,y_cats], null),cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$titleLimit,title_limit], null)], null),cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,x_field,cljs.core.cst$kw$type,x_type,cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid,true,cljs.core.cst$kw$gridDash,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$zero,false,cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_min,x_max], null)], null)], null),cljs.core.cst$kw$row,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$header,(function (){var G__27582 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,null,cljs.core.cst$kw$labelPadding,(0),cljs.core.cst$kw$labelLimit,title_limit], null);
if(cljs.core.not(legend)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27582,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labels,false], null)], 0));
} else {
return G__27582;
}
})()], null),cljs.core.cst$kw$order,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$condition,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$param,"brush-all",cljs.core.cst$kw$value,(1)], null),cljs.core.cst$kw$value,(0)], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$condition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),"cluster != null","datum[view] == cluster"], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.obs_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null),"cluster == null"], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.obs_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null)], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"true",cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.unselected_color], null)], null),cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.util.obs_data_color,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null)], null),cljs.core.cst$kw$legend,(cljs.core.truth_(legend)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$orient,"top",cljs.core.cst$kw$title,null,cljs.core.cst$kw$offset,(10)], null):null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,y_field,cljs.core.cst$kw$oneOf,y_cats], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"tick",cljs.core.cst$kw$tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,"data"], null),cljs.core.cst$kw$color,inferenceql.viz.stream.panels.viz.util.unselected_color], null),width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,zoom_control_name,cljs.core.cst$kw$bind,"scales",cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"interval",cljs.core.cst$kw$on,"[mousedown[event.shiftKey], window:mouseup] > window:mousemove",cljs.core.cst$kw$translate,"[mousedown[event.shiftKey], window:mouseup] > window:mousemove",cljs.core.cst$kw$clear,"dblclick[event.shiftKey]",cljs.core.cst$kw$encodings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quant_dimension], null),cljs.core.cst$kw$zoom,"wheel![event.shiftKey]"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"brush-all",cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"point",cljs.core.cst$kw$nearest,true,cljs.core.cst$kw$toggle,"true",cljs.core.cst$kw$on,"click[!event.shiftKey]",cljs.core.cst$kw$resolve,"union",cljs.core.cst$kw$fields,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_field,"collection"], null),cljs.core.cst$kw$clear,"dblclick[!event.shiftKey]"], null)], null)], null),"flush",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,"shared",cljs.core.cst$kw$y,"shared"], null)], null),height,(0)]);
});
/**
 * Generates vega-lite spec for a table-bubble plot.
 *   Useful for comparing nominal-nominal data.
 */
inferenceql.viz.stream.panels.viz.dashboard.table_bubble_plot = (function inferenceql$viz$stream$panels$viz$dashboard$table_bubble_plot(cols,_vega_type,n_cats,_samples,legend){
var vec__27583 = cols;
var x_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27583,(0),null);
var y_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27583,(1),null);
var x_cats = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.top_options,x_field)));
var y_cats = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.top_options,y_field)));
var title_limit = (cljs.core.count(x_cats) * (25));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$spacing,(0),cljs.core.cst$kw$bounds,"flush",cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,x_field,cljs.core.cst$kw$oneOf,x_cats], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,y_field,cljs.core.cst$kw$oneOf,y_cats], null)], null)], null),cljs.core.cst$kw$width,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$step,(20)], null),cljs.core.cst$kw$height,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$step,(20)], null),cljs.core.cst$kw$resolve,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,"shared"], null)], null),cljs.core.cst$kw$facet,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$column,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$header,(function (){var G__27586 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,null,cljs.core.cst$kw$labelPadding,(0),cljs.core.cst$kw$labelLimit,title_limit], null);
if(cljs.core.not(legend)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27586,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labels,false], null)], 0));
} else {
return G__27586;
}
})()], null)], null),cljs.core.cst$kw$spec,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$layer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"circle",cljs.core.cst$kw$tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,"data"], null),cljs.core.cst$kw$color,inferenceql.viz.stream.panels.viz.util.unselected_color], null),cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"brush-all",cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"point",cljs.core.cst$kw$nearest,true,cljs.core.cst$kw$toggle,"true",cljs.core.cst$kw$on,"click[!event.shiftKey]",cljs.core.cst$kw$resolve,"union",cljs.core.cst$kw$fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_field,x_field,"collection"], null),cljs.core.cst$kw$clear,"dblclick[!event.shiftKey]"], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,y_field,cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$titleOrient,"left",cljs.core.cst$kw$titleAnchor,"center"], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,y_cats], null)], null),cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,x_field,cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$orient,"bottom",cljs.core.cst$kw$titleLimit,title_limit], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,x_cats], null)], null),cljs.core.cst$kw$size,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$legend,null], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$condition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null),"cluster == null"], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.obs_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$param,"brush-all"], null),"cluster == null"], null)], null),cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"true",cljs.core.cst$kw$value,inferenceql.viz.stream.panels.viz.util.unselected_color], null)], null),cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.util.obs_data_color,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null)], null),cljs.core.cst$kw$legend,(cljs.core.truth_(legend)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$orient,"top",cljs.core.cst$kw$title,null,cljs.core.cst$kw$offset,(10)], null):null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"circle"], null),cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$or,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"virtual"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$and,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$equal,"observed"], null),"cluster != null","datum[view] == cluster"], null)], null)], null)], null)], null)], null),cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,y_field,cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$titleOrient,"left",cljs.core.cst$kw$titleAnchor,"center"], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,y_cats], null)], null),cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,x_field,cljs.core.cst$kw$type,"nominal",cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$orient,"bottom",cljs.core.cst$kw$titleLimit,title_limit], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$domain,x_cats], null)], null),cljs.core.cst$kw$size,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$legend,null], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"collection",cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["observed","virtual"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.util.obs_data_color,inferenceql.viz.stream.panels.viz.util.virtual_data_color], null)], null)], null)], null)], null)], null)], null)], null);
});
inferenceql.viz.stream.panels.viz.dashboard.histogram_quant_section = (function inferenceql$viz$stream$panels$viz$dashboard$histogram_quant_section(cols,samples,ranges,num_columns){
if(cljs.core.seq(cols)){
var specs = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$dashboard$histogram_quant_section_$_iter__27587(s__27588){
return (new cljs.core.LazySeq(null,(function (){
var s__27588__$1 = s__27588;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27588__$1);
if(temp__5753__auto__){
var s__27588__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27588__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27588__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27590 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27589 = (0);
while(true){
if((i__27589 < size__4621__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27589);
cljs.core.chunk_append(b__27590,inferenceql.viz.stream.panels.viz.dashboard.histogram_quant(col,samples,ranges));

var G__27591 = (i__27589 + (1));
i__27589 = G__27591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27590),inferenceql$viz$stream$panels$viz$dashboard$histogram_quant_section_$_iter__27587(cljs.core.chunk_rest(s__27588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27590),null);
}
} else {
var col = cljs.core.first(s__27588__$2);
return cljs.core.cons(inferenceql.viz.stream.panels.viz.dashboard.histogram_quant(col,samples,ranges),inferenceql$viz$stream$panels$viz$dashboard$histogram_quant_section_$_iter__27587(cljs.core.rest(s__27588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cols);
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$concat,specs,cljs.core.cst$kw$columns,num_columns,cljs.core.cst$kw$spacing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,(50),cljs.core.cst$kw$row,(50)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.panels.viz.dashboard.histogram_nom_section = (function inferenceql$viz$stream$panels$viz$dashboard$histogram_nom_section(cols,samples,num_columns){
if(cljs.core.seq(cols)){
var specs = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$dashboard$histogram_nom_section_$_iter__27592(s__27593){
return (new cljs.core.LazySeq(null,(function (){
var s__27593__$1 = s__27593;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27593__$1);
if(temp__5753__auto__){
var s__27593__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27593__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27593__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27595 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27594 = (0);
while(true){
if((i__27594 < size__4621__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27594);
cljs.core.chunk_append(b__27595,inferenceql.viz.stream.panels.viz.dashboard.histogram_nom(col,samples));

var G__27596 = (i__27594 + (1));
i__27594 = G__27596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27595),inferenceql$viz$stream$panels$viz$dashboard$histogram_nom_section_$_iter__27592(cljs.core.chunk_rest(s__27593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27595),null);
}
} else {
var col = cljs.core.first(s__27593__$2);
return cljs.core.cons(inferenceql.viz.stream.panels.viz.dashboard.histogram_nom(col,samples),inferenceql$viz$stream$panels$viz$dashboard$histogram_nom_section_$_iter__27592(cljs.core.rest(s__27593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cols);
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$concat,specs,cljs.core.cst$kw$columns,num_columns,cljs.core.cst$kw$spacing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,(100),cljs.core.cst$kw$row,(50)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.panels.viz.dashboard.scatter_plot_section = (function inferenceql$viz$stream$panels$viz$dashboard$scatter_plot_section(cols,ranges,id_gen,num_columns,legend){
if(cljs.core.seq(cols)){
var specs = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$dashboard$scatter_plot_section_$_iter__27597(s__27598){
return (new cljs.core.LazySeq(null,(function (){
var s__27598__$1 = s__27598;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27598__$1);
if(temp__5753__auto__){
var s__27598__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27598__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27598__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27600 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27599 = (0);
while(true){
if((i__27599 < size__4621__auto__)){
var vec__27601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27599);
var col_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27601,(0),null);
var col_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27601,(1),null);
cljs.core.chunk_append(b__27600,inferenceql.viz.stream.panels.viz.dashboard.scatter_plot(col_1,col_2,ranges,id_gen,legend));

var G__27607 = (i__27599 + (1));
i__27599 = G__27607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27600),inferenceql$viz$stream$panels$viz$dashboard$scatter_plot_section_$_iter__27597(cljs.core.chunk_rest(s__27598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27600),null);
}
} else {
var vec__27604 = cljs.core.first(s__27598__$2);
var col_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27604,(0),null);
var col_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27604,(1),null);
return cljs.core.cons(inferenceql.viz.stream.panels.viz.dashboard.scatter_plot(col_1,col_2,ranges,id_gen,legend),inferenceql$viz$stream$panels$viz$dashboard$scatter_plot_section_$_iter__27597(cljs.core.rest(s__27598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cols);
})();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$concat,specs,cljs.core.cst$kw$columns,num_columns,cljs.core.cst$kw$spacing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,(50),cljs.core.cst$kw$row,(50)], null),cljs.core.cst$kw$resolve,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$legend,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"shared"], null)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.panels.viz.dashboard.bubble_plot_section = (function inferenceql$viz$stream$panels$viz$dashboard$bubble_plot_section(cols,vega_type,n_cats,samples,num_columns,legend){
if(cljs.core.seq(cols)){
var specs = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$dashboard$bubble_plot_section_$_iter__27608(s__27609){
return (new cljs.core.LazySeq(null,(function (){
var s__27609__$1 = s__27609;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27609__$1);
if(temp__5753__auto__){
var s__27609__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27609__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27609__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27611 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27610 = (0);
while(true){
if((i__27610 < size__4621__auto__)){
var col_pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27610);
cljs.core.chunk_append(b__27611,(function (){var vec__27612 = col_pair;
var col_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27612,(0),null);
var col_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27612,(1),null);
var col_pair__$1 = (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.options_count,col_1) >= cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.options_count,col_2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_2,col_1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_1,col_2], null));
return inferenceql.viz.stream.panels.viz.dashboard.table_bubble_plot(col_pair__$1,vega_type,n_cats,samples,legend);
})());

var G__27618 = (i__27610 + (1));
i__27610 = G__27618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27611),inferenceql$viz$stream$panels$viz$dashboard$bubble_plot_section_$_iter__27608(cljs.core.chunk_rest(s__27609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27611),null);
}
} else {
var col_pair = cljs.core.first(s__27609__$2);
return cljs.core.cons((function (){var vec__27615 = col_pair;
var col_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615,(0),null);
var col_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615,(1),null);
var col_pair__$1 = (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.options_count,col_1) >= cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.options_count,col_2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_2,col_1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_1,col_2], null));
return inferenceql.viz.stream.panels.viz.dashboard.table_bubble_plot(col_pair__$1,vega_type,n_cats,samples,legend);
})(),inferenceql$viz$stream$panels$viz$dashboard$bubble_plot_section_$_iter__27608(cljs.core.rest(s__27609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cols);
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$concat,specs,cljs.core.cst$kw$columns,num_columns,cljs.core.cst$kw$spacing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,(100),cljs.core.cst$kw$row,(50)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.panels.viz.dashboard.strip_plot_section = (function inferenceql$viz$stream$panels$viz$dashboard$strip_plot_section(cols,vega_type,n_cats,samples,ranges,id_gen,num_columns,legend){
if(cljs.core.seq(cols)){
var specs = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$dashboard$strip_plot_section_$_iter__27619(s__27620){
return (new cljs.core.LazySeq(null,(function (){
var s__27620__$1 = s__27620;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27620__$1);
if(temp__5753__auto__){
var s__27620__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27620__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27620__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27622 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27621 = (0);
while(true){
if((i__27621 < size__4621__auto__)){
var col_pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27621);
cljs.core.chunk_append(b__27622,inferenceql.viz.stream.panels.viz.dashboard.strip_plot(col_pair,vega_type,n_cats,samples,ranges,id_gen,legend));

var G__27623 = (i__27621 + (1));
i__27621 = G__27623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27622),inferenceql$viz$stream$panels$viz$dashboard$strip_plot_section_$_iter__27619(cljs.core.chunk_rest(s__27620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27622),null);
}
} else {
var col_pair = cljs.core.first(s__27620__$2);
return cljs.core.cons(inferenceql.viz.stream.panels.viz.dashboard.strip_plot(col_pair,vega_type,n_cats,samples,ranges,id_gen,legend),inferenceql$viz$stream$panels$viz$dashboard$strip_plot_section_$_iter__27619(cljs.core.rest(s__27620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cols);
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$concat,specs,cljs.core.cst$kw$columns,num_columns,cljs.core.cst$kw$spacing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,(100),cljs.core.cst$kw$row,(50)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.panels.viz.dashboard.top_level_spec = (function inferenceql$viz$stream$panels$viz$dashboard$top_level_spec(sections){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$autosize,cljs.core.cst$kw$transform,cljs.core.cst$kw$config,cljs.core.cst$kw$params,cljs.core.cst$kw$resolve,cljs.core.cst$kw$$schema,cljs.core.cst$kw$vconcat,cljs.core.cst$kw$spacing,cljs.core.cst$kw$data],[new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$resize,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$window,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,"row_number",cljs.core.cst$kw$as,"row_number"], null)], null),cljs.core.cst$kw$groupby,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["collection"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,"iter",cljs.core.cst$kw$lte,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,"iter"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$countTitle,"Count",cljs.core.cst$kw$axisY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$minExtent,(10)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"iter",cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"view",cljs.core.cst$kw$value,null], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"cluster",cljs.core.cst$kw$value,null], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"splomAlphaObserved",cljs.core.cst$kw$value,0.7], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"splomAlphaVirtual",cljs.core.cst$kw$value,0.7], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"splomPointSize",cljs.core.cst$kw$value,(30)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"showRegression",cljs.core.cst$kw$value,false], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$legend,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,"independent",cljs.core.cst$kw$color,"independent"], null),cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"independent"], null)], null),inferenceql.viz.stream.panels.viz.util.vl5_schema,sections,(100),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"rows"], null)]);
});
/**
 * Produces a vega-lite spec for the QC Dashboard app.
 *   Paths to samples and schema are required.
 *   Path to correlation data is optional.
 *   Category limit is the max number of options to include for categorical variable.
 *   It can be set to nil for no limit.
 */
inferenceql.viz.stream.panels.viz.dashboard.spec = (function inferenceql$viz$stream$panels$viz$dashboard$spec(samples,schema,cols,category_limit,marginal_types,num_columns,legend){
if(((cljs.core.seq(marginal_types)) && (cljs.core.seq(cols)))){
var vega_type = inferenceql.viz.stream.panels.viz.util.vega_type_fn(schema);
var cols__$1 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(vega_type,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cols))));
var cols_by_type = cljs.core.group_by(vega_type,cols__$1);
var id_generator = (function (){var c = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);

return cljs.core.deref(c);
});
})();
var histograms_quant = inferenceql.viz.stream.panels.viz.dashboard.histogram_quant_section(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols_by_type,"quantitative"),samples,inferenceql.viz.stream.panels.viz.samples.ranges,num_columns);
var histograms_nom = inferenceql.viz.stream.panels.viz.dashboard.histogram_nom_section(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cols_by_type,"nominal"),samples,num_columns);
var select_pairs = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$dashboard$spec_$_iter__27625(s__27626){
return (new cljs.core.LazySeq(null,(function (){
var s__27626__$1 = s__27626;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27626__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__27626__$1,x,xs__6308__auto__,temp__5753__auto__,vega_type,cols__$1,cols_by_type,id_generator,histograms_quant,histograms_nom){
return (function inferenceql$viz$stream$panels$viz$dashboard$spec_$_iter__27625_$_iter__27627(s__27628){
return (new cljs.core.LazySeq(null,((function (s__27626__$1,x,xs__6308__auto__,temp__5753__auto__,vega_type,cols__$1,cols_by_type,id_generator,histograms_quant,histograms_nom){
return (function (){
var s__27628__$1 = s__27628;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27628__$1);
if(temp__5753__auto____$1){
var s__27628__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27628__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27628__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27630 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27629 = (0);
while(true){
if((i__27629 < size__4621__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27629);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
cljs.core.chunk_append(b__27630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__27632 = (i__27629 + (1));
i__27629 = G__27632;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27630),inferenceql$viz$stream$panels$viz$dashboard$spec_$_iter__27625_$_iter__27627(cljs.core.chunk_rest(s__27628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27630),null);
}
} else {
var y = cljs.core.first(s__27628__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),inferenceql$viz$stream$panels$viz$dashboard$spec_$_iter__27625_$_iter__27627(cljs.core.rest(s__27628__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(s__27626__$1,x,xs__6308__auto__,temp__5753__auto__,vega_type,cols__$1,cols_by_type,id_generator,histograms_quant,histograms_nom))
,null,null));
});})(s__27626__$1,x,xs__6308__auto__,temp__5753__auto__,vega_type,cols__$1,cols_by_type,id_generator,histograms_quant,histograms_nom))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cols__$1));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,inferenceql$viz$stream$panels$viz$dashboard$spec_$_iter__27625(cljs.core.rest(s__27626__$1)));
} else {
var G__27633 = cljs.core.rest(s__27626__$1);
s__27626__$1 = G__27633;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cols__$1);
})();
var pair_types = cljs.core.group_by((function (p1__27624_SHARP_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(vega_type,p1__27624_SHARP_));
}),select_pairs);
var scatter_plots = inferenceql.viz.stream.panels.viz.dashboard.scatter_plot_section(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pair_types,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["quantitative",null], null), null)),inferenceql.viz.stream.panels.viz.samples.ranges,id_generator,num_columns,legend);
var bubble_plots = inferenceql.viz.stream.panels.viz.dashboard.bubble_plot_section(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pair_types,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["nominal",null], null), null)),vega_type,category_limit,samples,num_columns,legend);
var strip_plots = inferenceql.viz.stream.panels.viz.dashboard.strip_plot_section(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pair_types,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["quantitative",null,"nominal",null], null), null)),vega_type,category_limit,samples,inferenceql.viz.stream.panels.viz.samples.ranges,id_generator,num_columns,legend);
var sections_1D = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [histograms_quant,histograms_nom], null));
var sections_2D = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scatter_plots,strip_plots,bubble_plots], null));
var sections = (function (){var G__27631 = cljs.core.PersistentVector.EMPTY;
var G__27631__$1 = (cljs.core.truth_(cljs.core.cst$kw$1D.cljs$core$IFn$_invoke$arity$1(marginal_types))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__27631,sections_1D):G__27631);
if(cljs.core.truth_(cljs.core.cst$kw$2D.cljs$core$IFn$_invoke$arity$1(marginal_types))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__27631__$1,sections_2D);
} else {
return G__27631__$1;
}
})();
return inferenceql.viz.stream.panels.viz.dashboard.top_level_spec(sections);
} else {
return null;
}
});
