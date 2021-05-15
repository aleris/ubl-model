import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportEquipmentSeal } from  '../../model/cac/TransportEquipmentSeal'
import { TransportEquipmentSealFieldMeta } from  '../../meta/cac/TransportEquipmentSealMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportEquipmentSeal | undefined
  meta: FieldMeta<T>
}

export default function TransportEquipmentSealDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportEquipmentSeal">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportEquipmentSealFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportEquipmentSealFieldMeta.ID}
          />

          <CodeDisplay
            label="Seal Issuer Type Code"
            value={value.SealIssuerTypeCode?.[0]}
            meta={TransportEquipmentSealFieldMeta.SealIssuerTypeCode}
          />

          <TextDisplay
            label="Condition"
            value={value.Condition?.[0]}
            meta={TransportEquipmentSealFieldMeta.Condition}
          />

          <CodeDisplay
            label="Seal Status Code"
            value={value.SealStatusCode?.[0]}
            meta={TransportEquipmentSealFieldMeta.SealStatusCode}
          />

          <TextDisplay
            label="Sealing Party Type"
            value={value.SealingPartyType?.[0]}
            meta={TransportEquipmentSealFieldMeta.SealingPartyType}
          />
        </div>
    </div>
  )
}
