import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Declaration } from  '../../model/cac/Declaration'
import { DeclarationFieldMeta } from  '../../meta/cac/DeclarationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EvidenceSuppliedDisplay from './EvidenceSuppliedDisplay'
import { EvidenceSupplied } from '../../model/cac/EvidenceSupplied'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Declaration
  meta: FieldMeta<T>
}

export default function DeclarationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DeclarationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DeclarationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeclarationFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DeclarationFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeclarationFieldMeta.DeclarationTypeCode} 
          value={value.DeclarationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DeclarationFieldMeta.DeclarationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeclarationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DeclarationFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeclarationFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
          itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
            <EvidenceSuppliedDisplay key={key} meta={DeclarationFieldMeta.EvidenceSupplied} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
