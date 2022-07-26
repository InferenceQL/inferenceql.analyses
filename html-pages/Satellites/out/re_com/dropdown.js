// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.dom');
/**
 * In a vector of maps (where each map has an :id), return the id of the choice offset posititions away
 * from id (usually +1 or -1 to go to next/previous). Also accepts :start and :end
 */
re_com.dropdown.move_to_new_choice = (function re_com$dropdown$move_to_new_choice(choices,id_fn,id,offset){
var current_index = re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(id,choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn,id_fn], 0));
var new_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,cljs.core.cst$kw$start))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,cljs.core.cst$kw$end))?(cljs.core.count(choices) - (1)):(((current_index == null))?(0):cljs.core.mod((current_index + offset),cljs.core.count(choices))
)));
if(cljs.core.truth_((function (){var and__4221__auto__ = new_index;
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.count(choices) > (0));
} else {
return and__4221__auto__;
}
})())){
var G__12913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(choices,new_index);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__12913) : id_fn.call(null,G__12913));
} else {
return null;
}
});
/**
 * If necessary, inserts group headings entries into the choices
 */
re_com.dropdown.choices_with_group_headings = (function re_com$dropdown$choices_with_group_headings(opts,group_fn){
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(group_fn,opts);
var group_headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12914_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$group],[cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),p1__12914_SHARP_]);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(group_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,groups)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of choices based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.dropdown.filter_choices = (function re_com$dropdown$filter_choices(choices,group_fn,label_fn,filter_text){
var lower_filter_text = clojure.string.lower_case(filter_text);
var filter_fn = (function (opt){
var group = ((((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)) == null))?"":(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
var label = cljs.core.str.cljs$core$IFn$_invoke$arity$1((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
return (((clojure.string.lower_case(group).indexOf(lower_filter_text) >= (0))) || ((clojure.string.lower_case(label).indexOf(lower_filter_text) >= (0))));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.dropdown.filter_choices_regex = (function re_com$dropdown$filter_choices_regex(choices,group_fn,label_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e12915){if((e12915 instanceof Object)){
var e = e12915;
return null;
} else {
throw e12915;

}
}})();
var filter_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (re__$1,opt){
if((re__$1 == null)){
return null;
} else {
var or__4223__auto__ = re__$1.test((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re__$1.test((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
}
}
}),re);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices extra data within the choices vector
 */
re_com.dropdown.filter_choices_by_keyword = (function re_com$dropdown$filter_choices_by_keyword(choices,keyword,value){
var filter_fn = (function (opt){
return ((keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(opt) : keyword.call(null,opt)).indexOf(value) >= (0));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Return text after insertion in place of selection
 */
re_com.dropdown.insert = (function re_com$dropdown$insert(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12919 = arguments.length;
var i__4830__auto___12920 = (0);
while(true){
if((i__4830__auto___12920 < len__4829__auto___12919)){
args__4835__auto__.push((arguments[i__4830__auto___12920]));

var G__12921 = (i__4830__auto___12920 + (1));
i__4830__auto___12920 = G__12921;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic = (function (p__12917){
var map__12918 = p__12917;
var map__12918__$1 = cljs.core.__destructure_map(map__12918);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12918__$1,cljs.core.cst$kw$text);
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12918__$1,cljs.core.cst$kw$sel_DASH_start);
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12918__$1,cljs.core.cst$kw$sel_DASH_end);
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12918__$1,cljs.core.cst$kw$ins);
return [(cljs.core.truth_(text)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),sel_start):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ins),(cljs.core.truth_(text)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,sel_end):null)].join('');
}));

(re_com.dropdown.insert.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.dropdown.insert.cljs$lang$applyTo = (function (seq12916){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12916));
}));

/**
 * Return text/selection map after insertion in place of selection & completion
 */
re_com.dropdown.auto_complete = (function re_com$dropdown$auto_complete(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12926 = arguments.length;
var i__4830__auto___12927 = (0);
while(true){
if((i__4830__auto___12927 < len__4829__auto___12926)){
args__4835__auto__.push((arguments[i__4830__auto___12927]));

var G__12928 = (i__4830__auto___12927 + (1));
i__4830__auto___12927 = G__12928;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.dropdown.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (p__12924){
var map__12925 = p__12924;
var map__12925__$1 = cljs.core.__destructure_map(map__12925);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12925__$1,cljs.core.cst$kw$choices);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12925__$1,cljs.core.cst$kw$text);
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12925__$1,cljs.core.cst$kw$sel_DASH_start);
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12925__$1,cljs.core.cst$kw$sel_DASH_end);
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12925__$1,cljs.core.cst$kw$ins);
var text_SINGLEQUOTE_ = re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,text,cljs.core.cst$kw$sel_DASH_start,sel_start,cljs.core.cst$kw$sel_DASH_end,sel_end,cljs.core.cst$kw$ins,ins], 0));
var find = (function (p1__12922_SHARP_){
return goog.string.caseInsensitiveStartsWith(p1__12922_SHARP_,text_SINGLEQUOTE_);
});
var ret = (function (){var temp__5753__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(find,choices));
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var choice = cljs.core.first(xs__6308__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,[text_SINGLEQUOTE_,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(choice,((text_SINGLEQUOTE_).length))].join(''),cljs.core.cst$kw$sel_DASH_start,(sel_start + cljs.core.count(ins)),cljs.core.cst$kw$sel_DASH_end,cljs.core.count(choice)], null);
} else {
return null;
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sel_DASH_start.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.cst$kw$sel_DASH_end.cljs$core$IFn$_invoke$arity$1(ret))) && (cljs.core.seq(ins)))){
return ret;
} else {
return null;
}
}));

(re_com.dropdown.auto_complete.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.dropdown.auto_complete.cljs$lang$applyTo = (function (seq12923){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12923));
}));

/**
 * Capitalize the first letter leaving the rest as is
 */
re_com.dropdown.capitalize_first_letter = (function re_com$dropdown$capitalize_first_letter(text){
if(cljs.core.seq(text)){
return [clojure.string.upper_case(cljs.core.first(text)),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1))].join('');
} else {
return text;
}
});
re_com.dropdown.show_selected_item = (function re_com$dropdown$show_selected_item(node){
var item_offset_top = node.offsetTop;
var item_offset_bottom = (item_offset_top + node.clientHeight);
var parent = node.parentNode;
var parent_height = parent.clientHeight;
var parent_visible_top = parent.scrollTop;
var parent_visible_bottom = (parent_visible_top + parent_height);
var new_scroll_top = (((item_offset_bottom > parent_visible_bottom))?(function (){var x__4306__auto__ = (item_offset_bottom - parent_height);
var y__4307__auto__ = (0);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})():(((item_offset_top < parent_visible_top))?item_offset_top:null));
if(cljs.core.truth_(new_scroll_top)){
return (parent.scrollTop = new_scroll_top);
} else {
return null;
}
});
/**
 * Render a group heading
 */
re_com.dropdown.make_group_heading = (function re_com$dropdown$make_group_heading(m){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$group_DASH_result,cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(m)], null));
});
/**
 * Render a choice item and set up appropriate mouse events
 */
re_com.dropdown.choice_item = (function re_com$dropdown$choice_item(id,label,on_click,internal_model){
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
var node = reagent.dom.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$){
var node = reagent.dom.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
}),cljs.core.cst$kw$display_DASH_name,"choice-item",cljs.core.cst$kw$reagent_DASH_render,(function (id__$1,label__$1,on_click__$1,internal_model__$1){
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model__$1),id__$1);
var class$ = ((selected)?"highlighted":(cljs.core.truth_(cljs.core.deref(mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["active-result group-option ",class$].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
(on_click__$1.cljs$core$IFn$_invoke$arity$1 ? on_click__$1.cljs$core$IFn$_invoke$arity$1(id__$1) : on_click__$1.call(null,id__$1));

event.preventDefault();

return null;
})], null),label__$1], null);
})], null));
});
re_com.dropdown.make_choice_item = (function re_com$dropdown$make_choice_item(id_fn,render_fn,callback,internal_model,opt){
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(opt) : id_fn.call(null,opt));
var markup = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(opt) : render_fn.call(null,opt));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.choice_item,id,markup,callback,internal_model], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null));
});
/**
 * Base function (before lifecycle metadata) to render a filter text box
 */
re_com.dropdown.filter_text_box_base = (function re_com$dropdown$filter_text_box_base(filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,set_filter_text,filter_placeholder){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$chosen_DASH_search,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$auto_DASH_complete,"off",cljs.core.cst$kw$style,(cljs.core.truth_(filter_box_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"0px",cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$border,"none"], null)),cljs.core.cst$kw$value,cljs.core.deref(filter_text),cljs.core.cst$kw$placeholder,filter_placeholder,cljs.core.cst$kw$on_DASH_change,(function (event){
var G__12929_12930 = event.target.value;
(set_filter_text.cljs$core$IFn$_invoke$arity$1 ? set_filter_text.cljs$core$IFn$_invoke$arity$1(G__12929_12930) : set_filter_text.call(null,G__12929_12930));

return null;
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.stopPropagation();

event.preventDefault();
}

return null;
}),cljs.core.cst$kw$on_DASH_blur,(function (event){
cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return null;
})], null)], null)], null);
});
/**
 * Render a filter text box
 */
re_com.dropdown.filter_text_box = cljs.core.with_meta(re_com.dropdown.filter_text_box_base,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__12931_SHARP_){
var node = reagent.dom.dom_node(p1__12931_SHARP_).firstChild;
return node.focus();
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (p1__12932_SHARP_){
var node = reagent.dom.dom_node(p1__12932_SHARP_).firstChild;
return node.focus();
})], null));
/**
 * Render the top part of the dropdown, with the clickable area and the up/down arrow
 */
re_com.dropdown.dropdown_top = (function re_com$dropdown$dropdown_top(){
var ignore_click = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (internal_model,choices,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_,disabled_QMARK_){
var _ = reagent.core.set_state(reagent.core.current_component(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter_DASH_box_QMARK_,filter_box_QMARK_], null));
var text = (cljs.core.truth_(cljs.core.deref(internal_model))?(function (){var G__12933 = re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(internal_model),choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn,id_fn], 0));
return (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(G__12933) : label_fn.call(null,G__12933));
})():placeholder);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$chosen_DASH_single$chosen_DASH_default,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#EEE"], null):null),cljs.core.cst$kw$tab_DASH_index,(function (){var or__4223__auto__ = tab_index;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(cljs.core.deref(ignore_click))){
cljs.core.reset_BANG_(ignore_click,false);
} else {
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));
}

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (event){
(key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.which,(13))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(title_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,text], null):null),text], null),((cljs.core.not(disabled_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)], null):null)], null);
});
});
re_com.dropdown.handle_free_text_insertion = (function re_com$dropdown$handle_free_text_insertion(event,ins,auto_complete_QMARK_,capitalize_QMARK_,choices,internal_model,free_text_sel_range,free_text_change){
var input = event.target;
var input_sel_start = input.selectionStart;
var input_sel_end = input.selectionEnd;
var ins_SINGLEQUOTE_ = (function (){var G__12934 = ins;
if(cljs.core.truth_((function (){var and__4221__auto__ = capitalize_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return (input_sel_start === (0));
} else {
return and__4221__auto__;
}
})())){
return re_com.dropdown.capitalize_first_letter(G__12934);
} else {
return G__12934;
}
})();
var auto_complete_ret = (function (){var and__4221__auto__ = auto_complete_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return re_com.dropdown.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$choices,choices,cljs.core.cst$kw$text,cljs.core.deref(internal_model),cljs.core.cst$kw$sel_DASH_start,input_sel_start,cljs.core.cst$kw$sel_DASH_end,input_sel_end,cljs.core.cst$kw$ins,ins_SINGLEQUOTE_], 0));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(auto_complete_ret)){
var map__12935 = auto_complete_ret;
var map__12935__$1 = cljs.core.__destructure_map(map__12935);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,cljs.core.cst$kw$text);
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,cljs.core.cst$kw$sel_DASH_start);
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,cljs.core.cst$kw$sel_DASH_end);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),text)){
input.setSelectionRange(sel_start,sel_end);
} else {
cljs.core.reset_BANG_(free_text_sel_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sel_start,sel_end], null));

(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(text) : free_text_change.call(null,text));
}

return event.preventDefault();
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ins,ins_SINGLEQUOTE_)){
cljs.core.reset_BANG_(free_text_sel_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(input_sel_start + cljs.core.count(ins)),(input_sel_start + cljs.core.count(ins))], null));

var G__12936_12937 = re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,cljs.core.deref(internal_model),cljs.core.cst$kw$sel_DASH_start,input_sel_start,cljs.core.cst$kw$sel_DASH_end,input_sel_end,cljs.core.cst$kw$ins,ins_SINGLEQUOTE_], 0));
(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(G__12936_12937) : free_text_change.call(null,G__12936_12937));

return event.preventDefault();
} else {
return null;
}
}
});
/**
 * Base function (before lifecycle metadata) to render the top part of the dropdown (free-text), with the editable area and the up/down arrow
 */
re_com.dropdown.free_text_dropdown_top_base = (function re_com$dropdown$free_text_dropdown_top_base(free_text_input,select_free_text_QMARK_,free_text_focused_QMARK_,free_text_sel_range,internal_model,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,cancel,width,free_text_change,auto_complete_QMARK_,choices,capitalize_QMARK_,disabled_QMARK_){
console.log("disabled? ",disabled_QMARK_);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$chosen_DASH_choices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$search_DASH_field,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$free_DASH_text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#EEE"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$tab_DASH_index,cljs.core.cst$kw$on_DASH_key_DASH_press,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$ref,cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$on_DASH_paste,cljs.core.cst$kw$style,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$on_DASH_key_DASH_down],["off",tab_index,(function (event){
var ins_12941 = event.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ins_12941),(1))){
re_com.dropdown.handle_free_text_insertion(event,ins_12941,auto_complete_QMARK_,capitalize_QMARK_,choices,internal_model,free_text_sel_range,free_text_change);
} else {
}

return null;
}),placeholder,disabled_QMARK_,(function (p1__12938_SHARP_){
return cljs.core.reset_BANG_(free_text_input,p1__12938_SHARP_);
}),(function (event){
cljs.core.reset_BANG_(free_text_focused_QMARK_,true);

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

return null;
}),cljs.core.deref(internal_model),(function (event){
if(cljs.core.truth_(filter_box_QMARK_)){
} else {
(cancel.cljs$core$IFn$_invoke$arity$0 ? cancel.cljs$core$IFn$_invoke$arity$0() : cancel.call(null));
}

cljs.core.reset_BANG_(free_text_focused_QMARK_,false);

return null;
}),"text",(function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
(cancel.cljs$core$IFn$_invoke$arity$0 ? cancel.cljs$core$IFn$_invoke$arity$0() : cancel.call(null));

event.preventDefault();
} else {
}

return null;
}),(function (event){
var ins_12942 = event.clipboardData.getData("Text");
re_com.dropdown.handle_free_text_insertion(event,ins_12942,auto_complete_QMARK_,capitalize_QMARK_,choices,internal_model,free_text_sel_range,free_text_change);

return null;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),"form-control",(function (event){
var value_12943 = event.target.value;
var G__12939_12944 = (function (){var G__12940 = value_12943;
if(cljs.core.truth_(capitalize_QMARK_)){
return re_com.dropdown.capitalize_first_letter(G__12940);
} else {
return G__12940;
}
})();
(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(G__12939_12944) : free_text_change.call(null,G__12939_12944));

return null;
}),(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.stopPropagation();

event.preventDefault();
}

return null;
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$b_DASH_wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));

if(cljs.core.truth_(cljs.core.deref(free_text_focused_QMARK_))){
event.preventDefault();
} else {
}

return null;
})], null),((cljs.core.not(disabled_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null):null)], null)], null)], null)], null);
});
/**
 * Render the top part of the dropdown (free-text), with the editable area and the up/down arrow
 */
re_com.dropdown.free_text_dropdown_top = cljs.core.with_meta(re_com.dropdown.free_text_dropdown_top_base,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_update,(function (p1__12945_SHARP_){
var vec__12946 = reagent.core.argv(p1__12945_SHARP_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12946,(0),null);
var free_text_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12946,(1),null);
var select_free_text_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12946,(2),null);
var free_text_focused_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12946,(3),null);
var free_text_sel_range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12946,(4),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(free_text_input);
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = cljs.core.deref(select_free_text_QMARK_);
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.deref(free_text_focused_QMARK_);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
cljs.core.deref(free_text_input).select();
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(free_text_input);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(free_text_sel_range);
} else {
return and__4221__auto__;
}
})())){
cljs.core.deref(free_text_input).setSelectionRange(cljs.core.first(cljs.core.deref(free_text_sel_range)),cljs.core.second(cljs.core.deref(free_text_sel_range)));

return cljs.core.reset_BANG_(free_text_sel_range,null);
} else {
return null;
}
})], null));
re_com.dropdown.fn_or_vector_of_maps_or_strings_QMARK_ = (function re_com$dropdown$fn_or_vector_of_maps_or_strings_QMARK_(v){
return ((cljs.core.fn_QMARK_(v)) || (((re_com.validate.vector_of_maps_QMARK_(v)) || (((cljs.core.sequential_QMARK_(v)) && (((cljs.core.empty_QMARK_(v)) || (typeof cljs.core.first(v) === 'string'))))))));
});
/**
 * Load choices if choices is callback.
 */
re_com.dropdown.load_choices_STAR_ = (function re_com$dropdown$load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_){
var id = (cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)) + (1));
var callback = (function (p__12951){
var map__12952 = p__12951;
var map__12952__$1 = cljs.core.__destructure_map(map__12952);
var args = map__12952__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12952__$1,cljs.core.cst$kw$result);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12952__$1,cljs.core.cst$kw$error);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error,error,cljs.core.cst$kw$choices,result], 0));
} else {
return null;
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error,null,cljs.core.cst$kw$id,id,cljs.core.cst$kw$timer,null], 0));

var G__12953 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$filter_DASH_text,text,cljs.core.cst$kw$regex_DASH_filter_QMARK_,regex_filter_QMARK_], null);
var G__12954 = (function (p1__12949_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,p1__12949_SHARP_], null));
});
var G__12955 = (function (p1__12950_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,p1__12950_SHARP_], null));
});
return (choices.cljs$core$IFn$_invoke$arity$3 ? choices.cljs$core$IFn$_invoke$arity$3(G__12953,G__12954,G__12955) : choices.call(null,G__12953,G__12954,G__12955));
});
/**
 * Load choices or schedule lodaing depending on debounce?
 */
re_com.dropdown.load_choices = (function re_com$dropdown$load_choices(choices_state,choices,debounce_delay,text,regex_filter_QMARK_,debounce_QMARK_){
if(cljs.core.fn_QMARK_(choices)){
var temp__5753__auto___12956 = cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
if(cljs.core.truth_(temp__5753__auto___12956)){
var timer_12957 = temp__5753__auto___12956;
clearTimeout(timer_12957);
} else {
}

if(cljs.core.truth_(debounce_QMARK_)){
var timer = setTimeout((function (){
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}),debounce_delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(choices_state,cljs.core.assoc,cljs.core.cst$kw$timer,timer);
} else {
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}
} else {
return null;
}
});
re_com.dropdown.single_dropdown_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-dropdown-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Tooltip for the dropdown, if enabled."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-dropdown",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The container for the rest of the dropdown."], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$chosen_DASH_drop,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-dropdown-chosen-drop",cljs.core.cst$kw$impl,"[:div]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$chosen_DASH_results,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-dropdown-chosen-results",cljs.core.cst$kw$impl,"[:ul]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices_DASH_loading,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-dropdown-choices-loading",cljs.core.cst$kw$impl,"[:li]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices_DASH_error,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-dropdown-choices-error",cljs.core.cst$kw$impl,"[:li]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices_DASH_no_DASH_results,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-dropdown-choices-no-results",cljs.core.cst$kw$impl,"[:li]"], null)], null):null);
re_com.dropdown.single_dropdown_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.dropdown.single_dropdown_parts_desc)):null);
re_com.dropdown.single_dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of choices | r/atom | (opts, done, fail) -> nil",cljs.core.cst$kw$validate_DASH_fn,re_com.dropdown.fn_or_vector_of_maps_or_strings_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Each is expected to have an id, label and, optionally, a group, provided by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":group-fn"], null),". May also be a callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"(opts, done, fail)"], null)," where opts is map of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":filter-text"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":regex-filter?."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"the id of a choice | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the id of the selected choice. If nil, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":placeholder"], null)," text is shown"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when a new choice is selected. Passed the id of new choice"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"choice -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its displayable label."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$group,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its group identifier"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"choice -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns the markup that will be rendered for that choice. Defaults to the label if no custom markup is required."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_box_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, a filter text field is placed at the top of the dropdown"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$regex_DASH_filter_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, the filter text field will support JavaScript regular expressions. If false, just plain text"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text when no selection"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$title_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, allows the title for the selected dropdown to be displayed via a mouse over. Handy when dropdown width is small and text is truncated"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"100%",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the CSS width. e.g.: \"500px\" or \"20em\""], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"240px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the maximum height of the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab_DASH_index,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(0),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"component's tabindex. A value of -1 removes from order"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"delay to debounce loading requests when using callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$free_DASH_text_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"is the text freely editable? If true then ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":chocies"], null)," is a vector of strings, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," is a string (atom) and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," is called with a string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$auto_DASH_complete_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"auto-complete text while typing using dropdown choices. Has no effect if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":free-text?"], null)," is not turned on"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$capitalize_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"capitalize the first letter. Has no effect if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":free-text?"], null)," is not turned on"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$enter_DASH_drop_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"should pressing Enter display the dropdown part?"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$cancelable_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"should pressing Esc or clicking outside the dropdown part cancel selection made with arrow keys?"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$set_DASH_to_DASH_filter,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$type,"set",cljs.core.cst$kw$validate_DASH_fn,cljs.core.set_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":filter-box?"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":free-text?"], null)," are turned on and there are no results, current text can be set to filter text ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-enter-press"], null)," and/or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-no-results-match-click"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text in filter box when no filter"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$can_DASH_drop_DASH_above_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"should the dropdown part be displayed above if it does not fit below the top part?"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$est_DASH_item_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(30),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"estimated dropdown item height (for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":can-drop-above?"], null),"). used only *before* the dropdown part is displayed to guess whether it fits below the top part or not which is later verified when the dropdown is displayed"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$just_DASH_drop_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"display just the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$repeat_DASH_change_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"repeat ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," events if an already selected item is selected again"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$i18n,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"internationalization map with optional keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":loading"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":no-results"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":no-results-match"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_drop,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"() -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when the dropdown part is displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.dropdown.single_dropdown_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], true):null);
/**
 * Render a single dropdown component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 *    {:id "US" :label "United States"  :group "Group 1"}
 *    {:id "GB" :label "United Kingdom" :group "Group 1"}
 *    {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.dropdown.single_dropdown = (function re_com$dropdown$single_dropdown(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12986 = arguments.length;
var i__4830__auto___12987 = (0);
while(true){
if((i__4830__auto___12987 < len__4829__auto___12986)){
args__4835__auto__.push((arguments[i__4830__auto___12987]));

var G__12988 = (i__4830__auto___12987 + (1));
i__4830__auto___12987 = G__12988;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__12969){
var map__12970 = p__12969;
var map__12970__$1 = cljs.core.__destructure_map(map__12970);
var args = map__12970__$1;
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12970__$1,cljs.core.cst$kw$choices);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12970__$1,cljs.core.cst$kw$model);
var regex_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12970__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12970__$1,cljs.core.cst$kw$debounce_DASH_delay,(250));
var just_drop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12970__$1,cljs.core.cst$kw$just_DASH_drop_QMARK_);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var drop_showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(just_drop_QMARK_));
var filter_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var choices_fn_QMARK_ = cljs.core.fn_QMARK_(choices);
var choices_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$loading_QMARK_,choices_fn_QMARK_,cljs.core.cst$kw$error,null,cljs.core.cst$kw$choices,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$id,(0),cljs.core.cst$kw$timer,null], null));
var load_choices = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_com.dropdown.load_choices,choices_state,choices,debounce_delay);
var set_filter_text = (function (text,p__12971,debounce_QMARK_){
var map__12972 = p__12971;
var map__12972__$1 = cljs.core.__destructure_map(map__12972);
var args__$1 = map__12972__$1;
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12972__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
(load_choices.cljs$core$IFn$_invoke$arity$3 ? load_choices.cljs$core$IFn$_invoke$arity$3(text,regex_filter_QMARK___$1,debounce_QMARK_) : load_choices.call(null,text,regex_filter_QMARK___$1,debounce_QMARK_));

return cljs.core.reset_BANG_(filter_text,text);
});
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var showing_QMARK_ = reagent.core.track((function (){
var and__4221__auto__ = cljs.core.not(cljs.core.deref(drop_showing_QMARK_));
if(and__4221__auto__){
return cljs.core.deref(over_QMARK_);
} else {
return and__4221__auto__;
}
}));
var free_text_focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var free_text_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var select_free_text_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var free_text_sel_range = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_free_text = (function (){
if(cljs.core.truth_(cljs.core.deref(free_text_input))){
return cljs.core.deref(free_text_input).focus();
} else {
return null;
}
});
var node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_anchor = (function (){
var G__12973 = cljs.core.deref(node);
var G__12973__$1 = (((G__12973 == null))?null:G__12973.getElementsByClassName("chosen-single"));
var G__12973__$2 = (((G__12973__$1 == null))?null:G__12973__$1.item((0)));
if((G__12973__$2 == null)){
return null;
} else {
return G__12973__$2.focus();
}
});
(load_choices.cljs$core$IFn$_invoke$arity$3 ? load_choices.cljs$core$IFn$_invoke$arity$3("",regex_filter_QMARK_,false) : load_choices.call(null,"",regex_filter_QMARK_,false));

return (function() { 
var re_com$dropdown$single_dropdown_render__delegate = function (p__12974){
var map__12975 = p__12974;
var map__12975__$1 = cljs.core.__destructure_map(map__12975);
var args__$1 = map__12975__$1;
var est_item_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12975__$1,cljs.core.cst$kw$est_DASH_item_DASH_height,(30));
var auto_complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$auto_DASH_complete_QMARK_);
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12975__$1,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$group);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$i18n);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$tooltip);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$model);
var free_text_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$free_DASH_text_QMARK_);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12975__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$tab_DASH_index);
var can_drop_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$can_DASH_drop_DASH_above_QMARK_);
var repeat_change_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$repeat_DASH_change_QMARK_);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$max_DASH_height);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$placeholder);
var title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$title_QMARK_);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12975__$1,cljs.core.cst$kw$render_DASH_fn,label_fn);
var cancelable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12975__$1,cljs.core.cst$kw$cancelable_QMARK_,true);
var set_to_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$set_DASH_to_DASH_filter);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$width);
var on_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$on_DASH_drop);
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
var choices__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$choices);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12975__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$style);
var filter_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$filter_DASH_placeholder);
var debounce_delay__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$debounce_DASH_delay);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$class);
var enter_drop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12975__$1,cljs.core.cst$kw$enter_DASH_drop_QMARK_,true);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$tooltip_DASH_position);
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$filter_DASH_box_QMARK_);
var capitalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$capitalize_QMARK_);
var or__4223__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args__$1));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var choices__$2 = ((choices_fn_QMARK_)?cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)):re_com.util.deref_or_value(choices__$1));
var id_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:id_fn);
var label_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:label_fn);
var render_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:render_fn);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value(regex_filter_QMARK___$1);
var latest_ext_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model__$1));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),cljs.core.deref(latest_ext_model)))?(function (){
cljs.core.reset_BANG_(external_model,cljs.core.deref(latest_ext_model));

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__4221__auto__ = on_change;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4221__auto__;
}
})();
var call_on_change = (function (){
if(cljs.core.truth_((function (){var and__4221__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
var or__4223__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(latest_ext_model));
if(or__4223__auto____$2){
return or__4223__auto____$2;
} else {
return repeat_change_QMARK_;
}
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__12976 = cljs.core.deref(internal_model);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__12976) : on_change.call(null,G__12976));
} else {
return null;
}
});
var callback = (function (p1__12958_SHARP_){
cljs.core.reset_BANG_(internal_model,(function (){var G__12977 = p1__12958_SHARP_;
if(cljs.core.truth_((function (){var and__4221__auto__ = free_text_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return capitalize_QMARK_;
} else {
return and__4221__auto__;
}
})())){
return re_com.dropdown.capitalize_first_letter(G__12977);
} else {
return G__12977;
}
})());

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

call_on_change();

var current_drop_showing_QMARK__12989 = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(current_drop_showing_QMARK__12989)){
focus_free_text();
} else {
}

if(cljs.core.truth_(just_drop_QMARK_)){
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,cljs.core.not(current_drop_showing_QMARK__12989));
}

if(cljs.core.truth_(current_drop_showing_QMARK__12989)){
focus_anchor();
} else {
}

return set_filter_text("",args__$1,false);
});
var free_text_change = (function (p1__12959_SHARP_){
cljs.core.reset_BANG_(internal_model,p1__12959_SHARP_);

cljs.core.reset_BANG_(select_free_text_QMARK_,false);

return call_on_change();
});
var cancel = (function (){
if(cljs.core.truth_(cljs.core.deref(free_text_focused_QMARK_))){
} else {
focus_free_text();
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));
});
var dropdown_click = (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
return cancel();
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,true);

focus_free_text();

return cljs.core.reset_BANG_(select_free_text_QMARK_,true);
}
}
});
var filtered_choices = ((choices_fn_QMARK_)?choices__$2:(cljs.core.truth_(regex_filter_QMARK___$2)?re_com.dropdown.filter_choices_regex(choices__$2,group_fn,label_fn__$1,cljs.core.deref(filter_text)):re_com.dropdown.filter_choices(choices__$2,group_fn,label_fn__$1,cljs.core.deref(filter_text))));
var visible_count = (function (){
var results_node = (function (){var and__4221__auto__ = cljs.core.deref(node);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(node).getElementsByClassName("chosen-results").item((0));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = results_node;
if(cljs.core.truth_(and__4221__auto__)){
return results_node.firstChild;
} else {
return and__4221__auto__;
}
})())){
return cljs.core.quot(results_node.clientHeight,results_node.firstChild.offsetHeight);
} else {
return (0);
}
});
var est_drop_height = (function (){
var items_height = (cljs.core.count(filtered_choices) * est_item_height);
var drop_margin = (12);
var filter_height = (32);
var maxh = ((cljs.core.not(max_height))?(240):((clojure.string.ends_with_QMARK_(max_height,"px"))?parseInt(max_height,(10)):(function (){
re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["max-height is not in pxs, using 240px for estimation"], 0));

return (240);
})()

));
var x__4309__auto__ = ((items_height + drop_margin) + (cljs.core.truth_(filter_box_QMARK_)?filter_height:(0)));
var y__4310__auto__ = maxh;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
});
var drop_height = reagent.core.track((function (){
var temp__5751__auto__ = (function (){var and__4221__auto__ = cljs.core.deref(node);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(node).getElementsByClassName("chosen-drop").item((0));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var drop_node = temp__5751__auto__;
return drop_node.getBoundingClientRect().height;
} else {
return est_drop_height();
}
}));
var top_height = (34);
var drop_above_QMARK_ = reagent.core.track((function (){
if(cljs.core.truth_((function (){var and__4221__auto__ = can_drop_above_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(node);
} else {
return and__4221__auto__;
}
})())){
var node_top = cljs.core.deref(node).getBoundingClientRect().top;
var window_height = document.documentElement.clientHeight;
return (((node_top + top_height) + cljs.core.deref(drop_height)) > window_height);
} else {
return null;
}
}));
var press_enter = (function (){
var drop_was_showing_QMARK_ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.cst$kw$on_DASH_enter_DASH_press.cljs$core$IFn$_invoke$arity$1(set_to_filter);
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = cljs.core.seq(cljs.core.deref(filter_text));
if(and__4221__auto____$1){
var and__4221__auto____$2 = cljs.core.empty_QMARK_(filtered_choices);
if(and__4221__auto____$2){
var and__4221__auto____$3 = free_text_QMARK_;
if(cljs.core.truth_(and__4221__auto____$3)){
return cljs.core.deref(drop_showing_QMARK_);
} else {
return and__4221__auto____$3;
}
} else {
return and__4221__auto____$2;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
callback(cljs.core.deref(filter_text));
} else {
if(cljs.core.truth_((function (){var or__4223__auto____$2 = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return enter_drop_QMARK_;
}
})())){
callback(cljs.core.deref(internal_model));
} else {
}
}
}

return cljs.core.not(drop_was_showing_QMARK_);
});
var press_escape = (function (){
var drop_was_showing_QMARK_ = cljs.core.deref(drop_showing_QMARK_);
cancel();

if(cljs.core.truth_(drop_was_showing_QMARK_)){
focus_anchor();
} else {
}

return cljs.core.not(drop_was_showing_QMARK_);
});
var press_tab = (function (shift_key_QMARK_){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
var drop_was_showing_QMARK__12990 = cljs.core.deref(drop_showing_QMARK_);
call_on_change();

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

if(cljs.core.truth_((function (){var and__4221__auto__ = drop_was_showing_QMARK__12990;
if(cljs.core.truth_(and__4221__auto__)){
return shift_key_QMARK_;
} else {
return and__4221__auto__;
}
})())){
focus_anchor();
} else {
}
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return true;
});
var press_arrow = (function (offset){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.seq(filtered_choices);
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn__$1,cljs.core.deref(internal_model),offset));

if(cljs.core.truth_(cancelable_QMARK_)){
} else {
call_on_change();
}
} else {
}

cljs.core.reset_BANG_(drop_showing_QMARK_,true);

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

return true;
});
var press_up = (function (){
return press_arrow((-1));
});
var press_down = (function (){
return press_arrow((1));
});
var press_page_up = (function (){
return press_arrow((- (visible_count() - (1))));
});
var press_page_down = (function (){
return press_arrow((visible_count() - (1)));
});
var press_home_or_end = (function (offset){
if(((cljs.core.not(cljs.core.deref(free_text_focused_QMARK_))) && (cljs.core.seq(filtered_choices)))){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn__$1,cljs.core.deref(internal_model),offset));

cljs.core.reset_BANG_(select_free_text_QMARK_,true);
} else {
}

return true;
});
var press_home = (function (){
return press_home_or_end(cljs.core.cst$kw$start);
});
var press_end = (function (){
return press_home_or_end(cljs.core.cst$kw$end);
});
var key_handler = (function (p1__12960_SHARP_){
if(cljs.core.truth_(disabled_QMARK___$1)){
return false;
} else {
var G__12978 = p1__12960_SHARP_.which;
switch (G__12978) {
case (13):
return press_enter();

break;
case (27):
return press_escape();

break;
case (9):
return press_tab(p1__12960_SHARP_.shiftKey);

break;
case (38):
return press_up();

break;
case (40):
return press_down();

break;
case (33):
return press_page_up();

break;
case (34):
return press_page_down();

break;
case (36):
return press_home();

break;
case (35):
return press_end();

break;
default:
var or__4223__auto____$2 = filter_box_QMARK_;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return free_text_QMARK_;
}

}
}
});
var dropdown = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-dropdown chosen-container ",(cljs.core.truth_(free_text_QMARK_)?"chosen-container-multi ":"chosen-container-single "),"noselect ",(cljs.core.truth_((function (){var or__4223__auto____$2 = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return cljs.core.deref(free_text_focused_QMARK_);
}
})())?"chosen-container-active ":null),(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))?"chosen-with-drop ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style((cljs.core.truth_(width)?"0 0 auto":"auto")),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$start),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),style], 0)),cljs.core.cst$kw$ref,(function (p1__12961_SHARP_){
return cljs.core.reset_BANG_(node,p1__12961_SHARP_);
})], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(over_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(over_QMARK_,false);

return null;
})], null):null),re_com.debug.__GT_attr(args__$1),attr], 0)),(cljs.core.truth_(just_drop_QMARK_)?null:(cljs.core.truth_(free_text_QMARK_)?new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.free_text_dropdown_top,free_text_input,select_free_text_QMARK_,free_text_focused_QMARK_,free_text_sel_range,internal_model,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,cancel,width,free_text_change,auto_complete_QMARK_,choices__$2,capitalize_QMARK_,disabled_QMARK___$1], null):new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.dropdown_top,internal_model,choices__$2,id_fn__$1,label_fn__$1,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_,disabled_QMARK___$1], null)
)),(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["chosen-drop rc-dropdown-chosen-drop ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_drop,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(drop_above_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(function (){var G__12979 = "translate3d(0px, -%ipx, 0px)";
var G__12980 = ((top_height + cljs.core.deref(drop_height)) + (-2));
return goog.string.format(G__12979,G__12980);
})()], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_drop,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_drop,cljs.core.cst$kw$attr], null))], 0)),(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var or__4223__auto____$2 = filter_box_QMARK_;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return cljs.core.not(free_text_QMARK_);
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(just_drop_QMARK_);
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.filter_text_box,filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,(function (p1__12962_SHARP_){
return set_filter_text(p1__12962_SHARP_,args__$1,true);
}),filter_placeholder], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["chosen-results rc-dropdown-chosen-results ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_results,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_results,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chosen_DASH_results,cljs.core.cst$kw$attr], null))], 0)),(cljs.core.truth_((function (){var and__4221__auto__ = choices_fn_QMARK_;
if(and__4221__auto__){
return cljs.core.cst$kw$loading_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["loading rc-dropdown-choices-loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_loading,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_loading,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_loading,cljs.core.cst$kw$attr], null))], 0)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(i18n,cljs.core.cst$kw$loading,"Loading...")], null):(cljs.core.truth_((function (){var and__4221__auto__ = choices_fn_QMARK_;
if(and__4221__auto__){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["error rc-dropdown-choices-error ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_error,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_error,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_error,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state))], null):(((cljs.core.count(filtered_choices) > (0)))?(function (){var vec__12981 = re_com.dropdown.choices_with_group_headings(filtered_choices,group_fn);
var group_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12981,(0),null);
var group_opt_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12981,(1),null);
var make_a_choice = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.dropdown.make_choice_item,id_fn__$1,render_fn__$1,callback,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([internal_model], 0));
var make_choices = (function (p1__12963_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_a_choice,p1__12963_SHARP_);
});
var make_h_then_choices = (function (h,opts){
return cljs.core.cons(re_com.dropdown.make_group_heading(h),make_choices(opts));
});
var has_no_group_names_QMARK_ = (cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(cljs.core.first(group_names)) == null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(group_opt_lists))) && (has_no_group_names_QMARK_))){
return make_choices(cljs.core.first(group_opt_lists));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(make_h_then_choices,group_names,group_opt_lists));
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["no-results rc-dropdown-choices-no-results ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_no_DASH_results,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_no_DASH_results,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.cst$kw$on_DASH_no_DASH_results_DASH_match_DASH_click.cljs$core$IFn$_invoke$arity$1(set_to_filter);
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = cljs.core.seq(cljs.core.deref(filter_text));
if(and__4221__auto____$1){
return free_text_QMARK_;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
callback(cljs.core.deref(filter_text));
} else {
}

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choices_DASH_no_DASH_results,cljs.core.cst$kw$attr], null))], 0)),(function (){var G__12984 = (function (){var or__4223__auto____$2 = (function (){var and__4221__auto__ = cljs.core.seq(cljs.core.deref(filter_text));
if(and__4221__auto__){
return cljs.core.cst$kw$no_DASH_results_DASH_match.cljs$core$IFn$_invoke$arity$1(i18n);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
var or__4223__auto____$3 = (function (){var and__4221__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(filter_text));
if(and__4221__auto__){
return cljs.core.cst$kw$no_DASH_results.cljs$core$IFn$_invoke$arity$1(i18n);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto____$3)){
return or__4223__auto____$3;
} else {
var or__4223__auto____$4 = cljs.core.cst$kw$no_DASH_results_DASH_match.cljs$core$IFn$_invoke$arity$1(i18n);
if(cljs.core.truth_(or__4223__auto____$4)){
return or__4223__auto____$4;
} else {
return "No results match \"%s\"";
}
}
}
})();
var G__12985 = cljs.core.deref(filter_text);
return goog.string.format(G__12984,G__12985);
})()], null)
)))], null)], null):null)], null);
var ___$1 = (cljs.core.truth_(tooltip)?cljs.core.add_watch(drop_showing_QMARK_,cljs.core.cst$kw$tooltip,(function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
})):null);
var ___$2 = (cljs.core.truth_(on_drop)?cljs.core.add_watch(drop_showing_QMARK_,cljs.core.cst$kw$on_DASH_drop,(function (p1__12966_SHARP_,p2__12967_SHARP_,p3__12964_SHARP_,p4__12965_SHARP_){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not(p3__12964_SHARP_);
if(and__4221__auto__){
return p4__12965_SHARP_;
} else {
return and__4221__auto__;
}
})())){
return (on_drop.cljs$core$IFn$_invoke$arity$0 ? on_drop.cljs$core$IFn$_invoke$arity$0() : on_drop.call(null));
} else {
return null;
}
})):null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/6919102/re_com/dropdown.cljs",cljs.core.cst$kw$line,678], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4223__auto____$2 = tooltip_position;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,dropdown,cljs.core.cst$kw$class,["rc-dropdown-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null);
} else {
return dropdown;
}
}
};
var re_com$dropdown$single_dropdown_render = function (var_args){
var p__12974 = null;
if (arguments.length > 0) {
var G__12992__i = 0, G__12992__a = new Array(arguments.length -  0);
while (G__12992__i < G__12992__a.length) {G__12992__a[G__12992__i] = arguments[G__12992__i + 0]; ++G__12992__i;}
  p__12974 = new cljs.core.IndexedSeq(G__12992__a,0,null);
} 
return re_com$dropdown$single_dropdown_render__delegate.call(this,p__12974);};
re_com$dropdown$single_dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$dropdown$single_dropdown_render.cljs$lang$applyTo = (function (arglist__12993){
var p__12974 = cljs.core.seq(arglist__12993);
return re_com$dropdown$single_dropdown_render__delegate(p__12974);
});
re_com$dropdown$single_dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$dropdown$single_dropdown_render__delegate;
return re_com$dropdown$single_dropdown_render;
})()
;
}
}));

(re_com.dropdown.single_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.dropdown.single_dropdown.cljs$lang$applyTo = (function (seq12968){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12968));
}));

