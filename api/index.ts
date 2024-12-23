var express = require("express");
var app = express();

app.get("/SavingsBankFinanceService", function (req: any, res: any) {
  const { numOfRows, pageNo, serviceKey, ym } =
    req.query;

  var api_url =
    "http://apis.data.go.kr/B190017/service/GetSavingsBankFinanceService/getFinanceStateList?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { numOfRows, pageNo, serviceKey, ym  },
  };

  request.get(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/SavingsBankFinanceService?serviceKey=QxyJV9LnhlKd8GFOYmhwsVaNY7yRNSKdgoZs3SctHvq9LEQFyi298mJesKwyZj7cHuy4N0jHztZEy9x7djZxeQ%3D%3D&numOfRows=100&pageNo=1&ym=202409 app listening on port 3000!"
  );
});