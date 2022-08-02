// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.panels.table.handsontable');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
inferenceql.viz.panels.table.handsontable.default_hot_settings = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$settings,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$autoWrapRow,cljs.core.cst$kw$multiColumnSorting,cljs.core.cst$kw$manualColumnResize,cljs.core.cst$kw$stretchH,cljs.core.cst$kw$filters,cljs.core.cst$kw$columns,cljs.core.cst$kw$licenseKey,cljs.core.cst$kw$width,cljs.core.cst$kw$outsideClickDeselects,cljs.core.cst$kw$readOnly,cljs.core.cst$kw$autoWrapCol,cljs.core.cst$kw$dropdownMenu,cljs.core.cst$kw$bindRowsWithHeaders,cljs.core.cst$kw$selectionMode,cljs.core.cst$kw$colHeaders,cljs.core.cst$kw$manualColumnMove,cljs.core.cst$kw$rowHeaders,cljs.core.cst$kw$height,cljs.core.cst$kw$data],[false,true,true,"none",true,cljs.core.PersistentVector.EMPTY,"non-commercial-and-evaluation","100vw",false,true,false,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter_by_condition","filter_operators","filter_by_condition2","filter_by_value","filter_action_bar"], null),true,cljs.core.cst$kw$multiple,cljs.core.PersistentVector.EMPTY,true,true,"50vh",cljs.core.PersistentVector.EMPTY]),cljs.core.cst$kw$hooks,cljs.core.PersistentVector.EMPTY], null);
/**
 * Returns the order of physical row indices currently displayed in the handsontable instance.
 * 
 *   Visual indices map to physical indicies (indices of the original dataset sent to handsontable).
 *   This mapping changes whenever rows are sorted, filtered, added, or removed.
 * 
 *   We use this data to along with selection coordinates to produce the data subset selected.
 *   This all eventually gets passed onto the visualization code via subscriptions.
 */
inferenceql.viz.panels.table.handsontable.physical_row_indices = (function inferenceql$viz$panels$table$handsontable$physical_row_indices(hot){
var num_rows_shown = hot.countRows();
var visual_row_indices = cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_rows_shown);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27045_SHARP_){
return hot.toPhysicalRow(p1__27045_SHARP_);
}),visual_row_indices);
});
inferenceql.viz.panels.table.handsontable.real_hot_hooks = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$hot_SLASH_after_DASH_selection_DASH_end,(function (hot){
return (function (_row_index,_col,_row2,_col2,_selection_layer_level){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_after_DASH_selection_DASH_end,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(hot.getSelected())], null));

return true;
});
}),cljs.core.cst$kw$hot_SLASH_after_DASH_deselect,(function (_){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_after_DASH_deselect], null));

return true;
});
}),cljs.core.cst$kw$hot_SLASH_after_DASH_on_DASH_cell_DASH_mouse_DASH_down,(function (_){
return (function (mouse_event,_coords,_TD){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_after_DASH_on_DASH_cell_DASH_mouse_DASH_down,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(mouse_event.altKey)], null));

return true;
});
}),cljs.core.cst$kw$hot_SLASH_after_DASH_column_DASH_move,(function (hot){
return (function (_moved_columns,_final_index,_drop_index,_move_possible,_order_changed){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_after_DASH_column_DASH_move,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(hot.getColHeader())], null));

return true;
});
}),cljs.core.cst$kw$hot_SLASH_after_DASH_column_DASH_sort,(function (hot){
return (function (_current_sort_config,_destination_sort_config){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_after_DASH_column_DASH_sort,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(hot.getColHeader()),inferenceql.viz.panels.table.handsontable.physical_row_indices(hot)], null));

return true;
});
}),cljs.core.cst$kw$hot_SLASH_after_DASH_create_DASH_row,(function (hot){
return (function (_index,_amount,source){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_after_DASH_create_DASH_row,source,inferenceql.viz.panels.table.handsontable.physical_row_indices(hot)], null));

return true;
});
}),cljs.core.cst$kw$hot_SLASH_after_DASH_filter,(function (hot){
return (function (_conditions_stack){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_after_DASH_filter,inferenceql.viz.panels.table.handsontable.physical_row_indices(hot)], null));

return true;
});
}),cljs.core.cst$kw$hot_SLASH_before_DASH_change,(function (_){
return (function (changes,source){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hot_SLASH_before_DASH_change,changes,source], null));

return true;
});
})], null);
inferenceql.viz.panels.table.handsontable.real_hot_settings = cljs.core.assoc_in(inferenceql.viz.panels.table.handsontable.default_hot_settings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks], null),inferenceql.viz.panels.table.handsontable.real_hot_hooks);
