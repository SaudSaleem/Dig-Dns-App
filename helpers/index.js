const { spawn } = require("child_process");

const dig = (args) => {
  return new Promise((resolve, reject) => {
    const dig = spawn("dig", args);
    dig.stdout.on("data", async (data) => {
      const payload = extractServerInfo(data.toString());
      payload.error == false ? resolve(payload) : reject(payload);
    });
  });
};
const extractServerInfo = (data) => {
  const rawData = data;
  data = data.split(/\r?\n/);
  let index = data.findIndex((item) => item.includes("ANSWER SECTION"));
  console.log("data", data);
  if (index < 0) {
    return {
      error: true,
      message: "Invalid arguments",
    };
  }
  let i = 1;
  const ips = [];
  while (data[index + i].toString().length) {
    const ip = data[index + i].replace(/\t/g, " ").split(" ");
    ips.push(ip[ip.length - 1]);
    i = i + 1;
  }
  const payload = {
    error: false,
    IPs: ips,
    rawData,
  };
  return payload;
};

module.exports = {
  dig,
};
