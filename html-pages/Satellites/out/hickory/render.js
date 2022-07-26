// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('hickory.render');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hickory.hiccup_utils');
goog.require('hickory.utils');
goog.require('clojure.string');
/**
 * Given a map entry m, representing the attribute name and value, returns a
 * string representing that key/value pair as it would be rendered into HTML.
 */
hickory.render.render_hickory_attribute = (function hickory$render$render_hickory_attribute(m){
return [" ",cljs.core.name(cljs.core.key(m)),"=\"",hickory.utils.html_escape(cljs.core.val(m)),"\""].join('');
});
/**
 * Given a hickory HTML DOM map structure (as returned by as-hickory), returns a
 * string containing HTML it represents. Keep in mind this function is not super
 * fast or heavy-duty.
 * 
 * Note that it will NOT in general be the case that
 * 
 *   (= my-html-src (hickory-to-html (as-hickory (parse my-html-src))))
 * 
 * as we do not keep any letter case or whitespace information, any
 * "tag-soupy" elements, attribute quote characters used, etc.
 */
hickory.render.hickory_to_html = (function hickory$render$hickory_to_html(dom){
if(typeof dom === 'string'){
return hickory.utils.html_escape(dom);
} else {
try{var G__41252 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(dom);
var G__41252__$1 = (((G__41252 instanceof cljs.core.Keyword))?G__41252.fqn:null);
switch (G__41252__$1) {
case "document":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.hickory_to_html,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(dom)));

break;
case "document-type":
return hickory.utils.render_doctype(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$name], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$publicid], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$systemid], null)));

break;
case "element":
if(cljs.core.truth_((function (){var G__41253 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(dom);
return (hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1(G__41253) : hickory.utils.void_element.call(null,G__41253));
})())){
return ["<",cljs.core.name(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(dom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.render_hickory_attribute,cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(dom)))),">"].join('');
} else {
if(cljs.core.truth_((function (){var G__41254 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(dom);
return (hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(G__41254) : hickory.utils.unescapable_content.call(null,G__41254));
})())){
return ["<",cljs.core.name(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(dom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.render_hickory_attribute,cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(dom)))),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(dom))),"</",cljs.core.name(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(dom)),">"].join('');
} else {
return ["<",cljs.core.name(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(dom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.render_hickory_attribute,cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(dom)))),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.hickory_to_html,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(dom)))),"</",cljs.core.name(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(dom)),">"].join('');

}
}

break;
case "comment":
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(dom))),"-->"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41252__$1)].join('')));

}
}catch (e41251){if((e41251 instanceof Error)){
var e = e41251;
throw (cljs.core.truth_(hickory.utils.starts_with((e["message"]),"No matching clause: "))?cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not a valid node: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dom,dom], null)):e);
} else {
throw e41251;

}
}}
});
/**
 * Given a hiccup attribute map, returns a string containing the attributes
 * rendered as they should appear in an HTML tag, right after the tag (including
 * a leading space to separate from the tag, if any attributes present).
 */
hickory.render.render_hiccup_attrs = (function hickory$render$render_hiccup_attrs(attrs){
var attrs_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41256_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__41256_SHARP_)));
}),(function (){var iter__4622__auto__ = (function hickory$render$render_hiccup_attrs_$_iter__41257(s__41258){
return (new cljs.core.LazySeq(null,(function (){
var s__41258__$1 = s__41258;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41258__$1);
if(temp__5753__auto__){
var s__41258__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41258__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__41258__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__41260 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__41259 = (0);
while(true){
if((i__41259 < size__4621__auto__)){
var vec__41261 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__41259);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41261,(1),null);
cljs.core.chunk_append(b__41260,((v === true)?cljs.core.name(k):(((v == null))?"":[cljs.core.name(k),"=","\"",hickory.utils.html_escape(v),"\""].join('')
)));

var G__41267 = (i__41259 + (1));
i__41259 = G__41267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41260),hickory$render$render_hiccup_attrs_$_iter__41257(cljs.core.chunk_rest(s__41258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41260),null);
}
} else {
var vec__41264 = cljs.core.first(s__41258__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41264,(1),null);
return cljs.core.cons(((v === true)?cljs.core.name(k):(((v == null))?"":[cljs.core.name(k),"=","\"",hickory.utils.html_escape(v),"\""].join('')
)),hickory$render$render_hiccup_attrs_$_iter__41257(cljs.core.rest(s__41258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(attrs);
})())));
if((!(cljs.core.empty_QMARK_(attrs_str)))){
return [" ",attrs_str].join('');
} else {
return attrs_str;
}
});
/**
 * Given a normalized hiccup element (such as the output of
 * hickory.hiccup-utils/normalize-form; see this function's docstring
 * for more detailed definition of a normalized hiccup element), renders
 * it to HTML and returns it as a string.
 */
hickory.render.render_hiccup_element = (function hickory$render$render_hiccup_element(n_element){
var vec__41268 = n_element;
var seq__41269 = cljs.core.seq(vec__41268);
var first__41270 = cljs.core.first(seq__41269);
var seq__41269__$1 = cljs.core.next(seq__41269);
var tag = first__41270;
var first__41270__$1 = cljs.core.first(seq__41269__$1);
var seq__41269__$2 = cljs.core.next(seq__41269__$1);
var attrs = first__41270__$1;
var content = seq__41269__$2;
if(cljs.core.truth_((hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.void_element.call(null,tag)))){
return ["<",cljs.core.name(tag),hickory.render.render_hiccup_attrs(attrs),">"].join('');
} else {
return ["<",cljs.core.name(tag),hickory.render.render_hiccup_attrs(attrs),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((hickory.render.hiccup_to_html.cljs$core$IFn$_invoke$arity$1 ? hickory.render.hiccup_to_html.cljs$core$IFn$_invoke$arity$1(content) : hickory.render.hiccup_to_html.call(null,content))),"</",cljs.core.name(tag),">"].join('');
}
});
/**
 * Given a normalized hiccup form (such as the output of
 * hickory.hiccup-utils/normalize-form; see this function's docstring
 * for more detailed definition of a normalized hiccup form), renders
 * it to HTML and returns it as a string.
 */
hickory.render.render_hiccup_form = (function hickory$render$render_hiccup_form(n_form){
if(cljs.core.vector_QMARK_(n_form)){
return hickory.render.render_hiccup_element(n_form);
} else {
return n_form;
}
});
/**
 * Given a sequence of hiccup forms (as returned by as-hiccup), returns a
 * string containing HTML it represents. Keep in mind this function is not super
 * fast or heavy-duty, and definitely not a replacement for dedicated hiccup
 * renderers, like hiccup itself, which *is* fast and heavy-duty.
 * 
 * ```klipse
 *   (hiccup-to-html '([:html {} [:head {}] [:body {} [:a {} "foo"]]]))
 * ```
 * 
 * Note that it will NOT in general be the case that
 * 
 *   (= my-html-src (hiccup-to-html (as-hiccup (parse my-html-src))))
 * 
 * as we do not keep any letter case or whitespace information, any
 * "tag-soupy" elements, attribute quote characters used, etc. It will also
 * not generally be the case that this function's output will exactly match
 * hiccup's.
 * For instance:
 * 
 * ```klipse
 * (hiccup-to-html (as-hiccup (parse "<A href=\"foo\">foo</A>")))
 * ```
 *   
 */
hickory.render.hiccup_to_html = (function hickory$render$hiccup_to_html(hiccup_forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41271_SHARP_){
return hickory.render.render_hiccup_form(hickory.hiccup_utils.normalize_form(p1__41271_SHARP_));
}),hiccup_forms));
});
