import Icon from '../../../assets/atri-summary/copy.svg';
import Check from '../../../assets/atri-summary/check.svg'
import { useState } from 'react';

function CopyButton({ textToCopy }) {
    const [ copied, setCopied ] = useState(false)

    function handleCopy() {
        if (!textToCopy) return;
        navigator.clipboard.writeText(textToCopy).catch(console.error);
        setCopied(true);
        setTimeout(() => setCopied(false), 300)
    }

    return (
        <button className={`transparent-button animation ${copied ? 'active' : ''}`} onClick={handleCopy}>
            <img src={Icon} />
            <img src={Check} />
        </button>
    );
}

export default CopyButton;
