export interface Property {
    id: number;
    title: string;
    location: string;
    city?: string;
    category?: string;
    strategy?: string;
    image: string;
    images?: string[];
    yield: string;
    appreciation: string;
    funded: number;
    minInvest: string;
    tags: string[];
    price: string;
    targetReturn: string;
}

export const PROPERTIES: Property[] = [
    {
        id: 1,
        title: "The Summit Plaza",
        location: "BKC, Mumbai",
        city: "Mumbai",
        category: "Office",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2069&auto=format&fit=crop"
        ],
        yield: "8.5%",
        appreciation: "5.2%",
        funded: 65,
        minInvest: "₹25,000",
        tags: ["Grade A Office", "Leased"],
        price: "₹ 85 Cr",
        targetReturn: "13.7%"
    },
    {
        id: 2,
        title: "Metro Logistics Hub",
        location: "Bhiwandi, Thane",
        city: "Thane",
        category: "Logistics",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
        ],
        yield: "9.1%",
        appreciation: "6.0%",
        funded: 82,
        minInvest: "₹25,000",
        tags: ["Warehousing", "High Yield"],
        price: "₹ 120 Cr",
        targetReturn: "15.1%"
    },
    {
        id: 3,
        title: "Tech Park Meridian",
        location: "Whitefield, Bangalore",
        city: "Bangalore",
        category: "Office",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
        ],
        yield: "7.8%",
        appreciation: "8.5%",
        funded: 45,
        minInvest: "₹25,000",
        tags: ["IT SEZ", "Growth"],
        price: "₹ 210 Cr",
        targetReturn: "16.3%"
    },
    {
        id: 4,
        title: "Cyber City Tower C",
        location: "Gurgaon, NCR",
        city: "Gurgaon",
        category: "Office",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?q=80&w=2069&auto=format&fit=crop"
        ],
        yield: "8.2%",
        appreciation: "5.5%",
        funded: 12,
        minInvest: "₹25,000",
        tags: ["Grade A Office", "Pre-Leased"],
        price: "₹ 340 Cr",
        targetReturn: "13.7%"
    },
    {
        id: 5,
        title: "Chennai Logistics Park",
        location: "Oragadam, Chennai",
        city: "Chennai",
        category: "Logistics",
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?q=80&w=2070&auto=format&fit=crop"
        ],
        yield: "9.4%",
        appreciation: "4.8%",
        funded: 35,
        minInvest: "₹50,000",
        tags: ["Industrial", "Multi-Tenant"],
        price: "₹ 65 Cr",
        targetReturn: "14.2%"
    },
    {
        id: 6,
        title: "Genome Valley Bio-Center",
        location: "Shamirpet, Hyderabad",
        city: "Hyderabad",
        category: "Specialty",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
        ],
        yield: "8.8%",
        appreciation: "7.2%",
        funded: 91,
        minInvest: "₹25,000",
        tags: ["Pharma SEZ", "Stable Income"],
        price: "₹ 110 Cr",
        targetReturn: "16.0%"
    }
];

export const FUNDS: Property[] = [
    {
        id: 101,
        title: "India Office Fund I",
        location: "Pan India",
        strategy: "Grade A Commercial",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?q=80&w=2070&auto=format&fit=crop"
        ],
        yield: "14-16% IRR",
        appreciation: "N/A",
        funded: 75,
        minInvest: "₹50,000",
        tags: ["High Growth", "Development"],
        price: "₹ 45 Cr Target",
        targetReturn: "15.0%"
    },
    {
        id: 102,
        title: "Core Income Fund II",
        location: "Primary Markets",
        strategy: "Pre-Leased Commercial",
        image: "https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
        ],
        yield: "11-13% IRR",
        appreciation: "N/A",
        funded: 40,
        minInvest: "₹25,000",
        tags: ["Stable Income", "Low Risk"],
        price: "₹ 120 Cr Target",
        targetReturn: "12.0%"
    },
];

export const ALL_INVESTMENTS = [...PROPERTIES, ...FUNDS];
