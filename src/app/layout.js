import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'Aslan Jafarov — Front-End Developer',
  description:
    'Front-End Developer based in Messina, Italy. Building high-performance UIs, integrating AI into real products, and crafting experiences that convert.',
};

// Some browser extensions (Bitdefender TrafficLight / Anti-tracker) stamp attributes
// like bis_skin_checked="1" onto elements before React hydrates, which React then
// reports as a hydration mismatch. Strip them until hydration settles, then stop.
const stripExtensionAttributes = `
(function () {
  if (typeof MutationObserver === 'undefined') return;
  function injected(name) {
    return name.indexOf('bis_') === 0 || name.indexOf('__processed') === 0;
  }
  function clean(node) {
    if (!node || node.nodeType !== 1) return;
    var attrs = node.attributes;
    for (var i = attrs.length - 1; i >= 0; i--) {
      if (injected(attrs[i].name)) node.removeAttribute(attrs[i].name);
    }
    var kids = node.children;
    for (var j = 0; j < kids.length; j++) clean(kids[j]);
  }
  var observer = new MutationObserver(function (records) {
    for (var i = 0; i < records.length; i++) {
      var record = records[i];
      if (record.type === 'attributes') {
        if (injected(record.attributeName)) record.target.removeAttribute(record.attributeName);
      } else {
        for (var j = 0; j < record.addedNodes.length; j++) clean(record.addedNodes[j]);
      }
    }
  });
  observer.observe(document.documentElement, { subtree: true, childList: true, attributes: true });
  clean(document.documentElement);
  window.addEventListener('load', function () {
    setTimeout(function () { observer.disconnect(); }, 1000);
  });
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: stripExtensionAttributes }} />
        {children}
      </body>
    </html>
  );
}
