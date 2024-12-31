import Instructor1 from "../../assets/Courses/Instructor1.png" 
import Instructor2 from "../../assets/Courses/Instructor2.png" 
import Instructor3 from "../../assets/Courses/Instructor3.png" 
import Instructor4 from "../../assets/Courses/Instructor4.png" 

const TopInstructor = () => {
  const instructors = [
    {
      id: 1,
      name: "Theresa Webb",
      role: "Platform Support Analyst Lead",
      institution: "Former co-founder of Garamond. Early staff at Spotify and Churchill.",
      image: Instructor1,
      social: { twitter: "#", linkedin: "#" }
    },
    {
      id: 2,
      name: "Courtney Henry",
      role: "Design, Undergraduate Analytics and Planning",
      institution: "Lead engineering teams at Figma, Birds, and Protocol Labs.",
      image: Instructor2,
      social: { twitter: "#", linkedin: "#" }
    },
    {
      id: 3,
      name: "Albert Flores",
      role: "Former PM for Linear, Lambda School, and Git Deck",
      institution: "Lead engineering teams at Figma, Birds, and Protocol Labs.",
      image: Instructor3,
      social: { twitter: "#", linkedin: "#" }
    },
    {
      id: 4,
      name: "Marvin McKinney",
      role: "Co-op & Internships Programs & Operations Manager",
      institution: "Former frontend dev for Linear, CondeNet, and Postscript",
      image: Instructor4,
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="max-w-7xl px-4 mx-auto text-left">
          <h2 className="text-4xl font-bold text-yellow-500">TOP</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">
            INSTRUCTORS
          </h3>
          <p className="mt-4 text-gray-500 text-lg">
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollicitudin.
          </p>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="border border-gray-200 rounded-lg p-6 text-center"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold mb-2">{instructor.name}</h4>
              <p className="text-yellow-500 text-sm mb-2">{instructor.role}</p>
              <p className="text-gray-500 text-sm mb-4">{instructor.institution}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={instructor.social.twitter}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href={instructor.social.linkedin}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Meet the Heroes</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            On Weekend UX, instructors from all over the world instruct millions of students. We
            offer the knowledge and abilities.
          </p>
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors">
            READ MORE
          </button>
        </div>
        </div>
    </section>
  );
};

export default TopInstructor;

