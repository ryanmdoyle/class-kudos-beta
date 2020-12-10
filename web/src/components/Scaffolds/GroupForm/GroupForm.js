import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const GroupForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.group?.id)
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
          className="ck-label mt-4"
          errorClassName="ck-label ck-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.group?.name}
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
          defaultValue={props.group?.description}
          className="rw-input mb-2"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="type"
          className="text-base font-body font-bold"
          errorClassName="ck-label ck-label-error"
        >
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.group?.type}
          className="rw-input mb-2"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        {/* <Label
          name="ownerId"
          className="ck-label"
          errorClassName="ck-label ck-label-error"
        >
          Owner id
        </Label>
        <TextField
          name="ownerId"
          defaultValue={props.group?.ownerId}
          className="rw-input mb-2"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ownerId" className="rw-field-error" /> */}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default GroupForm
