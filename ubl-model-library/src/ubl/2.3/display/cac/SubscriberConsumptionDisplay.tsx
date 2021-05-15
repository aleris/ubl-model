import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: SubscriberConsumption | undefined
  meta: FieldMeta<T>
}

export default function SubscriberConsumptionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SubscriberConsumption">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SubscriberConsumptionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Consumption Identifier"
            value={value.ConsumptionID?.[0]}
            meta={SubscriberConsumptionFieldMeta.ConsumptionID}
          />

          <CodeDisplay
            label="Specification Type Code"
            value={value.SpecificationTypeCode?.[0]}
            meta={SubscriberConsumptionFieldMeta.SpecificationTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={SubscriberConsumptionFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={SubscriberConsumptionFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Total Metered Quantity"
            value={value.TotalMeteredQuantity?.[0]}
            meta={SubscriberConsumptionFieldMeta.TotalMeteredQuantity}
          />

          <PartyDisplay
            label="Subscriber Party"
            value={value.SubscriberParty?.[0]}
            meta={SubscriberConsumptionFieldMeta.SubscriberParty}
          />

          <ConsumptionPointDisplay
            label="Utility Consumption Point"
            value={value.UtilityConsumptionPoint?.[0]}
            meta={SubscriberConsumptionFieldMeta.UtilityConsumptionPoint}
          />

          <ElementListDisplay
            className="ubl-cac ubl-OnAccountPayment"
            label="On Account Payment"
            items={value.OnAccountPayment}
            meta={SubscriberConsumptionFieldMeta.OnAccountPayment} 
            itemDisplay={ (itemValue: OnAccountPayment, key: string | number) =>
              <OnAccountPaymentDisplay
                key={key}
                label="On Account Payment"
                value={itemValue}
                meta={SubscriberConsumptionFieldMeta.OnAccountPayment}
              />
            }
          />

          <ConsumptionDisplay
            label="Consumption"
            value={value.Consumption?.[0]}
            meta={SubscriberConsumptionFieldMeta.Consumption}
          />

          <ElementListDisplay
            className="ubl-cac ubl-SupplierConsumption"
            label="Supplier Consumption"
            items={value.SupplierConsumption}
            meta={SubscriberConsumptionFieldMeta.SupplierConsumption} 
            itemDisplay={ (itemValue: SupplierConsumption, key: string | number) =>
              <SupplierConsumptionDisplay
                key={key}
                label="Supplier Consumption"
                value={itemValue}
                meta={SubscriberConsumptionFieldMeta.SupplierConsumption}
              />
            }
          />
        </div>
    </div>
  )
}
