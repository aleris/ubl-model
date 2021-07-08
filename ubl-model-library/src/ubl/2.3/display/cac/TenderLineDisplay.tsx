import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderLine } from  '../../model/cac/TenderLine'
import { TenderLineField, TenderLineFieldMeta, TenderLineTypeName } from  '../../meta/cac/TenderLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { ItemLocationQuantityDisplay } from './ItemLocationQuantityDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { RelatedItemDisplay } from './RelatedItemDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderLine, void>
  tenderLine: TenderLine[] | undefined
  renderContext: RenderContext
}

export const TenderLineSubElementsMap: SubElementsTemplatesMap<TenderLineField, TenderLine, void> = new Map([
    [
      TenderLineField.UBLExtensions,
      { meta: TenderLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderLineField.UBLExtensions}
          meta={TenderLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.ID,
      { meta: TenderLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderLineField.ID}
          meta={TenderLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.Note,
      { meta: TenderLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderLineField.Note}
          meta={TenderLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.Quantity,
      { meta: TenderLineFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderLineField.Quantity}
          meta={TenderLineFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.LineExtensionAmount,
      { meta: TenderLineFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderLineField.LineExtensionAmount}
          meta={TenderLineFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.TaxInclusiveLineExtensionAmount,
      { meta: TenderLineFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderLineField.TaxInclusiveLineExtensionAmount}
          meta={TenderLineFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.TotalTaxAmount,
      { meta: TenderLineFieldMeta.TotalTaxAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderLineField.TotalTaxAmount}
          meta={TenderLineFieldMeta.TotalTaxAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalTaxAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.OrderableUnit,
      { meta: TenderLineFieldMeta.OrderableUnit,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderLineField.OrderableUnit}
          meta={TenderLineFieldMeta.OrderableUnit}
          fieldConfig={fieldConfig}
          text={value?.OrderableUnit}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.ContentUnitQuantity,
      { meta: TenderLineFieldMeta.ContentUnitQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderLineField.ContentUnitQuantity}
          meta={TenderLineFieldMeta.ContentUnitQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ContentUnitQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.OrderQuantityIncrementNumeric,
      { meta: TenderLineFieldMeta.OrderQuantityIncrementNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TenderLineField.OrderQuantityIncrementNumeric}
          meta={TenderLineFieldMeta.OrderQuantityIncrementNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.OrderQuantityIncrementNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.MinimumOrderQuantity,
      { meta: TenderLineFieldMeta.MinimumOrderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderLineField.MinimumOrderQuantity}
          meta={TenderLineFieldMeta.MinimumOrderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumOrderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.MaximumOrderQuantity,
      { meta: TenderLineFieldMeta.MaximumOrderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderLineField.MaximumOrderQuantity}
          meta={TenderLineFieldMeta.MaximumOrderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumOrderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.WarrantyInformation,
      { meta: TenderLineFieldMeta.WarrantyInformation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderLineField.WarrantyInformation}
          meta={TenderLineFieldMeta.WarrantyInformation}
          fieldConfig={fieldConfig}
          text={value?.WarrantyInformation}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.PackLevelCode,
      { meta: TenderLineFieldMeta.PackLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderLineField.PackLevelCode}
          meta={TenderLineFieldMeta.PackLevelCode}
          fieldConfig={fieldConfig}
          code={value?.PackLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.DocumentReference,
      { meta: TenderLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderLineField.DocumentReference}
          meta={TenderLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.Item,
      { meta: TenderLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={TenderLineField.Item}
          meta={TenderLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.OfferedItemLocationQuantity,
      { meta: TenderLineFieldMeta.OfferedItemLocationQuantity,
        template: ({value, renderContext, fieldConfig}) => <ItemLocationQuantityDisplay
          key={TenderLineField.OfferedItemLocationQuantity}
          meta={TenderLineFieldMeta.OfferedItemLocationQuantity}
          fieldConfig={fieldConfig}
          itemLocationQuantity={value?.OfferedItemLocationQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.ReplacementRelatedItem,
      { meta: TenderLineFieldMeta.ReplacementRelatedItem,
        template: ({value, renderContext, fieldConfig}) => <RelatedItemDisplay
          key={TenderLineField.ReplacementRelatedItem}
          meta={TenderLineFieldMeta.ReplacementRelatedItem}
          fieldConfig={fieldConfig}
          relatedItem={value?.ReplacementRelatedItem}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.WarrantyParty,
      { meta: TenderLineFieldMeta.WarrantyParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderLineField.WarrantyParty}
          meta={TenderLineFieldMeta.WarrantyParty}
          fieldConfig={fieldConfig}
          party={value?.WarrantyParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.WarrantyValidityPeriod,
      { meta: TenderLineFieldMeta.WarrantyValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderLineField.WarrantyValidityPeriod}
          meta={TenderLineFieldMeta.WarrantyValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.WarrantyValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.SubTenderLine,
      { meta: TenderLineFieldMeta.SubTenderLine,
        template: ({value, renderContext, fieldConfig}) => <TenderLineDisplay
          key={TenderLineField.SubTenderLine}
          meta={TenderLineFieldMeta.SubTenderLine}
          fieldConfig={fieldConfig}
          tenderLine={value?.SubTenderLine}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.CallForTendersLineReference,
      { meta: TenderLineFieldMeta.CallForTendersLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={TenderLineField.CallForTendersLineReference}
          meta={TenderLineFieldMeta.CallForTendersLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.CallForTendersLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderLineField.CallForTendersDocumentReference,
      { meta: TenderLineFieldMeta.CallForTendersDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderLineField.CallForTendersDocumentReference}
          meta={TenderLineFieldMeta.CallForTendersDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CallForTendersDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderLineDisplay<TFieldMeta>({ meta, fieldConfig, tenderLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderLineTypeName,
    meta,
    fieldConfig,
    tenderLine,
    renderContext,
    TenderLineSubElementsMap,
  )
}
