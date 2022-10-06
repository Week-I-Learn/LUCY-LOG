import React from "react";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { Code } from "react-notion-x/build/third-party/code";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";
export default function ui_library({ recordMap }) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        Code,
        Equation,
        Modal,
        Pdf,
      }}
      fullPage={true}
      darkMode={false}
    />
  );
}

export async function getStaticProps() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("8e5492e77bac422e9d28b8222d785a51");
  return {
    props: {
      recordMap,
    },
  };
}

// https://iamalucy.notion.site/UI-8e5492e77bac422e9d28b8222d785a51
