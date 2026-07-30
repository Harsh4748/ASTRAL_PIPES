
const productDb = {
  'cpvc-pro': {
    title: 'Astral CPVC Pro',
    category: 'Plumbing Systems',
    description: 'Astral CPVC Pro pipes and fittings are manufactured from custom-formulated chlorinated polyvinyl chloride (CPVC) compounds. These systems are designed for distribution of hot and cold potable water in residential, commercial, and high-rise applications, offering extreme reliability and longevity.',
    features: [
      'Lead-free and non-toxic formulation',
      'Suitable for water temperatures up to 93°C (200°F)',
      'Lowest thermal expansion compared to other plastics',
      'High chemical, scaling, and corrosion resistance',
      'Self-extinguishing (does not support combustion)'
    ],
    specs: [
      { param: 'Size Range', value: '1/2" (15mm) to 12" (300mm)' },
      { param: 'Standards', value: 'ASTM D2846, ASTM F441, IS 15778' },
      { param: 'Pressure Rating', value: 'SDR 11 (27.6 bar @ 23°C / 8.6 bar @ 82°C)' },
      { param: 'Hazen-Williams C Factor', value: '150 (Smooth walls, minimal head loss)' },
      { param: 'Thermal Conductivity', value: '0.14 W/m-K' }
    ]
  },
  'silencio': {
    title: 'Astral Silencio',
    category: 'Drainage Systems',
    description: 'Astral Silencio is a premium low-noise soil, waste, and rainwater drainage system (SWR). Constructed with three co-extruded layers utilizing mineral-reinforced polypropylene, it reduces wastewater flow sounds down to a whispered 12 decibels, providing acoustic comfort in premium residential and hospital builds.',
    features: [
      'Exceptional noise insulation down to 12dB at 2 L/s flow rate',
      'High impact resistance, even at sub-zero temperatures (-20°C)',
      'Stands up to hot waste liquids up to 95°C',
      'Push-fit joints with specialized rubber seals for easy leak-free jointing',
      'High chemical resistance (pH 2 to pH 12)'
    ],
    specs: [
      { param: 'Size Range', value: '40mm to 200mm Outer Diameter' },
      { param: 'Standards', value: 'EN 1451-1, DIN EN 14366 (Acoustic)' },
      { param: 'Acoustic Rating', value: '12 dB (Class III soundproofing)' },
      { param: 'Ring Stiffness', value: 'SN 4 (Min. 4 kN/m²)' },
      { param: 'Connection Method', value: 'Push-fit socket with rubber ring' }
    ]
  },
  'chem-pro': {
    title: 'Chem Pro Industrial CPVC',
    category: 'Industrial Piping',
    description: 'Designed specifically to convey aggressive chemical solutions, acids, bases, and high-pressure steam fluids, Chem Pro Industrial CPVC piping systems offer high chemical compatibility, eliminating corrosion-related pipeline failures in chemical processing facilities.',
    features: [
      'Outstanding chemical resistance to over 200 corrosive substances',
      'Operates continuously under pressure at temperatures up to 93°C',
      'Low thermal conductivity prevents heat radiation loss',
      'Smooth inner wall prevents scaling and solid deposition',
      'Superior fire safety profile with high Limiting Oxygen Index (LOI: 60)'
    ],
    specs: [
      { param: 'Size Range', value: '1/2" (15mm) to 12" (300mm) Schedule 80' },
      { param: 'Standards', value: 'ASTM F441 (Pipes), ASTM F439 (Fittings)' },
      { param: 'Pressure Rating', value: 'Schedule 80 (Up to 58 bar @ 23°C depending on size)' },
      { param: 'Jointing Method', value: 'Heavy-duty solvent cement welding' },
      { param: 'Hazen-Williams C Factor', value: '150' }
    ]
  },
  'column-pipes': {
    title: 'Borewell Column Pipes',
    category: 'Agriculture Systems',
    description: 'Astral uPVC Borewell Column pipes are highly engineered conduits used to suspend submersible pumps and draw water from deep groundwater wells. Outfitted with heavy-duty square thread couplers and rubber lock rings, they withstand enormous tensile loading and high hydrostatic pressures.',
    features: [
      'Lead-free, maintaining water purity',
      'Patented lock-ring coupler prevents joint loosening due to pump vibration',
      'Square thread design provides massive pull-out load capacity',
      'Biaxial orientation adds structural hoop strength',
      'Friction-free inner surface reduces energy consumption of the pump'
    ],
    specs: [
      { param: 'Size Range', value: '1" (25mm) to 4" (100mm)' },
      { param: 'Pressure Rating', value: 'V4 (15 to 26 kg/cm²), Super Heavy (35 kg/cm²)' },
      { param: 'Max Installation Depth', value: 'Up to 350 meters (1150 feet)' },
      { param: 'Thread Profile', value: 'CNC-machined square threads with lock-ring' },
      { param: 'Safety Factor', value: '2:1 structural safety margin' }
    ]
  },
  'cleo-tanks': {
    title: 'Cleo Water Storage Tanks',
    category: 'Water Storage',
    description: 'Astral Cleo represents premium water storage engineering. Infused with active Copper-Shield antimicrobial technology, these tanks permanently suppress bacterial replication and block sunlight entry to eliminate algae growth, keeping stored water clean and safe.',
    features: [
      'Inner lining enriched with active copper particles',
      'Anti-microbial and anti-viral protection',
      '6-layer construction with heavy thermal barrier insulation',
      'Threaded airtight lid prevents insects and dust entry',
      '100% Food-grade virgin LLDPE polymers'
    ],
    specs: [
      { param: 'Capacity Range', value: '500 Liters to 5,000 Liters' },
      { param: 'Layers', value: '6 Co-extruded layers' },
      { param: 'UV Resistance', value: 'UV stabilized outer layer (Grade UV16)' },
      { param: 'Anti-viral Efficiency', value: '99.9% reduction in bacterial colony' },
      { param: 'Warranty', value: '10 Years limited warranty' }
    ]
  },
  'aquanom': {
    title: 'uPVC Aquanom Pressure',
    category: 'Plumbing Systems',
    description: 'Astral Aquanom uPVC pressure piping systems are standard water supply systems designed for cold-water mains, loop distributions, and building service pipes. Being lead-free, they ensure non-toxic delivery of fresh municipal drinking water.',
    features: [
      'Lead-free formulation preserves clean taste',
      'Perfect dimensional accuracy for rapid jointing',
      'High chemical resistance prevents degradation in high pH soils',
      'Smooth walls avoid biofilm deposition',
      'Corrosion resistant, long operational lifetime'
    ],
    specs: [
      { param: 'Size Range', value: '1/2" (15mm) to 8" (200mm)' },
      { param: 'Standards', value: 'IS 4985 (Pipes), IS 7834 (Fittings)' },
      { param: 'Pressure Class', value: 'Class 1 to Class 5 (2.5 bar to 10 bar)' },
      { param: 'Jointing Method', value: 'Solvent cement or elastomer ring joints' },
      { param: 'Hazen-Williams C Factor', value: '150' }
    ]
  }
};

/* ==========================================================================
   DEALER LOCATOR DATABASE
   ========================================================================== */
const dealerDb = {
  gujarat: {
    ahmedabad: [
      { name: 'Astral Premium Showcase - Ahmedabad HQ', address: 'Mithakhali Six Roads, Ellisbridge, Ahmedabad', phone: '+91 79 2658 1234', lat: 150, lng: 135, partner: true },
      { name: 'Bharat Pipe Syndicate', address: 'Ashram Road, Ahmedabad', phone: '+91 98250 12345', lat: 145, lng: 140, partner: false },
      { name: 'National Sanitary & Hardware', address: 'S.G. Highway, Gota, Ahmedabad', phone: '+91 99042 56789', lat: 140, lng: 130, partner: true }
    ],
    surat: [
      { name: 'Tapi Sanitary Mart', address: 'Ring Road, Surat', phone: '+91 98980 11223', lat: 165, lng: 165, partner: true },
      { name: 'Surat Pipes & Valves Co.', address: 'Adajan Road, Surat', phone: '+91 97240 44556', lat: 160, lng: 170, partner: false }
    ],
    vadodara: [
      { name: 'Baroda Pipe Traders', address: 'Alkapuri, Vadodara', phone: '+91 98790 77889', lat: 155, lng: 150, partner: true }
    ]
  },
  maharashtra: {
    mumbai: [
      { name: 'Bombay Sanitary Store', address: 'Lamington Road, Mumbai', phone: '+91 22 2382 9988', lat: 170, lng: 220, partner: true },
      { name: 'Western India Sales Corp.', address: 'Andheri East, Mumbai', phone: '+91 98200 44556', lat: 168, lng: 225, partner: false },
      { name: 'Metropolis Plumbing Solutions', address: 'Dharavi Link Rd, Mumbai', phone: '+91 98199 88776', lat: 172, lng: 215, partner: true }
    ],
    pune: [
      { name: 'Deccan Pipe Syndicate', address: 'Swargate, Pune', phone: '+91 98500 12345', lat: 180, lng: 240, partner: true },
      { name: 'Pune Pipe Emporium', address: 'Hadapsar, Pune', phone: '+91 99600 66778', lat: 178, lng: 245, partner: false }
    ]
  },
  karnataka: {
    bangalore: [
      { name: 'Karnataka Piping Hub', address: 'Kanakapura Road, Jayanagar, Bangalore', phone: '+91 80 2663 1111', lat: 195, lng: 320, partner: true },
      { name: 'Silicon Valley Plumbing Traders', address: 'Whitefield, Bangalore', phone: '+91 98450 99887', lat: 200, lng: 315, partner: false },
      { name: 'Supreme Hardware & Sanitaries', address: 'Peenya Industrial Area, Bangalore', phone: '+91 99450 22334', lat: 190, lng: 325, partner: true }
    ]
  },
  delhi: {
    newdelhi: [
      { name: 'Capital Pipe & Sanitary Store', address: 'Chawri Bazar, New Delhi', phone: '+91 11 2326 5544', lat: 210, lng: 95, partner: true },
      { name: 'Yamuna Sales Agency', address: 'Laxmi Nagar, Delhi', phone: '+91 98110 55443', lat: 215, lng: 90, partner: false }
    ]
  },
  tamilnadu: {
    chennai: [
      { name: 'Coromandel Pipes & Fittings', address: 'Parrys Corner, Chennai', phone: '+91 44 2534 8877', lat: 240, lng: 310, partner: true },
      { name: 'Madras Plumbing Mart', address: 'T. Nagar, Chennai', phone: '+91 98400 11223', lat: 245, lng: 315, partner: false }
    ]
  }
};

/* ==========================================================================
   INITIALIZATION & EVENT HANDLERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Glass Header Scroll Animation --- */
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* --- Mobile Navigation Menu --- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMobileNav = () => {
    menuToggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  };

  menuToggle.addEventListener('click', toggleMobileNav);
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        toggleMobileNav();
      }
    });
  });

  /* --- Hero Slide Controller --- */
  const slider = document.getElementById('hero-slider');
  const slides = slider.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  let currentSlide = 0;
  let slideInterval;

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  };

  const nextSlide = () => {
    let nextIdx = (currentSlide + 1) % slides.length;
    showSlide(nextIdx);
  };

  const prevSlide = () => {
    let prevIdx = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIdx);
  };

  // Auto Rotation Timer
  const startSlideTimer = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 7000);
  };

  nextBtn.addEventListener('click', () => {
    nextSlide();
    startSlideTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    startSlideTimer();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'));
      showSlide(idx);
      startSlideTimer();
    });
  });

  startSlideTimer();

  /* --- Scroll Entrance Observer --- */
  const revealItems = document.querySelectorAll('.reveal-item');
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // If it's a stats wrapper, trigger count up
        if (entry.target.classList.contains('stats-section') || entry.target.querySelector('.stat-number')) {
          triggerStatsCounter();
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealItems.forEach(item => observer.observe(item));

  /* --- Statistics Counter Animation --- */
  let statsTriggered = false;
  const triggerStatsCounter = () => {
    if (statsTriggered) return;
    statsTriggered = true;
    
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds total animation time
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing curve (easeOutQuad)
        const easeVal = progress * (2 - progress);
        const currentCount = Math.floor(easeVal * target);
        
        if (target >= 1000) {
          // Format with commas
          counter.textContent = currentCount.toLocaleString('en-US');
        } else {
          counter.textContent = currentCount;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toLocaleString('en-US');
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  /* --- Product Filtering tabs --- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productCards = document.querySelectorAll('.product-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Wire product dropdown links to scroll and filter
  const dropdownLinks = document.querySelectorAll('.dropdown-col a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const filter = link.getAttribute('data-filter');
      // Find matching filter tab and click it
      const targetTab = document.querySelector(`.filter-tab[data-filter="${filter}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  /* --- Technical Specifications Modal --- */
  const modal = document.getElementById('product-modal');
  const modalClose = modal.querySelector('.modal-close');
  const modalDetails = document.getElementById('modal-details');
  const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

  const openProductModal = (prodKey) => {
    const data = productDb[prodKey];
    if (!data) return;

    // Create Modal HTML content
    let featuresHtml = '';
    data.features.forEach(f => {
      featuresHtml += `<li>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0a4b87" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>`;
    });

    let specsHtml = '';
    data.specs.forEach(s => {
      specsHtml += `<tr>
        <th>${s.param}</th>
        <td>${s.value}</td>
      </tr>`;
    });

    // Create graphical preview icon corresponding to product range
    let previewGraphic = '';
    if (prodKey === 'cpvc-pro') {
      previewGraphic = `<div class="pipe-mini plumbing-mini" style="transform: scale(1.5);">
        <div class="mini-tube blue-tint"></div>
        <div class="mini-fitting"></div>
        <div class="mini-stripe red-stripe"></div>
      </div>`;
    } else if (prodKey === 'silencio') {
      previewGraphic = `<div class="pipe-mini drainage-mini" style="transform: scale(1.5);">
        <div class="mini-tube gray-dark"></div>
        <div class="mini-fitting-drain"></div>
      </div>`;
    } else if (prodKey === 'chem-pro') {
      previewGraphic = `<div class="pipe-mini industrial-mini" style="transform: scale(1.5);">
        <div class="mini-tube industrial-dark"></div>
        <div class="mini-valve"><div class="valve-wheel"></div></div>
      </div>`;
    } else if (prodKey === 'column-pipes') {
      previewGraphic = `<div class="pipe-mini agri-mini" style="transform: scale(1.5);">
        <div class="mini-tube blue-medium"></div>
        <div class="mini-threads"></div>
      </div>`;
    } else if (prodKey === 'cleo-tanks') {
      previewGraphic = `<div class="tank-mini" style="transform: scale(1.3);">
        <div class="mini-tank-body">
          <div class="mini-tank-ridge"></div>
          <div class="mini-tank-badge">Cu</div>
        </div>
      </div>`;
    } else if (prodKey === 'aquanom') {
      previewGraphic = `<div class="pipe-mini aquanom-mini" style="transform: scale(1.5);">
        <div class="mini-tube blue-light"></div>
        <div class="mini-fitting"></div>
      </div>`;
    }

    modalDetails.innerHTML = `
      <div class="modal-image">
        ${previewGraphic}
      </div>
      <div class="modal-info">
        <span class="modal-info-cat">${data.category}</span>
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        
        <h4 style="margin-bottom: 12px; font-size: 1.1rem;">Advantage Features</h4>
        <ul class="features-list" style="margin-bottom: 24px; gap: 10px;">
          ${featuresHtml}
        </ul>

        <h4 style="margin-bottom: 12px; font-size: 1.1rem;">Engineering Specifications</h4>
        <table class="modal-specs-table">
          <tbody>
            ${specsHtml}
          </tbody>
        </table>
      </div>
    `;

    modal.classList.add('open');
    document.body.classList.add('no-scroll');
  };

  const closeProductModal = () => {
    modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  };

  learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prodKey = btn.getAttribute('data-product');
      openProductModal(prodKey);
    });
  });

  modalClose.addEventListener('click', closeProductModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProductModal();
  });

  /* --- Hydraulic Pipe Sizing & Flow Velocity Calculator --- */
  const calcMaterial = document.getElementById('calc-material');
  const calcSize = document.getElementById('calc-size');
  const calcLength = document.getElementById('calc-length');
  const calcFlow = document.getElementById('calc-flow');
  const flowVal = document.getElementById('flow-val');

  const outVelocity = document.getElementById('out-velocity');
  const velocityStatus = document.getElementById('velocity-status');
  const outHeadloss = document.getElementById('out-headloss');
  const outLen = document.getElementById('out-len');
  const outPressure = document.getElementById('out-pressure');

  // Pre-configured Inside Diameters (IDs) in mm for nominal bore selections
  const nominalSizeIds = {
    '15': 14.8,  // 1/2"
    '20': 19.8,  // 3/4"
    '25': 25.6,  // 1"
    '32': 32.8,  // 1-1/4"
    '40': 38.6,  // 1-1/2"
    '50': 48.6,  // 2"
    '80': 73.7,  // 3"
    '100': 97.2  // 4"
  };

  const calculateHydraulics = () => {
    // 1. Inputs
    const lengthMeters = parseFloat(calcLength.value) || 30;
    const flowLpm = parseFloat(calcFlow.value) || 30;
    const sizeNominal = calcSize.value;
    const selectedOption = calcMaterial.options[calcMaterial.selectedIndex];
    const roughnessC = parseFloat(selectedOption.getAttribute('data-roughness')) || 150;

    // Inside diameter in meters
    const innerDiameterMm = nominalSizeIds[sizeNominal] || 15;
    const diameterMeters = innerDiameterMm / 1000;

    // Convert flow rate from Liters/min to cubic meters/second
    const flowM3S = (flowLpm / 60) / 1000;

    // 2. Velocity calculation (v = Q / A)
    const areaM2 = (Math.PI * Math.pow(diameterMeters, 2)) / 4;
    const velocityMs = flowM3S / areaM2;

    // Update Velocity Display
    outVelocity.textContent = velocityMs.toFixed(2);

    // Velocity status indicators
    velocityStatus.className = 'velocity-status-badge'; // Reset classes
    if (velocityMs > 2.5) {
      velocityStatus.textContent = 'Erosion Hazard / Surge Risk';
      velocityStatus.classList.add('badge-red');
    } else if (velocityMs < 1.0) {
      velocityStatus.textContent = 'Low Velocity: Sediment Risk';
      velocityStatus.classList.add('badge-blue');
    } else {
      velocityStatus.textContent = 'Optimal Flow Velocity';
      velocityStatus.classList.add('badge-green');
    }

    // 3. Hazen-Williams Head Loss calculation
    // h_f = 10.67 * L * Q^1.852 / (C^1.852 * D^4.87)
    const term1 = 10.67 * lengthMeters;
    const term2 = Math.pow(flowM3S, 1.852);
    const term3 = Math.pow(roughnessC, 1.852);
    const term4 = Math.pow(diameterMeters, 4.87);
    
    let headLossMeters = (term1 * term2) / (term3 * term4);
    
    // Safety boundaries for extreme calculations
    if (isNaN(headLossMeters) || !isFinite(headLossMeters)) {
      headLossMeters = 0;
    }

    outHeadloss.textContent = headLossMeters.toFixed(2);
    outLen.textContent = lengthMeters;

    // Convert Head Loss to Pressure Drop (1 meter of head = 0.0981 bar = 1.4223 psi)
    const pressureDropBar = headLossMeters * 0.0981;
    const pressureDropPsi = pressureDropBar * 14.5038;

    outPressure.innerHTML = `${pressureDropBar.toFixed(2)} bar <span style="opacity: 0.6; font-size: 0.85em;">(${pressureDropPsi.toFixed(2)} psi)</span>`;
  };

  // Event Listeners for calculator
  calcMaterial.addEventListener('change', calculateHydraulics);
  calcSize.addEventListener('change', calculateHydraulics);
  calcLength.addEventListener('input', calculateHydraulics);
  calcFlow.addEventListener('input', (e) => {
    flowVal.textContent = e.target.value;
    calculateHydraulics();
  });

  // Trigger initial calculation
  calculateHydraulics();

  /* --- Interactive Dealer Locator --- */
  const stateSelect = document.getElementById('state-select');
  const citySelect = document.getElementById('city-select');
  const dealersContainer = document.getElementById('dealers-container');
  const dealerCount = document.getElementById('dealer-count');
  const mapPinsGroup = document.getElementById('map-pins');
  const mapOverlay = document.getElementById('map-overlay');
  
  const overlayName = document.getElementById('overlay-name');
  const overlayAddr = document.getElementById('overlay-addr');
  const overlayTel = document.getElementById('overlay-tel');

  // Load cities based on state
  stateSelect.addEventListener('change', () => {
    const state = stateSelect.value;
    citySelect.innerHTML = '<option value="">-- Choose City --</option>';
    citySelect.disabled = true;
    dealersContainer.innerHTML = `
      <div class="dealers-placeholder">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="11" r="3"/><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/></svg>
        <p>Select city to view local dealer options.</p>
      </div>`;
    dealerCount.textContent = '0';
    mapPinsGroup.innerHTML = ''; // Clear pins
    mapOverlay.classList.remove('show');

    if (state && dealerDb[state]) {
      citySelect.disabled = false;
      for (const city in dealerDb[state]) {
        // Capitalize city name
        const cityName = city.charAt(0).toUpperCase() + city.slice(1);
        const option = document.createElement('option');
        option.value = city;
        option.textContent = cityName;
        citySelect.appendChild(option);
      }
    }
  });

  // Select city
  citySelect.addEventListener('change', () => {
    const state = stateSelect.value;
    const city = citySelect.value;
    dealersContainer.innerHTML = '';
    mapPinsGroup.innerHTML = '';
    mapOverlay.classList.remove('show');

    if (state && city && dealerDb[state][city]) {
      const dealers = dealerDb[state][city];
      dealerCount.textContent = dealers.length;

      dealers.forEach((dealer, idx) => {
        // 1. Create List Item card
        const dealerCard = document.createElement('div');
        dealerCard.className = 'dealer-item-card';
        dealerCard.setAttribute('data-index', idx);
        
        dealerCard.innerHTML = `
          <div class="dealer-item-header">
            <h5>${dealer.name}</h5>
            ${dealer.partner ? '<span class="partner-badge">Premium</span>' : ''}
          </div>
          <p>${dealer.address}</p>
          <a href="tel:${dealer.phone.replace(/\s+/g, '')}" class="dealer-item-tel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${dealer.phone}</span>
          </a>
        `;
        
        dealersContainer.appendChild(dealerCard);

        // 2. Create Vector Map Pin
        const pin = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pin.setAttribute('class', 'map-pin');
        pin.setAttribute('data-index', idx);
        pin.innerHTML = `
          <circle cx="${dealer.lng}" cy="${dealer.lat}" r="8" class="pin-circle"></circle>
          <circle cx="${dealer.lng}" cy="${dealer.lat}" r="2" fill="white"></circle>
        `;
        mapPinsGroup.appendChild(pin);

        // Map pin click handler
        pin.addEventListener('click', () => {
          activateDealer(idx);
        });

        // Dealer card click handler
        dealerCard.addEventListener('click', () => {
          activateDealer(idx);
        });
      });
    } else {
      dealersContainer.innerHTML = `
        <div class="dealers-placeholder">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="11" r="3"/><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/></svg>
          <p>Choose state and city to locate stockists.</p>
        </div>`;
      dealerCount.textContent = '0';
    }
  });

  const activateDealer = (idx) => {
    const cards = document.querySelectorAll('.dealer-item-card');
    const pins = document.querySelectorAll('.map-pin');
    const state = stateSelect.value;
    const city = citySelect.value;
    const dealer = dealerDb[state][city][idx];

    // Deactivate previous
    cards.forEach(c => c.classList.remove('active'));
    pins.forEach(p => p.classList.remove('active'));

    // Activate selected
    const activeCard = document.querySelector(`.dealer-item-card[data-index="${idx}"]`);
    const activePin = document.querySelector(`.map-pin[data-index="${idx}"]`);
    
    if (activeCard) {
      activeCard.classList.add('active');
      activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (activePin) {
      activePin.classList.add('active');
    }

    // Show Map overlay card
    overlayName.textContent = dealer.name;
    overlayAddr.textContent = dealer.address;
    overlayTel.textContent = `Call: ${dealer.phone}`;
    overlayTel.setAttribute('href', `tel:${dealer.phone.replace(/\s+/g, '')}`);
    mapOverlay.classList.add('show');
  };

  /* --- Inquiry Form Validation & Submission --- */
  const inquiryForm = document.getElementById('inquiry-form');
  const formStatus = document.getElementById('form-status');

  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple mock loading state
    const submitBtn = inquiryForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Inquiry... <span class="spinner" style="display:inline-block; border: 2px solid white; border-top: 2px solid transparent; border-radius: 50%; width:16px; height:16px; animation: float 1s linear infinite;"></span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      formStatus.textContent = 'Inquiry sent successfully! Our technical team will reach out shortly.';
      formStatus.className = 'form-status success';
      
      // Reset form
      inquiryForm.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 6000);
    }, 1500);
  });

  /* --- Back to Top & Scroll Spy --- */
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Scroll Spy links click
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
