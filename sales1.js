import React, { useState, useEffect } from 'react';
import { 
  Globe, MapPin, Briefcase, ChevronRight, ArrowLeft, Plane, ShoppingCart, 
  Building2, Stethoscope, Wrench, Truck, HardHat, Utensils, Cpu, Users, 
  Factory, Zap, ShieldCheck, Award, X, CheckCircle, TrendingUp, DollarSign, 
  Star, FileText, Clock, Landmark, PieChart, Info, CheckSquare, Lightbulb, 
  ArrowDown, Leaf, Camera, Anchor, ExternalLink, Search, FileCheck, Stamp, Home
} from 'lucide-react';

/**
 * --- CUSTOM CHART COMPONENTS ---
 */

const SimpleBarChart = ({ data, color }) => (
  <div className="space-y-4 w-full">
    {data.map((item, index) => (
      <div key={index} className="w-full">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-slate-300 font-medium">{item.label}</span>
          <span className="text-white font-bold">{item.value}%</span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full bg-gradient-to-r ${color}`} 
            style={{ width: `${item.value}%`, transition: 'width 1s ease-out' }} 
          />
        </div>
      </div>
    ))}
  </div>
);

const ComparisonChart = ({ salary, col, currency }) => {
  const maxVal = Math.max(salary, col) * 1.2;
  const salaryPct = (salary / maxVal) * 100;
  const colPct = (col / maxVal) * 100;

  return (
    <div className="flex items-end space-x-8 h-48 pt-4">
      <div className="w-1/2 flex flex-col items-center group">
        <div className="text-emerald-400 font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {currency}{salary}
        </div>
        <div 
          className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg relative hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all"
          style={{ height: `${salaryPct}%` }}
        >
          <div className="absolute bottom-2 inset-x-0 text-center text-emerald-900 font-bold text-xs uppercase">Earnings</div>
        </div>
        <div className="mt-2 text-slate-400 text-xs uppercase tracking-wider">Avg. Income</div>
      </div>
      
      <div className="w-1/2 flex flex-col items-center group">
        <div className="text-rose-400 font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {currency}{col}
        </div>
        <div 
          className="w-full bg-gradient-to-t from-rose-600 to-rose-400 rounded-t-lg relative hover:shadow-[0_0_20px_rgba(251,113,133,0.3)] transition-all"
          style={{ height: `${colPct}%` }}
        >
          <div className="absolute bottom-2 inset-x-0 text-center text-rose-900 font-bold text-xs uppercase">Expenses</div>
        </div>
        <div className="mt-2 text-slate-400 text-xs uppercase tracking-wider">Est. Living Cost</div>
      </div>
    </div>
  );
};

/**
 * --- COMPLETE DATA STRUCTURE ---
 */
const TIER_DATA = [
  {
    id: 'tier1',
    title: '1st Tier',
    subtitle: 'Nordic Premium',
    description: 'High-income economies with world-class infrastructure and social benefits.',
    color: 'from-blue-600 to-cyan-400',
    accent: 'cyan',
    icon: <Award className="w-6 h-6" />,
    stats: { avgSalary: '€3,500+', demand: 'Specialized', satisfaction: '98%' },
    countries: [
      {
        id: 'se',
        name: 'Sweden',
        flag: '🇸🇪',
        description: 'Focus on Aviation Infrastructure, Maintenance, and Emergency Services.',
        visaInfo: {
            types: ['Work Permit', 'EU Blue Card'],
            processingTime: '3-5 Months',
            detailedProcess: {
                preparation: [
                    'Employer initiates offer with Swedish Migration Agency.',
                    'Union provides statement of opinion (Fackligt yttrande).',
                    'Passport valid for duration of contract.',
                    'Comprehensive Health Insurance (if contract < 1 year).'
                ],
                submission: [
                    'Submit online application via Migration Agency portal.',
                    'Pay application fee (approx. 2000 SEK).',
                    'Visit Embassy for biometrics (photo & fingerprints) after approval.',
                    'Receive UT-card (Residence Permit Card) abroad or in Sweden.'
                ],
                postArrival: [
                    'Register with Skatteverket (Tax Agency) for Personnummer.',
                    'Open Swedish Bank Account (requires Personnummer).',
                    'Register with Försäkringskassan (Social Insurance).',
                    'Sign up for Swedish for Immigrants (SFI) - Free.'
                ]
            },
            documents: ['Passport', 'Employment Offer', 'Union Statement', 'Insurance'],
            expertTips: [{ title: "Union Approval", desc: "Critical step. Ensure employer handles this early to avoid delays." }]
        },
        attractions: { metrics: [{ label: 'Safety', value: 98 }, { label: 'English', value: 95 }], salary: 4500, livingCost: 1800 },
        stats: { qol: 96, safety: 98, happiness: 94 },
        departments: [
          {
            name: 'Airport Civil Construction',
            icon: <HardHat className="w-5 h-5" />,
            jobs: [
              { title: 'Civil Engineer', exp: '3 Years', salary: '€4,535', demand: 85 },
              { title: 'Civil Draughtsman', exp: '3 Years', salary: '€4,535', demand: 70 },
              { title: 'Land Surveyor', exp: '3 Years', salary: '€4,535', demand: 75 },
              { title: 'Civil Site Supervisor', exp: '3 Years', salary: '€2,721', demand: 75 },
              { title: 'Construction Safety Engineer', exp: '3 Years', salary: '€4,535', demand: 80 },
              { title: 'Welder', exp: '3 Years', salary: '€2,268', demand: 85 },
              { title: 'Fabricator', exp: '3 Years', salary: '€2,268', demand: 80 },
              { title: 'Scaffolder', exp: '3 Years', salary: '€2,268', demand: 85 },
              { title: 'Tower Crane Operator', exp: '3 Years', salary: '€4,535', demand: 90 },
              { title: 'Excavator Operator', exp: '3 Years', salary: '€3,628', demand: 80 },
              { title: 'Concrete Mix Operator', exp: '3 Years', salary: '€2,721', demand: 70 }
            ]
          },
          {
            name: 'Airport Workshop',
            icon: <Wrench className="w-5 h-5" />,
            jobs: [
              { title: 'Mechanical Engineer', exp: '3 Years', salary: '€4,535', demand: 80 },
              { title: 'Mechanical Supervisor', exp: '3 Years', salary: '€2,721', demand: 70 },
              { title: 'Diesel Mechanical Technician', exp: '3 Years', salary: '€2,268', demand: 75 }
            ]
          },
          {
            name: 'Airport Maintenance',
            icon: <Plane className="w-5 h-5" />,
            jobs: [
              { title: 'System Service Engineer', exp: '3 Years', salary: '€6,349', demand: 95 },
              { title: 'Accountant', exp: '3 Years', salary: '€4,535', demand: 80 },
              { title: 'Data Entry Operator', exp: '3 Years', salary: '€4,535', demand: 70 },
              { title: 'CCTV Technician', exp: '3 Years', salary: '€2,721', demand: 70 },
              { title: 'Staff Bus Driver', exp: '3 Years', salary: '€4,535', demand: 60 },
              { title: 'Store Keeper', exp: '3 Years', salary: '€2,721', demand: 65 }
            ]
          },
           {
            name: 'Emergency Hospital',
            icon: <Stethoscope className="w-5 h-5" />,
            jobs: [
              { title: 'Head Nurse', exp: 'Degree', salary: '€6,349', demand: 98 },
              { title: 'Chief Pharmacist', exp: 'Degree', salary: '€4,535', demand: 90 },
              { title: 'Assistant Nurse', exp: 'Diploma', salary: '€4,535', demand: 95 },
              { title: 'Ambulance Driver', exp: '3 Years', salary: '€2,721', demand: 85 }
            ]
          }
        ]
      },
      {
        id: 'fi',
        name: 'Finland',
        flag: '🇫🇮',
        description: 'Opportunities in Retail, Catering, and Logistics sectors.',
        visaInfo: {
            types: ['Residence Permit'],
            processingTime: '2-4 Months',
            detailedProcess: {
                preparation: [
                    'Employer fills TEM054 form (Terms of Employment).',
                    'Passport copies (bio page and all used pages).',
                    'Degree/Diploma certificates translated to Finnish/Swedish/English.',
                    'Proof of accommodation (optional but recommended).'
                ],
                submission: [
                    'Create account on "Enter Finland" e-service.',
                    'Submit First Residence Permit application (Employed).',
                    'Visit Finnish mission/VFS for identity verification within 3 months.',
                    'Wait for TE Office (partial decision) and Migri (final decision).'
                ],
                postArrival: [
                    'Visit Digital and Population Data Services (DVV) for registration.',
                    'Obtain Personal Identity Code (Henkilötunnus).',
                    'Request Tax Card from Vero Skatt.',
                    'Open bank account (Nordea, OP, etc.).'
                ]
            },
            documents: ['Passport', 'Contract TEM054', 'Photo', 'Certificates'],
            expertTips: [{ title: "Enter Finland", desc: "Use e-service for cheaper fees and faster tracking." }]
        },
        attractions: { metrics: [{ label: 'Nature', value: 100 }, { label: 'Education', value: 96 }], salary: 3000, livingCost: 1500 },
        stats: { qol: 95, safety: 99, happiness: 98 },
        departments: [
          {
            name: 'Supermarket Dept',
            icon: <ShoppingCart className="w-5 h-5" />,
            jobs: [
              { title: 'System Engineer', exp: '3 Years', salary: '€5,000', demand: 85 },
              { title: 'System Operator', exp: '3 Years', salary: '€3,000', demand: 75 },
              { title: 'Sales Supervisor', exp: '3 Years', salary: '€3,000', demand: 70 },
              { title: 'Store Keeper', exp: '3 Years', salary: '€2,000', demand: 60 },
              { title: 'Forklift Operator', exp: '3 Years', salary: '€2,000', demand: 75 },
              { title: 'Data Entry Operator', exp: '3 Years', salary: '€4,000', demand: 70 },
              { title: 'Security Guard', exp: '3 Years', salary: '€2,000', demand: 65 },
              { title: 'Packing Helper', exp: '0', salary: '€1,000', demand: 60 }
            ]
          },
          {
            name: 'Catering & Restaurant',
            icon: <Utensils className="w-5 h-5" />,
            jobs: [
              { title: 'Head Chef', exp: '3 Years', salary: '€5,000', demand: 90 },
              { title: 'Chief Cook', exp: '3 Years', salary: '€4,000', demand: 85 },
              { title: 'Restaurant Supervisor', exp: '3 Years', salary: '€3,000', demand: 75 },
              { title: 'Baker/Pastry Chef', exp: '3 Years', salary: '€3,000', demand: 80 },
              { title: 'Waiter / Bartender', exp: '3 Years', salary: '€2,000', demand: 75 },
              { title: 'Kitchen Helper', exp: '0', salary: '€1,500', demand: 70 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tier2',
    title: '2nd Tier',
    subtitle: 'Western Schengen',
    description: 'The economic engines of Europe offering corporate and technical roles.',
    color: 'from-emerald-600 to-teal-400',
    accent: 'emerald',
    icon: <Building2 className="w-6 h-6" />,
    stats: { avgSalary: '€3,000+', demand: 'Very High', satisfaction: '92%' },
    countries: [
      {
        id: 'nl',
        name: 'Netherlands',
        flag: '🇳🇱',
        description: 'Corporate, Tech, and Logistics Hub.',
        visaInfo: { 
            types: ['GVVA', 'HSM'], 
            processingTime: '2-3 Months', 
            detailedProcess: {
                preparation: [
                    'Employer (must be recognized sponsor) applies for advice.',
                    'Legalization/Apostille of Birth Certificate.',
                    'Check for Tuberculosis (TB) test requirement.',
                    'Sign Antecedents Certificate.'
                ],
                submission: [
                    'Employer submits TEV application to IND.',
                    'Upon approval, collect MVV (provisional visa) at embassy.',
                    'Provide biometrics at embassy appointment.'
                ],
                postArrival: [
                    'Collect Residence Permit card from IND desk.',
                    'Register at Municipality (Gemeente) for BSN number.',
                    'Take out mandatory Dutch Health Insurance (Zorgverzekering).',
                    'Open bank account (BSN required).'
                ]
            },
            documents: ['Passport','Contract','Antecedents'], 
            expertTips: [{title:'30% Ruling',desc:'Check tax benefit eligibility for skilled migrants.'}] 
        },
        attractions: { metrics: [{label:'Biking',value:98},{label:'English',value:95}], salary: 5000, livingCost: 2200 },
        stats: { qol: 92, safety: 90, happiness: 89 },
        departments: [
          {
            name: 'Corporate & Office',
            icon: <Briefcase className="w-5 h-5" />,
            jobs: [
              { title: 'Manager', exp: '3-5 Years', salary: '€6,000+', demand: 80 },
              { title: 'Accountant', exp: '3-5 Years', salary: '€5,000+', demand: 85 },
              { title: 'HR Executive', exp: '3-5 Years', salary: '€5,000+', demand: 75 },
              { title: 'Administrative Assistant', exp: '3-5 Years', salary: '€5,000+', demand: 70 },
              { title: 'Document Controller', exp: '3-5 Years', salary: '€5,000+', demand: 65 }
            ]
          },
          {
            name: 'Technical & Eng',
            icon: <Cpu className="w-5 h-5" />,
            jobs: [
              { title: 'IT Professional', exp: '3-5 Years', salary: '€6,000+', demand: 95 },
              { title: 'Engineer', exp: '3-5 Years', salary: '€6,000+', demand: 90 },
              { title: 'Project Coordinator', exp: '3-5 Years', salary: '€5,500+', demand: 80 }
            ]
          },
          {
            name: 'Sales & Logistics',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Sales Executive', exp: '3-5 Years', salary: '€5,500+', demand: 85 },
              { title: 'Logistics Coordinator', exp: '3-5 Years', salary: '€5,500+', demand: 80 },
              { title: 'Store Supervisor', exp: '3-5 Years', salary: '€5,000+', demand: 75 }
            ]
          }
        ]
      },
      {
        id: 'de',
        name: 'Germany',
        flag: '🇩🇪',
        description: 'Engineering excellence and Healthcare services.',
        visaInfo: { 
            types: ['Skilled Act', 'Blue Card'], 
            processingTime: '1-3 Months', 
            detailedProcess: {
                preparation: [
                    'Recognition of qualification (ZAB/Anabin) or Deficit Notification.',
                    'Secure binding job offer (Erklärung zum Beschäftigungsverhältnis).',
                    'Get "Incoming" Travel Health Insurance.',
                    'Proof of language proficiency (if required).'
                ],
                submission: [
                    'Fill VIDEX application form online.',
                    'Book appointment at German mission.',
                    'Submit documents + fee (75 EUR).',
                    'Wait for Federal Employment Agency approval (internal).'
                ],
                postArrival: [
                    'City Registration (Anmeldung) - Mandatory within 2 weeks.',
                    'Open Girokonto (Bank Account).',
                    'Convert visa to Residence Permit at Ausländerbehörde.',
                    'Register for Health Insurance (Krankenkasse).'
                ]
            },
            documents: ['Videx','Passport','Qualifications'], 
            expertTips: [{title:'Recognition',desc:'Check degree equivalence early.'}] 
        },
        attractions: { metrics: [{label:'Transport',value:95},{label:'Benefits',value:92}], salary: 5500, livingCost: 2000 },
        stats: { qol: 90, safety: 92, happiness: 85 },
        departments: [
          {
            name: 'Healthcare',
            icon: <Stethoscope className="w-5 h-5" />,
            jobs: [ { title: 'Care Home Jobs', exp: '0 Years', salary: '€2,000 - €2,600', demand: 95 } ]
          },
          {
            name: 'Corporate & Office',
            icon: <Briefcase className="w-5 h-5" />,
            jobs: [ 
                { title: 'Manager', exp: '3-5 Years', salary: '€6,000+', demand: 80 }, 
                { title: 'Accountant', exp: '3-5 Years', salary: '€5,000+', demand: 85 },
                { title: 'HR Executive', exp: '3-5 Years', salary: '€5,000+', demand: 75 },
                { title: 'Secretary', exp: '3-5 Years', salary: '€5,000+', demand: 70 }
            ]
          },
          {
            name: 'Technical',
            icon: <Factory className="w-5 h-5" />,
            jobs: [ 
                { title: 'IT Professional', exp: '3-5 Years', salary: '€6,000+', demand: 90 }, 
                { title: 'Engineer', exp: '3-5 Years', salary: '€6,000+', demand: 92 },
                { title: 'Data Entry Operator', exp: '3-5 Years', salary: '€5,000+', demand: 65 }
            ]
          },
          {
            name: 'Sales & Logistics',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
                { title: 'Sales Executive', exp: '3-5 Years', salary: '€5,500+', demand: 85 },
                { title: 'Logistics Coordinator', exp: '3-5 Years', salary: '€5,500+', demand: 80 }
            ]
          }
        ]
      },
      {
        id: 'it',
        name: 'Italy',
        flag: '🇮🇹',
        description: 'Mediterranean lifestyle with Service and Tech roles.',
        visaInfo: { 
            types: ['Decreto Flussi', 'Blue Card'], 
            processingTime: '2-4 Months', 
            detailedProcess: {
                preparation: [
                    'Employer applies for "Nulla Osta" (Work Authorization).',
                    'Wait for annual "Decreto Flussi" quotas (if applicable).',
                    'Prepare accommodation availability proof.',
                    'Sign contract of stay (Contratto di soggiorno).'
                ],
                submission: [
                    'Receive Nulla Osta from employer.',
                    'Apply for Long-Stay Visa (Type D) at Italian consulate.',
                    'Submit passport and photos.'
                ],
                postArrival: [
                    'Apply for Permesso di Soggiorno at Post Office (Kit Giallo) within 8 days.',
                    'Fingerprinting appointment at Questura.',
                    'Obtain Codice Fiscale (Tax Code).',
                    'Register with SSN (National Health Service).'
                ]
            },
            documents: ['Nulla Osta','Contract','Passport'], 
            expertTips: [{title:'Quotas',desc:'Wait for Decree dates for non-specialized work.'}] 
        },
        attractions: { metrics: [{label:'Culture',value:98},{label:'Food',value:100}], salary: 2500, livingCost: 1400 },
        stats: { qol: 85, safety: 85, happiness: 82 },
        departments: [
          {
            name: 'Healthcare',
            icon: <Stethoscope className="w-5 h-5" />,
            jobs: [
              { title: 'Nursing Assistant', exp: 'Entry', salary: '€1,200 - €1,600', demand: 88 },
              { title: 'Healthcare Support', exp: 'Entry', salary: '€1,200 - €1,600', demand: 85 },
              { title: 'Care Home Assistant', exp: 'Entry', salary: '€1,200 - €1,600', demand: 85 }
            ]
          },
          {
            name: 'Corporate & Office',
            icon: <Briefcase className="w-5 h-5" />,
            jobs: [
              { title: 'Manager', exp: '3-5 Years', salary: '€2,200 - €3,000', demand: 75 },
              { title: 'Accountant', exp: '3-5 Years', salary: '€1,800 - €2,500', demand: 80 },
              { title: 'Office Clerk', exp: '3-5 Years', salary: '€1,500 - €2,000', demand: 70 }
            ]
          },
          {
            name: 'Technical & Eng',
            icon: <Cpu className="w-5 h-5" />,
            jobs: [
              { title: 'IT Professional', exp: '3-5 Years', salary: '€2,200 - €3,500', demand: 85 },
              { title: 'Engineer', exp: '3-5 Years', salary: '€2,200 - €3,200', demand: 80 }
            ]
          },
          {
            name: 'Sales & Logistics',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Sales Executive', exp: '3-5 Years', salary: '€1,800 - €2,500', demand: 75 },
              { title: 'Logistics Coordinator', exp: '3-5 Years', salary: '€1,800 - €2,400', demand: 70 }
            ]
          }
        ]
      },
      {
        id: 'fr',
        name: 'France',
        flag: '🇫🇷',
        description: 'Diverse opportunities in Healthcare and Administration.',
        visaInfo: { 
            types: ['Talent Passport', 'Work Visa'], 
            processingTime: '2-3 Months', 
            detailedProcess: {
                preparation: [
                    'Employer obtains work authorization from DREETS.',
                    'Prepare Cerfa form and contract.',
                    'Translate documents into French.'
                ],
                submission: [
                    'Fill application on France-Visas website.',
                    'Book appointment with VFS Global or TLS Contact.',
                    'Submit file and biometrics.',
                    'Track application online.'
                ],
                postArrival: [
                    'Validate VLS-TS visa online within 3 months (OFII).',
                    'Medical examination if requested.',
                    'Register for Social Security (Ameli).',
                    'Open bank account.'
                ]
            },
            documents: ['Cerfa Form','Contract','Passport'], 
            expertTips: [{title:'Talent Passport',desc:'Check if you qualify for multi-year without authorization.'}] 
        },
        attractions: { metrics: [{label:'Lifestyle',value:95},{label:'Health',value:98}], salary: 2800, livingCost: 1600 },
        stats: { qol: 88, safety: 86, happiness: 84 },
        departments: [
          {
            name: 'Healthcare',
            icon: <Stethoscope className="w-5 h-5" />,
            jobs: [
              { title: 'Care Home Assistant', exp: '0 Years', salary: '€1,200 - €1,600', demand: 90 },
              { title: 'Nursing Assistant', exp: '0 Years', salary: '€1,200 - €1,600', demand: 85 },
              { title: 'Elderly Care Staff', exp: '0 Years', salary: '€1,200 - €1,600', demand: 85 }
            ]
          },
          {
            name: 'Corporate & Office',
            icon: <Briefcase className="w-5 h-5" />,
            jobs: [
              { title: 'Manager', exp: '3-5 Years', salary: '€2,200 - €3,000', demand: 75 },
              { title: 'Accountant', exp: '3-5 Years', salary: '€1,800 - €2,500', demand: 80 },
              { title: 'Office Clerk', exp: '3-5 Years', salary: '€1,500 - €2,000', demand: 70 }
            ]
          },
          {
            name: 'Technical',
            icon: <Factory className="w-5 h-5" />,
            jobs: [
              { title: 'IT Professional', exp: '3-5 Years', salary: '€2,200 - €3,500', demand: 85 },
              { title: 'Engineer', exp: '3-5 Years', salary: '€2,200 - €3,200', demand: 80 }
            ]
          },
          {
            name: 'Sales & Logistics',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Sales Executive', exp: '3-5 Years', salary: '€1,800 - €2,500', demand: 75 },
              { title: 'Logistics Coordinator', exp: '3-5 Years', salary: '€1,800 - €2,400', demand: 70 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tier3',
    title: '3rd Tier',
    subtitle: 'Emerging Schengen',
    description: 'Rapidly developing economies with high demand for skilled labor.',
    color: 'from-amber-500 to-orange-400',
    accent: 'amber',
    icon: <Factory className="w-6 h-6" />,
    stats: { avgSalary: '€1,800', demand: 'Growing', satisfaction: '85%' },
    countries: [
      {
        id: 'pl',
        name: 'Poland',
        flag: '🇵🇱',
        description: 'Industrial hub with streamlined visa processes.',
        visaInfo: { 
            types: ['Type A'], 
            processingTime: '4-8 Weeks', 
            detailedProcess: {
                preparation: [
                    'Employer conducts "Labor Market Test" (if needed).',
                    'Employer applies for Type A Work Permit at Voivodeship Office.',
                    'Wait for physical work permit document.'
                ],
                submission: [
                    'Register on e-Konsulat.',
                    'Book national visa (Type D) appointment.',
                    'Submit Work Permit (original), insurance, flight booking.',
                    'Interview with consul.'
                ],
                postArrival: [
                    'Employer signs contract with you.',
                    'Employer registers you with ZUS (Social Security) within 7 days.',
                    'Apply for PESEL number (Tax ID).',
                    'Apply for Temporary Residence Card (Karta Pobytu) before visa expires.'
                ]
            },
            documents: ['Permit','Insurance','Flight'], 
            expertTips: [{title:'ZUS',desc:'Ensure employer registers you with ZUS within 7 days.'}] 
        },
        attractions: { metrics: [{label:'Cost',value:85},{label:'Growth',value:92}], salary: 1400, livingCost: 700 },
        stats: { qol: 78, safety: 82, happiness: 75 },
        departments: [
          {
            name: 'Manufacturing',
            icon: <Factory className="w-5 h-5" />,
            jobs: [
              { title: 'Machine Operator', exp: 'Skilled', salary: '4,500 – 6,000 PLN', demand: 85 },
              { title: 'Assembly Operator', exp: 'Bonus', salary: '4,200 – 5,800 PLN', demand: 80 },
              { title: 'Quality Control', exp: 'Stable', salary: '4,000 – 5,500 PLN', demand: 75 },
              { title: 'Production Worker', exp: 'Stable', salary: '4,000 – 5,500 PLN', demand: 70 },
              { title: 'Packaging Staff', exp: 'Entry', salary: '4,000 – 5,500 PLN', demand: 65 }
            ]
          },
          {
            name: 'Logistics',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Forklift Operator', exp: 'License', salary: '4,500 – 6,500 PLN', demand: 90 },
              { title: 'Picker / Packer', exp: 'OT', salary: '4,500 – 6,500 PLN', demand: 85 },
              { title: 'Warehouse Assistant', exp: 'Sorting', salary: '4,000 – 5,500 PLN', demand: 75 },
              { title: 'Inventory Clerk', exp: 'Admin', salary: '4,200 – 5,800 PLN', demand: 70 }
            ]
          },
          {
            name: 'Construction',
            icon: <HardHat className="w-5 h-5" />,
            jobs: [
              { title: 'Welder (Certified)', exp: 'High Pay', salary: '5,500 – 8,000+ PLN', demand: 95 },
              { title: 'Electrician', exp: 'Skilled', salary: '5,500 – 8,000+ PLN', demand: 90 },
              { title: 'Scaffolder', exp: 'Bonus', salary: '5,000 – 7,000 PLN', demand: 85 },
              { title: 'Mason / Plasterer', exp: 'Skilled', salary: '5,500 – 8,000+ PLN', demand: 85 },
              { title: 'General Laborer', exp: 'Physical', salary: '4,000 – 5,500 PLN', demand: 75 }
            ]
          }
        ]
      },
      {
        id: 'lv',
        name: 'Latvia',
        flag: '🇱🇻',
        description: 'Baltic tech hub with affordable living.',
        visaInfo: { 
            types: ['Visa D'], 
            processingTime: '1-2 Months', 
            detailedProcess: {
                preparation: [
                    'Employer registers invitation with OCMA (PMLP).',
                    'You receive Invitation Number.',
                    'Undergo Tuberculosis X-ray in home country (if req).',
                    'Get Police Clearance Certificate.'
                ],
                submission: [
                    'Fill online visa application.',
                    'Book appointment at embassy/VFS.',
                    'Submit Invitation Number, Passport, Insurance.',
                    'Wait for processing.'
                ],
                postArrival: [
                    'Undergo mandatory health check in Latvia.',
                    'Visit OCMA to collect Residence Card (eID).',
                    'Declare place of residence.',
                    'Get Smart-ID for banking/digital services.'
                ]
            },
            documents: ['Invite #','X-ray','Passport'], 
            expertTips: [{title:'Smart-ID',desc:'Get digital ID immediately for banking access.'}] 
        },
        attractions: { metrics: [{label:'Tech',value:85},{label:'Nature',value:92}], salary: 1800, livingCost: 800 },
        stats: { qol: 75, safety: 80, happiness: 70 },
        departments: [
          {
            name: 'Construction',
            icon: <HardHat className="w-5 h-5" />,
            jobs: [
              { title: 'Welder / Fitter', exp: '1 Year', salary: '€1,537 - €2,500+', demand: 85 },
              { title: 'Electrician', exp: '1 Year', salary: '€1,537 - €2,800+', demand: 80 },
              { title: 'Bricklayer / Mason', exp: '1 Year', salary: '€1,537 - €2,200+', demand: 75 }
            ]
          },
          {
            name: 'Manufacturing & Tech',
            icon: <Cpu className="w-5 h-5" />,
            jobs: [
              { title: 'CNC Operator', exp: '1 Year', salary: '€1,537 - €2,000+', demand: 80 },
              { title: 'Aircraft Mechanic', exp: '1 Year', salary: '€1,800 - €3,500+', demand: 85 },
              { title: 'Software Developer', exp: '1 Year', salary: '€2,528 - €5,000+', demand: 90 },
              { title: 'IT Analyst', exp: '1 Year', salary: '€2,528 - €4,000+', demand: 85 }
            ]
          },
          {
            name: 'Logistics & Service',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Truck Driver (Code 95)', exp: '1 Year', salary: '€1,800 - €3,000+', demand: 95 },
              { title: 'Warehouse Packer', exp: '1 Year', salary: '€1,537 - €1,800+', demand: 75 },
              { title: 'Chef / Cook', exp: '1 Year', salary: '€1,537 - €2,000+', demand: 80 }
            ]
          }
        ]
      },
      {
        id: 'cz',
        name: 'Czech Republic',
        flag: '🇨🇿',
        description: 'Automotive and Technical powerhouse.',
        visaInfo: { 
            types: ['Employee Card'], 
            processingTime: '2-3 Months', 
            detailedProcess: {
                preparation: [
                    'Employer reports vacancy to Labor Office.',
                    'Wait 30 days for EU testing.',
                    'Employer receives Vacancy Number.',
                    'Secure accommodation proof (signed owner).'
                ],
                submission: [
                    'Book appointment at embassy (often quota based).',
                    'Submit "Employee Card" application.',
                    'Wait for Ministry of Interior approval (60-90 days).'
                ],
                postArrival: [
                    'Report to Foreign Police within 3 days.',
                    'Visit OAMP (Interior Ministry) for biometrics.',
                    'Collect Employee Card.',
                    'Employer registers you for health insurance.'
                ]
            },
            documents: ['Contract','Accommodation','Passport'], 
            expertTips: [{title:'Quota',desc:'Check annual quotas for your country.'}] 
        },
        attractions: { metrics: [{label:'Transport',value:90},{label:'Safety',value:95}], salary: 1800, livingCost: 900 },
        stats: { qol: 80, safety: 95, happiness: 78 },
        departments: [
          {
            name: 'Automotive',
            icon: <Wrench className="w-5 h-5" />,
            jobs: [
              { title: 'Auto Electrician', exp: '3 Years', salary: '€1,400 - €2,200', demand: 85 },
              { title: 'Automotive Technician', exp: '3 Years', salary: '€1,500 - €2,500', demand: 80 }
            ]
          },
          {
            name: 'Technical',
            icon: <Factory className="w-5 h-5" />,
            jobs: [
              { title: 'CNC Operator', exp: '2 Years', salary: '€1,500 - €2,400+', demand: 85 },
              { title: 'Welder (Certified)', exp: '3 Years', salary: '€1,400 - €2,300+', demand: 90 },
              { title: 'Software Developer', exp: '5 Years', salary: '€2,500 - €5,000+', demand: 95 }
            ]
          },
          {
            name: 'Logistics & Unskilled',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Heavy Goods Driver', exp: '3 Years', salary: '€1,800 - €2,800+', demand: 90 },
              { title: 'Warehouse Staff', exp: '1 Year', salary: '€1,000 - €1,400', demand: 75 },
              { title: 'Production Line', exp: '0', salary: '€900 - €1,300', demand: 70 },
              { title: 'Construction Helper', exp: '0', salary: '€950 - €1,300', demand: 70 }
            ]
          }
        ]
      },
      {
        id: 'hr',
        name: 'Croatia',
        flag: '🇭🇷',
        description: 'Tourism and Service oriented economy.',
        visaInfo: { 
            types: ['Work Permit'], 
            processingTime: '4-6 Weeks', 
            detailedProcess: {
                preparation: [
                    'Employer requests Labor Market Test from HZZ.',
                    'Employer applies for Work Permit at Police Station (MUP).',
                    'Police issues positive opinion.'
                ],
                submission: [
                    'Apply for Visa D at embassy (based on Work Permit).',
                    'Or enter visa-free (if applicable) to collect permit.',
                    'Travel to Croatia.'
                ],
                postArrival: [
                    'Visit police station to register address.',
                    'Apply for Biometric Residence Permit.',
                    'Obtain Tax ID (OIB) if not already issued.'
                ]
            },
            documents: ['Contract','Passport','Background Check'], 
            expertTips: [{title:'Seasonal',desc:'Quotas often apply for tourism/seasonal jobs.'}] 
        },
        attractions: { metrics: [{label:'Coast',value:100},{label:'Relaxed',value:90}], salary: 1000, livingCost: 600 },
        stats: { qol: 70, safety: 85, happiness: 75 },
        departments: [
          {
            name: 'Service',
            icon: <Users className="w-5 h-5" />,
            jobs: [
              { title: 'Construction Worker', exp: '0', salary: '€600 - €1200', demand: 90 },
              { title: 'Hotel Staff', exp: '0', salary: '€600 - €1200', demand: 85 },
              { title: 'Farm Worker', exp: '0', salary: '€600 - €1200', demand: 80 },
              { title: 'Butcher', exp: '0', salary: '€600 - €1200', demand: 75 }
            ]
          },
          {
            name: 'Logistics',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Truck Driver', exp: '1', salary: '€600 - €1200', demand: 95 },
              { title: 'Welder', exp: '1', salary: '€600 - €1200', demand: 85 },
              { title: 'Warehouse Packer', exp: '0', salary: '€600 - €1200', demand: 80 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tier4',
    title: '4th Tier',
    subtitle: 'Non-Schengen',
    description: 'Developing markets with accessible entry requirements.',
    color: 'from-slate-600 to-gray-500',
    accent: 'slate',
    icon: <Globe className="w-6 h-6" />,
    stats: { avgSalary: '€900', demand: 'Steady', satisfaction: '70%' },
    countries: [
      {
        id: 'rs',
        name: 'Serbia',
        flag: '🇷🇸',
        description: 'Key logistics crossroads in the Balkans.',
        visaInfo: { 
            types: ['Visa D'], 
            processingTime: '4-6 Weeks', 
            detailedProcess: {
                preparation: [
                    'Employer conducts market test with NSZ.',
                    'Employer obtains Work Permit approval.',
                    'Receive Invitation Letter.'
                ],
                submission: [
                    'Apply for Visa D (Employment) at embassy.',
                    'Submit medical insurance and proof of funds.',
                    'Interview (optional).'
                ],
                postArrival: [
                    'Police Registration (White Card / Bela Karta) within 24 hours.',
                    'Apply for Temporary Residence (Boravište).',
                    'Finalize work contract.'
                ]
            },
            documents: ['Form D','Invitation','Insurance'], 
            expertTips: [{title:'White Card',desc:'Must register address within 24h of arrival.'}] 
        },
        attractions: { metrics: [{label:'Cost',value:95},{label:'Social',value:88}], salary: 900, livingCost: 450 },
        stats: { qol: 60, safety: 65, happiness: 55 },
        departments: [
          {
            name: 'Logistics',
            icon: <Truck className="w-5 h-5" />,
            jobs: [
              { title: 'Truck Driver', exp: '1 Year', salary: '€800 - €1,500', demand: 90 },
              { title: 'Delivery Driver', exp: '1 Year', salary: '€800 - €1,200', demand: 85 },
              { title: 'Warehouse Staff', exp: '1 Year', salary: '€600 - €900', demand: 75 }
            ]
          },
          {
            name: 'Trades',
            icon: <Wrench className="w-5 h-5" />,
            jobs: [
              { title: 'Certified Welder', exp: '1 Year', salary: '€550 - €1,000', demand: 80 },
              { title: 'Automotive Mechanic', exp: '1 Year', salary: '€510 - €770', demand: 75 }
            ]
          },
          {
            name: 'Service',
            icon: <Utensils className="w-5 h-5" />,
            jobs: [
                { title: 'Professional Cook', exp: '1 Year', salary: '€700 - €1,200', demand: 80 },
                { title: 'Hospitality Staff', exp: '1 Year', salary: '€700 - €1,200', demand: 75 },
                { title: 'Agriculture Worker', exp: '0', salary: '€340 - €600', demand: 70 }
            ]
          }
        ]
      },
      {
        id: 'mk',
        name: 'Macedonia',
        flag: '🇲🇰',
        description: 'Skilled Trades and Manufacturing.',
        visaInfo: { 
            types: ['Work Permit'], 
            processingTime: '4-6 Weeks', 
            detailedProcess: {
                preparation: [
                    'Employer submits quota request to Employment Agency.',
                    'Obtain Work Permit preliminary approval.',
                    'Medical check in home country.'
                ],
                submission: [
                    'Apply for Visa D at embassy.',
                    'Submit criminal record check.',
                    'Travel to Macedonia.'
                ],
                postArrival: [
                    'Apply for ID Card for foreigners.',
                    'Register address with police.',
                    'Final health check.'
                ]
            },
            documents: ['Contract','Passport','Medical'], 
            expertTips: [{title:'Quota',desc:'Strict quotas by sector.'}] 
        },
        attractions: { metrics: [{label:'Nature',value:90},{label:'Cost',value:95}], salary: 800, livingCost: 400 },
        stats: { qol: 58, safety: 62, happiness: 52 },
        departments: [
          {
            name: 'Skilled Trades',
            icon: <Wrench className="w-5 h-5" />,
            jobs: [
              { title: 'Welder', exp: '1 Year', salary: '€700 - €1,200', demand: 85 },
              { title: 'Electrician', exp: '1 Year', salary: '€700 - €1,200', demand: 80 },
              { title: 'Plumber', exp: '1 Year', salary: '€700 - €1,200', demand: 80 },
              { title: 'Mason', exp: '1 Year', salary: '€700 - €1,200', demand: 75 }
            ]
          },
          {
            name: 'Manufacturing',
            icon: <Factory className="w-5 h-5" />,
            jobs: [
              { title: 'Machine Operator', exp: '1 Year', salary: '€550 - €1,000', demand: 75 },
              { title: 'Assembly Worker', exp: '0', salary: '€550 - €1,000', demand: 70 }
            ]
          },
          {
            name: 'Hospitality & Agri',
            icon: <Utensils className="w-5 h-5" />,
            jobs: [
                { title: 'Chef / Cook', exp: '1 Year', salary: '€450 - €900', demand: 75 },
                { title: 'Hotel Staff', exp: '1 Year', salary: '€450 - €900', demand: 70 },
                { title: 'General Laborer', exp: '0', salary: '€400 - €700', demand: 65 }
            ]
          }
        ]
      },
      {
        id: 'al',
        name: 'Albania',
        flag: '🇦🇱',
        description: 'Tourism hotspot with developing infrastructure.',
        visaInfo: { 
            types: ['Unique Permit'], 
            processingTime: '3-6 Weeks', 
            detailedProcess: {
                preparation: [
                    'Employer uploads contract to e-Albania.',
                    'Apply for "Unique Permit" (Work & Res) approval.',
                    'Wait for preliminary approval.'
                ],
                submission: [
                    'Apply for Visa D online (e-Visa portal).',
                    'Upload scanned documents (PDF).',
                    'Wait for email approval (stamped on arrival or embassy).'
                ],
                postArrival: [
                    'Register for NIPT (Tax ID).',
                    'Finalize Residence Permit card.',
                    'Social Security registration.'
                ]
            },
            documents: ['e-Visa','Contract','License'], 
            expertTips: [{title:'Online',desc:'Fully digital e-Visa system.'}] 
        },
        attractions: { metrics: [{label:'Tourism',value:92},{label:'Cost',value:95}], salary: 800, livingCost: 400 },
        stats: { qol: 55, safety: 60, happiness: 58 },
        departments: [
          {
            name: 'General',
            icon: <Briefcase className="w-5 h-5" />,
            jobs: [
              { title: 'Construction Worker', exp: '0', salary: '€600 - €1200', demand: 90 },
              { title: 'Truck Driver', exp: '1', salary: '€600 - €1200', demand: 85 },
              { title: 'Welder', exp: '1', salary: '€600 - €1200', demand: 85 },
              { title: 'Hotel Staff', exp: '1', salary: '€600 - €1200', demand: 80 },
              { title: 'Warehouse Packer', exp: '0', salary: '€600 - €1200', demand: 75 },
              { title: 'Farm Worker', exp: '0', salary: '€600 - €1200', demand: 70 },
              { title: 'Butcher', exp: '0', salary: '€600 - €1200', demand: 70 }
            ]
          }
        ]
      }
    ]
  }
];

// ... (StatCard, ChecklistItem, ExpertTip remain the same)
const StatCard = ({ label, value, icon, color }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-4 backdrop-blur-md">
    <div className={`p-3 rounded-full bg-${color}-500/20 text-${color}-400`}>{icon}</div>
    <div><p className="text-slate-400 text-xs uppercase">{label}</p><p className="text-white font-bold text-lg">{value}</p></div>
  </div>
);

const ChecklistItem = ({ text }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div onClick={() => setChecked(!checked)} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${checked ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-slate-950 border-slate-800'}`}>
      <div className={`w-5 h-5 rounded flex items-center justify-center mr-3 transition-colors ${checked ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-500'}`}>{checked && <CheckCircle className="w-3 h-3" />}</div>
      <span className={`text-sm ${checked ? 'text-white' : 'text-slate-400'}`}>{text}</span>
    </div>
  );
};

const ExpertTip = ({ title, desc }) => (
  <div className="group bg-gradient-to-br from-slate-900 to-slate-950 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all relative overflow-hidden">
    <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/10 rounded-bl-3xl -mr-2 -mt-2 transition-all group-hover:bg-amber-500/20" />
    <div className="flex items-center mb-3"><Lightbulb className="w-5 h-5 text-amber-500 mr-2" /><h5 className="font-bold text-white">{title}</h5></div>
    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{desc}</p>
  </div>
);

// New Floating Button Component
const FloatingJobPill = ({ countryName }) => {
  const getUrl = () => {
    if (countryName) {
      return `https://www.bettercall.online/${countryName.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return 'https://www.bettercall.online';
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce-slight">
      <a 
        href={getUrl()} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg shadow-cyan-500/40 hover:scale-105 transition-transform cursor-pointer border border-white/20 backdrop-blur-md"
      >
        <Search className="w-4 h-4" />
        <span className="font-bold text-sm tracking-wide">Check New Job Openings</span>
        {countryName && <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-2">in {countryName}</span>}
        <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
      </a>
    </div>
  );
};


const App = () => {
  const [viewState, setViewState] = useState('home'); 
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const [countryTab, setCountryTab] = useState('jobs');
  const [animating, setAnimating] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const triggerTransition = (callback) => {
    setAnimating(true);
    setTimeout(() => {
      callback();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setAnimating(false), 100);
    }, 300);
  };

  const handleTierClick = (tier) => triggerTransition(() => { setSelectedTier(tier); setViewState('tier'); });
  const handleCountryClick = (country) => triggerTransition(() => { setSelectedCountry(country); setCountryTab('jobs'); setViewState('country'); });
  const handleDeptClick = (dept) => triggerTransition(() => { setSelectedDept(dept); setViewState('department'); });
  
  const goBack = () => triggerTransition(() => {
    if (viewState === 'department') setViewState('country');
    else if (viewState === 'country') setViewState('tier');
    else if (viewState === 'tier') setViewState('home');
  });

  const resetHome = () => triggerTransition(() => {
    setViewState('home');
    setSelectedTier(null);
    setSelectedCountry(null);
    setSelectedDept(null);
    setCountryTab('jobs');
  });

  const handleDirectApply = () => {
      window.open('https://bettercall.online/appointment', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden relative pb-20">
      
      {/* Floating Action Button */}
      <FloatingJobPill countryName={selectedCountry?.name} />

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col min-h-screen">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-800/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={resetHome}>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-cyan-500/20">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Global<span className="text-cyan-400">Careers</span></span>
          </div>
          {viewState !== 'home' && (
            <button onClick={resetHome} className="text-sm text-slate-400 hover:text-white flex items-center transition-colors">
              <Globe className="w-4 h-4 mr-1" /> All Regions
            </button>
          )}
        </div>

        {/* Main Content Area */}
        <div className={`transition-all duration-500 ease-out transform ${animating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'} flex-grow`}>
          
          {/* --- HOME VIEW --- */}
          {viewState === 'home' && (
            <div>
              {/* Hero Section */}
              <div className="text-center py-20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -z-10" />
                <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 inline-block">
                  Trusted by 500+ European Employers
                </span>
                <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-8 leading-tight tracking-tight">
                  Your Gateway to <br/> <span className="text-white">Europe & Beyond</span>
                </h1>
                <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                  Access premium job markets with verified visa sponsorship. <br/> Select a tier below to begin your journey.
                </p>
                <div className="flex justify-center gap-8 text-sm text-slate-500 font-mono">
                    <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> Verified Visas</span>
                    <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> Direct Contracts</span>
                    <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> Relocation Support</span>
                </div>
              </div>

              {/* Tiers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
                {TIER_DATA.map((tier) => (
                  <div 
                    key={tier.id}
                    onClick={() => handleTierClick(tier)}
                    className="group relative h-[450px] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-900/30"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                    
                    {/* Icon Bubble */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-white shadow-lg mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                      {tier.icon}
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-2">{tier.title}</h2>
                    <h3 className={`text-lg font-medium text-${tier.accent}-400 mb-4`}>{tier.subtitle}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 border-t border-slate-800 pt-4">
                      {tier.description}
                    </p>
                    
                    {/* Flags Ribbon */}
                    <div className="absolute bottom-8 left-8 right-8">
                       <div className="flex -space-x-3 overflow-hidden py-2">
                         {tier.countries.map((c, i) => (
                           <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xl shadow-lg transform hover:scale-125 hover:z-10 transition-transform">
                             {c.flag}
                           </div>
                         ))}
                       </div>
                       <div className="mt-4 flex items-center text-white text-sm font-bold group-hover:translate-x-2 transition-transform">
                         Enter Portal <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                       </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16 pb-8 text-slate-600 text-xs">
                 Official Data Partner: <span className="text-cyan-500 font-bold hover:underline cursor-pointer" onClick={() => window.open('https://www.bettercall.online', '_blank')}>www.bettercall.online</span>
              </div>
            </div>
          )}

          {/* --- TIER VIEW --- */}
          {viewState === 'tier' && selectedTier && (
            <div>
              <button onClick={goBack} className="mb-8 flex items-center text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Regions
              </button>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className={`lg:col-span-2 rounded-[3rem] p-12 relative overflow-hidden bg-gradient-to-br ${selectedTier.color}`}>
                   <div className="absolute -right-20 -top-20 opacity-20 rotate-12">{React.cloneElement(selectedTier.icon, { size: 400 })}</div>
                   <div className="relative z-10">
                     <span className="inline-block px-4 py-1.5 rounded-full bg-black/20 backdrop-blur text-white text-xs font-bold mb-6 border border-white/10">
                       REGIONAL HUB
                     </span>
                     <h2 className="text-6xl font-black text-white mb-4 tracking-tight">{selectedTier.subtitle}</h2>
                     <p className="text-white/90 text-xl max-w-xl leading-relaxed font-light">{selectedTier.description}</p>
                   </div>
                </div>

                <div className="grid grid-rows-3 gap-4">
                  <StatCard label="Avg Monthly Salary" value={selectedTier.stats.avgSalary} icon={<DollarSign className="w-5 h-5" />} color="emerald" />
                  <StatCard label="Employer Demand" value={selectedTier.stats.demand} icon={<TrendingUp className="w-5 h-5" />} color="blue" />
                  <StatCard label="Candidate Satisfaction" value={selectedTier.stats.satisfaction} icon={<Star className="w-5 h-5" />} color="amber" />
                </div>
              </div>

              <div className="flex items-center mb-8">
                 <h3 className="text-2xl font-bold text-white mr-4">Select Destination</h3>
                 <div className="h-px bg-slate-800 flex-grow" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedTier.countries.map((country) => (
                  <div 
                    key={country.id}
                    onClick={() => handleCountryClick(country)}
                    className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-7xl drop-shadow-lg">{country.flag}</span>
                      <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 h-10 line-clamp-2">{country.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {country.departments.slice(0, 3).map((d, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-950 rounded-lg text-xs font-medium text-slate-300 border border-slate-800/50">
                          {d.name}
                        </span>
                      ))}
                      {country.departments.length > 3 && <span className="px-2 py-1 text-xs text-slate-500">+{country.departments.length - 3}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- COUNTRY VIEW (Tabs) --- */}
          {viewState === 'country' && selectedCountry && (
            <div className="grid lg:grid-cols-12 gap-8 h-full">
              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <button onClick={goBack} className="flex items-center text-slate-400 hover:text-white transition-colors mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to {selectedTier.title}
                </button>
                
                <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-800/50 to-transparent" />
                  <div className="relative z-10">
                    <div className="text-9xl mb-6 drop-shadow-2xl scale-110">{selectedCountry.flag}</div>
                    <h2 className="text-4xl font-black text-white mb-2 tracking-tight">{selectedCountry.name}</h2>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-8 border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3 mr-1.5" /> VERIFIED
                    </div>
                    
                    {/* Navigation Pills */}
                    <div className="space-y-2">
                         {['jobs', 'attractions', 'visa'].map(tab => (
                             <button 
                                 key={tab}
                                 onClick={() => setCountryTab(tab)}
                                 className={`w-full p-4 rounded-2xl flex items-center space-x-4 transition-all duration-300 ${countryTab === tab ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 translate-x-2' : 'bg-slate-950/50 text-slate-400 hover:bg-slate-800'}`}
                             >
                                 {tab === 'jobs' && <Briefcase className="w-5 h-5" />}
                                 {tab === 'attractions' && <PieChart className="w-5 h-5" />}
                                 {tab === 'visa' && <FileText className="w-5 h-5" />}
                                 <span className="font-bold capitalize">{tab === 'jobs' ? 'Job Opportunities' : tab}</span>
                             </button>
                         ))}
                    </div>
                    <div className="mt-8 text-xs text-slate-600">Powered by <span className="text-cyan-600 font-bold cursor-pointer" onClick={() => window.open('https://www.bettercall.online', '_blank')}>bettercall.online</span></div>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <div className="lg:col-span-8">
                
                {/* 1. JOBS TAB */}
                {countryTab === 'jobs' && (
                    <div className="animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-white mb-6">Available Sectors</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                        {selectedCountry.departments.map((dept, idx) => (
                            <div 
                            key={idx}
                            onClick={() => handleDeptClick(dept)}
                            className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden"
                            >
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="p-3 bg-slate-950 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors shadow-lg">
                                {dept.icon}
                                </div>
                                <span className="bg-slate-950/50 px-3 py-1 rounded-full text-xs font-mono text-slate-400 border border-slate-800">
                                {dept.jobs.length} ROLES
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform relative z-10">{dept.name}</h4>
                            <p className="text-sm text-slate-500 relative z-10">Click to view positions</p>
                            </div>
                        ))}
                        </div>
                    </div>
                )}

                {/* 2. ATTRACTIONS TAB */}
                {countryTab === 'attractions' && (
                    <div className="animate-fade-in-up space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
                                <h4 className="text-slate-400 text-xs uppercase font-bold mb-4 tracking-wider">Living Standards</h4>
                                <SimpleBarChart data={selectedCountry.attractions.metrics} color="from-purple-500 to-indigo-500" />
                            </div>
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-center items-center text-center">
                                <div className="text-6xl font-black text-white mb-2">{selectedCountry.stats.qol}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-widest mb-4">Quality Index</div>
                                <div className="flex space-x-1">
                                    {[1,2,3,4,5].map(s => <Star key={s} className={`w-4 h-4 ${s<=4 ? 'text-yellow-400 fill-current' : 'text-slate-700'}`} />)}
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                             <div className="flex justify-between items-center mb-6">
                                <h4 className="text-xl font-bold text-white">Financial Overview</h4>
                                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">Monthly Estimates</span>
                             </div>
                             <ComparisonChart salary={selectedCountry.attractions.salary} col={selectedCountry.attractions.livingCost} currency="€" />
                        </div>
                    </div>
                )}

                {/* 3. VISA TAB (Detailed) */}
                {countryTab === 'visa' && selectedCountry.visaInfo.detailedProcess && (
                    <div className="animate-fade-in-up space-y-8">
                        
                        {/* Process Header */}
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex items-center justify-between">
                             <div>
                                <h4 className="text-slate-400 text-xs uppercase font-bold mb-1">Standard Processing Time</h4>
                                <div className="text-3xl font-bold text-amber-400 flex items-center">
                                    <Clock className="w-6 h-6 mr-3" />
                                    {selectedCountry.visaInfo.processingTime}
                                </div>
                             </div>
                             <div className="text-right">
                                 <div className="text-sm text-slate-400 mb-1">Visa Types Available</div>
                                 <div className="flex gap-2 justify-end">
                                     {selectedCountry.visaInfo.types.map((t,i) => (
                                         <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs text-white">{t}</span>
                                     ))}
                                 </div>
                             </div>
                        </div>

                        {/* 3-Step Detailed Process */}
                        <div className="grid gap-6">
                            {/* Step 1: Preparation */}
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={80} /></div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                    Preparation & Documents
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {selectedCountry.visaInfo.detailedProcess.preparation.map((step, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-300">
                                            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 shrink-0" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Step 2: Submission */}
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Stamp size={80} /></div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                    Submission & Interview
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {selectedCountry.visaInfo.detailedProcess.submission.map((step, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-300">
                                            <ArrowRightCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Step 3: Post-Arrival */}
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Home size={80} /></div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-3 text-sm font-bold">3</span>
                                    After Arrival Procedure
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {selectedCountry.visaInfo.detailedProcess.postArrival.map((step, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-300">
                                            <Home className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Documents & Tips */}
                        <div className="grid md:grid-cols-2 gap-6">
                             <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
                                 <h4 className="text-white font-bold mb-4">Required Documents</h4>
                                 <div className="space-y-2">
                                    {selectedCountry.visaInfo.documents.map((doc, i) => (
                                        <ChecklistItem key={i} text={doc} />
                                    ))}
                                 </div>
                             </div>
                             <div className="space-y-4">
                                {selectedCountry.visaInfo.expertTips.map((tip, i) => (
                                    <ExpertTip key={i} title={tip.title} desc={tip.desc} />
                                ))}
                             </div>
                        </div>
                    </div>
                )}
              </div>
            </div>
          )}

          {/* --- DEPARTMENT VIEW (Job List) --- */}
          {viewState === 'department' && selectedDept && (
             <div className="max-w-4xl mx-auto">
                <button onClick={goBack} className="flex items-center text-slate-400 hover:text-white transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Sectors
                </button>

                <div className="bg-slate-900 rounded-3xl p-8 mb-8 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/20">
                      {React.cloneElement(selectedDept.icon, { size: 32 })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedDept.name}</h2>
                      <p className="text-slate-400">Showing <span className="text-white font-bold">{selectedDept.jobs.length}</span> positions in {selectedCountry.name}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedDept.jobs.map((job, idx) => (
                    <div key={idx} className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all hover:shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                          <div className="flex space-x-4 text-sm text-slate-400">
                              <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" /> {job.exp} Exp</span>
                              <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1.5 text-emerald-400" /> <span className="text-emerald-400 font-bold">{job.salary}</span></span>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 w-full md:w-auto">
                          <div className="hidden md:block text-right pr-4 border-r border-slate-800">
                              <div className="text-xs text-slate-500 uppercase">Demand</div>
                              <div className="flex space-x-0.5 mt-1">
                                  {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-3 rounded-full ${i*20 < job.demand ? 'bg-cyan-500' : 'bg-slate-800'}`} />)}
                              </div>
                          </div>
                          <button onClick={handleDirectApply} className="flex-grow md:flex-grow-0 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-colors flex items-center justify-center">
                              Apply Now <ExternalLink className="w-4 h-4 ml-2" />
                          </button>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

// Helper icon
const ArrowRightCircle = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
);

export default App;