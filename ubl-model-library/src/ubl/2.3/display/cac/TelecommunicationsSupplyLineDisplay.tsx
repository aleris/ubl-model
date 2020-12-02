import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TelecommunicationsSupplyLine
  meta: FieldMeta<T>
}

export default function TelecommunicationsSupplyLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.PhoneNumber} 
          value={value.PhoneNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.PhoneNumber} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.ExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TelecommunicationsSupplyLineFieldMeta.TelecommunicationsService} 
          value={value.TelecommunicationsService}
          itemDisplay={ (itemValue: TelecommunicationsService, key: string | number) =>
            <TelecommunicationsServiceDisplay key={key} meta={TelecommunicationsSupplyLineFieldMeta.TelecommunicationsService} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
