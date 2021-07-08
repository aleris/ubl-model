import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExceptionCriteria } from  '../../model/doc/ExceptionCriteria'
import { ExceptionCriteriaField, ExceptionCriteriaFieldMeta, ExceptionCriteriaTypeName } from  '../../meta/doc/ExceptionCriteriaMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ExceptionCriteriaLineDisplay } from '../cac/ExceptionCriteriaLineDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExceptionCriteria, void>
  exceptionCriteria: ExceptionCriteria[] | undefined
  renderContext: RenderContext
}

export const ExceptionCriteriaSubElementsMap: SubElementsTemplatesMap<ExceptionCriteriaField, ExceptionCriteria, void> = new Map([
    [
      ExceptionCriteriaField.UBLExtensions,
      { meta: ExceptionCriteriaFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExceptionCriteriaField.UBLExtensions}
          meta={ExceptionCriteriaFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.UBLVersionID,
      { meta: ExceptionCriteriaFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaField.UBLVersionID}
          meta={ExceptionCriteriaFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.CustomizationID,
      { meta: ExceptionCriteriaFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaField.CustomizationID}
          meta={ExceptionCriteriaFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.ProfileID,
      { meta: ExceptionCriteriaFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaField.ProfileID}
          meta={ExceptionCriteriaFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.ProfileExecutionID,
      { meta: ExceptionCriteriaFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaField.ProfileExecutionID}
          meta={ExceptionCriteriaFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.ID,
      { meta: ExceptionCriteriaFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaField.ID}
          meta={ExceptionCriteriaFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.CopyIndicator,
      { meta: ExceptionCriteriaFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ExceptionCriteriaField.CopyIndicator}
          meta={ExceptionCriteriaFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.UUID,
      { meta: ExceptionCriteriaFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaField.UUID}
          meta={ExceptionCriteriaFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.IssueDate,
      { meta: ExceptionCriteriaFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ExceptionCriteriaField.IssueDate}
          meta={ExceptionCriteriaFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.IssueTime,
      { meta: ExceptionCriteriaFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ExceptionCriteriaField.IssueTime}
          meta={ExceptionCriteriaFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.Note,
      { meta: ExceptionCriteriaFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExceptionCriteriaField.Note}
          meta={ExceptionCriteriaFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.VersionID,
      { meta: ExceptionCriteriaFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionCriteriaField.VersionID}
          meta={ExceptionCriteriaFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.ValidityPeriod,
      { meta: ExceptionCriteriaFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ExceptionCriteriaField.ValidityPeriod}
          meta={ExceptionCriteriaFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.DocumentReference,
      { meta: ExceptionCriteriaFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ExceptionCriteriaField.DocumentReference}
          meta={ExceptionCriteriaFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.Signature,
      { meta: ExceptionCriteriaFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ExceptionCriteriaField.Signature}
          meta={ExceptionCriteriaFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.SenderParty,
      { meta: ExceptionCriteriaFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ExceptionCriteriaField.SenderParty}
          meta={ExceptionCriteriaFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.ReceiverParty,
      { meta: ExceptionCriteriaFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ExceptionCriteriaField.ReceiverParty}
          meta={ExceptionCriteriaFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.BuyerCustomerParty,
      { meta: ExceptionCriteriaFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ExceptionCriteriaField.BuyerCustomerParty}
          meta={ExceptionCriteriaFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.SellerSupplierParty,
      { meta: ExceptionCriteriaFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ExceptionCriteriaField.SellerSupplierParty}
          meta={ExceptionCriteriaFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionCriteriaField.ExceptionCriteriaLine,
      { meta: ExceptionCriteriaFieldMeta.ExceptionCriteriaLine,
        template: ({value, renderContext, fieldConfig}) => <ExceptionCriteriaLineDisplay
          key={ExceptionCriteriaField.ExceptionCriteriaLine}
          meta={ExceptionCriteriaFieldMeta.ExceptionCriteriaLine}
          fieldConfig={fieldConfig}
          exceptionCriteriaLine={value?.ExceptionCriteriaLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExceptionCriteriaDisplay<TFieldMeta>({ meta, fieldConfig, exceptionCriteria, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExceptionCriteriaTypeName,
    meta,
    fieldConfig,
    exceptionCriteria,
    renderContext,
    ExceptionCriteriaSubElementsMap,
  )
}
