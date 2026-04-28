import Image from "next/image";
import type { CSSProperties } from "react";

const palette = [
  { name: "горький шоколад", color: "#30261f" },
  { name: "орех", color: "#573d2e" },
  { name: "лён", color: "#b5a389" },
  { name: "пудра", color: "#dac9bf" },
  { name: "молочный", color: "#d5cab5" },
  { name: "шалфей", color: "#c5cfb3" },
  { name: "олива", color: "#506744" }
];

const timeline = [
  {
    time: "16:00",
    title: "сбор гостей",
    text: "встречаемся, обнимаемся и настраиваемся на тёплый вечер"
  },
  {
    time: "17:00",
    title: "церемония",
    text: "самый важный момент дня"
  },
  {
    time: "далее",
    title: "ужин и танцы",
    text: "еда, веселье, поздравления и праздник до позднего вечера"
  }
];

const qrPattern = [
  "1111111001111",
  "1000001000101",
  "1011101010111",
  "1011101001001",
  "1011101011101",
  "1000001010011",
  "1111111010101",
  "0000000011010",
  "1101011110101",
  "0100110001110",
  "1110101110001",
  "1001100101011",
  "1110111011101"
];

function Daisy({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`daisy ${className}`}
      viewBox="0 0 120 120"
      fill="none"
    >
      <g opacity="0.92">
        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse
            key={index}
            cx="60"
            cy="26"
            rx="11"
            ry="25"
            fill="#fffaf1"
            transform={`rotate(${index * 30} 60 60)`}
          />
        ))}
        <circle cx="60" cy="60" r="16" fill="#c9ad63" />
        <circle cx="55" cy="55" r="4" fill="#8d7439" opacity="0.35" />
      </g>
    </svg>
  );
}

function HeartMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 84 74"
      fill="none"
    >
      <path
        d="M41.6 68.3C28.8 55.8 7 43.2 7 23.7C7 13.7 14.4 6.6 23.8 6.6C31 6.6 36.4 10.4 41.6 16.7C46.8 10.4 52.2 6.6 59.4 6.6C68.8 6.6 76.2 13.7 76.2 23.7C76.2 43.2 54.4 55.8 41.6 68.3Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowRibbon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`flow-ribbon ${className}`}
      viewBox="0 0 620 180"
      fill="none"
    >
      <path
        className="flow-ribbon-line"
        d="M8 96C96 8 160 168 251 76C335 -8 391 156 484 72C535 26 576 48 612 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M312 116C299 104 278 92 278 73C278 62 286 54 297 54C304 54 309 58 312 63C316 58 321 54 328 54C339 54 347 62 347 73C347 92 326 104 312 116Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`leaf-sprig ${className}`}
      viewBox="0 0 210 190"
      fill="none"
    >
      <path
        d="M29 166C78 127 119 82 178 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        [61, 132, -34],
        [84, 111, 28],
        [109, 88, -32],
        [132, 65, 28],
        [155, 43, -30]
      ].map(([cx, cy, rotate]) => (
        <ellipse
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          rx="12"
          ry="30"
          fill="currentColor"
          opacity="0.35"
          transform={`rotate(${rotate} ${cx} ${cy})`}
        />
      ))}
    </svg>
  );
}

function Polaroid({
  label,
  initials,
  rotate
}: {
  label: string;
  initials: string;
  rotate: string;
}) {
  return (
    <figure
      className="polaroid"
      style={{ "--polaroid-rotate": rotate } as CSSProperties}
    >
      <div className="photo-placeholder">
        <span>{initials}</span>
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function Calendar() {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  const trailingDays = [1, 2, 3, 4, 5];

  return (
    <div className="calendar-shell" aria-label="Календарь на июнь 2026">
      <div className="calendar-title">
        <span>июнь</span>
        <strong>2026</strong>
      </div>
      <div className="calendar-week">
        {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="calendar-grid">
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${day === 26 ? "soft-ring" : ""} ${
              day === 29 ? "heart-day" : ""
            }`}
          >
            {day === 29 && <HeartMark className="heart-outline" />}
            <span>{day}</span>
          </div>
        ))}
        {trailingDays.map((day) => (
          <div key={`next-${day}`} className="calendar-day muted">
            <span>{day}</span>
          </div>
        ))}
      </div>
      <p className="calendar-note">собираемся 29 июня</p>
    </div>
  );
}

function DressPalette() {
  return (
    <div className="palette" aria-label="Цветовая гамма дресс-кода">
      {palette.map((item) => (
        <span key={item.name} title={item.name} style={{ background: item.color }} />
      ))}
    </div>
  );
}

function Timeline() {
  return (
    <div className="timeline-wrap">
      <svg className="timeline-line" viewBox="0 0 100 420" aria-hidden="true">
        <path
          d="M50 4C86 58 13 94 46 145C84 205 18 229 51 287C80 338 41 370 54 416"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
      </svg>
      {timeline.map((item, index) => (
        <article className="timeline-item" key={item.time}>
          <span className="timeline-heart" aria-hidden="true">
            ♥
          </span>
          <div>
            <time>{item.time}</time>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <span className="timeline-index">0{index + 1}</span>
        </article>
      ))}
    </div>
  );
}

function QrCode() {
  return (
    <div className="qr-frame" aria-label="QR-код Telegram-чата">
      <div className="qr-code">
        {qrPattern.flatMap((row, rowIndex) =>
          row.split("").map((cell, columnIndex) => (
            <span
              key={`${rowIndex}-${columnIndex}`}
              className={cell === "1" ? "active" : ""}
            />
          ))
        )}
      </div>
      <span className="qr-caption">telegram</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-root min-h-screen text-bark">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="invitation-canvas">
        <section className="hero-section paper-texture flow-section">
          <FlowRibbon className="hero-ribbon" />
          <Daisy className="hero-daisy-one" />
          <Daisy className="hero-daisy-two" />
          <div className="section-inner hero-inner">
            <div className="topline">
              <span>свадебное приглашение</span>
              <span>save the date</span>
            </div>

            <div className="hero-copy">
              <p className="script-small">наконец-то</p>
              <h1>
                <span>Мы</span>
                <span>женимся</span>
              </h1>
              <p>
                и очень хотим разделить этот день с теми, кто нам дорог. Приходите
                праздновать рождение нашей семьи.
              </p>
            </div>

            <div className="polaroid-row" aria-label="Детские фотографии">
              <Polaroid label="жених" initials="А" rotate="-7deg" />
              <Polaroid label="невеста" initials="Ю" rotate="5deg" />
            </div>
          </div>

          <div className="names-band">
            <span>Александр</span>
            <HeartMark className="names-heart" />
            <span>Юлия</span>
          </div>
        </section>

        <section className="intro-section section-pad flow-section">
          <LeafSprig className="intro-sprig" />
          <div className="section-inner intro-inner reveal-stack">
            <div className="section-label">дорогие друзья и близкие</div>
            <h2 className="section-title">Мы будем счастливы видеть вас рядом</h2>
            <div className="intro-text">
              <p>
                <strong>26.06.26</strong> состоится наше бракосочетание.
              </p>
              <p>
                <strong>29.06.26</strong> приглашаем вас отметить день рождения
                нашей семьи в тёплой загородной атмосфере.
              </p>
            </div>
          </div>
        </section>

        <section className="calendar-section section-pad flow-section">
          <Daisy className="calendar-daisy" />
          <div className="section-inner calendar-layout reveal-stack">
            <div className="calendar-copy">
              <span className="section-label">дата праздника</span>
              <h2 className="section-title">29 июня 2026</h2>
              <p>
                Отметьте этот понедельник в календаре: нас ждёт вечер с церемонией,
                ужином, поздравлениями и танцами.
              </p>
            </div>
            <Calendar />
          </div>
        </section>

        <section className="timing-section section-pad flow-section">
          <FlowRibbon className="timing-ribbon" />
          <div className="section-inner timing-inner reveal-stack">
            <span className="section-label">тайминг</span>
            <h2 className="section-title">Вечер без спешки</h2>
            <Timeline />
          </div>
        </section>

        <section className="location-section section-pad flow-section">
          <div className="section-inner location-layout reveal-stack">
            <div className="location-copy">
              <span className="section-label">локация</span>
              <h2 className="section-title">Загородный формат</h2>
              <p className="address-line">Адрес будет добавлен</p>
            </div>
            <div className="house-photo">
              <Image
                src="/images/house.png"
                alt="Дом, где пройдёт свадебный праздник"
                width={1119}
                height={1040}
                priority
              />
            </div>
          </div>
        </section>

        <section className="dress-section section-pad flow-section">
          <LeafSprig className="dress-sprig" />
          <div className="section-inner dress-layout reveal-stack">
            <div>
              <span className="section-label">дресс-код</span>
              <h2 className="section-title">Природные пастельные оттенки</h2>
              <p>
                Так как праздник пройдёт в загородном формате, нам будет особенно
                приятно, если вы поддержите атмосферу и выберете наряды из лёгких
                тканей в природных пастельных оттенках.
              </p>
            </div>
            <DressPalette />
          </div>
        </section>

        <section className="details-section section-pad flow-section">
          <div className="section-inner details-layout reveal-stack">
            <div className="details-note">
              <span className="section-label">с собой</span>
              <p>
                По желанию возьмите купальные принадлежности, вещи для бани и второй
                комплект удобной одежды.
              </p>
            </div>
            <div className="chat-note">
              <div>
                <span className="section-label">чат</span>
                <p>
                  Мы создали Telegram-чат праздника: там будет вся актуальная
                  информация, а после мероприятия можно будет поделиться фото и видео.
                </p>
              </div>
              <QrCode />
            </div>
          </div>
        </section>

        <section className="final-section paper-texture flow-section">
          <Daisy className="final-daisy-one" />
          <Daisy className="final-daisy-two" />
          <FlowRibbon className="final-ribbon" />
          <div className="section-inner final-inner reveal-stack">
            <figure className="couple-photo">
              <div>
                <span>А + Ю</span>
              </div>
            </figure>
            <p className="final-script">Ждём вас</p>
            <h2>с любовью, Александр и Юлия</h2>
          </div>
        </section>
      </div>
    </main>
  );
}
