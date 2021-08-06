import { useState, useEffect } from "react";
const API_ROOT =
  "https://api.github.com/repos/BWsix/CLHS-nowotify-server/contents/data/";

export const useGithubData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [KEYWORD_TABLE, setKEYWORD_TABLE] = useState<string[][]>([]);
  const [GROUP_TABLE, setGROUP_TABLE] = useState<
    { name: string; id: string }[]
  >([]);

  useEffect(() => {
    fetch(API_ROOT + "keywords.json")
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

    fetch(API_ROOT + "groups.json")
      .then((res) => res.json())
      .then((data) => {
        let content = data.content;
        content = decodeURIComponent(escape(atob(content)));
        content = JSON.parse(content);
        let ids = Object.keys(content);

        setGROUP_TABLE(
          ids.map((id) => ({ id, name: content[id].display_name }))
        );

        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return { KEYWORD_TABLE, GROUP_TABLE, isLoading, error };
};
