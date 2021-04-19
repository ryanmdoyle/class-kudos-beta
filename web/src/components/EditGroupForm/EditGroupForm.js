import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import { QUERY as teacherHomeQuery } from 'src/components/cells/TeacherHomeCell'
import { QUERY as ownedQuery } from 'src/components/cells/GroupsOwnedCell'
import { QUERY as enrolledQuery } from 'src/components/cells/EnrolledNavCell'

const DELETE_GROUP_MUTATION = gql`
  mutation DeleteGroupMutation($id: String!) {
    deleteGroup(id: $id) {
      id
    }
  }
`

const EditGroupForm = (props) => {
  const { close } = useModal()
  const [deleteGroup] = useMutation(DELETE_GROUP_MUTATION, {
    onCompleted: () => {
      toast.success('Group deleted.', { classes: 'rw-flash-success' })
    },
    refetchQueries: [
      { query: teacherHomeQuery, variables: { userId: props.userId } },
      { query: ownedQuery, variables: { userId: props.userId } },
      { query: enrolledQuery, variables: { userId: props.userId } },
    ],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete group ' + props.group.name + '?')
    ) {
      deleteGroup({ variables: { id } })
      close()
    }
  }

  const onSubmit = (data) => {
    props.onSave(data, props?.group?.id)
  }

  return (
    <div className="rw-form-wrapper relative">
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
          name="enrollId"
          className="text-base font-body font-bold"
          errorClassName="ck-label ck-label-error"
        >
          Enroll Id
        </Label>
        <TextField
          name="enrollId"
          defaultValue={props.group?.enrollId}
          className="rw-input mb-2"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        <Label
          name="type"
          className="text-base font-body font-bold"
          errorClassName="ck-label ck-label-error"
        >
          Group Type
        </Label>
        <SelectField
          name="type"
          defaultValue={props.group?.type}
          className="rw-input mb-2"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          <option value="primary">Class</option>
          <option value="secondary">Group</option>
        </SelectField>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
      <button
        href="#"
        title={'Delete group ' + props.id}
        className="rw-button rw-button-small rw-button-red mt-2 w-28 h-6 absolute bottom-0 right-0"
        onClick={() => onDeleteClick(props.group?.id)}
      >
        Delete Group
      </button>
    </div>
  )
}

export default EditGroupForm
