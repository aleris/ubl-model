import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EvidenceSupplied } from  '../../model/cac/EvidenceSupplied'
import { EvidenceSuppliedFieldMeta } from  '../../meta/cac/EvidenceSuppliedMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EvidenceSupplied
  meta: FieldMeta<T>
}

export default function EvidenceSuppliedDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EvidenceSupplied ubl-EvidenceSuppliedType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EvidenceSupplied ubl-UBLExtensions"
          meta={EvidenceSuppliedFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EvidenceSuppliedFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EvidenceSupplied ubl-Identifier ubl-ID"
          meta={EvidenceSuppliedFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={EvidenceSuppliedFieldMeta.ID}
            />
          }
        />
        </div>
    </div>
  )
}
