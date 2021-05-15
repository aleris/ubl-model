import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TelecommunicationsSupplyLine | undefined
  meta: FieldMeta<T>
}

export default function TelecommunicationsSupplyLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TelecommunicationsSupplyLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TelecommunicationsSupplyLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TelecommunicationsSupplyLineFieldMeta.ID}
          />

          <TextDisplay
            label="Phone Number"
            value={value.PhoneNumber?.[0]}
            meta={TelecommunicationsSupplyLineFieldMeta.PhoneNumber}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TelecommunicationsSupplyLineFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TelecommunicationsSupplyLineFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={TelecommunicationsSupplyLineFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={TelecommunicationsSupplyLineFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ExchangeRate"
            label="Exchange Rate"
            items={value.ExchangeRate}
            meta={TelecommunicationsSupplyLineFieldMeta.ExchangeRate} 
            itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
              <ExchangeRateDisplay
                key={key}
                label="Exchange Rate"
                value={itemValue}
                meta={TelecommunicationsSupplyLineFieldMeta.ExchangeRate}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={TelecommunicationsSupplyLineFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={TelecommunicationsSupplyLineFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={TelecommunicationsSupplyLineFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={TelecommunicationsSupplyLineFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TelecommunicationsService"
            label="Telecommunications Service"
            items={value.TelecommunicationsService}
            meta={TelecommunicationsSupplyLineFieldMeta.TelecommunicationsService} 
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
