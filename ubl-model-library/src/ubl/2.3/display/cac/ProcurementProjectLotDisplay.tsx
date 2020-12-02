import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLot } from  '../../model/cac/ProcurementProjectLot'
import { ProcurementProjectLotFieldMeta } from  '../../meta/cac/ProcurementProjectLotMeta'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ProcurementProjectDisplay from './ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import TenderingProcessDisplay from './TenderingProcessDisplay'
import { TenderingProcess } from '../../model/cac/TenderingProcess'
import TenderingTermsDisplay from './TenderingTermsDisplay'
import { TenderingTerms } from '../../model/cac/TenderingTerms'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ProcurementProjectLot
  meta: FieldMeta<T>
}

export default function ProcurementProjectLotDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ProcurementProjectLotFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProcurementProjectLotFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.LegalDocumentReference} 
          value={value.LegalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ProcurementProjectLotFieldMeta.LegalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.TechnicalDocumentReference} 
          value={value.TechnicalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ProcurementProjectLotFieldMeta.TechnicalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.RequiredDocumentReference} 
          value={value.RequiredDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ProcurementProjectLotFieldMeta.RequiredDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.ProvidedDocumentReference} 
          value={value.ProvidedDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ProcurementProjectLotFieldMeta.ProvidedDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ProcurementProjectLotFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay key={key} meta={ProcurementProjectLotFieldMeta.TenderingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay key={key} meta={ProcurementProjectLotFieldMeta.TenderingProcess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectLotFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={ProcurementProjectLotFieldMeta.ProcurementProject} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
