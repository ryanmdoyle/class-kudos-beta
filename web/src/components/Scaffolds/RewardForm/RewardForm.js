import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const RewardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.reward?.id)
  }
  const { groupId } = props
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
          defaultValue={props.reward?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="cost"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cost
        </Label>
        <NumberField
          name="cost"
          defaultValue={props.reward?.cost}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="cost" className="rw-field-error" />

        <Label
          name="groupId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Group id
        </Label>
        <TextField
          name="groupId"
          defaultValue={props.reward?.groupId || groupId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="groupId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RewardForm
