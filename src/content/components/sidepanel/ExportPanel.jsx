import Icon from '../../assets/sidepanel/export.svg'
import { useUndoState } from '../../../UndoContent'
import ClosePanelIcon from '../../../assets/buttons/closenav.svg'
import Linkicon from '../../assets/sidepanel/link.svg'
import PDFIcon from '../../assets/sidepanel/pdf.svg'
import CSVIcon from '../../assets/sidepanel/csv.svg'

function ExportPanel({ handleSidePanel }) {
    return (
        <>
            <div className="sidepanel-top-block f-row g8">
                <img src={Icon} />
                <p>Export</p>
                <div className="flex f-row j-f-e">
                    <button className="transparent-button" onClick={handleSidePanel}>
                        <img src={ClosePanelIcon} className="flip-h"/>
                    </button>
                </div>
            </div>
            <div className="f-col g12 export-as-list">
                    <button className="button-main flex-export-as">
                        <img src={Linkicon} />
                        Share Link
                    </button>
                </div>
        </>
    )
}

export default ExportPanel