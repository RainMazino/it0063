// 1.js
function showSection(section) {
    document.getElementById('item-boxes').classList.add('d-none');
    document.getElementById('pokecoins').classList.add('d-none');
    document.getElementById(section).classList.remove('d-none');
    
    document.getElementById('btn-item-boxes').classList.remove('active');
    document.getElementById('btn-pokecoins').classList.remove('active');
    document.getElementById('btn-' + section).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const itemBoxes = [
        { 
            img: "Fuzzy\\Fuzzy Buddy Reseaarch Day Ultra Ticket Box.webp",
            badges: [
                { src: "Fuzzy\\Fuzzy 1.webp", quantity: 1 },
                { src: "Fuzzy\\Fuzzy 2.webp", quantity: 5 }
            ],
            title: "Fuzzy Buddy Research Day Ultra Ticket Box",
            subtitle: "Boosts Buddy interactions: Bonus Candy + Hearts.",
            price: 59,
            timer: "4 DAYS LEFT",
            limit: "1 TIME ONLY"
        },
        { 
            img: "Bug Out\\Bug Out Ultra Ticket Box.webp",
            badges: [
                { src: "Bug Out\\Bug Out 1.webp", quantity: 1 },
                { src: "Bug Out\\Bug Out 2.webp", quantity: 2 }
            ],
            title: "Bug Out Ultra Ticket Box",
            subtitle: "Bug-type event bundle: Incense + Candy XL boosters.",
            price: 59,
            timer: "3 DAYS LEFT",
            limit: "2 TIMES ONLY"
        },
        { 
            img: "Go Rocket\\Go Rocket Box.webp",
            badges: [
                { src: "Go Rocket\\Go Rocket 1.webp", quantity: 7 },
                { src: "Go Rocket\\Go Rocket 2.webp", quantity: 7 },
                { src: "Go Rocket\\Go Rocket 3.webp", quantity: 7 },
                { src: "Go Rocket\\Go Rocket 4.webp", quantity: 7 }
            ],
            title: "GO Rocket Box",
            subtitle: "Team GO Rocket battle essentials: Max Potions & Mysterious Components.",
            price: 289,
            timer: "5 DAYS LEFT",
            limit: "3 TIMES ONLY"
        },
        { 
            img: "Ultra Rapid\\Ultra Raid Box.webp",
            badges: [
                { src: "Ultra Rapid\\Ultra Rapid 1.webp", quantity: 3 },
                { src: "Ultra Rapid\\Ultra Rapid 2.webp", quantity: 3 },
                { src: "Ultra Rapid\\Ultra Rapid 3.webp", quantity: 1 }
            ],
            title: "Ultra Raid Box",
            subtitle: "Contains Premium Raid Passes + Max Potions/Revives.",
            price: 149,
            timer: "2 DAYS LEFT",
            limit: "1 TIME ONLY"
        },
        { 
            img: "Might and Mastery\\Might and Mastery Box.webp",
            badges: [
                { src: "Might and Mastery\\Might and Mastery 1.webp", quantity: 1 },
                { src: "Might and Mastery\\Might and Mastery 2.webp", quantity: 3 },
                { src: "Might and Mastery\\Might and Mastery 3.webp", quantity: 2 }
            ],
            title: "Might and Mastery Box",
            subtitle: "Battle-ready bundle with TMs and Rare Candy.",
            price: 149,
            timer: "6 DAYS LEFT",
            limit: "5 TIMES ONLY"
        },
        { 
            img: "Item Boxes\\Super Incubator.webp",
            badges: [{ quantity: 2 }],
            title: "Super Incubator",
            subtitle: "Hatches Eggs 20% faster than regular Incubators.",
            price: 88,
            timer: "1 DAY LEFT",
            limit: "1 TIME ONLY"
        },
        { 
            img: "Item Boxes\\Egg Incubator.webp",
            badges: [{ quantity: 3 }],
            title: "Egg Incubator",
            subtitle: "Standard tool for hatching Pokémon Eggs.",
            price: 88,
            timer: "4 DAYS LEFT",
            limit: "2 TIMES ONLY"
        },
        { 
            img: "Item Boxes\\Max Revive.webp",
            badges: [{ quantity: 6 }],
            title: "Max Revive",
            subtitle: "Fully restores a fainted Pokémon's HP.",
            price: 59,
            timer: "3 DAYS LEFT",
            limit: "3 TIMES ONLY"
        },
        { 
            img: "Item Boxes\\Premium Battle Pass.webp",
            badges: [{ quantity: 3 }],
            title: "Premium Battle Pass",
            subtitle: "Unlocks special Raid Battles and exclusive rewards.",
            price: 88,
            timer: "5 DAYS LEFT",
            limit: "2 TIMES ONLY"
        },
        { 
            img: "Item Boxes\\Max Particle Pack x6.webp",
            badges: [{ quantity: 6 }],
            title: "Max Particle Pack x6",
            subtitle: "Contains 6 bundles of Stardust boosters for power-ups.",
            price: 235,
            timer: "7 DAYS LEFT",
            limit: "4 TIMES ONLY"
        },
        { 
            img: "Item Boxes\\Max Mushroom.webp",
            badges: [{ quantity: 3 }],
            title: "Max Mushroom",
            subtitle: "Activates Gigantamax potential in Pokémon.",
            price: 289,
            timer: "2 DAYS LEFT",
            limit: "1 TIME ONLY"
        }
    ];

    const pokecoins = [
        { 
            img: "Pokecoins\\110 PokeCoins.webp", 
            title: "110 PokéCoins", 
            desc: "10 Web Store Bonus Coins", 
            price: 29 
        },
        { 
            img: "Pokecoins\\600 PokeCoins.webp", 
            title: "600 PokéCoins", 
            desc: "50 Web Store Bonus Coins", 
            price: 149 
        },
        { 
            img: "Pokecoins\\1300 PokeCoins.webp", 
            title: "1,300 PokéCoins", 
            desc: "100 Web Store Bonus Coins", 
            price: 289 
        },
        { 
            img: "Pokecoins\\2700 PokeCoins.webp", 
            title: "2,700 PokéCoins", 
            desc: "200 Web Store Bonus Coins", 
            price: 589 
        },
        { 
            img: "Pokecoins\\5600 PokeCoins.webp", 
            title: "5,600 PokéCoins", 
            desc: "400 Web Store Bonus Coins", 
            price: 1170 
        },
        { 
            img: "Pokecoins\\15500 PokeCoins.webp", 
            title: "15,500 PokéCoins", 
            desc: "1000 Web Store Bonus Coins", 
            price: 2950 
        }
    ];

    const itemBoxContainer = document.getElementById("item-box-list");
    const pokecoinContainer = document.getElementById("pokecoin-list");

 itemBoxes.forEach((box, index) => {
    itemBoxContainer.innerHTML += `
        <div class="col">
            <div class="floating-card">
                <div class="card-top position-relative">
                    ${index < 5 ? 
                        `<div class="timer-badge">${box.timer}</div>
                         <div class="purchase-limit-badge">${box.limit}</div>` : 
                     (index >= 5 && index < 7) ? 
                        `<div class="popular-badge">POPULAR</div>` : 
                     ''
                    }
                    <img src="${box.img}" class="main-item-image" alt="${box.title}">
                    
                    <div class="badges-container">
                        ${box.badges.map((badge, badgeIndex) => `
                            <div class="badge-group">
                                ${index < 5 || badge.src ? `
                                    <img src="${badge.src || 'transparent.png'}" 
                                         class="image-badge" 
                                         alt="Item badge">` : ''}
                                <div class="number-badge">
                                    ${badge.quantity}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="card-bottom">
                    <h5 class="fw-bold mb-1">${box.title}</h5>
                    <p class="text-muted small mb-2">${box.subtitle}</p>
                    <button class="btn price-btn">₱${box.price.toFixed(2)}</button>
                </div>
            </div>
        </div>`;
});

    pokecoins.forEach(coin => {
        pokecoinContainer.innerHTML += `
            <div class="col">
                <div class="floating-card">
                    <div class="card-top">
                        <img src="${coin.img}" class="w-50" alt="${coin.title}">
                    </div>
                    <div class="card-bottom">
                        <h5 class="fw-bold">${coin.title}</h5>
                        <p>${coin.desc}</p>
                        <button class="btn btn-success">₱${coin.price.toFixed(2)}</button>
                    </div>
                </div>
            </div>`;
    });

    document.querySelectorAll('.price-btn').forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});
