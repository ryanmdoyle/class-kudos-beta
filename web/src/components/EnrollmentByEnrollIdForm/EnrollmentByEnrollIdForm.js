import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const EnrollmentByEnrollIdForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.enrollment?.id)
  }
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="enrollId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Enter Enroll ID
        </Label>
        <TextField
          name="enrollId"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="enrollId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EnrollmentByEnrollIdForm
