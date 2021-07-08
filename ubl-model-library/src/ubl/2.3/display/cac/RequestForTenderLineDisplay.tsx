import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestForTenderLine } from  '../../model/cac/RequestForTenderLine'
import { RequestForTenderLineField, RequestForTenderLineFieldMeta, RequestForTenderLineTypeName } from  '../../meta/cac/RequestForTenderLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ItemDisplay } from './ItemDisplay'
import { ItemLocationQuantityDisplay } from './ItemLocationQuantityDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RequestForTenderLine, void>
  requestForTenderLine: RequestForTenderLine[] | undefined
  renderContext: RenderContext
}

export const RequestForTenderLineSubElementsMap: SubElementsTemplatesMap<RequestForTenderLineField, RequestForTenderLine, void> = new Map([
    [
      RequestForTenderLineField.UBLExtensions,
      { meta: RequestForTenderLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RequestForTenderLineField.UBLExtensions}
          meta={RequestForTenderLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.ID,
      { meta: RequestForTenderLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForTenderLineField.ID}
          meta={RequestForTenderLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.UUID,
      { meta: RequestForTenderLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForTenderLineField.UUID}
          meta={RequestForTenderLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.Note,
      { meta: RequestForTenderLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RequestForTenderLineField.Note}
          meta={RequestForTenderLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.Quantity,
      { meta: RequestForTenderLineFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={RequestForTenderLineField.Quantity}
          meta={RequestForTenderLineFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.MinimumQuantity,
      { meta: RequestForTenderLineFieldMeta.MinimumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={RequestForTenderLineField.MinimumQuantity}
          meta={RequestForTenderLineFieldMeta.MinimumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.MaximumQuantity,
      { meta: RequestForTenderLineFieldMeta.MaximumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={RequestForTenderLineField.MaximumQuantity}
          meta={RequestForTenderLineFieldMeta.MaximumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.TaxIncludedIndicator,
      { meta: RequestForTenderLineFieldMeta.TaxIncludedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={RequestForTenderLineField.TaxIncludedIndicator}
          meta={RequestForTenderLineFieldMeta.TaxIncludedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.TaxIncludedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.MinimumAmount,
      { meta: RequestForTenderLineFieldMeta.MinimumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestForTenderLineField.MinimumAmount}
          meta={RequestForTenderLineFieldMeta.MinimumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MinimumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.MaximumAmount,
      { meta: RequestForTenderLineFieldMeta.MaximumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestForTenderLineField.MaximumAmount}
          meta={RequestForTenderLineFieldMeta.MaximumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MaximumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.EstimatedAmount,
      { meta: RequestForTenderLineFieldMeta.EstimatedAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RequestForTenderLineField.EstimatedAmount}
          meta={RequestForTenderLineFieldMeta.EstimatedAmount}
          fieldConfig={fieldConfig}
          amount={value?.EstimatedAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.DocumentReference,
      { meta: RequestForTenderLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={RequestForTenderLineField.DocumentReference}
          meta={RequestForTenderLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.DeliveryPeriod,
      { meta: RequestForTenderLineFieldMeta.DeliveryPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RequestForTenderLineField.DeliveryPeriod}
          meta={RequestForTenderLineFieldMeta.DeliveryPeriod}
          fieldConfig={fieldConfig}
          period={value?.DeliveryPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.RequiredItemLocationQuantity,
      { meta: RequestForTenderLineFieldMeta.RequiredItemLocationQuantity,
        template: ({value, renderContext, fieldConfig}) => <ItemLocationQuantityDisplay
          key={RequestForTenderLineField.RequiredItemLocationQuantity}
          meta={RequestForTenderLineFieldMeta.RequiredItemLocationQuantity}
          fieldConfig={fieldConfig}
          itemLocationQuantity={value?.RequiredItemLocationQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.WarrantyValidityPeriod,
      { meta: RequestForTenderLineFieldMeta.WarrantyValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RequestForTenderLineField.WarrantyValidityPeriod}
          meta={RequestForTenderLineFieldMeta.WarrantyValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.WarrantyValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.Item,
      { meta: RequestForTenderLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={RequestForTenderLineField.Item}
          meta={RequestForTenderLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForTenderLineField.SubRequestForTenderLine,
      { meta: RequestForTenderLineFieldMeta.SubRequestForTenderLine,
        template: ({value, renderContext, fieldConfig}) => <RequestForTenderLineDisplay
          key={RequestForTenderLineField.SubRequestForTenderLine}
          meta={RequestForTenderLineFieldMeta.SubRequestForTenderLine}
          fieldConfig={fieldConfig}
          requestForTenderLine={value?.SubRequestForTenderLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function RequestForTenderLineDisplay<TFieldMeta>({ meta, fieldConfig, requestForTenderLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RequestForTenderLineTypeName,
    meta,
    fieldConfig,
    requestForTenderLine,
    renderContext,
    RequestForTenderLineSubElementsMap,
  )
}
