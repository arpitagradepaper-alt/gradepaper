import { useState } from "react";
import "./Navbar.css";

const MENU_DATA = {
  features: {
    items: [
      {
        icon: "◫",
        title: "Lead Capture",
        description:
          "Capture every lead, inquiry, and opportunity from every channel.",
        links: [
          "Unified lead inbox",
          "Multi-channel capture",
          "Instant lead tracking",
        ],
      },
      {
        icon: "✦",
        title: "Lead Intelligence",
        description:
          "Understand your leads and identify the opportunities that matter most.",
        links: [
          "AI-powered qualification",
          "Intent signals",
          "Smart lead scoring",
        ],
      },
      {
        icon: "◉",
        title: "Lead Prioritization",
        description:
          "Automatically focus your team on the highest-value opportunities.",
        links: [
          "Priority ranking",
          "Buying intent insights",
          "Opportunity alerts",
        ],
      },
      {
        icon: "✉",
        title: "Engagement",
        description:
          "Create personalized conversations across every important touchpoint.",
        links: [
          "Personalized messaging",
          "Automated outreach",
          "Conversation tracking",
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
          "Centralized lead data",
          "Smart segmentation",
          "Better targeting",
        ],
      },
      {
        icon: "✦",
        title: "Work Smarter With AI",
        description:
          "Use intelligent insights to understand which opportunities deserve attention.",
        links: [
          "AI qualification",
          "Intent detection",
          "Conversion insights",
        ],
      },
      {
        icon: "↗",
        title: "Accelerate Growth",
        description:
          "Help your team move faster from first interaction to conversion.",
        links: [
          "Automated workflows",
          "Timely follow-ups",
          "Faster conversions",
        ],
      },
      {
        icon: "◎",
        title: "Scale Your Sales Process",
        description:
          "Build a consistent and scalable process for managing every opportunity.",
        links: [
          "Team collaboration",
          "Process automation",
          "Performance visibility",
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
          "Website forms",
          "Social channels",
          "Campaign leads",
        ],
      },
      {
        icon: "02",
        title: "Qualify",
        description:
          "Understand intent and identify which opportunities have the highest potential.",
        links: [
          "Lead intelligence",
          "Intent signals",
          "AI qualification",
        ],
      },
      {
        icon: "03",
        title: "Engage",
        description:
          "Create relevant conversations and build stronger relationships.",
        links: [
          "Personalized outreach",
          "Automated follow-ups",
          "Conversation history",
        ],
      },
      {
        icon: "04",
        title: "Convert",
        description:
          "Move qualified opportunities forward and turn them into customers.",
        links: [
          "Pipeline visibility",
          "Conversion insights",
          "Revenue growth",
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
          "CRM integrations",
          "Marketing platforms",
          "Communication tools",
        ],
      },
      {
        icon: "◌",
        title: "Unified Data",
        description:
          "Keep important lead information connected across your workflow.",
        links: [
          "Data synchronization",
          "Centralized records",
          "Real-time updates",
        ],
      },
      {
        icon: "⚙",
        title: "Automated Workflows",
        description:
          "Create connected workflows that reduce manual work for your team.",
        links: [
          "Workflow automation",
          "Smart triggers",
          "Action sequences",
        ],
      },
      {
        icon: "∞",
        title: "Built To Scale",
        description:
          "Create a connected ecosystem that grows alongside your business.",
        links: [
          "Flexible integrations",
          "Scalable workflows",
          "Growing ecosystem",
        ],
      },
    ],
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header
      className="navbar"
      onMouseLeave={handleMenuLeave}
    >
      <div className="navbar-container">

        {/* Logo */}

        <a href="#" className="navbar-logo">
          <span className="logo-icon">
            G
          </span>

          <span className="logo-text">
            Grad<span>Lead</span>
          </span>
        </a>


        {/* Navigation */}

        <nav className="navbar-links">

          <div
            className="nav-menu-item"
            onMouseEnter={() =>
              handleMenuEnter("features")
            }
          >
            <a
              href="#features"
              className={
                activeMenu === "features"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Features

              <span className="nav-arrow">
                {activeMenu === "features"
                  ? "⌃"
                  : "⌄"}
              </span>
            </a>
          </div>


          <div
            className="nav-menu-item"
            onMouseEnter={() =>
              handleMenuEnter("solutions")
            }
          >
            <a
              href="#solutions"
              className={
                activeMenu === "solutions"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Solutions

              <span className="nav-arrow">
                {activeMenu === "solutions"
                  ? "⌃"
                  : "⌄"}
              </span>
            </a>
          </div>


          <div
            className="nav-menu-item"
            onMouseEnter={() =>
              handleMenuEnter("howItWorks")
            }
          >
            <a
              href="#how-it-works"
              className={
                activeMenu === "howItWorks"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              How It Works

              <span className="nav-arrow">
                {activeMenu === "howItWorks"
                  ? "⌃"
                  : "⌄"}
              </span>
            </a>
          </div>


          <div
            className="nav-menu-item"
            onMouseEnter={() =>
              handleMenuEnter("integrations")
            }
          >
            <a
              href="#integrations"
              className={
                activeMenu === "integrations"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Integrations

              <span className="nav-arrow">
                {activeMenu === "integrations"
                  ? "⌃"
                  : "⌄"}
              </span>
            </a>
          </div>

        </nav>


        {/* Right Actions */}

        <div className="navbar-actions">

          <a
            href="#get-started"
            className="navbar-cta"
          >
            Get Started

            <span>
              →
            </span>
          </a>

        </div>

      </div>


      {/* MEGA DROPDOWN */}

      <div
        className={
          activeMenu
            ? "mega-menu mega-menu-open"
            : "mega-menu"
        }
      >

        <div className="mega-menu-container">

          {activeMenu &&
            MENU_DATA[activeMenu].items.map(
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
                      (link, linkIndex) => (
                        <a
                          href="#"
                          key={`${activeMenu}-${index}-${linkIndex}`}
                        >
                          {link}
                        </a>
                      )
                    )}

                  </div>

                </div>
              )
            )}

        </div>

      </div>

    </header>
  );
}