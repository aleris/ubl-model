import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: CompletedTask
  meta: FieldMeta<T>
}

export default function CompletedTaskDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CompletedTask ubl-CompletedTaskType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CompletedTask ubl-UBLExtensions"
          meta={CompletedTaskFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CompletedTaskFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CompletedTask ubl-Amount ubl-AnnualAverageAmount"
          meta={CompletedTaskFieldMeta.AnnualAverageAmount} 
          value={value.AnnualAverageAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Annual Average"
              value={itemValue}
              meta={CompletedTaskFieldMeta.AnnualAverageAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CompletedTask ubl-Amount ubl-TotalTaskAmount"
          meta={CompletedTaskFieldMeta.TotalTaskAmount} 
          value={value.TotalTaskAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Task"
              value={itemValue}
              meta={CompletedTaskFieldMeta.TotalTaskAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CompletedTask ubl-Amount ubl-PartyCapacityAmount"
          meta={CompletedTaskFieldMeta.PartyCapacityAmount} 
          value={value.PartyCapacityAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Party Capacity"
              value={itemValue}
              meta={CompletedTaskFieldMeta.PartyCapacityAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CompletedTask ubl-Text ubl-Description"
          meta={CompletedTaskFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CompletedTaskFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CompletedTask ubl-EvidenceSupplied"
          meta={CompletedTaskFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
          itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
            <EvidenceSuppliedDisplay
              key={key}
              label="Evidence Supplied"
              value={itemValue}
              meta={CompletedTaskFieldMeta.EvidenceSupplied}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CompletedTask ubl-Period"
          meta={CompletedTaskFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={CompletedTaskFieldMeta.Period}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CompletedTask ubl-CustomerParty ubl-RecipientCustomerParty"
          meta={CompletedTaskFieldMeta.RecipientCustomerParty} 
          value={value.RecipientCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Recipient Customer Party"
              value={itemValue}
              meta={CompletedTaskFieldMeta.RecipientCustomerParty}
            />
          }
        />
        </div>
    </div>
  )
}
