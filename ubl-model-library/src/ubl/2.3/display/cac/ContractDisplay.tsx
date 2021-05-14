import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Contract
  meta: FieldMeta<T>
}

export default function ContractDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Contract ubl-ContractType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Contract ubl-UBLExtensions"
          meta={ContractFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Identifier ubl-ID"
          meta={ContractFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ContractFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Date ubl-IssueDate"
          meta={ContractFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ContractFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Time ubl-IssueTime"
          meta={ContractFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ContractFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Date ubl-NominationDate"
          meta={ContractFieldMeta.NominationDate} 
          value={value.NominationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Nomination Date"
              value={itemValue}
              meta={ContractFieldMeta.NominationDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Time ubl-NominationTime"
          meta={ContractFieldMeta.NominationTime} 
          value={value.NominationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Nomination Time"
              value={itemValue}
              meta={ContractFieldMeta.NominationTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Code ubl-ContractTypeCode"
          meta={ContractFieldMeta.ContractTypeCode} 
          value={value.ContractTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Contract Type Code"
              value={itemValue}
              meta={ContractFieldMeta.ContractTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Text ubl-ContractType"
          meta={ContractFieldMeta.ContractType} 
          value={value.ContractType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Type"
              value={itemValue}
              meta={ContractFieldMeta.ContractType}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Contract ubl-Text ubl-Note"
          meta={ContractFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ContractFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Identifier ubl-VersionID"
          meta={ContractFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={ContractFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contract ubl-Code ubl-ModificationReasonCode"
          meta={ContractFieldMeta.ModificationReasonCode} 
          value={value.ModificationReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Modification Reason Code"
              value={itemValue}
              meta={ContractFieldMeta.ModificationReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Contract ubl-Text ubl-ModificationReasonDescription"
          meta={ContractFieldMeta.ModificationReasonDescription} 
          value={value.ModificationReasonDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Modification Reason Description"
              value={itemValue}
              meta={ContractFieldMeta.ModificationReasonDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Contract ubl-Text ubl-Description"
          meta={ContractFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ContractFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Contract ubl-Period ubl-ValidityPeriod"
          meta={ContractFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={ContractFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Contract ubl-DocumentReference ubl-ContractDocumentReference"
          meta={ContractFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Contract Document Reference"
              value={itemValue}
              meta={ContractFieldMeta.ContractDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Contract ubl-Period ubl-NominationPeriod"
          meta={ContractFieldMeta.NominationPeriod} 
          value={value.NominationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Nomination Period"
              value={itemValue}
              meta={ContractFieldMeta.NominationPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Contract ubl-Delivery ubl-ContractualDelivery"
          meta={ContractFieldMeta.ContractualDelivery} 
          value={value.ContractualDelivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Contractual Delivery"
              value={itemValue}
              meta={ContractFieldMeta.ContractualDelivery}
            />
          }
        />
        </div>
    </div>
  )
}
