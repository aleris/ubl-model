import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TradeFinancing
  meta: FieldMeta<T>
}

export default function TradeFinancingDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TradeFinancingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TradeFinancingFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeFinancingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TradeFinancingFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeFinancingFieldMeta.FinancingInstrumentCode} 
          value={value.FinancingInstrumentCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TradeFinancingFieldMeta.FinancingInstrumentCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeFinancingFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TradeFinancingFieldMeta.ContractDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeFinancingFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TradeFinancingFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeFinancingFieldMeta.FinancingParty} 
          value={value.FinancingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TradeFinancingFieldMeta.FinancingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeFinancingFieldMeta.FinancingFinancialAccount} 
          value={value.FinancingFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay key={key} meta={TradeFinancingFieldMeta.FinancingFinancialAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeFinancingFieldMeta.Clause} 
          value={value.Clause}
          itemDisplay={ (itemValue: Clause, key: string | number) =>
            <ClauseDisplay key={key} meta={TradeFinancingFieldMeta.Clause} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
