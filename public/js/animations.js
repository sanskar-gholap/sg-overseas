document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.12 };

    // Viewport Scroll Reveal Watch Loops
    const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Staggered Component Grid Delay Watch Loops
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 70);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => scrollRevealObserver.observe(el));
    document.querySelectorAll('.card-animate').forEach(el => cardObserver.observe(el));
    
    // Central Product Specification Database Matrix
    const productCatalogDatabase = {
        "onion": {
            title: "Fresh Red Onion",
            desc: "Premium selected red hybrid varieties displaying crisp outer skins and completely zero core rot defects, sorted to exact scale definitions.",
            specs: [["Variety", "Global Red Hybrid / Dark Red Mix"], ["Size Diameter", "45mm – 60mm / 60mm – 85mm+ custom options"], ["Packaging Specification", "25kg / 50kg Breathable Mesh Bags Packaging System"], ["Moisture Index Limit", "Less than 14% Max Baseline Index Threshold"], ["Outer Skins Count", "Minimum 2–3 intact protective dry scale layers"]],
            policy: "Complimentary sizing trial batches up to 2kg are issued globally with air freight shipping variables handled via buyer transport collect accounts."
        },
        "ginger": {
            title: "Fresh Ginger Roots",
            desc: "Thoroughly washed soil-grown ginger stalks, sun-cured to lock in natural oil variables and clean, flavor parameters.",
            specs: [["Root Piece Weight Grade", "150g – 250g+ uniform configurations"], ["Moisture Content Scale", "10% to 12% Maximum allowed limit value"], ["Extraneous Matter Weight", "Under 1% Total Margin Volume Limit Metrics"], ["Packaging Methods", "10kg / 13.5kg Ventilated Plastic Open Crates or Jute Sacks"]],
            policy: "Trial configuration allocations dispatch following verification logs of corporate import credentials."
        },
        "potato": {
            title: "Fresh Starchy Potato",
            desc: "High dry matter variant with thin clean skins, optimal for processing pipelines, food networks, or grocery supply chains.",
            specs: [["Grade Criteria", "Class A Premium Export Standard Quality"], ["Diameter Sizing Profile", "50mm and above uniform shapes setup profiles"], ["Reducing Sugar Scale", "Below 0.5% threshold limit index (prevents transit browning)"], ["Dry Matter Density Range", "18% to 22% optimum thickness parameters verification values"]],
            policy: "Commercial grading trial cases are prepared inside 5kg boxes upon formalized RFQ validation."
        },
        "chilli": {
            title: "Fresh Green Chilli",
            desc: "Vibrant hot pepper selections harvested and size-sorted uniformly to protect structural aesthetics across deliveries.",
            specs: [["Pungency Rating Matrix", "40,000 – 80,000 SHU (Scoville Heat Units Level Scale)"], ["Length Dimensions Scale", "8cm to 12cm continuous length stems configuration"], ["Cold-Chain Temperature", "Maintained at +7°C to +10°C environment logs during transit"]],
            policy: "Perishable item sample modules are routed via specialized priority express cold cases."
        },
        "chilli-powder": {
            title: "Premium Chilli Powder",
            desc: "100% pure milled red hot chilli pods processed under ambient cold controls to keep original capsaicin strings pristine without dyes.",
            specs: [["Mesh Fineness Parameters", "60 – 80 mesh screening sieve analysis"], ["Total Ash content", "Under 7% Total Index allowed specification criteria"], ["Color Density ASTA Scale", "60 ASTA – 100 ASTA baseline variants setup configurations"], ["Aflatoxin / Safety", "Negative / Not Detected (EU & FDA Compliant Status Verification)"]],
            policy: "100g completely sealed foil pouches ship internationally for laboratory analysis free of cost."
        },
        "onion-powder": {
            title: "Dry Onion Powder",
            desc: "Dehydrated ground root powder variant made from choice white and pink onions, free-flowing formulation preventing clump issues.",
            specs: [["Moisture Threshold Scale", "5.0% Maximum permitted moisture ratio indexes"], ["Sieve Analysis Fineness", "100% passing through dynamic 60-mesh sizing elements"], ["Coliform Assay Test", "Absent / Negative per gram tracking status log verification"]],
            policy: "Technical safety data sheets (SDS) accompany initial 150g pilot batches."
        },
        "tomato-powder": {
            title: "Dehydrated Tomato Powder",
            desc: "Spray-dried intense tomato extract dense with natural lycopene strings, dispersible in soup bases or manufacturing processing mixes.",
            specs: [["Color Profile Attribute", "Deep Natural Lycopene Red Hue Profile"], ["Solubility Metric Value", "100% fully dispersible inside warm water mixtures"], ["Packing Configuration Unit", "20kg Multi-layer Kraft bags featuring internal poly-liners"]],
            policy: "Vacuum-sealed test enclosures are provided alongside official Certificate of Analysis logs."
        },
        "turmeric-powder": {
            title: "Pure Turmeric Powder",
            desc: "High curcumin concentration fingers powder ground cleanly to cross global pharmacy and high food grading requirements.",
            specs: [["Curcumin Compound Value", "3.5% to 5.5% High Grade Active Matrix Value"], ["Heavy Metals / Lead", "Nil tracking indicators found (Safe Parameter Assurance)"], ["Salmonella Assay Test", "Absent within 25g industrial tracking sample modules"]],
            policy: "200g trial bags route alongside active phytosanitary documents to clean international customs lines."
        }
    };

    // Modal Control Execution Setup
    const modalOverlay = document.getElementById('productModal');
    if(modalOverlay) {
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const specsTableBody = document.getElementById('modalSpecsTableBody');
        const samplePolicyText = document.getElementById('modalSamplePolicy');
        const closeModalBtn = document.querySelector('.close-modal-btn');

        document.querySelectorAll('[data-id] .open-details-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const targetCard = e.target.closest('[data-id]');
                const productId = targetCard.getAttribute('data-id');
                const data = productCatalogDatabase[productId];
                const itemImgSrc = targetCard.querySelector('img').src;

                if(data) {
                    modalImg.src = itemImgSrc;
                    modalTitle.textContent = data.title;
                    modalDesc.textContent = data.desc;
                    samplePolicyText.textContent = data.policy;

                    specsTableBody.innerHTML = '';
                    data.specs.forEach(row => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `<td><strong>${row[0]}</strong></td><td>${row[1]}</td>`;
                        specsTableBody.appendChild(tr);
                    });

                    modalOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden'; 
                }
            });
        });

        const closeModalFunc = () => { modalOverlay.classList.remove('active'); document.body.style.overflow = ''; };
        closeModalBtn.addEventListener('click', closeModalFunc);
        modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModalFunc(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModalFunc(); });
    }
});