var assert = require('chai').assert;
var TimeSpan = require('./timeSpan.js');

describe('TimeSpan', function() {
    describe('totalMiliseconds', function() {
        it('should return number of total miliseconds', function() {
            //Given
            var dt1 = new Date();
            var dt2 = new Date(dt1);
            //When
            dt2.setMilliseconds(dt2.getMilliseconds()+33);
            var diff = new TimeSpan(dt2-dt1);
            //Then
            assert.equal(33, diff.totalMilliseconds);
        });
    });

    describe('totalSeconds', function() {
        it('should return 33 seconds', function () {
            //Given
            var dt1 = new Date();
            var dt2 = new Date(dt1);
            //When
            dt2.setSeconds(dt2.getSeconds()+33);
            var diff = new TimeSpan(dt2-dt1);
            //Then
            assert.equal(33, diff.totalSeconds);
        });
    });

    describe('totalMinutes', function() {
        it('should return 1 minutes and 60 seconds', function () {
            //Given
            var dt1 = new Date();
            var dt2 = new Date(dt1);
            //When
            dt2.setMinutes(dt2.getMinutes()+1);
            var diff = new TimeSpan(dt2-dt1);
            //Then
            assert.equal(1, diff.totalMinutes);
            assert.equal(60, diff.totalSeconds);
        })
    });

    describe('totalHour', function() {
        it('should return 2 hours and 150 minutes', function() {
            //Given
            var dt1 = new Date();
            var dt2 = new Date(dt1);
            //When
            dt2.setMinutes(dt2.getMinutes()+150);
            var diff = new TimeSpan(dt2-dt1);
            //Then
            assert.equal(150, diff.totalMinutes);
            assert.equal(2, diff.totalHours);
        });
    });

    describe('totalDays', function() {
        it('should return 2 days and 48 hours', function() {
            //Given
            var dt1 = new Date();
            var dt2 = new Date(dt1);
            //When
            dt2.setDate(dt2.getDate()+2);
            var diff = new TimeSpan(dt2-dt1);
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
            var dt1 = new Date();
            var dt2 = new Date(dt1);
            //When
            dt2.setHours(dt2.getHours()+1);
            dt2.setMinutes(dt2.getMinutes()+30);
            dt2.setSeconds(dt2.getSeconds()+10);
            var diff = new TimeSpan(dt2-dt1);
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

