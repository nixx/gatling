var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6216",
        "ok": "5594",
        "ko": "622"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60061",
        "ok": "40884",
        "ko": "60061"
    },
    "meanResponseTime": {
        "total": "11337",
        "ok": "5925",
        "ko": "60007"
    },
    "standardDeviation": {
        "total": "19742",
        "ok": "11849",
        "ko": "10"
    },
    "percentiles1": {
        "total": "447",
        "ok": "373",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "7004",
        "ok": "1832",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "32944",
        "ko": "60033"
    },
    "percentiles4": {
        "total": "60019",
        "ok": "34843",
        "ko": "60052"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3485,
        "percentage": 56
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 427,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1682,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 622,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "87.992",
        "ok": "79.187",
        "ko": "8.805"
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
        "total": "6216",
        "ok": "5594",
        "ko": "622"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60061",
        "ok": "40884",
        "ko": "60061"
    },
    "meanResponseTime": {
        "total": "11337",
        "ok": "5925",
        "ko": "60007"
    },
    "standardDeviation": {
        "total": "19742",
        "ok": "11849",
        "ko": "10"
    },
    "percentiles1": {
        "total": "447",
        "ok": "373",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "7004",
        "ok": "1832",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "32944",
        "ko": "60033"
    },
    "percentiles4": {
        "total": "60019",
        "ok": "34843",
        "ko": "60052"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3485,
        "percentage": 56
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 427,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1682,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 622,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "87.992",
        "ok": "79.187",
        "ko": "8.805"
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
