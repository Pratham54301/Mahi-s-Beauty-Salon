
export interface Service {
    title: string;
    description: string;
    price: string;
    image: string;
    aiHint: string;
}

export interface ServiceCategory {
    category: string;
    categoryTitle: string;
    categoryDescription: string;
    services: Service[];
}

export const servicesData: ServiceCategory[] = [
    {
        category: "Hair",
        categoryTitle: "Hair Care & Styling",
        categoryDescription: "Transform your tresses with our expert hair care services. Whether you're looking for a fresh cut, a vibrant new color, or a restorative treatment, our stylists are here to help you achieve the hair of your dreams.",
        services: [
            {
                title: "Women's Haircut",
                description: "A customized haircut designed by your stylist to fit your individual style and preferences.",
                price: "INR 1,500",
                image: "https://placehold.co/400x400.png",
                aiHint: "woman haircut"
            },
            {
                title: "Men's Haircut",
                description: "A classic or modern haircut and style for men, finished with a relaxing shampoo and scalp massage.",
                price: "INR 800",
                image: "https://placehold.co/400x400.png",
                aiHint: "man haircut"
            },
            {
                title: "Global Color",
                description: "A single process color application that is applied from roots to ends for a rich, uniform result.",
                price: "From 3,000",
                image: "https://placehold.co/400x400.png",
                aiHint: "hair coloring"
            },
            {
                title: "Highlights / Balayage",
                description: "From subtle to dramatic, our stylists use advanced techniques to create beautiful, multi-dimensional hair color.",
                price: "From 4,500",
                image: "https://placehold.co/400x400.png",
                aiHint: "balayage hair"
            },
            {
                title: "Keratin Treatment",
                description: "Smooth and straighten your hair, eliminating frizz and improving shine and manageability.",
                price: "From 6,000",
                image: "https://placehold.co/400x400.png",
                aiHint: "keratin treatment"
            },
             {
                title: "Hair Spa",
                description: "A rejuvenating treatment to nourish your hair and scalp, leaving your locks soft, shiny, and healthy.",
                price: "INR 2,000",
                image: "https://placehold.co/400x400.png",
                aiHint: "hair spa"
            },
        ]
    },
    {
        category: "Skin",
        categoryTitle: "Skin Care & Treatments",
        categoryDescription: "Reveal your natural radiance with our range of specialized skin treatments. From deep-cleansing facials to targeted therapies, we have the perfect solution for all your skin concerns.",
        services: [
            {
                title: "Signature Facial",
                description: "A customized facial to address your specific skin concerns, from acne to aging, leaving you with a radiant glow.",
                price: "INR 2,500",
                image: "https://placehold.co/400x400.png",
                aiHint: "facial treatment"
            },
            {
                title: "Vitamin C Brightening Facial",
                description: "An antioxidant-rich treatment that helps to brighten the skin, reduce pigmentation, and improve skin clarity.",
                price: "INR 3,000",
                image: "https://placehold.co/400x400.png",
                aiHint: "skincare"
            },
             {
                title: "Anti-Aging Facial",
                description: "This facial targets fine lines, wrinkles, and loss of firmness to reveal a more youthful complexion.",
                price: "INR 3,500",
                image: "https://placehold.co/400x400.png",
                aiHint: "woman mature skin"
            },
            {
                title: "Full Body Waxing",
                description: "Experience smooth, hair-free skin with our professional and hygienic waxing services.",
                price: "INR 2,800",
                image: "https://placehold.co/400x400.png",
                aiHint: "body waxing"
            },
        ]
    },
    {
        category: "Hands & Feet",
        categoryTitle: "Manicures & Pedicures",
        categoryDescription: "Indulge in our luxurious hand and feet treatments. Our manicures and pedicures are designed to pamper and beautify, leaving you feeling refreshed and polished.",
        services: [
            {
                title: "Classic Manicure",
                description: "A traditional manicure including nail shaping, cuticle care, a relaxing hand massage, and polish application.",
                price: "INR 700",
                image: "https://placehold.co/400x400.png",
                aiHint: "manicure"
            },
            {
                title: "Gel Pedicure",
                description: "Enjoy a long-lasting, chip-free polish with our gel pedicure, including a foot soak, exfoliation, and massage.",
                price: "INR 1,200",
                image: "https://placehold.co/400x400.png",
                aiHint: "pedicure"
            },
            {
                title: "Nail Art",
                description: "Express your personality with our creative nail art designs, from simple elegance to intricate patterns.",
                price: "From 500",
                image: "https://placehold.co/400x400.png",
                aiHint: "nail art"
            },
        ]
    },
    {
        category: "Bridal",
        categoryTitle: "Bridal & Special Occasions",
        categoryDescription: "Look and feel your absolute best on your most memorable days. We offer bespoke packages for brides, grooms, and special events, ensuring you shine.",
        services: [
            {
                title: "Bridal Makeup",
                description: "Our signature bridal makeup service ensures you look stunning on your special day. Includes a trial session.",
                price: "Contact Us",
                image: "https://placehold.co/400x400.png",
                aiHint: "indian bride"
            },
            {
                title: "Pre-Bridal Package",
                description: "A comprehensive package of skin and hair treatments to get you glowing and ready for your wedding.",
                price: "From 15,000",
                image: "https://placehold.co/400x400.png",
                aiHint: "bride skincare"
            },
            {
                title: "Groom's Package",
                description: "A complete grooming package for the groom, including a haircut, facial, manicure, and pedicure.",
                price: "From 5,000",
                image: "https://placehold.co/400x400.png",
                aiHint: "indian groom"
            },
        ]
    },
]
