import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = "smtp://15557988872@163.com:abc123@smtp.163.com:25";

});

Meteor.publish('messages', function () {
  return Messages.find();
});
Meteor.methods({
  sendEmail(msg) {
    console.log('发送邮件');
    Email.send({
      to: "1172482914@qq.com",
      from: "15557988872@163.com",
      subject: "您的验证码",
      text: msg
    });
  }
});
