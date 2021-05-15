import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SupplierConsumption } from  '../../model/cac/SupplierConsumption'
import { SupplierConsumptionFieldMeta } from  '../../meta/cac/SupplierConsumptionMeta'
import ConsumptionDisplay from './ConsumptionDisplay'
import { Consumption } from '../../model/cac/Consumption'
import ConsumptionLineDisplay from './ConsumptionLineDisplay'
import { ConsumptionLine } from '../../model/cac/ConsumptionLine'
import ContractDisplay from './ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: SupplierConsumption | undefined
  meta: FieldMeta<T>
}

export default function SupplierConsumptionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SupplierConsumption">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SupplierConsumptionFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={SupplierConsumptionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={SupplierConsumptionFieldMeta.Description}
              />
            }
          />

          <PartyDisplay
            label="Utility Supplier Party"
            value={value.UtilitySupplierParty?.[0]}
            meta={SupplierConsumptionFieldMeta.UtilitySupplierParty}
          />

          <PartyDisplay
            label="Utility Customer Party"
            value={value.UtilityCustomerParty?.[0]}
            meta={SupplierConsumptionFieldMeta.UtilityCustomerParty}
          />

          <ConsumptionDisplay
            label="Consumption"
            value={value.Consumption?.[0]}
            meta={SupplierConsumptionFieldMeta.Consumption}
          />

          <ContractDisplay
            label="Contract"
            value={value.Contract?.[0]}
            meta={SupplierConsumptionFieldMeta.Contract}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ConsumptionLine"
            label="Consumption Line"
            items={value.ConsumptionLine}
            meta={SupplierConsumptionFieldMeta.ConsumptionLine} 
            itemDisplay={ (itemValue: ConsumptionLine, key: string | number) =>
              <ConsumptionLineDisplay
                key={key}
                label="Consumption Line"
                value={itemValue}
                meta={SupplierConsumptionFieldMeta.ConsumptionLine}
              />
            }
          />
        </div>
    </div>
  )
}
