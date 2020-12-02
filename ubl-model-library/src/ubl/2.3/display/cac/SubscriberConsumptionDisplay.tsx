import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SubscriberConsumption } from  '../../model/cac/SubscriberConsumption'
import { SubscriberConsumptionFieldMeta } from  '../../meta/cac/SubscriberConsumptionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ConsumptionDisplay from './ConsumptionDisplay'
import { Consumption } from '../../model/cac/Consumption'
import ConsumptionPointDisplay from './ConsumptionPointDisplay'
import { ConsumptionPoint } from '../../model/cac/ConsumptionPoint'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import OnAccountPaymentDisplay from './OnAccountPaymentDisplay'
import { OnAccountPayment } from '../../model/cac/OnAccountPayment'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import SupplierConsumptionDisplay from './SupplierConsumptionDisplay'
import { SupplierConsumption } from '../../model/cac/SupplierConsumption'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: SubscriberConsumption
  meta: FieldMeta<T>
}

export default function SubscriberConsumptionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SubscriberConsumptionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.ConsumptionID} 
          value={value.ConsumptionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SubscriberConsumptionFieldMeta.ConsumptionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.SpecificationTypeCode} 
          value={value.SpecificationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SubscriberConsumptionFieldMeta.SpecificationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SubscriberConsumptionFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.TotalMeteredQuantity} 
          value={value.TotalMeteredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={SubscriberConsumptionFieldMeta.TotalMeteredQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.SubscriberParty} 
          value={value.SubscriberParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SubscriberConsumptionFieldMeta.SubscriberParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.UtilityConsumptionPoint} 
          value={value.UtilityConsumptionPoint}
          itemDisplay={ (itemValue: ConsumptionPoint, key: string | number) =>
            <ConsumptionPointDisplay key={key} meta={SubscriberConsumptionFieldMeta.UtilityConsumptionPoint} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.OnAccountPayment} 
          value={value.OnAccountPayment}
          itemDisplay={ (itemValue: OnAccountPayment, key: string | number) =>
            <OnAccountPaymentDisplay key={key} meta={SubscriberConsumptionFieldMeta.OnAccountPayment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.Consumption} 
          value={value.Consumption}
          itemDisplay={ (itemValue: Consumption, key: string | number) =>
            <ConsumptionDisplay key={key} meta={SubscriberConsumptionFieldMeta.Consumption} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubscriberConsumptionFieldMeta.SupplierConsumption} 
          value={value.SupplierConsumption}
          itemDisplay={ (itemValue: SupplierConsumption, key: string | number) =>
            <SupplierConsumptionDisplay key={key} meta={SubscriberConsumptionFieldMeta.SupplierConsumption} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
