import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcessJustification } from  '../../model/cac/ProcessJustification'
import { ProcessJustificationFieldMeta } from  '../../meta/cac/ProcessJustificationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ProcessJustification
  meta: FieldMeta<T>
}

export default function ProcessJustificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ProcessJustificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ProcessJustificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcessJustificationFieldMeta.PreviousCancellationReasonCode} 
          value={value.PreviousCancellationReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ProcessJustificationFieldMeta.PreviousCancellationReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcessJustificationFieldMeta.ProcessReasonCode} 
          value={value.ProcessReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ProcessJustificationFieldMeta.ProcessReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcessJustificationFieldMeta.ProcessReason} 
          value={value.ProcessReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ProcessJustificationFieldMeta.ProcessReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcessJustificationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ProcessJustificationFieldMeta.Description} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
