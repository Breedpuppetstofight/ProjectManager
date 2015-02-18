var PlannedTask = function (data) {
    var self = this;

    self.TaskName = ko.observable(data ? data.TaskName : null);
    self.Work = ko.observable(data ? data.Work : null);
    self.Resource = ko.observable(data ? data.Resource : null);
    self.Duration = ko.observable(data ? data.Duration : null);
    self.StartDate = ko.observable(data ? data.Start : null);
    self.EndDate = ko.observable(data ? data.Finish : null);
};