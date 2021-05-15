import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ProcessJustification | undefined
  meta: FieldMeta<T>
}

export default function ProcessJustificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ProcessJustification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProcessJustificationFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Previous Cancellation Reason Code"
            value={value.PreviousCancellationReasonCode?.[0]}
            meta={ProcessJustificationFieldMeta.PreviousCancellationReasonCode}
          />

          <CodeDisplay
            label="Process Reason Code"
            value={value.ProcessReasonCode?.[0]}
            meta={ProcessJustificationFieldMeta.ProcessReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ProcessReason"
            label="Process Reason"
            items={value.ProcessReason}
            meta={ProcessJustificationFieldMeta.ProcessReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Process Reason"
                value={itemValue}
                meta={ProcessJustificationFieldMeta.ProcessReason}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ProcessJustificationFieldMeta.Description} 
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
