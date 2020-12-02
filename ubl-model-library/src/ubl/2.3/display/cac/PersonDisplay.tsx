import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Person
  meta: FieldMeta<T>
}

export default function PersonDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PersonFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PersonFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PersonFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.FirstName} 
          value={value.FirstName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.FirstName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.FamilyName} 
          value={value.FamilyName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.FamilyName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.Title} 
          value={value.Title}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.Title} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.MiddleName} 
          value={value.MiddleName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.MiddleName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.OtherName} 
          value={value.OtherName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.OtherName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.NameSuffix} 
          value={value.NameSuffix}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.NameSuffix} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.JobTitle} 
          value={value.JobTitle}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.JobTitle} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.NationalityID} 
          value={value.NationalityID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PersonFieldMeta.NationalityID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.GenderCode} 
          value={value.GenderCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PersonFieldMeta.GenderCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.BirthDate} 
          value={value.BirthDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PersonFieldMeta.BirthDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.BirthplaceName} 
          value={value.BirthplaceName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.BirthplaceName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.OrganizationDepartment} 
          value={value.OrganizationDepartment}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PersonFieldMeta.OrganizationDepartment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PersonFieldMeta.RoleCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.CitizenshipCountry} 
          value={value.CitizenshipCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={PersonFieldMeta.CitizenshipCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={PersonFieldMeta.Contact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.FinancialAccount} 
          value={value.FinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay key={key} meta={PersonFieldMeta.FinancialAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.IdentityDocumentReference} 
          value={value.IdentityDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={PersonFieldMeta.IdentityDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PersonFieldMeta.ResidenceAddress} 
          value={value.ResidenceAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={PersonFieldMeta.ResidenceAddress} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
