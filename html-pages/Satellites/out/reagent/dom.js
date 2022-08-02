// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__7829 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7830 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7830);

try{var G__7831 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__7832 = container;
var G__7833 = (function (){
var _STAR_always_update_STAR__orig_val__7834 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7835 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7835);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7834);
}});
return reagent.dom.node$module$react_dom.render(G__7831,G__7832,G__7833);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7829);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__7837 = arguments.length;
switch (G__7837) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__7838 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7838,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7838,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__7842_7858 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__7843_7859 = null;
var count__7844_7860 = (0);
var i__7845_7861 = (0);
while(true){
if((i__7845_7861 < count__7844_7860)){
var vec__7852_7862 = chunk__7843_7859.cljs$core$IIndexed$_nth$arity$2(null,i__7845_7861);
var container_7863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7852_7862,(0),null);
var comp_7864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7852_7862,(1),null);
reagent.dom.re_render_component(comp_7864,container_7863);


var G__7865 = seq__7842_7858;
var G__7866 = chunk__7843_7859;
var G__7867 = count__7844_7860;
var G__7868 = (i__7845_7861 + (1));
seq__7842_7858 = G__7865;
chunk__7843_7859 = G__7866;
count__7844_7860 = G__7867;
i__7845_7861 = G__7868;
continue;
} else {
var temp__5753__auto___7869 = cljs.core.seq(seq__7842_7858);
if(temp__5753__auto___7869){
var seq__7842_7870__$1 = temp__5753__auto___7869;
if(cljs.core.chunked_seq_QMARK_(seq__7842_7870__$1)){
var c__4649__auto___7871 = cljs.core.chunk_first(seq__7842_7870__$1);
var G__7872 = cljs.core.chunk_rest(seq__7842_7870__$1);
var G__7873 = c__4649__auto___7871;
var G__7874 = cljs.core.count(c__4649__auto___7871);
var G__7875 = (0);
seq__7842_7858 = G__7872;
chunk__7843_7859 = G__7873;
count__7844_7860 = G__7874;
i__7845_7861 = G__7875;
continue;
} else {
var vec__7855_7876 = cljs.core.first(seq__7842_7870__$1);
var container_7877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7855_7876,(0),null);
var comp_7878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7855_7876,(1),null);
reagent.dom.re_render_component(comp_7878,container_7877);


var G__7879 = cljs.core.next(seq__7842_7870__$1);
var G__7880 = null;
var G__7881 = (0);
var G__7882 = (0);
seq__7842_7858 = G__7879;
chunk__7843_7859 = G__7880;
count__7844_7860 = G__7881;
i__7845_7861 = G__7882;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
