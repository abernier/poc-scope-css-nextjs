"use client";

import { useState } from "react";

const colors = ["red", "green", "blue"];

export function Foo() {
  const [index, setIndex] = useState(0);

  return (
    <div onClick={() => setIndex((index) => (index + 1) % colors.length)}>
      <style>{`
        @scope {
          p {
            color: ${colors.at(index)};
          }
        }
      `}</style>

      <p>
        I am a Foo paragraph, `@scope`-style in red. I do not affect other
        paragraphs.
      </p>
    </div>
  );
}
