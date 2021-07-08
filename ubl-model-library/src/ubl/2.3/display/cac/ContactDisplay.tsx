import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Contact } from  '../../model/cac/Contact'
import { ContactField, ContactFieldMeta, ContactTypeName } from  '../../meta/cac/ContactMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CommunicationDisplay } from './CommunicationDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Contact, void>
  contact: Contact[] | undefined
  renderContext: RenderContext
}

export const ContactSubElementsMap: SubElementsTemplatesMap<ContactField, Contact, void> = new Map([
    [
      ContactField.UBLExtensions,
      { meta: ContactFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContactField.UBLExtensions}
          meta={ContactFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.ID,
      { meta: ContactFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContactField.ID}
          meta={ContactFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.Name,
      { meta: ContactFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContactField.Name}
          meta={ContactFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.JobTitle,
      { meta: ContactFieldMeta.JobTitle,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContactField.JobTitle}
          meta={ContactFieldMeta.JobTitle}
          fieldConfig={fieldConfig}
          text={value?.JobTitle}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.Department,
      { meta: ContactFieldMeta.Department,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContactField.Department}
          meta={ContactFieldMeta.Department}
          fieldConfig={fieldConfig}
          text={value?.Department}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.Telephone,
      { meta: ContactFieldMeta.Telephone,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContactField.Telephone}
          meta={ContactFieldMeta.Telephone}
          fieldConfig={fieldConfig}
          text={value?.Telephone}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.Telefax,
      { meta: ContactFieldMeta.Telefax,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContactField.Telefax}
          meta={ContactFieldMeta.Telefax}
          fieldConfig={fieldConfig}
          text={value?.Telefax}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.ElectronicMail,
      { meta: ContactFieldMeta.ElectronicMail,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContactField.ElectronicMail}
          meta={ContactFieldMeta.ElectronicMail}
          fieldConfig={fieldConfig}
          text={value?.ElectronicMail}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.Note,
      { meta: ContactFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContactField.Note}
          meta={ContactFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ContactField.OtherCommunication,
      { meta: ContactFieldMeta.OtherCommunication,
        template: ({value, renderContext, fieldConfig}) => <CommunicationDisplay
          key={ContactField.OtherCommunication}
          meta={ContactFieldMeta.OtherCommunication}
          fieldConfig={fieldConfig}
          communication={value?.OtherCommunication}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContactDisplay<TFieldMeta>({ meta, fieldConfig, contact, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContactTypeName,
    meta,
    fieldConfig,
    contact,
    renderContext,
    ContactSubElementsMap,
  )
}
