import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SubscriberConsumption
  meta: FieldMeta<T>
}

export default function SubscriberConsumptionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SubscriberConsumption ubl-SubscriberConsumptionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SubscriberConsumption ubl-UBLExtensions"
          meta={SubscriberConsumptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubscriberConsumption ubl-Identifier ubl-ConsumptionID"
          meta={SubscriberConsumptionFieldMeta.ConsumptionID} 
          value={value.ConsumptionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Consumption Identifier"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.ConsumptionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubscriberConsumption ubl-Code ubl-SpecificationTypeCode"
          meta={SubscriberConsumptionFieldMeta.SpecificationTypeCode} 
          value={value.SpecificationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Specification Type Code"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.SpecificationTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SubscriberConsumption ubl-Text ubl-Note"
          meta={SubscriberConsumptionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubscriberConsumption ubl-Quantity ubl-TotalMeteredQuantity"
          meta={SubscriberConsumptionFieldMeta.TotalMeteredQuantity} 
          value={value.TotalMeteredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Metered Quantity"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.TotalMeteredQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SubscriberConsumption ubl-Party ubl-SubscriberParty"
          meta={SubscriberConsumptionFieldMeta.SubscriberParty} 
          value={value.SubscriberParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Subscriber Party"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.SubscriberParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SubscriberConsumption ubl-ConsumptionPoint ubl-UtilityConsumptionPoint"
          meta={SubscriberConsumptionFieldMeta.UtilityConsumptionPoint} 
          value={value.UtilityConsumptionPoint}
          itemDisplay={ (itemValue: ConsumptionPoint, key: string | number) =>
            <ConsumptionPointDisplay
              key={key}
              label="Utility Consumption Point"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.UtilityConsumptionPoint}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SubscriberConsumption ubl-OnAccountPayment"
          meta={SubscriberConsumptionFieldMeta.OnAccountPayment} 
          value={value.OnAccountPayment}
          itemDisplay={ (itemValue: OnAccountPayment, key: string | number) =>
            <OnAccountPaymentDisplay
              key={key}
              label="On Account Payment"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.OnAccountPayment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SubscriberConsumption ubl-Consumption"
          meta={SubscriberConsumptionFieldMeta.Consumption} 
          value={value.Consumption}
          itemDisplay={ (itemValue: Consumption, key: string | number) =>
            <ConsumptionDisplay
              key={key}
              label="Consumption"
              value={itemValue}
              meta={SubscriberConsumptionFieldMeta.Consumption}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SubscriberConsumption ubl-SupplierConsumption"
          meta={SubscriberConsumptionFieldMeta.SupplierConsumption} 
          value={value.SupplierConsumption}
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
