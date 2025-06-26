import { useEffect, useRef } from 'react';
import SubmitIcon from '../../../../assets/buttons/submitbutton.svg';

function AtriInput({ handleFormMove, input, setInput, onSubmit }) {
  const formRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const input = inputRef.current;
    const handleFocus = () => form.classList.add("focused");
    const handleBlur = () => form.classList.remove("focused");
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  }

  return (
    <form
      ref={formRef}
      className="atri-input-form f-row g16"
      onSubmit={handleSubmit}
      onClick={handleFormMove}
    >
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your question"
        className="atri-input"
      />
      <button type="submit" className="button-main icon chat-submit orange circle">
        <img src={SubmitIcon} />
      </button>
    </form>
  );
}

export default AtriInput;
