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

const ARCHIVE_GROUP_MUTATION = gql`
  mutation ArchiveGroupMutation($id: String!) {
    archiveGroup(id: $id) {
      id
    }
  }
`

const GroupForm = (props) => {
  const { crud } = props
  const { close } = useModal()
  const [archiveGroup] = useMutation(ARCHIVE_GROUP_MUTATION, {
    onCompleted: () => {
      toast.success('Group archived.', { classes: 'rw-flash-success' })
    },
    refetchQueries: [
      { query: teacherHomeQuery, variables: { userId: props.userId } },
      { query: ownedQuery, variables: { userId: props.userId } },
    ],
    awaitRefetchQueries: true,
  })

  const onArchiveClick = (id) => {
    if (
      confirm(
        'Are you sure you want to archive group ' + props.group.name + '?'
      )
    ) {
      archiveGroup({ variables: { id } })
      close()
    }
  }

  const onSubmit = (data) => {
    props.onSave(data, props?.group?.id)
  }

  return (
    <div className="relative">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="ck-label"
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
          className="ck-label"
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

        {crud === 'edit' && (
          <>
            <Label
              name="enrollId"
              className="ck-label"
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
          </>
        )}

        <Label
          name="type"
          className="ck-label"
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
          <Submit disabled={props.loading} className="rw-button rw-button-green">
            Save
          </Submit>
        </div>
      </Form>
      {crud === 'edit' && (
        <button
          href="#"
          title={'Delete group ' + props.id}
          className="rw-button rw-button-small rw-button-red mt-2 w-32 h-6 absolute bottom-0 right-0"
          onClick={() => onArchiveClick(props.group?.id)}
        >
          Archive Group
        </button>
      )}
    </div>
  )
}

export default GroupForm
