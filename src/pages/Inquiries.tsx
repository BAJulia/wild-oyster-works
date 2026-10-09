import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { artworks, getArtwork } from '../data/artworks';
import { site } from '../data/site';

const inquiryTypes = [
  { id: 'purchase', label: 'Purchase an artwork', hint: 'Ask about a piece in the gallery.' },
  { id: 'commission', label: 'Commission a piece', hint: 'A painting, a piece of furniture, a wreath for an occasion.' },
  { id: 'collaboration', label: 'Collaborate', hint: 'Galleries, designers, charities and other makers.' },
  { id: 'general', label: 'Say hello', hint: 'Anything else.' },
] as const;

type InquiryType = (typeof inquiryTypes)[number]['id'];

export function Inquiries() {
  const [params] = useSearchParams();
  const initialType = inquiryTypes.find((t) => t.id === params.get('type'))?.id ?? 'general';
  const initialArtwork = getArtwork(params.get('artwork') ?? '')?.slug ?? '';

  const [type, setType] = useState<InquiryType>(initialType);
  const [artworkSlug, setArtworkSlug] = useState(initialArtwork);
  const [name, setName] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [message, setMessage] = useState('');
  const [composed, setComposed] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const typeLabel = inquiryTypes.find((t) => t.id === type)!.label;
  const artwork = getArtwork(artworkSlug);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `${typeLabel}${artwork ? ` — ${artwork.title}` : ''}`;
    const body = [
      message.trim(),
      '',
      `Name: ${name.trim()}`,
      `Email: ${replyTo.trim()}`,
      artwork ? `Artwork: ${artwork.title} (${window.location.origin}/gallery/${artwork.slug})` : '',
    ]
      .filter((line, i, all) => line !== '' || (i > 0 && all[i - 1] !== ''))
      .join('\n');

    if (site.contactEmail) {
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setComposed({ subject, body });
    setCopied(false);
  };

  const copy = async () => {
    if (!composed) return;
    try {
      await navigator.clipboard.writeText(`Subject: ${composed.subject}\n\n${composed.body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="page inquiries">
      <header className="page-header">
        <p className="eyebrow">Inquiries</p>
        <h1>Let's talk</h1>
        <p className="lede">
          Whether you've fallen for a piece in the gallery or have an old dresser that deserves a second life, we'd be
          glad to hear from you.
        </p>
      </header>

      <form className="inquiry-form" onSubmit={onSubmit}>
        <fieldset className="inquiry-types">
          <legend>What would you like to ask about?</legend>
          {inquiryTypes.map((t) => (
            <label key={t.id} className={type === t.id ? 'is-selected' : ''}>
              <input type="radio" name="type" value={t.id} checked={type === t.id} onChange={() => setType(t.id)} />
              <span className="inquiry-types__label">{t.label}</span>
              <span className="inquiry-types__hint">{t.hint}</span>
            </label>
          ))}
        </fieldset>

        <div className="field-row">
          <label className="field">
            <span>Your name</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
          </label>
          <label className="field">
            <span>Your email</span>
            <input
              type="email"
              value={replyTo}
              onChange={(e) => setReplyTo(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
        </div>

        {(type === 'purchase' || type === 'commission' || artworkSlug) && (
          <label className="field">
            <span>{type === 'commission' ? 'A piece you have in mind (optional)' : 'Artwork'}</span>
            <select value={artworkSlug} onChange={(e) => setArtworkSlug(e.target.value)}>
              <option value="">— None selected —</option>
              {artworks.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.title}
                </option>
              ))}
            </select>
          </label>
        )}

        <label className="field">
          <span>Message</span>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
        </label>

        <button type="submit" className="button">
          {site.contactEmail ? 'Open in my email' : 'Prepare my message'}
        </button>
      </form>

      {composed && (
        <section className="composed" aria-live="polite">
          {site.contactEmail ? (
            <p>
              Your email program should open with this message ready to send. If it doesn't, copy it and send it to{' '}
              <strong>{site.contactEmail}</strong>.
            </p>
          ) : (
            <p>
              Our inquiry address is being set up. Your message is ready below — please copy it and keep it handy.
            </p>
          )}
          <pre>
            Subject: {composed.subject}
            {'\n\n'}
            {composed.body}
          </pre>
          <button type="button" className="button button--quiet" onClick={copy}>
            {copied ? 'Copied' : 'Copy message'}
          </button>
        </section>
      )}
    </div>
  );
}
