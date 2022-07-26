// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.panels.viz.views_simple');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('medley.core');
inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$vega = require('vega-embed')['vega'];
inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$default = require('vega-embed')['default'];
inferenceql.viz.panels.viz.views_simple.log_level_default = inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$vega.Error;
inferenceql.viz.panels.viz.views_simple.log_level_debug = inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$vega.Warn;
inferenceql.viz.panels.viz.views_simple.default_vega_embed_options = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$renderer,"svg",cljs.core.cst$kw$mode,"vega-lite",cljs.core.cst$kw$logLevel,inferenceql.viz.panels.viz.views_simple.log_level_default,cljs.core.cst$kw$tooltip,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$theme,"custom"], null),cljs.core.cst$kw$config,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$axis,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$labelFontSize,(14),cljs.core.cst$kw$titleFontSize,(14),cljs.core.cst$kw$titlePadding,(5)], null),cljs.core.cst$kw$legend,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$labelFontSize,(12),cljs.core.cst$kw$titleFontSize,(12)], null),cljs.core.cst$kw$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$labelFontSize,(14)], null),cljs.core.cst$kw$headerFacet,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,null], null),cljs.core.cst$kw$concat,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spacing,(50)], null)], null)], null);
/**
 * Reagent component for displaying vega-lite specs. Can be used independently of the iql.viz app.
 * 
 *   Args:
 *  spec -- a vega-lite spec.
 *  opt -- (map) options to pass to vega-embed runtime.
 *  init-fn -- (function) Ran after the vega-embed instance in initialized and data and
 *    params have been updated. Recieves an instance of vega-embed. Used to perform additional
 *    setup on the vega-embed instance. Can be nil.
 *  data -- (map) Dataset name to data. Will be used to update the datasets in the vega-embed
 *    instance.
 *  params -- (map) Param name to value. Will be used to update values of the params in the
 *    vega-embed instance.
 * 
 *   Only changing the `spec` will create a new vega-embed instance. Changes to `opt` and `init-fn` are
 *   ignored. Changes to `data` and `params` are applied to the existing vega-embed instance.
 */
inferenceql.viz.panels.viz.views_simple.vega_lite = (function inferenceql$viz$panels$viz$views_simple$vega_lite(spec,opt,init_fn,data,params){
var dom_nodes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var vega_inst = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var free_vega = (function (){
if(cljs.core.truth_(cljs.core.deref(vega_inst))){
return cljs.core.deref(vega_inst).finalize();
} else {
return null;
}
});
var update_data = (function (vega,data__$1){
if(cljs.core.truth_((function (){var and__4221__auto__ = vega;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.seq(data__$1);
} else {
return and__4221__auto__;
}
})())){
var view = vega.view;
var seq__27191_27233 = cljs.core.seq(data__$1);
var chunk__27192_27234 = null;
var count__27193_27235 = (0);
var i__27194_27236 = (0);
while(true){
if((i__27194_27236 < count__27193_27235)){
var vec__27201_27237 = chunk__27192_27234.cljs$core$IIndexed$_nth$arity$2(null,i__27194_27236);
var k_27238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27201_27237,(0),null);
var v_27239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27201_27237,(1),null);
var cs_27240 = inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$vega.changeset();
cs_27240.insert(cljs.core.clj__GT_js(v_27239));

cs_27240.remove(((function (seq__27191_27233,chunk__27192_27234,count__27193_27235,i__27194_27236,cs_27240,vec__27201_27237,k_27238,v_27239,view,dom_nodes,vega_inst,free_vega){
return (function (){
return true;
});})(seq__27191_27233,chunk__27192_27234,count__27193_27235,i__27194_27236,cs_27240,vec__27201_27237,k_27238,v_27239,view,dom_nodes,vega_inst,free_vega))
);

view.change(cljs.core.name(k_27238),cs_27240);


var G__27241 = seq__27191_27233;
var G__27242 = chunk__27192_27234;
var G__27243 = count__27193_27235;
var G__27244 = (i__27194_27236 + (1));
seq__27191_27233 = G__27241;
chunk__27192_27234 = G__27242;
count__27193_27235 = G__27243;
i__27194_27236 = G__27244;
continue;
} else {
var temp__5753__auto___27245 = cljs.core.seq(seq__27191_27233);
if(temp__5753__auto___27245){
var seq__27191_27246__$1 = temp__5753__auto___27245;
if(cljs.core.chunked_seq_QMARK_(seq__27191_27246__$1)){
var c__4649__auto___27247 = cljs.core.chunk_first(seq__27191_27246__$1);
var G__27248 = cljs.core.chunk_rest(seq__27191_27246__$1);
var G__27249 = c__4649__auto___27247;
var G__27250 = cljs.core.count(c__4649__auto___27247);
var G__27251 = (0);
seq__27191_27233 = G__27248;
chunk__27192_27234 = G__27249;
count__27193_27235 = G__27250;
i__27194_27236 = G__27251;
continue;
} else {
var vec__27204_27252 = cljs.core.first(seq__27191_27246__$1);
var k_27253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27204_27252,(0),null);
var v_27254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27204_27252,(1),null);
var cs_27255 = inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$vega.changeset();
cs_27255.insert(cljs.core.clj__GT_js(v_27254));

cs_27255.remove(((function (seq__27191_27233,chunk__27192_27234,count__27193_27235,i__27194_27236,cs_27255,vec__27204_27252,k_27253,v_27254,seq__27191_27246__$1,temp__5753__auto___27245,view,dom_nodes,vega_inst,free_vega){
return (function (){
return true;
});})(seq__27191_27233,chunk__27192_27234,count__27193_27235,i__27194_27236,cs_27255,vec__27204_27252,k_27253,v_27254,seq__27191_27246__$1,temp__5753__auto___27245,view,dom_nodes,vega_inst,free_vega))
);

view.change(cljs.core.name(k_27253),cs_27255);


var G__27256 = cljs.core.next(seq__27191_27246__$1);
var G__27257 = null;
var G__27258 = (0);
var G__27259 = (0);
seq__27191_27233 = G__27256;
chunk__27192_27234 = G__27257;
count__27193_27235 = G__27258;
i__27194_27236 = G__27259;
continue;
}
} else {
}
}
break;
}

return view.run();
} else {
return null;
}
});
var update_params = (function (vega,params__$1){
if(cljs.core.truth_((function (){var and__4221__auto__ = vega;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.seq(params__$1);
} else {
return and__4221__auto__;
}
})())){
var view = vega.view;
var seq__27207_27260 = cljs.core.seq(params__$1);
var chunk__27208_27261 = null;
var count__27209_27262 = (0);
var i__27210_27263 = (0);
while(true){
if((i__27210_27263 < count__27209_27262)){
var vec__27217_27264 = chunk__27208_27261.cljs$core$IIndexed$_nth$arity$2(null,i__27210_27263);
var k_27265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27217_27264,(0),null);
var v_27266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27217_27264,(1),null);
view.signal(cljs.core.name(k_27265),cljs.core.clj__GT_js(v_27266));


var G__27267 = seq__27207_27260;
var G__27268 = chunk__27208_27261;
var G__27269 = count__27209_27262;
var G__27270 = (i__27210_27263 + (1));
seq__27207_27260 = G__27267;
chunk__27208_27261 = G__27268;
count__27209_27262 = G__27269;
i__27210_27263 = G__27270;
continue;
} else {
var temp__5753__auto___27271 = cljs.core.seq(seq__27207_27260);
if(temp__5753__auto___27271){
var seq__27207_27272__$1 = temp__5753__auto___27271;
if(cljs.core.chunked_seq_QMARK_(seq__27207_27272__$1)){
var c__4649__auto___27273 = cljs.core.chunk_first(seq__27207_27272__$1);
var G__27274 = cljs.core.chunk_rest(seq__27207_27272__$1);
var G__27275 = c__4649__auto___27273;
var G__27276 = cljs.core.count(c__4649__auto___27273);
var G__27277 = (0);
seq__27207_27260 = G__27274;
chunk__27208_27261 = G__27275;
count__27209_27262 = G__27276;
i__27210_27263 = G__27277;
continue;
} else {
var vec__27220_27278 = cljs.core.first(seq__27207_27272__$1);
var k_27279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27220_27278,(0),null);
var v_27280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27220_27278,(1),null);
view.signal(cljs.core.name(k_27279),cljs.core.clj__GT_js(v_27280));


var G__27281 = cljs.core.next(seq__27207_27272__$1);
var G__27282 = null;
var G__27283 = (0);
var G__27284 = (0);
seq__27207_27260 = G__27281;
chunk__27208_27261 = G__27282;
count__27209_27262 = G__27283;
i__27210_27263 = G__27284;
continue;
}
} else {
}
}
break;
}

return view.run();
} else {
return null;
}
});
var embed = (function (spec__$1,opt__$1,init_fn__$1,data__$1,params__$1){
if(cljs.core.truth_(spec__$1)){
var spec__$2 = cljs.core.clj__GT_js(spec__$1);
var opt__$2 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inferenceql.viz.panels.viz.views_simple.default_vega_embed_options,opt__$1], 0)));
var G__27223 = (function (){var G__27224 = cljs.core.cst$kw$vega_DASH_node.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dom_nodes));
var G__27225 = spec__$2;
var G__27226 = opt__$2;
return (inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$default.cljs$core$IFn$_invoke$arity$3 ? inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$default.cljs$core$IFn$_invoke$arity$3(G__27224,G__27225,G__27226) : inferenceql.viz.panels.viz.views_simple.node$module$vega_embed$default.call(null,G__27224,G__27225,G__27226));
})();
G__27223.then((function (res){
update_data(res,data__$1);

update_params(res,params__$1);

if(cljs.core.truth_(init_fn__$1)){
return (init_fn__$1.cljs$core$IFn$_invoke$arity$1 ? init_fn__$1.cljs$core$IFn$_invoke$arity$1(res) : init_fn__$1.call(null,res));
} else {
return null;
}
}));

G__27223.then((function (res){
return cljs.core.reset_BANG_(vega_inst,res);
}));

G__27223.catch((function (err){
return console.error(err);
}));

return G__27223;
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display_DASH_name,"vega-lite-simple",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (_){
return embed(spec,opt,init_fn,data,params);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,argv_old){
var vec__27227 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27227,(0),null);
var spec__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27227,(1),null);
var opt__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27227,(2),null);
var init_fn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27227,(3),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27227,(4),null);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27227,(5),null);
var vec__27230 = argv_old;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(0),null);
var spec_old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(3),null);
var data_old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(4),null);
var params_old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(5),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(spec__$1,spec_old)){
free_vega();

return embed(spec__$1,opt__$1,init_fn__$1,data__$1,params__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(data__$1,data_old)){
var data_changed_27285 = medley.core.filter_kv((function (k,v){
return ((cljs.core.contains_QMARK_(data_old,k)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_old,k))));
}),data__$1);
update_data(cljs.core.deref(vega_inst),data_changed_27285);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(params__$1,params_old)){
var params_changed = medley.core.filter_kv((function (k,v){
return ((cljs.core.contains_QMARK_(params_old,k)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(params_old,k))));
}),params__$1);
return update_params(cljs.core.deref(vega_inst),params_changed);
} else {
return null;
}
}
}),cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function (_){
return free_vega();
}),cljs.core.cst$kw$reagent_DASH_render,(function (_,___$1,___$2,___$3,___$4){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_viz_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,(function (p1__27190_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dom_nodes,cljs.core.assoc,cljs.core.cst$kw$vega_DASH_node,p1__27190_SHARP_);
})], null)], null)], null);
})], null));
});
