import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Person
  meta: FieldMeta<T>
}

export default function PersonDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Person ubl-PersonType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Person ubl-UBLExtensions"
          meta={PersonFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PersonFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Identifier ubl-ID"
          meta={PersonFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PersonFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-FirstName"
          meta={PersonFieldMeta.FirstName} 
          value={value.FirstName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="First Name"
              value={itemValue}
              meta={PersonFieldMeta.FirstName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-FamilyName"
          meta={PersonFieldMeta.FamilyName} 
          value={value.FamilyName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Family Name"
              value={itemValue}
              meta={PersonFieldMeta.FamilyName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-Title"
          meta={PersonFieldMeta.Title} 
          value={value.Title}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Title"
              value={itemValue}
              meta={PersonFieldMeta.Title}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-MiddleName"
          meta={PersonFieldMeta.MiddleName} 
          value={value.MiddleName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Middle Name"
              value={itemValue}
              meta={PersonFieldMeta.MiddleName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-OtherName"
          meta={PersonFieldMeta.OtherName} 
          value={value.OtherName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Other Name"
              value={itemValue}
              meta={PersonFieldMeta.OtherName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-NameSuffix"
          meta={PersonFieldMeta.NameSuffix} 
          value={value.NameSuffix}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name Suffix"
              value={itemValue}
              meta={PersonFieldMeta.NameSuffix}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-JobTitle"
          meta={PersonFieldMeta.JobTitle} 
          value={value.JobTitle}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Job Title"
              value={itemValue}
              meta={PersonFieldMeta.JobTitle}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Identifier ubl-NationalityID"
          meta={PersonFieldMeta.NationalityID} 
          value={value.NationalityID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Nationality"
              value={itemValue}
              meta={PersonFieldMeta.NationalityID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Code ubl-GenderCode"
          meta={PersonFieldMeta.GenderCode} 
          value={value.GenderCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Gender Code"
              value={itemValue}
              meta={PersonFieldMeta.GenderCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Date ubl-BirthDate"
          meta={PersonFieldMeta.BirthDate} 
          value={value.BirthDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Birth Date"
              value={itemValue}
              meta={PersonFieldMeta.BirthDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-BirthplaceName"
          meta={PersonFieldMeta.BirthplaceName} 
          value={value.BirthplaceName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Birthplace Name"
              value={itemValue}
              meta={PersonFieldMeta.BirthplaceName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Text ubl-OrganizationDepartment"
          meta={PersonFieldMeta.OrganizationDepartment} 
          value={value.OrganizationDepartment}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Organization Department"
              value={itemValue}
              meta={PersonFieldMeta.OrganizationDepartment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Person ubl-Code ubl-RoleCode"
          meta={PersonFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Role Code"
              value={itemValue}
              meta={PersonFieldMeta.RoleCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Person ubl-Country ubl-CitizenshipCountry"
          meta={PersonFieldMeta.CitizenshipCountry} 
          value={value.CitizenshipCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Citizenship Country"
              value={itemValue}
              meta={PersonFieldMeta.CitizenshipCountry}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Person ubl-Contact"
          meta={PersonFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Contact"
              value={itemValue}
              meta={PersonFieldMeta.Contact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Person ubl-FinancialAccount"
          meta={PersonFieldMeta.FinancialAccount} 
          value={value.FinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay
              key={key}
              label="Financial Account"
              value={itemValue}
              meta={PersonFieldMeta.FinancialAccount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Person ubl-DocumentReference ubl-IdentityDocumentReference"
          meta={PersonFieldMeta.IdentityDocumentReference} 
          value={value.IdentityDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Identity Document Reference"
              value={itemValue}
              meta={PersonFieldMeta.IdentityDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Person ubl-Address ubl-ResidenceAddress"
          meta={PersonFieldMeta.ResidenceAddress} 
          value={value.ResidenceAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Residence Address"
              value={itemValue}
              meta={PersonFieldMeta.ResidenceAddress}
            />
          }
        />
        </div>
    </div>
  )
}
