// Usage: This file is used to add products/items to your website.

/**
 * The products/items that you want to showcase on your website.
 * @type {Array}
 * @property {string} id - The unique identifier for the product. (required)
 * @property {string} name - The name of the product. (optional but recommended)
 * @property {string} image - The URL of the image for the product. (optional but recommended)
 * @property {string} description - A brief description of the product. (optional but recommended)
 * @property {string} category - The category of the product. (optional but recommended)
 * @property {string} link - The URL to the product page. (optional)
 */
const products = [
    {
        id: "1",
        name: "Turbocharger Kit",
        image: "https://img.freepik.com/free-psd/time-machine-isolated_23-2151870819.jpg?t=st=1729790236~exp=1729793836~hmac=29e1a09c61aaffef8102b6107f84114771b9270ba7a6c35ce24f5e3f992a0ae0&w=1380",
        description: "Boost your engine's power to the next level with our state-of-the-art turbocharger kit. Designed for performance enthusiasts and professional racers alike, this kit offers significant horsepower and torque improvements. It enables faster acceleration and better fuel efficiency while ensuring your engine remains responsive under high pressure. Perfect for those looking to enhance the overall driving experience with a reliable, high-performance upgrade.",
        category: "Engine",
    },
    {
        id: "2",
        name: "All-Season Tires",
        image: "https://img.freepik.com/free-photo/car-tires-showcased-inside-automobile-workshop_157027-4455.jpg?t=st=1729787753~exp=1729791353~hmac=289592db70dcfa2956c28813155282308ae10479cb272db3a6d420b9775a7cb0&w=2000",
        description: "Our premium all-season tires are engineered to provide exceptional performance in diverse weather conditions. Whether you're driving through rain, snow, or dry terrain, these tires ensure a smooth, comfortable, and safe ride. With an innovative tread pattern for enhanced grip, you'll experience reduced road noise and superior durability. These tires are ideal for those who need year-round dependability without sacrificing handling or ride comfort.",
        category: "Wheels",
    },
    {
        id: "3",
        name: "LED Headlights",
        image: "https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?uid=R170294197&ga=GA1.1.1879044262.1729354870&semt=ais_hybrid",
        description: "Upgrade your vehicle’s lighting with our high-efficiency LED headlights, designed to provide brighter illumination and lower power consumption. These headlights feature a sleek, modern design that not only improves nighttime visibility but also adds a stylish touch to your vehicle. Engineered for durability, they offer longer life compared to traditional halogen bulbs, making them a smart investment for safety and aesthetics.",
        category: "Lighting",
    },
    {
        id: "4",
        name: "Performance Air Filter",
        image: "https://img.freepik.com/free-photo/different-car-accessories-arrangement_23-2149030408.jpg?uid=R170294197&ga=GA1.1.1879044262.1729354870&semt=ais_hybrid",
        description: "Our performance air filter is designed to optimize airflow to your engine, enhancing its efficiency and power output. This high-flow air filter reduces restrictions, allowing your engine to breathe more freely, which leads to increased horsepower and acceleration. Constructed from durable materials, it ensures longevity while being easy to clean and reuse, making it an eco-friendly and cost-effective upgrade for any vehicle.",
        category: "Engine",
    },
    {
        id: "5",
        name: "Sport Exhaust System",
        image: "https://img.freepik.com/free-photo/new-car-pipes_144627-8956.jpg?uid=R170294197&ga=GA1.1.1879044262.1729354870&semt=ais_hybrid",
        description: "Enhance your car’s performance and sound with our premium sport exhaust system. Made from high-grade stainless steel, it’s engineered for maximum exhaust flow, improving engine performance by reducing backpressure. The result is a deeper, more aggressive exhaust note and improved horsepower. It’s the perfect addition for car enthusiasts looking to improve their vehicle’s sound, style, and performance.",
        category: "Exhaust",
    },
    {
        id: "6",
        name: "Racing Seats",
        image: "https://img.freepik.com/free-photo/cushion-modern-car_1339-5504.jpg?uid=R170294197&ga=GA1.1.1879044262.1729354870&semt=ais_hybrid",
        description: "Our racing seats offer the perfect combination of style, comfort, and safety. Designed for high-performance driving, they provide optimal support during both everyday use and intense track days. With superior padding and ergonomic design, these seats ensure long-lasting comfort. Made from lightweight materials, they also help reduce your vehicle's overall weight, contributing to better handling and performance.",
        category: "Interior",
    },
    {
        id: "7",
        name: "Carbon Fiber Hood",
        image: "https://img.freepik.com/free-photo/black-gray-texture-with-blurry-focus-background-darkening-around-edges-plastic-background-splash-screen-screen_166373-2846.jpg?uid=R170294197&ga=GA1.1.1879044262.1729354870&semt=ais_hybrid",
        description: "Upgrade your vehicle’s exterior and performance with our sleek, lightweight carbon fiber hood. This precision-engineered hood reduces overall vehicle weight, improving acceleration and handling, while also adding a stylish, aggressive look to your car. Whether you’re a professional racer or a weekend enthusiast, this hood delivers a perfect balance of aesthetics and performance.",
        category: "Exterior",
    },
    {
        id: "8",
        name: "High-Performance Brake Pads",
        image: "https://img.freepik.com/free-photo/car-repair-garage_1170-1497.jpg?t=st=1729787710~exp=1729791310~hmac=eed25ac1480b2a731b210855c9942586c36db555075b56ecfe070f039f7b00bc&w=2000",
        description: "When it comes to stopping power, our high-performance brake pads deliver. Crafted from advanced friction materials, these brake pads provide superior braking performance under extreme conditions. Whether you're navigating city streets or pushing your car on the track, you can rely on these brake pads for consistent, reliable performance. They are designed for minimal dust production and reduced noise, ensuring a smooth and quiet driving experience.",
        category: "Brakes",
    },
    {
        id: "9",
        name: "Alloy Wheels",
        image: "https://img.freepik.com/free-photo/close-up-metallic-car-wheel_23-2151113194.jpg?t=st=1729790278~exp=1729793878~hmac=b69c7a5a1692214bb2d3c550b52f9bd076eadeb24b66abee97530b732a879517&w=1380",
        description: "Our alloy wheels not only enhance your vehicle’s appearance but also improve its performance. Made from lightweight yet durable materials, they reduce unsprung weight, improving handling and acceleration. Available in a variety of sizes and finishes, these wheels can be customized to match your style. Designed for both performance and aesthetics, they are the ideal upgrade for car enthusiasts.",
        category: "Wheels",
    },
    {
        id: "10",
        name: "Performance Suspension Kit",
        image: "https://img.freepik.com/free-photo/blue-pads-wheel-car_114579-4034.jpg?t=st=1729790321~exp=1729793921~hmac=9a98469c4c0bace453822041770d2326a1f31a9a2b4e62eb89810ba83457e660&w=826",
        description: "Take your vehicle’s handling to the next level with our performance suspension kit. Engineered for superior handling, this kit improves ride quality and responsiveness by minimizing body roll and enhancing cornering stability. Perfect for both track enthusiasts and those looking to improve everyday driving dynamics, this suspension kit will give you the confidence to take on any road or race.",
        category: "Suspension",
    },
    {
        id: "11",
        name: "Cold Air Intake",
        image: "https://img.freepik.com/free-photo/close-up-technological-background_23-2148882654.jpg?t=st=1729790362~exp=1729793962~hmac=efaa651da94c4eed6f74618e7c0aff109a9105ec0a814075ea1f25d49d3d6c40&w=2000",
        description: "Improve your vehicle's engine efficiency with our cold air intake system. Designed to funnel cooler, denser air into your engine, this system increases both power and throttle response. The cooler air also helps to reduce the risk of engine overheating during high-performance driving. Constructed from high-quality materials, this intake is both durable and easy to install.",
        category: "Engine",
    },
    {
        id: "12",
        name: "High-Performance Radiator",
        image: "https://img.freepik.com/free-photo/car-engine_1373-182.jpg?t=st=1729790400~exp=1729794000~hmac=e7c80137c06ed6d4ed8be06b3236f5be35ca24c94853d03cb38400b0a6fbc5f4&w=996",
        description: "Keep your engine cool under extreme conditions with our high-performance radiator, designed for maximum cooling efficiency.",
        category: "Cooling",
    },
    {
        id: "13",
        name: "LED Tail Lights",
        image: "https://img.freepik.com/free-photo/rear-light-new-black-car_23-2147962984.jpg?t=st=1729790460~exp=1729794060~hmac=cbea2420fe13c0f3f6c3738694fb23cb0e2395784d7d8a94d7e204aaa05707cf&w=2000",
        description: "Enhance your vehicle's visibility and style with our LED tail lights, offering brighter and more efficient illumination.",
        category: "Lighting",
    },
    {
        id: "14",
        name: "Performance Brake Rotors",
        image: "https://img.freepik.com/free-photo/side-view-worker-repairing-car_23-2150171256.jpg?t=st=1729790488~exp=1729794088~hmac=92e4eb7556f203fc8ebf033af371f06d0acbf53697075316e2c4667b28c41770&w=2000",
        description: "Upgrade your braking system with our performance brake rotors, designed for improved stopping power and durability.",
        category: "Brakes",
    },
    {
        id: "15",
        name: "Custom Floor Mats",
        image: "https://img.freepik.com/free-photo/close-up-perforated-fabric_23-2149894431.jpg?t=st=1729790451~exp=1729794051~hmac=3c513554fcf3fdfd879a48b47539fd4010db5a0168b2cfaa99dc477b5bd57fca&w=2000",
        description: "Protect your vehicle's interior with our custom floor mats, designed to fit perfectly and provide superior protection.",
        category: "Interior",
    },
    {
        id: "16",
        name: "High-Flow Fuel Injectors",
        image: "https://img.freepik.com/free-photo/3d-rendering-hydraulic-elements_23-2149333339.jpg?t=st=1729790541~exp=1729794141~hmac=fcd736920e99fa13c107164d8335f5886f10066d385b3a6f376f2a742ad06c33&w=1800",
        description: "Increase your engine's fuel delivery and performance with our high-flow fuel injectors, designed for maximum efficiency.",
        category: "Engine",
    },
    {
        id: "17",
        name: "Carbon Fiber Spoiler",
        image: "https://img.freepik.com/free-photo/closeup-shot-exterior-details-modern-black-car_181624-25346.jpg?t=st=1729790563~exp=1729794163~hmac=9f70ecc299a7777d6f053423a063475bf6113f14c3bcba6de3c39d2af7983e56&w=2000",
        description: "Enhance your vehicle's aerodynamics and style with our carbon fiber spoiler, designed for both performance and aesthetics.",
        category: "Exterior",
    },
    {
        id: "18",
        name: "High-Performance Spark Plugs",
        image: "https://img.freepik.com/free-photo/different-car-accessories-composition_23-2149030438.jpg?t=st=1729790586~exp=1729794186~hmac=de1964dad131506ac1136ca4606ac9f5ee1d567597bc247374cdaffcd8b83a24&w=2000",
        description: "Improve your engine's ignition and performance with our high-performance spark plugs, designed for maximum efficiency.",
        category: "Engine",
    },
    {
        id: "19",
        name: "High-Performance Oil Filter",
        image: "https://img.freepik.com/free-photo/different-car-accessories-assortment_23-2149030432.jpg?uid=R170294197&ga=GA1.1.1879044262.1729354870&semt=ais_hybrid",
        description: "Ensure your engine runs smoothly with our high-performance oil filter, designed to remove contaminants and improve oil flow.",
        category: "Engine",
    },
    {
        id: "20",
        name: "Advanced GPS Navigation System",
        image: "https://img.freepik.com/free-photo/gps-system-smart-car_53876-98192.jpg?uid=R170294197&ga=GA1.1.1879044262.1729354870&semt=ais_hybrid",
        description: "Navigate with ease using our advanced GPS navigation system, featuring real-time traffic updates and turn-by-turn directions.",
        category: "Electronics",
    },
];











































// Do not modify below this line

function getProductById(id) {
    return products.find(product => product.id === id);
}

function getCategories() {
    const categories = products.map(product => product.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories.map(category => ({ categoryName: category }));
}

function getSimilarProducts(id) {
    const { category } = products.find(product => product.id === id);
    return products.filter(product => product.category === category && product.id !== id);
}

export default products;
export { getProductById, getCategories, getSimilarProducts };
