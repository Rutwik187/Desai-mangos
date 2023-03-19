import mango1 from "./img/mango1.png";
import mango2 from "./img/mango2.png"
import mango3 from "./img/mango3.png";
import mango4 from "./img/mango4.png";
import mango5 from "./img/mango5.png";
import mango6 from "./img/amrut-pairi-mango.png"

import feature1 from "./img/sinceHero.svg"
import feature2 from "./img/feature2.png"
import feature3 from "./img/feature3.png"
import feature4 from "./img/feature1.png"

import appricationLetter1 from "./img/appricationLetter1.jpeg"
import appricationLetter2 from "./img/appricationLetter2.jpeg"
import appricationLetter3 from "./img/appricationLetter3.jpeg"
import appricationLetter4 from "./img/appricationLetter4.jpeg"
import appricationLetter5 from "./img/appricationLetter5.jpeg"

import celeb1 from "./img/devendra.jpeg"
import celeb2 from "./img/someone.jpeg"
import celeb3 from "./img/someone2.jpeg"
import celeb4 from "./img/chandrakant-patil.jpeg"
import celeb5 from "./img/dhoni.jpeg"
import celeb6 from "./img/amitabhBachan.jpeg"
import celeb7 from "./img/gadkari.jpeg"
import celeb8 from "./img/raj-thakre.jpeg"
import celeb9 from "./img/atal-bihari-vajpai.jpeg"
import celeb10 from "./img/former-cm.jpeg"

import socialWork1 from "./img/socialWork1.jpg"

import socialWork2 from "./img/socialWork2.jpeg"
import socialWork3 from "./img/socialWork3.jpeg"
import socialWork4 from "./img/socialWork4.jpeg"
import socialWork5 from "./img/socialWork5.jpeg"

import maleAvatar1 from "./img/testimonial-avatar1.png"
import maleAvatar2 from "./img/testimonial-avatar2.png"
import maleAvatar3 from "./img/testimonial-avatar3.png"
import maleAvatar4 from "./img/testimonial-avatar4.png"
import femaleAvatar from "./img/femaleAvatar1.svg"

import HomeGalleryImage1 from "./img/homeGallery1.jpg"
import HomeGalleryImage2 from "./img/homeGallery2.jpg"
import HomeGalleryImage3 from "./img/homeGallery3.jpg"
import HomeGalleryImage4 from "./img/homeGallery4.jpg"
import HomeGalleryImage5 from "./img/homeGallery5.jpg"
import HomeGalleryImage6 from "./img/karach-lisence.jpeg"


export const heroData = [
    {
        id: 1,
        name: "Devgad",
        imageSrc: mango1,
    },
    {
        id: 2,
        name: "Ratnagiri",
        imageSrc: mango3,
    },
    {
        id: 3,
        name: "Pawas",
        imageSrc: mango5,
    },
    {
        id: 4,
        name: "Amrut Pairi",
        imageSrc: mango6,
    },
];

export const featuresData = [
    {
        img: feature1,
        title: 'Trust Worthy',
        desc: 'Legacy since 1932'
    },
    {
        img: feature2,
        title: 'Safety In Place',
        desc: 'Covid ready services'
    },
    {
        img: feature3,
        title: 'Hand Picked',
        desc: 'Best quality only'
    },
    {
        img: feature4,
        title: 'Express Delivery',
        desc: 'Express delivery all over India'
    }
]

export const productData = [
    {
        title: "Devgad",
        img: mango1,
        linkTo: "/devgad"
    },

    {
        title: "Ratnagiri",
        img: mango3,
        linkTo: "/ratnagari"
    },
    {
        title: "Pawas",
        img: mango5,
        linkTo: "/pawas"
    },
    {
        title: "Amrut Pairi",
        img: mango6,
        linkTo: "/amrut-pairi"
    },

]

export const celebsTestimonials = [
    {
        desc: 'We have grown over the years and take pride in offering our products nationwide. One highlight was gifting our finest mangoes to actor Amitabh Bachchan. He graciously accepted our gift and sent a letter of thanks, expressing his appreciation for the kind gesture and delicious mangoes. His gratitude reflects his humility.',
        name: "Shi. Amitabh Bachchan",
        profession: "Actor and Politician",
        img: celeb6
    },
    {
        desc: 'We had the pleasure of meeting Former Deputy Chief Minister of Maharashtra R R Patil and Shri Sunil Tatkare, and gifting him a basket of our finest mangoes. It was an honor to share our passion for mangoes with such a distinguished individual, and we were thrilled with his gracious acceptance of our gift.',
        name: "Shri. R R Pati and Shri. Sunil Tatkare",
        profession: "Former Deputy Chief Minister of Maharashtra",
        img: celeb10
    },

    {
        desc: 'We take pride in growing sustainable and ethical mangoes. Recently, we gifted a basket of our best mangoes to Nitin Gadkari, the Union Minister for Road Transport, Highways, and Shipping, who appreciated our commitment to preserving and fulfilling the demand for mango. His letter of appreciation acknowledges our efforts to make a positive impact through social and cultural work. It is an honor to have received such recognition.',
        name: "Shri. Nitin Gadkari",
        profession: "Road and Transport Minister, Government of India",
        img: celeb7
    },
    {
        desc: 'We recently had the pleasure of meeting Ms. Dhoni, the great cricketer, and giving him a basket of our best mangoes. It was a privilege to discuss our love of mangoes with such a distinguished person, and we were overjoyed by his kind reception of our present.',
        name: "M.S Dhoni",
        profession: "Cricketer",
        img: celeb5
    },
    {
        desc: 'Desaibandhu Ambewale, a renowned mango business in Pune, had the pleasure of meeting and sharing their passion for mangoes with Maharashtras Deputy Chief Minister, Devendra Fadnavis. Hon. Fadnavis later wrote a letter commending the companys social welfare activities, highlighting the importance of businesses investing in their communities. His letter is a testimony to Desaibandhu Ambewale commendable efforts towards social welfare.',
        name: "Devendra Fadnavis",
        profession: "Politician",
        img: celeb1
    },
    {
        desc: 'We had the pleasure of meeting the honorable Minister of Higher and Technical Education, Textile Industry and Parliamentary Works - Maharashtra, Hon. Chandrakant Dada Patil, and gifting him a basket of our finest mangoes. It was an honor to share our passion for mangoes with such a distinguished individual, and we were thrilled with his gracious acceptance of our gift.',
        name: "Chandrakant Dada Patil",
        profession: "Politician",
        img: celeb4
    },
    {
        desc: 'Desai Bandhu is committed to providing high-quality mangoes using sustainable and ethical practices. We recently gifted Raj Thackeray, the founding chairperson of MNS, a box of our finest mangoes, which he graciously accepted. It was an honor to share our passion for mangoes with him.',
        name: "Shri. Raj Thakery",
        profession: "Politician",
        img: celeb8
    },
    {
        desc: 'Hon. Ujjwal Nikam Sir, a renowned Indian special public prosecutor, was one of the honourable people we had the pleasure of meeting. Sharing our love of mangoes with such a prominent person was a pleasure, and we were touched by his kind reception of our present. ',
        name: "Ujjwal Nikam Sir",
        profession: "Indian Special Public Prosecutor",
        img: celeb2

    },
]

export const homeImageGallery = [
    {
        img: HomeGalleryImage1
    },
    {
        img: HomeGalleryImage2
    },
    {
        img: HomeGalleryImage3
    },
    {
        img: HomeGalleryImage4
    },
    {
        img: HomeGalleryImage5
    }

]

export const galleryImages = [
    { id: 1, url: appricationLetter4, alt: "Image 1", desc: "Application Letter from Inira Gandhi Former Prime Minister Of India" },
    { id: 2, url: appricationLetter2, alt: "Image 2", desc: "Letter from Amitabh Bachchan" },
    { id: 3, url: appricationLetter3, alt: "Image 3", desc: "Letter from Nitin Gadkari, Road and Transport Department Of India" },
    { id: 4, url: appricationLetter1, alt: "Image 1", desc: "Letter from Chief Minister Of Maharashtra" },
    { id: 5, url: appricationLetter5, alt: "Image 3", desc: "Certificate from All India Mango Show" },
];

export const celebs = [
    { img: celeb9 },
    { img: celeb1 },
    { img: celeb2 },
    { img: celeb3 },
    { img: celeb4 }
]

export const socialWork = [
    { img: socialWork1 },
    { img: socialWork2 },
    { img: socialWork3 },
    { img: socialWork4 },
    { img: socialWork5 }

]

export const customerReviews = [
    {
        desc: "Desai Bandhu mangoes are hands down the best mangoes I have ever tasted! The quality is unparalleled and the taste is simply amazing. Every time I bite into a Desai Bandhu mango, I feel like I'm transported to a tropical paradise. I highly recommend Desaibandhu to anyone looking for high-quality, delicious mangoes.",
        name: "Manoj P.",
        img: maleAvatar1
    },

    {

        desc: "Desai Bandhu has changed the way I think about mangoes. Before trying their mangoes, I thought all mangoes tasted the same. But after trying Desai Bandhu's mangoes, I realized that there is a world of difference in taste and quality. Their mangoes are simply out of this world - I can't get enough of them!",
        name: "Rakesh M.",
        img: maleAvatar2

    },
    {
        desc: "I recently ordered a box of mangoes from Desai Bandhu, and I have to say, I was blown away by the quality. The mangoes were perfectly ripe, juicy, and bursting with flavor. It's clear that Desaibandhu takes pride in what they do, and it shows in the quality of their product. I will definitely be ordering from them again!",
        name: "Vikrant T.",
        img: maleAvatar3
    },
    {
        desc: "I've been buying mangoes from Desai Bandhu for several years now, and I have never been disappointed. The mangoes are always fresh, juicy, and bursting with flavor. The customer service is also top-notch. I wouldn't go anywhere else for my mango fix!",
        name: "Sushma D.",
        img: femaleAvatar
    },
    {
        desc: "Desai Bandhu has become my go-to source for fresh, delicious mangoes. The mangoes are always top-quality, and the service is always friendly and efficient. I've recommended Desaibandhu to all my friends and family, and I will continue to do so. If you're a mango lover, you owe it to yourself to try Desai Bandhu's mangoes!",
        name: "Ravindra S.",
        img: maleAvatar4
    }
]