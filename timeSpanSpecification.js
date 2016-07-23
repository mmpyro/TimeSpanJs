var assert = require('chai').assert;
var TimeSpan = require('./timeSpan.js');

describe('TimeSpan', function() {
    describe('totalMiliseconds', function() {
        it('should return number of total miliseconds', function() {
            //Given
            var now = new Date();
            var future = new Date(now);
            //When
            future.setMilliseconds(future.getMilliseconds()+33);
            var diff = new TimeSpan(future-now);
            //Then
            assert.equal(33, diff.totalMilliseconds);
        });
    });

    describe('totalSeconds', function() {
        it('should return 33 seconds', function () {
            //Given
            var now = new Date();
            var future = new Date(now);
            //When
            future.setSeconds(future.getSeconds()+33);
            var diff = new TimeSpan(future-now);
            //Then
            assert.equal(33, diff.totalSeconds);
        });
    });

    describe('totalMinutes', function() {
        it('should return 1 minutes and 60 seconds', function () {
            //Given
            var now = new Date();
            var future = new Date(now);
            //When
            future.setMinutes(future.getMinutes()+1);
            var diff = new TimeSpan(future-now);
            //Then
            assert.equal(1, diff.totalMinutes);
            assert.equal(60, diff.totalSeconds);
        })
    });

    describe('totalHour', function() {
        it('should return 2 hours and 150 minutes', function() {
            //Given
            var now = new Date();
            var future = new Date(now);
            //When
            future.setMinutes(future.getMinutes()+150);
            var diff = new TimeSpan(future-now);
            //Then
            assert.equal(150, diff.totalMinutes);
            assert.equal(2, diff.totalHours);
        });
    });

    describe('totalDays', function() {
        it('should return 2 days and 48 hours', function() {
            //Given
            var now = new Date();
            var future = new Date(now);
            //When
            future.setDate(future.getDate()+2);
            var diff = new TimeSpan(future-now);
            //Then
            assert.equal(2, diff.totalDays);
            assert.equal(48, diff.totalHours);
        });
    });

    describe('fromMilliseconds', function() {
        it('should create new timeSpan with 30 number of total milliseconds', function() {
            //Given
            var timeSpan = TimeSpan.fromMilliseconds(30);
            //When - Then
            assert.equal(30, timeSpan.totalMilliseconds);
        });
    });

    describe('fromSeconds', function() {
        it('should create new timeSpan with 30 number of total seconds', function() {
            //Given
            var timeSpan = TimeSpan.fromSeconds(30);
            //When - Then
            assert.equal(30, timeSpan.totalSeconds);
        });
    });

    describe('fromMinutes', function() {
        it('should create new timeSpan with 30 number of total minutes', function() {
            //Given
            var timeSpan = TimeSpan.fromMinutes(30);
            //When - Then
            assert.equal(30, timeSpan.totalMinutes);
        });

        it('should create new timeSpan with 30 number of total seconds from 0.5 minute', function() {
            //Given
            var timeSpan = TimeSpan.fromMinutes(0.5);
            //When - Then
            assert.equal(30, timeSpan.totalSeconds);
        })
    });

    describe('fromHours', function() {
        it('should create new timeSpan with 30 number of total hours', function() {
            //Given
            var timeSpan = TimeSpan.fromHours(30);
            //When - Then
            assert.equal(30, timeSpan.totalHours);
        });
    });

    describe('normal time', function() {
        it('should return number of hours, minutes and seconds', function() {
            //Given
            var now = new Date();
            var future = new Date(now);
            //When
            future.setHours(future.getHours()+1);
            future.setMinutes(future.getMinutes()+30);
            future.setSeconds(future.getSeconds()+10);
            var diff = new TimeSpan(future-now);
            //Then
            assert.equal(0, diff.years);
            assert.equal(0, diff.months);
            assert.equal(0, diff.days);

            assert.equal(1, diff.hours);
            assert.equal(30, diff.minutes);
            assert.equal(10, diff.seconds);
        });
    });
});

