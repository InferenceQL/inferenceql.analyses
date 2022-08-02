// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.panels.table.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Merges `updates` into `rows`.
 *   Both `updates` and `rows` are a maps where keys are row-ids and vals are rows
 *   (or row updates) in the case of `updates`.
 */
inferenceql.viz.panels.table.util.merge_row_updates = (function inferenceql$viz$panels$table$util$merge_row_updates(rows,updates){
var merge_op = cljs.core.fnil.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
return (merge_op.cljs$core$IFn$_invoke$arity$2 ? merge_op.cljs$core$IFn$_invoke$arity$2(rows,updates) : merge_op.call(null,rows,updates));
});
inferenceql.viz.panels.table.util.column_settings = (function inferenceql$viz$panels$table$util$column_settings(headers){

var settings_map = (function (attr){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,attr], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(settings_map,headers);
});
