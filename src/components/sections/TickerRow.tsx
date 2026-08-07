import { TICKER_ITEMS } from "../../content/site";

export function TickerRow() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="ticker-wrap overflow-hidden border-y border-line bg-paper-2 py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-7 pr-7 whitespace-nowrap font-display text-lg text-ink"
          >
            {item}
            <span className="text-sm text-saffron">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
