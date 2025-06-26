import Icon from '../../../assets/atri-summary/setbaseline.svg';
import Check from '../../../assets/atri-summary/check.svg';
import { useState } from 'react';

function MemoryButton({ prompt, atriType }) {
  const [copied, setCopied] = useState(false);

  async function handleUpdatePrompt() {
    await fetch('/api/storePrompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ atri_type: atriType, prompt })
    });

    setCopied(true);
    setTimeout(() => setCopied(false), 300);
  }

  return (
    <button
      className={`transparent-button animation ${copied ? 'active' : ''}`}
      onClick={handleUpdatePrompt}
    >
      <img src={Icon} alt="Update Prompt" />
      <img src={Check} alt="Updated" />
    </button>
  );
}

export default MemoryButton;
