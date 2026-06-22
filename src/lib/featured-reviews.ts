/**
 * Curated, real 5-star Google reviews (verified on the Google Business Profile).
 * Names shortened to first name + initial for privacy. Quotes are genuine
 * excerpts focused on universal service quality (ATS, professionalism,
 * communication) — no client location is claimed.
 * Source: https://maps.app.goo.gl/7osd53bHxoc9jQwaA  (5.0 ★, 69 reviews)
 */

export type FeaturedReview = {
  name: string;
  rating: number;
  quote: string;
};

export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/7osd53bHxoc9jQwaA";
export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEW_COUNT = 69;

export const featuredReviews: FeaturedReview[] = [
  {
    name: "Akash R.",
    rating: 5,
    quote:
      "He rewrote my CV in a highly professional and ATS-friendly format, and the final version looked far better than my old one. His communication was excellent throughout the process, and I highly recommend his services.",
  },
  {
    name: "Shehan D.",
    rating: 5,
    quote:
      "He carefully reviewed my experience and transformed my documents into a clear, modern, and professional format. I was especially impressed by his attention to detail and quick communication.",
  },
  {
    name: "Dilmi N.",
    rating: 5,
    quote:
      "He took the time to understand my background and career goals. My CV is now much more polished, ATS-friendly, and professionally written. I highly recommend his service to anyone improving their job applications.",
  },
  {
    name: "Sahanya W.",
    rating: 5,
    quote:
      "My CV was transformed into a modern, ATS-friendly document that properly reflected my skills and achievements. His service was prompt, professional, and reliable.",
  },
  {
    name: "Lakshan J.",
    rating: 5,
    quote:
      "A strong understanding of how to optimize resumes with the right keywords and structure to pass ATS systems. His work is professional, clear, and tailored to individual needs.",
  },
  {
    name: "Kasunika W.",
    rating: 5,
    quote:
      "He delivered high-quality work, communicated clearly throughout the process, and made sure my documents were aligned with current recruitment standards.",
  },
  {
    name: "Reshalyavi K.",
    rating: 5,
    quote:
      "It looks professional, well-organized, and exactly what I needed. You were very helpful, responsive, and completed everything on time. I highly recommend your service to anyone looking for a quality CV.",
  },
  {
    name: "Praneeth A.",
    rating: 5,
    quote:
      "He communicated clearly, understood my career background, and delivered a CV and LinkedIn profile that looked far more professional than before. Highly recommended.",
  },
  {
    name: "Davinda G.",
    rating: 5,
    quote:
      "Professional, reliable, and committed to creating a strong final result. My CV now looks much more organized, achievement-focused, and ATS-friendly. I feel more confident applying for jobs now.",
  },
];
