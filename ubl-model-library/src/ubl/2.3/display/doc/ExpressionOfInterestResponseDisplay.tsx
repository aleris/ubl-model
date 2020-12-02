import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExpressionOfInterestResponse } from  '../../model/doc/ExpressionOfInterestResponse'
import { ExpressionOfInterestResponseFieldMeta } from  '../../meta/doc/ExpressionOfInterestResponseMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EconomicOperatorPartyDisplay from '../cac/EconomicOperatorPartyDisplay'
import { EconomicOperatorParty } from '../../model/cac/EconomicOperatorParty'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ProcurementProjectDisplay from '../cac/ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import ProcurementProjectLotReferenceDisplay from '../cac/ProcurementProjectLotReferenceDisplay'
import { ProcurementProjectLotReference } from '../../model/cac/ProcurementProjectLotReference'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ExpressionOfInterestResponse
  meta: FieldMeta<T>
}

export default function ExpressionOfInterestResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.TenderLanguageLocaleCode} 
          value={value.TenderLanguageLocaleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.TenderLanguageLocaleCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference} 
          value={value.ExpressionOfInterestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.EconomicOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExpressionOfInterestResponseFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay key={key} meta={ExpressionOfInterestResponseFieldMeta.ProcurementProjectLotReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
