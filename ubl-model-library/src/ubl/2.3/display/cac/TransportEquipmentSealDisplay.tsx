import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TransportEquipmentSeal
  meta: FieldMeta<T>
}

export default function TransportEquipmentSealDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportEquipmentSeal ubl-TransportEquipmentSealType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportEquipmentSeal ubl-UBLExtensions"
          meta={TransportEquipmentSealFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportEquipmentSealFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipmentSeal ubl-Identifier ubl-ID"
          meta={TransportEquipmentSealFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportEquipmentSealFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipmentSeal ubl-Code ubl-SealIssuerTypeCode"
          meta={TransportEquipmentSealFieldMeta.SealIssuerTypeCode} 
          value={value.SealIssuerTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Seal Issuer Type Code"
              value={itemValue}
              meta={TransportEquipmentSealFieldMeta.SealIssuerTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipmentSeal ubl-Text ubl-Condition"
          meta={TransportEquipmentSealFieldMeta.Condition} 
          value={value.Condition}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Condition"
              value={itemValue}
              meta={TransportEquipmentSealFieldMeta.Condition}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipmentSeal ubl-Code ubl-SealStatusCode"
          meta={TransportEquipmentSealFieldMeta.SealStatusCode} 
          value={value.SealStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Seal Status Code"
              value={itemValue}
              meta={TransportEquipmentSealFieldMeta.SealStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipmentSeal ubl-Text ubl-SealingPartyType"
          meta={TransportEquipmentSealFieldMeta.SealingPartyType} 
          value={value.SealingPartyType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Sealing Party Type"
              value={itemValue}
              meta={TransportEquipmentSealFieldMeta.SealingPartyType}
            />
          }
        />
        </div>
    </div>
  )
}
