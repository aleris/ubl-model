import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderResult } from  '../../model/cac/TenderResult'
import { TenderResultFieldMeta } from  '../../meta/cac/TenderResultMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractDisplay from './ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import SubcontractTermsDisplay from './SubcontractTermsDisplay'
import { SubcontractTerms } from '../../model/cac/SubcontractTerms'
import TenderedProjectDisplay from './TenderedProjectDisplay'
import { TenderedProject } from '../../model/cac/TenderedProject'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import WinningPartyDisplay from './WinningPartyDisplay'
import { WinningParty } from '../../model/cac/WinningParty'

type Params<T> = {
  value: TenderResult
  meta: FieldMeta<T>
}

export default function TenderResultDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderResultFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderResultFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.AwardID} 
          value={value.AwardID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderResultFieldMeta.AwardID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.TenderResultCode} 
          value={value.TenderResultCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderResultFieldMeta.TenderResultCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderResultFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.AdvertisementAmount} 
          value={value.AdvertisementAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderResultFieldMeta.AdvertisementAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.AwardDate} 
          value={value.AwardDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TenderResultFieldMeta.AwardDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.AwardTime} 
          value={value.AwardTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TenderResultFieldMeta.AwardTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.ReceivedTenderQuantity} 
          value={value.ReceivedTenderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderResultFieldMeta.ReceivedTenderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.LowerTenderAmount} 
          value={value.LowerTenderAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderResultFieldMeta.LowerTenderAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.HigherTenderAmount} 
          value={value.HigherTenderAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderResultFieldMeta.HigherTenderAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.StartDate} 
          value={value.StartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TenderResultFieldMeta.StartDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.ReceivedElectronicTenderQuantity} 
          value={value.ReceivedElectronicTenderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderResultFieldMeta.ReceivedElectronicTenderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.ReceivedForeignTenderQuantity} 
          value={value.ReceivedForeignTenderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderResultFieldMeta.ReceivedForeignTenderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={TenderResultFieldMeta.Contract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.AwardedTenderedProject} 
          value={value.AwardedTenderedProject}
          itemDisplay={ (itemValue: TenderedProject, key: string | number) =>
            <TenderedProjectDisplay key={key} meta={TenderResultFieldMeta.AwardedTenderedProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.ContractFormalizationPeriod} 
          value={value.ContractFormalizationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderResultFieldMeta.ContractFormalizationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.SubcontractTerms} 
          value={value.SubcontractTerms}
          itemDisplay={ (itemValue: SubcontractTerms, key: string | number) =>
            <SubcontractTermsDisplay key={key} meta={TenderResultFieldMeta.SubcontractTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderResultFieldMeta.WinningParty} 
          value={value.WinningParty}
          itemDisplay={ (itemValue: WinningParty, key: string | number) =>
            <WinningPartyDisplay key={key} meta={TenderResultFieldMeta.WinningParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
