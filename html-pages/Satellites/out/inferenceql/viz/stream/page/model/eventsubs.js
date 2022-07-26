// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.page.model.eventsubs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('inferenceql.viz.stream.interceptors');
goog.require('inferenceql.viz.stream.store');
goog.require('inferenceql.viz.stream.model.xcat_util');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$cluster_DASH_selected], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected_DASH_click_DASH_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$cluster_DASH_selected_DASH_click_DASH_count], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$model_DASH_page_SLASH_select_DASH_cluster,inferenceql.viz.stream.interceptors.event_interceptors,(function (db,p__27444){
var vec__27445 = p__27444;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27445,(0),null);
var new_selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27445,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$cluster_DASH_selected], null),new_selection),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$cluster_DASH_selected_DASH_click_DASH_count], null),cljs.core.inc,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$model_DASH_page_SLASH_clear_DASH_cluster_DASH_selection,inferenceql.viz.stream.interceptors.event_interceptors,(function (db,p__27448){
var vec__27449 = p__27448;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27449,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$model_DASH_page,cljs.core.dissoc,cljs.core.cst$kw$cluster_DASH_selected);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected_DASH_y_DASH_offset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$cluster_DASH_selected_DASH_y_DASH_offset], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$model_DASH_page_SLASH_set_DASH_cluster_DASH_selected_DASH_y_DASH_offset,inferenceql.viz.stream.interceptors.event_interceptors,(function (db,p__27452){
var vec__27453 = p__27452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27453,(0),null);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27453,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$cluster_DASH_selected_DASH_y_DASH_offset], null),new_val);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$model_DASH_page_SLASH_show_DASH_cluster_DASH_simulation_DASH_plots,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$show_DASH_cluster_DASH_simulation_DASH_plots], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$model_DASH_page_SLASH_set_DASH_cluster_DASH_simulation_DASH_plots,inferenceql.viz.stream.interceptors.event_interceptors,(function (db,p__27456){
var vec__27457 = p__27456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(0),null);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,cljs.core.cst$kw$show_DASH_cluster_DASH_simulation_DASH_plots], null),new_val);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$model_DASH_page_SLASH_model,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_SLASH_iteration], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected], null),(function (p__27460,_){
var vec__27461 = p__27460;
var iteration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27461,(0),null);
var cluster_selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27461,(1),null);
if(cljs.core.truth_(cluster_selected)){
return inferenceql.viz.stream.store.xcat_model(iteration,cljs.core.cst$kw$model_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected));
} else {
return null;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$model_DASH_page_SLASH_cols_DASH_in_DASH_view,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_model], null),cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected], null),(function (p__27464,_){
var vec__27465 = p__27464;
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27465,(0),null);
var cluster_selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27465,(1),null);
return cljs.core.set(inferenceql.viz.stream.model.xcat_util.columns_in_view(model,cljs.core.cst$kw$view_DASH_id.cljs$core$IFn$_invoke$arity$1(cluster_selected)));
})], 0));
