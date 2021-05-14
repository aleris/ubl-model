import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLotReference } from  '../../model/cac/ProcurementProjectLotReference'
import { ProcurementProjectLotReferenceFieldMeta } from  '../../meta/cac/ProcurementProjectLotReferenceMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcurementProjectLotReference
  meta: FieldMeta<T>
}

export default function ProcurementProjectLotReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ProcurementProjectLotReference ubl-ProcurementProjectLotReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProcurementProjectLotReference ubl-UBLExtensions"
          meta={ProcurementProjectLotReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProcurementProjectLotReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProjectLotReference ubl-Identifier ubl-ID"
          meta={ProcurementProjectLotReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ProcurementProjectLotReferenceFieldMeta.ID}
            />
          }
        />
        </div>
    </div>
  )
}
