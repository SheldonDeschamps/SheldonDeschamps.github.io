export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-primary-foreground">Proact</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Transforming businesses through expert coaching, strategic planning, 
              and organizational development. Partner with us to unlock your organization's potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors bg-primary-foreground/10 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors bg-primary-foreground/10 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0019.71 2.186 17.925 17.925 0 0014.96 4.29a8.972 8.972 0 00-13.9 8.972v.001A8.926 8.926 0 005.54 17.61a17.902 17.902 0 0012.863-2.282z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors bg-primary-foreground/10 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-primary-foreground">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Organizational Transformation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Leadership Coaching</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Change Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-primary-foreground">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/30 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Proact Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}