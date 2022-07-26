// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.input_time');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.validate');
goog.require('re_com.text');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.input_time.time__GT_mins = (function re_com$input_time$time__GT_mins(time){
return cljs.core.rem(time,(100));
});
re_com.input_time.time__GT_hrs = (function re_com$input_time$time__GT_hrs(time){
return cljs.core.quot(time,(100));
});
/**
 * Parse the string 's' to a valid int. On parse failure, return 0
 */
re_com.input_time.to_int = (function re_com$input_time$to_int(s){
var val = parseInt(s);
if(cljs.core.truth_(isNaN(val))){
return (0);
} else {
return val;
}
});
/**
 * Return a time integer from a triple int vector of form  [H  _  M]
 */
re_com.input_time.triple__GT_time = (function re_com$input_time$triple__GT_time(p__12775){
var vec__12776 = p__12775;
var hr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12776,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12776,(1),null);
var mi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12776,(2),null);
return ((hr * (100)) + mi);
});
re_com.input_time.triple_seeking_re = /^(\d{0,2})()()$|^(\d{0,1})(:{0,1})(\d{0,2})$|^(\d{0,2})(:{0,1})(\d{0,2})$/;
re_com.input_time.extract_triple_from_text = (function re_com$input_time$extract_triple_from_text(text){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.rest(cljs.core.re_matches(re_com.input_time.triple_seeking_re,text)));
});
/**
 * return as a time int, the contents of 'text'
 */
re_com.input_time.text__GT_time = (function re_com$input_time$text__GT_time(text){
return re_com.input_time.triple__GT_time(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.input_time.to_int,re_com.input_time.extract_triple_from_text(text)));
});
/**
 * return a string of format HH:MM for 'time'
 */
re_com.input_time.time__GT_text = (function re_com$input_time$time__GT_text(time){
var hrs = re_com.input_time.time__GT_hrs(time);
var mins = re_com.input_time.time__GT_mins(time);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(hrs,(2))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(mins,(2)))].join('');
});
/**
 * Return true if text passes basic time validation.
 * Can't do to much validation because user input might not be finished.
 * Why?  On the way to entering 6:30, you must pass through the invalid state of '63'.
 * So we only really check against the triple-extracting regular expression
 */
re_com.input_time.valid_text_QMARK_ = (function re_com$input_time$valid_text_QMARK_(text){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(re_com.input_time.extract_triple_from_text(text)));
});
re_com.input_time.valid_time_QMARK_ = (function re_com$input_time$valid_time_QMARK_(time){
if((time == null)){
return false;
} else {
if(((0) > time)){
return false;
} else {
if(((60) < re_com.input_time.time__GT_mins(time))){
return false;
} else {
return true;

}
}
}
});
re_com.input_time.validate_arg_times = (function re_com$input_time$validate_arg_times(model,minimum,maximum,args){
var temp__5753__auto__ = (((!(((typeof model === 'number') && (re_com.input_time.valid_time_QMARK_(model))))))?["[input-time] given an invalid :model - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)].join(''):(((!(((typeof minimum === 'number') && (re_com.input_time.valid_time_QMARK_(minimum))))))?["[input-time] given an invalid :minimum - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)].join(''):(((!(((typeof maximum === 'number') && (re_com.input_time.valid_time_QMARK_(maximum))))))?["[input-time] given an invalid :maximum - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)].join(''):(((!((minimum <= maximum))))?["[input-time] :minimum ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)," > :maximum  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)].join(''):null
))));
if(cljs.core.truth_(temp__5753__auto__)){
var message = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.debug.validate_args_error,cljs.core.cst$kw$component,"input-time",cljs.core.cst$kw$args,args,cljs.core.cst$kw$problems,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$problem,cljs.core.cst$kw$validate_DASH_fn_DASH_map,cljs.core.cst$kw$validate_DASH_fn_DASH_result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,message], null)], null)], null)], null);
} else {
return null;
}
});
/**
 * Validate the time supplied.
 * Return either the time or, if it is invalid, return something valid
 */
re_com.input_time.force_valid_time = (function re_com$input_time$force_valid_time(time,min,max,previous){
if((time == null)){
return previous;
} else {
if((!(re_com.input_time.valid_time_QMARK_(time)))){
return previous;
} else {
if((time < min)){
return min;
} else {
if((max < time)){
return max;
} else {
return time;

}
}
}
}
});
/**
 * Called each time the <input> field gets a keypress, or paste operation.
 * Rests  the text-model only if the new text is valid
 */
re_com.input_time.on_new_keypress = (function re_com$input_time$on_new_keypress(event,text_model){
var current_text = event.target.value;
if(re_com.input_time.valid_text_QMARK_(current_text)){
return cljs.core.reset_BANG_(text_model,current_text);
} else {
return null;
}
});
/**
 * When Enter is pressed, force the component to lose focus
 */
re_com.input_time.lose_focus_if_enter = (function re_com$input_time$lose_focus_if_enter(ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev.keyCode,(13))){
ev.target.blur();

return true;
} else {
return null;
}
});
/**
 * Called when the field looses focus.
 * Re-validate what has been entered, comparing to mins and maxs.
 * Invoke the callback as necessary
 */
re_com.input_time.on_defocus = (function re_com$input_time$on_defocus(text_model,min,max,callback,previous_val){
var time = re_com.input_time.text__GT_time(cljs.core.deref(text_model));
var time__$1 = re_com.input_time.force_valid_time(time,min,max,previous_val);
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(time__$1));

if(cljs.core.truth_((function (){var and__4221__auto__ = callback;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(time__$1,previous_val);
} else {
return and__4221__auto__;
}
})())){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(time__$1) : callback.call(null,time__$1));
} else {
return null;
}
});
re_com.input_time.input_time_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-input-time ",cljs.core.cst$kw$impl,"[input-time]",cljs.core.cst$kw$notes,"Outer wrapper of the time input."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-time-entry",cljs.core.cst$kw$impl,"[:input]",cljs.core.cst$kw$notes,"The actual input field."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$time_DASH_icon_DASH_container,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-time-icon-container",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The time icon container."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$time_DASH_icon,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-time-icon",cljs.core.cst$kw$impl,"[:i]",cljs.core.cst$kw$notes,"The time icon."], null)], null):null);
re_com.input_time.input_time_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.input_time.input_time_parts_desc)):null);
re_com.input_time.input_time_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"integer | string | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"a time in integer form. e.g. '09:30am' is 930"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"integer -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user entry completes and value is new. Passed new value as integer"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$minimum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(0),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"user can't enter a time less than this value"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$maximum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(2359),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"user can't enter a time more than this value"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, user input is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$show_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, a clock icon will be displayed to the right of input field"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$hide_DASH_border_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, input filed is displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for width of the input box (excluding the icon if present)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS style. e.g. {:color \"red\" :width \"50px\"} (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the textbox, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.input_time.input_time_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * I return the markup for an input box which will accept and validate times.
 * Parameters - refer input-time-args above
 */
re_com.input_time.input_time = (function re_com$input_time$input_time(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12784 = arguments.length;
var i__4830__auto___12785 = (0);
while(true){
if((i__4830__auto___12785 < len__4829__auto___12784)){
args__4835__auto__.push((arguments[i__4830__auto___12785]));

var G__12786 = (i__4830__auto___12785 + (1));
i__4830__auto___12785 = G__12786;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic = (function (p__12780){
var map__12781 = p__12780;
var map__12781__$1 = cljs.core.__destructure_map(map__12781);
var args = map__12781__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12781__$1,cljs.core.cst$kw$model);
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12781__$1,cljs.core.cst$kw$minimum,(0));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12781__$1,cljs.core.cst$kw$maximum,(2359));
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.input_time.input_time_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = re_com.input_time.validate_arg_times(re_com.util.deref_or_value(model),minimum,maximum,args);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var deref_model = re_com.util.deref_or_value(model);
var text_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.input_time.time__GT_text(deref_model));
var previous_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(deref_model);
return (function() { 
var re_com$input_time$input_time_render__delegate = function (p__12782){
var map__12783 = p__12782;
var map__12783__$1 = cljs.core.__destructure_map(map__12783);
var args__$1 = map__12783__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$on_DASH_change);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$height);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$attr);
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_);
var maximum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12783__$1,cljs.core.cst$kw$maximum,(2359));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$width);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$src);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$class);
var show_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,cljs.core.cst$kw$show_DASH_icon_QMARK_);
var minimum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12783__$1,cljs.core.cst$kw$minimum,(0));
var or__4223__auto____$2 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.input_time.input_time_args_desc),args__$1));
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
var or__4223__auto____$3 = re_com.input_time.validate_arg_times(re_com.util.deref_or_value(model__$1),minimum__$1,maximum__$1,args__$1);
if(cljs.core.truth_(or__4223__auto____$3)){
return or__4223__auto____$3;
} else {
var style__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(hide_border_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"none"], null):null),style], 0));
var new_val = re_com.util.deref_or_value(model__$1);
var new_val__$1 = (((new_val < minimum__$1))?minimum__$1:new_val);
var new_val__$2 = (((new_val__$1 > maximum__$1))?maximum__$1:new_val__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(previous_model),new_val__$2)){
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(new_val__$2));

cljs.core.reset_BANG_(previous_model,new_val__$2);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4223__auto____$4 = debug_as;
if(cljs.core.truth_(or__4223__auto____$4)){
return or__4223__auto____$4;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$class,["rc-input-time ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,["time-entry rc-time-entry ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),style__$1], 0)),cljs.core.cst$kw$value,cljs.core.deref(text_model),cljs.core.cst$kw$disabled,re_com.util.deref_or_value(disabled_QMARK_),cljs.core.cst$kw$on_DASH_change,(function (event){
re_com.input_time.on_new_keypress(event,text_model);

return null;
}),cljs.core.cst$kw$on_DASH_blur,(function (event){
re_com.input_time.on_defocus(text_model,minimum__$1,maximum__$1,on_change,cljs.core.deref(previous_model));

return null;
}),cljs.core.cst$kw$on_DASH_key_DASH_up,(function (event){
re_com.input_time.lose_focus_if_enter(event);

return null;
})], null),attr], 0))], null),(cljs.core.truth_(show_icon_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["time-icon rc-time-icon-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_icon_DASH_container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_icon_DASH_container,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_icon_DASH_container,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc zmdi-time rc-time-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$margin,"auto"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_icon,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_icon,cljs.core.cst$kw$attr], null))], 0))], null)], null):null)], null)], null);
}
}
};
var re_com$input_time$input_time_render = function (var_args){
var p__12782 = null;
if (arguments.length > 0) {
var G__12787__i = 0, G__12787__a = new Array(arguments.length -  0);
while (G__12787__i < G__12787__a.length) {G__12787__a[G__12787__i] = arguments[G__12787__i + 0]; ++G__12787__i;}
  p__12782 = new cljs.core.IndexedSeq(G__12787__a,0,null);
} 
return re_com$input_time$input_time_render__delegate.call(this,p__12782);};
re_com$input_time$input_time_render.cljs$lang$maxFixedArity = 0;
re_com$input_time$input_time_render.cljs$lang$applyTo = (function (arglist__12788){
var p__12782 = cljs.core.seq(arglist__12788);
return re_com$input_time$input_time_render__delegate(p__12782);
});
re_com$input_time$input_time_render.cljs$core$IFn$_invoke$arity$variadic = re_com$input_time$input_time_render__delegate;
return re_com$input_time$input_time_render;
})()
;
}
}
}));

(re_com.input_time.input_time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.input_time.input_time.cljs$lang$applyTo = (function (seq12779){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12779));
}));

