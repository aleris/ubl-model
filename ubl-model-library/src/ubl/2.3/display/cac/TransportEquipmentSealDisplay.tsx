import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportEquipmentSeal
  meta: FieldMeta<T>
}

export default function TransportEquipmentSealDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportEquipmentSealFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportEquipmentSealFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentSealFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportEquipmentSealFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentSealFieldMeta.SealIssuerTypeCode} 
          value={value.SealIssuerTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentSealFieldMeta.SealIssuerTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentSealFieldMeta.Condition} 
          value={value.Condition}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEquipmentSealFieldMeta.Condition} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentSealFieldMeta.SealStatusCode} 
          value={value.SealStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentSealFieldMeta.SealStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentSealFieldMeta.SealingPartyType} 
          value={value.SealingPartyType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEquipmentSealFieldMeta.SealingPartyType} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
