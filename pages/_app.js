import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="dotted-grid">
      <Component {...pageProps} />
    </div>
  );
}
