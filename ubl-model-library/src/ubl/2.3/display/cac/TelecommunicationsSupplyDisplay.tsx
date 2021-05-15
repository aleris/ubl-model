import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: TelecommunicationsSupply | undefined
  meta: FieldMeta<T>
}

export default function TelecommunicationsSupplyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TelecommunicationsSupply">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TelecommunicationsSupplyFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Telecommunications Supply Type"
            value={value.TelecommunicationsSupplyType?.[0]}
            meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyType}
          />

          <CodeDisplay
            label="Telecommunications Supply Type Code"
            value={value.TelecommunicationsSupplyTypeCode?.[0]}
            meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyTypeCode}
          />

          <CodeDisplay
            label="Privacy Code"
            value={value.PrivacyCode?.[0]}
            meta={TelecommunicationsSupplyFieldMeta.PrivacyCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TelecommunicationsSupplyFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TelecommunicationsSupplyFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Total Amount"
            value={value.TotalAmount?.[0]}
            meta={TelecommunicationsSupplyFieldMeta.TotalAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TelecommunicationsSupplyLine"
            label="Telecommunications Supply Line"
            items={value.TelecommunicationsSupplyLine}
            meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyLine} 
            itemDisplay={ (itemValue: TelecommunicationsSupplyLine, key: string | number) =>
              <TelecommunicationsSupplyLineDisplay
                key={key}
                label="Telecommunications Supply Line"
                value={itemValue}
                meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyLine}
              />
            }
          />
        </div>
    </div>
  )
}
