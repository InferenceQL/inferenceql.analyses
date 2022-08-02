// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.splits');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizontal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_com.splits.drag_handle = (function re_com$splits$drag_handle(orientation,over_QMARK_,parts){
var vertical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,cljs.core.cst$kw$vertical);
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",color].join('');
var flex_flow = [((vertical_QMARK_)?"row":"column")," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-",((vertical_QMARK_)?"v":"h"),"-split-handle display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_flow_style(flex_flow),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,((vertical_QMARK_)?width:length),cljs.core.cst$kw$height,((vertical_QMARK_)?length:width),cljs.core.cst$kw$margin,"auto"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-",((vertical_QMARK_)?"v":"h"),"-split-handle-bar-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle_DASH_bar_DASH_1,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,pos1,cljs.core.cst$kw$height,length,cljs.core.cst$kw$border_DASH_right,border], null):new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,length,cljs.core.cst$kw$height,pos1,cljs.core.cst$kw$border_DASH_bottom,border], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle_DASH_bar_DASH_1,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle_DASH_bar_DASH_1,cljs.core.cst$kw$attr], null))], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-",((vertical_QMARK_)?"v":"h"),"-split-handle-bar-2 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle_DASH_bar_DASH_2,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,pos2,cljs.core.cst$kw$height,length,cljs.core.cst$kw$border_DASH_right,border], null):new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,length,cljs.core.cst$kw$height,pos2,cljs.core.cst$kw$border_DASH_bottom,border], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle_DASH_bar_DASH_2,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handle_DASH_bar_DASH_2,cljs.core.cst$kw$attr], null))], 0))], null)], null);
});
re_com.splits.hv_split_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-h-split",cljs.core.cst$kw$impl,"[h-split]",cljs.core.cst$kw$notes,"Outer wrapper of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$left,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-h-split-left",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"First (i.e. left) panel of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$splitter,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-h-split-splitter",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter between panels."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$handle,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-h-split-handle",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter handle."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$handle_DASH_bar_DASH_1,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-h-split-handle-bar-1",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter handle's first bar."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$handle_DASH_bar_DASH_2,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-h-split-handle-bar-2",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter handle's second bar."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$right,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-h-split-right",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"Second (i.e. right) panel of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-v-split",cljs.core.cst$kw$impl,"[v-split]",cljs.core.cst$kw$notes,"Outer wrapper of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$top,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-v-split-top",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"First (i.e. top) panel of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$splitter,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-v-split-splitter",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter between panels."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$handle,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-v-split-handle",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter handle."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$handle_DASH_bar_DASH_1,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-split-handle-bar-1",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter handle's first bar."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$handle_DASH_bar_DASH_2,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-v-split-handle-bar-2",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The splitter handle's second bar."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$bottom,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-v-split-bottom",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"Second (i.e. bottom) panel of the split."], null)], null):null);
re_com.splits.hv_split_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.splits.hv_split_parts_desc)):null);
re_com.splits.hv_split_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$panel_DASH_1,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"markup to go in the left (or top) panel"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$panel_DASH_2,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"markup to go in the right (or bottom) panel"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"auto",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"applied to the outer container of the two panels. Equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"width of the outer container of the two panels. A CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"height of the outer container of the two panels. A CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$split_DASH_is_DASH_px_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":initial-split"], null)," is interpreted to be a fixed px value, otherwise a percentage value"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$initial_DASH_split,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(50),cljs.core.cst$kw$type,"double | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the initial size of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":panel-1"], null),". Subject to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":split-is-px?"], null),", it is either the initial split percentage for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":panel-1"], null)," (can be double value or string with/without percentage sign) or a fixed px value"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_split_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"double -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user moves the splitter bar (on mouse up, not on each mouse move). Given the new ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":panel-1"], null)," percentage split"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$splitter_DASH_size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"8px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"thickness of the splitter"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"8px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"thickness of the margin around the panels"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.splits.hv_split_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Returns markup for a horizontal layout component
 */
re_com.splits.h_split = (function re_com$splits$h_split(var_args){
var args__4835__auto__ = [];
var len__4829__auto___13003 = arguments.length;
var i__4830__auto___13004 = (0);
while(true){
if((i__4830__auto___13004 < len__4829__auto___13003)){
args__4835__auto__.push((arguments[i__4830__auto___13004]));

var G__13005 = (i__4830__auto___13004 + (1));
i__4830__auto___13004 = G__13005;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__12998){
var map__12999 = p__12998;
var map__12999__$1 = cljs.core.__destructure_map(map__12999);
var args = map__12999__$1;
var split_is_px_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12999__$1,cljs.core.cst$kw$split_DASH_is_DASH_px_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12999__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12999__$1,cljs.core.cst$kw$margin,"8px");
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12999__$1,cljs.core.cst$kw$initial_DASH_split,(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12999__$1,cljs.core.cst$kw$splitter_DASH_size,"8px");
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12999__$1,cljs.core.cst$kw$on_DASH_split_DASH_change);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12999__$1,cljs.core.cst$kw$width);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12999__$1,cljs.core.cst$kw$src);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12999__$1,cljs.core.cst$kw$size,"auto");
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.splits.hv_split_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("h-split-");
var split_perc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
var G__13000_13006 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__13000_13006) : on_split_change.call(null,G__13000_13006));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});
var calc_perc = (function (mouse_x){
var container = re_com.util.get_element_by_id(container_id);
var offsets = re_com.util.sum_scroll_offsets(container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(offsets));
if(cljs.core.truth_(split_is_px_QMARK_)){
return relative_x;
} else {
return (100.0 * (relative_x / c_width));
}
});
var _LT_html_GT__QMARK_ = (function (p1__12996_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12996_SHARP_,document.documentElement);
});
var mouseout = (function (event){
if(_LT_html_GT__QMARK_(event.relatedTarget)){
return stop_drag();
} else {
return null;
}
});
var mousemove = (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientX));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$id,container_id,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(size),re_com.box.flex_flow_style("row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,margin,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_up,(function (event){
stop_drag();

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_move,(function (event){
mousemove(event);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
mouseout(event);

return null;
})], null):null),re_com.debug.__GT_attr(args),attr], 0));
});
var make_panel_attrs = (function (class$,style,attr,in_drag_QMARK_,percentage){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style((cljs.core.truth_(split_is_px_QMARK_)?(((percentage > (0)))?["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"px"].join(''):"1 1 0px"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join(''))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null):null),style], 0))], null),attr], 0));
});
var make_splitter_attrs = (function (class$,style,attr){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
mousedown(event);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
mouseover_split();

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
mouseout_split();

return null;
}),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"col-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#f8f8f8"], null):null),style], 0))], null),attr], 0));
});
return (function() { 
var re_com$splits$h_split_render__delegate = function (p__13001){
var map__13002 = p__13001;
var map__13002__$1 = cljs.core.__destructure_map(map__13002);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$_splitter_DASH_size);
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$panel_DASH_2);
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$panel_DASH_1);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$attr);
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$_margin);
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$_on_DASH_split_DASH_change);
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$_width);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$parts);
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$_size);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$src);
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$_height);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$style);
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$_initial_DASH_split);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13002__$1,cljs.core.cst$kw$class);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs(["rc-h-split-top rc-h-split-left ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,cljs.core.cst$kw$class], null)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top,cljs.core.cst$kw$attr], null)),cljs.core.deref(dragging_QMARK_),cljs.core.deref(split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_splitter_attrs(["rc-h-split-splitter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splitter,cljs.core.cst$kw$class], null)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splitter,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splitter,cljs.core.cst$kw$attr], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,cljs.core.cst$kw$vertical,cljs.core.deref(over_QMARK_),parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs(["rc-h-split-bottom rc-h-split-right ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right,cljs.core.cst$kw$class], null)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,cljs.core.cst$kw$attr], null)),cljs.core.deref(dragging_QMARK_),(cljs.core.truth_(split_is_px_QMARK_)?(- cljs.core.deref(split_perc)):((100) - cljs.core.deref(split_perc)))),panel_2], null)], null);
};
var re_com$splits$h_split_render = function (var_args){
var p__13001 = null;
if (arguments.length > 0) {
var G__13007__i = 0, G__13007__a = new Array(arguments.length -  0);
while (G__13007__i < G__13007__a.length) {G__13007__a[G__13007__i] = arguments[G__13007__i + 0]; ++G__13007__i;}
  p__13001 = new cljs.core.IndexedSeq(G__13007__a,0,null);
} 
return re_com$splits$h_split_render__delegate.call(this,p__13001);};
re_com$splits$h_split_render.cljs$lang$maxFixedArity = 0;
re_com$splits$h_split_render.cljs$lang$applyTo = (function (arglist__13008){
var p__13001 = cljs.core.seq(arglist__13008);
return re_com$splits$h_split_render__delegate(p__13001);
});
re_com$splits$h_split_render.cljs$core$IFn$_invoke$arity$variadic = re_com$splits$h_split_render__delegate;
return re_com$splits$h_split_render;
})()
;
}
}));

(re_com.splits.h_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.splits.h_split.cljs$lang$applyTo = (function (seq12997){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12997));
}));

/**
 * Returns markup for a vertical layout component
 */
re_com.splits.v_split = (function re_com$splits$v_split(var_args){
var args__4835__auto__ = [];
var len__4829__auto___13016 = arguments.length;
var i__4830__auto___13017 = (0);
while(true){
if((i__4830__auto___13017 < len__4829__auto___13016)){
args__4835__auto__.push((arguments[i__4830__auto___13017]));

var G__13018 = (i__4830__auto___13017 + (1));
i__4830__auto___13017 = G__13018;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__13011){
var map__13012 = p__13011;
var map__13012__$1 = cljs.core.__destructure_map(map__13012);
var args = map__13012__$1;
var split_is_px_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,cljs.core.cst$kw$split_DASH_is_DASH_px_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13012__$1,cljs.core.cst$kw$margin,"8px");
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13012__$1,cljs.core.cst$kw$initial_DASH_split,(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13012__$1,cljs.core.cst$kw$splitter_DASH_size,"8px");
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,cljs.core.cst$kw$on_DASH_split_DASH_change);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,cljs.core.cst$kw$width);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,cljs.core.cst$kw$src);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13012__$1,cljs.core.cst$kw$size,"auto");
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.splits.hv_split_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("v-split-");
var split_perc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
var G__13013_13019 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__13013_13019) : on_split_change.call(null,G__13013_13019));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});
var calc_perc = (function (mouse_y){
var container = re_com.util.get_element_by_id(container_id);
var offsets = re_com.util.sum_scroll_offsets(container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(offsets));
if(cljs.core.truth_(split_is_px_QMARK_)){
return relative_y;
} else {
return (100.0 * (relative_y / c_height));
}
});
var _LT_html_GT__QMARK_ = (function (p1__13009_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13009_SHARP_,document.documentElement);
});
var mouseout = (function (event){
if(_LT_html_GT__QMARK_(event.relatedTarget)){
return stop_drag();
} else {
return null;
}
});
var mousemove = (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientY));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$id,container_id,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(size),re_com.box.flex_flow_style("column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,margin,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_mouse_DASH_up,(function (event){
stop_drag();

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_move,(function (event){
mousemove(event);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
mouseout(event);

return null;
})], null):null),re_com.debug.__GT_attr(args),attr], 0));
});
var make_panel_attrs = (function (class$,style,attr,in_drag_QMARK_,percentage){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style((cljs.core.truth_(split_is_px_QMARK_)?(((percentage > (0)))?["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"px"].join(''):"1 1 0px"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join(''))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null):null),style], 0))], null),attr], 0));
});
var make_splitter_attrs = (function (class$,style,attr){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
mousedown(event);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
mouseover_split();

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
mouseout_split();

return null;
}),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"row-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#f8f8f8"], null):null),style], 0))], null),attr], 0));
});
return (function() { 
var re_com$splits$v_split_render__delegate = function (p__13014){
var map__13015 = p__13014;
var map__13015__$1 = cljs.core.__destructure_map(map__13015);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$_splitter_DASH_size);
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$panel_DASH_2);
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$panel_DASH_1);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$attr);
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$_margin);
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$_on_DASH_split_DASH_change);
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$_width);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$parts);
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$_size);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$src);
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$_height);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$style);
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$_initial_DASH_split);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,cljs.core.cst$kw$class);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs(["rc-v-split-top ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top,cljs.core.cst$kw$class], null)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top,cljs.core.cst$kw$attr], null)),cljs.core.deref(dragging_QMARK_),cljs.core.deref(split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_splitter_attrs(["rc-v-split-splitter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splitter,cljs.core.cst$kw$class], null)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splitter,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splitter,cljs.core.cst$kw$attr], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,cljs.core.cst$kw$horizontal,cljs.core.deref(over_QMARK_),parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,make_panel_attrs(["rc-v-split-bottom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,cljs.core.cst$kw$class], null)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,cljs.core.cst$kw$attr], null)),cljs.core.deref(dragging_QMARK_),(cljs.core.truth_(split_is_px_QMARK_)?(- cljs.core.deref(split_perc)):((100) - cljs.core.deref(split_perc)))),panel_2], null)], null);
};
var re_com$splits$v_split_render = function (var_args){
var p__13014 = null;
if (arguments.length > 0) {
var G__13020__i = 0, G__13020__a = new Array(arguments.length -  0);
while (G__13020__i < G__13020__a.length) {G__13020__a[G__13020__i] = arguments[G__13020__i + 0]; ++G__13020__i;}
  p__13014 = new cljs.core.IndexedSeq(G__13020__a,0,null);
} 
return re_com$splits$v_split_render__delegate.call(this,p__13014);};
re_com$splits$v_split_render.cljs$lang$maxFixedArity = 0;
re_com$splits$v_split_render.cljs$lang$applyTo = (function (arglist__13021){
var p__13014 = cljs.core.seq(arglist__13021);
return re_com$splits$v_split_render__delegate(p__13014);
});
re_com$splits$v_split_render.cljs$core$IFn$_invoke$arity$variadic = re_com$splits$v_split_render__delegate;
return re_com$splits$v_split_render;
})()
;
}
}));

(re_com.splits.v_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.splits.v_split.cljs$lang$applyTo = (function (seq13010){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13010));
}));

