// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('inferenceql.viz.config');
goog.require('inferenceql.viz.events.interceptors');
goog.require('inferenceql.viz.stream.config_spec');
goog.require('inferenceql.viz.stream.views');
goog.require('inferenceql.viz.stream.eventsubs');
goog.require('inferenceql.viz.stream.panels.control.eventsubs');
goog.require('inferenceql.viz.stream.panels.viz.eventsubs');
goog.require('inferenceql.viz.stream.page.home.eventsubs');
goog.require('inferenceql.viz.stream.page.model.eventsubs');
cljs.core.enable_console_print_BANG_();
/**
 * Renders the primary reagent component for the app onto the DOM element, #app
 * 
 *   Tagged with :after-load so that figwheel will call this function after every hot-reload.
 */
inferenceql.viz.stream.core.render_app = (function inferenceql$viz$stream$core$render_app(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.stream.views.app], null),goog.dom.$("app"));
});
/**
 * The main entry point for the app.
 * 
 *   Called from javascript in resources/index.html on initial page load.
 */
inferenceql.viz.stream.core._main = (function inferenceql$viz$stream$core$_main(){
inferenceql.viz.events.interceptors.check_and_throw(inferenceql.viz.config.config,cljs.core.cst$kw$inferenceql$viz$stream$config_DASH_spec_SLASH_config,"config.edn does not satisfy spec: ");

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_SLASH_initialize_DASH_db], null));

return inferenceql.viz.stream.core.render_app();
});
goog.exportSymbol('inferenceql.viz.stream.core._main', inferenceql.viz.stream.core._main);
