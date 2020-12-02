import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: SupplierConsumption
  meta: FieldMeta<T>
}

export default function SupplierConsumptionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SupplierConsumptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SupplierConsumptionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierConsumptionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SupplierConsumptionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierConsumptionFieldMeta.UtilitySupplierParty} 
          value={value.UtilitySupplierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SupplierConsumptionFieldMeta.UtilitySupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierConsumptionFieldMeta.UtilityCustomerParty} 
          value={value.UtilityCustomerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SupplierConsumptionFieldMeta.UtilityCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierConsumptionFieldMeta.Consumption} 
          value={value.Consumption}
          itemDisplay={ (itemValue: Consumption, key: string | number) =>
            <ConsumptionDisplay key={key} meta={SupplierConsumptionFieldMeta.Consumption} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierConsumptionFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={SupplierConsumptionFieldMeta.Contract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierConsumptionFieldMeta.ConsumptionLine} 
          value={value.ConsumptionLine}
          itemDisplay={ (itemValue: ConsumptionLine, key: string | number) =>
            <ConsumptionLineDisplay key={key} meta={SupplierConsumptionFieldMeta.ConsumptionLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
