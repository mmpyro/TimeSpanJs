"use strict"
const second = 1000;
const minute = 60*second;
const hour = 60*minute;
const day = 24*hour;

function div(a,b) {
    return Math.floor(a/b);
}

function TimeSpan(number) {
    this.date = new Date(number);
    this.number = number;
}

TimeSpan.prototype.totalMilliseconds = function() {
    return this.number;
};

TimeSpan.prototype.totalSeconds = function() {
    return div(this.number, second)
};

TimeSpan.prototype.totalMinutes = function() {
    return div(this.number, minute)
};

TimeSpan.prototype.totalHours = function() {
    return div(this.number, hour)
};

TimeSpan.prototype.totalDays = function() {
    return div(this.number, day)
};

TimeSpan.prototype.getMilliseconds = function() {
    return this.date.getMilliseconds();
};

TimeSpan.prototype.getSeconds = function() {
    return this.date.getSeconds();
};

TimeSpan.prototype.getMinutes = function() {
    return this.date.getMinutes();
};

TimeSpan.prototype.getHours = function() {
    return this.date.getHours()-1;
};

TimeSpan.prototype.getDays = function() {
    return this.date.getDate()-1;
};

TimeSpan.prototype.getMonths = function() {
    return this.date.getMonth();
};

TimeSpan.prototype.getYears = function() {
    return this.date.getYear()-70;
};

//static factory method
TimeSpan.fromMilliseconds = function(miliseconds) {
    return new TimeSpan(miliseconds);
};

TimeSpan.fromSeconds = function(seconds) {
    return new TimeSpan(seconds*second);
};

TimeSpan.fromMinutes = function(minutes) {
    return new TimeSpan(minutes*minute);
};

TimeSpan.fromHours = function(hours) {
    return new TimeSpan(hours*hour);
};

module.exports = TimeSpan;