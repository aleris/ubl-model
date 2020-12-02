import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TelecommunicationsService
  meta: FieldMeta<T>
}

export default function TelecommunicationsServiceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TelecommunicationsServiceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TelecommunicationsServiceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.CallDate} 
          value={value.CallDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TelecommunicationsServiceFieldMeta.CallDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.CallTime} 
          value={value.CallTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TelecommunicationsServiceFieldMeta.CallTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.ServiceNumberCalled} 
          value={value.ServiceNumberCalled}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsServiceFieldMeta.ServiceNumberCalled} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategory} 
          value={value.TelecommunicationsServiceCategory}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategory} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategoryCode} 
          value={value.TelecommunicationsServiceCategoryCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCategoryCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.MovieTitle} 
          value={value.MovieTitle}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsServiceFieldMeta.MovieTitle} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.RoamingPartnerName} 
          value={value.RoamingPartnerName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsServiceFieldMeta.RoamingPartnerName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.PayPerView} 
          value={value.PayPerView}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsServiceFieldMeta.PayPerView} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TelecommunicationsServiceFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCall} 
          value={value.TelecommunicationsServiceCall}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCall} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCallCode} 
          value={value.TelecommunicationsServiceCallCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TelecommunicationsServiceFieldMeta.TelecommunicationsServiceCallCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.CallBaseAmount} 
          value={value.CallBaseAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TelecommunicationsServiceFieldMeta.CallBaseAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.CallExtensionAmount} 
          value={value.CallExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TelecommunicationsServiceFieldMeta.CallExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={TelecommunicationsServiceFieldMeta.Price} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.Country} 
          value={value.Country}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={TelecommunicationsServiceFieldMeta.Country} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={TelecommunicationsServiceFieldMeta.ExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={TelecommunicationsServiceFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={TelecommunicationsServiceFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.CallDuty} 
          value={value.CallDuty}
          itemDisplay={ (itemValue: Duty, key: string | number) =>
            <DutyDisplay key={key} meta={TelecommunicationsServiceFieldMeta.CallDuty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsServiceFieldMeta.TimeDuty} 
          value={value.TimeDuty}
          itemDisplay={ (itemValue: Duty, key: string | number) =>
            <DutyDisplay key={key} meta={TelecommunicationsServiceFieldMeta.TimeDuty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
