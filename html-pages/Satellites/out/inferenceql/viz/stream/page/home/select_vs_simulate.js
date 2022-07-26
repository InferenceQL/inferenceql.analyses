// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.page.home.select_vs_simulate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('inferenceql.viz.config');
goog.require('inferenceql.viz.stream.panels.viz.views');
inferenceql.viz.stream.page.home.select_vs_simulate.column_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$column_DASH_ordering], null));
inferenceql.viz.stream.page.home.select_vs_simulate.plot_options = (function inferenceql$viz$stream$page$home$select_vs_simulate$plot_options(){
var marginal_types = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_marginal_DASH_types], null)));
var show_plot_options = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_show_DASH_plot_DASH_options], null)));
if(cljs.core.truth_(show_plot_options)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$padding,"0px 0px 0px 0px",cljs.core.cst$kw$margin,"0px 0px 0px 0px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Marginals:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,"3px"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,cljs.core.cst$kw$choices,cljs.core.vec((function (){var iter__4622__auto__ = (function inferenceql$viz$stream$page$home$select_vs_simulate$plot_options_$_iter__27437(s__27438){
return (new cljs.core.LazySeq(null,(function (){
var s__27438__$1 = s__27438;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27438__$1);
if(temp__5753__auto__){
var s__27438__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27438__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27438__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27440 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27439 = (0);
while(true){
if((i__27439 < size__4621__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27439);
cljs.core.chunk_append(b__27440,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,c,cljs.core.cst$kw$label,cljs.core.name(c)], null));

var G__27441 = (i__27439 + (1));
i__27439 = G__27441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27440),inferenceql$viz$stream$page$home$select_vs_simulate$plot_options_$_iter__27437(cljs.core.chunk_rest(s__27438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27440),null);
}
} else {
var c = cljs.core.first(s__27438__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,c,cljs.core.cst$kw$label,cljs.core.name(c)], null),inferenceql$viz$stream$page$home$select_vs_simulate$plot_options_$_iter__27437(cljs.core.rest(s__27438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1D,cljs.core.cst$kw$2D], null));
})()),cljs.core.cst$kw$model,marginal_types,cljs.core.cst$kw$on_DASH_change,(function (p1__27436_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_set_DASH_marginal_DASH_types,p1__27436_SHARP_], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"30px"], null)], null)], null)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.page.home.select_vs_simulate.select_vs_simulate_section = (function inferenceql$viz$stream$page$home$select_vs_simulate$select_vs_simulate_section(){
var iteration = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_SLASH_iteration], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$label,"Observed Data vs. Program Simulations"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.info_button,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"8px"], null),cljs.core.cst$kw$info,"This is the ..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"8px",cljs.core.cst$kw$align_DASH_self,"center"], null)], null)], null),cljs.core.cst$kw$label,"options",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home_DASH_page_SLASH_toggle_DASH_plot_DASH_options], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.home.select_vs_simulate.plot_options], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.views.select_vs_simulate_plot,iteration], null)], null);
});
