// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.throbber');
goog.require('re_com.input_text');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__12147){
var map__12148 = p__12147;
var map__12148__$1 = cljs.core.__destructure_map(map__12148);
var args = map__12148__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__12149 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__4223__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__12149,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__12149,external_model_value));
} else {
return G__12149;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__12150,event){
var map__12151 = p__12150;
var map__12151__$1 = cljs.core.__destructure_map(map__12151);
var state = map__12151__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12151__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12151__$1,cljs.core.cst$kw$rigid_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12151__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__12152 = event;
var G__12152__$1 = (((G__12152 instanceof cljs.core.Keyword))?G__12152.fqn:null);
switch (G__12152__$1) {
case "input-text-blurred":
var and__4221__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4221__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4221__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__4221__auto__){
var or__4223__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4221__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__12154,event){
var map__12155 = p__12154;
var map__12155__$1 = cljs.core.__destructure_map(map__12155);
var state = map__12155__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12155__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__12156 = event;
var G__12156__$1 = (((G__12156 instanceof cljs.core.Keyword))?G__12156.fqn:null);
switch (G__12156__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__12158,new_value){
var map__12159 = p__12158;
var map__12159__$1 = cljs.core.__destructure_map(map__12159);
var state = map__12159__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12159__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__12160,suggestion){
var map__12161 = p__12160;
var map__12161__$1 = cljs.core.__destructure_map(map__12161);
var state = map__12161__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12161__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__12162 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__12162,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__12162;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__12163,index){
var map__12164 = p__12163;
var map__12164__$1 = cljs.core.__destructure_map(map__12164);
var state = map__12164__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12164__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__12165 = state;
var G__12165__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12165,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__12165__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__12165__$1,suggestion):G__12165__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__12165__$2,suggestion);
} else {
return G__12165__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__12166,index){
var map__12167 = p__12166;
var map__12167__$1 = cljs.core.__destructure_map(map__12167);
var state = map__12167__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12167__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__12168){
var map__12169 = p__12168;
var map__12169__$1 = cljs.core.__destructure_map(map__12169);
var state = map__12169__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12169__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__12170 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__12170,suggestion_active_index);
} else {
return G__12170;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__12171){
var map__12172 = p__12171;
var map__12172__$1 = cljs.core.__destructure_map(map__12172);
var state = map__12172__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12172__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12172__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__12173 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__12173,re_com.typeahead.wrap(((function (){var or__4223__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__12173;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__12174){
var map__12175 = p__12174;
var map__12175__$1 = cljs.core.__destructure_map(map__12175);
var state = map__12175__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__12176 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__12176,re_com.typeahead.wrap(((function (){var or__4223__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__12176;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__12177 = state;
var G__12177__$1 = re_com.typeahead.clear_suggestions(G__12177)
;
var G__12177__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__12177__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__12177__$2,null);
} else {
return G__12177__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__12178){
var map__12179 = p__12178;
var map__12179__$1 = cljs.core.__destructure_map(map__12179);
var state = map__12179__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12179__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12179__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12179__$1,cljs.core.cst$kw$model);
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__4221__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_blurred);
} else {
return and__4221__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$input_DASH_text,input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),cljs.core.cst$kw$data_DASH_source,data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),cljs.core.cst$kw$external_DASH_model,new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5751__auto__ = (function (){var G__12181 = text;
var G__12182 = (function (p1__12180_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__12180_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__12181,G__12182) : data_source.call(null,G__12181,G__12182));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var return_value = temp__5751__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$waiting_QMARK_,true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__10192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_12200){
var state_val_12201 = (state_12200[(1)]);
if((state_val_12201 === (1))){
var state_12200__$1 = state_12200;
var statearr_12202_12216 = state_12200__$1;
(statearr_12202_12216[(2)] = null);

(statearr_12202_12216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12201 === (2))){
var state_12200__$1 = state_12200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12200__$1,(4),c_search);
} else {
if((state_val_12201 === (3))){
var inst_12198 = (state_12200[(2)]);
var state_12200__$1 = state_12200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12200__$1,inst_12198);
} else {
if((state_val_12201 === (4))){
var inst_12185 = (state_12200[(7)]);
var inst_12185__$1 = (state_12200[(2)]);
var inst_12186 = cljs.core.deref(state_atom);
var inst_12187 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_12186);
var inst_12188 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_12185__$1);
var state_12200__$1 = (function (){var statearr_12203 = state_12200;
(statearr_12203[(8)] = inst_12187);

(statearr_12203[(7)] = inst_12185__$1);

return statearr_12203;
})();
if(inst_12188){
var statearr_12204_12217 = state_12200__$1;
(statearr_12204_12217[(1)] = (5));

} else {
var statearr_12205_12218 = state_12200__$1;
(statearr_12205_12218[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12201 === (5))){
var inst_12187 = (state_12200[(8)]);
var inst_12190 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_12191 = re_com.typeahead.search_data_source_BANG_(inst_12187,state_atom,"");
var state_12200__$1 = (function (){var statearr_12206 = state_12200;
(statearr_12206[(9)] = inst_12190);

return statearr_12206;
})();
var statearr_12207_12219 = state_12200__$1;
(statearr_12207_12219[(2)] = inst_12191);

(statearr_12207_12219[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12201 === (6))){
var inst_12187 = (state_12200[(8)]);
var inst_12185 = (state_12200[(7)]);
var inst_12193 = re_com.typeahead.search_data_source_BANG_(inst_12187,state_atom,inst_12185);
var state_12200__$1 = state_12200;
var statearr_12208_12220 = state_12200__$1;
(statearr_12208_12220[(2)] = inst_12193);

(statearr_12208_12220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12201 === (7))){
var inst_12195 = (state_12200[(2)]);
var state_12200__$1 = (function (){var statearr_12209 = state_12200;
(statearr_12209[(10)] = inst_12195);

return statearr_12209;
})();
var statearr_12210_12221 = state_12200__$1;
(statearr_12210_12221[(2)] = null);

(statearr_12210_12221[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto____0 = (function (){
var statearr_12211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12211[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto__);

(statearr_12211[(1)] = (1));

return statearr_12211;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto____1 = (function (state_12200){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_12200);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e12212){var ex__10121__auto__ = e12212;
var statearr_12213_12222 = state_12200;
(statearr_12213_12222[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_12200[(4)]))){
var statearr_12214_12223 = state_12200;
(statearr_12214_12223[(1)] = cljs.core.first((state_12200[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__12224 = state_12200;
state_12200 = G__12224;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto__ = function(state_12200){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto____1.call(this,state_12200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_12215 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_12215[(6)] = c__10192__auto__);

return statearr_12215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));

return c__10192__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__12226 = cljs.core.deref(state_atom);
var map__12226__$1 = cljs.core.__destructure_map(map__12226);
var state = map__12226__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12226__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12226__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__12225_SHARP_){
var G__12227 = p1__12225_SHARP_;
var G__12227__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__12227,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__12227__$1,new_text);
} else {
return G__12227__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__12228 = cljs.core._EQ_;
var expr__12229 = event.which;
if(cljs.core.truth_((pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__12229) : pred__12228.call(null,goog.events.KeyCodes.UP,expr__12229)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__12229) : pred__12228.call(null,goog.events.KeyCodes.DOWN,expr__12229)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__12229) : pred__12228.call(null,goog.events.KeyCodes.ENTER,expr__12229)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__12229) : pred__12228.call(null,goog.events.KeyCodes.ESC,expr__12229)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__12228.cljs$core$IFn$_invoke$arity$2 ? pred__12228.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__12229) : pred__12228.call(null,goog.events.KeyCodes.TAB,expr__12229)))){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"object | r/atom",cljs.core.cst$kw$description,"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(250),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.integer_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_suggestion,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"render fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"suggestion -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"the outer container"], null),", rather than the textbox)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$suggestions_DASH_container,null,cljs.core.cst$kw$suggestion,null,cljs.core.cst$kw$throbber,null], null), null)),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12249 = arguments.length;
var i__4830__auto___12250 = (0);
while(true){
if((i__4830__auto___12250 < len__4829__auto___12249)){
args__4835__auto__.push((arguments[i__4830__auto___12250]));

var G__12251 = (i__4830__auto___12250 + (1));
i__4830__auto___12250 = G__12251;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__12233){
var map__12234 = p__12233;
var map__12234__$1 = cljs.core.__destructure_map(map__12234);
var args = map__12234__$1;
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var map__12235 = re_com.typeahead.make_typeahead_state(args);
var map__12235__$1 = cljs.core.__destructure_map(map__12235);
var state = map__12235__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12235__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12235__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__12236){
var map__12237 = p__12236;
var map__12237__$1 = cljs.core.__destructure_map(map__12237);
var args__$1 = map__12237__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$attr);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$data_DASH_source);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$src);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$_immediate_DASH_model_DASH_update_QMARK_);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$debug_DASH_as);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12237__$1,cljs.core.cst$kw$class);
var or__4223__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var map__12238 = cljs.core.deref(state_atom);
var map__12238__$1 = cljs.core.__destructure_map(map__12238);
var state__$1 = map__12238__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12238__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12238__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12238__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12238__$1,cljs.core.cst$kw$external_DASH_model);
var last_data_source = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4223__auto____$2 = width;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4223__auto____$2 = debug_as;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$class,"rc-typeahead",cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/D9C39FD/re_com/typeahead.cljs",cljs.core.cst$kw$line,293], null)),cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),cljs.core.cst$kw$on_DASH_focus,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.cst$kw$on_DASH_blur,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4223__auto____$2 = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/D9C39FD/re_com/typeahead.cljs",cljs.core.cst$kw$line,312], null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/D9C39FD/re_com/typeahead.cljs",cljs.core.cst$kw$line,315], null)),cljs.core.cst$kw$class,["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestions_DASH_container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/D9C39FD/re_com/typeahead.cljs",cljs.core.cst$kw$line,319], null)),cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/D9C39FD/re_com/typeahead.cljs",cljs.core.cst$kw$line,322], null)),cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,["rc-typeahead-throbber ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$throbber,cljs.core.cst$kw$class], null)))].join('')], null)], null):null),(function (){var iter__4622__auto__ = (function re_com$typeahead$typeahead_render_$_iter__12239(s__12240){
return (new cljs.core.LazySeq(null,(function (){
var s__12240__$1 = s__12240;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12240__$1);
if(temp__5753__auto__){
var s__12240__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12240__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12240__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12242 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12241 = (0);
while(true){
if((i__12241 < size__4621__auto__)){
var vec__12243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12241);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12243,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12243,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__12242,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/D9C39FD/re_com/typeahead.cljs",cljs.core.cst$kw$line,329], null)),cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestion,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__12241,selected_QMARK_,vec__12243,i,s,c__4620__auto__,size__4621__auto__,b__12242,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__12241,selected_QMARK_,vec__12243,i,s,c__4620__auto__,size__4621__auto__,b__12242,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__12241,selected_QMARK_,vec__12243,i,s,c__4620__auto__,size__4621__auto__,b__12242,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args){
return (function (p1__12231_SHARP_){
p1__12231_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__12241,selected_QMARK_,vec__12243,i,s,c__4620__auto__,size__4621__auto__,b__12242,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__12252 = (i__12241 + (1));
i__12241 = G__12252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12242),re_com$typeahead$typeahead_render_$_iter__12239(cljs.core.chunk_rest(s__12240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12242),null);
}
} else {
var vec__12246 = cljs.core.first(s__12240__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12246,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12246,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/D9C39FD/re_com/typeahead.cljs",cljs.core.cst$kw$line,329], null)),cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suggestion,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__12246,i,s,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__12246,i,s,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__12246,i,s,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args){
return (function (p1__12231_SHARP_){
p1__12231_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__12246,i,s,s__12240__$2,temp__5753__auto__,map__12238,map__12238__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4223__auto____$1,map__12237,map__12237__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__12235,map__12235__$1,state,c_search,c_input,state_atom,input_text_model,or__4223__auto__,map__12234,map__12234__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$typeahead_render_$_iter__12239(cljs.core.rest(s__12240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__12236 = null;
if (arguments.length > 0) {
var G__12253__i = 0, G__12253__a = new Array(arguments.length -  0);
while (G__12253__i < G__12253__a.length) {G__12253__a[G__12253__i] = arguments[G__12253__i + 0]; ++G__12253__i;}
  p__12236 = new cljs.core.IndexedSeq(G__12253__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__12236);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__12254){
var p__12236 = cljs.core.seq(arglist__12254);
return re_com$typeahead$typeahead_render__delegate(p__12236);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq12232){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12232));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__10192__auto___12337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10193__auto__ = (function (){var switch__10117__auto__ = (function (state_12306){
var state_val_12307 = (state_12306[(1)]);
if((state_val_12307 === (7))){
var inst_12260 = (state_12306[(2)]);
var state_12306__$1 = state_12306;
var statearr_12308_12338 = state_12306__$1;
(statearr_12308_12338[(2)] = inst_12260);

(statearr_12308_12338[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (1))){
var inst_12255 = null;
var state_12306__$1 = (function (){var statearr_12309 = state_12306;
(statearr_12309[(7)] = inst_12255);

return statearr_12309;
})();
var statearr_12310_12339 = state_12306__$1;
(statearr_12310_12339[(2)] = null);

(statearr_12310_12339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (4))){
var state_12306__$1 = state_12306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12306__$1,(7),in$);
} else {
if((state_val_12307 === (15))){
var inst_12291 = (state_12306[(2)]);
var state_12306__$1 = (function (){var statearr_12311 = state_12306;
(statearr_12311[(8)] = inst_12291);

return statearr_12311;
})();
var statearr_12312_12340 = state_12306__$1;
(statearr_12312_12340[(2)] = null);

(statearr_12312_12340[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (13))){
var inst_12279 = (state_12306[(9)]);
var inst_12293 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12279,cljs.core.cst$kw$default);
var state_12306__$1 = state_12306;
if(inst_12293){
var statearr_12313_12341 = state_12306__$1;
(statearr_12313_12341[(1)] = (16));

} else {
var statearr_12314_12342 = state_12306__$1;
(statearr_12314_12342[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (6))){
var inst_12264 = (state_12306[(10)]);
var inst_12272 = (state_12306[(11)]);
var inst_12263 = (state_12306[(2)]);
var inst_12264__$1 = cljs.core.async.timeout(ms);
var inst_12272__$1 = in$;
var inst_12273 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12274 = [inst_12272__$1,inst_12264__$1];
var inst_12275 = (new cljs.core.PersistentVector(null,2,(5),inst_12273,inst_12274,null));
var state_12306__$1 = (function (){var statearr_12315 = state_12306;
(statearr_12315[(10)] = inst_12264__$1);

(statearr_12315[(11)] = inst_12272__$1);

(statearr_12315[(12)] = inst_12263);

return statearr_12315;
})();
return cljs.core.async.ioc_alts_BANG_(state_12306__$1,(8),inst_12275);
} else {
if((state_val_12307 === (17))){
var state_12306__$1 = state_12306;
var statearr_12316_12343 = state_12306__$1;
(statearr_12316_12343[(2)] = null);

(statearr_12316_12343[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (3))){
var inst_12304 = (state_12306[(2)]);
var state_12306__$1 = state_12306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12306__$1,inst_12304);
} else {
if((state_val_12307 === (12))){
var inst_12263 = (state_12306[(12)]);
var state_12306__$1 = state_12306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12306__$1,(15),out,inst_12263);
} else {
if((state_val_12307 === (2))){
var inst_12255 = (state_12306[(7)]);
var inst_12257 = (inst_12255 == null);
var state_12306__$1 = state_12306;
if(cljs.core.truth_(inst_12257)){
var statearr_12317_12344 = state_12306__$1;
(statearr_12317_12344[(1)] = (4));

} else {
var statearr_12318_12345 = state_12306__$1;
(statearr_12318_12345[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (11))){
var inst_12301 = (state_12306[(2)]);
var inst_12255 = inst_12301;
var state_12306__$1 = (function (){var statearr_12319 = state_12306;
(statearr_12319[(7)] = inst_12255);

return statearr_12319;
})();
var statearr_12320_12346 = state_12306__$1;
(statearr_12320_12346[(2)] = null);

(statearr_12320_12346[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (9))){
var inst_12277 = (state_12306[(13)]);
var inst_12285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12277,(0),null);
var inst_12286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12277,(1),null);
var state_12306__$1 = (function (){var statearr_12321 = state_12306;
(statearr_12321[(14)] = inst_12286);

return statearr_12321;
})();
var statearr_12322_12347 = state_12306__$1;
(statearr_12322_12347[(2)] = inst_12285);

(statearr_12322_12347[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (5))){
var inst_12255 = (state_12306[(7)]);
var state_12306__$1 = state_12306;
var statearr_12323_12348 = state_12306__$1;
(statearr_12323_12348[(2)] = inst_12255);

(statearr_12323_12348[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (14))){
var inst_12299 = (state_12306[(2)]);
var state_12306__$1 = state_12306;
var statearr_12324_12349 = state_12306__$1;
(statearr_12324_12349[(2)] = inst_12299);

(statearr_12324_12349[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (16))){
var inst_12278 = (state_12306[(15)]);
var state_12306__$1 = state_12306;
var statearr_12325_12350 = state_12306__$1;
(statearr_12325_12350[(2)] = inst_12278);

(statearr_12325_12350[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (10))){
var inst_12279 = (state_12306[(9)]);
var inst_12264 = (state_12306[(10)]);
var inst_12288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12279,inst_12264);
var state_12306__$1 = state_12306;
if(inst_12288){
var statearr_12326_12351 = state_12306__$1;
(statearr_12326_12351[(1)] = (12));

} else {
var statearr_12327_12352 = state_12306__$1;
(statearr_12327_12352[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (18))){
var inst_12297 = (state_12306[(2)]);
var state_12306__$1 = state_12306;
var statearr_12328_12353 = state_12306__$1;
(statearr_12328_12353[(2)] = inst_12297);

(statearr_12328_12353[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12307 === (8))){
var inst_12279 = (state_12306[(9)]);
var inst_12272 = (state_12306[(11)]);
var inst_12277 = (state_12306[(13)]);
var inst_12277__$1 = (state_12306[(2)]);
var inst_12278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12277__$1,(0),null);
var inst_12279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12277__$1,(1),null);
var inst_12280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12279__$1,inst_12272);
var state_12306__$1 = (function (){var statearr_12329 = state_12306;
(statearr_12329[(9)] = inst_12279__$1);

(statearr_12329[(15)] = inst_12278);

(statearr_12329[(13)] = inst_12277__$1);

return statearr_12329;
})();
if(inst_12280){
var statearr_12330_12354 = state_12306__$1;
(statearr_12330_12354[(1)] = (9));

} else {
var statearr_12331_12355 = state_12306__$1;
(statearr_12331_12355[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__10118__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__10118__auto____0 = (function (){
var statearr_12332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12332[(0)] = re_com$typeahead$debounce_$_state_machine__10118__auto__);

(statearr_12332[(1)] = (1));

return statearr_12332;
});
var re_com$typeahead$debounce_$_state_machine__10118__auto____1 = (function (state_12306){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_12306);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e12333){var ex__10121__auto__ = e12333;
var statearr_12334_12356 = state_12306;
(statearr_12334_12356[(2)] = ex__10121__auto__);


if(cljs.core.seq((state_12306[(4)]))){
var statearr_12335_12357 = state_12306;
(statearr_12335_12357[(1)] = cljs.core.first((state_12306[(4)])));

} else {
throw ex__10121__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__12358 = state_12306;
state_12306 = G__12358;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__10118__auto__ = function(state_12306){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__10118__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__10118__auto____1.call(this,state_12306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__10118__auto____0;
re_com$typeahead$debounce_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__10118__auto____1;
return re_com$typeahead$debounce_$_state_machine__10118__auto__;
})()
})();
var state__10194__auto__ = (function (){var statearr_12336 = (f__10193__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10193__auto__.cljs$core$IFn$_invoke$arity$0() : f__10193__auto__.call(null));
(statearr_12336[(6)] = c__10192__auto___12337);

return statearr_12336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10194__auto__);
}));


return out;
});
