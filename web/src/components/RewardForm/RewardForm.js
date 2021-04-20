import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  SelectField,
  Submit,
} from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'

const RewardForm = (props) => {
  const formMethods = useForm()
  const watchDefault = props?.reward?.responseRequired
    ? props?.reward?.responseRequired.toString()
    : 'false'
  const watchPrompt = formMethods.watch('responseRequired', watchDefault)
  const onSubmit = (data) => {
    data.responseRequired = data.responseRequired === 'true'
    if (!data.responseRequired) {
      data.responsePrompt = null
    }
    props.onSave(data, props?.reward?.id)
  }
  const { groupId } = props
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} formMethods={formMethods} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        {/* NAME */}
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

        {/* COST */}
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

        {/* GROUP ID */}
        <Label
          name="groupId"
          className="rw-label hidden"
          errorClassName="rw-label rw-label-error"
        >
          Group id
        </Label>
        <TextField
          name="groupId"
          defaultValue={props.reward?.groupId || groupId}
          className="rw-input hidden"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="groupId" className="rw-field-error" />

        {/* RESPONSE REQUIRED? */}
        <Label
          name="responseRequired"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Would you like to ask a question when this award is redeemed?
        </Label>

        <SelectField
          name="responseRequired"
          id="responseRequired"
          defaultValue={props.reward?.responseRequired || false}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          <option value={false}>No, I need no further information.</option>
          <option value={true}>
            Yes, I would like student to answer a prompt.
          </option>
        </SelectField>
        <FieldError name="responseRequired" className="rw-field-error" />

        <Label
          name="responsePrompt"
          className={`rw-label ${watchPrompt === 'true' ? null : 'hidden'}`}
          errorClassName="rw-label rw-label-error"
        >
          What do you want to ask when redeeming this award?
        </Label>
        <TextField
          name="responsePrompt"
          defaultValue={props.reward?.responsePrompt}
          className={`rw-input ${watchPrompt === 'true' ? null : 'hidden'}`}
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="responsePrompt" className="rw-field-error" />

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
