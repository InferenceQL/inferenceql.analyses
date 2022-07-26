// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('metaprob.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
metaprob.trace.trace_subtrace = (function metaprob$trace$trace_subtrace(tr,adr){
var fexpr__2801 = ((cljs.core.seq_QMARK_(adr))?cljs.core.get_in:cljs.core.get);
return (fexpr__2801.cljs$core$IFn$_invoke$arity$2 ? fexpr__2801.cljs$core$IFn$_invoke$arity$2(tr,adr) : fexpr__2801.call(null,tr,adr));
});
metaprob.trace.trace_has_value_QMARK_ = (function metaprob$trace$trace_has_value_QMARK_(var_args){
var G__2803 = arguments.length;
switch (G__2803) {
case 1:
return metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (tr){
return cljs.core.contains_QMARK_(tr,cljs.core.cst$kw$value);
}));

(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (tr,adr){
return cljs.core.contains_QMARK_(metaprob.trace.trace_subtrace(tr,adr),cljs.core.cst$kw$value);
}));

(metaprob.trace.trace_has_value_QMARK_.cljs$lang$maxFixedArity = 2);

metaprob.trace.trace_value = (function metaprob$trace$trace_value(var_args){
var G__2806 = arguments.length;
switch (G__2806) {
case 1:
return metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1 = (function (tr){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tr,cljs.core.cst$kw$value);
}));

(metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$2 = (function (tr,adr){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(metaprob.trace.trace_subtrace(tr,adr),cljs.core.cst$kw$value);
}));

(metaprob.trace.trace_value.cljs$lang$maxFixedArity = 2);

metaprob.trace.trace_has_subtrace_QMARK_ = (function metaprob$trace$trace_has_subtrace_QMARK_(tr,adr){
while(true){
if(cljs.core.seq_QMARK_(adr)){
if(cljs.core.empty_QMARK_(adr)){
return true;
} else {
if(cljs.core.contains_QMARK_(tr,cljs.core.first(adr))){
var G__2808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tr,cljs.core.first(adr));
var G__2809 = cljs.core.rest(adr);
tr = G__2808;
adr = G__2809;
continue;
} else {
return null;
}
}
} else {
return cljs.core.contains_QMARK_(tr,adr);
}
break;
}
});
metaprob.trace.trace_keys = (function metaprob$trace$trace_keys(tr){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$value);
}),cljs.core.keys(tr));
});
metaprob.trace.subtrace_count = (function metaprob$trace$subtrace_count(tr){
return (cljs.core.count(tr) - ((metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1(tr))?(1):(0)));
});
metaprob.trace.trace_set_subtrace = (function metaprob$trace$trace_set_subtrace(tr,adr,sub){
if(cljs.core.seq_QMARK_(adr)){
if(cljs.core.empty_QMARK_(adr)){
return sub;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tr,cljs.core.first(adr),(function (){var G__2810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tr,cljs.core.first(adr));
var G__2811 = cljs.core.rest(adr);
var G__2812 = sub;
return (metaprob.trace.trace_set_subtrace.cljs$core$IFn$_invoke$arity$3 ? metaprob.trace.trace_set_subtrace.cljs$core$IFn$_invoke$arity$3(G__2810,G__2811,G__2812) : metaprob.trace.trace_set_subtrace.call(null,G__2810,G__2811,G__2812));
})());
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tr,adr,sub);
}
});
metaprob.trace.trace_set_value = (function metaprob$trace$trace_set_value(var_args){
var G__2814 = arguments.length;
switch (G__2814) {
case 2:
return metaprob.trace.trace_set_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metaprob.trace.trace_set_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metaprob.trace.trace_set_value.cljs$core$IFn$_invoke$arity$2 = (function (tr,val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tr,cljs.core.cst$kw$value,val);
}));

(metaprob.trace.trace_set_value.cljs$core$IFn$_invoke$arity$3 = (function (tr,adr,val){
return metaprob.trace.trace_set_subtrace(tr,adr,metaprob.trace.trace_set_value.cljs$core$IFn$_invoke$arity$2(metaprob.trace.trace_subtrace(tr,adr),val));
}));

(metaprob.trace.trace_set_value.cljs$lang$maxFixedArity = 3);

metaprob.trace.trace_clear_value = (function metaprob$trace$trace_clear_value(var_args){
var G__2817 = arguments.length;
switch (G__2817) {
case 1:
return metaprob.trace.trace_clear_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metaprob.trace.trace_clear_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metaprob.trace.trace_clear_value.cljs$core$IFn$_invoke$arity$1 = (function (tr){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tr,cljs.core.cst$kw$value);
}));

(metaprob.trace.trace_clear_value.cljs$core$IFn$_invoke$arity$2 = (function (tr,adr){
return metaprob.trace.trace_set_subtrace(tr,adr,metaprob.trace.trace_clear_value.cljs$core$IFn$_invoke$arity$1(metaprob.trace.trace_subtrace(tr,adr)));
}));

(metaprob.trace.trace_clear_value.cljs$lang$maxFixedArity = 2);

metaprob.trace.maybe_set_subtrace = (function metaprob$trace$maybe_set_subtrace(output,adr,suboutput){
if(cljs.core.empty_QMARK_(suboutput)){
return (metaprob.trace.trace_clear_subtrace.cljs$core$IFn$_invoke$arity$2 ? metaprob.trace.trace_clear_subtrace.cljs$core$IFn$_invoke$arity$2(output,adr) : metaprob.trace.trace_clear_subtrace.call(null,output,adr));
} else {
return metaprob.trace.trace_set_subtrace(output,adr,suboutput);
}
});
metaprob.trace.trace_clear_subtrace = (function metaprob$trace$trace_clear_subtrace(tr,adr){
if(cljs.core.seq_QMARK_(adr)){
if(cljs.core.empty_QMARK_(adr)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.empty_QMARK_(cljs.core.rest(adr))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tr,cljs.core.first(adr));
} else {
return metaprob.trace.maybe_set_subtrace(tr,cljs.core.first(adr),(function (){var G__2819 = metaprob.trace.trace_subtrace(tr,cljs.core.first(adr));
var G__2820 = cljs.core.rest(adr);
return (metaprob.trace.trace_clear_subtrace.cljs$core$IFn$_invoke$arity$2 ? metaprob.trace.trace_clear_subtrace.cljs$core$IFn$_invoke$arity$2(G__2819,G__2820) : metaprob.trace.trace_clear_subtrace.call(null,G__2819,G__2820));
})());
}
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tr,adr);
}
});
metaprob.trace.value_only_trace_QMARK_ = (function metaprob$trace$value_only_trace_QMARK_(tr){
return ((metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1(tr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(tr),(1))));
});
metaprob.trace.trace_QMARK_ = (function metaprob$trace$trace_QMARK_(s){
return cljs.core.map_QMARK_(s);
});
metaprob.trace.valid_trace_QMARK_ = (function metaprob$trace$valid_trace_QMARK_(s){
return ((cljs.core.map_QMARK_(s)) && (cljs.core.every_QMARK_((function (k){
return metaprob.trace.trace_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,k));
}),metaprob.trace.trace_keys(s))));
});
metaprob.trace.trace_merge = (function metaprob$trace$trace_merge(tr1,tr2){
var merged = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tr1,(function (){var iter__4622__auto__ = (function metaprob$trace$trace_merge_$_iter__2821(s__2822){
return (new cljs.core.LazySeq(null,(function (){
var s__2822__$1 = s__2822;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__2822__$1);
if(temp__5753__auto__){
var s__2822__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2822__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__2822__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__2824 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__2823 = (0);
while(true){
if((i__2823 < size__4621__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__2823);
cljs.core.chunk_append(b__2824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(cljs.core.truth_(metaprob.trace.trace_has_subtrace_QMARK_(tr1,key))?(function (){var G__2825 = metaprob.trace.trace_subtrace(tr1,key);
var G__2826 = metaprob.trace.trace_subtrace(tr2,key);
return (metaprob.trace.trace_merge.cljs$core$IFn$_invoke$arity$2 ? metaprob.trace.trace_merge.cljs$core$IFn$_invoke$arity$2(G__2825,G__2826) : metaprob.trace.trace_merge.call(null,G__2825,G__2826));
})():metaprob.trace.trace_subtrace(tr2,key))], null));

var G__2829 = (i__2823 + (1));
i__2823 = G__2829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2824),metaprob$trace$trace_merge_$_iter__2821(cljs.core.chunk_rest(s__2822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2824),null);
}
} else {
var key = cljs.core.first(s__2822__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(cljs.core.truth_(metaprob.trace.trace_has_subtrace_QMARK_(tr1,key))?(function (){var G__2827 = metaprob.trace.trace_subtrace(tr1,key);
var G__2828 = metaprob.trace.trace_subtrace(tr2,key);
return (metaprob.trace.trace_merge.cljs$core$IFn$_invoke$arity$2 ? metaprob.trace.trace_merge.cljs$core$IFn$_invoke$arity$2(G__2827,G__2828) : metaprob.trace.trace_merge.call(null,G__2827,G__2828));
})():metaprob.trace.trace_subtrace(tr2,key))], null),metaprob$trace$trace_merge_$_iter__2821(cljs.core.rest(s__2822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(metaprob.trace.trace_keys(tr2));
})());
if(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1(merged)){
if(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1(tr2)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1(tr1),metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1(tr2))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["incompatible trace values",tr1,tr2], null)),"\n","(= (trace-value tr1) (trace-value tr2))"].join('')));
}
} else {
}

return merged;
} else {
if(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1(tr2)){
return metaprob.trace.trace_set_value.cljs$core$IFn$_invoke$arity$2(merged,metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1(tr2));
} else {
return merged;
}
}
});
metaprob.trace.maybe_subtrace = (function metaprob$trace$maybe_subtrace(tr,adr){
var or__4223__auto__ = metaprob.trace.trace_subtrace(tr,adr);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
metaprob.trace.merge_subtrace = (function metaprob$trace$merge_subtrace(trace,addr,subtrace){
return metaprob.trace.trace_merge(trace,metaprob.trace.maybe_set_subtrace(cljs.core.PersistentArrayMap.EMPTY,addr,subtrace));
});
metaprob.trace.addresses_of = (function metaprob$trace$addresses_of(tr){
var get_sites = (function metaprob$trace$addresses_of_$_get_sites(tr__$1){
var site_list = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (key){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){
return cljs.core.cons(key,site);
}),metaprob$trace$addresses_of_$_get_sites(metaprob.trace.trace_subtrace(tr__$1,key)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metaprob.trace.trace_keys(tr__$1)], 0));
if(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1(tr__$1)){
return cljs.core.cons(cljs.core.List.EMPTY,site_list);
} else {
return site_list;
}
});
var s = get_sites(tr);
var seq__2830_2834 = cljs.core.seq(s);
var chunk__2831_2835 = null;
var count__2832_2836 = (0);
var i__2833_2837 = (0);
while(true){
if((i__2833_2837 < count__2832_2836)){
var site_2838 = chunk__2831_2835.cljs$core$IIndexed$_nth$arity$2(null,i__2833_2837);
if(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$2(tr,site_2838)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["missing value at",site_2838], null)),"\n","(trace-has-value? tr site)"].join('')));
}


var G__2839 = seq__2830_2834;
var G__2840 = chunk__2831_2835;
var G__2841 = count__2832_2836;
var G__2842 = (i__2833_2837 + (1));
seq__2830_2834 = G__2839;
chunk__2831_2835 = G__2840;
count__2832_2836 = G__2841;
i__2833_2837 = G__2842;
continue;
} else {
var temp__5753__auto___2843 = cljs.core.seq(seq__2830_2834);
if(temp__5753__auto___2843){
var seq__2830_2844__$1 = temp__5753__auto___2843;
if(cljs.core.chunked_seq_QMARK_(seq__2830_2844__$1)){
var c__4649__auto___2845 = cljs.core.chunk_first(seq__2830_2844__$1);
var G__2846 = cljs.core.chunk_rest(seq__2830_2844__$1);
var G__2847 = c__4649__auto___2845;
var G__2848 = cljs.core.count(c__4649__auto___2845);
var G__2849 = (0);
seq__2830_2834 = G__2846;
chunk__2831_2835 = G__2847;
count__2832_2836 = G__2848;
i__2833_2837 = G__2849;
continue;
} else {
var site_2850 = cljs.core.first(seq__2830_2844__$1);
if(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$2(tr,site_2850)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["missing value at",site_2850], null)),"\n","(trace-has-value? tr site)"].join('')));
}


var G__2851 = cljs.core.next(seq__2830_2844__$1);
var G__2852 = null;
var G__2853 = (0);
var G__2854 = (0);
seq__2830_2834 = G__2851;
chunk__2831_2835 = G__2852;
count__2832_2836 = G__2853;
i__2833_2837 = G__2854;
continue;
}
} else {
}
}
break;
}

return s;
});
metaprob.trace.copy_addresses = (function metaprob$trace$copy_addresses(src,dst,paths){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2855_SHARP_,p2__2856_SHARP_){
return metaprob.trace.trace_set_value.cljs$core$IFn$_invoke$arity$3(p1__2855_SHARP_,p2__2856_SHARP_,metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$2(src,p2__2856_SHARP_));
}),dst,paths);
});
metaprob.trace.partition_trace = (function metaprob$trace$partition_trace(trace,paths){
var path_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__2857_SHARP_){
if((!(cljs.core.seq_QMARK_(p1__2857_SHARP_)))){
return (new cljs.core.List(null,p1__2857_SHARP_,null,(1),null));
} else {
return p1__2857_SHARP_;
}
}),paths));
var addresses = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,metaprob.trace.addresses_of(trace));
var all_addresses = cljs.core.group_by((function (p1__2858_SHARP_){
return cljs.core.contains_QMARK_(path_set,p1__2858_SHARP_);
}),addresses);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metaprob.trace.copy_addresses(trace,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_addresses,true)),metaprob.trace.copy_addresses(trace,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_addresses,false))], null);
});
metaprob.trace.address_contains_QMARK_ = (function metaprob$trace$address_contains_QMARK_(addr,elem){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([elem]),addr);
});
