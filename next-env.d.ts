/// <reference types="next" />
/// <reference types="next/types/global" />

// Use declaration merging to extend types https://github.com/tannerlinsley/react-table/commit/7ab63858391ebb2ff621fa71411157df19d916ba
declare module 'filestack-react' {
  import React from 'react'
  import { PickerFileMetadata, ClientOptions } from 'filestack-js'

  type FilestackAction =
    | 'transform'
    | 'retrieve'
    | 'metadata'
    | 'storeUrl'
    | 'upload'
    | 'multiupload'
    | 'remove'
    | 'pick'
    | 'removeMetadata'
    | 'preview'
    | 'logout'

  type ComponentDisplayModeType = 'button' | 'link' | 'immediate'

  interface Props {
    apikey: string | undefined
    action?: FilestackAction
    componentDisplayMode?: {
      type?: ComponentDisplayModeType
      customText?: string
      customClass?: string
    }
    onSuccess?: (data: PickerResponse) => void
    onError?: (error: PickerFileMetadata[]) => void
    clientOptions?: ClientOptions
    file?: File
    source?: string
    customRender?: React.ComponentType<{ onPick: (arg: unknown) => void }>
    actionOptions: OptionsObject
  }

  declare class ReactFilestack extends React.Component<Props> {}
  export default ReactFilestack
}
