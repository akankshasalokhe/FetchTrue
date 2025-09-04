import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace with your actual backend API endpoint
    const backendUrl = process.env.BACKEND_URL || 'https://landing-page-yclw.vercel.app';
    const response = await fetch(`${backendUrl}/api/fservices`);
    
    if (!response.ok) {
      throw new Error(`Backend responded with status ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching services:', error);
    
    // Return fallback data
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch services',
      data: [
        {
          _id: "68b93fbb1fbe17b72d631eb6",
          title: "Franchise",
          mainImage: "https://ik.imagekit.io/hzyuadmua/fservices_images/contactform_prEpJmmwK.jpeg",
          videoLink: "https://www.youtube.com/embed/dRxAN8wLxIk",
          description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
          createdAt: "2025-09-04T07:28:59.196Z",
          updatedAt: "2025-09-04T07:28:59.196Z",
          __v: 0
        }
      ]
    });
  }
}