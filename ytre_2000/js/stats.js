var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3056",
        "ok": "3056",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles1": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles2": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles3": {
        "total": "62",
        "ok": "63",
        "ko": "-"
    },
    "percentiles4": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19978,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 17,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110.924",
        "ok": "110.924",
        "ko": "-"
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
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3056",
        "ok": "3056",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles1": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles2": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles3": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles4": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19978,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 17,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "110.924",
        "ok": "110.924",
        "ko": "-"
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
