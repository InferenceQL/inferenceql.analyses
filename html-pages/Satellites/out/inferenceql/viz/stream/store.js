// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.store');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('cljs_bean.core');
goog.require('inferenceql.viz.config');
goog.require('inferenceql.viz.events.interceptors');
goog.require('inferenceql.viz.csv');
goog.require('inferenceql.viz.util');
goog.require('inferenceql.viz.stream.transit');
goog.require('inferenceql.inference.gpm.crosscat');
inferenceql.viz.stream.store.schema = inferenceql.viz.util.keywordize_kv(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(inferenceql.viz.config.config));
inferenceql.viz.stream.store.rows = inferenceql.viz.csv.clean_csv_maps(inferenceql.viz.stream.store.schema,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inferenceql.viz.config.config));
/**
 * Collection of samples at each iteration. Needs to be decompressed, then read in as a
 *   large transit string. Produces a CLJS collection.
 */
inferenceql.viz.stream.store.samples = inferenceql.viz.stream.transit.read_transit_string(LZString.decompress(transitions_samples));
/**
 * Mutual info between columns at every iteration. Present in js namespace as a JS object.
 *   Needs use of ->clj to behave like a CLJS object.
 */
inferenceql.viz.stream.store.mutual_info = cljs_bean.core.__GT_clj(mutual_info);
/**
 * Collection of ensembles one for each iteration. Each ensemble consists of three
 *   transit-encoded strings. Present in js namespace as a JS object.
 *   Needs use of ->clj to behave like a CLJS object.
 */
inferenceql.viz.stream.store.xcat_models = cljs_bean.core.__GT_clj(transitions);
/**
 * Collection of js-program strings representing the ensemble at each iteration.
 *   Each ensemble consists of three strings. Present in js namespace as a JS object.
 *   Needs use of ->clj to behave like a CLJS object.
 */
inferenceql.viz.stream.store.js_programs = cljs_bean.core.__GT_clj(js_program_transitions);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_samples,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_samples_DASH_at_DASH_iteration,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_samples_DASH_at_DASH_iteration,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_samples_DASH_at_DASH_iteration,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27174){
return cljs.core.vector_QMARK_(G__27174);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_samples_DASH_at_DASH_iteration,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_samples_DASH_at_DASH_iteration,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_row,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_row,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_row,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27175){
return cljs.core.vector_QMARK_(G__27175);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_row,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_row,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27176){
return cljs.core.map_QMARK_(G__27176);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_mutual_DASH_info,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_mi_DASH_at_DASH_iteration,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_mi_DASH_at_DASH_iteration,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_mi_DASH_at_DASH_iteration,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27177){
return cljs.core.vector_QMARK_(G__27177);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_mi_DASH_at_DASH_iteration,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_mi_DASH_at_DASH_iteration,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$s_SLASH_map_DASH_of,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$number_QMARK_)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$number_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27179){
return cljs.core.map_QMARK_(G__27179);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_)], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27178){
return cljs.core.map_QMARK_(G__27178);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_xcat_DASH_models,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_ensemble_DASH_at_DASH_iteration,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_ensemble_DASH_at_DASH_iteration,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_ensemble_DASH_at_DASH_iteration,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27180){
return cljs.core.vector_QMARK_(G__27180);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_ensemble_DASH_at_DASH_iteration,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_ensemble_DASH_at_DASH_iteration,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_transit_DASH_string,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$min_DASH_count,(3)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_transit_DASH_string,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_transit_DASH_string,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27181){
return ((cljs.core.vector_QMARK_(G__27181)) && (((((function (){var or__4223__auto__ = (3);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((3)
,G__27181))) && ((cljs.core.bounded_count((3)
,G__27181) <= (function (){var or__4223__auto__ = null;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (9007199254740991);
}
})())))));
}),cljs.core.cst$kw$min_DASH_count,(3),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_transit_DASH_string,cljs.core.cst$kw$min_DASH_count,(3),cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_transit_DASH_string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_js_DASH_programs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_js_DASH_programs_DASH_at_DASH_iteration),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_js_DASH_programs_DASH_at_DASH_iteration,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_js_DASH_programs_DASH_at_DASH_iteration,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27182){
return cljs.core.coll_QMARK_(G__27182);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_js_DASH_programs_DASH_at_DASH_iteration)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$stream$store_SLASH_js_DASH_programs_DASH_at_DASH_iteration,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$min_DASH_count,(3)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$string_QMARK_,cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27183){
return ((cljs.core.coll_QMARK_(G__27183)) && (((((function (){var or__4223__auto__ = (3);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((3)
,G__27183))) && ((cljs.core.bounded_count((3)
,G__27183) <= (function (){var or__4223__auto__ = null;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (9007199254740991);
}
})())))));
}),cljs.core.cst$kw$min_DASH_count,(3),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$min_DASH_count,(3))], null),null));
/**
 * Reifies model at given iteration and model-id.
 */
inferenceql.viz.stream.store.xcat_model = (function inferenceql$viz$stream$store$xcat_model(iteration,model_id){
var t_string = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.store.xcat_models,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iteration,model_id], null));
var xcat_latents = inferenceql.viz.stream.transit.read_transit_string(t_string);
var map__27184 = xcat_latents;
var map__27184__$1 = cljs.core.__destructure_map(map__27184);
var latents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27184__$1,cljs.core.cst$kw$latents);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27184__$1,cljs.core.cst$kw$spec);
var num_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27184__$1,cljs.core.cst$kw$num_DASH_rows);
var data = cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_rows,inferenceql.viz.stream.store.rows));
var options = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$options], null))], null);
return inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$core$IFn$_invoke$arity$4(spec,latents,data,options);
});
