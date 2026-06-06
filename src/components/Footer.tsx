import { Link } from "react-router-dom";
import logoNbsc from "@/assets/logo-nbsc.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted-surface mt-auto">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoNbsc} alt="NBSC logo" className="h-8 w-8 object-contain" />
              <span className="text-lg font-semibold text-text">
                National Benefits Services Center
              </span>
            </div>
            <div className="space-y-2 text-sm text-muted">
              <div>
                <span className="font-medium text-text">Phone:</span> (313) 651-7596
              </div>
              <div>
                <span className="font-medium text-text">SMS:</span> (313) 651-7596
              </div>
              <div>
                <span className="font-medium text-text">Email:</span> support@buildingbetterdaysinsurance.com
              </div>
              <div className="pt-2">
                290 Town Center Dr, STE 675<br />
                Dearborn, MI 48126
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-sm font-semibold text-text mb-4">Products</div>
            <div className="space-y-3 text-sm">
              <Link to="/final-expense" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Final Expense
              </Link>
              <Link to="/medicare" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Medicare
              </Link>
              <Link to="/supplemental" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Supplemental
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <div className="text-sm font-semibold text-text mb-4">Information</div>
            <div className="space-y-3 text-sm">
              <Link to="/resources" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Resources
              </Link>
              <Link to="/contact" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-xs text-muted space-y-2 max-w-3xl">
            <p>National Benefits Services Center is an independent agency. Coverage availability and eligibility vary by carrier. This website provides general information only and does not constitute legal or tax advice.</p>
          </div>
          <div className="mt-4 text-xs text-muted">
            © {new Date().getFullYear()} National Benefits Services Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
