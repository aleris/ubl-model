import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CardAccount } from  '../../model/cac/CardAccount'
import { CardAccountFieldMeta } from  '../../meta/cac/CardAccountMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CardAccount
  meta: FieldMeta<T>
}

export default function CardAccountDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CardAccountFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CardAccountFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.PrimaryAccountNumberID} 
          value={value.PrimaryAccountNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CardAccountFieldMeta.PrimaryAccountNumberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.NetworkID} 
          value={value.NetworkID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CardAccountFieldMeta.NetworkID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.CardTypeCode} 
          value={value.CardTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CardAccountFieldMeta.CardTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.ValidityStartDate} 
          value={value.ValidityStartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CardAccountFieldMeta.ValidityStartDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.ExpiryDate} 
          value={value.ExpiryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CardAccountFieldMeta.ExpiryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.IssuerID} 
          value={value.IssuerID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CardAccountFieldMeta.IssuerID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.IssueNumberID} 
          value={value.IssueNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CardAccountFieldMeta.IssueNumberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.CV2ID} 
          value={value.CV2ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CardAccountFieldMeta.CV2ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.CardChipCode} 
          value={value.CardChipCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CardAccountFieldMeta.CardChipCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.ChipApplicationID} 
          value={value.ChipApplicationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CardAccountFieldMeta.ChipApplicationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.HolderName} 
          value={value.HolderName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CardAccountFieldMeta.HolderName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CardAccountFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CardAccountFieldMeta.RoleCode} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
