import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'

const UserForm = (props) => {
  const { hasRole } = useAuth()
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
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
          name="uid"
          className="rw-label hidden"
          errorClassName="rw-label rw-label-error"
        >
          Uid
        </Label>
        <TextField
          name="uid"
          defaultValue={props.user?.uid}
          className="rw-input hidden"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="uid" className="rw-field-error" />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>
        <TextField
          name="firstName"
          defaultValue={props.user?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          disabled={!hasRole(['teacher', 'super_admin'])}
        />
        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>
        <TextField
          name="lastName"
          defaultValue={props.user?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          disabled={!hasRole(['teacher', 'super_admin'])}
        />
        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          readonly="readonly"
          disabled="disabled"
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="profileImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile image URL
        </Label>
        <TextField
          name="profileImage"
          defaultValue={props.user?.profileImage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="profileImage" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
