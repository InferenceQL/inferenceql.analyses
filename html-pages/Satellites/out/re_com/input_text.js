// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.input_text');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.throbber');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
re_com.input_text.input_text_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-input-text",cljs.core.cst$kw$impl,"[input-text]",cljs.core.cst$kw$notes,"Outer wrapper of the text input."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$inner,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-input-text-inner",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The container for the text input."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-input-text-field",cljs.core.cst$kw$impl,"[:input]",cljs.core.cst$kw$notes,"The actual input field."], null)], null):null);
re_com.input_text.input_text_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.input_text.input_text_parts_desc)):null);
re_com.input_text.input_text_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string/nil | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.nillable_string_or_atom_QMARK_,cljs.core.cst$kw$description,"text of the input (can be atom or value/nil)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string[, done-fn] -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. Passed the current input string, and optionally a function to call (with no args) to signal that ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," has reached a steady state to avoid displaying a prior value while processing."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$rows,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(3),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"ONLY applies to 'input-textarea': the number of rows of text to show"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," function on blur, otherwise on every change (character by character)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_alter,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called with the new value to alter it immediately"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$validation_DASH_regex,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"regex",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.regex_QMARK_,cljs.core.cst$kw$description,"user input is only accepted if it would result in a string that matches this regular expression"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the textbox, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.input_text.input_text_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,cljs.core.keyword_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"ONLY applies to super function 'base-input-text': either ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":input"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":password"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":textarea"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Returns markup for a basic text input label
 */
re_com.input_text.input_text_base = (function re_com$input_text$input_text_base(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8037 = arguments.length;
var i__4830__auto___8038 = (0);
while(true){
if((i__4830__auto___8038 < len__4829__auto___8037)){
args__4835__auto__.push((arguments[i__4830__auto___8038]));

var G__8039 = (i__4830__auto___8038 + (1));
i__4830__auto___8038 = G__8039;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.input_text.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.input_text.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__8025){
var map__8026 = p__8025;
var map__8026__$1 = cljs.core.__destructure_map(map__8026);
var args = map__8026__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8026__$1,cljs.core.cst$kw$model);
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8026__$1,cljs.core.cst$kw$input_DASH_type);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8026__$1,cljs.core.cst$kw$src);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.input_text.input_text_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((((cljs.core.deref(external_model) == null))?"":cljs.core.deref(external_model)));
return (function() { 
var re_com$input_text$input_text_base_render__delegate = function (p__8027){
var map__8028 = p__8027;
var map__8028__$1 = cljs.core.__destructure_map(map__8028);
var args__$1 = map__8028__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$on_DASH_change);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$attr);
var on_alter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8028__$1,cljs.core.cst$kw$on_DASH_alter,cljs.core.identity);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$placeholder);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$width);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$src);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$rows);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$debug_DASH_as);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$class);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8028__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,true);
var validation_regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8028__$1,cljs.core.cst$kw$validation_DASH_regex);
var or__4223__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.input_text.input_text_args_desc),args__$1));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var latest_ext_model = re_com.util.deref_or_value(model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var on_change_handler = (function (){
if(cljs.core.fn_QMARK_(on_change)){
var has_done_fn_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),on_change.length);
var reset_fn = (function (){
return cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));
});
if(has_done_fn_QMARK_){
var G__8029 = cljs.core.deref(internal_model);
var G__8030 = reset_fn;
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__8029,G__8030) : on_change.call(null,G__8029,G__8030));
} else {
var G__8031_8040 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__8031_8040) : on_change.call(null,G__8031_8040));

return reset_fn();
}
} else {
return null;
}
});
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4223__auto____$2 = debug_as;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,["rc-input-text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$width,(cljs.core.truth_(width)?width:"250px"),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__8033 = status;
var G__8033__$1 = (((G__8033 instanceof cljs.core.Keyword))?G__8033.fqn:null);
switch (G__8033__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),(cljs.core.truth_((function (){var and__4221__auto__ = status;
if(cljs.core.truth_(and__4221__auto__)){
return status_icon_QMARK_;
} else {
return and__4221__auto__;
}
})())?"has-feedback ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("auto"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,cljs.core.cst$kw$password))?cljs.core.cst$kw$input:input_type),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$style,cljs.core.cst$kw$rows,cljs.core.cst$kw$on_DASH_key_DASH_up,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change],[placeholder,disabled_QMARK___$1,cljs.core.deref(internal_model),(function (event){
if(cljs.core.truth_((function (){var and__4221__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(external_model));
} else {
return and__4221__auto__;
}
})())){
on_change_handler();
} else {
}

return null;
}),(function (){var G__8034 = input_type;
var G__8034__$1 = (((G__8034 instanceof cljs.core.Keyword))?G__8034.fqn:null);
switch (G__8034__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,height,cljs.core.cst$kw$padding_DASH_right,"12px"], null),style], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,cljs.core.cst$kw$textarea))?(function (){var or__4223__auto____$2 = rows;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return (3);
}
})():null),(function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__8035_8043 = event.which;
switch (G__8035_8043) {
case (13):
on_change_handler();

break;
case (27):
cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));

break;
default:

}
}

return null;
}),["form-control rc-input-text-field ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),(function (event){
var new_val_orig_8045 = event.target.value;
var new_val_8046 = (on_alter.cljs$core$IFn$_invoke$arity$1 ? on_alter.cljs$core$IFn$_invoke$arity$1(new_val_orig_8045) : on_alter.call(null,new_val_orig_8045));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_val_8046,new_val_orig_8045)){
(event.target.value = new_val_8046);
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = on_change;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = cljs.core.not(disabled_QMARK___$1);
if(and__4221__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find(validation_regex,new_val_8046);
} else {
return true;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,new_val_8046);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
on_change_handler();
}
} else {
}

return null;
})]),attr], 0))], null)], null),(cljs.core.truth_((function (){var and__4221__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return status;
} else {
return and__4221__auto__;
}
})())?(function (){var icon_class = (function (){var G__8036 = status;
var G__8036__$1 = (((G__8036 instanceof cljs.core.Keyword))?G__8036.fqn:null);
switch (G__8036__$1) {
case "success":
return "zmdi-check-circle";

break;
case "warning":
return "zmdi-alert-triangle";

break;
case "error":
return "zmdi-alert-circle zmdi-spinner";

break;
case "validating":
return "zmdi-hc-spin zmdi-rotate-right zmdi-spinner";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8036__$1)].join('')));

}
})();
if(cljs.core.truth_(status_tooltip)){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/CF0DAD1/re_com/input_text.cljs",cljs.core.cst$kw$line,166], null)),cljs.core.cst$kw$label,status_tooltip,cljs.core.cst$kw$position,cljs.core.cst$kw$right_DASH_center,cljs.core.cst$kw$status,status,cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validating,status))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$regular,cljs.core.cst$kw$class,"smaller",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
if(cljs.core.truth_((function (){var and__4221__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return status;
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$height,"auto",cljs.core.cst$kw$opacity,(cljs.core.truth_((function (){var and__4221__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return status;
} else {
return and__4221__auto__;
}
})())?"1":"0")], null),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
if(cljs.core.truth_((function (){var and__4221__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return status;
} else {
return and__4221__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null)], null)),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$center),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"130%",cljs.core.cst$kw$margin_DASH_left,"4px"], null)], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validating,status)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/CF0DAD1/re_com/input_text.cljs",cljs.core.cst$kw$line,190], null)),cljs.core.cst$kw$size,cljs.core.cst$kw$regular,cljs.core.cst$kw$class,"smaller"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$center),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$font_DASH_size,"130%",cljs.core.cst$kw$margin_DASH_left,"4px",cljs.core.cst$kw$opacity,(cljs.core.truth_((function (){var and__4221__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return status;
} else {
return and__4221__auto__;
}
})())?"1":"0"),cljs.core.cst$kw$height,"auto"], null)], 0)),cljs.core.cst$kw$title,status_tooltip], null)], null);
}
}
})():null)], null)], null);
}
};
var re_com$input_text$input_text_base_render = function (var_args){
var p__8027 = null;
if (arguments.length > 0) {
var G__8048__i = 0, G__8048__a = new Array(arguments.length -  0);
while (G__8048__i < G__8048__a.length) {G__8048__a[G__8048__i] = arguments[G__8048__i + 0]; ++G__8048__i;}
  p__8027 = new cljs.core.IndexedSeq(G__8048__a,0,null);
} 
return re_com$input_text$input_text_base_render__delegate.call(this,p__8027);};
re_com$input_text$input_text_base_render.cljs$lang$maxFixedArity = 0;
re_com$input_text$input_text_base_render.cljs$lang$applyTo = (function (arglist__8049){
var p__8027 = cljs.core.seq(arglist__8049);
return re_com$input_text$input_text_base_render__delegate(p__8027);
});
re_com$input_text$input_text_base_render.cljs$core$IFn$_invoke$arity$variadic = re_com$input_text$input_text_base_render__delegate;
return re_com$input_text$input_text_base_render;
})()
;
}
}));

(re_com.input_text.input_text_base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.input_text.input_text_base.cljs$lang$applyTo = (function (seq8024){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8024));
}));

re_com.input_text.input_text = (function re_com$input_text$input_text(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8051 = arguments.length;
var i__4830__auto___8052 = (0);
while(true){
if((i__4830__auto___8052 < len__4829__auto___8051)){
args__4835__auto__.push((arguments[i__4830__auto___8052]));

var G__8053 = (i__4830__auto___8052 + (1));
i__4830__auto___8052 = G__8053;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.input_text.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.input_text.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(re_com.input_text.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$input,cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(re_com.input_text.input_text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.input_text.input_text.cljs$lang$applyTo = (function (seq8050){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8050));
}));

re_com.input_text.input_password = (function re_com$input_text$input_password(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8055 = arguments.length;
var i__4830__auto___8056 = (0);
while(true){
if((i__4830__auto___8056 < len__4829__auto___8055)){
args__4835__auto__.push((arguments[i__4830__auto___8056]));

var G__8057 = (i__4830__auto___8056 + (1));
i__4830__auto___8056 = G__8057;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.input_text.input_password.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.input_text.input_password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(re_com.input_text.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$password,cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(re_com.input_text.input_password.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.input_text.input_password.cljs$lang$applyTo = (function (seq8054){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8054));
}));

re_com.input_text.input_textarea = (function re_com$input_text$input_textarea(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8059 = arguments.length;
var i__4830__auto___8060 = (0);
while(true){
if((i__4830__auto___8060 < len__4829__auto___8059)){
args__4835__auto__.push((arguments[i__4830__auto___8060]));

var G__8061 = (i__4830__auto___8060 + (1));
i__4830__auto___8060 = G__8061;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.input_text.input_textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.input_text.input_textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(re_com.input_text.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$textarea,cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(re_com.input_text.input_textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.input_text.input_textarea.cljs$lang$applyTo = (function (seq8058){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8058));
}));

