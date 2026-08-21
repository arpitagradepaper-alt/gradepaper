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
  /*
    Multiple copies create a continuous marquee.
  */

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
  const stageRef = useRef(null);

  const draggingRef = useRef(false);

  const [dividerPosition, setDividerPosition] =
    useState(50);


  /* =======================================================
     UPDATE DIVIDER
  ======================================================= */

  const updateDivider = (clientX) => {
    if (!stageRef.current) return;

    const rect =
      stageRef.current.getBoundingClientRect();

    let position =
      ((clientX - rect.left) / rect.width) * 100;

    /*
      Keep divider inside the stage.
    */

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
  };


  /* =======================================================
     GLOBAL DRAGGING
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
          MAIN STAGE
      ================================================= */}

      <div
        ref={stageRef}
        className="ba-stage"
        style={{
          "--divider-position":
            `${dividerPosition}%`,
        }}
      >


        {/* =================================================
            GREY BACKGROUND
        ================================================= */}

        <div className="ba-left-background" />


        {/* =================================================
            BLUE BACKGROUND
        ================================================= */}

        <div className="ba-right-background" />


        {/* =================================================
            GREY MOVING CONTENT
        ================================================= */}

        <div className="ba-moving-layer ba-grey-layer">

          <div className="ba-row ba-row-1">
            <Track items={ROWS[0]} />
          </div>

          <div className="ba-row ba-row-2">
            <Track items={ROWS[1]} />
          </div>

        </div>


        {/* =================================================
            BLUE MOVING CONTENT
        ================================================= */}

        <div className="ba-moving-layer ba-blue-layer">

          <div className="ba-row ba-row-1">
            <Track items={ROWS[0]} />
          </div>

          <div className="ba-row ba-row-2">
            <Track items={ROWS[1]} />
          </div>

        </div>


        {/* =================================================
            CONNECTED DRAGGABLE DIVIDER
        ================================================= */}

        <div
          className="ba-divider"
          style={{
            left: `${dividerPosition}%`,
          }}
          onPointerDown={handlePointerDown}
        >


          {/* =================================================
              BEFORE / AFTER CONTROL
          ================================================= */}

          <div className="ba-connected-control">

            <div
              className="
                ba-connected-label
                ba-connected-before
              "
            >
              Before
            </div>


            <div className="ba-connected-arrow">
              ↔
            </div>


            <div
              className="
                ba-connected-label
                ba-connected-after
              "
            >
              After
            </div>

          </div>


          {/* =================================================
              LONG DIVIDER LINE
          ================================================= */}

          <div className="ba-divider-line" />


          {/* =================================================
              VERTICAL DRAG HANDLE
          ================================================= */}

          <div className="ba-divider-handle">
            ↕
          </div>


          {/* =================================================
              BOTTOM DOT
          ================================================= */}

          <div className="ba-divider-dot" />

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