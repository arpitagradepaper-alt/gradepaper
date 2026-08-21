import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Solutions */}
          <div className="footer-column">
            <h4>Solutions</h4>

            <a href="#features">Lead Generation</a>
            <a href="#features">Lead Enrichment</a>
            <a href="#features">Lead Qualification</a>
            <a href="#features">Sales Automation</a>
            <a href="#features">Pipeline Intelligence</a>
            <a href="#integrations">Integrations</a>
          </div>


          {/* Blogs */}
          <div className="footer-column">
            <h4>Blogs</h4>

            <a href="#blogs">Smarter Lead Generation</a>
            <a href="#blogs">AI-Powered Prospecting</a>
            <a href="#blogs">High-Intent Lead Strategies</a>
            <a href="#blogs">Sales Pipeline Growth</a>
            <a href="#blogs">Lead Data & Enrichment</a>
            <a href="#blogs">Modern Sales Intelligence</a>
          </div>


          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>

            <a href="#resources">Sales Playbooks</a>
            <a href="#resources">Lead Generation Guides</a>
            <a href="#resources">Sales Growth Strategies</a>
            <a href="#resources">Pipeline Optimization</a>
            <a href="#resources">Prospecting Resources</a>
            <a href="#resources">Revenue Growth Insights</a>
          </div>


          {/* Glossary */}
          <div className="footer-column">
            <h4>Glossary</h4>

            <a href="#glossary">Lead Generation</a>
            <a href="#glossary">Sales Intelligence</a>
            <a href="#glossary">Account-Based Marketing</a>
            <a href="#glossary">Data Enrichment</a>
            <a href="#glossary">Lead Scoring</a>
            <a href="#glossary">Sales Pipeline</a>
          </div>


          {/* Support */}
          <div className="footer-column">
            <h4>Support</h4>

            <a href="#contact">Contact Us</a>
            <a href="#demo">Book a Demo</a>
            <a href="#careers">Careers</a>
            <a href="#privacy">Privacy</a>
          </div>


          {/* Legal */}
          <div className="footer-column">
            <h4>Legal</h4>

            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#data">Data Processing</a>
          </div>

        </div>


        {/* Bottom Copyright */}

        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} GradLead
          </p>
        </div>

      </div>
    </footer>
  );
}