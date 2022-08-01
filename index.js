const serverHelper = require("./helpers");

const dig = async (args) => {
  try {
    const data = await serverHelper.dig(args);
    return data;
  } catch (error) {
    return error
  }
};
module.exports = dig;
