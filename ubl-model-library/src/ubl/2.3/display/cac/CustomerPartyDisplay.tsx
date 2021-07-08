import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CustomerParty } from  '../../model/cac/CustomerParty'
import { CustomerPartyField, CustomerPartyFieldMeta, CustomerPartyTypeName } from  '../../meta/cac/CustomerPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContactDisplay } from './ContactDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CustomerParty, void>
  customerParty: CustomerParty[] | undefined
  renderContext: RenderContext
}

export const CustomerPartySubElementsMap: SubElementsTemplatesMap<CustomerPartyField, CustomerParty, void> = new Map([
    [
      CustomerPartyField.UBLExtensions,
      { meta: CustomerPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CustomerPartyField.UBLExtensions}
          meta={CustomerPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CustomerPartyField.CustomerAssignedAccountID,
      { meta: CustomerPartyFieldMeta.CustomerAssignedAccountID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CustomerPartyField.CustomerAssignedAccountID}
          meta={CustomerPartyFieldMeta.CustomerAssignedAccountID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomerAssignedAccountID}
          renderContext={renderContext}
        />}
    ],

    [
      CustomerPartyField.SupplierAssignedAccountID,
      { meta: CustomerPartyFieldMeta.SupplierAssignedAccountID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CustomerPartyField.SupplierAssignedAccountID}
          meta={CustomerPartyFieldMeta.SupplierAssignedAccountID}
          fieldConfig={fieldConfig}
          identifier={value?.SupplierAssignedAccountID}
          renderContext={renderContext}
        />}
    ],

    [
      CustomerPartyField.AdditionalAccountID,
      { meta: CustomerPartyFieldMeta.AdditionalAccountID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CustomerPartyField.AdditionalAccountID}
          meta={CustomerPartyFieldMeta.AdditionalAccountID}
          fieldConfig={fieldConfig}
          identifier={value?.AdditionalAccountID}
          renderContext={renderContext}
        />}
    ],

    [
      CustomerPartyField.Party,
      { meta: CustomerPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CustomerPartyField.Party}
          meta={CustomerPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ],

    [
      CustomerPartyField.DeliveryContact,
      { meta: CustomerPartyFieldMeta.DeliveryContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={CustomerPartyField.DeliveryContact}
          meta={CustomerPartyFieldMeta.DeliveryContact}
          fieldConfig={fieldConfig}
          contact={value?.DeliveryContact}
          renderContext={renderContext}
        />}
    ],

    [
      CustomerPartyField.AccountingContact,
      { meta: CustomerPartyFieldMeta.AccountingContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={CustomerPartyField.AccountingContact}
          meta={CustomerPartyFieldMeta.AccountingContact}
          fieldConfig={fieldConfig}
          contact={value?.AccountingContact}
          renderContext={renderContext}
        />}
    ],

    [
      CustomerPartyField.BuyerContact,
      { meta: CustomerPartyFieldMeta.BuyerContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={CustomerPartyField.BuyerContact}
          meta={CustomerPartyFieldMeta.BuyerContact}
          fieldConfig={fieldConfig}
          contact={value?.BuyerContact}
          renderContext={renderContext}
        />}
    ]
]) 

export function CustomerPartyDisplay<TFieldMeta>({ meta, fieldConfig, customerParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CustomerPartyTypeName,
    meta,
    fieldConfig,
    customerParty,
    renderContext,
    CustomerPartySubElementsMap,
  )
}
