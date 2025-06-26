import { memo } from "react";
import ReloadIcon from '../../../assets/atri-summary/reloadsmall.svg';
import CopyIcon from '../../../assets/atri-summary/copy.svg'
import CloudDownIcon from '../../../assets/atri-summary/setbaseline.svg';
import PenIcon from '../../../assets/atri-summary/edit.svg';
import ReactMarkdown from 'react-markdown';

function ChatBotMessages({ loading, messages = [] }) {
  return (
    <>
      {messages.map((msg, index) => {
        const isLast = index === messages.length - 1;
        const showLoading = loading && msg.role === 'assistant' && isLast;

        return (
          <div key={index} className={`message-wrap ${msg.role === 'user' ? 'user' : 'assistant'}`}>
            <div className="message">
              <ReactMarkdown>{msg.content}</ReactMarkdown>
              {showLoading && (
                <div className="loading-bubble">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}
            </div>
            <div className="message-button-wrap f-row g4">
              <button className="transparent-button">
                <img src={CopyIcon} alt="Copy" />
              </button>
              <button className="transparent-button">
                <img src={PenIcon} alt="Edit" />
              </button>
              {msg.role !== 'user' && (
                <>
                  <button className="transparent-button">
                    <img src={ReloadIcon} alt="Regenerate" />
                  </button>
                  <button className="transparent-button">
                    <img src={CloudDownIcon} alt="Download" />
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default memo(ChatBotMessages);