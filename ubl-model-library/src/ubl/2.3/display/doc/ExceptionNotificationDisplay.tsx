import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExceptionNotification } from  '../../model/doc/ExceptionNotification'
import { ExceptionNotificationField, ExceptionNotificationFieldMeta, ExceptionNotificationTypeName } from  '../../meta/doc/ExceptionNotificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ExceptionNotificationLineDisplay } from '../cac/ExceptionNotificationLineDisplay'
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
  fieldConfig?: FieldConfig<ExceptionNotification, void>
  exceptionNotification: ExceptionNotification[] | undefined
  renderContext: RenderContext
}

export const ExceptionNotificationSubElementsMap: SubElementsTemplatesMap<ExceptionNotificationField, ExceptionNotification, void> = new Map([
    [
      ExceptionNotificationField.UBLExtensions,
      { meta: ExceptionNotificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExceptionNotificationField.UBLExtensions}
          meta={ExceptionNotificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.UBLVersionID,
      { meta: ExceptionNotificationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionNotificationField.UBLVersionID}
          meta={ExceptionNotificationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.CustomizationID,
      { meta: ExceptionNotificationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionNotificationField.CustomizationID}
          meta={ExceptionNotificationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.ProfileID,
      { meta: ExceptionNotificationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionNotificationField.ProfileID}
          meta={ExceptionNotificationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.ProfileExecutionID,
      { meta: ExceptionNotificationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionNotificationField.ProfileExecutionID}
          meta={ExceptionNotificationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.ID,
      { meta: ExceptionNotificationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionNotificationField.ID}
          meta={ExceptionNotificationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.CopyIndicator,
      { meta: ExceptionNotificationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ExceptionNotificationField.CopyIndicator}
          meta={ExceptionNotificationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.UUID,
      { meta: ExceptionNotificationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionNotificationField.UUID}
          meta={ExceptionNotificationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.IssueDate,
      { meta: ExceptionNotificationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ExceptionNotificationField.IssueDate}
          meta={ExceptionNotificationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.IssueTime,
      { meta: ExceptionNotificationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ExceptionNotificationField.IssueTime}
          meta={ExceptionNotificationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.Note,
      { meta: ExceptionNotificationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExceptionNotificationField.Note}
          meta={ExceptionNotificationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.ExceptionObservationPeriod,
      { meta: ExceptionNotificationFieldMeta.ExceptionObservationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ExceptionNotificationField.ExceptionObservationPeriod}
          meta={ExceptionNotificationFieldMeta.ExceptionObservationPeriod}
          fieldConfig={fieldConfig}
          period={value?.ExceptionObservationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.DocumentReference,
      { meta: ExceptionNotificationFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ExceptionNotificationField.DocumentReference}
          meta={ExceptionNotificationFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.Signature,
      { meta: ExceptionNotificationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ExceptionNotificationField.Signature}
          meta={ExceptionNotificationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.SenderParty,
      { meta: ExceptionNotificationFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ExceptionNotificationField.SenderParty}
          meta={ExceptionNotificationFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.ReceiverParty,
      { meta: ExceptionNotificationFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ExceptionNotificationField.ReceiverParty}
          meta={ExceptionNotificationFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.BuyerCustomerParty,
      { meta: ExceptionNotificationFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ExceptionNotificationField.BuyerCustomerParty}
          meta={ExceptionNotificationFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.SellerSupplierParty,
      { meta: ExceptionNotificationFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ExceptionNotificationField.SellerSupplierParty}
          meta={ExceptionNotificationFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationField.ExceptionNotificationLine,
      { meta: ExceptionNotificationFieldMeta.ExceptionNotificationLine,
        template: ({value, renderContext, fieldConfig}) => <ExceptionNotificationLineDisplay
          key={ExceptionNotificationField.ExceptionNotificationLine}
          meta={ExceptionNotificationFieldMeta.ExceptionNotificationLine}
          fieldConfig={fieldConfig}
          exceptionNotificationLine={value?.ExceptionNotificationLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExceptionNotificationDisplay<TFieldMeta>({ meta, fieldConfig, exceptionNotification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExceptionNotificationTypeName,
    meta,
    fieldConfig,
    exceptionNotification,
    renderContext,
    ExceptionNotificationSubElementsMap,
  )
}
