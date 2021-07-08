import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DebitNoteLine } from  '../../model/cac/DebitNoteLine'
import { DebitNoteLineField, DebitNoteLineFieldMeta, DebitNoteLineTypeName } from  '../../meta/cac/DebitNoteLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BillingReferenceDisplay } from './BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { PriceDisplay } from './PriceDisplay'
import { PricingReferenceDisplay } from './PricingReferenceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { ResponseDisplay } from './ResponseDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DebitNoteLine, void>
  debitNoteLine: DebitNoteLine[] | undefined
  renderContext: RenderContext
}

export const DebitNoteLineSubElementsMap: SubElementsTemplatesMap<DebitNoteLineField, DebitNoteLine, void> = new Map([
    [
      DebitNoteLineField.UBLExtensions,
      { meta: DebitNoteLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DebitNoteLineField.UBLExtensions}
          meta={DebitNoteLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.ID,
      { meta: DebitNoteLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteLineField.ID}
          meta={DebitNoteLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.UUID,
      { meta: DebitNoteLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteLineField.UUID}
          meta={DebitNoteLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.Note,
      { meta: DebitNoteLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DebitNoteLineField.Note}
          meta={DebitNoteLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.DebitedQuantity,
      { meta: DebitNoteLineFieldMeta.DebitedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DebitNoteLineField.DebitedQuantity}
          meta={DebitNoteLineFieldMeta.DebitedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.DebitedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.LineExtensionAmount,
      { meta: DebitNoteLineFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={DebitNoteLineField.LineExtensionAmount}
          meta={DebitNoteLineFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.TaxInclusiveLineExtensionAmount,
      { meta: DebitNoteLineFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={DebitNoteLineField.TaxInclusiveLineExtensionAmount}
          meta={DebitNoteLineFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.TaxPointDate,
      { meta: DebitNoteLineFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DebitNoteLineField.TaxPointDate}
          meta={DebitNoteLineFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.AccountingCostCode,
      { meta: DebitNoteLineFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteLineField.AccountingCostCode}
          meta={DebitNoteLineFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.AccountingCost,
      { meta: DebitNoteLineFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DebitNoteLineField.AccountingCost}
          meta={DebitNoteLineFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.PaymentPurposeCode,
      { meta: DebitNoteLineFieldMeta.PaymentPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteLineField.PaymentPurposeCode}
          meta={DebitNoteLineFieldMeta.PaymentPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.DiscrepancyResponse,
      { meta: DebitNoteLineFieldMeta.DiscrepancyResponse,
        template: ({value, renderContext, fieldConfig}) => <ResponseDisplay
          key={DebitNoteLineField.DiscrepancyResponse}
          meta={DebitNoteLineFieldMeta.DiscrepancyResponse}
          fieldConfig={fieldConfig}
          response={value?.DiscrepancyResponse}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.DespatchLineReference,
      { meta: DebitNoteLineFieldMeta.DespatchLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={DebitNoteLineField.DespatchLineReference}
          meta={DebitNoteLineFieldMeta.DespatchLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.DespatchLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.ReceiptLineReference,
      { meta: DebitNoteLineFieldMeta.ReceiptLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={DebitNoteLineField.ReceiptLineReference}
          meta={DebitNoteLineFieldMeta.ReceiptLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.ReceiptLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.BillingReference,
      { meta: DebitNoteLineFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={DebitNoteLineField.BillingReference}
          meta={DebitNoteLineFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.DocumentReference,
      { meta: DebitNoteLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DebitNoteLineField.DocumentReference}
          meta={DebitNoteLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.PricingReference,
      { meta: DebitNoteLineFieldMeta.PricingReference,
        template: ({value, renderContext, fieldConfig}) => <PricingReferenceDisplay
          key={DebitNoteLineField.PricingReference}
          meta={DebitNoteLineFieldMeta.PricingReference}
          fieldConfig={fieldConfig}
          pricingReference={value?.PricingReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.Delivery,
      { meta: DebitNoteLineFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={DebitNoteLineField.Delivery}
          meta={DebitNoteLineFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.TaxTotal,
      { meta: DebitNoteLineFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={DebitNoteLineField.TaxTotal}
          meta={DebitNoteLineFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.AllowanceCharge,
      { meta: DebitNoteLineFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={DebitNoteLineField.AllowanceCharge}
          meta={DebitNoteLineFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.Item,
      { meta: DebitNoteLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={DebitNoteLineField.Item}
          meta={DebitNoteLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.Price,
      { meta: DebitNoteLineFieldMeta.Price,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={DebitNoteLineField.Price}
          meta={DebitNoteLineFieldMeta.Price}
          fieldConfig={fieldConfig}
          price={value?.Price}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteLineField.SubDebitNoteLine,
      { meta: DebitNoteLineFieldMeta.SubDebitNoteLine,
        template: ({value, renderContext, fieldConfig}) => <DebitNoteLineDisplay
          key={DebitNoteLineField.SubDebitNoteLine}
          meta={DebitNoteLineFieldMeta.SubDebitNoteLine}
          fieldConfig={fieldConfig}
          debitNoteLine={value?.SubDebitNoteLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function DebitNoteLineDisplay<TFieldMeta>({ meta, fieldConfig, debitNoteLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DebitNoteLineTypeName,
    meta,
    fieldConfig,
    debitNoteLine,
    renderContext,
    DebitNoteLineSubElementsMap,
  )
}
