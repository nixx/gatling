var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "4667",
        "ko": "333"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "31160",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "4981",
        "ok": "1055",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "15107",
        "ok": "3616",
        "ko": "3"
    },
    "percentiles1": {
        "total": "49",
        "ok": "48",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "96",
        "ok": "79",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "7069",
        "ko": "60012"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "15095",
        "ko": "60014"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4065,
        "percentage": 81
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 167,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 435,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 333,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "18.273",
        "ok": "17.056",
        "ko": "1.217"
    }
},
contents: {
"css-request-bfc55": {
        type: "REQUEST",
        name: "CSS request",
path: "CSS request",
pathFormatted: "css-request-bfc55",
stats: {
    "name": "CSS request",
    "numberOfRequests": {
        "total": "5000",
        "ok": "4667",
        "ko": "333"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "31160",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "4981",
        "ok": "1055",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "15107",
        "ok": "3616",
        "ko": "3"
    },
    "percentiles1": {
        "total": "49",
        "ok": "48",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "96",
        "ok": "79",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "7068",
        "ko": "60012"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "15095",
        "ko": "60014"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4065,
        "percentage": 81
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 167,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 435,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 333,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "18.273",
        "ok": "17.056",
        "ko": "1.217"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
