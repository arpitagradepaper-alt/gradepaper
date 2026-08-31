import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import "./Navbar.css";

import gradleadLogo from "../assets/gradlead-logo.png";

/* =========================================================
   MENU DATA
========================================================= */

const MENU_DATA = {
  features: {
    items: [
      {
        icon: "◫",
        title: "Lead Capture",
        description:
          "Capture every lead, inquiry, and opportunity from every channel.",
        links: [
          {
            label: "Unified lead inbox",
            to: "/features/lead-inbox",
          },
          {
            label: "Multi-channel capture",
            to: "/features/lead-capture",
          },
          {
            label: "Instant lead tracking",
            to: "/features/lead-tracking",
          },
        ],
      },
      {
        icon: "✦",
        title: "Lead Intelligence",
        description:
          "Understand your leads and identify the opportunities that matter most.",
        links: [
          {
            label: "AI-powered qualification",
            to: "/features/qualification",
          },
          {
            label: "Intent signals",
            to: "/features/intent-signals",
          },
          {
            label: "Smart lead scoring",
            to: "/features/lead-scoring",
          },
        ],
      },
      {
        icon: "◉",
        title: "Lead Prioritization",
        description:
          "Automatically focus your team on the highest-value opportunities.",
        links: [
          {
            label: "Priority ranking",
            to: "/features/prioritization",
          },
          {
            label: "Buying intent insights",
            to: "/features/buying-intent",
          },
          {
            label: "Opportunity alerts",
            to: "/features/alerts",
          },
        ],
      },
      {
        icon: "✉",
        title: "Engagement",
        description:
          "Create personalized conversations across every important touchpoint.",
        links: [
          {
            label: "Personalized messaging",
            to: "/features/messaging",
          },
          {
            label: "Automated outreach",
            to: "/features/outreach",
          },
          {
            label: "Conversation tracking",
            to: "/features/conversations",
          },
        ],
      },
    ],
  },

  solutions: {
    items: [
      {
        icon: "⌕",
        title: "Find Better Opportunities",
        description:
          "Discover and organize the leads that are most relevant to your business.",
        links: [
          {
            label: "Centralized lead data",
            to: "/solutions/lead-data",
          },
          {
            label: "Smart segmentation",
            to: "/solutions/segmentation",
          },
          {
            label: "Better targeting",
            to: "/solutions/targeting",
          },
        ],
      },
      {
        icon: "✦",
        title: "Work Smarter With AI",
        description:
          "Use intelligent insights to understand which opportunities deserve attention.",
        links: [
          {
            label: "AI qualification",
            to: "/solutions/ai-qualification",
          },
          {
            label: "Intent detection",
            to: "/solutions/intent-detection",
          },
          {
            label: "Conversion insights",
            to: "/solutions/conversion-insights",
          },
        ],
      },
      {
        icon: "↗",
        title: "Accelerate Growth",
        description:
          "Help your team move faster from first interaction to conversion.",
        links: [
          {
            label: "Automated workflows",
            to: "/solutions/automation",
          },
          {
            label: "Timely follow-ups",
            to: "/solutions/follow-ups",
          },
          {
            label: "Faster conversions",
            to: "/solutions/conversions",
          },
        ],
      },
      {
        icon: "◎",
        title: "Scale Your Sales Process",
        description:
          "Build a consistent and scalable process for managing every opportunity.",
        links: [
          {
            label: "Team collaboration",
            to: "/solutions/collaboration",
          },
          {
            label: "Process automation",
            to: "/solutions/process-automation",
          },
          {
            label: "Performance visibility",
            to: "/solutions/analytics",
          },
        ],
      },
    ],
  },

  howItWorks: {
    items: [
      {
        icon: "01",
        title: "Capture",
        description:
          "Bring every lead and inquiry from every source into one workspace.",
        links: [
          {
            label: "Website forms",
            to: "/how-it-works/capture",
          },
          {
            label: "Social channels",
            to: "/how-it-works/social",
          },
          {
            label: "Campaign leads",
            to: "/how-it-works/campaigns",
          },
        ],
      },
      {
        icon: "02",
        title: "Qualify",
        description:
          "Understand intent and identify which opportunities have the highest potential.",
        links: [
          {
            label: "Lead intelligence",
            to: "/how-it-works/intelligence",
          },
          {
            label: "Intent signals",
            to: "/how-it-works/intent",
          },
          {
            label: "AI qualification",
            to: "/how-it-works/qualification",
          },
        ],
      },
      {
        icon: "03",
        title: "Engage",
        description:
          "Create relevant conversations and build stronger relationships.",
        links: [
          {
            label: "Personalized outreach",
            to: "/how-it-works/outreach",
          },
          {
            label: "Automated follow-ups",
            to: "/how-it-works/follow-ups",
          },
          {
            label: "Conversation history",
            to: "/how-it-works/conversations",
          },
        ],
      },
      {
        icon: "04",
        title: "Convert",
        description:
          "Move qualified opportunities forward and turn them into customers.",
        links: [
          {
            label: "Pipeline visibility",
            to: "/how-it-works/pipeline",
          },
          {
            label: "Conversion insights",
            to: "/how-it-works/conversion",
          },
          {
            label: "Revenue growth",
            to: "/how-it-works/revenue",
          },
        ],
      },
    ],
  },

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  industries: {
    items: [
      {
        icon: "⌂",
        title: "Real Estate",
        description:
          "Capture property inquiries, identify serious buyers, and convert more real estate opportunities.",
        links: [
          {
            label: "Real Estate Overview",
            to: "/industries/real-estate",
          },
        ],
      },
      {
        icon: "▣",
        title: "Education",
        description:
          "Capture student inquiries, understand enrollment intent, and engage prospective students faster.",
        links: [
          {
            label: "Education Overview",
            to: "/industries/education",
          },
        ],
      },
    ],
  },

  integrations: {
    items: [
      {
        icon: "↔",
        title: "Connect Your Tools",
        description:
          "Bring your existing sales and marketing tools together.",
        links: [
          {
            label: "CRM integrations",
            to: "/integrations/crm",
          },
          {
            label: "Marketing platforms",
            to: "/integrations/marketing",
          },
          {
            label: "Communication tools",
            to: "/integrations/communication",
          },
        ],
      },
      {
        icon: "◌",
        title: "Unified Data",
        description:
          "Keep important lead information connected across your workflow.",
        links: [
          {
            label: "Data synchronization",
            to: "/integrations/data-sync",
          },
          {
            label: "Centralized records",
            to: "/integrations/records",
          },
          {
            label: "Real-time updates",
            to: "/integrations/real-time",
          },
        ],
      },
      {
        icon: "⚙",
        title: "Automated Workflows",
        description:
          "Create connected workflows that reduce manual work for your team.",
        links: [
          {
            label: "Workflow automation",
            to: "/integrations/workflows",
          },
          {
            label: "Smart triggers",
            to: "/integrations/triggers",
          },
          {
            label: "Action sequences",
            to: "/integrations/actions",
          },
        ],
      },
      {
        icon: "∞",
        title: "Built To Scale",
        description:
          "Create a connected ecosystem that grows alongside your business.",
        links: [
          {
            label: "Flexible integrations",
            to: "/integrations/flexible",
          },
          {
            label: "Scalable workflows",
            to: "/integrations/scalable",
          },
          {
            label: "Growing ecosystem",
            to: "/integrations/ecosystem",
          },
        ],
      },
    ],
  },
};


/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const NAV_ITEMS = [
  {
    key: "features",
    label: "Features",
    to: "/#features",
  },
  {
    key: "solutions",
    label: "Solutions",
    to: "/#solutions",
  },
  {
    key: "howItWorks",
    label: "How It Works",
    to: "/#how-it-works",
  },
  {
    key: "industries",
    label: "Industries",
    to: "/#industries",
  },
  {
    key: "integrations",
    label: "Integrations",
    to: "/#integrations",
  },
];

const MOBILE_BREAKPOINT = 1200;


/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" &&
      window.innerWidth <= MOBILE_BREAKPOINT
  );

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);


  /* =========================================================
     RESPONSIVE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      const mobile =
        window.innerWidth <= MOBILE_BREAKPOINT;

      setIsMobile(mobile);

      if (mobile) {
        setActiveMenu(null);
      } else {
        setMobileMenuOpen(false);
        setMobileActiveMenu(null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  /* =========================================================
     CLOSE MENUS ON PAGE CHANGE
  ========================================================= */

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileActiveMenu(null);
  }, [location.pathname]);


  /* =========================================================
     BODY LOCK
  ========================================================= */

  useEffect(() => {
    if (isMobile && mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, mobileMenuOpen]);


  /* =========================================================
     ESCAPE
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
        setMobileActiveMenu(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  /* =========================================================
     DESKTOP MENU
  ========================================================= */

  const handleDesktopMenuEnter = (menuKey) => {
    if (!isMobile) {
      setActiveMenu(menuKey);
    }
  };


  /* =========================================================
     DESKTOP NAV CLICK
  ========================================================= */

  const handleNavClick = (event, menu) => {
    /*
      Industries should only open its dropdown.
      The actual pages are inside the dropdown.
    */

    if (menu.key === "industries") {
      event.preventDefault();

      setActiveMenu((previous) =>
        previous === "industries"
          ? null
          : "industries"
      );

      return;
    }

    setActiveMenu(null);
  };


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const toggleMobileMenu = () => {
    setMobileMenuOpen(
      (previous) => !previous
    );

    setMobileActiveMenu(null);
  };


  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileActiveMenu(null);
  };


  const toggleMobileDropdown = (menuKey) => {
    setMobileActiveMenu(
      (previous) =>
        previous === menuKey
          ? null
          : menuKey
    );
  };


  /* =========================================================
     MOBILE NAVIGATION PORTAL
  ========================================================= */

  const mobileNavigation =
    isMobile && mobileMenuOpen
      ? createPortal(
          <div
            className="mobile-portal"
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-navigation">

              <div className="mobile-navigation-inner">

                {NAV_ITEMS.map((menu) => (
                  <div
                    className="mobile-menu-section"
                    key={menu.key}
                  >

                    <div className="mobile-menu-row">

                      <button
                        type="button"
                        className="mobile-menu-title"
                        onClick={() =>
                          toggleMobileDropdown(
                            menu.key
                          )
                        }
                      >
                        {menu.label}
                      </button>


                      <button
                        type="button"
                        className="mobile-menu-arrow-button"
                        onClick={() =>
                          toggleMobileDropdown(
                            menu.key
                          )
                        }
                        aria-label={`Toggle ${menu.label}`}
                      >
                        <span
                          className={
                            mobileActiveMenu ===
                            menu.key
                              ? "arrow-open"
                              : ""
                          }
                        >
                          ⌄
                        </span>
                      </button>

                    </div>


                    {mobileActiveMenu ===
                      menu.key && (
                      <div className="mobile-dropdown">

                        {MENU_DATA[
                          menu.key
                        ].items.map(
                          (item, index) => (
                            <div
                              className="mobile-dropdown-card"
                              key={`${menu.key}-${index}`}
                            >

                              <div className="mobile-card-top">

                                <div className="mobile-card-icon">
                                  {item.icon}
                                </div>


                                <div className="mobile-card-content">

                                  <h3>
                                    {item.title}
                                  </h3>

                                  <p>
                                    {item.description}
                                  </p>


                                  <div className="mobile-card-links">

                                    {item.links.map(
                                      (
                                        link,
                                        linkIndex
                                      ) => (
                                        <Link
                                          key={`${menu.key}-${index}-${linkIndex}`}
                                          to={link.to}
                                          onClick={
                                            closeMobileMenu
                                          }
                                        >
                                          <span>
                                            {
                                              link.label
                                            }
                                          </span>

                                          <span>
                                            →
                                          </span>
                                        </Link>
                                      )
                                    )}

                                  </div>

                                </div>

                              </div>

                            </div>
                          )
                        )}

                      </div>
                    )}

                  </div>
                ))}


                {/* MOBILE CTA */}

                <Link
                  to="/get-started"
                  className="mobile-cta"
                  onClick={closeMobileMenu}
                >
                  <span>
                    Get Started
                  </span>

                  <span>
                    →
                  </span>
                </Link>

              </div>

            </div>
          </div>,
          document.body
        )
      : null;


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <header
        className="navbar"
        onMouseLeave={() => {
          if (!isMobile) {
            setActiveMenu(null);
          }
        }}
      >

        <div className="navbar-container">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >

            <span className="logo-icon">

              <img
                src={gradleadLogo}
                alt="GradLead AI Logo"
              />

            </span>


            <span className="logo-text">
              Grad<span>Lead AI</span>
            </span>

          </Link>


          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          {!isMobile && (
            <nav
              className="navbar-links"
              aria-label="Main navigation"
            >

              {NAV_ITEMS.map((item) => (

                <div
                  className="nav-menu-item"
                  key={item.key}
                  onMouseEnter={() =>
                    handleDesktopMenuEnter(
                      item.key
                    )
                  }
                >

                  <Link
                    to={item.to}
                    className={
                      activeMenu === item.key
                        ? "nav-link active"
                        : "nav-link"
                    }
                    onClick={(event) =>
                      handleNavClick(
                        event,
                        item
                      )
                    }
                  >

                    <span>
                      {item.label}
                    </span>


                    <span className="nav-arrow">
                      {activeMenu ===
                      item.key
                        ? "⌃"
                        : "⌄"}
                    </span>

                  </Link>

                </div>

              ))}

            </nav>
          )}


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          {!isMobile && (
            <div className="navbar-actions">

              <Link
                to="/get-started"
                className="navbar-cta"
              >
                Get Started
                <span>→</span>
              </Link>

            </div>
          )}


          {/* =================================================
              MOBILE HAMBURGER
          ================================================= */}

          {isMobile && (
            <button
              id="mobile-hamburger-button"
              type="button"
              className={
                mobileMenuOpen
                  ? "hamburger-button hamburger-open"
                  : "hamburger-button"
              }
              onClick={toggleMobileMenu}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={
                mobileMenuOpen
              }
            >

              <span />
              <span />
              <span />

            </button>
          )}

        </div>


        {/* =================================================
            DESKTOP MEGA MENU
        ================================================= */}

        {!isMobile && activeMenu && (
          <div
            className="mega-menu mega-menu-open"
            onMouseEnter={() =>
              setActiveMenu(activeMenu)
            }
          >

            <div className="mega-menu-container">

              {MENU_DATA[
                activeMenu
              ].items.map(
                (item, index) => (

                  <div
                    className="mega-column"
                    key={`${activeMenu}-${index}`}
                  >

                    <div className="mega-icon">
                      {item.icon}
                    </div>


                    <h3>
                      {item.title}
                    </h3>


                    <p>
                      {item.description}
                    </p>


                    <div className="mega-links">

                      {item.links.map(
                        (
                          link,
                          linkIndex
                        ) => (

                          <Link
                            to={link.to}
                            key={`${activeMenu}-${index}-${linkIndex}`}
                            onClick={() =>
                              setActiveMenu(null)
                            }
                          >
                            {link.label}
                          </Link>

                        )
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>
        )}

      </header>


      {/* =====================================================
          MOBILE PORTAL
      ===================================================== */}

      {mobileNavigation}

    </>
  );
}