// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('expound.problems');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('expound.paths');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('expound.printer');
goog.require('expound.ansi');
expound.problems.blank_form = (function expound$problems$blank_form(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.zipmap(cljs.core.keys(form),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
if(cljs.core.set_QMARK_(form)){
return form;
} else {
if(((cljs.core.list_QMARK_(form)) || (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
return cljs.core.cst$kw$expound$problems_SLASH_irrelevant;

}
}
}
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$problems_SLASH_summary_DASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$kw$highlighted_DASH_path], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,cljs.core.cst$kw$expound_SLASH_path], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$expound_SLASH_path], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
expound.problems.summary_form = (function expound$problems$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__40323 = in$;
var seq__40324 = cljs.core.seq(vec__40323);
var first__40325 = cljs.core.first(seq__40324);
var seq__40324__$1 = cljs.core.next(seq__40324);
var k = first__40325;
var rst = seq__40324__$1;
var rst__$1 = (function (){var or__4223__auto__ = rst;
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.problems.blank_form(form));
if(cljs.core.empty_QMARK_(in$)){
return cljs.core.cst$kw$expound$problems_SLASH_relevant;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kps_QMARK_(k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(displayed_form,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(k)),(function (){var G__40326 = show_valid_values_QMARK_;
var G__40327 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(k);
var G__40328 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__40326,G__40327,G__40328) : expound.problems.summary_form.call(null,G__40326,G__40327,G__40328));
})(),cljs.core.cst$kw$expound$problems_SLASH_irrelevant);
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kvps_QMARK_(k)))){
var G__40341 = show_valid_values_QMARK_;
var G__40342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(k));
var G__40343 = rst__$1;
show_valid_values_QMARK_ = G__40341;
form = G__40342;
in$ = G__40343;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(displayed_form,k,(function (){var G__40329 = show_valid_values_QMARK_;
var G__40330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__40331 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__40329,G__40330,G__40331) : expound.problems.summary_form.call(null,G__40329,G__40330,G__40331));
})());
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__40332 = show_valid_values_QMARK_;
var G__40333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,k);
var G__40334 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__40332,G__40333,G__40334) : expound.problems.summary_form.call(null,G__40332,G__40333,G__40334));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.set_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__40335 = show_valid_values_QMARK_;
var G__40336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__40337 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__40335,G__40336,G__40337) : expound.problems.summary_form.call(null,G__40335,G__40336,G__40337));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.list_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__40338 = show_valid_values_QMARK_;
var G__40339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__40340 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__40338,G__40339,G__40340) : expound.problems.summary_form.call(null,G__40338,G__40339,G__40340));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (typeof form === 'string'))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(form),k,cljs.core.cst$kw$expound$problems_SLASH_relevant));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$in,in$], null));

}
}
}
}
}
}
}
}
break;
}
});
expound.problems.highlight_line = (function expound$problems$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40344_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40344_SHARP_)).length);
}),clojure.string.split_lines(replacement)));
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)).length),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(max_width,"^")));
});
expound.problems.adjust_in = (function expound$problems$adjust_in(form,problem){
var in1 = expound.paths.in_with_kps(form,cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY);
var in2 = (function (){var paths = expound.paths.paths_to_value(form,cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(paths))){
return cljs.core.first(paths);
} else {
return null;
}
})();
var in3 = (function (){try{return expound.paths.in_with_kps(form,cljs.spec.alpha.unform(cljs.core.last(cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY);
}catch (e40345){var _e = e40345;
return null;
}})();
var new_in = (cljs.core.truth_(in1)?in1:(cljs.core.truth_(in2)?in2:(cljs.core.truth_(in3)?in3:(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var G__40347 = cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem));
var fexpr__40346 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret,null], null), null);
return (fexpr__40346.cljs$core$IFn$_invoke$arity$1 ? fexpr__40346.cljs$core$IFn$_invoke$arity$1(G__40347) : fexpr__40346.call(null,G__40347));
}
})())?cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem):null
))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_in,new_in);
});
expound.problems.adjust_path = (function expound$problems$adjust_path(failure,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_path,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure))?cljs.core.vec(cljs.core.rest(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem))):cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)));
});
expound.problems.add_spec = (function expound$problems$add_spec(spec,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$spec,spec);
});
expound.problems.fix_via = (function expound$problems$fix_via(spec,problem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.first(cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_via,cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_via,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)));
}
});
expound.problems.missing_spec_QMARK_ = (function expound$problems$missing_spec_QMARK_(_failure,problem){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no method",cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.not_in_set_QMARK_ = (function expound$problems$not_in_set_QMARK_(_failure,problem){
return cljs.core.set_QMARK_(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.fspec_exception_failure_QMARK_ = (function expound$problems$fspec_exception_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem))))));
});
expound.problems.fspec_ret_failure_QMARK_ = (function expound$problems$fspec_ret_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ret,cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))))));
});
expound.problems.fspec_fn_failure_QMARK_ = (function expound$problems$fspec_fn_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))))));
});
expound.problems.check_ret_failure_QMARK_ = (function expound$problems$check_ret_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ret,cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_fn_failure_QMARK_ = (function expound$problems$check_fn_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.missing_key_QMARK_ = (function expound$problems$missing_key_QMARK_(_failure,problem){
var pred = cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem);
return ((cljs.core.seq_QMARK_(pred)) && (((((2) < cljs.core.count(pred))) && (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pred,(2)))))));
});
expound.problems.insufficient_input_QMARK_ = (function expound$problems$insufficient_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Insufficient input",null], null), null),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.extra_input_QMARK_ = (function expound$problems$extra_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Extra input",null], null), null),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.ptype = (function expound$problems$ptype(failure,problem){
if(cljs.core.truth_(cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(problem))){
return cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(problem);
} else {
if(expound.problems.insufficient_input_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_insufficient_DASH_input;
} else {
if(expound.problems.extra_input_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_extra_DASH_input;
} else {
if(expound.problems.not_in_set_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_not_DASH_in_DASH_set;
} else {
if(expound.problems.missing_key_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_key;
} else {
if(expound.problems.missing_spec_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_spec;
} else {
if(expound.problems.fspec_exception_failure_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_exception_DASH_failure;
} else {
if(expound.problems.fspec_ret_failure_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_ret_DASH_failure;
} else {
if(expound.problems.fspec_fn_failure_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_fn_DASH_failure;
} else {
if(expound.problems.check_ret_failure_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_check_DASH_ret_DASH_failure;
} else {
if(expound.problems.check_fn_failure_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_check_DASH_fn_DASH_failure;
} else {
return cljs.core.cst$kw$expound$problem_SLASH_unknown;

}
}
}
}
}
}
}
}
}
}
}
});
expound.problems.escape_replacement = (function expound$problems$escape_replacement(pattern,s){
return clojure.string.replace(s,/\$/,"$$$$");
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.problems.highlighted_value = (function expound$problems$highlighted_value(opts,problem){
var map__40348 = problem;
var map__40348__$1 = cljs.core.__destructure_map(map__40348);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40348__$1,cljs.core.cst$kw$expound_SLASH_form);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40348__$1,cljs.core.cst$kw$expound_SLASH_in);
var map__40349 = opts;
var map__40349__$1 = cljs.core.__destructure_map(map__40349);
var show_valid_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40349__$1,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,false);
var printed_val = expound.printer.pprint_str(expound.paths.value_in(form,in$));
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_relevant),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_kv_DASH_relevant),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_kv_DASH_relevant),"))"].join('');
var regex = cljs.core.re_pattern(["(.*)",relevant,".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR__orig_val__40353 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__40354 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40354);

try{return expound.printer.pprint_str(clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expound$problems_SLASH_irrelevant,cljs.core.cst$sym$$$$], null),expound.problems.summary_form(show_valid_values_QMARK_,form,in$)));
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40353);
}})();
var vec__40350 = cljs.core.re_find(regex,s);
var seq__40351 = cljs.core.seq(vec__40350);
var first__40352 = cljs.core.first(seq__40351);
var seq__40351__$1 = cljs.core.next(seq__40351);
var line = first__40352;
var first__40352__$1 = cljs.core.first(seq__40351__$1);
var seq__40351__$2 = cljs.core.next(seq__40351__$1);
var prefix = first__40352__$1;
var _more = seq__40351__$2;
var highlighted_line = [clojure.string.replace(line,cljs.core.re_pattern(relevant),expound.problems.escape_replacement(cljs.core.re_pattern(relevant),expound.printer.indent.cljs$core$IFn$_invoke$arity$3((0),cljs.core.count(prefix),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(printed_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.problems.highlight_line(prefix,printed_val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pointer], 0)))].join('');
return expound.printer.no_trailing_whitespace(clojure.string.replace(s,line,expound.problems.escape_replacement(line,highlighted_line)));
});
expound.problems.annotate = (function expound$problems$annotate(explain_data){
var map__40357 = explain_data;
var map__40357__$1 = cljs.core.__destructure_map(map__40357);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_args);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_ret);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40357__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec);
var caller = (function (){var or__4223__auto__ = cljs.core.cst$kw$clojure$spec$test$alpha_SLASH_caller.cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.cst$kw$orchestra$spec$test_SLASH_caller.cljs$core$IFn$_invoke$arity$1(explain_data);
}
})();
var form = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure))?value:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_ret))?ret:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_args))?args:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn))?fn:null))));
var problems_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_in,form),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_path,failure),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.add_spec,spec),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.fix_via,spec),(function (p1__40355_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40355_SHARP_,cljs.core.cst$kw$expound_SLASH_form,form);
}),(function (p1__40356_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40356_SHARP_,cljs.core.cst$kw$expound$spec$problem_SLASH_type,expound.problems.ptype(failure,p1__40356_SHARP_));
})], 0)),problems);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(explain_data,cljs.core.cst$kw$expound_SLASH_form,form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$expound_SLASH_caller,caller,cljs.core.cst$kw$expound_SLASH_problems,problems_SINGLEQUOTE_], 0));
});
expound.problems.type = expound.problems.ptype;
expound.problems.value_in = expound.paths.value_in;
