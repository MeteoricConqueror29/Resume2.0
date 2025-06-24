
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const downloadPDF = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 0.5,
      filename: 'Dipayan_Majumdar_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <Button onClick={downloadPDF} className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
        
        <div 
          id="resume-content" 
          className="bg-white shadow-lg mx-auto print:shadow-none print:mx-0"
          style={{ width: '8.5in', minHeight: '11in', padding: '0.5in' }}
        >
          {/* Compact Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Dipayan Majumdar</h1>
            <p className="text-lg text-gray-600 mb-3">Full Stack Developer</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📞 8851462360</span>
              <span>✉️ dipayan.majumdar22@gmail.com</span>
              <span>🔗 linkedin.com/in/dipayan-majumdar</span>
              <span>🐙 github.com/MeteoricConqueror29</span>
              <span>🌐 dipayan-portfolio.dev</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">PROFESSIONAL SUMMARY</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Full Stack Developer with expertise in Laravel, React, and modern web technologies. Proven experience in e-commerce platforms, payment systems, and multi-marketplace integrations. Currently leading development of inventory management systems with AWS deployment experience.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p><span className="font-semibold">Backend & Frameworks:</span> PHP, Laravel, CodeIgniter, Filament, Livewire, Blade</p>
                <p><span className="font-semibold">Frontend:</span> React.js, JavaScript, Inertia.js, Alpine.js, HTML, CSS, Tailwind CSS</p>
                <p><span className="font-semibold">Database & Storage:</span> MySQL, MongoDB, Redis, Amazon RDS, Amazon S3</p>
              </div>
              <div>
                <p><span className="font-semibold">APIs & Integrations:</span> Shopify, Amazon SP-API, Walmart, Wayfair, Houzz, eBay</p>
                <p><span className="font-semibold">Payment & Communication:</span> Stripe, PayPal, Twilio, WebRTC, Webhooks</p>
                <p><span className="font-semibold">DevOps & Tools:</span> Git, AWS EC2, Nginx, Supervisor, Linux, Postman, VS Code</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">WORK EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Full Stack Developer & Project Manager</h3>
                <span className="text-sm text-gray-600">Jan 2024 - Present</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">LetUsCode Systems Pvt. Ltd.</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Leading full-stack development lifecycle from architecture to deployment in agile environment</li>
                <li>• Developing Laravel-based e-commerce platform managing products, orders, and suppliers across marketplaces</li>
                <li>• Built multi-marketplace sync systems for Shopify, Amazon, Walmart, Wayfair, Houzz, and eBay</li>
                <li>• Deployed scalable solutions on AWS EC2 with Redis, S3, Supervisor, Nginx, and HTTPS</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Backend Developer</h3>
                <span className="text-sm text-gray-600">Feb 2024 - Dec 2024</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">ProtechGenie</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Developed REST APIs for PCI-DSS Level 1 fintech platform with data encryption and tokenization</li>
                <li>• Integrated Stripe, PayPal, BrainTree, and Twilio for payment solutions and SMS-based payments</li>
                <li>• Implemented WebRTC for secure real-time calls during transactions</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Software Engineer</h3>
                <span className="text-sm text-gray-600">Aug 2023 - Dec 2023</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Mobzway Technology</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Developed responsive modular UI using React.js for multiplayer gaming platforms</li>
                <li>• Implemented WebSockets for live gameplay interactions between players</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Trainee Developer</h3>
                <span className="text-sm text-gray-600">Jul 2022 - Aug 2022</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">EXCAIN LLP</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Practiced core programming with C++ and data structures, focusing on problem-solving efficiency</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">KEY PROJECTS</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Real-Time Chat Application</h3>
                <p className="text-gray-700">Real-time messaging platform with Laravel backend and React frontend using WebSocket technology.</p>
                <p className="text-gray-600 text-xs mt-1">Laravel, React, WebSocket, MySQL, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Multi-Vendor E-commerce Marketplace</h3>
                <p className="text-gray-700">Comprehensive e-commerce platform with vendor management, payment integration, and admin dashboard.</p>
                <p className="text-gray-600 text-xs mt-1">Laravel, Filament, React, Inertia.js, MySQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Car Selling Website</h3>
                <p className="text-gray-700">Automotive marketplace with advanced search filters and user authentication.</p>
                <p className="text-gray-600 text-xs mt-1">Laravel, React, MySQL, Bootstrap, RESTful APIs</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Social Media Website</h3>
                <p className="text-gray-700">Social networking platform with user profiles, post sharing, and real-time interactions.</p>
                <p className="text-gray-600 text-xs mt-1">Laravel, React, Livewire, MySQL, Tailwind CSS</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">EDUCATION</h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900">B.Tech in Computer Science & Engineering</h3>
                <p className="text-gray-600">Dev Bhoomi Institute of Technology, Uttarakhand Technical University</p>
                <p className="text-gray-600">GPA: 6.7 | 2023</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Higher Secondary (10+2)</h3>
                <p className="text-gray-600">MMVVdyaMandir, WBCHSE</p>
                <p className="text-gray-600">87.23% | 2019</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secondary (10th)</h3>
                <p className="text-gray-600">MMVVdyaMandir, WBBSE</p>
                <p className="text-gray-600">83.27% | 2017</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
