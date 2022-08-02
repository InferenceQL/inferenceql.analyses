// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.panels.table.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('medley.core');
goog.require('goog.string');
goog.require('inferenceql.viz.util');
inferenceql.viz.panels.table.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$table_DASH_panel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selection_DASH_layer_DASH_coords,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$show_DASH_label_DASH_column,false], null)], null);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_table_DASH_panel,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_layer_DASH_coords,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_show_DASH_label_DASH_column], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_physical_DASH_data,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_visual_DASH_state,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows_DASH_by_DASH_id,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_hot_DASH_instance], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_layer_DASH_coords,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_show_DASH_label_DASH_column], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_physical_DASH_data,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_visual_DASH_state,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows_DASH_by_DASH_id,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_hot_DASH_instance], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27112){
return cljs.core.map_QMARK_(G__27112);
}),(function (G__27112){
return cljs.core.contains_QMARK_(G__27112,cljs.core.cst$kw$selection_DASH_layer_DASH_coords);
}),(function (G__27112){
return cljs.core.contains_QMARK_(G__27112,cljs.core.cst$kw$show_DASH_label_DASH_column);
})], null),(function (G__27112){
return ((cljs.core.map_QMARK_(G__27112)) && (((cljs.core.contains_QMARK_(G__27112,cljs.core.cst$kw$selection_DASH_layer_DASH_coords)) && (cljs.core.contains_QMARK_(G__27112,cljs.core.cst$kw$show_DASH_label_DASH_column)))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$physical_DASH_data,cljs.core.cst$kw$visual_DASH_state,cljs.core.cst$kw$row_DASH_ids,cljs.core.cst$kw$rows_DASH_by_DASH_id,cljs.core.cst$kw$hot_DASH_instance], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_layer_DASH_coords,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_show_DASH_label_DASH_column], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selection_DASH_layer_DASH_coords,cljs.core.cst$kw$show_DASH_label_DASH_column], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_physical_DASH_data,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_visual_DASH_state,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows_DASH_by_DASH_id,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_hot_DASH_instance], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$selection_DASH_layer_DASH_coords)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$show_DASH_label_DASH_column))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27113){
return cljs.core.map_QMARK_(G__27113);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_merge,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27114){
return cljs.core.map_QMARK_(G__27114);
}),(function (G__27114){
return cljs.core.contains_QMARK_(G__27114,cljs.core.cst$kw$rowid);
})], null),(function (G__27114){
return ((cljs.core.map_QMARK_(G__27114)) && (cljs.core.contains_QMARK_(G__27114,cljs.core.cst$kw$rowid)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rowid], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$rowid))], null),null]))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27115){
return cljs.core.vector_QMARK_(G__27115);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_headers,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27116){
return cljs.core.vector_QMARK_(G__27116);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_header,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27117){
return cljs.core.vector_QMARK_(G__27117);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows_DASH_by_DASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27118){
return cljs.core.map_QMARK_(G__27118);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rowid,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_with_DASH_id)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_physical_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_headers,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows_DASH_by_DASH_id], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_headers,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows_DASH_by_DASH_id], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27119){
return cljs.core.map_QMARK_(G__27119);
})], null),(function (G__27119){
return cljs.core.map_QMARK_(G__27119);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,cljs.core.cst$kw$row_DASH_ids,cljs.core.cst$kw$rows_DASH_by_DASH_id], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_headers,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_rows_DASH_by_DASH_id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_visual_DASH_state,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_headers,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_headers,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27120){
return cljs.core.map_QMARK_(G__27120);
})], null),(function (G__27120){
return cljs.core.map_QMARK_(G__27120);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,cljs.core.cst$kw$row_DASH_ids], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_headers,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_ids], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_show_DASH_label_DASH_column,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_index,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_row_DASH_index,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_index,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_index);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_column_DASH_index,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_index,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_index);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords_DASH_seq,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27121){
return cljs.core.coll_QMARK_(G__27121);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$count,(4)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$number_QMARK_,cljs.core.number_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27122){
return ((cljs.core.vector_QMARK_(G__27122)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.bounded_count((4),G__27122))));
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$count,(4),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$count,(4))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$green,"null",cljs.core.cst$kw$red,"null",cljs.core.cst$kw$blue,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$green,null,cljs.core.cst$kw$red,null,cljs.core.cst$kw$blue,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_layer_DASH_coords,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_color,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords_DASH_seq),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_color,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords_DASH_seq),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_color,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords_DASH_seq], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_color,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords_DASH_seq], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__27123){
return cljs.core.map_QMARK_(G__27123);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_selection_DASH_color,cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_coords_DASH_seq)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$viz$panels$table$db_SLASH_hot_DASH_instance,cljs.core.cst$sym$cljs$core_SLASH_some_QMARK_,cljs.core.some_QMARK_);
inferenceql.viz.panels.table.db.physical_headers = (function inferenceql$viz$panels$table$db$physical_headers(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$physical_DASH_data,cljs.core.cst$kw$headers], null));
});
inferenceql.viz.panels.table.db.physical_rows = (function inferenceql$viz$panels$table$db$physical_rows(db){
var row_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$physical_DASH_data,cljs.core.cst$kw$row_DASH_ids], null));
var rows_by_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$physical_DASH_data,cljs.core.cst$kw$rows_DASH_by_DASH_id], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(rows_by_id,row_ids);
});
inferenceql.viz.panels.table.db.visual_row_ids = (function inferenceql$viz$panels$table$db$visual_row_ids(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$visual_DASH_state,cljs.core.cst$kw$row_DASH_ids], null));
});
inferenceql.viz.panels.table.db.selection_layer_coords = (function inferenceql$viz$panels$table$db$selection_layer_coords(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$selection_DASH_layer_DASH_coords], null));
});
inferenceql.viz.panels.table.db.hot_instance = (function inferenceql$viz$panels$table$db$hot_instance(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$hot_DASH_instance], null));
});
/**
 * Returns a sequence of user-edited rows to be used with auto query-editing.
 * 
 *   Args:
 *  db - Re-frame app-db.
 *  schema - The schema for the original dataset (not including new columns and column renames).
 */
inferenceql.viz.panels.table.db.editable_rows = (function inferenceql$viz$panels$table$db$editable_rows(db,schema){
var rows_by_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$rows_DASH_by_DASH_id], null));
var row_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$row_DASH_ids], null));
var rows = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$editable,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(rows_by_id,row_ids));
var quote_strings = (function (p1__27124_SHARP_){
if(typeof p1__27124_SHARP_ === 'string'){
return goog.string.format("\"%s\"",p1__27124_SHARP_);
} else {
return p1__27124_SHARP_;
}
});
var keys_to_keep = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(schema),cljs.core.cst$kw$editable,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$label], 0));
return cljs.core.vec((function (){var iter__4622__auto__ = (function inferenceql$viz$panels$table$db$editable_rows_$_iter__27126(s__27127){
return (new cljs.core.LazySeq(null,(function (){
var s__27127__$1 = s__27127;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27127__$1);
if(temp__5753__auto__){
var s__27127__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27127__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27127__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27129 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27128 = (0);
while(true){
if((i__27128 < size__4621__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27128);
cljs.core.chunk_append(b__27129,(function (){var $ = r;
var $__$1 = cljs.core.select_keys($,keys_to_keep);
var $__$2 = medley.core.update_existing.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$label,inferenceql.viz.util.coerce_bool);
var $__$3 = medley.core.remove_vals(cljs.core.nil_QMARK_,$__$2);
var $__$4 = medley.core.remove_vals(((function (i__27128,$,$__$1,$__$2,$__$3,r,c__4620__auto__,size__4621__auto__,b__27129,s__27127__$2,temp__5753__auto__,rows_by_id,row_ids,rows,quote_strings,keys_to_keep){
return (function (p1__27125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__27125_SHARP_);
});})(i__27128,$,$__$1,$__$2,$__$3,r,c__4620__auto__,size__4621__auto__,b__27129,s__27127__$2,temp__5753__auto__,rows_by_id,row_ids,rows,quote_strings,keys_to_keep))
,$__$3);
var $__$5 = medley.core.map_keys(cljs.core.name,$__$4);
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(quote_strings,$__$5);
})());

var G__27130 = (i__27128 + (1));
i__27128 = G__27130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27129),inferenceql$viz$panels$table$db$editable_rows_$_iter__27126(cljs.core.chunk_rest(s__27127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27129),null);
}
} else {
var r = cljs.core.first(s__27127__$2);
return cljs.core.cons((function (){var $ = r;
var $__$1 = cljs.core.select_keys($,keys_to_keep);
var $__$2 = medley.core.update_existing.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$label,inferenceql.viz.util.coerce_bool);
var $__$3 = medley.core.remove_vals(cljs.core.nil_QMARK_,$__$2);
var $__$4 = medley.core.remove_vals(((function ($,$__$1,$__$2,$__$3,r,s__27127__$2,temp__5753__auto__,rows_by_id,row_ids,rows,quote_strings,keys_to_keep){
return (function (p1__27125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__27125_SHARP_);
});})($,$__$1,$__$2,$__$3,r,s__27127__$2,temp__5753__auto__,rows_by_id,row_ids,rows,quote_strings,keys_to_keep))
,$__$3);
var $__$5 = medley.core.map_keys(cljs.core.name,$__$4);
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(quote_strings,$__$5);
})(),inferenceql$viz$panels$table$db$editable_rows_$_iter__27126(cljs.core.rest(s__27127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(rows);
})());
});
/**
 * Returns sequence of user-edited rows to be used in incorporate clauses for auto query-editing.
 * 
 *   Args:
 *  db - Re-frame app-db.
 *  schema - The schema for the original dataset (not including new columns and column renames).
 */
inferenceql.viz.panels.table.db.editable_rows_for_incorp = (function inferenceql$viz$panels$table$db$editable_rows_for_incorp(db,schema){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,(function (){var iter__4622__auto__ = (function inferenceql$viz$panels$table$db$editable_rows_for_incorp_$_iter__27131(s__27132){
return (new cljs.core.LazySeq(null,(function (){
var s__27132__$1 = s__27132;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27132__$1);
if(temp__5753__auto__){
var s__27132__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27132__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27132__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27134 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27133 = (0);
while(true){
if((i__27133 < size__4621__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27133);
cljs.core.chunk_append(b__27134,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,"editable"));

var G__27135 = (i__27133 + (1));
i__27133 = G__27135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27134),inferenceql$viz$panels$table$db$editable_rows_for_incorp_$_iter__27131(cljs.core.chunk_rest(s__27132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27134),null);
}
} else {
var r = cljs.core.first(s__27132__$2);
return cljs.core.cons(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,"editable"),inferenceql$viz$panels$table$db$editable_rows_for_incorp_$_iter__27131(cljs.core.rest(s__27132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(inferenceql.viz.panels.table.db.editable_rows(db,schema));
})()));
});
/**
 * Returns a map of row-id to boolean label value for all original rows (not user-edited). 
 */
inferenceql.viz.panels.table.db.label_values = (function inferenceql$viz$panels$table$db$label_values(db){
return medley.core.filter_vals(cljs.core.some_QMARK_,medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.util.coerce_bool,medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$label,medley.core.remove_vals(cljs.core.cst$kw$editable,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_DASH_panel,cljs.core.cst$kw$rows_DASH_by_DASH_id], null))))));
});
