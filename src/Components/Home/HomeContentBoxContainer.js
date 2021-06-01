import React, { useEffect, useState } from "react";
import HomeContentBox from "Components/Home/HomeContentBox";

const dummyContent = [
  "This is some content",
  "This is some other content",
  "More content on your website",
];

export default function HomeContentBoxContainer({theme}) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContent(dummyContent);
    }, 1000);
    return function cleanUp() {
      clearTimeout(contentTimer);
    };
  }, [setContent]);

  return (
    <div>
      {content.map((text) => (
        <HomeContentBox text={text} theme={theme} />
      ))}
    </div>
  );
}
