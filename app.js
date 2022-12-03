var express = require('express');

app = express();



app.get("/test", function (req, res) {
    res.status(401).end("Unauthorized");
});



app.listen(8000, () => {
    console.log("success 8000");
})