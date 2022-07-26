// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.model.xcat_util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('medley.core');
goog.require('clojure.edn');
goog.require('clojure.set');
goog.require('inferenceql.inference.gpm');
goog.require('inferenceql.inference.gpm.column');
inferenceql.viz.stream.model.xcat_util.range_1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
/**
 * Returns map from js-program view-id (int) to xcat view-id (keyword).
 */
inferenceql.viz.stream.model.xcat_util.xcat_view_id_map = (function inferenceql$viz$stream$model$xcat_util$xcat_view_id_map(xcat){
var view_names = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xcat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts], null)));
var view_number = (function (view_name){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_matches(/view_(\d+)/,cljs.core.name(view_name))));
});
return cljs.core.zipmap(inferenceql.viz.stream.model.xcat_util.range_1,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(view_number,view_names));
});
/**
 * Returns map from js-program cluster-id (int) to xcat cluster-id (keyword).
 *   Cluster id is specific to xact view view-id (keyword).
 */
inferenceql.viz.stream.model.xcat_util.xcat_cluster_id_map = (function inferenceql$viz$stream$model$xcat_util$xcat_cluster_id_map(xcat,view_name){
var view = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xcat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_name], null));
var cluster_names = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts], null)));
var cluster_number = (function (cluster_name){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_matches(/cluster_(\d+)/,cljs.core.name(cluster_name))));
});
return cljs.core.zipmap(inferenceql.viz.stream.model.xcat_util.range_1,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cluster_number,cluster_names));
});
inferenceql.viz.stream.model.xcat_util.columns_in_view = (function inferenceql$viz$stream$model$xcat_util$columns_in_view(xcat,view_id){
if(cljs.core.truth_(view_id)){
var view_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.model.xcat_util.xcat_view_id_map(xcat),view_id);
var view = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xcat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_id__$1], null));
return cljs.core.keys(cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view));
} else {
return null;
}
});
inferenceql.viz.stream.model.xcat_util.columns_in_model = (function inferenceql$viz$stream$model$xcat_util$columns_in_model(xcat){
var views = cljs.core.vals(cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat));
var columns_in_view = (function (view){
return cljs.core.keys(cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view));
});
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(columns_in_view,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([views], 0));
});
/**
 * Returns columns names with type :gaussian in `xcat`.
 */
inferenceql.viz.stream.model.xcat_util.numerical_columns = (function inferenceql$viz$stream$model$xcat_util$numerical_columns(xcat){
var col_gpms = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$columns,cljs.core.vals(cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat))));
var col_types = medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stattype,col_gpms);
return cljs.core.keys(medley.core.filter_vals(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gaussian,null], null), null),col_types));
});
inferenceql.viz.stream.model.xcat_util.rows_in_view_cluster = (function inferenceql$viz$stream$model$xcat_util$rows_in_view_cluster(xcat,view_id,cluster_id){
var view_map = inferenceql.viz.stream.model.xcat_util.xcat_view_id_map(xcat);
var view_id__$1 = (view_map.cljs$core$IFn$_invoke$arity$1 ? view_map.cljs$core$IFn$_invoke$arity$1(view_id) : view_map.call(null,view_id));
var cluster_map = inferenceql.viz.stream.model.xcat_util.xcat_cluster_id_map(xcat,view_id__$1);
var cluster_id__$1 = (cluster_map.cljs$core$IFn$_invoke$arity$1 ? cluster_map.cljs$core$IFn$_invoke$arity$1(cluster_id) : cluster_map.call(null,cluster_id));
var view = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xcat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_id__$1], null));
var cluster_assignments = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$y], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__4074_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id__$1,cljs.core.val(p1__4074_SHARP_));
}),cluster_assignments));
});
inferenceql.viz.stream.model.xcat_util.all_row_assignments = (function inferenceql$viz$stream$model$xcat_util$all_row_assignments(xcat){
var view_map = inferenceql.viz.stream.model.xcat_util.xcat_view_id_map(xcat);
var inv_view_map = cljs.core.zipmap(cljs.core.vals(view_map),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__4075_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["view_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4075_SHARP_)].join(''));
}),cljs.core.keys(view_map)));
var view_cluster_assignemnts = medley.core.map_kv((function (view_name,cluster_assignments){
var cluster_map = inferenceql.viz.stream.model.xcat_util.xcat_cluster_id_map(xcat,view_name);
var inv_cluster_map = cljs.core.zipmap(cljs.core.vals(cluster_map),cljs.core.keys(cluster_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(inv_view_map.cljs$core$IFn$_invoke$arity$1 ? inv_view_map.cljs$core$IFn$_invoke$arity$1(view_name) : inv_view_map.call(null,view_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inv_cluster_map,cluster_assignments)], null);
}),medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (p1__4078_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__4078_SHARP_);
}),medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (p1__4077_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__4077_SHARP_);
}),medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (p1__4076_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__4076_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$y], null));
}),cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat)))));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,(function() { 
var G__4079__delegate = function (a){
return cljs.core.zipmap(cljs.core.keys(view_cluster_assignemnts),a);
};
var G__4079 = function (var_args){
var a = null;
if (arguments.length > 0) {
var G__4080__i = 0, G__4080__a = new Array(arguments.length -  0);
while (G__4080__i < G__4080__a.length) {G__4080__a[G__4080__i] = arguments[G__4080__i + 0]; ++G__4080__i;}
  a = new cljs.core.IndexedSeq(G__4080__a,0,null);
} 
return G__4079__delegate.call(this,a);};
G__4079.cljs$lang$maxFixedArity = 0;
G__4079.cljs$lang$applyTo = (function (arglist__4081){
var a = cljs.core.seq(arglist__4081);
return G__4079__delegate(a);
});
G__4079.cljs$core$IFn$_invoke$arity$variadic = G__4079__delegate;
return G__4079;
})()
,cljs.core.vals(view_cluster_assignemnts));
});
/**
 * Samples all targets from an XCat gpm. `n` is the number of samples.
 */
inferenceql.viz.stream.model.xcat_util.sample_xcat = (function inferenceql$viz$stream$model$xcat_util$sample_xcat(var_args){
var G__4083 = arguments.length;
switch (G__4083) {
case 2:
return inferenceql.viz.stream.model.xcat_util.sample_xcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return inferenceql.viz.stream.model.xcat_util.sample_xcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.viz.stream.model.xcat_util.sample_xcat.cljs$core$IFn$_invoke$arity$2 = (function (xcat,n){
return inferenceql.viz.stream.model.xcat_util.sample_xcat.cljs$core$IFn$_invoke$arity$3(xcat,n,cljs.core.PersistentArrayMap.EMPTY);
}));

(inferenceql.viz.stream.model.xcat_util.sample_xcat.cljs$core$IFn$_invoke$arity$3 = (function (xcat,n,p__4084){
var map__4085 = p__4084;
var map__4085__$1 = cljs.core.__destructure_map(map__4085);
var allow_neg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4085__$1,cljs.core.cst$kw$allow_DASH_neg);
var targets = inferenceql.inference.gpm.variables(xcat);
var simulate = (function (){
return inferenceql.inference.gpm.simulate(xcat,targets,cljs.core.PersistentArrayMap.EMPTY);
});
var neg_check = (function (cols){
return (function (row){
return cljs.core.some(cljs.core.neg_QMARK_,cljs.core.vals(cljs.core.select_keys(row,cols)));
});
});
var neg_row_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow_neg,null))?neg_check(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow_neg,false))?neg_check(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow_neg,true))?cljs.core.constantly(false):((((cljs.core.seq_QMARK_(allow_neg)) && (cljs.core.empty_QMARK_(allow_neg))))?neg_check(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)):((cljs.core.seq(allow_neg))?(function (){var cols_to_check = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,allow_neg)));
return neg_check(cols_to_check);
})():null)))));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(neg_row_QMARK_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(simulate)));
}));

(inferenceql.viz.stream.model.xcat_util.sample_xcat.cljs$lang$maxFixedArity = 3);

/**
 * Samples all targets from a cluster in an XCat gpm. `n` is the number of samples.
 */
inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster = (function inferenceql$viz$stream$model$xcat_util$sample_xcat_cluster(var_args){
var G__4089 = arguments.length;
switch (G__4089) {
case 4:
return inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster.cljs$core$IFn$_invoke$arity$4 = (function (xcat,view_id,cluster_id,n){
return inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster.cljs$core$IFn$_invoke$arity$5(xcat,view_id,cluster_id,n,cljs.core.PersistentArrayMap.EMPTY);
}));

(inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster.cljs$core$IFn$_invoke$arity$5 = (function (xcat,view_id,cluster_id,n,p__4090){
var map__4091 = p__4090;
var map__4091__$1 = cljs.core.__destructure_map(map__4091);
var allow_neg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4091__$1,cljs.core.cst$kw$allow_DASH_neg);
var column_gpms = cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1((function (){var G__4092 = cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat);
return (view_id.cljs$core$IFn$_invoke$arity$1 ? view_id.cljs$core$IFn$_invoke$arity$1(G__4092) : view_id.call(null,G__4092));
})());
var simulate = (function (){
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (p1__4087_SHARP_){
return inferenceql.inference.gpm.column.crosscat_simulate(p1__4087_SHARP_,cluster_id);
}),column_gpms);
});
var neg_check = (function (cols){
return (function (row){
return cljs.core.some(cljs.core.neg_QMARK_,cljs.core.vals(cljs.core.select_keys(row,cols)));
});
});
var neg_row_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow_neg,null))?neg_check(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow_neg,false))?neg_check(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allow_neg,true))?cljs.core.constantly(false):((((cljs.core.seq_QMARK_(allow_neg)) && (cljs.core.empty_QMARK_(allow_neg))))?neg_check(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)):((cljs.core.seq(allow_neg))?(function (){var cols_to_check = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(inferenceql.viz.stream.model.xcat_util.numerical_columns(xcat)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,allow_neg)));
return neg_check(cols_to_check);
})():null)))));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(neg_row_QMARK_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(simulate)));
}));

(inferenceql.viz.stream.model.xcat_util.sample_xcat_cluster.cljs$lang$maxFixedArity = 5);

