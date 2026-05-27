export type Service = {
  slug: string;
  name: string;
  shortDesc: string;
  metaDesc: string;
  whatIs: string;
  symptoms: string[];
  process: { step: string; desc: string }[];
  costRange: string;
  faqs: { q: string; a: string }[];
};

export type Area = {
  slug: string;
  name: string;
  distance: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDesc: "Permanent tooth replacement that looks, feels, and functions like your natural teeth.",
    metaDesc: "Get permanent dental implants at Vighnaharta Dental Clinic, Bakori Phata, Wagholi, Pune. Dr. Saurabh Jadhav offers affordable, long-lasting implants. Book a free consultation.",
    whatIs: "A dental implant is a titanium post surgically placed into the jawbone to replace a missing tooth root. A custom crown is then attached on top, giving you a natural-looking, permanent tooth. Implants preserve jawbone, prevent shifting of adjacent teeth, and last 20+ years with proper care.",
    symptoms: [
      "One or more missing teeth",
      "Loose or failing dentures",
      "Broken tooth that cannot be saved",
      "Tooth decay that has reached the root",
      "Self-consciousness about gaps in your smile",
    ],
    process: [
      { step: "Consultation & X-ray", desc: "3D scan to assess bone density and plan implant placement." },
      { step: "Implant Placement", desc: "Titanium post placed under local anesthesia — usually painless." },
      { step: "Healing (2–4 months)", desc: "Implant fuses with jawbone (osseointegration)." },
      { step: "Crown Placement", desc: "Custom porcelain crown attached — blends perfectly with natural teeth." },
    ],
    costRange: "₹18,000 – ₹35,000 per implant (depending on crown material and bone graft need)",
    faqs: [
      { q: "Are dental implants painful?", a: "The procedure is done under local anesthesia. Most patients report less discomfort than a tooth extraction. Post-surgery soreness lasts 2–3 days and is managed with standard pain relief." },
      { q: "How long do dental implants last?", a: "With proper brushing, flossing, and regular check-ups, implants can last 25+ years or a lifetime. The crown may need replacement after 10–15 years." },
      { q: "Am I a candidate for dental implants?", a: "Most adults with good general health qualify. Adequate bone density is required — if bone loss has occurred, a bone graft can be done first." },
      { q: "What is the cost of dental implants in Pune?", a: "At Vighnaharta Dental, implants range from ₹18,000 to ₹35,000 depending on the type of crown and whether a bone graft is needed." },
      { q: "How many visits are needed?", a: "Typically 3–4 visits spread over 3–5 months: consultation, implant placement, healing review, and crown fitting." },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDesc: "Save your natural tooth and eliminate pain with modern, virtually painless root canal therapy.",
    metaDesc: "Painless root canal treatment in Wagholi, Pune at Vighnaharta Dental Clinic. Dr. Saurabh Jadhav. Same-day appointments available. Call +91 80079 78328.",
    whatIs: "Root canal treatment (RCT) removes infected pulp from inside the tooth, cleans and seals the root canals, and saves the natural tooth from extraction. Modern techniques make the procedure no more uncomfortable than a routine filling.",
    symptoms: [
      "Severe toothache that worsens at night",
      "Prolonged sensitivity to hot or cold",
      "Darkening or discolouration of the tooth",
      "Swelling or tenderness in nearby gums",
      "Persistent pimple on the gums",
    ],
    process: [
      { step: "Diagnosis", desc: "X-ray to confirm infection depth and root anatomy." },
      { step: "Anaesthesia", desc: "Local anaesthesia ensures a completely pain-free procedure." },
      { step: "Pulp Removal", desc: "Infected tissue removed and canals cleaned with rotary instruments." },
      { step: "Sealing & Crown", desc: "Canals filled with biocompatible material; crown placed for protection." },
    ],
    costRange: "₹3,500 – ₹8,000 per tooth (excluding crown)",
    faqs: [
      { q: "Is root canal treatment painful?", a: "With modern anaesthesia and rotary techniques, most patients feel no pain during the procedure. Some mild soreness for 1–2 days after is normal." },
      { q: "How long does root canal take?", a: "Single-visit RCT takes 60–90 minutes. Complex cases may need 2 visits." },
      { q: "Root canal vs extraction — which is better?", a: "Saving your natural tooth is almost always the better choice. Extraction leads to bone loss, shifting teeth, and the cost of a replacement (implant or bridge)." },
      { q: "What happens after root canal?", a: "A dental crown is placed over the treated tooth within 1–2 weeks to protect it from fracture and restore full function." },
      { q: "How long does a root canal last?", a: "A properly done root canal with a crown can last a lifetime with good oral hygiene." },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDesc: "Professional whitening that delivers 4–8 shades brighter results in a single visit.",
    metaDesc: "Professional teeth whitening in Wagholi, Pune. Get a brighter smile in one visit at Vighnaharta Dental Clinic. Safe, effective, lasting results. Book now.",
    whatIs: "Professional teeth whitening uses clinically-tested bleaching gels activated by advanced light technology to break down stains on enamel. Clinic whitening is significantly more effective and safer than over-the-counter strips or pastes.",
    symptoms: [
      "Yellow or stained teeth from tea, coffee, or tobacco",
      "Dull smile despite regular brushing",
      "Discolouration from ageing",
      "Stains from certain medications",
      "Upcoming wedding, event, or important occasion",
    ],
    process: [
      { step: "Shade Assessment", desc: "Baseline shade recorded to measure improvement." },
      { step: "Gum Protection", desc: "Protective barrier applied to gums before gel." },
      { step: "Whitening Gel", desc: "Professional-grade gel applied and activated with LED light." },
      { step: "Result & Aftercare", desc: "Immediate shade comparison; take-home maintenance kit provided." },
    ],
    costRange: "₹4,000 – ₹10,000 (in-clinic session)",
    faqs: [
      { q: "How white will my teeth get?", a: "Most patients see 4–8 shades of improvement in one session. Results vary based on the type and depth of staining." },
      { q: "Is teeth whitening safe?", a: "Yes, when done by a qualified dentist. We use clinically approved gels at safe concentrations that do not damage enamel." },
      { q: "How long do the results last?", a: "Results typically last 1–2 years with good oral hygiene and avoiding heavy staining foods. A take-home kit helps maintain the results." },
      { q: "Does whitening work on crowns or veneers?", a: "No — bleaching gels only work on natural tooth enamel. Crowns and veneers retain their original shade." },
      { q: "Will my teeth be sensitive after whitening?", a: "Some patients experience mild sensitivity for 24–48 hours. We use desensitising gel to minimise this." },
    ],
  },
  {
    slug: "orthodontics-braces",
    name: "Orthodontics & Braces",
    shortDesc: "Straighten your teeth with metal braces, ceramic braces, or clear aligners.",
    metaDesc: "Orthodontics and braces in Wagholi, Pune at Vighnaharta Dental Clinic. Metal, ceramic, and clear aligner options. Affordable EMI available. Book consultation.",
    whatIs: "Orthodontic treatment uses braces or clear aligners to gradually move teeth into their correct positions, correcting crowding, spacing, overbites, underbites, and crossbites. Treatment improves both aesthetics and long-term oral health.",
    symptoms: [
      "Crowded or overlapping teeth",
      "Gaps between teeth",
      "Protruding upper or lower teeth",
      "Difficulty biting or chewing properly",
      "Jaw pain or uneven wear on teeth",
    ],
    process: [
      { step: "Consultation & Records", desc: "X-rays, photos, and impressions to plan the ideal treatment." },
      { step: "Brace Fitting", desc: "Brackets bonded to teeth; wires threaded through." },
      { step: "Monthly Adjustments", desc: "Wires tightened progressively to move teeth to target position." },
      { step: "Retention", desc: "Retainer worn after braces to maintain the final position." },
    ],
    costRange: "₹18,000 – ₹45,000 (metal braces); ₹50,000 – ₹1,20,000 (clear aligners)",
    faqs: [
      { q: "How long does orthodontic treatment take?", a: "Typically 12–24 months depending on the severity of misalignment. Clear aligners may be faster for mild cases." },
      { q: "Metal braces vs clear aligners — which is better?", a: "Metal braces work best for complex cases and are more affordable. Clear aligners are nearly invisible and removable, ideal for mild-to-moderate cases and adults." },
      { q: "Are braces painful?", a: "Initial fitting and each adjustment cause mild soreness for 2–3 days. Over-the-counter pain relief is usually sufficient." },
      { q: "Can adults get braces?", a: "Absolutely. There is no age limit for orthodontic treatment. We treat many adults with both traditional braces and clear aligners." },
      { q: "Is EMI available for braces?", a: "Yes, we offer easy monthly payment plans to make treatment affordable." },
    ],
  },
  {
    slug: "dental-crowns-bridges",
    name: "Dental Crowns & Bridges",
    shortDesc: "Restore damaged teeth or replace missing ones with natural-looking crowns and bridges.",
    metaDesc: "Dental crowns and bridges in Wagholi, Pune. Restore or replace teeth with durable, natural-looking restorations at Vighnaharta Dental Clinic. Book today.",
    whatIs: "A dental crown caps a damaged or weakened tooth to restore its shape, strength, and appearance. A dental bridge fills the gap left by one or more missing teeth by anchoring a prosthetic tooth to adjacent teeth. Both are custom-made to match your natural teeth.",
    symptoms: [
      "Cracked or broken tooth",
      "Severely decayed tooth not treatable by filling",
      "Tooth weakened after root canal",
      "Missing tooth causing gaps",
      "Cosmetically misshaped tooth",
    ],
    process: [
      { step: "Preparation", desc: "Tooth reshaped to create space for the crown." },
      { step: "Impression", desc: "Digital or putty impression taken for lab fabrication." },
      { step: "Temporary Crown", desc: "Temporary crown placed while permanent one is made (5–7 days)." },
      { step: "Permanent Placement", desc: "Crown cemented and bite adjusted for perfect fit." },
    ],
    costRange: "₹3,500 – ₹12,000 per crown (material-dependent)",
    faqs: [
      { q: "How long do crowns last?", a: "Porcelain-fused-to-metal crowns last 10–15 years; zirconia crowns can last 20+ years with proper care." },
      { q: "Does getting a crown hurt?", a: "The procedure is done under local anaesthesia. Mild sensitivity for a few days after is normal." },
      { q: "Crown vs filling — when do I need a crown?", a: "When more than 50% of a tooth is damaged or after a root canal, a crown provides superior protection. Fillings are for smaller cavities." },
      { q: "What materials are available?", a: "We offer PFM (porcelain-fused-to-metal), full porcelain, and zirconia crowns. Zirconia is strongest and most natural-looking." },
      { q: "Can a bridge replace an implant?", a: "A bridge is a non-surgical, faster alternative. However, unlike an implant, it requires grinding adjacent healthy teeth and does not prevent bone loss." },
    ],
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    shortDesc: "Safe, comfortable surgical and non-surgical extraction of problematic wisdom teeth.",
    metaDesc: "Wisdom tooth removal in Wagholi, Pune. Pain-free extractions by Dr. Saurabh Jadhav at Vighnaharta Dental Clinic, Bakori Phata. Walk-in and same-day appointments.",
    whatIs: "Wisdom teeth (third molars) often emerge between ages 17–25. When they lack space to erupt properly, they become impacted — growing at an angle or remaining trapped under the gumline, causing pain, infection, and crowding. Timely removal prevents these complications.",
    symptoms: [
      "Pain or swelling at the back of the jaw",
      "Difficulty opening the mouth fully",
      "Bad breath or unpleasant taste near the back teeth",
      "Gum swelling or bleeding around the last molar",
      "X-ray showing impacted or partially erupted wisdom tooth",
    ],
    process: [
      { step: "X-ray Assessment", desc: "OPG X-ray to determine position, angulation, and roots." },
      { step: "Anaesthesia", desc: "Local anaesthesia for a completely pain-free extraction." },
      { step: "Extraction", desc: "Simple or surgical removal depending on impaction level." },
      { step: "Post-op Care", desc: "Aftercare instructions, antibiotics, and follow-up to ensure healing." },
    ],
    costRange: "₹1,500 – ₹6,000 per tooth (simple to surgical extraction)",
    faqs: [
      { q: "How long does wisdom tooth removal take?", a: "Simple extractions take 15–30 minutes. Surgical removal of an impacted tooth may take 45–60 minutes." },
      { q: "Is wisdom tooth removal painful?", a: "With proper anaesthesia, you feel no pain during the procedure. Post-operative soreness is managed with prescribed pain relief and subsides in 3–5 days." },
      { q: "Do all wisdom teeth need to be removed?", a: "No. Only wisdom teeth that are causing or likely to cause problems need removal. We recommend removal only when clinically necessary." },
      { q: "What should I eat after wisdom tooth removal?", a: "Soft foods (yogurt, dal, mashed vegetables) for the first 3–5 days. Avoid hard, crunchy, or spicy food until the site heals." },
      { q: "How long is the recovery?", a: "Initial healing takes 3–5 days. Full gum closure takes about 3–4 weeks." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    shortDesc: "Gentle, child-friendly dental care from the first tooth through the teenage years.",
    metaDesc: "Kids dentist in Wagholi, Pune. Friendly, gentle pediatric dental care at Vighnaharta Dental Clinic. First visit free for children under 5. Book an appointment.",
    whatIs: "Pediatric dentistry focuses on the oral health of children from infancy through adolescence. Early dental visits build healthy habits, catch problems early, and ensure your child's teeth develop correctly. Our clinic is designed to make children feel comfortable and safe.",
    symptoms: [
      "Child's first tooth has appeared (6–12 months)",
      "Tooth pain or sensitivity in a child",
      "Visible cavities or brown spots on teeth",
      "Thumb-sucking affecting tooth alignment",
      "First dental check-up for a school-age child",
    ],
    process: [
      { step: "Child-friendly Welcome", desc: "Gentle introduction to the dental environment to build trust." },
      { step: "Examination", desc: "Check all erupted teeth, gums, bite, and oral habits." },
      { step: "Cleaning & Fluoride", desc: "Professional cleaning and fluoride application to prevent decay." },
      { step: "Parent Guidance", desc: "Brushing technique, diet advice, and next visit schedule." },
    ],
    costRange: "₹500 – ₹3,000 (check-up and cleaning); treatment costs vary",
    faqs: [
      { q: "When should my child first visit the dentist?", a: "When the first tooth appears or by the child's first birthday — whichever comes first. Early visits establish healthy habits and catch issues early." },
      { q: "Are dental X-rays safe for children?", a: "Yes. We use digital X-rays with very low radiation, and only take them when clinically necessary." },
      { q: "How do you handle a frightened child?", a: "We use the 'tell-show-do' technique and work at the child's pace. Our team is trained in child behaviour management." },
      { q: "Do milk teeth need treatment?", a: "Yes. Infected milk teeth can affect permanent teeth growing beneath them and cause significant pain. Treating them protects your child's long-term dental health." },
      { q: "How often should children visit the dentist?", a: "Every 6 months for a routine check-up and cleaning." },
    ],
  },
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortDesc: "Routine check-ups, fillings, cleanings, and preventive care to keep your smile healthy.",
    metaDesc: "General dentistry in Wagholi, Pune. Routine check-ups, fillings, scaling, and cleanings at Vighnaharta Dental Clinic. Open 9:30 AM to 9:30 PM daily. Book now.",
    whatIs: "General dentistry is the foundation of oral health. Regular check-ups and cleanings catch problems early — before they become expensive or painful. Our general dentistry services include examinations, X-rays, fillings, scaling, polishing, and extractions.",
    symptoms: [
      "Time for your 6-month routine check-up",
      "Toothache or dental sensitivity",
      "Bleeding gums while brushing",
      "Visible plaque build-up or tartar",
      "Chipped or cracked tooth",
    ],
    process: [
      { step: "Comprehensive Exam", desc: "Full mouth check-up including X-rays to spot hidden issues." },
      { step: "Scaling & Polishing", desc: "Professional removal of plaque and tartar build-up." },
      { step: "Treatment Planning", desc: "Any issues found are explained clearly with treatment options." },
      { step: "Fillings / Extractions", desc: "Same-visit treatment for most routine dental needs." },
    ],
    costRange: "₹500 – ₹3,500 (check-up, cleaning, or fillings)",
    faqs: [
      { q: "How often should I visit the dentist?", a: "Every 6 months for a routine check-up and cleaning. This is the single most effective habit for long-term oral health." },
      { q: "Does scaling damage teeth?", a: "No. Professional scaling removes hardened tartar that brushing cannot reach. It does not damage enamel and is essential for gum health." },
      { q: "What type of filling material do you use?", a: "We use tooth-coloured composite resin fillings that blend naturally with your teeth. We also offer amalgam for posterior teeth where required." },
      { q: "I have no pain — do I still need a check-up?", a: "Yes. Most dental problems (cavities, gum disease, early bone loss) are painless in early stages. Early detection saves teeth and money." },
      { q: "What is included in a routine check-up?", a: "Visual examination, X-rays if needed, gum health assessment, oral cancer screening, professional cleaning, and personalised home care advice." },
    ],
  },
];

export const AREAS: Area[] = [
  {
    slug: "wagholi",
    name: "Wagholi",
    distance: "0 km — primary location",
    description: "Vighnaharta Dental Clinic is located at Bakori Phata, Wagholi — directly on Pune-Nagar Road in the Oxy Primo Complex. Easily accessible from all parts of Wagholi.",
  },
  {
    slug: "bakori-phata",
    name: "Bakori Phata",
    distance: "0.5 km",
    description: "Our clinic is situated at Bakori Phata on Pune-Nagar Road, making us the closest dental clinic for residents of Bakori Phata and the surrounding societies.",
  },
  {
    slug: "kharadi",
    name: "Kharadi",
    distance: "6 km",
    description: "Kharadi residents can reach Vighnaharta Dental Clinic in under 15 minutes via Pune-Nagar Road. We serve patients from World Trade Centre, Zensar, and nearby IT park areas.",
  },
  {
    slug: "viman-nagar",
    name: "Viman Nagar",
    distance: "10 km",
    description: "Patients from Viman Nagar regularly visit our clinic for dental implants, orthodontics, and cosmetic dentistry. Located 20 minutes away via Nagar Road.",
  },
  {
    slug: "nagar-road",
    name: "Nagar Road",
    distance: "8 km",
    description: "Our clinic is directly on Pune-Nagar Road (NH753D), making us easily accessible to patients from all areas along Nagar Road.",
  },
  {
    slug: "lonikand",
    name: "Lonikand",
    distance: "3 km",
    description: "Lonikand residents can reach our clinic in under 10 minutes. We provide complete dental care for families in Lonikand and nearby gated communities.",
  },
  {
    slug: "solapur-road",
    name: "Solapur Road",
    distance: "12 km",
    description: "Patients from Hadapsar and Solapur Road choose Vighnaharta Dental for specialised treatments like implants and orthodontics not easily available locally.",
  },
  {
    slug: "mundhwa",
    name: "Mundhwa",
    distance: "9 km",
    description: "Mundhwa and Magarpatta City residents visit our Wagholi clinic for comprehensive dental care including root canals, implants, and teeth whitening.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  metaDesc: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dental-implant-cost-pune",
    title: "Dental Implant Cost in Pune 2025 — Complete Guide",
    excerpt: "Everything you need to know about dental implant pricing in Pune — what affects the cost, what to expect, and how to choose the right clinic.",
    date: "2025-05-01",
    readTime: "6 min",
    tag: "Implants",
    metaDesc: "How much do dental implants cost in Pune in 2025? Full breakdown of pricing, factors, and what to expect at Vighnaharta Dental Clinic, Wagholi.",
  },
  {
    slug: "root-canal-vs-extraction",
    title: "Root Canal vs Extraction: Which is Right for You?",
    excerpt: "Should you save the tooth or remove it? Pros, cons, costs, and long-term consequences of both options.",
    date: "2025-05-10",
    readTime: "5 min",
    tag: "Root Canal",
    metaDesc: "Root canal vs tooth extraction — pros, cons, costs, and long-term effects explained by Dr. Saurabh Jadhav at Vighnaharta Dental Clinic, Wagholi.",
  },
  {
    slug: "is-root-canal-painful",
    title: "Is Root Canal Painful in 2025? What to Actually Expect",
    excerpt: "The root canal has a bad reputation — but is it deserved? A modern root canal is no more uncomfortable than a filling.",
    date: "2025-05-20",
    readTime: "4 min",
    tag: "Root Canal",
    metaDesc: "Is root canal painful? Modern root canals at Vighnaharta Dental Clinic, Wagholi are comfortable and quick. Find out what to expect in 2025.",
  },
  {
    slug: "invisalign-vs-braces-india",
    title: "Invisalign vs Metal Braces in India — Honest Comparison",
    excerpt: "Cost, effectiveness, comfort, and appearance — a clear comparison to help you choose the right orthodontic treatment.",
    date: "2025-06-01",
    readTime: "7 min",
    tag: "Orthodontics",
    metaDesc: "Invisalign vs metal braces in India — cost, comfort, and effectiveness compared. Get expert orthodontic advice at Vighnaharta Dental Clinic, Wagholi.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
