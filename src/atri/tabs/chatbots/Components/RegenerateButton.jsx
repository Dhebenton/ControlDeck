import ReloadIcon from '../../../assets/atri-summary/reloadsmall.svg';
import { useState } from 'react';

function RegenerateButton({ onClick, disabled }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (loading || disabled) return;
    setLoading(true);
    try {
      await onClick?.();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className="transparent-button"
      onClick={handleClick}
      disabled={loading || disabled}
    >
      <img src={ReloadIcon} alt="Regenerate" />
    </button>
  );
}

export default RegenerateButton;
