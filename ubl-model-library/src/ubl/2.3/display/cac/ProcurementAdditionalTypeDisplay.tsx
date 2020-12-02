import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementAdditionalType } from  '../../model/cac/ProcurementAdditionalType'
import { ProcurementAdditionalTypeFieldMeta } from  '../../meta/cac/ProcurementAdditionalTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ProcurementAdditionalType
  meta: FieldMeta<T>
}

export default function ProcurementAdditionalTypeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ProcurementAdditionalTypeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ProcurementAdditionalTypeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementAdditionalTypeFieldMeta.ProcurementTypeCode} 
          value={value.ProcurementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ProcurementAdditionalTypeFieldMeta.ProcurementTypeCode} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
