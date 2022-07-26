// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('metaprob.code_handlers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
metaprob.code_handlers.name_checker = (function metaprob$code_handlers$name_checker(n){
return (function (x){
return ((cljs.core.seq_QMARK_(x)) && ((((cljs.core.first(x) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.first(x)),n)))));
});
});
metaprob.code_handlers.symbol_checker = (function metaprob$code_handlers$symbol_checker(n){
return (function (x){
return ((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),n)));
});
});
metaprob.code_handlers.fn_expr_QMARK_ = metaprob.code_handlers.name_checker("fn");
metaprob.code_handlers.let_expr_QMARK_ = metaprob.code_handlers.name_checker("let");
metaprob.code_handlers.do_expr_QMARK_ = metaprob.code_handlers.name_checker("do");
metaprob.code_handlers.let_traced_expr_QMARK_ = metaprob.code_handlers.name_checker("let-traced");
metaprob.code_handlers.gen_expr_QMARK_ = metaprob.code_handlers.name_checker("gen");
metaprob.code_handlers.gen_name = (function metaprob$code_handlers$gen_name(expr){
if((cljs.core.second(expr) instanceof cljs.core.Symbol)){
return cljs.core.second(expr);
} else {
if(cljs.core.map_QMARK_(cljs.core.second(expr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.second(expr),cljs.core.cst$kw$name);
} else {
return null;

}
}
});
metaprob.code_handlers.gen_annotations = (function metaprob$code_handlers$gen_annotations(expr){
if(cljs.core.map_QMARK_(cljs.core.second(expr))){
return cljs.core.second(expr);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
metaprob.code_handlers.gen_has_annotations_QMARK_ = (function metaprob$code_handlers$gen_has_annotations_QMARK_(expr){
return (!(cljs.core.vector_QMARK_(cljs.core.second(expr))));
});
metaprob.code_handlers.gen_pattern = (function metaprob$code_handlers$gen_pattern(expr){
if(metaprob.code_handlers.gen_has_annotations_QMARK_(expr)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(2));
} else {
return cljs.core.second(expr);
}
});
metaprob.code_handlers.gen_body = (function metaprob$code_handlers$gen_body(expr){
if(metaprob.code_handlers.gen_has_annotations_QMARK_(expr)){
return cljs.core.rest(cljs.core.rest(cljs.core.rest(expr)));
} else {
return cljs.core.rest(cljs.core.rest(expr));
}
});
metaprob.code_handlers.map_gen = (function metaprob$code_handlers$map_gen(f,gen_expr){
if(metaprob.code_handlers.gen_has_annotations_QMARK_(gen_expr)){
return cljs.core.cons(cljs.core.first(gen_expr),cljs.core.cons(cljs.core.second(gen_expr),cljs.core.cons(metaprob.code_handlers.gen_pattern(gen_expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,metaprob.code_handlers.gen_body(gen_expr)))));
} else {
return cljs.core.cons(cljs.core.first(gen_expr),cljs.core.cons(metaprob.code_handlers.gen_pattern(gen_expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,metaprob.code_handlers.gen_body(gen_expr))));
}
});
metaprob.code_handlers.if_expr_QMARK_ = metaprob.code_handlers.symbol_checker(cljs.core.cst$sym$if);
metaprob.code_handlers.if_predicate = cljs.core.second;
metaprob.code_handlers.if_then_clause = (function metaprob$code_handlers$if_then_clause(expr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(2));
});
metaprob.code_handlers.if_else_clause = (function metaprob$code_handlers$if_else_clause(expr){
if((cljs.core.count(expr) < (4))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(3));
}
});
metaprob.code_handlers.variable_QMARK_ = cljs.core.symbol_QMARK_;
metaprob.code_handlers.quote_expr_QMARK_ = metaprob.code_handlers.symbol_checker(cljs.core.cst$sym$quote);
metaprob.code_handlers.quote_quoted = cljs.core.second;
metaprob.code_handlers.literal_QMARK_ = (function metaprob$code_handlers$literal_QMARK_(expr){
return (((!(((cljs.core.seq_QMARK_(expr)) || (((cljs.core.vector_QMARK_(expr)) || (cljs.core.map_QMARK_(expr)))))))) || (cljs.core.empty_QMARK_(expr)));
});
metaprob.code_handlers.let_bindings = (function metaprob$code_handlers$let_bindings(expr){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.second(expr));
});
metaprob.code_handlers.let_body = (function metaprob$code_handlers$let_body(expr){
return cljs.core.rest(cljs.core.rest(expr));
});
