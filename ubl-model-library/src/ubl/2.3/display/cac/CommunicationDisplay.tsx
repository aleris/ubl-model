import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Communication
  meta: FieldMeta<T>
}

export default function CommunicationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Communication ubl-CommunicationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Communication ubl-UBLExtensions"
          meta={CommunicationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CommunicationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Communication ubl-Code ubl-ChannelCode"
          meta={CommunicationFieldMeta.ChannelCode} 
          value={value.ChannelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Channel Code"
              value={itemValue}
              meta={CommunicationFieldMeta.ChannelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Communication ubl-Text ubl-Channel"
          meta={CommunicationFieldMeta.Channel} 
          value={value.Channel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Channel"
              value={itemValue}
              meta={CommunicationFieldMeta.Channel}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Communication ubl-Text ubl-Value"
          meta={CommunicationFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={CommunicationFieldMeta.Value}
            />
          }
        />
        </div>
    </div>
  )
}
