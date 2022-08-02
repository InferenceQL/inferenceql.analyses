// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.simple_v_table');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_com.config');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('re_com.v_table');
re_com.simple_v_table.swap_BANG__sort_by_column = (function re_com$simple_v_table$swap_BANG__sort_by_column(p__12791,new_key_fn,new_comp){
var map__12792 = p__12791;
var map__12792__$1 = cljs.core.__destructure_map(map__12792);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12792__$1,cljs.core.cst$kw$key_DASH_fn);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12792__$1,cljs.core.cst$kw$order);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_fn,new_key_fn)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$asc,order)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$comp,new_comp,cljs.core.cst$kw$order,cljs.core.cst$kw$desc], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key_DASH_fn,new_key_fn,cljs.core.cst$kw$comp,new_comp,cljs.core.cst$kw$order,cljs.core.cst$kw$asc], null);
}
});
re_com.simple_v_table.sort_icon = (function re_com$simple_v_table$sort_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"24",cljs.core.cst$kw$viewBox,"0 0 24 24",cljs.core.cst$kw$width,"24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"], null)], null)], null);
});
re_com.simple_v_table.arrow_down_icon = (function re_com$simple_v_table$arrow_down_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"24",cljs.core.cst$kw$viewBox,"0 0 24 24",cljs.core.cst$kw$width,"24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M7 10l5 5 5-5H7z"], null)], null)], null);
});
re_com.simple_v_table.arrow_up_icon = (function re_com$simple_v_table$arrow_up_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"24",cljs.core.cst$kw$viewBox,"0 0 24 24",cljs.core.cst$kw$width,"24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M7 14l5-5 5 5H7z"], null)], null)], null);
});
re_com.simple_v_table.column_header_item = (function re_com$simple_v_table$column_header_item(p__12793,parts,sort_by_column){
var map__12794 = p__12793;
var map__12794__$1 = cljs.core.__destructure_map(map__12794);
var column = map__12794__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$id);
var row_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$row_DASH_label_DASH_fn);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$height);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$align);
var vertical_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$vertical_DASH_align);
var header_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$header_DASH_label);
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12794__$1,cljs.core.cst$kw$sort_DASH_by);
var map__12795 = sort_by;
var map__12795__$1 = cljs.core.__destructure_map(map__12795);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12795__$1,cljs.core.cst$kw$key_DASH_fn,row_label_fn);
var comp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12795__$1,cljs.core.cst$kw$comp,cljs.core.compare);
var map__12796 = cljs.core.deref(sort_by_column);
var map__12796__$1 = cljs.core.__destructure_map(map__12796);
var current_key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,cljs.core.cst$kw$key_DASH_fn);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,cljs.core.cst$kw$order);
var on_click = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sort_by_column,re_com.simple_v_table.swap_BANG__sort_by_column,key_fn,comp);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-simple-v-table-column-header-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_column_DASH_header_DASH_item,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$text_DASH_overflow,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$overflow,cljs.core.cst$kw$width,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$height],["ellipsis",align,vertical_align,"24px","nowrap","bold","hidden",re_com.util.px((cljs.core.truth_(sort_by)?(width - (24)):width)),"0px 12px","inline-block",re_com.util.px(height)]),(cljs.core.truth_(sort_by)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_column_DASH_header_DASH_item,cljs.core.cst$kw$style], null))], 0))], null),(cljs.core.truth_(sort_by)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,on_click], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_column_DASH_header_DASH_item,cljs.core.cst$kw$attr], null))], 0)),header_label], null),(cljs.core.truth_(sort_by)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$width,"24px",cljs.core.cst$kw$height,"24px",cljs.core.cst$kw$text_DASH_align,align,cljs.core.cst$kw$vertical_DASH_align,vertical_align], null),cljs.core.cst$kw$on_DASH_click,on_click], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_key_fn,key_fn))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.sort_icon], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,cljs.core.cst$kw$desc))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.arrow_down_icon], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.arrow_up_icon], null)))], null):null)], null);
});
/**
 * :column-header-renderer AND :top-left-renderer - Render the table header
 */
re_com.simple_v_table.column_header_renderer = (function re_com$simple_v_table$column_header_renderer(columns,parts,sort_by_column){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-simple-v-table-column-header noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_column_DASH_header,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"4px 0px",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$white_DASH_space,"nowrap"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_column_DASH_header,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$on_DASH_click,(function (event){
re_com.v_table.show_row_data_on_alt_click(columns,(0),event);

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_column_DASH_header,cljs.core.cst$kw$attr], null))], 0))], null),(function (){var iter__4622__auto__ = (function re_com$simple_v_table$column_header_renderer_$_iter__12797(s__12798){
return (new cljs.core.LazySeq(null,(function (){
var s__12798__$1 = s__12798;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12798__$1);
if(temp__5753__auto__){
var s__12798__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12798__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12798__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12800 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12799 = (0);
while(true){
if((i__12799 < size__4621__auto__)){
var column = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12799);
cljs.core.chunk_append(b__12800,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.column_header_item,column,parts,sort_by_column], null));

var G__12801 = (i__12799 + (1));
i__12799 = G__12801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12800),re_com$simple_v_table$column_header_renderer_$_iter__12797(cljs.core.chunk_rest(s__12798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12800),null);
}
} else {
var column = cljs.core.first(s__12798__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.column_header_item,column,parts,sort_by_column], null),re_com$simple_v_table$column_header_renderer_$_iter__12797(cljs.core.rest(s__12798__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(columns);
})());
});
/**
 * Render a single row item (column) of a single row
 */
re_com.simple_v_table.row_item = (function re_com$simple_v_table$row_item(row,p__12802,cell_style,parts){
var map__12803 = p__12802;
var map__12803__$1 = cljs.core.__destructure_map(map__12803);
var column = map__12803__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12803__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12803__$1,cljs.core.cst$kw$height);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12803__$1,cljs.core.cst$kw$align);
var vertical_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12803__$1,cljs.core.cst$kw$vertical_DASH_align);
var row_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12803__$1,cljs.core.cst$kw$row_DASH_label_DASH_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-simple-v-table-row-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_row_DASH_item,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$text_DASH_overflow,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$overflow,cljs.core.cst$kw$width,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$height],["ellipsis",align,vertical_align,"nowrap","hidden",re_com.util.px(width),["0px ","12px"].join(''),"inline-block",re_com.util.px(height)]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_row_DASH_item,cljs.core.cst$kw$style], null)),((cljs.core.fn_QMARK_(cell_style))?(cell_style.cljs$core$IFn$_invoke$arity$2 ? cell_style.cljs$core$IFn$_invoke$arity$2(row,column) : cell_style.call(null,row,column)):cell_style)], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_row_DASH_item,cljs.core.cst$kw$attr], null))], 0)),(row_label_fn.cljs$core$IFn$_invoke$arity$1 ? row_label_fn.cljs$core$IFn$_invoke$arity$1(row) : row_label_fn.call(null,row))], null);
});
/**
 * :row-renderer AND :row-header-renderer: Render a single row of the table data
 */
re_com.simple_v_table.row_renderer = (function re_com$simple_v_table$row_renderer(columns,on_click_row,on_enter_row,on_leave_row,row_height,row_style,cell_style,parts,table_row_line_color,row_index,row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["rc-simple-v-table-row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_row,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding,"4px 0px",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$white_DASH_space,"nowrap",cljs.core.cst$kw$height,re_com.util.px(row_height),cljs.core.cst$kw$border_DASH_top,["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_row_line_color)].join(''),cljs.core.cst$kw$cursor,(cljs.core.truth_(on_click_row)?"pointer":null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_row,cljs.core.cst$kw$style], null)),((cljs.core.fn_QMARK_(row_style))?(row_style.cljs$core$IFn$_invoke$arity$1 ? row_style.cljs$core$IFn$_invoke$arity$1(row) : row_style.call(null,row)):row_style)], 0)),cljs.core.cst$kw$on_DASH_click,(function (event){
re_com.v_table.show_row_data_on_alt_click(row,row_index,event);

if(cljs.core.truth_(on_click_row)){
(on_click_row.cljs$core$IFn$_invoke$arity$1 ? on_click_row.cljs$core$IFn$_invoke$arity$1(row_index) : on_click_row.call(null,row_index));
} else {
}

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,(cljs.core.truth_(on_enter_row)?(function (event){
(on_enter_row.cljs$core$IFn$_invoke$arity$1 ? on_enter_row.cljs$core$IFn$_invoke$arity$1(row_index) : on_enter_row.call(null,row_index));

return null;
}):null),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,(cljs.core.truth_(on_leave_row)?(function (event){
(on_leave_row.cljs$core$IFn$_invoke$arity$1 ? on_leave_row.cljs$core$IFn$_invoke$arity$1(row_index) : on_leave_row.call(null,row_index));

return null;
}):null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_row,cljs.core.cst$kw$attr], null))], 0))], null),(function (){var iter__4622__auto__ = (function re_com$simple_v_table$row_renderer_$_iter__12804(s__12805){
return (new cljs.core.LazySeq(null,(function (){
var s__12805__$1 = s__12805;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12805__$1);
if(temp__5753__auto__){
var s__12805__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12805__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12805__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12807 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12806 = (0);
while(true){
if((i__12806 < size__4621__auto__)){
var column = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12806);
cljs.core.chunk_append(b__12807,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.row_item,row,column,cell_style,parts], null));

var G__12808 = (i__12806 + (1));
i__12806 = G__12808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12807),re_com$simple_v_table$row_renderer_$_iter__12804(cljs.core.chunk_rest(s__12805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12807),null);
}
} else {
var column = cljs.core.first(s__12805__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.row_item,row,column,cell_style,parts], null),re_com$simple_v_table$row_renderer_$_iter__12804(cljs.core.rest(s__12805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(columns);
})());
});
re_com.simple_v_table.simple_v_table_exclusive_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$simple_DASH_wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-simple-v-table-wrapper",cljs.core.cst$kw$impl,"[simple-v-table]",cljs.core.cst$kw$notes,"Outer container of the simple-v-table"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$simple_DASH_column_DASH_header,cljs.core.cst$kw$level,(5),cljs.core.cst$kw$class,"rc-simple-v-table-column-header",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"Simple-v-table's container for column headers (placed under v-table's :column-header-content/:top-left)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$simple_DASH_column_DASH_header_DASH_item,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-simple-v-table-column-header-item",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"Individual column header item/cell components"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$simple_DASH_row,cljs.core.cst$kw$level,(5),cljs.core.cst$kw$class,"rc-simple-v-table-row",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"Simple-v-table's container for rows (placed under v-table's :row-content/:row-header-content)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$simple_DASH_row_DASH_item,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-simple-v-table-row-item",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"Individual row item/cell components"], null)], null):null);
re_com.simple_v_table.simple_v_table_exclusive_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.simple_v_table.simple_v_table_exclusive_parts_desc)):null);
re_com.simple_v_table.simple_v_table_parts_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_com.simple_v_table.simple_v_table_exclusive_parts_desc,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12809_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__12809_SHARP_,cljs.core.cst$kw$level,cljs.core.inc);
}),re_com.v_table.v_table_parts_desc)):null);
re_com.simple_v_table.simple_v_table_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.simple_v_table.simple_v_table_parts_desc)):null);
re_com.simple_v_table.simple_v_table_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"r/atom containing vec of maps",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_atom_QMARK_,cljs.core.cst$kw$description,"one element for each row in the table."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$columns,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of maps",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one element for each column in the table. Must contain ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null),",",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":header-label"], null),",",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":row-label-fn"], null),",",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":width"], null),", and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":height"], null),". Optionally contains ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":sort-by"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":align"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":vertical-align"], null),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":sort-by"], null)," can be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"true"], null)," or a map optionally containing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":key-fn"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":comp"], null)," ala ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"cljs.core/sort-by"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$fixed_DASH_column_DASH_count,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(0),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"the number of fixed (non-scrolling) columns on the left."], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$fixed_DASH_column_DASH_border_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"#BBBEC0",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"The CSS color of the horizontal border between the fixed columns on the left, and the other columns on the right. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":fixed-column-count"], null)," must be > 0 to be visible."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_header_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(31),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"px height of the column header section. Typically, equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":row-height"], null)," * number-of-column-header-rows."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$column_DASH_header_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"cols parts sort-by-col -> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,"You can provide a renderer function to override the inbuilt renderer for the columns headings"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS max-width setting of the entire table. Literally constrains the table to the given width so that if the table is wider than this it will add scrollbars. Ignored if value is larger than the combined width of all the columns and table padding."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_rows,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"The maximum number of rows to display in the table without scrolling. If not provided will take up all available vertical space."], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(31),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"px height of each row."], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$table_DASH_padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(19),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,"Padding in pixels for the entire table."], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$table_DASH_row_DASH_line_DASH_color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"#EAEEF1",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"The CSS color of the lines between rows."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click_DASH_row,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"function",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,"This function is called when the user clicks a row. Called with the row index. Do not use for adjusting row styles, use styling instead."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_enter_DASH_row,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"function",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,"This function is called when the user's mouse pointer enters a row. Called with the row index. Do not use for adjusting row styles, use styling instead."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_leave_DASH_row,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"function",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,"This function is called when the user's mouse pointer leaves a row. Called with the row index. Do not use for adjusting row styles, use styling instead."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$row_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map | function",cljs.core.cst$kw$validate_DASH_fn,(function (p1__12810_SHARP_){
return ((cljs.core.fn_QMARK_(p1__12810_SHARP_)) || (cljs.core.map_QMARK_(p1__12810_SHARP_)));
}),cljs.core.cst$kw$description,"Style each row container either statically by passing a CSS map or dynamically by passing a function which receives the data for that row."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$cell_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map | function",cljs.core.cst$kw$validate_DASH_fn,(function (p1__12811_SHARP_){
return ((cljs.core.fn_QMARK_(p1__12811_SHARP_)) || (cljs.core.map_QMARK_(p1__12811_SHARP_)));
}),cljs.core.cst$kw$description,"Style each cell in a row either statically by passing a CSS map or dynamically by passing a function which receives the data for that row and the cell definition from the columns arg."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.simple_v_table.simple_v_table_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Render a v-table and introduce the concept of columns (provide a spec for each).
 *   Of the nine possible sections of v-table, this table only supports four:
 *   top-left (1), row-headers (2), col-headers (4) and rows (5)
 *   Note that row-style and cell-style can either be a style map or functions which return a style map:
 * - (row-style row)
 * - (cell-style row col)
 *   where row is the data for that row and col is the definition map for that column
 *   
 */
re_com.simple_v_table.simple_v_table = (function re_com$simple_v_table$simple_v_table(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12819 = arguments.length;
var i__4830__auto___12820 = (0);
while(true){
if((i__4830__auto___12820 < len__4829__auto___12819)){
args__4835__auto__.push((arguments[i__4830__auto___12820]));

var G__12821 = (i__4830__auto___12820 + (1));
i__4830__auto___12820 = G__12821;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.simple_v_table.simple_v_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.simple_v_table.simple_v_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__12813){
var map__12814 = p__12813;
var map__12814__$1 = cljs.core.__destructure_map(map__12814);
var args = map__12814__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12814__$1,cljs.core.cst$kw$src);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.simple_v_table.simple_v_table_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var sort_by_column = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var re_com$simple_v_table$simple_v_table_render__delegate = function (p__12815){
var map__12816 = p__12815;
var map__12816__$1 = cljs.core.__destructure_map(map__12816);
var args__$1 = map__12816__$1;
var cell_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$cell_DASH_style);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$model);
var on_leave_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$on_DASH_leave_DASH_row);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$columns);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$parts);
var on_enter_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$on_DASH_enter_DASH_row);
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12816__$1,cljs.core.cst$kw$row_DASH_height,(31));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$max_DASH_width);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$src);
var on_click_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$on_DASH_click_DASH_row);
var table_row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12816__$1,cljs.core.cst$kw$table_DASH_row_DASH_line_DASH_color,"#EAEEF1");
var table_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12816__$1,cljs.core.cst$kw$table_DASH_padding,(19));
var column_header_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12816__$1,cljs.core.cst$kw$column_DASH_header_DASH_height,(31));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$debug_DASH_as);
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$max_DASH_rows);
var row_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$row_DASH_style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12816__$1,cljs.core.cst$kw$class);
var fixed_column_border_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12816__$1,cljs.core.cst$kw$fixed_DASH_column_DASH_border_DASH_color,"#BBBEC0");
var column_header_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12816__$1,cljs.core.cst$kw$column_DASH_header_DASH_renderer,re_com.simple_v_table.column_header_renderer);
var fixed_column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12816__$1,cljs.core.cst$kw$fixed_DASH_column_DASH_count,(0));
var or__4223__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.simple_v_table.simple_v_table_args_desc),args__$1));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var fcc_bounded = (function (){var x__4309__auto__ = fixed_column_count;
var y__4310__auto__ = cljs.core.count(columns);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var fixed_cols = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(columns,(0),fcc_bounded);
var content_cols = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(columns,fcc_bounded,cljs.core.count(columns));
var fixed_content_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$width,fixed_cols));
var content_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$width,content_cols));
var table_border_style = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_row_line_color)].join('');
var fixed_col_border_style = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_column_border_color)].join('');
var actual_table_width = (((((fixed_content_width + (((fixed_column_count > (0)))?(1):null)) + content_width) + re_com.v_table.scrollbar_tot_thick) + ((2) * table_padding)) + (2));
var internal_model = reagent.core.track((function (){
var temp__5751__auto__ = cljs.core.deref(sort_by_column);
if(cljs.core.truth_(temp__5751__auto__)){
var map__12817 = temp__5751__auto__;
var map__12817__$1 = cljs.core.__destructure_map(map__12817);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12817__$1,cljs.core.cst$kw$key_DASH_fn);
var comp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12817__$1,cljs.core.cst$kw$comp,cljs.core.compare);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12817__$1,cljs.core.cst$kw$order);
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(key_fn,comp,re_com.util.deref_or_value(model));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,cljs.core.cst$kw$desc)){
return cljs.core.vec(cljs.core.reverse(sorted));
} else {
return cljs.core.vec(sorted);
}
} else {
return re_com.util.deref_or_value(model);
}
}));
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4223__auto____$2 = debug_as;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$class,["rc-simple-v-table-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$flex,(cljs.core.truth_(max_rows)?"0 1 auto":"100%"),cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$padding,re_com.util.px(table_padding),cljs.core.cst$kw$max_DASH_width,(function (){var or__4223__auto____$2 = max_width;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return re_com.util.px(actual_table_width);
}
})(),cljs.core.cst$kw$border,table_border_style,cljs.core.cst$kw$border_DASH_radius,"3px"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_wrapper,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple_DASH_wrapper,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.v_table,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/E94FAF6/re_com/simple_v_table.cljs",cljs.core.cst$kw$line,271], null)),cljs.core.cst$kw$model,internal_model,cljs.core.cst$kw$column_DASH_header_DASH_renderer,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(column_header_renderer,content_cols,parts,sort_by_column),cljs.core.cst$kw$column_DASH_header_DASH_height,column_header_height,cljs.core.cst$kw$row_DASH_header_DASH_renderer,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.simple_v_table.row_renderer,fixed_cols,on_click_row,on_enter_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_leave_row,row_height,row_style,cell_style,parts,table_row_line_color], 0)),cljs.core.cst$kw$row_DASH_renderer,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.simple_v_table.row_renderer,content_cols,on_click_row,on_enter_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_leave_row,row_height,row_style,cell_style,parts,table_row_line_color], 0)),cljs.core.cst$kw$row_DASH_content_DASH_width,content_width,cljs.core.cst$kw$row_DASH_height,row_height,cljs.core.cst$kw$max_DASH_row_DASH_viewport_DASH_height,(cljs.core.truth_(max_rows)?(max_rows * row_height):null),cljs.core.cst$kw$top_DASH_left_DASH_renderer,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(column_header_renderer,fixed_cols,parts,sort_by_column),cljs.core.cst$kw$class,class$,cljs.core.cst$kw$parts,(function (){var G__12818 = re_com.util.assoc_in_if_empty(re_com.util.assoc_in_if_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parts], null),re_com.simple_v_table.simple_v_table_exclusive_parts)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style,cljs.core.cst$kw$font_DASH_size], null),"13px"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style,cljs.core.cst$kw$cursor], null),"default");
if((fixed_column_count > (0))){
return re_com.util.assoc_in_if_empty(re_com.util.assoc_in_if_empty(G__12818,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$style,cljs.core.cst$kw$border_DASH_right], null),fixed_col_border_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row_DASH_headers,cljs.core.cst$kw$style,cljs.core.cst$kw$border_DASH_right], null),fixed_col_border_style);
} else {
return G__12818;
}
})()], null)], null);
}
};
var re_com$simple_v_table$simple_v_table_render = function (var_args){
var p__12815 = null;
if (arguments.length > 0) {
var G__12822__i = 0, G__12822__a = new Array(arguments.length -  0);
while (G__12822__i < G__12822__a.length) {G__12822__a[G__12822__i] = arguments[G__12822__i + 0]; ++G__12822__i;}
  p__12815 = new cljs.core.IndexedSeq(G__12822__a,0,null);
} 
return re_com$simple_v_table$simple_v_table_render__delegate.call(this,p__12815);};
re_com$simple_v_table$simple_v_table_render.cljs$lang$maxFixedArity = 0;
re_com$simple_v_table$simple_v_table_render.cljs$lang$applyTo = (function (arglist__12823){
var p__12815 = cljs.core.seq(arglist__12823);
return re_com$simple_v_table$simple_v_table_render__delegate(p__12815);
});
re_com$simple_v_table$simple_v_table_render.cljs$core$IFn$_invoke$arity$variadic = re_com$simple_v_table$simple_v_table_render__delegate;
return re_com$simple_v_table$simple_v_table_render;
})()
;
}
}));

(re_com.simple_v_table.simple_v_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.simple_v_table.simple_v_table.cljs$lang$applyTo = (function (seq12812){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12812));
}));

