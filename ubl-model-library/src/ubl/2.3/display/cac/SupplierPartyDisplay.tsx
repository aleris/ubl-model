import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SupplierParty } from  '../../model/cac/SupplierParty'
import { SupplierPartyField, SupplierPartyFieldMeta, SupplierPartyTypeName } from  '../../meta/cac/SupplierPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContactDisplay } from './ContactDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SupplierParty, void>
  supplierParty: SupplierParty[] | undefined
  renderContext: RenderContext
}

export const SupplierPartySubElementsMap: SubElementsTemplatesMap<SupplierPartyField, SupplierParty, void> = new Map([
    [
      SupplierPartyField.UBLExtensions,
      { meta: SupplierPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SupplierPartyField.UBLExtensions}
          meta={SupplierPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierPartyField.CustomerAssignedAccountID,
      { meta: SupplierPartyFieldMeta.CustomerAssignedAccountID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SupplierPartyField.CustomerAssignedAccountID}
          meta={SupplierPartyFieldMeta.CustomerAssignedAccountID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomerAssignedAccountID}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierPartyField.AdditionalAccountID,
      { meta: SupplierPartyFieldMeta.AdditionalAccountID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SupplierPartyField.AdditionalAccountID}
          meta={SupplierPartyFieldMeta.AdditionalAccountID}
          fieldConfig={fieldConfig}
          identifier={value?.AdditionalAccountID}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierPartyField.DataSendingCapability,
      { meta: SupplierPartyFieldMeta.DataSendingCapability,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SupplierPartyField.DataSendingCapability}
          meta={SupplierPartyFieldMeta.DataSendingCapability}
          fieldConfig={fieldConfig}
          text={value?.DataSendingCapability}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierPartyField.Party,
      { meta: SupplierPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SupplierPartyField.Party}
          meta={SupplierPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierPartyField.DespatchContact,
      { meta: SupplierPartyFieldMeta.DespatchContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={SupplierPartyField.DespatchContact}
          meta={SupplierPartyFieldMeta.DespatchContact}
          fieldConfig={fieldConfig}
          contact={value?.DespatchContact}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierPartyField.AccountingContact,
      { meta: SupplierPartyFieldMeta.AccountingContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={SupplierPartyField.AccountingContact}
          meta={SupplierPartyFieldMeta.AccountingContact}
          fieldConfig={fieldConfig}
          contact={value?.AccountingContact}
          renderContext={renderContext}
        />}
    ],

    [
      SupplierPartyField.SellerContact,
      { meta: SupplierPartyFieldMeta.SellerContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={SupplierPartyField.SellerContact}
          meta={SupplierPartyFieldMeta.SellerContact}
          fieldConfig={fieldConfig}
          contact={value?.SellerContact}
          renderContext={renderContext}
        />}
    ]
]) 

export function SupplierPartyDisplay<TFieldMeta>({ meta, fieldConfig, supplierParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SupplierPartyTypeName,
    meta,
    fieldConfig,
    supplierParty,
    renderContext,
    SupplierPartySubElementsMap,
  )
}
