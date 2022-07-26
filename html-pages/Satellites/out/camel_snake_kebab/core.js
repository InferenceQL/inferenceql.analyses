// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38906 = arguments.length;
var i__4830__auto___38907 = (0);
while(true){
if((i__4830__auto___38907 < len__4829__auto___38906)){
args__4835__auto__.push((arguments[i__4830__auto___38907]));

var G__38908 = (i__4830__auto___38907 + (1));
i__4830__auto___38907 = G__38908;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq38901){
var G__38902 = cljs.core.first(seq38901);
var seq38901__$1 = cljs.core.next(seq38901);
var G__38903 = cljs.core.first(seq38901__$1);
var seq38901__$2 = cljs.core.next(seq38901__$1);
var G__38904 = cljs.core.first(seq38901__$2);
var seq38901__$3 = cljs.core.next(seq38901__$2);
var G__38905 = cljs.core.first(seq38901__$3);
var seq38901__$4 = cljs.core.next(seq38901__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38902,G__38903,G__38904,G__38905,seq38901__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38917 = arguments.length;
var i__4830__auto___38918 = (0);
while(true){
if((i__4830__auto___38918 < len__4829__auto___38917)){
args__4835__auto__.push((arguments[i__4830__auto___38918]));

var G__38919 = (i__4830__auto___38918 + (1));
i__4830__auto___38918 = G__38919;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__38864__auto__,rest__38865__auto__){
var convert_case__38866__auto__ = (function (p1__38863__38867__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__38863__38867__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38865__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38864__auto__,convert_case__38866__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq38909){
var G__38910 = cljs.core.first(seq38909);
var seq38909__$1 = cljs.core.next(seq38909);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38910,seq38909__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38920 = arguments.length;
var i__4830__auto___38921 = (0);
while(true){
if((i__4830__auto___38921 < len__4829__auto___38920)){
args__4835__auto__.push((arguments[i__4830__auto___38921]));

var G__38922 = (i__4830__auto___38921 + (1));
i__4830__auto___38921 = G__38922;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq38911){
var G__38912 = cljs.core.first(seq38911);
var seq38911__$1 = cljs.core.next(seq38911);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38912,seq38911__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38923 = arguments.length;
var i__4830__auto___38924 = (0);
while(true){
if((i__4830__auto___38924 < len__4829__auto___38923)){
args__4835__auto__.push((arguments[i__4830__auto___38924]));

var G__38925 = (i__4830__auto___38924 + (1));
i__4830__auto___38924 = G__38925;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq38913){
var G__38914 = cljs.core.first(seq38913);
var seq38913__$1 = cljs.core.next(seq38913);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38914,seq38913__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38926 = arguments.length;
var i__4830__auto___38927 = (0);
while(true){
if((i__4830__auto___38927 < len__4829__auto___38926)){
args__4835__auto__.push((arguments[i__4830__auto___38927]));

var G__38928 = (i__4830__auto___38927 + (1));
i__4830__auto___38927 = G__38928;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq38915){
var G__38916 = cljs.core.first(seq38915);
var seq38915__$1 = cljs.core.next(seq38915);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38916,seq38915__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38937 = arguments.length;
var i__4830__auto___38938 = (0);
while(true){
if((i__4830__auto___38938 < len__4829__auto___38937)){
args__4835__auto__.push((arguments[i__4830__auto___38938]));

var G__38939 = (i__4830__auto___38938 + (1));
i__4830__auto___38938 = G__38939;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38864__auto__,rest__38865__auto__){
var convert_case__38866__auto__ = (function (p1__38863__38867__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__38863__38867__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38865__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38864__auto__,convert_case__38866__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq38929){
var G__38930 = cljs.core.first(seq38929);
var seq38929__$1 = cljs.core.next(seq38929);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38930,seq38929__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38940 = arguments.length;
var i__4830__auto___38941 = (0);
while(true){
if((i__4830__auto___38941 < len__4829__auto___38940)){
args__4835__auto__.push((arguments[i__4830__auto___38941]));

var G__38942 = (i__4830__auto___38941 + (1));
i__4830__auto___38941 = G__38942;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq38931){
var G__38932 = cljs.core.first(seq38931);
var seq38931__$1 = cljs.core.next(seq38931);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38932,seq38931__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38943 = arguments.length;
var i__4830__auto___38944 = (0);
while(true){
if((i__4830__auto___38944 < len__4829__auto___38943)){
args__4835__auto__.push((arguments[i__4830__auto___38944]));

var G__38945 = (i__4830__auto___38944 + (1));
i__4830__auto___38944 = G__38945;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq38933){
var G__38934 = cljs.core.first(seq38933);
var seq38933__$1 = cljs.core.next(seq38933);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38934,seq38933__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38946 = arguments.length;
var i__4830__auto___38947 = (0);
while(true){
if((i__4830__auto___38947 < len__4829__auto___38946)){
args__4835__auto__.push((arguments[i__4830__auto___38947]));

var G__38948 = (i__4830__auto___38947 + (1));
i__4830__auto___38947 = G__38948;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq38935){
var G__38936 = cljs.core.first(seq38935);
var seq38935__$1 = cljs.core.next(seq38935);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38936,seq38935__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38957 = arguments.length;
var i__4830__auto___38958 = (0);
while(true){
if((i__4830__auto___38958 < len__4829__auto___38957)){
args__4835__auto__.push((arguments[i__4830__auto___38958]));

var G__38959 = (i__4830__auto___38958 + (1));
i__4830__auto___38958 = G__38959;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__38864__auto__,rest__38865__auto__){
var convert_case__38866__auto__ = (function (p1__38863__38867__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__38863__38867__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38865__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38864__auto__,convert_case__38866__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq38949){
var G__38950 = cljs.core.first(seq38949);
var seq38949__$1 = cljs.core.next(seq38949);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38950,seq38949__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38960 = arguments.length;
var i__4830__auto___38961 = (0);
while(true){
if((i__4830__auto___38961 < len__4829__auto___38960)){
args__4835__auto__.push((arguments[i__4830__auto___38961]));

var G__38962 = (i__4830__auto___38961 + (1));
i__4830__auto___38961 = G__38962;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq38951){
var G__38952 = cljs.core.first(seq38951);
var seq38951__$1 = cljs.core.next(seq38951);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38952,seq38951__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38963 = arguments.length;
var i__4830__auto___38964 = (0);
while(true){
if((i__4830__auto___38964 < len__4829__auto___38963)){
args__4835__auto__.push((arguments[i__4830__auto___38964]));

var G__38965 = (i__4830__auto___38964 + (1));
i__4830__auto___38964 = G__38965;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq38953){
var G__38954 = cljs.core.first(seq38953);
var seq38953__$1 = cljs.core.next(seq38953);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38954,seq38953__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38966 = arguments.length;
var i__4830__auto___38967 = (0);
while(true){
if((i__4830__auto___38967 < len__4829__auto___38966)){
args__4835__auto__.push((arguments[i__4830__auto___38967]));

var G__38968 = (i__4830__auto___38967 + (1));
i__4830__auto___38967 = G__38968;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq38955){
var G__38956 = cljs.core.first(seq38955);
var seq38955__$1 = cljs.core.next(seq38955);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38956,seq38955__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38977 = arguments.length;
var i__4830__auto___38978 = (0);
while(true){
if((i__4830__auto___38978 < len__4829__auto___38977)){
args__4835__auto__.push((arguments[i__4830__auto___38978]));

var G__38979 = (i__4830__auto___38978 + (1));
i__4830__auto___38978 = G__38979;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__38864__auto__,rest__38865__auto__){
var convert_case__38866__auto__ = (function (p1__38863__38867__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__38863__38867__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38865__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38864__auto__,convert_case__38866__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq38969){
var G__38970 = cljs.core.first(seq38969);
var seq38969__$1 = cljs.core.next(seq38969);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38970,seq38969__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38980 = arguments.length;
var i__4830__auto___38981 = (0);
while(true){
if((i__4830__auto___38981 < len__4829__auto___38980)){
args__4835__auto__.push((arguments[i__4830__auto___38981]));

var G__38982 = (i__4830__auto___38981 + (1));
i__4830__auto___38981 = G__38982;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq38971){
var G__38972 = cljs.core.first(seq38971);
var seq38971__$1 = cljs.core.next(seq38971);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38972,seq38971__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38983 = arguments.length;
var i__4830__auto___38984 = (0);
while(true){
if((i__4830__auto___38984 < len__4829__auto___38983)){
args__4835__auto__.push((arguments[i__4830__auto___38984]));

var G__38985 = (i__4830__auto___38984 + (1));
i__4830__auto___38984 = G__38985;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq38973){
var G__38974 = cljs.core.first(seq38973);
var seq38973__$1 = cljs.core.next(seq38973);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38974,seq38973__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38986 = arguments.length;
var i__4830__auto___38987 = (0);
while(true){
if((i__4830__auto___38987 < len__4829__auto___38986)){
args__4835__auto__.push((arguments[i__4830__auto___38987]));

var G__38988 = (i__4830__auto___38987 + (1));
i__4830__auto___38987 = G__38988;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq38975){
var G__38976 = cljs.core.first(seq38975);
var seq38975__$1 = cljs.core.next(seq38975);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38976,seq38975__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38997 = arguments.length;
var i__4830__auto___38998 = (0);
while(true){
if((i__4830__auto___38998 < len__4829__auto___38997)){
args__4835__auto__.push((arguments[i__4830__auto___38998]));

var G__38999 = (i__4830__auto___38998 + (1));
i__4830__auto___38998 = G__38999;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38864__auto__,rest__38865__auto__){
var convert_case__38866__auto__ = (function (p1__38863__38867__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__38863__38867__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38865__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38864__auto__,convert_case__38866__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq38989){
var G__38990 = cljs.core.first(seq38989);
var seq38989__$1 = cljs.core.next(seq38989);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38990,seq38989__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39000 = arguments.length;
var i__4830__auto___39001 = (0);
while(true){
if((i__4830__auto___39001 < len__4829__auto___39000)){
args__4835__auto__.push((arguments[i__4830__auto___39001]));

var G__39002 = (i__4830__auto___39001 + (1));
i__4830__auto___39001 = G__39002;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq38991){
var G__38992 = cljs.core.first(seq38991);
var seq38991__$1 = cljs.core.next(seq38991);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38992,seq38991__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39003 = arguments.length;
var i__4830__auto___39004 = (0);
while(true){
if((i__4830__auto___39004 < len__4829__auto___39003)){
args__4835__auto__.push((arguments[i__4830__auto___39004]));

var G__39005 = (i__4830__auto___39004 + (1));
i__4830__auto___39004 = G__39005;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq38993){
var G__38994 = cljs.core.first(seq38993);
var seq38993__$1 = cljs.core.next(seq38993);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38994,seq38993__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39006 = arguments.length;
var i__4830__auto___39007 = (0);
while(true){
if((i__4830__auto___39007 < len__4829__auto___39006)){
args__4835__auto__.push((arguments[i__4830__auto___39007]));

var G__39008 = (i__4830__auto___39007 + (1));
i__4830__auto___39007 = G__39008;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq38995){
var G__38996 = cljs.core.first(seq38995);
var seq38995__$1 = cljs.core.next(seq38995);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38996,seq38995__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39017 = arguments.length;
var i__4830__auto___39018 = (0);
while(true){
if((i__4830__auto___39018 < len__4829__auto___39017)){
args__4835__auto__.push((arguments[i__4830__auto___39018]));

var G__39019 = (i__4830__auto___39018 + (1));
i__4830__auto___39018 = G__39019;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38864__auto__,rest__38865__auto__){
var convert_case__38866__auto__ = (function (p1__38863__38867__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__38863__38867__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38865__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38864__auto__,convert_case__38866__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq39009){
var G__39010 = cljs.core.first(seq39009);
var seq39009__$1 = cljs.core.next(seq39009);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39010,seq39009__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39020 = arguments.length;
var i__4830__auto___39021 = (0);
while(true){
if((i__4830__auto___39021 < len__4829__auto___39020)){
args__4835__auto__.push((arguments[i__4830__auto___39021]));

var G__39022 = (i__4830__auto___39021 + (1));
i__4830__auto___39021 = G__39022;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq39011){
var G__39012 = cljs.core.first(seq39011);
var seq39011__$1 = cljs.core.next(seq39011);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39012,seq39011__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39023 = arguments.length;
var i__4830__auto___39024 = (0);
while(true){
if((i__4830__auto___39024 < len__4829__auto___39023)){
args__4835__auto__.push((arguments[i__4830__auto___39024]));

var G__39025 = (i__4830__auto___39024 + (1));
i__4830__auto___39024 = G__39025;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq39013){
var G__39014 = cljs.core.first(seq39013);
var seq39013__$1 = cljs.core.next(seq39013);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39014,seq39013__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39026 = arguments.length;
var i__4830__auto___39027 = (0);
while(true){
if((i__4830__auto___39027 < len__4829__auto___39026)){
args__4835__auto__.push((arguments[i__4830__auto___39027]));

var G__39028 = (i__4830__auto___39027 + (1));
i__4830__auto___39027 = G__39028;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq39015){
var G__39016 = cljs.core.first(seq39015);
var seq39015__$1 = cljs.core.next(seq39015);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39016,seq39015__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39037 = arguments.length;
var i__4830__auto___39038 = (0);
while(true){
if((i__4830__auto___39038 < len__4829__auto___39037)){
args__4835__auto__.push((arguments[i__4830__auto___39038]));

var G__39039 = (i__4830__auto___39038 + (1));
i__4830__auto___39038 = G__39039;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__38864__auto__,rest__38865__auto__){
var convert_case__38866__auto__ = (function (p1__38863__38867__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__38863__38867__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38865__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__38864__auto__,convert_case__38866__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq39029){
var G__39030 = cljs.core.first(seq39029);
var seq39029__$1 = cljs.core.next(seq39029);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39030,seq39029__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39040 = arguments.length;
var i__4830__auto___39041 = (0);
while(true){
if((i__4830__auto___39041 < len__4829__auto___39040)){
args__4835__auto__.push((arguments[i__4830__auto___39041]));

var G__39042 = (i__4830__auto___39041 + (1));
i__4830__auto___39041 = G__39042;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq39031){
var G__39032 = cljs.core.first(seq39031);
var seq39031__$1 = cljs.core.next(seq39031);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39032,seq39031__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39043 = arguments.length;
var i__4830__auto___39044 = (0);
while(true){
if((i__4830__auto___39044 < len__4829__auto___39043)){
args__4835__auto__.push((arguments[i__4830__auto___39044]));

var G__39045 = (i__4830__auto___39044 + (1));
i__4830__auto___39044 = G__39045;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq39033){
var G__39034 = cljs.core.first(seq39033);
var seq39033__$1 = cljs.core.next(seq39033);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39034,seq39033__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39046 = arguments.length;
var i__4830__auto___39047 = (0);
while(true){
if((i__4830__auto___39047 < len__4829__auto___39046)){
args__4835__auto__.push((arguments[i__4830__auto___39047]));

var G__39048 = (i__4830__auto___39047 + (1));
i__4830__auto___39047 = G__39048;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__38869__auto__,rest__38870__auto__){
if((!((s__38869__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__38869__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__38869__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38870__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq39035){
var G__39036 = cljs.core.first(seq39035);
var seq39035__$1 = cljs.core.next(seq39035);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39036,seq39035__$1);
}));

