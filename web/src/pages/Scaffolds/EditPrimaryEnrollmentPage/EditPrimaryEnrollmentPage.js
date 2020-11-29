import PrimaryEnrollmentsLayout from 'src/layouts/Scaffolds/PrimaryEnrollmentsLayout'
import EditPrimaryEnrollmentCell from 'src/components/Scaffolds/EditPrimaryEnrollmentCell'

const EditPrimaryEnrollmentPage = ({ id }) => {
  return (
    <PrimaryEnrollmentsLayout>
      <EditPrimaryEnrollmentCell id={id} />
    </PrimaryEnrollmentsLayout>
  )
}

export default EditPrimaryEnrollmentPage
