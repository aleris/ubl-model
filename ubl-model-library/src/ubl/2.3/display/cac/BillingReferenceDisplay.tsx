import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BillingReference } from  '../../model/cac/BillingReference'
import { BillingReferenceFieldMeta } from  '../../meta/cac/BillingReferenceMeta'
import BillingReferenceLineDisplay from './BillingReferenceLineDisplay'
import { BillingReferenceLine } from '../../model/cac/BillingReferenceLine'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: BillingReference
  meta: FieldMeta<T>
}

export default function BillingReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-BillingReference ubl-BillingReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-BillingReference ubl-UBLExtensions"
          meta={BillingReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={BillingReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillingReference ubl-DocumentReference ubl-InvoiceDocumentReference"
          meta={BillingReferenceFieldMeta.InvoiceDocumentReference} 
          value={value.InvoiceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Invoice Document Reference"
              value={itemValue}
              meta={BillingReferenceFieldMeta.InvoiceDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillingReference ubl-DocumentReference ubl-SelfBilledInvoiceDocumentReference"
          meta={BillingReferenceFieldMeta.SelfBilledInvoiceDocumentReference} 
          value={value.SelfBilledInvoiceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Self Billed Invoice Document Reference"
              value={itemValue}
              meta={BillingReferenceFieldMeta.SelfBilledInvoiceDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillingReference ubl-DocumentReference ubl-CreditNoteDocumentReference"
          meta={BillingReferenceFieldMeta.CreditNoteDocumentReference} 
          value={value.CreditNoteDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Credit Note Document Reference"
              value={itemValue}
              meta={BillingReferenceFieldMeta.CreditNoteDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillingReference ubl-DocumentReference ubl-SelfBilledCreditNoteDocumentReference"
          meta={BillingReferenceFieldMeta.SelfBilledCreditNoteDocumentReference} 
          value={value.SelfBilledCreditNoteDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Self Billed Credit Note Document Reference"
              value={itemValue}
              meta={BillingReferenceFieldMeta.SelfBilledCreditNoteDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillingReference ubl-DocumentReference ubl-DebitNoteDocumentReference"
          meta={BillingReferenceFieldMeta.DebitNoteDocumentReference} 
          value={value.DebitNoteDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Debit Note Document Reference"
              value={itemValue}
              meta={BillingReferenceFieldMeta.DebitNoteDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillingReference ubl-DocumentReference ubl-ReminderDocumentReference"
          meta={BillingReferenceFieldMeta.ReminderDocumentReference} 
          value={value.ReminderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Reminder Document Reference"
              value={itemValue}
              meta={BillingReferenceFieldMeta.ReminderDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillingReference ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={BillingReferenceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={BillingReferenceFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BillingReference ubl-BillingReferenceLine"
          meta={BillingReferenceFieldMeta.BillingReferenceLine} 
          value={value.BillingReferenceLine}
          itemDisplay={ (itemValue: BillingReferenceLine, key: string | number) =>
            <BillingReferenceLineDisplay
              key={key}
              label="Billing Reference Line"
              value={itemValue}
              meta={BillingReferenceFieldMeta.BillingReferenceLine}
            />
          }
        />
        </div>
    </div>
  )
}
