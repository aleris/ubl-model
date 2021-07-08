import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemInformationRequest } from  '../../model/doc/ItemInformationRequest'
import { ItemInformationRequestField, ItemInformationRequestFieldMeta, ItemInformationRequestTypeName } from  '../../meta/doc/ItemInformationRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ItemInformationRequestLineDisplay } from '../cac/ItemInformationRequestLineDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemInformationRequest, void>
  itemInformationRequest: ItemInformationRequest[] | undefined
  renderContext: RenderContext
}

export const ItemInformationRequestSubElementsMap: SubElementsTemplatesMap<ItemInformationRequestField, ItemInformationRequest, void> = new Map([
    [
      ItemInformationRequestField.UBLExtensions,
      { meta: ItemInformationRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemInformationRequestField.UBLExtensions}
          meta={ItemInformationRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.UBLVersionID,
      { meta: ItemInformationRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInformationRequestField.UBLVersionID}
          meta={ItemInformationRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.CustomizationID,
      { meta: ItemInformationRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInformationRequestField.CustomizationID}
          meta={ItemInformationRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.ProfileID,
      { meta: ItemInformationRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInformationRequestField.ProfileID}
          meta={ItemInformationRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.ProfileExecutionID,
      { meta: ItemInformationRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInformationRequestField.ProfileExecutionID}
          meta={ItemInformationRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.ID,
      { meta: ItemInformationRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInformationRequestField.ID}
          meta={ItemInformationRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.CopyIndicator,
      { meta: ItemInformationRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ItemInformationRequestField.CopyIndicator}
          meta={ItemInformationRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.UUID,
      { meta: ItemInformationRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInformationRequestField.UUID}
          meta={ItemInformationRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.IssueDate,
      { meta: ItemInformationRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ItemInformationRequestField.IssueDate}
          meta={ItemInformationRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.IssueTime,
      { meta: ItemInformationRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ItemInformationRequestField.IssueTime}
          meta={ItemInformationRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.Note,
      { meta: ItemInformationRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemInformationRequestField.Note}
          meta={ItemInformationRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.Period,
      { meta: ItemInformationRequestFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ItemInformationRequestField.Period}
          meta={ItemInformationRequestFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.DocumentReference,
      { meta: ItemInformationRequestFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ItemInformationRequestField.DocumentReference}
          meta={ItemInformationRequestFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.Signature,
      { meta: ItemInformationRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ItemInformationRequestField.Signature}
          meta={ItemInformationRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.SenderParty,
      { meta: ItemInformationRequestFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ItemInformationRequestField.SenderParty}
          meta={ItemInformationRequestFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.ReceiverParty,
      { meta: ItemInformationRequestFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ItemInformationRequestField.ReceiverParty}
          meta={ItemInformationRequestFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.BuyerCustomerParty,
      { meta: ItemInformationRequestFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ItemInformationRequestField.BuyerCustomerParty}
          meta={ItemInformationRequestFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.SellerSupplierParty,
      { meta: ItemInformationRequestFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ItemInformationRequestField.SellerSupplierParty}
          meta={ItemInformationRequestFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInformationRequestField.ItemInformationRequestLine,
      { meta: ItemInformationRequestFieldMeta.ItemInformationRequestLine,
        template: ({value, renderContext, fieldConfig}) => <ItemInformationRequestLineDisplay
          key={ItemInformationRequestField.ItemInformationRequestLine}
          meta={ItemInformationRequestFieldMeta.ItemInformationRequestLine}
          fieldConfig={fieldConfig}
          itemInformationRequestLine={value?.ItemInformationRequestLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemInformationRequestDisplay<TFieldMeta>({ meta, fieldConfig, itemInformationRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemInformationRequestTypeName,
    meta,
    fieldConfig,
    itemInformationRequest,
    renderContext,
    ItemInformationRequestSubElementsMap,
  )
}
