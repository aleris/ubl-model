import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ContractingRepresentationType | undefined
  meta: FieldMeta<T>
}

export default function ContractingRepresentationTypeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ContractingRepresentationType">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractingRepresentationTypeFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Representation Type Code"
            value={value.RepresentationTypeCode?.[0]}
            meta={ContractingRepresentationTypeFieldMeta.RepresentationTypeCode}
          />

          <TextDisplay
            label="Representation Type"
            value={value.RepresentationType?.[0]}
            meta={ContractingRepresentationTypeFieldMeta.RepresentationType}
          />
        </div>
    </div>
  )
}
