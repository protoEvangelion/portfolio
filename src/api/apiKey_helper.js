const URL = require('url-parse')
const querystring = require('querystring')
const axios = require('axios')

let modifyUrl = (originalUrl, res) => {
  let url = new URL(originalUrl)
  const queries = querystring.parse(url.query)

  if (url.query.includes('api.stlouisfed.org')) {
    return url.query.slice(5) + process.env.GDPAPIKEY
  } else if (queries.mailgunMessage) {
    axios
      .post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${
          process.env.RECAPTCHA
        }&response=${queries.payload}`,
      )
      .then(response => {
        if (response.data.success) {
          const api_key = process.env.MAILGUN
          const Mailgun = require('mailgun-js')
          const domain = 'sandboxb02a583d258841ec936b5085c6ca7163.mailgun.org'
          const from_who = queries.firstName + '' + queries.email

          const mailgun = new Mailgun({ apiKey: api_key, domain: domain })

          const data = {
            from: from_who,
            to: 'ryantgarant@gmail.com',
            subject: 'Mailgun Ryantg app contact message',
            html: queries.mailgunMessage.replace(/%20/g, ' '),
          }

          //Invokes the method to send emails given the above data with the helper library
          mailgun.messages().send(data, function(err, body) {
            if (err) {
              console.log('got an error: ', err)
              res.status(500).send('failure')
            } else {
              console.log(body)
              res.status(200).send('success')
            }
          })
        }
      })
      .catch(err => {
        res.status(500).send('google reCaptacha failed')
        console.log('google reCaptcha error', err)
      })
  } else {
    return url.query.slice(5)
  }
}

export default modifyUrl
