(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("VA1H")},VA1H:function(t,e){var n={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')};new(function(){function t(t){var e=t.selector,n=t.targetDate;this.selector=e,this.targetDate=n}var e=t.prototype;return e.start=function(){var t=Date.now(),e=this.targetDate.getTime()-t;e<=0&&this.initTimer(),this.updateClockface(this.getTimeComponents(e)),this.startSetInterval(e)},e.startSetInterval=function(t){var e=this,n=setInterval((function(){t-=1e3;var a=e.getTimeComponents(t);e.updateClockface(a),e.stopTimer(t,n)}),1e3)},e.stopTimer=function(t,e){t<=0&&(clearInterval(e),this.initTimer())},e.initTimer=function(){this.updateClockface(0),document.querySelector(this.selector).textContent="Happy new year!!"},e.getTimeComponents=function(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),mins:Math.floor(t%36e5/6e4),secs:Math.floor(t%6e4/1e3)}},e.updateClockface=function(t){var e=t.days,a=t.hours,o=t.mins,s=t.secs;n.days.textContent=e,n.hours.textContent=a,n.mins.textContent=o,n.secs.textContent=s},t}())({selector:"#timer-1",targetDate:new Date("Dec 31 2020")}).start()}},[["QfWi",1]]]);
//# sourceMappingURL=main.a439b1aee3c52f1ca9df.js.map