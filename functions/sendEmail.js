const functions = require('firebase-functions');
const axios = require('axios');

// SendinBlue API key (replace with your API key)
const sendinBlueApiKey = process.env.REACT_APP_BREVO_KEY;

exports.sendEmail = functions.https.onCall(async (data, context) => {
  const { to, subject, text } = data;

  try {
    const response = await axios.post(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        sender: { email: 'daddygo558@gmail.com' },
        to: [{ email: to }],
        subject: subject,
        textContent: text,
      },
      {
        headers: {
          'api-key': sendinBlueApiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    return { message: `Email sent: ${response.data.messageId}` };
  } catch (error) {
    return { error: 'Failed to send email.' };
  }
});