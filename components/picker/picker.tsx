import React from 'react'
// @ts-ignore
import { PickerInline } from 'filestack-react'
import { FILESTACK_API_KEY, workflowId } from 'lib/constants'

interface Props {
  pickerOptions?: any
  onSuccess(res: any): void
}

const PickerOptions = {
  maxFiles: 1,
  accept: 'video/*',
  fromSources: ['local_file_system', 'googledrive'],
  storeTo: {
    workflows: [workflowId],
  },
}

const Picker: React.FC<Props> = (props) => (
  <PickerInline
    apikey={FILESTACK_API_KEY}
    onSuccess={props.onSuccess}
    pickerOptions={props.pickerOptions || PickerOptions}
  />
)

export default Picker
