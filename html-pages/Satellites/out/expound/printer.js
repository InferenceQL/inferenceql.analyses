// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('expound.printer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('expound.util');
goog.require('expound.ansi');
expound.printer.indent_level = (2);
expound.printer.max_spec_str_width = (100);
expound.printer.anon_fn_str = "<anonymous function>";
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$specs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$and,null,cljs.core.cst$sym$or,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$or),"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$conj,cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kw,cljs.core.cst$kw$conj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_key_DASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$keys,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys),"null"], null), null),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keys,cljs.core.cst$kw$clauses], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,null], null), null),cljs.spec.alpha.rep_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$qualifier,cljs.core.cst$kw$specs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,null,cljs.core.cst$kw$opt_DASH_un,null,cljs.core.cst$kw$req,null,cljs.core.cst$kw$opt,null], null), null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__5876){
return cljs.core.coll_QMARK_(G__5876);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys),"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$simple,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$contains,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),"null"], null), null),cljs.core.cst$kw$arg,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_),"null"], null), null),cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$compound,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple,cljs.core.cst$kw$compound], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$contains,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),"null"], null), null),cljs.core.cst$kw$arg,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_),"null"], null), null),cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contains,cljs.core.cst$kw$arg,cljs.core.cst$kw$kw], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$contains_QMARK_,null,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_PERCENT_,null], null), null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$contains_QMARK_),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_),"null"], null), null),cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$clauses], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_and,null,cljs.core.cst$sym$cljs$core_SLASH_or,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred)], null))], null),null));
expound.printer.keywords = (function expound$printer$keywords(form){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,form));
});
expound.printer.singleton_QMARK_ = (function expound$printer$singleton_QMARK_(xs){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs));
});
expound.printer.specs_from_form = (function expound$printer$specs_from_form(via){
var form = (function (){var G__5877 = via;
var G__5877__$1 = (((G__5877 == null))?null:cljs.core.last(G__5877));
if((G__5877__$1 == null)){
return null;
} else {
return cljs.spec.alpha.form(G__5877__$1);
}
})();
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$expound$spec_SLASH_key_DASH_spec,form);
if(cljs.core.truth_((function (){var and__4221__auto__ = form;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,conformed);
} else {
return and__4221__auto__;
}
})())){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$kw,cljs.core.first(x))));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$specs,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(conformed))))));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
expound.printer.key__GT_spec = (function expound$printer$key__GT_spec(keys,problems){
var seq__5879_5883 = cljs.core.seq(problems);
var chunk__5880_5884 = null;
var count__5881_5885 = (0);
var i__5882_5886 = (0);
while(true){
if((i__5882_5886 < count__5881_5885)){
var p_5887 = chunk__5880_5884.cljs$core$IIndexed$_nth$arity$2(null,i__5882_5886);
if((!((cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(p_5887) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__5888 = seq__5879_5883;
var G__5889 = chunk__5880_5884;
var G__5890 = count__5881_5885;
var G__5891 = (i__5882_5886 + (1));
seq__5879_5883 = G__5888;
chunk__5880_5884 = G__5889;
count__5881_5885 = G__5890;
i__5882_5886 = G__5891;
continue;
} else {
var temp__5753__auto___5892 = cljs.core.seq(seq__5879_5883);
if(temp__5753__auto___5892){
var seq__5879_5893__$1 = temp__5753__auto___5892;
if(cljs.core.chunked_seq_QMARK_(seq__5879_5893__$1)){
var c__4649__auto___5894 = cljs.core.chunk_first(seq__5879_5893__$1);
var G__5895 = cljs.core.chunk_rest(seq__5879_5893__$1);
var G__5896 = c__4649__auto___5894;
var G__5897 = cljs.core.count(c__4649__auto___5894);
var G__5898 = (0);
seq__5879_5883 = G__5895;
chunk__5880_5884 = G__5896;
count__5881_5885 = G__5897;
i__5882_5886 = G__5898;
continue;
} else {
var p_5899 = cljs.core.first(seq__5879_5893__$1);
if((!((cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(p_5899) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__5900 = cljs.core.next(seq__5879_5893__$1);
var G__5901 = null;
var G__5902 = (0);
var G__5903 = (0);
seq__5879_5883 = G__5900;
chunk__5880_5884 = G__5901;
count__5881_5885 = G__5902;
i__5882_5886 = G__5903;
continue;
}
} else {
}
}
break;
}

var vias = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound_SLASH_via,problems);
var specs = ((cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,keys))?keys:(function (){var temp__5751__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.specs_from_form,vias));
if(cljs.core.truth_(temp__5751__auto__)){
var specs = temp__5751__auto__;
return specs;
} else {
return keys;
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.qualified_keyword_QMARK_(k))?k:cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__5878_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),cljs.core.name(p1__5878_SHARP_));
}),specs))));
}),cljs.core.PersistentArrayMap.EMPTY,keys);
});
expound.printer.expand_spec = (function expound$printer$expand_spec(spec){
var _BANG_seen_specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return clojure.walk.prewalk((function (x){
if((!(cljs.core.qualified_keyword_QMARK_(x)))){
return x;
} else {
var temp__5751__auto__ = cljs.spec.alpha.get_spec(x);
if(cljs.core.truth_(temp__5751__auto__)){
var sp = temp__5751__auto__;
if((!(cljs.core.contains_QMARK_(cljs.core.deref(_BANG_seen_specs),x)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_seen_specs,cljs.core.conj,x);

return cljs.spec.alpha.form(sp);
} else {
return x;
}
} else {
return x;
}
}
}),(cljs.core.truth_(cljs.spec.alpha.get_spec(spec))?cljs.spec.alpha.form(spec):spec));
});
expound.printer.summarize_key_clause = (function expound$printer$summarize_key_clause(p__5904){
var vec__5905 = p__5904;
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5905,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5905,(1),null);
var G__5908 = branch;
var G__5908__$1 = (((G__5908 instanceof cljs.core.Keyword))?G__5908.fqn:null);
switch (G__5908__$1) {
case "simple":
return cljs.core.cst$kw$kw.cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(match))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.summarize_key_clause,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(match)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5908__$1)].join('')));

}
});
expound.printer.missing_key = (function expound$printer$missing_key(form){
var vec__5910 = cljs.spec.alpha.conform(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)));
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5910,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5910,(1),null);
var G__5913 = branch;
var G__5913__$1 = (((G__5913 instanceof cljs.core.Keyword))?G__5913.fqn:null);
switch (G__5913__$1) {
case "simple":
return cljs.core.cst$kw$kw.cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return expound.printer.summarize_key_clause(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch,match], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5913__$1)].join('')));

}
});
expound.printer.elide_core_ns = (function expound$printer$elide_core_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.core/",""),"cljs/core/","");
});
expound.printer.elide_spec_ns = (function expound$printer$elide_spec_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.spec.alpha/",""),"cljs/spec/alpha","");
});
expound.printer.pprint_fn = (function expound$printer$pprint_fn(f){
return clojure.string.replace(clojure.string.replace(expound.printer.elide_core_ns((function (){var fn_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.re_find(/object\[([^\( \]]+).*(\n|\])?/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))),/\$/);
var ns_n = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(fn_parts));
var fn_n = cljs.core.last(fn_parts);
if(cljs.core.empty_QMARK_(ns_n)){
return expound.printer.anon_fn_str;
} else {
return [cljs.core.demunge_str(ns_n),"/",cljs.core.demunge_str(fn_n)].join('');
}
})()),/--\d+/,""),/@[a-zA-Z0-9]+/,"");
});
expound.printer.format = (function expound$printer$format(var_args){
var args__4835__auto__ = [];
var len__4829__auto___5917 = arguments.length;
var i__4830__auto___5918 = (0);
while(true){
if((i__4830__auto___5918 < len__4829__auto___5917)){
args__4835__auto__.push((arguments[i__4830__auto___5918]));

var G__5919 = (i__4830__auto___5918 + (1));
i__4830__auto___5918 = G__5919;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(expound.printer.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(expound.printer.format.cljs$lang$applyTo = (function (seq5915){
var G__5916 = cljs.core.first(seq5915);
var seq5915__$1 = cljs.core.next(seq5915);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5916,seq5915__$1);
}));

cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_pprint_DASH_str,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Returns the pretty-printed string
 */
expound.printer.pprint_str = (function expound$printer$pprint_str(x){
if(cljs.core.fn_QMARK_(x)){
return expound.printer.pprint_fn(x);
} else {
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$stream,null], 0));
}
});
expound.printer.simple_spec_or_name = (function expound$printer$simple_spec_or_name(spec_name){
var spec_str = expound.printer.elide_spec_ns(expound.printer.elide_core_ns(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.expand_spec(spec_name)], 0))));
if((((expound.printer.max_spec_str_width < ((spec_str).length))) || (clojure.string.includes_QMARK_(spec_str,"\n")))){
return spec_name;
} else {
return spec_str;
}
});
expound.printer.print_spec_keys = (function expound$printer$print_spec_keys(problems){
var keys = expound.printer.keywords(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5920_SHARP_){
return expound.printer.missing_key(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(p1__5920_SHARP_));
}),problems));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.empty_QMARK_(cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems)));
if(and__4221__auto__){
return cljs.core.some(cljs.core.simple_keyword_QMARK_,keys);
} else {
return and__4221__auto__;
}
})())){
return null;
} else {
return clojure.string.trim((function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5922_5930 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5923_5931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5924_5932 = true;
var _STAR_print_fn_STAR__temp_val__5925_5933 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5924_5932);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5925_5933);

try{cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","spec"], null),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__5921_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5921_SHARP_,"key");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5926){
var vec__5927 = p__5926;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5927,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["key",k,"spec",expound.printer.simple_spec_or_name(v)], null);
}),expound.printer.key__GT_spec(keys,problems))));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5923_5931);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5922_5930);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());
}
});
expound.printer.print_missing_keys = (function expound$printer$print_missing_keys(problems){
var keys_clauses = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(expound.printer.missing_key,cljs.core.cst$kw$pred),problems));
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys_clauses)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5934_SHARP_){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(p1__5934_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$correct_DASH_key], 0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(keys_clauses)));
} else {
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.pprint_str(((expound.printer.singleton_QMARK_(keys_clauses))?cljs.core.first(keys_clauses):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.cst$sym$and,keys_clauses))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$correct_DASH_key], 0)))].join('');
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_no_DASH_trailing_DASH_whitespace,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given an potentially multi-line string, returns that string with all
 *   trailing whitespace removed.
 */
expound.printer.no_trailing_whitespace = (function expound$printer$no_trailing_whitespace(s){
var s_SINGLEQUOTE_ = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trimr,clojure.string.split_lines(s)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.last(s))){
return [s_SINGLEQUOTE_,"\n"].join('');
} else {
return s_SINGLEQUOTE_;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_indent,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.cst$kw$indent_DASH_level,cljs.core.cst$kw$s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given an potentially multi-line string, returns that string indented by
 * 'indent-level' spaces. Optionally, can indent first line and other lines
 * different amounts.
 */
expound.printer.indent = (function expound$printer$indent(var_args){
var G__5937 = arguments.length;
switch (G__5937) {
case 1:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.printer.indent.cljs$core$IFn$_invoke$arity$1 = (function (s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(expound.printer.indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$2 = (function (indent_level,s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3(indent_level,indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$3 = (function (first_line_indent,rest_lines_indent,s){
var vec__5938 = clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
var seq__5939 = cljs.core.seq(vec__5938);
var first__5940 = cljs.core.first(seq__5939);
var seq__5939__$1 = cljs.core.next(seq__5939);
var line = first__5940;
var lines = seq__5939__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(first_line_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5935_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rest_lines_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5935_SHARP_)].join('');
}),lines)));
}));

(expound.printer.indent.cljs$lang$maxFixedArity = 3);

