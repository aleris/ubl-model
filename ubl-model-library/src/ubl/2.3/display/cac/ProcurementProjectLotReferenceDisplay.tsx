import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLotReference } from  '../../model/cac/ProcurementProjectLotReference'
import { ProcurementProjectLotReferenceFieldMeta } from  '../../meta/cac/ProcurementProjectLotReferenceMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ProcurementProjectLotReference
  meta: FieldMeta<T>
}

export default function ProcurementProjectLotReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ProcurementProjectLotReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ProcurementProjectLotReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProcurementProjectLotReferenceFieldMeta.ID} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
