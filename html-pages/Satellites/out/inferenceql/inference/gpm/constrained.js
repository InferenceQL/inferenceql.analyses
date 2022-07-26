// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.constrained');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.gpm.proto');
goog.require('net.cgrand.xforms.rfs');
/**
 * Like `clojure.core/and`, but is a function and thus evaluates its arguments
 *   eagerly.
 */
inferenceql.inference.gpm.constrained.and_f = (function inferenceql$inference$gpm$constrained$and_f(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3638 = arguments.length;
var i__4830__auto___3639 = (0);
while(true){
if((i__4830__auto___3639 < len__4829__auto___3638)){
args__4835__auto__.push((arguments[i__4830__auto___3639]));

var G__3640 = (i__4830__auto___3639 + (1));
i__4830__auto___3639 = G__3640;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return inferenceql.inference.gpm.constrained.and_f.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(inferenceql.inference.gpm.constrained.and_f.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.every_QMARK_(cljs.core.identity,xs);
}));

(inferenceql.inference.gpm.constrained.and_f.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(inferenceql.inference.gpm.constrained.and_f.cljs$lang$applyTo = (function (seq3637){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3637));
}));

/**
 * Like `clojure.core/or`, but is a function and thus evaluates its arguments
 *   eagerly.
 */
inferenceql.inference.gpm.constrained.or_f = (function inferenceql$inference$gpm$constrained$or_f(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3642 = arguments.length;
var i__4830__auto___3643 = (0);
while(true){
if((i__4830__auto___3643 < len__4829__auto___3642)){
args__4835__auto__.push((arguments[i__4830__auto___3643]));

var G__3644 = (i__4830__auto___3643 + (1));
i__4830__auto___3643 = G__3644;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return inferenceql.inference.gpm.constrained.or_f.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(inferenceql.inference.gpm.constrained.or_f.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [true,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,xs)));
}));

(inferenceql.inference.gpm.constrained.or_f.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(inferenceql.inference.gpm.constrained.or_f.cljs$lang$applyTo = (function (seq3641){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3641));
}));

/**
 * A map from operator symbols to operator functions.
 */
inferenceql.inference.gpm.constrained.operator_env = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$sym$_LT_,cljs.core._LT_,cljs.core.cst$sym$_LT__EQ_,cljs.core._LT__EQ_,cljs.core.cst$sym$_EQ_,cljs.core._EQ_,cljs.core.cst$sym$_GT_,cljs.core._GT_,cljs.core.cst$sym$_GT__EQ_,cljs.core._GT__EQ_,cljs.core.cst$sym$and,inferenceql.inference.gpm.constrained.and_f,cljs.core.cst$sym$or,inferenceql.inference.gpm.constrained.or_f,cljs.core.cst$sym$not,cljs.core.not], null);
/**
 * Returns a predicate for an event. The predicate when called on a sample will
 *   return true if the event has occurred for that sample and false otherwise.
 */
inferenceql.inference.gpm.constrained.event__GT_pred = (function inferenceql$inference$gpm$constrained$event__GT_pred(event,p__3646){
var map__3647 = p__3646;
var map__3647__$1 = cljs.core.__destructure_map(map__3647);
var operation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3647__$1,cljs.core.cst$kw$operation_QMARK_);
var variable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3647__$1,cljs.core.cst$kw$variable_QMARK_);
var operands = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3647__$1,cljs.core.cst$kw$operands);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3647__$1,cljs.core.cst$kw$operator);
return (function (env){
var node__GT_pred = (function inferenceql$inference$gpm$constrained$event__GT_pred_$_node__GT_pred(node,env__$1){
if(cljs.core.truth_((operation_QMARK_.cljs$core$IFn$_invoke$arity$1 ? operation_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : operation_QMARK_.call(null,node)))){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inferenceql.inference.gpm.constrained.operator_env,(operator.cljs$core$IFn$_invoke$arity$1 ? operator.cljs$core$IFn$_invoke$arity$1(node) : operator.call(null,node)));
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3645_SHARP_){
return inferenceql$inference$gpm$constrained$event__GT_pred_$_node__GT_pred(p1__3645_SHARP_,env__$1);
}),(operands.cljs$core$IFn$_invoke$arity$1 ? operands.cljs$core$IFn$_invoke$arity$1(node) : operands.call(null,node)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
if(cljs.core.truth_((variable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? variable_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : variable_QMARK_.call(null,node)))){
var temp__5755__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,node);
if((temp__5755__auto__ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("could not resolve symbol",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$symbol,node,cljs.core.cst$kw$env,env__$1], null));
} else {
var v = temp__5755__auto__;
return v;
}
} else {
return node;

}
}
});
return node__GT_pred(event,env);
});
});
/**
 * Returns all the variables in an event.
 */
inferenceql.inference.gpm.constrained.event__GT_variables = (function inferenceql$inference$gpm$constrained$event__GT_variables(event,p__3648){
var map__3649 = p__3648;
var map__3649__$1 = cljs.core.__destructure_map(map__3649);
var operation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3649__$1,cljs.core.cst$kw$operation_QMARK_);
var variable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3649__$1,cljs.core.cst$kw$variable_QMARK_);
var operands = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3649__$1,cljs.core.cst$kw$operands);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(variable_QMARK_),cljs.core.tree_seq(operation_QMARK_,operands,event));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {inferenceql.inference.gpm.proto.Variables}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {inferenceql.inference.gpm.proto.GPM}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
inferenceql.inference.gpm.constrained.ConstrainedGPM = (function (gpm,pred_QMARK_,variables,sample_size,__meta,__extmap,__hash){
this.gpm = gpm;
this.pred_QMARK_ = pred_QMARK_;
this.variables = variables;
this.sample_size = sample_size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return inferenceql.inference.gpm.proto.variables(self__.gpm);
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (this$,targets,conditions){
var self__ = this;
var this$__$1 = this;
var G__3656 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__3650_SHARP_){
var conditions__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conditions,p1__3650_SHARP_], 0));
var G__3657 = inferenceql.inference.gpm.proto.logpdf(self__.gpm,targets,conditions__$1);
return Math.exp(G__3657);
})),net.cgrand.xforms.rfs.avg,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(self__.sample_size,(function (){
return this$__$1.inferenceql$inference$gpm$proto$GPM$simulate$arity$3(null,self__.variables,cljs.core.PersistentArrayMap.EMPTY);
})));
return Math.log(G__3656);
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (_,targets,conditions){
var self__ = this;
var ___$1 = this;
while(true){
var v = inferenceql.inference.gpm.proto.simulate(self__.gpm,cljs.core.into.cljs$core$IFn$_invoke$arity$2(targets,self__.variables),conditions);
if(cljs.core.truth_((self__.pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.pred_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.pred_QMARK_.call(null,v)))){
return cljs.core.select_keys(v,targets);
} else {
continue;
}
break;
}
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3652,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3658 = k3652;
var G__3658__$1 = (((G__3658 instanceof cljs.core.Keyword))?G__3658.fqn:null);
switch (G__3658__$1) {
case "gpm":
return self__.gpm;

break;
case "pred?":
return self__.pred_QMARK_;

break;
case "variables":
return self__.variables;

break;
case "sample-size":
return self__.sample_size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3652,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3659){
var vec__3660 = p__3659;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3660,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3660,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.constrained.ConstrainedGPM{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gpm,self__.gpm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_QMARK_,self__.pred_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variables,self__.variables],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sample_DASH_size,self__.sample_size],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3651){
var self__ = this;
var G__3651__$1 = this;
return (new cljs.core.RecordIter((0),G__3651__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gpm,cljs.core.cst$kw$pred_QMARK_,cljs.core.cst$kw$variables,cljs.core.cst$kw$sample_DASH_size], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(self__.gpm,self__.pred_QMARK_,self__.variables,self__.sample_size,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3663 = (function (coll__4469__auto__){
return (897564071 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3663(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3653,other3654){
var self__ = this;
var this3653__$1 = this;
return (((!((other3654 == null)))) && ((((this3653__$1.constructor === other3654.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3653__$1.gpm,other3654.gpm)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3653__$1.pred_QMARK_,other3654.pred_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3653__$1.variables,other3654.variables)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3653__$1.sample_size,other3654.sample_size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3653__$1.__extmap,other3654.__extmap)))))))))))));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$gpm,null,cljs.core.cst$kw$sample_DASH_size,null,cljs.core.cst$kw$variables,null,cljs.core.cst$kw$pred_QMARK_,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(self__.gpm,self__.pred_QMARK_,self__.variables,self__.sample_size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3652){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3664 = k3652;
var G__3664__$1 = (((G__3664 instanceof cljs.core.Keyword))?G__3664.fqn:null);
switch (G__3664__$1) {
case "gpm":
case "pred?":
case "variables":
case "sample-size":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3652);

}
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3651){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3665 = cljs.core.keyword_identical_QMARK_;
var expr__3666 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3668 = cljs.core.cst$kw$gpm;
var G__3669 = expr__3666;
return (pred__3665.cljs$core$IFn$_invoke$arity$2 ? pred__3665.cljs$core$IFn$_invoke$arity$2(G__3668,G__3669) : pred__3665.call(null,G__3668,G__3669));
})())){
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(G__3651,self__.pred_QMARK_,self__.variables,self__.sample_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3670 = cljs.core.cst$kw$pred_QMARK_;
var G__3671 = expr__3666;
return (pred__3665.cljs$core$IFn$_invoke$arity$2 ? pred__3665.cljs$core$IFn$_invoke$arity$2(G__3670,G__3671) : pred__3665.call(null,G__3670,G__3671));
})())){
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(self__.gpm,G__3651,self__.variables,self__.sample_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3672 = cljs.core.cst$kw$variables;
var G__3673 = expr__3666;
return (pred__3665.cljs$core$IFn$_invoke$arity$2 ? pred__3665.cljs$core$IFn$_invoke$arity$2(G__3672,G__3673) : pred__3665.call(null,G__3672,G__3673));
})())){
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(self__.gpm,self__.pred_QMARK_,G__3651,self__.sample_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3674 = cljs.core.cst$kw$sample_DASH_size;
var G__3675 = expr__3666;
return (pred__3665.cljs$core$IFn$_invoke$arity$2 ? pred__3665.cljs$core$IFn$_invoke$arity$2(G__3674,G__3675) : pred__3665.call(null,G__3674,G__3675));
})())){
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(self__.gpm,self__.pred_QMARK_,self__.variables,G__3651,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(self__.gpm,self__.pred_QMARK_,self__.variables,self__.sample_size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3651),null));
}
}
}
}
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$gpm,self__.gpm,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pred_QMARK_,self__.pred_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$variables,self__.variables,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sample_DASH_size,self__.sample_size,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3651){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(self__.gpm,self__.pred_QMARK_,self__.variables,self__.sample_size,G__3651,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gpm,cljs.core.cst$sym$pred_QMARK_,cljs.core.cst$sym$variables,cljs.core.cst$sym$sample_DASH_size], null);
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.cljs$lang$type = true);

(inferenceql.inference.gpm.constrained.ConstrainedGPM.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.constrained/ConstrainedGPM",null,(1),null));
}));

(inferenceql.inference.gpm.constrained.ConstrainedGPM.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.constrained/ConstrainedGPM");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.constrained/ConstrainedGPM.
 */
inferenceql.inference.gpm.constrained.__GT_ConstrainedGPM = (function inferenceql$inference$gpm$constrained$__GT_ConstrainedGPM(gpm,pred_QMARK_,variables,sample_size){
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(gpm,pred_QMARK_,variables,sample_size,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.constrained/ConstrainedGPM, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.constrained.map__GT_ConstrainedGPM = (function inferenceql$inference$gpm$constrained$map__GT_ConstrainedGPM(G__3655){
var extmap__4512__auto__ = (function (){var G__3676 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3655,cljs.core.cst$kw$gpm,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred_QMARK_,cljs.core.cst$kw$variables,cljs.core.cst$kw$sample_DASH_size], 0));
if(cljs.core.record_QMARK_(G__3655)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3676);
} else {
return G__3676;
}
})();
return (new inferenceql.inference.gpm.constrained.ConstrainedGPM(cljs.core.cst$kw$gpm.cljs$core$IFn$_invoke$arity$1(G__3655),cljs.core.cst$kw$pred_QMARK_.cljs$core$IFn$_invoke$arity$1(G__3655),cljs.core.cst$kw$variables.cljs$core$IFn$_invoke$arity$1(G__3655),cljs.core.cst$kw$sample_DASH_size.cljs$core$IFn$_invoke$arity$1(G__3655),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Constrains gpm based on event via rejection sampling. Arguments are the same
 *   as those for `inferenceql.inference.gpm/constrain`.
 */
inferenceql.inference.gpm.constrained.constrain = (function inferenceql$inference$gpm$constrained$constrain(gpm,event,opts){
var pred_QMARK_ = inferenceql.inference.gpm.constrained.event__GT_pred(event,opts);
var variables = inferenceql.inference.gpm.constrained.event__GT_variables(event,opts);
return inferenceql.inference.gpm.constrained.map__GT_ConstrainedGPM(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$gpm,gpm,cljs.core.cst$kw$pred_QMARK_,pred_QMARK_,cljs.core.cst$kw$variables,variables,cljs.core.cst$kw$sample_DASH_size,(1000)], null));
});
