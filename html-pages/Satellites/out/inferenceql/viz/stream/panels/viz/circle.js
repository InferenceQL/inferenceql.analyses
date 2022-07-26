// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.viz.circle');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Raw vega spec for circle viz.
 */
inferenceql.viz.stream.panels.viz.circle.spec = (function inferenceql$viz$stream$panels$viz$circle$spec(tree,dependencies,extent,rotate,k){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$legends,cljs.core.cst$kw$width,cljs.core.cst$kw$scales,cljs.core.cst$kw$padding,cljs.core.cst$kw$marks,cljs.core.cst$kw$$schema,cljs.core.cst$kw$signals,cljs.core.cst$kw$height,cljs.core.cst$kw$data],[cljs.core.PersistentVector.EMPTY,(400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"edge-opacity",cljs.core.cst$kw$type,"pow",cljs.core.cst$kw$exponent,k], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"color",cljs.core.cst$kw$type,"ordinal",cljs.core.cst$kw$domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["depends on","imported by"], null),cljs.core.cst$kw$range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"colorIn"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"colorOut"], null)], null)], null)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$interactive,true,cljs.core.cst$kw$from,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,"leaves"], null),cljs.core.cst$kw$encode,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$field,"name"], null),cljs.core.cst$kw$baseline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"middle"], null)], null),cljs.core.cst$kw$update,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$align,cljs.core.cst$kw$dx,cljs.core.cst$kw$limit,cljs.core.cst$kw$fill,cljs.core.cst$kw$angle,cljs.core.cst$kw$fontWeight,cljs.core.cst$kw$x,cljs.core.cst$kw$fontSize],[new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$field,"y"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"datum.leftside ? 'right' : 'left'"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"textOffset * (datum.leftside ? -1 : 1)"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(140)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"datum.id === active",cljs.core.cst$kw$value,"black"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"indata('selected', 'source-id', datum.id)",cljs.core.cst$kw$signal,"colorIn"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"indata('selected', 'target-id', datum.id)",cljs.core.cst$kw$signal,"colorOut"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"datum.status == 'infected'",cljs.core.cst$kw$value,"orange"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"datum.status == 'source'",cljs.core.cst$kw$value,"red"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"black"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"datum.leftside ? datum.angle - 180 : datum.angle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"indata('selected', 'source-id', datum.id)",cljs.core.cst$kw$value,"bold"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"indata('selected', 'target-id', datum.id)",cljs.core.cst$kw$value,"bold"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$field,"x"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"textSize"], null)])], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"group",cljs.core.cst$kw$from,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$facet,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"path",cljs.core.cst$kw$data,"dependencies",cljs.core.cst$kw$field,"treepath"], null)], null),cljs.core.cst$kw$signals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"edgeClicked",cljs.core.cst$kw$push,"outer",cljs.core.cst$kw$on,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$events,"line:click",cljs.core.cst$kw$update,"parent"], null)], null)], null)], null),cljs.core.cst$kw$marks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"line",cljs.core.cst$kw$interactive,true,cljs.core.cst$kw$from,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,"path"], null),cljs.core.cst$kw$encode,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$interpolate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"bundle"], null),cljs.core.cst$kw$strokeWidth,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(3)], null)], null),cljs.core.cst$kw$update,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$stroke,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"parent['source-id'] === activeSource || parent['target-id'] === activeTarget",cljs.core.cst$kw$signal,"colorOut"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"parent['infected']",cljs.core.cst$kw$value,"red"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"steelblue"], null)], null),cljs.core.cst$kw$strokeOpacity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test,"parent['source-id'] === activeSource || parent['target-id'] === activeTarget",cljs.core.cst$kw$value,0.5], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"scale('edge-opacity', parent['edge-val'])"], null)], null),cljs.core.cst$kw$tension,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"tension"], null),cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$field,"x"], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$field,"y"], null)], null)], null)], null)], null)], null)], null),"https://vega.github.io/schema/vega/v5.json",new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"tension",cljs.core.cst$kw$value,0.33], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"radius",cljs.core.cst$kw$value,(100)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"extent",cljs.core.cst$kw$value,extent], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"rotate",cljs.core.cst$kw$value,rotate], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"textSize",cljs.core.cst$kw$value,(12)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"textOffset",cljs.core.cst$kw$value,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"layout",cljs.core.cst$kw$value,"cluster"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"colorIn",cljs.core.cst$kw$value,"firebrick"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"colorOut",cljs.core.cst$kw$value,"firebrick"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"originX",cljs.core.cst$kw$update,"width / 2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"originY",cljs.core.cst$kw$update,"height / 2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"active",cljs.core.cst$kw$value,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"activeSource",cljs.core.cst$kw$value,null,cljs.core.cst$kw$update,"active"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"activeTarget",cljs.core.cst$kw$value,null,cljs.core.cst$kw$update,"active"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"edgeClicked"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"edgeThreshold"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"confidenceThreshold"], null)], null),(400),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"tree",cljs.core.cst$kw$values,tree,cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"stratify",cljs.core.cst$kw$key,"id",cljs.core.cst$kw$parentKey,"parent"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"tree",cljs.core.cst$kw$method,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$signal,"layout"], null),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),cljs.core.cst$kw$as,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["alpha-ignore","beta-ignore","depth","children"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"formula",cljs.core.cst$kw$expr,"(rotate + extent * datum.alpha + 270) % 360",cljs.core.cst$kw$as,"angle"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"formula",cljs.core.cst$kw$expr,"inrange(datum.angle, [90, 270])",cljs.core.cst$kw$as,"leftside"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"formula",cljs.core.cst$kw$expr,"originX + radius * datum.beta * cos(PI * datum.angle / 180)",cljs.core.cst$kw$as,"x"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"formula",cljs.core.cst$kw$expr,"originY + radius * datum.beta * sin(PI * datum.angle / 180)",cljs.core.cst$kw$as,"y"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"leaves",cljs.core.cst$kw$source,"tree",cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"filter",cljs.core.cst$kw$expr,"!datum.children"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"dependencies",cljs.core.cst$kw$values,dependencies,cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"formula",cljs.core.cst$kw$expr,"treePath('tree', datum['source-id'], datum['target-id'])",cljs.core.cst$kw$as,"treepath",cljs.core.cst$kw$initonly,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"selected",cljs.core.cst$kw$source,"dependencies",cljs.core.cst$kw$transform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"filter",cljs.core.cst$kw$expr,"datum['source-id'] === activeSource || datum['target-id'] === activeTarget"], null)], null)], null)], null)]);
});
/**
 * Helper function for producing tree data for circle viz spec.
 */
inferenceql.viz.stream.panels.viz.circle.tree = (function inferenceql$viz$stream$panels$viz$circle$tree(node_names){
var root_id = (-1);
var root_node = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"root",cljs.core.cst$kw$id,root_id,cljs.core.cst$kw$alpha,0.5,cljs.core.cst$kw$beta,(0)], null);
var num_other_nodes = cljs.core.count(node_names);
var other_nodes_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_other_nodes));
var other_nodes_locs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27288_SHARP_){
return (((1) / num_other_nodes) * (p1__27288_SHARP_ - 0.5));
}),other_nodes_ids);
var other_nodes = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$circle$tree_$_iter__27289(s__27290){
return (new cljs.core.LazySeq(null,(function (){
var s__27290__$1 = s__27290;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27290__$1);
if(temp__5753__auto__){
var s__27290__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27290__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27290__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27292 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27291 = (0);
while(true){
if((i__27291 < size__4621__auto__)){
var vec__27293 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27291);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(1),null);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(2),null);
cljs.core.chunk_append(b__27292,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$id,id,cljs.core.cst$kw$parent,root_id,cljs.core.cst$kw$alpha,loc,cljs.core.cst$kw$beta,(1),cljs.core.cst$kw$status,null], null));

var G__27299 = (i__27291 + (1));
i__27291 = G__27299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27292),inferenceql$viz$stream$panels$viz$circle$tree_$_iter__27289(cljs.core.chunk_rest(s__27290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27292),null);
}
} else {
var vec__27296 = cljs.core.first(s__27290__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27296,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27296,(1),null);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27296,(2),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$id,id,cljs.core.cst$kw$parent,root_id,cljs.core.cst$kw$alpha,loc,cljs.core.cst$kw$beta,(1),cljs.core.cst$kw$status,null], null),inferenceql$viz$stream$panels$viz$circle$tree_$_iter__27289(cljs.core.rest(s__27290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,node_names,other_nodes_ids,other_nodes_locs));
})();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_node], null),other_nodes);
});
/**
 * Helper function for producing dependency data for circle viz spec.
 */
inferenceql.viz.stream.panels.viz.circle.dependencies = (function inferenceql$viz$stream$panels$viz$circle$dependencies(dependencies){
var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$circle$dependencies_$_iter__27300(s__27301){
return (new cljs.core.LazySeq(null,(function (){
var s__27301__$1 = s__27301;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27301__$1);
if(temp__5753__auto__){
var s__27301__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27301__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27301__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27303 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27302 = (0);
while(true){
if((i__27302 < size__4621__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27302);
cljs.core.chunk_append(b__27303,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.cst$kw$edge_DASH_present,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$infected,null], 0)));

var G__27304 = (i__27302 + (1));
i__27302 = G__27304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27303),inferenceql$viz$stream$panels$viz$circle$dependencies_$_iter__27300(cljs.core.chunk_rest(s__27301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27303),null);
}
} else {
var d = cljs.core.first(s__27301__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.cst$kw$edge_DASH_present,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$infected,null], 0)),inferenceql$viz$stream$panels$viz$circle$dependencies_$_iter__27300(cljs.core.rest(s__27301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(dependencies);
});
/**
 * Returns a vega spec for the circle viz.
 *   node-names - a list of node names as keywords.
 *   edges - a list pairs where each pair consists of two node-names forming the edge.
 */
inferenceql.viz.stream.panels.viz.circle.circle_viz_spec = (function inferenceql$viz$stream$panels$viz$circle$circle_viz_spec(node_names,edges,k){
var tree = inferenceql.viz.stream.panels.viz.circle.tree(node_names);
var edges_clean = (function (){var edges__$1 = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$circle$circle_viz_spec_$_iter__27308(s__27309){
return (new cljs.core.LazySeq(null,(function (){
var s__27309__$1 = s__27309;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27309__$1);
if(temp__5753__auto__){
var s__27309__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27309__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27309__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27311 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27310 = (0);
while(true){
if((i__27310 < size__4621__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27310);
cljs.core.chunk_append(b__27311,cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,cljs.core.cst$kw$targets,((function (i__27310,e,c__4620__auto__,size__4621__auto__,b__27311,s__27309__$2,temp__5753__auto__,tree){
return (function (p1__27305_SHARP_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,p1__27305_SHARP_));
});})(i__27310,e,c__4620__auto__,size__4621__auto__,b__27311,s__27309__$2,temp__5753__auto__,tree))
));

var G__27322 = (i__27310 + (1));
i__27310 = G__27322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27311),inferenceql$viz$stream$panels$viz$circle$circle_viz_spec_$_iter__27308(cljs.core.chunk_rest(s__27309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27311),null);
}
} else {
var e = cljs.core.first(s__27309__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,cljs.core.cst$kw$targets,((function (e,s__27309__$2,temp__5753__auto__,tree){
return (function (p1__27305_SHARP_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,p1__27305_SHARP_));
});})(e,s__27309__$2,temp__5753__auto__,tree))
),inferenceql$viz$stream$panels$viz$circle$circle_viz_spec_$_iter__27308(cljs.core.rest(s__27309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(edges);
})();
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$val,cljs.core._GT_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27306_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.cst$kw$targets.cljs$core$IFn$_invoke$arity$1(p1__27306_SHARP_)),(1));
}),edges__$1)));
})();
var dependencies = (function (){var tree__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__27307_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27307_SHARP_,(-1));
}),cljs.core.cst$kw$id),tree);
var col_ids = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,tree__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,tree__$1));
var proto_dependencies = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$circle$circle_viz_spec_$_iter__27312(s__27313){
return (new cljs.core.LazySeq(null,(function (){
var s__27313__$1 = s__27313;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27313__$1);
if(temp__5753__auto__){
var s__27313__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27313__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27313__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27315 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27314 = (0);
while(true){
if((i__27314 < size__4621__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27314);
cljs.core.chunk_append(b__27315,(function (){var vec__27316 = cljs.core.seq(cljs.core.cst$kw$targets.cljs$core$IFn$_invoke$arity$1(e));
var node_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27316,(0),null);
var node_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27316,(1),null);
var edge_val = cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(e);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$source_DASH_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_ids,node_1),cljs.core.cst$kw$target_DASH_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_ids,node_2),cljs.core.cst$kw$source_DASH_name,node_1,cljs.core.cst$kw$target_DASH_name,node_2,cljs.core.cst$kw$edge_DASH_val,edge_val], null);
})());

var G__27323 = (i__27314 + (1));
i__27314 = G__27323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27315),inferenceql$viz$stream$panels$viz$circle$circle_viz_spec_$_iter__27312(cljs.core.chunk_rest(s__27313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27315),null);
}
} else {
var e = cljs.core.first(s__27313__$2);
return cljs.core.cons((function (){var vec__27319 = cljs.core.seq(cljs.core.cst$kw$targets.cljs$core$IFn$_invoke$arity$1(e));
var node_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(0),null);
var node_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(1),null);
var edge_val = cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(e);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$source_DASH_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_ids,node_1),cljs.core.cst$kw$target_DASH_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_ids,node_2),cljs.core.cst$kw$source_DASH_name,node_1,cljs.core.cst$kw$target_DASH_name,node_2,cljs.core.cst$kw$edge_DASH_val,edge_val], null);
})(),inferenceql$viz$stream$panels$viz$circle$circle_viz_spec_$_iter__27312(cljs.core.rest(s__27313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(edges_clean);
})();
return inferenceql.viz.stream.panels.viz.circle.dependencies(proto_dependencies);
})();
return inferenceql.viz.stream.panels.viz.circle.spec(tree,dependencies,(360),(0),k);
});
