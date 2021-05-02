import { db } from 'src/lib/db'
const sgMail = require('@sendgrid/mail')

export const sendRedeemedNotification = async ({ input }) => {
  sgMail.setApiKey(process.env.SENDGRID_DEV_API_KEY)
  const group = await db.group.findUnique({
    where: { id: input.groupId },
  })
  const teacher = await db.user.findUnique({
    where: { id: group.ownerId },
  })
  const student = await db.user.findUnique({
    where: { id: input.userId },
  })
  const reward = await db.reward.findUnique({
    where: { id: input.rewardId },
  })
  const msg = {
    to: teacher.email,
    from: 'class-kudos-notifications@doylecodes.com',
    templateId: 'd-2ba8ded55d314f8a8b84131df1948ff0',
    dynamic_template_data: {
      name: student.firstName,
      value: reward.cost,
      reward: reward.name,
    },
  }
  const email = await sgMail.send(msg)
  if (email[0].statusCode !== 202) console.error('Oops')
  return {
    studentEmail: student.email,
    teacherEmail: teacher.email,
    groupId: input.groupId,
    groupName: input.groupName,
    message: input.message,
    subject: input.subject,
  }
}
