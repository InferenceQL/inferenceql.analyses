// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.panels.table.views_base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.core');
goog.require('reagent.core');
goog.require('medley.core');
inferenceql.viz.panels.table.views_base.node$module$handsontable$default = require('handsontable')['default'];
/**
 * Determines whether `sort-config` can be applied to the columns.
 * 
 *   This simply checks column numbers referenced `sort-config` are applicable to the number for
 *   `columns` present.
 * 
 *   Args:
 *  columns: A vector of column names.
 *  sort-config: (js-object) A sort config returned by Handsontable.
 *   Returns:
 *  A boolean if `sort-config` is applicable.
 */
inferenceql.viz.panels.table.views_base.sort_state_applicable = (function inferenceql$viz$panels$table$views_base$sort_state_applicable(columns,sort_config){
var col_nums_refed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$column,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(sort_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));
var num_cols = cljs.core.count(columns);
return cljs.core.every_QMARK_((function (p1__26559_SHARP_){
return (p1__26559_SHARP_ < num_cols);
}),col_nums_refed);
});
/**
 * A helper function for updating the settings in a handsontable.
 */
inferenceql.viz.panels.table.views_base.update_hot_BANG_ = (function inferenceql$viz$panels$table$views_base$update_hot_BANG_(hot_instance,new_settings,current_selection){
var table_changed = cljs.core.some(new_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$colHeaders], null));
var sorting_plugin = hot_instance.getPlugin("multiColumnSorting");
var sort_config = sorting_plugin.getSortConfig();
if(cljs.core.truth_(table_changed)){
hot_instance.deselectCell();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(new_settings),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data], null))){
hot_instance.loadData(cljs.core.clj__GT_js(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(new_settings)));
} else {
hot_instance.updateSettings(cljs.core.clj__GT_js(new_settings));
}

if(cljs.core.truth_(table_changed)){
if((((cljs.core.cst$kw$colHeaders.cljs$core$IFn$_invoke$arity$1(new_settings) == null)) || (inferenceql.viz.panels.table.views_base.sort_state_applicable(cljs.core.cst$kw$colHeaders.cljs$core$IFn$_invoke$arity$1(new_settings),sort_config)))){
sorting_plugin.sort(sort_config);
} else {
}

var temp__5753__auto__ = cljs.core.clj__GT_js(current_selection);
if(cljs.core.truth_(temp__5753__auto__)){
var coords = temp__5753__auto__;
return hot_instance.selectCells(coords,false);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Low-level reagent component that wraps Handsontable.
 *   Not meant to be used directly as it requires an atom-like store for the instance of
 *   Handontable used by each instance of the component.
 * 
 *   Args:
 *  hot-instance -- an atom-like object that when de-referenced gets the current instance of
 *    Handsontable for this component.
 *  hot-reset! -- a function that resets the value of `hot-instance` to the new value provided.
 *  attributes -- dom node attributes for the table container.
 *  props -- map with keys :settings and :hooks.
 *    :settings -- settings for Handsontable, see Handsontable docs.
 *    :hooks -- (optional) hooks for Handsontable, see Handsontable docs.
 *    :selections-coords -- (optional) current selection in table to reapply after update.
 */
inferenceql.viz.panels.table.views_base.handsontable_base = (function inferenceql$viz$panels$table$views_base$handsontable_base(hot_instance,hot_reset_BANG_,attributes,props){
var dom_nodes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display_DASH_name,"handsontable-base",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
var map__26561 = props;
var map__26561__$1 = cljs.core.__destructure_map(map__26561);
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26561__$1,cljs.core.cst$kw$settings);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26561__$1,cljs.core.cst$kw$hooks);
var hot = (new inferenceql.viz.panels.table.views_base.node$module$handsontable$default(cljs.core.cst$kw$table_DASH_div.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dom_nodes)),cljs.core.clj__GT_js(settings)));
var seq__26562_26584 = cljs.core.seq(hooks);
var chunk__26563_26585 = null;
var count__26564_26586 = (0);
var i__26565_26587 = (0);
while(true){
if((i__26565_26587 < count__26564_26586)){
var vec__26572_26588 = chunk__26563_26585.cljs$core$IIndexed$_nth$arity$2(null,i__26565_26587);
var key_26589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26572_26588,(0),null);
var callback_gen_26590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26572_26588,(1),null);
var camel_key_26591 = camel_snake_kebab.core.__GT_camelCase(cljs.core.clj__GT_js(key_26589));
inferenceql.viz.panels.table.views_base.node$module$handsontable$default.hooks.add(camel_key_26591,(callback_gen_26590.cljs$core$IFn$_invoke$arity$1 ? callback_gen_26590.cljs$core$IFn$_invoke$arity$1(hot) : callback_gen_26590.call(null,hot)),hot);


var G__26592 = seq__26562_26584;
var G__26593 = chunk__26563_26585;
var G__26594 = count__26564_26586;
var G__26595 = (i__26565_26587 + (1));
seq__26562_26584 = G__26592;
chunk__26563_26585 = G__26593;
count__26564_26586 = G__26594;
i__26565_26587 = G__26595;
continue;
} else {
var temp__5753__auto___26596 = cljs.core.seq(seq__26562_26584);
if(temp__5753__auto___26596){
var seq__26562_26597__$1 = temp__5753__auto___26596;
if(cljs.core.chunked_seq_QMARK_(seq__26562_26597__$1)){
var c__4649__auto___26598 = cljs.core.chunk_first(seq__26562_26597__$1);
var G__26599 = cljs.core.chunk_rest(seq__26562_26597__$1);
var G__26600 = c__4649__auto___26598;
var G__26601 = cljs.core.count(c__4649__auto___26598);
var G__26602 = (0);
seq__26562_26584 = G__26599;
chunk__26563_26585 = G__26600;
count__26564_26586 = G__26601;
i__26565_26587 = G__26602;
continue;
} else {
var vec__26575_26603 = cljs.core.first(seq__26562_26597__$1);
var key_26604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26575_26603,(0),null);
var callback_gen_26605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26575_26603,(1),null);
var camel_key_26606 = camel_snake_kebab.core.__GT_camelCase(cljs.core.clj__GT_js(key_26604));
inferenceql.viz.panels.table.views_base.node$module$handsontable$default.hooks.add(camel_key_26606,(callback_gen_26605.cljs$core$IFn$_invoke$arity$1 ? callback_gen_26605.cljs$core$IFn$_invoke$arity$1(hot) : callback_gen_26605.call(null,hot)),hot);


var G__26607 = cljs.core.next(seq__26562_26597__$1);
var G__26608 = null;
var G__26609 = (0);
var G__26610 = (0);
seq__26562_26584 = G__26607;
chunk__26563_26585 = G__26608;
count__26564_26586 = G__26609;
i__26565_26587 = G__26610;
continue;
}
} else {
}
}
break;
}

return (hot_reset_BANG_.cljs$core$IFn$_invoke$arity$1 ? hot_reset_BANG_.cljs$core$IFn$_invoke$arity$1(hot) : hot_reset_BANG_.call(null,hot));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,argv_old){
var vec__26578 = argv_old;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(3),null);
var props_old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(4),null);
var vec__26581 = reagent.core.argv(this$);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26581,(0),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26581,(1),null);
var ___$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26581,(2),null);
var ___$7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26581,(3),null);
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26581,(4),null);
var old_settings = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(props_old);
var settings = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(props__$1);
var changed_settings = medley.core.filter_kv((function (setting_key,new_val){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_settings,setting_key),new_val);
}),settings);
if(cljs.core.seq(changed_settings)){
return inferenceql.viz.panels.table.views_base.update_hot_BANG_(cljs.core.deref(hot_instance),changed_settings,cljs.core.cst$kw$selections_DASH_coords.cljs$core$IFn$_invoke$arity$1(props__$1));
} else {
return null;
}
}),cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function (this$){
if(cljs.core.truth_(cljs.core.deref(hot_instance))){
cljs.core.deref(hot_instance).destroy();

return (hot_reset_BANG_.cljs$core$IFn$_invoke$arity$1 ? hot_reset_BANG_.cljs$core$IFn$_invoke$arity$1(null) : hot_reset_BANG_.call(null,null));
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (_,___$1,attributes__$1,___$2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_table_DASH_container,attributes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (p1__26560_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dom_nodes,cljs.core.assoc,cljs.core.cst$kw$table_DASH_div,p1__26560_SHARP_);
})], null)], null)], null);
})], null));
});
