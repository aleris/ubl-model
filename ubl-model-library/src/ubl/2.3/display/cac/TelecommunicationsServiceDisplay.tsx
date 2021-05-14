import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TelecommunicationsService
  meta: FieldMeta<T>
}

export default function TelecommunicationsServiceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TelecommunicationsService ubl-TelecommunicationsServiceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TelecommunicationsService ubl-UBLExtensions"
          meta={TelecommunicationsServiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Identifier ubl-ID"
          meta={TelecommunicationsServiceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Date ubl-CallDate"
          meta={TelecommunicationsServiceFieldMeta.CallDate} 
          value={value.CallDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Call Date"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.CallDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Time ubl-CallTime"
          meta={TelecommunicationsServiceFieldMeta.CallTime} 
          value={value.CallTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Call Time"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.CallTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Text ubl-ServiceNumberCalled"
          meta={TelecommunicationsServiceFieldMeta.ServiceNumberCalled} 
          value={value.ServiceNumberCalled}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Service Number Called"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.ServiceNumberCalled}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Text ubl-TelecommunicationsServiceCategory"
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategory} 
          value={value.TelecommunicationsServiceCategory}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Telecommunications Service Category"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategory}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Code ubl-TelecommunicationsServiceCategoryCode"
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategoryCode} 
          value={value.TelecommunicationsServiceCategoryCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Telecommunications Service Category Code"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategoryCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Text ubl-MovieTitle"
          meta={TelecommunicationsServiceFieldMeta.MovieTitle} 
          value={value.MovieTitle}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Movie Title"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.MovieTitle}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Text ubl-RoamingPartnerName"
          meta={TelecommunicationsServiceFieldMeta.RoamingPartnerName} 
          value={value.RoamingPartnerName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Roaming Partner Name"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.RoamingPartnerName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Text ubl-PayPerView"
          meta={TelecommunicationsServiceFieldMeta.PayPerView} 
          value={value.PayPerView}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Pay Per View"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.PayPerView}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Quantity"
          meta={TelecommunicationsServiceFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Text ubl-TelecommunicationsServiceCall"
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCall} 
          value={value.TelecommunicationsServiceCall}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Telecommunications Service Call"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCall}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Code ubl-TelecommunicationsServiceCallCode"
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCallCode} 
          value={value.TelecommunicationsServiceCallCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Telecommunications Service Call Code"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCallCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Amount ubl-CallBaseAmount"
          meta={TelecommunicationsServiceFieldMeta.CallBaseAmount} 
          value={value.CallBaseAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Call Base Amount"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.CallBaseAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TelecommunicationsService ubl-Amount ubl-CallExtensionAmount"
          meta={TelecommunicationsServiceFieldMeta.CallExtensionAmount} 
          value={value.CallExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Call Extension Amount"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.CallExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TelecommunicationsService ubl-Price"
          meta={TelecommunicationsServiceFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Price"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.Price}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TelecommunicationsService ubl-Country"
          meta={TelecommunicationsServiceFieldMeta.Country} 
          value={value.Country}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Country"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.Country}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsService ubl-ExchangeRate"
          meta={TelecommunicationsServiceFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Exchange Rate"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.ExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsService ubl-AllowanceCharge"
          meta={TelecommunicationsServiceFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsService ubl-TaxTotal"
          meta={TelecommunicationsServiceFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsService ubl-Duty ubl-CallDuty"
          meta={TelecommunicationsServiceFieldMeta.CallDuty} 
          value={value.CallDuty}
          itemDisplay={ (itemValue: Duty, key: string | number) =>
            <DutyDisplay
              key={key}
              label="Call Duty"
              value={itemValue}
              meta={TelecommunicationsServiceFieldMeta.CallDuty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TelecommunicationsService ubl-Duty ubl-TimeDuty"
          meta={TelecommunicationsServiceFieldMeta.TimeDuty} 
          value={value.TimeDuty}
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
