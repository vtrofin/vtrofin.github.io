import { useEffect, useState } from "react";

const botUserAgentRegex =
  /bot|googlebot|crawler|spider|robot|crawling|google|baidu|bing|msn|teoma|slurp|yandex/i;

function useBotDetection(): { isBot: boolean } {
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const agent = window.navigator.userAgent ?? "";
    setIsBot(botUserAgentRegex.test(agent));
  }, []);

  return { isBot };
}

export { useBotDetection };
