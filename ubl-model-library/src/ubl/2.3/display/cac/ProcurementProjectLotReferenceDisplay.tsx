import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLotReference } from  '../../model/cac/ProcurementProjectLotReference'
import { ProcurementProjectLotReferenceFieldMeta } from  '../../meta/cac/ProcurementProjectLotReferenceMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcurementProjectLotReference | undefined
  meta: FieldMeta<T>
}

export default function ProcurementProjectLotReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ProcurementProjectLotReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProcurementProjectLotReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ProcurementProjectLotReferenceFieldMeta.ID}
          />
        </div>
    </div>
  )
}
