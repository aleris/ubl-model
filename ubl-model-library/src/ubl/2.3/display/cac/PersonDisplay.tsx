import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Person } from  '../../model/cac/Person'
import { PersonField, PersonFieldMeta, PersonTypeName } from  '../../meta/cac/PersonMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContactDisplay } from './ContactDisplay'
import { CountryDisplay } from './CountryDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { FinancialAccountDisplay } from './FinancialAccountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Person, void>
  person: Person[] | undefined
  renderContext: RenderContext
}

export const PersonSubElementsMap: SubElementsTemplatesMap<PersonField, Person, void> = new Map([
    [
      PersonField.UBLExtensions,
      { meta: PersonFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PersonField.UBLExtensions}
          meta={PersonFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.ID,
      { meta: PersonFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PersonField.ID}
          meta={PersonFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.FirstName,
      { meta: PersonFieldMeta.FirstName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.FirstName}
          meta={PersonFieldMeta.FirstName}
          fieldConfig={fieldConfig}
          text={value?.FirstName}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.FamilyName,
      { meta: PersonFieldMeta.FamilyName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.FamilyName}
          meta={PersonFieldMeta.FamilyName}
          fieldConfig={fieldConfig}
          text={value?.FamilyName}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.Title,
      { meta: PersonFieldMeta.Title,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.Title}
          meta={PersonFieldMeta.Title}
          fieldConfig={fieldConfig}
          text={value?.Title}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.MiddleName,
      { meta: PersonFieldMeta.MiddleName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.MiddleName}
          meta={PersonFieldMeta.MiddleName}
          fieldConfig={fieldConfig}
          text={value?.MiddleName}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.OtherName,
      { meta: PersonFieldMeta.OtherName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.OtherName}
          meta={PersonFieldMeta.OtherName}
          fieldConfig={fieldConfig}
          text={value?.OtherName}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.NameSuffix,
      { meta: PersonFieldMeta.NameSuffix,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.NameSuffix}
          meta={PersonFieldMeta.NameSuffix}
          fieldConfig={fieldConfig}
          text={value?.NameSuffix}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.JobTitle,
      { meta: PersonFieldMeta.JobTitle,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.JobTitle}
          meta={PersonFieldMeta.JobTitle}
          fieldConfig={fieldConfig}
          text={value?.JobTitle}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.NationalityID,
      { meta: PersonFieldMeta.NationalityID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PersonField.NationalityID}
          meta={PersonFieldMeta.NationalityID}
          fieldConfig={fieldConfig}
          identifier={value?.NationalityID}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.GenderCode,
      { meta: PersonFieldMeta.GenderCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PersonField.GenderCode}
          meta={PersonFieldMeta.GenderCode}
          fieldConfig={fieldConfig}
          code={value?.GenderCode}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.BirthDate,
      { meta: PersonFieldMeta.BirthDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PersonField.BirthDate}
          meta={PersonFieldMeta.BirthDate}
          fieldConfig={fieldConfig}
          date={value?.BirthDate}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.BirthplaceName,
      { meta: PersonFieldMeta.BirthplaceName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.BirthplaceName}
          meta={PersonFieldMeta.BirthplaceName}
          fieldConfig={fieldConfig}
          text={value?.BirthplaceName}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.OrganizationDepartment,
      { meta: PersonFieldMeta.OrganizationDepartment,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PersonField.OrganizationDepartment}
          meta={PersonFieldMeta.OrganizationDepartment}
          fieldConfig={fieldConfig}
          text={value?.OrganizationDepartment}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.RoleCode,
      { meta: PersonFieldMeta.RoleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PersonField.RoleCode}
          meta={PersonFieldMeta.RoleCode}
          fieldConfig={fieldConfig}
          code={value?.RoleCode}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.CitizenshipCountry,
      { meta: PersonFieldMeta.CitizenshipCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={PersonField.CitizenshipCountry}
          meta={PersonFieldMeta.CitizenshipCountry}
          fieldConfig={fieldConfig}
          country={value?.CitizenshipCountry}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.Contact,
      { meta: PersonFieldMeta.Contact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={PersonField.Contact}
          meta={PersonFieldMeta.Contact}
          fieldConfig={fieldConfig}
          contact={value?.Contact}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.FinancialAccount,
      { meta: PersonFieldMeta.FinancialAccount,
        template: ({value, renderContext, fieldConfig}) => <FinancialAccountDisplay
          key={PersonField.FinancialAccount}
          meta={PersonFieldMeta.FinancialAccount}
          fieldConfig={fieldConfig}
          financialAccount={value?.FinancialAccount}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.IdentityDocumentReference,
      { meta: PersonFieldMeta.IdentityDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={PersonField.IdentityDocumentReference}
          meta={PersonFieldMeta.IdentityDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.IdentityDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      PersonField.ResidenceAddress,
      { meta: PersonFieldMeta.ResidenceAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={PersonField.ResidenceAddress}
          meta={PersonFieldMeta.ResidenceAddress}
          fieldConfig={fieldConfig}
          address={value?.ResidenceAddress}
          renderContext={renderContext}
        />}
    ]
]) 

export function PersonDisplay<TFieldMeta>({ meta, fieldConfig, person, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PersonTypeName,
    meta,
    fieldConfig,
    person,
    renderContext,
    PersonSubElementsMap,
  )
}
