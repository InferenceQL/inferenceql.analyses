// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('re_com.datepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('re_com.config');
goog.require('re_com.validate');
goog.require('cljs_time.predicates');
goog.require('cljs_time.format');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('clojure.string');
goog.require('goog.i18n.DateTimeFormat');
re_com.datepicker.month_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM yyyy");
re_com.datepicker.week_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("ww");
re_com.datepicker.date_format_str = "yyyy MMM dd";
re_com.datepicker.date_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy MMM dd");
re_com.datepicker.iso8601__GT_date = (function re_com$datepicker$iso8601__GT_date(iso8601){
if(cljs.core.seq(iso8601)){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((function (){var G__12661 = cljs.core.cst$kw$basic_DASH_date;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__12661) : cljs_time.format.formatters.call(null,G__12661));
})(),iso8601);
} else {
return null;
}
});
re_com.datepicker.month_label = (function re_com$datepicker$month_label(date_time,p__12662){
var map__12663 = p__12662;
var map__12663__$1 = cljs.core.__destructure_map(map__12663);
var i18n = map__12663__$1;
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12663__$1,cljs.core.cst$kw$months);
if(cljs.core.truth_(months)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(months,(cljs_time.core.month(date_time) - (1))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),date_time))].join('');
} else {
return cljs_time.format.unparse(re_com.datepicker.month_format,date_time);
}
});
re_com.datepicker.dec_year = (function re_com$datepicker$dec_year(date_time){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.dec_month = (function re_com$datepicker$dec_month(date_time){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.inc_month = (function re_com$datepicker$inc_month(date_time){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.inc_year = (function re_com$datepicker$inc_year(date_time){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.inc_date = (function re_com$datepicker$inc_date(date_time,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * If date fails pred, subtract period until true, otherwise answer date
 */
re_com.datepicker.previous = (function re_com$datepicker$previous(var_args){
var G__12665 = arguments.length;
switch (G__12665) {
case 1:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2(pred,re_com.util.now__GT_utc());
}));

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2 = (function (pred,date){
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3(pred,date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
}));

(re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(date) : pred.call(null,date)))){
return date;
} else {
var G__12667 = pred;
var G__12668 = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date,period);
var G__12669 = period;
pred = G__12667;
date = G__12668;
period = G__12669;
continue;
}
break;
}
}));

(re_com.datepicker.previous.cljs$lang$maxFixedArity = 3);

re_com.datepicker._EQ_date = (function re_com$datepicker$_EQ_date(date1,date2){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(date1),cljs_time.core.year(date2))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date1),cljs_time.core.month(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day(date1),cljs_time.core.day(date2))))));
});
re_com.datepicker._LT__EQ_date = (function re_com$datepicker$_LT__EQ_date(date1,date2){
var or__4223__auto__ = re_com.datepicker._EQ_date(date1,date2);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs_time.core.before_QMARK_(date1,date2);
}
});
re_com.datepicker._GT__EQ_date = (function re_com$datepicker$_GT__EQ_date(date1,date2){
var or__4223__auto__ = re_com.datepicker._EQ_date(date1,date2);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs_time.core.after_QMARK_(date1,date2);
}
});
re_com.datepicker.log_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("E dd MMM Y HH:mm:ss");
re_com.datepicker.leap_year_QMARK_ = (function re_com$datepicker$leap_year_QMARK_(year){
return (!(((((year & (3)) > (0))) || (((((year & (15)) > (0))) && (cljs.core.not(cljs.core.mod((25),year))))))));
});
re_com.datepicker.first_weekday_of_year = (function re_com$datepicker$first_weekday_of_year(week_day_at_start_of_week,year){
if(typeof week_day_at_start_of_week === 'number'){
} else {
throw (new Error("Assert failed: (number? week-day-at-start-of-week)"));
}

if(typeof year === 'number'){
} else {
throw (new Error("Assert failed: (number? year)"));
}

var jan_1_date_time = cljs_time.core.at_midnight(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,(1),(1)));
var jan_1_day_of_week = (cljs_time.core.day_of_week(jan_1_date_time) - (1));
var week_day_delta = (jan_1_day_of_week - week_day_at_start_of_week);
var days_to_add = (((week_day_delta > (0)))?((7) - week_day_delta):Math.abs(week_day_delta));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(jan_1_date_time,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(days_to_add));
});
re_com.datepicker.week_of_year = (function re_com$datepicker$week_of_year(week_day_at_start_of_week,start_of_week_date_time){
var end_of_week_date_time = cljs_time.core.at_midnight(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start_of_week_date_time,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((6))));
var year_at_end_of_week = cljs_time.core.year(end_of_week_date_time);
var _first_weekday_of_year = re_com.datepicker.first_weekday_of_year(week_day_at_start_of_week,year_at_end_of_week);
var last_week_of_previous_year_QMARK_ = cljs_time.core.before_QMARK_(start_of_week_date_time,_first_weekday_of_year);
if(cljs.core.truth_(last_week_of_previous_year_QMARK_)){
var previous_year = (year_at_end_of_week - (1));
var previous_year_is_leap_year_QMARK_ = re_com.datepicker.leap_year_QMARK_(previous_year);
if(previous_year_is_leap_year_QMARK_){
return (53);
} else {
return (52);
}
} else {
var ordinal_day = start_of_week_date_time.getDayOfYear();
var first_weekday_ordinal_day = _first_weekday_of_year.getDayOfYear();
var difference_in_days = (ordinal_day - first_weekday_ordinal_day);
var difference_in_weeks = Math.ceil((difference_in_days / (7)));
return (difference_in_weeks + (1));
}
});
re_com.datepicker.days_vector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Mo,cljs.core.cst$kw$short_DASH_name,"M",cljs.core.cst$kw$name,"MON"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Tu,cljs.core.cst$kw$short_DASH_name,"T",cljs.core.cst$kw$name,"TUE"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$We,cljs.core.cst$kw$short_DASH_name,"W",cljs.core.cst$kw$name,"WED"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Th,cljs.core.cst$kw$short_DASH_name,"T",cljs.core.cst$kw$name,"THU"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Fr,cljs.core.cst$kw$short_DASH_name,"F",cljs.core.cst$kw$name,"FRI"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Sa,cljs.core.cst$kw$short_DASH_name,"S",cljs.core.cst$kw$name,"SAT"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Su,cljs.core.cst$kw$short_DASH_name,"S",cljs.core.cst$kw$name,"SUN"], null)], null);
re_com.datepicker.to_days_vector = (function re_com$datepicker$to_days_vector(xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (x,m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$name,x);
}),xs,re_com.datepicker.days_vector);
});
re_com.datepicker.rotate = (function re_com$datepicker$rotate(n,coll){
var c = cljs.core.count(coll);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(c,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(n,c),cljs.core.cycle(coll)));
});
re_com.datepicker.is_day_pred = (function re_com$datepicker$is_day_pred(d){
return (function (p1__12670_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(p1__12670_SHARP_),(d + (1)));
});
});
re_com.datepicker.main_div_with = (function re_com$datepicker$main_div_with(table_div,hide_border_QMARK_,class$,style,attr,parts,src,debug_as){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as,cljs.core.cst$kw$class,"rc-datepicker-wrapper",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,173], null)),cljs.core.cst$kw$class,["rc-datepicker-border ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$border,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$border,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$border,cljs.core.cst$kw$attr], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$radius,"4px",cljs.core.cst$kw$size,"none",cljs.core.cst$kw$border,(cljs.core.truth_(hide_border_QMARK_)?"none":null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["datepicker noselect rc-datepicker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"13px",cljs.core.cst$kw$position,"static"], null),style], 0))], null),attr], 0)),table_div], null)], null)], null)], null);
});
re_com.datepicker.prev_year_icon = (function re_com$datepicker$prev_year_icon(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12674 = arguments.length;
var i__4830__auto___12675 = (0);
while(true){
if((i__4830__auto___12675 < len__4829__auto___12674)){
args__4835__auto__.push((arguments[i__4830__auto___12675]));

var G__12676 = (i__4830__auto___12675 + (1));
i__4830__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_year_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.prev_year_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__12672){
var map__12673 = p__12672;
var map__12673__$1 = cljs.core.__destructure_map(map__12673);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,cljs.core.cst$kw$parts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["rc-datepicker-prev-year-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_year_DASH_icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_year_DASH_icon,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$height,"24",cljs.core.cst$kw$viewBox,"0 0 24 24",cljs.core.cst$kw$width,"24"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_year_DASH_icon,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(1.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m 16.793529,7.4382353 -1.41,-1.41 -5.9999996,5.9999997 5.9999996,6 1.41,-1.41 -4.58,-4.59 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m 10.862647,7.4429412 -1.4100003,-1.41 -6,5.9999998 6,6 1.4100003,-1.41 -4.5800003,-4.59 z"], null)], null)], null)], null);
}));

(re_com.datepicker.prev_year_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_year_icon.cljs$lang$applyTo = (function (seq12671){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12671));
}));

re_com.datepicker.prev_month_icon = (function re_com$datepicker$prev_month_icon(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12680 = arguments.length;
var i__4830__auto___12681 = (0);
while(true){
if((i__4830__auto___12681 < len__4829__auto___12680)){
args__4835__auto__.push((arguments[i__4830__auto___12681]));

var G__12682 = (i__4830__auto___12681 + (1));
i__4830__auto___12681 = G__12682;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_month_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.prev_month_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__12678){
var map__12679 = p__12678;
var map__12679__$1 = cljs.core.__destructure_map(map__12679);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12679__$1,cljs.core.cst$kw$parts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["rc-datepicker-prev-month-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_month_DASH_icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_month_DASH_icon,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$height,"24",cljs.core.cst$kw$viewBox,"0 0 24 24",cljs.core.cst$kw$width,"24"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_month_DASH_icon,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"], null)], null)], null);
}));

(re_com.datepicker.prev_month_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_month_icon.cljs$lang$applyTo = (function (seq12677){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12677));
}));

re_com.datepicker.next_month_icon = (function re_com$datepicker$next_month_icon(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12686 = arguments.length;
var i__4830__auto___12687 = (0);
while(true){
if((i__4830__auto___12687 < len__4829__auto___12686)){
args__4835__auto__.push((arguments[i__4830__auto___12687]));

var G__12688 = (i__4830__auto___12687 + (1));
i__4830__auto___12687 = G__12688;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_month_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.next_month_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__12684){
var map__12685 = p__12684;
var map__12685__$1 = cljs.core.__destructure_map(map__12685);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12685__$1,cljs.core.cst$kw$parts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["rc-datepicker-next-month-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_month_DASH_icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_month_DASH_icon,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$height,"24",cljs.core.cst$kw$viewBox,"0 0 24 24",cljs.core.cst$kw$width,"24"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_month_DASH_icon,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"], null)], null)], null);
}));

(re_com.datepicker.next_month_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_month_icon.cljs$lang$applyTo = (function (seq12683){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12683));
}));

re_com.datepicker.next_year_icon = (function re_com$datepicker$next_year_icon(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12692 = arguments.length;
var i__4830__auto___12693 = (0);
while(true){
if((i__4830__auto___12693 < len__4829__auto___12692)){
args__4835__auto__.push((arguments[i__4830__auto___12693]));

var G__12694 = (i__4830__auto___12693 + (1));
i__4830__auto___12693 = G__12694;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_year_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.next_year_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__12690){
var map__12691 = p__12690;
var map__12691__$1 = cljs.core.__destructure_map(map__12691);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12691__$1,cljs.core.cst$kw$parts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,["rc-datepicker-next-year-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_year_DASH_icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_year_DASH_icon,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$height,"24",cljs.core.cst$kw$viewBox,"0 0 24 24",cljs.core.cst$kw$width,"24"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_year_DASH_icon,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(-1.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m 8.5882353,6 -1.41,1.41 4.5799997,4.59 -4.5799997,4.59 1.41,1.41 5.9999997,-6 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m 14.547353,5.9623529 -1.41,1.41 4.58,4.5900001 -4.58,4.59 1.41,1.41 6,-6 z"], null)], null)], null)], null);
}));

(re_com.datepicker.next_year_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_year_icon.cljs$lang$applyTo = (function (seq12689){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12689));
}));

re_com.datepicker.prev_year_nav = (function re_com$datepicker$prev_year_nav(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12698 = arguments.length;
var i__4830__auto___12699 = (0);
while(true){
if((i__4830__auto___12699 < len__4829__auto___12698)){
args__4835__auto__.push((arguments[i__4830__auto___12699]));

var G__12700 = (i__4830__auto___12699 + (1));
i__4830__auto___12699 = G__12700;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_year_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.prev_year_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__12696){
var map__12697 = p__12696;
var map__12697__$1 = cljs.core.__destructure_map(map__12697);
var display_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12697__$1,cljs.core.cst$kw$display_DASH_month);
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12697__$1,cljs.core.cst$kw$minimum);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12697__$1,cljs.core.cst$kw$disabled_QMARK_);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12697__$1,cljs.core.cst$kw$parts);
var prev_year_date_time = re_com.datepicker.dec_year(cljs.core.deref(display_month));
var prev_year_enabled_QMARK_ = (cljs.core.truth_(minimum)?cljs_time.core.after_QMARK_(prev_year_date_time,re_com.datepicker.dec_month(minimum)):true);
if(cljs.core.not(disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,248], null)),cljs.core.cst$kw$class,[(cljs.core.truth_(prev_year_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-prev-year ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_year,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_year,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(prev_year_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,prev_year_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_year,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_year_icon,cljs.core.cst$kw$parts,parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,260], null))], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.prev_year_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_year_nav.cljs$lang$applyTo = (function (seq12695){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12695));
}));

re_com.datepicker.prev_month_nav = (function re_com$datepicker$prev_month_nav(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12704 = arguments.length;
var i__4830__auto___12705 = (0);
while(true){
if((i__4830__auto___12705 < len__4829__auto___12704)){
args__4835__auto__.push((arguments[i__4830__auto___12705]));

var G__12706 = (i__4830__auto___12705 + (1));
i__4830__auto___12705 = G__12706;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.prev_month_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.prev_month_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__12702){
var map__12703 = p__12702;
var map__12703__$1 = cljs.core.__destructure_map(map__12703);
var display_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12703__$1,cljs.core.cst$kw$display_DASH_month);
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12703__$1,cljs.core.cst$kw$minimum);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12703__$1,cljs.core.cst$kw$disabled_QMARK_);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12703__$1,cljs.core.cst$kw$parts);
var prev_month_date_time = re_com.datepicker.dec_month(cljs.core.deref(display_month));
var prev_month_enabled_QMARK_ = (cljs.core.truth_(minimum)?cljs_time.core.after_QMARK_(prev_month_date_time,re_com.datepicker.dec_month(minimum)):true);
if(cljs.core.not(disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,269], null)),cljs.core.cst$kw$class,[(cljs.core.truth_(prev_month_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-prev-month ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_month,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_month,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(prev_month_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,prev_month_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_month,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_month_icon,cljs.core.cst$kw$parts,parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,281], null))], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.prev_month_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.prev_month_nav.cljs$lang$applyTo = (function (seq12701){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12701));
}));

re_com.datepicker.next_month_nav = (function re_com$datepicker$next_month_nav(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12710 = arguments.length;
var i__4830__auto___12711 = (0);
while(true){
if((i__4830__auto___12711 < len__4829__auto___12710)){
args__4835__auto__.push((arguments[i__4830__auto___12711]));

var G__12712 = (i__4830__auto___12711 + (1));
i__4830__auto___12711 = G__12712;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_month_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.next_month_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__12708){
var map__12709 = p__12708;
var map__12709__$1 = cljs.core.__destructure_map(map__12709);
var display_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12709__$1,cljs.core.cst$kw$display_DASH_month);
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12709__$1,cljs.core.cst$kw$maximum);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12709__$1,cljs.core.cst$kw$disabled_QMARK_);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12709__$1,cljs.core.cst$kw$parts);
var next_month_date_time = re_com.datepicker.inc_month(cljs.core.deref(display_month));
var next_month_enabled_QMARK_ = (cljs.core.truth_(maximum)?cljs_time.core.before_QMARK_(next_month_date_time,maximum):true);
if(cljs.core.not(disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,290], null))], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,292], null)),cljs.core.cst$kw$class,[(cljs.core.truth_(next_month_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-next-month ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_month,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_month,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(next_month_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,next_month_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_month,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_month_icon,cljs.core.cst$kw$parts,parts], null)], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.next_month_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_month_nav.cljs$lang$applyTo = (function (seq12707){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12707));
}));

re_com.datepicker.next_year_nav = (function re_com$datepicker$next_year_nav(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12716 = arguments.length;
var i__4830__auto___12717 = (0);
while(true){
if((i__4830__auto___12717 < len__4829__auto___12716)){
args__4835__auto__.push((arguments[i__4830__auto___12717]));

var G__12718 = (i__4830__auto___12717 + (1));
i__4830__auto___12717 = G__12718;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.next_year_nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.next_year_nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__12714){
var map__12715 = p__12714;
var map__12715__$1 = cljs.core.__destructure_map(map__12715);
var display_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12715__$1,cljs.core.cst$kw$display_DASH_month);
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12715__$1,cljs.core.cst$kw$maximum);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12715__$1,cljs.core.cst$kw$disabled_QMARK_);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12715__$1,cljs.core.cst$kw$parts);
var next_year_date_time = re_com.datepicker.inc_year(cljs.core.deref(display_month));
var next_year_enabled_QMARK_ = (cljs.core.truth_(maximum)?cljs_time.core.before_QMARK_(next_year_date_time,maximum):true);
if(cljs.core.not(disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,311], null))], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,313], null)),cljs.core.cst$kw$class,[(cljs.core.truth_(next_year_enabled_QMARK_)?"rc-datepicker-selectable ":"rc-datepicker-disabled "),"rc-datepicker-next-year ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_year,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_year,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(next_year_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,next_year_date_time);
} else {
}

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_year,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_year_icon,cljs.core.cst$kw$parts,parts], null)], null)], null);
} else {
return null;
}
}));

(re_com.datepicker.next_year_nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.next_year_nav.cljs$lang$applyTo = (function (seq12713){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12713));
}));

re_com.datepicker.nav = (function re_com$datepicker$nav(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12722 = arguments.length;
var i__4830__auto___12723 = (0);
while(true){
if((i__4830__auto___12723 < len__4829__auto___12722)){
args__4835__auto__.push((arguments[i__4830__auto___12723]));

var G__12724 = (i__4830__auto___12723 + (1));
i__4830__auto___12723 = G__12724;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__12720){
var map__12721 = p__12720;
var map__12721__$1 = cljs.core.__destructure_map(map__12721);
var display_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12721__$1,cljs.core.cst$kw$display_DASH_month);
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12721__$1,cljs.core.cst$kw$minimum);
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12721__$1,cljs.core.cst$kw$maximum);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12721__$1,cljs.core.cst$kw$disabled_QMARK_);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12721__$1,cljs.core.cst$kw$i18n);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12721__$1,cljs.core.cst$kw$parts);
var minimum__$1 = re_com.util.deref_or_value(minimum);
var maximum__$1 = re_com.util.deref_or_value(maximum);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$col_DASH_span,"7",cljs.core.cst$kw$class,["rc-datepicker-nav ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,336], null)),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_year_nav,cljs.core.cst$kw$display_DASH_month,display_month,cljs.core.cst$kw$minimum,minimum__$1,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$parts,parts], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.prev_month_nav,cljs.core.cst$kw$display_DASH_month,display_month,cljs.core.cst$kw$minimum,minimum__$1,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$parts,parts], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,349], null)),cljs.core.cst$kw$class,["rc-datepicker-month ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$size,"1",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$child,re_com.datepicker.month_label(cljs.core.deref(display_month),i18n)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_month_nav,cljs.core.cst$kw$display_DASH_month,display_month,cljs.core.cst$kw$maximum,maximum__$1,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$parts,parts], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.next_year_nav,cljs.core.cst$kw$display_DASH_month,display_month,cljs.core.cst$kw$maximum,maximum__$1,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$parts,parts], null)], null)], null)], null);
}));

(re_com.datepicker.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.nav.cljs$lang$applyTo = (function (seq12719){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12719));
}));

re_com.datepicker.week_days = (function re_com$datepicker$week_days(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12733 = arguments.length;
var i__4830__auto___12734 = (0);
while(true){
if((i__4830__auto___12734 < len__4829__auto___12733)){
args__4835__auto__.push((arguments[i__4830__auto___12734]));

var G__12735 = (i__4830__auto___12734 + (1));
i__4830__auto___12734 = G__12735;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.week_days.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.week_days.cljs$core$IFn$_invoke$arity$variadic = (function (p__12726){
var map__12727 = p__12726;
var map__12727__$1 = cljs.core.__destructure_map(map__12727);
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12727__$1,cljs.core.cst$kw$start_DASH_of_DASH_week);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12727__$1,cljs.core.cst$kw$i18n);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12727__$1,cljs.core.cst$kw$parts);
var map__12728 = i18n;
var map__12728__$1 = cljs.core.__destructure_map(map__12728);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12728__$1,cljs.core.cst$kw$days);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_], null),(function (){var iter__4622__auto__ = (function re_com$datepicker$iter__12729(s__12730){
return (new cljs.core.LazySeq(null,(function (){
var s__12730__$1 = s__12730;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12730__$1);
if(temp__5753__auto__){
var s__12730__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12730__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12730__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12732 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12731 = (0);
while(true){
if((i__12731 < size__4621__auto__)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12731);
cljs.core.chunk_append(b__12732,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-datepicker-day rc-datepicker-day-",clojure.string.lower_case(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(day))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,cljs.core.cst$kw$attr], null))], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(day))], null));

var G__12736 = (i__12731 + (1));
i__12731 = G__12736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12732),re_com$datepicker$iter__12729(cljs.core.chunk_rest(s__12730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12732),null);
}
} else {
var day = cljs.core.first(s__12730__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-datepicker-day rc-datepicker-day-",clojure.string.lower_case(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(day))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$day,cljs.core.cst$kw$attr], null))], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(day))], null),re_com$datepicker$iter__12729(cljs.core.rest(s__12730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(re_com.datepicker.rotate(start_of_week,(function (){var or__4223__auto__ = (cljs.core.truth_(days)?re_com.datepicker.to_days_vector(days):null);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return re_com.datepicker.days_vector;
}
})()));
})());
}));

(re_com.datepicker.week_days.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.week_days.cljs$lang$applyTo = (function (seq12725){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12725));
}));

/**
 * Answer 2 x rows showing month with nav buttons and days
 */
re_com.datepicker.table_thead = (function re_com$datepicker$table_thead(display_month,p__12737,disabled_QMARK_,parts){
var map__12738 = p__12737;
var map__12738__$1 = cljs.core.__destructure_map(map__12738);
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738__$1,cljs.core.cst$kw$show_DASH_weeks_QMARK_);
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738__$1,cljs.core.cst$kw$minimum);
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738__$1,cljs.core.cst$kw$maximum);
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738__$1,cljs.core.cst$kw$start_DASH_of_DASH_week);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738__$1,cljs.core.cst$kw$i18n);
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-datepicker-header ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$attr], null))], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(template_row,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.nav,cljs.core.cst$kw$display_DASH_month,display_month,cljs.core.cst$kw$minimum,minimum,cljs.core.cst$kw$maximum,maximum,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$i18n,i18n,cljs.core.cst$kw$parts,parts], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(template_row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.week_days,cljs.core.cst$kw$start_DASH_of_DASH_week,start_of_week,cljs.core.cst$kw$i18n,i18n,cljs.core.cst$kw$parts,parts], null))], null);
});
re_com.datepicker.selection_changed = (function re_com$datepicker$selection_changed(selection,change_callback){
return (change_callback.cljs$core$IFn$_invoke$arity$1 ? change_callback.cljs$core$IFn$_invoke$arity$1(selection) : change_callback.call(null,selection));
});
re_com.datepicker.table_td = (function re_com$datepicker$table_td(date,focus_month,selected,today,p__12739,disabled_QMARK_,on_change,parts){
var map__12740 = p__12739;
var map__12740__$1 = cljs.core.__destructure_map(map__12740);
var attributes = map__12740__$1;
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12740__$1,cljs.core.cst$kw$minimum);
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12740__$1,cljs.core.cst$kw$maximum);
var selectable_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12740__$1,cljs.core.cst$kw$selectable_DASH_fn);
var minimum__$1 = re_com.util.deref_or_value(minimum);
var maximum__$1 = re_com.util.deref_or_value(maximum);
var enabled_min = (cljs.core.truth_(minimum__$1)?re_com.datepicker._GT__EQ_date(date,minimum__$1):true);
var enabled_max = (cljs.core.truth_(maximum__$1)?re_com.datepicker._LT__EQ_date(date,maximum__$1):true);
var enabled_day = (function (){var and__4221__auto__ = enabled_min;
if(cljs.core.truth_(and__4221__auto__)){
return enabled_max;
} else {
return and__4221__auto__;
}
})();
var unselectable_day_QMARK_ = (cljs.core.truth_(enabled_day)?cljs.core.not((selectable_fn.cljs$core$IFn$_invoke$arity$1 ? selectable_fn.cljs$core$IFn$_invoke$arity$1(date) : selectable_fn.call(null,date))):true);
var classes = (cljs.core.truth_(disabled_QMARK_)?"rc-datepicker-disabled":((unselectable_day_QMARK_)?"rc-datepicker-unselectable":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focus_month,cljs_time.core.month(date)))?"rc-datepicker-selectable":"rc-datepicker-selectable rc-datepicker-out-of-focus"
)));
var classes__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = selected;
if(cljs.core.truth_(and__4221__auto__)){
return re_com.datepicker._EQ_date(selected,date);
} else {
return and__4221__auto__;
}
})())?[classes," rc-datepicker-selected start-date end-date "].join(''):(cljs.core.truth_((function (){var and__4221__auto__ = today;
if(cljs.core.truth_(and__4221__auto__)){
return ((re_com.datepicker._EQ_date(date,today)) && (cljs.core.not(disabled_QMARK_)));
} else {
return and__4221__auto__;
}
})())?[classes," rc-datepicker-today "].join(''):[classes," "].join('')
));
var on_click = (function (){
if(cljs.core.truth_((function (){var or__4223__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return unselectable_day_QMARK_;
}
})())){
return null;
} else {
return re_com.datepicker.selection_changed(date,on_change);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,[classes__$1,"rc-datepicker-date ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$on_DASH_click,(function (event){
on_click();

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date,cljs.core.cst$kw$attr], null))], 0)),cljs_time.core.day(date)], null);
});
re_com.datepicker.week_td = (function re_com$datepicker$week_td(start_of_week,date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"week"], null),re_com.datepicker.week_of_year(start_of_week,date)], null);
});
/**
 * Return 7 columns of date cells from date inclusive
 */
re_com.datepicker.table_tr = (function re_com$datepicker$table_tr(date,start_of_week,focus_month,selected,attributes,disabled_QMARK_,on_change,parts){
var table_row = (cljs.core.truth_(cljs.core.cst$kw$show_DASH_weeks_QMARK_.cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,re_com.datepicker.week_td(start_of_week,date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null));
var row_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12741_SHARP_){
return re_com.datepicker.inc_date(date,p1__12741_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
var today = (cljs.core.truth_(cljs.core.cst$kw$show_DASH_today_QMARK_.cljs$core$IFn$_invoke$arity$1(attributes))?re_com.util.now__GT_utc():null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(table_row,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12742_SHARP_){
return re_com.datepicker.table_td(p1__12742_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change,parts);
}),row_dates));
});
/**
 * Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
 */
re_com.datepicker.table_tbody = (function re_com$datepicker$table_tbody(display_month,selected,attributes,disabled_QMARK_,on_change,parts){
var start_of_week = cljs.core.cst$kw$start_DASH_of_DASH_week.cljs$core$IFn$_invoke$arity$1(attributes);
var current_start = re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2(re_com.datepicker.is_day_pred(start_of_week),display_month);
var focus_month = cljs_time.core.month(display_month);
var row_start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12743_SHARP_){
return re_com.datepicker.inc_date(current_start,((7) * p1__12743_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-datepicker-dates ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dates,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dates,cljs.core.cst$kw$style], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dates,cljs.core.cst$kw$attr], null))], 0))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12744_SHARP_){
return re_com.datepicker.table_tr(p1__12744_SHARP_,start_of_week,focus_month,selected,attributes,disabled_QMARK_,on_change,parts);
}),row_start_dates));
});
/**
 * Augment passed attributes with extra info/defaults
 */
re_com.datepicker.configure = (function re_com$datepicker$configure(attributes){
var selectable_fn = ((cljs.core.fn_QMARK_(cljs.core.cst$kw$selectable_DASH_fn.cljs$core$IFn$_invoke$arity$1(attributes)))?cljs.core.cst$kw$selectable_DASH_fn.cljs$core$IFn$_invoke$arity$1(attributes):cljs.core.constantly(true));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selectable_DASH_fn,selectable_fn], null)], 0));
});
re_com.datepicker.datepicker_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-datepicker-wrapper",cljs.core.cst$kw$impl,"[datepicker]",cljs.core.cst$kw$notes,"Outer wrapper of the datepicker."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$border,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-datepicker-border",cljs.core.cst$kw$impl,"[border]",cljs.core.cst$kw$notes,"The datepicker border."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-datepicker",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The datepicker container."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$table,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-datepicker-table",cljs.core.cst$kw$impl,"[:table]",cljs.core.cst$kw$notes,"The datepicker table."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$header,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-datepicker-header",cljs.core.cst$kw$impl,"[:thead]",cljs.core.cst$kw$notes,"The datepicker header."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(5),cljs.core.cst$kw$impl,"[:tr]",cljs.core.cst$kw$notes,"The datepicker month row.",cljs.core.cst$kw$name_DASH_label,"-"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$nav,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-nav",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"The datepicker navigation."], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(7),cljs.core.cst$kw$impl,"[h-box]",cljs.core.cst$kw$name_DASH_label,"-"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$prev_DASH_year,cljs.core.cst$kw$level,(8),cljs.core.cst$kw$class,"rc-datepicker-prev-year",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The datepicker previous year button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$prev_DASH_year_DASH_icon,cljs.core.cst$kw$level,(9),cljs.core.cst$kw$class,"rc-datepicker-prev-year-icon",cljs.core.cst$kw$impl,"[:svg]",cljs.core.cst$kw$notes,"The datepicker previous year button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$prev_DASH_month,cljs.core.cst$kw$level,(8),cljs.core.cst$kw$class,"rc-datepicker-prev-month",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The datepicker previous month button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$prev_DASH_month_DASH_icon,cljs.core.cst$kw$level,(9),cljs.core.cst$kw$class,"rc-datepicker-prev-month-icon",cljs.core.cst$kw$impl,"[:svg]",cljs.core.cst$kw$notes,"The datepicker previous month button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$month,cljs.core.cst$kw$level,(8),cljs.core.cst$kw$class,"rc-datepicker-month",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The datepicker month label."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$next_DASH_month,cljs.core.cst$kw$level,(8),cljs.core.cst$kw$class,"rc-datepicker-next-month",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The datepicker next month button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$next_DASH_month_DASH_icon,cljs.core.cst$kw$level,(9),cljs.core.cst$kw$class,"rc-datepicker-next-month-icon",cljs.core.cst$kw$impl,"[:svg]",cljs.core.cst$kw$notes,"The datepicker next month button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$next_DASH_year,cljs.core.cst$kw$level,(8),cljs.core.cst$kw$class,"rc-datepicker-next-year",cljs.core.cst$kw$impl,"[box]",cljs.core.cst$kw$notes,"The datepicker next year button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$next_DASH_year_DASH_icon,cljs.core.cst$kw$level,(9),cljs.core.cst$kw$class,"rc-datepicker-next-year-icon",cljs.core.cst$kw$impl,"[:svg]",cljs.core.cst$kw$notes,"The datepicker next year button icon."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(5),cljs.core.cst$kw$impl,"[:tr]",cljs.core.cst$kw$notes,"The datepicker weekday row.",cljs.core.cst$kw$name_DASH_label,"-"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$day,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-day-mon",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"Monday. WARNING: First weekday of week depends on arguments."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$day,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-day-tue",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"Tuesday."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$day,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-day-wed",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"Wednesday."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$day,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-day-thu",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"Thursday."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$day,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-day-fri",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"Friday."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$day,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-day-sat",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"Saturday."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$day,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-day-sun",cljs.core.cst$kw$impl,"[:th]",cljs.core.cst$kw$notes,"Sunday."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$dates,cljs.core.cst$kw$level,(4),cljs.core.cst$kw$class,"rc-datepicker-dates",cljs.core.cst$kw$impl,"[:tbody]",cljs.core.cst$kw$notes,"The table body containing the dates."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(5),cljs.core.cst$kw$impl,"[:tr]",cljs.core.cst$kw$notes,"A date row. Repeats 6 times.",cljs.core.cst$kw$name_DASH_label,"-"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$date,cljs.core.cst$kw$level,(6),cljs.core.cst$kw$class,"rc-datepicker-date",cljs.core.cst$kw$impl,"[:td]",cljs.core.cst$kw$notes,"A date cell. Repeats 7 times per date row."], null)], null):null);
re_com.datepicker.datepicker_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.datepicker.datepicker_parts_desc)):null);
re_com.datepicker.datepicker_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"satisfies DateTimeProtocol | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.date_like_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the selected date. If provided, should pass pred ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":selectable-fn"], null),". If not provided, (now->utc) will be used and the returned date will be a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"goog.date.UtcDateTime"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"satisfies DateTimeProtocol -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when a new selection is made. Returned type is the same as model (unless model is nil, in which case it will be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"goog.date.UtcDateTime"], null),")"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, the user can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$selectable_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"(fn [date] true)",cljs.core.cst$kw$type,"function",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"This predicate function is called with one argument, the date. If it answers false, day will be shown disabled and can't be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$show_DASH_weeks_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$show_DASH_today_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, today's date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$minimum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"satisfies DateTimeProtocol | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.date_like_QMARK_,cljs.core.cst$kw$description,"no selection or navigation before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$maximum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"satisfies DateTimeProtocol | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.date_like_QMARK_,cljs.core.cst$kw$description,"no selection or navigation after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$start_DASH_of_DASH_week,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(6),cljs.core.cst$kw$type,"int",cljs.core.cst$kw$description,"first day of week (Monday = 0 ... Sunday = 6)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$hide_DASH_border_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$i18n,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"internationalization map with optional keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":days"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":months"], null)," (both vectors of strings)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer border div, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," allowed (applies to the outer border div, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.datepicker.datepicker_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
re_com.datepicker.datepicker = (function re_com$datepicker$datepicker(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12750 = arguments.length;
var i__4830__auto___12751 = (0);
while(true){
if((i__4830__auto___12751 < len__4829__auto___12750)){
args__4835__auto__.push((arguments[i__4830__auto___12751]));

var G__12752 = (i__4830__auto___12751 + (1));
i__4830__auto___12751 = G__12752;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic = (function (p__12746){
var map__12747 = p__12746;
var map__12747__$1 = cljs.core.__destructure_map(map__12747);
var args = map__12747__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12747__$1,cljs.core.cst$kw$model);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var display_month = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto____$1 = cljs.core.deref(internal_model);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return re_com.util.now__GT_utc();
}
})()));
return (function() { 
var re_com$datepicker$datepicker_render__delegate = function (p__12748){
var map__12749 = p__12748;
var map__12749__$1 = cljs.core.__destructure_map(map__12749);
var args__$1 = map__12749__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$on_DASH_change);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$attr);
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$src);
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12749__$1,cljs.core.cst$kw$start_DASH_of_DASH_week,(6));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12749__$1,cljs.core.cst$kw$class);
var or__4223__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_args_desc),args__$1));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var latest_ext_model = re_com.util.deref_or_value(model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var props_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start_DASH_of_DASH_week,start_of_week], null)], 0));
var configuration = re_com.datepicker.configure(props_with_defaults);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);

cljs.core.reset_BANG_(display_month,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto____$2 = cljs.core.deref(internal_model);
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return re_com.util.now__GT_utc();
}
})()));
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.main_div_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["table-condensed rc-datepicker-table ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$style], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_thead,display_month,configuration,disabled_QMARK___$1,parts], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_tbody,cljs.core.deref(display_month),cljs.core.deref(internal_model),configuration,disabled_QMARK___$1,on_change,parts], null)], null),hide_border_QMARK_,class$,style,attr,parts,src,(function (){var or__4223__auto____$2 = debug_as;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})()], null);
}
};
var re_com$datepicker$datepicker_render = function (var_args){
var p__12748 = null;
if (arguments.length > 0) {
var G__12753__i = 0, G__12753__a = new Array(arguments.length -  0);
while (G__12753__i < G__12753__a.length) {G__12753__a[G__12753__i] = arguments[G__12753__i + 0]; ++G__12753__i;}
  p__12748 = new cljs.core.IndexedSeq(G__12753__a,0,null);
} 
return re_com$datepicker$datepicker_render__delegate.call(this,p__12748);};
re_com$datepicker$datepicker_render.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_render.cljs$lang$applyTo = (function (arglist__12754){
var p__12748 = cljs.core.seq(arglist__12754);
return re_com$datepicker$datepicker_render__delegate(p__12748);
});
re_com$datepicker$datepicker_render.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_render__delegate;
return re_com$datepicker$datepicker_render;
})()
;
}
}));

(re_com.datepicker.datepicker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.datepicker.cljs$lang$applyTo = (function (seq12745){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12745));
}));

/**
 * Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
 */
re_com.datepicker.anchor_button = (function re_com$datepicker$anchor_button(shown_QMARK_,model,format,goog_QMARK_,placeholder,width,disabled_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"rc-datepicker-dropdown-anchor input-group display-flex noselect",cljs.core.cst$kw$style,re_com.box.flex_child_style("none"),cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.not(re_com.util.deref_or_value(disabled_QMARK_))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shown_QMARK_,cljs.core.not);
} else {
}

return null;
})], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$class,"noselect",cljs.core.cst$kw$min_DASH_width,(cljs.core.truth_(width)?null:"10em"),cljs.core.cst$kw$max_DASH_width,(cljs.core.truth_(width)?null:"10em"),cljs.core.cst$kw$width,width,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,re_com.util.deref_or_value(disabled_QMARK_),cljs.core.cst$kw$class,["form-control dropdown-button",(cljs.core.truth_(re_com.util.deref_or_value(disabled_QMARK_))?" dropdown-button-disabled":null)].join('')], null),(((!(re_com.validate.date_like_QMARK_(re_com.util.deref_or_value(model)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),placeholder], null):(cljs.core.truth_(goog_QMARK_)?(new goog.i18n.DateTimeFormat(((cljs.core.seq(format))?format:"yyyy MMM dd"))).format(re_com.util.deref_or_value(model)):cljs_time.format.unparse(((cljs.core.seq(format))?cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format):re_com.datepicker.date_format),re_com.util.deref_or_value(model))
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["dropdown-button activator input-group-addon",(cljs.core.truth_(re_com.util.deref_or_value(disabled_QMARK_))?" dropdown-button-disabled":null)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"3px 0px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$zmdi$zmdi_DASH_apps,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"24px"], null)], null)], null)], null)], null)], null)], null);
});
re_com.datepicker.datepicker_dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(re_com.datepicker.datepicker_args_desc,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$format,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"yyyy MMM dd",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$description,"[datepicker-dropdown only] a representation of a date format. See cljs_time.format"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$goog_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[datepicker-dropdown only] use ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"goog.i18n.DateTimeFormat"], null)," instead of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"cljs_time.format"], null)," for applying ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":format"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$no_DASH_clip_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"[datepicker-dropdown only] when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$description,"[datepicker-dropdown only] placeholder text for when a date is not selected."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$description,"[datepicker-dropdown only] a CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$position_DASH_offset,cljs.core.cst$kw$required,false,cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$description,"[datepicker-dropdown only] px horizontal offset of the popup"], null)], 0)):null);
re_com.datepicker.datepicker_dropdown = (function re_com$datepicker$datepicker_dropdown(var_args){
var args__4835__auto__ = [];
var len__4829__auto___12760 = arguments.length;
var i__4830__auto___12761 = (0);
while(true){
if((i__4830__auto___12761 < len__4829__auto___12760)){
args__4835__auto__.push((arguments[i__4830__auto___12761]));

var G__12762 = (i__4830__auto___12761 + (1));
i__4830__auto___12761 = G__12762;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__12756){
var map__12757 = p__12756;
var map__12757__$1 = cljs.core.__destructure_map(map__12757);
var args = map__12757__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12757__$1,cljs.core.cst$kw$src);
var or__4223__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_dropdown_args_desc),args));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var shown_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var cancel_popover = (function (){
return cljs.core.reset_BANG_(shown_QMARK_,false);
});
var position = cljs.core.cst$kw$below_DASH_left;
return (function() { 
var re_com$datepicker$datepicker_dropdown_render__delegate = function (p__12758){
var map__12759 = p__12758;
var map__12759__$1 = cljs.core.__destructure_map(map__12759);
var passthrough_args = map__12759__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$model);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$format);
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12759__$1,cljs.core.cst$kw$position_DASH_offset,(0));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$placeholder);
var no_clip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12759__$1,cljs.core.cst$kw$no_DASH_clip_QMARK_,true);
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$show_DASH_weeks_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$width);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$src);
var goog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$goog_QMARK_);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759__$1,cljs.core.cst$kw$debug_DASH_as);
var or__4223__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_dropdown_args_desc),passthrough_args));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var collapse_on_select = (function (new_model){
cljs.core.reset_BANG_(shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_model) : on_change.call(null,new_model));
} else {
return null;
}
});
var passthrough_args__$1 = cljs.core.flatten(cljs.core.vec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(passthrough_args,cljs.core.cst$kw$format,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$goog_QMARK_,cljs.core.cst$kw$no_DASH_clip_QMARK_,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$width,cljs.core.cst$kw$position_DASH_offset], 0)),cljs.core.cst$kw$on_DASH_change,collapse_on_select),cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,621], null))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border_QMARK_,true], null)], 0))));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4223__auto____$2 = debug_as;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$class,"rc-datepicker-dropdown-wrapper",cljs.core.cst$kw$showing_QMARK_,shown_QMARK_,cljs.core.cst$kw$position,position,cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.anchor_button,shown_QMARK_,model,format,goog_QMARK_,placeholder,width,disabled_QMARK_], null),cljs.core.cst$kw$popover,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/home/ulli/.cljs/.aot_cache/1.10.866/10BD00A/re_com/datepicker.cljs",cljs.core.cst$kw$line,633], null)),cljs.core.cst$kw$position_DASH_offset,((cljs.core.truth_(show_weeks_QMARK_)?(43):(44)) + position_offset),cljs.core.cst$kw$no_DASH_clip_QMARK_,no_clip_QMARK_,cljs.core.cst$kw$arrow_DASH_length,(0),cljs.core.cst$kw$arrow_DASH_width,(0),cljs.core.cst$kw$arrow_DASH_gap,(3),cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$on_DASH_cancel,cancel_popover,cljs.core.cst$kw$body,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.datepicker], null),passthrough_args__$1)], null)], null);
}
};
var re_com$datepicker$datepicker_dropdown_render = function (var_args){
var p__12758 = null;
if (arguments.length > 0) {
var G__12763__i = 0, G__12763__a = new Array(arguments.length -  0);
while (G__12763__i < G__12763__a.length) {G__12763__a[G__12763__i] = arguments[G__12763__i + 0]; ++G__12763__i;}
  p__12758 = new cljs.core.IndexedSeq(G__12763__a,0,null);
} 
return re_com$datepicker$datepicker_dropdown_render__delegate.call(this,p__12758);};
re_com$datepicker$datepicker_dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_dropdown_render.cljs$lang$applyTo = (function (arglist__12764){
var p__12758 = cljs.core.seq(arglist__12764);
return re_com$datepicker$datepicker_dropdown_render__delegate(p__12758);
});
re_com$datepicker$datepicker_dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_dropdown_render__delegate;
return re_com$datepicker$datepicker_dropdown_render;
})()
;
}
}));

(re_com.datepicker.datepicker_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.datepicker.datepicker_dropdown.cljs$lang$applyTo = (function (seq12755){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12755));
}));

