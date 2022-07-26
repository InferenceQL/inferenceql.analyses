// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('inferenceql.viz.stream.panels.control.views');
goog.require('inferenceql.viz.stream.page.home.views');
goog.require('inferenceql.viz.stream.page.model.views');
inferenceql.viz.stream.views.app = (function inferenceql$viz$stream$views$app(){
var page_vector = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_page], null)));
var page = cljs.core.first(page_vector);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.panels.control.views.iteration_slider_section], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$margin,"60px 0px 0px 0px",cljs.core.cst$kw$child,(function (){var G__27646 = page;
var G__27646__$1 = (((G__27646 instanceof cljs.core.Keyword))?G__27646.fqn:null);
switch (G__27646__$1) {
case "home-page":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.home.views.home_page], null);

break;
case "model-page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.page.model.views.model_page,cljs.core.second(page_vector)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27646__$1)].join('')));

}
})()], null)], null)], null);
});
