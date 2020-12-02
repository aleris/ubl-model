import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingRepresentationType } from  '../../model/cac/ContractingRepresentationType'
import { ContractingRepresentationTypeFieldMeta } from  '../../meta/cac/ContractingRepresentationTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ContractingRepresentationType
  meta: FieldMeta<T>
}

export default function ContractingRepresentationTypeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractingRepresentationTypeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractingRepresentationTypeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingRepresentationTypeFieldMeta.RepresentationTypeCode} 
          value={value.RepresentationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractingRepresentationTypeFieldMeta.RepresentationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingRepresentationTypeFieldMeta.RepresentationType} 
          value={value.RepresentationType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractingRepresentationTypeFieldMeta.RepresentationType} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
