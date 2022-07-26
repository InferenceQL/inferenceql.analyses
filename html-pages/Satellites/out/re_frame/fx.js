// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39736 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39737 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39737);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___39772 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39772)){
var new_db_39773 = temp__5753__auto___39772;
var fexpr__39738_39774 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__39738_39774.cljs$core$IFn$_invoke$arity$1 ? fexpr__39738_39774.cljs$core$IFn$_invoke$arity$1(new_db_39773) : fexpr__39738_39774.call(null,new_db_39773));
} else {
}

var seq__39739 = cljs.core.seq(effects_without_db);
var chunk__39740 = null;
var count__39741 = (0);
var i__39742 = (0);
while(true){
if((i__39742 < count__39741)){
var vec__39749 = chunk__39740.cljs$core$IIndexed$_nth$arity$2(null,i__39742);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39749,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39749,(1),null);
var temp__5751__auto___39775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39775)){
var effect_fn_39776 = temp__5751__auto___39775;
(effect_fn_39776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39777 = seq__39739;
var G__39778 = chunk__39740;
var G__39779 = count__39741;
var G__39780 = (i__39742 + (1));
seq__39739 = G__39777;
chunk__39740 = G__39778;
count__39741 = G__39779;
i__39742 = G__39780;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39739);
if(temp__5753__auto__){
var seq__39739__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39739__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39739__$1);
var G__39781 = cljs.core.chunk_rest(seq__39739__$1);
var G__39782 = c__4649__auto__;
var G__39783 = cljs.core.count(c__4649__auto__);
var G__39784 = (0);
seq__39739 = G__39781;
chunk__39740 = G__39782;
count__39741 = G__39783;
i__39742 = G__39784;
continue;
} else {
var vec__39752 = cljs.core.first(seq__39739__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752,(1),null);
var temp__5751__auto___39785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39785)){
var effect_fn_39786 = temp__5751__auto___39785;
(effect_fn_39786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39787 = cljs.core.next(seq__39739__$1);
var G__39788 = null;
var G__39789 = (0);
var G__39790 = (0);
seq__39739 = G__39787;
chunk__39740 = G__39788;
count__39741 = G__39789;
i__39742 = G__39790;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39525__auto___39791 = re_frame.interop.now();
var duration__39526__auto___39792 = (end__39525__auto___39791 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__39526__auto___39792,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39525__auto___39791);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39736);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___39793 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39793)){
var new_db_39794 = temp__5753__auto___39793;
var fexpr__39755_39795 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__39755_39795.cljs$core$IFn$_invoke$arity$1 ? fexpr__39755_39795.cljs$core$IFn$_invoke$arity$1(new_db_39794) : fexpr__39755_39795.call(null,new_db_39794));
} else {
}

var seq__39756 = cljs.core.seq(effects_without_db);
var chunk__39757 = null;
var count__39758 = (0);
var i__39759 = (0);
while(true){
if((i__39759 < count__39758)){
var vec__39766 = chunk__39757.cljs$core$IIndexed$_nth$arity$2(null,i__39759);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39766,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39766,(1),null);
var temp__5751__auto___39796 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39796)){
var effect_fn_39797 = temp__5751__auto___39796;
(effect_fn_39797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39797.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39798 = seq__39756;
var G__39799 = chunk__39757;
var G__39800 = count__39758;
var G__39801 = (i__39759 + (1));
seq__39756 = G__39798;
chunk__39757 = G__39799;
count__39758 = G__39800;
i__39759 = G__39801;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39756);
if(temp__5753__auto__){
var seq__39756__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39756__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39756__$1);
var G__39802 = cljs.core.chunk_rest(seq__39756__$1);
var G__39803 = c__4649__auto__;
var G__39804 = cljs.core.count(c__4649__auto__);
var G__39805 = (0);
seq__39756 = G__39802;
chunk__39757 = G__39803;
count__39758 = G__39804;
i__39759 = G__39805;
continue;
} else {
var vec__39769 = cljs.core.first(seq__39756__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39769,(1),null);
var temp__5751__auto___39806 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39806)){
var effect_fn_39807 = temp__5751__auto___39806;
(effect_fn_39807.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39807.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39807.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39808 = cljs.core.next(seq__39756__$1);
var G__39809 = null;
var G__39810 = (0);
var G__39811 = (0);
seq__39756 = G__39808;
chunk__39757 = G__39809;
count__39758 = G__39810;
i__39759 = G__39811;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39812){
var map__39813 = p__39812;
var map__39813__$1 = cljs.core.__destructure_map(map__39813);
var effect = map__39813__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39813__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39813__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__39814 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39815 = null;
var count__39816 = (0);
var i__39817 = (0);
while(true){
if((i__39817 < count__39816)){
var effect = chunk__39815.cljs$core$IIndexed$_nth$arity$2(null,i__39817);
re_frame.fx.dispatch_later(effect);


var G__39818 = seq__39814;
var G__39819 = chunk__39815;
var G__39820 = count__39816;
var G__39821 = (i__39817 + (1));
seq__39814 = G__39818;
chunk__39815 = G__39819;
count__39816 = G__39820;
i__39817 = G__39821;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39814);
if(temp__5753__auto__){
var seq__39814__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39814__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39814__$1);
var G__39822 = cljs.core.chunk_rest(seq__39814__$1);
var G__39823 = c__4649__auto__;
var G__39824 = cljs.core.count(c__4649__auto__);
var G__39825 = (0);
seq__39814 = G__39822;
chunk__39815 = G__39823;
count__39816 = G__39824;
i__39817 = G__39825;
continue;
} else {
var effect = cljs.core.first(seq__39814__$1);
re_frame.fx.dispatch_later(effect);


var G__39826 = cljs.core.next(seq__39814__$1);
var G__39827 = null;
var G__39828 = (0);
var G__39829 = (0);
seq__39814 = G__39826;
chunk__39815 = G__39827;
count__39816 = G__39828;
i__39817 = G__39829;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__39830 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39831 = null;
var count__39832 = (0);
var i__39833 = (0);
while(true){
if((i__39833 < count__39832)){
var vec__39840 = chunk__39831.cljs$core$IIndexed$_nth$arity$2(null,i__39833);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39840,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39840,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39846 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39846)){
var effect_fn_39847 = temp__5751__auto___39846;
(effect_fn_39847.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39847.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39847.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39848 = seq__39830;
var G__39849 = chunk__39831;
var G__39850 = count__39832;
var G__39851 = (i__39833 + (1));
seq__39830 = G__39848;
chunk__39831 = G__39849;
count__39832 = G__39850;
i__39833 = G__39851;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39830);
if(temp__5753__auto__){
var seq__39830__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39830__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39830__$1);
var G__39852 = cljs.core.chunk_rest(seq__39830__$1);
var G__39853 = c__4649__auto__;
var G__39854 = cljs.core.count(c__4649__auto__);
var G__39855 = (0);
seq__39830 = G__39852;
chunk__39831 = G__39853;
count__39832 = G__39854;
i__39833 = G__39855;
continue;
} else {
var vec__39843 = cljs.core.first(seq__39830__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39843,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39843,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39856 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39856)){
var effect_fn_39857 = temp__5751__auto___39856;
(effect_fn_39857.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39857.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39857.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39858 = cljs.core.next(seq__39830__$1);
var G__39859 = null;
var G__39860 = (0);
var G__39861 = (0);
seq__39830 = G__39858;
chunk__39831 = G__39859;
count__39832 = G__39860;
i__39833 = G__39861;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39862 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39863 = null;
var count__39864 = (0);
var i__39865 = (0);
while(true){
if((i__39865 < count__39864)){
var event = chunk__39863.cljs$core$IIndexed$_nth$arity$2(null,i__39865);
re_frame.router.dispatch(event);


var G__39866 = seq__39862;
var G__39867 = chunk__39863;
var G__39868 = count__39864;
var G__39869 = (i__39865 + (1));
seq__39862 = G__39866;
chunk__39863 = G__39867;
count__39864 = G__39868;
i__39865 = G__39869;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39862);
if(temp__5753__auto__){
var seq__39862__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39862__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39862__$1);
var G__39870 = cljs.core.chunk_rest(seq__39862__$1);
var G__39871 = c__4649__auto__;
var G__39872 = cljs.core.count(c__4649__auto__);
var G__39873 = (0);
seq__39862 = G__39870;
chunk__39863 = G__39871;
count__39864 = G__39872;
i__39865 = G__39873;
continue;
} else {
var event = cljs.core.first(seq__39862__$1);
re_frame.router.dispatch(event);


var G__39874 = cljs.core.next(seq__39862__$1);
var G__39875 = null;
var G__39876 = (0);
var G__39877 = (0);
seq__39862 = G__39874;
chunk__39863 = G__39875;
count__39864 = G__39876;
i__39865 = G__39877;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39878 = cljs.core.seq(value);
var chunk__39879 = null;
var count__39880 = (0);
var i__39881 = (0);
while(true){
if((i__39881 < count__39880)){
var event = chunk__39879.cljs$core$IIndexed$_nth$arity$2(null,i__39881);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__39882 = seq__39878;
var G__39883 = chunk__39879;
var G__39884 = count__39880;
var G__39885 = (i__39881 + (1));
seq__39878 = G__39882;
chunk__39879 = G__39883;
count__39880 = G__39884;
i__39881 = G__39885;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39878);
if(temp__5753__auto__){
var seq__39878__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39878__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39878__$1);
var G__39886 = cljs.core.chunk_rest(seq__39878__$1);
var G__39887 = c__4649__auto__;
var G__39888 = cljs.core.count(c__4649__auto__);
var G__39889 = (0);
seq__39878 = G__39886;
chunk__39879 = G__39887;
count__39880 = G__39888;
i__39881 = G__39889;
continue;
} else {
var event = cljs.core.first(seq__39878__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__39890 = cljs.core.next(seq__39878__$1);
var G__39891 = null;
var G__39892 = (0);
var G__39893 = (0);
seq__39878 = G__39890;
chunk__39879 = G__39891;
count__39880 = G__39892;
i__39881 = G__39893;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
