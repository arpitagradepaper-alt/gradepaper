import { useEffect, useRef, useState } from "react";
import "./BeforeAfter.css";

const ROWS = [
  [
    "Leads scattered across multiple tools",
    "Manual lead qualification",
    "Generic outreach messages",
    "Every lead in one intelligent workspace",
    "AI-powered lead qualification",
    "Contextual AI-powered personalization",
  ],
  [
    "Undefined lead priorities",
    "Manual follow-up sequences",
    "Limited pipeline visibility",
    "AI-powered lead scoring",
    "Automated multi-step follow-ups",
    "Real-time pipeline visibility",
  ],
];

/* =========================================================
   CARD
========================================================= */

function Card({ text, index }) {
  return (
    <div className="ba-card">
      <div className="ba-card-icon">
        {index % 2 === 0 ? "×" : "!"}
      </div>

      <span>{text}</span>
    </div>
  );
}

/* =========================================================
   TRACK
========================================================= */

function Track({ items }) {
  const repeatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div className="ba-track">
      {repeatedItems.map((text, index) => (
        <Card
          key={`${text}-${index}`}
          text={text}
          index={index}
        />
      ))}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BeforeAfter() {
  const wrapperRef = useRef(null);
  const draggingRef = useRef(false);

  const [dividerPosition, setDividerPosition] =
    useState(50);

  /* =======================================================
     UPDATE DIVIDER POSITION
  ======================================================= */

  const updateDivider = (clientX) => {
    if (!wrapperRef.current) return;

    const rect =
      wrapperRef.current.getBoundingClientRect();

    let position =
      ((clientX - rect.left) / rect.width) * 100;

    position = Math.max(
      5,
      Math.min(95, position)
    );

    setDividerPosition(position);
  };

  /* =======================================================
     START DRAGGING
  ======================================================= */

  const handlePointerDown = (event) => {
    event.preventDefault();

    draggingRef.current = true;

    updateDivider(event.clientX);

    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(
        event.pointerId
      );
    }
  };

  /* =======================================================
     DRAGGING
  ======================================================= */

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!draggingRef.current) return;

      updateDivider(event.clientX);
    };

    const handlePointerUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );
    };
  }, []);

  return (
    <section className="before-after-section">

      {/* =================================================
          HEADING
      ================================================= */}

      <div className="before-after-heading">
        <h2>
          From scattered leads to{" "}
          <span>intelligent growth</span>
        </h2>
      </div>

      {/* =================================================
          OUTER WRAPPER

          IMPORTANT:
          Button is outside ba-stage so ba-stage overflow
          cannot hide or cut the button.
      ================================================= */}

      <div
        ref={wrapperRef}
        className="ba-stage-wrapper"
      >

        {/* =============================================
            BEFORE / AFTER BUTTON
        ============================================= */}

        <div
          className="ba-connected-control"
          style={{
            left: `${dividerPosition}%`,
          }}
          onPointerDown={handlePointerDown}
        >
          <div className="ba-connected-label ba-connected-before">
            Before
          </div>

          <div className="ba-connected-arrow">
            ↔
          </div>

          <div className="ba-connected-label ba-connected-after">
            After
          </div>
        </div>

        {/* =============================================
            MAIN STAGE
        ============================================= */}

        <div
          className="ba-stage"
          style={{
            "--divider-position":
              `${dividerPosition}%`,
          }}
        >

          {/* BACKGROUNDS */}

          <div className="ba-left-background" />

          <div className="ba-right-background" />

          {/* ===========================================
              GREY CONTENT
          =========================================== */}

          <div className="ba-moving-layer ba-grey-layer">

            <div className="ba-row ba-row-1">
              <Track items={ROWS[0]} />
            </div>

            <div className="ba-row ba-row-2">
              <Track items={ROWS[1]} />
            </div>

          </div>

          {/* ===========================================
              BLUE CONTENT
          =========================================== */}

          <div className="ba-moving-layer ba-blue-layer">

            <div className="ba-row ba-row-1">
              <Track items={ROWS[0]} />
            </div>

            <div className="ba-row ba-row-2">
              <Track items={ROWS[1]} />
            </div>

          </div>

          {/* ===========================================
              DRAGGABLE DIVIDER
          =========================================== */}

          <div
            className="ba-divider"
            style={{
              left: `${dividerPosition}%`,
            }}
            onPointerDown={handlePointerDown}
          >

            <div className="ba-divider-line" />

            <div className="ba-divider-handle">
              ↔
            </div>

            <div className="ba-divider-dot" />

          </div>

        </div>

      </div>

      {/* =================================================
          BOTTOM CONTENT
      ================================================= */}

      <div className="ba-bottom">

        <h3>
          One workspace.
          <br />
          Smarter lead management.
        </h3>

        <p>
          GradeLead brings your leads, AI qualification,
          personalization and follow-ups together in one
          intelligent workspace.
        </p>

      </div>

    </section>
  );
}