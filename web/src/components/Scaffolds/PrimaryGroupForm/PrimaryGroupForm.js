import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PrimaryGroupForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.primaryGroup?.id)
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
          className="text-base font-body font-bold" //className="ck-label"
          errorClassName="" // errorClassName="ck-label ck-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.primaryGroup?.name}
          className="rw-input mb-2"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="ck-label mt-4"
          errorClassName="ck-label ck-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.primaryGroup?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <div className="hidden">
          <Label
            name="ownerId"
            className="ck-label"
            errorClassName="ck-label ck-label-error"
          >
            Owner id
          </Label>
          <TextField
            name="ownerId"
            defaultValue={props.primaryGroup?.ownerId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            // validation={{ required: true }}
          />
          <FieldError name="ownerId" className="rw-field-error" />
        </div>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="button-purple">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PrimaryGroupForm
