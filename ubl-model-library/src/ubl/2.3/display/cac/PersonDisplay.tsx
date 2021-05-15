import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Person } from  '../../model/cac/Person'
import { PersonFieldMeta } from  '../../meta/cac/PersonMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import FinancialAccountDisplay from './FinancialAccountDisplay'
import { FinancialAccount } from '../../model/cac/FinancialAccount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Person | undefined
  meta: FieldMeta<T>
}

export default function PersonDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Person">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PersonFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PersonFieldMeta.ID}
          />

          <TextDisplay
            label="First Name"
            value={value.FirstName?.[0]}
            meta={PersonFieldMeta.FirstName}
          />

          <TextDisplay
            label="Family Name"
            value={value.FamilyName?.[0]}
            meta={PersonFieldMeta.FamilyName}
          />

          <TextDisplay
            label="Title"
            value={value.Title?.[0]}
            meta={PersonFieldMeta.Title}
          />

          <TextDisplay
            label="Middle Name"
            value={value.MiddleName?.[0]}
            meta={PersonFieldMeta.MiddleName}
          />

          <TextDisplay
            label="Other Name"
            value={value.OtherName?.[0]}
            meta={PersonFieldMeta.OtherName}
          />

          <TextDisplay
            label="Name Suffix"
            value={value.NameSuffix?.[0]}
            meta={PersonFieldMeta.NameSuffix}
          />

          <TextDisplay
            label="Job Title"
            value={value.JobTitle?.[0]}
            meta={PersonFieldMeta.JobTitle}
          />

          <IdentifierDisplay
            label="Nationality"
            value={value.NationalityID?.[0]}
            meta={PersonFieldMeta.NationalityID}
          />

          <CodeDisplay
            label="Gender Code"
            value={value.GenderCode?.[0]}
            meta={PersonFieldMeta.GenderCode}
          />

          <DateDisplay
            label="Birth Date"
            value={value.BirthDate?.[0]}
            meta={PersonFieldMeta.BirthDate}
          />

          <TextDisplay
            label="Birthplace Name"
            value={value.BirthplaceName?.[0]}
            meta={PersonFieldMeta.BirthplaceName}
          />

          <TextDisplay
            label="Organization Department"
            value={value.OrganizationDepartment?.[0]}
            meta={PersonFieldMeta.OrganizationDepartment}
          />

          <CodeDisplay
            label="Role Code"
            value={value.RoleCode?.[0]}
            meta={PersonFieldMeta.RoleCode}
          />

          <CountryDisplay
            label="Citizenship Country"
            value={value.CitizenshipCountry?.[0]}
            meta={PersonFieldMeta.CitizenshipCountry}
          />

          <ContactDisplay
            label="Contact"
            value={value.Contact?.[0]}
            meta={PersonFieldMeta.Contact}
          />

          <FinancialAccountDisplay
            label="Financial Account"
            value={value.FinancialAccount?.[0]}
            meta={PersonFieldMeta.FinancialAccount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-IdentityDocumentReference"
            label="Identity Document Reference"
            items={value.IdentityDocumentReference}
            meta={PersonFieldMeta.IdentityDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Identity Document Reference"
                value={itemValue}
                meta={PersonFieldMeta.IdentityDocumentReference}
              />
            }
          />

          <AddressDisplay
            label="Residence Address"
            value={value.ResidenceAddress?.[0]}
            meta={PersonFieldMeta.ResidenceAddress}
          />
        </div>
    </div>
  )
}
