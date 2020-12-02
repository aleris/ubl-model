import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BillingReference } from  '../../model/cac/BillingReference'
import { BillingReferenceFieldMeta } from  '../../meta/cac/BillingReferenceMeta'
import BillingReferenceLineDisplay from './BillingReferenceLineDisplay'
import { BillingReferenceLine } from '../../model/cac/BillingReferenceLine'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: BillingReference
  meta: FieldMeta<T>
}

export default function BillingReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={BillingReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={BillingReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.InvoiceDocumentReference} 
          value={value.InvoiceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillingReferenceFieldMeta.InvoiceDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.SelfBilledInvoiceDocumentReference} 
          value={value.SelfBilledInvoiceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillingReferenceFieldMeta.SelfBilledInvoiceDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.CreditNoteDocumentReference} 
          value={value.CreditNoteDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillingReferenceFieldMeta.CreditNoteDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.SelfBilledCreditNoteDocumentReference} 
          value={value.SelfBilledCreditNoteDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillingReferenceFieldMeta.SelfBilledCreditNoteDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.DebitNoteDocumentReference} 
          value={value.DebitNoteDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillingReferenceFieldMeta.DebitNoteDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.ReminderDocumentReference} 
          value={value.ReminderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillingReferenceFieldMeta.ReminderDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillingReferenceFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillingReferenceFieldMeta.BillingReferenceLine} 
          value={value.BillingReferenceLine}
          itemDisplay={ (itemValue: BillingReferenceLine, key: string | number) =>
            <BillingReferenceLineDisplay key={key} meta={BillingReferenceFieldMeta.BillingReferenceLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
