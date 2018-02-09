const nodemailer = require('nodemailer');

class Mail {
  constructor(emailTujuan, food) {
    this.emailTujuan = emailTujuan
    this.name = food.name
    this.image = food.image
    this.ingredient = food.ingredient
    this.diet = food.diet
    this.health = food.health
  }

  send(){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'resapirecipe@gmail.com',
        pass: process.env.SECRET_MAIL
      }
    });

    const mailOptions = {
      from   : 'resapirecipe@gmail.com',
      to     : this.emailTujuan, 
      subject: 'Enjoy create healthy foods' ,
      html   : `
      <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" 
       xmlns:v="urn:schemas-microsoft-com:vml"
       xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
      
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta name="format-detection" content="date=no"> 
        <meta name="format-detection" content="telephone=no">
        <title>Today's Weather</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
        <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      
      table {
        border-spacing: 0;
      }
      
      table td {
        border-collapse: collapse;
      }
      
      .ExternalClass {
        width: 100%;
      }
      
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      
      .ReadMsgBody {
        width: 100%;
        background-color: #ebebeb;
      }
      
      table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      
      img {
        -ms-interpolation-mode: bicubic;
      }
      
      .yshortcuts a {
        border-bottom: none !important;
      }
      
      @media screen and (max-width: 599px) {
        .force-row,
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
      }
      @media screen and (max-width: 400px) {
        .container-padding {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
      }
      .ios-footer a {
        color: #aaaaaa !important;
        text-decoration: underline;
      }
      a[href^="x-apple-data-detectors:"],
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      </style>
      </head>
      
      <body style="margin:0; padding:0;" bgcolor="#F0F0F0" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
      
      <h1> name ${this.name} </h1>
      <h1> image ${this.image} </h1>
      <h1> ingredient ${this.ingredient} </h1>
      <h1> diet ${this.diet} </h1>
      <h1> health ${this.health} </h1>
      
      </body>
      </html>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
    });

  }
}

module.exports = Mail;
