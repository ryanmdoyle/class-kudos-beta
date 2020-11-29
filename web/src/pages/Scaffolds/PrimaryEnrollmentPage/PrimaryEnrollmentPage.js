import PrimaryEnrollmentsLayout from 'src/layouts/Scaffolds/PrimaryEnrollmentsLayout'
import PrimaryEnrollmentCell from 'src/components/Scaffolds/PrimaryEnrollmentCell'

const PrimaryEnrollmentPage = ({ id }) => {
  return (
    <PrimaryEnrollmentsLayout>
      <PrimaryEnrollmentCell id={id} />
    </PrimaryEnrollmentsLayout>
  )
}

export default PrimaryEnrollmentPage
