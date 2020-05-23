const path = require("path");
const { PATHS } = require(path.normalize(`${__dirname}/const.js`));

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      [`${PATHS.ROOT}`]: { page: `${PATHS.ROOT}` },
      [`${PATHS.INFO}`]: { page: `${PATHS.INFO}` },
      // [`${PATHS.APPLY}`]: { page: `${PATHS.APPLY}` },
      // [`${PATHS.PROGRESS}`]: { page: `${PATHS.PROGRESS}` },
      // [`${PATHS.RECRUITMENT}`]: { page: `${PATHS.RECRUITMENT}` },
      // [`${PATHS.NEEDS}`]: { page: `${PATHS.RECRUITMENT}` },
    };
  },
};
