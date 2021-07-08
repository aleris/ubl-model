import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { QuotationLine } from  '../../model/cac/QuotationLine'
import { QuotationLineField, QuotationLineFieldMeta, QuotationLineTypeName } from  '../../meta/cac/QuotationLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LineItemDisplay } from './LineItemDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<QuotationLine, void>
  quotationLine: QuotationLine[] | undefined
  renderContext: RenderContext
}

export const QuotationLineSubElementsMap: SubElementsTemplatesMap<QuotationLineField, QuotationLine, void> = new Map([
    [
      QuotationLineField.UBLExtensions,
      { meta: QuotationLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={QuotationLineField.UBLExtensions}
          meta={QuotationLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.ID,
      { meta: QuotationLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationLineField.ID}
          meta={QuotationLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.Note,
      { meta: QuotationLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QuotationLineField.Note}
          meta={QuotationLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.Quantity,
      { meta: QuotationLineFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={QuotationLineField.Quantity}
          meta={QuotationLineFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.LineExtensionAmount,
      { meta: QuotationLineFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={QuotationLineField.LineExtensionAmount}
          meta={QuotationLineFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.TaxInclusiveLineExtensionAmount,
      { meta: QuotationLineFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={QuotationLineField.TaxInclusiveLineExtensionAmount}
          meta={QuotationLineFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.TotalTaxAmount,
      { meta: QuotationLineFieldMeta.TotalTaxAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={QuotationLineField.TotalTaxAmount}
          meta={QuotationLineFieldMeta.TotalTaxAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalTaxAmount}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.RequestForQuotationLineID,
      { meta: QuotationLineFieldMeta.RequestForQuotationLineID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationLineField.RequestForQuotationLineID}
          meta={QuotationLineFieldMeta.RequestForQuotationLineID}
          fieldConfig={fieldConfig}
          identifier={value?.RequestForQuotationLineID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.DocumentReference,
      { meta: QuotationLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={QuotationLineField.DocumentReference}
          meta={QuotationLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.LineItem,
      { meta: QuotationLineFieldMeta.LineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={QuotationLineField.LineItem}
          meta={QuotationLineFieldMeta.LineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.LineItem}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.SellerProposedSubstituteLineItem,
      { meta: QuotationLineFieldMeta.SellerProposedSubstituteLineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={QuotationLineField.SellerProposedSubstituteLineItem}
          meta={QuotationLineFieldMeta.SellerProposedSubstituteLineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.SellerProposedSubstituteLineItem}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.AlternativeLineItem,
      { meta: QuotationLineFieldMeta.AlternativeLineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={QuotationLineField.AlternativeLineItem}
          meta={QuotationLineFieldMeta.AlternativeLineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.AlternativeLineItem}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationLineField.RequestLineReference,
      { meta: QuotationLineFieldMeta.RequestLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={QuotationLineField.RequestLineReference}
          meta={QuotationLineFieldMeta.RequestLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.RequestLineReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function QuotationLineDisplay<TFieldMeta>({ meta, fieldConfig, quotationLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    QuotationLineTypeName,
    meta,
    fieldConfig,
    quotationLine,
    renderContext,
    QuotationLineSubElementsMap,
  )
}
