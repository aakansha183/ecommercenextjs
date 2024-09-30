import { TestimonialsIf } from "@/Utils/Interfaces/InterfaceTestimonials";
import { NextResponse } from "next/server";

export const testimonials :TestimonialsIf[] =[
    {
      name: 'Sarah M.',
      text: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.',
    },
    {
      name: 'Alex K.',
      text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    },
    {
      name: 'James L.',
      text: 'As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.',
    },
    {
      name: 'Mona R.',
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      name: 'Liam N.',
      text: 'I was skeptical about shopping online for clothes, but Shop.co has completely changed my mind. Their products are top-notch, and their service is exceptional.',
    }
  ];
   
export async function GET() {
    return NextResponse.json(testimonials)
}