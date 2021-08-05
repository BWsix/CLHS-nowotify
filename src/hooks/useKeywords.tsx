import { useState } from "react";
import { useEffect } from "react";

export const useKeywords = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [KEYWORD_TABLE, setKEYWORD_TABLE] = useState<string[][]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/BWsix/CLHS-nowotify-server/contents/keywords.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let content = data.content;
        content = decodeURIComponent(escape(atob(content)));
        content = JSON.parse(content);
        setKEYWORD_TABLE(content);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return { KEYWORD_TABLE, isLoading, error };
};
