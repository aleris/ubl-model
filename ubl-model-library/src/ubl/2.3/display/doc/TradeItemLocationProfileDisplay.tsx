import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradeItemLocationProfile } from  '../../model/doc/TradeItemLocationProfile'
import { TradeItemLocationProfileField, TradeItemLocationProfileFieldMeta, TradeItemLocationProfileTypeName } from  '../../meta/doc/TradeItemLocationProfileMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ItemManagementProfileDisplay } from '../cac/ItemManagementProfileDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TradeItemLocationProfile, void>
  tradeItemLocationProfile: TradeItemLocationProfile[] | undefined
  renderContext: RenderContext
}

export const TradeItemLocationProfileSubElementsMap: SubElementsTemplatesMap<TradeItemLocationProfileField, TradeItemLocationProfile, void> = new Map([
    [
      TradeItemLocationProfileField.UBLExtensions,
      { meta: TradeItemLocationProfileFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TradeItemLocationProfileField.UBLExtensions}
          meta={TradeItemLocationProfileFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.UBLVersionID,
      { meta: TradeItemLocationProfileFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TradeItemLocationProfileField.UBLVersionID}
          meta={TradeItemLocationProfileFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.CustomizationID,
      { meta: TradeItemLocationProfileFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TradeItemLocationProfileField.CustomizationID}
          meta={TradeItemLocationProfileFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.ProfileID,
      { meta: TradeItemLocationProfileFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TradeItemLocationProfileField.ProfileID}
          meta={TradeItemLocationProfileFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.ProfileExecutionID,
      { meta: TradeItemLocationProfileFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TradeItemLocationProfileField.ProfileExecutionID}
          meta={TradeItemLocationProfileFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.ID,
      { meta: TradeItemLocationProfileFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TradeItemLocationProfileField.ID}
          meta={TradeItemLocationProfileFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.CopyIndicator,
      { meta: TradeItemLocationProfileFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TradeItemLocationProfileField.CopyIndicator}
          meta={TradeItemLocationProfileFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.UUID,
      { meta: TradeItemLocationProfileFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TradeItemLocationProfileField.UUID}
          meta={TradeItemLocationProfileFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.IssueDate,
      { meta: TradeItemLocationProfileFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TradeItemLocationProfileField.IssueDate}
          meta={TradeItemLocationProfileFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.IssueTime,
      { meta: TradeItemLocationProfileFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TradeItemLocationProfileField.IssueTime}
          meta={TradeItemLocationProfileFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.Note,
      { meta: TradeItemLocationProfileFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TradeItemLocationProfileField.Note}
          meta={TradeItemLocationProfileFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.ProfileStatusCode,
      { meta: TradeItemLocationProfileFieldMeta.ProfileStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TradeItemLocationProfileField.ProfileStatusCode}
          meta={TradeItemLocationProfileFieldMeta.ProfileStatusCode}
          fieldConfig={fieldConfig}
          code={value?.ProfileStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.Period,
      { meta: TradeItemLocationProfileFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TradeItemLocationProfileField.Period}
          meta={TradeItemLocationProfileFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.DocumentReference,
      { meta: TradeItemLocationProfileFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TradeItemLocationProfileField.DocumentReference}
          meta={TradeItemLocationProfileFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.Signature,
      { meta: TradeItemLocationProfileFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TradeItemLocationProfileField.Signature}
          meta={TradeItemLocationProfileFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.SenderParty,
      { meta: TradeItemLocationProfileFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TradeItemLocationProfileField.SenderParty}
          meta={TradeItemLocationProfileFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.ReceiverParty,
      { meta: TradeItemLocationProfileFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TradeItemLocationProfileField.ReceiverParty}
          meta={TradeItemLocationProfileFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.BuyerCustomerParty,
      { meta: TradeItemLocationProfileFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={TradeItemLocationProfileField.BuyerCustomerParty}
          meta={TradeItemLocationProfileFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.SellerSupplierParty,
      { meta: TradeItemLocationProfileFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={TradeItemLocationProfileField.SellerSupplierParty}
          meta={TradeItemLocationProfileFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      TradeItemLocationProfileField.ItemManagementProfile,
      { meta: TradeItemLocationProfileFieldMeta.ItemManagementProfile,
        template: ({value, renderContext, fieldConfig}) => <ItemManagementProfileDisplay
          key={TradeItemLocationProfileField.ItemManagementProfile}
          meta={TradeItemLocationProfileFieldMeta.ItemManagementProfile}
          fieldConfig={fieldConfig}
          itemManagementProfile={value?.ItemManagementProfile}
          renderContext={renderContext}
        />}
    ]
]) 

export function TradeItemLocationProfileDisplay<TFieldMeta>({ meta, fieldConfig, tradeItemLocationProfile, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TradeItemLocationProfileTypeName,
    meta,
    fieldConfig,
    tradeItemLocationProfile,
    renderContext,
    TradeItemLocationProfileSubElementsMap,
  )
}
