import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CompletedTask } from  '../../model/cac/CompletedTask'
import { CompletedTaskFieldMeta } from  '../../meta/cac/CompletedTaskMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CustomerPartyDisplay from './CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import EvidenceSuppliedDisplay from './EvidenceSuppliedDisplay'
import { EvidenceSupplied } from '../../model/cac/EvidenceSupplied'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CompletedTask
  meta: FieldMeta<T>
}

export default function CompletedTaskDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CompletedTaskFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CompletedTaskFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CompletedTaskFieldMeta.AnnualAverageAmount} 
          value={value.AnnualAverageAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={CompletedTaskFieldMeta.AnnualAverageAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CompletedTaskFieldMeta.TotalTaskAmount} 
          value={value.TotalTaskAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={CompletedTaskFieldMeta.TotalTaskAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CompletedTaskFieldMeta.PartyCapacityAmount} 
          value={value.PartyCapacityAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={CompletedTaskFieldMeta.PartyCapacityAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CompletedTaskFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CompletedTaskFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CompletedTaskFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
          itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
            <EvidenceSuppliedDisplay key={key} meta={CompletedTaskFieldMeta.EvidenceSupplied} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CompletedTaskFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CompletedTaskFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CompletedTaskFieldMeta.RecipientCustomerParty} 
          value={value.RecipientCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CompletedTaskFieldMeta.RecipientCustomerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
