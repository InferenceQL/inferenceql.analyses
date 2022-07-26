// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38711 = arguments.length;
var i__4830__auto___38712 = (0);
while(true){
if((i__4830__auto___38712 < len__4829__auto___38711)){
args__4835__auto__.push((arguments[i__4830__auto___38712]));

var G__38713 = (i__4830__auto___38712 + (1));
i__4830__auto___38712 = G__38713;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__38706){
var map__38707 = p__38706;
var map__38707__$1 = cljs.core.__destructure_map(map__38707);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38707__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__38708 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__38709 = cljs.core.seq(vec__38708);
var first__38710 = cljs.core.first(seq__38709);
var seq__38709__$1 = cljs.core.next(seq__38709);
var first = first__38710;
var rest = seq__38709__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq38701){
var G__38702 = cljs.core.first(seq38701);
var seq38701__$1 = cljs.core.next(seq38701);
var G__38703 = cljs.core.first(seq38701__$1);
var seq38701__$2 = cljs.core.next(seq38701__$1);
var G__38704 = cljs.core.first(seq38701__$2);
var seq38701__$3 = cljs.core.next(seq38701__$2);
var G__38705 = cljs.core.first(seq38701__$3);
var seq38701__$4 = cljs.core.next(seq38701__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38702,G__38703,G__38704,G__38705,seq38701__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4223__auto__ = (function (){var G__38714 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__38714) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__38714));
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return clojure.string.capitalize(s);
}
});
