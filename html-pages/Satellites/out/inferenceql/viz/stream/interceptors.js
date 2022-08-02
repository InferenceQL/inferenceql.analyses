// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('inferenceql.viz.stream.db');
goog.require('inferenceql.viz.config');
goog.require('inferenceql.viz.events.interceptors');
/**
 * A default set of event interceptors to use within events across the app.
 */
inferenceql.viz.stream.interceptors.event_interceptors = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(inferenceql.viz.config.config,cljs.core.cst$kw$enable_DASH_debug_DASH_interceptors,false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug,inferenceql.viz.events.interceptors.check_spec(cljs.core.cst$kw$inferenceql$viz$stream$db_SLASH_db)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.viz.events.interceptors.log_name], null));
