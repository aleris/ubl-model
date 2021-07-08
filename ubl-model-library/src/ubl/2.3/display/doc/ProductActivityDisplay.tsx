import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProductActivity } from  '../../model/doc/ProductActivity'
import { ProductActivityField, ProductActivityFieldMeta, ProductActivityTypeName } from  '../../meta/doc/ProductActivityMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ActivityDataLineDisplay } from '../cac/ActivityDataLineDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProductActivity, void>
  productActivity: ProductActivity[] | undefined
  renderContext: RenderContext
}

export const ProductActivitySubElementsMap: SubElementsTemplatesMap<ProductActivityField, ProductActivity, void> = new Map([
    [
      ProductActivityField.UBLExtensions,
      { meta: ProductActivityFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProductActivityField.UBLExtensions}
          meta={ProductActivityFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.UBLVersionID,
      { meta: ProductActivityFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProductActivityField.UBLVersionID}
          meta={ProductActivityFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.CustomizationID,
      { meta: ProductActivityFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProductActivityField.CustomizationID}
          meta={ProductActivityFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.ProfileID,
      { meta: ProductActivityFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProductActivityField.ProfileID}
          meta={ProductActivityFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.ProfileExecutionID,
      { meta: ProductActivityFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProductActivityField.ProfileExecutionID}
          meta={ProductActivityFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.ID,
      { meta: ProductActivityFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProductActivityField.ID}
          meta={ProductActivityFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.CopyIndicator,
      { meta: ProductActivityFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ProductActivityField.CopyIndicator}
          meta={ProductActivityFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.UUID,
      { meta: ProductActivityFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProductActivityField.UUID}
          meta={ProductActivityFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.IssueDate,
      { meta: ProductActivityFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ProductActivityField.IssueDate}
          meta={ProductActivityFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.IssueTime,
      { meta: ProductActivityFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ProductActivityField.IssueTime}
          meta={ProductActivityFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.Note,
      { meta: ProductActivityFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProductActivityField.Note}
          meta={ProductActivityFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.DocumentCurrencyCode,
      { meta: ProductActivityFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ProductActivityField.DocumentCurrencyCode}
          meta={ProductActivityFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.ActivityPeriod,
      { meta: ProductActivityFieldMeta.ActivityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ProductActivityField.ActivityPeriod}
          meta={ProductActivityFieldMeta.ActivityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ActivityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.DocumentReference,
      { meta: ProductActivityFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ProductActivityField.DocumentReference}
          meta={ProductActivityFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.Signature,
      { meta: ProductActivityFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ProductActivityField.Signature}
          meta={ProductActivityFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.SenderParty,
      { meta: ProductActivityFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ProductActivityField.SenderParty}
          meta={ProductActivityFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.ReceiverParty,
      { meta: ProductActivityFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ProductActivityField.ReceiverParty}
          meta={ProductActivityFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ProductActivityField.SupplyChainActivityDataLine,
      { meta: ProductActivityFieldMeta.SupplyChainActivityDataLine,
        template: ({value, renderContext, fieldConfig}) => <ActivityDataLineDisplay
          key={ProductActivityField.SupplyChainActivityDataLine}
          meta={ProductActivityFieldMeta.SupplyChainActivityDataLine}
          fieldConfig={fieldConfig}
          activityDataLine={value?.SupplyChainActivityDataLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProductActivityDisplay<TFieldMeta>({ meta, fieldConfig, productActivity, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProductActivityTypeName,
    meta,
    fieldConfig,
    productActivity,
    renderContext,
    ProductActivitySubElementsMap,
  )
}
