// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.viz.stream.transit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('inferenceql.inference.gpm.column');
goog.require('inferenceql.inference.gpm.compositional');
goog.require('inferenceql.inference.gpm.crosscat');
goog.require('inferenceql.inference.gpm.primitive_gpms.bernoulli');
goog.require('inferenceql.inference.gpm.primitive_gpms.categorical');
goog.require('inferenceql.inference.gpm.primitive_gpms.gaussian');
goog.require('inferenceql.inference.gpm.view');
inferenceql.viz.stream.transit.readers = (function (){var class_names = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inferenceql.inference.gpm.column.Column","inferenceql.inference.gpm.compositional.Compositional","inferenceql.inference.gpm.crosscat.XCat","inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli","inferenceql.inference.gpm.primitive_gpms.categorical.Categorical","inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian","inferenceql.inference.gpm.view.View"], null);
var constructors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [inferenceql.inference.gpm.column.map__GT_Column,inferenceql.inference.gpm.compositional.map__GT_Compositional,inferenceql.inference.gpm.crosscat.map__GT_XCat,inferenceql.inference.gpm.primitive_gpms.bernoulli.map__GT_Bernoulli,inferenceql.inference.gpm.primitive_gpms.categorical.map__GT_Categorical,inferenceql.inference.gpm.primitive_gpms.gaussian.map__GT_Gaussian,inferenceql.inference.gpm.view.map__GT_View], null);
var read_handlers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cognitect.transit.read_handler,constructors);
return cljs.core.zipmap(class_names,read_handlers);
})();
inferenceql.viz.stream.transit.transit_reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,inferenceql.viz.stream.transit.readers], null));
/**
 * Takes a transit encoded string a returns the encoded object.
 */
inferenceql.viz.stream.transit.read_transit_string = (function inferenceql$viz$stream$transit$read_transit_string(string){
return cognitect.transit.read(inferenceql.viz.stream.transit.transit_reader,string);
});
