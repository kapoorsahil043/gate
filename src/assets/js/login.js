// Implement Idle Timeout interval
var idleTimeoutCB = null;
var idleTimeOutInterval = null;
window.idleReminderCalled = false;
window.idleReminderFlag = true;

var preLoginIdleTimeoutCB = null;
var preLoginIdleTimeOutInterval = null;
window.globalReminderFlag = true;

var startCheckingTimeOut = function (loginTime) {
    //console.log('log::startCheckingTimeOut....',loginTime);
    if(!loginTime){
        loginTime = 1000;
    }
    reminderCalled = false;
    var currentTime = moment().toISOString();
    var expires = parseFloat(loginTime) * 1000;
    TimeOutInterval = setInterval(function () { checkTime(currentTime, expires) }, 1000);
}

function checkTime(loginTime, expires) {
    var lastLoginTime = moment(loginTime).unix();
    var currentTime = moment().unix();
    var sessionTime = moment(loginTime).add(expires, 'milliseconds').unix();
    var logoutSession = moment.unix(sessionTime);
    //var reminderTime = moment(logoutSession).subtract(30000, 'milliseconds').unix();
    var reminderTime = moment(logoutSession).subtract(10000, 'milliseconds').unix();
    //console.log('log::checkTime....',loginTime,'expires',expires,'sessionTime',sessionTime,'reminderTime',reminderTime);

    if (currentTime >= reminderTime && currentTime < sessionTime 
        && !reminderCalled && window.globalReminderFlag) {
        //console.log('log::checkTime,Timeout Reminder event Fired');
        reminderCalled = true;
        timeoutCB('REMINDER');
    }
    if (currentTime >= sessionTime && window.globalReminderFlag) {
        //console.log('log::checkTime,Timeout event Fired');
        clearInterval(TimeOutInterval);
        timeoutCB('TIMEOUT');
    }
}


var startIdleTimeout = function () {
    //console.log('log::startIdleTimeout ....');
    window.idleReminderCalled = false;

    //here is the init value (this value will reset upon each service call)
    window.currentTimeSession = moment(moment().toISOString()).unix();
    //console.log('log::startIdleTimeout,Init value for idle Session ', window.currentTimeSession);

    // RESET TIMER DURING MOUSEMOVE OR KEYPRESS
    $(document).mousemove(function (e) {
        //console.log('log::startIdleTimeout,mousemove ....');
        if (!window.idleReminderCalled && window.idleReminderFlag) {
            window.currentTimeSession = moment(moment().toISOString()).unix();
            // console.log("idle reset");
        }
    });
    $(document).keypress(function (e) {
        //console.log('log::startIdleTimeout,keypress ....');
        if (!window.idleReminderCalled && window.idleReminderFlag) {
            window.currentTimeSession = moment(moment().toISOString()).unix();
            console.log("idle click reset");
        }
    });
    idleTimeOutInterval = setInterval(function () { checkIdleTime() }, 1000);
}

function checkIdleTime() {
    //console.log('log::checkIdleTime ....',window.postLoginTime ,window.currentTimeSession);
    var currentTime = moment().unix();
    if (window.postLoginTime && window.currentTimeSession) {
        var currentSession = moment.unix(window.currentTimeSession);
        var logoutTime = moment(currentSession).add(window.postLoginTime, 'milliseconds').unix();
        var logoutSession = moment.unix(logoutTime);
        var reminderTime = moment(logoutSession).subtract(30000, 'milliseconds').unix();

        // console.warn("idle session time up:", logoutSession._d);
        // console.warn("idle reminder time:", moment.unix(reminderTime)._d);
        // console.warn("idle current time:", moment.unix(currentTime)._d);

        if (currentTime >= reminderTime && currentTime < logoutTime && !window.idleReminderCalled && window.idleReminderFlag) {
            console.log('log::checkIdleTime,Idle Timeout Reminder event Fired');
            window.idleReminderCalled = true;
            idleTimeoutCB('REMINDER');
        }
        if (currentTime >= logoutTime && window.idleReminderFlag) {
            console.log('log::checkIdleTime,Idle Timeout event Fired');
            clearInterval(idleTimeOutInterval);
            idleTimeoutCB('TIMEOUT');
        }
    }
}

function startPreLoginIdleTime() {
    console.log('PRE-LOGIN IDLE TIMER STARTING....');

    //here is the init value (this value will reset upon each service call)
    window.currentTimeSession = moment(moment().toISOString()).unix();
    console.log('Init value for idle Session ', window.currentTimeSession);

    // RESET TIMER DURING MOUSEMOVE OR KEYPRESS
    // $(document).mousemove(function (e) {
    //     window.currentTimeSession = moment(moment().toISOString()).unix();
    //     // console.log("idle reset");
    // });
    // $(document).keypress(function (e) {
    //     window.currentTimeSession = moment(moment().toISOString()).unix();
    //     console.log("idle click reset");
    // });
    preLoginIdleTimeOutInterval = setInterval(function () { checkPreLoginIdleTime() }, 1000);
}

function checkPreLoginIdleTime() {
    var currentTime = moment().unix();

    if (window.preLoginTime && window.currentTimeSession) {
        var currentSession = moment.unix(window.currentTimeSession);
        var logoutTime = moment(currentSession).add(window.preLoginTime, 'milliseconds').unix();
        var logoutSession = moment.unix(logoutTime);

        // console.warn("prelogin idle session time up:", logoutSession._d);
        // console.warn("prelogin idle current time:", moment.unix(currentTime)._d);

        if (currentTime >= logoutTime) {
            console.log('log::checkPreLoginIdleTime,Idle Timeout event Fired');
            clearInterval(preLoginIdleTimeOutInterval);
            preLoginIdleTimeoutCB('TIMEOUT');
        }
    }
}