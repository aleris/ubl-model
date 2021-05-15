import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Communication } from  '../../model/cac/Communication'
import { CommunicationFieldMeta } from  '../../meta/cac/CommunicationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Communication | undefined
  meta: FieldMeta<T>
}

export default function CommunicationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Communication">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CommunicationFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Channel Code"
            value={value.ChannelCode?.[0]}
            meta={CommunicationFieldMeta.ChannelCode}
          />

          <TextDisplay
            label="Channel"
            value={value.Channel?.[0]}
            meta={CommunicationFieldMeta.Channel}
          />

          <TextDisplay
            label="Value"
            value={value.Value?.[0]}
            meta={CommunicationFieldMeta.Value}
          />
        </div>
    </div>
  )
}
