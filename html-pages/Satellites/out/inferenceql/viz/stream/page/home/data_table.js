// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.page.home.data_table');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('inferenceql.viz.config');
goog.require('inferenceql.viz.stream.panels.table.views');
goog.require('inferenceql.viz.stream.panels.viz.views');
inferenceql.viz.stream.page.home.data_table.column_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$column_DASH_ordering], null));
inferenceql.viz.stream.page.home.data_table.col_selection = (function inferenceql$viz$stream$page$home$data_table$col_selection(){
var col_selection = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_col_DASH_selection], null)));
var show_col_selection = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_show_DASH_col_DASH_selection], null)));
if(cljs.core.truth_(show_col_selection)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$padding,"0px 0px 0px 0px",cljs.core.cst$kw$margin,"0px 0px 0px 0px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Columns to plot:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"16px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,"3px"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,cljs.core.cst$kw$choices,cljs.core.vec((function (){var iter__4622__auto__ = (function inferenceql$viz$stream$page$home$data_table$col_selection_$_iter__27340(s__27341){
return (new cljs.core.LazySeq(null,(function (){
var s__27341__$1 = s__27341;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27341__$1);
if(temp__5753__auto__){
var s__27341__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27341__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27341__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27343 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27342 = (0);
while(true){
if((i__27342 < size__4621__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27342);
cljs.core.chunk_append(b__27343,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,c,cljs.core.cst$kw$label,cljs.core.name(c)], null));

var G__27344 = (i__27342 + (1));
i__27342 = G__27344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27343),inferenceql$viz$stream$page$home$data_table$col_selection_$_iter__27340(cljs.core.chunk_rest(s__27341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27343),null);
}
} else {
var c = cljs.core.first(s__27341__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,c,cljs.core.cst$kw$label,cljs.core.name(c)], null),inferenceql$viz$stream$page$home$data_table$col_selection_$_iter__27340(cljs.core.rest(s__27341__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(inferenceql.viz.stream.page.home.data_table.column_list);
})()),cljs.core.cst$kw$model,col_selection,cljs.core.cst$kw$on_DASH_change,(function (p1__27339_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_select_DASH_cols,p1__27339_SHARP_], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"50px"], null)], null)], null)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.page.home.data_table.data_table_section = (function inferenceql$viz$stream$page$home$data_table$data_table_section(){
var iteration = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_SLASH_iteration], null)));
var cluster_selected = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_cluster_DASH_selected], null)));
var show_data_table_section = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_show_DASH_data_DASH_table_DASH_section], null)));
var data_table_size = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_data_DASH_table_DASH_size], null)));
var small_size = "400px";
var large_size = "1000px";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$label,"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.info_button,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"8px"], null),cljs.core.cst$kw$info,"This is the ..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"6px",cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(show_data_table_section)?null:"darkblue")], null),cljs.core.cst$kw$label,"hide",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_toggle_DASH_show_DASH_data_DASH_table_DASH_section], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"6px",cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$label,"small table",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_set_DASH_data_DASH_table_DASH_size,small_size], null));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"2px 10px",cljs.core.cst$kw$background_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_table_size,small_size))?"whitesmoke":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"6px",cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$label,"large table",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_set_DASH_data_DASH_table_DASH_size,large_size], null));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"2px 10px",cljs.core.cst$kw$background_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_table_size,large_size))?"whitesmoke":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"8px",cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$label,"columns to plot",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_toggle_DASH_col_DASH_selection], null));
})], null)], null)], null),(cljs.core.truth_(show_data_table_section)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.home.data_table.col_selection], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"1390px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.table.views.data_table,iteration,cluster_selected,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,data_table_size], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"15px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.views.select_plot,iteration], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null)], null):null)], null);
});
