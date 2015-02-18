var PlanViewModel = function (data) {
    var self = this;

    self.tasks = ko.observableArray(ko.utils.arrayMap(data, function (item) {
        return new PlannedTask(item);
    }));

    self.data = ko.observable(data);

    //self.setupDateColumns = function(){
    //    // Start of some date range. Can be any day of the week.
    //    var startOfPeriod = moment("2015-01-15T00:00:00"),

    //        // We begin on the start of the first week.
    //        // Mon Tues Wed Thur Fri Sat Sun
    //        // 20  21   22  23   24  25  26
    //        begin = moment(startOfPeriod).isoWeekday(1); // will pull from user setting

    //    console.log(begin.isoWeekday()); // 1 - all good

    //    // Let's get the beginning of this first week, respecting the isoWeekday
    //    begin.startOf('isoweek');

    //    console.log(begin.isoWeekday()); // 7 - what happened ???

    //    // Get column headers
    //    for (var i = 0; i < 7; i++) {
    //        console.log(begin.format('ddd')); // I want Monday first!
    //        begin.add('d', 1);
    //    }
    //};

};