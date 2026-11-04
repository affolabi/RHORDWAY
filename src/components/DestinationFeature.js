export function renderDestinationFeature() {
  return `
    <section class="ref-top-destinations-section mw-destinations-section" id="top-destinations">
      <div class="mw-container">
        
        <!-- Section Header (Marwa Editorial Style) -->
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Top Destinations
            </span>
            <h2 class="mw-huge-heading">
              Iconic landmarks &<br />coastal sanctuaries
            </h2>
          </div>
          <p class="mw-header-side-desc">
            Every Rhordway itinerary blends 5-star resort comfort, private cultural access, and unforgettable natural wonders.
          </p>
        </div>

        <!-- 4-Column Bento / Mosaic Grid (With Mobile Swipe-In) -->
        <div class="ref-bento-grid" id="destinationCollageGrid">
          
          <!-- Column 1: Tall Editorial Portrait Card (Zanzibar Stone Town) -->
          <div class="ref-bento-col col-1 collage-swipe-col" data-swipe="left">
            <div class="ref-mosaic-card card-tall-editorial collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/zanzibar-stone-town.jpg" 
                alt="Historic Stone Town Zanzibar carved doors and ancient architecture" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">ZANZIBAR</span>
                <h3 class="ref-mosaic-landmark">Stone Town & JAZ Elite Aurora</h3>
                <p class="ref-mosaic-desc">
                  Ancient UNESCO-listed alleys, Mnemba Island dolphin reefs, Kendwa Beach, and 5-star all-inclusive coastal luxury.
                </p>
              </div>
            </div>
          </div>

          <!-- Column 2: 2 Stacked Cards (Doha Museum + Nairobi Safari) -->
          <div class="ref-bento-col col-2 collage-swipe-col" data-swipe="right">
            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="right">
              <img 
                src="./assets/images/doha-museum.jpg" 
                alt="Museum of Islamic Art reflection pool in Doha" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">DOHA · QATAR</span>
                <h3 class="ref-mosaic-landmark">National Museum & Villaggio</h3>
              </div>
            </div>

            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/nairobi-safari.jpg" 
                alt="Rothschild giraffes and safari in Nairobi Kenya" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">NAIROBI · KENYA</span>
                <h3 class="ref-mosaic-landmark">Safari & Giraffe Sanctuary</h3>
              </div>
            </div>
          </div>

          <!-- Column 3: Extra Tall Feature Card (Doha Skyline) -->
          <div class="ref-bento-col col-3 collage-swipe-col" data-swipe="left">
            <div class="ref-mosaic-card card-tall-center collage-card-swipe" data-swipe-mobile="right">
              <img 
                src="./assets/images/doha-skyline.jpg" 
                alt="Illuminated modern skyline along Doha Corniche" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">QATAR</span>
                <h3 class="ref-mosaic-landmark">Doha Skyline Corniche</h3>
              </div>
            </div>
          </div>

          <!-- Column 4: 2 Stacked Cards (Bali Ubud + Sea Turtle Sanctuary) -->
          <div class="ref-bento-col col-4 collage-swipe-col" data-swipe="right">
            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/bali-ubud.jpg" 
                alt="Luxury infinity pool overlooking Ubud jungle terraces in Bali" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">BALI & SINGAPORE</span>
                <h3 class="ref-mosaic-landmark">Ubud Rainforest & Marina Bay</h3>
              </div>
            </div>

            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="right">
              <img 
                src="./assets/images/zanzibar-turtles.jpg" 
                alt="Giant sea turtles at Baraka Natural Aquarium Zanzibar" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">ZANZIBAR</span>
                <h3 class="ref-mosaic-landmark">Baraka Sea Turtles</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
