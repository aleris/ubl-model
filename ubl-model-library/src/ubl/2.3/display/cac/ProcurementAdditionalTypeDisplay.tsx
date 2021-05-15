import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementAdditionalType } from  '../../model/cac/ProcurementAdditionalType'
import { ProcurementAdditionalTypeFieldMeta } from  '../../meta/cac/ProcurementAdditionalTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcurementAdditionalType | undefined
  meta: FieldMeta<T>
}

export default function ProcurementAdditionalTypeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ProcurementAdditionalType">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProcurementAdditionalTypeFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Procurement Type Code"
            value={value.ProcurementTypeCode?.[0]}
            meta={ProcurementAdditionalTypeFieldMeta.ProcurementTypeCode}
          />
        </div>
    </div>
  )
}
