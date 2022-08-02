// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('inferenceql.viz.panels.control.db');
goog.require('inferenceql.viz.panels.override.db');
goog.require('inferenceql.viz.panels.table.db');
goog.require('inferenceql.viz.panels.viz.db');
goog.require('inferenceql.viz.panels.more.db');
goog.require('inferenceql.viz.panels.modal.db');
goog.require('inferenceql.viz.components.query.db');
goog.require('inferenceql.viz.components.store.db');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$db_SLASH_db,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$control$db_SLASH_control_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$override$db_SLASH_override_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_table_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$viz$db_SLASH_viz_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$more$db_SLASH_more_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$modal$db_SLASH_modal_DASH_panel,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query_DASH_component,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_store_DASH_component], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$control$db_SLASH_control_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$override$db_SLASH_override_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_table_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$viz$db_SLASH_viz_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$more$db_SLASH_more_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$modal$db_SLASH_modal_DASH_panel,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query_DASH_component,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_store_DASH_component], null),null,null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27158){
return cljs.core.map_QMARK_(G__27158);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$control_DASH_panel);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$override_DASH_panel);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$table_DASH_panel);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$viz_DASH_panel);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$more_DASH_panel);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$modal_DASH_panel);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$query_DASH_component);
}),(function (G__27158){
return cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$store_DASH_component);
})], null),(function (G__27158){
return ((cljs.core.map_QMARK_(G__27158)) && (((cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$control_DASH_panel)) && (((cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$override_DASH_panel)) && (((cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$table_DASH_panel)) && (((cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$viz_DASH_panel)) && (((cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$more_DASH_panel)) && (((cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$modal_DASH_panel)) && (((cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$query_DASH_component)) && (cljs.core.contains_QMARK_(G__27158,cljs.core.cst$kw$store_DASH_component)))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$control$db_SLASH_control_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$override$db_SLASH_override_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_table_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$viz$db_SLASH_viz_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$more$db_SLASH_more_DASH_panel,cljs.core.cst$kw$inferenceql$viz$panels$modal$db_SLASH_modal_DASH_panel,cljs.core.cst$kw$inferenceql$viz$components$query$db_SLASH_query_DASH_component,cljs.core.cst$kw$inferenceql$viz$components$store$db_SLASH_store_DASH_component], null),null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_DASH_panel,cljs.core.cst$kw$override_DASH_panel,cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$viz_DASH_panel,cljs.core.cst$kw$more_DASH_panel,cljs.core.cst$kw$modal_DASH_panel,cljs.core.cst$kw$query_DASH_component,cljs.core.cst$kw$store_DASH_component], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$control_DASH_panel)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$override_DASH_panel)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$table_DASH_panel)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$viz_DASH_panel)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$more_DASH_panel)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$modal_DASH_panel)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$query_DASH_component)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$store_DASH_component))], null),null])));
/**
 * This db map is meant to contain keys and values not specific to
 *   any application panel.
 */
inferenceql.viz.db.default_general_db = cljs.core.PersistentArrayMap.EMPTY;
/**
 * When the application starts, this will be the value put in `app-db`.
 *   It consists of keys and values from the general db
 *   and panel specific dbs all merged together.
 */
inferenceql.viz.db.default_db = (function inferenceql$viz$db$default_db(){
var dbs = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.db.default_general_db,inferenceql.viz.panels.control.db.default_db,inferenceql.viz.panels.override.db.default_db,inferenceql.viz.panels.table.db.default_db,inferenceql.viz.panels.viz.db.default_db,inferenceql.viz.panels.more.db.default_db,inferenceql.viz.panels.modal.db.default_db,inferenceql.viz.components.query.db.default_db,inferenceql.viz.components.store.db.default_db], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,dbs);
});
