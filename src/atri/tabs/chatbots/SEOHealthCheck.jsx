import { useState, useRef, useEffect } from "react";
import ChatbotIcon from '../../assets/chatbot/Union.svg';
import './../../Atri.css';
import AtriInput from "./Components/AtriInput";
import ChatBotMessages from "./Components/AtriMessages";
import { getChatbotConfig } from './Components/chatbotConfig';

function SEOHealthCheck({ type = "seoHealthCheck" }) {
  const config = getChatbotConfig(type);

  const [formMove, setFormMove] = useState(false);
  const [iconFadeOut, setIconFadeOut] = useState(false);
  const [iconFadeOutDelay, setIconFadeOutDelay] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);
  const [hideSuggestions, setHideSuggestions] = useState(false);
  const [fadeSuggestions, setFadeSuggestions] = useState(false);

  function handleFormMove() {
    setFormMove(true);
    setIconFadeOutDelay(true);
    setTimeout(() => setIconFadeOut(true), 500);
    setFadeSuggestions(true);
    setTimeout(() => setHideSuggestions(true), 300);
  }

  async function handleSubmit(userPrompt) {
    const trimmed = userPrompt.trim();
    if (!trimmed) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages(prev => [...prev, userMessage, { role: 'assistant', content: '' }]);
    setLoading(true);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: config.systemMessage },
            ...messages,
            userMessage
          ]
        })
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let fullMessage = '';

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(line => line.startsWith("data: "));

        for (const line of lines) {
          const text = line.replace("data: ", "");
          if (text === "[DONE]") {
            setLoading(false);
            return;
          }

          fullMessage += text;

          setMessages(prev => {
            const updated = [...prev];
            const lastIdx = updated.length - 1;
            if (updated[lastIdx].role === 'assistant') {
              updated[lastIdx] = { ...updated[lastIdx], content: fullMessage };
            }
            return updated;
          });
        }
      }
    } catch (err) {
      console.error("Streaming error:", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

    const allPrompts = [
    "How can I improve my website's search visibility?",
    "What are the top reasons for a drop in keyword rankings?",
    "How do I fix crawl errors reported in Google Search Console?",
    "Why are some pages not indexed by Google?",
    "How do I conduct a proper SEO audit?",
    "What’s the impact of duplicate content on SEO?",
    "Which tools can identify broken backlinks?",
    "How do I increase organic traffic sustainably?",
    "What’s the best way to structure a robots.txt file?",
    "Why is my sitemap not submitting properly?",
    "What metrics define good SEO health?",
    "How can I track keyword performance effectively?",
    "Why is my bounce rate high from organic traffic?",
    "Should I prioritize mobile SEO over desktop?",
    "How do I fix slow-loading pages for SEO benefit?",
    "How does schema markup impact rankings?",
    "What’s the difference between on-page and technical SEO?",
    "Can I improve rankings without building backlinks?",
    "How do I monitor changes in my domain authority?",
    "What’s causing high impressions but low clicks?",
    "How do I optimize title tags for better SEO?",
    "Is HTTPS necessary for SEO in 2025?",
    "Why are internal links important for SEO health?",
    "What’s the ideal word count for SEO-optimized content?",
    "How can I detect harmful backlinks?",
    "How do I fix soft 404 errors?",
    "Why are my meta descriptions being ignored in search results?",
    "How do I identify thin content pages?",
    "What’s the role of page experience in rankings?",
    "Can too many redirects hurt my SEO?",
    "How do I audit my backlink profile?",
    "What’s the best way to optimize image alt text?",
    "How does Core Web Vitals affect SEO?",
    "How do I handle duplicate H1 tags?",
    "What tools can scan my site for SEO issues?",
    "What is a canonical tag and how do I use it?",
    "How do I fix keyword cannibalization?",
    "What’s the impact of JavaScript-heavy pages on SEO?",
    "How can I make my URLs more SEO friendly?",
    "Should I use subdomains or subdirectories?",
    "How do I optimize a blog post for SEO?",
    "Why is my site being flagged for spam links?",
    "What’s a healthy click-through rate from search?",
    "How do I detect noindex tags on important pages?",
    "Can I rank locally without a Google Business Profile?",
    "What role does site structure play in SEO?",
    "How do I use Google Trends for SEO?",
    "How can I monitor SERP changes over time?",
    "How do I fix canonical conflicts in my HTML?",
    "Is my site over-optimized for SEO?"
    ];


  const promptSuggestions = allPrompts.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="chat-bot-panel f-col g12">
      {!iconFadeOut && (
        <div className={`chatbot-icon-wrap ${iconFadeOutDelay ? 'fade' : ""} f-col g16`}>
          <img src={ChatbotIcon} />
          <p>Ask about your website's <br />SEO health</p>
        </div>
      )}
      <div className={`chat-window ${formMove ? 'active' : ''} f-col g24`}>
        <div className="message-window f-col g36">
          {formMove && <ChatBotMessages atriType={type} messages={messages} loading={loading} />}
          <div ref={messageEndRef} />
        </div>
        {!hideSuggestions && (
          <div className={`prompt-suggestion-wrap f-row g16 ${fadeSuggestions ? 'fade-out' : ''}`}>
            {promptSuggestions.map((text, i) => (
              <button
                key={i}
                className="prompt-suggestion"
                onClick={() => {
                  handleFormMove();
                  handleSubmit(text);
                }}
              >
                {text}
              </button>
            ))}
          </div>
        )}
        <AtriInput
          handleFormMove={handleFormMove}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default SEOHealthCheck;
