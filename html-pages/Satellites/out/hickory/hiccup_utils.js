// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('hickory.hiccup_utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
/**
 * Given two possible indexes, returns the lesser that is not -1. If both
 * are -1, then -1 is returned. Useful for searching strings for multiple
 * markers, as many routines will return -1 for not found.
 * 
 * Examples: (first-idx -1 -1) => -1
 *           (first-idx -1 2) => 2
 *           (first-idx 5 -1) => 5
 *           (first-idx 5 3) => 3
 */
hickory.hiccup_utils.first_idx = (function hickory$hiccup_utils$first_idx(a,b){
if((a === (-1))){
return b;
} else {
if((b === (-1))){
return a;
} else {
var x__4309__auto__ = a;
var y__4310__auto__ = b;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
}
}
});
hickory.hiccup_utils.index_of = (function hickory$hiccup_utils$index_of(var_args){
var G__41226 = arguments.length;
switch (G__41226) {
case 2:
return hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,c){
return s.indexOf(c);
}));

(hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,c,idx){
return s.indexOf(c,idx);
}));

(hickory.hiccup_utils.index_of.cljs$lang$maxFixedArity = 3);

/**
 * clojure.string/split is a wrapper on java.lang.String/split with the limit
 * parameter equal to 0, which keeps leading empty strings, but discards
 * trailing empty strings. This makes no sense, so we have to write our own
 * to keep the trailing empty strings.
 */
hickory.hiccup_utils.split_keep_trailing_empty = (function hickory$hiccup_utils$split_keep_trailing_empty(s,re){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,re,(-1));
});
/**
 * Given a hiccup tag element, returns true iff the tag is in 'valid' hiccup
 * format. Which in this function means:
 *    1. Tag name is non-empty.
 *    2. If there is an id, there is only one.
 *    3. If there is an id, it is nonempty.
 *    4. If there is an id, it comes before any classes.
 *    5. Any class name is nonempty.
 */
hickory.hiccup_utils.tag_well_formed_QMARK_ = (function hickory$hiccup_utils$tag_well_formed_QMARK_(tag_elem){
var tag_elem__$1 = cljs.core.name(tag_elem);
var hash_idx = (hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2(tag_elem__$1,"#") | (0));
var dot_idx = (hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2(tag_elem__$1,".") | (0));
var tag_cutoff = hickory.hiccup_utils.first_idx(hash_idx,dot_idx);
var and__4221__auto__ = ((0) < ((tag_elem__$1).length));
if(and__4221__auto__){
var and__4221__auto____$1 = (((tag_cutoff === (-1)))?true:(tag_cutoff > (0)));
if(and__4221__auto____$1){
var and__4221__auto____$2 = (((hash_idx === (-1)))?true:((((-1) === hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$3(tag_elem__$1,"#",(hash_idx + (1))))) && (((hash_idx + (1)) < hickory.hiccup_utils.first_idx(hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$3(tag_elem__$1,".",(hash_idx + (1))),((tag_elem__$1).length))))));
if(and__4221__auto____$2){
var and__4221__auto____$3 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hash_idx,(-1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dot_idx,(-1)))))?(hash_idx < dot_idx):true);
if(and__4221__auto____$3){
if((dot_idx === (-1))){
return true;
} else {
var classes = tag_elem__$1.substring((dot_idx + (1)));
return cljs.core.every_QMARK_((function (p1__41228_SHARP_){
return ((0) < cljs.core.count(p1__41228_SHARP_));
}),hickory.hiccup_utils.split_keep_trailing_empty(classes,/\./));
}
} else {
return and__4221__auto____$3;
}
} else {
return and__4221__auto____$2;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});
/**
 * Given a well-formed hiccup tag element, return just the tag name as
 *   a string.
 */
hickory.hiccup_utils.tag_name = (function hickory$hiccup_utils$tag_name(tag_elem){
var tag_elem__$1 = cljs.core.name(tag_elem);
var hash_idx = (hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2(tag_elem__$1,"#") | (0));
var dot_idx = (hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2(tag_elem__$1,".") | (0));
var cutoff = hickory.hiccup_utils.first_idx(hash_idx,dot_idx);
if((cutoff === (-1))){
return tag_elem__$1;
} else {
return tag_elem__$1.substring((0),cutoff);
}
});
/**
 * Given a well-formed hiccup tag element, return a vector containing
 * any class names included in the tag, as strings. Ignores the hiccup
 * requirement that any id on the tag must come
 * first. Example: :div.foo.bar => ["foo" "bar"].
 */
hickory.hiccup_utils.class_names = (function hickory$hiccup_utils$class_names(tag_elem){
var tag_elem__$1 = cljs.core.name(tag_elem);
var curr_dot = hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2(tag_elem__$1,".");
var classes = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((curr_dot === (-1))){
return cljs.core.persistent_BANG_(classes);
} else {
var next_dot = hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$3(tag_elem__$1,".",(curr_dot + (1)));
var next_hash = hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$3(tag_elem__$1,"#",(curr_dot + (1)));
var cutoff = hickory.hiccup_utils.first_idx(next_dot,next_hash);
if((cutoff === (-1))){
var G__41229 = next_dot;
var G__41230 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(classes,tag_elem__$1.substring((curr_dot + (1))));
curr_dot = G__41229;
classes = G__41230;
continue;
} else {
var G__41231 = next_dot;
var G__41232 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(classes,tag_elem__$1.substring((curr_dot + (1)),cutoff));
curr_dot = G__41231;
classes = G__41232;
continue;
}
}
break;
}
});
/**
 * Given a well-formed hiccup tag element, return a string containing
 * the id, or nil if there isn't one.
 */
hickory.hiccup_utils.id = (function hickory$hiccup_utils$id(tag_elem){
var tag_elem__$1 = cljs.core.name(tag_elem);
var hash_idx = (hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$2(tag_elem__$1,"#") | (0));
var next_dot_idx = (hickory.hiccup_utils.index_of.cljs$core$IFn$_invoke$arity$3(tag_elem__$1,".",hash_idx) | (0));
if((hash_idx === (-1))){
return null;
} else {
if((next_dot_idx === (-1))){
return tag_elem__$1.substring((hash_idx + (1)));
} else {
return tag_elem__$1.substring((hash_idx + (1)),next_dot_idx);
}
}
});
/**
 * Given a sequence of hiccup forms, presumably the content forms of another
 * hiccup element, return a new sequence with any sequence elements expanded
 * into the main sequence. This logic does not apply recursively, so sequences
 * inside sequences won't be expanded out. Also note that this really only
 * applies to sequences; things that seq? returns true on. So this excludes
 * vectors.
 *   (expand-content-seqs [1 '(2 3) (for [x [1 2 3]] (* x 2)) [5]])
 *   ==> (1 2 3 2 4 6 [5])
 */
hickory.hiccup_utils.expand_content_seqs = (function hickory$hiccup_utils$expand_content_seqs(content){
var remaining_content = content;
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((remaining_content == null)){
return cljs.core.persistent_BANG_(result);
} else {
if(cljs.core.seq_QMARK_(cljs.core.first(remaining_content))){
var G__41233 = cljs.core.next(remaining_content);
var G__41234 = (function (){var remaining_seq = cljs.core.first(remaining_content);
var result__$1 = result;
while(true){
if((remaining_seq == null)){
return result__$1;
} else {
var G__41235 = cljs.core.next(remaining_seq);
var G__41236 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result__$1,cljs.core.first(remaining_seq));
remaining_seq = G__41235;
result__$1 = G__41236;
continue;
}
break;
}
})();
remaining_content = G__41233;
result = G__41234;
continue;
} else {
var G__41237 = cljs.core.next(remaining_content);
var G__41238 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.first(remaining_content));
remaining_content = G__41237;
result = G__41238;
continue;
}
}
break;
}
});
/**
 * Given a well-formed hiccup form, ensure that it is in the form
 *   [tag attributes content1 ... contentN].
 * That is, an unadorned tag name (keyword, lowercase), all attributes in the
 * attribute map in the second element, and then any children. Note that this
 * does not happen recursively; content is not modified.
 */
hickory.hiccup_utils.normalize_element = (function hickory$hiccup_utils$normalize_element(hiccup_form){
var vec__41239 = hiccup_form;
var seq__41240 = cljs.core.seq(vec__41239);
var first__41241 = cljs.core.first(seq__41240);
var seq__41240__$1 = cljs.core.next(seq__41240);
var tag_elem = first__41241;
var content = seq__41240__$1;
if((!(hickory.hiccup_utils.tag_well_formed_QMARK_(tag_elem)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid input: Tag element",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_elem),"is not well-formed."].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var tag_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(hickory.hiccup_utils.tag_name(tag_elem)));
var tag_classes = hickory.hiccup_utils.class_names(tag_elem);
var tag_id = hickory.hiccup_utils.id(tag_elem);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,tag_id,cljs.core.cst$kw$class,(((!(cljs.core.empty_QMARK_(tag_classes))))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",tag_classes):null)], null);
var vec__41242 = ((cljs.core.map_QMARK_(cljs.core.first(content)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(content),cljs.core.rest(content)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,content], null));
var map_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242,(0),null);
var content__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242,(1),null);
var attrs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,map_attrs], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag_name,attrs,content__$1);
});
/**
 * Given a well-formed hiccup form, recursively normalizes it, so that it and
 * all children elements will also be normalized. A normalized form is in the
 * form
 *   [tag attributes content1 ... contentN].
 * That is, an unadorned tag name (keyword, lowercase), all attributes in the
 * attribute map in the second element, and then any children. Any content
 * that is a sequence is also expanded out into the main sequence of content
 * items.
 */
hickory.hiccup_utils.normalize_form = (function hickory$hiccup_utils$normalize_form(form){
if(typeof form === 'string'){
return form;
} else {
var vec__41246 = hickory.hiccup_utils.normalize_element(form);
var seq__41247 = cljs.core.seq(vec__41246);
var first__41248 = cljs.core.first(seq__41247);
var seq__41247__$1 = cljs.core.next(seq__41247);
var tag = first__41248;
var first__41248__$1 = cljs.core.first(seq__41247__$1);
var seq__41247__$2 = cljs.core.next(seq__41247__$1);
var attrs = first__41248__$1;
var contents = seq__41247__$2;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,attrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41245_SHARP_){
if(cljs.core.vector_QMARK_(p1__41245_SHARP_)){
return (hickory.hiccup_utils.normalize_form.cljs$core$IFn$_invoke$arity$1 ? hickory.hiccup_utils.normalize_form.cljs$core$IFn$_invoke$arity$1(p1__41245_SHARP_) : hickory.hiccup_utils.normalize_form.call(null,p1__41245_SHARP_));
} else {
return p1__41245_SHARP_;
}
}),hickory.hiccup_utils.expand_content_seqs(contents)));
}
});
