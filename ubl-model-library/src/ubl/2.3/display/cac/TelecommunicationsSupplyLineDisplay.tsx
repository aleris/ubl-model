import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TelecommunicationsSupplyLine } from  '../../model/cac/TelecommunicationsSupplyLine'
import { TelecommunicationsSupplyLineFieldMeta } from  '../../meta/cac/TelecommunicationsSupplyLineMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TelecommunicationsServiceDisplay from './TelecommunicationsServiceDisplay'
import { TelecommunicationsService } from '../../model/cac/TelecommunicationsService'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TelecommunicationsSupplyLine
  meta: FieldMeta<T>
}

export default function TelecommunicationsSupplyLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TelecommunicationsSupplyLine ubl-TelecommunicationsSupplyLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TelecommunicationsSupplyLine ubl-UBLExtensions"
          meta={TelecommunicationsSupplyLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupplyLine ubl-Identifier ubl-ID"
          meta={TelecommunicationsSupplyLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupplyLine ubl-Text ubl-PhoneNumber"
          meta={TelecommunicationsSupplyLineFieldMeta.PhoneNumber} 
          value={value.PhoneNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Phone Number"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.PhoneNumber}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TelecommunicationsSupplyLine ubl-Text ubl-Description"
          meta={TelecommunicationsSupplyLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupplyLine ubl-Amount ubl-LineExtensionAmount"
          meta={TelecommunicationsSupplyLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsSupplyLine ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={TelecommunicationsSupplyLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsSupplyLine ubl-ExchangeRate"
          meta={TelecommunicationsSupplyLineFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Exchange Rate"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.ExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsSupplyLine ubl-AllowanceCharge"
          meta={TelecommunicationsSupplyLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsSupplyLine ubl-TaxTotal"
          meta={TelecommunicationsSupplyLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsSupplyLine ubl-TelecommunicationsService"
          meta={TelecommunicationsSupplyLineFieldMeta.TelecommunicationsService} 
          value={value.TelecommunicationsService}
          itemDisplay={ (itemValue: TelecommunicationsService, key: string | number) =>
            <TelecommunicationsServiceDisplay
              key={key}
              label="Telecommunications Service"
              value={itemValue}
              meta={TelecommunicationsSupplyLineFieldMeta.TelecommunicationsService}
            />
          }
        />
        </div>
    </div>
  )
}
