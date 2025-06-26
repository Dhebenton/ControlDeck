import { useState } from "react";
import ReloadIcon from '../../../assets/atri-summary/reloadsmall.svg';
import CopyIcon from '../../../assets/atri-summary/copy.svg';
import CloudDownIcon from '../../../assets/atri-summary/setbaseline.svg';
import PenIcon from '../../../assets/atri-summary/edit.svg';
import ReactMarkdown from 'react-markdown';
import CopyButton from "./CopyButton";
import EditButton from "./EditButton";
import RegenerateButton from "./RegenerateButton";
import MemoryButton from "./MemoryButton";

function ChatBotMessages({ loading, messages = [], onSubmit }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleEdit(index, currentText) {
    setEditingIndex(index);
    setEditValue(currentText);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (!editValue.trim()) return;
    setEditingIndex(null);
    onSubmit(editValue);
  }

  return (
    <>
      {messages.map((msg, index, atriType) => {
        const isLast = index === messages.length - 1;
        const showLoading = loading && msg.role === 'assistant' && isLast;
        const isEditing = editingIndex === index;

        return (
          <div key={index} className={`message-wrap ${msg.role === 'user' ? 'user' : 'assistant'}`}>
            <div className={`message ${isEditing ? 'message-form' : ''}`}>
              {isEditing ? (
                <form onSubmit={handleEditSubmit} >
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="edit-input"
                  />
                  <button type="submit" className="button-main small circle orange">Replace</button>
                </form>
              ) : (
                <>
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                  {showLoading && (
                    <div className="loading-bubble">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="message-button-wrap f-row g4">
              <CopyButton textToCopy={msg.content} />
              {msg.role === 'user' && !isEditing && (
              <EditButton 
                onClick={() => handleEdit(index, msg.content)}
                isEditing={isEditing}
              />
              )}
              {msg.role !== 'user' && (
                <>
                  <RegenerateButton
                      onClick={() => yourRegenerateHandler(index)}
                      disabled={loading}
                    />
                  <MemoryButton prompt={msg.content} atriType={atriType} />
                </>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ChatBotMessages;
