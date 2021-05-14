import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TradeFinancing
  meta: FieldMeta<T>
}

export default function TradeFinancingDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TradeFinancing ubl-TradeFinancingType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TradeFinancing ubl-UBLExtensions"
          meta={TradeFinancingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TradeFinancingFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeFinancing ubl-Identifier ubl-ID"
          meta={TradeFinancingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TradeFinancingFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeFinancing ubl-Code ubl-FinancingInstrumentCode"
          meta={TradeFinancingFieldMeta.FinancingInstrumentCode} 
          value={value.FinancingInstrumentCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Financing Instrument Code"
              value={itemValue}
              meta={TradeFinancingFieldMeta.FinancingInstrumentCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeFinancing ubl-DocumentReference ubl-ContractDocumentReference"
          meta={TradeFinancingFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Contract Document Reference"
              value={itemValue}
              meta={TradeFinancingFieldMeta.ContractDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TradeFinancing ubl-DocumentReference"
          meta={TradeFinancingFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={TradeFinancingFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeFinancing ubl-Party ubl-FinancingParty"
          meta={TradeFinancingFieldMeta.FinancingParty} 
          value={value.FinancingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Financing Party"
              value={itemValue}
              meta={TradeFinancingFieldMeta.FinancingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeFinancing ubl-FinancialAccount ubl-FinancingFinancialAccount"
          meta={TradeFinancingFieldMeta.FinancingFinancialAccount} 
          value={value.FinancingFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay
              key={key}
              label="Financing Financial Account"
              value={itemValue}
              meta={TradeFinancingFieldMeta.FinancingFinancialAccount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TradeFinancing ubl-Clause"
          meta={TradeFinancingFieldMeta.Clause} 
          value={value.Clause}
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
