// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.impl.component');
goog.require('re_com.config');
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$child,cljs.core.cst$kw$children,cljs.core.cst$kw$panel_DASH_1,cljs.core.cst$kw$panel_DASH_2,cljs.core.cst$kw$debug_DASH_as], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__7013){
var map__7014 = p__7013;
var map__7014__$1 = cljs.core.__destructure_map(map__7014);
var args = map__7014__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7014__$1,cljs.core.cst$kw$src);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7014__$1,cljs.core.cst$kw$debug_DASH_as);
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4223__auto__ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__4223__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$ref], null));
if(cljs.core.truth_(temp__5753__auto__)){
var user_ref_fn = temp__5753__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__7015 = src;
var map__7015__$1 = cljs.core.__destructure_map(map__7015);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7015__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7015__$1,cljs.core.cst$kw$line);
var G__7016 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref,ref_fn,cljs.core.cst$kw$data_DASH_rc,rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7016,cljs.core.cst$kw$data_DASH_rc_DASH_src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__7016;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__7018 = arguments.length;
switch (G__7018) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$el,el,cljs.core.cst$kw$src,el.dataset.rcSrc,cljs.core.cst$kw$component,component,cljs.core.cst$kw$args,goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"32px",cljs.core.cst$kw$min_DASH_height,"32px",cljs.core.cst$kw$font_DASH_size,"1.4em",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$vertical_DASH_align,"center",cljs.core.cst$kw$background,"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__7022_7042 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__7021_SHARP_,p2__7020_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__7020_SHARP_,cljs.core.cst$kw$i,(p1__7021_SHARP_ + (1)));
}),stack));
var chunk__7023_7043 = null;
var count__7024_7044 = (0);
var i__7025_7045 = (0);
while(true){
if((i__7025_7045 < count__7024_7044)){
var map__7034_7046 = chunk__7023_7043.cljs$core$IIndexed$_nth$arity$2(null,i__7025_7045);
var map__7034_7047__$1 = cljs.core.__destructure_map(map__7034_7046);
var i_7048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7034_7047__$1,cljs.core.cst$kw$i);
var el_7049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7034_7047__$1,cljs.core.cst$kw$el);
var component_7050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7034_7047__$1,cljs.core.cst$kw$component);
var src_7051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7034_7047__$1,cljs.core.cst$kw$src);
var args_7052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7034_7047__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_7050)){
if(cljs.core.truth_(src_7051)){
var vec__7035_7053 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_7051,/:/);
var file_7054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7035_7053,(0),null);
var line_7055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7035_7053,(1),null);
if(cljs.core.truth_(args_7052)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7048),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_7050)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7054),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7055),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_7052,el_7049);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7048),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_7050)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7054),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7055),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_7049);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7048),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_7050)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_7052,el_7049);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7048),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_7049);
}


var G__7056 = seq__7022_7042;
var G__7057 = chunk__7023_7043;
var G__7058 = count__7024_7044;
var G__7059 = (i__7025_7045 + (1));
seq__7022_7042 = G__7056;
chunk__7023_7043 = G__7057;
count__7024_7044 = G__7058;
i__7025_7045 = G__7059;
continue;
} else {
var temp__5753__auto___7060 = cljs.core.seq(seq__7022_7042);
if(temp__5753__auto___7060){
var seq__7022_7061__$1 = temp__5753__auto___7060;
if(cljs.core.chunked_seq_QMARK_(seq__7022_7061__$1)){
var c__4649__auto___7062 = cljs.core.chunk_first(seq__7022_7061__$1);
var G__7063 = cljs.core.chunk_rest(seq__7022_7061__$1);
var G__7064 = c__4649__auto___7062;
var G__7065 = cljs.core.count(c__4649__auto___7062);
var G__7066 = (0);
seq__7022_7042 = G__7063;
chunk__7023_7043 = G__7064;
count__7024_7044 = G__7065;
i__7025_7045 = G__7066;
continue;
} else {
var map__7038_7067 = cljs.core.first(seq__7022_7061__$1);
var map__7038_7068__$1 = cljs.core.__destructure_map(map__7038_7067);
var i_7069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038_7068__$1,cljs.core.cst$kw$i);
var el_7070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038_7068__$1,cljs.core.cst$kw$el);
var component_7071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038_7068__$1,cljs.core.cst$kw$component);
var src_7072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038_7068__$1,cljs.core.cst$kw$src);
var args_7073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038_7068__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_7071)){
if(cljs.core.truth_(src_7072)){
var vec__7039_7074 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_7072,/:/);
var file_7075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7039_7074,(0),null);
var line_7076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7039_7074,(1),null);
if(cljs.core.truth_(args_7073)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7069),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_7071)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7075),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7076),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_7073,el_7070);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7069),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_7071)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7075),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7076),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_7070);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7069),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_7071)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_7073,el_7070);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_7069),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_7070);
}


var G__7077 = cljs.core.next(seq__7022_7061__$1);
var G__7078 = null;
var G__7079 = (0);
var G__7080 = (0);
seq__7022_7042 = G__7077;
chunk__7023_7043 = G__7078;
count__7024_7044 = G__7079;
i__7025_7045 = G__7080;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__7081 = cljs.core.seq(problems);
var chunk__7082 = null;
var count__7083 = (0);
var i__7084 = (0);
while(true){
if((i__7084 < count__7083)){
var map__7089 = chunk__7082.cljs$core$IIndexed$_nth$arity$2(null,i__7084);
var map__7089__$1 = cljs.core.__destructure_map(map__7089);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__7090_7093 = problem;
var G__7090_7094__$1 = (((G__7090_7093 instanceof cljs.core.Keyword))?G__7090_7093.fqn:null);
switch (G__7090_7094__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__7096 = seq__7081;
var G__7097 = chunk__7082;
var G__7098 = count__7083;
var G__7099 = (i__7084 + (1));
seq__7081 = G__7096;
chunk__7082 = G__7097;
count__7083 = G__7098;
i__7084 = G__7099;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__7081);
if(temp__5753__auto__){
var seq__7081__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7081__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__7081__$1);
var G__7100 = cljs.core.chunk_rest(seq__7081__$1);
var G__7101 = c__4649__auto__;
var G__7102 = cljs.core.count(c__4649__auto__);
var G__7103 = (0);
seq__7081 = G__7100;
chunk__7082 = G__7101;
count__7083 = G__7102;
i__7084 = G__7103;
continue;
} else {
var map__7091 = cljs.core.first(seq__7081__$1);
var map__7091__$1 = cljs.core.__destructure_map(map__7091);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7091__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7091__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7091__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7091__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7091__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__7092_7104 = problem;
var G__7092_7105__$1 = (((G__7092_7104 instanceof cljs.core.Keyword))?G__7092_7104.fqn:null);
switch (G__7092_7105__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__7107 = cljs.core.next(seq__7081__$1);
var G__7108 = null;
var G__7109 = (0);
var G__7110 = (0);
seq__7081 = G__7107;
chunk__7082 = G__7108;
count__7083 = G__7109;
i__7084 = G__7110;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__7111){
var map__7112 = p__7111;
var map__7112__$1 = cljs.core.__destructure_map(map__7112);
var src = map__7112__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7112__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7112__$1,cljs.core.cst$kw$line);
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4835__auto__ = [];
var len__4829__auto___7118 = arguments.length;
var i__4830__auto___7119 = (0);
while(true){
if((i__4830__auto___7119 < len__4829__auto___7118)){
args__4835__auto__.push((arguments[i__4830__auto___7119]));

var G__7120 = (i__4830__auto___7119 + (1));
i__4830__auto___7119 = G__7120;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__7114){
var map__7115 = p__7114;
var map__7115__$1 = cljs.core.__destructure_map(map__7115);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,cljs.core.cst$kw$problems);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,cljs.core.cst$kw$component);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,cljs.core.cst$kw$args);
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"validate-args-error",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__7121__delegate = function (p__7116){
var map__7117 = p__7116;
var map__7117__$1 = cljs.core.__destructure_map(map__7117);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$problems);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$component);
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$args);
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(args__$1),cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component__$1,cljs.core.cst$kw$args,args__$1], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"re-com validation error. Look in the DevTools console.",cljs.core.cst$kw$style,re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__7121 = function (var_args){
var p__7116 = null;
if (arguments.length > 0) {
var G__7122__i = 0, G__7122__a = new Array(arguments.length -  0);
while (G__7122__i < G__7122__a.length) {G__7122__a[G__7122__i] = arguments[G__7122__i + 0]; ++G__7122__i;}
  p__7116 = new cljs.core.IndexedSeq(G__7122__a,0,null);
} 
return G__7121__delegate.call(this,p__7116);};
G__7121.cljs$lang$maxFixedArity = 0;
G__7121.cljs$lang$applyTo = (function (arglist__7123){
var p__7116 = cljs.core.seq(arglist__7123);
return G__7121__delegate(p__7116);
});
G__7121.cljs$core$IFn$_invoke$arity$variadic = G__7121__delegate;
return G__7121;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq7113){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7113));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4835__auto__ = [];
var len__4829__auto___7129 = arguments.length;
var i__4830__auto___7130 = (0);
while(true){
if((i__4830__auto___7130 < len__4829__auto___7129)){
args__4835__auto__.push((arguments[i__4830__auto___7130]));

var G__7131 = (i__4830__auto___7130 + (1));
i__4830__auto___7130 = G__7131;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__7125){
var map__7126 = p__7125;
var map__7126__$1 = cljs.core.__destructure_map(map__7126);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7126__$1,cljs.core.cst$kw$component);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7126__$1,cljs.core.cst$kw$src);
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"stack-spy",cljs.core.cst$kw$component_DASH_did_DASH_mount,log_fn,cljs.core.cst$kw$component_DASH_did_DASH_update,log_fn,cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__7132__delegate = function (p__7127){
var map__7128 = p__7127;
var map__7128__$1 = cljs.core.__destructure_map(map__7128);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7128__$1,cljs.core.cst$kw$component);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7128__$1,cljs.core.cst$kw$src);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),component__$1], null);
};
var G__7132 = function (var_args){
var p__7127 = null;
if (arguments.length > 0) {
var G__7133__i = 0, G__7133__a = new Array(arguments.length -  0);
while (G__7133__i < G__7133__a.length) {G__7133__a[G__7133__i] = arguments[G__7133__i + 0]; ++G__7133__i;}
  p__7127 = new cljs.core.IndexedSeq(G__7133__a,0,null);
} 
return G__7132__delegate.call(this,p__7127);};
G__7132.cljs$lang$maxFixedArity = 0;
G__7132.cljs$lang$applyTo = (function (arglist__7134){
var p__7127 = cljs.core.seq(arglist__7134);
return G__7132__delegate(p__7127);
});
G__7132.cljs$core$IFn$_invoke$arity$variadic = G__7132__delegate;
return G__7132;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq7124){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7124));
}));

