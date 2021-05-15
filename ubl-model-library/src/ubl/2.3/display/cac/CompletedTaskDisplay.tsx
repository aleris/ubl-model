import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: CompletedTask | undefined
  meta: FieldMeta<T>
}

export default function CompletedTaskDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CompletedTask">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CompletedTaskFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Annual Average"
            value={value.AnnualAverageAmount?.[0]}
            meta={CompletedTaskFieldMeta.AnnualAverageAmount}
          />

          <AmountDisplay
            label="Total Task"
            value={value.TotalTaskAmount?.[0]}
            meta={CompletedTaskFieldMeta.TotalTaskAmount}
          />

          <AmountDisplay
            label="Party Capacity"
            value={value.PartyCapacityAmount?.[0]}
            meta={CompletedTaskFieldMeta.PartyCapacityAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CompletedTaskFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CompletedTaskFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EvidenceSupplied"
            label="Evidence Supplied"
            items={value.EvidenceSupplied}
            meta={CompletedTaskFieldMeta.EvidenceSupplied} 
            itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
              <EvidenceSuppliedDisplay
                key={key}
                label="Evidence Supplied"
                value={itemValue}
                meta={CompletedTaskFieldMeta.EvidenceSupplied}
              />
            }
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={CompletedTaskFieldMeta.Period}
          />

          <CustomerPartyDisplay
            label="Recipient Customer Party"
            value={value.RecipientCustomerParty?.[0]}
            meta={CompletedTaskFieldMeta.RecipientCustomerParty}
          />
        </div>
    </div>
  )
}
