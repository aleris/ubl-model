import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingRepresentationType } from  '../../model/cac/ContractingRepresentationType'
import { ContractingRepresentationTypeFieldMeta } from  '../../meta/cac/ContractingRepresentationTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractingRepresentationType
  meta: FieldMeta<T>
}

export default function ContractingRepresentationTypeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ContractingRepresentationType ubl-ContractingRepresentationTypeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractingRepresentationType ubl-UBLExtensions"
          meta={ContractingRepresentationTypeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractingRepresentationTypeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingRepresentationType ubl-Code ubl-RepresentationTypeCode"
          meta={ContractingRepresentationTypeFieldMeta.RepresentationTypeCode} 
          value={value.RepresentationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Representation Type Code"
              value={itemValue}
              meta={ContractingRepresentationTypeFieldMeta.RepresentationTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingRepresentationType ubl-Text ubl-RepresentationType"
          meta={ContractingRepresentationTypeFieldMeta.RepresentationType} 
          value={value.RepresentationType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Representation Type"
              value={itemValue}
              meta={ContractingRepresentationTypeFieldMeta.RepresentationType}
            />
          }
        />
        </div>
    </div>
  )
}
