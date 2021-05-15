import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradeFinancing } from  '../../model/cac/TradeFinancing'
import { TradeFinancingFieldMeta } from  '../../meta/cac/TradeFinancingMeta'
import ClauseDisplay from './ClauseDisplay'
import { Clause } from '../../model/cac/Clause'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import FinancialAccountDisplay from './FinancialAccountDisplay'
import { FinancialAccount } from '../../model/cac/FinancialAccount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TradeFinancing | undefined
  meta: FieldMeta<T>
}

export default function TradeFinancingDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TradeFinancing">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TradeFinancingFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TradeFinancingFieldMeta.ID}
          />

          <CodeDisplay
            label="Financing Instrument Code"
            value={value.FinancingInstrumentCode?.[0]}
            meta={TradeFinancingFieldMeta.FinancingInstrumentCode}
          />

          <DocumentReferenceDisplay
            label="Contract Document Reference"
            value={value.ContractDocumentReference?.[0]}
            meta={TradeFinancingFieldMeta.ContractDocumentReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={TradeFinancingFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={TradeFinancingFieldMeta.DocumentReference}
              />
            }
          />

          <PartyDisplay
            label="Financing Party"
            value={value.FinancingParty?.[0]}
            meta={TradeFinancingFieldMeta.FinancingParty}
          />

          <FinancialAccountDisplay
            label="Financing Financial Account"
            value={value.FinancingFinancialAccount?.[0]}
            meta={TradeFinancingFieldMeta.FinancingFinancialAccount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Clause"
            label="Clause"
            items={value.Clause}
            meta={TradeFinancingFieldMeta.Clause} 
            itemDisplay={ (itemValue: Clause, key: string | number) =>
              <ClauseDisplay
                key={key}
                label="Clause"
                value={itemValue}
                meta={TradeFinancingFieldMeta.Clause}
              />
            }
          />
        </div>
    </div>
  )
}
