// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
          <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/images/HP-favicon.JPG" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
