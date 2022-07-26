// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.selection_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.text');
goog.require('re_com.checkbox');
goog.require('re_com.radio_button');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.util');
re_com.selection_list.label_style = (function re_com$selection_list$label_style(var_args){
var G__12866 = arguments.length;
switch (G__12866) {
case 2:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2 = (function (selected_QMARK_,as_exclusions_QMARK_){
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3(selected_QMARK_,as_exclusions_QMARK_,null);
}));

(re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3 = (function (selected_QMARK_,as_exclusions_QMARK_,selected_color){
var base_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1px"], null);
var base_style__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return as_exclusions_QMARK_;
} else {
return and__4221__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"line-through"], null)], 0)):base_style);
var base_style__$2 = (cljs.core.truth_((function (){var and__4221__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return selected_color;
} else {
return and__4221__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,selected_color], null)], 0)):base_style__$1);
return base_style__$2;
}));

(re_com.selection_list.label_style.cljs$lang$maxFixedArity = 3);

re_com.selection_list.check_clicked = (function re_com$selection_list$check_clicked(selections,item_id,ticked_QMARK_,required_QMARK_){
var num_selected = cljs.core.count(selections);
var only_item = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected))?cljs.core.first(selections):null);
if(cljs.core.truth_((function (){var and__4221__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(only_item,item_id);
} else {
return and__4221__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(ticked_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
}
}
});
re_com.selection_list.as_checked = (function re_com$selection_list$as_checked(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_,parts){
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,["list-group-item compact rc-selection-list-group-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group_DASH_item,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group_DASH_item,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__12868_12869 = re_com.selection_list.check_clicked(selections,item_id,cljs.core.not((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id))),required_QMARK_);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__12868_12869) : on_change.call(null,G__12868_12869));
}

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group_DASH_item,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.checkbox.checkbox,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/65614CC/re_com/selection_list.cljs",cljs.core.cst$kw$line,52], null)),cljs.core.cst$kw$class,["rc-selection-list-checkbox ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkbox,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkbox,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$checkbox,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$model,(!(((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)) == null))),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$label_DASH_style,re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)),as_exclusions_QMARK_),cljs.core.cst$kw$label,(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null);
});
re_com.selection_list.radio_clicked = (function re_com$selection_list$radio_clicked(selections,item_id){
if(cljs.core.truth_((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([item_id]);
}
});
re_com.selection_list.as_radio = (function re_com$selection_list$as_radio(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_,parts){
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,["list-group-item compact rc-selection-list-group-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group_DASH_item,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group_DASH_item,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return (selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id));
} else {
return and__4221__auto__;
}
})())){
} else {
var G__12870_12871 = re_com.selection_list.radio_clicked(selections,item_id);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__12870_12871) : on_change.call(null,G__12870_12871));
}
}

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group_DASH_item,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.radio_button.radio_button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/65614CC/re_com/selection_list.cljs",cljs.core.cst$kw$line,80], null)),cljs.core.cst$kw$class,["rc-selection-list-radio-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$radio_DASH_button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$radio_DASH_button,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null):null)], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$radio_DASH_button,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$model,cljs.core.first(selections),cljs.core.cst$kw$value,item_id,cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$label_DASH_style,re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)),as_exclusions_QMARK_),cljs.core.cst$kw$label,(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null);
});
re_com.selection_list.list_style = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$overflow_DASH_y,"auto"], null);
re_com.selection_list.spacing_bordered = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$padding_DASH_left,"5px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$margin_DASH_top,"5px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null);
re_com.selection_list.spacing_unbordered = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_left,"0px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$margin_DASH_top,"0px",cljs.core.cst$kw$margin_DASH_bottom,"0px"], null);
re_com.selection_list.selection_list_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-selection-list",cljs.core.cst$kw$impl,"[selection-list]",cljs.core.cst$kw$notes,"Outer wrapper for the selection list."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$list_DASH_group,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-selection-list-group",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"Container for the selection list items."], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$list_DASH_group_DASH_item,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-selection-list-group-item",cljs.core.cst$kw$impl,"[box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-selection-list-checkbox",cljs.core.cst$kw$impl,"[checkbox]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$radio_DASH_button,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-selection-list-radio-button",cljs.core.cst$kw$impl,"[radio-button]"], null)], null):null);
re_com.selection_list.selection_list_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.selection_list.selection_list_parts_desc)):null);
re_com.selection_list.selection_list_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of choices | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the selectable items. Elements can be strings or more interesting data items like {:label \"some name\" :sort 5}. Also see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," below (list of maps also allowed)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"set of :ids within :choices | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.set_or_atom_QMARK_,cljs.core.cst$kw$description,"the currently selected items. Note: items are considered distinct"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"set of :ids -> nil | r/atom",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a callback which will be passed set of the ids (as defined by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id-fn"], null),") of the selected items"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$multi_DASH_select_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, use check boxes, otherwise radio buttons"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$as_DASH_exclusions_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, selected items are shown with struck-out labels"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$required_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, at least one item must be selected. Note: being able to un-select a radio button is not a common use case, so this should probably be set to true when in single select mode"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"250px\". When specified, item labels may be clipped. Otherwise based on widest label"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"150px\". Size beyond which items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"150px\". If there are less items then this height, box will shrink. If there are more, items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, the time input will be disabled. Can be atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$hide_DASH_border_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, the list will be displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$item_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil | r/atom",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called for each element during setup, the returned component renders the element, responds to clicks etc."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.selection_list.selection_list_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Produce a list box with items arranged vertically
 */
re_com.selection_list.selection_list = (function re_com$selection_list$selection_list(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12878 = arguments.length;
var i__4830__auto___12879 = (0);
while(true){
if((i__4830__auto___12879 < len__4829__auto___12878)){
args__4835__auto__.push((arguments[i__4830__auto___12879]));

var G__12880 = (i__4830__auto___12879 + (1));
i__4830__auto___12879 = G__12880;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__12876){
var map__12877 = p__12876;
var map__12877__$1 = cljs.core.__destructure_map(map__12877);
var args = map__12877__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12877__$1,cljs.core.cst$kw$disabled_QMARK_,false);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$on_DASH_change);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$height);
var item_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$item_DASH_renderer);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12877__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12877__$1,cljs.core.cst$kw$required_QMARK_,false);
var as_exclusions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12877__$1,cljs.core.cst$kw$as_DASH_exclusions_QMARK_,false);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$max_DASH_height);
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12877__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_,false);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$width);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$src);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$choices);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12877__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,cljs.core.cst$kw$class);
var multi_select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12877__$1,cljs.core.cst$kw$multi_DASH_select_QMARK_,true);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.selection_list.selection_list_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var choices__$1 = re_com.util.deref_or_value(choices);
var model__$1 = re_com.util.deref_or_value(model);
var on_change__$1 = re_com.util.deref_or_value(on_change);
var multi_select_QMARK___$1 = re_com.util.deref_or_value(multi_select_QMARK_);
var as_exclusions_QMARK___$1 = re_com.util.deref_or_value(as_exclusions_QMARK_);
var required_QMARK___$1 = re_com.util.deref_or_value(required_QMARK_);
var width__$1 = re_com.util.deref_or_value(width);
var height__$1 = re_com.util.deref_or_value(height);
var max_height__$1 = re_com.util.deref_or_value(max_height);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var hide_border_QMARK___$1 = re_com.util.deref_or_value(hide_border_QMARK_);
var item_renderer__$1 = re_com.util.deref_or_value(item_renderer);
var selected = (cljs.core.truth_(multi_select_QMARK___$1)?model__$1:cljs.core.set((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(model__$1)],null))));
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(item_renderer__$1)?(function (p1__12872_SHARP_){
return (item_renderer__$1.cljs$core$IFn$_invoke$arity$8 ? item_renderer__$1.cljs$core$IFn$_invoke$arity$8(p1__12872_SHARP_,id_fn,selected,on_change__$1,disabled_QMARK___$1,label_fn,required_QMARK___$1,as_exclusions_QMARK___$1) : item_renderer__$1.call(null,p1__12872_SHARP_,id_fn,selected,on_change__$1,disabled_QMARK___$1,label_fn,required_QMARK___$1,as_exclusions_QMARK___$1));
}):(cljs.core.truth_(multi_select_QMARK___$1)?(function (p1__12873_SHARP_){
return re_com.selection_list.as_checked(p1__12873_SHARP_,id_fn,selected,on_change__$1,disabled_QMARK___$1,label_fn,required_QMARK___$1,as_exclusions_QMARK___$1,parts);
}):(function (p1__12874_SHARP_){
return re_com.selection_list.as_radio(p1__12874_SHARP_,id_fn,selected,on_change__$1,disabled_QMARK___$1,label_fn,required_QMARK___$1,as_exclusions_QMARK___$1,parts);
}))),choices__$1);
var bounds = cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$max_DASH_height], null));
var spacing = (cljs.core.truth_(hide_border_QMARK___$1)?re_com.selection_list.spacing_unbordered:re_com.selection_list.spacing_bordered);
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4223__auto____$1 = debug_as;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$class,["rc-selection-list ",(cljs.core.truth_(re_com.util.deref_or_value(disabled_QMARK___$1))?"rc-disabled":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$radius,"4px",cljs.core.cst$kw$border,(cljs.core.truth_(hide_border_QMARK___$1)?"none":null),cljs.core.cst$kw$child,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["list-group noselect rc-selection-list-group ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.selection_list.list_style,bounds,spacing,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list_DASH_group,cljs.core.cst$kw$attr], null))], 0))], null),items)], null);
}
}));

(re_com.selection_list.selection_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.selection_list.selection_list.cljs$lang$applyTo = (function (seq12875){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12875));
}));

