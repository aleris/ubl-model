import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TelecommunicationsSupply } from  '../../model/cac/TelecommunicationsSupply'
import { TelecommunicationsSupplyFieldMeta } from  '../../meta/cac/TelecommunicationsSupplyMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TelecommunicationsSupplyLineDisplay from './TelecommunicationsSupplyLineDisplay'
import { TelecommunicationsSupplyLine } from '../../model/cac/TelecommunicationsSupplyLine'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TelecommunicationsSupply
  meta: FieldMeta<T>
}

export default function TelecommunicationsSupplyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TelecommunicationsSupplyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TelecommunicationsSupplyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyType} 
          value={value.TelecommunicationsSupplyType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyTypeCode} 
          value={value.TelecommunicationsSupplyTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyFieldMeta.PrivacyCode} 
          value={value.PrivacyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TelecommunicationsSupplyFieldMeta.PrivacyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsSupplyFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyFieldMeta.TotalAmount} 
          value={value.TotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TelecommunicationsSupplyFieldMeta.TotalAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyLine} 
          value={value.TelecommunicationsSupplyLine}
          itemDisplay={ (itemValue: TelecommunicationsSupplyLine, key: string | number) =>
            <TelecommunicationsSupplyLineDisplay key={key} meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
