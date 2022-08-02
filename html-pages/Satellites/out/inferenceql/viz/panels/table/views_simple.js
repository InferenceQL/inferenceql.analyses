// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.panels.table.views_simple');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('medley.core');
goog.require('cljs_bean.core');
goog.require('inferenceql.viz.panels.table.util');
goog.require('inferenceql.viz.panels.table.handsontable');
goog.require('inferenceql.viz.panels.table.views_base');
inferenceql.viz.panels.table.views_simple.node$module$handsontable$default = require('handsontable')['default'];
/**
 * A Reagent component for Handsontable that uses an atom as a datastore for the Handsontable
 *   instance.
 */
inferenceql.viz.panels.table.views_simple.handsontable_reagent = (function inferenceql$viz$panels$table$views_simple$handsontable_reagent(attributes,props){
var hot_instance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var hot_reset = (function (p1__27050_SHARP_){
return cljs.core.reset_BANG_(hot_instance,p1__27050_SHARP_);
});
return (function (attributes__$1,props__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.table.views_base.handsontable_base,hot_instance,hot_reset,attributes__$1,props__$1], null);
});
});
/**
 * A Reagent component for Handsontable that includes fixes for glitches with scrolling
 *   and refreshing when used in Observable notebooks. This uses an atom as a datastore for the
 *   Handsontable instance.
 */
inferenceql.viz.panels.table.views_simple.handsontable_reagent_observable = (function inferenceql$viz$panels$table$views_simple$handsontable_reagent_observable(attributes,props){
var hot_instance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var hot_reset = (function (p1__27051_SHARP_){
return cljs.core.reset_BANG_(hot_instance,p1__27051_SHARP_);
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return window.setTimeout((function (){
return cljs.core.deref(hot_instance).refreshDimensions();
}),(30));
}),cljs.core.cst$kw$reagent_DASH_render,(function (attributes__$1,props__$1){
var props_27052__$2 = cljs.core.assoc_in(props__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$afterRender], null),(function (hot){
return (function (){
return hot.view.wt.wtOverlays.updateMainScrollableElements();
});
}));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.table.views_base.handsontable_base,hot_instance,hot_reset,attributes__$1,props__$1], null);
})], null));
});
inferenceql.viz.panels.table.views_simple.simple_hot_settings = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(inferenceql.viz.panels.table.handsontable.default_hot_settings,cljs.core.cst$kw$settings,cljs.core.dissoc,cljs.core.cst$kw$colHeaders,cljs.core.cst$kw$columns,cljs.core.cst$kw$dropdownMenu,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$filters], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$height], null),"auto"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$width], null),"auto");
/**
 * A reagent component that displays `data` in handsontable.
 *   It properly transforms `data` and `options` and delivers them as `props` to the base
 *   handsontable component.
 * 
 *   `attributes` - DOM node attributes to apply
 *   `data` - Data to display in the table.
 *   `options` - A map which contains various options about how the table is displayed. All keys
 *  are optional. Some keys simply map to the same setting in Handsontable library. See the official
 *  Handsontable documentation for more details on those options.
 *    cols - Which columns from `data` to display.
 *      Default will show all columns (keys) from the first row of data.
 *    height - Handsontable height setting. If not supplied, table while take on a minimum required
 *      height to show all rows up to 15, after which it will take up a fixed height of 500px.
 *    width - Handsontable width setting.
 *    v-scroll - Set to false so the full table is drawn with no scrollbars.
 *    cells - Handsontable cells setting. Can be used a variety of ways including cell highlighting.
 *    col-widths - Handsontable colWidths setting.
 *    on-click - Handsontable click handler.
 *    current-row-class - CSS class to apply to currently selected row in Handsontable.
 *   `observable-fixes` - (boolean) Enable certain settings and fixes for Observable notebooks.
 */
inferenceql.viz.panels.table.views_simple.handsontable = (function inferenceql$viz$panels$table$views_simple$handsontable(attributues,data,options,observable_fixes){
if(cljs.core.truth_(data)){
var map__27053 = options;
var map__27053__$1 = cljs.core.__destructure_map(map__27053);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$cols);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$width);
var v_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$v_DASH_scroll);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$cells);
var col_widths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$col_DASH_widths);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$on_DASH_click);
var current_row_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27053__$1,cljs.core.cst$kw$current_DASH_row_DASH_class);
var cols__$1 = (function (){var or__4223__auto__ = cols;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.first(data)));
}
})();
var col_headers = (function (){var iter__4622__auto__ = (function inferenceql$viz$panels$table$views_simple$handsontable_$_iter__27054(s__27055){
return (new cljs.core.LazySeq(null,(function (){
var s__27055__$1 = s__27055;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27055__$1);
if(temp__5753__auto__){
var s__27055__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27055__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27055__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27057 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27056 = (0);
while(true){
if((i__27056 < size__4621__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27056);
cljs.core.chunk_append(b__27057,clojure.string.replace(col,/_/,"_<wbr>"));

var G__27059 = (i__27056 + (1));
i__27056 = G__27059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27057),inferenceql$viz$panels$table$views_simple$handsontable_$_iter__27054(cljs.core.chunk_rest(s__27055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27057),null);
}
} else {
var col = cljs.core.first(s__27055__$2);
return cljs.core.cons(clojure.string.replace(col,/_/,"_<wbr>"),inferenceql$viz$panels$table$views_simple$handsontable_$_iter__27054(cljs.core.rest(s__27055__$2)));
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
var height__$1 = ((v_scroll === false)?"auto":(((!((height == null))))?height:(((cljs.core.count(data) <= (15)))?"auto":(500))
));
var width__$1 = (function (){var or__4223__auto__ = width;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "100%";
}
})();
var props = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(inferenceql.viz.panels.table.views_simple.simple_hot_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$data], null),data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$colHeaders], null),col_headers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$columns], null),inferenceql.viz.panels.table.util.column_settings(cols__$1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$height], null),height__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$width], null),width__$1);
var props__$1 = (function (){var G__27058 = props;
var G__27058__$1 = (cljs.core.truth_(cells)?cljs.core.assoc_in(G__27058,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$cells], null),cells):G__27058);
var G__27058__$2 = (cljs.core.truth_(col_widths)?cljs.core.assoc_in(G__27058__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$colWidths], null),col_widths):G__27058__$1);
var G__27058__$3 = (cljs.core.truth_(on_click)?cljs.core.assoc_in(G__27058__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$afterSelection], null),on_click):G__27058__$2);
if(cljs.core.truth_(current_row_class)){
return cljs.core.assoc_in(G__27058__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$settings,cljs.core.cst$kw$currentRowClassName], null),current_row_class);
} else {
return G__27058__$3;
}
})();
if(cljs.core.truth_(observable_fixes)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.table.views_simple.handsontable_reagent_observable,attributues,props__$1], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.panels.table.views_simple.handsontable_reagent,attributues,props__$1], null);
}
} else {
return null;
}
});
