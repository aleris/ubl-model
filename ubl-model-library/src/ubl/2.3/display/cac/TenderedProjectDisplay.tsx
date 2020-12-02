import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderedProject } from  '../../model/cac/TenderedProject'
import { TenderedProjectFieldMeta } from  '../../meta/cac/TenderedProjectMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import AwardingCriterionResponseDisplay from './AwardingCriterionResponseDisplay'
import { AwardingCriterionResponse } from '../../model/cac/AwardingCriterionResponse'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import FeeDisplay from './FeeDisplay'
import { Fee } from '../../model/cac/Fee'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MonetaryTotalDisplay from './MonetaryTotalDisplay'
import { MonetaryTotal } from '../../model/cac/MonetaryTotal'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TenderLineDisplay from './TenderLineDisplay'
import { TenderLine } from '../../model/cac/TenderLine'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderedProject
  meta: FieldMeta<T>
}

export default function TenderedProjectDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderedProjectFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderedProjectFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.VariantID} 
          value={value.VariantID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderedProjectFieldMeta.VariantID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.FeeAmount} 
          value={value.FeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderedProjectFieldMeta.FeeAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.FeeDescription} 
          value={value.FeeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderedProjectFieldMeta.FeeDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.TenderEnvelopeID} 
          value={value.TenderEnvelopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderedProjectFieldMeta.TenderEnvelopeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.TenderEnvelopeTypeCode} 
          value={value.TenderEnvelopeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderedProjectFieldMeta.TenderEnvelopeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={TenderedProjectFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.EvidenceDocumentReference} 
          value={value.EvidenceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderedProjectFieldMeta.EvidenceDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={TenderedProjectFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay key={key} meta={TenderedProjectFieldMeta.LegalMonetaryTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.TenderLine} 
          value={value.TenderLine}
          itemDisplay={ (itemValue: TenderLine, key: string | number) =>
            <TenderLineDisplay key={key} meta={TenderedProjectFieldMeta.TenderLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.AwardingCriterionResponse} 
          value={value.AwardingCriterionResponse}
          itemDisplay={ (itemValue: AwardingCriterionResponse, key: string | number) =>
            <AwardingCriterionResponseDisplay key={key} meta={TenderedProjectFieldMeta.AwardingCriterionResponse} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderedProjectFieldMeta.AdditionalFee} 
          value={value.AdditionalFee}
          itemDisplay={ (itemValue: Fee, key: string | number) =>
            <FeeDisplay key={key} meta={TenderedProjectFieldMeta.AdditionalFee} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
