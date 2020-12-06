import EnrollmentsLayout from 'src/layouts/Scaffolds/EnrollmentsLayout'
import EditEnrollmentCell from 'src/components/Scaffolds/EditEnrollmentCell'

const EditEnrollmentPage = ({ id }) => {
  return (
    <EnrollmentsLayout>
      <EditEnrollmentCell id={id} />
    </EnrollmentsLayout>
  )
}

export default EditEnrollmentPage
