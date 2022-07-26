// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(colls);
if(temp__5753__auto__){
var s = temp__5753__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__15524 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__15524) : clojure.math.combinatorics.join.call(null,G__15524));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__15525(s__15526){
return (new cljs.core.LazySeq(null,(function (){
var s__15526__$1 = s__15526;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15526__$1);
if(temp__5753__auto__){
var s__15526__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15526__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15526__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15528 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15527 = (0);
while(true){
if((i__15527 < size__4621__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15527);
cljs.core.chunk_append(b__15528,((j + cnt) + (- (n + (1)))));

var G__15529 = (i__15527 + (1));
i__15527 = G__15529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15528),clojure$math$combinatorics$index_combinations_$_iter__15525(cljs.core.chunk_rest(s__15526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15528),null);
}
} else {
var j = cljs.core.first(s__15526__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__15525(cljs.core.rest(s__15526__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__15530 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__15531 = (j__$1 - (1));
c__$3 = G__15530;
j__$1 = G__15531;
continue;
}
break;
}
}
}
});
var step = (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,(function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
}),null,null)));
});
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__15532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__15533 = (index__$1 + (1));
var G__15534 = (already_distributed__$1 + mi);
distribution__$1 = G__15532;
index__$1 = G__15533;
already_distributed__$1 = G__15534;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__15535 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__15538 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__15541 = distribution__$2;
distribution__$1 = G__15541;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__5753__auto__)){
var next_step = temp__5753__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__15542(s__15543){
return (new cljs.core.LazySeq(null,(function (){
var s__15543__$1 = s__15543;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15543__$1);
if(temp__5753__auto__){
var s__15543__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15543__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15543__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15545 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15544 = (0);
while(true){
if((i__15544 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15544);
cljs.core.chunk_append(b__15545,(function (){var G__15546 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15546) : f.call(null,G__15546));
})());

var G__15572 = (i__15544 + (1));
i__15544 = G__15572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15545),clojure$math$combinatorics$multi_comb_$_iter__15542(cljs.core.chunk_rest(s__15543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15545),null);
}
} else {
var i = cljs.core.first(s__15543__$2);
return cljs.core.cons((function (){var G__15547 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15547) : f.call(null,G__15547));
})(),clojure$math$combinatorics$multi_comb_$_iter__15542(cljs.core.rest(s__15543__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__4622__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__15548(s__15549){
return (new cljs.core.LazySeq(null,(function (){
var s__15549__$1 = s__15549;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15549__$1);
if(temp__5753__auto__){
var s__15549__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15549__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15549__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15551 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15550 = (0);
while(true){
if((i__15550 < size__4621__auto__)){
var q = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15550);
cljs.core.chunk_append(b__15551,clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (i__15550,q,c__4620__auto__,size__4621__auto__,b__15551,s__15549__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__15548_$_iter__15552(s__15553){
return (new cljs.core.LazySeq(null,((function (i__15550,q,c__4620__auto__,size__4621__auto__,b__15551,s__15549__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function (){
var s__15553__$1 = s__15553;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15553__$1);
if(temp__5753__auto____$1){
var s__15553__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15553__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__15553__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__15555 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__15554 = (0);
while(true){
if((i__15554 < size__4621__auto____$1)){
var vec__15556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto____$1,i__15554);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556,(2),null);
cljs.core.chunk_append(b__15555,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__15573 = (i__15554 + (1));
i__15554 = G__15573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15555),clojure$math$combinatorics$multi_comb_$_iter__15548_$_iter__15552(cljs.core.chunk_rest(s__15553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15555),null);
}
} else {
var vec__15559 = cljs.core.first(s__15553__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15559,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15559,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15559,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__15548_$_iter__15552(cljs.core.rest(s__15553__$2)));
}
} else {
return null;
}
break;
}
});})(i__15550,q,c__4620__auto__,size__4621__auto__,b__15551,s__15549__$2,temp__5753__auto__,f,v,domain,m,qs))
,null,null));
});})(i__15550,q,c__4620__auto__,size__4621__auto__,b__15551,s__15549__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4622__auto__(q);
})()));

var G__15574 = (i__15550 + (1));
i__15550 = G__15574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15551),clojure$math$combinatorics$multi_comb_$_iter__15548(cljs.core.chunk_rest(s__15549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15551),null);
}
} else {
var q = cljs.core.first(s__15549__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (q,s__15549__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__15548_$_iter__15562(s__15563){
return (new cljs.core.LazySeq(null,(function (){
var s__15563__$1 = s__15563;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15563__$1);
if(temp__5753__auto____$1){
var s__15563__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15563__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15563__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15565 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15564 = (0);
while(true){
if((i__15564 < size__4621__auto__)){
var vec__15566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15564);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566,(2),null);
cljs.core.chunk_append(b__15565,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__15575 = (i__15564 + (1));
i__15564 = G__15575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15565),clojure$math$combinatorics$multi_comb_$_iter__15548_$_iter__15562(cljs.core.chunk_rest(s__15563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15565),null);
}
} else {
var vec__15569 = cljs.core.first(s__15563__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__15548_$_iter__15562(cljs.core.rest(s__15563__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__15549__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4622__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__15548(cljs.core.rest(s__15549__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__4622__auto__ = (function clojure$math$combinatorics$combinations_$_iter__15577(s__15578){
return (new cljs.core.LazySeq(null,(function (){
var s__15578__$1 = s__15578;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15578__$1);
if(temp__5753__auto__){
var s__15578__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15578__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15578__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15580 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15579 = (0);
while(true){
if((i__15579 < size__4621__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15579);
cljs.core.chunk_append(b__15580,(new cljs.core.List(null,item,null,(1),null)));

var G__15581 = (i__15579 + (1));
i__15579 = G__15581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15580),clojure$math$combinatorics$combinations_$_iter__15577(cljs.core.chunk_rest(s__15578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15580),null);
}
} else {
var item = cljs.core.first(s__15578__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__15577(cljs.core.rest(s__15578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15576_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__15576_SHARP_);
}),clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__15582 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__15582) : clojure.math.combinatorics.unchunk.call(null,G__15582));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__4835__auto__ = [];
var len__4829__auto___15584 = arguments.length;
var i__4830__auto___15585 = (0);
while(true){
if((i__4830__auto___15585 < len__4829__auto___15584)){
args__4835__auto__.push((arguments[i__4830__auto___15585]));

var G__15586 = (i__4830__auto___15585 + (1));
i__4830__auto___15585 = G__15586;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function clojure$math$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5751__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5751__auto__){
var rst = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__15587 = (i - (1));
var G__15588 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__15587;
v_seqs__$2 = G__15588;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq15583){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15583));
}));

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__15589 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__15589) : v.call(null,G__15589));
})())){
return i;
} else {
var G__15590 = (i - (1));
i = G__15590;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__15591 = (i - (1));
i = G__15591;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__15592 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__15593 = (k + (1));
var G__15594 = (l__$1 - (1));
v__$1 = G__15592;
k = G__15593;
l__$1 = G__15594;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__15595 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__15595) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__15595));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__4221__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);
if(and__4221__auto__){
var or__4223__auto__ = cljs.core.empty_QMARK_(s);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return and__4221__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__15596(s__15597){
return (new cljs.core.LazySeq(null,(function (){
var s__15597__$1 = s__15597;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15597__$1);
if(temp__5753__auto__){
var s__15597__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15597__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15597__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15599 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15598 = (0);
while(true){
if((i__15598 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15598);
cljs.core.chunk_append(b__15599,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15600 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15600) : f.call(null,G__15600));
})(),i));

var G__15602 = (i__15598 + (1));
i__15598 = G__15602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15599),clojure$math$combinatorics$multi_perm_$_iter__15596(cljs.core.chunk_rest(s__15597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15599),null);
}
} else {
var i = cljs.core.first(s__15597__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15601 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15601) : f.call(null,G__15601));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__15596(cljs.core.rest(s__15597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15603_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__15603_SHARP_);
}),clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations(items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__15604 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__15605 = (n__$1 - (1));
acc = G__15604;
n__$1 = G__15605;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__15606 = q;
var G__15607 = cljs.core.cons(r,digits);
var G__15608 = (divisor + (1));
n__$1 = G__15606;
digits = G__15607;
divisor = G__15608;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__15609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__15610 = cljs.core.rest(l__$1);
var G__15611 = (n__$1 - (1));
acc = G__15609;
l__$1 = G__15610;
n__$1 = G__15611;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0)),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__15612 = cljs.core.rest(indices);
var G__15613 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__15614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__15612;
l__$1 = G__15613;
perm = G__15614;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__15615(s__15616){
return (new cljs.core.LazySeq(null,(function (){
var s__15616__$1 = s__15616;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15616__$1);
if(temp__5753__auto__){
var s__15616__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15616__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15616__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15618 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15617 = (0);
while(true){
if((i__15617 < size__4621__auto__)){
var vec__15619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15617);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15619,(1),null);
cljs.core.chunk_append(b__15618,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__15625 = (i__15617 + (1));
i__15617 = G__15625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15618),clojure$math$combinatorics$initial_perm_numbers_$_iter__15615(cljs.core.chunk_rest(s__15616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15618),null);
}
} else {
var vec__15622 = cljs.core.first(s__15616__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15622,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15622,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__15615(cljs.core.rest(s__15616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__15626 = cljs.core.rest(perm_numbers__$1);
var G__15627 = (index + (1));
perm_numbers__$1 = G__15626;
index = G__15627;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__15631 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15631,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15631,(1),null);
var G__15634 = remainder;
var G__15635 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__15636 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__15634;
digits = G__15635;
freqs__$1 = G__15636;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0)),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__15637 = clojure.math.combinatorics.dec_key(freqs,item);
var G__15638 = cljs.core.rest(indices);
var G__15639 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__15637;
indices = G__15638;
perm = G__15639;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__15640(s__15641){
return (new cljs.core.LazySeq(null,(function (){
var s__15641__$1 = s__15641;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15641__$1);
if(temp__5753__auto__){
var s__15641__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15641__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15641__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15643 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15642 = (0);
while(true){
if((i__15642 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15642);
cljs.core.chunk_append(b__15643,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15644 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15644) : f.call(null,G__15644));
})(),i));

var G__15646 = (i__15642 + (1));
i__15642 = G__15646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15643),clojure$math$combinatorics$nth_permutation_$_iter__15640(cljs.core.chunk_rest(s__15641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15643),null);
}
} else {
var i = cljs.core.first(s__15641__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15645 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15645) : f.call(null,G__15645));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__15640(cljs.core.rest(s__15641__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__15647(s__15648){
return (new cljs.core.LazySeq(null,(function (){
var s__15648__$1 = s__15648;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15648__$1);
if(temp__5753__auto__){
var s__15648__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15648__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15648__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15650 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15649 = (0);
while(true){
if((i__15649 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15649);
cljs.core.chunk_append(b__15650,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15651 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15651) : f.call(null,G__15651));
})(),i));

var G__15653 = (i__15649 + (1));
i__15649 = G__15653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15650),clojure$math$combinatorics$drop_permutations_$_iter__15647(cljs.core.chunk_rest(s__15648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15650),null);
}
} else {
var i = cljs.core.first(s__15648__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15652 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15652) : f.call(null,G__15652));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__15647(cljs.core.rest(s__15648__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__15654 = n;
var G__15655 = (n - k);
n = G__15654;
k = G__15655;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__15656 = (function (){var G__15658 = new_freqs;
var G__15659 = (t - (1));
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__15658,G__15659) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__15658,G__15659));
})();
var G__15657 = (function (){var G__15660 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__15661 = t;
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__15660,G__15661) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__15660,G__15661));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__15656,G__15657) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__15656,G__15657));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(cljs.core.frequencies(items),t) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t));
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__15662 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__15663 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__15663);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__15662);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__15664 = n__$1;
var G__15665 = y;
var G__15666 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__15664;
y = G__15665;
z = G__15666;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__15667 = n__$1;
var G__15668 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__15669 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__15667;
y = G__15668;
z = G__15669;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__15670(s__15671){
return (new cljs.core.LazySeq(null,(function (){
var s__15671__$1 = s__15671;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15671__$1);
if(temp__5753__auto__){
var s__15671__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15671__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15671__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15673 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15672 = (0);
while(true){
if((i__15672 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15672);
cljs.core.chunk_append(b__15673,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__15674 = (i__15672 + (1));
i__15672 = G__15674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15673),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__15670(cljs.core.chunk_rest(s__15671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15673),null);
}
} else {
var i = cljs.core.first(s__15671__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__15670(cljs.core.rest(s__15671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__15675 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__15676 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__15676);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__15675);
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__15677 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__15678 = cljs.core.rest(items__$1);
var G__15679 = (t__$1 - (1));
var G__15680 = n__$1;
comb = G__15677;
items__$1 = G__15678;
t__$1 = G__15679;
n__$1 = G__15680;
continue;
} else {
var G__15681 = comb;
var G__15682 = cljs.core.rest(items__$1);
var G__15683 = t__$1;
var G__15684 = (n__$1 - dc_dt);
comb = G__15681;
items__$1 = G__15682;
t__$1 = G__15683;
n__$1 = G__15684;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__4622__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__15695(s__15696){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__15696__$1 = s__15696;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15696__$1);
if(temp__5753__auto__){
var s__15696__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15696__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15696__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15698 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15697 = (0);
while(true){
if((i__15697 < size__4621__auto__)){
var vec__15699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15697);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15699,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15699,(1),null);
cljs.core.chunk_append(b__15698,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__15705 = (i__15697 + (1));
i__15697 = G__15705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15698),clojure$math$combinatorics$nth_combination_freqs_$_iter__15695(cljs.core.chunk_rest(s__15696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15698),null);
}
} else {
var vec__15702 = cljs.core.first(s__15696__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__15695(cljs.core.rest(s__15696__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__4622__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(remove_one_key,(t__$1 - (1))) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1))));
if((n__$1 < dc_dt)){
var G__15706 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__15707 = remove_one_key;
var G__15708 = (t__$1 - (1));
var G__15709 = n__$1;
comb = G__15706;
freqs__$1 = G__15707;
t__$1 = G__15708;
n__$1 = G__15709;
continue;
} else {
var G__15710 = comb;
var G__15711 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__15712 = t__$1;
var G__15713 = (n__$1 - dc_dt);
comb = G__15710;
freqs__$1 = G__15711;
t__$1 = G__15712;
n__$1 = G__15713;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0)),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__15714 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__15715 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__15715);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__15716(s__15717){
return (new cljs.core.LazySeq(null,(function (){
var s__15717__$1 = s__15717;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15717__$1);
if(temp__5753__auto__){
var s__15717__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15717__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15717__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15719 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15718 = (0);
while(true){
if((i__15718 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15718);
cljs.core.chunk_append(b__15719,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15720 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15720) : f.call(null,G__15720));
})(),i));

var G__15722 = (i__15718 + (1));
i__15718 = G__15722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15719),clojure$math$combinatorics$nth_combination_$_iter__15716(cljs.core.chunk_rest(s__15717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15719),null);
}
} else {
var i = cljs.core.first(s__15717__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__15721 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15721) : f.call(null,G__15721));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__15716(cljs.core.rest(s__15717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__15714);
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0)),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__15723 = (size + (1));
var G__15724 = (n__$1 - num_combinations);
size = G__15723;
n__$1 = G__15724;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__15725 = cljs.core.rest(l__$1);
var G__15726 = (n + (1));
l__$1 = G__15725;
n = G__15726;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__15735 = cljs.core.rest(l__$1);
var G__15736 = (function (){var G__15731 = index;
var G__15732 = (function (){var G__15733 = clojure.math.combinatorics.factorial(n);
var G__15734 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__15733,G__15734) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__15733,G__15734));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__15731,G__15732) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__15731,G__15732));
})();
var G__15737 = (n - (1));
l__$1 = G__15735;
index = G__15736;
n = G__15737;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__15747 = cljs.core.rest(l__$1);
var G__15748 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4622__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__15743(s__15744){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__15744__$1 = s__15744;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15744__$1);
if(temp__5753__auto__){
var s__15744__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15744__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15744__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15746 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15745 = (0);
while(true){
if((i__15745 < size__4621__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15745);
cljs.core.chunk_append(b__15746,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__15750 = (i__15745 + (1));
i__15745 = G__15750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15746),clojure$math$combinatorics$permutation_index_duplicates_$_iter__15743(cljs.core.chunk_rest(s__15744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15746),null);
}
} else {
var k = cljs.core.first(s__15744__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__15743(cljs.core.rest(s__15744__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__4622__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__4622__auto__){
return (function (p1__15738_SHARP_){
return (cljs.core.compare(p1__15738_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4622__auto__))
,cljs.core.keys(freqs)));
})());
var G__15749 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__15747;
index = G__15748;
freqs = G__15749;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__4622__auto__ = (function clojure$math$combinatorics$init_$_iter__15751(s__15752){
return (new cljs.core.LazySeq(null,(function (){
var s__15752__$1 = s__15752;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15752__$1);
if(temp__5753__auto__){
var s__15752__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15752__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15752__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15754 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15753 = (0);
while(true){
if((i__15753 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15753);
cljs.core.chunk_append(b__15754,(function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (i - ((n - s) - (-1)));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})());

var G__15755 = (i__15753 + (1));
i__15753 = G__15755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15754),clojure$math$combinatorics$init_$_iter__15751(cljs.core.chunk_rest(s__15752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15754),null);
}
} else {
var i = cljs.core.first(s__15752__$2);
return cljs.core.cons((function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (i - ((n - s) - (-1)));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),clojure$math$combinatorics$init_$_iter__15751(cljs.core.rest(s__15752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__15757 = arguments.length;
switch (G__15757) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
}));

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__4221__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));
if(and__4221__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek(a) < (r - (1)));
} else {
return true;
}
} else {
return and__4221__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__4221__auto__ = ((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)));
if(and__4221__auto__){
var and__4221__auto____$1 = (cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true);
if(and__4221__auto____$1){
if(cljs.core.truth_(s)){
return (((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j));
} else {
return true;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})()){
return j;
} else {
var G__15762 = (j - (1));
j = G__15762;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__15758 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = s;
if(cljs.core.truth_(and__4221__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__4221__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__15763 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__15764 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__15765 = (i + (1));
var G__15766 = (function (){var x__4306__auto__ = current_max;
var y__4307__auto__ = (new_a_i + (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
a__$2 = G__15763;
b__$1 = G__15764;
i = G__15765;
current_max = G__15766;
continue;
} else {
var G__15767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__15768 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__15769 = (i + (1));
var G__15770 = current_max;
a__$2 = G__15767;
b__$1 = G__15768;
i = G__15769;
current_max = G__15770;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15758,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15758,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4835__auto__ = [];
var len__4829__auto___15779 = arguments.length;
var i__4830__auto___15780 = (0);
while(true){
if((i__4830__auto___15780 < len__4829__auto___15779)){
args__4835__auto__.push((arguments[i__4830__auto___15780]));

var G__15781 = (i__4830__auto___15780 + (1));
i__4830__auto___15780 = G__15781;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__15773){
var map__15774 = p__15773;
var map__15774__$1 = cljs.core.__destructure_map(map__15774);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15774__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15774__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__4223__auto__ = from;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4223__auto__ = to;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = from;
if(cljs.core.truth_(and__4221__auto__)){
return (from <= (1));
} else {
return and__4221__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = to;
if(cljs.core.truth_(and__4221__auto__)){
return (to >= N);
} else {
return and__4221__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})() <= (function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})())) && (((function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__15775(s__15776){
return (new cljs.core.LazySeq(null,(function (){
var s__15776__$1 = s__15776;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15776__$1);
if(temp__5753__auto__){
var s__15776__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15776__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15776__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15778 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15777 = (0);
while(true){
if((i__15777 < size__4621__auto__)){
var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15777);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__15778,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__15782 = (i__15777 + (1));
i__15777 = G__15782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15778),clojure$math$combinatorics$iter__15775(cljs.core.chunk_rest(s__15776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15778),null);
}
} else {
var growth_string = cljs.core.first(s__15776__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__15775(cljs.core.rest(s__15776__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq15771){
var G__15772 = cljs.core.first(seq15771);
var seq15771__$1 = cljs.core.next(seq15771);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15772,seq15771__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4835__auto__ = [];
var len__4829__auto___15797 = arguments.length;
var i__4830__auto___15798 = (0);
while(true){
if((i__4830__auto___15798 < len__4829__auto___15797)){
args__4835__auto__.push((arguments[i__4830__auto___15798]));

var G__15799 = (i__4830__auto___15798 + (1));
i__4830__auto___15798 = G__15799;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__15785(s__15786){
return (new cljs.core.LazySeq(null,(function (){
var s__15786__$1 = s__15786;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15786__$1);
if(temp__5753__auto__){
var s__15786__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15786__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15786__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15788 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15787 = (0);
while(true){
if((i__15787 < size__4621__auto__)){
var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15787);
cljs.core.chunk_append(b__15788,(function (){var iter__4622__auto__ = ((function (i__15787,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__15785_$_iter__15789(s__15790){
return (new cljs.core.LazySeq(null,((function (i__15787,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex){
return (function (){
var s__15790__$1 = s__15790;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15790__$1);
if(temp__5753__auto____$1){
var s__15790__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15790__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__15790__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__15792 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__15791 = (0);
while(true){
if((i__15791 < size__4621__auto____$1)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto____$1,i__15791);
cljs.core.chunk_append(b__15792,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__15791,i__15787,part,c__4620__auto____$1,size__4621__auto____$1,b__15792,s__15790__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__15791,i__15787,part,c__4620__auto____$1,size__4621__auto____$1,b__15792,s__15790__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__15800 = (i__15791 + (1));
i__15791 = G__15800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15792),clojure$math$combinatorics$iter__15785_$_iter__15789(cljs.core.chunk_rest(s__15790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15792),null);
}
} else {
var part = cljs.core.first(s__15790__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__15787,part,s__15790__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__15787,part,s__15790__$2,temp__5753__auto____$1,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__15785_$_iter__15789(cljs.core.rest(s__15790__$2)));
}
} else {
return null;
}
break;
}
});})(i__15787,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex))
,null,null));
});})(i__15787,parts,c__4620__auto__,size__4621__auto__,b__15788,s__15786__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4622__auto__(parts);
})());

var G__15801 = (i__15787 + (1));
i__15787 = G__15801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15788),clojure$math$combinatorics$iter__15785(cljs.core.chunk_rest(s__15786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15788),null);
}
} else {
var parts = cljs.core.first(s__15786__$2);
return cljs.core.cons((function (){var iter__4622__auto__ = ((function (parts,s__15786__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__15785_$_iter__15793(s__15794){
return (new cljs.core.LazySeq(null,(function (){
var s__15794__$1 = s__15794;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15794__$1);
if(temp__5753__auto____$1){
var s__15794__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15794__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15794__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15796 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15795 = (0);
while(true){
if((i__15795 < size__4621__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15795);
cljs.core.chunk_append(b__15796,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__15795,part,c__4620__auto__,size__4621__auto__,b__15796,s__15794__$2,temp__5753__auto____$1,parts,s__15786__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__15795,part,c__4620__auto__,size__4621__auto__,b__15796,s__15794__$2,temp__5753__auto____$1,parts,s__15786__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__15802 = (i__15795 + (1));
i__15795 = G__15802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15796),clojure$math$combinatorics$iter__15785_$_iter__15793(cljs.core.chunk_rest(s__15794__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15796),null);
}
} else {
var part = cljs.core.first(s__15794__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__15794__$2,temp__5753__auto____$1,parts,s__15786__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__15794__$2,temp__5753__auto____$1,parts,s__15786__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__15785_$_iter__15793(cljs.core.rest(s__15794__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__15786__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4622__auto__(parts);
})(),clojure$math$combinatorics$iter__15785(cljs.core.rest(s__15786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq15783){
var G__15784 = cljs.core.first(seq15783);
var seq15783__$1 = cljs.core.next(seq15783);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15784,seq15783__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__15804 = arguments.length;
switch (G__15804) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__15805 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__15830 = (j + (1));
var G__15831 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__15832 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__15810 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__15810) : multiset.call(null,G__15810));
})());
var G__15833 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__15811 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__15811) : multiset.call(null,G__15811));
})());
j = G__15830;
c__$1 = G__15831;
u__$1 = G__15832;
v__$1 = G__15833;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15805,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15805,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15805,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__15812 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__15834 = (j + (1));
var G__15835 = k;
var G__15836 = true;
var G__15837 = u__$2;
var G__15838 = v__$1;
var G__15839 = c__$1;
j = G__15834;
k = G__15835;
x = G__15836;
u__$1 = G__15837;
v__$1 = G__15838;
c__$1 = G__15839;
continue;
} else {
if(cljs.core.not(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__4309__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__4310__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__15840 = j__$1;
var G__15841 = k__$1;
var G__15842 = x__$1;
var G__15843 = u__$2;
var G__15844 = v__$2;
var G__15845 = c__$2;
j = G__15840;
k = G__15841;
x = G__15842;
u__$1 = G__15843;
v__$1 = G__15844;
c__$1 = G__15845;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__15846 = j__$1;
var G__15847 = k__$1;
var G__15848 = x;
var G__15849 = u__$2;
var G__15850 = v__$2;
var G__15851 = c__$2;
j = G__15846;
k = G__15847;
x = G__15848;
u__$1 = G__15849;
v__$1 = G__15850;
c__$1 = G__15851;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(4),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = r;
if(cljs.core.truth_(and__4221__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__4221__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = s;
if(cljs.core.truth_(and__4221__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__4221__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__15852 = n;
var G__15853 = m;
var G__15854 = f__$1;
var G__15855 = c__$1;
var G__15856 = u__$1;
var G__15857 = v__$1;
var G__15858 = a__$1;
var G__15859 = b__$1;
var G__15860 = l__$1;
var G__15861 = r;
var G__15862 = s;
n = G__15852;
m = G__15853;
f = G__15854;
c = G__15855;
u = G__15856;
v = G__15857;
a = G__15858;
b = G__15859;
l = G__15860;
r = G__15861;
s = G__15862;
continue;
} else {
var part = (function (){var iter__4622__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__15812,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__15815(s__15816){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__15812,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__15816__$1 = s__15816;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15816__$1);
if(temp__5753__auto__){
var s__15816__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15816__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15816__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15818 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15817 = (0);
while(true){
if((i__15817 < size__4621__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15817);
cljs.core.chunk_append(b__15818,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__15819 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15819) : f.call(null,G__15819));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (i__15817,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__15818,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__15815_$_iter__15820(s__15821){
return (new cljs.core.LazySeq(null,((function (i__15817,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__15818,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__15821__$1 = s__15821;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15821__$1);
if(temp__5753__auto____$1){
var s__15821__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15821__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__15821__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__15823 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__15822 = (0);
while(true){
if((i__15822 < size__4621__auto____$1)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto____$1,i__15822);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__15823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__15863 = (i__15822 + (1));
i__15822 = G__15863;
continue;
} else {
var G__15864 = (i__15822 + (1));
i__15822 = G__15864;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15823),clojure$math$combinatorics$iter__15815_$_iter__15820(cljs.core.chunk_rest(s__15821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15823),null);
}
} else {
var z = cljs.core.first(s__15821__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__15815_$_iter__15820(cljs.core.rest(s__15821__$2)));
} else {
var G__15865 = cljs.core.rest(s__15821__$2);
s__15821__$1 = G__15865;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__15817,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__15818,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__15817,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4620__auto__,size__4621__auto__,b__15818,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__15866 = (i__15817 + (1));
i__15817 = G__15866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15818),clojure$math$combinatorics$iter__15815(cljs.core.chunk_rest(s__15816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15818),null);
}
} else {
var y = cljs.core.first(s__15816__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__15824 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15824) : f.call(null,G__15824));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__15815_$_iter__15825(s__15826){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__15826__$1 = s__15826;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15826__$1);
if(temp__5753__auto____$1){
var s__15826__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15826__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15826__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15828 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15827 = (0);
while(true){
if((i__15827 < size__4621__auto__)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15827);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__15828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__15867 = (i__15827 + (1));
i__15827 = G__15867;
continue;
} else {
var G__15868 = (i__15827 + (1));
i__15827 = G__15868;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15828),clojure$math$combinatorics$iter__15815_$_iter__15825(cljs.core.chunk_rest(s__15826__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15828),null);
}
} else {
var z = cljs.core.first(s__15826__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__15815_$_iter__15825(cljs.core.rest(s__15826__$2)));
} else {
var G__15869 = cljs.core.rest(s__15826__$2);
s__15826__$1 = G__15869;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__15816__$2,temp__5753__auto__,vec__15812,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__15815(cljs.core.rest(s__15816__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__15812,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__15812,u__$1,v__$1,c__$1,j,k))
;
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__15812,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__15812,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11);

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__15874 = (j - (1));
j = G__15874;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = r;
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__4221__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$m5_$_iter__15870(s__15871){
return (new cljs.core.LazySeq(null,(function (){
var s__15871__$1 = s__15871;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15871__$1);
if(temp__5753__auto__){
var s__15871__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15871__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15871__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15873 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15872 = (0);
while(true){
if((i__15872 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15872);
cljs.core.chunk_append(b__15873,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__15875 = (i__15872 + (1));
i__15872 = G__15875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15873),clojure$math$combinatorics$m5_$_iter__15870(cljs.core.chunk_rest(s__15871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15873),null);
}
} else {
var i = cljs.core.first(s__15871__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__15870(cljs.core.rest(s__15871__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__15876 = cljs.core.rest(ks);
var G__15877 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__15876;
v__$2 = G__15877;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__15878 = (k_1 - (1));
var G__15879 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__15880 = (amount - vk);
k_1 = G__15878;
v__$3 = G__15879;
amount = G__15880;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__4835__auto__ = [];
var len__4829__auto___15923 = arguments.length;
var i__4830__auto___15924 = (0);
while(true){
if((i__4830__auto___15924 < len__4829__auto___15923)){
args__4835__auto__.push((arguments[i__4830__auto___15924]));

var G__15925 = (i__4830__auto___15924 + (1));
i__4830__auto___15924 = G__15925;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__15883){
var map__15884 = p__15883;
var map__15884__$1 = cljs.core.__destructure_map(map__15884);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15884__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15884__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__4223__auto__ = from;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4223__auto__ = to;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = from;
if(cljs.core.truth_(and__4221__auto__)){
return (from <= (1));
} else {
return and__4221__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = to;
if(cljs.core.truth_(and__4221__auto__)){
return (to >= N);
} else {
return and__4221__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4223__auto__ = from__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})() <= (function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})())) && (((function (){var or__4223__auto__ = to__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function clojure$math$combinatorics$iter__15885(s__15886){
return (new cljs.core.LazySeq(null,(function (){
var s__15886__$1 = s__15886;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15886__$1);
if(temp__5753__auto__){
var s__15886__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15886__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15886__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15888 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15887 = (0);
while(true){
if((i__15887 < size__4621__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15887);
var j = (i + (1));
cljs.core.chunk_append(b__15888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__15889 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__15889) : freqs.call(null,G__15889));
})()], null));

var G__15926 = (i__15887 + (1));
i__15887 = G__15926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15888),clojure$math$combinatorics$iter__15885(cljs.core.chunk_rest(s__15886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15888),null);
}
} else {
var i = cljs.core.first(s__15886__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__15890 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__15890) : freqs.call(null,G__15890));
})()], null),clojure$math$combinatorics$iter__15885(cljs.core.rest(s__15886__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__4622__auto__ = (function clojure$math$combinatorics$iter__15891(s__15892){
return (new cljs.core.LazySeq(null,(function (){
var s__15892__$1 = s__15892;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15892__$1);
if(temp__5753__auto__){
var s__15892__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15892__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15892__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15894 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15893 = (0);
while(true){
if((i__15893 < size__4621__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15893);
cljs.core.chunk_append(b__15894,(function (){var iter__4622__auto__ = ((function (i__15893,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to){
return (function clojure$math$combinatorics$iter__15891_$_iter__15895(s__15896){
return (new cljs.core.LazySeq(null,((function (i__15893,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to){
return (function (){
var s__15896__$1 = s__15896;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15896__$1);
if(temp__5753__auto____$1){
var s__15896__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15896__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__15896__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__15898 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__15897 = (0);
while(true){
if((i__15897 < size__4621__auto____$1)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto____$1,i__15897);
cljs.core.chunk_append(b__15898,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__15897,i__15893,multiset,c__4620__auto____$1,size__4621__auto____$1,b__15898,s__15896__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to){
return (function (p__15899){
var vec__15900 = p__15899;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15900,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15900,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15903 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15903) : ditems.call(null,G__15903));
})());
});})(i__15897,i__15893,multiset,c__4620__auto____$1,size__4621__auto____$1,b__15898,s__15896__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to))
,multiset)));

var G__15927 = (i__15897 + (1));
i__15897 = G__15927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15898),clojure$math$combinatorics$iter__15891_$_iter__15895(cljs.core.chunk_rest(s__15896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15898),null);
}
} else {
var multiset = cljs.core.first(s__15896__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__15893,multiset,s__15896__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to){
return (function (p__15904){
var vec__15905 = p__15904;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15905,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15905,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15908 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15908) : ditems.call(null,G__15908));
})());
});})(i__15893,multiset,s__15896__$2,temp__5753__auto____$1,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__15891_$_iter__15895(cljs.core.rest(s__15896__$2)));
}
} else {
return null;
}
break;
}
});})(i__15893,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to))
,null,null));
});})(i__15893,part,c__4620__auto__,size__4621__auto__,b__15894,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to))
;
return iter__4622__auto__(part);
})());

var G__15928 = (i__15893 + (1));
i__15893 = G__15928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15894),clojure$math$combinatorics$iter__15891(cljs.core.chunk_rest(s__15892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15894),null);
}
} else {
var part = cljs.core.first(s__15892__$2);
return cljs.core.cons((function (){var iter__4622__auto__ = ((function (part,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to){
return (function clojure$math$combinatorics$iter__15891_$_iter__15909(s__15910){
return (new cljs.core.LazySeq(null,(function (){
var s__15910__$1 = s__15910;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__15910__$1);
if(temp__5753__auto____$1){
var s__15910__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15910__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__15910__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__15912 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__15911 = (0);
while(true){
if((i__15911 < size__4621__auto__)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__15911);
cljs.core.chunk_append(b__15912,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__15911,multiset,c__4620__auto__,size__4621__auto__,b__15912,s__15910__$2,temp__5753__auto____$1,part,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to){
return (function (p__15913){
var vec__15914 = p__15913;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15914,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15914,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15917 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15917) : ditems.call(null,G__15917));
})());
});})(i__15911,multiset,c__4620__auto__,size__4621__auto__,b__15912,s__15910__$2,temp__5753__auto____$1,part,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to))
,multiset)));

var G__15929 = (i__15911 + (1));
i__15911 = G__15929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15912),clojure$math$combinatorics$iter__15891_$_iter__15909(cljs.core.chunk_rest(s__15910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15912),null);
}
} else {
var multiset = cljs.core.first(s__15910__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__15910__$2,temp__5753__auto____$1,part,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to){
return (function (p__15918){
var vec__15919 = p__15918;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15919,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15919,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__15922 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__15922) : ditems.call(null,G__15922));
})());
});})(multiset,s__15910__$2,temp__5753__auto____$1,part,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__15891_$_iter__15909(cljs.core.rest(s__15910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__15892__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__15884,map__15884__$1,from,to))
;
return iter__4622__auto__(part);
})(),clojure$math$combinatorics$iter__15891(cljs.core.rest(s__15892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq15881){
var G__15882 = cljs.core.first(seq15881);
var seq15881__$1 = cljs.core.next(seq15881);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15882,seq15881__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4835__auto__ = [];
var len__4829__auto___15932 = arguments.length;
var i__4830__auto___15933 = (0);
while(true){
if((i__4830__auto___15933 < len__4829__auto___15932)){
args__4835__auto__.push((arguments[i__4830__auto___15933]));

var G__15934 = (i__4830__auto___15933 + (1));
i__4830__auto___15933 = G__15934;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
}));

(clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq15930){
var G__15931 = cljs.core.first(seq15930);
var seq15930__$1 = cljs.core.next(seq15930);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15931,seq15930__$1);
}));

