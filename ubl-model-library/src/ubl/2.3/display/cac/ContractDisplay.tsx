import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Contract } from  '../../model/cac/Contract'
import { ContractFieldMeta } from  '../../meta/cac/ContractMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Contract | undefined
  meta: FieldMeta<T>
}

export default function ContractDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Contract">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ContractFieldMeta.ID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ContractFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ContractFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Nomination Date"
            value={value.NominationDate?.[0]}
            meta={ContractFieldMeta.NominationDate}
          />

          <TimeDisplay
            label="Nomination Time"
            value={value.NominationTime?.[0]}
            meta={ContractFieldMeta.NominationTime}
          />

          <CodeDisplay
            label="Contract Type Code"
            value={value.ContractTypeCode?.[0]}
            meta={ContractFieldMeta.ContractTypeCode}
          />

          <TextDisplay
            label="Contract Type"
            value={value.ContractType?.[0]}
            meta={ContractFieldMeta.ContractType}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ContractFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ContractFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={ContractFieldMeta.VersionID}
          />

          <CodeDisplay
            label="Modification Reason Code"
            value={value.ModificationReasonCode?.[0]}
            meta={ContractFieldMeta.ModificationReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ModificationReasonDescription"
            label="Modification Reason Description"
            items={value.ModificationReasonDescription}
            meta={ContractFieldMeta.ModificationReasonDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Modification Reason Description"
                value={itemValue}
                meta={ContractFieldMeta.ModificationReasonDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ContractFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ContractFieldMeta.Description}
              />
            }
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={ContractFieldMeta.ValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ContractDocumentReference"
            label="Contract Document Reference"
            items={value.ContractDocumentReference}
            meta={ContractFieldMeta.ContractDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Contract Document Reference"
                value={itemValue}
                meta={ContractFieldMeta.ContractDocumentReference}
              />
            }
          />

          <PeriodDisplay
            label="Nomination Period"
            value={value.NominationPeriod?.[0]}
            meta={ContractFieldMeta.NominationPeriod}
          />

          <DeliveryDisplay
            label="Contractual Delivery"
            value={value.ContractualDelivery?.[0]}
            meta={ContractFieldMeta.ContractualDelivery}
          />
        </div>
    </div>
  )
}
