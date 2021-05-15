import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EvidenceSupplied } from  '../../model/cac/EvidenceSupplied'
import { EvidenceSuppliedFieldMeta } from  '../../meta/cac/EvidenceSuppliedMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EvidenceSupplied | undefined
  meta: FieldMeta<T>
}

export default function EvidenceSuppliedDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EvidenceSupplied">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EvidenceSuppliedFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={EvidenceSuppliedFieldMeta.ID}
          />
        </div>
    </div>
  )
}
