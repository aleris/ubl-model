import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UtilityStatement } from  '../../model/doc/UtilityStatement'
import { UtilityStatementField, UtilityStatementFieldMeta, UtilityStatementTypeName } from  '../../meta/doc/UtilityStatementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { OnAccountPaymentDisplay } from '../cac/OnAccountPaymentDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SubscriberConsumptionDisplay } from '../cac/SubscriberConsumptionDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<UtilityStatement, void>
  utilityStatement: UtilityStatement[] | undefined
  renderContext: RenderContext
}

export const UtilityStatementSubElementsMap: SubElementsTemplatesMap<UtilityStatementField, UtilityStatement, void> = new Map([
    [
      UtilityStatementField.UBLExtensions,
      { meta: UtilityStatementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={UtilityStatementField.UBLExtensions}
          meta={UtilityStatementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.UBLVersionID,
      { meta: UtilityStatementFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityStatementField.UBLVersionID}
          meta={UtilityStatementFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.CustomizationID,
      { meta: UtilityStatementFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityStatementField.CustomizationID}
          meta={UtilityStatementFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.ProfileID,
      { meta: UtilityStatementFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityStatementField.ProfileID}
          meta={UtilityStatementFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.ProfileExecutionID,
      { meta: UtilityStatementFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityStatementField.ProfileExecutionID}
          meta={UtilityStatementFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.ID,
      { meta: UtilityStatementFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityStatementField.ID}
          meta={UtilityStatementFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.CopyIndicator,
      { meta: UtilityStatementFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={UtilityStatementField.CopyIndicator}
          meta={UtilityStatementFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.UUID,
      { meta: UtilityStatementFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityStatementField.UUID}
          meta={UtilityStatementFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.IssueDate,
      { meta: UtilityStatementFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={UtilityStatementField.IssueDate}
          meta={UtilityStatementFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.IssueTime,
      { meta: UtilityStatementFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={UtilityStatementField.IssueTime}
          meta={UtilityStatementFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.UtilityStatementTypeCode,
      { meta: UtilityStatementFieldMeta.UtilityStatementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UtilityStatementField.UtilityStatementTypeCode}
          meta={UtilityStatementFieldMeta.UtilityStatementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.UtilityStatementTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.Note,
      { meta: UtilityStatementFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UtilityStatementField.Note}
          meta={UtilityStatementFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.DocumentCurrencyCode,
      { meta: UtilityStatementFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UtilityStatementField.DocumentCurrencyCode}
          meta={UtilityStatementFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.AccountingCostCode,
      { meta: UtilityStatementFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UtilityStatementField.AccountingCostCode}
          meta={UtilityStatementFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.AccountingCost,
      { meta: UtilityStatementFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UtilityStatementField.AccountingCost}
          meta={UtilityStatementFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.ParentDocumentReference,
      { meta: UtilityStatementFieldMeta.ParentDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={UtilityStatementField.ParentDocumentReference}
          meta={UtilityStatementFieldMeta.ParentDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ParentDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.AdditionalDocumentReference,
      { meta: UtilityStatementFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={UtilityStatementField.AdditionalDocumentReference}
          meta={UtilityStatementFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.Signature,
      { meta: UtilityStatementFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={UtilityStatementField.Signature}
          meta={UtilityStatementFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.SenderParty,
      { meta: UtilityStatementFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={UtilityStatementField.SenderParty}
          meta={UtilityStatementFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.ReceiverParty,
      { meta: UtilityStatementFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={UtilityStatementField.ReceiverParty}
          meta={UtilityStatementFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.CustomerParty,
      { meta: UtilityStatementFieldMeta.CustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={UtilityStatementField.CustomerParty}
          meta={UtilityStatementFieldMeta.CustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.CustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.SubscriberParty,
      { meta: UtilityStatementFieldMeta.SubscriberParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={UtilityStatementField.SubscriberParty}
          meta={UtilityStatementFieldMeta.SubscriberParty}
          fieldConfig={fieldConfig}
          party={value?.SubscriberParty}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.MainOnAccountPayment,
      { meta: UtilityStatementFieldMeta.MainOnAccountPayment,
        template: ({value, renderContext, fieldConfig}) => <OnAccountPaymentDisplay
          key={UtilityStatementField.MainOnAccountPayment}
          meta={UtilityStatementFieldMeta.MainOnAccountPayment}
          fieldConfig={fieldConfig}
          onAccountPayment={value?.MainOnAccountPayment}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityStatementField.SubscriberConsumption,
      { meta: UtilityStatementFieldMeta.SubscriberConsumption,
        template: ({value, renderContext, fieldConfig}) => <SubscriberConsumptionDisplay
          key={UtilityStatementField.SubscriberConsumption}
          meta={UtilityStatementFieldMeta.SubscriberConsumption}
          fieldConfig={fieldConfig}
          subscriberConsumption={value?.SubscriberConsumption}
          renderContext={renderContext}
        />}
    ]
]) 

export function UtilityStatementDisplay<TFieldMeta>({ meta, fieldConfig, utilityStatement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UtilityStatementTypeName,
    meta,
    fieldConfig,
    utilityStatement,
    renderContext,
    UtilityStatementSubElementsMap,
  )
}
