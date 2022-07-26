// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.panels.viz.inferences');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.viz.stream.store');
goog.require('inferenceql.viz.stream.panels.viz.samples');
goog.require('inferenceql.viz.stream.panels.viz.util');
inferenceql.viz.stream.panels.viz.inferences.vega_type = (function inferenceql$viz$stream$panels$viz$inferences$vega_type(schema,col){
var iql_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,col);
var vega_type_map = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$numerical,"quantitative",cljs.core.cst$kw$nominal,"nominal",cljs.core.cst$kw$ignore,"nominal"], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vega_type_map,iql_type);
});
inferenceql.viz.stream.panels.viz.inferences.dimensions = (function inferenceql$viz$stream$panels$viz$inferences$dimensions(c1_type,c2_type){
var G__27528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1_type,c2_type], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quantitative","quantitative"], null),G__27528)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(250),cljs.core.cst$kw$height,(250)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quantitative","nominal"], null),G__27528)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(400),cljs.core.cst$kw$height,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$step,(20)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nominal","quantitative"], null),G__27528)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$step,(20)], null),cljs.core.cst$kw$height,(400)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nominal","nominal"], null),G__27528)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$step,(20)], null),cljs.core.cst$kw$height,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$step,(20)], null)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27528)].join('')));

}
}
}
}
});
inferenceql.viz.stream.panels.viz.inferences.inference_plot = (function inferenceql$viz$stream$panels$viz$inferences$inference_plot(n_cats,p__27530){
var vec__27531 = p__27530;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531,(1),null);
var col_types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27529_SHARP_){
return inferenceql.viz.stream.panels.viz.inferences.vega_type(inferenceql.viz.stream.store.schema,p1__27529_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
var vec__27534 = (function (){var G__27537 = col_types;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quantitative","quantitative"], null),G__27537)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nominal","quantitative"], null),G__27537)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,c1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quantitative","nominal"], null),G__27537)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nominal","nominal"], null),G__27537)){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.options_count,c1) >= cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.options_count,c2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,c1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27537)].join('')));

}
}
}
}
})();
var c1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27534,(0),null);
var c2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27534,(1),null);
var c1_type = inferenceql.viz.stream.panels.viz.inferences.vega_type(inferenceql.viz.stream.store.schema,c1__$1);
var c2_type = inferenceql.viz.stream.panels.viz.inferences.vega_type(inferenceql.viz.stream.store.schema,c2__$1);
var filter_section = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c1_type,"nominal"))?(function (){var c1_options = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.top_options,c1__$1));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,c1__$1,cljs.core.cst$kw$oneOf,c1_options], null)], null);
})():null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2_type,"nominal"))?(function (){var c2_options = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.top_options,c2__$1));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,c2__$1,cljs.core.cst$kw$oneOf,c2_options], null)], null);
})():null)], null));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mark,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"rect",cljs.core.cst$kw$tooltip,true], null),cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(inferenceql.viz.stream.panels.viz.inferences.dimensions(c1_type,c2_type)),cljs.core.cst$kw$height,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(inferenceql.viz.stream.panels.viz.inferences.dimensions(c1_type,c2_type)),cljs.core.cst$kw$transform,filter_section,cljs.core.cst$kw$encoding,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bin,(function (){var G__27538 = c1_type;
switch (G__27538) {
case "nominal":
return false;

break;
case "quantitative":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$maxbins,(50),cljs.core.cst$kw$extent,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.ranges,c1__$1)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27538)].join('')));

}
})(),cljs.core.cst$kw$field,cljs.core.name(c1__$1),cljs.core.cst$kw$type,c1_type], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bin,(function (){var G__27539 = c2_type;
switch (G__27539) {
case "nominal":
return false;

break;
case "quantitative":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$maxbins,(50),cljs.core.cst$kw$extent,cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.viz.stream.panels.viz.samples.ranges,c2__$1)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27539)].join('')));

}
})(),cljs.core.cst$kw$field,cljs.core.name(c2__$1),cljs.core.cst$kw$type,c2_type], null),cljs.core.cst$kw$color,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aggregate,"count",cljs.core.cst$kw$type,"quantitative",cljs.core.cst$kw$legend,null], null)], null)], null);
});
inferenceql.viz.stream.panels.viz.inferences.make_section = (function inferenceql$viz$stream$panels$viz$inferences$make_section(num_columns,col_space,n_cats,column_pairs){
if(cljs.core.seq(column_pairs)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$concat,(function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$inferences$make_section_$_iter__27542(s__27543){
return (new cljs.core.LazySeq(null,(function (){
var s__27543__$1 = s__27543;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27543__$1);
if(temp__5753__auto__){
var s__27543__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27543__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27543__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27545 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27544 = (0);
while(true){
if((i__27544 < size__4621__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27544);
cljs.core.chunk_append(b__27545,inferenceql.viz.stream.panels.viz.inferences.inference_plot(n_cats,pair));

var G__27546 = (i__27544 + (1));
i__27544 = G__27546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27545),inferenceql$viz$stream$panels$viz$inferences$make_section_$_iter__27542(cljs.core.chunk_rest(s__27543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27545),null);
}
} else {
var pair = cljs.core.first(s__27543__$2);
return cljs.core.cons(inferenceql.viz.stream.panels.viz.inferences.inference_plot(n_cats,pair),inferenceql$viz$stream$panels$viz$inferences$make_section_$_iter__27542(cljs.core.rest(s__27543__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(column_pairs);
})(),cljs.core.cst$kw$columns,num_columns,cljs.core.cst$kw$spacing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$column,col_space,cljs.core.cst$kw$row,(50)], null),cljs.core.cst$kw$resolve,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"independent"], null)], null)], null);
} else {
return null;
}
});
inferenceql.viz.stream.panels.viz.inferences.spec = (function inferenceql$viz$stream$panels$viz$inferences$spec(columns,n_cats,num_columns){
var columns__$1 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(columns);
var column_pairs = (function (){var iter__4622__auto__ = (function inferenceql$viz$stream$panels$viz$inferences$spec_$_iter__27548(s__27549){
return (new cljs.core.LazySeq(null,(function (){
var s__27549__$1 = s__27549;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27549__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__27549__$1,x,xs__6308__auto__,temp__5753__auto__,columns__$1){
return (function inferenceql$viz$stream$panels$viz$inferences$spec_$_iter__27548_$_iter__27550(s__27551){
return (new cljs.core.LazySeq(null,((function (s__27549__$1,x,xs__6308__auto__,temp__5753__auto__,columns__$1){
return (function (){
var s__27551__$1 = s__27551;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27551__$1);
if(temp__5753__auto____$1){
var s__27551__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27551__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27551__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27553 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27552 = (0);
while(true){
if((i__27552 < size__4621__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27552);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
cljs.core.chunk_append(b__27553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__27554 = (i__27552 + (1));
i__27552 = G__27554;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27553),inferenceql$viz$stream$panels$viz$inferences$spec_$_iter__27548_$_iter__27550(cljs.core.chunk_rest(s__27551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27553),null);
}
} else {
var y = cljs.core.first(s__27551__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),inferenceql$viz$stream$panels$viz$inferences$spec_$_iter__27548_$_iter__27550(cljs.core.rest(s__27551__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(s__27549__$1,x,xs__6308__auto__,temp__5753__auto__,columns__$1))
,null,null));
});})(s__27549__$1,x,xs__6308__auto__,temp__5753__auto__,columns__$1))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(columns__$1));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,inferenceql$viz$stream$panels$viz$inferences$spec_$_iter__27548(cljs.core.rest(s__27549__$1)));
} else {
var G__27555 = cljs.core.rest(s__27549__$1);
s__27549__$1 = G__27555;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(columns__$1);
})();
var pair_groups = cljs.core.group_by((function (p1__27547_SHARP_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (col){
return inferenceql.viz.stream.panels.viz.inferences.vega_type(inferenceql.viz.stream.store.schema,col);
}),p1__27547_SHARP_));
}),column_pairs);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$$schema,inferenceql.viz.stream.panels.viz.util.vl5_schema,cljs.core.cst$kw$autosize,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$resize,true], null),cljs.core.cst$kw$vconcat,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.viz.inferences.make_section(num_columns,(50),n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pair_groups,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["quantitative",null], null), null))),inferenceql.viz.stream.panels.viz.inferences.make_section(num_columns,(100),n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pair_groups,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["quantitative",null,"nominal",null], null), null))),inferenceql.viz.stream.panels.viz.inferences.make_section(num_columns,(100),n_cats,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pair_groups,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["nominal",null], null), null)))], null)),cljs.core.cst$kw$spacing,(100),cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"rows"], null),cljs.core.cst$kw$config,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$countTitle,"Count",cljs.core.cst$kw$axisY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$minExtent,(10)], null),cljs.core.cst$kw$view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stroke,"transparent"], null)], null),cljs.core.cst$kw$resolve,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"independent"], null)], null)], null);
});
