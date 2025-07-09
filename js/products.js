// Sample product data
const products = [
    {
        id: 1,
        name: "iPhone 13 Pro",
        brand: "Apple",
        category: "Smartphones",
        price: 99900,
        rating: 4.7,
        reviews: 1245,
        description: "The iPhone 13 Pro features a stunning Super Retina XDR display with ProMotion, A15 Bionic chip, and a pro camera system for incredible photos and videos."
    },
    {
        id: 2,
        name: "MacBook Air M1",
        brand: "Apple",
        category: "Laptops",
        price: 89900,
        rating: 4.8,
        reviews: 982,
        description: "The MacBook Air with the M1 chip is incredibly fast and powerful, with a silent fanless design, all-day battery life, and a beautiful Retina display."
    },
    {
        id: 3,
        name: "Sony WH-1000XM4",
        brand: "Sony",
        category: "Headphones",
        price: 24990,
        rating: 4.6,
        reviews: 756,
        description: "Industry-leading noise cancellation, exceptional sound quality, and up to 30 hours of battery life make these wireless headphones a top choice."
    },
    {
        id: 4,
        name: "Apple Watch Series 7",
        brand: "Apple",
        category: "Smartwatches",
        price: 39900,
        rating: 4.5,
        reviews: 643,
        description: "The most advanced Apple Watch features a larger, more durable display, faster charging, and new health and fitness capabilities."
    },
    {
        id: 5,
        name: "Canon EOS R6",
        brand: "Canon",
        category: "Cameras",
        price: 169900,
        rating: 4.7,
        reviews: 432,
        description: "A full-frame mirrorless camera with advanced autofocus, in-body image stabilization, and 4K video capabilities."
    },
    {
        id: 6,
        name: "Nike Air Max 270",
        brand: "Nike",
        category: "Shoes",
        price: 10995,
        rating: 4.4,
        reviews: 876,
        description: "These men's running shoes feature the tallest Air unit yet for unbelievable comfort and a bold look."
    },
    {
        id: 7,
        name: "Samsung QLED 4K TV",
        brand: "Samsung",
        category: "TVs",
        price: 64990,
        rating: 4.6,
        reviews: 543,
        description: "Quantum Dot technology delivers 100% color volume with ultra-thin design and powerful smart TV features."
    },
    {
        id: 8,
        name: "Dell XPS 13",
        brand: "Dell",
        category: "Laptops",
        price: 124990,
        rating: 4.7,
        reviews: 765,
        description: "The world's smallest 13-inch laptop with an InfinityEdge display, powerful performance, and premium materials."
    },
    {
        id: 9,
        name: "Bose QuietComfort 45",
        brand: "Bose",
        category: "Headphones",
        price: 28900,
        rating: 4.5,
        reviews: 432,
        description: "Premium noise-cancelling headphones with world-class sound and comfortable fit for all-day listening."
    },
    {
        id: 10,
        name: "OnePlus 10 Pro",
        brand: "OnePlus",
        category: "Smartphones",
        price: 66999,
        rating: 4.4,
        reviews: 654,
        description: "Flagship smartphone with Hasselblad camera, 120Hz AMOLED display, and ultra-fast charging."
    },
    {
        id: 11,
        name: "Amazon Echo Dot",
        brand: "Amazon",
        category: "Smart Home",
        price: 3499,
        rating: 4.3,
        reviews: 987,
        description: "Our most popular smart speaker with Alexa. Voice control your music, smart home devices, and more."
    },
    {
        id: 12,
        name: "HP Pavilion Gaming",
        brand: "HP",
        category: "Laptops",
        price: 64990,
        rating: 4.2,
        reviews: 543,
        description: "Gaming laptop with powerful processor, dedicated graphics, and high-refresh-rate display."
    },
    {
        id: 13,
        name: "Adidas Ultraboost",
        brand: "Adidas",
        category: "Shoes",
        price: 14999,
        rating: 4.5,
        reviews: 765,
        description: "Running shoes with responsive cushioning and a snug, supportive fit for all-day comfort."
    },
    {
        id: 14,
        name: "Logitech MX Master 3",
        brand: "Logitech",
        category: "Accessories",
        price: 8995,
        rating: 4.6,
        reviews: 432,
        description: "Advanced wireless mouse with ultra-fast scrolling, ergonomic design, and multi-device connectivity."
    },
    {
        id: 15,
        name: "Kindle Paperwhite",
        brand: "Amazon",
        category: "E-readers",
        price: 12999,
        rating: 4.7,
        reviews: 876,
        description: "Waterproof, high-resolution display with adjustable warm light and weeks of battery life."
    },
    {
        id: 16,
        name: "JBL Flip 5",
        brand: "JBL",
        category: "Speakers",
        price: 8999,
        rating: 4.4,
        reviews: 654,
        description: "Portable Bluetooth speaker with powerful sound and waterproof design for outdoor use."
    },
    {
        id: 17,
        name: "Nikon D3500",
        brand: "Nikon",
        category: "Cameras",
        price: 32995,
        rating: 4.5,
        reviews: 543,
        description: "Entry-level DSLR camera with easy-to-use controls and excellent image quality."
    },
    {
        id: 18,
        name: "Sony PlayStation 5",
        brand: "Sony",
        category: "Gaming",
        price: 49990,
        rating: 4.8,
        reviews: 987,
        description: "Next-gen gaming console with ultra-high-speed SSD, immersive 3D audio, and stunning graphics."
    },
    {
        id: 19,
        name: "Fitbit Charge 5",
        brand: "Fitbit",
        category: "Fitness",
        price: 12999,
        rating: 4.3,
        reviews: 765,
        description: "Advanced fitness tracker with built-in GPS, stress management tools, and health metrics."
    },
    {
        id: 20,
        name: "Dyson V11 Vacuum",
        brand: "Dyson",
        category: "Home",
        price: 49900,
        rating: 4.7,
        reviews: 654,
        description: "Cordless vacuum with powerful suction, intelligent cleaning modes, and up to 60 minutes of runtime."
    }
];

// Save products to localStorage if not already present
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
}