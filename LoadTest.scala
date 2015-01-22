package loadtest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTest extends Simulation {

  val httpConf = http
    .baseURL("fyll inn") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .header("Cookie", "_shibsession_")
    .disableCaching
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")


  val scn = scenario("Scenario Name").exec( // A scenario is a chain of requests and pauses
    repeat(10) {
      exec(http("CSS request")
        .get("/web/css/app.css")
        .check(status.is(200)))
    })



  setUp(scn.inject(rampUsers(500) over (3 minutes)).protocols(httpConf))
}
