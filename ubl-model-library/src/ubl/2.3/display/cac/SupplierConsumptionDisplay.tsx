import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SupplierConsumption
  meta: FieldMeta<T>
}

export default function SupplierConsumptionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SupplierConsumption ubl-SupplierConsumptionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SupplierConsumption ubl-UBLExtensions"
          meta={SupplierConsumptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SupplierConsumptionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SupplierConsumption ubl-Text ubl-Description"
          meta={SupplierConsumptionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={SupplierConsumptionFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierConsumption ubl-Party ubl-UtilitySupplierParty"
          meta={SupplierConsumptionFieldMeta.UtilitySupplierParty} 
          value={value.UtilitySupplierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Utility Supplier Party"
              value={itemValue}
              meta={SupplierConsumptionFieldMeta.UtilitySupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierConsumption ubl-Party ubl-UtilityCustomerParty"
          meta={SupplierConsumptionFieldMeta.UtilityCustomerParty} 
          value={value.UtilityCustomerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Utility Customer Party"
              value={itemValue}
              meta={SupplierConsumptionFieldMeta.UtilityCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierConsumption ubl-Consumption"
          meta={SupplierConsumptionFieldMeta.Consumption} 
          value={value.Consumption}
          itemDisplay={ (itemValue: Consumption, key: string | number) =>
            <ConsumptionDisplay
              key={key}
              label="Consumption"
              value={itemValue}
              meta={SupplierConsumptionFieldMeta.Consumption}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierConsumption ubl-Contract"
          meta={SupplierConsumptionFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Contract"
              value={itemValue}
              meta={SupplierConsumptionFieldMeta.Contract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SupplierConsumption ubl-ConsumptionLine"
          meta={SupplierConsumptionFieldMeta.ConsumptionLine} 
          value={value.ConsumptionLine}
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
