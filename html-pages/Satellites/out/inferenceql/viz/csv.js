// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.csv');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('inferenceql.query.data');
inferenceql.viz.csv.clean_vecs = (function inferenceql$viz$csv$clean_vecs(csv_vecs){

var iter__4622__auto__ = (function inferenceql$viz$csv$clean_vecs_$_iter__27066(s__27067){
return (new cljs.core.LazySeq(null,(function (){
var s__27067__$1 = s__27067;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27067__$1);
if(temp__5753__auto__){
var s__27067__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27067__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27067__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27069 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27068 = (0);
while(true){
if((i__27068 < size__4621__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27068);
cljs.core.chunk_append(b__27069,(function (){var iter__4622__auto__ = ((function (i__27068,row,c__4620__auto__,size__4621__auto__,b__27069,s__27067__$2,temp__5753__auto__){
return (function inferenceql$viz$csv$clean_vecs_$_iter__27066_$_iter__27070(s__27071){
return (new cljs.core.LazySeq(null,((function (i__27068,row,c__4620__auto__,size__4621__auto__,b__27069,s__27067__$2,temp__5753__auto__){
return (function (){
var s__27071__$1 = s__27071;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27071__$1);
if(temp__5753__auto____$1){
var s__27071__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27071__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__27071__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__27073 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__27072 = (0);
while(true){
if((i__27072 < size__4621__auto____$1)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto____$1,i__27072);
cljs.core.chunk_append(b__27073,((clojure.string.blank_QMARK_(v))?null:v));

var G__27078 = (i__27072 + (1));
i__27072 = G__27078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27073),inferenceql$viz$csv$clean_vecs_$_iter__27066_$_iter__27070(cljs.core.chunk_rest(s__27071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27073),null);
}
} else {
var v = cljs.core.first(s__27071__$2);
return cljs.core.cons(((clojure.string.blank_QMARK_(v))?null:v),inferenceql$viz$csv$clean_vecs_$_iter__27066_$_iter__27070(cljs.core.rest(s__27071__$2)));
}
} else {
return null;
}
break;
}
});})(i__27068,row,c__4620__auto__,size__4621__auto__,b__27069,s__27067__$2,temp__5753__auto__))
,null,null));
});})(i__27068,row,c__4620__auto__,size__4621__auto__,b__27069,s__27067__$2,temp__5753__auto__))
;
return iter__4622__auto__(row);
})());

var G__27079 = (i__27068 + (1));
i__27068 = G__27079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27069),inferenceql$viz$csv$clean_vecs_$_iter__27066(cljs.core.chunk_rest(s__27067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27069),null);
}
} else {
var row = cljs.core.first(s__27067__$2);
return cljs.core.cons((function (){var iter__4622__auto__ = ((function (row,s__27067__$2,temp__5753__auto__){
return (function inferenceql$viz$csv$clean_vecs_$_iter__27066_$_iter__27074(s__27075){
return (new cljs.core.LazySeq(null,(function (){
var s__27075__$1 = s__27075;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__27075__$1);
if(temp__5753__auto____$1){
var s__27075__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27075__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27075__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27077 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27076 = (0);
while(true){
if((i__27076 < size__4621__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__27076);
cljs.core.chunk_append(b__27077,((clojure.string.blank_QMARK_(v))?null:v));

var G__27080 = (i__27076 + (1));
i__27076 = G__27080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27077),inferenceql$viz$csv$clean_vecs_$_iter__27066_$_iter__27074(cljs.core.chunk_rest(s__27075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27077),null);
}
} else {
var v = cljs.core.first(s__27075__$2);
return cljs.core.cons(((clojure.string.blank_QMARK_(v))?null:v),inferenceql$viz$csv$clean_vecs_$_iter__27066_$_iter__27074(cljs.core.rest(s__27075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__27067__$2,temp__5753__auto__))
;
return iter__4622__auto__(row);
})(),inferenceql$viz$csv$clean_vecs_$_iter__27066(cljs.core.rest(s__27067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(csv_vecs);
});
inferenceql.viz.csv.csv_maps = (function inferenceql$viz$csv$csv_maps(csv_data){
var headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first(csv_data));
var rows = cljs.core.rest(csv_data);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27081_SHARP_){
return cljs.core.zipmap(headers,p1__27081_SHARP_);
}),rows);
});
/**
 * Takes `csv-data`, a vector of row vectors, and returns a seq of cleaned, casted data in maps.
 *   Casts data according to types in `column-types`.
 */
inferenceql.viz.csv.clean_csv_maps = (function inferenceql$viz$csv$clean_csv_maps(column_types,csv_data){
var row_coercer = inferenceql.query.data.row_coercer(column_types);
var csv_maps = inferenceql.viz.csv.csv_maps(inferenceql.viz.csv.clean_vecs(csv_data));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(row_coercer,csv_maps);
});
