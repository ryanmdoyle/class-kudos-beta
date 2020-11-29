import SecondaryEnrollmentsLayout from 'src/layouts/Scaffolds/SecondaryEnrollmentsLayout'
import EditSecondaryEnrollmentCell from 'src/components/Scaffolds/EditSecondaryEnrollmentCell'

const EditSecondaryEnrollmentPage = ({ id }) => {
  return (
    <SecondaryEnrollmentsLayout>
      <EditSecondaryEnrollmentCell id={id} />
    </SecondaryEnrollmentsLayout>
  )
}

export default EditSecondaryEnrollmentPage
