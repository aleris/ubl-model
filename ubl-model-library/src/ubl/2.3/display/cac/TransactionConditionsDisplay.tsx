import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransactionConditions } from  '../../model/cac/TransactionConditions'
import { TransactionConditionsFieldMeta } from  '../../meta/cac/TransactionConditionsMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransactionConditions
  meta: FieldMeta<T>
}

export default function TransactionConditionsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransactionConditions ubl-TransactionConditionsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransactionConditions ubl-UBLExtensions"
          meta={TransactionConditionsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransactionConditionsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransactionConditions ubl-Identifier ubl-ID"
          meta={TransactionConditionsFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransactionConditionsFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransactionConditions ubl-Code ubl-ActionCode"
          meta={TransactionConditionsFieldMeta.ActionCode} 
          value={value.ActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Action Code"
              value={itemValue}
              meta={TransactionConditionsFieldMeta.ActionCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransactionConditions ubl-Text ubl-Description"
          meta={TransactionConditionsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TransactionConditionsFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransactionConditions ubl-DocumentReference"
          meta={TransactionConditionsFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={TransactionConditionsFieldMeta.DocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
