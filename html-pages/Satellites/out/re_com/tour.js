// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.tour');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_com.box');
goog.require('re_com.buttons');
/**
 * Returns a map containing
 *   - A reagent atom for each tour step controlling popover show/hide (boolean)
 *   - A standard atom holding the current step (integer)
 *   - A copy of the steps parameter passed in, to determine the order for prev/next functions
 *   It sets the first step atom to true so that it will be initially shown
 *   Sample return value:
 *   {:steps [:step1 :step2 :step3]
 *   :current-step (atom 0)
 *   :step1 (reagent/atom true)
 *   :step2 (reagent/atom false)
 *   :step3 (reagent/atom false)}
 */
re_com.tour.make_tour = (function re_com$tour$make_tour(tour_spec){
var tour_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_step,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.cst$kw$steps,tour_spec], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12839_SHARP_,p2__12840_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12839_SHARP_,p2__12840_SHARP_,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));
}),tour_map,tour_spec);
});
/**
 * Resets all poover atoms to false
 */
re_com.tour.initialise_tour = (function re_com$tour$initialise_tour(tour){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function re_com$tour$initialise_tour_$_iter__12841(s__12842){
return (new cljs.core.LazySeq(null,(function (){
var s__12842__$1 = s__12842;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12842__$1);
if(temp__5753__auto__){
var s__12842__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12842__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12842__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12844 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12843 = (0);
while(true){
if((i__12843 < size__4621__auto__)){
var step = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12843);
cljs.core.chunk_append(b__12844,cljs.core.reset_BANG_((step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(tour) : step.call(null,tour)),false));

var G__12845 = (i__12843 + (1));
i__12843 = G__12845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12844),re_com$tour$initialise_tour_$_iter__12841(cljs.core.chunk_rest(s__12842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12844),null);
}
} else {
var step = cljs.core.first(s__12842__$2);
return cljs.core.cons(cljs.core.reset_BANG_((step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(tour) : step.call(null,tour)),false),re_com$tour$initialise_tour_$_iter__12841(cljs.core.rest(s__12842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour));
})());
});
/**
 * Sets the first popover atom in the tour to true
 */
re_com.tour.start_tour = (function re_com$tour$start_tour(tour){
re_com.tour.initialise_tour(tour);

cljs.core.reset_BANG_(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour),(0));

return cljs.core.reset_BANG_((function (){var fexpr__12846 = cljs.core.first(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour));
return (fexpr__12846.cljs$core$IFn$_invoke$arity$1 ? fexpr__12846.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__12846.call(null,tour));
})(),true);
});
/**
 * Closes all tour popovers
 */
re_com.tour.finish_tour = (function re_com$tour$finish_tour(tour){
return re_com.tour.initialise_tour(tour);
});
re_com.tour.next_tour_step = (function re_com$tour$next_tour_step(tour){
var steps = cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step + (1));
if((new_step < cljs.core.count(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour)))){
cljs.core.reset_BANG_(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_((function (){var fexpr__12847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,old_step);
return (fexpr__12847.cljs$core$IFn$_invoke$arity$1 ? fexpr__12847.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__12847.call(null,tour));
})(),false);

return cljs.core.reset_BANG_((function (){var fexpr__12848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,new_step);
return (fexpr__12848.cljs$core$IFn$_invoke$arity$1 ? fexpr__12848.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__12848.call(null,tour));
})(),true);
} else {
return null;
}
});
re_com.tour.prev_tour_step = (function re_com$tour$prev_tour_step(tour){
var steps = cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step - (1));
if((new_step >= (0))){
cljs.core.reset_BANG_(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_((function (){var fexpr__12849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,old_step);
return (fexpr__12849.cljs$core$IFn$_invoke$arity$1 ? fexpr__12849.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__12849.call(null,tour));
})(),false);

return cljs.core.reset_BANG_((function (){var fexpr__12850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,new_step);
return (fexpr__12850.cljs$core$IFn$_invoke$arity$1 ? fexpr__12850.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__12850.call(null,tour));
})(),true);
} else {
return null;
}
});
/**
 * Generate the hr and previous/next buttons markup.
 *   If first button in tour, don't generate a Previous button.
 *   If last button in tour, change Next button to a Finish button
 */
re_com.tour.make_tour_nav = (function re_com$tour$make_tour_nav(tour){
var on_first_button = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour)),(0));
var on_last_button = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour)),(cljs.core.count(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour)) - (1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px 0px 10px"], null)], 0))], null)], null),((on_first_button)?null:new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/62E7029/re_com/tour.cljs",cljs.core.cst$kw$line,88], null)),cljs.core.cst$kw$label,"Previous",cljs.core.cst$kw$on_DASH_click,(function (event){
re_com.tour.prev_tour_step(tour);

return null;
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"15px"], null),cljs.core.cst$kw$class,"btn-default rc-tour-btn-previous"], null)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/62E7029/re_com/tour.cljs",cljs.core.cst$kw$line,94], null)),cljs.core.cst$kw$label,((on_last_button)?"Finish":"Next"),cljs.core.cst$kw$on_DASH_click,(function (event){
if(on_last_button){
re_com.tour.finish_tour(tour);
} else {
re_com.tour.next_tour_step(tour);
}

return null;
}),cljs.core.cst$kw$class,["btn-default ",((on_last_button)?"rc-tour-btn-finish":"rc-tour-btn-next")].join('')], null)], null);
});
