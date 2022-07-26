// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('medley.core');
goog.require('lambdaisland.uri');
goog.require('clojure.string');
inferenceql.viz.util.filter_nil_kvs = (function inferenceql$viz$util$filter_nil_kvs(a_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.val),a_map));
});
/**
 * Helper function for calling the math absolute value function
 */
inferenceql.viz.util.abs = (function inferenceql$viz$util$abs(n){
return Math.abs(n);
});
inferenceql.viz.util.assoc_or_dissoc_in = (function inferenceql$viz$util$assoc_or_dissoc_in(m,ks,v){

if((!((v == null)))){
return cljs.core.assoc_in(m,ks,v);
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
}
});
/**
 * Returns a map of the app's query parameters as specified in the app's URL.
 */
inferenceql.viz.util.query_string_params = (function inferenceql$viz$util$query_string_params(){
var app_url = window.location;
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2(app_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multikeys,cljs.core.cst$kw$never], null));
});
inferenceql.viz.util.coerce_bool = (function inferenceql$viz$util$coerce_bool(val){
var G__27084 = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
switch (G__27084) {
case "true":
return true;

break;
case "t":
return true;

break;
case "false":
return false;

break;
case "f":
return false;

break;
default:
return null;

}
});
inferenceql.viz.util.keywordize_kv = (function inferenceql$viz$util$keywordize_kv(a_map){

return medley.core.map_kv((function (col,type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(col),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)], null);
}),a_map);
});
