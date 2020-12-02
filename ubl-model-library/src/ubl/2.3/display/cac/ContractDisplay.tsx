import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Contract
  meta: FieldMeta<T>
}

export default function ContractDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ContractFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ContractFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.NominationDate} 
          value={value.NominationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ContractFieldMeta.NominationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.NominationTime} 
          value={value.NominationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ContractFieldMeta.NominationTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ContractTypeCode} 
          value={value.ContractTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractFieldMeta.ContractTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ContractType} 
          value={value.ContractType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractFieldMeta.ContractType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ModificationReasonCode} 
          value={value.ModificationReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractFieldMeta.ModificationReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ModificationReasonDescription} 
          value={value.ModificationReasonDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractFieldMeta.ModificationReasonDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ContractFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ContractFieldMeta.ContractDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.NominationPeriod} 
          value={value.NominationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ContractFieldMeta.NominationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractFieldMeta.ContractualDelivery} 
          value={value.ContractualDelivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={ContractFieldMeta.ContractualDelivery} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
