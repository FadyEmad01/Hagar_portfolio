import { Post } from "@/types/work";


export const posts: Post[] = [
  {
    id: "1",
    title: "A REIMAGINED WEST 14TH STREET",
    slug: "a-reimagined-west-14th-street",
    excerpt:
      "This spring, a more dynamic, pedestrian-centered West 14th Street debuted between Ninth and Tenth Avenues in the Meatpacking District.",
    content: `This spring, a more dynamic, pedestrian-centered West 14th Street debuted between Ninth and Tenth Avenues in the Meatpacking District. The West 14th Street Promenade created a "third space" for community enjoyment while enhancing connections to Hudson River Park and enlivening the retail corridor.

Through the repurposing of the curblane and transformation of the wide, two-way underutilized roadbed along West 14th Street between Ninth and Tenth Avenues, locals and visitors alike now get to experience five new gathering areas, lush landscaping, and in the future, opportunities for public art and small concessions, enhancing the pedestrian experience.

The Meatpacking District Management Association (Meatpacking BID) is lead the project in partnership with design partners Street Plans and TYLin (formerly Sam Schwartz Engineering), with support from the New York City Department of Transportation (NYC DOT), and Manhattan Community Boards 2 and 4, as well as local elected officials.`,
    author: "Meatpacking BID",
    publishedDate: "07.01.2025",
    heroImage: "/images/hagar.png",
    // heroVideo: "/videos/vid-2.mp4", // Example video URL
    media: [
      // { type: "image", url: "https://i.pinimg.com/736x/7a/fa/4a/7afa4a2a1cb77a6a43ea3271facd28bc.jpg" },
      { type: "video", url: "/videos/vid-1.mp4" },
      { type: "image", url: "https://i.pinimg.com/736x/84/f1/4d/84f14d015426ffb8d8c2c92c8944ad51.jpg" },
    ],
    tags: ["WEST 14TH STREET PROMENADE", "🧿"],
    // backgroundColor: "bg-blue-400",
    backgroundColor: "#D7D7D7",
    cardType: "post",
    size: "small",
    externalUrl: "https://www.meatpacking-district.com/west-14th-street-promenade",
    socialLinks: [
      {
        label: "VISIT ON INSTAGRAM",
        url: "https://www.instagram.com/meatpackingny/",
        platform: "instagram",
      },
      {
        label: "VISIT WEBSITE",
        url: "https://www.meatpacking-district.com/west-14th-street-promenade",
        platform: "website",
      },
      {
        label: "VISIT WEBSITE",
        url: "https://www.meatpacking-district.com/west-14th-street-promenade",
        platform: "behance",
      },
      {
        label: "VISIT WEBSITE",
        url: "https://www.meatpacking-district.com/west-14th-street-promenade",
        platform: "linkedin",
      },
      {
        label: "VISIT WEBSITE",
        url: "https://www.meatpacking-district.com/west-14th-street-promenade",
        platform: "pinterest",
      },
      {
        label: "VISIT WEBSITE",
        url: "https://www.meatpacking-district.com/west-14th-street-promenade",
        platform: "tiktok",
      },
      {
        label: "VISIT WEBSITE",
        url: "https://www.meatpacking-district.com/west-14th-street-promenade",
        platform: "twitter",
      },
      {
        label: "VISIT WEBSITE",
        url: "https://www.meatpacking-district.com/west-14th-street-promenade",
        platform: "other",
      },
    ],
  },
  {
    id: "2",
    title: "Step Into Hopper",
    slug: "step-into-hopper",
    excerpt: "During West Side Fest",
    content: `STEP INTO HOPPER
In partnership with the Whitney Museum, we invite you to an immersive experience and to "Step into Hopper." This program brings 3-D recreations of Edward Hopper's paintings to life, designed for today's visitors by Theresa Rivera Design, allowing you to step inside and pose within these paintings.

From July 11 - 13, in celebration of West Side Fest and Hopper's 143rd birthday, you can explore life-size recreations of his iconic works: Nighthawks, Soir Bleu, and Early Sunday Morning. The Whitney Museum is home to the largest collection of Hopper work.

• Nighthawks - Take a seat inside Hopper's iconic diner scene
• Soir Bleu - Transporting visitors into Hopper's introspective take on French café culture. Tillie the Clown will be present at select times on Friday, July 11, Saturday, July 12, and Sunday, July 13 to set the scene.
• Early Sunday Morning - Step off the bustling streets of present-day New York City and into the stillness of this portrait of Seventh Avenue in the 1930s.

See key Hopper works and other icons from the Whitney Collection in the new monumental collection show, "Untitled", (America), now on view.`,
    author: "Meatpacking BID",
    publishedDate: "06.25.2025",
    heroImage: "https://i.pinimg.com/1200x/05/4e/ad/054eadd17660e9ee7fe2579ed4e1e4ee.jpg",
    images: ["https://i.pinimg.com/1200x/05/4e/ad/054eadd17660e9ee7fe2579ed4e1e4ee.jpg", "/placeholder.svg?height=400&width=400"],
    videos: ["/placeholder.mp4"],
    tags: ["Hopper", "STEP INTO HOPPER"],
    // backgroundColor: "bg-sky-200",
    backgroundColor: "#FFB8E0",
    cardType: "post",
    size: "large",
    eventInfo: {
      when: "Friday, July 11 - Sunday, July 13 The installations will be open to the public starting at 10 am on the 11th",
      where: "The West 14th Street Promenade + Gansevoort Landing",
    },
    externalUrl: "https://www.instagram.com/p/C9nu8shu2rh/",
    socialLinks: [
      {
        label: "LOOK AT LAST YEAR",
        url: "https://www.instagram.com/p/C9nu8shu2rh/",
      },
    ],
  },
  {
    id: "3",
    socialHandle: "@Video",
    title: "Step Hopper",
    slug: "step-hopper",
    excerpt: "During West Side Fest",
    author: "Meatpacking BID",
    publishedDate: "06.25.2025",
    heroImage: "https://i.pinimg.com/736x/84/f1/4d/84f14d015426ffb8d8c2c92c8944ad51.jpg",
    heroVideo: "/videos/vid-1.mp4",
    tags: ["Hopper", "STEP INTO HOPPER"],
    // backgroundColor: "bg-sky-200",
    backgroundColor: "",
    cardType: "social",
    size: "small",
    externalUrl: "https://www.instagram.com/p/C9nu8shu2rh/",
    socialLinks: [
      {
        label: "LOOK AT LAST YEAR",
        url: "https://www.instagram.com/p/C9nu8shu2rh/",
      },
    ],
  },
  {
    author:"8",
    backgroundColor:"8",
    id:"8",
    publishedDate:"",
    tags:[],
    title:"",
    size:"large",
    cardType:"post",
    heroImage:"",
    slug:"8"
  },

  {
    id: "5",
    title: "People of Meatpacking: Judy Ong",
    content: `STEP INTO HOPPER
In partnership with the Whitney Museum, we invite you to an immersive experience and to "Step into Hopper." This program brings 3-D recreations of Edward Hopper's paintings to life, designed for today's visitors by Theresa Rivera Design, allowing you to step inside and pose within these paintings.

From July 11 - 13, in celebration of West Side Fest and Hopper's 143rd birthday, you can explore life-size recreations of his iconic works: Nighthawks, Soir Bleu, and Early Sunday Morning. The Whitney Museum is home to the largest collection of Hopper work.

• Nighthawks - Take a seat inside Hopper's iconic diner scene
• Soir Bleu - Transporting visitors into Hopper's introspective take on French café culture. Tillie the Clown will be present at select times on Friday, July 11, Saturday, July 12, and Sunday, July 13 to set the scene.
• Early Sunday Morning - Step off the bustling streets of present-day New York City and into the stillness of this portrait of Seventh Avenue in the 1930s.

See key Hopper works and other icons from the Whitney Collection in the new monumental collection show, "Untitled", (America), now on view.`,
    slug: "people-of-meatpacking-judy-ong",
    author: "Meatpacking BID",
    publishedDate: "05.15.2024",
    heroImage: "/placeholder.svg?height=400&width=400",
    tags: ["AAPIHM", "COMMUNITY"],
    backgroundColor: "bg-amber-600",
    cardType: "post",
    size: "small",
    eventInfo: {
      when: "Friday, July 11 - Sunday, July 13 The installations will be open to the public starting at 10 am on the 11th",
      where: "The West 14th Street Promenade + Gansevoort Landing",
    },
    externalUrl: "https://www.instagram.com/p/C9nu8shu2rh/",
    socialLinks: [
      {
        label: "LOOK AT LAST YEAR",
        url: "https://www.instagram.com/p/C9nu8shu2rh/",
      },
    ],
  },
]
