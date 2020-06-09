const path = require("path");
const { PATHS } = require(path.normalize(`${__dirname}/const.js`));

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      [`${PATHS.ROOT}`]: { page: `${PATHS.ROOT}` },
      [`${PATHS.APPLY}`]: { page: `${PATHS.APPLY}` },
    };
  },
};
