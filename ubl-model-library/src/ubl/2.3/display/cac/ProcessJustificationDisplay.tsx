import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcessJustification } from  '../../model/cac/ProcessJustification'
import { ProcessJustificationFieldMeta } from  '../../meta/cac/ProcessJustificationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcessJustification
  meta: FieldMeta<T>
}

export default function ProcessJustificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ProcessJustification ubl-ProcessJustificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProcessJustification ubl-UBLExtensions"
          meta={ProcessJustificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProcessJustificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcessJustification ubl-Code ubl-PreviousCancellationReasonCode"
          meta={ProcessJustificationFieldMeta.PreviousCancellationReasonCode} 
          value={value.PreviousCancellationReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Previous Cancellation Reason Code"
              value={itemValue}
              meta={ProcessJustificationFieldMeta.PreviousCancellationReasonCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcessJustification ubl-Code ubl-ProcessReasonCode"
          meta={ProcessJustificationFieldMeta.ProcessReasonCode} 
          value={value.ProcessReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Process Reason Code"
              value={itemValue}
              meta={ProcessJustificationFieldMeta.ProcessReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProcessJustification ubl-Text ubl-ProcessReason"
          meta={ProcessJustificationFieldMeta.ProcessReason} 
          value={value.ProcessReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Process Reason"
              value={itemValue}
              meta={ProcessJustificationFieldMeta.ProcessReason}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProcessJustification ubl-Text ubl-Description"
          meta={ProcessJustificationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ProcessJustificationFieldMeta.Description}
            />
          }
        />
        </div>
    </div>
  )
}
