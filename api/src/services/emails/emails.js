const sgMail = require('@sendgrid/mail')

export const sendRedeemedNotification = async ({ input }) => {
  sgMail.setApiKey(process.env.SENDGRID_DEV_API_KEY)
  const msg = {
    to: input.teacherEmail,
    from: 'ryandoyle@hey.com',
    subject: input.subject,
    text: input.message,
  }
  const email = await sgMail.send(msg)
  if (email[0].statusCode !== 202) console.error('Oops')
  return {
    studentEmail: input.studentEmail,
    teacherEmail: input.teacherEmail,
    groupId: input.groupId,
    groupName: input.groupName,
    message: input.message,
    subject: input.subject,
  }
}
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//     return {
//       studentEmail: input.studentEmail,
//       teacherEmail: input.teacherEmail,
//       groupId: input.groupId,
//       groupName: input.groupName,
//       message: input.message,
//       subject: input.subject,
//     }
//   })
//   .catch((error) => {
//     console.error(error)
//   })
