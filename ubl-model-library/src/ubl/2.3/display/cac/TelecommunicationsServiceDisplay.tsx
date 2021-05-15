import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TelecommunicationsService } from  '../../model/cac/TelecommunicationsService'
import { TelecommunicationsServiceFieldMeta } from  '../../meta/cac/TelecommunicationsServiceMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DutyDisplay from './DutyDisplay'
import { Duty } from '../../model/cac/Duty'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TelecommunicationsService | undefined
  meta: FieldMeta<T>
}

export default function TelecommunicationsServiceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TelecommunicationsService">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TelecommunicationsServiceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TelecommunicationsServiceFieldMeta.ID}
          />

          <DateDisplay
            label="Call Date"
            value={value.CallDate?.[0]}
            meta={TelecommunicationsServiceFieldMeta.CallDate}
          />

          <TimeDisplay
            label="Call Time"
            value={value.CallTime?.[0]}
            meta={TelecommunicationsServiceFieldMeta.CallTime}
          />

          <TextDisplay
            label="Service Number Called"
            value={value.ServiceNumberCalled?.[0]}
            meta={TelecommunicationsServiceFieldMeta.ServiceNumberCalled}
          />

          <TextDisplay
            label="Telecommunications Service Category"
            value={value.TelecommunicationsServiceCategory?.[0]}
            meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategory}
          />

          <CodeDisplay
            label="Telecommunications Service Category Code"
            value={value.TelecommunicationsServiceCategoryCode?.[0]}
            meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategoryCode}
          />

          <TextDisplay
            label="Movie Title"
            value={value.MovieTitle?.[0]}
            meta={TelecommunicationsServiceFieldMeta.MovieTitle}
          />

          <TextDisplay
            label="Roaming Partner Name"
            value={value.RoamingPartnerName?.[0]}
            meta={TelecommunicationsServiceFieldMeta.RoamingPartnerName}
          />

          <TextDisplay
            label="Pay Per View"
            value={value.PayPerView?.[0]}
            meta={TelecommunicationsServiceFieldMeta.PayPerView}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={TelecommunicationsServiceFieldMeta.Quantity}
          />

          <TextDisplay
            label="Telecommunications Service Call"
            value={value.TelecommunicationsServiceCall?.[0]}
            meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCall}
          />

          <CodeDisplay
            label="Telecommunications Service Call Code"
            value={value.TelecommunicationsServiceCallCode?.[0]}
            meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCallCode}
          />

          <AmountDisplay
            label="Call Base Amount"
            value={value.CallBaseAmount?.[0]}
            meta={TelecommunicationsServiceFieldMeta.CallBaseAmount}
          />

          <AmountDisplay
            label="Call Extension Amount"
            value={value.CallExtensionAmount?.[0]}
            meta={TelecommunicationsServiceFieldMeta.CallExtensionAmount}
          />

          <PriceDisplay
            label="Price"
            value={value.Price?.[0]}
            meta={TelecommunicationsServiceFieldMeta.Price}
          />

          <CountryDisplay
            label="Country"
            value={value.Country?.[0]}
            meta={TelecommunicationsServiceFieldMeta.Country}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ExchangeRate"
            label="Exchange Rate"
            items={value.ExchangeRate}
            meta={TelecommunicationsServiceFieldMeta.ExchangeRate} 
            itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
              <ExchangeRateDisplay
                key={key}
                label="Exchange Rate"
                value={itemValue}
                meta={TelecommunicationsServiceFieldMeta.ExchangeRate}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={TelecommunicationsServiceFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={TelecommunicationsServiceFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={TelecommunicationsServiceFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={TelecommunicationsServiceFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Duty ubl-CallDuty"
            label="Call Duty"
            items={value.CallDuty}
            meta={TelecommunicationsServiceFieldMeta.CallDuty} 
            itemDisplay={ (itemValue: Duty, key: string | number) =>
              <DutyDisplay
                key={key}
                label="Call Duty"
                value={itemValue}
                meta={TelecommunicationsServiceFieldMeta.CallDuty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Duty ubl-TimeDuty"
            label="Time Duty"
            items={value.TimeDuty}
            meta={TelecommunicationsServiceFieldMeta.TimeDuty} 
            itemDisplay={ (itemValue: Duty, key: string | number) =>
              <DutyDisplay
                key={key}
                label="Time Duty"
                value={itemValue}
                meta={TelecommunicationsServiceFieldMeta.TimeDuty}
              />
            }
          />
        </div>
    </div>
  )
}
