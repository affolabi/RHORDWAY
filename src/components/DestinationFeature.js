export function renderDestinationFeature() {
  return `
    <section class="ref-top-destinations-section" id="top-destinations">
      <div class="ref-container">
        
        <!-- Section Header -->
        <div class="ref-destinations-header text-center">
          <h2 class="ref-section-heading">TOP DESTINATION</h2>
          <p class="ref-section-subheading">Experience the world's top destinations like never before</p>
        </div>

        <!-- 4-Column Bento / Mosaic Grid (Exact Reference Composition with Mobile Swipe-In) -->
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
                <h3 class="ref-mosaic-landmark">Stone Town Heritage</h3>
                <p class="ref-mosaic-desc">
                  Ancient UNESCO-listed labyrinthine alleys, brass-studded carved doors, fragrant clove bazaars, and pristine shores along the turquoise Indian Ocean.
                </p>
              </div>
            </div>
          </div>

          <!-- Column 2: 2 Stacked Cards (Doha Museum + Zanzibar Lagoons) -->
          <div class="ref-bento-col col-2 collage-swipe-col" data-swipe="right">
            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="right">
              <img 
                src="./assets/images/doha-museum.jpg" 
                alt="Museum of Islamic Art reflection pool in Doha" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">DOHA</span>
                <h3 class="ref-mosaic-landmark">Museum of Islamic Art</h3>
              </div>
            </div>

            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/zanzibar-kayak.jpg" 
                alt="Crystal clear sea kayaking in Zanzibar" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">ZANZIBAR</span>
                <h3 class="ref-mosaic-landmark">Kendwa Coral Lagoons</h3>
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

          <!-- Column 4: 2 Stacked Cards (Formula 1 Lusail + Sea Turtle Sanctuary) -->
          <div class="ref-bento-col col-4 collage-swipe-col" data-swipe="right">
            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/doha-f1-grand-prix.jpg" 
                alt="Lusail International Circuit Formula 1 night racing" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">QATAR</span>
                <h3 class="ref-mosaic-landmark">Lusail F1 Circuit</h3>
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
