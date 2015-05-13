var routePath = require("path").join(__dirname, "routes");
module.exports = {
    load: function (app) {
        require("fs").readdirSync(routePath).forEach(function (file) {
            require("./routes/" + file)(app);
        });
    }
};

