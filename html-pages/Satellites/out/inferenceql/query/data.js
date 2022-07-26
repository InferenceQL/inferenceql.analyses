// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.query.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.edn');
goog.require('clojure.string');
/**
 * Returns a function that will attempt to coerce a value to a data type
 *   compatible with the given statistical type.
 */
inferenceql.query.data.value_coercer = (function inferenceql$query$data$value_coercer(stattype){
var coerce = (function (){var G__27062 = stattype;
var G__27062__$1 = (((G__27062 instanceof cljs.core.Keyword))?G__27062.fqn:null);
switch (G__27062__$1) {
case "ignore":
return cljs.core.str;

break;
case "nominal":
return cljs.core.str;

break;
case "numerical":
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.double$,clojure.edn.read_string);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27062__$1)].join('')));

}
})();
return (function (value){
if(clojure.string.blank_QMARK_(value)){
return null;
} else {
return (coerce.cljs$core$IFn$_invoke$arity$1 ? coerce.cljs$core$IFn$_invoke$arity$1(value) : coerce.call(null,value));
}
});
});
/**
 * Returns a function that will attempt to coerce the values in a map to values
 *   that match on the statistical types provided.
 */
inferenceql.query.data.row_coercer = (function inferenceql$query$data$row_coercer(variable__GT_stattype){
return (function (row){
return cljs.core.reduce_kv((function (row__$1,variable,stattype){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(row__$1,variable,inferenceql.query.data.value_coercer(stattype));
}),row,variable__GT_stattype);
});
});
