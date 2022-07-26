// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.multi_select');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.input_text');
goog.require('re_com.box');
goog.require('re_com.text');
goog.require('re_com.buttons');
goog.require('re_com.close_button');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('reagent.core');
/**
 * Split a list of maps by a group key then return both the group
 */
re_com.multi_select.items_with_group_headings = (function re_com$multi_select$items_with_group_headings(items,group_fn,id_fn){
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(group_fn,items);
var group_headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8066_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$group],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(p1__8066_SHARP_) : group_fn.call(null,p1__8066_SHARP_)),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__8066_SHARP_) : id_fn.call(null,p1__8066_SHARP_))], null),(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(p1__8066_SHARP_) : group_fn.call(null,p1__8066_SHARP_))]);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,groups));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of items based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.multi_select.filter_items = (function re_com$multi_select$filter_items(group_fn,label_fn,filter_text){
var lower_filter_text = clojure.string.lower_case(filter_text);
return (function (item){
var group = (function (){var or__4223__auto__ = (group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(item) : group_fn.call(null,item));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})();
var label = cljs.core.str.cljs$core$IFn$_invoke$arity$1((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item)));
return ((clojure.string.includes_QMARK_(clojure.string.lower_case(group),lower_filter_text)) || (clojure.string.includes_QMARK_(clojure.string.lower_case(label),lower_filter_text)));
});
});
/**
 * Filter a list of items based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.multi_select.filter_items_regex = (function re_com$multi_select$filter_items_regex(group_fn,label_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e8067){if((e8067 instanceof Object)){
var e = e8067;
return null;
} else {
throw e8067;

}
}})();
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (re__$1,item){
if((re__$1 == null)){
return null;
} else {
var or__4223__auto__ = re__$1.test((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(item) : group_fn.call(null,item)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re__$1.test((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item)));
}
}
}),re);
});
/**
 * Base function (before lifecycle metadata) to render a filter text box
 */
re_com.multi_select.filter_text_box = (function re_com$multi_select$filter_text_box(_STAR_filter_text,placeholder,_STAR_warning_message,disabled_QMARK_,parts){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$class,["rc-multi-select-filter-text-box ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_text_DASH_box,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_text_DASH_box,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_text_DASH_box,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,cljs.core.cst$kw$class,["rc-multi-select-filter-input-text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_input_DASH_text,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$model,_STAR_filter_text,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"28px",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"3px 4px"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_input_DASH_text,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_input_DASH_text,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$on_DASH_change,(function (p1__8068_SHARP_){
cljs.core.reset_BANG_(_STAR_filter_text,p1__8068_SHARP_);

return cljs.core.reset_BANG_(_STAR_warning_message,null);
})], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,cljs.core.cst$kw$class,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_reset_DASH_button,cljs.core.cst$kw$class], null)),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_reset_DASH_button,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_reset_DASH_button,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(_STAR_filter_text,"");
}),cljs.core.cst$kw$div_DASH_size,(0),cljs.core.cst$kw$font_DASH_size,(20),cljs.core.cst$kw$left_DASH_offset,(-13)], null)], null)], null);
});
/**
 * Render a group heading and set up appropriate mouse events
 */
re_com.multi_select.group_heading_item = (function re_com$multi_select$group_heading_item(){
var _STAR_mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$multi_select$group_heading_item_$_group_heading_render__delegate = function (p__8069){
var map__8070 = p__8069;
var map__8070__$1 = cljs.core.__destructure_map(map__8070);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8070__$1,cljs.core.cst$kw$heading);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8070__$1,cljs.core.cst$kw$disabled_QMARK_);
var click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8070__$1,cljs.core.cst$kw$click_DASH_callback);
var double_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8070__$1,cljs.core.cst$kw$double_DASH_click_DASH_callback);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8070__$1,cljs.core.cst$kw$selected_DASH_item_DASH_id);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(heading);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_item_id,id);
var class$ = ((selected_QMARK_)?"highlighted":(cljs.core.truth_(cljs.core.deref(_STAR_mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$group_DASH_result,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,"6px",cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer"),cljs.core.cst$kw$color,((selected_QMARK_)?"white":"#444")], null),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null):null)], 0)),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,false);

return null;
}),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(click_callback.cljs$core$IFn$_invoke$arity$2 ? click_callback.cljs$core$IFn$_invoke$arity$2(id,true) : click_callback.call(null,id,true));

return null;
})),cljs.core.cst$kw$on_DASH_double_DASH_click,(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(double_click_callback.cljs$core$IFn$_invoke$arity$1 ? double_click_callback.cljs$core$IFn$_invoke$arity$1(id) : double_click_callback.call(null,id));

return null;
}))], null),cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(heading)], null);
};
var re_com$multi_select$group_heading_item_$_group_heading_render = function (var_args){
var p__8069 = null;
if (arguments.length > 0) {
var G__8071__i = 0, G__8071__a = new Array(arguments.length -  0);
while (G__8071__i < G__8071__a.length) {G__8071__a[G__8071__i] = arguments[G__8071__i + 0]; ++G__8071__i;}
  p__8069 = new cljs.core.IndexedSeq(G__8071__a,0,null);
} 
return re_com$multi_select$group_heading_item_$_group_heading_render__delegate.call(this,p__8069);};
re_com$multi_select$group_heading_item_$_group_heading_render.cljs$lang$maxFixedArity = 0;
re_com$multi_select$group_heading_item_$_group_heading_render.cljs$lang$applyTo = (function (arglist__8072){
var p__8069 = cljs.core.seq(arglist__8072);
return re_com$multi_select$group_heading_item_$_group_heading_render__delegate(p__8069);
});
re_com$multi_select$group_heading_item_$_group_heading_render.cljs$core$IFn$_invoke$arity$variadic = re_com$multi_select$group_heading_item_$_group_heading_render__delegate;
return re_com$multi_select$group_heading_item_$_group_heading_render;
})()
;
});
/**
 * Render a list item and set up appropriate mouse events
 */
re_com.multi_select.list_item = (function re_com$multi_select$list_item(){
var _STAR_mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$multi_select$list_item_$_list_item_render__delegate = function (p__8073){
var map__8074 = p__8073;
var map__8074__$1 = cljs.core.__destructure_map(map__8074);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$item);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$id_DASH_fn);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$label_DASH_fn);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$disabled_QMARK_);
var click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$click_DASH_callback);
var double_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$double_DASH_click_DASH_callback);
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$selected_DASH_item_DASH_id);
var group_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$group_DASH_selected_QMARK_);
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected_item_id);
var class$ = ((((selected_QMARK_) && (cljs.core.not(disabled_QMARK_))))?"highlighted":(cljs.core.truth_(cljs.core.deref(_STAR_mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,["active-result group-option ",class$].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(group_selected_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"hsl(208, 56%, 92%)"], null):null),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"default",cljs.core.cst$kw$pointer_DASH_events,"none"], null):null)], 0)),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,false);

return null;
}),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(click_callback.cljs$core$IFn$_invoke$arity$2 ? click_callback.cljs$core$IFn$_invoke$arity$2(id,false) : click_callback.call(null,id,false));

return null;
})),cljs.core.cst$kw$on_DASH_double_DASH_click,(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(double_click_callback.cljs$core$IFn$_invoke$arity$1 ? double_click_callback.cljs$core$IFn$_invoke$arity$1(id) : double_click_callback.call(null,id));

return null;
}))], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null);
};
var re_com$multi_select$list_item_$_list_item_render = function (var_args){
var p__8073 = null;
if (arguments.length > 0) {
var G__8075__i = 0, G__8075__a = new Array(arguments.length -  0);
while (G__8075__i < G__8075__a.length) {G__8075__a[G__8075__i] = arguments[G__8075__i + 0]; ++G__8075__i;}
  p__8073 = new cljs.core.IndexedSeq(G__8075__a,0,null);
} 
return re_com$multi_select$list_item_$_list_item_render__delegate.call(this,p__8073);};
re_com$multi_select$list_item_$_list_item_render.cljs$lang$maxFixedArity = 0;
re_com$multi_select$list_item_$_list_item_render.cljs$lang$applyTo = (function (arglist__8076){
var p__8073 = cljs.core.seq(arglist__8076);
return re_com$multi_select$list_item_$_list_item_render__delegate(p__8073);
});
re_com$multi_select$list_item_$_list_item_render.cljs$core$IFn$_invoke$arity$variadic = re_com$multi_select$list_item_$_list_item_render__delegate;
return re_com$multi_select$list_item_$_list_item_render;
})()
;
});
/**
 * Render a list box which can be a single list or a grouped list
 */
re_com.multi_select.list_box = (function re_com$multi_select$list_box(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8083 = arguments.length;
var i__4830__auto___8084 = (0);
while(true){
if((i__4830__auto___8084 < len__4829__auto___8083)){
args__4835__auto__.push((arguments[i__4830__auto___8084]));

var G__8085 = (i__4830__auto___8084 + (1));
i__4830__auto___8084 = G__8085;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.multi_select.list_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.multi_select.list_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__8078){
var map__8079 = p__8078;
var map__8079__$1 = cljs.core.__destructure_map(map__8079);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$items);
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$group_DASH_fn);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$disabled_QMARK_);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$label_DASH_fn);
var double_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$double_DASH_click_DASH_callback);
var click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$click_DASH_callback);
var _STAR_current_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$_STAR_current_DASH_item_DASH_id);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$id_DASH_fn);
var filter_choices_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$filter_DASH_choices_DASH_text);
var group_heading_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8079__$1,cljs.core.cst$kw$group_DASH_heading_DASH_selected_QMARK_);
var vec__8080 = re_com.multi_select.items_with_group_headings(items,group_fn,id_fn);
var group_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8080,(0),null);
var group_item_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8080,(1),null);
var has_group_names_QMARK_ = (!((((cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(cljs.core.first(group_names)) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(group_item_lists))))));
var make_list_item = (function (item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.list_item,cljs.core.cst$kw$item,item,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$click_DASH_callback,click_callback,cljs.core.cst$kw$double_DASH_click_DASH_callback,double_click_callback,cljs.core.cst$kw$selected_DASH_item_DASH_id,cljs.core.deref(_STAR_current_item_id),cljs.core.cst$kw$group_DASH_selected_QMARK_,(cljs.core.truth_(group_heading_selected_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_item_id)),(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(item) : group_fn.call(null,item))):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)))], null));
});
var make_items = (function (items__$1){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_list_item,items__$1));
});
var make_group_heading_item = (function (heading){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.group_heading_item,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$click_DASH_callback,click_callback,cljs.core.cst$kw$double_DASH_click_DASH_callback,double_click_callback,cljs.core.cst$kw$selected_DASH_item_DASH_id,cljs.core.deref(_STAR_current_item_id)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(heading)], null));
});
var make_heading_then_items = (function (heading,items__$1){
return cljs.core.cons(make_group_heading_item(heading),make_items(items__$1));
});
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$class,(cljs.core.truth_(disabled_QMARK_)?"bm-multi-select-list-disabled":"bm-multi-select-list"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,"#fafafa",cljs.core.cst$kw$border,"1px solid #ccc",cljs.core.cst$kw$border_DASH_radius,"4px"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$chosen_DASH_results,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,"none"], null)], null),(((cljs.core.count(items) > (0)))?((has_group_names_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(make_heading_then_items,group_names,group_item_lists))):make_items(cljs.core.first(group_item_lists))):((clojure.string.blank_QMARK_(filter_choices_text))?"":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$no_DASH_results,["No results match \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter_choices_text),"\""].join('')], null)))], null)], null);
}));

(re_com.multi_select.list_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.multi_select.list_box.cljs$lang$applyTo = (function (seq8077){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8077));
}));

re_com.multi_select.multi_select_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-multi-select",cljs.core.cst$kw$impl,"[multi-select]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$container,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-multi-select-container",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$left,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-multi-select-left",cljs.core.cst$kw$impl,"[v-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_label_DASH_container,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-left-label-container",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_label,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-left-label",cljs.core.cst$kw$impl,"[:span]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-left-label-item-count",cljs.core.cst$kw$impl,"[:span]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_list_DASH_box,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-left-list-box",cljs.core.cst$kw$impl,"[list-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_text_DASH_box,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-filter-text-box",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_input_DASH_text,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-filter-input-text",cljs.core.cst$kw$impl,"[input-text]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_reset_DASH_button,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-filter-reset-button",cljs.core.cst$kw$impl,"[close-button]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-left-filter-result-count",cljs.core.cst$kw$impl,"[label]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$middle_DASH_container,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-multi-select-middle-container",cljs.core.cst$kw$impl,"[v-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$middle_DASH_top_DASH_spacer,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-middle-top-spacer",cljs.core.cst$kw$impl,"[box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$middle,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-middle",cljs.core.cst$kw$impl,"[v-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$include_DASH_all_DASH_button,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-include-all-button",cljs.core.cst$kw$impl,"[button]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$include_DASH_selected_DASH_button,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-include-selected-button",cljs.core.cst$kw$impl,"[button]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$exclude_DASH_selected_DASH_button,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-exclude-selected-button",cljs.core.cst$kw$impl,"[button]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$exclude_DASH_all_DASH_button,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-exclude-all-button",cljs.core.cst$kw$impl,"[button]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$middle_DASH_bottom_DASH_spacer,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-middle-bottom-spacer",cljs.core.cst$kw$impl,"[box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$right,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-multi-select-right",cljs.core.cst$kw$impl,"[v-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$warning_DASH_message,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-warning-message",cljs.core.cst$kw$impl,"[label]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$right_DASH_label_DASH_container,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-right-label-container",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$right_DASH_label,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-right-label",cljs.core.cst$kw$impl,"[:span]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$right_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-right-label-item-count",cljs.core.cst$kw$impl,"[:span]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$right_DASH_list_DASH_box,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-right-list-box",cljs.core.cst$kw$impl,"[list-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_text_DASH_box,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-filter-text-box",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_input_DASH_text,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-filter-input-text",cljs.core.cst$kw$impl,"[input-text]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_reset_DASH_button,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-multi-select-filter-reset-button",cljs.core.cst$kw$impl,"[close-button]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$right_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-multi-select-right-filter-result-count",cljs.core.cst$kw$impl,"[label]"], null)], null):null);
re_com.multi_select.multi_select_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.multi_select.multi_select_parts_desc)):null);
re_com.multi_select.multi_select_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of maps | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Each map represents a choice. Values corresponding to id, label and, optionally, a group, are extracted by the functions ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":group-fn"], null),". See below."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"map -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a function taking one argument (a map) and returns the unique identifier for that map. Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"map -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a function taking one argument (a map) and returns the displayable label for that map. Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$group,cljs.core.cst$kw$type,"map -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a function taking one argument (a map) and returns the group identifier for that map. Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$sort_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"compare",cljs.core.cst$kw$type,"map, map -> integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"The comparator function used with ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"cljs.core/sort-by"], null)," to sort choices."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"a set of ids | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a set of the ids for currently selected choices. If nil, see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":placeholder"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$required_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, at least one item must be selected"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_selected_DASH_items,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$description,"maximum number of items that can be selected"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_label,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label displayed above the left list"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$right_DASH_label,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label displayed above the right list"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a function that will be called when the selection changes. Passed the set of selected ids. See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_box_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, a filter text field is placed at the bottom of the component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$regex_DASH_filter_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, the filter text field will support JavaScript regular expressions. If false, just plain text"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text when no selection"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"100%",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the CSS width. e.g.: \"500px\" or \"20em\""], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the specific height of the component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the maximum height of the component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab_DASH_index,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"component's tabindex. A value of -1 removes from the tab order"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.multi_select.multi_select_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Render a multi-select component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 * {:id "US" :label "United States"  :group "Group 1"}
 * {:id "GB" :label "United Kingdom" :group "Group 1"}
 * {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.multi_select.multi_select = (function re_com$multi_select$multi_select(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8097 = arguments.length;
var i__4830__auto___8098 = (0);
while(true){
if((i__4830__auto___8098 < len__4829__auto___8097)){
args__4835__auto__.push((arguments[i__4830__auto___8098]));

var G__8099 = (i__4830__auto___8098 + (1));
i__4830__auto___8098 = G__8099;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.multi_select.multi_select.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.multi_select.multi_select.cljs$core$IFn$_invoke$arity$variadic = (function (p__8089){
var map__8090 = p__8089;
var map__8090__$1 = cljs.core.__destructure_map(map__8090);
var args = map__8090__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8090__$1,cljs.core.cst$kw$model);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8090__$1,cljs.core.cst$kw$sort_DASH_fn,cljs.core.identity);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8090__$1,cljs.core.cst$kw$src);

var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.multi_select.multi_select_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var _STAR_external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var _STAR_internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_external_model));
var _STAR_current_choice_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_current_selection_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_choice_group_heading_selected_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_selection_group_heading_selected_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_warning_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_filter_choices_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var _STAR_filter_selections_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var button_style = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,"86px",cljs.core.cst$kw$height,"24px",cljs.core.cst$kw$padding,"0px 8px 2px 8px",cljs.core.cst$kw$margin,"8px 6px",cljs.core.cst$kw$text_DASH_align,"left",cljs.core.cst$kw$font_DASH_variant,"small-caps",cljs.core.cst$kw$font_DASH_size,(11)], null);
return (function() { 
var re_com$multi_select$multi_select_render__delegate = function (p__8091){
var map__8092 = p__8091;
var map__8092__$1 = cljs.core.__destructure_map(map__8092);
var args__$1 = map__8092__$1;
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8092__$1,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$group);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$on_DASH_change);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$height);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$attr);
var left_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$left_DASH_label);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8092__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$tab_DASH_index);
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8092__$1,cljs.core.cst$kw$required_QMARK_,false);
var sort_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8092__$1,cljs.core.cst$kw$sort_DASH_fn,cljs.core.compare);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$max_DASH_height);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$placeholder);
var max_selected_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$max_DASH_selected_DASH_items);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$width);
var regex_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$src);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$choices);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8092__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var right_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$right_DASH_label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$class);
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8092__$1,cljs.core.cst$kw$filter_DASH_box_QMARK_);
var or__4223__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.multi_select.multi_select_args_desc),args__$1));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var required_QMARK___$1 = re_com.util.deref_or_value(required_QMARK_);
var filter_box_QMARK___$1 = re_com.util.deref_or_value(filter_box_QMARK_);
var regex_filter_QMARK___$1 = re_com.util.deref_or_value(regex_filter_QMARK_);
var min_msg = "Must have at least one";
var max_msg = ["Max items allowed is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_selected_items)].join('');
var group_fn__$1 = (function (){var or__4223__auto____$2 = group_fn;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return cljs.core.cst$kw$re_DASH_com$multi_DASH_select_SLASH_$$$;
}
})();
var choices__$1 = cljs.core.set(re_com.util.deref_or_value(choices));
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value(regex_filter_QMARK___$1);
var _STAR_latest_ext_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model__$1));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_external_model),cljs.core.deref(_STAR_latest_ext_model)))?(function (){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_latest_ext_model));

return cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.deref(_STAR_latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__4221__auto__ = on_change;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4221__auto__;
}
})();
var excludable_QMARK_ = (function (){var and__4221__auto__ = cljs.core.deref(_STAR_current_selection_id);
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.count(cljs.core.deref(_STAR_internal_model)) > (cljs.core.truth_(required_QMARK___$1)?(1):(0)));
} else {
return and__4221__auto__;
}
})();
var choices_filter_fn = (cljs.core.truth_(regex_filter_QMARK___$2)?re_com.multi_select.filter_items_regex(group_fn__$1,label_fn,cljs.core.deref(_STAR_filter_choices_text)):re_com.multi_select.filter_items(group_fn__$1,label_fn,cljs.core.deref(_STAR_filter_choices_text)));
var filtered_choices = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_fn__$1,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(choices_filter_fn,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__8086_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(_STAR_internal_model),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__8086_SHARP_) : id_fn.call(null,p1__8086_SHARP_)));
}),choices__$1))));
var selections = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_fn__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8087_SHARP_){
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(p1__8087_SHARP_,choices__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn,id_fn], 0));
}),cljs.core.deref(_STAR_internal_model))));
var selections_filter_fn = (cljs.core.truth_(regex_filter_QMARK___$2)?re_com.multi_select.filter_items_regex(group_fn__$1,label_fn,cljs.core.deref(_STAR_filter_selections_text)):re_com.multi_select.filter_items(group_fn__$1,label_fn,cljs.core.deref(_STAR_filter_selections_text)));
var filtered_selections = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_fn__$1,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(selections_filter_fn,selections)));
var potential_count = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,choices__$1)),cljs.core.deref(_STAR_internal_model)));
var chosen_count = cljs.core.count(selections);
var choice_click = (function (id,group_heading_selected_QMARK_){
cljs.core.reset_BANG_(_STAR_current_choice_id,id);

cljs.core.reset_BANG_(_STAR_choice_group_heading_selected_QMARK_,group_heading_selected_QMARK_);

return cljs.core.reset_BANG_(_STAR_warning_message,null);
});
var selection_click = (function (id,group_heading_selected_QMARK_){
cljs.core.reset_BANG_(_STAR_current_selection_id,id);

cljs.core.reset_BANG_(_STAR_selection_group_heading_selected_QMARK_,group_heading_selected_QMARK_);

return cljs.core.reset_BANG_(_STAR_warning_message,null);
});
var include_filtered_click = (function (){
if((((!((max_selected_items == null)))) && (((cljs.core.count(cljs.core.deref(_STAR_internal_model)) + cljs.core.count(filtered_choices)) > max_selected_items)))){
cljs.core.reset_BANG_(_STAR_warning_message,max_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,filtered_choices))));

cljs.core.reset_BANG_(_STAR_warning_message,null);
}

if(cljs.core.truth_((function (){var and__4221__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__8093_8100 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__8093_8100) : on_change.call(null,G__8093_8100));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_choice_id,null);
});
var include_click = (function (){
if(cljs.core.truth_(cljs.core.deref(_STAR_choice_group_heading_selected_QMARK_))){
var choices_to_include_8101 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_choice_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_choices)));
if((((!((max_selected_items == null)))) && (((cljs.core.count(cljs.core.deref(_STAR_internal_model)) + cljs.core.count(choices_to_include_8101)) > max_selected_items)))){
cljs.core.reset_BANG_(_STAR_warning_message,max_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),choices_to_include_8101)));

cljs.core.reset_BANG_(_STAR_choice_group_heading_selected_QMARK_,false);
}
} else {
if((((!((max_selected_items == null)))) && ((cljs.core.count(cljs.core.deref(_STAR_internal_model)) >= max_selected_items)))){
cljs.core.reset_BANG_(_STAR_warning_message,max_msg);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_internal_model,cljs.core.conj,cljs.core.deref(_STAR_current_choice_id));

cljs.core.reset_BANG_(_STAR_warning_message,null);
}
}

if(cljs.core.truth_((function (){var and__4221__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__8094_8102 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__8094_8102) : on_change.call(null,G__8094_8102));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_choice_id,null);
});
var exclude_click = (function (){
if(cljs.core.truth_(excludable_QMARK_)){
if(cljs.core.truth_(cljs.core.deref(_STAR_selection_group_heading_selected_QMARK_))){
var new_internal_model_8103 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_selection_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_selections))));
if(cljs.core.truth_((function (){var and__4221__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.empty_QMARK_(new_internal_model_8103);
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(cljs.core.deref(_STAR_internal_model))]));

cljs.core.reset_BANG_(_STAR_warning_message,min_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,new_internal_model_8103);

cljs.core.reset_BANG_(_STAR_selection_group_heading_selected_QMARK_,false);

cljs.core.reset_BANG_(_STAR_warning_message,null);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_internal_model,cljs.core.disj,cljs.core.deref(_STAR_current_selection_id));

cljs.core.reset_BANG_(_STAR_warning_message,null);
}
} else {
cljs.core.reset_BANG_(_STAR_warning_message,min_msg);
}

if(cljs.core.truth_((function (){var and__4221__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__8095_8104 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__8095_8104) : on_change.call(null,G__8095_8104));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_selection_id,null);
});
var exclude_filtered_click = (function (){
var new_internal_model = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,filtered_selections)));
if(cljs.core.truth_((function (){var and__4221__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.count(new_internal_model) === (0));
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(cljs.core.deref(_STAR_internal_model))]));

cljs.core.reset_BANG_(_STAR_warning_message,min_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,new_internal_model);

cljs.core.reset_BANG_(_STAR_warning_message,null);
}

if(cljs.core.truth_((function (){var and__4221__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__8096_8105 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__8096_8105) : on_change.call(null,G__8096_8105));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_selection_id,null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-multi-select noselect chosen-container chosen-container-single ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style((cljs.core.truth_(width)?"0 0 auto":"auto")),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$start),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$width,width], null),style], 0))], null),re_com.debug.__GT_attr(args__$1),attr], 0)),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,427], null)),cljs.core.cst$kw$class,["rc-multi-select-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$container,cljs.core.cst$kw$class], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$container,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$height,height,cljs.core.cst$kw$max_DASH_height,max_height,cljs.core.cst$kw$gap,"4px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,435], null)),cljs.core.cst$kw$class,["rc-multi-select-left ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$size,"50%",cljs.core.cst$kw$gap,"4px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(left_label)?((typeof left_label === 'string')?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,444], null)),cljs.core.cst$kw$class,["rc-multi-select-left-label-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label_DASH_container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label_DASH_container,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label_DASH_container,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-multi-select-left-label ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"small",cljs.core.cst$kw$font_DASH_weight,"bold"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label,cljs.core.cst$kw$attr], null))], 0)),left_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-multi-select-left-label-item-count ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"smaller"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$attr], null))], 0)),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_choices_text)))?re_com.util.pluralize(potential_count,"item"):["showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(filtered_choices))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(potential_count)].join(''))], null)], null)], null):left_label):null),new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.list_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,468], null)),cljs.core.cst$kw$class,["rc-multi-select-left-list-box ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_list_DASH_box,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$items,filtered_choices,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$group_DASH_fn,group_fn__$1,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK___$1,cljs.core.cst$kw$_STAR_current_DASH_item_DASH_id,_STAR_current_choice_id,cljs.core.cst$kw$group_DASH_heading_DASH_selected_QMARK_,cljs.core.deref(_STAR_choice_group_heading_selected_QMARK_),cljs.core.cst$kw$click_DASH_callback,choice_click,cljs.core.cst$kw$double_DASH_click_DASH_callback,include_click,cljs.core.cst$kw$filter_DASH_choices_DASH_text,cljs.core.deref(_STAR_filter_choices_text)], null),(cljs.core.truth_(filter_box_QMARK___$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,483], null)),cljs.core.cst$kw$size,"4px"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.filter_text_box,_STAR_filter_choices_text,placeholder,_STAR_warning_message,disabled_QMARK___$1,parts], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,487], null)),cljs.core.cst$kw$size,"4px"], null),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_choices_text)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,491], null)),cljs.core.cst$kw$label,goog.string.unescapeEntities("&nbsp;"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"smaller"], null)], null):new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,495], null)),cljs.core.cst$kw$class,["rc-multi-select-left-filter-result-count ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"smaller"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Found ",re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(filtered_choices),"match",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["matches"], 0))," containing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,cljs.core.deref(_STAR_filter_choices_text)], null)], null)], null))], null):null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,503], null)),cljs.core.cst$kw$class,["rc-multi-select-middle-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_container,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_container,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,509], null)),cljs.core.cst$kw$class,["rc-multi-select-middle-spacer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_spacer,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_spacer,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle_DASH_spacer,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$size,"0 1 22px",cljs.core.cst$kw$child,""], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,516], null)),cljs.core.cst$kw$class,["rc-multi-select-middle ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$middle,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,522], null)),cljs.core.cst$kw$class,["rc-multi-select-include-all-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$include_DASH_all_DASH_button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zmdi zmdi-hc-fw-rc zmdi-fast-forward"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$top,"-1px"], null)], null),[" include ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_choices_text)))?potential_count:cljs.core.count(filtered_choices)))].join('')], null)], null),cljs.core.cst$kw$disabled_QMARK_,(function (){var or__4223__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return (cljs.core.count(filtered_choices) === (0));
}
})(),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$include_DASH_all_DASH_button,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$include_DASH_all_DASH_button,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$on_DASH_click,include_filtered_click], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,535], null)),cljs.core.cst$kw$class,["rc-multi-select-include-selected-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$include_DASH_selected_DASH_button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zmdi zmdi-hc-fw-rc zmdi-play"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$top,"-1px"], null)], null),[" include ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(_STAR_choice_group_heading_selected_QMARK_))?cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_choice_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_choices)):null))].join('')], null)], null),cljs.core.cst$kw$disabled_QMARK_,(function (){var or__4223__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return cljs.core.not(cljs.core.deref(_STAR_current_choice_id));
}
})(),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$include_DASH_selected_DASH_button,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$include_DASH_selected_DASH_button,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$on_DASH_click,include_click], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,551], null)),cljs.core.cst$kw$class,["rc-multi-select-exclude-selected-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exclude_DASH_selected_DASH_button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zmdi zmdi-hc-fw-rc zmdi-play zmdi-hc-rotate-180"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$top,"-1px"], null)], null),[" exclude ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(_STAR_selection_group_heading_selected_QMARK_))?cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_selection_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_selections)):null))].join('')], null)], null),cljs.core.cst$kw$disabled_QMARK_,(function (){var or__4223__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return cljs.core.not(excludable_QMARK_);
}
})(),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exclude_DASH_selected_DASH_button,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exclude_DASH_selected_DASH_button,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$on_DASH_click,exclude_click], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,567], null)),cljs.core.cst$kw$class,["rc-multi-select-exclude-all-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exclude_DASH_all_DASH_button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zmdi zmdi-hc-fw-rc zmdi-fast-rewind"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$top,"-1px"], null)], null),[" exclude ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_selections_text)))?chosen_count:cljs.core.count(filtered_selections)))].join('')], null)], null),cljs.core.cst$kw$disabled_QMARK_,(function (){var or__4223__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return (((cljs.core.count(filtered_selections) === (0))) || ((!((cljs.core.count(cljs.core.deref(_STAR_internal_model)) > (cljs.core.truth_(required_QMARK___$1)?(1):(0)))))));
}
})(),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exclude_DASH_all_DASH_button,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exclude_DASH_all_DASH_button,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$on_DASH_click,exclude_filtered_click], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,580], null)),cljs.core.cst$kw$size,["0 2 ",(cljs.core.truth_(filter_box_QMARK___$1)?"55px":"0px")].join(''),cljs.core.cst$kw$child,""], null)], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,585], null)),cljs.core.cst$kw$class,["rc-multi-select-right ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$size,"50%",cljs.core.cst$kw$gap,"4px",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,594], null)),cljs.core.cst$kw$label,cljs.core.deref(_STAR_warning_message),cljs.core.cst$kw$class,["rc-multi-select-warning-message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warning_DASH_message,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,(cljs.core.truth_(cljs.core.deref(_STAR_warning_message))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$opacity,cljs.core.cst$kw$padding,cljs.core.cst$kw$animation_DASH_duration,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$animation_DASH_name,cljs.core.cst$kw$height],["white","green",(1),"0","3px 6px","5000ms","0px","absolute","0px","rc-multi-select-fade-warning-msg","25px"]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warning_DASH_message,cljs.core.cst$kw$style], null))], 0)):null),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warning_DASH_message,cljs.core.cst$kw$attr], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null)),(cljs.core.truth_(right_label)?((typeof right_label === 'string')?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,615], null)),cljs.core.cst$kw$class,["rc-multi-select-right-label-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label_DASH_container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label_DASH_container,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label_DASH_container,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-multi-select-right-label ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"small",cljs.core.cst$kw$font_DASH_weight,"bold"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label,cljs.core.cst$kw$attr], null))], 0)),right_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-multi-select-right-label-item-count ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"smaller"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_label_DASH_item_DASH_count,cljs.core.cst$kw$attr], null))], 0)),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_selections_text)))?re_com.util.pluralize(chosen_count,"item"):["showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(filtered_selections))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chosen_count)].join(''))], null)], null)], null):right_label):null),new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.list_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,639], null)),cljs.core.cst$kw$class,["rc-multi-select-right-list-box ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_list_DASH_box,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_list_DASH_box,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_list_DASH_box,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$items,filtered_selections,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$group_DASH_fn,group_fn__$1,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK___$1,cljs.core.cst$kw$_STAR_current_DASH_item_DASH_id,_STAR_current_selection_id,cljs.core.cst$kw$group_DASH_heading_DASH_selected_QMARK_,cljs.core.deref(_STAR_selection_group_heading_selected_QMARK_),cljs.core.cst$kw$click_DASH_callback,selection_click,cljs.core.cst$kw$double_DASH_click_DASH_callback,exclude_click,cljs.core.cst$kw$filter_DASH_choices_DASH_text,cljs.core.deref(_STAR_filter_selections_text)], null),(cljs.core.truth_(filter_box_QMARK___$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,656], null)),cljs.core.cst$kw$size,"4px"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.filter_text_box,_STAR_filter_selections_text,placeholder,_STAR_warning_message,disabled_QMARK___$1,parts], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,660], null)),cljs.core.cst$kw$size,"4px"], null),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_selections_text)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,664], null)),cljs.core.cst$kw$label,goog.string.unescapeEntities("&nbsp;"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"smaller"], null)], null):new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/ABDDE3F/re_com/multi_select.cljs",cljs.core.cst$kw$line,668], null)),cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Found ",re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(filtered_selections),"match",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["matches"], 0))," containing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,cljs.core.deref(_STAR_filter_selections_text)], null)], null),cljs.core.cst$kw$class,["rc-multi-select-right-filter-result-count ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"smaller"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_filter_DASH_result_DASH_count,cljs.core.cst$kw$attr], null))], null))], null):null)], null)], null)], null)], null)], null);
}
};
var re_com$multi_select$multi_select_render = function (var_args){
var p__8091 = null;
if (arguments.length > 0) {
var G__8106__i = 0, G__8106__a = new Array(arguments.length -  0);
while (G__8106__i < G__8106__a.length) {G__8106__a[G__8106__i] = arguments[G__8106__i + 0]; ++G__8106__i;}
  p__8091 = new cljs.core.IndexedSeq(G__8106__a,0,null);
} 
return re_com$multi_select$multi_select_render__delegate.call(this,p__8091);};
re_com$multi_select$multi_select_render.cljs$lang$maxFixedArity = 0;
re_com$multi_select$multi_select_render.cljs$lang$applyTo = (function (arglist__8107){
var p__8091 = cljs.core.seq(arglist__8107);
return re_com$multi_select$multi_select_render__delegate(p__8091);
});
re_com$multi_select$multi_select_render.cljs$core$IFn$_invoke$arity$variadic = re_com$multi_select$multi_select_render__delegate;
return re_com$multi_select$multi_select_render;
})()
;
}
}));

(re_com.multi_select.multi_select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.multi_select.multi_select.cljs$lang$applyTo = (function (seq8088){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8088));
}));

