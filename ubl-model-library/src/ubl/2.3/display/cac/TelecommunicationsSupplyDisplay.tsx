import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TelecommunicationsSupply
  meta: FieldMeta<T>
}

export default function TelecommunicationsSupplyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TelecommunicationsSupply ubl-TelecommunicationsSupplyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TelecommunicationsSupply ubl-UBLExtensions"
          meta={TelecommunicationsSupplyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TelecommunicationsSupplyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupply ubl-Text ubl-TelecommunicationsSupplyType"
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyType} 
          value={value.TelecommunicationsSupplyType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Telecommunications Supply Type"
              value={itemValue}
              meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupply ubl-Code ubl-TelecommunicationsSupplyTypeCode"
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyTypeCode} 
          value={value.TelecommunicationsSupplyTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Telecommunications Supply Type Code"
              value={itemValue}
              meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupply ubl-Code ubl-PrivacyCode"
          meta={TelecommunicationsSupplyFieldMeta.PrivacyCode} 
          value={value.PrivacyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Privacy Code"
              value={itemValue}
              meta={TelecommunicationsSupplyFieldMeta.PrivacyCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TelecommunicationsSupply ubl-Text ubl-Description"
          meta={TelecommunicationsSupplyFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TelecommunicationsSupplyFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupply ubl-Amount ubl-TotalAmount"
          meta={TelecommunicationsSupplyFieldMeta.TotalAmount} 
          value={value.TotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Amount"
              value={itemValue}
              meta={TelecommunicationsSupplyFieldMeta.TotalAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsSupply ubl-TelecommunicationsSupplyLine"
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyLine} 
          value={value.TelecommunicationsSupplyLine}
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
