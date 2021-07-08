import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BillingReference } from  '../../model/cac/BillingReference'
import { BillingReferenceField, BillingReferenceFieldMeta, BillingReferenceTypeName } from  '../../meta/cac/BillingReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { BillingReferenceLineDisplay } from './BillingReferenceLineDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<BillingReference, void>
  billingReference: BillingReference[] | undefined
  renderContext: RenderContext
}

export const BillingReferenceSubElementsMap: SubElementsTemplatesMap<BillingReferenceField, BillingReference, void> = new Map([
    [
      BillingReferenceField.UBLExtensions,
      { meta: BillingReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={BillingReferenceField.UBLExtensions}
          meta={BillingReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.InvoiceDocumentReference,
      { meta: BillingReferenceFieldMeta.InvoiceDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillingReferenceField.InvoiceDocumentReference}
          meta={BillingReferenceFieldMeta.InvoiceDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.InvoiceDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.SelfBilledInvoiceDocumentReference,
      { meta: BillingReferenceFieldMeta.SelfBilledInvoiceDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillingReferenceField.SelfBilledInvoiceDocumentReference}
          meta={BillingReferenceFieldMeta.SelfBilledInvoiceDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.SelfBilledInvoiceDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.CreditNoteDocumentReference,
      { meta: BillingReferenceFieldMeta.CreditNoteDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillingReferenceField.CreditNoteDocumentReference}
          meta={BillingReferenceFieldMeta.CreditNoteDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CreditNoteDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.SelfBilledCreditNoteDocumentReference,
      { meta: BillingReferenceFieldMeta.SelfBilledCreditNoteDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillingReferenceField.SelfBilledCreditNoteDocumentReference}
          meta={BillingReferenceFieldMeta.SelfBilledCreditNoteDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.SelfBilledCreditNoteDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.DebitNoteDocumentReference,
      { meta: BillingReferenceFieldMeta.DebitNoteDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillingReferenceField.DebitNoteDocumentReference}
          meta={BillingReferenceFieldMeta.DebitNoteDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DebitNoteDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.ReminderDocumentReference,
      { meta: BillingReferenceFieldMeta.ReminderDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillingReferenceField.ReminderDocumentReference}
          meta={BillingReferenceFieldMeta.ReminderDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReminderDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.AdditionalDocumentReference,
      { meta: BillingReferenceFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillingReferenceField.AdditionalDocumentReference}
          meta={BillingReferenceFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceField.BillingReferenceLine,
      { meta: BillingReferenceFieldMeta.BillingReferenceLine,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceLineDisplay
          key={BillingReferenceField.BillingReferenceLine}
          meta={BillingReferenceFieldMeta.BillingReferenceLine}
          fieldConfig={fieldConfig}
          billingReferenceLine={value?.BillingReferenceLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function BillingReferenceDisplay<TFieldMeta>({ meta, fieldConfig, billingReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    BillingReferenceTypeName,
    meta,
    fieldConfig,
    billingReference,
    renderContext,
    BillingReferenceSubElementsMap,
  )
}
