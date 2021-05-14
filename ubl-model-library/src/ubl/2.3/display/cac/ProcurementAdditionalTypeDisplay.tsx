import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementAdditionalType } from  '../../model/cac/ProcurementAdditionalType'
import { ProcurementAdditionalTypeFieldMeta } from  '../../meta/cac/ProcurementAdditionalTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcurementAdditionalType
  meta: FieldMeta<T>
}

export default function ProcurementAdditionalTypeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ProcurementAdditionalType ubl-ProcurementAdditionalTypeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProcurementAdditionalType ubl-UBLExtensions"
          meta={ProcurementAdditionalTypeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProcurementAdditionalTypeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementAdditionalType ubl-Code ubl-ProcurementTypeCode"
          meta={ProcurementAdditionalTypeFieldMeta.ProcurementTypeCode} 
          value={value.ProcurementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Procurement Type Code"
              value={itemValue}
              meta={ProcurementAdditionalTypeFieldMeta.ProcurementTypeCode}
            />
          }
        />
        </div>
    </div>
  )
}
