// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.page.model.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('inferenceql.viz.stream.panels.jsmodel.views');
goog.require('inferenceql.viz.stream.panels.table.views');
goog.require('inferenceql.viz.stream.panels.viz.views');
goog.require('reagent.core');
inferenceql.viz.stream.page.model.views.back_link = (function inferenceql$viz$stream$page$model$views$back_link(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$label,"\u00AB Back",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"16px",cljs.core.cst$kw$margin,"0px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_set_DASH_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_clear_DASH_cluster_DASH_selection], null));
})], null);
});
inferenceql.viz.stream.page.model.views.program_section = (function inferenceql$viz$stream$page$model$views$program_section(model_num){
var iteration = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_SLASH_iteration], null)));
var cluster_selected = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected], null)));
var show_cluster_simulation_plots = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_show_DASH_cluster_DASH_simulation_DASH_plots], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"640px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$align_DASH_self,"flex-end",cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$margin_DASH_top,"-20px",cljs.core.cst$kw$bottom,"-23px"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$model,show_cluster_simulation_plots,cljs.core.cst$kw$on_DASH_change,(function (p1__27522_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_set_DASH_cluster_DASH_simulation_DASH_plots,p1__27522_SHARP_], null));
}),cljs.core.cst$kw$label,(function (){var show_tooltip = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_tooltip,cljs.core.cst$kw$label,["This shows cluster simulation plots ","whenever a cluster is clicked in the ","model (js-program)."].join(''),cljs.core.cst$kw$position,cljs.core.cst$kw$above_DASH_center,cljs.core.cst$kw$showing_QMARK_,show_tooltip,cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,"10000"], null),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (){
return cljs.core.reset_BANG_(show_tooltip,true);
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (){
return cljs.core.reset_BANG_(show_tooltip,false);
})], null),"show simulation plots"], null)], null);
})()], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"-1px"], null),cljs.core.cst$kw$model,model_num,cljs.core.cst$kw$tabs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(0),cljs.core.cst$kw$label,"Program 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$label,"Program 2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$label,"Program 3"], null)], null),cljs.core.cst$kw$on_DASH_change,(function (p1__27523_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_set_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,p1__27523_SHARP_], null)], null));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$height,"4000px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#f8f8f8"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.js_model,model_num,iteration,cluster_selected], null)], null)], null)], null);
});
inferenceql.viz.stream.page.model.views.cluster_simulation_section = (function inferenceql$viz$stream$page$model$views$cluster_simulation_section(){
var iteration = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_SLASH_iteration], null)));
var cluster_selected = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected], null)));
var cluster_selected_click_count = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected_DASH_click_DASH_count], null)));
var cluster_selected_y_offset = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected_DASH_y_DASH_offset], null)));
var show_cluster_simulation_plots = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_show_DASH_cluster_DASH_simulation_DASH_plots], null)));
if(cljs.core.truth_((function (){var and__4221__auto__ = cluster_selected;
if(cljs.core.truth_(and__4221__auto__)){
return show_cluster_simulation_plots;
} else {
return and__4221__auto__;
}
})())){
var y_offset = (function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (cluster_selected_y_offset - (10));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$margin,"28px 0px 0px 0px",cljs.core.cst$kw$class,"smalldot",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_offset),"px"].join('')], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.views.cluster_simulate_plot,cluster_selected,cluster_selected_click_count,iteration], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"30px"], null);
}
});
inferenceql.viz.stream.page.model.views.data_table_section = (function inferenceql$viz$stream$page$model$views$data_table_section(){
var iteration = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_SLASH_iteration], null)));
var cluster_selected = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$margin,"28px 0px 0px 0px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.table.views.data_table,iteration,cluster_selected,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"4000px",cljs.core.cst$kw$width,"2000px"], null)], null)], null);
});
inferenceql.viz.stream.page.model.views.model_page = (function inferenceql$viz$stream$page$model$views$model_page(_model_num){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (_){
return window.scrollTo((0),(0));
}),cljs.core.cst$kw$reagent_DASH_render,(function (model_num){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$margin,"20px 20px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.model.views.back_link], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$label,"Ensemble of synthesized probabilistic programs (details)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.model.views.program_section,model_num], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.model.views.cluster_simulation_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.model.views.data_table_section], null)], null)], null)], null)], null);
})], null));
});
