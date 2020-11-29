import SecondaryEnrollmentsLayout from 'src/layouts/Scaffolds/SecondaryEnrollmentsLayout'
import SecondaryEnrollmentCell from 'src/components/Scaffolds/SecondaryEnrollmentCell'

const SecondaryEnrollmentPage = ({ id }) => {
  return (
    <SecondaryEnrollmentsLayout>
      <SecondaryEnrollmentCell id={id} />
    </SecondaryEnrollmentsLayout>
  )
}

export default SecondaryEnrollmentPage
