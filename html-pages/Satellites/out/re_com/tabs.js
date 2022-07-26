// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('reagent.core');
re_com.tabs.horizontal_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-tabs",cljs.core.cst$kw$impl,"[:ul]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-tab",cljs.core.cst$kw$impl,"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$anchor,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tab-anchor",cljs.core.cst$kw$impl,"[:a]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.horizontal_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.horizontal_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id | r/atom",cljs.core.cst$kw$description,"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tabs,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of tabs | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"tab -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.tabs.horizontal_tabs_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12369 = arguments.length;
var i__4830__auto___12370 = (0);
while(true){
if((i__4830__auto___12370 < len__4829__auto___12369)){
args__4835__auto__.push((arguments[i__4830__auto___12370]));

var G__12371 = (i__4830__auto___12370 + (1));
i__4830__auto___12370 = G__12371;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12363){
var map__12364 = p__12363;
var map__12364__$1 = cljs.core.__destructure_map(map__12364);
var args = map__12364__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12364__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.cst$kw$parts);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12364__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.cst$kw$class);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.horizontal_tabs_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12361_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__12361_SHARP_) : id_fn.call(null,p1__12361_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__12361#] (= current (id-fn p1__12361#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["nav nav-tabs noselect rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__4622__auto__ = (function re_com$tabs$iter__12365(s__12366){
return (new cljs.core.LazySeq(null,(function (){
var s__12366__$1 = s__12366;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12366__$1);
if(temp__5753__auto__){
var s__12366__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12366__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12366__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12368 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12367 = (0);
while(true){
if((i__12367 < size__4621__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12367);
cljs.core.chunk_append(b__12368,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__12367,id,label,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12368,s__12366__$2,temp__5753__auto__,current,tabs__$1,_,or__4223__auto__,map__12364,map__12364__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__12367,id,label,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12368,s__12366__$2,temp__5753__auto__,current,tabs__$1,_,or__4223__auto__,map__12364,map__12364__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})());

var G__12372 = (i__12367 + (1));
i__12367 = G__12372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12368),re_com$tabs$iter__12365(cljs.core.chunk_rest(s__12366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12368),null);
}
} else {
var t = cljs.core.first(s__12366__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__12366__$2,temp__5753__auto__,current,tabs__$1,_,or__4223__auto__,map__12364,map__12364__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__12366__$2,temp__5753__auto__,current,tabs__$1,_,or__4223__auto__,map__12364,map__12364__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__12365(cljs.core.rest(s__12366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(tabs__$1);
})()], null);
}
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq12362){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12362));
}));

re_com.tabs.bar_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-tabs",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-tabs-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$button,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tabs-btn",cljs.core.cst$kw$impl,"[:button]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.bar_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.bar_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__12373_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parts,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__12373_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[horizontal-bar-tabs only] given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its tooltip"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[horizontal-bar-tabs only] relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$validate_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Validate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," against ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.tabs.bar_tabs_parts),cljs.core.cst$kw$description,"See Parts section below."], null)], 0)):null);
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12385 = arguments.length;
var i__4830__auto___12386 = (0);
while(true){
if((i__4830__auto___12386 < len__4829__auto___12385)){
args__4835__auto__.push((arguments[i__4830__auto___12386]));

var G__12387 = (i__4830__auto___12386 + (1));
i__4830__auto___12386 = G__12387;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12377){
var map__12378 = p__12377;
var map__12378__$1 = cljs.core.__destructure_map(map__12378);
var args = map__12378__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$parts);
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$tooltip_DASH_fn);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$vertical_QMARK_);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12378__$1,cljs.core.cst$kw$tooltip_DASH_position);
var showing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__12388__delegate = function (p__12379){
var map__12380 = p__12379;
var map__12380__$1 = cljs.core.__destructure_map(map__12380);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12380__$1,cljs.core.cst$kw$model);
var tabs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12380__$1,cljs.core.cst$kw$tabs);
var current = re_com.util.deref_or_value(model__$1);
var tabs__$2 = re_com.util.deref_or_value(tabs__$1);
var _ = (cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not(validate_QMARK_);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12374_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__12374_SHARP_) : id_fn.call(null,p1__12374_SHARP_)));
}),tabs__$2));
}
})())?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(or (not validate?) (not-empty (filter (fn* [p1__12374#] (= current (id-fn p1__12374#))) tabs)))"].join('')))})());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0))], null),(function (){var iter__4622__auto__ = (function re_com$tabs$iter__12381(s__12382){
return (new cljs.core.LazySeq(null,(function (){
var s__12382__$1 = s__12382;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12382__$1);
if(temp__5753__auto__){
var s__12382__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12382__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12382__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12384 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12383 = (0);
while(true){
if((i__12383 < size__4621__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12383);
cljs.core.chunk_append(b__12384,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,((function (i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__12375_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__12375_SHARP_)){
return null;
} else {
return p1__12375_SHARP_;
}
});})(i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(i__12383,id,label,tooltip,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$attr], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/18C9E3D/re_com/tabs.cljs",cljs.core.cst$kw$line,141], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4223__auto__ = tooltip_position;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,reagent.core.track(((function (i__12383,id,label,tooltip,selected_QMARK_,the_button,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(i__12383,id,label,tooltip,selected_QMARK_,the_button,t,c__4620__auto__,size__4621__auto__,b__12384,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null);
} else {
return the_button;
}
})());

var G__12389 = (i__12383 + (1));
i__12383 = G__12389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12384),re_com$tabs$iter__12381(cljs.core.chunk_rest(s__12382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12384),null);
}
} else {
var t = cljs.core.first(s__12382__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,tooltip,selected_QMARK_,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (id,label,tooltip,selected_QMARK_,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (id,label,tooltip,selected_QMARK_,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,(function (p1__12375_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__12375_SHARP_)){
return null;
} else {
return p1__12375_SHARP_;
}
}));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$attr], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/18C9E3D/re_com/tabs.cljs",cljs.core.cst$kw$line,141], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4223__auto__ = tooltip_position;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,reagent.core.track(((function (id,label,tooltip,selected_QMARK_,the_button,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(id,label,tooltip,selected_QMARK_,the_button,t,s__12382__$2,temp__5753__auto__,current,tabs__$2,_,map__12380,map__12380__$1,model__$1,tabs__$1,showing,map__12378,map__12378__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null);
} else {
return the_button;
}
})(),re_com$tabs$iter__12381(cljs.core.rest(s__12382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(tabs__$2);
})());
};
var G__12388 = function (var_args){
var p__12379 = null;
if (arguments.length > 0) {
var G__12390__i = 0, G__12390__a = new Array(arguments.length -  0);
while (G__12390__i < G__12390__a.length) {G__12390__a[G__12390__i] = arguments[G__12390__i + 0]; ++G__12390__i;}
  p__12379 = new cljs.core.IndexedSeq(G__12390__a,0,null);
} 
return G__12388__delegate.call(this,p__12379);};
G__12388.cljs$lang$maxFixedArity = 0;
G__12388.cljs$lang$applyTo = (function (arglist__12391){
var p__12379 = cljs.core.seq(arglist__12391);
return G__12388__delegate(p__12379);
});
G__12388.cljs$core$IFn$_invoke$arity$variadic = G__12388__delegate;
return G__12388;
})()
;
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq12376){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12376));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12395 = arguments.length;
var i__4830__auto___12396 = (0);
while(true){
if((i__4830__auto___12396 < len__4829__auto___12395)){
args__4835__auto__.push((arguments[i__4830__auto___12396]));

var G__12397 = (i__4830__auto___12396 + (1));
i__4830__auto___12396 = G__12397;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12393){
var map__12394 = p__12393;
var map__12394__$1 = cljs.core.__destructure_map(map__12394);
var args = map__12394__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12394__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$parts);
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12394__$1,cljs.core.cst$kw$tooltip_DASH_fn,cljs.core.cst$kw$tooltip);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12394__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,cljs.core.cst$kw$tooltip_DASH_position);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$tooltip_DASH_fn,tooltip_fn,cljs.core.cst$kw$tooltip_DASH_position,tooltip_position,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as,cljs.core.cst$kw$validate_QMARK_,validate_QMARK_], 0));
}
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq12392){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12392));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12401 = arguments.length;
var i__4830__auto___12402 = (0);
while(true){
if((i__4830__auto___12402 < len__4829__auto___12401)){
args__4835__auto__.push((arguments[i__4830__auto___12402]));

var G__12403 = (i__4830__auto___12402 + (1));
i__4830__auto___12402 = G__12403;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12399){
var map__12400 = p__12399;
var map__12400__$1 = cljs.core.__destructure_map(map__12400);
var args = map__12400__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12400__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12400__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400__$1,cljs.core.cst$kw$class);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as,cljs.core.cst$kw$validate_QMARK_,validate_QMARK_], 0));
}
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq12398){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12398));
}));

re_com.tabs.pill_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-tabs",cljs.core.cst$kw$impl,"[:ul]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-tabs-pill",cljs.core.cst$kw$impl,"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$anchor,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tabs-anchor",cljs.core.cst$kw$impl,"[:a]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.pill_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.pill_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__12404_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parts,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__12404_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.tabs.pill_tabs_parts),cljs.core.cst$kw$description,"See Parts section below."], null)):null);
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12413 = arguments.length;
var i__4830__auto___12414 = (0);
while(true){
if((i__4830__auto___12414 < len__4829__auto___12413)){
args__4835__auto__.push((arguments[i__4830__auto___12414]));

var G__12415 = (i__4830__auto___12414 + (1));
i__4830__auto___12414 = G__12415;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12407){
var map__12408 = p__12407;
var map__12408__$1 = cljs.core.__destructure_map(map__12408);
var args = map__12408__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12408__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12405_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__12405_SHARP_) : id_fn.call(null,p1__12405_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__12405#] (= current (id-fn p1__12405#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$role,"tabslist"], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__4622__auto__ = (function re_com$tabs$iter__12409(s__12410){
return (new cljs.core.LazySeq(null,(function (){
var s__12410__$1 = s__12410;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12410__$1);
if(temp__5753__auto__){
var s__12410__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12410__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12410__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12412 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12411 = (0);
while(true){
if((i__12411 < size__4621__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12411);
cljs.core.chunk_append(b__12412,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__12411,id,label,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12412,s__12410__$2,temp__5753__auto__,current,tabs__$1,_,map__12408,map__12408__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__12411,id,label,selected_QMARK_,t,c__4620__auto__,size__4621__auto__,b__12412,s__12410__$2,temp__5753__auto__,current,tabs__$1,_,map__12408,map__12408__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})());

var G__12416 = (i__12411 + (1));
i__12411 = G__12416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12412),re_com$tabs$iter__12409(cljs.core.chunk_rest(s__12410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12412),null);
}
} else {
var t = cljs.core.first(s__12410__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__12410__$2,temp__5753__auto__,current,tabs__$1,_,map__12408,map__12408__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__12410__$2,temp__5753__auto__,current,tabs__$1,_,map__12408,map__12408__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__12409(cljs.core.rest(s__12410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq12406){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12406));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12420 = arguments.length;
var i__4830__auto___12421 = (0);
while(true){
if((i__4830__auto___12421 < len__4829__auto___12420)){
args__4835__auto__.push((arguments[i__4830__auto___12421]));

var G__12422 = (i__4830__auto___12421 + (1));
i__4830__auto___12421 = G__12422;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12418){
var map__12419 = p__12418;
var map__12419__$1 = cljs.core.__destructure_map(map__12419);
var args = map__12419__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12419__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12419__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,cljs.core.cst$kw$class);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as], 0));
}
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq12417){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12417));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12426 = arguments.length;
var i__4830__auto___12427 = (0);
while(true){
if((i__4830__auto___12427 < len__4829__auto___12426)){
args__4835__auto__.push((arguments[i__4830__auto___12427]));

var G__12428 = (i__4830__auto___12427 + (1));
i__4830__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__12424){
var map__12425 = p__12424;
var map__12425__$1 = cljs.core.__destructure_map(map__12425);
var args = map__12425__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12425__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12425__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.cst$kw$class);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as], 0));
}
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq12423){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12423));
}));

