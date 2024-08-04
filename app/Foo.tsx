export function Foo() {
  return (
    <div>
      <style>{`
        @scope {
          p {
            color: red;
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
