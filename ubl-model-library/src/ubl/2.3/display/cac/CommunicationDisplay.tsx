import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Communication } from  '../../model/cac/Communication'
import { CommunicationFieldMeta } from  '../../meta/cac/CommunicationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Communication
  meta: FieldMeta<T>
}

export default function CommunicationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CommunicationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CommunicationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CommunicationFieldMeta.ChannelCode} 
          value={value.ChannelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CommunicationFieldMeta.ChannelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CommunicationFieldMeta.Channel} 
          value={value.Channel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CommunicationFieldMeta.Channel} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CommunicationFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CommunicationFieldMeta.Value} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
