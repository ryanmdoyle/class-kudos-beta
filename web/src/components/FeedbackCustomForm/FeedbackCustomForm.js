import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const FeedbackCustomForm = (props) => {
  const { handleAwardSave } = props
  const onSubmit = (data) => {
    handleAwardSave(data.name, data.value)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={'Custom Feedback'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>
        <NumberField
          name="value"
          defaultValue={1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            min: { value: 1, message: 'Must be a positive value' },
          }}
        />
        <FieldError name="value" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-green">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FeedbackCustomForm
