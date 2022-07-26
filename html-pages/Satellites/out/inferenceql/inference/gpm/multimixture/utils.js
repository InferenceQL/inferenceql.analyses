// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.multimixture.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.math.combinatorics');
goog.require('cljs.spec.alpha');
goog.require('metaprob.generative_functions');
goog.require('metaprob.distributions');
goog.require('metaprob.prelude');
goog.require('inferenceql.inference.gpm.multimixture.specification');
/**
 * Returns a generative function that samples a row from the provided view
 *   specification.
 */
inferenceql.inference.gpm.multimixture.utils.row_generator = (function inferenceql$inference$gpm$multimixture$utils$row_generator(p__3971){
var map__3972 = p__3971;
var map__3972__$1 = cljs.core.__destructure_map(map__3972);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3972__$1,cljs.core.cst$kw$vars);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3972__$1,cljs.core.cst$kw$views);
return metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function (){
var partial_row = (function inferenceql$inference$gpm$multimixture$utils$row_generator_$_partial_row(i,clusters){
var cluster_idx = (function (){var G__3973 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$cluster_DASH_assignments_DASH_for_DASH_view,null,(1),null)),(new cljs.core.List(null,i,null,(1),null)))));
var G__3974 = metaprob.distributions.categorical;
var G__3975 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$probability,clusters);
return (at.cljs$core$IFn$_invoke$arity$3 ? at.cljs$core$IFn$_invoke$arity$3(G__3973,G__3974,G__3975) : at.call(null,G__3973,G__3974,G__3975));
})();
var cluster = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clusters,cluster_idx);
return cljs.core.reduce_kv((function (m,variable,params){
var primitive = (function (){var G__3976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,variable);
var G__3976__$1 = (((G__3976 instanceof cljs.core.Keyword))?G__3976.fqn:null);
switch (G__3976__$1) {
case "binary":
return metaprob.distributions.flip;

break;
case "gaussian":
return metaprob.distributions.gaussian;

break;
case "categorical":
return metaprob.distributions.categorical;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3976__$1)].join('')));

}
})();
var params__$1 = (function (){var G__3977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,variable);
var G__3977__$1 = (((G__3977 instanceof cljs.core.Keyword))?G__3977.fqn:null);
switch (G__3977__$1) {
case "binary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);

break;
case "gaussian":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mu.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$sigma.cljs$core$IFn$_invoke$arity$1(params)], null);

break;
case "categorical":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3977__$1)].join('')));

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,variable,(function (){var G__3978 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$columns,null,(1),null)),(new cljs.core.List(null,variable,null,(1),null)))));
var G__3979 = primitive;
var G__3980 = params__$1;
return (apply_at.cljs$core$IFn$_invoke$arity$3 ? apply_at.cljs$core$IFn$_invoke$arity$3(G__3978,G__3979,G__3980) : apply_at.call(null,G__3978,G__3979,G__3980));
})());
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(cluster));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(partial_row,views));
});
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$partial_DASH_row,cljs.core.list(cljs.core.cst$sym$fn,cljs.core.cst$sym$partial_DASH_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$clusters], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cluster_DASH_idx,cljs.core.list(cljs.core.cst$sym$at,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_sequence,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_seq,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_concat,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_list,cljs.core.cst$kw$cluster_DASH_assignments_DASH_for_DASH_view),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_list,cljs.core.cst$sym$i)))),cljs.core.cst$sym$dist_SLASH_categorical,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.cst$kw$probability,cljs.core.cst$sym$clusters)),cljs.core.cst$sym$cluster,cljs.core.list(cljs.core.cst$sym$nth,cljs.core.cst$sym$clusters,cljs.core.cst$sym$cluster_DASH_idx)], null),cljs.core.list(cljs.core.cst$sym$reduce_DASH_kv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$variable,cljs.core.cst$sym$params], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$primitive,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$vars,cljs.core.cst$sym$variable),cljs.core.cst$kw$binary,cljs.core.cst$sym$dist_SLASH_flip,cljs.core.cst$kw$gaussian,cljs.core.cst$sym$dist_SLASH_gaussian,cljs.core.cst$kw$categorical,cljs.core.cst$sym$dist_SLASH_categorical),cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$vars,cljs.core.cst$sym$variable),cljs.core.cst$kw$binary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null),cljs.core.cst$kw$gaussian,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$kw$mu,cljs.core.cst$sym$params),cljs.core.list(cljs.core.cst$kw$sigma,cljs.core.cst$sym$params)], null),cljs.core.cst$kw$categorical,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null))], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$m,cljs.core.cst$sym$variable,cljs.core.list(cljs.core.cst$sym$apply_DASH_at,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_sequence,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_seq,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_concat,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_list,cljs.core.cst$kw$columns),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_list,cljs.core.cst$sym$variable)))),cljs.core.cst$sym$primitive,cljs.core.cst$sym$params)))),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$kw$parameters,cljs.core.cst$sym$cluster))))], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT__GT_,cljs.core.cst$sym$views,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.cst$sym$partial_DASH_row),cljs.core.list(cljs.core.cst$sym$reduce,cljs.core.cst$sym$merge))))], null));
});
/**
 * Returns a generative function that samples a partial row from the provided cluster
 *   in a given view, with respect to a given specification.
 */
inferenceql.inference.gpm.multimixture.utils.cluster_row_generator = (function inferenceql$inference$gpm$multimixture$utils$cluster_row_generator(cluster,vars){
return metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function (){
return cljs.core.reduce_kv((function (m,variable,params){
var primitive = (function (){var G__3983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,variable);
var G__3983__$1 = (((G__3983 instanceof cljs.core.Keyword))?G__3983.fqn:null);
switch (G__3983__$1) {
case "binary":
return metaprob.distributions.flip;

break;
case "gaussian":
return metaprob.distributions.gaussian;

break;
case "categorical":
return metaprob.distributions.categorical;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3983__$1)].join('')));

}
})();
var params__$1 = (function (){var G__3984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,variable);
var G__3984__$1 = (((G__3984 instanceof cljs.core.Keyword))?G__3984.fqn:null);
switch (G__3984__$1) {
case "binary":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);

break;
case "gaussian":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mu.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$sigma.cljs$core$IFn$_invoke$arity$1(params)], null);

break;
case "categorical":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3984__$1)].join('')));

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,variable,(function (){var G__3985 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$columns,null,(1),null)),(new cljs.core.List(null,variable,null,(1),null)))));
var G__3986 = primitive;
var G__3987 = params__$1;
return (apply_at.cljs$core$IFn$_invoke$arity$3 ? apply_at.cljs$core$IFn$_invoke$arity$3(G__3985,G__3986,G__3987) : apply_at.call(null,G__3985,G__3986,G__3987));
})());
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(cluster));
});
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$reduce_DASH_kv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$variable,cljs.core.cst$sym$params], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$primitive,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$vars,cljs.core.cst$sym$variable),cljs.core.cst$kw$binary,cljs.core.cst$sym$dist_SLASH_flip,cljs.core.cst$kw$gaussian,cljs.core.cst$sym$dist_SLASH_gaussian,cljs.core.cst$kw$categorical,cljs.core.cst$sym$dist_SLASH_categorical),cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$vars,cljs.core.cst$sym$variable),cljs.core.cst$kw$binary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null),cljs.core.cst$kw$gaussian,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$kw$mu,cljs.core.cst$sym$params),cljs.core.list(cljs.core.cst$kw$sigma,cljs.core.cst$sym$params)], null),cljs.core.cst$kw$categorical,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null))], null),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$m,cljs.core.cst$sym$variable,cljs.core.list(cljs.core.cst$sym$apply_DASH_at,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_sequence,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_seq,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_concat,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_list,cljs.core.cst$kw$columns),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_list,cljs.core.cst$sym$variable)))),cljs.core.cst$sym$primitive,cljs.core.cst$sym$params)))),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$kw$parameters,cljs.core.cst$sym$cluster)))], null));
});
/**
 * Sets the cluster assignment in trace for view index view-i to cluster index
 *   cluster-i.
 */
inferenceql.inference.gpm.multimixture.utils.with_cluster_assignment = (function inferenceql$inference$gpm$multimixture$utils$with_cluster_assignment(trace,view_i,cluster_i){
return cljs.core.assoc_in(trace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cluster_DASH_assignments_DASH_for_DASH_view,view_i,cljs.core.cst$kw$value], null),cluster_i);
});
/**
 * Sets the cell value in trace for variable var to value v.
 */
inferenceql.inference.gpm.multimixture.utils.with_cell_value = (function inferenceql$inference$gpm$multimixture$utils$with_cell_value(trace,var$,v){
return cljs.core.assoc_in(trace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$columns,var$,cljs.core.cst$kw$value], null),v);
});
/**
 * Sets the values in the trace for cells in row to their values.
 */
inferenceql.inference.gpm.multimixture.utils.with_row_values = (function inferenceql$inference$gpm$multimixture$utils$with_row_values(trace,row){
return cljs.core.reduce_kv((function (trace__$1,var$,v){
return inferenceql.inference.gpm.multimixture.utils.with_cell_value(trace__$1,var$,v);
}),trace,row);
});
inferenceql.inference.gpm.multimixture.utils.uniform_categorical_params = (function inferenceql$inference$gpm$multimixture$utils$uniform_categorical_params(n){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,((1) / n));
});
/**
 * Given a trace for generate-1col, produces a trace with the values in rows
 *   constrained.
 */
inferenceql.inference.gpm.multimixture.utils.with_rows = (function inferenceql$inference$gpm$multimixture$utils$with_rows(trace,rows){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace,cljs.core.cst$kw$rows,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__3990){
var vec__3991 = p__3990;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3991,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3991,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,i,inferenceql.inference.gpm.multimixture.utils.with_row_values(cljs.core.PersistentArrayMap.EMPTY,row));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,rows)));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$utils_SLASH_all_DASH_latents,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns a lazy sequence of all the possible traces of latents.
 */
inferenceql.inference.gpm.multimixture.utils.all_latents = (function inferenceql$inference$gpm$multimixture$utils$all_latents(spec){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (assignments){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cluster_DASH_assignments_DASH_for_DASH_view,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (view_i,cluster_i){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([view_i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cluster_i], null)]);
}),assignments))], null);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.range,cljs.core.count),cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(spec))));
});
inferenceql.inference.gpm.multimixture.utils.optimized_row_generator = (function inferenceql$inference$gpm$multimixture$utils$optimized_row_generator(spec){
var row_generator = inferenceql.inference.gpm.multimixture.utils.row_generator(spec);
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$2(row_generator,metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function (partial_trace){
var all_latents = inferenceql.inference.gpm.multimixture.utils.all_latents(spec);
var all_traces = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__3994_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([partial_trace,p1__3994_SHARP_], 0));
}),all_latents);
var all_logscores = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__3995_SHARP_){
return cljs.core.last((function (){var G__3997 = cljs.core.cst$kw$procedure;
var G__3998 = row_generator;
var G__3999 = cljs.core.cst$kw$observation_DASH_trace;
var G__4000 = p1__3995_SHARP_;
return (metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4 ? metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4(G__3997,G__3998,G__3999,G__4000) : metaprob.prelude.infer_and_score.call(null,G__3997,G__3998,G__3999,G__4000));
})());
}),all_traces);
var all_scores = cljs.core.map.cljs$core$IFn$_invoke$arity$2(metaprob.prelude.exp,all_logscores);
var all_zeroes = cljs.core.every_QMARK_((function (p1__3996_SHARP_){
return ((0) === p1__3996_SHARP_);
}),all_scores);
var log_normalizer = ((all_zeroes)?-Infinity:metaprob.distributions.logsumexp(all_logscores));
var score = log_normalizer;
var categorical_params = ((all_zeroes)?inferenceql.inference.gpm.multimixture.utils.uniform_categorical_params(cljs.core.count(all_scores)):metaprob.distributions.normalize_numbers(all_scores));
return metaprob.generative_functions.generative_function_from_traced_code((function (at__$1,apply_at__$1){
return (function (){
var i = (metaprob.distributions.categorical.cljs$core$IFn$_invoke$arity$1 ? metaprob.distributions.categorical.cljs$core$IFn$_invoke$arity$1(categorical_params) : metaprob.distributions.categorical.call(null,categorical_params));
var trace = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_traces,i);
var v = cljs.core.first((function (){var G__4001 = cljs.core.cst$kw$procedure;
var G__4002 = row_generator;
var G__4003 = cljs.core.cst$kw$observation_DASH_trace;
var G__4004 = trace;
return (metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4 ? metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4(G__4001,G__4002,G__4003,G__4004) : metaprob.prelude.infer_and_score.call(null,G__4001,G__4002,G__4003,G__4004));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,trace,score], null);
});
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.list(cljs.core.cst$sym$dist_SLASH_categorical,cljs.core.cst$sym$categorical_DASH_params),cljs.core.cst$sym$trace,cljs.core.list(cljs.core.cst$sym$nth,cljs.core.cst$sym$all_DASH_traces,cljs.core.cst$sym$i),cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$first,cljs.core.list(cljs.core.cst$sym$mp_SLASH_infer_DASH_and_DASH_score,cljs.core.cst$kw$procedure,cljs.core.cst$sym$row_DASH_generator,cljs.core.cst$kw$observation_DASH_trace,cljs.core.cst$sym$trace))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v,cljs.core.cst$sym$trace,cljs.core.cst$sym$score], null)))], null));
});
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$partial_DASH_trace], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$all_DASH_latents,cljs.core.list(cljs.core.cst$sym$all_DASH_latents,cljs.core.cst$sym$spec),cljs.core.cst$sym$all_DASH_traces,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__3994_SHARP_], null),cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$partial_DASH_trace,cljs.core.cst$sym$p1__3994_SHARP_)),cljs.core.cst$sym$all_DASH_latents),cljs.core.cst$sym$all_DASH_logscores,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__3995_SHARP_], null),cljs.core.list(cljs.core.cst$sym$last,cljs.core.list(cljs.core.cst$sym$mp_SLASH_infer_DASH_and_DASH_score,cljs.core.cst$kw$procedure,cljs.core.cst$sym$row_DASH_generator,cljs.core.cst$kw$observation_DASH_trace,cljs.core.cst$sym$p1__3995_SHARP_))),cljs.core.cst$sym$all_DASH_traces),cljs.core.cst$sym$all_DASH_scores,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$sym$mp_SLASH_exp,cljs.core.cst$sym$all_DASH_logscores),cljs.core.cst$sym$all_DASH_zeroes,cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__3996_SHARP_], null),cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.cst$sym$p1__3996_SHARP_)),cljs.core.cst$sym$all_DASH_scores),cljs.core.cst$sym$log_DASH_normalizer,cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$all_DASH_zeroes,-Infinity,cljs.core.list(cljs.core.cst$sym$dist_SLASH_logsumexp,cljs.core.cst$sym$all_DASH_logscores)),cljs.core.cst$sym$score,cljs.core.cst$sym$log_DASH_normalizer,cljs.core.cst$sym$categorical_DASH_params,cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$all_DASH_zeroes,cljs.core.list(cljs.core.cst$sym$uniform_DASH_categorical_DASH_params,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$all_DASH_scores)),cljs.core.list(cljs.core.cst$sym$dist_SLASH_normalize_DASH_numbers,cljs.core.cst$sym$all_DASH_scores))], null),cljs.core.list(cljs.core.cst$sym$gen,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.list(cljs.core.cst$sym$dist_SLASH_categorical,cljs.core.cst$sym$categorical_DASH_params),cljs.core.cst$sym$trace,cljs.core.list(cljs.core.cst$sym$nth,cljs.core.cst$sym$all_DASH_traces,cljs.core.cst$sym$i),cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$first,cljs.core.list(cljs.core.cst$sym$mp_SLASH_infer_DASH_and_DASH_score,cljs.core.cst$kw$procedure,cljs.core.cst$sym$row_DASH_generator,cljs.core.cst$kw$observation_DASH_trace,cljs.core.cst$sym$trace))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v,cljs.core.cst$sym$trace,cljs.core.cst$sym$score], null)))))], null)));
});
