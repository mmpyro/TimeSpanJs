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

    this.totalMilliseconds = number;
    this.totalSeconds = div(number, second);
    this.totalMinutes = div(number, minute);
    this.totalHours = div(number, hour);
    this.totalDays = div(number, day);

    this.milliseconds = this.date.getMilliseconds();
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours()-1;
    this.days = this.date.getDate()-1;
    this.months = this.date.getMonth();
    this.years = this.date.getYear()-70;
}

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