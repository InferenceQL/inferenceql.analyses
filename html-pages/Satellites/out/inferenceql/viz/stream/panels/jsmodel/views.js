// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.jsmodel.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.zip');
goog.require('clojure.edn');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('hickory.core');
goog.require('hickory.zip');
goog.require('hickory.render');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('inferenceql.viz.stream.store');
goog.require('inferenceql.viz.config');
goog.require('re_com.core');
inferenceql.viz.stream.panels.jsmodel.views.node$module$highlight$js$lib$core = require('highlight.js/lib/core');
inferenceql.viz.stream.panels.jsmodel.views.node$module$highlight$js$lib$languages$javascript = require('highlight.js/lib/languages/javascript');
inferenceql.viz.stream.panels.jsmodel.views.node$module$highlight$js$lib$core.registerLanguage("javascript",inferenceql.viz.stream.panels.jsmodel.views.node$module$highlight$js$lib$languages$javascript);
/**
 * Takes html of highlighted js-program and returns hiccup with cluster if-statements clickable.
 */
inferenceql.viz.stream.panels.jsmodel.views.add_cluster_spans = (function inferenceql$viz$stream$panels$jsmodel$views$add_cluster_spans(highlighted_js_text,model_num,cluster_selected){
var highlighted_js_text__$1 = ["<span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(highlighted_js_text),"</span>"].join('');
var hiccup = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,hickory.core.parse_fragment(highlighted_js_text__$1)));
var cluster_parent_ok_QMARK_ = (function (loc){
if(cljs.core.truth_(loc)){
var parent = (function (){var G__27369 = loc;
var G__27369__$1 = (((G__27369 == null))?null:clojure.zip.up(G__27369));
if((G__27369__$1 == null)){
return null;
} else {
return clojure.zip.node(G__27369__$1);
}
})();
var vec__27366 = parent;
var _p_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27366,(0),null);
var p_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27366,(1),null);
var p_classes = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p_attrs);
var p_classes__$1 = ((typeof p_classes === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_classes], null):p_classes);
return cljs.core.not_any_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["cluster-clickable",null], null), null),p_classes__$1);
} else {
return null;
}
});
var cluster_context_ok_QMARK_ = (function (loc){
if(cljs.core.truth_(loc)){
var vec__27370 = clojure.zip.rights(loc);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370,(1),null);
var r3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27370,(2),null);
var vec__27373 = r2;
var r2_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27373,(0),null);
var r2_attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27373,(1),null);
var r2_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27373,(2),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r1," (cluster_id == ")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"hljs-number"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2_tag,r2_attr], null))) && (((typeof clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(r2_content) === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r3,") {\n    ")))))));
} else {
return null;
}
});
var cluster_start_QMARK_ = (function (loc){
var node = clojure.zip.node(loc);
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"hljs-keyword"], null),"if"], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"hljs-keyword"], null),"else if"], null))));
if(and__4221__auto__){
var and__4221__auto____$1 = cluster_context_ok_QMARK_(loc);
if(cljs.core.truth_(and__4221__auto____$1)){
return cluster_parent_ok_QMARK_(loc);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});
var cluster_id = (function (loc){
var vec__27376 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),clojure.zip.rights(loc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376,(2),null);
var vec__27379 = r2;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27379,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27379,(1),null);
var r2_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27379,(2),null);
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(r2_content);
});
var view_id = (function (loc){
var l = loc;
while(true){
if((l == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),clojure.zip.node(l)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"hljs-function"], null)], null))){
var func_name = clojure.zip.node(clojure.zip.down(clojure.zip.right(clojure.zip.right(clojure.zip.down(l)))));
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_matches(/view_(\d+)/,func_name)));
} else {
var G__27388 = clojure.zip.left(l);
l = G__27388;
continue;

}
}
break;
}
});
var remove_until = (function (loc,endings){
var l = loc;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var n = clojure.zip.node(l);
if(cljs.core.truth_((endings.cljs$core$IFn$_invoke$arity$1 ? endings.cljs$core$IFn$_invoke$arity$1(n) : endings.call(null,n)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,n)], null);
} else {
var G__27389 = clojure.zip.next(clojure.zip.remove(l));
var G__27390 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,n);
l = G__27389;
acc = G__27390;
continue;
}
break;
}
});
var wrap_cluster_nodes = (function (loc){
if(cljs.core.truth_(cluster_start_QMARK_(loc))){
var cluster_id__$1 = cluster_id(loc);
var view_id__$1 = view_id(loc);
var current = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$model_DASH_id,model_num,cljs.core.cst$kw$cluster_DASH_id,cluster_id__$1,cljs.core.cst$kw$view_DASH_id,view_id__$1], null);
var current_selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,cluster_selected);
var cluster_endings = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [")\n    };\n  } ",null,"])\n    };\n  } ",null,")\n    };\n  }\n}\n\n",null,"])\n    };\n  }\n}\n\n",null], null), null);
var vec__27382 = remove_until(loc,cluster_endings);
var cluster_end_loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27382,(0),null);
var cluster_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27382,(1),null);
return clojure.zip.replace(cluster_end_loc,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cluster-clickable",((current_selected)?"cluster-selected":null),((current_selected)?"no-select":null)], null),cljs.core.cst$kw$onClick,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_select_DASH_cluster,current], null));
})], null)], null),cluster_nodes));
} else {
return loc;
}
});
var fix_hljs_string_nodes = (function (loc){
var node = clojure.zip.node(loc);
var class$ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$class], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,"hljs-string")){
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),goog.string.unescapeEntities], 0));
} else {
return loc;
}
});
var merge_else_if_nodes = (function (loc){
var node = clojure.zip.node(loc);
var vec__27385 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),clojure.zip.rights(loc));
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27385,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27385,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"hljs-keyword"], null),"else"], null))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r1," ")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"hljs-keyword"], null),"if"], null))))))){
return clojure.zip.replace(clojure.zip.next(clojure.zip.remove(clojure.zip.next(clojure.zip.remove(loc)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"hljs-keyword"], null),"else if"], null));
} else {
return loc;
}
});
var map_right = (function (hiccup__$1,f){
var zip = clojure.zip.down(hickory.zip.hiccup_zip(hiccup__$1));
var loc = zip;
while(true){
if((clojure.zip.right(loc) == null)){
return clojure.zip.root((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc)));
} else {
var G__27391 = clojure.zip.right((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc)));
loc = G__27391;
continue;
}
break;
}
});
return map_right(map_right(map_right(hiccup,fix_hljs_string_nodes),merge_else_if_nodes),wrap_cluster_nodes);
});
/**
 * Returns html of js-text highlighted with highlight.js
 */
inferenceql.viz.stream.panels.jsmodel.views.highlight = (function inferenceql$viz$stream$panels$jsmodel$views$highlight(js_text){
return inferenceql.viz.stream.panels.jsmodel.views.node$module$highlight$js$lib$core.highlight(js_text,({"language": "js"})).value;
});
/**
 * A reagent component that highlights js-code and makes clusters clickable.
 */
inferenceql.viz.stream.panels.jsmodel.views.js_clickable_clusters = (function inferenceql$viz$stream$panels$jsmodel$views$js_clickable_clusters(model_num,js_code,cluster_selected){
return inferenceql.viz.stream.panels.jsmodel.views.add_cluster_spans(inferenceql.viz.stream.panels.jsmodel.views.highlight(js_code),model_num,cluster_selected);
});
/**
 * Reagent component that displays Javascript code with syntax highlighting.
 *   Args: `js-code` -- (string) The Javascript source code to display.
 */
inferenceql.viz.stream.panels.jsmodel.views.js_code_block = (function inferenceql$viz$stream$panels$jsmodel$views$js_code_block(_model_num,_js_code,_cluster_selected){
var dom_nodes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"js-model-code",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (_){
return cljs.core.cst$kw$code_DASH_elem.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dom_nodes)).addEventListener("click",(function (event){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(event.target,cljs.core.cst$kw$code_DASH_elem.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dom_nodes)))){
var clicked_node_27393 = event.target;
var cluster_node_27394 = goog.dom.getAncestorByClass(clicked_node_27393,"cluster-clickable");
var pos_27395 = goog.style.getRelativePosition(cluster_node_27394,cljs.core.cst$kw$code_DASH_elem.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dom_nodes)));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_set_DASH_cluster_DASH_selected_DASH_y_DASH_offset,pos_27395.y], null));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.target,cljs.core.cst$kw$code_DASH_elem.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dom_nodes)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page_SLASH_clear_DASH_cluster_DASH_selection], null));
} else {
return null;
}
}));
}),cljs.core.cst$kw$reagent_DASH_render,(function (model_num,js_code,cluster_selected){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre_SHARP_program_DASH_display,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (p1__27392_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dom_nodes,cljs.core.assoc,cljs.core.cst$kw$code_DASH_elem,p1__27392_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.js_clickable_clusters,model_num,js_code,cluster_selected], null)], null)], null);
})], null));
});
/**
 * Reagent component for js-model.
 */
inferenceql.viz.stream.panels.jsmodel.views.js_model = (function inferenceql$viz$stream$panels$jsmodel$views$js_model(model_num,iteration,cluster_selected){
var js_model_text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.store.js_programs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iteration,model_num], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.js_code_block,model_num,js_model_text,cluster_selected], null);
});
inferenceql.viz.stream.panels.jsmodel.views.column_grouping_chips = (function inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips(column_groupings){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$class,"column-grouping-section",cljs.core.cst$kw$height,"150px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"11px",cljs.core.cst$kw$overflow,"hidden"], null),cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,(function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396(s__27397){
return (new cljs.core.LazySeq(null,(function (){
var s__27397__$1 = s__27397;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27397__$1);
if(temp__5753__auto__){
var s__27397__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27397__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27397__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27399 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27398 = (0);
while(true){
if((i__27398 < size__4621__auto__)){
var cg = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27398);
cljs.core.chunk_append(b__27399,(function (){var cg__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cg);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$class,"column-grouping",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_flow,"row wrap"], null),cljs.core.cst$kw$children,(function (){var iter__4622__auto__ = ((function (i__27398,cg__$1,cg,c__4620__auto__,size__4621__auto__,b__27399,s__27397__$2,temp__5753__auto__){
return (function inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396_$_iter__27400(s__27401){
return (new cljs.core.LazySeq(null,((function (i__27398,cg__$1,cg,c__4620__auto__,size__4621__auto__,b__27399,s__27397__$2,temp__5753__auto__){
return (function (){
var s__27401__$1 = s__27401;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27401__$1);
if(temp__5753__auto____$1){
var s__27401__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27401__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__27401__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__27403 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__27402 = (0);
while(true){
if((i__27402 < size__4621__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto____$1,i__27402);
cljs.core.chunk_append(b__27403,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"column-chip",cljs.core.cst$kw$child,col], null));

var G__27408 = (i__27402 + (1));
i__27402 = G__27408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27403),inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396_$_iter__27400(cljs.core.chunk_rest(s__27401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27403),null);
}
} else {
var col = cljs.core.first(s__27401__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"column-chip",cljs.core.cst$kw$child,col], null),inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396_$_iter__27400(cljs.core.rest(s__27401__$2)));
}
} else {
return null;
}
break;
}
});})(i__27398,cg__$1,cg,c__4620__auto__,size__4621__auto__,b__27399,s__27397__$2,temp__5753__auto__))
,null,null));
});})(i__27398,cg__$1,cg,c__4620__auto__,size__4621__auto__,b__27399,s__27397__$2,temp__5753__auto__))
;
return iter__4622__auto__(cg__$1);
})()], null);
})());

var G__27409 = (i__27398 + (1));
i__27398 = G__27409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27399),inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396(cljs.core.chunk_rest(s__27397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27399),null);
}
} else {
var cg = cljs.core.first(s__27397__$2);
return cljs.core.cons((function (){var cg__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cg);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$class,"column-grouping",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_flow,"row wrap"], null),cljs.core.cst$kw$children,(function (){var iter__4622__auto__ = ((function (cg__$1,cg,s__27397__$2,temp__5753__auto__){
return (function inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396_$_iter__27404(s__27405){
return (new cljs.core.LazySeq(null,(function (){
var s__27405__$1 = s__27405;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27405__$1);
if(temp__5753__auto____$1){
var s__27405__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27405__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27405__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27407 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27406 = (0);
while(true){
if((i__27406 < size__4621__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27406);
cljs.core.chunk_append(b__27407,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"column-chip",cljs.core.cst$kw$child,col], null));

var G__27410 = (i__27406 + (1));
i__27406 = G__27410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27407),inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396_$_iter__27404(cljs.core.chunk_rest(s__27405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27407),null);
}
} else {
var col = cljs.core.first(s__27405__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"column-chip",cljs.core.cst$kw$child,col], null),inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396_$_iter__27404(cljs.core.rest(s__27405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(cg__$1,cg,s__27397__$2,temp__5753__auto__))
;
return iter__4622__auto__(cg__$1);
})()], null);
})(),inferenceql$viz$stream$panels$jsmodel$views$column_grouping_chips_$_iter__27396(cljs.core.rest(s__27397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(column_groupings);
})()], null);
});
inferenceql.viz.stream.panels.jsmodel.views.tiny_js_model_placeholder = (function inferenceql$viz$stream$panels$jsmodel$views$tiny_js_model_placeholder(_num_missing_models){
var show_tooltip = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (num_missing_models){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"182.78px"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_tooltip,cljs.core.cst$kw$position,cljs.core.cst$kw$right_DASH_center,cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$showing_QMARK_,show_tooltip,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,goog.string.format("%s more models not shown here.",num_missing_models)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(function (){var G__27411 = ["All %s models are used to produce the column ","dependencies plot and the select vs. simulate ","plots below."].join('');
var G__27412 = (num_missing_models + (3));
return goog.string.format(G__27411,G__27412);
})()], null)], null),cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$border,"solid #7bb0db",cljs.core.cst$kw$border_DASH_width,"0px 0px 1px 0px",cljs.core.cst$kw$border_DASH_radius,"0px",cljs.core.cst$kw$font_DASH_size,"10px",cljs.core.cst$kw$margin,"0px",cljs.core.cst$kw$height,"420px"], null),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (){
return cljs.core.reset_BANG_(show_tooltip,true);
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (){
return cljs.core.reset_BANG_(show_tooltip,false);
}),cljs.core.cst$kw$class,"tiny-js-model"], null)], null)], null)], null)], null);
});
});
inferenceql.viz.stream.panels.jsmodel.views.tiny_js_model = (function inferenceql$viz$stream$panels$jsmodel$views$tiny_js_model(model_num,iteration){
var js_model_text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.store.js_programs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iteration,model_num], null));
var column_groupings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.config.config,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transitions,cljs.core.cst$kw$column_DASH_dependencies,iteration,model_num], null));
var highlighted_html = inferenceql.viz.stream.panels.jsmodel.views.highlight(js_model_text);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"275px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level4,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"12px"], null),cljs.core.cst$kw$label,(function (){var G__27413 = "Program %s, modeling dependencies";
var G__27414 = (model_num + (1));
return goog.string.format(G__27413,G__27414);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.jsmodel.views.column_grouping_chips,column_groupings], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"solid #7bb0db",cljs.core.cst$kw$border_DASH_width,"0px 0px 1px 0px",cljs.core.cst$kw$border_DASH_radius,"0px",cljs.core.cst$kw$margin,"0px"], null),cljs.core.cst$kw$class,"tiny-js-model"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"5px",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$overflow,"hidden"], null),cljs.core.cst$kw$onClick,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_set_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model_DASH_page,model_num], null)], null));
}),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,highlighted_html], null)], null)], null)], null)], null)], null);
});
