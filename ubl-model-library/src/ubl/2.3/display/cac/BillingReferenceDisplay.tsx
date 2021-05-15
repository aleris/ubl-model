import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: BillingReference | undefined
  meta: FieldMeta<T>
}

export default function BillingReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-BillingReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={BillingReferenceFieldMeta.UBLExtensions}
          />

          <DocumentReferenceDisplay
            label="Invoice Document Reference"
            value={value.InvoiceDocumentReference?.[0]}
            meta={BillingReferenceFieldMeta.InvoiceDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Self Billed Invoice Document Reference"
            value={value.SelfBilledInvoiceDocumentReference?.[0]}
            meta={BillingReferenceFieldMeta.SelfBilledInvoiceDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Credit Note Document Reference"
            value={value.CreditNoteDocumentReference?.[0]}
            meta={BillingReferenceFieldMeta.CreditNoteDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Self Billed Credit Note Document Reference"
            value={value.SelfBilledCreditNoteDocumentReference?.[0]}
            meta={BillingReferenceFieldMeta.SelfBilledCreditNoteDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Debit Note Document Reference"
            value={value.DebitNoteDocumentReference?.[0]}
            meta={BillingReferenceFieldMeta.DebitNoteDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Reminder Document Reference"
            value={value.ReminderDocumentReference?.[0]}
            meta={BillingReferenceFieldMeta.ReminderDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Additional Document Reference"
            value={value.AdditionalDocumentReference?.[0]}
            meta={BillingReferenceFieldMeta.AdditionalDocumentReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-BillingReferenceLine"
            label="Billing Reference Line"
            items={value.BillingReferenceLine}
            meta={BillingReferenceFieldMeta.BillingReferenceLine} 
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
