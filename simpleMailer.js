const axios = require('axios');

function sendEmail( senderName, senderEmail, recipientName, recipientEmail, subject, htmlContent) {
  const headers = {
    'accept': 'application/json',
    'api-key': "xsmtpsib-b7f38b2493924d734781603667563a48404f4cdf2e64c4d155258636c434aba3-14x3YTAkmjScaECh",
    // 'api-key': "xsmtpsib-b7f38b2493924d734781603667563a48404f4cdf2e64c4d155258636c434aba3-A8MYhVBvjUfs4Oba",
    'content-type': 'application/json'
  };

  const data = {
    'sender': {
      'name': senderName,
      'email': senderEmail
    },
    'to': [{
      'email': recipientEmail,
      'name': recipientName
    }],
    'subject': subject,
    'htmlContent': htmlContent
  };

  axios.post('https://api.sendinblue.com/v3/smtp/email', data, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
}

sendEmail("VisitUttrakhand","visituttrakhand3@gmail.com","Shivraj","www.shivrajthapliyal@gmail.com","bye","<div>Bye</div>")